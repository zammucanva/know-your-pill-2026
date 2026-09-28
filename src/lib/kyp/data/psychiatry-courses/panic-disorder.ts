import type { PsychiatryCourse } from "./types";

/**
 * PANIC DISORDER & AGORAPHOBIA — canonical Psychiatry course
 * (migration batch 3, Group F — anxiety disorders).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/panic-disorder.md — untouched foundation),
 * re-researched against current guidance (DSM-5-TR panic and
 * agoraphobia decoupling, Clark's cognitive model, Barlow's
 * panic control treatment, Klein's suffocation-alarm theory,
 * NICE stepped care, NMHS India) with per-claim provenance.
 *
 * Drug routes: paroxetine, sertraline, fluoxetine and venlafaxine
 * (the SSRI/SNRI tier) link to existing KYP drug lessons; the
 * benzodiazepine class has no KYP lesson yet — recorded in
 * contentGaps (never invented).
 */
export const panicDisorderCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "panic-disorder",
  title: "Panic Disorder & Agoraphobia",
  shortName: "Panic & Agoraphobia",
  kind: "disorder",
  category: "Anxiety Disorder",
  groupLetter: "F",
  groupName: "Anxiety disorders",
  learningPath: ["Psychiatry", "Anxiety Disorders", "Panic Disorder"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "A false alarm that becomes feared: sudden surges of raw physical fear peaking within minutes, then a mind that starts fearing the alarm itself — scanning for the next one and restructuring life around avoiding it, until the world shrinks.",
  summary:
    "The panic attack itself is not an illness — half the population experiences a few in a lifetime, and they are harmless even when terrifying. The disorder begins with the interpretation: 'my heart is racing; this must be a heart attack / I am losing my mind / I will die here'. That catastrophic reading converts a bodily event into a threat, which fires more adrenaline, which produces stronger sensations — the vicious circle psychiatry calls the panic cycle. Fear of the next attack produces hypervigilant body-scanning, anticipatory dread and escape behaviour; left untreated the world shrinks — first the bus, then queues, then malls, then leaving home alone. Agoraphobia, an old Greek word that India has filled with new content: autos avoided, temple queues abandoned, the wife who has not crossed the gate alone in five years — and since DSM-5 it stands alone, diagnosable without any panic history. The good news is the best in this whole book: panic disorder is among the most treatable conditions in psychiatry — brief structured therapy cures a large share outright, SSRIs work well, and the treatment is literally the practice of feeling the alarm ring until it bores the brain. This course covers the attack definition and the 1-month clause, the panic cycle, interoceptive exposure (the signature technique), the agoraphobia five-cluster architecture — and the Indian layer: the cardiology-circuit patient, the housebound homemaker, the panic bag, 'ghabrahat ka daura' and the faith alliance.",
  estimatedReadTime: "35 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define a panic attack precisely (surge, peak within minutes) and distinguish expected from unexpected attacks.",
    "Apply the panic-disorder gates: recurrent unexpected attacks + 1 month of worry/consequence fear/behaviour change.",
    "Draw and explain the panic cycle to a patient in two minutes.",
    "Explain agoraphobia's five situation categories and its DSM-5 decoupling from panic.",
    "Run interoceptive exposure (the deliberate symptom-induction technique) with correct logic.",
    "Use SSRI first-line pharmacotherapy, low-start dosing, and the jitter window honestly.",
    "Exclude the mimics: cardiac, thyroid, caffeine, asthma, vestibular, substance withdrawal.",
    "Handle the Indian presentation: the cardiology-circuit patient and the housebound homemaker.",
  ],
  quickFacts: [
    { label: "The attack", value: "Peaks within minutes", detail: "Sudden surge of raw fear, typically under 10 minutes to peak, 4+ of 13 symptoms — self-limited and harmless in bodily terms" },
    { label: "The disorder", value: "1 month of consequence", detail: "Recurrent UNEXPECTED attacks + ≥ 1 month of attack-worry, consequence-fear or maladaptive behaviour change" },
    { label: "The core event", value: "Catastrophic misinterpretation", detail: "Sensation → 'I am dying/going mad' → adrenaline → stronger sensation — the loop treatment attacks" },
    { label: "Signature technique", value: "Interoceptive exposure", detail: "Deliberate induction of the feared sensations — stair-runs for racing heart, chair-spinning for dizziness, straw-breathing for air hunger" },
    { label: "Agoraphobia", value: "2+ of 5 clusters", detail: "Transport, Enclosed, Open, Queues/crowds, outsidE alone (T-E-O-Q-E) — for 6 months, and DSM-5-decoupled from panic" },
    { label: "First-line drugs", value: "SSRIs, started LOW", detail: "Panic brains are jitter-sensitive: the first-week activation mimics panic and drives dropouts — start low, warn, review early" },
    { label: "The benzo paradox", value: "Relief now, cure blocked", detail: "The drug prevents the learning that the alarm is survivable — short bridges only" },
    { label: "Indian pathway", value: "The ECG circuit", detail: "Multiple ER ECGs, echo/TMT, 'gas' corridors and the temple before anyone asks the diagnostic question" },
  ],
  knowledgeGraph: [
    { label: "Generalized Anxiety Disorder (GAD)", type: "condition", href: "/psychiatry/gad/", note: "The continuous engine hum versus discrete surges out of the blue" },
    { label: "Social Anxiety Disorder & Specific Phobias", type: "condition", href: "/psychiatry/social-anxiety-phobias/", note: "Situation-locked surges versus un-locked — and the situational-phobia boundary" },
    { label: "Obsessive-Compulsive Disorder (OCD)", type: "condition", href: "/psychiatry/ocd/", note: "Contamination-checking intrusions with rituals — 'they worry differently'" },
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "Trauma-cue-locked surges with the cluster architecture of PTSD" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "Its arrival darkens the prognosis — screen at every contact" },
    { label: "Depersonalization / Derealization Disorder", type: "condition", href: "/psychiatry/depersonalization-disorder/", note: "The derealisation symptom inside a panic attack versus the standalone disorder" },
    { label: "Benzodiazepine Misuse", type: "condition", href: "/psychiatry/benzodiazepine-misuse/", note: "The long-term alprazolam default and the taper pathway" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The alarm-threshold system the SSRI tier re-sets over weeks" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The emergency siren that rings once — and then the MIND calls the fire brigade" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three stories carry the neuroscience. The smoke alarm that fears itself: the brain has a genuine emergency siren (noradrenergic, locus coeruleus); in panic disorder the siren rings once for an ordinary reason (caffeine, a startle, a real worry), and then the MIND calls the fire brigade — 'this racing heart is my death' — and that thought is itself an emergency signal, so the siren rings louder, the chest tightens further, and the loop closes. Treatment teaches the punchline: reading the alarm as a FALSE ALARM (curiosity, not catastrophe) starves the loop at its cognitive link. The suffocation monitor: Klein's elegant theory that panic brains run an over-sensitive CO2 meter — small rises in blood carbon dioxide (perfectly normal, caused by shallow fast breathing) trigger 'AIR!' as a full emergency, producing the breathless gasping quality of attacks; this is why the cycle is so physical, why hyperventilation feeds it, and why slow-exhale breathing and straw-breathing interoception work at the engine-room level. The shrinking kingdom: each escape teaches the map — the bus becomes forbidden territory, the queue a trap, the mall a cave-in-waiting — until the house itself feels like the last castle and even it is not fully safe (the nocturnal attack strikes inside it); the reversal runs the same geography backwards, graded re-entry WITH the alarm present until each territory re-registers as ordinary. The attack must be felt, not fled — that is the entire treatment in one sentence.",
    steps: [
      "Start with the siren: the noradrenergic alarm system rings once for an ordinary reason — caffeine, a startle, a real worry, or nothing identifiable.",
      "The catastrophic interpretation arrives: 'this racing heart is my death / I am losing my mind' — the thought is itself an emergency signal.",
      "The loop closes: more adrenaline, stronger sensations, tighter chest — the panic cycle with a physiological core and a cognitive accelerator.",
      "Between attacks, hypervigilant body-scanning manufactures findings — normal sensations found and misread; anticipatory dread builds.",
      "Escape and safety behaviours (the companion, the ECG report in the purse, the sorbitrate) relieve now and teach the map: each escaped situation registers as dangerous.",
      "The kingdom shrinks: bus → queue → mall → outside alone → the gate itself; nocturnal attacks strike inside the last castle.",
      "Treatment reverses the same geography: cognitive restructuring at the catastrophe link, interoceptive exposure at the fear-of-sensations core, in-vivo exposure at the avoidance map — SSRIs raise the alarm's trigger threshold over weeks.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "locus-coeruleus", name: "Locus Coeruleus", role: "The noradrenergic siren — constitutionally jumpy in panic pedigrees; the alarm that rings first.", grade: "supported" },
    { id: "amygdala", name: "Amygdala", role: "The threat-evaluation hub that fires the full-body alarm and learns the fear of the sensations themselves.", grade: "supported" },
    { id: "mpfc", name: "Prefrontal Cortex", role: "The interpretation engine: the catastrophic reading ('this is my death') that converts sensation into threat — the link cognitive restructuring re-trains.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Noradrenaline", symbol: "NE", role: "The siren's currency — the locus coeruleus surge that produces the body-storm; constitutionally jumpy in panic pedigrees.", grade: "supported" },
    { name: "Serotonin", symbol: "5-HT", role: "Alarm-threshold modulation — the system SSRIs ride on (start low: panic brains are jitter-sensitive).", grade: "supported", drugConnection: "Sertraline, paroxetine, fluoxetine and venlafaxine lessons exist in the KYP Medication Library." },
    { name: "Carbon dioxide sensitivity", symbol: "CO2", role: "Klein's suffocation-alarm theory: an over-sensitive CO2 meter reads normal rises as 'AIR!' emergencies — the reason breathing retraining and interoception work.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "panic-cycle",
      name: "The panic cycle (the loop to attack)",
      steps: [
        { label: "Sensation begins", detail: "Pounding heart, breathlessness, dizziness — from caffeine, a startle, shallow breathing, or nothing" },
        { label: "Catastrophic interpretation", detail: "'This is a heart attack / I am going mad / I will die here'" },
        { label: "The thought fires the siren", detail: "More adrenaline, stronger sensations — the loop closes and escalates" },
        { label: "Peak within minutes, then pass", detail: "Self-limited; harmless in bodily terms, however apocalyptic it feels" },
        { label: "The white-knuckle trap", detail: "Fighting makes it louder; leaning-back curiosity makes it shorter — the therapeutic punchline" },
      ],
      clinicalManifestation: "The attack itself: 4+ of 13 symptoms peaking within minutes, with conviction of dying or losing control.",
      grade: "established",
    },
    {
      id: "anticipatory-machinery",
      name: "The anticipatory machinery (between attacks)",
      steps: [
        { label: "Body-scanning hypervigilance", detail: "The monitored body manufactures findings — normal sensations found and misread" },
        { label: "Anxiety sensitivity as trait", detail: "'Bodily sensations are dangerous' — measurable, modifiable, the strongest psychological risk factor" },
        { label: "Safety-behaviour architecture", detail: "The ECG pocket, the companion, the water ritual, sitting near exits, the sorbitrate" },
        { label: "Escape teaches the map", detail: "Each escaped situation registers as dangerous territory" },
      ],
      clinicalManifestation: "Days organized around the next attack's prevention; the bag with 'emergency' medicines; sitting near exits.",
      grade: "supported",
    },
    {
      id: "agoraphobia-map",
      name: "The shrinking kingdom (agoraphobia)",
      steps: [
        { label: "Five-cluster fear architecture", detail: "Transport, enclosed, open, queues/crowds, outside alone — the unified fear: 'if the wave comes HERE, I cannot escape or get help'" },
        { label: "Progressive avoidance", detail: "Bus → queue → mall → travelling alone → the gate itself" },
        { label: "Companion-dependency", detail: "The escort as the hidden safety behaviour — fading it is a treatment rung, not an administrative convenience" },
        { label: "The last castle breached", detail: "Nocturnal attacks strike inside the house — waking mid-wave, mislabelled as 'ghost pressure' or heart trouble" },
        { label: "Reversal runs the geography backwards", detail: "Graded re-entry WITH the alarm present until each territory re-registers as ordinary" },
      ],
      clinicalManifestation: "The person who has not crossed the gate alone in years; DSM-5: diagnosable without any panic history.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "panic-first", time: "The first attack", title: "The siren rings", description: "Often in a queue, a jam, a mall — cinematic detail available; the catastrophic interpretation is the diagnosis's fingerprint and the treatment hook.", phase: "onset" },
    { id: "panic-circuit", time: "Months 1–6", title: "The cardiology circuit", description: "Multiple ER ECGs, echo/TMT, the gastroenterology 'gas' corridor and the temple before anyone asks the diagnostic question — each normal report produces one good evening.", phase: "peak" },
    { id: "panic-gate", time: "≥ 1 month of consequence", title: "The disorder gate", description: "Recurrent unexpected attacks + 1 month of worry, consequence-fear or behaviour change (carrying reports, avoiding exercise, repeated ER visits).", phase: "peak" },
    { id: "panic-shrink", time: "Months–years", title: "The kingdom shrinks", description: "Agoraphobic spread: companion-dependency, queue and bus avoidance, the housebound end-stage absorbed by the family as 'weak-nerved'.", phase: "duration" },
    { id: "panic-reversal", time: "8–15 sessions", title: "The reversal", description: "Physiology session + cognitive restructuring + interoceptive exposure + in-vivo ladder with companion-fading; SSRIs carry the early weeks; decades-old cases still respond.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Panic disorder lifetime ~2–4%; panic attacks without the disorder far commoner; agoraphobia ~1–2% — and since DSM-5, diagnosable without panic history.",
    indianPrevalence: "NMHS 2015–16 pooled anxiety disorders (~3% of adults, treatment gap ~70–80%). The Indian panic patient's route to a psychiatrist passes through the ECG in the emergency room (often multiple), the cardiologist's echo/TMT, the gastroenterologist for 'gas', sometimes the neurologist for 'vertigo', and the temple — before anyone asks the diagnostic question.",
    lifetimeRisk: "Without treatment the course is chronic and relapsing, with major secondary depression and benzodiazepine/alcohol self-treatment; with modern treatment, the majority improve substantially and many remit fully.",
    genderRatio: "Women roughly twice as often as men.",
    ageOfOnset: "Typically late teens through thirties; childhood and late-life onset occur and are commonly missed.",
    indianNotes: "Two distortions to teach every trainee: (1) the cardiology circuit — palpitations send the patient to cardiac doors first, and each normal ECG produces relief for exactly one evening; (2) the housebound homemaker presentation — agoraphobic women in joint families are absorbed as 'weak-nerved' household fixtures, invisible to clinical systems for decades.",
  },
  etiology: [
    { category: "biological", factor: "Heritability ~30–40%", details: "The alarm system (locus coeruleus and noradrenergic circuitry) is constitutionally jumpy in panic pedigrees." },
    { category: "biological", factor: "CO2/lactate sensitivity", details: "Panic patients' brains over-react to rising blood CO2 (Klein's suffocation-alarm theory) — the reason breathing exercises and interoceptive work matter." },
    { category: "biological", factor: "Medical mimics and fuels to screen", details: "Hyperthyroidism, anaemia, arrhythmias (SVT), asthma and its salbutamol inhalers (sympathomimetic fuel), caffeine (8 cups of chai), nicotine, steroid/theophylline effects, withdrawal from alcohol/benzodiazepines, vestibular dysfunction, hypoglycaemia in diabetics." },
    { category: "psychological", factor: "The catastrophe misinterpretation", details: "Sensations (normal or anxiety-driven) read as dying/madness/loss-of-control — the diagnosis's fingerprint." },
    { category: "psychological", factor: "Anxiety sensitivity (trait)", details: "'Bodily sensations are dangerous' — measurable and modifiable; the strongest psychological risk factor." },
    { category: "social", factor: "The inherited interpretation", details: "Indian context: the real cardiac event in the family (father's MI at 45) is the single commonest interpretive seed — the fear is inherited before the first attack; childhood adversity and major stressors precede onset." },
  ],
  symptomClusters: [
    {
      category: "1. The panic attack (the symptom-event)",
      symptoms: ["A sudden surge of intense fear/discomfort, peaking within minutes (typically under 10)", "4+ of 13: pounding/racing heart; sweating; trembling; breathlessness; choking sensation; chest pain/pressure; nausea; dizziness/light-headedness/unsteadiness; chills or heat waves; numbness/tingling; derealisation ('world went unreal') or depersonalisation ('I watched myself'); fear of losing control/going mad; fear of dying", "Self-limited (minutes, rarely beyond an hour) and harmless in bodily terms, however apocalyptic they feel", "Expected (situation-triggered) versus unexpected (out of the blue) — panic disorder is built on the UNEXPECTED ones"],
    },
    {
      category: "2. Panic disorder (the month clause)",
      symptoms: ["Recurrent unexpected attacks", "≥ 1 month of: persistent worry about more attacks or their consequences ('heart disease', 'going mad'), OR significant maladaptive behaviour change", "Avoiding exercise; carrying ECG reports; never travelling alone; repeated ER visits", "Inter-attack life organised around anticipation: body-scanning, escape-route planning, the bag with 'emergency' medicines, sitting near exits"],
    },
    {
      category: "3. Agoraphobia (the five clusters)",
      symptoms: ["Public transport", "Open spaces (bridges, parks, parking lots)", "Enclosed places (shops, theatres, cinema halls)", "Queues or crowds", "Being outside the home alone", "The unified fear: 'if the wave comes HERE, I cannot escape / cannot get help' — leading to progressive avoidance, companion-dependency, the Indian end-stage: the person who has not crossed the gate alone in years"],
    },
    {
      category: "4. Special presentations",
      symptoms: ["Nocturnal panic: attacks from sleep, waking the person mid-wave — commonly mislabelled as 'night terror' or 'heart trouble'", "The three-tier picture to examine: the attack (minutes, physical); the anticipatory machinery (days, cognitive-behavioural); the geography of avoidance (months-years, the map)", "The panic bag: ECG report, sorbitrate (borrowed from a cardiac relative — genuinely dangerous self-medication), water, a phone with a son on speed-dial"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "Panic disorder (300.01 / F41.0); Agoraphobia (300.22 / F40.00)",
      criteria: [
        "Panic disorder: recurrent, unexpected panic attacks; at least one month of persistent attack-concern or maladaptive behaviour change; not better explained by substances, medical illness or another mental disorder's specific fears (social evaluation → social anxiety; contamination → OCD; trauma cues → PTSD).",
        "Agoraphobia (decoupled): marked fear across 2+ of the five clusters (transport, open, enclosed, queues/crowds, outside alone) for ≥ 6 months — whether or not panic disorder exists.",
      ],
      duration: "Attacks peak within minutes; disorder gate ≥ 1 month of consequence; agoraphobia ≥ 6 months.",
      indianNote: "Get the first attack's story in cinematic detail ('where were you, what happened in your body, what did you think was happening?') — the catastrophic interpretation is the fingerprint and the story hooks the treatment. The physical workup: once, properly, and then CLOSED — ECG (age > 40 or cardiac risk), TSH, CBC, fasting glucose; caffeine quantified; the endless-workup patient needs an explicit closing consultation.",
    },
    {
      system: "ICD-11",
      code: "Panic disorder (6B01); Agoraphobia (6B02)",
      criteria: [
        "Panic disorder: recurrent unexpected panic attacks not restricted to specific situations, with persistent concern about recurrence or implications.",
        "Agoraphobia: marked fear in two or more of five situations, with avoidance or intense distress, out of proportion to actual danger.",
      ],
      duration: "Typically at least several months.",
      indianNote: "Instruments by name: PDSS (Panic Disorder Severity Scale), HAM-A; the Agoraphobic Cognitions Questionnaire and Anxiety Sensitivity Index as research measures — the anxiety-sensitivity construct is examinable theory.",
    },
  ],
  severityScales: [
    {
      name: "PDSS",
      fullName: "Panic Disorder Severity Scale",
      measures: "Frequency, distress and interference of attacks and anticipatory avoidance — the standard severity/tracking instrument.",
      ranges: [
        { min: 0, max: 4, severity: "Minimal symptom burden", action: "If clinical suspicion persists, monitor; the story outperforms the score early" },
        { min: 5, max: 9, severity: "Mild", action: "Psychoeducation + the physiology session; CBT referral appropriate" },
        { min: 10, max: 14, severity: "Moderate", action: "Active treatment: full CBT package (interoceptive + in-vivo) ± start-low SSRI; companion-fading planned" },
        { min: 15, max: 28, severity: "Severe", action: "Combined CBT + SSRI; audit benzodiazepine/alcohol self-treatment; agoraphobic map and functioning goals set" },
      ],
      indianNote: "Named for documentation; items not reproduced (copyright). Pair the score with the map (doors crossed alone per week) — geography is the family-visible measure.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Cardiac arrhythmia / SVT", distinguishingFeatures: "Onset/offset with ECG signature; no anticipatory psychological build.", keyDifferentiator: "Response to vagal manoeuvres/adenosine; the panic pattern is minutes-waves-normal-between, worst when resting." },
    { condition: "Hyperthyroidism", distinguishingFeatures: "Continuous tremor, heat intolerance, weight loss.", keyDifferentiator: "TSH settles it — order it once, properly." },
    { condition: "Asthma / salbutamol overuse", distinguishingFeatures: "Audible wheeze; inhaler-locked timing.", keyDifferentiator: "The inhaler review — sympathomimetic fuel is a real driver." },
    { condition: "Caffeine / nicotine excess", distinguishingFeatures: "Dose-timing history.", keyDifferentiator: "The honest chai quantification: 8 cups is its own anxiety disorder." },
    { condition: "Vestibular disorders", distinguishingFeatures: "Positional vertigo (head-turn triggers), nystagmus.", keyDifferentiator: "No doom-cognition — dizziness yes, terror no." },
    { condition: "Hypoglycaemia in diabetics", distinguishingFeatures: "Whipple's triad; sugar-correlated.", keyDifferentiator: "The glucose diary." },
    { condition: "Withdrawal states (alcohol, benzodiazepines)", distinguishingFeatures: "Locked to the substance clock.", keyDifferentiator: "The withdrawal timeline maps the attacks." },
    { condition: "PTSD intrusions", distinguishingFeatures: "Trauma-cue-locked, with the full cluster architecture.", keyDifferentiator: "The trauma history taken last, gently." },
    { condition: "Social anxiety / specific phobias", distinguishingFeatures: "Situation-locked surges (audience or object present).", keyDifferentiator: "The lock question — panic disorder is built on the UNEXPECTED ones." },
    { condition: "Pheochromocytoma (the exam zebra)", distinguishingFeatures: "Paroxysmal hypertension + sweating + headache.", keyDifferentiator: "Urinary metanephrines — order once in a lifetime, not once a month." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "The physiology consultation (session one, in disguise)",
      description: "Draw the panic cycle on paper: sensation → catastrophe thought → adrenaline → stronger sensation. State the three facts that restructure everything: (1) the attack cannot harm you — no panic attack in recorded medical history has turned into a heart attack or madness by itself; (2) it always ends, minutes; (3) white-knuckle fighting makes it louder; leaning-back curiosity makes it shorter. This session alone reduces attack frequency in a substantial share.",
      whenToUse: "Every patient, first contact — in the patient's language.",
      indianContext: "Name the disorder in the patient's words on the prescription paper itself: 'ghabrahat ka daura' (the surge of fright) — the treatment plan follows into the family's vocabulary. The closure cardiology consult ('your heart has been examined four times; it is the ALARM, not the pump, that needs the cardiologist of the mind now') is the entry ticket to care.",
    },
    {
      category: "psychotherapy",
      name: "CBT — the specific package (FIRST-LINE)",
      description: "Cognitive restructuring of the catastrophe (the heart-attack belief answered with the cardiology data; the madness belief with the neuroscience — 'fear FEELS like madness; madness does not arrive in 10-minute waves'); INTEROCEPTIVE EXPOSURE, the signature technique: deliberate induction of the feared sensations in session — stair-runs for racing heart, chair-spinning for dizziness, straw-breathing for air hunger, lamp-staring for unreality — repeated until the sensation loses its meaning; in-vivo exposure for the avoidance map (the graded ladder back into buses, queues, malls, attacks welcomed rather than medicated away); breathing retraining (slow, exhale-weighted) as an adjunct — never a safety behaviour; safety-behaviour stripping (the ECG pocket, the companion, the water ritual, faded rung by rung).",
      whenToUse: "First-line; 8–15 sessions; the component that produces the cure rates is the interoceptive work.",
      indianContext: "Ladders are local: gate → street corner → the sabziwala → the temple aangan → the bus; companion-fading as a rung structure (mother-in-law accompanies → waits at the corner → waves from the window → none). The household's geography IS the ladder.",
    },
    {
      category: "pharmacotherapy",
      name: "SSRIs (FIRST-LINE) — started LOW",
      description: "Paroxetine 10→40 mg, sertraline 25→150 mg, escitalopram 5→20 mg, citalopram, fluoxetine; venlafaxine XR 37.5→225 mg the SNRI option — same jitter warning. START LOW: panic brains are jitter-sensitive; the first-week activation mimics panic and drives dropouts — warn in advance, dose-split, review early. Full trial 8–12 weeks; maintenance 12 months; slow taper thereafter.",
      whenToUse: "First-line alongside CBT for severity; CBT alone for mild-moderate and for anyone who prefers durable skills over medicines.",
      indianContext: "Sertraline ≈ ₹80–160/month at 100 mg; paroxetine ≈ ₹100–200/month (approx 2026); the CBT package 6–12 sessions at district/Tele-MANAS rates or private ₹600–1,500/session.",
    },
    {
      category: "pharmacotherapy",
      name: "Benzodiazepines — the paradox",
      description: "Alprazolam/clonazepam: fast-acting, a real short-term role for the severely disabled (weeks) — long-term a trap: tolerance, dependence, and interference with interoceptive-exposure learning (the drug prevents the learning that the alarm is survivable). Where dependence is established: structured taper (see the Benzodiazepine Misuse note).",
      whenToUse: "Short bridges only, with the exit named at the first prescription.",
      indianContext: "The lifelong-alprazolam-as-'maintenance' pattern is the Indian default error; the consult is where the trade is named and the exit planned.",
    },
    {
      category: "psychotherapy",
      name: "The reopening (life after the loop)",
      description: "Exercise prescription (the unused gym membership resumed = interoceptive exposure at scale); travel retraining with a written attack-riding script; the emergency-department feedback letter ('this was panic, follow the pathway') closing the cardiology circuit formally; family sessions retiring the 'weak nerves' frame.",
      whenToUse: "Parallel with treatment and after — the map re-expands territory by territory.",
      indianContext: "The systems-lever: Indian ERs and cardiologists need a one-page panic referral protocol — 'normal ECG + normal troponin + classic description = refer to the anxiety pathway with a reassurance letter' — converting the busiest doors in Indian medicine into panic-detection points instead of repeat-customer factories.",
    },
  ],
  safety: {
    redFlags: [
      "Suicidal ideation — depression darkens the prognosis; screen directly (Tele-MANAS 14416)",
      "Sorbitrate or cardiac- relative medication self-treatment — genuinely dangerous; ask by name",
      "Escalating benzodiazepine or alcohol self-treatment — the layer that blocks extinction learning",
      "The housebound patient absorbed as 'weak-nerved' — decades of invisible disability; train the nurses and ASHA workers to spot the woman behind the gate",
      "New late-life attacks with atypical features — one proper cardiac workup, then CLOSED",
    ],
    urgentGuidance:
      "The order of operations for the cardiology-circuit patient: (1) one final cardiology consultation stating closure in writing; (2) the physiology session with the cycle drawn in the patient's language; (3) the ECG report explicitly retired from the purse in session 4 ('the safety blanket is the illness's uniform'). For nocturnal attacks read as 'ghost pressure': ally, don't mock — the temple visit is part of the first-attribution consultation, and the ladder does the rest.",
  },
  drugLinks: [
    { name: "Paroxetine", slug: "paroxetine", role: "First-line SSRI", rationale: "The classic panic-programme SSRI (Bakker et al. trials); 10→40 mg with the start-low jitter warning — sedating load makes it second choice in practice." },
    { name: "Sertraline", slug: "sertraline", role: "First-line SSRI", rationale: "The practical Indian first choice (≈ ₹80–160/month at 100 mg); 25→150 mg, well-tolerated, start low." },
    { name: "Fluoxetine", slug: "fluoxetine", role: "First-line SSRI", rationale: "Long half-life smooths the jitter window; 20→60 mg range in panic; the activating profile demands the warning be given in advance." },
    { name: "Venlafaxine", slug: "venlafaxine", role: "The SNRI option", rationale: "XR 37.5→225 mg with positive panic trials — the option when SSRIs fail or are not tolerated; BP monitoring and discontinuation care apply." },
  ],
  contentGaps: [
    "The benzodiazepine class (alprazolam/clonazepam — the short-bridge medicines and their taper architecture) has no KYP drug lesson yet; the Benzodiazepine Misuse note carries the clinical content meanwhile.",
    "Interoceptive-exposure protocol guides (the induction exercises) have no standalone KYP skills module yet (the concepts live in this course).",
    "The ER panic-referral one-pager exists only as a recommendation here — not yet as a KYP downloadable.",
  ],
  patientGuide: {
    whatIsIt:
      "A panic attack is a false alarm: a sudden surge of raw physical fear — pounding heart, breathlessness, dizziness, doom — peaking within minutes and passing harmlessly. Panic disorder is what develops when the mind starts fearing the alarm itself: scanning for the next one, dreading it, and restructuring life around avoiding it. The feeling of dying is real; the dying is not. It is among the most treatable conditions in all of psychiatry.",
    whatCausesIt:
      "A jumpy alarm system (partly inherited) fires once — then the interpretation ('this is a heart attack / I am going mad') converts the bodily event into a threat, which fires more adrenaline, which produces stronger sensations: the vicious circle. Avoiding every place an attack happened teaches the map that those places are dangerous — so the world shrinks, one escaped territory at a time.",
    symptoms:
      "Attacks: sudden surges peaking within minutes with four or more of the thirteen symptoms (pounding heart, sweating, trembling, breathlessness, choking, chest pain, nausea, dizziness, chills or heat, tingling, unreality, fear of madness, fear of dying). Between attacks: body-scanning, dread, the escape-planning life. Agoraphobia: fear of two or more of the five situations — transport, open spaces, enclosed places, queues or crowds, being outside alone.",
    treatment:
      "The core is learning that the alarm is survivable — by deliberately feeling it. Interoceptive exercises (stair-runs, spinning, straw-breathing) reproduce the sensations safely until they lose their terror; graded return to the avoided places reverses the shrinking map. SSRIs re-set the alarm's threshold over weeks — started low, because panic brains are jitter-sensitive at first. Tranquillisers (benzodiazepines) have a short, honest role and a long trap: they block the learning that the alarm is survivable. Brief therapy cures a large share outright; decades-old cases still respond.",
    selfHelp: [
      "Ride the wave: lean back with curiosity rather than fighting — fighting makes it louder; the attack always ends in minutes.",
      "Slow, exhale-weighted breathing as a riding skill — never as an escape tool (the escape version loops back into the disorder).",
      "Return to the avoided places as a plan, not a plunge — short, graded, with company faded rung by rung.",
      "Retire the panic bag element by element, each item as an exposure rung rather than a confiscation.",
      "Give the family the frame that helps: 'weak nerves' is not the story — a treatable false alarm is.",
    ],
    whenToSeekHelp: [
      "Repeated attacks with ER visits and normal reports",
      "Avoidance shrinking your map (buses, queues, malls, leaving home alone)",
      "Needing tablets or alcohol to face the day",
      "Any thoughts of ending your life — same-day help (Tele-MANAS 14416)",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "District hospital psychiatry OPD / DMHP psychologists — nominal or no charge",
      "Ask your cardiologist for the panic-pathway referral letter (the closure consult)",
    ],
  },
  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No condition-specific Indian panic-disorder guideline; management follows WHO mhGAP and NICE-tier anxiety guidance (stepped care: psychoeducation → low-intensity CBT → high-intensity CBT/pharmacotherapy).",
    systemContext: "The Indian panic patient's route to psychiatry passes through: the ECG in the emergency room (often multiple), the cardiologist's echo/TMT, the gastroenterologist for 'gas', sometimes the neurologist for 'vertigo', and the temple — before anyone asks the diagnostic question. The cardiology circuit dismantling ritual: (1) one final cardiology consultation stating closure in writing; (2) the physiology session with the panic-cycle drawing in the patient's language; (3) the ECG report explicitly retired from the purse in session 4.",
    programmeContext: "Tele-MANAS 14416 and district psychologists carry the counselling tier; the systems-lever worth institutionalising: emergency rooms and cardiologists with a one-page panic referral protocol ('normal ECG + normal troponin + classic description = refer to the anxiety pathway with a reassurance letter'), converting the busiest doors in Indian medicine into panic-detection points.",
    costConsiderations: "Sertraline 100 mg ≈ ₹80–160/month; paroxetine ≈ ₹100–200/month (approx 2026); the CBT package 6–12 sessions, private ₹600–1,500/session, district/Tele-MANAS nominal. The repeated-ECG economy (each visit a few hundred rupees, multiplied by eleven) dwarfs the full treatment's cost — the referral protocol is cost-saving, not cost-adding.",
    culturalConsiderations: "'Panic' translates poorly: the working phrases that land are 'ghabrahat ka daura' (the surge of fright) — name the disorder in the patient's words on the prescription paper itself. Night-attacks are read in many households as 'ghost pressure' or heart disease and treated with faith rituals and cardiac registers; both can coexist with the physiology explanation — ally, don't mock ('the mantrik calmed the spirit; we calm the alarm; both can be true while we test the ladder'). The housebound homemaker absorbed into the joint family as 'she doesn't go out' presents after years, usually via a daughter's insistence.",
    patientCounselling: [
      "The household-geography ladder: gate → street corner → the sabziwala → the temple aangan → the bus — built from the family's own map, with companion-fading as rungs (daughter waits at the corner → waves from the gate → no one).",
      "The panic-bag inventory: honour its logic, then fade each element (the ECG report, the sorbitrate — ask about it by name, water, the speed-dial son) as exposure rungs, never as confiscation.",
      "The night-attack script: 'the over-sensitive alarm monitors CO2 even in sleep; a small rise triggers the siren at 3 a.m. — it is not a ghost, not a heart problem, and it responds to the same treatment.'",
      "The faith alliance: where the family's model is ghost-affliction, the temple visit belongs inside the first-attribution consultation — the treatment alliance accepts the first explanation and adds the second.",
      "Train the nurses and ASHA workers to spot the woman behind the gate — 'absorbed disability' patients surface only when a medically-literate relative pulls the file.",
    ],
  },
  decisionPath: {
    title: "The surge-and-map assessment",
    nodes: [
      {
        id: "start",
        question: "A patient describes frightening physical surges. What is the pattern?",
        branches: [
          { label: "Out of the blue, recurrent, ≥ 1 month of worry/avoidance", next: "mimic-screen" },
          { label: "Situation-locked to scrutiny or a specific object", next: "phobic-path" },
          { label: "Trauma-cue-locked, with nightmares/avoidance", next: "ptsd-path" },
          { label: "Continuous worry, no discrete surges", next: "gad-path" },
        ],
      },
      {
        id: "mimic-screen",
        question: "Medical mimics and fuels cleared ONCE, properly: ECG/TSH/CBC/glucose, caffeine, inhalers, withdrawal, sorbitrate self-treatment?",
        branches: [
          { label: "Cleared and closed", next: "severity" },
          { label: "Mimic found", next: "medical-first" },
        ],
      },
      {
        id: "severity",
        question: "Is the world shrinking (agoraphobic spread), and is there benzo/alcohol self-treatment or depression?",
        branches: [
          { label: "Mild, map intact", next: "cbt-first" },
          { label: "Spreading map / comorbid / dependent", next: "combined" },
        ],
      },
      { id: "cbt-first", question: "Panic disorder, map intact.", recommendation: "Physiology session + CBT package (restructuring, interoceptive exposure, in-vivo ladder); SSRI optional at patient preference; breathing retrained as riding skill, not escape tool; 8–15 sessions." },
      { id: "combined", question: "Panic with agoraphobic spread or comorbidity.", recommendation: "Combined CBT + start-low SSRI (paroxetine/sertraline/fluoxetine or venlafaxine XR); companion-fading rungs; benzo/alcohol layer treated first or alongside; depression screened every visit; decades-old cases still respond." },
      { id: "medical-first", question: "Medical mimic.", recommendation: "Treat the SVT, thyroid disease, hypoglycaemia or withdrawal; then reassess — and close the workup explicitly so the alarm doesn't attach to the next report." },
      { id: "phobic-path", question: "Situation-locked.", recommendation: "Route to the Social Anxiety & Phobias pathway: the audience/object lock, exposure as the cure, propranolol for performance-only." },
      { id: "ptsd-path", question: "Trauma-cue-locked.", recommendation: "Route to the PTSD pathway: the cluster architecture, trauma-focused therapy first-line, no benzodiazepines." },
      { id: "gad-path", question: "Continuous engine.", recommendation: "Route to the GAD pathway: the 6-month + 3-of-6 gates, worry time, uncertainty experiments." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing panic disorder from situation-locked attacks only",
      why: "Panic disorder is built on the UNEXPECTED attacks; situation-locked surges are phobic or expected first.",
      correction: "Ask the lock question — out of the blue anywhere, or only with the audience/object?",
    },
    {
      mistake: "Missing the asthmatic on salbutamol or the patient on 10 cups of chai",
      why: "Sympathomimetic fuel and caffeine are real drivers that make the alarm genuinely ring.",
      correction: "The inhaler review and the honest tea quantification belong in every panic assessment.",
    },
    {
      mistake: "Prescribing full-dose SSRI day one",
      why: "The first-week activation mimics panic and drives dropouts — 'the medicine gave me the attacks' is a lost patient.",
      correction: "Start low (paroxetine 10, sertraline 25), warn about the jitter window in advance, review early.",
    },
    {
      mistake: "Lifelong alprazolam as 'maintenance'",
      why: "The Indian default error: relief now, tolerance and dependence later — and the drug blocks the extinction learning that the alarm is survivable.",
      correction: "Short bridges with the exit named at the first prescription; established dependence gets a structured taper.",
    },
    {
      mistake: "Treating agoraphobia without companion-fading",
      why: "The companion is the hidden safety behaviour — the map never re-registers as safe while the escort holds it.",
      correction: "Design companion-fading as explicit rungs: accompanies → waits at the corner → waves from the window → none.",
    },
    {
      mistake: "Teaching breathing as an escape tool",
      why: "Slow breathing used to STOP attacks re-enters the loop as another safety behaviour.",
      correction: "Reframe: the exhale-weighted breath rides the wave; the attack is welcomed, felt, and outlasted.",
    },
    {
      mistake: "Repeating the cardiac workup endlessly",
      why: "Each repeat ECG reinforces the cardiac conviction — the circuit deepens and the years pass.",
      correction: "One proper workup, then an explicit closing consultation in writing: 'it is the ALARM, not the pump.'",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Panic disorder: criteria, differential from cardiac disease, management.",
        "Interoceptive exposure — what and why.",
        "Agoraphobia: the five clusters and the DSM-5 change.",
        "Nocturnal panic attacks.",
      ],
      practical: [
        "Draw the panic cycle for a patient and mark the two links treatment attacks.",
        "Write the rungs of a household-geography ladder for a housebound homemaker.",
      ],
      longAnswer: [
        "Panic disorder with agoraphobia: phenomenology, diagnosis, management.",
        "The cardiology-circuit patient: systems and clinical response.",
      ],
    },
    neetPg: {
      highYield: [
        "Attack definition: sudden surge, peaks within minutes, 4+ of 13 symptoms — know the list by grouping (body-storm / balance-sensation / mind events).",
        "Disorder gates: recurrent UNEXPECTED attacks + 1 month of worry/consequence-fear/behaviour change.",
        "Agoraphobia = 2+ of five clusters for 6 months (mnemonic T-E-O-Q-E: Transport, Enclosed, Open, Queues/crowds, outsidE alone); DSM-5 decouples it from panic.",
        "Interoceptive exposure = the signature curative technique (straw/spin/stairs); anxiety sensitivity = the modifiable risk factor.",
        "Klein's suffocation-alarm/CO2-sensitivity theory: examinable history.",
        "SSRIs first-line, START LOW (the jitter window); benzos short bridges only — the paradox: interference with extinction learning.",
        "Nocturnal panic exists and is not night terror.",
        "Mitral valve prolapse association: historically over-quoted, benign in this context — know it, do not lean on it.",
        "Cardiology-circuit closure is part of treatment.",
      ],
      pyqConcepts: [
        "Pheochromocytoma as the exam zebra — urinary metanephrines once in a lifetime, not once a month.",
        "The panic-cardiology comorbidity literature and the ER detection pathway.",
        "NMHS treatment-gap data in the Indian-context answer.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 42-year-old bank manager with eleven ER visits, a wallet of normal reports, driving abandoned and his father's sorbitrate in his pocket: the closure ritual, the physiology session, start-low sertraline, interoceptive stair-runs and the flyover ladder — the sorbitrate retired under supervision.",
        "A homemaker who has not crossed her gate alone in four years, absorbed by the joint family as 'weak-nerved': the household-geography ladder with companion-fading rungs, the family sessions retiring the frame.",
        "The 3 a.m. waking surges the family calls 'ghost pressure': the CO2-alarm explanation, the faith alliance, and the same treatment as daytime attacks.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Panic attack = peak within minutes; disorder = unexpected + 1-month clause.",
        "Interoceptive exposure as the signature technique; SSRIs started low.",
        "Agoraphobia decoupled in DSM-5; five clusters.",
        "Benzodiazepines: short-term only — extinction interference.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The first attack's story in cinematic detail is both the diagnosis's fingerprint and the treatment hook — take it properly, once.",
        "The safety kit fades element-by-element as exposure rungs, never as confiscation — the ECG report is the illness's uniform.",
        "The companion is a safety behaviour; companion-fading is an exposure rung, not an administrative convenience.",
        "Your ED colleagues need the one-pager more than your patient needs another ECG — the referral protocol is the systems-level cure.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The ECG-collecting manager",
      presentation: "42-year-old bank manager, Nagpur — first attack in a traffic jam ('I thought my time had come'), six months later eleven ER visits, three ECGs, one TMT and driving abandoned.",
      initialPresentation: "A 42-year-old bank manager from Nagpur had his first attack in a traffic jam — 'I thought my time had come' — was driven to hospital, and discharged with a normal ECG and 'gas' advice. Six months later: eleven ER visits, three ECGs, one TMT, a wallet of reports, driving abandoned ('what if it happens on the flyover'), and the sorbitrate habit — his father's, borrowed. The interpretive seed: his father's MI at 48. Inter-attack life organised around scanning, the panic bag, and sitting near exits at every meeting.",
      history: "No prior psychiatric history; 4–5 cups of chai daily; father's MI at 48 (the inherited interpretation); no substances beyond the borrowed sorbitrate.",
      examination: "Mild resting tachycardia only; reproduceable surge with spinning-stool interoception in session (heart rate rising, terror mounting, then subsiding untouched); ECG and TMT documented normal.",
      diagnosis: "Panic disorder with agoraphobic avoidance and cardiac misinterpretation.",
      management: "The closure cardiology consult in writing; the physiology session with the cycle drawn (he asked to keep the paper); sertraline 25→100 mg with the jitter warning; 8 sessions CBT: interoceptive stair-runs and straw-breathing ('my heart RACES up the stairs, and nothing happens; say it again'), the flyover re-entry ladder with the therapist on the pillion for three rides, the sorbitrate retired under supervision, the reports returned to the drawer at home.",
      outcome: "At 6 months: no ER visits in five months, driving restored, one attack 'rode it out in the parking lot and it got bored'.",
      teachingPoints: [
        "The cardiology closure ritual is the entry ticket to psychiatric care.",
        "Interoceptive work treats the fear of the sensations — which IS the disorder.",
        "The safety kit fades element-by-element as exposure rungs, not as a confiscation.",
      ],
    },
    {
      title: "The homemaker behind the gate",
      presentation: "51-year-old homemaker, Vijayawada — four years since she last crossed her gate alone; attacks in a queue and on a bus; the joint family absorbed her as 'weak-nerved'.",
      initialPresentation: "A 51-year-old homemaker from Vijayawada presented incidentally — her daughter, a nurse, insisted on review after an attack at a family wedding. She had not crossed her gate alone in four years (attacks in a queue and on a bus), was always escorted, always near an exit, never outside alone; the joint family had absorbed her as 'weak-nerved' household fixture. Sleep broken by anticipatory dread; two to three attacks monthly at the map's edge; decades of narrowing never once named as illness.",
      history: "Onset in her forties with a queue attack; no prior psychiatric care; no substances; menopausal age but no vasomotor pattern.",
      examination: "Chair-spinning interoception positive (dizziness-terror cycle reproduced and subsided); map documented: gate, street corner, sabziwala, temple aangan, bus — each avoided alone.",
      diagnosis: "Panic disorder with agoraphobia, companion-dependent, decades-old.",
      management: "14 sessions: physiology drawing in Telugu; interoceptive practice (chair-spinning, straw-breathing, the step-up-and-down for the heart); the household-geography ladder with companion-fading rungs (daughter waits at the corner → waves from the gate → no one); family sessions retiring the 'weak nerves' frame; fluoxetine 20 mg (slow start, jitter warned) carrying the early weeks.",
      outcome: "At 8 months: the temple aangan alone, the sabzi market alone, one bus ride with a planned attack-welcoming script.",
      teachingPoints: [
        "The household's geography IS the ladder; ladders are local.",
        "Companion-fading is an exposure rung, not an administrative convenience.",
        "'Absorbed disability' patients surface only when a medically-literate relative pulls the file — train the nurses and ASHA workers.",
      ],
    },
  ],
  clinicalPearls: [
    "Peaks within minutes, 4+ of 13 symptoms, self-limited and harmless — recite the attack definition cold.",
    "The disorder is the fear of the alarm: 1 month of consequence after recurrent unexpected attacks.",
    "The panic cycle has two treatable links: the interpretation (restructuring) and the fear of sensations (interoception).",
    "T-E-O-Q-E: the five agoraphobia clusters — and DSM-5 decoupled agoraphobia from panic entirely.",
    "Start low: panic brains jitter on full-dose day one and never come back.",
    "The benzo paradox: relief now, extinction blocked, dependence later.",
    "The sorbitrate question, asked by name, uncovers the dangerous self-medication.",
    "'Ghabrahat ka daura' on the prescription paper: the plan follows into the family's vocabulary.",
  ],
  highYieldSummary: [
    "Panic attack = sudden surge, peak within minutes, 4+ of 13 symptoms; panic disorder = recurrent UNEXPECTED attacks + 1-month worry/behaviour-change clause.",
    "Core mechanism: catastrophic misinterpretation of bodily sensations; anxiety sensitivity the modifiable trait; Klein's CO2 suffocation-alarm the classic theory.",
    "Agoraphobia: 2+ of five clusters (T-E-O-Q-E) for 6 months, decoupled from panic in DSM-5.",
    "Treatment: physiology session → CBT (restructuring + INTEROCEPTIVE exposure + in-vivo ladder with companion-fading) → start-low SSRI (paroxetine/sertraline/fluoxetine/venlafaxine XR) for severity.",
    "Benzodiazepines: short bridges only — they block the extinction learning that the alarm is survivable.",
    "Mimics: SVT, thyroid, asthma/salbutamol, caffeine, vestibular, hypoglycaemia, withdrawal, pheochromocytoma (once in a lifetime).",
    "Indian layer: the cardiology circuit (one closure consult in writing), the housebound homemaker (household-geography ladders), the panic bag (fade as rungs), the faith alliance.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "panic-quiz-1",
      question: "By definition, a panic attack peaks:",
      options: ["Over hours", "Within minutes", "Overnight", "Over weeks"],
      correctIndex: 1,
      explanation: "Sudden surge, peak within minutes (typically under 10) — the discriminator from generalised anxiety and from cardiac events.",
      afterSectionId: "symptoms",
    },
    {
      id: "panic-quiz-2",
      question: "The core cognitive event of panic disorder is:",
      options: ["Fear of contamination", "Catastrophic misinterpretation of bodily sensations", "Trauma re-experiencing", "Fear of scrutiny"],
      correctIndex: 1,
      explanation: "Sensation → catastrophe → more sensation — the loop treatment attacks.",
      afterSectionId: "mechanism",
    },
    {
      id: "panic-quiz-3",
      question: "Interoceptive exposure involves:",
      options: ["Avoiding all triggers", "Deliberate induction of feared sensations (spinning, straw-breathing) until they lose meaning", "Imaginal scenes of loss", "Relaxation only"],
      correctIndex: 1,
      explanation: "Treating the fear-of-the-sensations directly — the signature technique and the cure-driver.",
      afterSectionId: "management",
    },
    {
      id: "panic-quiz-4",
      question: "First-line pharmacotherapy for panic disorder:",
      options: ["Alprazolam lifelong", "Antipsychotics", "SSRIs, started low, titrated", "Beta-blockers alone"],
      correctIndex: 2,
      explanation: "SSRIs first-line with low starting doses (the jitter window); benzos are short bridges; beta-blockers do not treat the disorder.",
      afterSectionId: "management",
    },
    {
      id: "panic-quiz-5",
      question: "A patient fears buses, queues and malls but has never had a panic attack. Under DSM-5:",
      options: ["Cannot be diagnosed", "Agoraphobia is diagnosable without panic-disorder history", "This is social anxiety", "This is GAD"],
      correctIndex: 1,
      explanation: "The decoupling: agoraphobia stands alone on the five-cluster fear.",
      afterSectionId: "diagnosis",
    },
    {
      id: "panic-quiz-6",
      question: "Long-term benzodiazepines in panic disorder are specifically problematic because they:",
      options: ["Raise cholesterol", "Interfere with the extinction learning that exposure builds, and cause dependence", "Cause diabetes", "Are unavailable in India"],
      correctIndex: 1,
      explanation: "Relief now, cure blocked later — the benzo paradox in panic.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the panic-attack definition and the disorder's 1-month clause.", answer: "Attack: sudden surge of intense fear peaking within minutes (typically under 10), 4+ of 13 symptoms, self-limited and harmless. Disorder: recurrent UNEXPECTED attacks plus ≥ 1 month of persistent attack-worry, consequence-fear, or maladaptive behaviour change (avoiding exercise, carrying reports, repeated ER visits).", topic: "Diagnosis" },
    { question: "Draw the panic cycle from memory and mark the two links treatment attacks.", answer: "Sensation → catastrophic interpretation ('I am dying/mad') → adrenaline → stronger sensation → loop. Link one: the interpretation (cognitive restructuring). Link two: the fear of the sensations themselves (interoceptive exposure) — plus the map (in-vivo ladder) for the geography of avoidance.", topic: "Concepts" },
    { question: "Which technique treats the fear of the sensations directly, and what are three standard induction methods?", answer: "Interoceptive exposure: stair-runs for racing heart, chair-spinning for dizziness, straw-breathing for air hunger (lamp-staring for unreality) — repeated in session until the sensation loses its meaning; the component that produces the cure rates.", topic: "Management" },
    { question: "Explain the benzo paradox in panic disorder: relief now, interference with which mechanism?", answer: "The drug prevents the extinction learning that the alarm is survivable — sedated, the brain never registers 'peaked and passed, harmless'; tolerance and dependence follow. Short bridges with the exit named; established dependence gets a structured taper.", topic: "Management" },
    { question: "List six medical mimics with their discriminating features.", answer: "SVT (ECG signature, vagal-maneuvre response); hyperthyroidism (continuous tremor, weight loss, TSH); asthma/salbutamol (wheeze, inhaler timing); caffeine/nicotine (dose-timing); vestibular (positional vertigo, nystagmus, no doom); withdrawal (substance clock); plus hypoglycaemia in diabetics and the pheochromocytoma zebra (metanephrines once in a lifetime).", topic: "Diagnosis" },
    { question: "Define agoraphobia's five clusters and state the DSM-5 decoupling.", answer: "Transport; Enclosed places; Open spaces; Queues/crowds; outsidE alone (T-E-O-Q-E) — 2+ for 6 months with avoidance/distress; DSM-5 permits the diagnosis without any panic-disorder history: agoraphobia stands alone.", topic: "Diagnosis" },
    { question: "Write the rungs of a household-geography ladder for a housebound homemaker.", answer: "Gate → street corner → the sabziwala → the temple aangan → the bus — each with companion-fading rungs (daughter waits at the corner → waves from the gate → no one), attacks welcomed with the riding script rather than medicated away.", topic: "Counselling" },
    { question: "What are the two Indian systems-levers that convert cardiology/ER traffic into panic detection?", answer: "One: the ER/cardiologist one-page referral protocol — 'normal ECG + normal troponin + classic description = anxiety pathway with a reassurance letter'. Two: the written closure consultation that retires the cardiology circuit formally — plus training nurses and ASHA workers to spot the woman behind the gate.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "I genuinely feel I am dying each time. You say it is harmless?", answer: "The feeling of dying is real; the dying is not. In every recorded case, panic peaks and passes within minutes while the body stays safe — the same adrenaline a sprint produces, aimed by a mis-set alarm. Your four normal ECGs are the data; we will treat the alarm that keeps calling the fire brigade." },
    { question: "Is there something wrong with my heart that the tests are missing?", answer: "Understandable after a father's or uncle's heart attack — that fear is the most common seed we see. The modern ECG plus troponin catches the dangerous patterns; panic's pattern is the opposite: minutes, waves, normal tests in between, worst when resting rather than climbing stairs." },
    { question: "Why do attacks come at night, in my sleep?", answer: "The over-sensitive alarm monitors CO2 even in sleep; a small rise triggers the siren at 3 a.m. and you wake mid-wave. It is not a ghost, not a heart problem — and it responds to the same treatment as daytime attacks." },
    { question: "If I breathe slowly during the attack, will it stop?", answer: "Slow breathing helps you ride the wave; used as an emergency stop-tool it can quietly become another escape behaviour. The real target is letting the wave arrive, peak and pass while you lean back — the attack learns it no longer frightens you." },
    { question: "Will I need medicines for life?", answer: "Most people do not. A treatment season of 8–12 weeks (building to 12 months for frequent relapsers) combined with the therapy, then a planned slow taper with an early-warning list. The therapy skills are permanent; the medicine is scaffolding." },
    { question: "The doctor gave an antidepressant — I came for panic, not depression.", answer: "Antidepressants are panic medicines at their own doses: they re-set the alarm's threshold over weeks. We start low and warn you about the first-week jitter, because panic brains are sensitive starters." },
    { question: "My wife has not left the house alone in years. Can that really reverse?", answer: "Yes — and the reversal is the visible part of treatment: a ladder built from your own gate outward, companion fading step by step, attacks welcomed along the way rather than medicated away. The kingdom re-expands the same way it shrank: territory by territory." },
    { question: "Can she travel by flight or train again?", answer: "Almost always, with graded practice — station visits, short train runs first; the flight is a ladder, not a wall. Carry the written attack-riding script, not the pill bottle, as the emergency kit." },
    { question: "Will my children get this?", answer: "A tendency, not a certainty. The heritable part is the jumpy alarm; the learnable parts — the catastrophe interpretation and the avoidance habits — are exactly what early treatment and family example can prevent." },
    { question: "Should we do the temple rituals the family suggests?", answer: "If ritual brings the family peace, it has a place; our evidence and your faith are not enemies. What must not be missed is that attacks shrink under the specific treatment — and that we measure the map (doors crossed alone) rather than the omens." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR (APA) — panic disorder and agoraphobia architecture paraphrased; criteria not reproduced (2022)" },
      { source: "ICD-11 (WHO) — panic attack qualifier and disorder constructs" },
      { source: "NICE — anxiety disorders guidance, stepped care" },
      { source: "Royal College of Psychiatrists — anxiety-disorder guidance lineage" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.7.3 — source chapter mapped; content rewritten (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — anxiety disorders (2022)" },
    ],
    trials: [
      { source: "Bakker A et al. — paroxetine panic programme trials" },
      { source: "Otto MW et al. — CBT vs medication vs combination meta-analyses in panic disorder" },
      { source: "Craske MG & Barlow DH — mastery-of-anxiety manuals; interoceptive-exposure trials" },
    ],
    reviews: [
      { source: "Klein DF — the suffocation-alarm false-alarm theory (Arch Gen Psychiatry lineage)" },
      { source: "Clark DM — the cognitive model of panic; Barlow DH — panic control treatment" },
      { source: "Taylor CB et al. — the panic-cardiology comorbidity literature and the ER detection pathway" },
      { source: "Shear MK — PDSS development and panic treatment synthesis" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416)" },
      { source: "Mental Healthcare Act 2017 — rights and supported-treatment framework (India)" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the false alarm, the shrinking map, and why feeling it cures it.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "25 min",
      description: "The attack definition, the gates, the cycle, the mimic screen and the treatment package.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "42 min",
      description: "Everything — evidence grading, the closure-consult craft, companion-fading design, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The false alarm, the gates, the treatable headline.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the attack definition, the 1-month clause and the five agoraphobia clusters cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The alarm that fears itself, the suffocation monitor, the shrinking kingdom.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can draw the panic cycle and mark the two links treatment attacks." },
    { number: 3, title: "Clinical Practice", description: "Take the first-attack story, run the mimic screen once and close it, deliver the package.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the closure ritual, start an SSRI low, and prescribe interoceptive work with its logic." },
    { number: 4, title: "Indian Context", description: "The cardiology circuit, the housebound homemaker, the panic bag, the faith alliance.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can build a household-geography ladder with companion-fading rungs and write the ER one-pager's logic." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the definition and decoupling questions cold and navigate to the SSRI lessons." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5-TR — panic disorder and agoraphobia criteria logic (paraphrased)", sourceType: "classification", edition: "Text revision", year: "2022", dateReviewed: "2026-09-28" },
    { id: "S2", source: "ICD-11 — panic attack qualifier and disorder constructs", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-28" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.7.3 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Klein DF — the suffocation-alarm false-alarm theory (Arch Gen Psychiatry lineage)", sourceType: "primary", year: "1993 onward", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Clark DM — the cognitive model of panic; Barlow DH — panic control treatment", sourceType: "primary", year: "1986–2000s", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Craske MG & Barlow DH — mastery-of-anxiety manuals; interoceptive-exposure trials", sourceType: "trial", year: "1990s–2010s", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Otto MW et al. — CBT vs medication vs combination meta-analyses; Bakker A et al. — paroxetine programme trials", sourceType: "meta-analysis", year: "1990s–2010s", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Royal College of Psychiatrists / NICE anxiety-disorder stepped-care guidance", sourceType: "guideline", year: "2011–2020s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Taylor CB et al. — the panic-cardiology comorbidity literature; the ER detection pathway studies", sourceType: "review", year: "1990s–2010s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Shear MK — PDSS development and panic treatment research synthesis", sourceType: "primary", year: "1997–2010s", dateReviewed: "2026-09-28" },
    { id: "S11", source: "National Mental Health Survey of India 2015–16 (NIMHANS) — anxiety data and treatment gap; Indian ER/cardiology utilisation studies for panic presentations", sourceType: "government", year: "2016", locator: "https://indianmhs.nimhans.ac.in/", dateReviewed: "2026-09-28" },
    { id: "S12", source: "Mental Healthcare Act 2017 (India) — rights framework; PDSS/ASI instrument literature", sourceType: "government", year: "2017", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "DSM-5 panic attack: sudden surge peaking within minutes with 4+ of 13 symptoms; panic disorder: recurrent unexpected attacks + ≥ 1 month of attack-concern or maladaptive behaviour change.", grade: "established", sources: ["S1"] },
    { text: "DSM-5 decouples agoraphobia from panic disorder: 2+ of five situational clusters for ≥ 6 months, diagnosable without any panic history.", grade: "established", sources: ["S1"] },
    { text: "The cognitive model — catastrophic misinterpretation of bodily sensations drives the panic cycle; restructuring the interpretation is a treatable link.", grade: "established", sources: ["S5"] },
    { text: "Interoceptive exposure (deliberate symptom induction: spinning, straw-breathing, stair-runs) is the signature curative technique, treating the fear of the sensations directly.", grade: "established", sources: ["S6"] },
    { text: "Klein's suffocation-alarm (CO2-sensitivity) theory: panic brains over-react to rising CO2 — the classic examinable theory explaining the respiratory quality and the breathing-retraining logic.", grade: "supported", sources: ["S4"] },
    { text: "SSRIs are first-line pharmacotherapy and must be started low: first-week activation mimics panic and drives dropouts; venlafaxine XR is the SNRI option.", grade: "established", sources: ["S7", "S8"] },
    { text: "Benzodiazepines: real short-term role for severe disability, but long-term use interferes with extinction learning and builds dependence — the benzo paradox.", grade: "established", sources: ["S7", "S3"] },
    { text: "CBT (with interoceptive and in-vivo components) alone or combined with SSRIs delivers the cure rates; combination for severity, CBT for skills-preference and durability.", grade: "established", sources: ["S6", "S7"] },
    { text: "Nocturnal panic attacks occur (waking mid-surge) and respond to standard panic treatment; they are not night terrors.", grade: "established", sources: ["S3", "S5"] },
    { text: "Lifetime prevalence: panic disorder ~2–4%, agoraphobia ~1–2%; women roughly 2:1; onset late teens through thirties.", grade: "established", sources: ["S3", "S10"] },
    { text: "Indian layer: the cardiology-circuit pathway (multiple normal ECGs before diagnosis) and the housebound-homemaker presentation are the two systematic distortions; written closure consultations and ER referral protocols convert the circuit into detection.", grade: "supported", sources: ["S11", "S9"] },
    { text: "NMHS 2015–16: pooled anxiety disorders ~3% of Indian adults with ~70–80% treatment gaps.", grade: "supported", sources: ["S11"] },
    { text: "Mitral valve prolapse association is historically over-quoted and benign in this context — know it, do not lean on it.", grade: "supported", sources: ["S3"] },
  ],
};
