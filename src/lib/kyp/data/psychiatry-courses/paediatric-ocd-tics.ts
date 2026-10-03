import type { PsychiatryCourse } from "./types";

/**
 * OCD & TICS IN YOUTH — THE ACCOMMODATION GRID — canonical Psychiatry
 * course (migration batch 13, Group L — child & adolescent psychiatry).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/paediatric-ocd-tics.md — untouched foundation),
 * re-researched against current guidance (the POTS treatment-trial
 * ladder, the Franklin/Peris family-based CBT and accommodation-
 * reduction evidence, the Scahill/Woods CBIT trials, the Bloch/Leckman
 * tic phenomenology and natural history, the Swedo PANDAS lineage with
 * its honestly contested position and the AAP/AACAP-tier cautions,
 * DSM-5-TR/ICD-11 constructs) with per-claim provenance.
 *
 * Drug routes: sertraline, fluoxetine, fluvoxamine and clomipramine —
 * the note's OCD pharmacotherapy tier, all genuinely assigned — have
 * KYP lessons and are linked; the tic medication tier (clonidine,
 * guanfacine, risperidone, aripiprazole, haloperidol, pimozide,
 * botulinum toxin) and atomoxetine have NO KYP lessons and are
 * recorded in contentGaps, taught here, the route never invented.
 */
export const paediatricOcdTicsCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "paediatric-ocd-tics",
  title: "OCD & Tics in Youth",
  shortName: "Paediatric OCD & tics",
  kind: "disorder",
  category: "Child & Adolescent Psychiatry",
  groupLetter: "L",
  groupName: "Child & adolescent psychiatry",
  learningPath: ["Psychiatry", "Child & Adolescent Psychiatry", "OCD & Tics in Youth"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "36 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Family accommodation feeds childhood OCD, while tics suppress at a cost and mostly fade",

  summary:
    "Childhood OCD shares the adult sticky-thought engine but is maintained by family accommodation, the reassurance and rituals done for the child. Tic disorders ride premonitory urges and mostly improve through the teens, and both conditions respond well to behavioural therapy.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Recognise childhood OCD through its child-themes and the 'silly but stuck' quality, with the reduced-insight qualifier the DSM-5 insight specifier formalises.",
    "Run the family-accommodation audit (the grid mapping each ritual to what each household member does for it) and coach parents out of the reassurance-ritual loop: the make-or-break of paediatric OCD treatment.",
    "Deliver child-adapted ERP: externalisation, ladders, ritual-blocking and the reward economy in 8–14 session packages, with the POTS-tier severity logic.",
    "Use sertraline and fluoxetine correctly in paediatric OCD (the higher-slower dose logic carried from the adult disorder) and know when combined treatment beats either alone.",
    "State the honest position on PANDAS/PANS: what is real, what is contested, and what to actually do with a sudden-onset case.",
    "Diagnose across the tic spectrum (transient, chronic motor/vocal, Tourette's with its 1-year gate and multiple-motor-plus-vocal combination) and recognise the premonitory-urge-suppression cycle.",
    "Treat tics in the evidence order: psychoeducation and watchful waiting, then CBIT/habit-reversal, then medication; alpha-2 agonists first-line especially when ADHD co-travels, dopamine blockers reserved with the growth-era monitoring ledger.",
    "Handle Indian realities: the punished tic, the scrupulosity family pre-interpreted through the religious frame, the scarce CBIT professional, and the teacher-briefing letter that changes school life.",
  ],
  quickFacts: [
    { label: "The prevalence", value: "Paediatric OCD 0.5–2%; half of all OCD begins young", detail: "About half of all OCD begins in childhood or adolescence: boys predominate in the pre-pubertal onset, often with tics in tow, the sex ratio evening by adolescence; tics: transient in up to a quarter of ordinary children, persistent disorders ~1–2%, Tourette's itself roughly 0.3–1%, boys 3–4×" },
    { label: "The child maintainer", value: "The accommodation grid", detail: "Parents' reassurance, ritual-assistance and trigger-removal feel like love and work like oxygen on the fire: present in the severe majority, the first-order treatment target, and a predictor of treatment success when weaned" },
    { label: "The tic identity", value: "USS — Urge, Suppressible, Suggestible", detail: "The three findings that exclude every mimic: the premonitory urge that builds and is relieved by the tic, the suppressibility that costs attention, the suggestibility; no chorea, myoclonus or medication-induced movement is all three" },
    { label: "The Tourette's gate", value: "Multiple motor + 1+ vocal, 1+ year", detail: "Not necessarily concurrent, onset typically 4–6 years prepubertal; coprolalia the cinematic stereotype that actually occurs in only a ~10–15% minority: state it, kill the myth" },
    { label: "The treatment ladder (OCD)", value: "ERP first-line; POTS tier for the moderate-severe", detail: "CBT alone suffices for milder cases and rivals medication; the combined CBT+sertraline tier outruns either alone for moderate-severe: the POTS (Pediatric OCD Treatment Study) logic" },
    { label: "The SSRI clock", value: "Higher and slower — weeks 6–10", detail: "OCD dosing runs higher and slower than depression: often 6–10 weeks to effect; warn the family at the start or they abandon at week 3: the Indian pattern" },
    { label: "The prognosis asymmetry", value: "Tics fade, rituals grow", detail: "Tic peak severity 10–12 with substantial teen improvement and roughly a third of Tourette's resolving fully; untreated OCD instead grows its architecture and recruits the family: the urgency difference between the two conditions" },
    { label: "The Indian signature", value: "The punished tic and the erasing child", detail: "The suppression-demand household that manufactures concealment costs; the Std 2–4 child sent for 'sloppy handwriting' whose paper tears from repeated erasing; the throat-clear touring ENTs for months" },
  ],
  knowledgeGraph: [
    { label: "Obsessive-Compulsive Disorder (OCD)", type: "condition", href: "/psychiatry/ocd/", note: "The adult engine and the full drug dosing: this course carries the child differences: the themes, the thinner insight, the family-accommodation layer the adult illness lacks" },
    { label: "ADHD", type: "condition", href: "/psychiatry/adhd/", note: "The comorbidity in over half of Tourette's: the school trajectory's real decider; and the home of the dead stimulant-worsens-tics dogma" },
    { label: "Child Anxiety", type: "condition", href: "/psychiatry/child-anxiety/", note: "The reassurance-seeking differential: anxiety's worry content is feared events, OCD's is felt-wrongness; the alarm's engine versus the sticky grammar" },
    { label: "Autism Spectrum Disorder", type: "condition", href: "/psychiatry/autism/", note: "The rigid-routines differential. PREFERRED routines against FEARED-wrong rituals; the social-reciprocity history and the sensory profile decide" },
    { label: "Child Neuropsychiatry", type: "condition", href: "/psychiatry/child-neuropsychiatry/", note: "The movement-mimic discipline and the basal-ganglia neighbourhood both engines book. Sydenham's chorea's territory" },
    { label: "Mood Disorders in Youth", type: "condition", href: "/psychiatry/paediatric-mood/", note: "The secondary-depression rider that begins under severe OCD: the mood audit at every review" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The SSRI tier's chemistry: sertraline and fluoxetine carrying the paediatric OCD evidence on the higher-slower clock" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The tic-suppression tier's target, and the paradox of treating a movement disorder with a movement-causing drug class (no KYP lessons for that tier; taught here, never invented)" },
    { label: "Basal ganglia", type: "brain-region", href: "#brain", note: "The hub of the cortico-striato-thalamo-cortical habit circuitry: the reason OCD's not-just-right signal and the tic's urge-loop co-travel in families and in the same child" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "The POTS member: the moderate-severe tier's SSRI with the weeks-6–10 clock warned before it is needed" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Six stories carry the two conditions, and the second is the course's namesake. The sticky-thought engine, child translation: thoughts arrive to everyone, and a child's mind is a PROLIFIC generator; magical, catastrophic, wild; the OCD engine is not the generation but the STICKINESS, one class of thoughts tagged 'unacceptable-dangerous-must-fix', the fix (wash, check, ask, count, pray) removing the discomfort for a minute, which teaches the brain the fix worked, which glues the thought firmer. The outsource department: the child's insight is thinner ('of course I must wash; otherwise I'll get sick') and the parents become the fix's delivery arm ('Amma, tell me again it's clean') each parental answer one more training repetition; this is the accommodation the grid maps and the treatment weans. The urge-loop: a tic is not a random movement but the RELEASE of a building internal itch (the premonitory urge, a tickle in the throat, tension at the neck, pressure behind the eyes) and doing the tic scratches it: seconds of relief, then the rebuild; exquisitely suppressible (assembly, exams) but suppression COSTS attention and builds tension, the held-back tide releasing as the after-school tic-storm; it waxes and wanes over weeks, migrates (old tics retire, new ones debut), and (the prognosis's engine) the loop itself loosens with maturation through the teens. The circuit's double-booking: OCD's 'not-just-right' signal and the tic's urge-loop run through overlapping habit circuitry, the cortico-striato-thalamo-cortical loops; the reason tics and rituals travel in families and in the same child, and the reason the treatment programme is braided, not sequential. The strep window: a small subset of children show explosive onset (overnight OCD, tics, urinary frequency, eating changes, separation panic, academic regression) in the weeks after streptococcal infection, with the hypothesis of immune-mediated basal-ganglia inflammation (sibling of Sydenham's chorea's mechanism); whether this forms a distinct syndrome is genuinely contested, that such presentations are real is not. The urgency asymmetry: the tic arc bends toward improvement (peak 10–12, substantial teen improvement, roughly a third resolving fully) while untreated OCD grows its architecture and recruits the family; the untreated rituals get stronger, the untreated tics usually get quieter, and that difference organises everything about how hard to push.",
    steps: [
      "The sticky-thought engine: generation is universal, STICKINESS is the pathology; the 'unacceptable-dangerous-must-fix' tag, the minute's relief, the learning that the fix worked, the firmer glue.",
      "The outsource department: thin child insight plus parents as the fix's delivery arm; each reassurance one more training repetition; the accommodation grid maps this and the weaning cuts it.",
      "The urge-loop: premonitory urge builds, the tic releases it, seconds of relief, the rebuild; suppressible at attentional cost; the after-school storm is the held-back tide, not naughtiness.",
      "The rhythm architecture: waxing and waning over weeks (stress, excitement, fatigue, illness worsening; absorbed activity and sleep calming), migration of tics over time, and the loop loosening with maturation through the teens.",
      "The circuit's double-booking: the 'not-just-right' error signal and the urge-loop in the same cortico-striato-thalamo-cortical neighbourhood; tics plus rituals plus hyperactivity as one integrated neurodevelopmental picture, treated braided.",
      "The strep window: explosive post-streptococcal onset with the basal-ganglia autoimmune hypothesis; real presentations, contested entity, standard treatment, and no immune-therapy rabbit hole.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "basal-ganglia-striatum", name: "Basal ganglia / striatum (the habit hub)", role: "The hub of the habit-learning circuitry both engines run through: the over-tight error signals of OCD's 'not-just-right' and the tic's urge-loop sharing the same cortico-striato-thalamo-cortical machinery; the reason the two co-travel in families and in one child.", grade: "established" },
    { id: "orbitofrontal-cortex", name: "Orbitofrontal cortex (the error-signal generator)", role: "The cortical half of the loop that flags 'wrong': the not-just-right feeling the compulsions exist to settle; its over-signalling the cognitive model's engine.", grade: "supported" },
    { id: "thalamus", name: "Thalamus (the relay)", role: "The loop's relay station: the striatal gate's output amplified back to cortex; the circuit's completion point the tic and the ritual both travel.", grade: "supported" },
    { id: "supplementary-motor-area", name: "Supplementary motor area (the tic's launchpad)", role: "The motor territory where the premonitory urge converts to movement: the competing response of CBIT built as its deliberate, incompatible rival.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The SSRI tier's chemistry: the sertraline/fluoxetine evidence carried from the adult disorder with the higher-slower paediatric clock; the serotonin story is treatment-derived (the drugs work) rather than mechanism-complete.", grade: "supported", drugConnection: "Sertraline (the POTS member) and fluoxetine have KYP lessons; fluvoxamine the alternative, clomipramine the experienced second-line." },
    { name: "Dopamine", symbol: "DA", role: "The tic-suppression tier's target. The dopamine blockers are the most effective tic-suppressants, which is exactly why they are reserved: the paradox of treating a movement disorder with a movement-causing drug class in a growing child.", grade: "supported", drugConnection: "Risperidone, aripiprazole, haloperidol and pimozide have no KYP drug lessons; the tier is taught here, route never invented." },
    { name: "Noradrenaline", symbol: "NA", role: "The alpha-2 agonist tier's target: clonidine and guanfacine's double duty when tics and ADHD co-travel (over half of Tourette's), the first-line molecule family for exactly that combination.", grade: "supported", drugConnection: "Clonidine and guanfacine have no KYP lessons; availability varies in India: taught here, never invented." },
    { name: "Glutamate", symbol: "Glu", role: "The cortico-striatal signalling candidate behind the habit circuitry's over-tight error signals: the proposed layer under the double-booking, not yet treatment-bearing.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "sticky-thought-pathway",
      name: "The sticky-thought loop (why the ritual teaches the fear)",
      steps: [
        { label: "The thought arrives", detail: "A child's mind generates magical, catastrophic, wild thoughts constantly: generation is universal" },
        { label: "The tag is applied", detail: "One class of thoughts flagged 'unacceptable-dangerous-must-fix': the stickiness, not the content" },
        { label: "The fix runs", detail: "Wash, check, ask, count, pray: discomfort removed for a minute" },
        { label: "The brain learns the fix worked", detail: "Negative reinforcement glues the thought firmer and recruits the family: 'Amma, tell me again it's clean'" },
        { label: "The treatment reverses the arrow", detail: "Cut the reassurance, face the feared-not-washed, let the discomfort fall on its own: the un-fixing is the learning" },
      ],
      clinicalManifestation: "The washer and the eraser: raw hands, the schoolbag re-packed 6–8 times, the paper that tears, the gas question asked fifty times a day.",
      grade: "established",
    },
    {
      id: "urge-loop-pathway",
      name: "The urge-loop (why the tic is not a habit)",
      steps: [
        { label: "The premonitory urge builds", detail: "A tickle in the throat, tension at the neck, pressure behind the eyes: localisable by most children" },
        { label: "The tic executes", detail: "The sniff, blink, jerk or grunt that scratches the itch" },
        { label: "Seconds of relief, then the rebuild", detail: "The loop's rhythm, and the CBIT lever: catch the urge early, deploy the competing response before the tic" },
        { label: "Suppression costs", detail: "Holding the tic through assembly spends attention and builds tension: the after-school storm, the evening explosion after a glare-free day" },
        { label: "Maturation loosens the loop", detail: "Peak severity 10–12, then substantial improvement through the teens: roughly a third of Tourette's resolving fully" },
      ],
      clinicalManifestation: "The boy fine all day at school who 'goes mad on the way home': the held-back tide releasing in the 4 p.m. school bus.",
      grade: "established",
    },
    {
      id: "strep-window-pathway",
      name: "The strep window (the PANDAS hypothesis, honestly held)",
      steps: [
        { label: "Streptococcal infection precedes", detail: "The timeline link the family often reports first" },
        { label: "The immune response is drafted", detail: "The molecular-mimicry hypothesis: antibodies aimed at the germ turning on basal-ganglia tissue. Sydenham's chorea's sibling mechanism" },
        { label: "Explosive onset", detail: "Overnight OCD, tics, urinary frequency, eating changes, separation panic, academic regression: a relapsing-remitting course tied to new infections in research settings" },
        { label: "The honest fork", detail: "Distinct syndrome: contested, guidelines differ; real presentation: not contested; evaluate (strep testing, Sydenham's exclusion), treat with the standard OCD/tic programme, keep the immune therapies at research tier" },
      ],
      clinicalManifestation: "The child who was well on Tuesday and explosively ill by the weekend after a sore throat: the presentation that tempts both dismissal and the immune-therapy rabbit hole.",
      grade: "uncertain",
    },
  ],
  timeline: [
    { id: "ocd-door", time: "The pre-pubertal years", title: "OCD's child door opens", description: "Boys predominate in the pre-pubertal onset, often with tics in tow; the themes wear child costume (magical contagion, exactness, asking-forever) and the insight is thinner than the adolescent's or the adult's.", phase: "onset" },
    { id: "accommodation-era", time: "The following months to years", title: "The family is woven in", description: "Reassurance answered, shoes washed, schoolbag packed, the house restructured around trigger-avoidance: accommodation in the severe majority, each act a training repetition; untreated, the architecture grows.", phase: "duration" },
    { id: "tic-onset", time: "Ages 4–6", title: "The first tics arrive", description: "Eye-blinks dismissed as 'TV eyes', sniffs read as allergies: the migratory repertoire beginning; the premonitory urge already present and already localisable if anyone asks.", phase: "onset" },
    { id: "tic-peak", time: "Ages 10–12", title: "Peak severity", description: "The loudest era: comorbidity stacking (ADHD over half, OCD a third to a half), the school crisis years, the concealment apparatus at its costliest, and the beginning of the loop's own loosening.", phase: "peak" },
    { id: "treatment-arc", time: "Weeks 1–14 of the programme", title: "The treatment arc", description: "The family module first (the accommodation weaning that doubles downstream effect), the ERP ladder in 8–14 sessions with parent modules, the SSRI clock running its 6–10 weeks: the week-3 'nothing is happening' survived because the clock was warned.", phase: "recovery" },
    { id: "teen-improvement", time: "The teens", title: "The loop loosens", description: "Substantial improvement by late teens in a majority: roughly a third of Tourette's resolving fully, most of the remainder meaningfully improving; the treated OCD held in remission or managed; the self-esteem protected through school the actual prognosis.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Paediatric OCD: roughly 0.5–2% of children and adolescents: about half of all OCD begins in childhood or adolescence, making paediatric-onset a large share of the lifetime picture rather than the exception. Boys predominate in the pre-pubertal onset, often with tics in tow; the sex ratio evens by adolescence. Insight is poorer in children: the DSM specifier runs from good to absent, and 'absent/delusional' is more common in the young. Tics: transient tics are almost ordinary; up to a quarter of children show a brief tic era at some point; persistent tic disorders run ~1–2%; Tourette's itself roughly 0.3–1%, boys 3–4×. Tic peak severity sits at 10–12 years with substantial improvement by late teens in a majority: roughly a third resolve fully, most of the remainder meaningfully improving. The Tourette's comorbidity lattice: ADHD in over half, OCD in a third to a half, anxiety, and rage attacks as a common secondary layer.",
    indianPrevalence: "No dedicated national tic/OCD child survey; clinic experience maps the global patterns wearing the Indian costume: tics brought as 'this sound he makes; we have told him a hundred times' (the punishment presentation), OCD arriving through temples (years spent interpreting the washing as shuddhi-gone-wrong) and through school (the erasing-until-paper-tears presentation the teacher sends as 'careless handwriting'), and paediatric OPD reflux from the throat-clear's ENT carousel.",
    lifetimeRisk: "The combined OCD-plus-tic child is common, and the treatment programme addresses both, one integrated neurodevelopmental picture, braided treatment.",
    genderRatio: "OCD: boys predominate pre-pubertally, evening by adolescence; Tourette's: boys 3–4×. Adolescent girls' scrupulosity and purity-contamination presentations ride the local modesty-purity matrix: handled with cultural care, treated as the same OCD engine.",
    ageOfOnset: "Tic onset typically 4–6 years, prepubertal; OCD's pre-pubertal door in boys, adolescent door evening the sex ratio.",
    indianNotes: "CBIT-trained professionals are scarce; paediatric OCD-ERP is delivered mostly in metro child-guidance clinics; parents default to either punishing rituals (read as stubbornness) or performing them (read as obedience): the clinical task is converting both into the co-therapist role.",
  },
  etiology: [
    { category: "genetic", factor: "The family fingerprint", details: "OCD heritability ~40–50% in paediatric-onset (higher than adult-onset); the tic-OCD linkage: the same cortico-basal ganglia circuit family, with paediatric OCD plus tics showing the stronger familial loading. Tourette's strongly familial: the tic diathesis inherited broadly, one family's 'nervous coughs' across three generations; the question that opens the wiser conversation with parents." },
    { category: "biological", factor: "The shared habit circuitry", details: "The cortico-striato-thalamo-cortical loops: habit-learning circuitry whose over-tight error signals generate OCD's 'not-just-right' feeling and whose urge-loop generates the tic; the reason the two conditions co-travel and the treatment programme is braided." },
    { category: "biological", factor: "The PANDAS/PANS layer", details: "Abrupt dramatic symptom explosion (OCD plus tics plus urinary frequency, eating change and regression) temporally linked to streptococcal infection, the basal-ganglia autoimmune hypothesis: genuinely observed in clinics, genuinely contested as a distinct entity; the honest position is taught, not a verdict." },
    { category: "psychological", factor: "The accommodation engine", details: "The child-specific MAINTAINER: parents' reassurance, ritual-assistance and trigger-removal feel like love, work like oxygen on the fire; CBT evidence shows accommodation reduction is a predictor of treatment success." },
    { category: "psychological", factor: "The temperament soil", details: "Anxiety temperament (behavioural inhibition) as the fertile ground; attachment to rules and exactness: the 'just right' temperament profile; anxious modelling, the family's own checking-and-washing culture amplified in a susceptible child." },
    { category: "social", factor: "The Indian amplifiers", details: "The religious-family frame (sometimes protective acceptance, sometimes the exorcism route); punitive interpretation of tics and rituals as defiance; the high-academic exactness culture: the erasing-until-perfect child praised for the first two years, referred in the third; adolescent girls' scrupulosity riding the modesty-purity matrix." },
  ],
  symptomClusters: [
    {
      category: "1. Childhood OCD: the child costumes",
      symptoms: ["Contamination/washing (the commonest child theme): 'dirt', germs, sticky things, public toilets, colours or numbers designated dirty; elaborate hand-washing, doorknob avoidance, school-toilet refusal, skin raw from washing", "Magical/superstitious rituals: stepping patterns, lucky actions, 'must touch the door twice or something bad happens to Papa'; the thought-action fusion era of the illness", "Checking and doubting: homework checking-forever, schoolbag re-packing loops, the erasing-until-perfect handwriting (the paper tears), reassurance questions on loop ('is the gas off? is the door locked? will you die?')", "Exactness/symmetry/order: shoes aligned, pencils by size, distress at crooked or mixed things; the 'just right' family", "Religious/moral themes (scrupulosity): prayer loops, confession repetition, purity and washing fears; the Indian presentation that gets mis-routed to the religious frame", "Taboo intrusions (the adolescent secret): violent and sexual intrusive images, feared identity intrusions; the most shameful, most hidden, most asking-worthy layer", "The functional cost: 3-hour homework, school refusal from toilet-fear, raw hands, the family hostage to ritual rules, the child crying 'I know it's silly but I can't stop'"],
    },
    {
      category: "2. Family accommodation: the hidden symptom set",
      symptoms: ["Reassurance provided hourly, the same question answered forty times", "The child's 'contaminated' items washed, the special soap bought, the schoolbag taken over", "The house restructured around trigger-avoidance; the father's delivery route for the 'correct' lunchbox", "Present in the severe majority, and the treatment's first-order target: map it, wean it kindly, script the non-answer"],
    },
    {
      category: "3. Tic disorders: the repertoire and its rhythm",
      symptoms: ["Motor tics: eye-blinking, facial grimace, nose-wrinkle, head-jerk, shoulder-jerk, sniff, throat-clear, grunt; complex: jumping, touching, twirling, echopraxia", "Vocal tics: sounds (sniff, hiss, click, animal noises) and words; coprolalia the cinematic stereotype occurring in only a ~10–15% minority", "The premonitory urge: localisable by most children ('here, in my throat, before it comes'); the diagnostic gold and CBIT's lever", "The rhythm: waxing and waning over weeks, worse with stress, excitement, fatigue and illness, better in absorbed activity and sleep; after-school release storms; migration: old tics retire, new ones debut", "The gates: transient (under 1 year), persistent motor or vocal (1+ year), Tourette's (multiple motor + at least one vocal, 1+ year, onset typically 4–6)"],
    },
    {
      category: "4. The comorbid layer that changes the plan",
      symptoms: ["ADHD in over half of Tourette's: the school-failure engine and the marks' real decider", "OCD in a third to a half: the rituals layer, often the erasing-exactness thread", "Anxiety disorders; the rage-attacks and sensory-modulation layer: the explosive-frustration presentation parents fear is 'personality'", "Secondary depression under severe OCD: the mood audit at every review"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5 / ICD-11 (paraphrased)",
      code: "OCD in the young",
      criteria: [
        "Obsessions (intrusive, unwanted, distress-generating) and/or compulsions (repetitive rule-driven acts the child feels driven to perform).",
        "Time-consuming (more than 1 hour/day is the guideline benchmark) or functionally impairing.",
        "The insight specifier runs good / fair / poor / absent: frequently poorer in young children; DSM-5 dropped the earlier 'recognises the irrational' requirement, a child-friendly correction.",
      ],
      duration: "No fixed duration gate; the time-consuming/impairment benchmark carries the diagnosis.",
      indianNote: "The themes decide the door the family enters through: the temple route for scrupulosity, the dermatologist for the raw hands, the handwriting referral for the erasing child; the ritual inventory finds them all.",
    },
    {
      system: "DSM-5 / ICD-11 (paraphrased)",
      code: "The tic-spectrum gates",
      criteria: [
        "Transient tic disorder: tics present under 1 year; the ordinary-child era up to a quarter of children pass through.",
        "Persistent (chronic) motor or vocal tic disorder: motor OR vocal tics, 1+ year.",
        "Tourette's syndrome: multiple motor tics plus at least one vocal tic, 1+ year (not necessarily concurrent), onset in childhood; typically 4–6 years, prepubertal.",
        "The waxing-waning pattern is diagnostic texture, not a criterion.",
      ],
      duration: "The 1-year gate is the discriminator between the transient era and the persistent disorders.",
      indianNote: "The onset history is the diagnosis in the waiting room: eye-blinks at six dismissed as 'TV eyes', the migratory repertoire, the exam-term explosions. Ask the migration question before anything else.",
    },
    {
      system: "The assessment structure",
      code: "The seven-step audit",
      criteria: [
        "The secret-themes interview: alone with the child, normalised first; 'everybody's brain makes weird pictures; mine does too; tell me about yours'; taboo intrusions surface only under permission.",
        "The ritual inventory with severity mapping and the accommodation grid: which compulsions, how long daily, what triggers, and what the family does for each.",
        "The tic examination: observe (the parent's waiting-room phone video is gold), elicit the premonitory urge ('show me where you feel it before the sniff comes'), map the waxing-waning and after-school pattern.",
        "The comorbidity sweep: ADHD (the school picture), anxiety, depression, the rage-attack layer, learning disorders (the erasing child gets a writing-speed check).",
        "The strep question where onset was explosive: symptom timeline against infection timeline, urinary/eating/regression flags, throat culture or ASO titre where acute, with the honest framing of what the tests can and cannot settle.",
        "The mimics screen: Sydenham's chorea in the sudden movement-disorder child (cardiac examination, ESR/ASO, the paediatric cardiology linkage. India's RF-positive reality), substance, medication-induced movement, myoclonus and the neurological exam (tics are suggestible, suppressible, preceded by urge; none of the mimics are all three).",
        "Rating scales named: CY-BOCS for OCD severity, YGTSS for tics; the tracking pair.",
      ],
      duration: "The assessment is typically two visits: the family-and-child first pass, the alone-with-child second pass where the taboo layer surfaces.",
      indianNote: "The one-question diagnosis for the throat-clear: 'does he feel something in the throat BEFORE the sound?': the premonitory-urge question ends the ENT carousel in one visit.",
    },
  ],
  severityScales: [
    {
      name: "CY-BOCS",
      fullName: "Children's Yale-Brown Obsessive Compulsive Scale",
      measures: "Paediatric OCD symptom severity: the obsession and compulsion dimensions scored for the tracking the treatment arc runs on.",
      ranges: [],
      indianNote: "The severity band decides the tier: CBT alone for the milder cases, the combined CBT-plus-sertraline tier for moderate-severe (the POTS logic).",
    },
    {
      name: "YGTSS",
      fullName: "Yale Global Tic Severity Scale",
      measures: "Tic severity across motor, vocal, frequency, intensity and complexity dimensions, with impairment: the tic programme's tracking instrument.",
      ranges: [],
      indianNote: "Named and used; the clinical decision the YGTSS informs is not whether to treat but whether the tic itself costs enough for medication to enter.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Normal childhood magical rituals (games, bedtime scripts)", distinguishingFeatures: "Enjoyed, flexible, not distressing, does not balloon: disorder means suffering plus time plus spread.", keyDifferentiator: "The child LIKES the bedtime script; the OCD child is hostage to it and says so when asked alone." },
    { condition: "Anxiety's reassurance-seeking (separation, GAD)", distinguishingFeatures: "The worry content is feared events, not felt-wrongness; no ritual grammar; the alarm's engine.", keyDifferentiator: "Anxiety asks 'will you die?' and is comforted by the answer; OCD asks 'is it clean?' and the answer never holds: the grammar, not the question, separates." },
    { condition: "Autism's rigid routines and sensory behaviours", distinguishingFeatures: "Social-reciprocity history and sensory profile; the routine is PREFERRED, not feared-wrong; the insight layer differs.", keyDifferentiator: "The autistic child's line of cars is loved; the OCD child's line of shoes is demanded by dread, and the social history runs behind both." },
    { condition: "Transient ordinary tics", distinguishingFeatures: "Duration under 1 year; up to a quarter of children pass through a tic era.", keyDifferentiator: "Reassurance and watchful waiting suffice: the duration gate, not the appearance, decides." },
    { condition: "Sydenham's chorea", distinguishingFeatures: "Post-streptococcal, flowing unpredictable movements WITHOUT premonitory urge or suppressibility; cardiac examination mandatory.", keyDifferentiator: "The Indian reality check: rheumatic chorea is not rare here; the cardiac examination and streptococcal workup before the tic-disorder label; the diagnostic cost of missing it is the heart." },
    { condition: "Myoclonus and seizure-adjacent movement", distinguishingFeatures: "No urge, no suppressibility, no suggestibility; the neurological exam and EEG referral.", keyDifferentiator: "The USS triad's absence: tics are all three, mimics never are." },
    { condition: "Medication-induced movement (stimulant/antipsychotic era)", distinguishingFeatures: "The prescription timeline precedes; re-emerges on re-challenge.", keyDifferentiator: "The chart read before the movement is labelled: iatrogenic tics and withdrawal-emergent dyskinesias travel with the prescription." },
    { condition: "ADHD fidgets", distinguishingFeatures: "Restlessness without the urge-release loop or the waxing architecture.", keyDifferentiator: "The fidgeter cannot localise a pre-tickle; the tic child draws you a map of it." },
    { condition: "Psychotic rituals (schizophrenia-spectrum)", distinguishingFeatures: "Fixed delusional logic, no 'silly' admittance, other psychotic phenomena; rare in children.", keyDifferentiator: "Insight-absent OCD can mimic: time and treatment response clarify; the ritual's grammar (rule-driven, anxiety-settling) points to OCD even when insight is gone." },
  ],
  management: [
    { category: "psychotherapy", name: "Step zero: psychoeducation + family-accommodation reduction", description: "Name the OCD ('the Worry Witch', 'Mr Bossy', the child externalises and fights a character), explain the sticky-loop with the child's own example, and retrain the parents: reassurance weaned (the scripted answer: 'that's the OCD asking, I won't answer it, but I'll sit with you while it yells'), ritual-assistance withdrawn gradually and kindly, triggers not engineered away. The accommodation grid (who washes, who answers, who checks) is drawn at the first family session and retired rung by rung.", whenToUse: "Every case, first: the step-zero that doubles all downstream effect.", indianContext: "The Indian default is either punishing rituals (read as stubbornness) or performing them (read as obedience). The conversion of both into the co-therapist role is the clinic's single highest-yield family intervention; budget the family sessions FIRST, the cheapest and highest-leverage hours." },
    { category: "psychotherapy", name: "ERP, child edition (the first-line for all severities)", description: "The ladder built WITH the child (contamination: touch the doorknob with one finger, hold, no wash, till the wave falls (the full palm) the 30-minute no-wash rule); ritual-blocking as the ladder's partner (the 'homework with no erasing' contract); the reward economy for exposure miles (brave-points charts, the child-version of exposure's motivational engine); 8–14 sessions with parent modules.", whenToUse: "First-line at every severity; the POTS tier: CBT alone suffices for milder cases and rivals medication.", indianContext: "Metro child-guidance clinics carry therapist-led ERP; the manualised parent-led variants (evidence-dose honestly thinner but real) plus fortnightly professional supervision are the district-town compromise." },
    { category: "pharmacotherapy", name: "The SSRI tier for moderate-severe OCD", description: "Sertraline (the POTS member) and fluoxetine carry the paediatric OCD evidence; the adult dosing logic transfers. OCD needs HIGHER, SLOWER titration than depression (often 6–10 weeks to effect, the doses run higher), fluvoxamine the alternative. Start low, review weekly for activation, expect the slow clock and warn the family about it. Duration post-response: 6–12 months with ERP throughout. Clomipramine the experienced second-line (ECG, the anticholinergic load).", whenToUse: "The moderate-severe tier, and the combination logic: CBT plus sertraline outruns either alone (POTS).", indianContext: "Sertraline/fluoxetine at approx ₹50–150/month (2026): affordable everywhere; the barrier is the week-3 abandonment ('nothing is happening'). The clock warned at the start is the adherence programme." },
    { category: "psychotherapy", name: "The PANDAS/PANS honest position", description: "Sudden-onset cases get the strep evaluation and the differential closed (Sydenham's excluded with the cardiac examination), and STANDARD OCD/tic treatment begun immediately, not delayed by the immune debate. Tonsillectomy, antibiotic prophylaxis and immune therapies are research-tier decisions, not clinic routines: guidelines caution against them outside protocols; the family's strep observation is validated without the autoimmune-treatment rabbit hole.", whenToUse: "Every explosive-onset presentation: the position is the same whether or not the entity is eventually settled.", indianContext: "The faith-healer circuit and the internet-sourced immune-therapy requests both get the same respectful redirect: the observation honoured, the mechanism explained, the standard treatment started today." },
    { category: "psychotherapy", name: "Tics tier 1: psychoeducation + watchful waiting", description: "The myth-killing package (not naughtiness, not caused by parenting, coprolalia a minority phenomenon, most improve by late teens); the school-briefing letter (ignore-not-scold, no 'stop it' demands, suppression demands cost classroom attention); the stress-architecture audit mapping the waxing-waning; scheduled review. For mild tics this IS the treatment and it completes.", whenToUse: "The genuine first-line for most children with tics.", indianContext: "The commonest Indian tic-management technique is the suppression demand, and it is exactly wrong: it spends attention (marks fall), raises tension (after-school storms) and teaches shame; the one family meeting that converts the household to the ignore-protocol is the highest-yield intervention in the note." },
    { category: "psychotherapy", name: "CBIT / habit-reversal training", description: "Awareness training: the child learns to catch the premonitory urge's exact signature, the lever; competing-response training: a 1-minute incompatible action deployed at the urge (slow mouth-breathing against the sniff, eyes-open-soft against the blink); relaxation and functional analysis of high-risk settings; 8–10 sessions with parent-and-teacher modules. Evidence strong in adults and children alike.", whenToUse: "The active-therapy tier when the tic costs but is not yet severe enough for medication.", indianContext: "CBIT-trained therapists are rare in India; the teachable core (awareness + competing response) can be taught to parent-teacher triads in clinic with review (imperfectly but honestly) and still outperforms scolding and sedation." },
    { category: "pharmacotherapy", name: "Tic medication (when the tic itself costs)", description: "Alpha-2 agonists (clonidine, guanfacine, availability varies in India) the first-line choice ESPECIALLY when ADHD co-travels (the double-duty effect), with the sedation/hypotension titration cautions and weeks-to-effect. Dopamine blockers (risperidone, aripiprazole, haloperidol, pimozide-the-classic) the most effective tic-suppressants: reserved for severe, function-destroying or socially-burnishing tics, lowest-dose and time-limited with review, because the side-effect ledger in growing children is real (weight, sedation, prolactin, drug-induced movement risk, the paradox of treating a movement disorder with a movement-causing class). Botulinum toxin for single severe vocal or focal tics; DBS is adult-severe-refractory territory, essentially never paediatric routine.", whenToUse: "When the tic socially, physically or scholastically costs, and the stimulant question is settled first: stimulants do NOT generally worsen tics at the population level; the old dogma is dead, and modern evidence and consensus allow stimulant treatment in the ADHD-plus-tics child with monitoring.", indianContext: "Clonidine cheap; aripiprazole approx ₹150–600/month (2026); the tic-ADHD trap stated explicitly to families: untreated ADHD costs the school trajectory more than the tics do." },
    { category: "lifestyle", name: "School liaison and the comorbidity braiding", description: "The teacher's letter with three instructions (ignore the tics, seat where least disruptive, exam-time awareness (suppression is fatiguing: extra time or reduced written load where the writing tics cost)) plus the anti-bullying stance (the mimicking classmate is a class-discipline matter, not a therapy matter). The braiding: the ADHD gets its full treatment (the school trajectory depends on it more than on the tics), the OCD gets ERP plus or minus SSRI, the rage-attacks get the behavioural-regulation module, and the family gets the long-horizon framing: the condition's arc is improvement; the treatment's job is to protect the school years and the self-esteem on the way through.", whenToUse: "From diagnosis, reviewed at every visit: the quiet half of the whole note.", indianContext: "Schools respond well to written medical instructions; the water-bottle permission that formalises the concealment cost is free; the marriage-market question from parents of an 8-year-old gets the honest prognosis. The predictor of adult social outcome is not the tic count but the self-esteem kept intact through school, which is what the ignore-protocol and the anti-bullying stance are FOR." },
  ],
  safety: {
    redFlags: [
      "Explosive overnight onset. OCD, tics, urinary frequency, eating changes, separation panic or academic regression in the weeks after a sore throat: the strep evaluation (throat culture/ASO where acute) and the Sydenham's exclusion before any label",
      "The sudden movement-disorder child in India: cardiac examination, ESR/ASO and the paediatric-cardiology linkage BEFORE the tic-disorder label; rheumatic chorea is not rare here, and the diagnostic cost of missing it is the heart",
      "The school's ultimatum or expulsion threat over the sounds: the written medical letter intervenes before the school acts. The ultimatum is a clinical emergency of the social kind",
      "Severe functional cost signals: school refusal from toilet-fear, 3-hour homework, hands raw from washing, lunch stopped; the illness consuming the childhood while the family answers its questions",
      "The concealment apparatus: water-runs from class, assembly tears, evening storms; the attention budget being spent on silence; the marks falling while the tic gets blamed",
      "Secondary depression emerging under severe OCD (the mood audit at every review) and the shame of the undisclosed taboo layer: the most hidden, most asking-worthy presentation in the illness",
    ],
    urgentGuidance:
      "The order of operations: (1) explosive post-streptococcal onset; strep testing, Sydenham's exclusion with the cardiac examination, and standard OCD/tic treatment begun immediately (immune therapies stay research-tier); (2) the school letter sent before the ultimatum executes: ignore, seat, exam-time awareness, the anti-bullying instruction; (3) the accommodation grid drawn at the first family contact and the scripted non-answer rehearsed in the room; (4) the SSRI clock (weeks 6–10) warned BEFORE the first tablet: the week-3 abandonment is pre-empted, not rescued; (5) the ADHD comorbidity treated fully (the marks depend on it more than on the tics) with the stimulant dogma dead but monitoring live; (6) the alone-with-child interview whenever shame, hidden intrusions or an eating change appear: permission before disclosure, always.",
  },
  drugLinks: [
    {
      name: "Sertraline",
      slug: "sertraline",
      role: "The POTS member: the moderate-severe SSRI tier",
      rationale: "The combined CBT-plus-sertraline tier outruns either alone for moderate-severe paediatric OCD (the POTS logic); the higher-slower OCD dosing with the weeks-6–10 clock warned at the start; weekly early review for activation; 6–12 months post-response with ERP running throughout.",
      evidenceLevel: "guideline",
      clinicalDisclaimer: "The SSRI is the tier's member, not the treatment: the family module and the ERP ladder carry the programme; the tablet rides with them.",
    },
    {
      name: "Fluoxetine",
      slug: "fluoxetine",
      role: "The co-evidence carrier for paediatric OCD",
      rationale: "Sertraline and fluoxetine are the two SSRIs carrying the paediatric OCD evidence in the note's tier; the same higher-slower logic, the same slow-clock warning, the same activation review in the young.",
      evidenceLevel: "guideline",
      clinicalDisclaimer: "Dose logic and full pharmacology live with the OCD drug lesson; the child-specific clock and the week-3 abandonment trap are taught here.",
    },
    {
      name: "Fluvoxamine",
      slug: "fluvoxamine",
      role: "The alternative SSRI of the tier",
      rationale: "The note's named alternative where sertraline or fluoxetine does not fit; same class logic, same higher-slower titration discipline, same slow clock to explain to the family.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "An alternative within the tier, not an escalation: non-response at the OCD dose-band after the full clock is what moves the tier up.",
    },
    {
      name: "Clomipramine",
      slug: "clomipramine",
      role: "The experienced second-line",
      rationale: "Where the SSRI tier has failed or cannot be used: the TCA with the OCD pedigree, and the cautions the note assigns it (the ECG, the anticholinergic load) handled by hands that have used it before; full pharmacology in the OCD course.",
      evidenceLevel: "guideline",
      clinicalDisclaimer: "Second-line in experienced hands only: the ECG and the anticholinergic ledger are the gate; the child-specific monitoring is taught here.",
    },
  ],
  contentGaps: [
    "The tic pharmacotherapy tier: clonidine and guanfacine (the alpha-2 agonists, first-line especially with the ADHD double duty), risperidone, aripiprazole, haloperidol and pimozide (the reserved dopamine blockers), and botulinum toxin for single severe focal tics; has no KYP drug lessons; the tier, its order and its monitoring ledger are taught here, the route never invented.",
    "Atomoxetine (the non-stimulant that treated the Tourette's-plus-ADHD child in the course's second case, with the family's stimulant fear respected) has no KYP lesson; its logic is taught in the ADHD course and here, not linked as if the route existed.",
    "The stimulant tier for the tics-plus-ADHD child (the dead dogma the modern consensus retired): methylphenidate and its family have no KYP drug lessons; the safety update is taught in the ADHD course and restated here.",
    "The PANDAS immune-therapy tier (plasmapheresis, IVIG, antibiotic prophylaxis) is recorded as a documented refusal, not a route: research-tier interventions the guidelines caution against outside protocols; no KYP lesson exists or is implied.",
    "The delivery tier the India layer depends on (CBIT therapist training, child-guidance clinic directories, school-counsellor structures) has no KYP service pages; the parent-teacher-triad workaround is taught in indianPractice instead.",
  ],
  patientGuide: {
    whatIsIt:
      "Two conditions, both very treatable. OCD in a child is a sticky-thought machine: unwanted thoughts (about dirt, or bad luck, or things feeling 'not just right', or frightening pictures the child is too ashamed to mention) that the child knows are silly but cannot drop, and rituals (washing, checking, asking, counting, praying) done to settle the discomfort for a minute. The trouble with the minute: the ritual teaches the brain it worked, and the thought sticks harder. Tics are different: a building feeling (a tickle, a tension, a pressure) that a movement or a sound releases; blinks, sniffs, throat-clears, jerks. Tics can be held in for a while (assembly, exams) but holding them costs attention and builds tension that bursts out later. The after-school storm is the held-back tide, not naughtiness.",
    whatCausesIt:
      "A neurodevelopmental wiring pattern with a strong family fingerprint: ask the elder generation how many 'nervous coughs' run in the family. Not caused by parenting, not by a ghost, not by a dosha, not by scolding; punishing it works like punishing a stammer: it adds shame to neurology. A small subset of children become suddenly, dramatically ill in the weeks after a streptococcal sore throat (the PANDAS question): doctors evaluate that properly, treat with the standard programme, and the exotic immune treatments remain research-tier, not clinic routine.",
    symptoms:
      "OCD in children wears costumes: fear of 'dirt' with raw hands from washing; magical rules ('if my shoes touch the bathroom floor, something bad happens to Papa'); checking loops and the erasing-until-perfect homework that tears the page; prayer loops and purity fears; and (in adolescents especially) frightening intrusive pictures kept secret out of shame. The family layer is its own symptom: answering the same question forty times, washing the child's items, packing the schoolbag. The accommodation that feels like love and feeds the machine. Tics: blinking, sniffing, throat-clearing, grunting, jerking; worse with stress, excitement and fatigue, better in absorbed activity and sleep, changing from one movement to another over the months, and for most children improving substantially by the late teens.",
    treatment:
      "OCD: the family is treated first; the scripted answer replaces the reassurance ('that's the OCD asking; I won't answer it, but I'll sit with you while it shouts'), and the washing-and-packing the parents did is retired kindly, rung by rung. Then the exposure ladder built WITH the child: touch the feared thing, hold, don't wash, let the wave fall; brave-points charted and earned. Eight to fourteen sessions with parent modules. Moderate-severe cases add the medicine: sertraline or fluoxetine, running higher and slower than in depression; six to ten weeks to work, so the 'nothing is happening' week is survived because it was warned about. Tics: understanding, a school letter and time for most children; habit-reversal training (CBIT) when the tic costs: the child learns to catch the building feeling and do a one-minute competing action instead. Medicines only when the tic itself costs, and then the gentler class first.",
    selfHelp: [
      "The scripted non-answer, written on the fridge: 'I can see the OCD is asking you again. I won't answer it, because that feeds it, but I will sit here with you while it shouts.'",
      "The brave-points chart: exposure miles earned and celebrated; the cricket-star version a retrained father can run as well as anyone.",
      "The ignore-protocol for tics at home: no 'stop it', no glare; the suppression spends attention the marks need and buys the evening storm.",
      "The tic-map chart: weeks against severity, exam terms marked; turns anxiety into data, and converts the family's vigilance into the treatment's instrument.",
      "The school letter with three instructions: ignore the tic, seat where least disruptive, exam-time awareness; plus the anti-bullying instruction the class teacher enforces.",
      "The clock calendar for the medicine: weeks 1–10 marked on the wall, week 3 labelled 'the week nothing seems to happen; expected'.",
    ],
    whenToSeekHelp: [
      "Sudden dramatic onset: overnight rituals or movements plus new urinary frequency, eating changes or regression after a sore throat: same-week evaluation",
      "A sudden movement in any child that lacks the build-up-and-release pattern, especially after a sore throat or with any fever and joint pains: the heart needs checking before the tic label sticks",
      "The school's ultimatum, exclusion threat or persistent mimicking by classmates: the written medical letter intervenes",
      "Hands raw, meals skipped at school, three-hour homework, school refusal over toilets: the illness is consuming the childhood",
      "Signs of sinking mood (tearfulness, withdrawal, statements of worthlessness ('I must be evil')) the shame and depression layers treated, not waited out",
      "The concealment pattern (leaving class repeatedly, tears at assembly, evening explosions) the suppression budget overdrawn",
    ],
    indianResources: [
      "The district child-guidance clinic and the DMHP psychiatric tier: the ERP/CBIT delivery channel where it exists",
      "Tele-MANAS 14416 (24×7, free), for the family's distress, the school crisis and the accompaniment while the ladder climbs",
      "Sertraline and fluoxetine through every channel including Jan Aushadhi: the approx ₹50–150/month tier that no family must ration",
      "The school-letter template and the scripted non-answer card: ask the treating team for the written versions at the next visit",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific paediatric OCD or tic-disorder pathway exists; practice follows the DSM-5/ICD-11 constructs with the POTS-tier and CBIT evidence ladders, delivered through the metro child-guidance clinics, the DMHP psychiatric tier and (for most of the country) the trained parent-teacher triad.",
    systemContext: "The presentation routes decide the year lost before diagnosis: tics arrive as 'this sound he makes; we have told him a hundred times' (the punishment presentation), OCD arrives through temples (the washing pre-interpreted as shuddhi-gone-wrong), through school (the erasing child sent for careless handwriting) and through dermatology (the raw hands biopsied), and the throat-clear tours the ENT carousel for months as allergies and 'tonsils'. The premonitory-urge question ends the carousel in one visit; the ritual inventory ends the others.",
    programmeContext: "CBIT-trained professionals are scarce; paediatric OCD-ERP is delivered mostly in metro child-guidance clinics. The district-town compromise: the manualised parent-led ERP variants (evidence-dose honestly thinner but real) plus fortnightly professional supervision; the CBIT teachable core (awareness + competing response) trained into parent-teacher triads with clinic review; the school letter as the free universal intervention.",
    costConsiderations: "India note (approx 2026): metro child-guidance/child-psychology CBT-CBIT ₹800–2,500/session; sertraline/fluoxetine ₹50–150/month; clonidine cheap; aripiprazole ₹150–600/month; the neurology referral for the atypical-movement suspicion (the Sydenham's reality) before committing to the tic label. The family sessions are the cheapest and highest-leverage hours in the plan: budget them first.",
    culturalConsiderations: "The religious-frame family: full respect for the faith, precise separation of the mechanism; 'your prayers are devotion; THIS loop is an illness that uses prayer as its grammar; we treat the loop, not the devotion'. The frame that keeps the family engaged rather than offended, and the one that restores peaceful worship when the loop attacks purity itself. The dosha/exorcism route: redirect with respect ('the rituals you noticed are real, the mechanism is this, let us treat it the medical way and keep your faith practices for faith purposes'). The punitive household: the suppression demand is exactly wrong and costs marks, tension and shame. The high-academic exactness culture: the erasing child praised for two years then referred in the third. The marriage-market question from parents of an 8-year-old with Tourette's: answered with the honest prognosis, most improve substantially by the late teens, and the predictor of adult social outcome is the self-esteem kept intact through school.",
    patientCounselling: [
      "The devotion-versus-loop script: 'Her devotion is chosen, flexible and peaceful; this loop is intrusive, rigid, distressing and growing. We treat the loop; the faith stays exactly as your family holds it.'",
      "The suppression-cost script: 'He can hold it, which is different from controlling it. A favour he does you at a price, and the price shows up at homework, marks and meltdowns. Ignoring is the counter-intuitive treatment that works.'",
      "The clock script at the first SSRI prescription: 'Six to ten weeks at the OCD dose; the week when nothing seems to happen is week three, it is expected, and we have already talked about it.'",
      "The prognosis script for the tic family: 'Worst around ten to twelve, then substantial improvement through the teens; roughly a third resolve fully and most of the rest become mild. Our job is the marks, the hands and the self-esteem. Those three are the actual prognosis.'",
      "The household-conversion script: 'The strongest medicine in most Indian homes is retiring the ruler; the punishments withdrawn, the ignore-protocol installed, the vigilance re-deployed as the weekly tic map.'",
    ],
  },
  decisionPath: {
    title: "The child with sticky thoughts or a moving body",
    nodes: [
      {
        id: "start",
        question: "A child arrives with rituals, movements and sounds, or both. First: the door.",
        branches: [
          { label: "Sticky thoughts, rituals, 'silly but stuck'", next: "ocd-gate" },
          { label: "Movements and sounds with a build-up", next: "tic-gate" },
          { label: "Explosive overnight onset after a sore throat", next: "strep-gate" },
          { label: "The school's ultimatum has arrived", next: "school-gate" },
        ],
      },
      {
        id: "strep-gate",
        question: "The strep window: sudden dramatic OCD, tics, urinary frequency, eating change or regression.",
        recommendation: "The PANDAS/PANS honest position: strep evaluation (throat culture/ASO where acute), the differential closed (Sydenham's excluded with the cardiac examination, ESR/ASO, the paediatric-cardiology linkage) and STANDARD OCD/tic treatment begun immediately, not delayed by the immune debate; immune therapies (plasmapheresis, IVIG, antibiotic prophylaxis) remain research-tier; the family's observation validated without the autoimmune-treatment rabbit hole.",
      },
      {
        id: "ocd-gate",
        question: "The sticky-thought picture: the ritual inventory, the child alone, the family mapped.",
        branches: [
          { label: "Mild, functioning, family not yet woven in", next: "erp-first" },
          { label: "Moderate-severe, family answering on loop", next: "family-first" },
          { label: "Shame, hidden pictures, eating or lunch changes", next: "secret-themes" },
        ],
      },
      {
        id: "secret-themes",
        question: "The taboo layer: the most shameful, most hidden, most asking-worthy presentation.",
        recommendation: "The alone-with-child interview, normalised first: 'everybody's brain makes weird pictures; mine does too; tell me about yours': permission before disclosure, always; the intrusive images treated on the ladder like any other obsession, with the sentence that unlocks it: evil people do not fear their thoughts.",
      },
      {
        id: "family-first",
        question: "Moderate-severe with heavy accommodation: the grid is the front half of the treatment.",
        recommendation: "Draw the accommodation grid (who washes, who answers, who checks, who delivers the lunchbox); the scripted non-answer rehearsed in the room; the assistance withdrawn gradually and kindly; the ERP ladder with brave-points in 8–14 sessions with parent modules, and the combined tier: CBT plus sertraline for moderate-severe outruns either alone (the POTS logic), the clock warned at the first prescription, 6–12 months post-response with ERP throughout, clomipramine the experienced second-line if the band fails.",
      },
      {
        id: "erp-first",
        question: "Milder presentation: the ladder is the treatment.",
        recommendation: "Child-adapted ERP: the OCD externalised and named, the ladder built with the child (doorknob with one finger to the 30-minute no-wash rule), ritual-blocking contracts ('homework with no erasing'), the brave-points reward economy; 8–14 sessions with the parent modules; CBT alone suffices at this tier and rivals medication.",
      },
      {
        id: "tic-gate",
        question: "The movement-and-sound picture: the USS check, the migration history, the cost audit.",
        branches: [
          { label: "Mild; the household punishing or demanding silence", next: "educate-path" },
          { label: "Costing socially or scholastically", next: "cbit-path" },
          { label: "Severe, function-destroying", next: "med-path" },
          { label: "ADHD riding along (over half of Tourette's)", next: "adhd-path" },
        ],
      },
      {
        id: "educate-path",
        question: "The punished tic: the household converting.",
        recommendation: "The myth-killing package (not naughtiness, not the parenting, coprolalia a ~10–15% minority, most improve by late teens); the ignore-protocol installed at one family meeting; the school letter with the three instructions; the weekly tic-map chart replacing the punishment log; scheduled review, for mild tics this IS the treatment and it completes.",
      },
      {
        id: "cbit-path",
        question: "The active-therapy tier: the core pair taught and drilled.",
        recommendation: "CBIT: awareness training (catch the premonitory urge at low intensity, the lever) plus competing-response training (the 1-minute incompatible action at the urge: slow mouth-breathing against the sniff), relaxation and functional analysis of high-risk settings; 8–10 sessions with parent-and-teacher modules; in the CBIT-scarce district, the teachable core trained into the parent-teacher triad with clinic review.",
      },
      {
        id: "med-path",
        question: "When the tic itself costs: the molecule order.",
        recommendation: "Alpha-2 agonists first (clonidine; guanfacine where available): the double duty when ADHD co-travels; sedation/hypotension titrated, weeks-to-effect expected. Dopamine blockers (risperidone, aripiprazole, haloperidol, pimozide) reserved for severe, function-destroying tics: lowest dose, time-limited, the growth-era ledger monitored (weight, sedation, prolactin, drug-induced movement). Botulinum toxin for the single severe vocal or focal tic; DBS never paediatric routine.",
      },
      {
        id: "adhd-path",
        question: "The braiding: the comorbidity is the marks.",
        recommendation: "Treat the ADHD fully: the school trajectory depends on it more than on the tics; the stimulant-worsens-tics dogma is dead at the evidence level (modern consensus allows stimulant treatment with monitoring), and atomoxetine where the family's stimulant fear is respected; the OCD thread gets its ERP; the rage-attacks get the behavioural-regulation module; the family gets the long-horizon framing.",
      },
      {
        id: "school-gate",
        question: "The ultimatum: the written intervention before the school acts.",
        recommendation: "The medical letter with three instructions: ignore the tic (no 'stop it' demands; suppression costs classroom attention), seat where least disruptive, exam-time awareness (extra time or reduced written load where writing tics cost): plus the water-bottle permission that retires the concealment cost, and the anti-bullying instruction: the mimicking classmate is a class-discipline matter; the school's protection there is part of the treatment.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Treating the tic as defiance: the scolding-suppression cycle",
      why: "The suppression demand spends the child's attention (the marks fall), raises the tension (the after-school storm), and teaches shame (the self-image scars); the concealment apparatus it manufactures (water-runs, assembly tears) then reads as the disturbance being treated.",
      correction: "The ignore-protocol installed at one family meeting plus the school letter; the vigilance re-deployed as the weekly tic map, not retired: the father's punishment log converted, not defeated.",
    },
    {
      mistake: "The ENT carousel for the persistent throat-clear",
      why: "Vocal tics tour ENTs for months as allergies and 'tonsils': months of antihistamines, a tonsillectomy conversation, and the diagnosis nobody names because nobody asks the one question.",
      correction: "The premonitory-urge question ends the carousel in one visit: 'does he feel something in the throat BEFORE the sound?': a localised build-up released by the sound is the tic signature.",
    },
    {
      mistake: "Missing the taboo layer",
      why: "The violent and sexual intrusive images are the most shameful, most hidden symptoms in the illness; without permission-normalisation there is no disclosure, and the most distressing layer goes untreated: sometimes for years.",
      correction: "The alone-with-child interview with the normalising opener ('everybody's brain makes weird pictures; mine does too') and the unlocking sentence: evil people do not fear their thoughts.",
    },
    {
      mistake: "The reassuring family left answering on loop",
      why: "Each reassurance teaches the question to return: the supply line never cut, the best therapist hired to lose; accommodation in the severe majority is the illness's maintenance contract.",
      correction: "The accommodation grid drawn at the first family session; the scripted non-answer rehearsed in the room ('that's the OCD asking; I won't answer it, but I'll sit with you while it shouts'); the weaning gradual and kind: two weeks of that is harder and better than two years of answering.",
    },
    {
      mistake: "Missing the ADHD under the tics",
      why: "The marks fall and the tic gets blamed. The comorbidity in over half of Tourette's goes untreated while the visible symptom absorbs the treatment, the school's sanctions and the family's punishments.",
      correction: "The comorbidity sweep at diagnosis (the school picture, the daydreaming reports); the ADHD treated fully: it decides the school trajectory more than the tics do; the stimulant dogma dead, monitoring live.",
    },
    {
      mistake: "The week-3 SSRI abandonment",
      why: "OCD dosing runs higher and slower than depression: often 6–10 weeks to effect; the family that was never told the clock stops the medicine exactly when nothing seems to be happening, and the failure is filed as 'medicines don't work for her'.",
      correction: "The clock warned BEFORE the first tablet, week 3 named in advance on the calendar as the expected trough; the review timed to land after it.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The OCD criteria skeleton: obsessions and/or compulsions, the more-than-1-hour/day or impairment gate, the insight specifier (good/fair/poor/absent, frequently poor in children) and DSM-5's dropped 'recognises irrational' requirement.",
        "The tic gates: transient (under 1 year), persistent motor or vocal (1+ year), Tourette's (multiple motor tics + at least one vocal, 1+ year, not necessarily concurrent, onset in childhood, typically 4–6).",
        "The USS triad (Urge, Suppressible, Suggestible) the three findings that exclude every tic mimic.",
        "The comorbidity braid of Tourette's: ADHD in over half, OCD in a third to a half, and which of the two decides the school trajectory.",
        "The PANDAS position in three sentences: the presentations are real; the distinct-syndrome question is contested; the treatment is the standard one, with immune therapies research-tier.",
      ],
      practical: [
        "Elicit the premonitory urge: 'show me where you feel it before the sniff comes'. The localised build-up that makes the movement a tic.",
        "Draw the accommodation grid at the family interview: each ritual listed, each family member's contribution mapped; the hidden symptom set made visible.",
        "Name and use the tracking pair: CY-BOCS for the OCD severity, YGTSS for the tics.",
      ],
      longAnswer: [
        "A 10-year-old with hand-washing rituals and repeated questioning: diagnosis and management (the family module plus the ERP ladder, the evergreen paediatric OCD essay).",
        "Tourette's syndrome: diagnostic criteria and treatment (the gates, the evidence ladder from psychoeducation to CBIT to the molecule order).",
        "PANDAS: the concept and current status (the honest position, real, contested, standard treatment).",
        "Tic disorder versus chorea differentiation (the USS triad and the cardiac examination discipline).",
      ],
    },
    neetPg: {
      highYield: [
        "TRANSIENT TICS: up to ~25% of children pass through one; the reassurance diagnosis; persistent disorders ~1–2%; Tourette's ~0.3–1%, boys 3–4×.",
        "TOURETTE'S PROGNOSIS: peak severity 10–12, substantial teen improvement, roughly a third full resolution; coprolalia a ~10–15% minority: the cinematic myth to kill.",
        "PREMONITORY URGE: present in most, THE CBIT lever, the one-question diagnosis ('do you feel something before it comes?').",
        "POTS-TIER: ERP first-line at all severities; CBT + sertraline combination for the moderate-severe outrunning either alone.",
        "OCD SSRI DOSING: higher and slower than depression; weeks 6–10; the week-3 abandonment trap; 6–12 months post-response with ERP throughout.",
        "ACCOMMODATION REDUCTION: the family module that doubles outcomes; reassurance, ritual assistance and trigger removal weaned first.",
        "STIMULANTS DO NOT TYPICALLY WORSEN TICS: the dead dogma; modern consensus allows stimulant treatment in the ADHD-plus-tics child with monitoring.",
        "ALPHA-2 AGONISTS FIRST-LINE for tics, especially with ADHD (the clonidine double duty); dopamine blockers reserved-severe with the growth-era monitoring ledger.",
        "PANDAS: real-contested-honest-position; standard treatment; immune therapies research-tier.",
        "SYDENHAM'S CHOREA: the Indian sudden-movement differential; flowing, unpredictable, WITHOUT urge or suppressibility; cardiac examination before the tic label.",
      ],
      pyqConcepts: [
        "The Tourette's definition question: the multiple-motor-plus-vocal combination with the 1-year gate (the single most repeated item in this territory).",
        "The premonitory-urge question: the finding that most identifies a movement as a tic.",
        "The POTS combination tier: what the moderate-severe paediatric OCD patient should receive.",
        "The stimulant-in-tics stem: the practice-changing point asked as a true/false or best-answer.",
        "The accommodation-maintainer stem: the family behaviour that most maintains paediatric OCD.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "An 11-year-old Nagpur girl referred for 'hand-eczema and school refusal', the dermatologist's biopsy normal, the mother adding unprompted that she asks fifty times a day whether the gas is off. The inventory (taken alone, after the everyone's-brain-makes-weird-thoughts normalisation) finding contamination fears around 'school dirt', a magical rule binding the shoes and the bathroom floor to Papa's safety, schoolbag re-packing 6–8 times, and a taboo layer disclosed only under permission; the accommodation grid showing the mother washing the shoes daily, the father delivering the 'correct' lunchbox twice weekly, the grandmother's dosha temple route failing; CY-BOCS severe. The reasoning: the family module BEFORE the ladder, the scripted non-answer, the externalised 'Dirt-Witch', the rung-by-rung exposure with brave-points, the school letter, sertraline added at week 4 with the 6–8-week clock pre-warned, and at six months the CY-BOCS halved and the cousin's picture on her phone. The marks live in the sequence: the grid preceded the ladder.",
        "A 10-year-old Kolhapur boy presented on a school ultimatum for sniffing: two years of ruler-to-the-knuckles punishments having manufactured a concealment apparatus (the water-runs eight times a day, the assembly held till tears, the 4 p.m. bus storm the driver reported as madness); the history assembled from onset at six ('TV eyes') through the migratory repertoire to the localisable premonitory urge ('a tickle, like before a sneeze, and if I hold it, it screams'), waxing with exam terms, calming in absorbed cricket; the comorbidity sweep positive for ADHD-inattentive. The reasoning: Tourette's with ADHD, the PANDAS frame closed by the timeline; psychoeducation to all three parties with the ruler ceremonially retired; CBIT's core pair taught (catching the tickle at 2/10, the slow double-breath competing response); the ADHD treated, and the marks recovering within a term on the atomoxetine the family accepted once the stimulant fear was respected and the tics-not-worsened evidence shared. Treating the ADHD helped the school trajectory more than any tic intervention.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Tourette's = multiple motor tics + at least one vocal tic, 1+ year, childhood onset; coprolalia NOT mandatory (~10–15% only).",
        "USS: urge, suppressibility, suggestibility; the tic identity that excludes the mimics.",
        "First-line for most mild tics: psychoeducation + ignore-protocol + watchful review, not medication.",
        "CBIT core pair: awareness training + competing response.",
        "Alpha-2 agonists (clonidine) first-line when tics need medication, especially with ADHD.",
        "Family accommodation (reassurance, ritual assistance, trigger removal) the maintainer and the first-order treatment target in paediatric OCD.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The accommodation grid drawn in the first family session (who washes, who answers, who checks, who delivers) is the make-or-break instrument of paediatric OCD: its weaning doubles the downstream effect, and the parents who were the illness's supply line become its treatment's delivery arm.",
        "The scripted non-answer rehearsed IN THE ROOM, not handed out on paper: 'that's the OCD asking, I won't answer it, but I'll sit with you while it yells'; the sentence that converts a reassurance machine into a co-therapist without a single confrontation.",
        "The alone-with-child interview is a procedural right of the taboo layer: no permission-normalisation, no disclosure, no treatment of the most distressing symptoms. The sentence 'evil people do not fear their thoughts' has unlocked more adolescent OCD than any prescription.",
        "The father's punishment log converted, not defeated: the same vigilance re-deployed as the weekly tic-map; the clinical craft of enlisting the family's existing machinery instead of fighting it.",
        "In the CBIT-scarce district, the teachable core (awareness + competing response) trained into the parent-teacher triad with clinic review outperforms scolding and sedation: the honest delivery economics of Indian child psychiatry.",
        "The sudden-onset movement child in India earns the cardiac examination and streptococcal workup before the tic-disorder label, one paediatric-cardiology linkage in the referral habit covers the Sydenham's discipline.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The girl whose family washed for her",
      presentation: "An 11-year-old sent to dermatology for hand eczema she never had: the fifty-times-a-day gas question hiding in the mother's sentence, and the family running the rituals as an outsource department.",
      initialPresentation: "An 11-year-old Nagpur girl was brought to the child guidance clinic for 'hand-eczema and school refusal' after the dermatologist's biopsy came back normal; the mother added, unprompted, 'and she asks me fifty times a day whether the gas is off'. The first joint interview mapped the surface; the inventory was taken with the child alone after the normalising opener.",
      history: "Contamination fears centred on 'school dirt' (the toilets, a particular classmate's desk); a magical rule: 'if my shoes touch the bathroom floor, Amma must wash them or the house becomes dirty and Papa will have an accident'; checking loops with the schoolbag re-packed 6–8 times; a secret taboo layer disclosed only under permission: intrusive images of hurting her baby cousin ('I must be evil; I sit far from her'), the reason she had stopped eating lunch at school (sitting near others 'spreads the evil'). The accommodation grid: the mother washed the shoes daily, answered the gas question every time and had taken over the schoolbag-packing; the father drove to school twice weekly to deliver the 'correct' lunchbox; the grandmother had identified the illness as a dosha and arranged two temple visits (no change, and the family's trust in that route fading, the engagement entry point). Secondary depression beginning.",
      examination: "Raw, washed hands with a normal dermatology biopsy; CY-BOCS in the severe band; poor insight in the magical layer with good insight in the contamination layer; no tic repertoire; mood low-normal with shame-laden affect when the cousin was mentioned.",
      diagnosis: "Obsessive-compulsive disorder, childhood-onset: severe on CY-BOCS, with mixed insight (poor in the magical layer, good in the contamination layer), heavy family accommodation, and secondary depression beginning.",
      management: "The family module first: the accommodation-withdrawal ladder (the mother's shoe-washing moved from daily to 'the OCD's trick we are starving; shoes stay'), scripted non-answers to the gas question with sitting-near instead of answering, the father's delivery route retired. The externalisation ('the Dirt-Witch') and the child's exposure ladder: the bathroom door handle with the full palm, the 30-minute no-wash rule, one desk closer to the 'contaminated' classmate per rung, and the cousin-proximity ladder with the psychoeducational frame that evil people do not fear their thoughts. The thought-fear was the symptom. Brave-points economy on cricket-star charts her father ran (the retrained rescuer now the coach); ERP over 13 sessions with the school letter (toilet-time and lunch-seat accommodations during the early rungs, withdrawn as she climbed). Sertraline added at week 4: the moderate-severe tier, slow titration to the OCD dose-band, the family warned about the 6–8-week clock and held through week 3's 'nothing is happening'.",
      outcome: "At six months: CY-BOCS halved; lunch eaten at school; the cousin's picture on her phone screen ('proof I sat beside her'). The dermatology route had cost a year; the accommodation grid's retirement was the treatment's front half.",
      teachingPoints: [
        "The accommodation grid preceded the ladder: the family's retirement from the fix-outsource business was the treatment's front half, and its weaning is the predictor of success the CBT evidence names.",
        "The taboo layer surfaced only under normalising permission: 'evil people do not fear their thoughts' was the sentence she reported remembering.",
        "The sertraline clock was warned about BEFORE it was needed; the family held the course through the week-3 trough.",
        "The diagnosis was hiding in the mother's unprompted sentence (the fifty-times-a-day question) after a year of dermatology; the ritual inventory, not the biopsy, makes this diagnosis.",
      ],
    },
    {
      title: "The boy who was told to stop sniffing",
      presentation: "A school's final warning for a sound, two years of ruler-to-the-knuckles, and the 4 p.m. bus storm: the punishment apparatus manufacturing the very disturbance it was punishing.",
      initialPresentation: "A 10-year-old Kolhapur boy arrived with his school's ultimatum in writing ('the sound disturbs the class, final warning') and a father's log of punishments: the sniffing had been 'corrected' with a ruler to the knuckles for two years, producing an elaborate concealment apparatus, leaving the classroom to 'drink water' eight times a day, holding the sniff through assembly until tears stood in his eyes, and releasing the whole storm in the 4 p.m. school bus.",
      history: "Onset age six with eye-blinks dismissed as 'TV eyes'; the migratory repertoire since (blinks to throat-clear to sniff to a shoulder-jerk that arrived last term); the premonitory urge easily localised ('here, a tickle, like before a sneeze, and if I hold it, it screams'); waxing with exam terms on the teacher's chart; calming in absorbed cricket. No coprolalia: the family's feared question ('he will start swearing?') answered with the minority statistic. The comorbidity sweep: ADHD-inattentive positive (the marks decline, the daydreaming reports, the knuckle-punishments that had been read as carelessness) and an early erasing-exactness thread; the mild OCD cousin. No strep-era explosive onset; the PANDAS frame closed by timeline.",
      examination: "Multiple motor tics (eye-blink, shoulder-jerk) and vocal tics (sniff, throat-clear) observed in clinic and on the father's phone video; the premonitory urge demonstrated on request; no coprolalia; the knuckle marks healed; attention sustained poorly on structured tasks, consistent with the inattentive picture.",
      diagnosis: "Tourette's syndrome (multiple motor + vocal tics, 4-year course, waxing-waning), with ADHD (inattentive) and subclinical OCD traits: the integrated circuit-family picture.",
      management: "The psychoeducation package delivered to all three parties: the family (not naughtiness, the punishments retired with the ruler handed to the boy ceremonially, his idea, the therapist's blessing), the school (the ignore-protocol letter with the water-bottle permission formalised (the concealment cost retired) no suppression demands, exam-time fatigue awareness), and the boy himself (the loop explained and the prognosis honestly: 'it gets better for most; your job is school and self-esteem, not silence'). CBIT-approximated in clinic: the awareness training (he learned to catch the tickle at 2/10 intensity) and the competing response (a slow double-breath through the nose against the sniff, practised in escalating settings). The ADHD treated with atomoxetine: the family's stimulant fear respected and the tics-not-worsened evidence shared. The father converted to the tic-mapping partner: the weekly chart that replaced the punishment log.",
      outcome: "At eight months: classroom sniffing reduced to occasional with the competing response deployed; the school ultimatum retired: the principal's letter, on file, apologising, framed by the family; the bus-storm down to short bursts; the marks recovering within a term of the ADHD treatment.",
      teachingPoints: [
        "The punishment apparatus had manufactured the concealment costs (the water-runs, the assembly tears) that were being treated as 'the disturbance': the scolding-suppression cycle's iatrogenic signature.",
        "The premonitory-urge question made the diagnosis in the waiting room: localisable build-up, release, and the scream when held.",
        "Treating the ADHD helped the school trajectory more than any tic intervention: the comorbidity is the marks, with ADHD in over half of Tourette's.",
        "The stimulant-worsens-tics dogma is dead at the evidence level: state it and monitor; atomoxetine honoured the family's fear without sacrificing the treatment.",
        "The father's log was converted, not defeated: the same vigilance re-deployed as the waxing-wane map.",
      ],
    },
  ],
  clinicalPearls: [
    "The accommodation grid is the make-or-break: reassurance, ritual-assistance and trigger-removal feel like love and work like oxygen on the fire; present in the severe majority, and its weaning the step-zero that doubles downstream effect.",
    "ERP child edition (externalisation, ladder, ritual-blocking, brave-points) in 8–14 sessions with parent modules: among the most effective therapies in child mental health, first-line at every severity.",
    "The POTS tier: CBT alone suffices for milder cases and rivals medication; CBT plus sertraline for moderate-severe outruns either alone.",
    "The OCD clock: higher and slower than depression; often 6–10 weeks to effect; warn the family at the start or they abandon at week 3, the Indian pattern.",
    "Tourette's = multiple motor tics + at least one vocal, 1+ year, onset in childhood: coprolalia a ~10–15% minority, the cinematic myth to kill at every telling.",
    "USS. Urge, Suppressible, Suggestible: the tic identity that excludes every mimic; the premonitory urge is both the one-question diagnosis and CBIT's lever.",
    "Peak severity 10–12, substantial teen improvement, roughly a third of Tourette's resolving fully, while untreated OCD grows its architecture: opposite arcs, different urgency.",
    "Stimulants do NOT typically worsen tics. The dead dogma; treat the ADHD, because over half of Tourette's carries it and it decides the school trajectory.",
    "Alpha-2 agonists first-line when tics need medication (the clonidine double duty with ADHD); dopamine blockers reserved for severe, lowest-dose, time-limited: the growth-era ledger is real.",
    "PANDAS, honestly: the presentations are real, the distinct-syndrome question is contested, and the treatment is the standard one; strep evaluation plus Sydenham's exclusion, immune therapies research-tier.",
    "The erasing child is the OCD door (check the ritual inventory before the handwriting curriculum); the throat-clear's ENT carousel ends with the premonitory-urge question in one visit.",
    "In India the sudden-onset movement child earns the cardiac examination before the tic label. Sydenham's chorea is not rare here, and the diagnostic cost of missing it is the heart.",
    "The marriage-market answer for Tourette's parents: the predictor of adult social outcome is not the tic count but the self-esteem kept intact through school, which is what the ignore-protocol and the anti-bullying stance are FOR.",
  ],
  highYieldSummary: [
    "Definition: childhood OCD is the adult sticky-thought engine in child costume (contamination, magical, checking, exactness, scrupulosity and taboo themes) with thinner insight and the child-specific maintainer of family accommodation; tic disorders are the body's urge-tension-release loops (transient under 1 year, persistent over 1 year, Tourette's when multiple motor and at least one vocal have ridden a year), waxing and waning, suppressible at attentional cost, and largely self-fading.",
    "Epidemiology: paediatric OCD 0.5–2% with about half of all OCD beginning young (boys pre-pubertal, sex ratio evening by adolescence); transient tics in up to a quarter of children, persistent disorders ~1–2%, Tourette's ~0.3–1% with boys 3–4×; peak tic severity 10–12 with roughly a third of Tourette's resolving fully; ADHD over half and OCD a third to a half of Tourette's; heritability ~40–50% in paediatric-onset OCD with the tic-OCD circuit linkage.",
    "Mechanism: the sticky-thought loop (the must-fix tag, the minute's relief, the negative-reinforcement glue); the outsource department (parental reassurance as training repetitions, the accommodation); the urge-loop (premonitory urge, tic, relief, rebuild; suppression spending attention and buying the after-school storm); the circuit's double-booking in the cortico-striato-thalamo-cortical habit loops: the reason tics and rituals co-travel; the strep window (explosive post-streptococcal onset, basal-ganglia autoimmune hypothesis, honestly contested).",
    "Clinical: the child costumes (the commonest contamination; the magical rules binding Papa's safety to shoe-washing; the erasing-until-tears exactness; the scrupulosity mis-routed through temples; the adolescent taboo secret); the hidden accommodation set (reassurance hourly, the same question answered forty times, the schoolbag taken over); the tic repertoire with its localisable premonitory urge, its exam-term waxing and its bus-storm release; the comorbidity layer (ADHD, OCD, anxiety, rage attacks, secondary depression).",
    "Diagnosis: the DSM-5 paraphrase (obsessions and/or compulsions, the 1-hour/day-or-impairment gate, the insight specifier with the dropped recognises-irrational requirement) and the tic gates; the seven-step audit: the alone-with-child secret-themes interview, the ritual inventory with the accommodation grid, the tic examination with the urge elicited, the comorbidity sweep, the strep question, the mimics screen (Sydenham's, myoclonus, medication-induced, ADHD fidgets, psychotic rituals), CY-BOCS and YGTSS named for tracking.",
    "Management (OCD): (1) psychoeducation plus family-accommodation reduction; the step-zero; (2) child-edition ERP: externalisation, ladder, ritual-blocking, brave-points, 8–14 sessions with parent modules; (3) the SSRI tier for moderate-severe: sertraline and fluoxetine on the higher-slower clock (weeks 6–10; 6–12 months post-response with ERP throughout; fluvoxamine the alternative; clomipramine the experienced second-line with ECG); (4) the PANDAS honest position: strep evaluation, Sydenham's exclusion, standard treatment immediately, immune therapies research-tier.",
    "Management (tics): (1) psychoeducation plus watchful waiting with the school letter, for mild tics this IS the treatment; (2) CBIT: awareness training plus the 1-minute competing response, 8–10 sessions, the parent-teacher-triad workaround where therapists are scarce; (3) medication when the tic costs: alpha-2 agonists first (the ADHD double duty), dopamine blockers reserved-severe with the growth-era monitoring ledger, botulinum for single severe focal tics, DBS never paediatric routine; (4) the braiding: the ADHD treated fully (stimulants allowed with monitoring), the OCD threaded, the rage-attacks regulated, the long-horizon framing delivered.",
    "The Indian tier: the punished tic and its one-meeting household conversion; the scrupulosity family's devotion-versus-loop script; the erasing child of Std 2–4 checked for rituals before handwriting; the ENT carousel ended by the premonitory-urge question; the Sydenham's cardiac discipline; CBT-CBIT at ₹800–2,500/session in the metros with the parent-led-plus-supervision compromise for the districts; sertraline/fluoxetine at ₹50–150/month: the barrier never the pharmacy, always the diagnosis, the engagement and the clock nobody warned about.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "pot-quiz-1",
      question: "Tourette's syndrome requires:",
      options: ["One motor tic and swearing", "Multiple motor tics + at least one vocal tic, 1+ year, onset in childhood", "A single vocal tic for 6 months", "Coprolalia as a mandatory feature"],
      correctIndex: 1,
      explanation: "The combination with the year gate; coprolalia stays a ~10–15% minority — the cinematic myth to kill.",
      afterSectionId: "diagnosis",
    },
    {
      id: "pot-quiz-2",
      question: "The finding that most identifies a movement as a tic rather than a mimic:",
      options: ["It occurs in sleep", "Premonitory urge + suppressibility + suggestibility", "It worsens with relaxation", "It is rhythmic and constant"],
      correctIndex: 1,
      explanation: "The USS triad — and the urge is CBIT's lever; no chorea, myoclonus or medication-induced movement is all three.",
      afterSectionId: "differential",
    },
    {
      id: "pot-quiz-3",
      question: "In paediatric OCD, the family behaviour that most maintains the illness and is the first-order treatment target:",
      options: ["School enrolment", "Accommodation: reassurance, ritual assistance, trigger-removal", "Prayer at home", "Vitamin supplementation"],
      correctIndex: 1,
      explanation: "The supply line — each answer teaches the question to return; its weaning doubles the downstream treatment effect.",
      afterSectionId: "symptoms",
    },
    {
      id: "pot-quiz-4",
      question: "The POTS-tier evidence for moderate-severe paediatric OCD supports:",
      options: ["Watchful waiting", "CBT alone only", "CBT + sertraline combination", "Antipsychotic monotherapy"],
      correctIndex: 2,
      explanation: "The combined ladder: ERP first-line at all severities; the combination for the moderate-severe tier outrunning either alone.",
      afterSectionId: "management",
    },
    {
      id: "pot-quiz-5",
      question: "The CBIT core technique pair:",
      options: ["Awareness training + competing response", "Free association + dream analysis", "Punishment + reinforcement", "Hypnosis + sedation"],
      correctIndex: 0,
      explanation: "Catch the urge early, deploy the incompatible action for a minute — the loop's off-switch.",
      afterSectionId: "management",
    },
    {
      id: "pot-quiz-6",
      question: "Regarding stimulants in the child with tics + ADHD:",
      options: ["Absolutely contraindicated", "Modern evidence allows stimulant treatment with monitoring — the 'stimulants worsen tics' dogma is dead", "Stimulants cure tics", "Tics always resolve with stimulants"],
      correctIndex: 1,
      explanation: "The practice-changing consensus point: untreated ADHD costs the school trajectory more than the tics do.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Give the child-specific differences of OCD from the adult disorder, and the one family behaviour that most predicts treatment success.", answer: "THE DIFFERENCES: (1) INSIGHT is thinner. The DSM insight specifier runs good/fair/poor/absent and absent/delusional is commoner in the young (DSM-5 dropped the old 'recognises irrational' requirement for exactly this reason); (2) THE THEMES wear child costume: magical contagion ('if I see red cars someone dies'), exactness and just-right, asking-forever, and the adolescent taboo secret; (3) THE FAMILY is woven into the illness as the fix's outsource department: the child-specific MAINTAINER the adult illness lacks. THE PREDICTOR: family-accommodation reduction; the CBT evidence itself shows the weaning of reassurance, ritual-assistance and trigger-removal predicts treatment success; the grid mapped first, the scripted non-answer rehearsed, the assistance retired rung by rung. The clinical translation: in paediatric OCD the parents are not the history-givers, they are half the treatment team and (until converted) half the illness.", topic: "Foundations" },
    { question: "Recite the ERP child-edition package and the POTS-tier severity logic.", answer: "THE PACKAGE: (1) EXTERNALISATION; the OCD named and fought as a character ('the Worry Witch', 'Mr Bossy', 'the Dirt-Witch'); (2) THE LADDER built with the child: doorknob with one finger, hold, no wash, till the wave falls; the full palm; the 30-minute no-wash rule; one desk closer per rung; (3) RITUAL-BLOCKING as the ladder's partner: the 'homework with no erasing' contract; (4) THE REWARD ECONOMY: brave-points charts for exposure miles; (5) 8–14 SESSIONS with parent modules throughout. THE POTS-TIER LOGIC: CBT alone suffices for milder cases and rivals medication; the combined CBT-plus-sertraline tier for moderate-severe outruns either alone: the tier decision made on severity (CY-BOCS), not on age or preference. The Indian delivery note: metro child-guidance clinics carry therapist-led ERP; the manualised parent-led variants plus fortnightly supervision are the district compromise, the evidence-dose honestly thinner but real.", topic: "Management" },
    { question: "Why do OCD doses of SSRIs run higher and slower than depression doses, and at what week does the Indian family abandon?", answer: "THE LOGIC: OCD's serotonin response is dose-dependent and delayed in a way depression's is not; the titration runs HIGHER to reach the OCD dose-band and SLOWER to arrive there, with the effect commonly taking 6–10 weeks (the case-literature clock running 6–8 weeks in the individual child); starting low and reviewing weekly for activation, then climbing. THE ABANDONMENT: WEEK 3; the 'nothing is happening' trough, the Indian pattern, where the medicine is stopped and the failure filed as 'medicines don't work for her'. THE PRE-EMPTION: the clock warned BEFORE the first tablet; week 3 named on the calendar in advance as the expected trough, and the review timed to land after it. Duration post-response: 6–12 months with ERP running throughout; the tablet and the ladder are one programme, not alternatives.", topic: "Pharmacology" },
    { question: "State the PANDAS/PANS honest position in three sentences.", answer: "SENTENCE ONE (WHAT IS REAL): a small subset of children show explosive onset (overnight OCD, tics, urinary frequency, eating changes, separation panic, academic regression) in the weeks after streptococcal infection, with a relapsing-remitting course tied to new infections in research settings, on the basal-ganglia autoimmune hypothesis (Sydenham's chorea's sibling mechanism). SENTENCE TWO (WHAT IS CONTESTED): whether this forms a distinct syndrome; the guidelines differ, and the honest clinician holds the question open rather than verdict-ing it in either direction. SENTENCE THREE (WHAT TO DO): evaluate (the strep testing where acute, the Sydenham's exclusion with the cardiac examination), begin the STANDARD OCD/tic treatment immediately (not delayed by the immune debate) and keep the immune therapies (antibiotic prophylaxis, plasmapheresis, IVIG, tonsillectomy) at research tier, validating the family's observation without the autoimmune-treatment rabbit hole.", topic: "Controversies" },
    { question: "Name the three findings that make a movement a tic rather than a mimic, and state the Indian chorea discipline.", answer: "THE TRIAD (USS): URGE; the premonitory build-up the child can localise ('here, a tickle, like before a sneeze'), present in most and both the diagnostic gold and CBIT's lever; SUPPRESSIBILITY (exquisitely holdable at attentional cost (assembly, exams) the after-school storm the price); SUGGESTIBILITY: the movement provokable in clinic. No chorea, myoclonus, seizure-adjacent or medication-induced movement is all three, which is why the triad excludes every mimic in the differential table. THE INDIAN DISCIPLINE: the sudden-onset movement child in India earns the cardiac examination and the streptococcal workup (ESR, ASO, the paediatric-cardiology linkage) BEFORE the tic-disorder label; rheumatic chorea is not rare here (Sydenham's: post-streptococcal, flowing, unpredictable, WITHOUT urge or suppressibility), and the diagnostic cost of missing it is the heart. One paediatric-cardiology linkage in the referral habit covers it.", topic: "Diagnosis" },
    { question: "Give the Tourette's definition, the peak-severity age, and the prognosis sentence for parents.", answer: "THE DEFINITION: multiple motor tics plus at least one vocal tic, present for more than a year (not necessarily concurrently), with onset in childhood; typically ages 4–6, prepubertal; the waxing-waning pattern is diagnostic texture, not a criterion, and coprolalia is neither required nor common (~10–15%, the cinematic myth to kill). THE PEAK: severity peaks at 10–12 years. THE PROGNOSIS SENTENCE: 'Worst around ten to twelve, then substantial improvement through the teens; roughly a third resolve fully and most of the rest become mild, and what we protect during the years it runs is his marks (treat the ADHD if present), his hands (ignore the tic) and his self-esteem (stop the class-mimicking), because the tics are the visible part but those three are the actual prognosis.' The marriage-market version for the parents of an 8-year-old: the predictor of adult social outcome is not the tic count but the self-esteem kept intact through school.", topic: "Prognosis" },
    { question: "What is CBIT's core pair, and what does it replace in Indian households?", answer: "THE CORE PAIR: (1) AWARENESS TRAINING; the child learns to catch the premonitory urge's exact signature early (the case-child catching the tickle at 2/10 intensity), the lever of the whole method; (2) COMPETING-RESPONSE TRAINING: a 1-minute incompatible action deployed at the urge (slow mouth-breathing against the sniff, eyes-open-soft against the blink, the slow double-breath through the nose), practised in escalating settings; plus relaxation and functional analysis of high-risk settings, packaged in 8–10 sessions with parent-and-teacher modules. WHAT IT REPLACES IN INDIAN HOUSEHOLDS: the suppression demand; the ruler-to-the-knuckles, glare-and-shame regime whose costs are the concealment apparatus (the water-runs, the assembly tears), the attention spent from the classroom budget, and the self-image scars; the CBIT-scarce district answer is the teachable core trained into the parent-teacher triad in clinic with review: imperfectly but honestly, and still outperforming scolding and sedation.", topic: "Management" },
    { question: "Which comorbidity decides the Tourette's child's school trajectory, and what is the first-line molecule family when tics + ADHD co-travel?", answer: "THE COMORBIDITY: ADHD; present in over half of Tourette's and the school-failure engine; the case-boy's marks recovered within a term of treating it, more than any tic intervention moved them; untreated ADHD costs the school trajectory more than the tics do, and the stimulant-worsens-tics dogma that historically blocked treatment is dead at the evidence level (modern consensus allows stimulant treatment with monitoring; atomoxetine where the family's stimulant fear is respected). THE FIRST-LINE MOLECULE FAMILY WHEN TICS THEMSELVES NEED MEDICATION: the ALPHA-2 AGONISTS (clonidine and guanfacine (availability varies in India)) chosen first ESPECIALLY when ADHD co-travels, because of the double-duty effect on both conditions, with the sedation/hypotension titration cautions and the weeks-to-effect expectation; the dopamine blockers (risperidone, aripiprazole, haloperidol, pimozide) are the most effective tic-suppressants but reserved for severe, function-destroying tics at the lowest dose, time-limited, with the growth-era ledger monitored.", topic: "Management" },
  ],
  faqs: [
    { question: "He makes that sound on purpose to irritate us: he can control it; he stops when we glare.", answer: "He can SUPPRESS it, which is different from controlling it: holding a tic costs attention and builds a tension that bursts out later; the school bus, the evening storm. That is why the glare seems to work and the evening explodes. Suppression is a favour he does you at a price, and the price shows up at homework, marks and meltdowns. Ignoring is the counter-intuitive treatment that works." },
    { question: "Will he start swearing in public?", answer: "Probably never. The swearing tic (coprolalia) is the movie version: it affects roughly one in ten at most. The real-life condition is blinks, sniffs and head-jerks, mostly invisible to strangers and improving by the late teens for the large majority." },
    { question: "The doctor said OCD. But these are just her prayers: are you against religion?", answer: "No, and the distinction matters: her DEVOTION is chosen, flexible and peaceful; this LOOP is intrusive, rigid, distressing and ballooning. It uses prayer as its grammar the way another child's OCD uses hand-washing. We treat the loop; the faith stays exactly as your family holds it, and where the loop attacks purity itself, treating it RESTORES peaceful worship, which families of faith usually see clearly once framed." },
    { question: "How long will the tics last?", answer: "The honest arc: worst around 10–12, then substantial improvement through the teens; roughly a third of Tourette's resolves fully and most of the rest becomes mild. What we protect during the years it runs: his marks (treat the ADHD if present), his hands (ignore the tic) and his self-esteem (stop the class-mimicking). The tics are the visible part; those three are the actual prognosis." },
    { question: "Are medicines needed for the tics?", answer: "Usually not. Most children need understanding, a school letter and time. Medicine enters when the tic itself costs (socially severe, physically painful, or school-destroying) and then we start with the gentler class (the blood-pressure-family drug, clonidine) and reserve the stronger ones for truly severe cases, at the lowest dose with reviews. The strongest medicine in most Indian homes is retiring the ruler." },
    { question: "Will the OCD go away on its own?", answer: "Rarely fully, and untreated it tends to grow its architecture: the rituals recruit the family, the family feeds the machine. The good news is the opposite of waiting: this is one of child psychiatry's most treatable conditions; the exposure therapy works, the medicines work, the combination works best, and treatment early costs months while treatment late costs years." },
    { question: "We answer her questions to keep the peace. Is that wrong?", answer: "It is loving, and it is the illness's supply line. Each answer teaches the question to return. The replacement is scripted kindness: 'I can see the OCD is asking you again. I won't answer it, because that feeds it, but I will sit here with you while it shouts.' Two weeks of that is harder and better than two years of answering." },
    { question: "His tics got worse after the fever: is that the PANDAS thing we read about?", answer: "Possibly related (flares with infection are well documented) and worth an evaluation when the onset was explosive (overnight symptoms, plus things like urinary frequency or eating changes after a sore throat). But most fever-flares are ordinary waxing. The strep question gets tested and discussed; the treatment either way is the standard one, and the exotic immune treatments are research-tier, not clinic routine." },
    { question: "The school is threatening the child over the sounds. What do we do?", answer: "The letter with three instructions: ignore (no 'stop it', it costs him marks and buys you evening storms), seat (where it is least disruptive), and exam-awareness (suppression is tiring; some accommodation where the tics hit writing). Schools respond well to written medical instructions; the mimicking classmates are a discipline matter for the class, not a therapy matter for your child, and the school's protection there is part of the treatment." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5 / DSM-5-TR (APA) — the paraphrased OCD and tic-disorder constructs (the insight specifier; the duration gates; the Tourette's combination)" },
      { source: "AAP / AACAP-tier balanced positions on PANDAS/PANS — the cautions against routine antibiotic and immune therapies outside research protocols" },
      { source: "Pringsheim T et al. and the movement-society guidance — tic pharmacotherapy order (alpha-2 agonists first; antipsychotic caution) and the stimulant-tics safety update" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.8 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "POTS (Pediatric OCD Treatment Study) — the CBT/sertraline/combination trial ladder: the tiering evidence" },
      { source: "Franklin ME et al. — family-based CBT/ERP for paediatric OCD; Peris TS et al. — the family-accommodation-reduction evidence" },
      { source: "Scahill L et al. / Woods DW et al. — CBIT and habit-reversal trials in tic disorders" },
    ],
    reviews: [
      { source: "Bloch MH et al. — tic natural history (the teen-improvement and prognosis data)" },
      { source: "Leckman JF et al. — the premonitory-urge and waxing-waning phenomenology" },
      { source: "Swedo SE et al. — the PANDAS original description, read with its balanced successors" },
      { source: "The Indian layer — rheumatic-chorea clinical reality (the Sydenham's discipline); metro CBT/CBIT scarcity economics; the faith-healer route and the respectful redirect (approx 2026 practice realities)" },
    ],
    patientResources: [
      { source: "The school letter with three instructions and the scripted non-answer card — the two written instruments this course hands to every family" },
      { source: "The district child-guidance clinic, the DMHP psychiatric tier and Tele-MANAS 14416 — the delivery and family-distress channels" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "8 min",
      description: "Plain language: the sticky thoughts and the urge-loop, the answering trap, the ignore-protocol, the school letter, the honest prognosis.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The criteria gates, the USS triad, the accommodation concept, the two treatment ladders, the PANDAS position.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "36 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "46 min",
      description: "Everything: the accommodation-grid craft, the scripted non-answer, the CBIT core taught to triads, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The two engines, the accommodation grid, the tic gates, the prevalence arithmetic.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the child-specific differences of paediatric OCD and recite the tic-spectrum gates cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The sticky loop, the urge-loop, the shared circuit, the strep window.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why suppression buys the evening storm and why tics and rituals co-travel." },
    { number: 3, title: "Clinical Practice", description: "The seven-step audit, the mimics, the two treatment ladders, the drug tier.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the accommodation grid, the premonitory-urge question and the POTS-tier severity decision." },
    { number: 4, title: "Indian Context", description: "The punished tic, the scrupulosity family, the ENT carousel, the delivery economics.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the devotion-versus-loop script and the household-conversion meeting." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and the high-yield map.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the Tourette's-criteria and PANDAS-position questions cold, with the numbers." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the eight recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.8 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "DSM-5 / DSM-5-TR (APA) — the paraphrased OCD and tic-disorder constructs: the insight specifier, the dropped recognises-irrational requirement, the duration gates and the Tourette's combination", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
    { id: "S3", source: "POTS (Pediatric OCD Treatment Study) — the CBT/sertraline/combination trial ladder: the tiering evidence for paediatric OCD", sourceType: "trial", year: "2004 onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Franklin ME et al. — family-based CBT/ERP for paediatric OCD trials (the 8–14 session packages with parent modules)", sourceType: "trial", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Peris TS et al. — the family-accommodation-reduction evidence (accommodation as maintainer; its reduction a predictor of treatment success)", sourceType: "primary", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Scahill L et al. / Woods DW et al. — CBIT and habit-reversal training trials in tic disorders (awareness + competing response)", sourceType: "trial", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Bloch MH et al. — tic natural history (peak 10–12, teen improvement, roughly a third resolving fully); Leckman JF et al. — the premonitory-urge and waxing-waning phenomenology", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Swedo SE et al. — the PANDAS original description (explosive post-streptococcal onset; the basal-ganglia autoimmune hypothesis)", sourceType: "primary", year: "1998 onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "AAP / AACAP-tier balanced guideline positions on PANDAS/PANS — the cautions against routine antibiotic prophylaxis, tonsillectomy and immune therapies outside research protocols", sourceType: "guideline", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Pringsheim T et al. and the movement-society guidance — tic pharmacotherapy order (alpha-2 agonists first; antipsychotic reservation and monitoring) and the stimulant-tics safety update", sourceType: "guideline", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Indian layer — rheumatic-chorea clinical reality (the Sydenham's discipline); metro CBT/CBIT scarcity economics (approx ₹800–2,500/session, 2026); the faith-healer route and the respectful redirect", sourceType: "review", year: "2026", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "Epidemiology: paediatric OCD 0.5–2% with about half of all OCD beginning in childhood/adolescence (boys predominating pre-pubertally, the sex ratio evening by adolescence, insight poorer in children); transient tics in up to a quarter of children, persistent tic disorders ~1–2%, Tourette's ~0.3–1% with boys 3–4×; peak tic severity 10–12 with substantial teen improvement and roughly a third of Tourette's resolving fully.", grade: "established", sources: ["S1", "S2"] },
    { text: "Heritability ~40–50% in paediatric-onset OCD (higher than adult-onset), with the tic-OCD linkage through the shared cortico-basal ganglia circuit family and the stronger familial loading in paediatric OCD with tics; Tourette's itself strongly familial.", grade: "established", sources: ["S1", "S7"] },
    { text: "The mechanism: the sticky-thought loop (the must-fix appraisal, the ritual's minute of relief, the negative-reinforcement glue) with the parents as the fix's outsource department; family accommodation (reassurance, ritual-assistance, trigger-removal) as the child-specific maintainer, its reduction a predictor of treatment success.", grade: "established", sources: ["S1", "S5"] },
    { text: "The urge-loop phenomenology: the premonitory urge precedes and is relieved by the tic; suppressibility at attentional cost (the after-school storm); waxing-waning over weeks with stress, excitement, fatigue and illness; migration of tics; and the loop loosening with maturation through the teens.", grade: "established", sources: ["S1", "S7"] },
    { text: "The double-booking: OCD's not-just-right error signal and the tic's urge-loop running through overlapping cortico-striato-thalamo-cortical habit circuitry; the reason the two co-travel in families and in the same child, and the treatment programme is braided.", grade: "supported", sources: ["S1", "S7"] },
    { text: "The ERP child-edition package (externalisation, ladder, ritual-blocking, reward economy) in 8–14 sessions with parent modules: first-line at every severity; the POTS tier: CBT alone sufficing for milder cases and rivalling medication, the CBT-plus-sertraline combination for moderate-severe outrunning either alone.", grade: "established", sources: ["S3", "S4"] },
    { text: "The SSRI tier: sertraline and fluoxetine carrying the paediatric OCD evidence with higher-slower dosing than depression (often 6–10 weeks to effect), weekly early review for activation, 6–12 months post-response with ERP throughout; fluvoxamine the alternative and clomipramine the experienced second-line (ECG, anticholinergic load).", grade: "established", sources: ["S1", "S3"] },
    { text: "The PANDAS/PANS honest position: explosive post-streptococcal presentations real (overnight OCD, tics, urinary frequency, eating changes, regression; relapsing-remitting with new infections in research settings; the basal-ganglia autoimmune hypothesis as Sydenham's sibling); the distinct-syndrome question contested; the management: strep evaluation, Sydenham's exclusion, standard OCD/tic treatment immediately, immune therapies research-tier.", grade: "uncertain", sources: ["S8", "S9"] },
    { text: "The Tourette's comorbidity lattice (ADHD in over half (the school-failure engine), OCD in a third to a half, anxiety, and rage attacks as a common secondary layer) with the school trajectory depending on the ADHD more than on the tics.", grade: "established", sources: ["S1", "S7"] },
    { text: "CBIT: awareness training plus the 1-minute competing response, with relaxation and functional analysis, in 8–10 sessions with parent-and-teacher modules; the active-therapy tier with strong evidence in adults and children alike.", grade: "established", sources: ["S6"] },
    { text: "Tic pharmacotherapy order: alpha-2 agonists (clonidine, guanfacine) first-line especially when ADHD co-travels (the double-duty effect), with sedation/hypotension titration cautions; dopamine blockers (risperidone, aripiprazole, haloperidol, pimozide) the most effective tic-suppressants reserved for severe tics at lowest dose, time-limited, with the growth-era monitoring ledger; botulinum toxin for single severe focal tics; DBS essentially never paediatric routine. Stimulants do NOT typically worsen tics at the population level: the modern consensus allowing stimulant treatment in the ADHD-plus-tics child with monitoring.", grade: "established", sources: ["S10"] },
    { text: "The Indian layer: the punished-tic household (suppression demands costing attention, tension and shame); the scrupulosity family pre-interpreted through the religious frame with the devotion-versus-loop redirect; the erasing-child referral and the ENT carousel ended by the premonitory-urge question; the Sydenham's cardiac discipline before the tic label; metro CBT/CBIT at approx ₹800–2,500/session with sertraline/fluoxetine at ₹50–150/month (2026) and the parent-led-plus-supervision district compromise.", grade: "supported", sources: ["S11"] },
  ],
};
