import type { PsychiatryCourse } from "./types";

/**
 * CONDUCT DISORDERS — canonical Psychiatry course
 * (migration batch 12, Group L — child & adolescent psychiatry).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/conduct-disorder.md — untouched foundation),
 * re-researched against current guidance (the DSM-5-TR/ICD-11 band
 * logic and the limited-prosocial-emotions specifier, the
 * Patterson-Dodge-Blair-Frick mechanism lineages, the Henggeler
 * multisystemic trials and the Cochrane-informed boot-camp harm
 * reviews, the Juvenile Justice Act 2015 Indian layer) with
 * per-claim provenance.
 *
 * Drug routes: none of the agents this field actually uses has a
 * KYP drug lesson — stimulants/atomoxetine for the ADHD ignition
 * (the best-evidenced pharmacological route to less aggression),
 * risperidone's short-term dysregulation role, the class-level
 * SSRI anxiety rider and the case-level melatonin; drugLinks is
 * empty and the real routes are recorded in contentGaps, never
 * invented.
 */
export const conductDisorderCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "conduct-disorder",
  title: "Conduct Disorders",
  shortName: "CD",
  kind: "disorder",
  category: "Child & Adolescent Psychiatry",
  groupLetter: "L",
  groupName: "Child & adolescent psychiatry",
  learningPath: ["Psychiatry", "Child & Adolescent Psychiatry", "Conduct Disorders"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "36 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "ODD defies, CD violates: the empathy specifier that changes the plan",

  summary:
    "Conduct disorder is aggression, destruction, deceit-theft or serious rule violation, the rung above oppositional defiant disorder. Parent management training is first-line, treating comorbid ADHD reduces aggression, and the limited prosocial emotions specifier demands longer, more specialised plans.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Distinguish ODD from CD on the single axis that matters (violation of others' rights and aggression versus defiance alone) and recite the ODD-to-CD progression risk stack.",
    "Apply the DSM-5/ICD-11 symptom-band logic (aggression, destruction, deceit-theft, rule violation) with the 12/6-month duration gates for CD and the 4-symptom/6-month gate for ODD.",
    "Use the two prognostic splits (childhood- versus adolescent-onset, and the limited-prosocial-emotions specifier) to set expectations and plan treatment intensity.",
    "Explain the four mechanism stories: coercive family cycles, hostile attribution bias, the fear-and-punishment learning curve of callous traits, and peer contagion.",
    "Deliver the treatment hierarchy honestly: parent management training and family-based multisystem approaches carry the evidence; boot camps and fear-based institutions are iatrogenic.",
    "Treat the comorbidities that drive the aggression (ADHD above all, then PTSD, substance use and mood) and know the small, defined role of medication.",
    "Navigate the Indian layer: the JJ Act 2015 pathway, observation homes, Childline 1098, school discipline, and the poverty and abuse realities that sit under many 'conduct' labels.",
    "Give families the long-run numbers without false hope or doom, and give every runaway girl an abuse screen before a behaviour label.",
  ],
  quickFacts: [
    { label: "The two rungs", value: "ODD defies, CD violates", detail: "ODD: anger, argument, defiance, vindictiveness; no aggression, theft or law violation (~3–6% of children, the 8–12 band). CD: the four symptom bands, ~2–4% of adolescents; boys dominating the childhood-onset form, girls the relational-aggression and runaway presentations" },
    { label: "The prognostic fork", value: "Childhood-onset versus adolescent-onset", detail: "Childhood-onset (before 10, with ADHD, impulsivity and harsh parenting stacked under it): the higher adult antisocial-personality risk; a third to half in severe cohorts. Adolescent-onset (peer-group and situation driven): mostly desists as the group and the stakes change" },
    { label: "The specifier", value: "Limited prosocial emotions", detail: "2 of 4 (lack of guilt, callous lack of empathy, unconcern about performance, shallow/deficient affect) established from multiple sources over time, never one sulky interview; it deepens the plan and lengthens the horizon" },
    { label: "The physiology classic", value: "Low resting heart rate", detail: "The classic psychophysiological correlate of fearlessness in callous traits: the viva favourite; an under-responsive threat system that punishment cannot teach" },
    { label: "The mechanism quartet", value: "Coercion, hostility, cold engine, street school", detail: "Patterson's coercive cycles, Dodge's hostile attribution bias, the Blair-lineage callous path, and deviant-peer contagion: the four stories that explain the behaviour and point to its levers" },
    { label: "The evidence tier", value: "PMT to multisystem to foster", detail: "Parent management training: 8–20 structured sessions, first-line for ODD and childhood CD; multisystemic therapy (a case-worker with 3–5 families, in the ecology, 3–5 months) and FFT (12–14 sessions) for moderate-to-severe CD; treatment foster care (Oregon model) when home cannot be made safe, and boot camps: evidence of harm" },
    { label: "The ignition", value: "ADHD in up to half", detail: "ADHD rides under up to half of childhood-onset CD, supplying the impulsivity; treating it (stimulants or atomoxetine) is the best-evidenced pharmacological route to reducing aggression; no drug treats CD itself" },
    { label: "The Indian spine", value: "JJ Act 2015 and Childline 1098", detail: "The Juvenile Justice (Care and Protection of Children) Act 2015 processes the child in conflict with law through the Juvenile Justice Board and observation homes with a rehabilitation mandate; the clinical approximation of the missing programmes is the case-manager model, and the metro's private packages (₹50,000–2,00,000+, approx 2026) deserve the 'name the model' question" },
  ],
  knowledgeGraph: [
    { label: "ADHD", type: "condition", href: "/psychiatry/adhd/", note: "The great companion: the ignition under up to half of childhood-onset CD, and the treatable driver whose treatment measurably reduces aggression" },
    { label: "Juvenile Offending", type: "condition", href: "/psychiatry/juvenile-offending/", note: "The JJ Act 2015 machinery the CD child meets when the clinic was never called: the risk factors overlap, and so must the services" },
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "The trauma engine under reactive, triggered, hypervigilant aggression: the screen every 'CD' child gets, boys included" },
    { label: "Autism Spectrum Disorder", type: "condition", href: "/psychiatry/autism/", note: "The rigidity crises that counterfeit calculation: rule violations from incomprehension, not intent; no predatory shape" },
    { label: "Volatile Substance Misuse", type: "condition", href: "/psychiatry/volatile-substance-misuse/", note: "The glue-first street tier that both mimics and deepens conduct presentations: screen every street-referred child" },
    { label: "Psychiatric Disorder & Offending", type: "condition", href: "/psychiatry/psychiatry-offending/", note: "The adult end of the trajectory this course exists to bend: the formulation logic, not the moral verdict" },
    { label: "Child Assessment & Epidemiology", type: "condition", href: "/psychiatry/child-assessment-epidemiology/", note: "The two-informant discipline and the developmental map this assessment runs on: home AND school, never one interview" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The threat system whose under-response writes the callous story: fear that never taught, distress that never inhibited" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The brakes: impulse control and the executive machinery the ADHD ignition rides; low verbal ability leaves fists where words should exit" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The reward-dominant decision style's currency, and the target of the stimulant tier that treats the ADHD driver" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Four mechanism stories carry conduct disorder, and each one points at a treatment lever. The coercive dance: the parent commands, the child refuses, the parent commands louder, the child escalates, the parent explodes or gives in, and both are rewarded; the child who screams loudest makes the parent quit, the parent who hits hardest buys five minutes of peace; the dance trains itself over a thousand evenings, and parent management training works by changing the STEPS, not the dancers' characters. The hostile lens: for a subset of these children an ambiguous corridor bump arrives pre-labelled as an insult; the threat-detector set too hot, aggression feeling like self-defence from the inside; the child who entered school with language delay and slapped instead of spoke built this lens through a thousand conflicts that began as word-failures, which is why treating ADHD, language disorder and learning disorders early is real conduct prevention. The cold engine: some children arrive with a muted alarm system; punishment does not sting, fear does not teach, other children's distress does not inhibit; their aggression is instrumental (to GET things), cool, planned and guilt-free, tied developmentally to an under-responsive threat system; anger teaches them nothing, predictability does. The street school: for the street and observation-home child, 'conduct' is partly a curriculum. An economy where aggression is the résumé, exploitation the salary and trust the liability; healing the behaviour without changing the economy fails, which is why the multisystem programmes rebuild family, school, peers and livelihood together. The honest verdict on the whole model: the coercion and peer-contagion stories are among the best-replicated findings in developmental psychology; the callous-trait neuroscience is strong and still refining; none of it is a moral verdict.",
    steps: [
      "The coercive dance: harsh command, refusal, escalation, parental explosion or capitulation, both sides reinforced; the escalation window itself becomes the trained behaviour, over a thousand evenings.",
      "The treatment insight that follows: parent management training teaches the parent to reward the FIRST compliance (micro, immediate), ignore the escalation window, and deliver short consistent consequences that never arrive at the peak of anger.",
      "The hostile lens: neutral faces read as hostile; the 'he started it' cognition; built partly through word-failures (language delay, low verbal ability, fists filling the gap where the exit tool of words is missing).",
      "The cold engine: weak fear conditioning and empathy learning; punishment does not sting, other children's distress does not inhibit; aggression becomes instrumental, cool and guilt-free; the specifier language exists precisely to give this profile a non-verdict name in minors.",
      "The street school: deviant-peer reinforcement and survival economics; aggression as résumé, exploitation as salary, trust as liability; behaviour change without ecology change ends in return-to-street relapse.",
      "The comorbidity amplifier: ADHD in up to half of childhood-onset CD supplies the ignition; PTSD supplies triggered, reactive heat; substance supplies the disinhibitor; each must be treated before any 'conduct treatment failure' verdict is written.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "amygdala", name: "Amygdala (the alarm that never rang)", role: "The threat-response lineage of the callous path: under-responsive fear conditioning means punishment never teaches and others' distress never inhibits; the developmental root of guilt-less, empathy-poor aggression.", grade: "supported" },
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the brakes)", role: "Impulse control and executive inhibition: the machinery the ADHD ignition rides; without brakes, every coercive and hostile impulse reaches the hand before the thought.", grade: "supported" },
    { id: "reward-circuitry", name: "Reward circuitry (the wanting engine)", role: "The reward-dominant decision style of the callous profile: gains loom, consequences shrink; the reason reward-heavy structure outperforms punishment in this subgroup.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The reward-dominant decision style's currency: the callous profile's gain-biased choices; also the system the stimulant tier engages when treating the ADHD ignition.", grade: "proposed", drugConnection: "The stimulant/atomoxetine treatment of comorbid ADHD: the best-evidenced pharmacological route to less aggression; no KYP drug lessons yet, the route taught here." },
    { name: "Noradrenaline", symbol: "NE", role: "The autonomic under-arousal story: the low-resting-heart-rate fearlessness correlate implies a sympathetic system set too quiet; physiological fearlessness that blunts punishment learning.", grade: "proposed" },
    { name: "Testosterone", symbol: "T", role: "The adolescence amplifier: testosterone-loaded years widen the aggression channel; pubertal timing, not destiny.", grade: "supported" },
  ],
  pathways: [
    {
      id: "coercive-cycle-pathway",
      name: "The coercive cycle (harsh parenting to trained escalation)",
      steps: [
        { label: "The command", detail: "The parent issues an instruction; the child refuses; nobody has taught either of them an exit" },
        { label: "The escalation window", detail: "Command louder: refusal angrier; the parent's affect rises with the child's; the interchange becomes the reinforcement arena" },
        { label: "The capitulation or the explosion", detail: "The parent gives in at peak screaming (the child learns escalation WORKS) or hits hard (five minutes of bought peace, the violence curriculum modelled)" },
        { label: "The thousand evenings", detail: "Both reinforced; escalation generalises to school, to peers, to the street: the childhood-onset engine running on harsh-then-capitulating parenting" },
      ],
      clinicalManifestation: "The Std-3 fighter whose father reports 'I beat him till my hand hurts; he looks at me like I am wasting his time': the fear-training completed, the escalation trained.",
      grade: "established",
    },
    {
      id: "cold-engine-pathway",
      name: "The cold engine (under-responsive threat system to the specifier)",
      steps: [
        { label: "The muted alarm", detail: "An under-responsive amygdala threat system: weak fear conditioning; punishment does not sting, and what does not scare does not teach" },
        { label: "The empathy learning that never lands", detail: "Others' distress fails to inhibit behaviour; guilt has no soil to grow in; affect stays shallow, charm instrumental" },
        { label: "Reward-dominant decisions", detail: "Gains loom, consequences shrink; aggression becomes the TOOL: cool, planned, to GET things rather than from heat" },
        { label: "The specifier declares", detail: "2 of 4 (guilt absent, empathy callous, performance-unconcern, shallow affect) from multiple sources over time; a harder course, a different manual" },
      ],
      clinicalManifestation: "The boy who cut the neighbour's puppy's ear and, asked about it, smiled: calm eyes describing harm, punishment-fatigue, 'nothing affects him', including, poignantly, love.",
      grade: "supported",
    },
    {
      id: "word-failure-pathway",
      name: "The word-failure pipeline (language delay to the deviant-peer economy)",
      steps: [
        { label: "The word-failures begin", detail: "Language delay, learning disorder, undiagnosed in a busy classroom: the conflict-exit tool missing; fists fill the gap" },
        { label: "The hostile lens builds", detail: "A thousand conflicts, each pre-labelled 'he started it': neutral faces read as hostile; aggression feels like self-defence from the inside" },
        { label: "School failure recruits", detail: "The school-failure to deviant-peer pipeline: exclusion, the idle peer-hours, gang recruitment economics in slums and street hierarchies" },
        { label: "The group pattern declares", detail: "Theft-and-riding gangs, territory fights, substance tagging: behaviour WITH the group, largely absent alone (prognostically the better shape)" },
      ],
      clinicalManifestation: "The adolescent whose offences occur only with the group and never alone: the peer-driven, adolescent-onset shape that mostly desists when the group and the stakes change.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "preschool-coercive", time: "The preschool years", title: "The coercive dance begins", description: "Tantrum-era escalation that never civilises; harsh-then-capitulating parenting; the language delay quietly removing the conflict-exit tool: nobody has named any of it yet.", phase: "onset" },
    { id: "school-entry", time: "School entry (the 8–12 band)", title: "The ODD years declare", description: "Loses temper, touchy, defies, blames, spiteful: the defiance band with impairment, authority-shaped and anger-shaped; most children with ODD never progress further, especially when the parent programme starts here.", phase: "onset" },
    { id: "before-ten-fork", time: "Before age 10", title: "The childhood-onset fork", description: "Fighting, cruelty signals, early rule violation on a base of ADHD, impulsivity and harsh parenting: the high-risk rung; the specifier's markers (guilt absent, shallow affect) already readable to the observant.", phase: "peak" },
    { id: "adolescent-window", time: "The adolescent years", title: "The peer window and the police window", description: "Group offences, substance tagging, territory fights; the relational-aggression girl's exclusion campaigns and the runaway that should have triggered the abuse screen; for some, the first Juvenile Justice Board contact: the clinic meeting the child the system saw first.", phase: "peak" },
    { id: "the-fork-outcomes", time: "Late adolescence to adulthood", title: "Desistance or the long road", description: "Adolescent-onset CD mostly desists with maturation and context change; childhood-onset CD (especially with the callous profile) carries the higher adult antisocial risk: a third to half in severe cohorts, by cohort and severity filter.", phase: "duration" },
    { id: "treatment-window", time: "The programme months and years", description: "PMT's 8–20 structured sessions; the multisystem months; the dated targets (no police contact for 90 days, then one incident-free term) progress measured in quiet weeks, follow-up kept in years, the trajectory bent, not finished.", title: "The treatment window", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "ODD ~3–6% of children (the 8–12 band, fairly stable across countries that measure it); CD ~2–4% of adolescents, higher in boys for the childhood-onset form, converging in adolescent-onset, urban and deprived settings running higher. The longitudinal truth: of childhood-onset CD cases followed to adulthood, a substantial minority (estimates commonly a third to half, depending on the cohort and the severity filter) meet antisocial personality disorder criteria; adolescent-onset CD mostly does NOT. Most children with ODD never develop CD; the ones who do usually have ADHD, harsh parenting and a family aggression culture stacked underneath.",
    indianPrevalence: "No national prevalence survey names CD. The clinically visible carries the story: NCRB juvenile-crime statistics (children in conflict with law, tens of thousands of cases yearly, overwhelmingly boys, the classic offence mix of theft and hurt), observation-home populations dominated by poverty, orphanhood, street life and abuse rather than 'disorder' alone, and school expulsions arriving at child-guidance clinics as behaviour emergencies. The Indian detection funnel runs BACKWARD: the police see what the clinic should have seen earlier.",
    lifetimeRisk: "Childhood-onset CD with the callous profile: the highest adult antisocial risk in this territory; a third to half in severe cohorts; adolescent-onset: mostly desists. The progression stack from ODD to CD: ODD + ADHD + harsh parenting + a family aggression culture.",
    genderRatio: "Boys dominate the childhood-onset form; girls present later and more relationally (exclusion campaigns, rumour-warfare, sexualised reputation attacks, running away) and are under-referred everywhere.",
    ageOfOnset: "ODD declares in the primary-school years (8–12 band); the childhood-onset CD fork stands before age 10; adolescent-onset CD rides the peer window.",
    indianNotes: "The abuse and trauma layer under girls' and street-children's 'conduct' is the single most missed diagnosis in this population; the system's official pathway is the Juvenile Justice (Care and Protection of Children) Act 2015, and mental health meets these children only when someone thinks to refer, which is rare.",
  },
  etiology: [
    { category: "genetic", factor: "Moderate heritability of the engine parts", details: "Aggression and impulsivity are moderately heritable. The ADHD/impulsivity link is the main genetic channel; CD as such is less heritable than its engine parts." },
    { category: "biological", factor: "The fearlessness physiology", details: "Low resting heart rate: the classic psychophysiological correlate of fearlessness in callous traits; testosterone-loaded adolescence amplifying the aggression channel; traumatic brain injury, lead exposure and prenatal substance exposure adding real risk." },
    { category: "psychological", factor: "The hostile lens and the cold engine", details: "Hostile attribution bias: neutral faces read as hostile, the 'he started it' cognition; the callous-unemotional path: weak fear conditioning and empathy learning with a reward-dominant decision style; low verbal ability, because words are the conflict-exit tool and without them fists fill the gap." },
    { category: "social", factor: "The biggest and most actionable layer", details: "Coercive parenting cycles (the well-replicated mechanism); physical abuse, neglect and domestic violence: the violence model and the trauma-anger effect in one; parental substance misuse, criminality and untreated mental illness; inconsistent supervision (the absent-parenting axis, street exposure does the parenting); deviant-peer contagion and gang recruitment economics; poverty, urban crowding and school exclusion: selection pressure, not destiny." },
    { category: "environmental", factor: "The Indian amplifiers", details: "Corporal punishment as the culturally approved response trains exactly the coercive cycle the textbooks describe: the parents are often running the parenting programme they received; child labour and street survival economies reward exploitation skills; substance-on-street (glue and inhalants first, cannabis later) both mimics and deepens CD: screen every street-referred child; and the runaway girl, under whose 'conduct problem, immoral character' label trafficking and sexual abuse ride until someone asks." },
  ],
  symptomClusters: [
    {
      category: "1. The four CD bands (aggression, destruction, deceit-theft, rule violation)",
      symptoms: ["Aggression to people and animals: bullying, initiating fights, weapon use in fights (the escalation marker), cruelty to people, cruelty to animals (a serious-signal symptom in children), robbery/confrontation theft, sexual coercion (never normal, always investigated)", "Property destruction: deliberate fire-setting (a risk-assessment symptom), deliberate destruction of homes, school property, vehicles", "Deceit and theft: breaking-in, con-artistry for goods or favours, shoplifting beyond occasional; the pattern, not the incident", "Serious rule violation: age-inappropriate staying out nights, running away twice or more (the abuse screen triggers here, running away FROM something), truancy before 13, and law violations that reach the Juvenile Justice Board"],
    },
    {
      category: "2. The ODD band (the lower rung, anger-shaped, authority-shaped)",
      symptoms: ["Loses temper; touchy, easily annoyed; defies and refuses; deliberately annoys others; blames others; spiteful and vindictive", "Argues for hours but does not break the neighbour's window, exhausting, conflict-filled, WITHOUT aggression, deceit or theft", "No rights violation, no law violation: the line that keeps ODD on the lower rung and shapes its better base prognosis"],
    },
    {
      category: "3. The presentations that need special attention",
      symptoms: ["The younger aggression pattern: tantrum-era escalation that never civilised by school age; ADHD-impulsive ignition; poor frustration tolerance", "The adolescent group pattern: theft-and-riding groups, territory fights, substance-tagging; behaviour WITH the group, largely absent alone (prognostically the better shape)", "The relational-aggression girl: exclusion campaigns, rumour-warfare, sexualised reputation-attacks, then the runaway; the standard missed CD presentation", "The callous presentation: calm eyes while describing harm; no guilt language; punishment-fatigue; the parents say 'nothing affects him', including, poignantly, love", "Substance-riding conduct: the glue/cannabis era begins with changes in FRIENDS first; new phone-less contacts, hostel-ward disappearances"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The CD band logic (DSM-5/ICD-11, paraphrased)",
      code: "3+ across the four bands",
      criteria: [
        "At least 3 symptoms across the four bands (aggression, destruction, deceit-theft, serious rule violation) in the past 12 months, with at least 1 in the past 6 months.",
        "Clinically significant impairment: social, academic or family.",
        "Specify the onset: childhood-onset (before 10) versus adolescent-onset; the prognostic split that sets the trajectory expectations.",
        "Specify limited prosocial emotions: 2 of 4 (lack of guilt or remorse, callous lack of empathy, unconcern about performance, shallow or deficient affect) confirmed from multiple sources over time, never from one sulky interview.",
        "Grade severity mild/moderate/severe by symptom count and degree of harm: the grading that maps onto placement and service intensity.",
      ],
      duration: "The 12-month frame with the 6-month recency gate.",
      indianNote: "The two-source rule is the Indian clinic's commonest casualty: symptom mapping from home AND school (or observation home), because the teacher sees the group pattern the parents never will.",
    },
    {
      system: "The ODD gate",
      code: "4+ of the defiant band",
      criteria: [
        "At least 4 symptoms of the defiant band (loses temper, touchy/annoyed, defies/refuses, deliberately annoys, blames others, spiteful/vindictive) for 6 months with impairment.",
        "The negative axis that matters: no aggression toward people or animals, no destruction, no deceit or theft, no serious rule violation. The moment those appear, the diagnosis moves up the ladder.",
        "ICD-11 aligns closely, with the equivalent prosocial-emotions qualifier for the conduct-dissocial side of the ladder.",
      ],
      duration: "6 months of the defiant band with impairment.",
      indianNote: "Most ODD never becomes CD; the ones that progress usually carry the stack (ADHD, harsh parenting, a family aggression culture) hunt those three at the first visit.",
    },
    {
      system: "The assessment structure (the part that changes everything)",
      code: "Seven steps, in order",
      criteria: [
        "Symptom mapping from TWO sources: home and school/observation home; teacher report for the school-only pattern.",
        "The abuse screen, mandatory: physical, sexual, domestic violence, online exploitation; girls' running away and 'immorality' labels are inverted here; behaviour that shocks must trigger questions, not judgments.",
        "The developmental and family map: milestones, language delay, learning screen (a big minority of CD children have undiagnosed learning disorders, the school-failure to deviant-peer pipeline entry), parenting style, parental substance and mental illness, the extended family's aggression history.",
        "The comorbidity hunt that drives the plan: ADHD (the ignition), PTSD (reactive, triggered, dissociative aggression), substance use (channel and disinhibitor), mood disorders (irritable bipolar and DMDD-spectrum. DMDD is chronic non-episodic irritability, not instrumentality), autism's rigidity crises (rule violations from incomprehension, not calculation).",
        "Intelligence and learning testing where indicated; the speech-language screen: the words-are-the-exit-tool finding.",
        "The environment audit: supervision gaps, street hours, the peer economy, and the child's income sources; theft can be a LIVING; plan the replacement.",
        "The legal-positioning history: Juvenile Justice Board contacts, observation-home stays and what happened there (institutional abuse is real and re-traumatising).",
      ],
      duration: "Adequate informants over adequate time: the specifier demands multiple sources longitudinally.",
      indianNote: "In India this assessment usually happens years late and through the wrong door; the highest-yield system intervention is a standing referral arrangement. Every expelled child and every first-time JJ-Board child gets one.",
    },
  ],
  severityScales: [
    {
      name: "The ladder staging",
      fullName: "ODD to CD to the specifier: the rung map",
      measures: "Where the child stands on the developmental ladder, and which manual the plan needs.",
      ranges: [
        { min: 0, max: 0, severity: "The ODD rung", action: "Parent management training first-line (8–20 structured sessions); the ADHD and harsh-parenting audit at the first visit; the prognosis mostly good, most ODD never progresses" },
        { min: 1, max: 1, severity: "CD without the specifier", action: "The multisystem plan: family-based work, school behaviour plan, peer substitution, driver treatment; onset subtype named; the dated targets set (no police contact for 90 days, then one incident-free term)" },
        { min: 2, max: 2, severity: "CD with limited prosocial emotions", action: "The different manual: predictable calm consequences (anger teaches nothing), reward-heavy visible economy, parent warmth-coaching with explicit empathy cultivation, longer horizon and smaller increments, family burnout protection" },
      ],
      indianNote: "The rung decides the service: the ODD rung can often be held in clinic-based parent coaching; the CD rung needs the case-manager model's network, and the specifier's rung needs the specialist tier the metros hoard.",
    },
    {
      name: "The DSM-5 severity grading",
      fullName: "Mild, moderate, severe: by count and harm",
      measures: "Severity by the number of conduct problems and the degree of harm to others.",
      ranges: [],
      indianNote: "Severity maps onto placement decisions: exactly what the Juvenile Justice Board asks the clinician to inform; write the severity, the drivers and the plan, not a moral character sketch.",
    },
  ],
  differentialDiagnosis: [
    { condition: "ADHD impulsivity", distinguishingFeatures: "Fast, unaimed, regretted acts; no planning and no profit: parents describe accidents and heat, not con-artistry.", keyDifferentiator: "The intention audit: impulsivity has no instrumental shape; treat the ADHD and the aggression measurably falls." },
    { condition: "PTSD and trauma-driven aggression", distinguishingFeatures: "Trigger-linked, hypervigilance and startle, dissociation; the history does the separating.", keyDifferentiator: "The abuse screen EVERY 'CD' child gets: boys included; the aggression is reactive heat from a trauma engine, not instrumentality." },
    { condition: "Substance-fuelled behaviour", distinguishingFeatures: "Onset tracks the substance; intoxication windows; the intoxicant screen positive; the friends changed first.", keyDifferentiator: "Tempo and tox-screen: treat the substance layer before judging any conduct programme." },
    { condition: "Bipolar disorder", distinguishingFeatures: "Episodic euphoria, decreased sleep, grandiosity between outbursts; family history; sustained states, not character.", keyDifferentiator: "The episodic structure: conduct is a trait tempo, mania is a state tempo." },
    { condition: "DMDD", distinguishingFeatures: "Chronic severe irritability with tantrums across contexts: mood-spectrum, no instrumentality and no profit.", keyDifferentiator: "Mood-first framing versus the calculated gain of CD instrumentality." },
    { condition: "Autism crises", distinguishingFeatures: "Fixed-interest and preference rigidity, sensory triggers, social incomprehension: the rule violation lacks the predatory shape.", keyDifferentiator: "The incomprehension audit: rigidity from a prediction failure, not calculation from a cold engine." },
    { condition: "Adjustment disorder", distinguishingFeatures: "Reaction bounded to a recent identifiable stressor, within 6 months of onset, no pre-existing pattern.", keyDifferentiator: "The clock and the stressor: the pattern stops when the stressor is processed or removed." },
    { condition: "Street-survival adaptation (not a disorder)", distinguishingFeatures: "Behaviour confined to the survival economy, absent in protected contexts, no pre-street pattern: the 'CD' label as an occupational injury of poverty.", keyDifferentiator: "The context audit: 'is this disorder or economy?'; otherwise the clinic becomes the system's moral cover." },
    { condition: "ODD (the lower rung itself)", distinguishingFeatures: "The defiance band only: no rights violation, no aggression, deceit or theft.", keyDifferentiator: "The single axis: the neighbour's window stays intact." },
  ],
  management: [
    { category: "psychotherapy", name: "Parent management training — the first line, for ODD and childhood CD", description: "The core behavioural package: immediate contingent praise for compliance (the 5:1 attention ratio), effective commands (one at a time, stated positively, within arm's reach, backed up within seconds), planned ignoring of negative-attention behaviour, consistent short consequences delivered CALMLY at low-intensity moments, a home token economy, and supervision architecture (the where-who-when knowledge of the child's day). Dose honesty: 8–20 structured sessions minimum; single-session advice fails; group-based programmes (the Incredible Years/PMTO lineages) are the best-value delivery.", whenToUse: "First-line for ODD and childhood-onset CD from the day of diagnosis; also the maintenance frame after every intensive programme.", indianContext: "Formal programmes are metro-concentrated; the clinical approximation (4–6 clinic-based parent-coaching sessions using the package above with weekly phone follow-up) is far from nothing, and the grandparents need the same training: the inconsistency between generations is the Indian programme-killer; the 'he obeys only when grandfather is home' report is the fingerprint." },
    { category: "psychotherapy", name: "Multisystemic and family approaches — the evidence core for moderate-to-severe CD", description: "Multisystemic therapy (MST): the best-evidenced intensive programme; a case-worker with 3–5 families working IN the home/school/peer ecology for 3–5 months, with trials showing reduced re-arrest and out-of-home placement. Functional family therapy (FFT): 12–14 sessions working the family's interaction functions beneath the behaviour. Treatment foster care (the Oregon model): a specialised foster family AS the intervention, for the child whose home cannot be made safe fast enough.", whenToUse: "Moderate-to-severe CD, repeated school failure of clinic-based work, the JJ-Board-referred child needing intensive reconstruction.", indianContext: "Certified MST/FFT programmes barely exist in India; the honest approximation is the case-manager model, one counsellor (NGO, school or district mental-health programme) who does the family work, school liaison, peer plan and follow-up across 3–6 months, with Childline (1098), the JJ Board's probation officers and local NGOs as the network. Write the plan like an MST skeleton and staff it with whoever can hold it. The case manager, not the building, is the active ingredient." },
    { category: "lifestyle", name: "School and peer interventions", description: "The school behaviour plan: report-card system, check-in/check-out mentoring, anti-bullying enforcement BOTH directions (CD children are also bullied). Deviant-peer DECONTAMINATION: supervised after-school sport and occupation substitution; idle peer-hours are the relapse window; vocational skill-building for adolescents, because a wage replaces theft. Screen-time and gang-channel management; for street children the pathway is re-enrolment + shelter + de-addiction, and the order matters.", whenToUse: "Every CD plan: the behaviour lives in two ecosystems, and the school's standing offer (suspended? last-chance notice?) is a treatment variable, not a footnote.", indianContext: "The clinician's letter converting expulsion into final probation WITH a behaviour plan is a life-trajectory intervention. Keep a template; Indian schools hold and use expulsive power without clinical input." },
    { category: "pharmacotherapy", name: "Medication — the honest small role", description: "No drug treats CD itself; medication treats the DRIVERS. ADHD: stimulants or atomoxetine; treating ADHD in CD children measurably reduces aggression, the strongest pharmacological evidence in this field. Severe explosive aggression unresponsive to structure: risperidone has short-term evidence in extremely dysregulated presentations; lowest dose, defined review, weight and endocrine monitoring. PTSD: trauma therapy with SSRIs for comorbid anxiety. Substance use disorders: the relevant substance-tier treatment. The 'anger-control syrup' or 'behaviour tonic' from the local pharmacy is placebo commerce: say so plainly.", whenToUse: "Only after the driver is named: the ADHD ignition, the dysregulation excess, the anxiety rider, never as a substitute for the programme, and never as discipline.", indianContext: "The Indian practice caution: do NOT let risperidone become the boarding-school discipline tool; the prescription that sedates the child so the system never has to change." },
    { category: "psychotherapy", name: "The callous-profile plan — the different manual", description: "Consequences PREDICTABLE and consistent, not emotional: anger teaches nothing here; predictability does. Reward-heavy structure: earn privileges visibly, lose them without drama. Parent warmth-coaching: these children's empathy needs explicit cultivation; modelling, labelling emotions, perspective-taking games (the attachment-based interventions developed for this profile). Longer horizon, smaller increments; protect the family from burnout with respite and realistic milestone-setting; anticipatory guidance on legality: the outcome data favour early intervention over any later-period rescue.", whenToUse: "The limited-prosocial-emotions specifier, from day one: mis-prescribing the standard manual is the commonest treatment error in this field.", indianContext: "The Indian family's instinct (harsher discipline, more supervision by fear) runs exactly against this manual; the reframe that lands: 'you have completed his fear-training; the next consequence must arrive calm and on schedule, or it teaches nothing.'" },
    { category: "psychotherapy", name: "The girl who ran — the inverted pathway", description: "Safety first: where does she sleep tonight; trafficking risk assessment. Abuse disclosure work at her pace, one skilled interview, no repeated interrogation, no promises you cannot keep. Then trauma therapy, THEN the behaviour work; and the family's handling of her 'character' (the honour lecture) is itself a treatment target. Medical care: pregnancy and STI screens in relevant contexts with consent protocols, injuries documented.", whenToUse: "Every runaway girl labelled 'conduct problem', 'absconder' or 'manipulative', before any behaviour programme is written.", indianContext: "Schools and observation-home registers write 'morally corrupted' where the file should read 'abuse screen pending': the register follows the child, and revising it is a clinical act." },
    { category: "lifestyle", name: "Institutional care — the last resort with a warning label", description: "Observation and residential homes only when home is unsafe or unbuildable, and with active mental-health input: institutionalisation without treatment deepens the CD course. Boot camps, 'military academies' and fear-based programmes: the evidence is not just absent; several reviews show harm: abuse rates, suicide risk, post-traumatic outcomes; the clinical duty is to say NO clearly. Juvenile Justice pathway navigation: the Board's rehabilitation mandate, diversion where possible, the child's right to education within institutions, and the mental-health assessment's role in the Board's decisions.", whenToUse: "Placement failure of every home-based tier, and the boot-camp conversation whenever parents arrive with the brochure.", indianContext: "Indian parents pay for these programmes abroad and domestically; the free/low-cost spine is the district mental-health programme psychologist, the JJ Board's probation officers, observation-home visiting psychiatry where it exists, NGO networks (Childline 1098) and the school counsellor. Write the plan onto that spine." },
  ],
  safety: {
    redFlags: [
      "Cruelty to animals: a serious-signal symptom in children, never a phase; it goes to the front of the queue, not the watch-and-wait pile",
      "Fire-setting with fascination: the risk-assessment symptom; scene access, fascination content and escalation pattern assessed immediately",
      "Sexual aggression or coercion, never normal, always investigated, with mandatory reporting duties engaged where the behaviour reflects what has been done TO the child",
      "Running away from home, always read as FROM: ask what is being escaped; in girls especially, repeated absconding mandates the abuse assessment and the trafficking risk screen",
      "Any weapon use in fights: the escalation marker that changes both risk assessment and reporting duties",
    ],
    urgentGuidance:
      "The order of operations: (1) safety first, where does the child sleep tonight, and what is being escaped; (2) the abuse screen with ONE skilled, non-leading disclosure interview: no repeated interrogation, no promises you cannot keep; (3) mandatory reporting where sexual abuse emerges (POCSO in India) and the trafficking-risk escalation for runaway girls; (4) medical care with injuries documented and pregnancy/STI screens with consent protocols where relevant; (5) the five serious signals (cruelty to animals, fascinated fire-setting, sexual aggression, running away, weapon use) triaged to immediate specialist assessment: each changes risk assessment and reporting duties; (6) the JJ Board's rehabilitation mandate engaged as the clinical ally, not the adversary: the mental-health assessment is part of how the Board decides.",
  },
  drugLinks: [],
  contentGaps: [
    "Stimulants and atomoxetine (the ADHD-ignition tier and the strongest pharmacological route to reducing aggression in conduct problems) have no KYP drug lessons; the treating-the-driver principle is taught here, the route never invented.",
    "Risperidone's short-term role in severe explosive dysregulation (lowest dose, defined review, weight and endocrine monitoring, never the boarding-school discipline tool) has no KYP lesson and no drugLinks entry; the route is taught here honestly, never invented.",
    "The SSRI rider for comorbid anxiety in the PTSD layer is named only as a class in the source note: no specific agent assigned, so no KYP drug is linked; the class-level role is taught here.",
    "Melatonin's brief sleep-phase use in the runaway-girl case has no KYP drug lesson: taught inside the case, route never invented.",
    "No KYP lesson exists for the delivery models themselves (Incredible Years, PMTO, MST, FFT, treatment foster care Oregon). Their logic is taught here so the 'name the model' question can be asked of every private package before the family pays.",
  ],
  patientGuide: {
    whatIsIt:
      "There are two rungs on one ladder. The lower rung is called oppositional defiant disorder (ODD): a child who loses his temper, argues, defies adults, blames others and can be spiteful, exhausting and conflict-filled, but without breaking the serious rules: no aggression that harms people or animals, no stealing, no law-breaking. The upper rung is called conduct disorder (CD): a pattern of violating others' basic rights and serious social rules, fighting, cruelty, destroying property, lying and conning, stealing, running away, truancy, or acts that reach the courts. Both are developmental behavioural stories, not moral verdicts: they begin for reasons (temperament, impulsivity, harsh or absent parenting, trauma, learning difficulties, the wrong peer group), and they are treated through the SYSTEM around the child (the parenting, the family, the school and the peers) far more than through the child alone. One group of children, those with the limited-prosocial-emotions profile (little guilt, little empathy, shallow feelings, unmoved by punishment), needs a different, longer, carefully warmed-up approach.",
    whatCausesIt:
      "Four stories explain most of it. The coercive dance: the parent commands, the child refuses, the parent shouts, the child escalates, the parent gives in or explodes, and both get trained into it over a thousand evenings. The hostile lens: some children read neutral faces as insults, so their aggression feels like self-defence from the inside; children who could not find words (language delay, learning problems) learned to slap instead of speak. The cold engine: some children are born with a quieter alarm system; punishment does not scare them, others' distress does not stop them; their aggression is to GET things, not from losing their temper. The street school: for children surviving on the street, 'bad behaviour' can be the curriculum the economy teaches; aggression as the résumé, exploitation as the salary. Under many 'conduct' labels sits something done TO the child: abuse, neglect, domestic violence.",
    symptoms:
      "The four bands: aggression to people or animals (bullying, fights, weapon use, cruelty, robbery, forcing sexual acts); destruction of property (fire-setting, smashing); deceit or theft (breaking-in, con-tricks, repeated shoplifting); and serious rule-breaking (staying out nights, running away more than once, truancy before 13, acts that reach the Juvenile Justice Board). The ODD pattern is anger-shaped and authority-shaped only. Warnings that need immediate professional attention: cruelty to animals, fire-setting with fascination, any sexual aggression, any weapon use, and any running away; each of these changes the risk assessment and must be assessed, not watched.",
    treatment:
      "The treatment works through the people around the child, in a strict order of evidence. First-line: parent management training; 8–20 structured sessions teaching immediate praise for compliance, calm short consequences that never arrive at the peak of anger, a visible reward system, and real supervision (knowing where, who and when). For more serious CD: family and multisystem programmes that rebuild home, school and peers together over months. School and peer work: a written behaviour plan instead of expulsion, mentoring, supervised activities that occupy the same evening hours, and vocational training for adolescents; a wage replaces theft. For the child with the prosocial-emotions profile: the different manual; predictable calm consequences (anger teaches nothing), visible earn-and-lose privileges, and warmth-coaching that cultivates empathy deliberately. Medicines: none treats conduct disorder itself; medicines treat what is DRIVING it in a given child: attention problems (the best-evidenced), trauma, substance, mood. If someone prescribes a 'behaviour syrup', that is commerce, not medicine. Strict boarding schools and military-style academies are not treatment: the evidence shows harm, including abuse and worsened trauma.",
    selfHelp: [
      "Consistency over anger: small immediate consequences the child can predict, rewards that arrive before he escalates; parents who mean it calmly; it feels counter-intuitive, the trials support it.",
      "The 5:1 attention ratio: five pieces of earned praise for every correction; attention spent on the behaviour you want more of.",
      "The supervision architecture: know where, who and when; the unsupervised after-school-and-evening window is the offence timetable; close it with tuition, sport, a relative's home, a chain.",
      "Train the grandparents too: children obey whoever is consistent, and intergenerational inconsistency is the programme-killer.",
      "Read every runaway as FROM: ask what is being escaped; home is the first suspect, not the last; ask carefully, once, and protect first.",
      "Keep the child in school: staying in school is one of the strongest protective factors this child has. Ask for final probation with a written behaviour plan instead of expulsion; schools accept more often than parents expect.",
      "Measure progress in quiet weeks, not transformations: no police contact for 90 days, then one incident-free term; months of programme work, follow-up in years.",
    ],
    whenToSeekHelp: [
      "Cruelty to animals, fire-setting, any weapon use, or any sexual aggression: immediate professional assessment; these are serious signals, not phases",
      "Any running away, especially repeated: the abuse assessment is mandatory, not optional",
      "The school's last warning. Bring it to the clinic the same week; the letter converting expulsion into probation-with-a-plan is the single highest-yield intervention the clinic can write",
      "Escalation despite the programme: the driver hunt (attention, trauma, substance, mood) before any 'treatment failure' verdict",
      "Signs of abuse or exploitation in any child labelled 'conduct': behaviour that shocks must trigger questions, not judgments",
      "The family's own exhaustion: burnout protection, respite and realistic milestones are part of the treatment, not a luxury",
    ],
    indianResources: [
      "Childline 1098: the 24-hour helpline for street children, abuse referrals and children in need of care and protection",
      "The district mental-health programme psychologist and the child-guidance clinic: the assessment and parent-coaching channel",
      "The Juvenile Justice Board's probation officers and observation-home visiting psychiatry (where it exists): the statutory rehabilitation machinery under the JJ Act 2015",
      "The school counsellor: the school-behaviour-plan half of every multisystem plan",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific CD pathway exists; practice follows the DSM-5/ICD-11 band and specifier logic, with the Juvenile Justice (Care and Protection of Children) Act 2015 as the legal spine: the child in conflict with law is processed by the Juvenile Justice Board, placed in an observation home if needed, and carries a rehabilitation mandate with the right to education inside institutions. The mental-health assessment is part of how the Board decides.",
    systemContext: "The funnel runs through the wrong doors: the teacher's stick, then the school's expulsion, then the police, then the observation home, and only accidentally through a clinic. The highest-yield system intervention is a standing referral arrangement: every expelled child and every first-time JJ-Board child gets a mental-health assessment (ADHD, learning disorder, trauma, substance, the four drivers). One letter to a school board or a District Magistrate's office can institutionalise that funnel; clinicians who have done it report the highest career-yield of any intervention.",
    programmeContext: "The free/low-cost spine: the district mental-health programme psychologist, the JJ Board's probation officers, observation-home visiting psychiatry where it exists, NGO networks (Childline 1098 for street and abuse referrals), and the school counsellor for the school-plan half. Certified MST/FFT programmes barely exist in India. The honest approximation is the case-manager model: one counsellor doing the family work, school liaison, peer plan and follow-up across 3–6 months, networked with Childline, the probation officers and local NGOs; write the plan like an MST skeleton and staff it with whoever can hold it.",
    costConsiderations: "The free spine costs almost nothing and is the delivery reality for most families. Private conduct-disorder programme packages in the metros cost ₹50,000–2,00,000+ (approx 2026, wildly variable, evidence-opaque): before paying, ask for the named model (PMT, MST-logic, FFT-logic) and its measurable targets; a programme that cannot name its model and its targets is selling hope, not evidence.",
    culturalConsiderations: "The punishment culture needs reframing, not contempt: the parents who beat the child are usually running the programme THEY were raised in. The sting-in-the-tail sentence for the clinic: 'the beatings have bought you this: he no longer fears the stick; you have completed the fear-training, and the next teacher who raises a hand becomes just another person to defeat.' The marriage-market immunity of boys' aggression ('boys will be boys') delays help by years; the counter-frame that lands: 'the same aggression that reads as boyhood at 12 reads as criminal record at 16; that is the road.' The domestic-violence engine: a large share of Indian CD sits on a father-to-mother violence base; the son's aggression is the curriculum he watched; screen every CD family. And the Dalit/poverty/tribal over-representation caution: street round-ups and 'conduct' labels fall disproportionately on poor, migrant and marginalised children whose behaviour is survival adaptation. The assessment must include the 'is this disorder or economy?' question, or the clinic becomes the system's moral cover.",
    patientCounselling: [
      "The fear-training script: 'The beatings have not failed as discipline. They have succeeded as training: he has learned escalation from them, and now they have completed his fear-training. The programme that works replaces anger with consistency.'",
      "The boyhood script: 'The same aggression that reads as boyhood at 12 reads as criminal record at 16; that is the road we are trying to close.'",
      "The company script: 'Yes, the friends matter; genuinely. But forbidding them launches a war you lose; the fix is substitution: supervised activities in the same evening hours, plus the family work, plus keeping him in school, and where the group supplies money and status, we must replace the money and status, not just lecture about them.'",
      "The different-manual script: 'This child does not learn from anger; he learns from predictability. Consequences will arrive calm and on schedule; privileges will be earned and lost without drama; and we will be coaching his empathy deliberately, because it needs cultivating.'",
      "The school script: 'Bring me the last-warning letter. We will ask for final probation with a written behaviour plan instead of expulsion; staying in school is one of the strongest protections this child has.'",
      "The honesty script: 'Progress is measured in quiet weeks, not transformations: no police contact for 90 days, then one incident-free term. Months of programme work, follow-up in years.'",
    ],
  },
  decisionPath: {
    title: "The child the system calls a 'conduct problem'",
    nodes: [
      {
        id: "start",
        question: "A child referred for 'behaviour': defiance, aggression, or a first police contact. First: which rung, and what is underneath?",
        branches: [
          { label: "Defiance and anger only, no rights violation", next: "odd-rung" },
          { label: "Aggression, destruction, deceit-theft or serious rule violation", next: "cd-gate" },
          { label: "A runaway girl, labelled 'manipulative'", next: "runaway-path" },
          { label: "A street child surviving, not a patient", next: "survival-path" },
        ],
      },
      {
        id: "odd-rung",
        question: "The ODD rung: exhausting, authority-shaped, but the neighbour's window is intact.",
        recommendation: "Check the gate: 4+ symptoms of the defiant band for 6 months with impairment. Parent management training first-line: 8–20 structured sessions, the 5:1 attention ratio, calm short consequences, supervision architecture. Audit the three progression risks at the same visit (ADHD, harsh parenting, family aggression culture); treat the driver found.",
      },
      {
        id: "runaway-path",
        question: "Running away is FROM something until proven otherwise.",
        recommendation: "Safety first, where does she sleep tonight; the trafficking risk assessment. ONE skilled, non-leading disclosure interview (no repeated interrogation, no promises you cannot keep). Mandatory reporting where sexual abuse emerges (POCSO). Trauma therapy BEFORE any behaviour work; the register's 'manipulative' entry formally revised: documentation advocacy is treatment.",
      },
      {
        id: "survival-path",
        question: "Street-survival adaptation: economy, not psychopathology; the differential table's trap row.",
        recommendation: "The context audit: behaviour confined to the survival economy, absent in protected contexts, no pre-street pattern. The pathway is re-enrolment + shelter + de-addiction, in that order, and the substance screen (glue first, cannabis later) for every street-referred child. Label carefully: the 'CD' file can become the system's moral cover for poverty.",
      },
      {
        id: "cd-gate",
        question: "The CD rung: 3+ symptoms across the four bands in 12 months, at least 1 in the last 6, with impairment. Next: the splits that decide the manual.",
        branches: [
          { label: "Onset before 10, and/or guilt-less, empathy-poor, shallow", next: "callous-path" },
          { label: "Adolescent, group-bound, solo-absent", next: "adolescent-path" },
          { label: "Reactive, triggered, hypervigilant: the history is heavy", next: "trauma-path" },
          { label: "Escalating despite (or before) any written programme", next: "driver-gate" },
        ],
      },
      {
        id: "trauma-path",
        question: "PTSD under the aggression: the screen skipped in boys too.",
        recommendation: "Trigger-linked, reactive, dissociative heat, not instrumentality. Trauma-focused therapy first, the behaviour layer second; the abuse screen is mandatory for every CD child regardless of gender; SSRIs only for the comorbid anxiety rider; the domestic-violence engine treated or the child's programme competes with his home curriculum every night.",
      },
      {
        id: "adolescent-path",
        question: "The peer-driven shape with the better prognosis.",
        recommendation: "Deviant-peer DECONTAMINATION by substitution, not prohibition: supervised after-school sport and occupation filling the idle peer-hours; vocational skill-building: a wage replaces theft; the school retained via the behaviour plan; the family work underneath. Mostly desists with maturation and context change: do not treat a maturational process like a fixed pathology, but do not ignore the drivers either.",
      },
      {
        id: "callous-path",
        question: "Childhood-onset and/or the limited-prosocial-emotions specifier (2 of 4, from multiple sources over time): the different manual.",
        recommendation: "Predictable calm consequences: anger teaches nothing, predictability does; reward-heavy visible economy (earn without drama, lose without drama); parent warmth-coaching with explicit empathy cultivation; longer horizon, smaller increments, family burnout protection. The comorbidity hunt runs regardless. ADHD in up to half of childhood-onset CD. The adult 'psychopath' label is NOT a childhood diagnosis; the specifier exists precisely to avoid it.",
      },
      {
        id: "driver-gate",
        question: "The programme is written but the child is escalating, or the family is at the end of endurance. Before any failure verdict and any placement decision: the driver audit.",
        branches: [
          { label: "Drivers treated, home still holdable", next: "multisystem-path" },
          { label: "Home unsafe or unbuildable", next: "institutional-path" },
          { label: "Parents arrive with a boot-camp brochure", next: "bootcamp-path" },
        ],
      },
      {
        id: "multisystem-path",
        question: "The multisystem logic: MST's skeleton on India's spine.",
        recommendation: "The case-manager model: one counsellor (NGO, school or DMHP) doing the family work, school liaison, peer plan and follow-up across 3–6 months; networked with Childline 1098, the JJ Board's probation officers and local NGOs. Dated targets written from day one: no police contact for 90 days, then one incident-free term. Trials of this tier show reduced re-arrest and out-of-home placement.",
      },
      {
        id: "institutional-path",
        question: "Institutional care: the last resort with a warning label.",
        recommendation: "Observation or residential home ONLY when home is unsafe or unbuildable, and with active mental-health input inside, because institutionalisation without treatment deepens the CD course. The JJ Act 2015 machinery navigated as the ally: the Board's rehabilitation mandate, diversion where possible, the child's right to education within the institution, the mental-health assessment feeding the Board's decisions.",
      },
      {
        id: "bootcamp-path",
        question: "The clear NO.",
        recommendation: "Boot camps, 'military academies' and fear-based programmes: the evidence is not just absent. Several reviews show harm, including abuse rates, suicide risk and post-traumatic outcomes. Indian parents pay for these domestically and abroad; the clinical duty is to say NO clearly and to offer the evidence tier instead: treatment-oriented foster placement with therapy, or the multisystem plan above.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Calling street-survival adaptation a conduct disorder",
      why: "The behaviour is confined to the survival economy, absent in protected contexts, with no pre-street pattern: an occupational injury of poverty read as psychopathology.",
      correction: "Run the context audit: 'is this disorder or economy?', and route the child to re-enrolment, shelter and de-addiction rather than a behaviour programme alone; otherwise the clinic becomes the system's moral cover.",
    },
    {
      mistake: "Skipping the abuse screen in boys with reactive aggression",
      why: "The 'pure conduct' reading is comfortable; the trauma engine under it is common, and the screen skipped in boys too, not only girls.",
      correction: "The abuse screen is mandatory for every CD child: trigger-linked, hypervigilant, dissociative aggression is trauma heat, not instrumentality. Treat the PTSD first and reassess what conduct remains.",
    },
    {
      mistake: "Letting the 'manipulative girl' label hide trafficking or abuse",
      why: "Registers and school reports write 'morally corrupted' and 'manipulative' where the file should read 'abuse screen pending': the label deflects the questions the behaviour demands.",
      correction: "Invert the moral frame entirely: safety assessment, the single skilled non-leading disclosure interview, the trafficking risk screen; behaviour that shocks must trigger questions, not judgments, and the register's revision is a clinical act.",
    },
    {
      mistake: "Prescribing the standard anger-escalation parenting manual to the callous profile",
      why: "The manual mismatch: emotional consequences and affective escalation assume a child who learns from fear and shame; the limited-prosocial-emotions child learns from neither.",
      correction: "The different manual: predictable calm consequences (anger teaches nothing here), reward-heavy visible structure, warmth-coaching that cultivates empathy deliberately, a longer horizon with smaller increments.",
    },
    {
      mistake: "Letting risperidone become the boarding-school discipline tool",
      why: "Sedation offered as behaviour management: the prescription that quiets the child so the system never has to change; weight gain and endocrine effects accumulate while the drivers go untreated.",
      correction: "Risperidone's defined role only: severe explosive dysregulation unresponsive to structure, short-term, lowest dose, defined review, weight and endocrine monitoring, and the driver treatment (ADHD above all) pursued regardless.",
    },
    {
      mistake: "Writing the expulsion-endorsing letter",
      why: "The clinic's letter that supports the school's expulsion is the opposite of the treatment plan: exclusion feeds the school-failure to deviant-peer pipeline that produced the behaviour.",
      correction: "The template kept in the drawer converts expulsion into final probation WITH a written behaviour plan: seating and mentoring adjustments, the daily report card, check-in points; schools accept more often than parents expect, and staying in school is one of the strongest protective factors this child has.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The one-axis separation: violation of others' rights and aggression (present in CD, absent in ODD); defiance can be exhausting, rights violation promotes it to CD.",
        "The four CD bands (aggression, destruction, deceit-theft, rule violation) with the duration gates: 3+ symptoms across the bands in 12 months with at least 1 in the past 6.",
        "The specifier: limited prosocial emotions, 2 of 4 (lack of guilt, callous lack of empathy, unconcern about performance, shallow affect), from multiple sources over time, and what it changes in the plan.",
        "The treatment hierarchy: parent management training, then the MST/FFT family tier, then treatment foster care, and boot camps: evidence of harm.",
        "The physiology classic: low resting heart rate as the fearlessness correlate of the callous-unemotional profile.",
      ],
      practical: [
        "Demonstrate the two-source symptom map: the home informant's account and the school or observation-home report, and how the group pattern invisible at home appears in the teacher's.",
        "Take the abuse screen in a 'conduct' case: the single, skilled, non-leading disclosure interview, and explain why repeated interrogation is itself harmful.",
      ],
      longAnswer: [
        "A 12-year-old boy with fighting, stealing and truancy: diagnosis, differential diagnosis and management (the evergreen Indian essay, the ladder, the bands, the drivers, the system-level treatment).",
        "Conduct disorder with limited prosocial emotions: the specifier, its significance and its treatment implications; contrast childhood- and adolescent-onset CD.",
      ],
    },
    neetPg: {
      highYield: [
        "THE LADDER: ODD = 4+ defiant-band symptoms for 6 months (angry, authority-shaped, no rights violation); CD = 3+ across the four A-D-D-R bands in 12 months with 1+ in the past 6.",
        "THE MNEMONIC: the A-D-D-R bands. Aggression, Destruction, Deceit-theft, Rule violation; ODD as 'the angry four + one': touchy, defiant, annoying, blaming, vindictive.",
        "THE PROGNOSTIC SPLIT: childhood-onset (before 10); male-predominant, ADHD comorbidity ~50%, harsh-parenting association, a third to half reaching adult ASPD criteria in severe cohorts; adolescent-onset: peer-driven, better prognosis, mostly desists.",
        "THE PROGRESSION STACK: most ODD never becomes CD; the stack = ODD + ADHD + harsh parenting + family aggression culture.",
        "THE SPECIFIER: limited prosocial emotions (guilt-less, empathy-poor, performance-unconcern, shallow affect); 2 of 4, multi-source; calls the different treatment manual.",
        "THE PHYSIOLOGY: low resting heart rate; the classic callous-trait correlate (the viva favourite).",
        "THE EVIDENCE HIERARCHY: parent management training (8–20 sessions) → MST (case-worker, 3–5 families, 3–5 months)/FFT (12–14 sessions) → treatment foster care; BOOT CAMPS: harmful; the exam favourite.",
        "THE PHARMACOLOGY: no drug treats CD itself; treating comorbid ADHD (stimulants/atomoxetine) = the best-evidenced drug reduction of aggression; risperidone's short-term role in severe explosive dysregulation with weight/endocrine monitoring.",
        "THE RED-FLAG PAIR: cruelty to animals and fire-setting = the serious-signal pair; runaway = the abuse-screen trigger (read FROM, not TO).",
        "GIRLS' CD: relational aggression and runaway presentations, abuse under-layer, under-referred; the standard missed presentation.",
        "THE INDIAN LEGAL LAYER: JJ Act 2015; the Juvenile Justice Board processes the child in conflict with law, observation-home placement where needed, rehabilitation mandate, education continuing in custody.",
        "THE TRAPS: street-survival adaptation mislabelled CD; PTSD under reactive aggression; DMDD/bipolar irritability mistaken for CD instrumentality; the 'manipulative' runaway girl.",
      ],
      pyqConcepts: [
        "ODD versus CD differentiation: the recurring short-note and the single-axis answer.",
        "Juvenile delinquency and mental illness: the JJ Act's rehabilitation framework.",
        "The boot-camp harm evidence: the ethics-flavoured one-liner that recurs.",
        "The limited-prosocial-emotions specifier and its significance: the modern classifier's favourite.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A Std-6 boy is brought for 'high energy'; the school's file has two suspensions and a weapon found in the bag; the father narrates the fighting as normal male energy and the beatings as discipline. The reasoning chain: the childhood-onset shape (fighting since primary school), the harsh-then-capitulating home audit, the ADHD screen (the ignition), the abuse and domestic-violence screen (the engine), and the counter-frame that lands with the family ('the same aggression that reads as boyhood at 12 reads as criminal record at 16') before any treatment manual is chosen.",
        "A 14-year-old street-referred boy labelled 'conduct case' smells of glue at assessment, steals within the observation home, and has no pre-street behaviour history. The reasoning chain: the substance screen first (glue and inhalants the street entry, mimicking and deepening the conduct picture), the context audit (behaviour confined to the survival economy), the order of the pathway (re-enrolment + shelter + de-addiction, in that order) and the label question (economy or disorder) that decides whether the clinic is treatment or moral cover.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "ODD = defiance without rights violation; CD = the four bands with rights violation.",
        "Boot camps and fear-based institutions: harmful, not merely ineffective.",
        "No medication treats conduct disorder itself; medication treats the drivers.",
        "Treating comorbid ADHD is the best-evidenced pharmacological route to reduced aggression.",
        "Truancy before 13 and running away twice or more = the serious rule-violation band; the runaway mandates the abuse screen.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The standing-referral letter (every expelled child and every first-time JJ-Board child gets a mental-health assessment) is the highest career-yield system intervention an Indian clinician can write; one letter to a school board or a District Magistrate institutionalises the funnel.",
        "The two-source rule is non-negotiable: the group pattern is invisible from the living room; the teacher's report is half the diagnosis, and the observation-home register is the informant nobody asked.",
        "The manual mismatch is the field's commonest treatment error: the callous-profile child prescribed anger-escalation parenting learns nothing except that the adults are unpredictable.",
        "The 'anger-control syrup' and 'behaviour tonic' from the local pharmacy: placebo commerce; say so plainly, and name what the money should buy instead (the named-model programme with measurable targets).",
        "The intergenerational inconsistency fingerprint ('he obeys only when grandfather is home') predicts programme failure until the grandparents are trained alongside the parents.",
        "The observation-home reality work: screen for trauma (nearly universal), diagnose the drivers, treat withdrawal, protect the youngest from exploitation inside, and write assessments the Juvenile Justice Board can actually use for disposition.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The boy with the bicycle gang",
      presentation: "A police warning slip, a stolen-bicycle pattern, a puppy's cut ear, and a father whose beatings had already completed the boy's fear-training.",
      initialPresentation: "A 13-year-old Nashik boy reached the district child-guidance clinic carrying a police warning slip for his third bicycle-theft incident with a peer group. The school documented two years of bullying juniors and two suspensions; the mother whispered that he had cut the neighbour's puppy's ear the year before: 'and when I asked, he smiled'. Fighting had been recorded since Std 3, the childhood-onset shape.",
      history: "The father's discipline: 'I beat him till my hand hurts; he looks at me like I am wasting my time.' Both parents worked until 9 pm: the 5–10 pm unsupervised street window was the entire offence timetable; domestic shouting the home model. No guilt language at interview; the school report: 'charming when he wants something; uses juniors to do the stealing.'",
      examination: "Calm, engaging, no anxiety and no remorse; ADHD screen negative; the cruelty-to-animal and weapon-adjacent pattern confirmed across home and school sources: the 12-month band counts met.",
      diagnosis: "Conduct disorder, childhood-onset, WITH the limited prosocial emotions specifier: guilt absent, empathy absent, unconcern about performance, shallow charm, established across multiple sources over time.",
      management: "The different manual, stated as such to the parents: the father re-trained from the 'louder stick' to a calm loss-of-privilege ledger (predictable consequences without affect); a visible reward economy (the cricket-bat earn-plan); the supervision-architecture rebuild: the tuition-to-dinner chain closing the window, the mother's return to early-shift work; a school behaviour plan with check-in mentoring (the school converted expulsion to final probation on the clinic's letter); deviant-peer substitution through the municipal cricket academy with earned pocket money matched to the theft average: the wage-replacement plan; and warmth-coaching for both parents with explicit empathy-cultivation homework (emotion-labelling at dinner, films with perspective-taking discussion).",
      outcome: "Twelve months: no police contact and two school-incident-free terms. At month nine the 'puppy' conversation had a second run. He said the neighbour's dog had cost him a friend's respect: the instrumental logic visible, the guilt still thin. The trajectory bent, not finished; the follow-up map kept long.",
      teachingPoints: [
        "The childhood-onset + callous profile called the DIFFERENT manual on day one: predictable consequences, reward-heavy structure, warmth-coaching.",
        "The parents' beatings were the fear-training's completion, not the treatment: the reframing that made the father a co-therapist.",
        "Closing the unsupervised 5–10 pm window did more than all the consequences combined: supervision architecture is treatment.",
        "The wage-replacement economics of theft: where a peer group supplies money and status, the plan must replace the money and status, not lecture about them.",
        "Honest prognosis with a maintained follow-up horizon: bent, not finished; the specifier's course is measured in years.",
      ],
    },
    {
      title: "The girl who was labelled, not asked",
      presentation: "Fourth runaway episode, a register that said 'manipulative', and a stepfather the register never mentioned.",
      initialPresentation: "A 15-year-old from a peri-urban Bhopal settlement was referred from an observation home after her fourth runaway episode. School reports called her 'morally corrupted, leads younger girls astray'; the home's register read 'conduct disorder, repeat absconder, manipulative'. The referral psychiatrist's intake inverted the frame: safety assessment first, then the abuse screen, as a slow, single-session, non-leading disclosure protocol conducted over two sessions.",
      history: "Over those sessions: the stepfather's abuse since she was 12, during the mother's work hours; each flight to a friend's house, never the streets: the 'runaway' pattern was escape, not exploitation, though the trafficking vulnerability rose with each round. She had taken a younger cousin along on the last escape: protective from the inside, delinquent from the register. No conduct antecedents before 12; the adolescent-looking shape with the trauma engine under it.",
      examination: "The PTSD pattern at interview: nightmares, hypervigilance, the reactivity profile; the lying and absconding read as survival tools of a normal child in an abnormal situation.",
      diagnosis: "PTSD with secondary conduct behaviours: the trauma engine under an adolescent-looking presentation; not primary conduct disorder, the pre-morbid pattern absent.",
      management: "Safety first: a supported maternal-aunt placement; the stepfather's case filed under POCSO (mandatory reporting applies). Trauma-focused CBT over 14 sessions: the dissociation and nightmare work first; the mother's own counselling (the betrayal handled without blame, preserving the placement); re-enrolment through an open-schooling route with a woman mentor-teacher; the register's 'manipulative' entry formally revised: documentation advocacy is treatment; no medication except brief sleep-phase melatonin.",
      outcome: "One year: no further absconsion; school records positive; the nightmares 'monthly, not nightly'. The single best predictor of her outcome was the placement question: safety first, everything else second.",
      teachingPoints: [
        "The girl's 'conduct' was the symptom of the thing done TO her. The abuse screen is mandatory, not optional.",
        "'Running away' must always be read as FROM: home the first suspect, not the last; the trafficking risk rises with every round unasked about.",
        "One skilled disclosure interview, never repeated interrogation, and no promises you cannot keep.",
        "Re-labelling the register is a clinical act: the observation home's paperwork follows the child.",
        "The single best predictor of her outcome was the placement question: safety first, everything else second.",
      ],
    },
  ],
  clinicalPearls: [
    "ODD defies; CD violates: the single axis that separates the rungs, and the answer to the exam question asked every year.",
    "Most ODD never becomes CD; the progression stack is ODD + ADHD + harsh parenting + a family aggression culture: hunt all three at the first visit.",
    "Childhood-onset CD (before 10): ADHD in up to half, harsh parenting, the higher adult antisocial risk; a third to half in severe cohorts; adolescent-onset is peer-driven and mostly desists.",
    "The limited-prosocial-emotions specifier calls the different manual: predictable calm consequences, reward-heavy structure, warmth-coaching; anger teaches these children nothing; predictability does.",
    "Low resting heart rate: the classic fearlessness correlate of the callous-unemotional profile; the physiology viva favourite.",
    "The coercive cycle: escalation trained by parental capitulation at peak screaming; parent management training changes the STEPS of the dance, not the dancers' characters.",
    "PMT is first-line for ODD and childhood CD: 8–20 structured sessions; single-session advice fails, and the grandparents need the same training the parents get.",
    "MST: the case-worker with 3–5 families, in the home/school/peer ecology for 3–5 months; FFT: 12–14 sessions; treatment foster care (Oregon) when home cannot be made safe fast enough.",
    "Boot camps and fear-based institutions are iatrogenic: abuse rates, suicide risk, post-traumatic outcomes; the exam favourite and the clinic's clear NO.",
    "No drug treats CD itself; treating comorbid ADHD with stimulants or atomoxetine is the best-evidenced pharmacological route to reduced aggression in this field.",
    "Risperidone's defined role: severe explosive dysregulation unresponsive to structure, short-term, lowest dose, weight and endocrine monitoring, never the boarding-school discipline tool.",
    "Running away is FROM: the runaway girl's abuse screen is mandatory, one skilled interview, safety first, and POCSO's mandatory reporting where sexual abuse emerges.",
    "The expulsion converted into final probation WITH a written behaviour plan: the clinic's letter is a life-trajectory intervention; keep the template.",
  ],
  highYieldSummary: [
    "Definition and ladder: ODD = 4+ defiant-band symptoms (loses temper, touchy, defies, deliberately annoys, blames, spiteful/vindictive) for 6 months with impairment, anger-shaped and authority-shaped, WITHOUT rights violation; CD = 3+ symptoms across the four bands (aggression to people/animals, destruction, deceit-theft, serious rule violation) in 12 months with 1+ in the past 6, with impairment; the A-D-D-R mnemonic; onset subtypes (childhood before 10, adolescent) and the specifier (limited prosocial emotions, 2 of 4 from multiple sources over time) complete the classification; ICD-11 aligns with the equivalent prosocial-emotions qualifier.",
    "Epidemiology: ODD ~3–6% of children; CD ~2–4% of adolescents; boys dominate the childhood-onset form, girls present later and relationally and are under-referred; of childhood-onset CD followed to adulthood, a third to half in severe cohorts meet antisocial personality disorder criteria, while adolescent-onset mostly desists; India has no national CD survey. The visible layer is NCRB's juvenile statistics (tens of thousands of children in conflict with law yearly, overwhelmingly boys, theft and hurt), observation-home populations dominated by poverty, orphanhood and abuse, and a detection funnel that runs backwards through police before clinics.",
    "Mechanism: the four stories; the coercive cycle (Patterson: harsh command, escalation, capitulation; both reinforced), the hostile lens (Dodge: neutral faces read as hostile; word-failure origins in language delay and low verbal ability), the cold engine (the Blair lineage: under-responsive threat system, weak fear conditioning, reward-dominant decisions; the specifier's engine), and the street school (peer contagion and survival economics); the comorbidity amplifier. ADHD's impulsivity, PTSD's triggered heat, substance's disinhibition.",
    "Diagnosis: the band counts and gates; the assessment structure: two sources, the mandatory abuse screen, the developmental and family map, the comorbidity hunt, IQ/learning and speech-language screens, the environment audit (the child's income sources; theft can be a living), the legal-positioning history (JJ Board contacts, observation-home stays); the differential. ADHD impulsivity (unaimed, regretted), PTSD (trigger-linked), substance-fuelled (onset tracks the substance), bipolar (episodic), DMDD (non-episodic irritability, no instrumentality), autism crises (incomprehension, not calculation), adjustment disorder (stressor-bounded), street-survival adaptation (economy, not disorder).",
    "Management: parent management training first-line (8–20 structured sessions; the 5:1 attention ratio; effective commands; planned ignoring; calm short consequences; token economy; supervision architecture; the Incredible Years/PMTO group delivery); the multisystem tier for moderate-to-severe CD (MST's case-worker with 3–5 families for 3–5 months; FFT's 12–14 sessions; treatment foster care Oregon); school and peer work (behaviour plans, check-in mentoring, deviant-peer decontamination by substitution, vocational wage-replacement); the callous-profile manual (predictable consequences, reward-heavy structure, warmth-coaching, longer horizon); the inverted runaway-girl pathway (safety, one skilled interview, trauma therapy before behaviour work, register revision); institutional care last resort with active mental-health input.",
    "Pharmacology: no drug treats CD itself; the drivers are the targets. ADHD (stimulants/atomoxetine: the strongest pharmacological aggression evidence), severe explosive dysregulation (risperidone short-term, lowest dose, defined review, weight and endocrine monitoring), PTSD (trauma therapy; SSRIs for the comorbid anxiety rider), substance (the substance tier); the 'anger-control syrup' is placebo commerce; boot camps show harm, not absence of effect.",
    "The Indian layer: the JJ Act 2015 machinery (Juvenile Justice Board, observation home, rehabilitation mandate, education in custody); the standing-referral arrangement as the highest-yield system intervention; the case-manager model as the honest MST approximation on the free spine (DMHP psychologist, probation officers, Childline 1098, school counsellor, NGOs); the punishment-culture reframe and the fear-training script; 'boys will be boys' and the 12-to-16 road frame; the domestic-violence engine; the expulsion-to-probation letter; the Dalit/poverty/tribal over-representation caution; the private metro packages at ₹50,000–2,00,000+ (approx 2026) and the name-the-model question.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "cd-quiz-1",
      question: "In the coercive cycle, the single most important target of parent management training is:",
      options: ["The child's moral understanding", "The STEPS of the parent-child dance — rewarding first compliance, ignoring the escalation window, calm low-intensity consequences", "Separating the child from both parents", "Higher-dose punishment at peak anger"],
      correctIndex: 1,
      explanation: "The dance trains itself over a thousand evenings; the treatment changes the steps, not the dancers' characters — consequences delivered at the peak of anger arrive exactly when they teach escalation.",
      afterSectionId: "mechanism",
    },
    {
      id: "cd-quiz-2",
      question: "A parent reports the child cut a neighbour's puppy's ear 'and smiled when asked'. The correct immediate classification of this behaviour:",
      options: ["A phase of male adolescence", "A serious-signal symptom — front of the queue, immediate specialist assessment", "Normal sibling-rivalry displacement", "An indicator for a stricter boot camp"],
      correctIndex: 1,
      explanation: "Cruelty to animals is one of the red-flag five — it marks the high-risk end of the aggression spectrum and warrants immediate professional assessment, never watch-and-wait.",
      afterSectionId: "symptoms",
    },
    {
      id: "cd-quiz-3",
      question: "The DSM-5/ICD-11 count-and-gate for conduct disorder:",
      options: ["2 symptoms, 1 month", "3+ symptoms across the four bands in 12 months, with at least 1 in the past 6", "4+ defiant-band symptoms in 6 months", "5 symptoms, 2 years"],
      correctIndex: 1,
      explanation: "3+ across aggression/destruction/deceit-theft/rule-violation in 12 months with 1 in 6 — the 4+/6-month gate belongs to ODD, the lower rung.",
      afterSectionId: "diagnosis",
    },
    {
      id: "cd-quiz-4",
      question: "A street-referred 13-year-old steals only within the survival economy, has no pre-street behaviour history, and is calm in the protected shelter. The most accurate framing:",
      options: ["Severe conduct disorder with the specifier", "Street-survival adaptation — economy, not psychopathology", "Untreated ODD", "Adolescent-onset bipolar disorder"],
      correctIndex: 1,
      explanation: "The context audit decides: behaviour confined to the survival economy, absent in protected contexts, no pre-street pattern — the pathway is re-enrolment + shelter + de-addiction, in that order.",
      afterSectionId: "differential",
    },
    {
      id: "cd-quiz-5",
      question: "Parents arrive with a brochure for a 'military-style academy'. The evidence-based reply:",
      options: ["Effective for the callous profile", "Effective if the child is older than 14", "The evidence shows harm — abuse rates, suicide risk, post-traumatic outcomes; treatment-oriented alternatives only", "First-line before parent training"],
      correctIndex: 2,
      explanation: "Boot camps and fear-based institutions are iatrogenic, not merely useless — several reviews document the harm; the clinic's duty is a clear NO plus the evidence tier.",
      afterSectionId: "management",
    },
    {
      id: "cd-quiz-6",
      question: "Under the JJ Act 2015, a child in conflict with law in India is:",
      options: ["Tried as an adult without exception", "Processed by the Juvenile Justice Board with a rehabilitation mandate, observation-home placement where needed, and the right to education in custody", "Institutionalised without mental-health assessment", "Excluded from education during custody"],
      correctIndex: 1,
      explanation: "The Board's rehabilitative frame is the law: the clinic's assessments feed its decisions, and the mental-health tier is its ally, not its afterthought.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Give the one-axis separation of ODD from CD, and name the ODD-to-CD progression risk stack.", answer: "THE AXIS: violation of others' basic rights and aggression; present in CD, absent in ODD. ODD is the lower rung: loses temper, touchy, defies/refuses, deliberately annoys, blames, spiteful/vindictive; 4+ of the defiant band for 6 months with impairment, exhausting and conflict-filled but with NO aggression that harms, NO deceit, NO theft, NO law violation. CD is the upper rung: 3+ across the four bands in 12 months with 1+ in 6. THE PROGRESSION STACK: most ODD never becomes CD; the children who progress usually carry ADHD + harsh parenting + a family aggression culture stacked underneath the defiance: hunt all three at the first visit, because each is a treatable gear in the machine.", topic: "Classification" },
    { question: "What four criteria-symptom bands define CD, and what duration gates qualify them?", answer: "THE BANDS (the A-D-D-R mnemonic): (1) AGGRESSION to people and animals; bullying, initiating fights, weapon use in fights, cruelty to people, cruelty to animals, robbery, sexual coercion; (2) DESTRUCTION of property: deliberate fire-setting, deliberate destruction; (3) DECEIT-THEFT: breaking-in, con-artistry, shoplifting beyond occasional (the pattern, not the incident); (4) RULE VIOLATION: age-inappropriate staying out nights, running away twice or more, truancy before 13, law violations reaching the Juvenile Justice Board. THE GATES: at least 3 symptoms across the bands in the past 12 months with at least 1 in the past 6 months, plus clinically significant impairment; then the two specifications: onset subtype (childhood before 10 versus adolescent) and the limited-prosocial-emotions specifier (2 of 4: guilt absent, callous lack of empathy, unconcern about performance, shallow affect, from multiple sources over time).", topic: "Diagnosis" },
    { question: "Contrast childhood-onset and adolescent-onset CD on adult outcome, and state what the limited-prosocial-emotions specifier changes in the PLAN.", answer: "CHILDHOOD-ONSET (before 10): male-predominant, ADHD comorbidity ~50%, harsh-parenting association, impulsivity as ignition, and the higher adult antisocial personality disorder risk: a third to half in severe cohorts, by cohort and severity filter. ADOLESCENT-ONSET: peer-group and situation driven, behaviour WITH the group and largely absent alone, mostly desists as the group and the stakes change; the better prognosis, but the drivers still treated. WHAT THE SPECIFIER CHANGES: the manual itself. Consequences must be PREDICTABLE and consistent, not emotional: anger teaches nothing to this child, predictability does; reward-heavy structure with visible earning and loss without drama; parent warmth-coaching with explicit empathy cultivation (modelling, emotion-labelling, perspective-taking games, the attachment-based interventions for this profile); a longer horizon with smaller increments; family burnout protection with respite. The mis-prescribed manual (standard anger-escalation parenting given to the callous profile) is the commonest treatment error in this field.", topic: "Prognosis & treatment" },
    { question: "Narrate the coercive cycle and the two interventions that directly break its steps.", answer: "THE CYCLE: the parent commands; the child refuses; the parent commands louder; the child escalates; the parent explodes or capitulates, and BOTH are reinforced: the child who screams loudest makes the parent quit (escalation WORKS), the parent who hits hardest buys five minutes of peace (the violence curriculum modelled). The dance trains itself over a thousand evenings, generalising to school, peers and the street. THE TWO BREAKING MOVES: (1) reward the FIRST compliance; micro, immediate, contingent praise (the 5:1 attention ratio), so the parent reinforces the exit ramp rather than the escalation window; (2) deliver short consistent consequences CALMLY at low-intensity moments, never at the peak of anger, where punishment arrives as both attention and modelling of exactly the affect being treated; with planned ignoring of the negative-attention window closing the loop. The frame: change the STEPS, not the dancers' characters.", topic: "Mechanism" },
    { question: "Explain why anger-based punishment teaches the callous-profile child nothing, and what replaces it.", answer: "WHY IT FAILS: the callous profile rides an under-responsive threat system; weak fear conditioning (the low-resting-heart-rate correlate), punishment that does not sting, distress cues that do not inhibit; emotional consequences presuppose a learner who feels the fear or shame being delivered, and this child does not; worse, the affective escalation supplies attention and modelling at exactly the moment the programme should be withdrawing both. WHAT REPLACES IT: predictability; consequences that arrive calm and on schedule, every time; reward-heavy structure: privileges earned visibly, lost without drama (the reward-dominant decision style means the gains ledger is the lever that works); warmth-coaching for parents: empathy needs explicit cultivation: modelling, labelling emotions, perspective-taking games; a longer horizon with smaller increments, and family burnout protection, because the course is measured in years and the parents' endurance is the treatment's load-bearing wall.", topic: "Treatment" },
    { question: "Which comorbid drivers must be treated before judging any 'conduct treatment failure', and which one has the strongest pharmacological aggression evidence?", answer: "THE DRIVERS: ADHD (the ignition, impulsivity supplying the heat under up to half of childhood-onset CD); PTSD (trauma-driven reactive aggression, trigger-linked, hypervigilant, dissociative; the abuse screen is mandatory in every CD child, boys included); substance use (the channel and the disinhibitor, glue and inhalants first on the street, cannabis later); mood disorders (irritable bipolar and the DMDD-spectrum, chronic non-episodic irritability, to be separated from instrumentality, not confused with it). THE PHARMACOLOGICAL LEADER: treating comorbid ADHD (stimulants or atomoxetine) measurably reduces aggression in CD children, the strongest pharmacological evidence in this field; no drug treats CD itself, and the 'treatment failure' verdict written before the driver audit is a clinical error, not a clinical finding. Risperidone's short-term role (severe explosive dysregulation unresponsive to structure, lowest dose, defined review, weight and endocrine monitoring) is the small, defined exception, never the boarding-school discipline tool.", topic: "Pharmacology" },
    { question: "Recite the abuse-screen rule for runaway girls and the one-interview disclosure discipline.", answer: "THE RULE: a runaway is running FROM something as often as TO something, in girls especially, repeated absconding ALWAYS triggers the abuse assessment; home is the first suspect, not the last; the trafficking and sexual-abuse layer rides under 'conduct problem' and 'immoral character' labels until someone asks, and the assessing clinician's oath is that behaviour which shocks must trigger questions, not judgments. THE ONE-INTERVIEW DISCIPLINE: the disclosure is sought in a single skilled, non-leading interview, at the child's pace; no repeated interrogation (each repetition re-traumatises and teaches recantation), no promises you cannot keep; safety first, where does she sleep tonight, the trafficking risk assessment, the placement question that predicts outcome better than any symptom count; then the mandated reporting where sexual abuse emerges (POCSO in India); then trauma therapy BEFORE any behaviour work; and the register's 'manipulative' entry formally revised: documentation advocacy is treatment, because the observation home's paperwork follows the child.", topic: "Clinical practice" },
    { question: "Name the institutional approaches with trial evidence, the one with evidence of harm, and the Indian approximation of the evidence tier.", answer: "THE EVIDENCE TIER: multisystemic therapy; the best-evidenced intensive programme: a case-worker carrying 3–5 families, working IN the home/school/peer ecology for 3–5 months, with trials showing reduced re-arrest and out-of-home placement; functional family therapy: 12–14 sessions working the family's interaction functions beneath the behaviour; and treatment foster care (the Oregon model): a specialised foster family as the intervention for the child whose home cannot be made safe fast enough. THE HARM EVIDENCE: boot camps, 'military academies' and fear-based programmes, not merely ineffective but harmful: abuse rates, suicide risk, post-traumatic outcomes across several reviews; the clinical duty is a clear NO, however persuasive the brochure. THE INDIAN APPROXIMATION: the case-manager model, one counsellor (NGO, school or district mental-health programme) doing the family work, school liaison, peer plan and follow-up across 3–6 months, networked with Childline 1098, the JJ Board's probation officers and local NGOs; the plan written like an MST skeleton and staffed with whoever can hold it.", topic: "Services & evidence" },
  ],
  faqs: [
    { question: "Is my child a psychopath?", answer: "No, and that word is not a childhood diagnosis; it should never be used about a child. What you may be describing is the limited-prosocial-emotions profile: reduced guilt and empathy, which is a real, nameable pattern with a treatment approach built for it. It carries a harder road, not a verdict; children with this profile improve with the right consistency-based programme, especially when it starts early." },
    { question: "Will he become a criminal?", answer: "The honest spread: adolescent-onset behaviour with the peer group mostly fades with maturation; childhood-onset behaviour with the callous pattern carries a materially higher risk of adult antisocial problems: a third to half in the most severe cohorts, not a certainty. What bends the odds: treating the drivers (attention problems, trauma, substance), the parent programme, real supervision, and keeping him in school. We are managing odds, and the odds are movable." },
    { question: "We beat him and nothing works. What now?", answer: "The beatings are part of the machinery keeping this going: they taught him escalation, and they have now completed his fear-training; he no longer fears the stick. The programme that works replaces anger with consistency: small immediate consequences he can predict, rewards that arrive before he escalates, and parents who mean it calmly. It feels counter-intuitive; the trials support it." },
    { question: "Is it the company he keeps?", answer: "Partly, genuinely, for the adolescent-onset pattern, the peers are the engine. But the fix is not forbidding friends; that launches a war you lose. It is substitution: supervised activities occupying the same evening hours, plus the family work, plus keeping him in school. Where the group supplies money and status, the plan must replace the money and the status, not just lecture about them." },
    { question: "Is there a medicine for this?", answer: "No medicine treats conduct disorder itself. Medicines treat what is DRIVING it in a given child: attention problems (the best-evidenced, treating ADHD measurably reduces the aggression), trauma, substance, mood. If someone prescribes a 'behaviour syrup' or an 'anger tonic', that is commerce, not medicine." },
    { question: "Should we send him to a strict boarding school or a military-style academy?", answer: "The evidence says these fear-based institutions do not just fail. Several reviews show harm, including abuse and worsened trauma. If the home cannot hold him, the evidence tier is treatment-oriented foster or residential placement with therapy in it. A 'strict' environment without treatment is just a more organised place to get worse." },
    { question: "She keeps running away. She is spoilt and stubborn?", answer: "A runaway is running FROM something as often as TO something. In girls especially, repeated absconding should always trigger an abuse assessment; home is the first suspect, not the last. We ask carefully, once, and protect first. When abuse is confirmed, the 'conduct problem' usually turns out to be a normal child escaping an abnormal situation." },
    { question: "He is cruel to animals: is that a phase?", answer: "No. Animal cruelty is a serious signal, not a phase: it marks the high-risk end of the aggression spectrum and warrants immediate professional assessment. It is assessable and treatable, but it goes to the front of the queue, not the watch-and-wait pile." },
    { question: "How long does treatment take?", answer: "Longer than families want to hear: months of programme work, follow-up in years. ODD often improves within 8–20 structured sessions of parent training; CD needs the family-system work plus the school and peer reconstruction. We set small dated targets: no police contact for 90 days, then one incident-free term. Progress in this condition is measured in quiet weeks, not transformations." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5 / DSM-5-TR (APA) — the paraphrased CD/ODD constructs and the limited-prosocial-emotions specifier (criteria paraphrased, not reproduced)" },
      { source: "WHO ICD-11 — conduct-dissocial disorder and oppositional defiant disorder framing, with the equivalent prosocial-emotions qualifier" },
      { source: "Juvenile Justice (Care and Protection of Children) Act 2015 (India) — the Juvenile Justice Board, observation home and rehabilitation mandate machinery" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.5 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Henggeler SW et al. — the multisystemic therapy trials (the CD evidence tier: reduced re-arrest and out-of-home placement)" },
      { source: "Alexander JF et al. — functional family therapy; Chamberlain P — treatment foster care (the Oregon model)" },
      { source: "Kolko DJ and the ADHD-aggression treatment lineages; RUPP-related trials of risperidone in severe childhood aggression — the small, defined pharmacological role" },
    ],
    reviews: [
      { source: "Patterson GR — the coercion model; Dishion TJ et al. — the coercive-family-cycle and deviant-peer lineages" },
      { source: "Dodge KA — hostile attribution bias in aggressive children (the social-cognition mechanism line)" },
      { source: "Blair RJR — the callous-unemotional affective-neuroscience lineage (the under-responsive threat-system account and its child translation)" },
      { source: "Frick PJ & Viding E — the prosocial-emotions specifier: developmental evidence and treatment implications" },
      { source: "Upshur and the Cochrane-informed reviews of boot camps — the harm evidence at the criminal-justice mental-health interface" },
      { source: "NCRB juvenile-in-conflict-with-law statistics and Childline 1098 network documentation — the Indian visible layer (approx 2026)" },
    ],
    patientResources: [
      { source: "Childline 1098 — the 24-hour child helpline for street children, abuse referrals and children in need of care and protection" },
      { source: "The clinic's two instruments: the expulsion-to-final-probation letter template and the fear-training counselling script — ask the treating team for the written versions" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "9 min",
      description: "Plain language: the two rungs, the system-around-the-child treatment, the warning signs, the honest long-run numbers.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The ladder and its gates, the four mechanism stories, the differential, the evidence hierarchy, the red flags.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "38 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "47 min",
      description: "Everything: the different manual, the runaway-girl inversion, the JJ Act interface, the case-manager craft, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The two-rung ladder, the prognostic splits, the specifier that changes the manual.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can separate ODD from CD on the single axis and say what the specifier changes in the plan." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The coercive dance, the hostile lens, the cold engine, the street school.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can narrate the coercive cycle and explain why anger teaches the callous-profile child nothing." },
    { number: 3, title: "Clinical Practice", description: "The band logic, the assessment structure, the differential, the treatment hierarchy, the red flags.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the two-source assessment, the mandatory abuse screen and the evidence-ordered treatment plan." },
    { number: 4, title: "Indian Context", description: "The backward funnel, the JJ Act interface, the case-manager model, the counselling scripts.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can write the standing-referral letter and deliver the fear-training script without contempt." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and the high-yield spine.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the 12-year-old-with-fighting-stealing-truancy essay cold and recite the boot-camp harm verdict." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.5 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "American Psychiatric Association: DSM-5 / DSM-5-TR — the CD/ODD constructs, duration gates, onset subtypes and the limited-prosocial-emotions specifier (logic paraphrased; criteria not reproduced)", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
    { id: "S3", source: "WHO: ICD-11 — conduct-dissocial disorder and oppositional defiant disorder framing, with the equivalent prosocial-emotions qualifier", sourceType: "classification", year: "2022", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Patterson GR (the coercion model) and Dishion TJ et al. — the coercive-family-cycle and deviant-peer lineages", sourceType: "primary", year: "1980s–1990s onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Dodge KA — hostile attribution bias in aggressive children (the social-cognition mechanism line)", sourceType: "primary", year: "1980s–1990s", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Blair RJR — the callous-unemotional / psychopathy-lineage affective neuroscience: the under-responsive threat-system account and its child-specifier translation (including the low-resting-heart-rate correlate)", sourceType: "primary", year: "1990s–2010s", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Frick PJ & Viding E — the prosocial-emotions specifier: developmental evidence and treatment implications", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Henggeler SW et al. — the multisystemic therapy trials (the CD evidence tier); Alexander JF et al. — functional family therapy; Chamberlain P — treatment foster care (the Oregon model)", sourceType: "trial", year: "1990s–2000s", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Upshur / Cochrane-informed reviews of boot camps and the criminal-justice mental-health interface — the harm evidence", sourceType: "systematic-review", year: "2000s–2010s", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Kolko DJ / the ADHD-aggression treatment lineages; RUPP-related trials of risperidone in severe childhood aggression — the small, defined pharmacological role", sourceType: "trial", year: "2000s", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Indian layer: Juvenile Justice (Care and Protection of Children) Act 2015; NCRB juvenile-in-conflict-with-law statistics; Childline 1098 network documentation; observation-home practice realities (approx 2026)", sourceType: "government", year: "2015 onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The ladder: ODD (4+ defiant-band symptoms for 6 months, impairment, no rights violation) in roughly 3–6% of children; CD (3+ across the four bands in 12 months with 1 in 6) in around 2–4% of adolescents: boys dominating the childhood-onset form, girls the relational-aggression and runaway presentations and under-referred everywhere.", grade: "established", sources: ["S1", "S2", "S3"] },
    { text: "The prognostic splits: childhood-onset CD (before 10, ADHD-heavy, harsh-parenting-associated) carries the higher adult antisocial personality disorder risk; a third to half in severe cohorts; adolescent-onset CD is peer-driven and mostly desists; most ODD never becomes CD, the progression stack being ODD + ADHD + harsh parenting + a family aggression culture.", grade: "established", sources: ["S1", "S7"] },
    { text: "The specifier: limited prosocial emotions (2 of 4 (lack of guilt or remorse, callous lack of empathy, unconcern about performance, shallow/deficient affect) confirmed from multiple sources over time) predicts a harder, longer course and demands a different treatment design (predictable consequences, reward-heavy structure, warmth-coaching).", grade: "established", sources: ["S2", "S6", "S7"] },
    { text: "The four mechanism stories: the coercive family cycle (harsh command, escalation, parental capitulation, both reinforced), hostile attribution bias (neutral faces read as hostile; word-failure origins in language delay), the callous path (weak fear conditioning, reward-dominant decisions, low resting heart rate as the fearlessness correlate), and deviant-peer contagion with street-survival economics.", grade: "established", sources: ["S4", "S5", "S6"] },
    { text: "The treatment hierarchy: parent management training first-line for ODD and childhood CD (8–20 structured sessions; the 5:1 attention ratio; calm short consequences; supervision architecture; the Incredible Years/PMTO group delivery); multisystemic therapy (case-worker, 3–5 families, 3–5 months, in-home/school/peer ecology), functional family therapy (12–14 sessions) and treatment foster care (Oregon model) for moderate-to-severe CD: trials showing reduced re-arrest and out-of-home placement.", grade: "established", sources: ["S8"] },
    { text: "Boot camps, 'military academies' and fear-based programmes: evidence of harm, not mere absence of effect; abuse rates, suicide risk and post-traumatic outcomes across several reviews; the clinical duty is a clear NO, with treatment-oriented placement as the alternative.", grade: "established", sources: ["S9"] },
    { text: "The pharmacological honesty: no drug treats CD itself; treating comorbid ADHD (stimulants or atomoxetine) measurably reduces aggression: the strongest pharmacological evidence in this field; risperidone's short-term role confined to severe explosive dysregulation unresponsive to structure, at the lowest dose with defined review and weight/endocrine monitoring; the 'anger-control syrup' tier is placebo commerce.", grade: "established", sources: ["S10"] },
    { text: "The runaway-girl rule: repeated absconding mandates the abuse assessment; safety first, a single skilled non-leading disclosure interview (no repeated interrogation, no unkeepable promises), mandatory reporting where sexual abuse emerges (POCSO in India), trauma therapy before behaviour work, and the register's label formally revised.", grade: "supported", sources: ["S1", "S11"] },
    { text: "The Indian layer: the backward detection funnel (police and JJ Board before clinics); the JJ Act 2015 machinery (Juvenile Justice Board, observation home, rehabilitation mandate, education in custody); the case-manager model as the honest MST approximation on the free spine (district mental-health programme, probation officers, Childline 1098, school counsellor, NGOs); private metro packages at ₹50,000–2,00,000+ (approx 2026) deserving the name-the-model question.", grade: "supported", sources: ["S11"] },
    { text: "The Indian cultural cautions: corporal punishment as the culturally approved response training the coercive cycle; 'boys will be boys' delaying help by years; the domestic-violence engine under a large share of Indian CD; the Dalit/poverty/tribal over-representation of 'conduct' labels on survival adaptation: the assessment's disorder-or-economy question.", grade: "supported", sources: ["S11"] },
    { text: "The comorbidity drivers treated before any treatment-failure verdict: ADHD (up to half of childhood-onset CD), PTSD (trauma-driven reactive aggression, the mandatory screen in every CD child), substance use (glue and inhalants first, cannabis later), and mood (the DMDD/bipolar irritability distinction from instrumentality).", grade: "established", sources: ["S1", "S10"] },
  ],
};
