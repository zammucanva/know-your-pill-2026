import type { PsychiatryCourse } from "./types";

/**
 * CHILD ANXIETY — canonical Psychiatry course
 * (migration batch 12, Group L — child & adolescent psychiatry).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/child-anxiety.md — untouched foundation),
 * re-researched against the note's evidence lineage (Kagan's
 * behavioural-inhibition cohorts, Kendall's Coping Cat trials,
 * the Walkup CAMS/POTS combination evidence, Lebowitz's SPACE
 * parent-accommodation module, the Berg/Heyne school-refusal
 * differential) with per-claim provenance.
 *
 * Drug routes: none linked. The note assigns the child SSRI tier
 * (sertraline/fluoxetine for moderate-severe) a genuine clinical
 * role, but the KYP drug lessons are adult-dosing pages — the
 * child tier, and the benzodiazepine refusal, are recorded
 * honestly in contentGaps, taught here, route never invented.
 */
export const childAnxietyCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "child-anxiety",
  title: "Child Anxiety",
  shortName: "Child anxiety",
  kind: "disorder",
  category: "Child & Adolescent Psychiatry",
  groupLetter: "L",
  groupName: "Child & adolescent psychiatry",
  learningPath: ["Psychiatry", "Child & Adolescent Psychiatry", "Child Anxiety"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "34 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The school-refusal engines — Sunday stomach aches, gate tantrums and frozen speech",

  summary:
    "Childhood anxiety presents as somatic complaints, school refusal, clinginess or selective mutism rather than as voiced fear. Graded exposure CBT with a parent module is first-line, with SSRIs reserved for moderate-to-severe cases.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Recognise childhood anxiety's five costumes — somatic complaints, school refusal, clinginess, frozen speech, night fears — the presenting layer that arrives before any disorder label.",
    "Name the five childhood anxiety disorders and their age fingerprints: separation anxiety earliest, social anxiety and selective mutism at school entry, GAD in middle childhood, panic mostly post-pubertal.",
    "Explain the three mechanism stories: the sensitive alarm (the amygdala threshold), the avoidance trap (rescue as the alarm's ally), and the temperament-plus-parenting transmission (behavioural inhibition meeting the accommodation cycle).",
    "Separate disorder from developmental normality — stranger anxiety at 8 months is normal; the same at 8 years is a disorder.",
    "Run the school-refusal differential through its four engines (separation, anxiety-specific, mood, truancy) and match the treatment to the engine.",
    "Deliver CBT the child way: the Coping Cat structure (FEEL-EXPECT-ACT-PRAISE), the exposure ladder protocol, and the parent module (accommodation reduction, brave-praise, the boring-same goodbye).",
    "Use the SSRI tier correctly in children — which, for whom, what monitoring — and explain why benzodiazepines have essentially no role.",
    "Handle Indian realities: the paediatric somatisation carousel, the hostel question, the joint-family accommodation loop, exam-season spikes, and the 'just shy' dismissal that costs years.",
  ],
  quickFacts: [
    { label: "The five costumes", value: "Somatic, refusal, cling, freeze, night fears", detail: "Recurring abdominal pain and headaches time-locked to school, the gate tantrum, the shadowing child, the silent-at-school child, the sleepless one — anxiety in children presents as body and behaviour, not as complaint" },
    { label: "The prevalence", value: "6–10% in mid-childhood", detail: "The commonest mental-health conditions of childhood and adolescence, rising to 15–20% for any anxiety by late teens in some surveys; girls carry roughly double the risk after age 6" },
    { label: "The developmental windows", value: "Stranger 6–12 months, separation 9–18 months", detail: "The monster years run 3–5; the window makes the disorder — the same behaviour at school age, with persistence and impairment, is a disorder" },
    { label: "The four engines", value: "S-A-M-T", detail: "School refusal is a symptom with four engines — Separation, Anxiety-specific, Mood, Truancy — and the treatment differs per engine; separation anxiety drives the 5–8 age band" },
    { label: "The mutism gate", value: "Home-speech, school-silence, 1+ month", detail: "Selective mutism is social anxiety's most extreme costume; participation-without-speech separates it from autism; treat early, because waiting entrenches" },
    { label: "The child GAD gate", value: "Worry + 1", detail: "Children need one accompanying symptom of the restlessness/fatigue/concentration/muscle/sleep cluster where adults need three or more — the exam-perfect detail" },
    { label: "The treatment core", value: "Exposure plus parents out of rescue", detail: "The Coping Cat lineage (FEEL-EXPECT-ACT-PRAISE), the ladder ranked 0–10 started at 2–3 with the stay-till-the-wave-falls rule — and the SPACE-style parent module running parallel" },
    { label: "The SSRI tier", value: "Sertraline or fluoxetine, moderate-severe", detail: "Start low, expect 4–6 weeks, combination with CBT beating either alone in some analyses (the POTS/CAMS lineage); benzodiazepines essentially no child role — dependence and paradoxical disinhibition" },
    { label: "The Indian signature", value: "The somatic carousel before the fear interview", detail: "The paediatric OPD tours — ultrasound, stool, blood, tonics — for years; the sentence that breaks it: pain that follows the school calendar is a message about school" },
  ],
  knowledgeGraph: [
    { label: "Child Assessment & Epidemiology", type: "condition", href: "/psychiatry/child-assessment-epidemiology/", note: "The developmental-history discipline and the survey architecture behind the childhood prevalence figures this course quotes" },
    { label: "Autism Spectrum Disorder", type: "condition", href: "/psychiatry/autism/", note: "The selective-mutism differential that runs both ways — reciprocity history and sensory profile against participation-without-speech" },
    { label: "ADHD", type: "condition", href: "/psychiatry/adhd/", note: "The concentration complaints anxiety whittles — attention intact on preferred non-feared tasks is the tell" },
    { label: "Conduct Disorders", type: "condition", href: "/psychiatry/conduct-disorder/", note: "The truancy engine of school refusal — absence without distress, the family unaware, the treatment a conduct programme rather than a ladder" },
    { label: "Developmental Disorders", type: "condition", href: "/psychiatry/developmental-disorders/", note: "Learning-disorder school aversion — fear of the subject or of failure's exposure, not of school itself" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The mood engine — the adolescent 'anxiety' referral that is depression's anhedonic fatigue" },
    { label: "Panic Disorder & Agoraphobia", type: "condition", href: "/psychiatry/panic-disorder/", note: "The post-pubertal room — racing heart, breathlessness, doom; rare before 12, the full account when it arrives" },
    { label: "Social Anxiety Disorder & Specific Phobias", type: "condition", href: "/psychiatry/social-anxiety-phobias/", note: "The same alarm grown up — and the applied-tension tool for the injection-phobic fainter the child ladder borrows" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The alarm itself — temperamentally set with a hair trigger, recalibrated only through experienced non-events" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The SSRI tier's target for the moderate-severe child — no child-dosing KYP lesson; the tier taught here and recorded in contentGaps" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry the whole course. First, the sensitive alarm: the amygdala is the brain's smoke detector, and in temperamentally inhibited children it ships with a hair trigger — set to fire at burnt toast two flats away. The felt experience is real: the heart races, the stomach clenches (the vagal-gut axis, the actual biology of the Sunday-evening stomach-ache), the palms sweat, the sleep frets; the absence of anything on the scans is the anxiety diagnosis's signature, never evidence of faking. Second, the avoidance trap: anxiety's gravity bends all behaviour toward escape, and relief is the brain's most effective teacher — each escape lowers anxiety now and confirms the alarm's credibility, and within weeks the avoided list grows: school, then specific lessons, then the gate, then the bus, then the morning itself. This is why rescue is the trap's ally and why the parent module targets the family's rescue patterns. Third, the calibration classroom: the alarm's settings are partly inherited, but calibration is learned from the attachment figures — the anxious parent who flinches at every step teaches alarm; the calm parent who names the fear and rides the lift anyway teaches reset. The inhibited infant with a calm, brave-modelling, non-rescuing parent frequently lands off the anxiety track; the same infant with an anxious over-protector converts temperament into disorder. The treatment insight follows the mechanism exactly: alarms recalibrate through experienced non-events — you cannot talk the detector down; you must let it hear toast burn, again and again, without a fire.",
    steps: [
      "The sensitive alarm: the amygdala ships temperamentally pre-set sensitive — behavioural inhibition (the 20% of infants who withdraw from novelty) is the strongest early childhood predictor of later social and separation anxiety.",
      "The somatic translation: the vagal-gut axis makes the alarm felt in the body — the school-morning stomach-ache and the pre-exam vomit are genuine physiology, which is why normal scans are the signature, not a contradiction.",
      "The avoidance trap: each escape delivers relief — the brain's most effective teacher — and the lesson learned is that it WAS dangerous; the avoided list grows from school to lessons to the gate to the bus to the morning itself.",
      "The rescue economy: parental accommodation — adjusting the world so the child never faces the feared thing — feeds the alarm's credibility; the kindest long-run parenting is the short-run tolerance of the child's discomfort.",
      "The calibration classroom: the attachment figures set the alarm's settings by demonstration — the anxious household teaches alarm, the calm brave-modelling household teaches reset; transmission is real, which is why treating the parent is standard child-anxiety medicine.",
      "The reset mechanism: alarms recalibrate through experienced non-events — graded exposure arranged kindly and repeatedly with the family out of the rescue business, with the SSRI tier lowering the threshold the ladder then climbs.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "amygdala", name: "Amygdala (the alarm)", role: "The threat-detection hub that ships temperamentally sensitive — the hair trigger firing at burnt toast two flats away; recalibrated, in the end, only through experienced non-events.", grade: "established" },
    { id: "vagal-gut-axis", name: "Vagal brain-gut axis (the somatic wire)", role: "The actual biology of the Sunday-evening stomach-ache and the pre-exam vomit — real pain, real physiology; the reason normal scans are the anxiety diagnosis's signature rather than evidence of faking.", grade: "supported" },
    { id: "prefrontal-regulation", name: "Prefrontal regulatory circuit (the brake still under construction)", role: "The top-down regulation that would talk the alarm down is the slowest system to mature — which is why the adults around the child function as the external brake, and why the parent module IS the treatment tier it is.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The SSRI tier's target for the moderate-to-severe child — sertraline and fluoxetine, the best-paediatric-evidence members, fluvoxamine carrying the RUPP separation-anxiety trial history; weeks-to-effect, combined with CBT where possible.", grade: "supported", drugConnection: "No child-dosing KYP lesson — the tier is taught here and the adult pharmacology cross-referenced to the adult anxiety courses (Panic Disorder & Agoraphobia; Social Anxiety Disorder & Specific Phobias); route never invented." },
    { name: "GABA", symbol: "GABA", role: "The benzodiazepine story's honest end: essentially no child-anxiety role — dependence plus paradoxical disinhibition; sedation before a feared situation is chemical rescue where exposure was the medicine.", grade: "established" },
    { name: "Noradrenaline", symbol: "NE", role: "The autonomic alarm's chemistry — the racing heart, the sweats, the clenched gut of the somatic carousel; the physical layer that makes the child's fear feel like illness.", grade: "supported" },
  ],
  pathways: [
    {
      id: "alarm-trap-pathway",
      name: "The alarm-trap pathway (temperament to disorder)",
      steps: [
        { label: "The sensitive alarm ships", detail: "Behavioural inhibition (the 20% of infants who withdraw from novelty) with the low amygdala threshold; heritability ~30–40%" },
        { label: "The body translates", detail: "The vagal-gut axis: the Sunday-evening stomach-ache, the school-morning headache that vanishes by lunch" },
        { label: "Escape teaches", detail: "Each avoided thing confirms the alarm's credibility — the relief lesson ('it WAS dangerous; see how good it felt to flee')" },
        { label: "Rescue amplifies", detail: "Parental accommodation adjusts the world so the alarm never hears a non-event — the trap's ally wearing love's clothes" },
        { label: "Avoidance spreads", detail: "School, then lessons, then the gate, then the bus, then the morning itself — impairment arrives, the disorder gate opens" },
      ],
      clinicalManifestation: "The 7-year-old five visits deep in the paediatric carousel — the pain real, the scans normal, the attendance decaying.",
      grade: "established",
    },
    {
      id: "calibration-pathway",
      name: "The calibration classroom (transmission and its interruption)",
      steps: [
        { label: "The inhibited infant", detail: "Slow-to-warm, high-reactive to new faces and sounds — a temperament, not yet a disorder" },
        { label: "The household demonstrates", detail: "The anxious parent flinches and rescues — alarm taught; the calm parent names it and rides the lift anyway — reset taught" },
        { label: "Two trajectories diverge", detail: "The same infant converts temperament into disorder under an anxious over-protector, or lands off the anxiety track with a brave-modelling non-rescuer" },
        { label: "The treatment mirrors the mechanism", detail: "Treat the parent's own anxiety and coach the accommodation away — the child's alarm loses both its teacher and its rescue team" },
      ],
      clinicalManifestation: "The mother whose GAD-7 is elevated and whose window-waving keeps the gate wail possible — the child's programme succeeding only when hers begins.",
      grade: "supported",
    },
    {
      id: "ladder-pathway",
      name: "The ladder (the recalibration route)",
      steps: [
        { label: "Rank", detail: "The feared situations scored 0–10 by the child's own fear" },
        { label: "Start low", detail: "Begin at 2–3 — brave enough to attempt, easy enough to succeed" },
        { label: "Stay till the wave falls", detail: "Habituation: the alarm hears the non-event, the fear falling inside the situation, never after escape" },
        { label: "Repeat, then climb", detail: "Each rung repeated till boring; the next rung attempted with brave-praise; the fire-drill relapse plan written at the end" },
      ],
      clinicalManifestation: "The school re-entry ladder — parent at the gate, parent departing for 10 minutes, half-day, full day — and the dog-phobic child's ladder from puppy video to patting a leashed calm dog.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "temperament-window", time: "Infancy", title: "The alarm ships sensitive", description: "Behavioural inhibition — roughly 20% of infants withdrawing from novelty — the strongest early childhood predictor of later social and separation anxiety; a temperament, not yet a disorder.", phase: "onset" },
    { id: "normal-fear-windows", time: "6 months – 5 years", title: "The normal windows open and close", description: "Stranger anxiety peaks 6–12 months, separation fear runs 9–18 months, the monster years are 3–5 — age-appropriate, transient, comfort-responsive; the same behaviours at school age are disorder.", phase: "onset" },
    { id: "trigger-era", time: "The loss or event", title: "The alarm gets material", description: "A parent's hospitalisation or death, a bullying campaign, an accident or medical procedure — separation anxiety spikes after a family loss or illness, the alarm protecting against the next catastrophe; onset becomes datable.", phase: "onset" },
    { id: "entrenchment-era", time: "Weeks to months", title: "The trap closes", description: "Avoidance grows, the somatic carousel begins its lap (ultrasound, stool, blood, tonic), attendance decays — the impairment that makes it a disorder; the Sunday-evening pattern writes itself into the family calendar.", phase: "peak" },
    { id: "treatment-arc", time: "Weeks 1–12 of the programme", title: "The ladder climbs", description: "Movement in 4–8 weeks: the somatic pains fade first, the sleep next, the school-ladder takes its weeks; substantial recovery in 3–6 months of proper work — CBT with the parent module, the SSRI tier where severity warrants.", phase: "recovery" },
    { id: "long-arc", time: "The long term", title: "The watchful adult", description: "Treated, most children recover fully — childhood anxiety one of child psychiatry's genuine success stories; untreated, half of adult anxiety disorders were once this child. The temperament stays: a careful, watchful, sensitive adult who knows how to handle an alarm.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Childhood anxiety disorders are the commonest mental-health conditions of childhood and adolescence: any-anxiety prevalence roughly 6–10% in mid-childhood, rising in adolescence (15–20% for any anxiety by late teens in some surveys). Separation anxiety is the most common in younger children (roughly 4% in the 6–11 band); specific phobias and GAD run across ages; social anxiety spikes at secondary-school entry. Girls carry roughly double the risk after age 6. Half of adult anxiety disorders began as childhood or adolescent conditions — the strongest argument for treating early rather than consoling with 'she'll grow out of it' (about a third do remit; the rest entrench).",
    indianPrevalence: "Community data (the National Mental Health Survey 2015–16 adolescent supplement; school-based studies) place anxiety among Indian adolescents in the high-single-digit to mid-teens percentage range, with exam-linked and somatic presentations dominating clinics. The Indian pathway shapes the visible picture: the child first tours the paediatrician and the ultrasound-lab carousel for recurring abdominal pain (in paediatric functional-pain clinics, anxiety disorders ride along in a large fraction), and the school-refusal spike is fed by middle-class academic pressure, one-child families with full parental attention to lose, and the hostel transition.",
    lifetimeRisk: "Half of adult anxiety disorders began in childhood or adolescence; roughly a third of childhood anxieties remit spontaneously — the rest persist or grow, and the longer the avoidance architecture stands, the deeper the foundations.",
    genderRatio: "Girls carry roughly double the risk after age 6.",
    ageOfOnset: "The age fingerprints: separation anxiety earliest (the young-child disorder and the 5–8 school-refusal engine); social anxiety and selective mutism at school entry; GAD in middle childhood; panic mostly post-pubertal and rare before 12.",
    indianNotes: "Detection still routes through the paediatric stethoscope: any Indian clinician seeing recurrent pain with normal reports, Sunday evenings, school mornings owns this diagnosis until they have asked the fear questions.",
  },
  etiology: [
    { category: "biological", factor: "Behavioural inhibition (the temperament)", details: "Kagan's construct — the 20% of infants who withdraw from novelty, high-reactive to new faces and sounds; the strongest early childhood predictor of later social and separation anxiety. The amygdala ships pre-set sensitive; experience then calibrates it." },
    { category: "genetic", factor: "The family loading", details: "Anxiety runs in families, heritability ~30–40%; the anxious parent transmits by gene AND by demonstration — both routes matter, and both are treatable." },
    { category: "psychological", factor: "The avoidance trap (the maintainer)", details: "More maintainer than cause: each escape or rescue lowers anxiety NOW and teaches the brain the thing was dangerous — the cycle that converts a temperament into a disorder. Informational transmission adds fuel: parental catastrophising narration, news-fear (accidents, kidnapping stories), teacher threats." },
    { category: "psychological", factor: "Trauma and adverse events", details: "Accidents, medical procedures, bullying, a parent's illness — the alarm gets real material to displace; sudden-onset anxiety demands the event hunt." },
    { category: "social", factor: "The family shape and the school climate", details: "Parental anxiety and overprotection (the 'hover' — rescue as love, the accommodation cycle); attachment insecurity adds risk while secure attachment with a calm facing-model protects; punitive teachers, bullying, performance terror, the entrance-coaching Std 9–12 engine; loss or illness in the family spiking separation anxiety." },
    { category: "environmental", factor: "The Indian amplifiers", details: "The 'shy child' virtue-label (quiet withdrawal praised as sanskaari — social anxiety protected from treatment by a compliment); hostel-at-8 forced separations on the unready nervous system; the joint-family rescue economy (three adults racing the alarm to the rescue); exam-anxiety culture with board marks as family destiny and panic normalised as 'everyone feels this, push harder'." },
  ],
  symptomClusters: [
    {
      category: "1. The somatic front (the Indian clinic's main door)",
      symptoms: [
        "Recurrent abdominal pain — characteristically Sunday evenings (from 6 p.m.) and school mornings, absent weekends and holidays, with normal examinations",
        "Headaches, nausea, vomiting before school or exams; dizziness, multiple 'gas' complaints",
        "The pattern is the diagnosis: time-linked to separation or performance, gone in its absence",
        "Sleep: difficulty settling alone, night waking, the nightmare era, refusing own bed or room",
        "Appetite dips on school days; toilet-frequency before tests",
      ],
    },
    {
      category: "2. Separation anxiety (the cling engine)",
      symptoms: [
        "Excessive distress at separation — wailing beyond age norm, panic at the school gate, clinging physically",
        "Worry about attachment figures' harm ('what if Amma dies while I'm at school'); refusal to sleep apart; shadowing the parent through the house",
        "Physical symptoms on school mornings; refusal to ATTEND without the parent — the school-refusal engine of the 5–8 age band",
        "Regression at separations: bed-wetting reappearing, baby-talk, sleep refusal",
      ],
    },
    {
      category: "3. Generalised anxiety (the worry engine)",
      symptoms: [
        "The 'what if' chorus about everything — marks, health, parents' safety, world events, weather",
        "Perfectionism: erasing whole pages, redoing homework, crying over 90%",
        "Restless, tiring easily, irritability; concentration whittled by worry (misread as ADHD)",
        "Muscle-tension complaints, jaw clenching, the 'can't switch off' description",
      ],
    },
    {
      category: "4. Social anxiety and selective mutism",
      symptoms: [
        "Frozen in performance settings — reading aloud, vivas, assemblies; blushing, tremor, nausea beforehand",
        "Avoids raising the hand, canteen queues, birthdays, being photographed",
        "Selective mutism: consistent speech in comfort settings (home), consistent SILENCE at school or with strangers for 1+ month — not defiance, not shyness: the alarm jamming the voice; often mistaken for stubbornness or hearing problems",
        "Pre-teen social anxiety announcing itself through school refusal too — the 'everyone will laugh' engine",
      ],
    },
    {
      category: "5. Specific phobias and panic",
      symptoms: [
        "Dogs and strays (the Indian street reality makes this a daily gauntlet), injections and medical procedures (the vaccination meltdown beyond age norm), lizards, cockroaches, lifts, tunnels, dark, thunder",
        "Immediate intense fear, avoidance architecture (route plans around dogs), distress out of proportion to actual danger",
        "Panic — racing heart, breathlessness, doom, then fear-of-the-fear: mostly post-pubertal and rare before 12; the full account lives in the Panic Disorder & Agoraphobia course",
      ],
    },
    {
      category: "6. The functional price (the disorder gate)",
      symptoms: [
        "Attendance decaying, grades sliding, friendships shrinking",
        "Family holidays impossible (flights, dogs at the resort), the family orbiting the alarm's rules",
        "Impairment is what makes it a disorder rather than a temperament — not the loudness of the crying",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The developmental logic (DSM-5 / ICD-11, paraphrased)",
      code: "Wrong window + persistence + impairment",
      criteria: [
        "Disorder-specific symptom patterns at developmentally INAPPROPRIATE intensity — stranger anxiety at 8 months is normal; the same at 8 years is a disorder.",
        "Duration beyond the normal window: weeks-to-months by disorder; selective mutism's gate is 1+ month of consistent home-speech with school or stranger silence.",
        "Clear impairment — avoidance spread, somatic load and functional cost decide severity, not how loudly the child cries.",
        "Separation anxiety, selective mutism and specific phobia are diagnosable in childhood with the same criteria as adults (DSM-5 moved separation anxiety out of the 'childhood-only' wing).",
        "The GAD child gate: worry plus at least ONE of restlessness, fatigue, concentration-irritability, muscle tension or sleep disturbance — versus three or more in adults, the child-specific mercy clause worth remembering.",
      ],
      duration: "Weeks-to-months by disorder; selective mutism 1+ month; the normal windows (stranger 6–12 months, separation 9–18 months, monster years 3–5) close years before any of this is diagnosable.",
      indianNote: "The Indian route to this diagnosis runs through the paediatric OPD: the somatic child with normal reports and time-locked symptoms deserves the fear interview in the same visit — the carousel is a cost, not a comfort.",
    },
    {
      system: "The assessment sequence",
      code: "Child alone, parent separately, school as truth serum",
      criteria: [
        "The fear interview with the CHILD alone (drawings, sentence-completions, the worry-monster naming for younger ones) AND the parent-separately account — children under-report to protect parents; parents over-report somatics; both inform.",
        "The timeline mapping: symptom diary against the school calendar — the Sunday-evening, Monday-morning, exam-week and holiday-vanishing patterns write the diagnosis in dates.",
        "The separation probe: what actually happens at the gate (the 20-minute wail versus the child who enters fine — different engines).",
        "The school report: the teacher's observation (the frozen-at-desk child versus the texting-parent-on-phone child), the attendance record — the objective truth serum.",
        "Somatic workup targeted, not blanket: the paediatric evaluation for recurring pain (typically already done, often thrice); urine and stool where indicated; NO endoscopy for the time-locked pattern with normal basics.",
        "The screens: depression (the school-referral of a 13-year-old 'anxious' child is often depression's anhedonic fatigue), trauma and bullying (sudden onset demands an event hunt), ADHD, thyroid (the one lab worth drawing in the anxious, weight-losing child), hearing for the 'not responding' child.",
        "The family map: who rescues what (the accommodation inventory — which adult does which rescue), the parental anxiety screen (the GAD-7/ASRS tier, named), the marriage-stress audit where separation anxiety is intense (the child guarding against a fracture).",
        "Rating scales named only: the SCAS/SCARED-lineage child-and-parent versions — tracking tools, not diagnostic oracles.",
      ],
      duration: "The full sequence runs across one or two contacts — the timeline and the school report are usually in hand before the second visit.",
      indianNote: "In the Indian clinic the mother arrives as case-manager and co-patient: screen her with the two-question GAD tier at the same visit and offer treatment — the child's programme's success rate doubles when the household's second alarm gets handled.",
    },
  ],
  severityScales: [
    {
      name: "SCAS",
      fullName: "Spence Children's Anxiety Scale",
      measures: "Child- and parent-report anxiety symptom tracking across the disorder-specific domains.",
      ranges: [],
      indianNote: "A tracking tool, not a diagnostic oracle — the school calendar and the attendance record diagnose more Indian children than any questionnaire.",
    },
    {
      name: "SCARED",
      fullName: "Screen for Child Anxiety Related Emotional Disorders",
      measures: "Child-and-parent versions; the scale lineage for tracking treatment response across the ladder's weeks.",
      ranges: [],
      indianNote: "Used where available in child-guidance clinics; the instrument never substitutes for the fear interview with the child alone.",
    },
    {
      name: "GAD-7 (the parent's own)",
      fullName: "Generalized Anxiety Disorder-7 — the parental screen",
      measures: "The accompanying parent's own anxiety — the household's second alarm on which the child's programme depends.",
      ranges: [],
      indianNote: "The two-question GAD tier for the mother is standard Indian child-anxiety work; her treatment doubles the child's programme success.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Normal developmental fears (stranger anxiety, monster-fears, separation)", distinguishingFeatures: "Age-window-appropriate, transient, respond to comfort — stranger 8 months, monster-fears 3–5 years, separation 9–18 months.", keyDifferentiator: "Disorder requires the wrong window PLUS persistence PLUS impairment — the window makes the disorder." },
    { condition: "ADHD (inattention at school)", distinguishingFeatures: "Concentration complaints that anxiety whittles by worry.", keyDifferentiator: "Attention intact on preferred non-feared tasks; the somatic time-pattern; the worry content elicited." },
    { condition: "Depression in adolescents", distinguishingFeatures: "Anhedonia, sustained mood change, global sleep and appetite shift.", keyDifferentiator: "The 'can't be bothered' versus the 'too scared to' — screen every adolescent anxiety referral." },
    { condition: "Trauma / PTSD after a specific event", distinguishingFeatures: "Onset datable, re-experiencing and avoidance of event-linked cues, hypervigilance.", keyDifferentiator: "Screen every sudden-onset anxiety — the event hunt before the label." },
    { condition: "Bullying-driven school avoidance", distinguishingFeatures: "An event between the child and schoolmates; the fear specific and rational.", keyDifferentiator: "Treat the bullying system, not the child's alarm — bullying is a system event, not a resilience lesson." },
    { condition: "Learning-disorder school aversion", distinguishingFeatures: "Fear of the SUBJECT or of exposure of failure; orally bright, print-struggling.", keyDifferentiator: "The aversion localises to the lesson, not the gate — the learning assessment settles it." },
    { condition: "Absence epilepsy (the staring child)", distinguishingFeatures: "Stereotyped seconds-long spells interrupting activity.", keyDifferentiator: "No worry content; the EEG." },
    { condition: "Autism (frozen at school, rigid)", distinguishingFeatures: "Social-reciprocity history plus sensory profile.", keyDifferentiator: "Selective mutism is the differential both ways — probe both; participation-without-speech points to mutism." },
    { condition: "The physically-ill child (the somatic mask)", distinguishingFeatures: "The targeted workup — which the time-locked pattern deserves once, not as a carousel.", keyDifferentiator: "Anxiety remains in the differential even with disease found: they coexist." },
  ],
  management: [
    { category: "psychotherapy", name: "CBT, child edition — the first line for all severities", description: "The Coping Cat-style package (the best-evidenced child-anxiety CBT): FEEL the fear (identify somatic signals), EXPECT the worst (name the thought), ACT brave (the plan), PRAISE the attempt — 12–16 sessions with parent modules. Externalisation first: the worry monster, the alarm, the 'worry bulbul' gets a NAME — the child fights a character, not themselves; worry time scheduled (10 minutes daily, contained); worry journals. The exposure ladder is the core tool: rank feared situations 0–10, start at 2–3, stay till the wave falls (habituation), repeat, climb. Cognitive work kept age-honest: probability games ('how many times did the monster's prediction come true?'), the detective metaphor; full thought-records for teens. Relapse prevention written at the end like a fire drill.", whenToUse: "First line at every severity; the moderate-severe add the SSRI tier to it rather than replacing it.", indianContext: "Child-guidance clinics (medical-college psychology departments) deliver CBT-tier care at low cost; private child psychologists run ₹800–2,500/session in metros (approx 2026); school counsellors are the exposure ladder's in-situ allies — arm them with the plan rather than bypassing them." },
    { category: "psychotherapy", name: "The parent module — accommodation reduction (the SPACE logic)", description: "Runs parallel to the child's CBT and sometimes IS the treatment. The accommodation inventory maps who rescues what, then the gradual withdrawal of rescue: the parent who slept on the floor beside the child's bed moves to the chair, then the doorway, then out — one rung at a time with brave-praise each step. Brave-modelling: naming parental anxiety and handling it aloud ('my tummy is doing the wobble-thing before this meeting; I'll breathe and go anyway'). Praise-shape: reward the APPROACH and the attempt, never the avoidance-free day alone; the somatic complaint gets 'I'm sorry your tummy hurts; you're still going' — kind and unmoved. The school-morning script: short, warm, boring-same-every-day; long goodbyes are the alarm's oxygen.", whenToUse: "Every child with an anxiety disorder — the household is either running the programme or running the trap.", indianContext: "Run this module with ALL the adults, grandparents included — the programme dies at the grandmother's 6 a.m. rescue mission; one family meeting with the three-generation attendance list is standard Indian child-anxiety work." },
    { category: "psychotherapy", name: "School liaison — the third rail of treatment", description: "The re-entry plan for school refusal: gradual (half-days first), a named safe-person and safe-place at school, the no-phone-home rule negotiated with parents, the teacher briefed NOT to spotlight the child. Accommodations: exemption-from-reading-aloud initially (fading later), the assembly plan, the canteen-buddy. Anti-bullying actions where the hunt found them — bullying treated as a system event, not a 'resilience lesson'.", whenToUse: "From the first week of any attendance-decaying picture — the school is the exposure arena, not a bystander.", indianContext: "CBSE/ICSE schools increasingly carry counsellors; the teacher's aide can be trained by the child psychologist in a visit or two; the attendance record is the objective outcome measure the Indian follow-up actually has." },
    { category: "pharmacotherapy", name: "The SSRI tier (moderate-to-severe) — and the benzo refusal", description: "For moderate-severe impairment or insufficient CBT response: sertraline or fluoxetine (the best-paediatric-evidence members; fluvoxamine carries the RUPP separation-anxiety trial history); start low, go slow, expect 4–6 weeks. The suicidality-class-warning conversation held honestly — in anxiety trials the aggregated signal shows benefit exceeding risk; say both sides. Combine with CBT where possible (the POTS/combination evidence: combination beating either alone in some analyses, CBT alone often sufficient for milder cases). Benzodiazepines: essentially no role in children — dependence and paradoxical disinhibition, an exam point and a practice point.", whenToUse: "Moderate-to-severe impairment, or the insufficient-CBT-response picture; never as the first move for the mild.", indianContext: "Sertraline ₹50–150/month, fluoxetine similar (approx 2026); liquid formulations useful for younger children. Resist the alprazolam-for-exams culture: it teaches chemical rescue to a brain that needs exposure lessons." },
    { category: "psychotherapy", name: "The specific packages", description: "Selective mutism: a blend of stimulus-fading (the speech-generalisation ladder across people and settings), shaping (whisper → word → sentence) and the MISC/communication-training approaches — NOT 'wait till she opens up', because the untreated course entrenches; SSRI adjuvant for the frozen-in-general child. Specific phobias: the child ladder version (3–6 sessions) the practical gold; injection phobias get applied-tension (the fainter's tool, taught in the Social Anxiety Disorder & Specific Phobias course). Exam anxiety: CBT skills plus practice-exam exposure under real timing, performance-psychology basics (routines, breathing, self-talk scripts), school cooperation for mock simulations — with the underlying GAD and perfectionism treated, not just the symptom papered.", whenToUse: "Matched to the presenting room; the mutism ladder starts the day the diagnosis is made.", indianContext: "The exam package is the March-prevention the school system can actually deliver — pre-board exposure workshops under exam conditions, timing routines, the relaxation script." },
    { category: "psychotherapy", name: "Treat the parent too (the joint plan)", description: "Parental anxiety disorders undermine the child's programme — the rescue-gene expressing itself nightly. The joint plan, child CBT plus the parent's own treatment, is the honest architecture; say it without blame ('your alarm taught hers; we now both do the programme').", whenToUse: "Whenever the parental screen is positive — which, in the anxious-child clinic, is often.", indianContext: "The child arrives as the index patient with the mother as case-manager; the two-question GAD tier for her, treatment offered in the same conversation — the child's programme's success rate doubles when the household's second alarm gets handled." },
  ],
  safety: {
    redFlags: [
      "Recurring pain with normal reports, Sunday evenings and school mornings — the clinician who sees this pattern owns the anxiety diagnosis until the fear questions have been asked; the third paediatric visit, not the thirteenth, is the circuit-breaker.",
      "Sudden-onset anxiety or school refusal — the event hunt (bullying, trauma, abuse) before any label; a datable onset demands the PTSD screen.",
      "The adolescent 'anxiety' referral that is depression — anhedonia and sustained mood change behind the worry; screen every adolescent, because the engine decides the treatment and the mood engine carries the risk.",
      "Attendance collapse — each month out of school raises the return price; home-schooling as the first move is the trap's favourite exit, not the treatment.",
      "Selective mutism punished as defiance — punishment deepens the jam (silence becomes safer than risk) and waiting entrenches; the home-speech tell settles it in one history.",
      "The anxious, weight-losing child — thyroid, the one lab worth drawing; and the alprazolam-for-exams prescription resisted wherever it is offered: chemical rescue for a brain that needs exposure lessons.",
    ],
    urgentGuidance:
      "The order of operations: (1) the time-locked pattern recognised and named at the paediatric third visit — 'the timing is the diagnosis' — with the fear interview delivered in the same visit; (2) the event hunt for every sudden onset, with bullying treated as a system event; (3) the depression screen on every adolescent anxiety referral; (4) the child kept IN the building — attendance in the smallest tolerable dose (the gate-visit, the hour, the half-day) while the programme runs, never the emergency exit first; (5) all rescuing adults trained together — the programme dies at the fastest rescuer; (6) benzodiazepines refused and the SSRI tier held for the moderate-severe with the suicidality-class-warning conversation held honestly — benefit and risk both said aloud.",
  },
  drugLinks: [],
  contentGaps: [
    "The child SSRI tier — sertraline and fluoxetine (the best-paediatric-evidence members of the moderate-severe tier, with the 4–6-week lag and the suicidality-class-warning conversation) and fluvoxamine (the RUPP separation-anxiety trial history) — has no child-dosing KYP lessons; the adult pharmacology lives in the adult anxiety courses (Panic Disorder & Agoraphobia; Social Anxiety Disorder & Specific Phobias; Generalized Anxiety Disorder (GAD)) and is cross-referenced, never linked as if it were the child route; the tier is taught here, route never invented.",
    "Benzodiazepines — the documented no-role in child anxiety (dependence and paradoxical disinhibition) and the alprazolam-for-exams culture this course teaches clinicians to refuse — are recorded as a refusal, not a route; no KYP drug lesson is assigned a child-anxiety role.",
    "Applied tension (the fainter's tool for injection phobias) is deferred by the note to the Phobias account — cross-referenced to Social Anxiety Disorder & Specific Phobias rather than taught in duplicate.",
    "The MISC/communication-training approaches for selective mutism have no dedicated KYP lesson; the stimulus-fading ladder and shaping protocol are taught here in full.",
    "The delivery tier the India layer depends on — child-guidance clinic directories and the school-counsellor referral structures — has no KYP service pages; the practical routing is taught in indianPractice.",
  ],
  patientGuide: {
    whatIsIt:
      "Your child's anxiety is an internal smoke detector that has become over-sensitive — firing at burnt toast two flats away. It is not naughtiness and not weakness, and the pains are not imagined. In children, anxiety rarely shows itself as fear: it arrives as body symptoms and behaviour — the Sunday-evening tummy-ache, the school-morning headache that vanishes by lunch, the wet bed again, the tantrum at the school gate, the child who cannot sleep alone or who cannot speak at school though they chatter at home. Left alone, avoidance grows and each avoided thing makes the alarm more believable. Treated, most children recover fully — childhood anxiety is one of child psychiatry's genuine success stories.",
    whatCausesIt:
      "The alarm partly ships from the factory sensitive — about one infant in five is born slow-to-warm and high-reactive, and anxiety runs in families (roughly a third of the tendency is inherited). The rest is learned: a frightening event or illness in the family gives the alarm material, an anxious household teaches it by demonstration, and — hardest to hear — the kindest rescue feeds it: every time the family removes the feared thing, the alarm learns it was right to fear. Nobody caused this on purpose; the softest homes often produce it most. The programme is everyone's job.",
    symptoms:
      "Body: recurring tummy-aches and headaches timed to school (Sunday evenings, school mornings, exam weeks — gone in the holidays), nausea or vomiting before school and exams, 'gas', poor sleep, wet beds again at times of stress. Behaviour: clinging at the gate and beyond it, shadowing a parent through the house, worrying aloud about a parent dying, refusing to sleep apart, avoiding raising the hand or joining the canteen, freezing when asked to read aloud. Some children worry about everything (marks, health, the news) and redo homework until it tears; some cannot speak at school at all though they speak freely at home. The cost — missed school, shrinking friendships, an unhappy family calendar — is what makes it a disorder rather than a personality.",
    treatment:
      "The medicine is gentle, graded facing of the feared thing, with the parents coached to stop rescuing. CBT the child way: the worry gets a name and a character to fight; worries get a scheduled ten minutes a day; feared situations are ranked and climbed like a ladder, starting easy, staying till the fear falls, praised at every rung. The parents' module: the boring-same goodbye every morning, brave-praise for attempts, the rescue missions gradually retired — and in a joint family that means grandparents too, whose new job is brave-praising, which they do better than anyone. The school helps: half-days first, a named safe person, no phoning home. For the more severe or stuck cases, a doctor may add an SSRI for some months — it is not addictive, and it is tapered after recovery. Families see movement in 4–8 weeks and substantial recovery in 3–6 months; the somatic pains fade first, the sleep next, the school-ladder takes its weeks.",
    selfHelp: [
      "The school-morning script: short, warm, exactly the same every day — long goodbyes are the alarm's oxygen.",
      "Worry time: ten scheduled minutes a day when worries are heard fully — and contained; the worry journal beside it.",
      "Brave-praise the approach, not the absence of distress: 'you went in even though your tummy hurt' is the sentence that builds the cure.",
      "The somatic answer: 'I'm sorry your tummy hurts; you're still going' — kind and unmoved.",
      "Keep the child in the building: the gate-visit, the hour, the half-day — each month out raises the return price.",
      "The Sunday assembly: all rescuing adults in one meeting, the rescue map drawn, the withdrawal ladder negotiated with the grandparents' dignity intact.",
      "The exam rules: practice papers under real timing, no countdown calendar, and the message that marks are recoverable and panic is treatable.",
      "The hostel question answered by readiness, not by the family's ambition: treat first, board later, graduated (weekends home, a named confidant).",
    ],
    whenToSeekHelp: [
      "Recurring pain with normal reports and school-calendar timing — ask the fear questions at the third visit, not after the second ultrasound.",
      "Sudden onset of anxiety or school refusal after an event — bullying, an accident, an illness in the family — needs the event heard, not just the symptom soothed.",
      "A child who speaks fluently at home and has been silent at school beyond a month — not stubbornness; the earlier treated, the shorter the road.",
      "An adolescent whose 'anxiety' comes with no pleasure left in anything — the mood needs screening the same week.",
      "Attendance decaying — the smallest tolerable dose of school plus the programme, urgently, before the exit hardens.",
      "The parent's own anxiety climbing with the child's — the household's second alarm deserves its own treatment; the child's recovery doubles when it gets it.",
    ],
    indianResources: [
      "Child-guidance clinics at medical-college psychology departments — CBT-tier care at low cost.",
      "The school counsellor (increasingly present in CBSE/ICSE schools) — the exposure ladder's in-situ ally; ask for the plan to be shared, not bypassed.",
      "The paediatrician as the front door and the somatic carousel's circuit-breaker — the doctor who says 'the reports are normal, the timing is the diagnosis, let's meet the fear' saves the family years.",
      "The private child psychologist in metros (₹800–2,500 per session, approx 2026) where the budget allows — the ladder is the same ladder either way.",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific childhood-anxiety pathway exists; practice follows the DSM-5/ICD-11 criteria structure with the child-guidance clinic (the medical-college psychology department) as the traditional delivery spine — and the paediatrician, not the psychiatrist, as the true front door and the somatic carousel's circuit-breaker.",
    systemContext: "Indian child-anxiety patients average years of ultrasound, stool and blood carousels before the fear questions are asked. The child first tours the paediatrician for recurring abdominal pain (functional abdominal pain and anxiety travel together — in paediatric functional-pain clinics, anxiety disorders ride along in a large fraction); the school-refusal spike is fed by middle-class academic pressure, one-child families and the hostel transition — a culture that treats distress as homesickness to be toughened through; joint families supply superb safety AND superb accommodation: three adults dispatching rescue missions.",
    programmeContext: "Child-guidance clinics deliver CBT-tier care at low cost; private child psychologists run ₹800–2,500/session in metros (approx 2026); school counsellors (increasingly present in CBSE/ICSE schools) are the exposure ladder's in-situ allies — arm them with the plan rather than bypassing them; sertraline ₹50–150/month with fluoxetine similar, liquid formulations useful for younger children; the teacher's aide trainable by the child psychologist in a visit or two.",
    costConsiderations: "The effective programme is nearly free where the child-guidance clinic is used — and the single most expensive item in this disease's Indian course is the carousel itself: the years of ultrasounds, panels and tonics that the fear interview at the third visit would have replaced. The fear interview costs nothing; the SSRI tier is cheaper than the tonic it follows; the scarcest resource is the trained adult attention the parent module needs.",
    culturalConsiderations: "The 'shy child' virtue-label — quiet withdrawal praised as sanskaari keeps social anxiety out of treatment for years (the clinical counter: 'shy is a temperament; frozen is a disorder — your child can stay a quiet person AND be able to read aloud and make one friend; those are different things'). Hostel-at-8 traditions force separations on unready nervous systems; the break reads as weakness, not anxiety. The joint-family rescue economy gives the alarm a 24×7 response team — the Sunday assembly with the three-generation attendance list is the standard answer, with the grandparents' dignity kept (their job becomes brave-praising, which they do better than anyone). March is a somatic-symptom monsoon for adolescents — pre-board exposure workshops, the no-countdown-calendar rule, and the message that marks are recoverable and panic is treatable. The selective-mutism hearing-test detour (the ENT tour, then the stubbornness verdict) is broken by one history: a child who narrates cricket at full volume in the kitchen is not aphasic.",
    patientCounselling: [
      "The paediatrician's pattern-recognition sentence, taught to every parent and every GP: 'pain that follows the school calendar is a message about school'.",
      "The hostel script: 'readiness is the child's nervous system, not the family's ambition — a graduated boarding plan (weekends home the first term, a named house-parent confidant) protects most children; the child with active separation-anxiety disorder gets treatment BEFORE boarding, not boarding as treatment.'",
      "The shy-child counter: 'shy is a temperament; frozen is a disorder — those are different things.'",
      "The mutism script: 'the kitchen-commentary child is not stubborn and not deaf — the alarm is jamming the voice, and punishment deepens the jam.'",
      "The mother's script, delivered without blame: 'your alarm taught hers; we now both do the programme — the child's success rate doubles when the household's second alarm gets handled.'",
      "The exam script: 'marks are recoverable and panic is treatable — the countdown calendar comes off the wall and the practice papers go on the desk.'",
    ],
  },
  decisionPath: {
    title: "The school-refusal engines — the child who will not go (and the stomach that will not let them)",
    nodes: [
      {
        id: "start",
        question: "A child with school attendance decaying and/or the somatic carousel — recurring pain, normal reports, school-calendar timing. First: the engine hunt.",
        branches: [
          { label: "The somatic carousel first — pain, normal reports, timing", next: "carousel-gate" },
          { label: "The cling engine — 5–8, gate wail, 'what if you die'", next: "separation-path" },
          { label: "Anxiety-specific — performance, bullying, 'everyone will laugh'", next: "anxiety-path" },
          { label: "The adolescent absence — tired or elsewhere", next: "mood-truancy-gate" },
        ],
      },
      {
        id: "carousel-gate",
        question: "The time-locked pattern: Sunday evenings, school mornings, holiday-vanishing, normal workup.",
        recommendation: "The sentence delivered at the THIRD paediatric visit, not the thirteenth: 'pain that follows the school calendar is a message about school.' Targeted workup only (no endoscopy for the time-locked pattern with normal basics); the fear interview with the child alone and the parent separately in the same visit; the mother's two-question GAD tier; then the engine hunt — this carousel is the door, not the diagnosis.",
      },
      {
        id: "separation-path",
        question: "Separation anxiety disorder — the 5–8 engine, often after a family loss, illness or hospitalisation.",
        recommendation: "The fear interview plus the timeline mapping against the school calendar; CBT the child way (externalisation, the ladder) with the parent module (the accommodation inventory, the boring-same goodbye, brave-praise); the re-entry ladder — parent at the gate, gate-then-depart 10 minutes, half-days, full days; the loss-event story repaired; the SSRI tier only for moderate-severe or insufficient CBT response; the mother's own anxiety treated where the screen is positive.",
      },
      {
        id: "anxiety-path",
        question: "The anxiety-specific engine — what flavour is the fear?",
        branches: [
          { label: "Sudden onset — the event hunt first", next: "event-hunt" },
          { label: "Frozen speech at school, fluent at home", next: "mutism-path" },
          { label: "Performance and exam terror", next: "performance-path" },
        ],
      },
      {
        id: "event-hunt",
        question: "Datable onset: bullying, trauma, an accident, a medical event.",
        recommendation: "The PTSD screen and the bullying audit before any anxiety label — bullying treated as a system event, not a resilience lesson; trauma-linked re-experiencing and hypervigilance handled on their own account; the anxiety ladder then built for whatever fear remains once the event's work is done.",
      },
      {
        id: "mutism-path",
        question: "Selective mutism — home-speech with school-silence beyond 1 month, participation intact.",
        recommendation: "The stimulus-fading ladder rung by rung (teacher card games → whisper-games with one friend → the carrier phrase in the corridor → speech to the teacher via the friend → the after-hours empty classroom → three children → the full class), shaping from whisper to word to sentence, the no-pressure protocol on paper (no spotlight, no bribe-for-words, communication-only goals), home bravery-generalisation (ordering at shops, answering the phone), hearing tested once — and treatment started early, because waiting entrenches. The SSRI adjuvant reserved for the frozen-in-general child.",
      },
      {
        id: "performance-path",
        question: "Exam and performance anxiety — the March monsoon's individual face.",
        recommendation: "CBT skills plus practice-exam exposure under real timing; performance-psychology basics (routines, breathing, self-talk scripts); school cooperation for mock simulations; the underlying GAD and perfectionism treated in their own right, not just the symptom papered; the alprazolam-for-exams prescription refused — chemical rescue for a brain that needs exposure lessons.",
      },
      {
        id: "mood-truancy-gate",
        question: "The adolescent absence: distressed in the morning, or gone without distress?",
        branches: [
          { label: "Anhedonic fatigue — 'can't be bothered', sustained mood change", next: "mood-path" },
          { label: "Out of school and elsewhere — no morning distress at all", next: "truancy-path" },
        ],
      },
      {
        id: "mood-path",
        question: "The mood engine — the 'anxiety' referral that is depression.",
        recommendation: "The depression screen completed the same visit; the engine named honestly (the 'too scared to' versus the 'can't be bothered'); the mood treated first with the anxiety reassessed after — the school-referral of a 13-year-old 'anxious' child is often depression's anhedonic fatigue wearing anxiety's clothes.",
      },
      {
        id: "truancy-path",
        question: "The truancy engine — absence without the alarm.",
        recommendation: "Conduct-driven truancy: the child is elsewhere (often with the family unaware of the whereabouts), without morning somatics or separation distress; the treatment is the conduct programme and the school-family system work — the anxiety ladder has nothing to climb here; the differential is the whole treatment.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Treating the pain, missing the pattern",
      why: "Normal reports plus recurring pain invite the next investigation rather than the next question — and the carousel (ultrasound twice, stool tests, panels, tonics) costs the family years while the attendance decays.",
      correction: "The pattern IS the clinical finding: pain that follows the school calendar is a message about school; the fear interview belongs in the same visit as the normal result.",
    },
    {
      mistake: "'Force her into school' as the treatment",
      why: "The forced-in-with-wailing child learns that school is a place she gets abandoned at — entrenchment by abandonment; the alarm grows the lesson.",
      correction: "Firm AND graduated: the re-entry ladder (gate-visit, half-day, safe-person, full day) with brave-praise at each rung — the ladder beats the dump every time.",
    },
    {
      mistake: "Selective mutism treated as stubbornness or deafness",
      why: "The ENT tour and the punishment share one error — reading a jammed alarm as a defiant will; punishment deepens the jam because silence becomes safer than risk.",
      correction: "One history settles it: the kitchen-commentary child is not aphasic; the ladder (through friends first) plus the no-pressure protocol, started early — waiting entrenches.",
    },
    {
      mistake: "Missing the depression under the adolescent 'anxiety' referral",
      why: "The adolescent's worry presentation hides the anhedonic fatigue; the engine mislabelled, the mood goes untreated while the anxiety work predictably fails.",
      correction: "The screen on every adolescent: anhedonia, sustained mood change, global sleep-appetite shift — the 'can't be bothered' versus the 'too scared to'.",
    },
    {
      mistake: "Missing bullying or trauma as the engine of a sudden-onset school refusal",
      why: "A datable onset is not a temperament declaring itself — it is an event announcing itself; treating the alarm without treating the event leaves the cause in place.",
      correction: "Every sudden-onset anxiety gets the event hunt; bullying handled as a system event, trauma on its own account — then the ladder for what fear remains.",
    },
    {
      mistake: "Running the parent module with one parent only",
      why: "The programme dies at the fastest rescuer — the grandmother's 6 a.m. rescue mission undoes the week's ladder in one morning; the joint family is a 24×7 response team unless convened.",
      correction: "The Sunday assembly: all rescuing adults in one meeting, the accommodation inventory drawn (who does which rescue), the withdrawal ladder negotiated with the grandparents' dignity intact — their job becomes brave-praising.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The five rooms (S-G-S-S-S): Separation, Generalised, Social, Selective-mutism, Specific phobia — one alarm misplaced in different rooms, each with its duration/persistence gates and the developmental-inappropriateness clause.",
        "The age fingerprints: separation earliest (the 5–8 school-refusal engine), social anxiety and selective mutism at school entry, GAD in middle childhood, panic mostly post-pubertal.",
        "The GAD child gate: worry + at least 1 of the restlessness/fatigue/concentration/muscle/sleep cluster versus 3+ in adults — the exam-perfect detail.",
        "The normal windows: stranger 6–12 months, separation 9–18 months, monster years 3–5 — the window makes the disorder.",
        "The four engines of school refusal (S-A-M-T) and why the treatment differs per engine.",
        "Selective mutism: home-speech with school-silence 1+ month, participation-without-speech — and why waiting entrenches.",
      ],
      practical: [
        "Take the fear interview with the child alone — drawings, sentence-completions, the worry-monster naming — then the parent separately; demonstrate why both inform.",
        "Map the symptom timeline against the school calendar and present the diagnosis the dates write.",
        "Draw the accommodation inventory of a three-generation household and negotiate the withdrawal ladder with the grandparents' dignity intact.",
      ],
      longAnswer: [
        "A 7-year-old with recurring abdominal pain, normal reports and school-morning timing: diagnosis and management — the evergreen Indian essay (the time-locked pattern, the fear interview, the re-entry ladder, the parent module).",
        "School refusal: differential diagnosis and approach — the four engines with the treatment per engine.",
        "Selective mutism versus autism: the differentiation and the management ladder.",
        "Treatment of separation anxiety disorder: the CBT architecture, the parent module, the SSRI tier's place.",
      ],
    },
    neetPg: {
      highYield: [
        "THE PREVALENCE: childhood anxiety disorders = the commonest child mental-health conditions (6–10% mid-childhood, 15–20% by late teens in some surveys); girls ~2× after 6; half of adult anxiety began in childhood.",
        "SEPARATION ANXIETY: the commonest in young children (~4% in the 6–11 band) and the top engine of early school refusal; often begins after a family loss, illness or hospitalisation; DSM-5 moved it out of the childhood-only wing.",
        "THE GAD CHILD GATE: worry + 1 accompanying symptom (restlessness/fatigue/concentration/muscle/sleep) versus 3+ in adults — the child-specific mercy clause.",
        "SELECTIVE MUTISM: speaks at home, silent at school for 1+ month; participation-without-speech (the autism differential); treat early — waiting entrenches.",
        "THE TREATMENT LOGIC IN ONE SENTENCE: the alarm recalibrates through experienced non-events; avoidance and rescue maintain it.",
        "THE BEST-EVIDENCED CBT: the Coping Cat lineage (FEEL-EXPECT-ACT-PRAISE), 12–16 sessions with parent modules; the exposure ladder ranked 0–10 started at 2–3 with stay-till-the-wave-falls.",
        "THE PARENT MODULE: the SPACE accommodation-reduction logic; run with ALL adults — the programme dies at the fastest rescuer.",
        "THE SSRI TIER: sertraline/fluoxetine for moderate-severe, 4–6 weeks to effect, combination > either alone in some analyses (POTS/CAMS); the suicidality-class-warning conversation held honestly.",
        "BENZODIAZEPINES: no meaningful child role — dependence and paradoxical disinhibition; the exam point and the practice point.",
        "THE INDIAN PATTERN: somatic-front presentation → the paediatric carousel → the time-locked pain sentence as circuit-breaker; the March exam-season somatic monsoon.",
      ],
      pyqConcepts: [
        "The GAD child-gate symptom count — the one-mark differentiator that appears across exam tiers.",
        "The time-locked somatic pattern — the clinical-vignette answer ('Sunday evenings, school mornings, normal reports').",
        "The four engines of school refusal (S-A-M-T) — the differential-listing question.",
        "The selective-mutism first rung (speech returns through friends first) — the management-ordering question.",
        "The third-visit circuit-breaker sentence — the Indian-context discussion question.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 7-year-old Coimbatore girl, only child of two software engineers, at paediatrics for the fifth time in four months: abdominal pain every Sunday from 6 p.m. and every school morning, absent Saturdays and holidays; two ultrasounds, stool tests and blood panels normal; antacids, then antispasmodics, then a 'digestive tonic'; vomiting by the Std 2 annual-exam week; the school calls her 'a quiet, perfect child'; the mother reports she will not enter unless the mother stands at the gate, and the driver says she watches her through the window all morning; bed-sharing regression since the grandfather's hospitalisation eight months prior; the mother's own GAD-7 elevated. The engine: separation anxiety disorder with somatic presentation — the timing is the diagnosis; the management: carousel closed, the re-entry ladder (gate → 10-minute departures → half-days → full days over three weeks), the boring-same goodbye, the no-window-watching agreement, the father assigned the morning routine (the mother's alarm-model made her the worse gate-parent), the worry-monster externalisation with worry time, the hospitalisation-story repair session, and the mother's own GAD treated — six weeks to full attendance and pain down to rare Sundays: the window-watching maintaining the fear both ways, and treating the mother treating the child.",
        "A 6-year-old Ludhiana boy referred by his school after two terms: never spoken in class, answering by pointing and nodding, yet competent and integrated in play on the sports field — participation without speech; at home 'a full cricket commentary channel', bilingual fluency, normal milestones; no autism red flags (pointed, showed, pretended; rich pretend play; excellent reciprocal gaze; no repetitive or sensory cluster); grandmother reports him slow-to-warm since babyhood, hiding behind her dupatta ten minutes with any guest; hearing tested once, normal; no trauma event. The engine: selective mutism — social anxiety's extreme costume in a behaviourally-inhibited boy; the home-speech tell writes the diagnosis. The management: the stimulus-fading ladder (teacher yes/no card games → whisper-games with one friend during play → the carrier-phrase technique in the corridor → speech to the teacher via the friend as intermediary → 'playing teacher' reading aloud in the after-hours empty classroom → three children present → the full class), the no-pressure protocol on paper (no spotlight, no bribe-for-words, communication-only-not-speech goals), home bravery-generalisation (ordering at shops, answering the phone, the joint family's daily exposures), the teacher's aide trained in two visits — and no medication, the SSRI tier reserved. One year, the honest clock: short sentences to the teacher, two friends in full voice, class presentations 'the next rung' — peer speech returning before adult speech, and the months-to-a-year timeline protecting the family from the quack-cure industry.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Separation anxiety disorder = the commonest anxiety disorder of young children and the top engine of early school refusal.",
        "Selective mutism: speaks at home, silent at school, 1+ month — not defiance; participation-without-speech.",
        "GAD in children: worry + ONE accompanying symptom (adults need three or more).",
        "Graded exposure (experienced non-events) = the core corrective experience; benzodiazepines have essentially no role.",
        "Normal windows: stranger 6–12 months, separation 9–18 months, monster years 3–5.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The accommodation inventory run with ALL the adults — the Sunday assembly with the three-generation attendance list; the programme dies at the fastest rescuer, and the grandparents' new job (brave-praising) is the dignified route around that death.",
        "Treat the mother and you treat the child: the two-question GAD tier at the same visit, treatment offered in the same conversation — the child's programme's success rate doubles when the household's second alarm gets handled.",
        "The father-swap is legitimate child-anxiety medicine: where the mother's alarm-model makes her the worse gate-parent, assigning the morning routine to the father is honest and works — the family's own route around the maternal-anxiety loop.",
        "The hospitalisation-story repair session: drawing the visit, naming the fear, the doctor's note that 'thata's operation succeeded; he lives' — the loss-event worked through, not merely dated.",
        "The honest one-year clock of selective mutism protects families from the quack-cure industry — and the SSRI tier stays reserved, not reflexive.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The Sunday-evening stomach",
      presentation: "Five paediatric visits, two ultrasounds and a digestive tonic in four months — and the diagnosis was written in the calendar all along: Sundays from 6 p.m., gone by Saturday.",
      initialPresentation: "A 7-year-old Coimbatore girl, only child of two software engineers, was brought to paediatrics for the fifth time in four months with recurring abdominal pain — every Sunday from 6 p.m. and every school morning, absent on Saturdays and holidays, escalating to vomiting during the Std 2 annual-exam week; ultrasound twice, stool tests and blood panels all normal.",
      history: "Antacids, then antispasmodics, then a 'digestive tonic' — the carousel's three laps. The school reported her 'otherwise quiet, perfect child'. The mother, tearful, confessed: 'she will not enter unless I stand at the gate; the driver says she watches me through the window all morning'. Bed-sharing regression since the paternal grandfather's hospitalisation eight months prior — the engine's origin. No bullying; learning intact; the mother's own GAD-7 elevated, the catastrophising narrator.",
      examination: "Growth and examination normal (the carousel's own finding). The separation probe: the gate wail beyond age norm; the window-watching confirmed by the driver's account; the 'what if you die at office' worry elicited in the child-alone interview; the inhibited temperament by history.",
      diagnosis: "Separation anxiety disorder with somatic presentation — the time-locked pain pattern riding on the grandfather's-hospitalisation trigger, in an inhibited temperament, with maternal-anxiety amplification.",
      management: "The somatic carousel closed with the sentence delivered: the timing is the diagnosis. The school re-entry ladder over three weeks — mother at the gate, gate-then-depart 10 minutes, the named teacher-helper at the window-seat, full days. The parent module: the boring-same-goodbye script, the no-window-watching agreement with the school, the brave-praise calendar; the father assigned the morning routine (the mother's alarm-model made her the worse gate-parent; the swap was honest and worked). The 'worry monster' externalisation with worry time and the worry-journal; the hospitalisation-story repair session — drawing the visit, naming the fear, the doctor's note that 'thata's operation succeeded; he lives'. The mother's own GAD treated with her own CBT.",
      outcome: "Six weeks: full attendance, pain down to rare Sundays. Three months: no bed-sharing, one gate hug and departure — the programme's whole thesis in a farewell.",
      teachingPoints: [
        "The paediatric carousel broke at the sentence 'the timing is the diagnosis' — the pattern-recognition moment at the fifth visit that belonged at the third.",
        "The loss-event origin was findable: the 8-month timeline from the grandfather's hospitalisation to the bed-sharing regression.",
        "The window-watching was the maintaining behaviour BOTH ways — the mother's waving made the watching possible, and the watching made the wail rational.",
        "The father-swap was the Indian family's route around the maternal-anxiety loop — assigning the morning routine honestly rather than asking the anxious parent to perform calm.",
        "Treating the mother was treating the child: her CBT was part of the paediatric plan, not a referral footnote.",
      ],
    },
    {
      title: "The boy who spoke only at home",
      presentation: "Two terms of silence at school, a full cricket commentary channel at home — the kitchen knew the diagnosis the classroom refused to name.",
      initialPresentation: "A 6-year-old Ludhiana boy was referred by his school after two terms in which he had never spoken in class — not to the teacher, not to classmates, answering by pointing and nodding — while remaining competent and integrated in play on the sports field.",
      history: "At home: 'a full cricket commentary channel', bilingual fluency, age-appropriate milestones, no autism red flags on history (pointed, showed, pretended as a toddler; rich pretend play; excellent reciprocal gaze; no repetitive or sensory cluster). The grandmother's account: 'slow-to-warm since babyhood, hides behind my dupatta for ten minutes with any guest, then warms.' No trauma event. Hearing tested once, normal — the ENT detour already taken.",
      examination: "Consistent home-speech with consistent school-silence well beyond 1 month — the selective-mutism gate. The tell observed directly: social participation without speech (competent, integrated play). The inhibited temperament by history; no event, no regression elsewhere.",
      diagnosis: "Selective mutism — social anxiety's extreme costume in a behaviourally-inhibited boy.",
      management: "The school-and-family stimulus-fading ladder: the class teacher started with yes/no card games → whisper-games with one friend during play → the 'carrier phrase' technique with the same friend in the corridor → speech to the teacher via the friend as intermediary → the mother pre-visited the classroom after hours and he 'played teacher', reading aloud in the empty class → the class with three children present → the full class. The no-pressure protocol: no spotlight, no bribe-for-words, communication-ONLY-not-speech goals on paper. Home bravery-generalisation practice — ordering at shops, answering the phone, the joint family's daily exposures. The teacher's aide trained by the child psychologist (2 visits). NO medication: severity did not warrant it; the SSRI tier reserved.",
      outcome: "One year — the honest clock: speaking to the teacher in short sentences, two friends in full voice, class presentations still 'the next rung'.",
      teachingPoints: [
        "Home-speech tells the diagnosis: the kitchen-commentary child is not aphasic, not autistic on this evidence, and not stubborn.",
        "Participation-without-speech is the selective-mutism signature that separates it from autism's withdrawal.",
        "The ladder works through FRIENDS first — peer speech returns before adult speech.",
        "The honest timeline (months-to-a-year) protects the family from the quack-cure industry.",
        "The SSRI tier stays reserved, not reflexive — no medication was this boy's correct prescription.",
      ],
    },
  ],
  clinicalPearls: [
    "The presenting complaint is usually somatic: pain that follows the school calendar is a message about school — the timing is the diagnosis.",
    "School refusal is a symptom with four engines — separation, anxiety-specific, mood, truancy (S-A-M-T) — and the treatment differs per engine.",
    "Stranger anxiety at 8 months is normal; the same at 8 years is a disorder — the window makes the disorder.",
    "The GAD child gate: worry + 1 of the restlessness/fatigue/concentration/muscle/sleep cluster, versus 3+ in adults.",
    "Selective mutism is social anxiety's most extreme costume: consistent home-speech, consistent school-silence for 1+ month, participation-without-speech.",
    "The alarm recalibrates through experienced non-events — you cannot talk the detector down; you must let it hear toast burn, again and again, without a fire.",
    "Rescue is the trap's ally: each escape teaches the brain the thing was dangerous — the kindest long-run parenting is the short-run tolerance of the child's discomfort.",
    "The exposure ladder protocol: rank feared situations 0–10, start at 2–3, stay till the wave falls, repeat, climb.",
    "Benzodiazepines have essentially no child-anxiety role — dependence and paradoxical disinhibition; the exam point and the practice point.",
    "Run the parent module with ALL the adults or it doesn't run — the programme dies at the grandmother's 6 a.m. rescue mission.",
    "Treat the parent too: the child's programme's success rate doubles when the household's second alarm gets handled.",
    "Peer speech returns before adult speech — the selective-mutism ladder runs through friends first.",
    "Hostel readiness is the child's nervous system, not the family's ambition: treatment BEFORE boarding, never boarding as treatment.",
  ],
  highYieldSummary: [
    "Definition: childhood anxiety = one over-sensitive alarm misplaced in five rooms — separation anxiety (the commonest of young children and the top engine of early school refusal), generalised anxiety, social anxiety, specific phobia, selective mutism — diagnosable at developmentally inappropriate intensity, beyond the normal window (stranger 6–12 months, separation 9–18 months, monster years 3–5), with impairment as the disorder gate; DSM-5 moved separation anxiety out of the childhood-only wing, and the GAD child gate is worry + ONE accompanying symptom versus three or more in adults.",
    "Epidemiology: the commonest mental-health conditions of childhood and adolescence — any-anxiety 6–10% in mid-childhood, 15–20% by late teens in some surveys; separation anxiety ~4% in the 6–11 band; girls ~2× after age 6; half of adult anxiety disorders began as childhood conditions (a third remit spontaneously, the rest entrench); India: the NMHS 2015–16 adolescent supplement placing anxiety in the high-single-digit to mid-teens range, exam-linked and somatic presentations dominating, functional abdominal pain and anxiety travelling together.",
    "Mechanism: three stories — the sensitive alarm (the amygdala's hair trigger shipping with behavioural inhibition, the 20% of infants who withdraw from novelty, heritability ~30–40%); the avoidance trap (relief as the brain's most effective teacher, rescue as the trap's ally, the avoided list growing from school to the morning itself); the calibration classroom (the anxious household teaching alarm, the calm brave-modelling household teaching reset — which is why treating the parent is standard child-anxiety medicine). The somatic carousel is real physiology: the vagal-gut axis, normal scans as the signature rather than a contradiction.",
    "Clinical: the somatic front (Sunday 6 p.m. onwards, school mornings, holiday-vanishing, exam vomiting, sleep and bed-wetting regression); the separation engine (gate wail, 'what if Amma dies', shadowing, the 5–8 school-refusal band); the worry engine (the what-if chorus, perfectionism crying over 90%, concentration misread as ADHD); the social room (frozen performance, the 'everyone will laugh' refusal engine) with selective mutism at its extreme (home-speech, school-silence 1+ month, participation-without-speech); the specific phobias (dogs and strays the Indian daily gauntlet, injections, lizards, lifts); panic mostly post-pubertal and rare before 12; the functional price (attendance, grades, friendships, the family calendar) as the disorder gate.",
    "Diagnosis: the fear interview with the child alone (drawings, worry-monster naming) plus the parent separately; the timeline mapped against the school calendar; the gate probe; the school report as truth serum; a targeted (never blanket) somatic workup — no endoscopy for the time-locked pattern with normal basics; the screens (depression in every adolescent, trauma and bullying in every sudden onset, ADHD, thyroid in the anxious weight-losing child, hearing in the 'not responding' child); the family map (the accommodation inventory, the parental GAD-7/ASRS tier, the marriage-stress audit); SCAS/SCARED-lineage scales as trackers, not oracles. The differential: the normal windows, ADHD (attention intact on preferred non-feared tasks), depression ('can't be bothered' vs 'too scared to'), PTSD (datable onset), bullying, learning-disorder aversion, absence epilepsy, autism (reciprocity and sensory history), the physically-ill child.",
    "Management: CBT the child way is the first line for all severities — the Coping Cat structure (FEEL-EXPECT-ACT-PRAISE) across 12–16 sessions with parent modules, externalisation (the worry monster, the worry bulbul, scheduled worry time), and the exposure ladder (rank 0–10, start 2–3, stay-till-the-wave-falls, repeat, climb, the fire-drill relapse plan); the parent module running parallel (the SPACE accommodation-reduction logic: the floor-to-chair-to-doorway ladder, brave-modelling, praise-the-approach, the boring-same goodbye); school liaison (graduated re-entry, the named safe-person, the no-phone-home rule, no spotlight, the reading-aloud exemption that fades); the SSRI tier for moderate-severe or insufficient CBT response (sertraline/fluoxetine, 4–6 weeks, the suicidality-class-warning conversation with both sides said, combination beating either alone in some analyses); benzodiazepines refused (dependence, paradoxical disinhibition); the specific packages (the selective-mutism stimulus-fading ladder through friends, the 3–6-session phobia ladder, exam exposure under real timing); and the parent's own anxiety treated — the success rate doubling when the household's second alarm gets handled.",
    "The India layer and the prognosis: the paediatric carousel as the main door (the circuit-breaker sentence at the third visit); the hostel decision (readiness is the child's nervous system — treatment before boarding, graduated boarding after); the joint-family rescue economy convened through the Sunday assembly with the grandparents' dignity intact; the March exam-season somatic monsoon met with pre-board exposure workshops and the no-countdown-calendar rule; the shy-child praise wall ('shy is a temperament; frozen is a disorder'); the selective-mutism hearing-test detour broken by the home-speech history; the mother's own treatment as the programme's multiplier; costs (child-guidance clinics at low cost, private psychologists ₹800–2,500/session in metros, sertraline ₹50–150/month — approx 2026). Treated: movement in 4–8 weeks, substantial recovery in 3–6 months — the somatic pains fade first, the sleep next, the school-ladder takes its weeks, and the temperament stays as a careful, watchful adult who knows how to handle an alarm.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "ca-quiz-1",
      question: "Stomach-aches occurring Sunday evenings and school mornings, vanishing in the holidays, with a normal workup, suggest:",
      options: ["Crohn's disease", "Anxiety disorder with somatic presentation — the time-locked pattern", "School laziness", "Malingering"],
      correctIndex: 1,
      explanation: "The timing is the diagnosis — the sentence to teach every paediatrician; the normal reports are the anxiety's signature, not a contradiction.",
      afterSectionId: "symptoms",
    },
    {
      id: "ca-quiz-2",
      question: "The core corrective experience that recalibrates the anxious child's alarm:",
      options: ["Parental reassurance", "Graded exposure — experienced non-events, the ladder", "Avoidance until readiness", "Sedation before feared situations"],
      correctIndex: 1,
      explanation: "Alarms reset through lived non-events; rescue deepens the setting — you cannot talk the detector down.",
      afterSectionId: "mechanism",
    },
    {
      id: "ca-quiz-3",
      question: "The child-specific GAD gate differs from the adult criterion in requiring:",
      options: ["Six months' worry with only 1 additional symptom of the associated cluster", "Three months' worry with 3 additional symptoms", "Somatic complaints made mandatory", "A teacher's report made mandatory"],
      correctIndex: 0,
      explanation: "The paediatric mercy clause: one of the restlessness/fatigue/concentration/muscle/sleep cluster suffices in children, versus three or more in adults.",
      afterSectionId: "diagnosis",
    },
    {
      id: "ca-quiz-4",
      question: "A 13-year-old with two months of school refusal: no somatic symptoms, no morning distress, found at the gaming parlour when 'at school'. The engine:",
      options: ["Separation anxiety", "Anxiety-specific (performance)", "Mood (depression)", "Truancy — the conduct engine"],
      correctIndex: 3,
      explanation: "S-A-M-T: absence without distress and elsewhere is the truancy engine — the treatment is the conduct programme, not the anxiety ladder.",
      afterSectionId: "differential",
    },
    {
      id: "ca-quiz-5",
      question: "A 6-year-old speaks fluently at home, has been silent at school for 4 months, participates in play, milestones normal. The best next step:",
      options: ["Punishment for defiance", "The stimulus-fading speech ladder with a no-pressure school protocol", "Hearing surgery referral", "An autism workup centred on speech"],
      correctIndex: 1,
      explanation: "The participation-without-speech signature; the ladder through peers first, treated early — waiting entrenches.",
      afterSectionId: "management",
    },
    {
      id: "ca-quiz-6",
      question: "The best-evidenced medication tier for a child with moderate-to-severe generalised anxiety after insufficient CBT response:",
      options: ["Alprazolam as needed before school", "An SSRI — sertraline or fluoxetine, low-start, weeks-to-effect", "Risperidone", "Melatonin"],
      correctIndex: 1,
      explanation: "The POTS/CAMS-tier evidence; benzodiazepines have essentially no child-anxiety role — dependence and paradoxical disinhibition.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Give the 'normal window versus disorder' logic, with the age fingerprints of the normal fears.", answer: "THE LOGIC: disorder requires the wrong developmental window PLUS persistence PLUS impairment — the window makes the disorder. THE FINGERPRINTS: stranger anxiety peaks 6–12 months; separation fear runs 9–18 months; the monster years are 3–5 — all age-appropriate, transient and responsive to comfort. The same behaviours at school age (the 8-year-old wailing at a stranger, the school-age child unable to separate) are disorder, not immaturity. The exam sentence: stranger anxiety at 8 months is normal; the same at 8 years is a disorder. The practical corollary: dating the onset against the developmental calendar is the first act of the child-anxiety assessment, and the persistence-plus-impersistence pattern (Sunday evenings present, holidays absent) is the second.", topic: "Diagnosis" },
    { question: "Recite the time-locked somatic pattern sentence you would teach a paediatrician, in one line.", answer: "THE SENTENCE: pain that follows the school calendar is a message about school. The expanded clinical version for the OPD: recurring abdominal pain or headache, Sunday evenings (characteristically from 6 p.m.) and school mornings, absent Saturdays and holidays, escalating through exam weeks, with normal examinations — that pattern IS the diagnosis's presentation, and it deserves the fear interview in the same visit, not the fourth ultrasound. The Indian teaching frame: the paediatrician is the front door and the carousel's circuit-breaker — the doctor who delivers the sentence at the THIRD visit saves the family years of ultrasounds, stool tests, panels and tonics; the carousel is a cost, not a comfort.", topic: "Indian practice" },
    { question: "Name the four engines of school refusal and the treatment difference per engine.", answer: "THE MNEMONIC: S-A-M-T — Separation, Anxiety-specific, Mood, Truancy. (1) SEPARATION (the 5–8 band): the cling engine — gate wail, 'what if you die' worry, regression; the treatment is CBT with the parent module and the gradual re-entry ladder, the loss-event repaired, the SSRI tier only for moderate-severe. (2) ANXIETY-SPECIFIC (performance, bullying, the 'everyone will laugh' engine): the fear named and exposed — the ladder built for the specific situation, bullying treated as a system event first where it is the driver. (3) MOOD (the adolescent engine): depression's anhedonic fatigue wearing anxiety's clothes — the mood treated first, the anxiety reassessed after. (4) TRUANCY (the conduct engine): absence WITHOUT distress, the child elsewhere, the family often unaware — the conduct programme and the school-family system work, because the anxiety ladder has nothing to climb. The exam point: school refusal is a SYMPTOM with four engines, and the treatment differs per engine.", topic: "Diagnosis" },
    { question: "Explain the avoidance trap and why rescue is the alarm's ally — then give two parent behaviours that break it.", answer: "THE TRAP: anxiety's gravity bends behaviour toward escape; each escape delivers relief — the brain's most effective teacher — and the lesson learned is 'it WAS dangerous; see how good it felt to flee'. The alarm's credibility grows with every rescue, and within weeks the avoided list spreads (school, then lessons, then the gate, then the bus, then the morning itself). RESCUE IS THE ALLY because parental accommodation — sleeping on the floor, waving at the window, the mid-day meal delivery — removes exactly the non-event the alarm needs to hear. TWO PARENT BEHAVIOURS THAT BREAK IT: (1) the gradual withdrawal ladder with brave-praise at each rung — the parent who slept on the floor moves to the chair, then the doorway, then out, tolerating the child's short-run discomfort as the kindest long-run parenting; (2) the boring-same school-morning script — short, warm, identical every day — because long goodbyes are the alarm's oxygen. (The SPACE-style accommodation inventory is the tool that maps which adult does which rescue before either behaviour can be installed.)", topic: "Mechanism" },
    { question: "Describe the exposure ladder protocol (ranking, start level, stay-till-the-wave-falls) for a dog-phobic child, in five steps.", answer: "THE PROTOCOL: (1) RANK the feared situations 0–10 by the child's own fear rating; (2) START at 2–3 — brave enough to attempt, easy enough to succeed; (3) STAY in the situation till the wave falls — habituation happens inside the situation, never after escape, which is the whole difference between exposure and avoidance-with-a-view; (4) REPEAT each rung until it is boring; (5) CLIMB with brave-praise at every step, the fire-drill relapse plan written at the end. THE DOG-PHOBIC CHILD'S LADDER: puppy video → puppy across the road → walking past a leashed calm dog → patting the leashed dog with the owner. The Indian framing: the street dog is a daily gauntlet, so the ladder is not cosmetic — and the same architecture carries the school re-entry (parent at the gate → parent departs for 10 minutes → half-day → full day). The mechanism sentence that justifies every rung: the alarm recalibrates through experienced non-events.", topic: "Management" },
    { question: "In childhood GAD, what is the child-specific symptom-count difference from adults, and which two SSRIs carry the best paediatric evidence?", answer: "THE CHILD GATE: worry plus at least ONE of the associated cluster — restlessness, fatigue, concentration-irritability, muscle tension, sleep disturbance — versus THREE OR MORE in adults; the paediatric mercy clause, and an exam-perfect one-mark differentiator. THE SSRIs: sertraline and fluoxetine — the best-paediatric-evidence members of the moderate-to-severe tier (with fluvoxamine carrying the RUPP separation-anxiety trial history as the third name worth knowing). The prescribing discipline: start low, go slow, expect 4–6 weeks; combine with CBT where possible — the POTS/CAMS-tier evidence showing combination beating either alone in some analyses, with CBT alone often sufficient for the milder cases; the suicidality-class-warning conversation held honestly, saying both sides (in anxiety trials the aggregated signal shows benefit exceeding risk). And the refusal that completes the answer: benzodiazepines have essentially no child-anxiety role — dependence and paradoxical disinhibition.", topic: "Pharmacology" },
    { question: "What is the accommodation inventory, and which Indian family meeting does it run in?", answer: "THE INVENTORY: the family map of who rescues what — which adult performs which rescue (the parent who sleeps beside the bed, the one who leaves work for the phone call, the grandparent who delivers the mid-day meal, the mother whose window-waving keeps the gate wail possible). It converts the family's diffuse loving effort into a negotiable list, and the SPACE-style withdrawal ladder is then installed rung by rung against it, with brave-praise as the replacement behaviour. THE INDIAN MEETING: the Sunday assembly — the one family meeting with the three-generation attendance list that is standard Indian child-anxiety work, because the joint family gives the alarm a 24×7 response team and the programme dies at the fastest rescuer (the grandmother's 6 a.m. rescue mission undoing the week's ladder in one morning). The negotiation's success condition: the grandparents' dignity kept intact — their job becomes brave-praising, which they do better than anyone.", topic: "Indian practice" },
    { question: "Name the selective-mutism signature and the first rung of its ladder.", answer: "THE SIGNATURE: participation-without-speech — the child who plays, integrates and competes on the sports field while silent in the classroom; with the diagnostic gate of consistent home-speech against consistent school/stranger silence for 1+ month, not defiance and not deafness (the kitchen-commentary child is not aphasic). It separates mutism from autism's withdrawal — the reciprocity and sensory history probes the difference both ways. THE FIRST RUNG: the lowest-pressure speech-adjacent step with the safest communication partner — in the taught case, the class teacher starting with yes/no card games, then whisper-games with ONE friend during play; the ladder then runs through the carrier phrase, speech to the teacher via the friend as intermediary, the after-hours empty classroom ('playing teacher' reading aloud), three children present, the full class. The two protocol rules underneath: no spotlight, no bribe-for-words — communication-only, not speech, as the written goal. And the clinical clock: peer speech returns before adult speech, the honest timeline is months-to-a-year, and waiting entrenches.", topic: "Clinical practice" },
  ],
  faqs: [
    { question: "She's just shy, like me. What's the problem?", answer: "Shy is a temperament — slow to warm, quiet by preference. A disorder is when the fear COSTS things: she cannot read aloud, cannot join the canteen, cannot attend school without a stomach-ache. A quiet person who functions is fine. A silent person who is suffering needs help — and, gently, my question back is how your own shyness has treated you over the years." },
    { question: "The reports are all normal. So the pain is not real?", answer: "The pain is completely real — anxiety's gut-signalling is genuine physiology, not imagination. Normal scans don't mean 'no pain'; they mean the cause is not in the organs. The clue was always the timing: Sunday evenings, school mornings, gone in the holidays. That pattern is the body printing its worry, and it is treatable." },
    { question: "Should we just force her to school? She cries, but the school says attendance matters.", answer: "Structure, yes; force, no. The forced-in-with-wailing child learns that school is a place she gets abandoned at, and the alarm grows. The working route is the LADDER: gate-visit, half-day, safe-person, full day, with brave-praise at each rung. Firm and graduated beats hard and sudden every time." },
    { question: "Will he grow out of it?", answer: "Some do — roughly a third of childhood anxieties remit on their own, which means two-thirds persist or grow, and the longer the avoidance architecture stands, the deeper the foundations. The treatment is short (weeks-to-months) and highly effective; waiting is a real strategy with real odds, the wrong direction to gamble a school year on." },
    { question: "Is medicine needed? I don't want my child dependent on tablets.", answer: "Most children get better on CBT-and-parent-work alone, no medication. For the more severe or stuck cases, an SSRI for some months, tapered after recovery, is evidence-backed and non-addictive. The real dependence risk in this condition is the anxiety itself — the rescue patterns the family builds around it." },
    { question: "Should we stop the hostel plan?", answer: "For this child, right now: yes — treat first, board later. Hostels are wonderful for the ready nervous system and a furnace for the anxious one. After the programme, a graduated boarding plan (weekends home the first term, a named house-parent confidant) protects most children. Readiness is the child's, not the family's timetable." },
    { question: "We never scold him about fears. Why does he have this?", answer: "Anxiety is not caused by scolding; it arrives through temperament (a sensitive alarm shipped from the factory), heredity, and what the alarm was TAUGHT by events and examples. If anything, the softest homes produce it most — the loving rescue that never lets the alarm hear a non-event. Nothing here is anyone's fault; the programme is everyone's job." },
    { question: "The school says he's being defiant — he refuses to speak. Punishment?", answer: "No. A child who speaks fluently at home and is silent at school is not defying you; his alarm is jamming the voice. Punishment deepens the jam, because silence becomes safer than risk. The treatment is a slow speech-ladder through friends and play, pressure-free — it resolves in months when run properly, and entrenches when run with the stick." },
    { question: "How long will this treatment take?", answer: "Most families see movement in 4–8 weeks and substantial recovery in 3–6 months of proper work. The somatic pains fade first, the sleep next, the school-ladder takes its weeks. The last thing to leave is the temperament, which stays as a careful, watchful, sensitive adult who knows how to handle an alarm." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5 / DSM-5-TR (APA) — the paraphrased anxiety-disorder structure incl. childhood presentations (separation anxiety out of the childhood-only wing; the GAD child gate; criteria not reproduced)" },
      { source: "WHO — ICD-11 anxiety and fear-related disorders, the separation-anxiety framing" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.6 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Kendall PC — the Coping Cat CBT programme trials (the child-anxiety treatment evidence spine)" },
      { source: "Walkup JT et al. — the CAMS/POTS trial lineage: CBT, sertraline and combination in child anxiety (the moderate-severe tier evidence)" },
      { source: "The RUPP trial lineage — fluvoxamine's separation-anxiety history in children" },
      { source: "Ginsburg G et al. — the prevention/transmission studies (parental-anxiety treatment as child protection)" },
      { source: "Lebowitz E — the SPACE parent-accommodation trials (the parent-module evidence line)" },
    ],
    reviews: [
      { source: "Kagan J et al. — behavioural inhibition as the temperament precursor (the longitudinal Harvard cohorts)" },
      { source: "Silverman WK, Birmaher B et al. — child-anxiety phenomenology and the GAD child-gate work; the SCAS/SCARED-lineage scale literature (named only)" },
      { source: "Berg I, Heyne D et al. — the school-refusal literature (the four-engine differential's lineage and its treatment evidence)" },
      { source: "The paediatric functional-abdominal-pain and anxiety co-travel literature — the Indian somatic pathway's evidence base" },
      { source: "The Indian layer — NMHS 2015–16 adolescent findings; school-based anxiety studies; the paediatric-carousel and hostel-practice realities (approx 2026)" },
    ],
    patientResources: [
      { source: "The pattern-recognition sentence for paediatricians and parents — 'pain that follows the school calendar is a message about school'" },
      { source: "The Sunday assembly — the three-generation family meeting template with the accommodation inventory" },
      { source: "The school re-entry ladder template — gate-visit, half-day, safe-person, full day, with the no-phone-home rule" },
      { source: "The worry-time and worry-journal instructions — the home package the externalisation package runs on" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "8 min",
      description: "Plain language: the alarm and its five costumes, the timing-is-the-diagnosis pattern, the ladder, the rescue trap, the honest timeline.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "27 min",
      description: "The five rooms, the four engines, the GAD child gate, the exposure ladder, the SSRI tier and the benzo refusal.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "45 min",
      description: "Everything — the fear interview's craft, the accommodation inventory, the SSRI-tier honesty, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The five costumes, the five rooms, the prevalence arithmetic and the developmental windows.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the five rooms with their age fingerprints and the windows that make the disorder." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The sensitive alarm, the avoidance trap, the calibration classroom.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why rescue is the alarm's ally and why only experienced non-events reset it." },
    { number: 3, title: "Clinical Practice", description: "The somatic carousel, the assessment sequence, the differential, the treatment architecture.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the fear interview, the timeline mapping and the ladder-first treatment plan." },
    { number: 4, title: "Indian Context", description: "The paediatric carousel, the hostel decision, the joint-family assembly, the exam monsoon.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the third-visit sentence and convene the Sunday assembly." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and the high-yield summary.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the school-refusal essay cold and recite S-A-M-T and the GAD child gate without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.6 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "DSM-5 / DSM-5-TR (APA) — the paraphrased anxiety-disorder structure incl. childhood presentations: separation anxiety out of the childhood-only wing; the GAD child gate (worry + 1 versus 3+); selective mutism's 1+ month gate", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
    { id: "S3", source: "WHO — ICD-11 anxiety and fear-related disorders, the separation-anxiety framing", sourceType: "who", year: "2019–2022", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Kagan J et al. — behavioural inhibition as the temperament precursor (the longitudinal Harvard cohorts; the 20% of high-reactive infants)", sourceType: "primary", year: "1980s onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Kendall PC — the Coping Cat CBT programme trials (the child-anxiety treatment evidence spine; FEEL-EXPECT-ACT-PRAISE, 12–16 sessions with parent modules)", sourceType: "trial", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Walkup JT et al. — the CAMS/POTS trial lineage: CBT, sertraline and combination in child anxiety (the moderate-severe tier evidence; the suicidality-class-warning context)", sourceType: "trial", year: "2001–2008", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Ginsburg G et al. — the prevention/transmission studies (parental-anxiety treatment as child protection; the treat-the-parent architecture)", sourceType: "trial", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Lebowitz E — the SPACE parent-accommodation approach (the parent-module evidence line; the accommodation inventory and withdrawal ladder)", sourceType: "trial", year: "2013 onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Silverman WK, Birmaher B et al. — child-anxiety phenomenology and the GAD child-gate work; the SCAS/SCARED-lineage scale literature (named only, items never reproduced)", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Berg I, Heyne D et al. — the school-refusal literature (the four-engine differential's lineage) and its treatment evidence", sourceType: "review", year: "1960s onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "National Mental Health Survey of India 2015–16 — the adolescent supplement; school-based Indian anxiety studies; the functional-abdominal-pain and anxiety co-travel literature", sourceType: "government", year: "2015–16", dateReviewed: "2026-09-29" },
    { id: "S12", source: "The Indian clinical layer — the paediatric-carousel and hostel-practice realities; child-guidance clinic, school-counsellor and drug-cost figures (sertraline ₹50–150/month, private psychologists ₹800–2,500/session — approx 2026)", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "Epidemiology: childhood anxiety disorders are the commonest child mental-health conditions — any-anxiety roughly 6–10% in mid-childhood rising to 15–20% by late teens in some surveys; separation anxiety ~4% in the 6–11 band; girls roughly double the risk after age 6; half of adult anxiety disorders began as childhood conditions with about a third of childhood anxieties remitting spontaneously.", grade: "established", sources: ["S1", "S9"] },
    { text: "The developmental windows: stranger anxiety peaks 6–12 months, separation fear runs 9–18 months, the monster years 3–5 — normal, transient, comfort-responsive; disorder requires the wrong window plus persistence plus impairment.", grade: "established", sources: ["S1", "S2"] },
    { text: "The classification architecture: five rooms — separation anxiety (DSM-5 moved out of the childhood-only wing), generalised anxiety (the child gate: worry + 1 of the associated cluster versus 3+ in adults), social anxiety, specific phobia, selective mutism (1+ month of consistent home-speech with school/stranger silence); panic mostly post-pubertal and rare before 12.", grade: "established", sources: ["S2", "S3", "S9"] },
    { text: "The somatic presentation: recurring abdominal pain and headache time-locked to the school calendar (Sunday evenings, school mornings, holiday-vanishing) with normal workup — genuine physiology via the vagal-gut axis; the pattern is the diagnosis's presenting signature, and the targeted-not-blanket workup rule follows (no endoscopy for the time-locked pattern with normal basics).", grade: "established", sources: ["S1", "S11"] },
    { text: "The mechanism triad: the sensitive alarm (behavioural inhibition — the 20% of infants who withdraw from novelty — with the low amygdala threshold, heritability ~30–40%); the avoidance trap (relief as the brain's most effective teacher, rescue as the trap's ally); the calibration classroom (the attachment figures teaching alarm or reset by demonstration — treating the parent as standard child-anxiety medicine).", grade: "established", sources: ["S1", "S4"] },
    { text: "The accommodation dynamic: parental accommodation (adjusting the world so the child never faces the feared thing) feeds the alarm's credibility; the SPACE-style parent module — the accommodation inventory and the gradual withdrawal of rescue with brave-praise — is the evidence-based counter, delivered to ALL rescuing adults.", grade: "established", sources: ["S8"] },
    { text: "The first-line treatment: child CBT built around graded exposure — the Coping Cat lineage (FEEL-EXPECT-ACT-PRAISE), 12–16 sessions with parent modules; the exposure ladder ranked 0–10, started at 2–3, with the stay-till-the-wave-falls (habituation) rule, repetition and climbing; the fire-drill relapse-prevention plan at the end.", grade: "established", sources: ["S5"] },
    { text: "The pharmacological tier: sertraline and fluoxetine (the best-paediatric-evidence SSRIs, fluvoxamine carrying the RUPP separation-anxiety history) for moderate-to-severe impairment or insufficient CBT response — start low, expect 4–6 weeks, combined with CBT where possible (the POTS/CAMS lineage: combination beating either alone in some analyses); the suicidality-class-warning conversation held honestly, both sides said; benzodiazepines with essentially no child role (dependence and paradoxical disinhibition).", grade: "established", sources: ["S6"] },
    { text: "Selective mutism: the participation-without-speech signature separating it from autism (the differential running both ways); the treatment as stimulus-fading (the speech-generalisation ladder across people and settings, peers before adults) plus shaping (whisper → word → sentence) plus the MISC/communication-training approaches — early treatment, because waiting entrenches.", grade: "established", sources: ["S1", "S2"] },
    { text: "School refusal: a symptom with four engines — separation (the 5–8 band), anxiety-specific (performance, bullying, the 'everyone will laugh' engine), mood (the adolescent depression masquerade) and truancy (conduct) — with the treatment differing per engine; the gradual re-entry plan (half-days, named safe-person and safe-place, the no-phone-home rule) as the school-liaison spine.", grade: "established", sources: ["S10", "S1"] },
    { text: "The transmission-and-treatment-of-the-parent line: parental anxiety undermines the child's programme (the rescue-gene expressing itself nightly); the joint plan — child CBT plus the parent's own treatment — with the note's Indian finding that the child's programme's success rate doubles when the household's second alarm gets handled (the two-question GAD tier for the mother).", grade: "supported", sources: ["S7", "S12"] },
    { text: "The Indian layer: NMHS 2015–16 adolescent findings placing anxiety in the high-single-digit to mid-teens range with exam-linked and somatic presentations dominating; the paediatric carousel (years of ultrasound, stool and blood tours before the fear questions); the hostel decision (treatment before boarding, graduated boarding after); the joint-family rescue economy answered by the Sunday assembly; the exam-season March somatic monsoon met with pre-board exposure workshops; the shy-child praise wall; costs at approx 2026 (sertraline ₹50–150/month, private child psychologists ₹800–2,500/session in metros).", grade: "supported", sources: ["S11", "S12"] },
    { text: "The prognosis: movement in 4–8 weeks and substantial recovery in 3–6 months of proper work — the somatic pains fading first, the sleep next, the school-ladder taking its weeks, the temperament remaining as a manageable sensitivity; treated childhood anxiety as one of child psychiatry's genuine success stories.", grade: "established", sources: ["S1", "S5"] },
  ],
};
