import type { PsychiatryCourse } from "./types";

/**
 * CHILD SLEEP — canonical Psychiatry course
 * (migration batch 13, Group L — child & adolescent psychiatry).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/child-sleep.md — untouched foundation),
 * re-researched against the Stores chapter's cited evidence
 * lineage (the JNNP misdiagnosis catalogue, the paediatric
 * treatment-efficacy review, the childhood-narcolepsy and
 * parasomnia series, the sleepiness-implications reviews, the
 * SIDS safe-sleep synthesis) with per-claim provenance.
 *
 * Drug routes: none linked — the effective treatments here are
 * behavioural and chronobiological (routines, diaries, phase
 * resets, adenotonsillectomy). Melatonin (whose paediatric role
 * the source itself calls unclear), the wake-promoting narcolepsy
 * tier and the parasomnia medication minority have no KYP lessons
 * and are recorded in contentGaps, never invented.
 */
export const childSleepCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "child-sleep",
  title: "Child Sleep",
  shortName: "Child Sleep",
  kind: "disorder",
  category: "Child & Adolescent Psychiatry",
  groupLetter: "L",
  groupName: "Child & adolescent psychiatry",
  learningPath: ["Psychiatry", "Child & Adolescent Psychiatry", "Child Sleep"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "32 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "The hyperactivity masquerade — sleepiness that slows adults down speeds children up",

  summary:
    "Childhood sleep problems are common, parent-defined and largely treatable, but sleepiness presents as over-activity rather than tiredness. Some apparent ADHD is untreated sleep disorder, from obstructive sleep apnoea to delayed phase, and improves when the sleep problem is treated.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Quote the 20–30% prevalence figure, name the high-risk groups (psychiatric disorder, learning disability, homelessness, maternal affective illness), and explain why the true prevalence of severe persistent disorders is unknown.",
    "Describe age-specific sleep physiology: the duration norms (17/14/13/12/10/9+ hours from term to adolescence), state organisation, the body clock established by ~6 months, slow-wave dynamics and the adolescent phase delay.",
    "Explain the hyperactivity masquerade — sleepiness presents as over-activity in young children — and list the sleep disorders that masquerade as ADHD.",
    "Take a structured paediatric sleep history: the three screening questions, the 24-hour review, the two-week sleep diary, and choose investigations (polysomnography, MSLT norms, actigraphy).",
    "Manage sleeplessness by age: infant prevention principles, toddler behavioural programmes, school-age fears and conditioned insomnia, adolescent delayed sleep phase syndrome with chronotherapy.",
    "Work the three-column differential of excessive daytime sleepiness (insufficient sleep, disturbed night sleep, increased need), including paediatric OSA, narcolepsy and Kleine–Levin syndrome.",
    "Recognise and manage the childhood parasomnias — applying the arousal-disorder rule that the child stays asleep and you do not wake him — separating them from nocturnal epilepsy.",
  ],
  quickFacts: [
    { label: "The headline prevalence", value: "20–30%", detail: "Of children from infancy to adolescence have sleep problems considered significant by them or their parents — the true prevalence of severe persistent disorders is unknown (methodological barriers)" },
    { label: "The masquerade", value: "Sleepiness speeds children up", detail: "In adults sleepiness reduces activity; in young children it increases it — irritability, tantrums, restlessness, poor concentration, impulsiveness, aggression — so the sleepy child is labelled difficult or hyperactive" },
    { label: "The duration ladder", value: "17/14/13/12/10/9", detail: "Hours per day from term to adolescence: 17 at term, 14 at 1 year, 13 at 2, 12 at 4, 10 at 10, 9+ in adolescence — and many adolescents, not least in India's coaching culture, get far less" },
    { label: "The body clock", value: "Established by ~6 months", detail: "Day–night consolidation and the withdrawal of night feeding ride on it — and the same clock delays biologically at puberty, setting up the adolescent sleep-debt epidemic" },
    { label: "The paediatric OSA contrasts", value: "Not fat — tonsils and adenoids", detail: "At least 2% of children (peak 2–6 years), usually not obese, equal sex ratio, partial obstruction with hypoventilation rather than prolonged apnoeas, over-active rather than sleepy days — adenotonsillectomy the usual treatment" },
    { label: "The arousal-disorder rule", value: "The child stays asleep — do not wake", detail: "Confusional arousals, sleepwalking and sleep terrors arise from slow-wave sleep; waking and comforting attempts INCREASE distress and should be discouraged" },
    { label: "The growth wire", value: "Growth hormone rides slow-wave sleep", detail: "Severe early-onset sleep disruption, classically untreated OSA, can produce failure to thrive — impaired growth as a sleep consequence, one reason snoring in a small child is not cute" },
    { label: "The Indian signature", value: "Family bed + coaching timetable", detail: "Co-sleeping is normal and often adaptive (the clinical targets are timing, routine and limits, not eviction); the coaching-class and night-study culture manufactures exactly the sleep debt the physiology predicts" },
  ],
  knowledgeGraph: [
    { label: "ADHD", type: "condition", href: "/psychiatry/adhd/", note: "The masquerade target: some 'ADHD' is OSA, periodic limb movements or a circadian disorder, and improves when the sleep disorder is treated — the screening questions before the stimulant" },
    { label: "Parasomnias", type: "condition", href: "/psychiatry/parasomnias/", note: "The adult-side account of the partial-arousal disorders; the paediatric rules are different (frequency, reassurance, the do-not-wake discipline)" },
    { label: "Excessive Sleepiness & Hypersomnias", type: "condition", href: "/psychiatry/hypersomnia/", note: "The narcolepsy and hypersomnia biology (orexin, CSF hypocretin) behind the childhood-onset forms that begin as simply prolonged overnight sleep" },
    { label: "Insomnia", type: "condition", href: "/psychiatry/insomnia/", note: "The adult insomnia framework — childhood sleeplessness inverts it: parents define it, parents maintain it, parents treat it" },
    { label: "Sleep–Wake Physiology", type: "condition", href: "/psychiatry/sleep-basics/", note: "The two-process and circadian machinery that childhood rewrites stage by stage — REM-dominant infancy, SWS-rich early childhood, the pubertal phase delay" },
    { label: "Child Anxiety", type: "condition", href: "/psychiatry/child-anxiety/", note: "Night-time fears and frequent nightmares with intense bedtime fears suggest an anxiety disorder — and the nightmare content may reveal the cause, including trauma or abuse" },
    { label: "Autism Spectrum Disorder", type: "condition", href: "/psychiatry/autism/", note: "Behavioural sleep treatment remains very effective in children with autism and learning disability — the parents' belief that the problems are inevitable and untreatable is the barrier to dismantle" },
    { label: "Developmental Disorders", type: "condition", href: "/psychiatry/developmental-disorders/", note: "Sleep disturbance in learning disability is particularly high and severe — and amenable to treatment: the two facts every parent of such a child deserves to hear together" },
    { label: "Orexin/hypocretin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The wake-hold switchboard whose loss is narcolepsy — the childhood form that starts as prolonged sleep and gets called laziness, depression or conversion disorder" },
    { label: "Suprachiasmatic nucleus", type: "brain-region", href: "#brain", note: "The body clock — established by ~6 months in the infant, biologically delayed at puberty: the structure whose timetable explains both the toddler's nights and the teenager's mornings" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry paediatric sleep medicine. The maturation story: sleep architecture is a developing organ — the newborn's sleep is REM-heavy (perhaps actively running brain maturation) and therefore fragile, which is why infant sleep is so easily disrupted; by early childhood slow-wave sleep dominates, and the partial-arousal disorders (sleepwalking, sleep terrors) arise FROM that deep sleep, which is why they cluster at this age; the pre-pubertal years bring the most efficient sleep of life; puberty then delays the phase biologically while society demands an early start, manufacturing the adolescent epidemic of sleep debt — and delayed sleep phase syndrome is its crystallised form: habitually late nights until the phase is physiologically delayed and sleeping earlier by choice becomes impossible. The sleepiness-that-looks-like-hyperactivity story: in adults sleepiness reduces activity; in young children it increases it — the immature brain expresses sleep debt as irritability, tantrums, restlessness, poor concentration, impulsiveness and aggression, so the sleepy child is labelled difficult or hyperactive and treated with stimulants while the sleep disorder underneath goes untreated; some ADHD is OSA, periodic limb movements or a circadian rhythm disorder, with behavioural improvement following sleep treatment. The growth story: growth hormone secretion is tightly linked to slow-wave sleep, so severe early-onset sleep disruption, classically OSA, can produce failure to thrive — with the chapter's wider warnings of impaired immunity and endocrine disruption: sleep is not downtime but a physiological work shift.",
    steps: [
      "The maturation story: REM-dominant fragile infancy (brain maturation still running); slow-wave-rich early childhood — the nest from which the arousal disorders rise; the pre-pubertal years of the soundest, most efficient sleep of life.",
      "The clock story: the body clock established by ~6 months enables day–night consolidation and night-feeding withdrawal; at puberty the phase delays biologically while school starts early — the adolescent sleep-debt machine, and DSPS its crystallisation.",
      "The masquerade story: sleepiness that slows adults speeds children up — irritability, restlessness, poor concentration, impulsiveness, aggression — the presentation that earns the wrong label.",
      "The consequence story: growth hormone tied to slow-wave sleep — severe early disruption (classically untreated OSA) producing failure to thrive; mood, behaviour, cognition and immunity the wider casualties.",
      "The parental loop: parents define, cause and maintain many childhood sleep problems — prolonged night-feeding, limit-setting failure, unhelpful associations — which is why treatment works THROUGH parenting change.",
      "The sorting discipline: precise diagnosis separates the three complaint families — sleeplessness, excessive daytime sleepiness and parasomnias — because each has its own age map, differential and treatment.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "scn-clock", name: "Suprachiasmatic nucleus (the body clock)", role: "Established by ~6 months — the timetable that lets day–night consolidation happen; biologically delayed at puberty, the engine of the adolescent phase shift and of DSPS when late nights become physiological.", grade: "established" },
    { id: "orexin-switchboard", name: "Lateral hypothalamus (the orexin/hypocretin switchboard)", role: "The wake-stability neurons whose loss is narcolepsy — the childhood form that begins as simply prolonged overnight sleep and is misread as laziness, depression or conversion disorder.", grade: "established" },
    { id: "airway-dilators", name: "Upper-airway dilator control (the collapsible paediatric throat)", role: "Deep-sleep tone loss over tonsillar and adenoidal crowding — partial obstruction with hypoventilation rather than prolonged apnoeas; the paediatric OSA engine peaking at 2–6 years.", grade: "established" },
    { id: "prefrontal-sleepy-manager", name: "Prefrontal cortex (the sleepy manager)", role: "Attention, inhibition and working memory are the first casualties of sleep loss — the immature prefrontal plus sleep debt expresses as over-activity rather than lethargy: the masquerade's seat.", grade: "supported" },
    { id: "gh-axis", name: "Hypothalamo-pituitary growth axis (the night-shift factory)", role: "Growth hormone pulses ride slow-wave sleep — fragmented SWS from severe early sleep disruption impairs growth, the failure-to-thrive route that snoring in a small child can signal.", grade: "established" },
  ],
  neurotransmitters: [
    { name: "Orexin/hypocretin", symbol: "Orx", role: "The wake-hold signal stabilising the sleep–wake switch; low CSF hypocretin is diagnostic in narcolepsy, which in childhood may begin as simply prolonged overnight sleep with the classic tetrad slow to assemble.", grade: "established", drugConnection: "No KYP lesson exists for the wake-promoting tier — the childhood narcolepsy medication route is recorded in contentGaps, never invented." },
    { name: "Melatonin", symbol: "MLT", role: "The darkness signal of the pubertally delayed clock — and the honestly unsettled question of this course: melatonin's role in paediatric sleep treatment remains unclear (uncertainties and potential reproductive-physiology hazards), so the behavioural chronotherapy is what is taught.", grade: "supported", drugConnection: "No KYP melatonin lesson exists — the 'role remains unclear' position is taught here; the route is never invented." },
    { name: "Adenosine", symbol: "Ade", role: "The sleep-pressure currency accumulating through waking — the molecule that caffeine (the adolescent chai-and-cola timeline) blindfolds, converting a late evening into an artificially wakeful one.", grade: "established" },
    { name: "GABA", symbol: "GABA", role: "The sleep-promoting brake — and the trap in the adolescent repertoire: stimulants to stay awake and sedatives to come down, sedation that is not restoration.", grade: "established" },
  ],
  pathways: [
    {
      id: "masquerade-pathway",
      name: "The hyperactivity masquerade (sleepiness to the ADHD label)",
      steps: [
        { label: "The sleep debt accumulates", detail: "OSA, periodic limb movements, insufficient sleep or a delayed phase fragments or shortens the night" },
        { label: "The developing brain expresses sleepiness as arousal", detail: "Irritability, tantrums, restlessness, poor concentration, impulsiveness, aggression — not the adult's nodding off" },
        { label: "The label arrives", detail: "Difficult, hyperactive, badly behaved — the school referral for 'ADHD-like behaviour'" },
        { label: "The wrong treatment tier", detail: "Stimulants prescribed while the sleep disorder underneath goes untreated" },
        { label: "The sleep disorder treated instead", detail: "Adenotonsillectomy, phase reset, behavioural programme — and the behaviour often improves" },
      ],
      clinicalManifestation: "The thin, snoring, mouth-breathing five-year-old whose teacher meets a different child three months after the adenotonsillectomy.",
      grade: "supported",
    },
    {
      id: "dsps-loop-pathway",
      name: "The DSPS trap (late nights to the physiologically delayed clock)",
      steps: [
        { label: "Habitually late nights begin", detail: "Illness, bedtime battles, weekend socialising — in India, coaching classes and night-before-exam binge studying" },
        { label: "The phase shifts physiologically", detail: "The clock itself moves later — sleeping earlier by choice becomes impossible" },
        { label: "The quartet crystallises", detail: "Severe sleep-onset difficulty + sound uninterrupted sleep + morning dysfunction + evening alertness" },
        { label: "The weekend re-delay", detail: "Very late lie-ins maintain the shifted phase — the loop's maintenance arm" },
        { label: "Chronotherapy breaks the loop", detail: "15 minutes a day advance for delays up to about three hours; round-the-clock delay in 3-hour steps for severe cases; morning bright light and firm agreed schedules hold the gain" },
      ],
      clinicalManifestation: "The 15-year-old who cannot fall asleep before 2 a.m., cannot wake for the 7 a.m. school bus, and sleeps to noon every weekend.",
      grade: "established",
    },
    {
      id: "osa-growth-pathway",
      name: "The OSA-to-growth channel (crowded throat to the small child)",
      steps: [
        { label: "Large tonsils and adenoids", detail: "The usual paediatric cause — not obesity as in adults; peak 2–6 years" },
        { label: "Partial obstruction with hypoventilation", detail: "Deep-sleep airway compromise fragmenting slow-wave sleep; blood-gas effects can exceed the clinical impression" },
        { label: "The nights speak", detail: "Snoring, breathing-difficulty noises, paradoxical chest-abdomen movement, neck-extension positions, sweating, enuresis, distressing obstructive awakenings" },
        { label: "The days mislead", detail: "Over-activity and disruptive behaviour rather than visible sleepiness — the masquerade again; mouth breathing, adenoidal facies, morning headache and bad mood" },
        { label: "The growth price", detail: "Fragmented slow-wave sleep impairs growth-hormone pulses — failure to thrive; adenotonsillectomy the usual treatment" },
      ],
      clinicalManifestation: "The small, thin, snoring child falling behind at school whose growth curve and behaviour both turn after the tonsils come out.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "infancy-rem", time: "Term to ~6–12 months", title: "The REM-dominant beginning", description: "About 17 hours of fragile, REM-heavy sleep (perhaps actively running brain maturation); state organisation completes and the body clock establishes by ~6 months, enabling day–night consolidation and night-feeding withdrawal — the window where good habits are cheaply built and bad ones form early.", phase: "onset" },
    { id: "early-childhood-sws", time: "Toddler and pre-school years", title: "The slow-wave-rich years", description: "Duration falls through 14/13/12 hours; pronounced slow-wave sleep hosts the partial-arousal disorders (confusional arousals, sleepwalking, sleep terrors) and the OSA peak at 2–6 years (tonsils and adenoids) — the age of bedtime battles, coming-into-the-bed nights and the alarmed parents of sleepwalkers.", phase: "peak" },
    { id: "prepubertal-efficiency", time: "Roughly 6–10 years", title: "The efficient years", description: "Especially sound night sleep and maximal daytime alertness — the alertness that can mask sleepiness entirely, which is why daytime over-activity, not dozing, is the sign that betrays the sleep disorder; night-time fears evolve with cognition from shadows to realistic health worries; 10 hours needed at age 10.", phase: "duration" },
    { id: "adolescent-delay", time: "Puberty onward", title: "The phase-delayed decade", description: "SWS decreases, the phase delays biologically, sleepiness rises while physiological need stops falling — and the school bell, the coaching timetable and the commute convert biology into sleep debt; DSPS crystallises, misread as defiance; insomnia rates stay consistently high.", phase: "peak" },
    { id: "treatment-window", time: "Weeks to months of treatment", title: "The changeable years", description: "Children's sleep is more changeable than adults': behavioural programmes work even in severe, long-standing cases and in learning disability and autism; chronotherapy resets the delayed clock; adenotonsillectomy turns both behaviour and growth — provided the diagnosis was made, which is the whole battle.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "20–30% of children from infancy to adolescence have sleep problems considered significant by them or their parents; the true prevalence of severe persistent disorders is unknown (methodological barriers). Rates run far higher in children with psychiatric disorders (high across the board), with learning disability or intellectual disability (particularly high and severe — yet amenable to treatment), in homeless children, and in children of mothers with affective illness (increased rate and severity). Obstructive sleep apnoea affects at least 2% of children, peak onset 2–6 years, with much higher rates in Down syndrome and other learning-disability syndromes. Narcolepsy runs at 4–9 per 10,000 in US estimates, onset by adolescence in a high proportion (at least one-third by 15 years), the first sign sometimes simply prolonged overnight sleep. Nocturnal enuresis: ~5% of 7-year-olds at least weekly.",
    indianPrevalence: "No comparable national paediatric sleep data exist — stated honestly rather than imported. The clinical realities are distinctive: co-sleeping with parents is normal and often adaptive (making Western 'independent settling' advice misfire); joint-family noise, shared rooms and late evening family routines shape the sleep environment; and the adolescent coaching-class/night-study culture manufactures exactly the sleep debt the physiology predicts, compounded by early school start times and long commutes. Paediatric sleep services (polysomnography for children) are scarce outside metros — the history-based approach this course teaches is the primary tool.",
    lifetimeRisk: "Sleep disturbance is part of most child psychiatric disorders, and the loop runs both directions: sleep loss itself produces mood, behaviour and cognitive deficits, and some 'ADHD' is actually OSA, periodic limb movements or a circadian disorder that improves when the sleep disorder is treated.",
    genderRatio: "Paediatric OSA shows an equal sex ratio — one of the five contrasts with the obese, middle-aged, male-predominant adult picture.",
    ageOfOnset: "Every disorder has its age of arrival: arousal disorders cluster in the slow-wave-rich early-childhood years; OSA peaks at 2–6 years (tonsils and adenoids); rhythmic movement disorder remits by 3–4 years; DSPS crystallises in adolescence; narcolepsy begins by adolescence in a high proportion, sometimes as prolonged overnight sleep alone.",
    indianNotes: "The 24-hour review and the two-week sleep diary cost nothing and travel anywhere — the instrument package for a country where paediatric polysomnography is a metro rarity; the family bed reframes 'independent settling' advice; the coaching timetable is the structural sleep-debt machine this course teaches you to counsel against.",
  },
  etiology: [
    { category: "biological", factor: "Developmental biology", details: "Progression of state organisation complete by ~6–12 months; body clock established by ~6 months; REM prominence in infancy (brain-maturation role; fragile sleep); pronounced slow-wave sleep in early childhood (predisposing to arousal disorders); pre-pubertal years of especially sound night sleep and maximal daytime alertness; adolescence: decreased SWS, physiologically delayed sleep phase, sleepiness rising while physiological need no longer falls." },
    { category: "biological", factor: "Physical disorders", details: "OSA — usually large tonsils and adenoids, NOT obesity as in adults; other respiratory problems; pain and chronic illness; medications." },
    { category: "psychological", factor: "Parental psychopathology and cognitions", details: "Maternal affective illness raises children's sleep problems in rate and severity (the connection debated); parental cognitions about sleep shaped by their own childhood — the beliefs the programme must work with, not against." },
    { category: "social", factor: "Parenting practices", details: "Prolonged night-feeding beyond ~6 months; failure to set bedtime limits; inconsistency; unhelpful bedtime associations (stimulating bedroom activities, threats, recriminations); failure to teach self-soothing — the maintainable machinery of childhood sleeplessness." },
    { category: "social", factor: "Psycho-social adversity and adolescent lifestyle", details: "Family disorganisation; homelessness; late-night social and recreational activity; nicotine, alcohol, caffeine and illicit drugs; stimulants to stay awake and sedatives to come down — the adolescent repertoire layered on the delayed phase." },
    { category: "psychological", factor: "The psychiatric-comorbidity loop", details: "Sleep disturbance is part of most child psychiatric disorders; sleep loss itself produces mood, behavioural and cognitive deficits; some 'ADHD' is actually OSA, periodic limb movements or a circadian disorder, improving when the sleep disorder is treated — the loop that makes sleep the psychiatric vital sign of childhood." },
  ],
  symptomClusters: [
    {
      category: "A. Sleeplessness (the age-graded presentation)",
      symptoms: [
        "Infants: problems largely preventable and bad habits form early — night-feeding prolonged beyond ~6 months, no self-soothing, no day–night differentiation; night waking is normal at all ages; the skill is returning to sleep without parental intervention",
        "Toddlers and pre-school children (~30% of this age): not going to bed at the required time and/or repeated night waking with demands, including coming into the parental bed — after excluding medical factors, the four behavioural causes: separation anxiety, unhelpful bedtime associations, inadequate limit-setting, failure of self-soothing",
        "School-age children: night-time fears evolving with cognition (shadows and noises → ghosts and monsters → realistic health fears — usually transient; phobic intensity needs attention and the content can reveal causes including abuse); sleep-onset insomnia from school worry; conditioned insomnia (the habit of lying awake agitated persisting after the original concern resolves); bedtime too early hitting the evening 'forbidden zone' of wakefulness; advanced sleep phase (early-morning waking that disturbs everyone); idiopathic (childhood-onset) insomnia — lifelong, diagnosed retrospectively",
        "Adolescents: consistently high insomnia rates — biological (phase delay, less SWS) plus psychological and social pressures; nicotine, alcohol, caffeine and illicit drugs; difficulty falling asleep is often delayed sleep phase syndrome, misread as adolescent defiance with recriminations replacing the chronotherapy actually needed",
      ],
    },
    {
      category: "B. Excessive daytime sleepiness (the masquerade engine)",
      symptoms: [
        "Under-recognised because parents, teachers and children do not see sleepiness as medical — read as laziness or disinterest, or misdiagnosed as depression or limited intelligence",
        "Lesser degrees in children produce irritability and over-activity rather than nodding off; high pre-pubertal alertness can mask sleepiness entirely",
        "Column 1 — insufficient sleep: late nights plus early school; irregular schedules; delayed sleep phase syndrome",
        "Column 2 — disturbed night sleep: caffeine/alcohol/nicotine and illicit drugs; medical and psychiatric disorders and their treatments; frequent parasomnias; periodic limb movements; OSA",
        "Column 3 — increased need for sleep: narcolepsy (may begin as simply prolonged overnight sleep; the classic tetrad slow to assemble; misinterpretation as laziness, depression or conversion disorder common); idiopathic CNS hypersomnia; depression; substance abuse; neurological disease; Kleine–Levin syndrome (episodic sleepiness with overeating, hypersexuality and out-of-character behaviour, often mistaken for psychiatric disorder); menstruation-related hypersomnia",
        "Distinguish sleepiness (the need to sleep) from fatigue/lethargy (anaemia, endocrine disease — usually with other signs), and beware simulated sleepiness to escape situations",
      ],
    },
    {
      category: "C. Parasomnias (the alarming nights)",
      symptoms: [
        "More common in childhood than adult life; different types can co-exist (arousal disorders with OSA); most cause parental alarm rather than child pathology",
        "Sleep-related rhythmic movement disorders: headbanging, almost always remitting spontaneously by 3–4 years — pad the cot, do not panic; unlike daytime headbanging in severe neurodevelopmental disorder",
        "Hypnagogic and hypnopompic hallucinations: common, can frighten",
        "Confusional arousals, sleepwalking and sleep terrors: partial-arousal disorders from slow-wave sleep — the child remains asleep and unaware; extreme agitation looks like suffering; waking and comforting attempts INCREASE distress and should be discouraged; violence can occur and protective measures are needed",
        "True nightmares: frightening dreams — frequent nightmares with intense bedtime fears suggest an anxiety disorder and the content may reveal the cause (including abuse)",
        "Nocturnal enuresis: ~5% of 7-year-olds at least weekly; usually delayed maturation — loss of previously acquired control flags physical or psychological causes; behavioural treatment very effective",
        "Secondary parasomnias: nocturnal epileptic seizures (especially benign rolandic epilepsy and nocturnal frontal-lobe seizures — both sleep-related and easily misread); asthma attacks; OSA-related arousals; gastro-oesophageal reflux; nocturnal panic; PTSD disturbance; dissociative states; simulated parasomnias (PSG shows wakefulness)",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The screening gate",
      code: "Three questions, every child",
      criteria: [
        "Difficulty getting to sleep or staying asleep?",
        "Excessive daytime sleepiness?",
        "Episodes of abnormal behaviour or experiences at night?",
        "Any positive → the full sleep history; the gate costs nothing and belongs at every paediatric encounter — in India, at every OPD visit where a snoring, over-active child might otherwise leave with a behaviour label.",
      ],
      duration: "Screening is a habit, not an event — the three questions at every contact.",
      indianNote: "Nobody links hyperactivity to snoring until asked; the three-question habit is the cheapest diagnostic instrument in Indian paediatrics.",
    },
    {
      system: "The sleep history",
      code: "The 24-hour review",
      criteria: [
        "Evening: meal, activities, bedtime preparation and by whom, bedtime reluctance, fears and rituals, wanting to sleep with someone, time to fall asleep.",
        "Overnight: wakings (frequency, causes, return-to-sleep ability); episodic events (exact nature, timing, frequency); snoring, restlessness, enuresis; parents' reactions.",
        "Waking: spontaneous or needs waking, final wake time, total duration, longest uninterrupted block, morning mood and refreshment.",
        "Daytime: sleepiness, naps, lethargy, mood, over-activity, concentration and performance, unusual episodes; plus sleep environment and arrangements, pattern development, family history of sleep disorder.",
        "The sleep diary for 2+ weeks (corrects the fraught parent's distorted retrospective account); a sleep questionnaire beforehand (CSHQ lineage); developmental history, physical health and examination, behaviour and emotional state, family circumstances.",
      ],
      duration: "Two weeks of diary before the formulation wherever the picture is unclear.",
      indianNote: "Investigations: polysomnography as in adults when indicated (scarce for children outside metros in India); MSLT norms for school-age children — ~16–18 minutes to fall asleep is normal, less suggests significant sleepiness, sleep onset in ≥3 naps is a flag, but a normal MSLT in late childhood does NOT exclude a sleepiness disorder (naturally enhanced wakefulness); actigraphy for all ages (unobtrusive sleep–wake patterning); toxic screening where relevant.",
    },
    {
      system: "Delayed sleep phase syndrome",
      code: "The diagnostic quartet",
      criteria: [
        "Persistently severe difficulty falling asleep.",
        "Uninterrupted sound sleep once asleep.",
        "Great difficulty waking for school, with morning sleepiness and under-functioning.",
        "Evening alertness — the pattern giving way to it; maintained by very late weekend lie-ins.",
        "It begins with habitually late nights (illness, bedtime battles, weekend socialising — or the coaching timetable) until the phase is physiologically delayed and sleeping earlier by choice becomes impossible.",
      ],
      duration: "Weeks-to-years of entrenched shift; the weekend lie-in is the maintenance arm.",
      indianNote: "Watch for motivated sleep phase delay (the delay maintained to avoid school) and comorbid depression — both defeat treatment; check for each before prescribing the reset.",
    },
    {
      system: "Paediatric OSA",
      code: "The contrast recognition",
      criteria: [
        "Night signs: snoring (but only ~1 in 5 habitual snorers has OSA); breathing-difficulty noises; paradoxical chest-abdomen movement; unusual sleep positions with neck extension; restless sleep; sweating; nocturnal enuresis; distressing obstructive awakenings.",
        "Day signs: mouth breathing; adenoidal facies; morning headache and bad mood; behaviour problems — over-activity and disruptive behaviour rather than visible sleepiness.",
        "Assess clinically; polysomnography with respiratory measures for severity — the blood-gas effects can exceed the clinical impression.",
        "The five contrasts with adult OSA: children are usually not obese; the usual cause is large tonsils and adenoids; equal sex ratio; partial obstruction with hypoventilation rather than prolonged apnoeas; the daytime picture is over-activity, not visible sleepiness.",
      ],
      duration: "Peak onset 2–6 years; untreated, the growth and psychological complications accumulate.",
      indianNote: "The snoring child with daytime over-activity should reach an ENT assessment — in India the operation is available and effective, but the behavioural referral is missed because nobody links hyperactivity to snoring.",
    },
  ],
  severityScales: [
    {
      name: "CSHQ",
      fullName: "Children's Sleep Habits Questionnaire (Owens et al.)",
      measures: "Parent-reported sleep habits and disturbances across the domains of this course — a screening and tracking instrument completed beforehand.",
      ranges: [],
      indianNote: "Named here as an instrument of the evidence lineage; items are never reproduced — the two-week diary is the free, language-neutral Indian workhorse.",
    },
    {
      name: "MSLT (school-age norms)",
      fullName: "Mean sleep latency, multiple sleep latency testing",
      measures: "Objective daytime sleepiness in school-age children — the latency the nap opportunities return.",
      ranges: [
        { min: 0, max: 15, severity: "Below the school-age norm — significant sleepiness", action: "Hunt the cause through the three columns (insufficient sleep, disturbed night sleep, increased need); sleep onset in ≥3 naps compounds the flag" },
        { min: 16, max: 18, severity: "Normal school-age latency", action: "Does NOT exclude a sleepiness disorder in late childhood — naturally enhanced wakefulness can mask it; interpret alongside the history and actigraphy" },
      ],
      indianNote: "Paediatric MSLT is a metro-centre test in India — the history remains the standard of care wherever the lab is not.",
    },
    {
      name: "The sleep diary",
      fullName: "Two-week parent- (or adolescent-) kept sleep–wake record",
      measures: "The real pattern against the reported one — timing, duration, longest uninterrupted block, weekend drift.",
      ranges: [],
      indianNote: "Corrects the fraught parent's distorted retrospective account; costs nothing; brings the family into the treatment before it starts.",
    },
  ],
  differentialDiagnosis: [
    { condition: "ADHD (the label the masquerade earns)", distinguishingFeatures: "True ADHD is a neurodevelopmental brake-and-engine disorder; the masquerade is the sleepy brain's over-activity — irritability, restlessness, poor concentration, impulsiveness.", keyDifferentiator: "The three screening questions, snoring, restless sleep, morning headaches and the growth curve — and the decisive test: some 'ADHD' improves completely when the sleep disorder (OSA, periodic limb movements, circadian disorder) is treated." },
    { condition: "Nocturnal epilepsy (benign rolandic epilepsy; nocturnal frontal-lobe seizures)", distinguishingFeatures: "Both sleep-related and easily misread as parasomnias — the secondary-parasomnia family.", keyDifferentiator: "The detailed episode narrative (onset-to-resolution sequence, timing, circumstances); home video is a superb tool; polysomnography when clinical evaluation is inconclusive or another sleep disorder co-exists." },
    { condition: "Narcolepsy", distinguishingFeatures: "REM-physiology disorder that may begin as simply prolonged overnight sleep; the classic tetrad slow to assemble; misinterpretation as laziness, depression or conversion disorder common.", keyDifferentiator: "Low CSF hypocretin/orexin is diagnostic; onset by adolescence in a high proportion (at least one-third by 15 years) — suspect it in the oversleeping teenager before calling it defiance." },
    { condition: "Kleine–Levin syndrome", distinguishingFeatures: "Episodic sleepiness with overeating, hypersexuality and out-of-character behaviour — often mistaken for a psychiatric disorder.", keyDifferentiator: "The episodic course and the associated cluster; supportive differentiation from psychiatric disorder is itself the clinical task." },
    { condition: "Depression (adolescent)", distinguishingFeatures: "Consistently high insomnia rates in adolescence; morning dysfunction and under-functioning overlapping the DSPS picture; hypersomnia a depressive presentation.", keyDifferentiator: "The mood screen and the sleep-onset question: the depressed adolescent can sleep but wakes early (or sleeps endlessly); the DSPS adolescent sleeps perfectly once asleep, at the wrong clock time — and the two travel together often enough to check for both." },
    { condition: "Fatigue/lethargy (non-sleep)", distinguishingFeatures: "Anaemia, endocrine disease — usually with other signs; the tiredness of the body rather than the sleepiness of the brain.", keyDifferentiator: "Sleepiness is the need to sleep (the nap would be taken); fatigue would not be relieved by it — and beware simulated sleepiness to escape situations." },
  ],
  management: [
    { category: "psychotherapy", name: "Behavioural first, medication rarely", description: "The mainstay is altering parenting practices in ways each family can accept: sleep hygiene principles, explanation and reassurance for child and parents (sometimes effective alone). Behavioural treatment is very effective even in severe, long-standing cases and in children with learning disability or autism — graded change and desensitisation preferred over 'controlled crying' (quick but unacceptable to many parents).", whenToUse: "First line for toddler and pre-school sleeplessness (the four behavioural causes: separation anxiety, unhelpful associations, inadequate limit-setting, failure of self-soothing) and much school-age sleeplessness.", indianContext: "The programme costs nothing and is parent-deliverable — the core treatments (routines, diaries, graded withdrawal, scheduled waking) are the anywhere-in-India tier." },
    { category: "lifestyle", name: "Infant prevention and safety", description: "The prevention principles: a consistent 24-hour routine with a bedtime routine of cues; night-feeding not prolonged beyond ~6 months; teaching the baby to fall asleep alone (self-soothing — the skill is returning to sleep without parental intervention); clear day–night differentiation; a sleep-conducive environment. Safety counselling belongs here: supine sleep, firm mattress, face uncovered, smoke-free room, no overheating, and no co-sleeping after parental alcohol or sedatives.", whenToUse: "Every infant contact — prevention is cheap and habits form early.", indianContext: "The family bed is normal and adaptive — the routine, timing and limits are the targets, not eviction; the alcohol-or-sedatives co-sleeping caution is the genuine safety line to raise." },
    { category: "lifestyle", name: "DSPS chronotherapy (the phase reset)", description: "Gradual advance — 15 minutes a day — for delays up to about three hours; for severe delays, progressive delay in 3-hour steps 'round the clock' (the negotiated reset, best timed to a vacation); maintenance with early-morning bright light and firm agreements on schedules, with parental involvement throughout. Melatonin's role remains unclear (uncertainties and potential reproductive-physiology hazards) — the behavioural architecture is what is prescribed. Watch motivated sleep phase delay (delay maintained to avoid school) and comorbid depression: both defeat treatment.", whenToUse: "The adolescent with the quartet confirmed on the 24-hour pattern and diary.", indianContext: "The Indian package: fixed wake time, daytime study planning, the caffeine audit (the chai-and-cola timeline — banned after 4 p.m. during the reset), weekend lie-ins capped at one hour, morning outdoor light (the morning walk), and the school informed of the treatment phase — framed as performance engineering, not discipline." },
    { category: "surgical", name: "Adenotonsillectomy for childhood OSA", description: "Assess clinically; polysomnography with respiratory measures for severity (blood-gas effects can exceed the clinical impression); treat — usually adenotonsillectomy (CPAP less often in children) — to prevent the physical (growth, failure to thrive) and psychological complications.", whenToUse: "The snoring child with night signs (restless sleep, sweating, enuresis, paradoxical movement) and day signs (over-activity, mouth breathing, adenoidal facies, morning headache).", indianContext: "Available and effective in India; covered under most schemes including PM-JAY where indicated — the missed link is the behavioural referral, because nobody connects hyperactivity to snoring until the three questions are asked." },
    { category: "lifestyle", name: "Parasomnia management (reassure, protect, do not wake)", description: "Reassurance plus safety measures — most primary childhood parasomnias cause parental alarm rather than child pathology and remit within a few years. Avoid waking the child in arousal disorders (waking and comforting attempts increase distress); guide back, protect from hazards. Treat the underlying disorder in secondary parasomnias (the epilepsy, the asthma, the reflux, the OSA-related arousals); suspect psychological significance when a parasomnia is very frequent, unusually late in onset, persistent, or follows trauma; medication only for a minority.", whenToUse: "Every confusional arousal, sleepwalking and sleep-terror presentation — plus the rhythmic-movement infant (pad the cot, do not panic).", indianContext: "Home video is the Indian clinician's friend: the family's phone clip of the episode often settles the nocturnal-epilepsy question that no metro-scarce paediatric PSG would otherwise reach." },
    { category: "psychotherapy", name: "Treat the parents to treat the child", description: "Sometimes the programme cannot start until the parent is treated (maternal depression) or the family problems are addressed; recognise hidden resistances — a child in the parental bed serving a marital purpose, or fear of losing a disability allowance if the sleep problem improves.", whenToUse: "Whenever the well-conducted programme fails — the resistance is information, not non-compliance.", indianContext: "The joint family is also the delivery channel: the grandparents who run the bedtime, the mother whose mood sets the household's night — the programme is designed with them, never against them." },
    { category: "pharmacotherapy", name: "Narcolepsy and Kleine–Levin: the specialist tier", description: "Narcolepsy: medication plus support, with advice on education, career and psychosocial matters (the medication routes have no KYP lessons — recorded in contentGaps); Kleine–Levin: supportive differentiation from psychiatric disorder — the episodic cluster explained to the family as what it is.", whenToUse: "Confirmed or strongly suspected hypersomnia syndromes — the referral, not the OPD prescription pad.", indianContext: "The route runs through the metro sleep centre and paediatric neurology — the Indian task is recognising the prolonged-sleeping teenager before the 'lazy' label hardens." },
  ],
  safety: {
    redFlags: [
      "The infant sleep environment — SIDS prevention belongs in every infant sleep conversation: supine sleep, firm mattress, face uncovered, smoke-free room, no overheating, and never co-sleeping after parental alcohol or sedatives",
      "The snoring, small, struggling child — habitual snoring with restless sleep, night sweating, morning headaches, enuresis or a faltering growth curve: suspected paediatric OSA needing ENT assessment; the blood-gas effects can exceed the clinical impression and the growth and psychological complications are the preventable price",
      "Episodes that might be epilepsy — nocturnal events with stereotyped onset, tonic or jerking features, or post-ictal confusion: benign rolandic epilepsy and nocturnal frontal-lobe seizures masquerade as parasomnias; polysomnography and neurology, not reassurance alone",
      "The nightmare content that reveals danger — frequent nightmares with intense bedtime fears suggest an anxiety disorder, and the content may reveal the cause including trauma or abuse: the child-protection route, gently and without delay",
      "Enuresis that loses previously acquired control — a flag for physical or psychological causes, not 'just bedwetting'",
      "The adolescent stimulant–sedative cycle — stimulants to stay awake and sedatives to come down: the substance tier riding the sleep debt, ask for it explicitly",
    ],
    urgentGuidance:
      "The order of operations: (1) infant safe-sleep counselling at every contact — the SIDS bundle is a conversation, not a leaflet; (2) the snoring child with day signs or growth faltering reaches ENT — adenotonsillectomy is available and effective in India, and covered under most schemes including PM-JAY where indicated; (3) suspected nocturnal epilepsy gets polysomnography/neurology, with home video as the interim evidence; (4) abuse-suggesting nightmare content or fear disclosures go down the child-protection route; (5) the sleepwalking child is protected — hazards removed, guidance back to bed, and the do-not-wake rule taught to every household member; (6) the narcolepsy-suspected adolescent is referred before the 'lazy' or 'defiant' label hardens into a school failure.",
  },
  drugLinks: [],
  contentGaps: [
    "Melatonin — the chronobiotic most often asked about for paediatric sleep — has no KYP drug lesson; the source's own position (role remains unclear, with uncertainties and potential reproductive-physiology hazards) is taught here, and the behavioural chronotherapy is the prescribed route; the drug route is never invented.",
    "The wake-promoting tier for paediatric narcolepsy daytime sleepiness has no KYP drug lessons — the referral-and-support architecture is taught here, the pharmacology left to the specialist centre where it lives.",
    "The parasomnia medication minority (the small proportion of severe, persistent arousal disorders and the epilepsy-tier treatments) has no KYP drug lessons — reassurance, safety and treat-the-cause are the taught routes here.",
    "The stimulant tier for the ADHD label is deliberately not linked: this course's whole thesis is that some 'ADHD' is a sleep disorder — the screening questions come before the stimulant; no paediatric stimulant lesson is implied or invented.",
  ],
  patientGuide: {
    whatIsIt:
      "Sleep problems in children are common — about one in four has them — and they are not a phase to be waited out. Three things make children different from adults: the parents define whether there is a problem (and often hold the causes and the cure in their own routines); the same disorder looks different at each age; and a sleepy child usually does not look sleepy — the tiredness comes out as over-activity, irritability, tantrums and poor concentration, which is why so many children get called naughty or hyperactive when what they need is sleep. The problems sort into three families: trouble falling or staying asleep, too much sleepiness in the day (which hides behind bad behaviour), and the frightening night events — sleepwalking, sleep terrors, nightmares and bedwetting.",
    whatCausesIt:
      "A mixture of development and circumstance. Babies' body clocks take about six months to establish, and habits form early — feeding at night for too long, or never learning to settle alone. Toddlers fight bedtime through separation anxiety, unhelpful associations, missing limits or never learning to self-soothing. School-age children lie awake from fears and worries. Teenagers have a real, biological shift: puberty moves their body clock later, while school starts early — a built-in sleep-debt machine that coaching classes and late-night study make worse. Snoring matters at every age: in children the usual cause is big tonsils and adenoids (not weight, as in adults), and severe cases can slow growth — growth hormone is released during deep sleep.",
    symptoms:
      "For sleeplessness: bedtime battles, repeated night waking with demands, coming into your bed, lying awake for hours. For sleepiness: over-activity, irritability, poor concentration, aggression — the mislabelled child; with snoring children also look for restless sleep, night sweats, bedwetting, mouth breathing, morning headache and a bad mood on waking. For the night events: the sleepwalking or terrified child who is actually ASLEEP and unaware (waking him makes it worse — guide him back and protect him from hazards), frightening dreams remembered afterwards (nightmares), and bedwetting in about 5% of seven-year-olds. Warning signs needing prompt assessment: a snoring child who is small or falling behind, night episodes that look like fits, loss of previously achieved bladder control, or nightmare content that suggests something is frightening the child at home.",
    treatment:
      "The treatment is mostly behavioural, and it works through you — the parent. A consistent 24-hour routine with a calming bedtime sequence; night-feeding not continued beyond about six months; teaching the child to fall asleep alone (so she can put herself back to sleep after the normal night wakings); firm, kind limits. For toddlers this behavioural programme works even in severe, long-standing cases — including children with developmental conditions. For the teenager whose clock is set late, the treatment is a scheduled reset: moving bedtime earlier by about 15 minutes a day, or a planned round-the-clock shift during a vacation, with morning light and a fixed wake time to hold it — not punishment. For the snoring child with big tonsils, the operation is the treatment. For night events: reassurance, safety, and not waking the sleepwalker. Melatonin is not the routine answer — its role in children remains unclear.",
    selfHelp: [
      "Keep the two-week sleep diary before and during any programme — it shows the real pattern and tracks the change.",
      "Run the bedtime routine in the same order every night — bath, story, dim light, bed — the sequence itself becomes the sleep cue.",
      "Fix the wake time first (weekends included, lie-ins capped at about an hour) — the anchored morning drags the night into place.",
      "Do the caffeine audit: the evening chai, cola and coffee timeline written out honestly and cut after mid-afternoon.",
      "Make the sleepwalker's room safe — clear floors, locked windows, gates on stairs — and guide, never wake.",
      "For bedwetting, ask for the behavioural programme (it is cheap and effective, and parent-deliverable) before anything expensive or shaming.",
      "Protect your own sleep and mood: a mother's depression is a risk factor for the child's sleep problem — the programme sometimes has to start with the parent.",
    ],
    whenToSeekHelp: [
      "A snoring child with restless sleep, morning headaches, bedwetting, or who is small or falling behind at school — paediatrician and ENT assessment",
      "Night episodes with stiffening, jerking or confusion afterwards — possible epilepsy, needs assessment",
      "Bedwetting that returns after a child was previously dry — a flag for physical or psychological causes",
      "Nightmares that are frequent and intense, or whose content frightens you — the content can matter",
      "A teenager who cannot fall asleep before the small hours and cannot wake for school for months on end — the clock needs resetting, not punishing",
      "Any infant sleep plan where the family bed involves a parent who has drunk alcohol or taken sedatives — that night, the baby sleeps apart",
    ],
    indianResources: [
      "The district hospital paediatrician and ENT — the snoring-child route; adenotonsillectomy is covered under most schemes including PM-JAY where indicated",
      "Tele-MANAS 14416 (24×7, free) — for the family's distress, the exhausted parent and the adolescent sleep-debt counselling",
      "The behavioural sleep programme — ask your paediatrician for the routine-and-diary package; it costs nothing and the family delivers it",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific paediatric sleep pathway exists; practice follows the Stores-chapter synthesis and its cited evidence line (the behavioural-treatment efficacy reviews, the misdiagnosis catalogue) — the history-based approach is the primary tool, with the three screening questions as the OPD gate and PM-JAY coverage where adenotonsillectomy is indicated.",
    systemContext: "The child arrives through the paediatric OPD, the school referral ('ADHD-like behaviour') or the ENT clinic — paediatric sleep services (polysomnography for children) are scarce outside metros, so the clinical history is the standard of care: the 24-hour review, the two-week diary, the home video of night episodes. The behavioural referral for the snoring child is the link most often missed, because nobody connects hyperactivity to snoring until the three questions are asked.",
    programmeContext: "The core treatments (routines, diaries, graded withdrawal, scheduled waking) cost nothing and ride on no programme; adenotonsillectomy is available and effective, covered under most schemes including PM-JAY where indicated; Tele-MANAS 14416 carries the family-distress and adolescent counselling load.",
    costConsiderations: "The effective programme is nearly free (approx 2026): the behavioural package, the diary and the chronotherapy are time-and-routines, not rupees; actigraphy and paediatric polysomnography exist only in major centres — the history-based pathway is therefore not a compromise but the standard; the expensive failures are the shaming enuresis 'treatments' and the wrong-label stimulant course that the three questions would have prevented.",
    culturalConsiderations: "Co-sleeping is culture, not pathology: the Indian family bed is normal and often adaptive, and the Western 'independent settling' advice misfires against it — the clinical targets are timing, routine consistency and limits, not eviction from the parental bed (only co-sleeping after parental alcohol or sedatives remains a genuine safety caution). The adolescent sleep-debt factory is structural: coaching classes, night-before-exam binge studying, late dinner in joint families, early school buses and long commutes — counselled as performance engineering, not discipline. Bedtime under family noise is negotiated as a household 'quiet hour', not a solitary bedroom the family cannot provide; and the enuresis faith-healing detour is headed off by the cheap, effective, parent-deliverable behavioural programme with school and family education removing blame.",
    patientCounselling: [
      "The one-line philosophy: 'Children are not small adults in sleep — their tiredness comes out as hyperactivity, their problems are common, and they are more treatable than anyone has told you.'",
      "The co-sleeping script: 'The family bed is normal and fine — we are fixing the timing and the routine, not the sleeping arrangement; only co-sleeping after alcohol or sedatives is unsafe.'",
      "The snoring script: 'A child who snores like his grandfather and behaves like this may simply not be sleeping — the tonsils, not the naughtiness, are worth examining first.'",
      "The teenager script: 'Puberty moves the body clock later — this is physiology, not attitude; the fix is a scheduled reset with morning light and a fixed wake time, not punishment.'",
      "The sleepwalker script: 'He is asleep and unaware — waking him makes it worse; guide him back, keep him safe, and the episodes will fade.'",
      "The coaching-class script: 'The fixed wake time and the capped weekend lie-in are performance engineering — the marks you are buying with night hours, the sleep debt is spending.'",
    ],
  },
  decisionPath: {
    title: "The child whose sleep is the problem (or whose behaviour is a sleep problem)",
    nodes: [
      {
        id: "start",
        question: "A child from infancy to adolescence — with a sleep complaint, or a behaviour no one has yet called sleep. First: the complaint family, plus the one question that must never wait.",
        branches: [
          { label: "Sleeplessness, bedtime battles, night waking", next: "sleeplessness-age-gate" },
          { label: "Daytime sleepiness, over-activity, school under-functioning", next: "sleepiness-path" },
          { label: "Episodic night-time events", next: "events-path" },
          { label: "The child snores (whatever else is on the table)", next: "osa-path" },
        ],
      },
      {
        id: "osa-path",
        question: "The snoring child — the hyperactivity masquerade's commonest engine.",
        recommendation: "The three screening questions, then the full night-and-day picture: snoring, restless sleep, sweating, enuresis, paradoxical chest-abdomen movement, neck-extension positions; mouth breathing, adenoidal facies, morning headache, over-activity. Usually not obese, equal sex ratio, large tonsils and adenoids — paediatric OSA. ENT assessment for adenotonsillectomy (covered under most schemes including PM-JAY where indicated), polysomnography with respiratory measures where available to grade severity (blood-gas effects can exceed the clinical impression); the growth curve followed; the 'ADHD' label suspended until the sleep is treated.",
      },
      {
        id: "sleeplessness-age-gate",
        question: "The sleepless child: the age decides the architecture.",
        branches: [
          { label: "Infant", next: "infant-path" },
          { label: "Toddler / pre-school", next: "toddler-path" },
          { label: "School-age", next: "schoolage-path" },
          { label: "Adolescent", next: "dsp-gate" },
        ],
      },
      {
        id: "infant-path",
        question: "Infant sleeplessness: prevention is the treatment.",
        recommendation: "The five principles — consistent 24-hour routine with bedtime cues; night-feeding not prolonged beyond ~6 months; teaching self-soothing (night waking is normal; the skill is returning to sleep alone); day–night differentiation; sleep-conducive environment — plus the safety bundle: supine, firm mattress, face uncovered, smoke-free room, no overheating, no co-sleeping after parental alcohol or sedatives. Check the mother's mood before assigning the programme — treat the parents to treat the child.",
      },
      {
        id: "toddler-path",
        question: "Toddler and pre-school sleeplessness (~30% of this age).",
        recommendation: "Exclude medical factors, then the four behavioural causes: separation anxiety, unhelpful bedtime associations, inadequate limit-setting, failure of self-soothing. The behavioural programme — graded change and desensitisation preferred over 'controlled crying' — very effective even in severe, long-standing cases, and in learning disability and autism. In India: the routine and the timing are the targets, not the family bed; the hidden resistances (a bed serving a marital purpose) gently surfaced.",
      },
      {
        id: "schoolage-path",
        question: "School-age sleeplessness: the fears and the clock.",
        recommendation: "The fear content evolved with cognition — shadows to realistic health fears; usually transient, but phobic intensity needs attention and the content can reveal causes including abuse (nightmares plus intense bedtime fears suggest an anxiety disorder or PTSD). Conditioned insomnia treated as habit; the bedtime audited against the evening 'forbidden zone' of wakefulness; advanced phase (early waking disturbing everyone) and idiopathic childhood-onset insomnia kept in the differential.",
      },
      {
        id: "dsp-gate",
        question: "The adolescent who cannot sleep — the DSPS quartet: severe sleep-onset difficulty, sound uninterrupted sleep once asleep, great difficulty waking for school, evening alertness, maintained by very late weekend lie-ins?",
        branches: [
          { label: "Quartet present on the 24-hour pattern and diary", next: "chronotherapy-path" },
          { label: "The delay serves a purpose (school avoidance) — or low mood dominates", next: "complication-gate" },
        ],
      },
      {
        id: "chronotherapy-path",
        question: "The phase reset.",
        recommendation: "Gradual advance — 15 minutes a day — for delays up to about three hours; severe delays: progressive delay in 3-hour steps round the clock, negotiated for a vacation; maintenance with early-morning bright light (the morning walk or outdoor study), fixed wake time, weekend lie-ins capped at one hour, caffeine after 4 p.m. banned, the school informed of the treatment phase. Melatonin's role remains unclear — the behavioural chronotherapy is the prescription.",
      },
      {
        id: "complication-gate",
        question: "Motivated delay, comorbid depression — the two things that defeat treatment.",
        recommendation: "Motivated sleep phase delay (the delay maintained to avoid school) — the avoidance agenda addressed as its own problem, or the reset will not hold; comorbid depression screened and treated alongside — the two travel together, and both must be named before the family blames the programme.",
      },
      {
        id: "sleepiness-path",
        question: "Excessive daytime sleepiness — remember it presents as over-activity in children, and pre-pubertal alertness can mask it entirely.",
        recommendation: "The three-column differential: insufficient sleep (late nights plus early school, irregular schedules, DSPS — the Indian coaching-class and commute machine); disturbed night sleep (caffeine, alcohol, nicotine and illicit drugs; medical and psychiatric disorders and their treatments; frequent parasomnias; periodic limb movements; OSA); increased need (narcolepsy — may begin as prolonged overnight sleep, low CSF hypocretin diagnostic, misread as laziness, depression or conversion; idiopathic CNS hypersomnia; depression; Kleine–Levin syndrome; menstruation-related hypersomnia). MSLT: 16–18 minutes normal in school-age children, less suggests significant sleepiness, sleep onset in ≥3 naps a flag — a normal late-childhood result does not exclude; actigraphy where available; sleepiness distinguished from fatigue (anaemia, endocrine) and from simulated sleepiness.",
      },
      {
        id: "events-path",
        question: "The episodic nights — the narrative decides: onset-to-resolution sequence, timing, circumstances; home video is a superb tool; polysomnography only when clinical evaluation is inconclusive or another sleep disorder co-exists.",
        recommendation: "Arousal-type (confusional arousals, sleepwalking, sleep terrors): partial-arousal disorders from slow-wave sleep — the child stays asleep and unaware; waking and comforting attempts INCREASE distress and should be discouraged; protective measures; reassurance (most remit within a few years; suspect psychological significance when very frequent, unusually late in onset, persistent, or following trauma). Nightmares: REM dreams with later recall — frequent nightmares plus intense bedtime fears suggest anxiety, and the content may reveal the cause including abuse. Epilepsy-type: benign rolandic epilepsy and nocturnal frontal-lobe seizures, both sleep-related and easily misread — polysomnography and neurology. Rhythmic movement disorder: headbanging remitting by 3–4 years — pad the cot, do not panic. Enuresis: ~5% of 7-year-olds weekly; behavioural treatment very effective; loss of previous control flags physical or psychological causes.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Treating the hyperactivity before asking about sleep",
      why: "The sleepy child expresses sleepiness as over-activity — the label 'difficult' or 'ADHD-like' arrives, the stimulant follows, and the OSA, periodic limb movements or circadian disorder underneath goes untreated.",
      correction: "The three screening questions at every paediatric encounter — some 'ADHD' improves completely when the sleep disorder is treated; the sleep history before the stimulant, always.",
    },
    {
      mistake: "Waking the child during a sleep terror or sleepwalking episode",
      why: "The child is asleep and unaware — partial arousal from slow-wave sleep; extreme agitation looks like suffering, but waking and comforting attempts INCREASE distress and can prolong the episode; violence can even be precipitated.",
      correction: "The arousal-disorder rule: do not wake — guide the child back to bed, protect from hazards, and expect the episodes to fade with age; reassure the family with the rule.",
    },
    {
      mistake: "Reading adolescent DSPS as defiance — and punishing it",
      why: "The phase is physiologically delayed; sleeping earlier by choice has become impossible — the father's punishments for 'attitude' treat a clock problem as a character problem, and the recriminations replace the chronotherapy actually needed.",
      correction: "The quartet recognised (late onset, sound sleep, morning dysfunction, evening alertness, weekend maintenance), then the scheduled reset: 15 minutes a day, or round-the-clock in 3-hour steps in a vacation, with morning light and a fixed wake time — and the depression that travels with it checked.",
    },
    {
      mistake: "Prescribing Western 'independent settling' advice to an Indian family bed",
      why: "Co-sleeping is normal and often adaptive in India — eviction advice misfires, fails, and discredits the whole programme in the family's eyes.",
      correction: "Reframe the targets: timing, routine consistency and limits — wherever the child sleeps; the only co-sleeping line that matters is the safety one (no parental alcohol or sedatives).",
    },
    {
      mistake: "Accepting that sleep problems in children with learning disability are inevitable and untreatable",
      why: "The parents believe it, the services imply it — and the sleep disturbance of learning disability is particularly high and severe yet amenable to treatment; the belief withholds an effective intervention from exactly the children whose days are hardest.",
      correction: "State both facts together: common and severe in this group AND treatable — the behavioural programme delivered with the same graded methods, with the family supported rather than blamed.",
    },
    {
      mistake: "Taking the fraught parent's retrospective account without the diary",
      why: "The exhausted parent's recall is distorted — nights blur, timings drift, and the programme gets built on a pattern that never existed.",
      correction: "The two-week sleep diary before the formulation — it costs nothing, corrects the retrospective account, and starts the family observing like clinicians before the first instruction is given.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The headline pair: 20–30% of children from infancy to adolescence have significant sleep problems; and children are not miniature adults — presentation, cause and treatment all differ.",
        "The hyperactivity masquerade: sleepiness reduces activity in adults but increases it in young children — irritability, tantrums, restlessness, poor concentration, impulsiveness, aggression.",
        "The four sleep-physiology anchors: REM-dominant infancy (fragile sleep), slow-wave-rich early childhood (the arousal disorders' nest), pre-pubertal efficiency, adolescent phase delay.",
        "The arousal-disorder rule: confusional arousals, sleepwalking and sleep terrors arise from slow-wave sleep; the child stays asleep and unaware — do not wake.",
        "The duration table one-liner: 17/14/13/12/10/9+ hours from term to adolescence.",
      ],
      practical: [
        "Take the 24-hour sleep history — evening, overnight, waking, daytime — and demonstrate the three screening questions in a paediatric OPD.",
        "Instruct the family in the two-week sleep diary, and show how it corrects the fraught parent's distorted retrospective account.",
      ],
      longAnswer: [
        "A five-year-old referred for 'ADHD-like behaviour' with nightly snoring: assessment and management (the hyperactivity masquerade, paediatric OSA, the ENT route).",
        "Sleep disorders in children and adolescents: prevalence, age-specific physiology, presentation, and the parental dimension of management.",
        "Delayed sleep phase syndrome in adolescence: clinical features, differential from defiance and depression, and the chronotherapy programme.",
      ],
    },
    neetPg: {
      highYield: [
        "THE PREVALENCE: 20–30% of children from infancy to adolescence; far higher in psychiatric disorder, learning disability, homelessness and maternal affective illness.",
        "THE MASQUERADE (the single most examinable idea): sleepiness → over-activity in children; OSA, periodic limb movements and circadian disorder → 'ADHD' that improves with sleep treatment.",
        "DURATION TABLE: 17 hours at term, 14 at 1 year, 13 at 2, 12 at 4, 10 at 10, 9+ in adolescence.",
        "DSPS QUARTET: severe difficulty initiating sleep + sound uninterrupted sleep + great difficulty morning waking + evening alertness; treatment 15 minutes/day advance (delays up to about three hours) or round-the-clock 3-hour-step delay for severe; melatonin's role remains unclear.",
        "PAEDIATRIC OSA FIVE CONTRASTS: usually not obese; tonsils and adenoids the cause; equal sex ratio; partial obstruction with hypoventilation (not prolonged apnoeas); over-active daytime picture — adenotonsillectomy the usual treatment; at least 2% of children, peak 2–6 years; only ~1 in 5 habitual snorers has OSA.",
        "AROUSAL DISORDERS FROM SWS: why sleepwalking and terrors cluster in early childhood; the child stays asleep; do not wake.",
        "NARCOLEPSY IN CHILDHOOD: 4–9 per 10,000 (US estimates); begins as prolonged overnight sleep; low CSF hypocretin diagnostic; onset by 15 years in at least one-third; misdiagnosed as laziness, depression or conversion disorder.",
        "THE GROWTH WIRE: growth hormone tied to slow-wave sleep — severe early disruption (classically untreated OSA) causes failure to thrive.",
        "MSLT SCHOOL-AGE NORMS: 16–18 minutes normal; less suggests significant sleepiness; sleep onset in ≥3 naps a flag; normal late-childhood result does not exclude.",
        "ENURESIS: ~5% of 7-year-olds at least weekly; usually delayed maturation; behavioural treatment very effective; lost control flags physical or psychological causes.",
        "THE EPILEPSY MIMICS: benign rolandic epilepsy and nocturnal frontal-lobe seizures — the sleep-related epilepsies that masquerade as parasomnias.",
        "RHYTHMIC MOVEMENT DISORDER: headbanging almost always remits spontaneously by 3–4 years — pad the cot, do not panic.",
      ],
      pyqConcepts: [
        "The hyperactivity masquerade — the discussion-question magnet across every exam tier.",
        "Paediatric vs adult OSA — the five-contrast table.",
        "DSPS quartet and chronotherapy vs adolescent 'defiance'.",
        "The Indian exam corner: co-sleeping as normative; the coaching-class sleep-debt culture; the snoring-child-to-ENT referral; behavioural enuresis programme before anything expensive.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A four-year-old with daytime over-activity, nightly snoring, restless sleep, nocturnal sweating and morning headaches: the paediatric OSA picture — the first move is ENT assessment for adenotonsillectomy, because the daytime behaviour often resolves with treatment; the growth curve is part of the data set (failure to thrive the untreated price), and the stimulant question is deferred until the sleep is treated.",
        "A 15-year-old with two years of 'laziness and defiance': cannot fall asleep before 2 a.m., cannot wake for the 7 a.m. school bus, sleeps to noon at weekends while the father escalates punishments for 'attitude': the 24-hour pattern shows sound uninterrupted sleep once asleep, poor morning function, normal evening alertness, the phase maintained by weekend catch-ups — delayed sleep phase syndrome, misread as behaviour; the programme is explanation to the family (physiology, not defiance; the punishment stops), a negotiated round-the-clock phase reset during the vacation, fixed wake time with morning bright light, weekend lie-ins capped at one hour, caffeine after 4 p.m. banned, the school informed — and the comorbid depression checked, because it travels with the delayed phase and defeats treatment.",
        "A seven-year-old with nightly sleep terrors: the parents have been waking and comforting him, and the episodes have worsened — the partial-arousal disorders rise from slow-wave sleep, the child stays asleep and unaware, and waking INCREASES distress: the prescription is reassurance, protective measures and the do-not-wake rule taught to the household; the frequency, late onset or trauma-following pattern that would instead prompt fuller assessment named in the same consultation.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Children's sleep problems are defined by parents, caused largely by parenting and development — treatment works through parenting change.",
        "Sleepiness presents as over-activity in children — the ADHD mimic.",
        "Paediatric OSA: tonsils and adenoids (not obesity), adenotonsillectomy the usual treatment.",
        "Arousal disorders arise from slow-wave sleep; the child stays asleep — do not wake.",
        "DSPS: sound sleep once asleep, at the wrong clock time.",
        "Growth hormone is released in slow-wave sleep — severe early disruption causes failure to thrive.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The three screening questions at every paediatric OPD visit — the cheapest diagnostic instrument in Indian paediatrics, and the only thing standing between the snoring child and a decade of the wrong label.",
        "The sleep diary is not paperwork — it converts the fraught parent into a collaborating observer, and its two weeks are the family's first taste of the programme's authority.",
        "Treat the parents to treat the child: the programme that fails is usually running against a hidden resistance — a child in the parental bed serving a marital purpose, a feared loss of disability allowance, a mother's untreated depression.",
        "The learning-disability consultation's two facts, said together: the sleep problems of this group are particularly high and severe AND amenable to treatment — the parents' belief that they are inevitable withholds the intervention.",
        "Home video is the Indian parasomnia workhorse: the family's phone clip settles what no metro-scarce paediatric PSG would otherwise reach in time.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The hyperactive snorer",
      presentation: "A five-year-old sent by his school for 'ADHD-like behaviour' — whose grandfather's snore, night sweats and bedwetting told a different story, and whose tonsils ended it.",
      initialPresentation:
        "A five-year-old boy was referred by his school in Nagpur for 'ADHD-like behaviour': restless in class, aggressive at play, falling behind academically. Seen with his mother, he was thin, breathed through his mouth, and had the adenoidal facies to match; the tonsils filled the pharynx on examination. Asked the three screening questions, his mother volunteered the sleep history nobody had taken: he snores 'like his grandfather', sleeps restlessly, sweats at night, wets the bed, and wakes each morning with headaches and a foul mood.",
      history: "No perinatal concerns; development normal; no family history of ADHD or sleep disorder; the school report of six months of worsening behaviour; morning mood consistently poor with mouth breathing noted at home for over a year; no medication exposure.",
      examination: "Thin build with growth tracking below expectations; mouth breathing with adenoidal facies; large tonsils; nasal airway compromised; no neurodevelopmental soft signs on brief assessment — the behaviour picture retraced against the sleep history rather than standing alone.",
      diagnosis: "Paediatric obstructive sleep apnoea — the behavioural presentation (usually not obese, tonsils and adenoids the cause, over-activity rather than visible sleepiness the daytime signature).",
      management: "Explanation of the hyperactivity masquerade to the mother and the school; ENT referral — adenotonsillectomy performed; polysomnography with respiratory measures noted as the severity-grading tool where available, with clinical assessment the cornerstone; the growth curve and behaviour flagged for follow-up.",
      outcome: "Three months later the teacher reported a different child — behaviour settled, classroom progress resumed — and the bedwetting had largely resolved without any enuresis programme.",
      teachingPoints: [
        "The paediatric OSA triad: not obese, tonsils and adenoids, hyperactive presentation.",
        "Some ADHD is a sleep disorder — the three screening questions before the stimulant, every time.",
        "PSG where available grades severity (blood-gas effects can exceed the clinical impression) — but clinical assessment is the cornerstone where paediatric sleep services are scarce.",
        "The enuresis that resolves with the tonsils was itself an OSA night sign, not a separate problem to treat.",
      ],
    },
    {
      title: "The boy who cannot wake for school",
      presentation: "Two years of 'laziness and defiance', a father's escalating punishments — and a body clock set three hours past the school bell.",
      initialPresentation:
        "A 15-year-old in Kota was brought by his father with two years of 'laziness and defiance': he cannot fall asleep before 2 a.m., cannot wake for the 7 a.m. school bus, and sleeps through weekends until noon; the father had begun punishing him for 'attitude' and was asking for 'stronger discipline'. The coaching-class timetable had pushed study later and later into the night, and the weekend catch-ups had become non-negotiable.",
      history: "Once asleep he sleeps soundly and uninterrupted to whenever he is left; morning function is poor with sleepiness and under-functioning; evening alertness is entirely normal — the boy is bright, conversational and unimpaired after 9 p.m.; the pattern is maintained by the very late weekend lie-ins; no substance use elicited; mood briefly screened and monitored for the comorbid depression that travels with the delayed phase.",
      examination: "Normal general and physical examination; the diagnostic work sits in the 24-hour pattern and a two-week sleep diary: severe delayed sleep onset, sound uninterrupted sleep, morning dysfunction, evening alertness — the DSPS quartet complete.",
      diagnosis: "Delayed sleep phase syndrome — the phase physiologically delayed and maintained by weekend catch-ups, misread as adolescent defiance.",
      management: "Explanation to the family first: this is physiology, not defiance — and the punishment stops; a negotiated round-the-clock phase reset in 3-hour steps during the school vacation; fixed wake time thereafter with early-morning bright light (morning walk and outdoor study); weekend lie-ins capped at one hour; caffeine after 4 p.m. banned; the school informed of the treatment phase.",
      outcome: "The vacation reset held: sleep onset advanced into the late evening, the 7 a.m. wake achieved with the morning-light routine and the fixed weekend rule, morning function recovered — and the 'attitude' dissolved with the sleep debt. The father's sharpest learning: the years of recrimination had treated a clock problem as a character problem.",
      teachingPoints: [
        "The DSPS quartet: late sleep onset + sound sleep + morning dysfunction + evening alertness.",
        "Chronotherapy replaces recrimination — the round-the-clock reset for severe delays, the 15-minutes-a-day advance for milder ones.",
        "Check for the depression that travels with the delayed phase, and for motivated sleep phase delay (delay maintained to avoid school) — both defeat treatment.",
        "The coaching-class and night-study culture manufactures exactly this sleep debt — the Indian adolescent presentation is structural, not moral.",
      ],
    },
  ],
  clinicalPearls: [
    "Children are not miniature adults in sleep medicine: parents define the problem, development and parenting cause much of it, and treatment runs through parenting change.",
    "20–30% of children from infancy to adolescence have significant sleep problems — far higher in psychiatric disorder, learning disability, homelessness and maternal affective illness.",
    "The hyperactivity masquerade: sleepiness slows adults and speeds children up — irritability, restlessness, poor concentration, impulsiveness, aggression.",
    "Some 'ADHD' is OSA, periodic limb movements or a circadian disorder, and improves completely when the sleep disorder is treated.",
    "The duration ladder: 17/14/13/12/10/9+ hours from term to adolescence; the body clock establishes by ~6 months; puberty delays the phase biologically.",
    "The DSPS quartet — late sleep onset, sound sleep, morning dysfunction, evening alertness — maintained by very late weekend lie-ins; treat with the 15-minutes-a-day advance or the round-the-clock 3-hour-step reset.",
    "Paediatric OSA: at least 2% of children, peak 2–6 years, tonsils and adenoids not obesity, equal sex ratio, partial obstruction with hypoventilation, over-active days — adenotonsillectomy the usual treatment; only ~1 in 5 habitual snorers has it.",
    "The arousal-disorder rule: the child stays asleep and unaware — waking him increases distress; do not wake.",
    "Growth hormone rides slow-wave sleep: severe early disruption, classically untreated OSA, is a recognised cause of failure to thrive.",
    "Narcolepsy in childhood may begin as simply prolonged overnight sleep; low CSF hypocretin is diagnostic; onset by 15 years in at least one-third; misread as laziness, depression or conversion disorder.",
    "Benign rolandic epilepsy and nocturnal frontal-lobe seizures are the sleep-related epilepsies that masquerade as parasomnias — the episode narrative and home video decide.",
    "Behavioural treatment of childhood sleeplessness is very effective even in severe, long-standing cases and in learning disability and autism — medication plays a very limited part.",
    "The Indian lens: co-sleeping is culture not pathology (targets are timing, routine and limits); the coaching-class timetable is the structural sleep-debt machine; the snoring child needs the ENT referral nobody makes.",
  ],
  highYieldSummary: [
    "Definition and thesis: paediatric sleep medicine inverts the adult rules — sleep problems are defined by parents, caused largely by parenting and development, present as over-activity rather than sleepiness, and are commoner, more serious, and more treatable than assumed; the diagnostic discipline is separating the three complaint families: sleeplessness, excessive daytime sleepiness, and parasomnias.",
    "Epidemiology: 20–30% of children from infancy to adolescence have significant sleep problems (true prevalence of severe persistent disorders unknown); far higher rates in psychiatric disorder, learning disability (particularly high and severe yet amenable to treatment), homelessness, and children of mothers with affective illness; OSA at least 2% (peak 2–6 years, higher in Down syndrome and learning-disability syndromes); narcolepsy 4–9 per 10,000 in US estimates with onset by adolescence in a high proportion (at least one-third by 15 years); enuresis ~5% of 7-year-olds weekly; India has no comparable national paediatric sleep data — stated, not substituted.",
    "Mechanism and physiology: REM-dominant fragile infancy (brain maturation running), SWS-rich early childhood (the arousal disorders rising from deep sleep), the pre-pubertal years of maximal efficiency, and the biologically delayed adolescent phase against society's early start — the sleep-debt epidemic and DSPS its crystallisation; growth hormone tied to slow-wave sleep (failure to thrive the untreated OSA price); and the masquerade itself — sleepiness increasing activity in the developing brain.",
    "Clinical picture by age: infants (prevention principles — routine, night-feeding not beyond ~6 months, self-soothing, day–night differentiation, sleep-conducive environment, SIDS safety); toddlers (~30% of the age; bedtime refusal and night waking with demands; four behavioural causes); school-age (evolving fears, conditioned insomnia, the evening 'forbidden zone', advanced phase, idiopathic childhood-onset insomnia); adolescents (high insomnia rates, DSPS misread as defiance, the substance layer).",
    "Daytime sleepiness differential in three columns — insufficient sleep (late nights plus early school, irregular schedules, DSPS), disturbed night sleep (substances, medical and psychiatric disorders and treatments, parasomnias, periodic limb movements, OSA), increased need (narcolepsy, idiopathic CNS hypersomnia, depression, neurological disease, Kleine–Levin syndrome, menstruation-related hypersomnia) — remembering that lesser degrees read as over-activity and pre-pubertal alertness masks the lot; sleepiness distinguished from fatigue and from simulated sleepiness.",
    "Assessment: the three screening questions at every encounter; the 24-hour review (evening, overnight, waking, daytime); the two-week sleep diary correcting the fraught retrospective account; CSHQ-lineage questionnaire beforehand; polysomnography when indicated with paediatric MSLT norms (16–18 minutes normal, less suggests significant sleepiness, sleep onset in ≥3 naps a flag, normal late-childhood result not excluding) and actigraphy for all ages.",
    "Management: behavioural first with medication playing a very limited part — parenting-practice change each family can accept (graded change and desensitisation over 'controlled crying'), very effective even in severe cases and in learning disability and autism; the infant prevention and SIDS-safety bundle; DSPS chronotherapy (15 minutes a day advance up to about three hours of delay; round-the-clock 3-hour-step delay for severe; morning bright light and firm agreed schedules; melatonin's role remains unclear); adenotonsillectomy for paediatric OSA; parasomnia reassurance-and-safety with the do-not-wake rule and treat-the-cause for secondary parasomnias; treat-the-parents architecture with hidden resistances surfaced; narcolepsy's medication-plus-support tier referred.",
    "The Indian tier: co-sleeping normal and adaptive (timing, routine and limits the targets; the alcohol-or-sedatives caution the only safety line); the coaching-class and night-study sleep-debt factory counselled as performance engineering (fixed wake time, capped lie-ins, the caffeine audit); the household 'quiet hour' negotiated for shared rooms; the snoring-child-to-ENT referral with PM-JAY coverage where indicated; the behavioural enuresis programme before any expensive or shaming detour; and the history-based approach as the standard of care where paediatric polysomnography is a metro rarity.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "child-sleep-quiz-1",
      question: "A 4-year-old with daytime over-activity, nightly snoring, restless sleep, nocturnal sweating and morning headaches is most likely to have:",
      options: ["Childhood ADHD requiring stimulants", "Obstructive sleep apnoea from enlarged tonsils and adenoids", "Narcolepsy", "Delayed sleep phase syndrome"],
      correctIndex: 1,
      explanation: "The paediatric OSA picture — and the correct first move is ENT assessment for adenotonsillectomy, since the daytime behaviour often resolves with treatment.",
      afterSectionId: "differential",
    },
    {
      id: "child-sleep-quiz-2",
      question: "The diagnostic quartet of delayed sleep phase syndrome includes:",
      options: ["Early sleep onset, fragmented sleep, evening sleepiness", "Severe difficulty initiating sleep, sound uninterrupted sleep, great difficulty morning waking, evening alertness", "Sudden sleep attacks with cataplexy", "Snoring with paradoxical breathing movements"],
      correctIndex: 1,
      explanation: "The phase is physiologically shifted — the child sleeps well, at the wrong clock time, and functions poorly in the morning while peaking in the evening.",
      afterSectionId: "diagnosis",
    },
    {
      id: "child-sleep-quiz-3",
      question: "Confusional arousals and sleep terrors in a young child arise from:",
      options: ["REM sleep and dream content", "Slow-wave sleep; the child remains asleep and unaware", "Nocturnal epilepsy by definition", "Conditioning to parental attention"],
      correctIndex: 1,
      explanation: "Partial-arousal disorders of deep sleep — which is why they cluster in the slow-wave-rich early-childhood years, and why waking the child is discouraged: it increases distress.",
      afterSectionId: "mechanism",
    },
    {
      id: "child-sleep-quiz-4",
      question: "Average sleep requirement for a 1-year-old, per the chapter's table, is closest to:",
      options: ["17 hours", "14 hours", "10 hours", "8 hours"],
      correctIndex: 1,
      explanation: "17 hours at term, 14 at 1 year, 13 at 2, 12 at 4, 10 at 10, 9+ in adolescence — and many adolescents, not least in the coaching culture, get far less.",
      afterSectionId: "timeline",
    },
    {
      id: "child-sleep-quiz-5",
      question: "In school-aged children, an MSLT mean sleep latency suggesting significant daytime sleepiness is roughly:",
      options: ["Below 16–18 minutes", "Below 40 minutes", "Any latency under 60 minutes", "Latency cannot be interpreted in children at all"],
      correctIndex: 0,
      explanation: "16–18 minutes is normal in school-age children; shorter latencies (and sleep onset in three or more naps) flag sleepiness — though a normal late-childhood result can mask a true disorder because of naturally high alertness.",
      afterSectionId: "diagnosis",
    },
    {
      id: "child-sleep-quiz-6",
      question: "The first-line treatment for sleeplessness of a 3-year-old with repeated night waking and demands to enter the parental bed is:",
      options: ["Nightly sedative syrup", "A behavioural programme addressing separation anxiety, associations, limit-setting and self-soothing", "A co-sleeping prescription for life", "Polysomnography before any intervention"],
      correctIndex: 1,
      explanation: "Behavioural methods are very effective even in severe, long-standing cases, including children with developmental disorders, when properly implemented; medication plays a very limited part.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the age-duration table (term to adolescence) and the 20–30% prevalence figure with its high-risk groups.", answer: "DURATIONS: 17 hours at term; 14 at 1 year; 13 at 2; 12 at 4; 10 at 10; 9+ in adolescence — with many adolescents (the Indian coaching-class cohort especially) getting far less than the 9 their physiology still needs, because puberty delays the phase biologically while need stops falling. PREVALENCE: 20–30% of children from infancy to adolescence have sleep problems considered significant by them or their parents; the true prevalence of severe persistent disorders is unknown (methodological barriers). HIGH-RISK GROUPS: children with psychiatric disorders (high across the board); learning disability and intellectual disability (particularly high and severe — yet amenable to treatment, with parents wrongly believing the problems inevitable and untreatable); homeless children; children of mothers with affective illness (increased rate and severity). The exam pairing: the prevalence line plus the one-rule thesis — children are not miniature adults in sleep medicine.", topic: "Foundations" },
    { question: "Name the four sleep-physiology anchors across childhood and the disorder each one predicts.", answer: "(1) REM-DOMINANT INFANCY — the newborn's sleep is REM-heavy, perhaps actively running brain maturation, and therefore fragile: infant sleep is easily disrupted, and the prevention principles (routine, night-feeding not beyond ~6 months, self-soothing, day–night differentiation, sleep-conducive environment) are the treatment. (2) SLOW-WAVE-RICH EARLY CHILDHOOD — pronounced SWS predisposes to the partial-arousal disorders (confusional arousals, sleepwalking, sleep terrors), which rise FROM deep sleep and cluster at this age — and it is also the OSA peak (2–6 years, tonsils and adenoids). (3) PRE-PUBERTAL EFFICIENCY — the soundest night sleep and maximal daytime alertness of life; the efficiency is also the trap, because the alertness masks sleepiness entirely (the over-activity is the only sign). (4) ADOLESCENT PHASE DELAY — decreased SWS with a biologically delayed phase while society demands early starts: the sleep-debt epidemic, with DSPS its crystallisation and the misread as defiance its usual history.", topic: "Mechanism" },
    { question: "How does daytime sleepiness present in young children — and which three sleep disorders can masquerade as ADHD?", answer: "PRESENTATION: in adults sleepiness reduces activity; in young children it INCREASES it — irritability, tantrums, restlessness, poor concentration, impulsiveness, aggression. Lesser degrees produce over-activity rather than nodding off; high pre-pubertal alertness can mask sleepiness entirely; parents, teachers and children do not see sleepiness as medical, so it is read as laziness or disinterest, or misdiagnosed as depression or limited intelligence. THE THREE MASQUERADERS: obstructive sleep apnoea, periodic limb movements, and circadian rhythm disorder (the delayed phase). The clinical rule this generates: some 'ADHD' is actually one of these, and the behaviour improves when the sleep disorder is treated — which is why the three screening questions (difficulty getting to sleep or staying asleep? excessive daytime sleepiness? episodes of abnormal behaviour or experiences at night?) precede any stimulant decision.", topic: "Clinical practice" },
    { question: "Draw the DSPS diagnostic quartet and its two-step treatment.", answer: "THE QUARTET: (1) persistently severe difficulty falling asleep; (2) uninterrupted sound sleep once asleep; (3) great difficulty waking for school, with morning sleepiness and under-functioning; (4) evening alertness — the pattern giving way to it. The maintenance arm: very late weekend lie-ins that re-delay the phase each week; the origin: habitually late nights (illness, bedtime battles, weekend socialising, the coaching timetable) until the phase is physiologically delayed and sleeping earlier by choice becomes impossible. THE TWO-STEP TREATMENT: (a) gradual advance — 15 minutes a day — for delays up to about three hours; (b) for severe delays, progressive delay in 3-hour steps 'round the clock' (best negotiated into a vacation); maintenance in both arms with early-morning bright light and firm agreements on schedules, with parental involvement throughout. Melatonin's role remains unclear (uncertainties and potential reproductive-physiology hazards) — the behavioural chronotherapy is the prescription. The two saboteurs to check: motivated sleep phase delay (the delay maintained to avoid school) and comorbid depression — both defeat treatment.", topic: "Management" },
    { question: "Contrast paediatric with adult OSA across five features.", answer: "(1) BODY HABITUS: adults — typically obese, middle-aged; children — usually NOT obese. (2) CAUSE: adults — obesity-related airway collapse; children — large tonsils and adenoids. (3) SEX RATIO: adults — male-predominant; children — equal. (4) PHYSIOLOGY: adults — prolonged apnoeas; children — partial obstruction with hypoventilation (and blood-gas effects that can exceed the clinical impression). (5) DAYTIME PICTURE: adults — visible sleepiness with under-functioning, CPAP-responsive; children — over-activity and disruptive behaviour rather than visible sleepiness, with adenotonsillectomy the usual treatment (CPAP less often). The night signs in children: snoring (but only ~1 in 5 habitual snorers has OSA), breathing-difficulty noises, paradoxical chest-abdomen movement, neck-extension positions, restless sleep, sweating, enuresis, distressing obstructive awakenings; the day signs: mouth breathing, adenoidal facies, morning headache and bad mood, behaviour problems. Epidemiology: at least 2% of children, peak onset 2–6 years, much higher in Down syndrome and the learning-disability syndromes.", topic: "Differential" },
    { question: "State the arousal-disorder rule, and name the two sleep-related epilepsies that mimic parasomnias.", answer: "THE RULE: confusional arousals, sleepwalking and sleep terrors are partial-arousal disorders arising from slow-wave sleep — the child remains asleep and unaware; extreme agitation looks like suffering, but waking and comforting attempts INCREASE distress and should be discouraged; violence can occur and protective measures are needed; guide the child back, protect from hazards, and expect remission within a few years. The reassurance frame: most primary childhood parasomnias cause parental alarm rather than child pathology. THE TWO EPILEPSIES: benign rolandic epilepsy and nocturnal frontal-lobe seizures — both sleep-related and easily misread as parasomnias. The separator: the detailed episode narrative (onset-to-resolution sequence, timing, circumstances); home video is a superb tool; polysomnography only when clinical evaluation is inconclusive or another sleep disorder co-exists. The psychological-significance flags that upgrade a parasomnia: very frequent, unusually late in onset, persistent, or following trauma.", topic: "Differential" },
    { question: "Which two factors make the MSLT tricky in children?", answer: "(1) THE NORMS ARE AGE-SPECIFIC: in school-age children, roughly 16–18 minutes to fall asleep is NORMAL — adult-style interpretation misclassifies; latencies below this suggest significant sleepiness, and sleep onset in ≥3 naps is a flag. (2) THE MASKING ALERTNESS: high pre-pubertal alertness can mask sleepiness entirely, and a NORMAL MSLT in late childhood does NOT exclude a sleepiness disorder, because of the naturally enhanced wakefulness of those years. The practical corollaries: interpret the MSLT alongside the history (the 24-hour review, the diary), use actigraphy for all ages as the unobtrusive pattern check, and in India — where paediatric sleep laboratories are a metro rarity — the history-based approach remains the standard of care, with the MSLT a referral-centre confirmation rather than a gate the diagnosis must pass.", topic: "Diagnosis" },
    { question: "Give the five prevention principles of infant sleep and the four behavioural causes of toddler sleeplessness.", answer: "THE FIVE PREVENTION PRINCIPLES: (1) a consistent 24-hour routine containing a bedtime routine of cues; (2) night-feeding not prolonged beyond ~6 months; (3) teaching the baby to fall asleep alone — self-soothing, remembering that night waking is normal at all ages and the skill is returning to sleep without parental intervention; (4) clear day–night differentiation; (5) a sleep-conducive environment. The safety counselling that rides with them: supine sleep, firm mattress, face uncovered, smoke-free room, no overheating, and no co-sleeping after parental alcohol or sedatives. THE FOUR BEHAVIOURAL CAUSES of toddler and pre-school sleeplessness (after medical factors excluded; ~30% of this age group): (1) separation anxiety; (2) unhelpful bedtime associations; (3) inadequate limit-setting; (4) failure of self-soothing. The treatment that follows: the behavioural programme — very effective even in severe, long-standing cases and in children with learning disability or autism, with graded change and desensitisation preferred over 'controlled crying' (quick but unacceptable to many parents).", topic: "Clinical practice" },
  ],
  faqs: [
    { question: "Is co-sleeping bad for my child?", answer: "In most Indian families it is normal and harmless — the family bed is often adaptive. The goals are a predictable bedtime routine and enough total sleep, wherever the child sleeps; the clinical targets are timing, routine consistency and limits, not eviction from the parental bed. Only co-sleeping after a parent has drunk alcohol or taken sedatives is unsafe (a breathing risk for the infant)." },
    { question: "He fights bedtime — is he being defiant?", answer: "Usually not: the usual engines are separation anxiety, a stimulating bedroom, missing limits, or a bedtime set before his body is sleepy. Check whether he is being put down during his evening 'forbidden zone' of peak wakefulness — a child put to bed before sleep-ready lies awake by biology, not choice. The schedule, not the child, is the problem." },
    { question: "She is hyperactive in the day — could she actually be sleepy?", answer: "Yes, genuinely: young children show sleepiness as over-activity, irritability and poor concentration rather than nodding off. Ask about snoring, restless sleep and morning mood — some 'ADHD' improves completely after the sleep disorder is treated." },
    { question: "Why can't my teenager just go to bed earlier?", answer: "Because puberty biologically delays the sleep phase: her body clock is set later, and the school bell is set early. The fix is a scheduled phase reset — a 15-minutes-a-day advance or a planned round-the-clock shift in a vacation, with morning light and a fixed wake time — not punishment for 'laziness'." },
    { question: "Is sleepwalking dangerous? Should I wake him?", answer: "He is asleep and unaware; waking him tends to make the episode worse and more distressing. Guide him back to bed, protect him from hazards (clear floors, locked windows, stair gates), and expect the episodes to fade with age. Frequent, late-onset or persistent episodes deserve a fuller assessment." },
    { question: "Will nightmares mean something psychological?", answer: "Occasional nightmares are normal at every age. Frequent nightmares plus intense bedtime fears suggest an anxiety disorder — and the nightmare content can point to the cause, including trauma or abuse. The content is data; ask about it gently." },
    { question: "Can poor sleep really affect his growth?", answer: "Yes: growth hormone is released in slow-wave sleep, and severe early sleep disruption — typically untreated OSA — is a recognised cause of failure to thrive. One more reason snoring in a small child is not cute: it is an ENT referral." },
    { question: "The bedwetting — should we try the special treatments we saw advertised?", answer: "Before expensive or shaming options: the behavioural programme is cheap, effective and parent-deliverable, and school and family education removes the blame. About 5% of 7-year-olds wet at least weekly — usually delayed maturation; but if a child loses previously achieved control, that flags physical or psychological causes and needs assessment." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "No India-specific paediatric sleep pathway exists — practice follows the Stores synthesis and its behavioural-treatment evidence base; the history-based approach is the taught standard" },
      { source: "SIDS safe-sleep counselling conventions — supine sleep, firm mattress, face uncovered, smoke-free room, no co-sleeping after parental alcohol or sedatives (the maternity-channel bundle)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.9 — source chapter mapped; content rewritten and updated beyond it (2009)" },
      { source: "Stores G & Wiggs L (eds) — Sleep Disturbance in Children and Adolescents with Disorders of Development: the learning-disability sleep literature" },
    ],
    trials: [],
    reviews: [
      { source: "Stores G (2007), Clinical diagnosis and misdiagnosis of sleep disorders, JNNP — the misinterpretation catalogue this course's masquerade stands on" },
      { source: "Kuhn BR & Elliot AJ (2003), treatment efficacy in paediatric sleep medicine, J Psychosom Res — the behavioural-programme evidence" },
      { source: "Fallone G, Owens JA & Deane J (2002), sleepiness in children: clinical implications, Sleep Med Rev — the over-activity presentation" },
      { source: "Dahl RE & Lewin DS (2002), sleep regulation and behaviour in adolescence, J Adolesc Health — the phase-delay and sleep-debt line" },
      { source: "Stores G (2006), the protean manifestations of childhood narcolepsy and their misinterpretation, Dev Med Child Neurol — the prolonged-sleep onset and the wrong labels" },
      { source: "Stores G (2007), parasomnias of childhood and adolescence, Sleep Med Clin — the arousal-disorder rule and the epilepsy mimics" },
      { source: "Fleming P & Blair PS (2007), sudden infant death syndrome, Sleep Med Clin — the safe-sleep bundle" },
      { source: "Owens JA, Spirito A & McQuinn M (2000), the Children's Sleep Habits Questionnaire, Sleep — the instrument lineage (named only, items never reproduced)" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 — India's national tele-mental-health helpline for family distress and adolescent sleep-debt counselling" },
      { source: "The two-week sleep diary and the three screening questions — the two free instruments this course hands to every Indian family and clinician" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "8 min",
      description: "Plain language: why tired children look hyperactive, the three complaint families, the routine-and-diary programme, the warning signs.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "27 min",
      description: "The 20–30% prevalence, the masquerade, the duration table, the DSPS quartet, the OSA contrasts, the do-not-wake rule.",
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
      description: "Everything — the 24-hour history craft, the chronotherapy architecture, the co-sleeping reframe, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The 20–30% prevalence, the masquerade, the age-graded physiology.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the prevalence, the duration ladder and the three complaint families cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The maturation story, the sleepiness-that-speeds-up story, the growth story.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why arousal disorders cluster in early childhood and why the sleepy child is the 'hyperactive' one." },
    { number: 3, title: "Clinical Practice", description: "The 24-hour history, the age-graded sleeplessness map, the sleepiness differential, the treatment packages.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the three screening questions, the quartet check and the OSA five-contrasts without notes." },
    { number: 4, title: "Indian Context", description: "The co-sleeping reframe, the coaching-class sleep-debt factory, the ENT route.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can counsel a joint family on targets-not-eviction and a Kota teenager on performance engineering." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the sleepless-child essay cold and recite the DSPS quartet and OSA contrasts without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.9 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Stores G (2007), Clinical diagnosis and misdiagnosis of sleep disorders, JNNP 78:1293–7 — the misinterpretation catalogue (the masquerade, the wrong labels)", sourceType: "review", year: "2007", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Owens JA, Spirito A & McQuinn M (2000), the Children's Sleep Habits Questionnaire, Sleep 23:1043–51 — the screening instrument lineage (named only, items never reproduced)", sourceType: "primary", year: "2000", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Kuhn BR & Elliot AJ (2003), treatment efficacy in behavioral pediatric sleep medicine, J Psychosom Res 54:587–97 — the behavioural-programme evidence", sourceType: "review", year: "2003", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Fallone G, Owens JA & Deane J (2002), sleepiness in children: clinical implications, Sleep Med Rev 6:287–306 — the over-activity presentation and its consequences", sourceType: "review", year: "2002", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Dahl RE & Lewin DS (2002), pathways to adolescent health: sleep regulation and behavior, J Adolesc Health 31:175–84 — the phase-delay and sleep-debt line", sourceType: "review", year: "2002", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Stores G (2006), the protean manifestations of childhood narcolepsy and their misinterpretation, Dev Med Child Neurol 48:307–10", sourceType: "review", year: "2006", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Stores G (2007), parasomnias of childhood and adolescence, Sleep Med Clin 2:405–17 — the arousal-disorder rule and the epilepsy mimics", sourceType: "review", year: "2007", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Fleming P & Blair PS (2007), sudden infant death syndrome, Sleep Med Clin 2:463–76 — the safe-sleep counselling bundle", sourceType: "review", year: "2007", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Stores G & Wiggs L (eds) (2001), Sleep Disturbance in Children and Adolescents with Disorders of Development — the learning-disability sleep literature (high, severe, amenable to treatment)", sourceType: "textbook", year: "2001", dateReviewed: "2026-09-29" },
    { id: "S11", source: "The Indian clinical layer — the co-sleeping norm, the coaching-class sleep-debt culture, paediatric PSG scarcity outside metros, PM-JAY coverage where adenotonsillectomy is indicated, and the stated absence of national paediatric sleep data (approx 2026)", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "Prevalence: 20–30% of children from infancy to adolescence have sleep problems considered significant by them or their parents, the true prevalence of severe persistent disorders unknown; rates far higher in psychiatric disorder, learning disability (particularly high and severe yet amenable to treatment), homelessness and maternal affective illness.", grade: "established", sources: ["S1", "S2"] },
    { text: "The hyperactivity masquerade: sleepiness reduces activity in adults but increases it in young children — irritability, tantrums, restlessness, poor concentration, impulsiveness, aggression; some 'ADHD' is OSA, periodic limb movements or a circadian disorder, improving when the sleep disorder is treated.", grade: "established", sources: ["S1", "S2", "S5"] },
    { text: "Developmental physiology: REM-dominant fragile infancy; slow-wave-rich early childhood hosting the partial-arousal disorders; pre-pubertal years of maximal efficiency; biologically delayed adolescent phase against early school starts — with the duration ladder (17/14/13/12/10/9+ hours from term to adolescence) and the body clock established by ~6 months.", grade: "established", sources: ["S1", "S6"] },
    { text: "DSPS: the diagnostic quartet (persistently severe sleep-onset difficulty; uninterrupted sound sleep; great difficulty waking for school; morning under-functioning giving way to evening alertness) maintained by very late weekend lie-ins; treatment the two-step chronotherapy — 15 minutes a day advance for delays up to about three hours, progressive delay in 3-hour steps round the clock for severe cases, with early-morning bright light and firm schedule agreements; melatonin's role remains unclear (uncertainties and potential reproductive-physiology hazards).", grade: "established", sources: ["S1", "S6"] },
    { text: "Paediatric OSA: at least 2% of children, peak onset 2–6 years, much higher in Down syndrome and learning-disability syndromes; the five contrasts (usually not obese; tonsils and adenoids the cause; equal sex ratio; partial obstruction with hypoventilation; over-active rather than sleepy daytime picture); only ~1 in 5 habitual snorers has OSA; adenotonsillectomy the usual treatment, with polysomnography with respiratory measures grading severity where the blood-gas effects can exceed the clinical impression.", grade: "established", sources: ["S1", "S2"] },
    { text: "The arousal-disorder rule: confusional arousals, sleepwalking and sleep terrors are partial-arousal disorders arising from slow-wave sleep; the child remains asleep and unaware; waking and comforting attempts increase distress and should be discouraged; protective measures needed; most primary childhood parasomnias remit within a few years.", grade: "established", sources: ["S1", "S8"] },
    { text: "The nocturnal-epilepsy mimics: benign rolandic epilepsy and nocturnal frontal-lobe seizures — both sleep-related and easily misread as parasomnias; the diagnosis of parasomnias rests on the detailed episode narrative with home video a superb tool and polysomnography reserved for inconclusive evaluation or co-existing sleep disorder.", grade: "established", sources: ["S1", "S2", "S8"] },
    { text: "The growth wire: growth hormone secretion tied to slow-wave sleep — severe early-onset sleep disruption, classically untreated OSA, a recognised cause of failure to thrive, with impaired immunity and endocrine disruption the wider warnings.", grade: "established", sources: ["S1", "S5"] },
    { text: "Behavioural treatment very effective even in severe, long-standing childhood sleeplessness and in learning disability and autism, with graded change and desensitisation preferred over 'controlled crying'; the parental architecture (parents define, cause, maintain and treat) with hidden resistances recognised; medication playing a very limited part.", grade: "established", sources: ["S1", "S4", "S10"] },
    { text: "The assessment package: three screening questions at every encounter; the 24-hour sleep–wake review; the two-week sleep diary correcting the fraught parent's distorted retrospective account; CSHQ-lineage questionnaire beforehand; MSLT school-age norms (16–18 minutes normal, less suggests significant sleepiness, sleep onset in ≥3 naps a flag, a normal late-childhood result not excluding a sleepiness disorder); actigraphy for all ages.", grade: "established", sources: ["S1", "S3"] },
    { text: "Childhood narcolepsy: 4–9 per 10,000 (US estimates), onset by adolescence in a high proportion (at least one-third by 15 years); may begin as simply prolonged overnight sleep with the classic tetrad slow to assemble; low CSF hypocretin/orexin diagnostic; misinterpretation as laziness, depression or conversion disorder common.", grade: "established", sources: ["S1", "S7"] },
    { text: "Infant safe-sleep counselling: supine sleep, firm mattress, face uncovered, smoke-free room, no overheating, and no co-sleeping after parental alcohol or sedatives — the SIDS-prevention bundle taught with the prevention principles.", grade: "established", sources: ["S1", "S9"] },
    { text: "The Indian layer: co-sleeping normal and adaptive (targets are timing, routine and limits — the alcohol-or-sedatives caution the only safety line); the coaching-class/night-study culture manufacturing the adolescent sleep debt; paediatric polysomnography scarce outside metros; adenotonsillectomy covered under most schemes including PM-JAY where indicated; no comparable national paediatric sleep data — stated rather than substituted (approx 2026).", grade: "supported", sources: ["S11"] },
  ],
};
