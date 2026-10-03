import type { PsychiatryCourse } from "./types";

/**
 * YOUTH SUICIDE & SELF-HARM — canonical Psychiatry course
 * (migration batch 13, Group L — child & adolescent psychiatry).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/youth-suicide.md — untouched foundation),
 * re-researched against the lineages the note itself cites
 * (Stanley-Brown safety planning, Columbia Lighthouse C-SSRS,
 * Hawton/Gunnell means restriction with the Sri Lankan pesticide
 * natural experiments, Goldman-Mellor brief contact,
 * Miller/McCauley DBT-A, Klonsky/Nock NSSI function, Gould's
 * asking trial, WHO media discipline, MHA 2017 s.115, NCRB/ADSI).
 *
 * CRISIS RULE (mirrored at the top of the note and in the live
 * Suicide & Deliberate Self-Harm course): worried about a young
 * person right now — Tele-MANAS 14416 (24×7, Government of India,
 * free, 20 languages) or CHILDLINE 1098 (anyone under 18);
 * life-threatening emergency: nearest hospital emergency dept.
 *
 * Drug routes: fluoxetine — the comorbid-depression SSRI tier the
 * note genuinely assigns, with the weekly-review and
 * activation-watch discipline — has a KYP lesson and is linked;
 * DBT-A, the C-SSRS instrument, the gatekeeper/postvention
 * programmes and the crisis lines have no KYP lessons and are
 * recorded in contentGaps, never invented.
 */
export const youthSuicideCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "youth-suicide",
  title: "Youth Suicide & Self-Harm",
  shortName: "Youth suicide",
  kind: "disorder",
  category: "Child & Adolescent Psychiatry",
  groupLetter: "L",
  groupName: "Child & adolescent psychiatry",
  learningPath: ["Psychiatry", "Child & Adolescent Psychiatry", "Youth Suicide & Self-Harm"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "36 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Impulsive, means-dependent. Ask directly, remove the means, build the safety-first card",

  summary:
    "Youth suicide is typically an impulsive response to overwhelming distress in a maturing brain, with the available method deciding outcome. Asking directly, means restriction and written safety planning are the evidence-based core, and adolescent self-harm is treated as affect regulation, not attention-seeking.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Recite the Indian numbers honestly (the NCRB ADSI student count, the every-40-minutes translation, the leading-cause-of-death rank) without numbness or sensationalism, and explain why the stated cause (exam failure) is the spark, not the load.",
    "Run the risk architecture: distal loads (depression, prior attempt, abuse, family history, identity stress) against proximal triggers (results, humiliation, rupture, intoxication, contagion), braided with the adolescent brain's impulsive physics; the pattern that makes youth suicide differ from adult suicide.",
    "Ask the screen's question ladder directly (ideation, plan, means, history) and bury the 'asking plants ideas' myth with the screening evidence.",
    "Build the safety-first card: the Stanley-Brown-lineage written safety plan (warning signs, self-coping, named people in order, the means list, professional contacts, the reasons) and run the Indian household means audit with the family.",
    "Distinguish NSSI (cutting, burning, affect regulation, high repetition, its own risk) from suicide attempts (dying intent) while respecting the overlap that keeps risk screening mandatory at every review.",
    "Manage the school: gatekeeper training, the postvention protocol after a student's death (the vulnerable pool, the service-format memorial, the media discipline), and the contagion rules that prevent cluster suicides.",
    "Treat what is treatable (the depression tier with the fluoxetine-class monitoring discipline, DBT-A's self-harm evidence, the family communication rebuild) and recite the honest list of what does NOT work.",
    "Navigate the Indian law and systems: MHA 2017 s.115 decriminalisation, Tele-MANAS 14416, CHILDLINE 1098, and the POCSO reporting duty's edge when abuse surfaces.",
  ],
  quickFacts: [
    { label: "The Indian arithmetic", value: ">13,000 student suicides a year", detail: "NCRB ADSI 2022: student suicides above 13,000 and climbing year on year; roughly one student death every 40 minutes; suicide a leading cause of death in Indian adolescents and young adults as national rates rise past 1.7 lakh annually" },
    { label: "The strongest predictor", value: "A prior attempt", detail: "The single strongest predictor of eventual suicide death in a young person: every review, every exam; risk highest in the first weeks-to-months after an attempt, then falling with time and treatment" },
    { label: "The physics", value: "Minutes-scale storms", detail: "The overwhelming majority of adolescent suicidal crises last minutes to hours, not weeks; impulse control is the LAST circuit to mature (mid-20s), so youth acts are state-dependent and the method at hand decides the outcome" },
    { label: "The mortality lever", value: "Means restriction", detail: "The Sri Lankan pesticide-regulation natural experiments (national bans and reformulations cutting suicide rates dramatically) the strongest single intervention-level evidence in world suicide research" },
    { label: "The card", value: "The written safety plan", detail: "The Stanley-Brown-lineage Safety Planning Intervention: warning signs, what I do myself, who I call in order, what makes the home safe, professional contacts, the reasons; rehearsed in session, reviewed at every contact; the no-suicide contract it replaces has zero protective evidence" },
    { label: "The screen", value: "Asking does NOT plant", detail: "The randomised and survey evidence is consistent: screening reveals without creating; asked young people show no increase in suicidal thoughts and disclosing groups show relief; the myth's persistence costs lives" },
    { label: "The other thing", value: "NSSI is regulation, not dying", detail: "Roughly 15–20% of adolescents report some self-injury history; cutting and burning function as affect regulation (controllable physical pain displacing uncontrollable emotional pain) with DBT-A the treatment tier and the longitudinal risk elevation the reason screening stays mandatory" },
    { label: "The law", value: "Decriminalised since 2017", detail: "MHA 2017 s.115: attempting suicide decriminalised; the person presumed to be under severe stress and entitled to care, not prosecution; Tele-MANAS 14416 (24×7, free, 20 languages) and CHILDLINE 1098 (under-18) as the crisis spine" },
  ],
  knowledgeGraph: [
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "The general psychiatric-emergency account: the adult risk model, C-SSRS, safety planning and means restriction from the every-age side; this course is the child-and-adolescent layer on top of it" },
    { label: "Suicide in the Elderly", type: "condition", href: "/psychiatry/elderly-suicide/", note: "The other end of the lifespan: planned, high-lethality, warning-driven acts in elders against the minutes-scale state-dependent storms of the young; the asking discipline is shared, the physics is not" },
    { label: "Mood Disorders in Youth", type: "condition", href: "/psychiatry/paediatric-mood/", note: "The depression underneath the large majority of attempts: the full treatment ladder this course's condition-tier rides on, with the sleep-inversion vortex that degrades regulation" },
    { label: "Child Trauma & Abuse", type: "condition", href: "/psychiatry/child-trauma-abuse/", note: "The abuse layer of the load: the POCSO reporting duty and the protection pathway that the youth-suicide assessment surfaces" },
    { label: "Child Anxiety", type: "condition", href: "/psychiatry/child-anxiety/", note: "The comorbid anxiety tier and the somatic-costume presentations: the paediatric carousel that deserves the screen at every turn" },
    { label: "ADHD", type: "condition", href: "/psychiatry/adhd/", note: "The impulsivity comorbidity: the disinhibition engine that converts storms into acts; each treated on its own evidence" },
    { label: "Mental Health Law", type: "condition", href: "/psychiatry/mental-health-law/", note: "The MHA 2017 architecture behind s.115: the rights-protective admission structure, the nominated representative for minors, the least-restrictive principle" },
    { label: "Fluoxetine", type: "drug", href: "/drugs/fluoxetine/", note: "The SSRI tier for the comorbid depression: the load's commonest treatable ingredient, with the weekly-review and activation-watch discipline" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The depression tier's chemistry: the treated condition protective at population scale" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The brakes that arrive last: maturation completing in the mid-20s; the reason youth acts are state-dependent and friction is life-saving" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Four mechanism stories carry youth suicide. First, the storm's 20 minutes: the overwhelming majority of adolescent suicidal crises are minutes-to-hours long, not weeks; the brain's alarm (amygdala-driven) fires at full volume while the control circuitry that would say 'wait, this is permanent' is still under construction; psychache (the felt unbearable-ness) crowds out everything else, and thinking narrows into the tunnel where only two options exist. In the tunnel, the method at hand decides the outcome: the person who must FIND a method is usually saved by the finding-time; the person with a method at arm's reach is not. That single physics is why three boring interventions carry life-saving evidence: means restriction (make the finding slow), the safety plan (pre-install the tunnel-exits before the tunnel), and the connected person (a voice that penetrates the tunnel). Second, the load and the spark: the chamber is loaded over months (depression's neurochemistry, abuse's sensitisation, hopelessness's learned narrowing) and the spark (the result, the message, the humiliation) would not fire in an unloaded chamber; families fixate on the spark because it is seeable, but the treatment treats the LOAD, and the next spark is never predictable. Third, the skin that speaks: cutting and burning are in the great majority regulation-attempts, not dying-attempts; physical pain that is controllable and visible displacing emotional pain that is neither, the body's endorphin response supplying real chemical relief, the behaviour repeating precisely because the relief is real and fast. Fourth, the echo chamber: suicidal behaviour is socially transmissible in the young more than in any other age group (identification, permission and script-provision operating on the already-loaded pool) which is why the postvention protocol and media discipline are clinical interventions, not etiquette.",
    steps: [
      "The storm's 20 minutes: the amygdala's alarm at full volume, the under-construction control circuitry, psychache crowding out thought; the crisis is minutes-to-hours long, state-dependent, not a settled plan.",
      "The finding-time rule: in the tunnel, the method at hand decides; the person who must find a method is usually saved by the finding-time; hence means restriction, the safety plan and the connected person are the three life-saving interventions.",
      "The load and the spark: months of depression, abuse and hopelessness loading the chamber; the proximal trigger firing only because the chamber is loaded. The exam is the calendar, not the cause.",
      "The developmental physics: prefrontal maturation completes in the mid-20s; the adolescent engine (reward, emotion) runs ahead of its brakes; time-horizon shrinkage ('it will ALWAYS be like this') amplifies hopelessness; sleep loss and circadian chaos degrade regulation further.",
      "The skin that speaks: NSSI as regulation; controllable, visible physical pain displacing unbearable emotional pain; the endorphin relief real and fast; the repetition the same reinforcement curve as any compulsive relief-loop; the marks a private language when speech has been punished or shamed.",
      "The echo chamber: identification + permission + script provision; a classmate's death, a celebrity's romanticised coverage, an online challenge spiral acting on the already-loaded; the counter-mechanisms (reporting discipline, postvention, the honest classroom conversation) equally real.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the brakes that arrive last)", role: "Maturation completes around the mid-20s: impulse control is the last circuit to come online; its late arrival is why youth suicidal acts are state-dependent, minutes-scale and decided by the method at hand rather than by settled plans.", grade: "established" },
    { id: "amygdala", name: "Amygdala (the alarm at full volume)", role: "The storm's engine: the emotional alarm firing at full volume during the crisis while the control circuitry that would say 'wait, this is permanent' is still under construction.", grade: "supported" },
    { id: "reward-emotion-circuitry", name: "Reward and emotion circuitry (the engine ahead of the brakes)", role: "The adolescent engine of reward and emotion running ahead of its prefrontal brakes: the developmental physics that makes the 'social death' adults discount (the rupture, the shaming) not discountable to the young brain.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The depression tier's chemistry: the load's commonest treatable ingredient; treated depression is protective at population scale, which is why the condition-tier is one of the four boring pillars.", grade: "supported", drugConnection: "Fluoxetine-class with the monitoring discipline (weekly review, the activation-watch): the linked KYP lesson carries the pharmacology; the adolescent discipline is taught here." },
    { name: "Dopamine", symbol: "DA", role: "The reward engine's currency in the developmental physics: the engine-ahead-of-brakes asymmetry behind state-dependent acts; intoxication the great disinhibitor that releases the same engine further.", grade: "supported" },
    { name: "Endorphins", symbol: "END", role: "The NSSI relief chemistry: the body's endorphin response to physical pain supplying a real, fast chemical relief; the reinforcement curve that makes self-harm repeat.", grade: "supported" },
  ],
  pathways: [
    {
      id: "storm-pathway",
      name: "The storm pathway (loaded chamber to death or survival)",
      steps: [
        { label: "The chamber loads", detail: "Months of depression, abuse, hopelessness, isolation: the distal load, often undiagnosed" },
        { label: "The spark lands", detail: "The result, the humiliation, the rupture, the intoxication, the contagion, on a loaded chamber only" },
        { label: "The alarm floods", detail: "Amygdala at full volume; psychache crowds out thought; thinking narrows to the two-option tunnel" },
        { label: "The method decides", detail: "The person who must find a method is usually saved by the finding-time; the method at arm's reach is not survived" },
        { label: "Friction decides the rest", detail: "Means restriction, the pre-installed safety plan and the connected person: the three boring interventions with life-saving evidence" },
      ],
      clinicalManifestation: "The minutes-scale, state-dependent act, and the adolescent who is 'fine an hour later' not by drama but by the storm's natural weather.",
      grade: "established",
    },
    {
      id: "nssi-loop-pathway",
      name: "The NSSI reinforcement loop (the skin that speaks)",
      steps: [
        { label: "Unbearable affect", detail: "Emotional pain that is neither controllable nor visible, in a young person whose speech has been punished or shamed" },
        { label: "The substitution", detail: "Cutting or burning: physical pain that IS controllable and visible displacing the emotional pain that is not" },
        { label: "Real relief, fast", detail: "The endorphin response supplies genuine chemical relief: the relief-loop's reinforcement" },
        { label: "Repetition and risk", detail: "The behaviour repeats because it works; over years it raises later suicide risk (an outcome marker, not an intent marker)" },
      ],
      clinicalManifestation: "Repetition-heavy self-harm in the long sleeves of summer: the private language treated with DBT-A skills, never with contempt.",
      grade: "established",
    },
    {
      id: "contagion-pathway",
      name: "The echo chamber (exposure to cluster protection)",
      steps: [
        { label: "The exposure", detail: "A classmate's death, a celebrity's romanticised coverage, an online challenge spiral: youth contagion stronger than in any other age group" },
        { label: "The mechanism", detail: "Identification + permission + script-provision, operating on the already-loaded pool (the distressed, the isolated, the prior attempters)" },
        { label: "The amplifiers", detail: "Media romanticisation, method detail, the homage assembly: script-provision dressed as mourning" },
        { label: "The interrupts", detail: "Reporting discipline (no method, no romance, helpline numbers always), the school postvention protocol, the honest classroom physics" },
      ],
      clinicalManifestation: "The school's bad week: the close friends, the message-exchanger, the identified-with presenting in the contagion window.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "load-years", time: "The load years", title: "The chamber loading", description: "Undiagnosed depression, chronic abuse, the bullied-and-isolated years, the marks-conditional climate, the coaching-city separation: distal risks accumulating while nobody asks; the punished self-harm at 14 missed as the first warning.", phase: "onset" },
    { id: "trigger-week", time: "The trigger week", title: "The spark lands", description: "The board result, the public humiliation, the breakup, the online shaming, a peer's death: intoxication the great disinhibitor; the situational flags every clinician should recognise on sight.", phase: "onset" },
    { id: "the-storm", time: "Minutes to hours", title: "The storm itself", description: "The crisis at full volume: alarm flooding, psychache, the two-option tunnel; the method at hand deciding the outcome; 'she was fine an hour later' is the storm's natural weather, not evidence of drama.", phase: "peak" },
    { id: "post-attempt-window", time: "Weeks 1–12", title: "The highest-risk window", description: "The post-attempt weeks: the highest-risk window in all of suicidology; scheduled brief contacts (the texts, the caring letters lineage, the Tele-MANAS callbacks) measurably protect; the day-9 delayed collapse is watched for.", phase: "peak" },
    { id: "treatment-months", time: "Months 1–6", title: "The card, the audit, the condition", description: "The safety plan built and rehearsed, the means audit walked with the family, the depression treated (CBT plus fluoxetine-class with the activation-watch), the family conferences renegotiating the marks-contract, the school re-entry.", phase: "duration" },
    { id: "long-protection", time: "The long term", title: "The protection holds", description: "Remitted depression, the treated condition protective at population scale, the follow-up schedule as the safety net: the card still in the pencil box 'like a fire drill card; I have never needed the extinguisher'.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Suicide is among the top three causes of death in 15–29-year-olds worldwide, with rates varying enormously by country and means-availability. Adolescent attempt-to-death ratios are high (many attempts per death, the young surviving their storms more often than adults) which is precisely why means and the 20-minute window matter. Risk is not evenly distributed: LGBTQ+ adolescents carry several-fold elevated rates; Indigenous and marginalised youth likewise; abuse survivors and prior attempters are the two highest-risk clinical groups. Self-harm (NSSI) is far more prevalent than attempts: roughly 15–20% of adolescents report some self-injury history, with girls' presentations dominating clinic routes.",
    indianPrevalence: "The NCRB's Accidental Deaths and Suicides in India (ADSI) reports: student suicides above 13,000 in 2022 (a year-on-year climb across the recent decade, roughly one student death every 40 minutes) with exam failure recorded among the leading stated causes (the stated cause always the trigger-layer, never the load-layer). Suicide is a leading cause of death in Indian adolescents and young adults; the young share of the burden has grown as national rates rise past 1.7 lakh annually. The Indian method distribution (hanging commonest, poisoning second, pesticides historically prominent in rural youth) dictates the means-restriction counselling content.",
    lifetimeRisk: "A prior attempt is the single strongest predictor of eventual suicide death; risk is highest in the first weeks-to-months after an attempt, then falls with time and treatment. The reason the follow-up architecture exists.",
    ageOfOnset: "The 15–29 band worldwide; the risk architecture assembles through the teen years as the load accumulates on the still-maturing brain.",
    indianNotes: "The pressure structures are ours alone: the board-result season (May–June's national risk weather, with the March round before it), the coaching-city complex (isolation plus weekly rankings plus the 'wasted year' fear), and the family investment-debt frame ('we sold the land for your fees'). The protections are growing: MHA 2017 decriminalisation, Tele-MANAS 14416, CHILDLINE 1098, and gatekeeper programmes being seeded in schools. The infrastructure exists; the asking is what must still spread.",
  },
  etiology: [
    { category: "biological", factor: "The load's clinical floor", details: "Depression present in the large majority of attempters (often undiagnosed), anxiety, substance use (the disinhibition engine, a large share of youth attempts occur under substance influence), and the smaller but high-lethality share of emerging bipolarity and psychosis (command hallucinations treated as high acuity)." },
    { category: "biological", factor: "The developmental physics", details: "Prefrontal maturation completing only in the mid-20s: the engine (reward, emotion) running ahead of its brakes; time-horizon shrinkage ('it will ALWAYS be like this') developmentally amplifying hopelessness; sleep loss and circadian chaos (the phone-inverted adolescent) degrading regulation further." },
    { category: "genetic", factor: "The loaded inheritance", details: "Family history of suicide: the heritability is real and loaded; the family emotional climate as the modifier: high criticism, low warmth, achievement-conditional love." },
    { category: "psychological", factor: "The cognitive narrowing", details: "Hopelessness: the cognitive variable that outranks sadness as a predictor; the perfectionist marks-identity fusion; prior NSSI (the repetition history) and self-harm discovered-and-punished (shame added to pain)." },
    { category: "social", factor: "The abuse and marginalisation layer", details: "Chronic physical, sexual and emotional abuse, neglect and family violence (POCSO surfaces in exactly these assessments, the reporting duty binds); bullying and cyber-humiliation; chronic loneliness; marginalisation by caste, poverty, disability and identity (sexual- and gender-minority youth carrying several-fold risk)." },
    { category: "environmental", factor: "The proximal sparks and the access", details: "Exam results (the Indian spike-season trigger), public humiliation, relationship ruptures, online shaming; intoxication; contagion (a peer's, celebrity's or online figure's death, media romanticisation, challenge-era spirals); disclosure catastrophes (forced outing, blame met with 'what will people say'); and the access reality: the available method at the available hour, the physics of the moment." },
  ],
  symptomClusters: [
    {
      category: "1. Speech and language (the most missed signs)",
      symptoms: ["Direct statements ('I want to die', 'I won't be a problem much longer') commoner than folklore suggests: the young TELL, to peers and online, before they tell adults", "Indirect statements: 'what's the point', 'you'd all be relieved', 'I want to sleep and not wake'", "The dark-emoji/post era signals; goodbye-flavoured messages", "Will-flavoured statements: 'my cycle goes to X'"],
    },
    {
      category: "2. Behaviour (the visible layer)",
      symptoms: ["Giving away possessions; settling and sorting: the room cleaned, the phone wiped, the 'final' posts", "Method-seeking online: the search history found afterwards", "Sudden calm after a stormy period: the decision's peace, the sinister quiet", "Self-harm marks concealed. The long sleeves in summer, the Indian clinic's tell", "Substance escalation; school refusal and marks collapse; withdrawal from the peer-friend", "Appetite and sleep inversion"],
    },
    {
      category: "3. The situation flags (when to ask today)",
      symptoms: ["The post-result weeks. May–June's national risk weather", "Post-humiliation and post-rupture days", "The returning-from-coaching-city withdrawal", "The abuse-disclosure window", "The anniversary cluster", "The classmate's death: contagion's high-risk week"],
    },
    {
      category: "4. The three costumes (how adolescents arrive)",
      symptoms: ["The somatic route: body pain, weakness, weight loss: the paediatric carousel again", "The behavioural route: the 'attitude problem', the school conflict", "The disciplinary route: the runaway, the self-harm discovered", "All three costumes deserve the same screen"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The risk formulation (structured, not gestalt)",
      code: "The C-SSRS ladder",
      criteria: [
        "The structured screen: the Columbia (C-SSRS) screen-to-depth ladder or equivalent named instrument: ideation intensity and frequency, plan, means, intent, then behaviour history; asked directly, in plain words.",
        "Prior attempts braided in: number, lethality, recency; the strongest single predictor; plus the NSSI history and the punished-disclosure question.",
        "The distal load mapped: depression, anxiety, substance, abuse, bullying, identity stress; the family history including suicide.",
        "Protective factors sought deliberately: connected adults, treatment engagement, reasons-for-living, beliefs (including religious) and future-orientation.",
        "The access audit run with the family (the means list below); the intoxication state now; and the developmental-physics judgement: the 14-year-old's state-dependence and the 17-year-old's settled plan carry different weights.",
      ],
      duration: "At first contact and at every review: the formulation is a living document through the crisis weeks.",
      indianNote: "The recurring Indian clinic failure is not resource scarcity; it is the screen nobody ran at the paediatric or 'attitude problem' visit. The screen belongs at every door the young cross, and asking does NOT plant the idea.",
    },
    {
      system: "The tiering logic",
      code: "High / moderate / lower / NSSI",
      criteria: [
        "High acuity: intent + plan + means (or a recent or discovered attempt): do not leave alone; means removed now; the hospitalisation decision taken with the family; daily-to-alternate-day contact through the crisis weeks.",
        "Moderate: ideation with plan-ness but no means or uncertain intent, or heavy load with recent crisis: safety plan + means restriction + treating the condition + weekly review + the named-adult contract.",
        "Lower (passive ideation with load present: the condition treated, the plan seeded, the follow-up held) the schedule is the safety net.",
        "NSSI without suicidal intent: treated as its own condition (the DBT-A tier) while screening for the overlap at every review.",
        "The mimics-and-comorbid screen in every case: depression, intoxication states, emerging psychosis (command hallucinations (high lethality, high acuity), impulsivity disorders (ADHD/ODD)) and the abuse screen MANDATORY (POCSO surfaces here; the survivor's confidentiality handled professionally within that legal frame).",
      ],
      duration: "Tiers re-assessed at every contact: the post-attempt weeks 1–12 are the highest-risk window in all of suicidology.",
      indianNote: "'Just a threat' is the deadliest sentence in this field. An attempt is an attempt, and the accidental overdose of the impulsive teen is attempt-equivalent until assessed: intent can be undetermined; lethality does not care.",
    },
  ],
  severityScales: [
    {
      name: "C-SSRS",
      fullName: "Columbia Suicide Severity Rating Scale (Columbia Lighthouse Project)",
      measures: "The screen-to-depth ladder: ideation intensity and frequency, through plan, means and intent, to behaviour history; the structure named and used, the items never reproduced here.",
      ranges: [],
      indianNote: "The screen can be run by any trained clinician in minutes: the gatekeeper's ask-script is its front two rungs; asking reveals, it does not create.",
    },
    {
      name: "The acuity tiering",
      fullName: "The high/moderate/lower/NSSI response architecture",
      measures: "Which response package the formulation earns: the tier that decides supervision level, contact frequency and the admission conversation.",
      ranges: [
        { min: 0, max: 0, severity: "High acuity: intent + plan + means, or a recent/discovered attempt", action: "Do not leave alone; means removed NOW; the admission decision with the family (MHA 2017 rights-protective, least-restrictive, the nominated representative for minors); daily-to-alternate-day contact through the crisis weeks" },
        { min: 1, max: 1, severity: "Moderate: ideation with plan-ness, no means; or heavy load with recent crisis", action: "The safety plan built and rehearsed; the means audit walked with the family; the condition treated; weekly review; the named-adult contract in writing" },
        { min: 2, max: 2, severity: "Lower: passive ideation, load present", action: "The condition treated, the plan seeded, the follow-up held. The schedule is the safety net" },
        { min: 3, max: 3, severity: "NSSI without suicidal intent", action: "Treated as its own condition: the DBT-A tier where repetition-heavy; the overlap risk screened at every review, never assumed absent" },
      ],
      indianNote: "The 'she is just threatening' trap sits here: an attempt is an attempt, threats that are dismissed escalate in lethality, and there is no 'call the bluff' in suicidology; bluffs are discovered at funerals.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Passive suicidal ideation ('wish not to wake')", distinguishingFeatures: "A real risk-layer, often depression's floor: no active plan, method or intent.", keyDifferentiator: "Treat the illness, seed the safety plan, hold the follow-up: passive does not mean harmless." },
    { condition: "Active ideation with plan and/or means", distinguishingFeatures: "The full high-acuity architecture: plan-ness, method access, intent signals.", keyDifferentiator: "Do not leave alone; means removed now; the admission decision with the family; daily-to-alternate-day contact." },
    { condition: "NSSI (cutting/burning for regulation)", distinguishingFeatures: "Dying intent absent: the function is affect regulation; repetition high; the concealment signature (long sleeves in summer).", keyDifferentiator: "The DBT-A-tier treatment with risk screening maintained: the overlap risk means suicide screening at every review, never a one-time clearance." },
    { condition: "Suicidal gesture / interrupted discovery", distinguishingFeatures: "An attempt is an attempt. The 'just a threat' frame is the deadliest sentence in the field.", keyDifferentiator: "Full assessment whatever the presentation's drama level; lethality does not care how the act is labelled afterwards." },
    { condition: "Self-harm secondary to abuse disclosure", distinguishingFeatures: "Both layers present: the pain's therapy and the abuse's protection-and-legal pathway.", keyDifferentiator: "POCSO's mandatory reporting duty binds for a disclosed abuse of a minor: navigated WITH the young person, the duty explained honestly BEFORE the disclosure window." },
    { condition: "Accidental overdose in the impulsive teen", distinguishingFeatures: "Intent undetermined, the act impulsive, the agent at hand.", keyDifferentiator: "Treat as attempt-equivalent until the full assessment: intent can be undetermined; lethality does not care." },
    { condition: "Contagion-cluster presentations (the school's bad week)", distinguishingFeatures: "Multiple distressed presentations in the exposure window after a peer's, celebrity's or online figure's death.", keyDifferentiator: "The postvention protocol plus the vulnerable-pool screening: friends, prior attempters, the identified-with, the message-exchangers." },
    { condition: "The 'calm after the storm' presentation", distinguishingFeatures: "Sudden calm after a stormy period: the decision's quiet, the sinister remission.", keyDifferentiator: "Assess, never reassure-dismiss: the quiet is read as recovery at exactly the moment it may be resolution." },
  ],
  management: [
    { category: "psychotherapy", name: "The safety plan — the safety-first card itself", description: "A written card, built WITH the young person, in their words: (a) my warning signs (the storm's first clouds, sleep inversion, the dark playlist, the falling marks); (b) what I do myself (the coping list, the run, the shower, the music, the breathing); (c) who I call, in order: the friend first for the young, then the adult, NAMED and NUMBERED; (d) what makes the home safe (the means list); (e) the professional contacts (the clinic, Tele-MANAS 14416, CHILDLINE 1098); (f) the reasons, in their own words (the dog, the cousin, the unfinished thing). The plan is rehearsed in session (the tunnel-exit only works if pre-installed) the family holds a copy, and it is reviewed at every contact.", whenToUse: "At every tier from passive ideation upward; the evidence-based core replacing the no-suicide contract (zero protective evidence, false reassurance, banned from modern practice, retire 'sign here that you will not do anything').", indianContext: "The card travels in the pencil box, the wallet, the phone cover, one named adult contracted for the crisis weeks answers the 'who does this child call at 11 p.m.' question in writing." },
    { category: "lifestyle", name: "Means-restriction counselling, Indian edition (the mortality lever)", description: "The family conference walks the house: agricultural pesticides (the shed locked; the 'buy small, store locked' rule: the Sri Lankan lesson: national bans and reformulations cut suicide rates dramatically, the strongest means-evidence in world psychiatry); medicines (the week-of-quantities rule, no strip bottles, one week per family member, the grandmother's cardiac stock being the commonest household pharmacy); ropes and ligature-access points during the crisis weeks (the terrace, the bathroom door, supervision-level decisions for the high-acuity weeks, not architecture forever); the alcohol-and-disinhibition audit; and the online means (the search-history conversation, app-level filtering at home during crisis weeks).", whenToUse: "Every case, every tier, with the framing sentence for families: 'we are not treating your child as a criminal; we are adding friction at the tunnel's entrance because storms pass, and doors must be slow to open.'", indianContext: "The locked-shed-and-buy-small script is the single highest-yield rural intervention in Indian adolescent psychiatry: teach it at every rural visit involving a distressed adolescent." },
    { category: "pharmacotherapy", name: "Treating the load (the condition tier)", description: "Depression: the paediatric ladder; safety first, CBT/IPT-A ± fluoxetine-class with the monitoring discipline (weekly review, the activation-watch taught); treated depression is protective at population scale. Anxiety, substance use, ADHD-impulsivity and emerging psychosis each treated on their own evidence: psychosis with command hallucinations at the high-acuity tier. Abuse: the protection-and-placement decisions, the legal pathway, trauma therapy (the TF-CBT tier).", whenToUse: "From the first stabilized contact; the condition-tier is one of the four boring pillars, not the whole of the plan.", indianContext: "The SSRI tier at ₹50–150/month (approx 2026): the barrier is never the pharmacy; it is the diagnosis and the engagement." },
    { category: "psychotherapy", name: "DBT-A (the self-harm treatment tier)", description: "Dialectical behaviour therapy, adolescent multigamily edition: the strongest evidence for the self-harming, emotion-impulsive adolescent: skills modules (distress tolerance, emotion regulation, walking the middle path) with the family in the room learning the same skills; the standard of care where the presentation is repetition-heavy NSSI plus dysregulation.", whenToUse: "The repetition-heavy NSSI presentation, the dysregulated self-harmer: screened for suicidal overlap at every review.", indianContext: "Indian availability is metro-concentrated (full programmes ₹30,000–1,00,000+, approx 2026); the honest approximation where DBT-A is unreachable: a CBT-skills-plus-family programme with the DBT structure and the same targets." },
    { category: "lifestyle", name: "The connectedness prescriptions (the unglamorous outcomes layer)", description: "One named adult contracted for the crisis weeks (the 'who does this child call at 11 p.m.' question answered in writing); the school re-entry that avoids both spotlight and isolation; the peer-reconnection engineering (the one friendship that gets scheduled); the family communication rebuild: validation before boundary, the 'what will people say' reflex retired, the marks-contract renegotiated in a family session; brief-contact interventions (the scheduled texts, the caring-letters lineage, the Tele-MANAS callbacks): cheap and measurably protective in the post-discharge window.", whenToUse: "From day one alongside the card: connectedness is a prescription, not a hope.", indianContext: "The joint family's surveillance myth corrected here: eight adults watching marks do not equal one adult asking feelings. ONE named person, named, with the script." },
    { category: "lifestyle", name: "The school programme (the public-health tier)", description: "Gatekeeper training for teachers (the 2-hour package: the signs, the ask-script, the refer-pathway); the results-season protocol (the counselling room staffed, the helpline cards distributed, the re-attempt-and-NIOS scripts in hand before the day); anti-bullying enforcement: the single strongest modifiable school-side risk factor; postvention after a student's death: the scripted whole-staff response, the vulnerable pool identified within 48 hours and individually supported, the memorial converted to service format (no method mention, no romanticising, the refusal of the homage assembly), the parents' letter, and WHO's responsible-media discipline (no method, no location detail, no front page, no 'everything was going well', the helpline numbers always).", whenToUse: "Before the crisis (gatekeeper training) and immediately after any student death (the postvention protocol, the school's first 48 hours decide the cluster).", indianContext: "The Indian newsroom's violations are a standing public-health failure every result season; the doctor quoted after a student's death shapes the next cluster: the two-line press discipline in every hospital's protocol." },
    { category: "lifestyle", name: "What does NOT work (the honest list)", description: "No-suicide contracts (no protective evidence, retire them); 'scaring straight' programmes and fear-assembly moralising (can INCREASE risk); punitive boarding-school transfers (the isolation amplifier); the '24-hour watch' as a substitute for a plan (vigilance decays by day 3; plans outlast eyeballs); and the moral-hazard myth: 'hospitalising her will make her think attention works': attention is the treatment for a child whose load is isolation; nobody withholds antibiotics because the infection 'will learn'.", whenToUse: "As the audit list against which every proposed intervention is checked.", indianContext: "The Indian variants (the 'call the bluff' gamble and the 'she is doing this to manipulate us' appraisal) reframed at the family conference: address the NEED, not the lever." },
  ],
  safety: {
    redFlags: [
      "Sudden calm after a stormy period: the decision's quiet: assess, never reassure-dismiss",
      "Direct dying talk, goodbye-flavoured messages, will-flavoured statements, giving away possessions, the method-seeking search history: the young TELL before they act",
      "Intent + plan + means, or a fresh or discovered attempt: high acuity: do not leave alone, means removed NOW, the admission decision with the family",
      "The post-attempt weeks 1–12: the highest-risk window in all of suicidology; the follow-up schedule is the safety net",
      "A classmate's, celebrity's or online figure's death: contagion's high-risk week: the vulnerable pool screened (close friends, prior attempters, the identified-with, the message-exchangers)",
      "Command hallucinations in emerging psychosis: high lethality, treated at the high-acuity tier",
    ],
    urgentGuidance:
      "If you are reading this in worry about a young person right now: Tele-MANAS 14416 (24×7, Government of India, free, 20 languages) or CHILDLINE 1098 (anyone under 18); a life-threatening emergency goes to the nearest hospital emergency department. For any attempt or overdose: medical clearance FIRST, and treat the impulsive accidental overdose as attempt-equivalent until assessed (lethality does not care). Then, in order: the direct screen (asking does not plant the idea), the structured formulation, the safety-first card built with the young person, the means audit walked with the family, the family conferences, the condition treatment, and the follow-up architecture; daily-to-alternate-day contact in the crisis weeks, the day-9 and day-30 reviews for the delayed-collapse window, scheduled brief contacts through weeks 1–12.",
  },
  drugLinks: [
    {
      name: "Fluoxetine",
      slug: "fluoxetine",
      role: "The SSRI tier for the comorbid depression: the load's commonest treatable ingredient",
      rationale: "Depression is present in the large majority of youth attempters, often undiagnosed; the paediatric ladder runs safety-first with CBT/IPT-A ± fluoxetine-class and the monitoring discipline: weekly review through the early weeks, the activation-watch taught to family and clinic alike. Treated depression is protective at population scale; the tier is one of the four boring pillars, never the whole plan.",
      evidenceLevel: "guideline",
      clinicalDisclaimer: "Symptom-targeted condition treatment underneath the safety architecture: the safety plan, means restriction and connectedness run from day one regardless of the medication tier. The linked KYP lesson carries the adult pharmacology; the adolescent weekly-review and activation-watch discipline is taught here: the route never invented.",
      emergencyGuidance: "Any emerging agitation or activation in the early weeks: same-week review, not wait-and-see; any deterioration in the crisis weeks returns to the safety-first card and the high-acuity tier, not a dose change alone.",
    },
  ],
  contentGaps: [
    "DBT-A (the strongest-evidence psychotherapy tier for the self-harming adolescent) has no KYP psychotherapy lesson; the skills-module logic, the multigamily structure and the metro-concentration honesty are taught here, route never invented.",
    "The C-SSRS (Columbia Lighthouse Project) is named as the screen-to-depth ladder only. The instrument's items are never reproduced; the question ladder is taught here in paraphrase, and the gatekeeper ask-script as its front two rungs.",
    "The school tier (gatekeeper training, the postvention protocol, the WHO responsible-media discipline) has no KYP service lesson; it is taught here because Indian prevention lives or dies at the school door.",
    "The crisis infrastructure (Tele-MANAS 14416, CHILDLINE 1098, iCall and the urban crisis lines) consists of programme contacts, not KYP lessons; the routing is documented in indianPractice and the patient guide.",
    "The adolescent SSRI discipline itself: the linked fluoxetine lesson is the adult-dosing page. The paediatric weekly-review and activation-watch timing are taught in this course, never invented as a route.",
  ],
  patientGuide: {
    whatIsIt:
      "Youth suicide is not a mystery of sad children. Most often it is an impulsive act: a distressed, sometimes mentally ill, sometimes momentarily overwhelmed young brain with easy access to a lethal method. The single most repeated finding across a century of study: the urge passes. It is intense, and it is temporary. The worst window is often minutes to an hour, which is exactly why removing the means and connecting to care genuinely saves lives. Self-harm (cutting, burning) is mostly a different thing: a private way of surviving unbearable feelings, not a wish to die. Contempt for it is the clinician's error, and punishment of it adds shame to pain.",
    whatCausesIt:
      "Think of a chamber loaded over months (undiagnosed depression, abuse, loneliness, hopelessness, love that felt conditional on marks) and then a spark: a result, a humiliation, a breakup, a shaming online. The spark is what everyone sees afterwards; the load is what the treatment treats, and the next spark is never predictable. The adolescent brain adds its own physics: the control circuits mature last (into the mid-20s), so young people act in state-dependent storms of minutes to hours, which is why the method at hand decides the outcome, and why its absence lets the storm pass.",
    symptoms:
      "The signs the young show before a storm: direct talk ('I want to die', 'I won't be a problem much longer') or indirect ('what's the point', 'I want to sleep and not wake'); the dark posts and goodbye-flavoured messages; giving things away; the room suddenly cleaned and the phone wiped; a sudden calm after a stormy period: the sinister quiet, not recovery; the long sleeves in summer hiding self-harm marks; falling marks, school refusal, sleep and appetite turned upside down; the method-seeking search history found too late. The situation flags: the post-result weeks, a public humiliation, the return from the coaching city, an abuse disclosure, a classmate's death.",
    treatment:
      "The treatment is four boring pillars: asked (the direct screen, asking does NOT put the idea in her head; the evidence is consistent and the question only decides whether the distress travels to you), means-removed (the house audit: the pesticide shed locked, medicines re-dosed to one-week quantities in a locked box, ropes secured during the risk period, the alcohol audit, the online filtering), people-named (the written safety card built in the young person's own words (warning signs, what I do myself, who I call in order, the reasons) and ONE named adult who answers the 11 p.m. call), and condition-treated (the depression with therapy and, where the clinician judges, the fluoxetine-class medicine with weekly reviews; the self-harm with skills-based therapy). What does not work: the 'promise you won't do anything' contract, the fear assembly, the punitive transfer, the 24-hour watch without a plan.",
    selfHelp: [
      "The one-adult contract: agree who the ONE adult is that this child calls at 11 p.m. Named, the number saved in her phone; eight adults watching marks do not equal one adult asking feelings.",
      "The house audit, five things this week: lock the pesticide shed and buy agricultural chemicals in small locked quantities; re-dose household medicines to one-week strips in a locked box (the grandmother's cardiac stock is the usual find); remove or secure ropes and ligature items during the risk period; hold the alcohol audit (disinhibition is the spark's fuel); agree the named adult.",
      "Hold the safety card where it lives (the pencil box, the wallet, the phone cover) and rehearse it like a fire drill; the exit only works if it was installed before the tunnel.",
      "The marks-contract renegotiation: 'the result is a number; you are not': said out loud, and the fridge-chart retired ceremonially if there is one.",
      "The reasons list in the young person's own words: the dog, the cousin, the unfinished thing; it goes on the card, not in the clinician's file alone.",
      "The results-season plan written before the day: whatever the result, we have a plan; the supplementary route, NIOS as Plan B, the second attempt named a tradition, not a defeat.",
    ],
    whenToSeekHelp: [
      "Same-day help: giving away possessions, goodbye messages, the sudden calm after a storm, direct dying talk. Tele-MANAS 14416 (24×7, free, 20 languages), CHILDLINE 1098 (under 18), or the treating clinic's evening number",
      "Any attempt or overdose is an emergency: the nearest hospital emergency department first, the mental-health assessment after medical clearance",
      "Self-harm discovered: assessment, not interrogation; it signals real distress even when the wish to die is absent",
      "The post-result weeks, the post-humiliation days, the week after a classmate's death: the scheduled reviews already booked, not waited for",
      "The delayed collapse: the young person who 'coped' through the day and breaks on day nine: the day-9 and day-30 reviews exist for exactly this",
    ],
    indianResources: [
      "Tele-MANAS 14416: the Government of India's national tele-mental-health helpline: 24×7, free, 20 languages",
      "CHILDLINE 1098: the minors' spine, for anyone under 18",
      "Child-guidance clinics and medical-college psychiatry departments: nominal-rate care; the private crisis consult approx ₹800–2,500 (2026)",
      "iCall and the urban crisis lines: the metro tier alongside Tele-MANAS",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific youth-suicide clinical guideline exists; practice follows the international evidence architecture (the Stanley-Brown Safety Planning Intervention, the C-SSRS screen-to-depth ladder, WHO's media and postvention guidance) with two Indian legal instruments binding: the Mental Healthcare Act 2017; s.115 decriminalising attempted suicide with the presumption of severe stress, and the rights-protective admission structure (the nominated representative and least-restrictive principle for minors), and POCSO's mandatory reporting when abuse of a minor is disclosed.",
    systemContext: "The young person meets the system through three doors, all of which miss the screen too often: the paediatric outpatient department (the somatic costume, body pain, weakness, weight loss), the school's disciplinary channel (the 'attitude problem', the runaway), and the casualty (the overdose, the attempt). The recurring Indian clinic failure is not resource scarcity; it is the screen nobody ran. The attempt then arrives with the family's appraisal attached ('she is just threatening') and the clinical response must reframe a decade in one sentence: an attempt is an attempt; bluffs are discovered at funerals.",
    programmeContext: "Tele-MANAS 14416 (24×7, free, 20 languages) is the national crisis spine with child-adjacent routing; CHILDLINE 1098 covers minors; iCall and the urban crisis lines form the metro tier; gatekeeper programmes are being seeded in schools. The 2-hour teacher package (the signs, the ask-script, the refer-pathway) is the deliverable that matters. The infrastructure exists; the asking is what must still spread.",
    costConsiderations: "The effective programme is nearly free where the public tier is used (Tele-MANAS and CHILDLINE free; child-guidance and medical-college psychiatry at nominal rates); the private crisis consult runs ₹800–2,500; the SSRI tier ₹50–150/month. The expensive item is honest to name: DBT-A programmes are metro-concentrated, ₹30,000–1,00,000+ for full courses (approx 2026); the skill-module approximation far cheaper and taught as the honest substitute, never disguised as the real thing.",
    culturalConsiderations: "The pressure architecture is cultural and nameable: the marks-contract (love and worth experienced as conditional on performance, the fridge chart, the cousin comparison, the WhatsApp topper announcement); the coaching-city isolation (distance from attachment figures at exactly the age the brakes are thinnest, the Kota consultation's sunk-cost panic against the child's loneliness); the stigma-silence complex ('we don't have such problems in our family', itself a risk factor that makes the pain unspeakable at home); the joint family's surveillance myth (eight adults watching marks do not equal one adult asking feelings); and the faith-and-shame complex, where the clinic's stance is precise: the religious taboo can stay and be allied with; the shame must go ('a pain-condition, not a character-condition; it arrives in every kind of family, including families exactly like ours').",
    patientCounselling: [
      "The asking-myth script: 'No; asking does not put the idea in her head. It has been studied directly: screened young people show no increase in suicidal thoughts, and those who disclose show relief. The idea is almost always already there; the question only decides whether it travels to you or stays in the tunnel.'",
      "The 'just threatening' correction: 'An attempt is an attempt and a threat is a warning; the deadliest sentence in this field is \"just threatening\". Even when there is manipulation in it, a child using the suicide-lever has run out of every other lever: we address the need underneath, always seriously.'",
      "The house-audit script: 'Five things this week; the pesticide shed locked, medicines re-dosed to one-week strips in a locked box, ropes secured for now, the alcohol audited, and one named adult this child can call at 11 p.m. None of this treats the cause; all of it keeps the storm survivable.'",
      "The honest-math script: 'Will she try again? A prior attempt is the strongest predictor we have, which is exactly why the follow-up exists, the plan exists and the treating continues. The question that protects better than prediction is preparation.'",
      "The strong-family script: 'It happens in every kind of family. Depression, pressure and pain do not check addresses or values, and the belief that \"our family doesn't have such problems\" is itself the risk factor: it makes the pain unspeakable at the one place it should be safest.'",
      "The rights script: 'Since the Mental Healthcare Act 2017 it is not a crime to attempt suicide. The law presumes the person was under severe stress and entitles them to care, not punishment. If a police officer treats it otherwise, the family can invoke the Act; the text is on their side.'",
      "The press script (for the clinician quoted after a student's death): two lines; the physics ('storms pass; the load was treatable; help exists: 14416'), never the method, never the 'model student, everything going well' elegy. The doctor quoted shapes the next cluster.",
    ],
  },
  decisionPath: {
    title: "The young person in the storm",
    nodes: [
      {
        id: "start",
        question: "A young person crosses a clinical door: the paediatric visit, the 'attitude problem', the casualty after an overdose, the school's bad week. The first move is always the same: ask directly. What does the screen find?",
        branches: [
          { label: "Active ideation with plan, means or intent, or a fresh/discovered attempt", next: "high-acuity" },
          { label: "Ideation with plan-ness but no means, or heavy load with a recent crisis", next: "moderate-gate" },
          { label: "No ideation voiced: the somatic, behavioural or disciplinary costume", next: "costume-path" },
          { label: "Self-harm marks or history, dying intent denied", next: "nssi-gate" },
        ],
      },
      {
        id: "high-acuity",
        question: "High acuity: intent + plan + means, or the attempt itself. The immediate architecture:",
        branches: [
          { label: "Stabilise now: the card, the audit, the named adult", next: "safety-card" },
          { label: "The weeks after: the brief-contact architecture", next: "followup-path" },
        ],
      },
      {
        id: "safety-card",
        question: "The safety-first card and its three companions, built today.",
        recommendation: "Do not leave alone; means removed NOW (the medicine cabinet re-keyed, the shed locked, the ligature points secured for the crisis weeks); the admission decision taken WITH the family under MHA 2017's rights-protective structure (least-restrictive, the nominated representative for minors): sometimes admission is the safest days of the whole treatment, sometimes the intensive home package with daily contact; the error is not which option you choose, it is choosing neither and hoping. The card built with the young person's own words and rehearsed in session; the means audit walked with the family; one named adult contracted in writing.",
      },
      {
        id: "followup-path",
        question: "The post-attempt architecture: weeks 1–12, the highest-risk window in all of suicidology.",
        recommendation: "Daily-to-alternate-day contact through the crisis weeks, then weekly review; scheduled brief contacts (the Sunday texts, the caring-letters lineage, the Tele-MANAS callbacks); the day-9 and day-30 reviews held for the delayed-collapse window: the girl who 'coped' through the day and breaks on day nine; the condition treatment running underneath throughout.",
      },
      {
        id: "moderate-gate",
        question: "Moderate tier: the load and the access braided into the formulation. What sits underneath?",
        branches: [
          { label: "Depression, anxiety, substance or impulsivity found", next: "condition-path" },
          { label: "Abuse disclosed or suspected", next: "abuse-path" },
          { label: "A peer's, celebrity's or online figure's death in the orbit", next: "contagion-path" },
        ],
      },
      {
        id: "condition-path",
        question: "The load treated on its own evidence.",
        recommendation: "Depression: the paediatric ladder; safety first, CBT/IPT-A ± fluoxetine-class with weekly review and the activation-watch; treated depression is protective at population scale. Anxiety, substance, ADHD-impulsivity each treated on its own tier; the safety plan, the means audit and the named-adult contract running alongside from day one; weekly review.",
      },
      {
        id: "abuse-path",
        question: "The abuse layer: the POCSO edge handled honestly.",
        recommendation: "Protection and placement decisions; the legal pathway. POCSO's mandatory reporting binds for the disclosed abuse of a minor, best handled by telling the young person honestly what the duty is BEFORE the disclosure window and navigating protection WITH them; trauma therapy (the TF-CBT tier) for the pain; both layers treated, never one in place of the other.",
      },
      {
        id: "contagion-path",
        question: "The exposure week: contagion's high-risk window.",
        recommendation: "The school postvention protocol engaged: the vulnerable pool identified within 48 hours (close friends, prior attempters, the identified-with, the message-exchangers) and individually assessed; the highest-risk student is the one who exchanged 'we should all go' messages with the dead: she would be missed without the protocol; the memorial in service format, never the homage assembly; the media discipline held; the classroom told the honest physics (storms pass; help exists; 14416) without method details.",
      },
      {
        id: "costume-path",
        question: "No ideation voiced: the somatic, behavioural or disciplinary costume.",
        recommendation: "The screen run anyway, in plain words: asking does not plant the idea, and the young tell peers and online before they tell adults. The situation-flag audit: post-result weeks? the coaching-city return? the abuse-disclosure window? a classmate's death? Where load is found, the pathway rejoins at the moderate gate; where the screen and flags are clean, the follow-up is still scheduled. The door has been opened, and that is itself the intervention.",
      },
      {
        id: "nssi-gate",
        question: "The self-harm presentation: the skin that speaks.",
        recommendation: "Treated as its own condition: the DBT-A tier where the presentation is repetition-heavy NSSI plus dysregulation (the metro-concentration honesty and the skills-programme approximation where DBT-A is unreachable); the underlying pain treated; the punishment-of-disclosure removed: 'she's doing it for attention' retired, because it is for affect-REGULATION actually, and attention is not a sin to a child who needs it. The overlap risk screened at every review, never assumed absent.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "'Just threatening': the dismissal that precedes funerals",
      why: "Indian families bring the overdose or the cut with the appraisal 'she is doing this to manipulate us'; the clinician who joins the frame misses the load, and threats that are dismissed escalate in lethality.",
      correction: "An attempt is an attempt and a threat is a warning; even when the manipulation is partly real, a child using the suicide-lever has run out of every other lever: address the need underneath. There is no 'call the bluff' in suicidology; bluffs are discovered at funerals.",
    },
    {
      mistake: "The no-suicide contract as 'the intervention'",
      why: "Zero protective evidence, false reassurance, and the theatre of paperwork substituting for a plan: the one line to retire from Indian clinic culture is 'sign here that you will not do anything'.",
      correction: "The written safety plan (the Stanley-Brown-lineage card: warning signs, self-coping, named people in order, the means list, professional contacts, the reasons); rehearsed in session, held by the family, reviewed at every contact.",
    },
    {
      mistake: "The screen skipped at the paediatric or 'attitude problem' visit",
      why: "The load is found only at the attempt: the somatic costume, the behavioural costume and the disciplinary costume all pass through doors where nobody asked; the myth that asking plants the idea keeps the questions unasked.",
      correction: "The screen at every door, in plain words: the randomised and survey evidence is consistent: screening reveals without creating, and disclosing groups show relief.",
    },
    {
      mistake: "The means audit skipped because 'there are adults at home'",
      why: "The joint family's surveillance myth: eight adults watching marks do not equal one adult asking feelings; surveillance is neither friction nor the asking, and the unlocked medicine cabinet stays unlocked.",
      correction: "The household means audit walked concretely with the family: the pesticide shed, the one-week medicine strips, the ligature points during the crisis weeks, the alcohol, the online means, with the framing sentence that this is friction at the tunnel's entrance, not a verdict on the child.",
    },
    {
      mistake: "NSSI treated as attention-drama",
      why: "Regulation mistreated as manipulation: the contempt that adds shame to pain, the dismissal ('doing it for attention') that ignores the endorphin-reinforced repetition and the longitudinal elevation of later suicide risk.",
      correction: "The function named honestly (affect regulation) and treated with the DBT-A tier; the underlying pain treated; the overlap risk screened at every review, because NSSI is an outcome marker even where it is not an intent marker.",
    },
    {
      mistake: "The homage-assembly postvention: the cluster's opening ceremony",
      why: "The assembled tribute, the photo-wall, the principal's 'brightest star' speech provide identification, permission and script-provision to the already-loaded pool: the contagion multiplier dressed as mourning; so is the media statement with method details, sometimes from the treating team itself.",
      correction: "The postvention protocol: the vulnerable pool identified within 48 hours and supported; the memorial in service format without method mention; the parents' letter with signs and scripts; the press given the two-line physics statement, never the method, never the romance, the helpline numbers always.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The load-spark formulation: distal diathesis (depression, prior attempt, abuse, family history, identity stress) + proximal trigger (results, humiliation, rupture, intoxication, contagion) + the impulsive-state physics of the adolescent brain; why youth acts differ from adult acts.",
        "The screen ladder verbatim: ideation → plan → means → intent → history; asked directly; then the two that matter most for the plan (what stops you / who would you tell) and the means audit with the family.",
        "The intervention quartet: safety planning, means restriction, connectedness, treating the condition; 'asked, means-removed, people-named, condition-treated'.",
        "NSSI versus the suicide attempt: intent, function (affect regulation), repetition, and the overlap risk that keeps screening mandatory at every review.",
        "MHA 2017 s.115: attempted suicide decriminalised; the presumption of severe stress; care not custody, with Tele-MANAS 14416 and CHILDLINE 1098 as the Indian crisis spine.",
        "The myth buried: asking does NOT plant ideation. The screened young show no increase in suicidal thoughts and disclosing groups show relief.",
      ],
      practical: [
        "Demonstrate the direct screen on a simulated adolescent: the question ladder without euphemism, and the means audit explained to a simulated parent with the framing sentence.",
        "Build a safety-first card with a simulated patient: warning signs, self-coping, the named people in order (friend first, adult second (NAMED, NUMBERED), the means list, the professional contacts, the reasons) and rehearse one tunnel-exit aloud.",
      ],
      longAnswer: [
        "A 15-year-old after exam results consumed tablets: emergency and long-term management; the full ladder (medical clearance, screen, formulation, safety plan, means audit, family sessions, condition treatment, follow-up architecture).",
        "School-based suicide prevention programme: gatekeeper training, results-season protocol, postvention; the contagion discipline and WHO's media rules.",
        "NSSI versus suicidal intent: the distinction, the overlap, the treatment tiers.",
        "Decriminalisation of attempted suicide in India: the MHA 2017 s.115 position and its clinical consequences.",
      ],
    },
    neetPg: {
      highYield: [
        "THE INDIAN NUMBERS: >13,000 student suicides (NCRB ADSI 2022), rising yearly, roughly one every 40 minutes; suicide a leading cause of death in Indian adolescents and young adults.",
        "THE STRONGEST PREDICTOR: prior suicide attempt; every review, every exam.",
        "THE SCREEN: asking does NOT plant ideation. The randomised and survey evidence; the viva trap is the myth, not the question.",
        "NO-SUICIDE CONTRACTS: zero protective evidence, retired; replaced by the Stanley-Brown-lineage safety plan.",
        "MEANS RESTRICTION: the Sri Lankan pesticide-regulation story (national bans and reformulations cutting suicide rates dramatically); the strongest single intervention evidence in suicide research.",
        "NSSI: ~15–20% of adolescents; function = affect regulation; DBT-A the treatment tier; longitudinal risk elevation despite absent dying intent.",
        "THE POST-ATTEMPT WINDOW: weeks 1–12 the highest-risk weeks; scheduled brief contacts measurably protect.",
        "CONTAGION: youth > adults; the media discipline (no method, no location, no romance; helpline numbers always).",
        "ADOLESCENT ACTS: state-dependent, minutes-scale, means-at-hand. The physics that makes friction life-saving.",
        "MHA 2017: decriminalisation + the presumption of severe stress; Tele-MANAS 14416; CHILDLINE 1098.",
        "THE MNEMONIC: SAM-C. Screen (ask directly), Access (means restriction), Map (the safety plan's people and signs), Condition (treat the load).",
      ],
      pyqConcepts: [
        "Prior attempt as the single strongest predictor: the one-liner that anchors a full formulation question.",
        "MHA 2017 s.115 decriminalisation and the presumption of severe stress: the Indian-law MCQ that recurs across tiers.",
        "The safety plan versus the no-suicide contract: the 'which intervention has evidence' framing.",
        "The Sri Lankan pesticide bans as natural-experiment evidence: the means-restriction discussion question.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 16-year-old Ahmedabad girl arrives semi-comatose from an evening medicine overdose, found by her mother an hour after the board result showed 62%: the family WhatsApp had already announced her as the topper-track. The load, mapped on day 4 after medical clearance: two years of undiagnosed depression (sleep inverted, the 'wet rag' fatigue, the cricket dropped, the 20-mark fall read as carelessness), the marks-conditional family climate (the father's fridge chart tracking her percentages against the cousin's), a breakup unspeakable at home, the coaching-culture isolation, and the spark: the result, the WhatsApp, the evening alone in a home with an unlocked medicine cabinet holding the grandmother's full cardiac stock. Screened directly she answers everything: two weeks of active ideation before the result, no specific plan ('it was always the result that would decide'), one prior episode of cutting at 14; found, scolded, never assessed. The answer's spine: medical clearance first; the formulation (severe load, state-dependent act, means by opportunity, protective factors named, one cousin, one teacher, the dog); then the safety-first card in her own words, the cabinet re-keyed to week-quantities, three family conferences renegotiating the marks-contract, CBT plus fluoxetine with weekly review and the activation-watch, the school re-entry with the supplementary-and-NIOS route in writing, the cousin and teacher named and briefed with her consent, and the day-9 and day-30 reviews for the delayed-collapse window: the full four-pillar architecture in one consultation chain.",
        "A Std 12 Hyderabad boy dies by suicide on a Sunday night (method withheld by discipline, as it should be everywhere). By Wednesday the school has three crisis presentations: two close friends not eating or sleeping, and one girl who had exchanged 'we should all go' messages with him a month earlier. The school's first instinct (the assembled homage, the photo-wall, the principal's 'brightest star' speech) is interrupted by the gatekeeper-trained counsellor, and the postvention protocol runs: the vulnerable pool identified within 48 hours (the friends, the message-exchanger, two prior self-harm cases known to the counsellor) and individually assessed; the message-exchanger taken at the high-acuity tier (safety plan, family conference, treatment referral, her load had its own depression architecture); the memorial converted to service format; the staff briefed on the reporting rules; the parents' letter with signs, scripts and helpline numbers; the press given two lines of physics instead of the story. No cluster occurs, and the answer's discriminating point: the message-exchanger was the highest-risk student in the school and would have been missed without the protocol; the homage format she was spared is the contagion multiplier.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Prior attempt = the single strongest predictor of eventual suicide death.",
        "Asking about suicide does not plant the idea: screening reveals without creating.",
        "Means restriction is the strongest population-level prevention evidence (the pesticide-regulation natural experiments).",
        "The safety plan replaced the no-suicide contract (no protective evidence).",
        "MHA 2017 s.115: attempted suicide decriminalised; presumption of severe stress, care not prosecution.",
        "NSSI functions as affect regulation, not a dying attempt, but never 'just drama'.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The named-adult contract is the follow-up's load-bearing wall: the 'who does this child call at 11 p.m.' question answered in writing, one person, named, with the script; surveillance is not the asking.",
        "The punished-disclosure history is a red flag in itself: self-harm found at 14, scolded, never assessed; shame added to pain is load, and the missed first warning is part of the formulation.",
        "The fluoxetine activation-watch is a scheduling commitment, not a caveat: weekly review through the early weeks, the family taught what to watch, same-week review for any emerging agitation, and the safety-first card outranks the prescription at every review.",
        "The POCSO-confidentiality conflict is navigated prospectively: tell the young person honestly what the duty is BEFORE the disclosure window, then navigate protection WITH them. The begged confidence is honoured by honesty, not by silence.",
        "The day-9 review exists because the delayed collapse is real: the girl who 'coped' through results day and breaks a week later; the follow-up architecture is calendar work, not instinct work.",
        "The media discipline is clinical work: the doctor quoted after a student's death shapes the next cluster; two lines of physics, never the method, never the 'model student' elegy; put the two-line discipline in the hospital protocol before the result season needs it.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The 62% that didn't become a headline",
      presentation: "A board result, a WhatsApp announcement, an unlocked medicine cabinet, and a two-year load nobody had asked about.",
      initialPresentation: "A 16-year-old Ahmedabad girl was brought to the emergency department semi-comatose from an evening medicine overdose, found by her mother an hour after the board result showed 62%. The family's WhatsApp had already announced her as the topper-track. She survived on supportive care; the psychiatric assessment was taken on day 4, after medical clearance, with both parents present.",
      history: "The load was two years deep: an undiagnosed depression (sleep inverted, the 'wet rag' fatigue, cricket dropped, a 20-mark fall read as 'carelessness'); a marks-conditional family climate: the father's chart on the fridge tracking her percentages against the cousin's; a breakup she had been unable to speak of at home ('they would have stopped college'); the school's coaching-culture isolation. Screened directly, she answered everything: two weeks of active ideation before the result, no specific plan ('it was always the result that would decide'), and one prior episode of cutting at 14; found, scolded, never assessed: the punished disclosure.",
      examination: "Post-medical-clearance mental state: full orientation, spontaneous speech, no perceptual abnormality; the direct screen positive for recent active ideation, negative for plan-preparation; superficial healing cuts on the left forearm consistent with the age-14 episode; protective factors elicited deliberately, one cousin, one teacher, the dog.",
      diagnosis: "Severe distal load (undiagnosed depressive disorder on a marks-conditional family climate) with a state-dependent, means-by-opportunity suicide attempt: the storm's physics, not a settled plan; prior NSSI by history.",
      management: "The safety plan built with her, her words, on one card: warning signs (sleep inversion, the dark playlist, the 'what's the point' thoughts), coping (the run, the shower, the cousin's number first), the means audit (the medicine cabinet re-keyed and re-dosed to week-quantities), Tele-MANAS and the clinic's evening number. Three family conferences: the marks-contract renegotiated, the fridge chart ceremonially retired, the father's scripted first sentence converted ('the result is a number; you are not'), the breakup-communication channel opened, not approval, acceptance of disclosure-ability. Depression treated: CBT plus fluoxetine with the weekly review discipline and the activation-watch taught. The school re-entry letter: the supplementary-exam route plus NIOS as Plan B in writing, the counsellor contracted for the term. The cousin and teacher named and briefed with her consent. The brief-contact layer: scheduled Sunday texts, day-9 and day-30 reviews.",
      outcome: "At six months: depression remitted, the supplementary exam taken 'with a normal heartbeat', the cutting never repeated, and the card still in her pencil box: 'like a fire drill card; I have never needed the extinguisher.'",
      teachingPoints: [
        "The 62% was the spark; the two-year load was the illness, and the load was treatable. The exam is the calendar, not the cause.",
        "The medicine cabinet audit is the Indian household's highest-yield single act. The grandmother's cardiac stock is the commonest find.",
        "The punished cutting at 14 had been the field's first warning, missed: discovered-and-punished self-harm is load, not attention-drama.",
        "The safety plan's named-people order (cousin first, adult second) follows the adolescent's real trust-map: the friend before the adult for the young.",
        "The fridge chart and the WhatsApp topper announcement are the exam culture's load-loaders; the family sessions treat them, not just the girl.",
      ],
    },
    {
      title: "The school's worst fortnight (postvention done right)",
      presentation: "A Std 12 boy's Sunday-night death, a counsellor with gatekeeper training, and the homage assembly that never happened.",
      initialPresentation: "A Std 12 boy in a Hyderabad school died by suicide on a Sunday night (method and details withheld by discipline here, as they should be everywhere). By Wednesday the school had three crisis presentations: two close friends not eating or sleeping, and one girl who had exchanged 'we should all go' messages with him a month earlier (the contagion pool) against a background of class-wide dread.",
      history: "The school's first instinct was the assembled homage: the photo-wall, the principal's grief-speech praising him as 'the brightest star'. The counsellor (who had been gatekeeper-trained) interrupted it, and a postvention protocol ran instead. The known pool: the two close friends; the message-exchanger; two prior self-harm cases already known to the counsellor.",
      examination: "The individual assessments of the vulnerable pool: the two friends with acute distress reactions and sleep-appetite disruption; the message-exchanger with a positive direct screen: active ideation on a load that had its own depression architecture; the prior self-harm cases reviewed at their own tier.",
      diagnosis: "Contagion-window presentations across an identifiable vulnerable pool (the friends, the identified-with, the prior attempters), with one student at true high acuity: the message-exchanger, whose ideation predated the death but whose risk the death amplified.",
      management: "The vulnerable pool identified within 48 hours and individually assessed; the message-exchanger taken at the high-acuity tier: safety plan, family conference, treatment referral. The memorial converted to service format: a tree planted, the exam-stress counselling room named after no one, a help-seeking assembly that taught the physics honestly ('storms pass; the dead don't get to see it pass; 14416 exists'). The staff briefed on the reporting rules: no method, no note-romanticising, no 'he had everything' narrative. A letter to all parents: the signs-list, the ask-script, the helpline numbers, the invitation to a briefing. The boarding-school hostel wardens briefed on the weekly well-check for the term. The local press given the two-line physics statement instead of the story they wanted.",
      outcome: "No cluster occurred. The message-exchanger finished her year under treatment; and one of the friends asked the counsellor the question that defines postvention done right: 'if I ever feel like that, can I just come here?' The answer was yes, and that sentence is the programme's outcome measure.",
      teachingPoints: [
        "The homage assembly is the contagion multiplier: identification, permission, script-provision dressed as mourning; the service-and-honesty format memorialises without script-provision.",
        "The vulnerable pool is identifiable within 48 hours if anyone has trained eyes: close friends, prior attempters, the identified-with, the message-exchangers.",
        "The message-exchanger was the highest-risk student in the school and would have been missed without the protocol: pool identification is the postvention's clinical core.",
        "The parents' letter is prevention for the next school down the road. The signs-list and the ask-script travel home.",
        "The media discipline held because the school issued its two lines BEFORE the press wrote its own twenty: the timing is the discipline.",
      ],
    },
  ],
  clinicalPearls: [
    "Youth suicide is a different shape from adult suicide: state-dependent, minutes-scale, means-at-hand; the storm passes, and doors must be slow to open.",
    "Prior attempt is the single strongest predictor of eventual death: every review, every exam.",
    "Asking does NOT plant ideation: screened young people show no increase in suicidal thoughts; the disclosing groups show relief. The myth's persistence costs lives.",
    "Means restriction is the mortality lever: the Sri Lankan pesticide-regulation natural experiments are the strongest single intervention evidence in world suicide research.",
    "The written safety plan (the Stanley-Brown lineage: warning signs → self-coping → named people in order → means list → professional contacts → reasons) outperforms the no-suicide contract, which has no protective evidence at all.",
    "The exam is the calendar, not the cause: families fixate on the spark because it is seeable; the clinician maps the load, because the treatment treats the LOAD.",
    "NSSI is regulation, not dying: controllable, visible physical pain displacing unbearable emotional pain, endorphin-reinforced, and a marker of later risk even where intent is absent.",
    "'Just a threat' is the deadliest sentence in the field. An attempt is an attempt; bluffs are discovered at funerals.",
    "The calm after the storm is the decision's quiet: assess, never reassure-dismiss.",
    "The post-attempt weeks 1–12 are the highest-risk window in all of suicidology: the schedule is the safety net, the brief contacts the protection.",
    "MHA 2017 s.115: attempting suicide decriminalised, the person presumed to be under severe stress and entitled to care. Tele-MANAS 14416 and CHILDLINE 1098 are the Indian crisis spine.",
    "Eight adults watching marks do not equal one adult asking feelings: surveillance is neither friction nor the asking; the safety plan's named-adult contract cuts through.",
    "The doctor quoted after a student's death shapes the next cluster: two lines of physics, never the method, never the romance; the helpline numbers always.",
  ],
  highYieldSummary: [
    "Definition: youth suicide is most often an impulsive act of a distressed, sometimes mentally ill, sometimes momentarily overwhelmed young brain with easy access to a lethal method, while self-harm (cutting, burning) is mostly a different thing: a private way of surviving unbearable feelings. The clinical medicine is unglamorous: ask directly, remove means, build the safety net around one named person, treat the condition underneath.",
    "Epidemiology: suicide among the top three causes of death in 15–29-year-olds worldwide; India's NCRB ADSI counting above 13,000 student suicides in 2022 and climbing: roughly one student death every 40 minutes, suicide a leading cause of death in Indian adolescents and young adults as national rates rise past 1.7 lakh annually; hanging commonest and poisoning second in the Indian method distribution (pesticides historically prominent in rural youth); NSSI in roughly 15–20% of adolescents, girls' presentations dominating clinic routes; LGBTQ+ and marginalised youth carrying several-fold risk; abuse survivors and prior attempters the two highest-risk clinical groups.",
    "Mechanism: the storm's 20 minutes (amygdala alarm at full volume, under-construction control circuitry, psychache, the two-option tunnel, the method at hand decides); the load and the spark (the chamber loaded over months, the spark seeable, the load treatable); the developmental physics (prefrontal maturation completing in the mid-20s; the engine ahead of the brakes; time-horizon shrinkage amplifying hopelessness); the skin that speaks (NSSI's affect-regulation engine, endorphin-reinforced); the echo chamber (identification + permission + script-provision, contagion stronger in the young than in any other age group).",
    "Clinical: the most missed signs are speech (direct dying talk commoner than folklore suggests; indirect statements; the dark-emoji signals; goodbye- and will-flavoured messages) and behaviour (giving away, settling, the method-seeking search history, the sudden calm, the long sleeves in summer); the three costumes (somatic, behavioural, disciplinary) all deserve the screen; the situation flags (post-result weeks, coaching-city return, abuse-disclosure window, the classmate's death) mark when to ask today.",
    "Diagnosis: the structured formulation over gestalt; the C-SSRS screen-to-depth ladder (named, items never reproduced); prior attempts (number, lethality, recency); the distal load; protective factors sought deliberately; the access audit; the intoxication state; the developmental-physics judgement; then the acuity tiering: high (intent + plan + means or fresh attempt: not left alone, means removed now, admission decision with family, daily-to-alternate-day contact), moderate (safety plan + means restriction + condition treatment + weekly review + named-adult contract), lower (condition treated, plan seeded, follow-up held), and NSSI as its own condition with overlap screening at every review.",
    "Management: the four boring pillars; asked, means-removed, people-named, condition-treated (SAM-C: Screen, Access, Map, Condition). The safety-first card (Stanley-Brown lineage) replacing the no-suicide contract; the Indian household means audit (pesticide shed, one-week medicine strips, ligature points during crisis weeks, alcohol, online means); the condition tier (CBT/IPT-A ± fluoxetine-class with weekly review and activation-watch; DBT-A for the repetition-heavy self-harmer); the connectedness prescriptions (the named adult, the school re-entry, brief contacts through weeks 1–12); the school programme (gatekeeper training, results-season protocol, anti-bullying enforcement, the postvention protocol with WHO media discipline), and the honest what-does-NOT-work list (contracts, scaring-straight, punitive transfers, the 24-hour-watch-without-plan, the moral-hazard myth).",
    "The Indian tier: MHA 2017 s.115 (decriminalisation, presumption of severe stress, care not custody; the rights-protective admission structure with the nominated representative for minors); Tele-MANAS 14416 (24×7, free, 20 languages) and CHILDLINE 1098 as the crisis spine; POCSO's mandatory reporting when abuse surfaces, navigated with the young person honestly; the pressure architecture named clinically (the marks-contract, the coaching-city isolation, the stigma-silence complex, the results-season weather); the costs honest (SSRI tier ₹50–150/month, DBT-A metro-concentrated at ₹30,000–1,00,000+, the crisis consult ₹800–2,500, approx 2026); and the recurring failure named too: not resource scarcity but the screen nobody ran at the paediatric or 'attitude problem' visit.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "ys-quiz-1",
      question: "The single strongest predictor of eventual suicide death in a young person:",
      options: ["Family income", "Prior suicide attempt", "Poor marks", "Male gender"],
      correctIndex: 1,
      explanation: "Every review, every exam: the attempt history anchors the formulation — and makes the follow-up architecture the treatment it is.",
      afterSectionId: "diagnosis",
    },
    {
      id: "ys-quiz-2",
      question: "Asking a depressed adolescent directly about suicidal thoughts:",
      options: ["Plants the idea", "Reveals without creating — screening evidence shows no increase in ideation, and disclosing groups show relief", "Must wait until rapport is established", "Is only for psychiatrists"],
      correctIndex: 1,
      explanation: "The dead myth: the question only decides whether the tunnel gets a visitor — the thing that plants danger is NOT asking.",
      afterSectionId: "symptoms",
    },
    {
      id: "ys-quiz-3",
      question: "The no-suicide contract ('promise me you won't do anything') in modern practice:",
      options: ["Has strong protective evidence", "Has no protective evidence and gives false reassurance — replaced by the written safety plan", "Is legally binding in India", "Reduces assessment time usefully"],
      correctIndex: 1,
      explanation: "Retire the theatre; build the card — warning signs, self-coping, named people in order, the means list, professional contacts, the reasons.",
      afterSectionId: "management",
    },
    {
      id: "ys-quiz-4",
      question: "The strongest single intervention-level evidence in suicide prevention worldwide:",
      options: ["Awareness rallies", "Means restriction — the pesticide-regulation natural experiments", "No-suicide contracts", "Annual checkups"],
      correctIndex: 1,
      explanation: "Friction at the tunnel's entrance: the storms pass when the doors are slow to open — the Sri Lankan bans and reformulations cut suicide rates dramatically.",
      afterSectionId: "management",
    },
    {
      id: "ys-quiz-5",
      question: "Most adolescent self-harm (cutting, burning) functions primarily as:",
      options: ["A suicide attempt", "Affect regulation — controllable physical pain displacing uncontrollable emotional pain", "An attention display", "A group ritual"],
      correctIndex: 1,
      explanation: "The regulation job explains the repetition (real, fast, endorphin-backed relief) — and the risk-screening still stays mandatory at every review.",
      afterSectionId: "differential",
    },
    {
      id: "ys-quiz-6",
      question: "Under the Mental Healthcare Act 2017 (India), a person who attempts suicide is:",
      options: ["Criminal under IPC 309", "Presumed to be under severe stress and entitled to care — the attempt decriminalised", "Required to be hospitalised mandatorily", "Liable for a fine"],
      correctIndex: 1,
      explanation: "The care-not-custody presumption of s.115 — the family's rights-script when the system wobbles.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the Indian student-suicide numbers and the 'one every 40 minutes' translation, then say why the stated cause (exam failure) is the spark, not the load.", answer: "THE NUMBERS: the NCRB's Accidental Deaths and Suicides in India counted above 13,000 student suicides in 2022, climbing year on year (roughly one student death every 40 minutes) with suicide a leading cause of death in Indian adolescents and young adults as national rates rise past 1.7 lakh annually. THE SPARK-VERSUS-LOAD LOGIC: exam failure sits among the leading STATED causes, but the stated cause is always the trigger-layer; the calendar event that fired a chamber loaded over months by depression, abuse, humiliation, isolation and hopelessness. The exam did not load the chamber; it found it loaded. That is why the treatment treats the LOAD (the depression, the abuse, the family climate) and never just the calendar, and why the next spark is never predictable, which is the entire argument for building the safety architecture before the next result day.", topic: "Epidemiology" },
    { question: "Give the screen's question ladder, then the one-line evidence that buries the 'asking plants ideas' myth.", answer: "THE LADDER (asked directly, in plain words): In the past two weeks, have you felt life isn't worth living? Have you thought about ending your life? Have you thought about HOW? Do you have what you'd need? Have you done anything toward it? Have you ever tried before? Then the two that matter most for the plan: what stops you, and who would you tell; followed by the means audit with the family. THE MYTH'S BURIAL: the randomised and survey evidence is consistent; screened young people show no increase in suicidal thoughts, and the disclosing groups show RELIEF; the idea is almost always already there, and the question only decides whether it travels to you or stays in the tunnel. The thing that plants danger is NOT asking.", topic: "Clinical practice" },
    { question: "Build a safety plan's six components from memory, and state why it replaces the no-suicide contract.", answer: "THE SIX COMPONENTS (the Stanley-Brown-lineage card, built WITH the young person, in their words): (1) my warning signs; the storm's first clouds: sleep inversion, the dark playlist, the falling marks; (2) what I do myself: the coping list: the run, the shower, the music, the breathing; (3) who I call, in order: the friend first for the young, then the adult, NAMED and NUMBERED; (4) what makes the home safe. The means list; (5) the professional contacts: the clinic, Tele-MANAS 14416, CHILDLINE 1098; (6) the reasons, in their own words: the dog, the cousin, the unfinished thing. Rehearsed in session (the tunnel-exit only works if pre-installed), the family holds a copy, and it is reviewed at every contact. WHY IT REPLACES THE CONTRACT: the no-suicide contract ('promise me you won't') has zero protective evidence and provides false reassurance; modern practice has banned it; the safety plan carries the outcome evidence the contract never had, because it pre-installs the exits before the tunnel rather than extracting a promise inside it.", topic: "Management" },
    { question: "Run the Indian household means audit: the items, and the framing sentence for the family.", answer: "THE AUDIT (walked concretely with the family): (1) agricultural pesticides (the shed locked, the 'buy small, store locked' rule (the Sri Lankan lesson: national bans and reformulations cut suicide rates dramatically) the strongest means-evidence in world psychiatry); (2) medicines: the week-of-quantities rule: no strip bottles, one week per family member, the grandmother's cardiac stock being the commonest household pharmacy; (3) ropes and ligature-access points during the crisis weeks: the terrace, the bathroom door: supervision-level decisions for the high-acuity weeks, not architecture forever; (4) the alcohol-and-disinhibition audit: intoxication is the spark's fuel; (5) the online means: the search-history conversation and app-level filtering at home during crisis weeks. THE FRAMING SENTENCE: 'we are not treating your child as a criminal; we are adding friction at the tunnel's entrance, because storms pass and doors must be slow to open.'", topic: "Indian practice" },
    { question: "Explain the 20-minute storm physics and the three interventions that follow from it.", answer: "THE PHYSICS: the overwhelming majority of adolescent suicidal crises are minutes-to-hours long, not weeks; the brain's alarm (amygdala-driven) fires at full volume while the control circuitry that would say 'wait, this is permanent' is under construction (prefrontal maturation completes only in the mid-20s); psychache crowds out everything else and thinking narrows into the two-option tunnel. In the tunnel, the method at hand decides: the person who must FIND a method is usually saved by the finding-time; the person with a method at arm's reach is not. It is also why 'she was fine an hour later' is not evidence of drama. It is the storm's natural weather. THE THREE INTERVENTIONS: means restriction (make the finding slow (the mortality lever), the safety plan (pre-install the tunnel-exits before the tunnel), and the connected person (a voice that penetrates the tunnel) the named adult).", topic: "Mechanism" },
    { question: "Distinguish NSSI from suicide attempts on intent, function and repetition, then state the overlap risk that keeps screening mandatory at every review.", answer: "INTENT: the suicide attempt carries dying intent (partial or complete); NSSI carries dying-absent intent. The act is not aimed at ending life. FUNCTION: NSSI is affect regulation; physical pain that is controllable and visible displacing emotional pain that is neither, with the body's endorphin response supplying real, fast chemical relief; the marks can be a private language when speech has been punished or shamed. REPETITION: NSSI repeats precisely because the relief is real; the same reinforcement curve as any compulsive relief-loop; high repetition distinguishes it clinically, and concealment (the long sleeves in summer) is the Indian clinic's tell. THE OVERLAP: NSSI carries a genuine longitudinal elevation of later suicide risk (an outcome marker, not an intent marker) and the two can coexist in one young person at one time. Hence the rule: treat NSSI as its own condition (the DBT-A tier) while screening for suicidal intent at EVERY review; a negative screen last month is not a clearance.", topic: "Diagnosis" },
    { question: "What is the postvention sequence in a school after a student's suicide, and which single student-profile is the highest-risk?", answer: "THE SEQUENCE: (1) the vulnerable pool identified within 48 hours (close friends, anyone with a history of self-harm, the identified-with, the message-exchangers) and individually assessed; (2) the memorial converted to service format: a tree planted, a counselling room named after no one, a help-seeking assembly that teaches the physics honestly ('storms pass; the dead don't get to see it pass; 14416 exists'), never the homage assembly with the photo-wall and the 'brightest star' speech (identification + permission + script-provision: the contagion multiplier); (3) the staff briefed on the reporting rules: no method, no note-romanticising, no 'he had everything' narrative; (4) the letter to all parents with the signs-list, the ask-script and the helpline numbers; (5) the hostel wardens (boarding schools) briefed on the weekly well-check; (6) the press given the two-line physics statement BEFORE they write their own twenty. THE HIGHEST-RISK PROFILE: the student who exchanged 'we should all go' messages with the dead; the message-exchanger, whose own load (often a depression architecture) is amplified by the exposure; she is the one the protocol exists to find and would be missed without it.", topic: "Management" },
    { question: "Name the Indian legal-system spine for the young person in crisis: the MHA 2017 s.115 presumption, the helplines, and the POCSO reporting duty's edge.", answer: "THE SPINE: the Mental Healthcare Act 2017 s.115: attempting suicide is decriminalised; the person is presumed to be under severe stress and is entitled to care, not prosecution (the police-training reality is imperfect; the family's rights-script helps: the Act's text is on their side). Admission where needed runs under the Act's rights-protective structure, for minors, the nominated representative and the least-restrictive principle. THE HELPLINES: Tele-MANAS 14416 (the national tier: 24×7, Government of India, free, 20 languages) and CHILDLINE 1098 (the minors' spine), with iCall and the urban crisis lines as the metro tier. THE POCSO EDGE: when abuse of a minor is disclosed in exactly these assessments, the mandatory-reporting duty binds; the rare but real conflict between a teenager's begged confidentiality and the law is best handled by telling the young person honestly what the duty is BEFORE the disclosure window, then navigating protection WITH them: honesty honoured, silence refused.", topic: "Law" },
  ],
  faqs: [
    { question: "Won't asking about suicide put the idea in her head?", answer: "No. This has been studied directly: screened young people show no increase in suicidal thoughts, and the groups who disclose show relief. The idea is almost always already there: the question only decides whether it travels to you or stays in the tunnel. The thing that plants danger is not asking." },
    { question: "He's just threatening to manipulate us, if we react, he'll learn it works.", answer: "An attempt is an attempt and a threat is a warning; the deadliest sentence in this field is 'just threatening'. Even when there is manipulation in it, a child using the suicide-lever has run out of every other lever. Address the need underneath, always take it seriously, and let professionals judge the risk-layering. That is not indulgence, that is triage. There is no 'call the bluff' in suicidology; bluffs are discovered at funerals." },
    { question: "She cut herself: does that mean she wants to die?", answer: "Usually not. Most self-harm is a way of handling unbearable feelings, not ending life: physical pain that is controllable replaces emotional pain that isn't, and the relief is real, which is why it repeats. But it is never 'just drama': it signals genuine distress, and over years it raises later suicide risk. It needs treatment (skills, therapy, the underlying pain addressed) not punishment of the skin or the 'doing it for attention' dismissal." },
    { question: "What do we actually change in the house?", answer: "Five things, this week: lock the pesticide shed and buy agricultural chemicals in small, locked quantities; re-dose the household medicines to one-week strips in a locked box (the grandmother's cardiac stock is the usual find); remove or secure ropes and ligature items during the risk period; hold the alcohol audit: disinhibition is the spark's fuel; and agree who is the ONE adult the child calls at 11 p.m., named, the number saved in her phone. None of this treats the cause; all of it keeps the storm survivable." },
    { question: "Will she try again?", answer: "The honest math: a prior attempt is the strongest predictor we have of a future one, which is precisely why the follow-up exists, the plan exists, and the treating continues. Risk is highest in the first weeks-to-months after an attempt, then falls with time and treatment. The question that protects better than prediction is preparation: the plan card, the named person, the treated depression, the removed means." },
    { question: "The school is scared after what happened. What should they do?", answer: "The sequence: identify and support the vulnerable pool within 48 hours (close friends, anyone with a history of self-harm, those who exchanged messages with the dead student); memorialise through service, not homage: no assemblies romanticising him, no photo-walls, no 'he had everything' speeches; tell the classes the honest physics (the storm passes, help exists, 14416) without method details; letter the parents with signs and scripts; and refuse the press the method-story. Handled this way, schools interrupt clusters; handled the other way, they create them." },
    { question: "We are a strong, good family. How did this happen here?", answer: "It happens in every kind of family. Depression, abuse, pressure and pain do not check addresses or values, and the 'our family doesn't have such problems' belief is itself a risk factor: it makes the young person's pain unspeakable at the one place it should be safest. The strongest families are the ones where the sentence 'I'm not okay' is sayable at the dinner table." },
    { question: "Is it a crime in India to attempt suicide?", answer: "No. Since the Mental Healthcare Act 2017, attempting suicide is decriminalised. The law presumes the person was under severe stress and entitles them to care, not punishment. If a police officer treats it otherwise, the family can invoke the Act; the text is on their side." },
    { question: "Won't hospitalising her make it worse: stigmatise her?", answer: "Sometimes admission is the safest days of the whole treatment (active intent, means at home, the family unable to hold the plan), and modern Indian practice under MHA 2017 is rights-protective, least-restrictive and brief. Sometimes the better course is the intensive home package with daily contact. The decision is clinical, made with the family and revisited. The error is not which option you choose; it is choosing neither and hoping." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "WHO — Preventing Suicide: a resource for media professionals (the reporting discipline: no method, no location detail, no romanticising, the helpline numbers always)" },
      { source: "Mental Healthcare Act 2017 (India) — s.115 decriminalisation, the presumption of severe stress, and the rights architecture for minors" },
      { source: "Tele-MANAS (14416) and CHILDLINE (1098) programme documentation — the Indian crisis spine" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.10 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Gould MS et al. — the 'asking does not harm' screening evidence (the myth-burial trial lineage)" },
      { source: "Miller AL et al. / McCauley E et al. — DBT-A for self-harming adolescents (the treatment tier's trials)" },
      { source: "Goldman-Mellor S et al. — the brief-contact and caring-letters intervention evidence for the post-attempt window" },
    ],
    reviews: [
      { source: "Stanley B & Brown GK — the Safety Planning Intervention (the evidence-based core replacing contracts)" },
      { source: "Columbia Lighthouse Project — the C-SSRS screening framework (named; structure described, items never reproduced)" },
      { source: "Hawton K et al. and the means-restriction evidence lineages; Gunnell D et al. — the Sri Lankan pesticide-regulation natural experiments (the strongest single intervention evidence)" },
      { source: "Klonsky ED — NSSI's function (affect regulation) and the risk-outcome mapping; Nock MK — the self-injury epidemiology and disclosure work" },
      { source: "NCRB — Accidental Deaths and Suicides in India (ADSI): the student-suicide statistics and the rising trend" },
      { source: "The postvention guidance lineages — school protocols and the contagion-prevention literature built on WHO's media resource" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 (24×7, free, 20 languages) and CHILDLINE 1098 (under-18) — the numbers this course asks every family to save tonight" },
      { source: "The safety-first card template and the household means-audit checklist — the two instruments handed to every family in this course" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "8 min",
      description: "Plain language: the storm passes, the asking is safe, the house audit, the card, the warning signs, and the two numbers to save tonight.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "26 min",
      description: "The screen ladder, the four pillars, the NSSI distinction, MHA 2017 s.115, the post-attempt window.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with the decision path, the postvention protocol, both cases and the Indian layer.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "43 min",
      description: "Everything: the safety-first card craft, the means-audit consultation, the postvention command of the school's worst fortnight, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The Indian arithmetic, the load-spark architecture, the four boring pillars.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the NCRB numbers and the every-40-minutes translation, and explain why the exam is the spark, not the load." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The storm's 20 minutes, the skin that speaks, the echo chamber.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the method at hand decides the outcome, and why friction, the card and the connected person follow from that physics." },
    { number: 3, title: "Clinical Practice", description: "The screen, the formulation, the tiering, the safety-first card.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the question ladder, build the card and walk the household means audit without notes." },
    { number: 4, title: "Indian Context", description: "The results-season weather, the coaching-city consultation, the law's spine.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the 'just threatening' correction, the pesticide script and the s.115 rights-script cold." },
    { number: 5, title: "Exam Revision", description: "Exam lens, both cases and the high-yield layer.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the post-overdose long case cold (medical clearance to follow-up architecture) and recite SAM-C." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.10 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Stanley B & Brown GK — the Safety Planning Intervention (the evidence-based core replacing the no-suicide contract)", sourceType: "primary", year: "2012 onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Columbia Lighthouse Project — the C-SSRS screening framework (named; structure described, items never reproduced)", sourceType: "primary", year: "2011 onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Hawton K et al. and the means-restriction evidence lineages; Gunnell D et al. — the Sri Lankan pesticide-regulation natural experiments (the strongest single intervention evidence in suicide research)", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Goldman-Mellor S et al. — the brief-contact and caring-letters intervention evidence (the post-attempt window protection)", sourceType: "primary", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Miller AL et al. / McCauley E et al. — DBT-A for self-harming adolescents (the multigamily skills tier and its trials)", sourceType: "trial", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Klonsky ED — NSSI's function (affect regulation) and risk-outcome mapping; Nock MK — the self-injury epidemiology and disclosure work (the 15–20% adolescent figure)", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "WHO — Preventing Suicide: a resource for media professionals; the school-postvention guidance lineages built on it (the contagion and reporting discipline)", sourceType: "who", year: "1999 onward, updated series", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Gould MS et al. — the 'asking does not harm' screening evidence (the myth-burial trial lineage)", sourceType: "trial", year: "2005 onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Mental Healthcare Act 2017 (India) — s.115 decriminalisation, the presumption of severe stress, the rights architecture for minors; Tele-MANAS (14416) and CHILDLINE (1098) programme documentation; POCSO's mandatory-reporting duty", sourceType: "government", year: "2017 onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "NCRB — Accidental Deaths and Suicides in India (ADSI): student-suicide statistics above 13,000 in 2022, the year-on-year climb, the method distribution; the Indian clinical-cost layer (approx 2026)", sourceType: "government", year: "2022 report series", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "Epidemiology: suicide among the top three causes of death in 15–29-year-olds worldwide; NCRB ADSI student suicides above 13,000 in 2022 and climbing (roughly one every 40 minutes), suicide a leading cause of death in Indian adolescents and young adults as national rates rise past 1.7 lakh annually; NSSI in roughly 15–20% of adolescents; prior attempters and abuse survivors the two highest-risk clinical groups; sexual- and gender-minority youth at several-fold risk.", grade: "established", sources: ["S1", "S8", "S11"] },
    { text: "The developmental physics: prefrontal maturation completing only in the mid-20s (impulse control the last circuit to mature) making youth suicidal acts disproportionately state-dependent (minutes-to-hours rather than settled plans), with the method at hand deciding the outcome; the storm's 20 minutes is the clinical translation.", grade: "established", sources: ["S1"] },
    { text: "The screen: asking directly does NOT plant ideation; randomised and survey evidence showing no increase in suicidal thoughts among screened young people and relief among disclosing groups; the myth's persistence costs lives.", grade: "established", sources: ["S9"] },
    { text: "Prior suicide attempt is the single strongest predictor of eventual suicide death; risk highest in the first weeks-to-months after an attempt (the weeks 1–12 post-attempt window), protected by scheduled brief contacts and the caring-letters lineage.", grade: "established", sources: ["S1", "S5"] },
    { text: "The safety plan: the Stanley-Brown-lineage written Safety Planning Intervention (warning signs, self-coping, named people in order, the means list, professional contacts, the reasons, rehearsed in session, reviewed at every contact) has outcome evidence the no-suicide contract (zero protective evidence, false reassurance) never had.", grade: "established", sources: ["S2"] },
    { text: "Means restriction is the mortality lever: the Sri Lankan pesticide-regulation natural experiments (national bans and reformulations cutting suicide rates dramatically) constitute the strongest single intervention-level evidence in world suicide research; the Indian household audit (pesticide shed, one-week medicine strips, ligature points during crisis weeks, alcohol, online means) is its clinical delivery.", grade: "established", sources: ["S4"] },
    { text: "NSSI: function is affect regulation (controllable, visible physical pain displacing unbearable emotional pain, endorphin-reinforced), dying intent absent in the great majority, with genuine longitudinal elevation of later suicide risk; DBT-A (the adolescent multigamily skills tier) is the strongest-evidence treatment; the C-SSRS-ladder formulation screens the overlap at every review.", grade: "established", sources: ["S6", "S7", "S3"] },
    { text: "Contagion: suicidal behaviour is socially transmissible in the young more than in any other age group; identification, permission and script-provision acting on the already-loaded; the counter-mechanisms (WHO reporting discipline: no method, no location detail, no romanticising, helpline numbers always; the school postvention protocol with 48-hour vulnerable-pool identification and the service-format memorial) interrupt clusters.", grade: "established", sources: ["S8"] },
    { text: "The Indian legal spine: MHA 2017 s.115 decriminalised attempted suicide with the presumption of severe stress and entitlement to care (the rights-protective admission structure, the nominated representative and least-restrictive principle for minors); Tele-MANAS 14416 (24×7, free, 20 languages) and CHILDLINE 1098 as the crisis infrastructure; POCSO's mandatory reporting binds when abuse of a minor is disclosed.", grade: "established", sources: ["S10"] },
    { text: "The Indian pressure architecture: the marks-contract (love conditional on performance), the coaching-city isolation, the stigma-silence complex ('our family doesn't have such problems' as a risk factor), the results-season weather (May–June and March), the joint-family surveillance myth, and the method distribution (hanging commonest, poisoning second, pesticides prominent in rural youth) that dictates the means-restriction counselling content.", grade: "supported", sources: ["S1", "S11"] },
    { text: "The condition tier: depression present in the large majority of attempters, often undiagnosed; treated with CBT/IPT-A ± fluoxetine-class under the weekly-review and activation-watch discipline, treated depression being protective at population scale; what does NOT work documented equally (no-suicide contracts, fear assemblies increasing risk, punitive transfers, the 24-hour-watch-without-plan, the moral-hazard myth).", grade: "established", sources: ["S1", "S6"] },
  ],
};
