import type { PsychiatryCourse } from "./types";

/**
 * SOCIAL ANXIETY DISORDER & SPECIFIC PHOBIAS — canonical Psychiatry
 * course (migration batch 3, Group F — anxiety disorders).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/social-anxiety-phobias.md — untouched
 * foundation), re-researched against current guidance (DSM-5-TR
 * gates and performance-only specifier, Clark & Wells cognitive
 * model, Öst one-session treatment, applied tension for
 * blood-injection-injury phobia, taijin kyofusho, NMHS India)
 * with per-claim provenance.
 *
 * Drug routes: sertraline, escitalopram and paroxetine (the SSRI
 * tier for the generalised subtype) link to existing KYP drug
 * lessons; propranolol (the performance-only beta-blocker) and
 * the MAOIs have no KYP lessons yet — recorded in contentGaps
 * (never invented).
 */
export const socialAnxietyPhobiasCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "social-anxiety-phobias",
  title: "Social Anxiety Disorder & Specific Phobias",
  shortName: "Social Anxiety & Phobias",
  kind: "disorder",
  category: "Anxiety Disorder",
  groupLetter: "F",
  groupName: "Anxiety disorders",
  learningPath: ["Psychiatry", "Anxiety Disorders", "Social Anxiety Disorder & Specific Phobias"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "Scrutiny fears in social anxiety, single-object fears in phobias, both highly treatable",
  summary:
    "Social anxiety disorder centres on fear of scrutiny and negative evaluation, while specific phobias centre on circumscribed objects or situations. Both are maintained by avoidance and are among psychiatry's most treatable conditions, responding to graded exposure and CBT.",
  estimatedReadTime: "35 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Apply the DSM-5 gates for social anxiety disorder: 6 months, social-performance situations, fear of negative evaluation.",
    "Distinguish the performance-only subtype from the generalised form, and their different treatments.",
    "Name the five specific phobia categories and the blood-injection-injury phobia's unique physiology.",
    "Explain the safety-behaviour engine that maintains both conditions.",
    "Build a graded exposure ladder for a phobia and a behavioural-experiment programme for social anxiety.",
    "Use SSRIs for generalised social anxiety and beta-blockers for performance-only anxiety.",
    "Apply Indian-context targets: English-medium presentations, arranged-marriage meetings, vivas, canteens, wedding stages.",
    "Recognise taijin kyofusho (the culture-bound variant) and autism's social difference as differentials.",
  ],
  quickFacts: [
    { label: "The core fear", value: "Negative evaluation", detail: "Fear of scrutiny and judgment, and of the visible anxiety symptoms themselves ('they will SEE me blush')" },
    { label: "The subtype split", value: "Performance-only vs generalised", detail: "Propranolol before performances for the first; SSRI + exposure CBT for the second: the treatment fork" },
    { label: "Maintenance engine", value: "Safety behaviours", detail: "Scripting, hiding, last-row seating, never attending: relief today is rent on the fear" },
    { label: "Phobia categories", value: "A-N-B-S-O", detail: "Animal, Natural environment, Blood-injection-injury, Situational, Other" },
    { label: "The fainting phobia", value: "BII vasovagal", detail: "Bradycardia-hypotension faint (the OPPOSITE of panic), with applied tension as its near-specific cure" },
    { label: "The flagship brief therapy", value: "One-session treatment", detail: "Öst's 2–3 hour massed exposure: spectacular for animal, injection and dental phobias" },
    { label: "Specific-phobia medication", value: "Almost none", detail: "Exposure is the cure; saying this is itself an exam point" },
    { label: "Indian signature", value: "Viva and seminar terror", detail: "First-generation English-medium students, arranged-marriage meetings, 'log kya kahenge': the stage-density of Indian life" },
  ],
  knowledgeGraph: [
    { label: "Generalized Anxiety Disorder (GAD)", type: "condition", href: "/psychiatry/gad/", note: "Worry across all domains versus scrutiny-locked: the domain map separates them" },
    { label: "Panic Disorder & Agoraphobia", type: "condition", href: "/psychiatry/panic-disorder/", note: "Surges unpredictable and un-locked to scrutiny; the situational-phobia boundary runs here" },
    { label: "Obsessive-Compulsive Disorder (OCD)", type: "condition", href: "/psychiatry/ocd/", note: "Stereotyped intrusions with rituals versus situation-locked fear" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The secondary consequence of years of avoidance and underachievement" },
    { label: "Alcohol Use Disorders", type: "condition", href: "/psychiatry/alcohol-use-disorders/", note: "The 'party lubricant' self-treatment route of generalised social anxiety: name it explicitly" },
    { label: "Autism Spectrum Disorder", type: "condition", href: "/psychiatry/autism/", note: "Social difference from not-reading cues, not fear of judgment: the treatment differs completely" },
    { label: "Child Anxiety", type: "condition", href: "/psychiatry/child-anxiety/", note: "Selective mutism: the childhood silhouette of social anxiety; treat early" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The system the SSRI tier rides on for the generalised subtype" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "Hyper-activation to faces in social anxiety; a narrow, often single-event circuit in phobias" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three stories carry the neuroscience. The spotlight defect: healthy social brains run a dim, generous spotlight, others notice us a little, mostly kindly; the socially anxious brain installs a prison-spotlight pointed at oneself (everything I do is being recorded and judged) plus a funhouse mirror of how I appear (blushing enormous, trembling visible from the back row). Attention turns inward, the actual feedback (bored, kind, busy people) never gets processed, and the distorted self-image is never corrected: treatment works by turning the spotlight outward and shrinking the mirror through deliberate experiments in which the camera of reality contradicts the imagination. The safety trap: every avoidance and safety behaviour buys immediate relief and pays for it by extending the fear's warranty. The brain records 'that was dangerous, and the hiding saved me'; graded exposure is the deliberate defaulting on that rent, room by room, until the landlord gives up. The needle and the fainting switch: where every other phobia runs the panic script (racing heart, adrenaline), blood-injection-injury phobia runs the opposite; a vagal DROP: heart slows, blood pressure falls, vision greys, and the person faints; hereditary, genuine, and uniquely treatable with applied tension, one of the most satisfying one-session cures in medicine.",
    steps: [
      "Start with normal social processing: a dim spotlight on others' attention (they notice us a little, mostly kindly) and an accurate self-image.",
      "In social anxiety the spotlight turns inward at full glare: self-focused attention crowds out the incoming data that others are not actually judging.",
      "The funhouse mirror distorts the self-image: the blush enormous, the tremor visible from the back row; video-feedback collapses it in a single powerful session.",
      "Safety behaviours (scripting, hiding the glass, last-row seating) buy relief and record 'the hiding saved me': the fear's warranty extends.",
      "In specific phobias a narrow circuit (often laid down by a single conditioning event, or prepared by evolution (snakes, heights, blood, strangers' scrutiny)) fires the full alarm only in the feared situation.",
      "Blood-injection-injury phobia uniquely runs a diphasic vagal response: heart SLOWS, blood pressure FALLS, the person FAINTS; the opposite of panic.",
      "Applied tension (tensing the large muscles through the encounter) holds blood pressure up through the draw; graded exposure re-registers the situation as ordinary: the two mechanisms the cures ride on.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "amygdala", name: "Amygdala", role: "Hyper-activation to faces in social anxiety; in specific phobias a narrow, situation-locked alarm often installed in a single conditioning trial.", grade: "established" },
    { id: "pfc", name: "Prefrontal Cortex", role: "The expectation engine generating the catastrophic social prediction ('they will think I am insane'): the hypothesis generator behavioural experiments test.", grade: "supported" },
    { id: "insula", name: "Insula", role: "Interoceptive representation of the visible symptoms (blush, tremor) that social anxiety fears: the internal mirror of the funhouse mirror.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "Alarm-modulation for the generalised social subtype: the system SSRIs ride on over 8–12 week trials.", grade: "supported", drugConnection: "Sertraline, escitalopram and paroxetine lessons exist in the KYP Medication Library." },
    { name: "Noradrenaline", symbol: "NE", role: "The tremor-and-pounding-heart currency of performance storms: the system beta-blockade blunts within the performance window.", grade: "supported", drugConnection: "Propranolol has no KYP drug lesson yet (recorded content gap)." },
    { name: "Vasopressin pathway (vasovagal)", symbol: "AVP", role: "The fainting switch of blood-injection-injury phobia: vagal outflow drops heart rate and blood pressure; the counter-physiology applied tension opposes.", grade: "supported" },
  ],
  pathways: [
    {
      id: "sad-spotlight-loop",
      name: "The spotlight and funhouse-mirror loop",
      steps: [
        { label: "Situation approaches (seminar, wedding, meeting)", detail: "Anticipatory anxiety days ahead: the sleepless night before" },
        { label: "Spotlight turns inward", detail: "Self-focused attention: 'how am I coming across?' crowds out the actual feedback" },
        { label: "Funhouse mirror activates", detail: "The distorted self-image: blushing enormous, trembling visible from the back row" },
        { label: "Physical storm confirms it", detail: "Blush, sweat, tremor, mind going blank: the symptoms ARE the feared catastrophe" },
        { label: "Post-mortem rumination", detail: "Days of replaying; the memory files as confirmation of the catastrophe" },
      ],
      clinicalManifestation: "Fear of situations where others can watch or judge, with the symptoms themselves as the feared display.",
      grade: "supported",
    },
    {
      id: "phobia-safety-trap",
      name: "The safety trap (the maintenance engine)",
      steps: [
        { label: "Feared situation approaches", detail: "The lift door, the dog corridor, the dentist's chair" },
        { label: "Avoidance or safety behaviour engages", detail: "Take the stairs; hold the glass with both hands; sit in the last row" },
        { label: "Relief arrives immediately", detail: "The rent is paid; the fear's warranty extends" },
        { label: "Brain records 'the hiding saved me'", detail: "No corrective learning: the situation stays registered as dangerous" },
        { label: "Graded exposure defaults on the rent", detail: "Repeated, survived encounters until the alarm re-registers the situation as ordinary" },
      ],
      clinicalManifestation: "Progressive avoidance engineering of impressive creativity: the twelve-storey climb, the cross-country train to avoid a flight.",
      grade: "established",
    },
    {
      id: "bii-faint-switch",
      name: "The fainting switch (blood-injection-injury)",
      steps: [
        { label: "Needle, blood or injury cue", detail: "The draw, the film, the dentist's needle" },
        { label: "Diphasic vagal response", detail: "Heart rate SLOWS, blood pressure FALLS: the opposite of panic" },
        { label: "Vision greys, the person faints", detail: "Genuine, hereditary, and uniquely distressing" },
        { label: "Applied tension opposes it", detail: "Tensing torso and limb muscles holds blood pressure up through the encounter" },
        { label: "Fainting retires in 1–2 sessions", detail: "Combined with graded exposure, one of medicine's most satisfying brief cures" },
      ],
      clinicalManifestation: "Fainting at injections, blood draws and dentistry, with the medical costs of skipped care.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "sad-onset", time: "Early-to-mid teens", title: "The shy toddler becomes the avoidant adolescent", description: "Median onset ~13; behavioural inhibition in infancy is the best-established precursor; untreated, the course runs chronically.", phase: "onset" },
    { id: "phobia-onset", time: "Childhood (animal/natural) or adult (situational)", title: "The circuit installs", description: "Animal and natural-environment phobias skew to childhood onset; situational types (lifts, flights) to adult onset; BII runs strongly in families.", phase: "onset" },
    { id: "sad-secondary", time: "Years", title: "The quiet costs compound", description: "Academic underachievement (questions unasked, promotions declined), secondary depression, alcohol as the party lubricant, deep loneliness.", phase: "duration" },
    { id: "treatment-window", time: "Whenever it is found", title: "The cure window is always open", description: "Phobias: a handful of sessions (one-session treatment for selected types); social anxiety: 10–14 sessions of exposure-centred CBT ± SSRI.", phase: "recovery" },
    { id: "maintenance", time: "12 months after response", title: "SSRI maintenance for the generalised subtype", description: "12-month maintenance after response; exposure skills are permanent; the ladder ends at functioning, not at comfort.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Social anxiety disorder: lifetime ~7–12% in Western surveys, one of the most common mental disorders; specific phobias the most common anxiety category of all at ~10–12% lifetime.",
    indianPrevalence: "NMHS 2015–16 pooled anxiety disorders at roughly 3% of adults with large treatment gaps; no Indian-specific social-anxiety prevalence, but campus and clinical data suggest an enormous uncounted burden: seminar-phobia among first-generation English-medium students, viva-voce terror, interview failure loops, wedding-stage avoidance.",
    lifetimeRisk: "Social anxiety precedes and feeds secondary depression, alcohol misuse and academic/occupational underachievement; phobias cause less global impairment by design (avoidable) but the dental, injection and flight versions carry real medical and occupational consequences.",
    genderRatio: "Animal and natural-environment phobias skew female; the online-machine demographic flattening narrows the social-anxiety gap.",
    ageOfOnset: "Social anxiety concentrated in early-to-mid teens (median ~13); phobias in childhood for animal/natural types, across adult life for situational ones.",
    indianNotes: "Every Indian life event is a public performance with an audience of a hundred. The stage density (weddings, vivas, seminars, arranged-marriage meetings) makes social anxiety's exposure surface unusually dense; the 'he is just shy' family frame pathologises nothing and treats nothing.",
  },
  etiology: [
    { category: "biological", factor: "Moderate heritability (~30–40%)", details: "Behavioural inhibition in infancy (the shy, high-reactive toddler) is the best-established developmental precursor of social anxiety; BII phobia runs strongly in families: a genuinely genetic flavour." },
    { category: "psychological", factor: "Conditioning and preparedness", details: "The dog bite installs the dog phobia; the classroom humiliation installs the reading-aloud phobia, but many phobias arrive without a remembered cause, suggesting pre-wiring: humans learn fear of evolutionarily relevant things (snakes, heights, blood, strangers' scrutiny) in one trial." },
    { category: "psychological", factor: "The maintenance engine (this matters more than the origin)", details: "Avoidance and safety behaviours prevent the disconfirmation that would dissolve the fear; self-focused attention ('how am I coming across?') crowds out the data that others are not actually judging." },
    { category: "psychological", factor: "Perfectionist standards", details: "Perfectionist performance standards and a harsh internal critic set the catastrophe bar ('any stumble = ruin')." },
    { category: "social", factor: "Teasing, bullying and critical parenting", details: "'What will people say' parenting is a cultural risk-factor factory; linguistic humiliation in English-medium transitions." },
    { category: "social", factor: "Indian stage density", details: "Single-attempt exam culture, viva formats, arranged-marriage meetings, wedding performances: a genuinely high-exposure social ecology with late detection." },
  ],
  symptomClusters: [
    {
      category: "1. Social anxiety disorder: the core picture",
      symptoms: ["Fear of situations where others can watch or judge: speaking, eating, drinking, writing, performing; meetings, classrooms, interviews, weddings", "Physical storm when exposed: blushing, sweating, trembling, racing heart, 'mind going blank', voice wavering, nausea, urgency to escape", "Fear is of the SYMPTOMS as much as the situation ('they will SEE me blush'; the blush is the feared catastrophe)", "Anticipatory anxiety days ahead (the sleepless night before the seminar); post-mortem rumination for days after", "Avoidance and safety behaviours: last-row seating, arriving early to avoid the entrance-walk, declining invitations, scripted phone calls, alcohol before functions", "Generalised subtype: nearly all social situations; performance-only subtype: public speaking/presentation alone (better prognosis, different treatment)"],
    },
    {
      category: "2. Specific phobias: the five categories",
      symptoms: ["Animal (dogs, snakes, insects, lizards)", "Natural environment (heights, water, storms, darkness)", "Blood-injection-injury (needles, blood draws, dentists), with the fainting physiology", "Situational (lifts, flights, tunnels, bridges, enclosed spaces)", "Other (choking/vomiting phobias, costumed characters, loud sounds)"],
    },
    {
      category: "3. The phobia signature",
      symptoms: ["Instant, intense, focused fear with full insight ('I know the lift is safe; my body does not')", "Near-total calm elsewhere", "Anticipatory dread when the encounter is unavoidable", "Avoidance engineering of impressive creativity (the twelve-storey climb, the cross-country train to avoid a flight, the vaccination declined)"],
    },
    {
      category: "4. Secondary consequences",
      symptoms: ["Underachievement: seminar questions unasked, promotions declined, courses abandoned", "Depression and alcohol misuse (the 'party lubricant' route)", "Deep loneliness ('everyone else got to practise being human')", "Medical costs of skipped care: blood tests, vaccinations, dental visits declined"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5-TR",
      code: "Social anxiety disorder (300.23 / F40.10); Specific phobia (300.29 / F40.2xx)",
      criteria: [
        "Social anxiety: marked fear/anxiety about social situations with possible scrutiny; fear of showing anxiety symptoms and being negatively evaluated; the situations almost always provoke fear; avoidance or intense distress; out of proportion to actual threat; ≥ 6 months; impairment. Specify: performance-only.",
        "Specific phobia: marked fear about a specific object/situation; immediate fear when encountered; avoidance or intense distress; out of proportion; ≥ 6 months; impairment. Code by the five categories. Adults acknowledge the excess; children may not.",
      ],
      duration: "≥ 6 months for both.",
      indianNote: "Build the avoidance inventory first: the list of declined situations is the ladder of a life shaped around the fear, and it becomes the exposure ladder. Ask the blush-tremor-blank questions specifically: physical symptoms ARE the feared object in social anxiety.",
    },
    {
      system: "ICD-11",
      code: "Social anxiety disorder (6B04); Specific phobia (6B03)",
      criteria: [
        "Social anxiety disorder: marked fear or anxiety in social interactions and situations where the person may be scrutinised, with fears of negative evaluation; the full syndrome subtype distinguished from the performance-only pattern.",
        "Specific phobia subclassified by the object/situation, with the blood-injection-injury type carrying the fainting marker.",
      ],
      duration: "Typically at least several months.",
      indianNote: "Instruments by name: LSAS (Liebowitz) for severity/tracking, SPIN as the screen; phobia work uses behavioural avoidance tests (BAT): the walk toward the dog, scored by steps. Named, not reproduced.",
    },
  ],
  severityScales: [
    {
      name: "LSAS",
      fullName: "Liebowitz Social Anxiety Scale",
      measures: "Situation-by-situation fear and avoidance: the standard severity/tracking instrument for social anxiety.",
      ranges: [
        { min: 0, max: 54, severity: "Non-socially-anxious range", action: "If clinical suspicion persists, monitor; the domain map and avoidance inventory outperform any single score" },
        { min: 55, max: 64, severity: "Mild social anxiety", action: "Psychoeducation + graded self-exposure with review; counsellor tier sufficient" },
        { min: 65, max: 80, severity: "Moderate", action: "Formal exposure-centred CBT referral; SSRI consideration for the generalised subtype" },
        { min: 81, max: 144, severity: "Severe", action: "Combined CBT + SSRI; audit for alcohol self-treatment and secondary depression; functioning goals set" },
      ],
      indianNote: "Named for documentation; items not reproduced (copyright). The avoidance inventory (what is actually declined) is the more actionable Indian-clinic measure: it IS the exposure ladder.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Ordinary shyness", distinguishingFeatures: "Temperament without the impairment engine; functioning holds.", keyDifferentiator: "No 6-month engine costing marks, friendships, careers and sleep: the shy man still attends the wedding." },
    { condition: "Panic disorder", distinguishingFeatures: "Surges unpredictable and un-locked to social scrutiny.", keyDifferentiator: "Situation-lock: social fear arrives with the audience and leaves with it." },
    { condition: "GAD", distinguishingFeatures: "Worry across all domains.", keyDifferentiator: "The domain map, not scrutiny-locked." },
    { condition: "Avoidant personality", distinguishingFeatures: "Long-standing pervasive pattern; considerable overlap with generalised SAD.", keyDifferentiator: "Onset and breadth; the treatment overlaps too: formulate, don't war over labels." },
    { condition: "Autism spectrum", distinguishingFeatures: "Social difference from not-reading cues, not fear of judgment.", keyDifferentiator: "No blush-catastrophe; the treatment differs completely: exposure does not teach cue-reading." },
    { condition: "Paranoia (psychotic)", distinguishingFeatures: "Conviction of persecution or harm.", keyDifferentiator: "Embarrassment versus persecution; paranoia does not yield to exposure logic." },
    { condition: "Body dysmorphic disorder", distinguishingFeatures: "Fixed belief about a specific appearance defect with mirror-checking.", keyDifferentiator: "The defect is the content, not the audience generally." },
    { condition: "Selective mutism (child)", distinguishingFeatures: "The childhood silhouette of social anxiety.", keyDifferentiator: "Treat early: the waiting-game version hardens into the adult disorder." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "CBT with exposure (FIRST-LINE for social anxiety)",
      description: "Psychoeducation (the spotlight defect and the safety trap, 'your brain is over-defending a territory that was never at war'); attention re-training (deliberately moving attention outward during conversations (count the other person's questions, notice their clothing) starves the funhouse mirror); behavioural experiments with video-feedback (predictions written, the speech recorded, the patient meets the real image, the single most powerful session); the graded exposure ladder (from 'ask a shopkeeper a question' through 'eat in the canteen' to 'present in the seminar', repeated until the situation bores the alarm); safety-behaviour stripping (exposure WITH the crutches first, then without); social skills training where genuine skill gaps coexist.",
      whenToUse: "First-line for all subtypes; 10–14 sessions typical.",
      indianContext: "The ladder is FREE: the Indian street (shops, autos, chai stalls, bus queues) is a graded exposure gymnasium of unmatched density; professional colleges running pre-seminar exposure modules (a 6-session practice group before presentation season) prevent years of avoidance: cheap, scaleable, currently almost nobody does it.",
    },
    {
      category: "pharmacotherapy",
      name: "SSRIs (the generalised subtype)",
      description: "Sertraline, escitalopram, paroxetine: first-line drug tier for generalised social anxiety; 8–12 week trials; 12-month maintenance after response.",
      whenToUse: "Generalised subtype, severity, comorbid depression, or when therapy access fails.",
      indianContext: "Costs per the GAD course ledger (sertraline ≈ ₹80–160/month); MAOIs (phenelzine) historically effective but logistically obsolete: know for exams; benzodiazepines short bridges only, same trap logic as GAD.",
    },
    {
      category: "pharmacotherapy",
      name: "Beta-blockers (the performance-only subtype)",
      description: "Propranolol 10–40 mg, 30–60 minutes pre-performance: blunts the tremor-racing-heart storm that IS the catastrophe for the performer; no sedation, no dependence.",
      whenToUse: "Performance-only subtype: the surgeon presenting quarterly, the student at the viva, the singer before the stage.",
      indianContext: "Propranolol ≈ ₹30–80/month for performance dosing: the honest tablet for pure stage fear; judicious use for the arranged-marriage-meeting performance-only profile.",
    },
    {
      category: "psychotherapy",
      name: "Graded in-vivo exposure (the phobia CURE)",
      description: "Therapist-guided, repeated, stepwise approach until fear extinguishes: a handful of sessions for animal and situational phobias. One-session treatment (Öst): a single prolonged 2–3 hour massed exposure, spectacular for animal, injection and dental phobias. Applied tension for BII: tensing the torso and limb muscles through the encounter to prevent the vagal drop, fainting usually retires in 1–2 sessions, paired with gradual re-introduction of needed care. Cognitive work where beliefs ride along ('if I panic in the lift I will be trapped'. Test the escape truth, the duration truth).",
      whenToUse: "Every specific phobia: medication has almost NO role here; exposure is the treatment, and saying so is an exam point.",
      indianContext: "Geography-aware design for dog phobia: a known calm dog first, a street-dog corridor later, a stick as a transitional safety-behaviour to be faded; teach applied tension in the first 30 seconds of every lab and dental encounter ('tense your legs and arms like this through the draw; you will not faint').",
    },
    {
      category: "psychotherapy",
      name: "The comorbidity and family layer",
      description: "Alcohol as the self-prescribed social lubricant is the comorbidity to name explicitly (the standard endpoint: needing two drinks to speak to two people); secondary depression treated on its own track; the family module converts 'log kya kahenge' software deliberately.",
      whenToUse: "Screened at every contact; family sessions for the adolescent and arranged-marriage cohorts.",
      indianContext: "The audience experiment as the vaccine: deliberately do a small odd thing in public (wear the mismatched kurta) and count who actually notices; almost nobody; needs the family's buy-in to survive the household's own audience-consciousness.",
    },
  ],
  safety: {
    redFlags: [
      "Alcohol escalating as the social lubricant: the generalised-subtype comorbidity that quietly becomes its own disorder",
      "Course abandonment or exam failure driven by seminar/viva avoidance: academic collapse is the presenting face",
      "Secondary depression with suicidal ideation: screen directly (Tele-MANAS 14416)",
      "Medical harm from phobia-driven care avoidance: skipped blood tests, declined vaccinations, abandoned dental care",
      "Injury from fainting during BII episodes: untreated, the faint itself causes falls and head strikes",
    ],
    urgentGuidance:
      "The never-attended-anywhere adolescent with total avoidance plus depression needs active, not watchful, care: the loneliest presentations hide the highest risk. For BII: teach applied tension BEFORE the next blood draw or dental visit; the faint itself is a physical-safety issue, not only a comfort one.",
  },
  drugLinks: [
    { name: "Sertraline", slug: "sertraline", role: "First-line SSRI (generalised)", rationale: "Solid trial base for generalised social anxiety; the practical Indian first choice (≈ ₹80–160/month at 100 mg) with 8–12 week trials." },
    { name: "Escitalopram", slug: "escitalopram", role: "First-line SSRI (generalised)", rationale: "Well-tolerated, dose-simple option for the generalised subtype; useful with comorbid depression." },
    { name: "Paroxetine", slug: "paroxetine", role: "First-line SSRI (generalised)", rationale: "The SSRI with the classic social-anxiety trial programme (Stein et al.); sedating/anticholinergic load makes it second choice in practice." },
  ],
  contentGaps: [
    "Propranolol (the performance-only beta-blocker) has no KYP drug lesson yet (the most-wanted gap for this course).",
    "MAOIs (phenelzine) (historically effective, logistically obsolete) have no KYP drug lesson; exam knowledge only.",
    "Öst's one-session treatment and applied-tension protocol guides have no standalone KYP skills modules yet (the concepts live in this course).",
  ],
  patientGuide: {
    whatIsIt:
      "Two related conditions of the same alarm system. Social anxiety disorder: a persistent, pounding fear of being watched, judged and humiliated (of speaking, eating, performing or even blushing in front of others) strong enough to make a person avoid the very situations that build a life. Specific phobias: focused, lightning-strike fears of particular things (dogs, injections, heights, lifts) that the person knows are excessive but cannot switch off, with full calm everywhere else.",
    whatCausesIt:
      "A born-cautious temperament meets an audience-conscious upbringing, or a single frightening event installs a narrow circuit. What keeps both conditions alive is avoidance: every escape brings relief and quietly teaches the brain the situation was truly dangerous, so the fear never meets its own evidence.",
    symptoms:
      "Blushing, sweating, trembling, racing heart, mind going blank and voice wavering in watched situations; days of dread before and days of post-mortem after; avoidance (last-row seating, declined invitations) and safety behaviours (scripting, both hands on the glass, alcohol before functions). Phobias: instant intense fear with full insight, near-total calm elsewhere.",
    treatment:
      "The cure is graded, repeated, agreed exposure, never ambush: a ladder of steps from easy (ask a shopkeeper a question) to the goal (present the seminar), each practised until the alarm quiets. Video-feedback (watching your own recorded performance) collapses the distorted self-image faster than any argument. For the generalised form, SSRIs help over 8–12 weeks; for pure stage fear, a small pre-performance beta-blocker (propranolol) steadies the tremor without sedation. For needle fainting: tensing your big muscles through the draw (applied tension) usually retires the faint in one or two sessions.",
    selfHelp: [
      "Build your ladder and climb it daily: the Indian street is a free exposure gymnasium: one shopkeeper question, one canteen meal, one bus conversation at a time.",
      "Turn attention outward in conversations (count their questions, notice their clothing): the spotlight cannot watch two places at once.",
      "Drop one safety behaviour at a time: the speech with the notes surrendered, the glass held in one hand.",
      "Do the audience experiment: a small odd thing in public, then count who noticed; almost nobody.",
      "If you faint at needles: tense legs and arms through the draw, and tell the lab beforehand.",
    ],
    whenToSeekHelp: [
      "Avoidance costing marks, jobs, friendships or marriage prospects",
      "Needing alcohol to face social situations",
      "Skipping medical, dental or vaccination care out of fear",
      "Low mood or hopelessness setting in behind the avoidance",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "College/student counselling cells: ask specifically for exposure-based CBT and practice viva modules",
      "District hospital psychiatry OPD / DMHP psychologists: nominal or no charge",
    ],
  },
  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No condition-specific Indian guideline; management follows WHO mhGAP and NICE-tier anxiety guidance with Indian college-counselling and Tele-MANAS delivery adaptations.",
    systemContext: "The Indian consultation culture rarely brings these conditions in by name: the suffering is quiet (avoidance, not collapse), the 'he is just shy' frame treats nothing, and the presenting door is usually the secondary cost; academic decline, the failed interview loop, the marriage-meeting freeze, the skipped blood test.",
    programmeContext: "Tele-MANAS 14416 for the base tier; college counselling cells should run pre-seminar exposure modules and practice vivas in exam season as routinely as mock written papers: cheap, scaleable, and almost universally missing; district psychologists deliver exposure-centred work after training.",
    costConsiderations: "The exposure ladder is free (the Indian street as gymnasium); propranolol ≈ ₹30–80/month for performance dosing; SSRI costs per the GAD ledger (sertraline ≈ ₹80–160/month); private CBT ≈ ₹600–1,500/session; district/college counsellors and Tele-MANAS at nominal cost (approx 2026).",
    culturalConsiderations: "'Log kya kahenge' (what will people say) is household software that trains children in audience-consciousness daily. The audience experiment is the vaccine, and it needs the family's buy-in. Indian weddings force performances (the couple's walk, the speeches, the photographs): families can grade the exposure: seated roles before speaking roles, small gatherings before large, rehearsal at home with video feedback. English-medium transitions fuse linguistic anxiety with social anxiety for first-generation students: mother-tongue practice pairs, permission to open in the mother tongue, and faculties that grade content over accent.",
    patientCounselling: [
      "The English-medium intervention: practice-pairs in the mother tongue first; 'one sentence of Telugu, then the English term' as a permitted opening; recorded practice with video-feedback logic.",
      "The arranged-marriage frame: exposure rehearsals with family role-play, propranolol judiciously for the performance-only profile, and family re-briefing ('frozen is not arrogant').",
      "The viva-voce protocol: practice vivas (recorded, repeated, desensitised) run by counselling cells every exam season.",
      "Every lab and dental clinic should know applied tension: 'tense your legs and arms like this through the draw; you will not faint': taught in the first 30 seconds of the encounter.",
      "The wedding-stage engineering brief: seated before speaking, small before large, rehearsal at home; weddings become the treatment arena rather than the minefield.",
    ],
  },
  decisionPath: {
    title: "The scrutiny-versus-object triage",
    nodes: [
      {
        id: "start",
        question: "A patient fears and avoids. What is the fear aimed at?",
        branches: [
          { label: "Being watched, judged, humiliated (people)", next: "social" },
          { label: "One specific object or situation", next: "phobia" },
          { label: "Surges out of the blue, no situation lock", next: "panic-path" },
          { label: "Worry across all domains", next: "gad-path" },
        ],
      },
      {
        id: "social",
        question: "Which situations, and for how long with impairment?",
        branches: [
          { label: "Public speaking/presentation only", next: "performance-only" },
          { label: "Most social situations, ≥ 6 months", next: "generalised" },
        ],
      },
      {
        id: "phobia",
        question: "Which of the five categories, and does the person faint?",
        branches: [
          { label: "Blood-injection-injury (fainting)", next: "bii" },
          { label: "Animal / situational / natural / other", next: "exposure-cure" },
        ],
      },
      { id: "performance-only", question: "Performance-only social anxiety.", recommendation: "Propranolol 10–40 mg, 30–60 min pre-performance + graded rehearsal practice (video-feedback); no chronic SSRI needed: the tremor-storm is the entire problem." },
      { id: "generalised", question: "Generalised social anxiety.", recommendation: "Exposure-centred CBT first-line (attention re-training, video-feedback, ladder, safety-behaviour stripping) + SSRI (sertraline/escitalopram/paroxetine) for severity or comorbidity; audit alcohol; 12-month SSRI maintenance after response." },
      { id: "bii", question: "Blood-injection-injury phobia.", recommendation: "Applied tension (tensing the large muscles through the encounter) + graded exposure to needles/blood; fainting usually retires in 1–2 sessions; re-introduce the needed care (blood tests, dental, vaccinations) on the ladder; medication has no role." },
      { id: "exposure-cure", question: "Specific phobia, standard.", recommendation: "Graded in-vivo exposure: the cure; consider Öst's one-session treatment (2–3 hour massed exposure) for animal/dental/injection types; geography-aware ladders for dog phobia (calm dog → street corridor, stick faded); no routine medication: exposure IS the treatment." },
      { id: "panic-path", question: "Un-locked surges.", recommendation: "Route to the Panic Disorder & Agoraphobia pathway: the 1-month concern clause, interoceptive exposure, start-low SSRI." },
      { id: "gad-path", question: "All-domain worry.", recommendation: "Route to the GAD pathway: the 6-month + 3-of-6 gates, the worry engine, the CBT package with worry time." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Missing the performance-only/generalised split",
      why: "Putting a tremor-only performer on long SSRIs it never needed: the subtype decides propranolol versus SSRI-plus-CBT.",
      correction: "Map the situations: presentation-stage alone = performance-only; nearly all social situations = generalised.",
    },
    {
      mistake: "Treating lift phobia with chronic benzodiazepines",
      why: "Three sessions of exposure cures what a decade of tablets merely sedates, and the tablets block the corrective learning.",
      correction: "Exposure is the specific cure for situational phobias; medication has almost no role.",
    },
    {
      mistake: "Missing alcohol as the self-treatment route in generalised social anxiety",
      why: "The 'party lubricant' quietly becomes an alcohol use disorder; the standard endpoint is needing two drinks to speak to two people.",
      correction: "Ask by name about pre-function drinking at every contact.",
    },
    {
      mistake: "Calling autistic social difference 'social anxiety'",
      why: "Autism's social difficulty is cognitive (not reading cues), not fear-driven: exposure does not teach cue-reading.",
      correction: "Look for the blush-catastrophe: its presence marks social anxiety; its absence plus cue-reading difficulty marks autism.",
    },
    {
      mistake: "Diagnosing panic disorder when the surges are strictly situation-locked",
      why: "Situation-locked surges are phobic/expected, not the out-of-the-blue signature of panic disorder.",
      correction: "Ask the lock question: does the storm arrive only with the audience/object, or out of the blue anywhere?",
    },
    {
      mistake: "Forgetting that BII phobia patients FAINT (not panic), and letting them collapse during blood draws",
      why: "Classic reassurance posture during a draw can precipitate the vagal drop and a head strike.",
      correction: "Teach applied tension in the first 30 seconds of every encounter; couch or reclined posture for the at-risk.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Social anxiety disorder: criteria and management.",
        "Differentiate social phobia from avoidant personality disorder.",
        "Blood-injection-injury phobia and applied tension.",
        "Specific phobia: types and treatment (one-session therapy).",
      ],
      practical: [
        "Design an exposure ladder for an Indian student with seminar-phobia (six rungs).",
        "Explain the safety-behaviour maintenance engine in four sentences.",
      ],
      longAnswer: [
        "Social anxiety disorder: phenomenology, differential diagnosis, management.",
        "Specific phobias: classification, aetiology, treatment.",
      ],
    },
    neetPg: {
      highYield: [
        "Gates: both diagnoses need 6 months, out-of-proportion fear, and impairment; social anxiety adds the negative-evaluation core.",
        "Behavioural inhibition in infancy = the developmental precursor of social anxiety disorder.",
        "BII phobia: vasovagal FAINT (bradycardia/hypotension, opposite of panic); applied tension as the counter.",
        "Propranolol pre-performance = performance-only subtype; SSRIs = generalised subtype: the treatment fork.",
        "Öst's one-session treatment: a single 2–3 hour massed exposure; flagship for animal/BII/dental phobias.",
        "No routine pharmacotherapy for specific phobias; exposure is the cure: an exam line.",
        "Video-feedback and attention-training as SAD-specific techniques.",
        "Taijin kyofusho: fear of OFFENDING others with one's body/odour, the Japanese culture-bound cousin (ICD appendix); the one-mark favourite.",
        "Selective mutism = the childhood silhouette of social anxiety.",
      ],
      pyqConcepts: [
        "Mnemonic A-N-B-S-O for the five specific-phobia categories.",
        "Mnemonic 'The 3 S's' of social-anxiety maintenance: Spotlight, Safety behaviours, Selective attention to threat.",
        "Viva-voce and English-medium seminar anxiety as school/college health issues: the Indian-context marks.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A state topper freezes in her first English-medium seminar and now skips all presentation components: the ladder from shopkeeper questions through canteen-eating to a 5-minute seminar with a friend in the front row, video-feedback for the funhouse mirror, propranolol for the two highest rungs; average performance after terror is a cure.",
        "A 55-year-old engineer has not entered a lift for 30 years: three sessions of graded in-vivo exposure, no medication; the body's bill (breathlessness on twelve floors) eventually presents; the sessions-not-years rule.",
        "The student who 'cannot see the needle' and skips blood tests: applied tension plus graded exposure, and the lab taught the 30-second script.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Social anxiety = fear of negative evaluation, ≥ 6 months; performance-only specifier.",
        "BII phobia = fainting (bradycardia + hypotension); applied tension.",
        "Exposure = the specific-phobia cure; SSRIs + CBT for generalised social anxiety.",
        "Taijin kyofusho as the culture-bound variant.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The avoidance inventory doubles as the exposure ladder: build it in the first session and the treatment plan writes itself.",
        "Video-feedback collapses the funhouse mirror faster than any argument; the patient's own recorded image is the instrument.",
        "Alcohol is the generalised-subtype shadow comorbidity: the question belongs in every assessment.",
        "Autism mislabelled as social anxiety gets exposure it does not need and misses the support it does. The blush-catastrophe is the differentiating sign.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The topper who could not speak",
      presentation: "20-year-old engineering student, Coimbatore: state topper who froze in her first English-medium seminar, left mid-sentence, and within a term was skipping all presentation components.",
      initialPresentation: "A 20-year-old second-year engineering student from Coimbatore (a school state topper) froze in her first English-medium seminar: voice trembled, notes shook, classmates snickered, and she left mid-sentence. Within one term she was skipping all presentation components (procuring 'headache' certificates), eating alone, and answering only written questions, with early depressive colouring. Assessment found the generalised-ish performance-triggered pattern: anticipatory sleepless nights before any presentation, post-mortem rumination for days, and full calm in one-to-one mother-tongue conversation.",
      history: "Vernacular-medium schooling; first-generation English exposure; no substances; strong academic record until the seminar.",
      examination: "Blush-and-tremor storm reproducible when asked to read a paragraph aloud in English in session; calm reading in Tamil; LSAS in the moderate-to-severe band.",
      diagnosis: "Social anxiety disorder, performance-triggered, with secondary avoidance and early depressive colouring.",
      management: "Ten sessions of CBT: the spotlight-defect psychoeducation; video-feedback of a practice talk (she predicted 'catastrophic shaking'; the video showed a normal nervous student); a graded ladder from shopkeeper questions through canteen-eating to a 5-minute seminar with a supportive friend in the front row; safety-behaviour stripping (notes surrendered in session 8); mother-tongue practice pairs first; a brief propranolol trial for the two highest rungs.",
      outcome: "At semester's end she presented in class, scoring average, and celebrated the average like a medal.",
      teachingPoints: [
        "Academic collapse is the presenting face of social anxiety in Indian colleges.",
        "Video-feedback corrects the funhouse mirror faster than any argument.",
        "The ladder ends at functioning, not at comfort: average performance after terror is a cure.",
      ],
    },
    {
      title: "The engineer who walked twelve floors",
      presentation: "55-year-old government engineer, Bhopal: thirty years of never entering a lift, climbing to his twelfth-floor office with dignity and breathlessness.",
      initialPresentation: "A 55-year-old government engineer in Bhopal referred after a routine cardiac workup (ordered for exertional breathlessness from twelve daily flights) surfaced the real story: he had not entered a lift for thirty years, had declined field postings to towers and dams, and had organised his career and dignity around the avoidance. The fear began after being trapped in a stalled office lift at 25; the insight was full ('I know it is safe; my body does not'); the calm elsewhere near-total.",
      history: "No other psychiatric history; no panic attacks elsewhere; hypertension controlled; the avoidance architecture sustained by family and office accommodation.",
      examination: "Instant intense fear standing before an open lift in session (heartbeat visible, gripping the rail); heart rate and BP normal at rest.",
      diagnosis: "Specific phobia, situational type (lifts), with three-decade avoidance engineering.",
      management: "Three sessions of graded in-vivo exposure: standing before an open lift; stepping in with the doors held; riding one floor with the therapist; riding to the twelfth with conversation; then solo trips with a phone call running. Applied relaxation for the anticipatory dread. No medication offered or needed.",
      outcome: "At week 6 he rode the lift daily and requested a field posting.",
      teachingPoints: [
        "Situational phobias hide behind 'lifestyle habits' and endurance careers; the body's bill eventually presents.",
        "The exposure ladder is short for situational phobias: sessions, not years.",
        "No medication was needed or used: exposure is the specific cure; the exam point in vivo.",
      ],
    },
  ],
  clinicalPearls: [
    "The subtype split decides the drug: propranolol for performance-only, SSRI-plus-CBT for generalised.",
    "Relief today is rent on the phobia: the one-line exposure rationale.",
    "The blush is the catastrophe in social anxiety: physical symptoms ARE the feared object.",
    "BII phobia faints (bradycardia, hypotension): the opposite of panic; applied tension is the near-specific cure.",
    "Video-feedback: the single most powerful session in social-anxiety CBT.",
    "Öst's one-session treatment: 2–3 hours of massed exposure, flagship for animal, injection and dental phobias.",
    "Selective mutism is the childhood silhouette. Treat early, before the waiting-game hardens it.",
    "Taijin kyofusho (fear of offending with one's body/odour): the culture-bound cousin and one-mark favourite.",
  ],
  highYieldSummary: [
    "Social anxiety = fear of negative evaluation + ≥ 6 months + impairment; performance-only specifier; behavioural inhibition the developmental precursor.",
    "Maintenance = the 3 S's: Spotlight (self-focused attention), Safety behaviours, Selective attention to threat.",
    "Five phobia categories (A-N-B-S-O); BII uniquely faints and uniquely responds to applied tension.",
    "Treatment: exposure-centred CBT (attention re-training, video-feedback, ladder, safety-behaviour stripping) first-line; SSRIs for the generalised subtype; propranolol for performance-only.",
    "Specific phobias: exposure is the cure; medication has almost no role: an exam line.",
    "Öst one-session treatment for animal/BII/dental types.",
    "Indian layer: English-medium seminar terror, viva-voce fear, arranged-marriage meetings, 'log kya kahenge' software, wedding-stage engineering, street-dog geography.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "social-quiz-1",
      question: "The core fear in social anxiety disorder is:",
      options: ["Open spaces", "Negative evaluation by others", "Physical illness", "Being alone"],
      correctIndex: 1,
      explanation: "Fear of scrutiny and negative judgment — and of visible anxiety symptoms themselves.",
      afterSectionId: "symptoms",
    },
    {
      id: "social-quiz-2",
      question: "A surgeon wants a medicine ONLY for her quarterly conference presentations, trembling being the main problem. Best choice:",
      options: ["Long-term SSRI", "Propranolol before each performance", "Clozapine", "Diazepam nightly"],
      correctIndex: 1,
      explanation: "Performance-only subtype: pre-performance beta-blockade targets the visible tremor-storm; no chronic treatment needed.",
      afterSectionId: "management",
    },
    {
      id: "social-quiz-3",
      question: "The unique physiology of blood-injection-injury phobia:",
      options: ["Panic with tachycardia and hypertension", "Vasovagal response: bradycardia and hypotension with fainting", "Seizures", "Hypoglycaemia"],
      correctIndex: 1,
      explanation: "The diphasic vagal response — the reason for applied tension as its specific remedy.",
      afterSectionId: "mechanism",
    },
    {
      id: "social-quiz-4",
      question: "The maintenance engine of both social anxiety and phobias is:",
      options: ["Genetic mutation", "Avoidance and safety behaviours blocking corrective learning", "Dopamine excess", "Poor parenting only"],
      correctIndex: 1,
      explanation: "Relief today is rent on the fear — the exposure rationale in one line.",
      afterSectionId: "mechanism",
    },
    {
      id: "social-quiz-5",
      question: "Öst's one-session treatment involves:",
      options: ["Twelve weekly psychoeducation talks", "A single prolonged massed exposure session (2–3 hours)", "Hypnosis", "Medication desensitisation"],
      correctIndex: 1,
      explanation: "One graded-to-top massed session — the flagship evidence-based brief therapy for animal, injection and dental phobias.",
      afterSectionId: "management",
    },
    {
      id: "social-quiz-6",
      question: "A student never speaks in school but speaks fluently at home. Diagnosis:",
      options: ["Autism spectrum disorder", "Selective mutism", "Intellectual disability", "Depression"],
      correctIndex: 1,
      explanation: "The childhood silhouette of social anxiety; treat early with a school-graded talking ladder.",
      afterSectionId: "differential",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the DSM-5 gates for both disorders.", answer: "Both: out-of-proportion fear, ≥ 6 months, impairment. Social anxiety adds possible-scrutiny situations with fear of negative evaluation (specify performance-only). Specific phobia: a specific object/situation with immediate fear on encounter; code by the five categories (A-N-B-S-O).", topic: "Diagnosis" },
    { question: "Which subtype of social anxiety gets propranolol, which gets SSRI-plus-CBT, and why the split?", answer: "Performance-only (public speaking/presentation alone): propranolol 10–40 mg 30–60 min pre-performance; the tremor-storm is the entire problem, and blunting it suffices. Generalised (most social situations): exposure-centred CBT first-line with SSRIs for severity/comorbidity; the broader engine needs the broader treatment.", topic: "Management" },
    { question: "Explain the safety-behaviour maintenance engine in four sentences.", answer: "'Every escape brings real relief. That is genuine. But each escape also teaches your brain the situation was dangerous and the hiding saved it. So the fear never meets its own evidence, and the warranty extends. Treatment is the deliberate, graded defaulting on that rent: room by room, until the landlord gives up.'", topic: "Counselling" },
    { question: "Name the five specific phobia categories, and the unique physiology + treatment of the blood-injection-injury type.", answer: "Animal, Natural environment, Blood-injection-injury, Situational, Other. BII: diphasic vagal response; heart slows, blood pressure falls, the person faints (opposite of panic); hereditary; treated with applied tension (tensing large muscles through the encounter) plus graded exposure, usually retiring the faint in 1–2 sessions.", topic: "Concepts" },
    { question: "Describe the video-feedback session and what it corrects.", answer: "Predictions are written first ('I will look insane, my shaking will be visible from the back row'); the speech is recorded; the patient watches the video and meets the real image (a normal nervous person) instead of the funhouse mirror. It corrects the distorted processed self-image, the most powerful single session in social-anxiety CBT.", topic: "Management" },
    { question: "Design an exposure ladder for an Indian student with seminar-phobia (six rungs).", answer: "1) Ask a shopkeeper a question in the mother tongue; 2) ask one in English; 3) eat lunch in the crowded canteen; 4) answer one question in a small tutorial; 5) give a 3-minute talk to two friends, recorded; 6) present 5 minutes in the seminar with a supportive friend in the front row: notes surrendered at the top rung, propranolol judiciously for the last two.", topic: "Counselling" },
    { question: "What is one-session treatment, and for which phobias does it work best?", answer: "Öst's protocol: a single prolonged (2–3 hour) massed exposure session, graded to the top within the session; spectacular results for animal, injection and dental phobias; named in exams as the flagship brief therapy.", topic: "Management" },
    { question: "Give the two-line difference between social anxiety and autism-spectrum social difficulty.", answer: "Social anxiety fears judgment and dreads the visible blush: the catastrophe is being watched. Autism's social difference is cognitive (not reading cues) with no blush-catastrophe; exposure does not teach cue-reading, and the treatment differs completely.", topic: "Diagnosis" },
  ],
  faqs: [
    { question: "My son is just shy. Shy is not a disease, no?", answer: "Shyness is a temperament; social anxiety disorder is what happens when shyness grows an engine, when it costs marks, friendships, careers and sleep for months and years. The shy man still attends the wedding; the socially anxious man declines it and suffers twice." },
    { question: "Why do I blank out the moment I stand to speak?", answer: "Adrenaline shifts the brain to its emergency setting: fast-acting and narrow; words are stored in the slow retrieval system, which gets switched off. The blank is physiology, not stupidity, and it is trainable: repeated exposure re-ranks the situation as ordinary, and the retrieval system stays online." },
    { question: "Everyone says 'just speak, practice makes perfect'. Is that the treatment?", answer: "Almost: the advice is right but ungraded. 'Just speak' as one giant step fails; the same step split into a graded ladder (shopkeeper, canteen, two friends, seminar) works reliably. Treatment is your grandmother's advice, engineered." },
    { question: "Will a tablet cure my stage fear?", answer: "For pure stage fear there is an honest tablet: a small dose of propranolol before the performance that steadies the tremor and pounding heart without sedation. For fear spread across situations, tablets (SSRIs) plus graded practice work better than either alone." },
    { question: "I know the lift is safe. I know it. Why does my body not know it?", answer: "Because the fear is not stored where knowledge lives. The alarm circuit learned the fear in one lesson, and it does not read: it only updates through experience: repeated, graded, survived encounters. Knowing and feeling rejoin through practice, not through argument." },
    { question: "I faint at needles: my mother is the same. Is there anything for it?", answer: "It runs in families, it involves a blood-pressure drop rather than panic, and it has a near-specific cure: tensing your big muscles through the draw (applied tension) plus graded practice; usually one or two sessions. Labs should be told beforehand; nearly everyone can get blood tests after it." },
    { question: "My daughter does not talk in school at all but talks normally at home.", answer: "That is selective mutism: the childhood silhouette of social anxiety. It deserves early treatment (a talking-ladder built at school with the teacher), because the waiting-game version hardens into the adult disorder." },
    { question: "Can I just take a drink before functions? It works.", answer: "It works the way a rented crutch works, and it also teaches the brain that humans are only survivable under chemistry. The standard endpoint of that route is needing two drinks to speak to two people. We can get you to the same wedding without it, in steps." },
    { question: "Is this because I was kept at home too much or scolded too much?", answer: "Partly contribution, not cause: an inborn cautious temperament meets an audience-conscious upbringing ('what will people say') and fuses into the disorder. Blame-mapping the family is inaccurate and unhelpful: the family re-training IS the treatment ally." },
    { question: "Will I have to do the feared thing in the sessions themselves?", answer: "Yes: that is where the cure is. But graded, agreed in advance, with your consent at each rung, and never by ambush. Nothing is done to you in the room that was not first written on the ladder." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR (APA) — social anxiety and specific phobia logic paraphrased; criteria not reproduced (2022)" },
      { source: "ICD-11 (WHO) — anxiety-or-fear disorder constructs; taijin kyofusho in the culture-bound appendix lineage" },
      { source: "NICE — anxiety disorders guidance, stepped care" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.7.2 — source chapter mapped; content rewritten (2009)" },
      { source: "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed. — anxiety disorders (2022)" },
    ],
    trials: [
      { source: "Stein MB et al. — SSRI trials in social anxiety (paroxetine programme)" },
      { source: "Blanco C et al. — phenelzine vs moclobemide vs placebo (the classic comparative trial)" },
      { source: "Heimberg RG — the CBGT trial tradition; Mayo-Wilson E et al. — psychotherapy/combination meta-analyses" },
    ],
    reviews: [
      { source: "Clark DM & Wells AD — the cognitive model of social phobia (the spotlight/self-processing model); Clark DM & McManus F — the updated attention literature" },
      { source: "Rapee RM & Spence SH — developmental origins; Kagan J — behavioural-inhibition literature" },
      { source: "Öst LG — one-session treatment for specific phobias; Wolitzky-Taylor KB et al. — exposure meta-analyses" },
      { source: "Page AC — blood-injection-injury phobia and the applied-tension lineage" },
      { source: "Kessler RC — anxiety-disorder epidemiology (NCS-R/WHO surveys)" },
      { source: "National Mental Health Survey of India 2015–16 (NIMHANS) — anxiety-bucket data (2016)", url: "https://indianmhs.nimhans.ac.in/" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416)" },
      { source: "College counselling cells — practice-viva and pre-seminar exposure modules (the Indian delivery ask)" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the spotlight, the safety trap, and why exposure cures.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "25 min",
      description: "The gates for both disorders, the subtype split, the five categories and the treatment fork.",
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
      description: "Everything: evidence grading, one-session treatment craft, applied-tension teaching, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The spotlight, the five categories, the treatable headline.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the gates for both disorders and name the five phobia categories." },
    { number: 2, title: "Mechanism & Neuroscience", description: "Spotlight defect, safety trap, fainting switch.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why safety behaviours extend the fear and why BII faints instead of panicking." },
    { number: 3, title: "Clinical Practice", description: "Map the avoidance inventory, split the subtypes, deliver the ladder.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can build a six-rung exposure ladder and choose propranolol versus SSRI-plus-CBT correctly." },
    { number: 4, title: "Indian Context", description: "English-medium terror, vivas, wedding stages, log kya kahenge.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can run the audience experiment brief and teach applied tension in 30 seconds." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the subtype-split and BII-physiology questions cold and navigate to the SSRI lessons." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5-TR — social anxiety and specific phobia criteria logic (paraphrased)", sourceType: "classification", edition: "Text revision", year: "2022", dateReviewed: "2026-09-28" },
    { id: "S2", source: "ICD-11 — anxiety-or-fear disorder constructs; taijin kyofusho culture-bound lineage", sourceType: "classification", edition: "ICD-11 MMS", year: "2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-28" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.7.2 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Clark DM & Wells AD — the cognitive model of social phobia; Clark DM & McManus F — attention literature", sourceType: "primary", year: "1995–2002", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Rapee RM & Spence SH — developmental origins; Kagan J — behavioural inhibition", sourceType: "review", year: "1980s–2010s", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Heimberg RG — CBGT trial tradition; Mayo-Wilson E et al. — psychotherapy/combination meta-analyses for SAD", sourceType: "trial", year: "1990s–2010s", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Stein MB et al. — paroxetine SSRI trials in social anxiety; Blanco C et al. — the classic comparative trial", sourceType: "trial", year: "1990s–2000s", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Öst LG — one-session treatment for specific phobias (Behav Res Ther series); Wolitzky-Taylor KB et al. — exposure meta-analyses", sourceType: "primary", year: "1980s–2010s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Page AC — blood-injection-injury phobia and applied tension lineage (with Öst's applied-tension trials)", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Kessler RC — anxiety-disorder epidemiology (NCS-R/WHO surveys)", sourceType: "primary", year: "1994–2010s", dateReviewed: "2026-09-28" },
    { id: "S11", source: "National Mental Health Survey of India 2015–16 (NIMHANS) — anxiety-bucket data; Indian campus-counselling literature (test/viva anxiety)", sourceType: "government", year: "2016", locator: "https://indianmhs.nimhans.ac.in/", dateReviewed: "2026-09-28" },
    { id: "S12", source: "Math SB et al. and Indian socio-cultural psychiatry reviews — the 'log kya kahenge' framing; LSAS/SPIN instrument literature", sourceType: "review", year: "2000s–2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "DSM-5 social anxiety disorder: fear of scrutiny and negative evaluation across social situations, ≥ 6 months, with impairment; the performance-only specifier defines a distinct, better-prognosis subtype.", grade: "established", sources: ["S1"] },
    { text: "Specific phobia: marked fear of a specific object/situation with immediate onset, coded across five categories (animal, natural environment, blood-injection-injury, situational, other); adults acknowledge the excess.", grade: "established", sources: ["S1"] },
    { text: "Behavioural inhibition in infancy is the best-established developmental precursor of social anxiety disorder.", grade: "established", sources: ["S5"] },
    { text: "The Clark-Wells cognitive model (self-focused attention, distorted self-image, safety behaviours) drives the effective CBT components including video-feedback and attention re-training.", grade: "established", sources: ["S4"] },
    { text: "Avoidance and safety behaviours maintain both conditions by blocking corrective learning; graded exposure is the curative mechanism.", grade: "established", sources: ["S4", "S8"] },
    { text: "Blood-injection-injury phobia features a diphasic vasovagal response (bradycardia, hypotension, fainting) (opposite of panic) with applied tension as its specific, rapidly effective remedy.", grade: "established", sources: ["S9"] },
    { text: "SSRIs are first-line pharmacotherapy for the generalised social-anxiety subtype (8–12 week trials, 12-month maintenance); propranolol pre-performance is the classic performance-only treatment.", grade: "established", sources: ["S7"] },
    { text: "Öst's one-session treatment (a single 2–3 hour massed exposure) delivers spectacular results for animal, injection and dental phobias.", grade: "established", sources: ["S8"] },
    { text: "Medication has almost no routine role in specific phobias; exposure is the treatment: the exam point.", grade: "established", sources: ["S8", "S3"] },
    { text: "Exposure-centred CBT and SSRI programmes for social anxiety carry the treatment evidence (CBGT tradition and meta-analyses).", grade: "established", sources: ["S6"] },
    { text: "Lifetime prevalence: social anxiety ~7–12% in Western surveys; specific phobias ~10–12%: the most common anxiety category; onset teens (social) and childhood/adult by type (phobias).", grade: "established", sources: ["S10"] },
    { text: "Taijin kyofusho (fear of offending others with one's body or odour) is the Japanese culture-bound cousin in the ICD appendix lineage.", grade: "established", sources: ["S2"] },
    { text: "Indian context: NMHS anxiety-bucket ~3% with large treatment gaps; campus data suggest uncounted viva/seminar burden; 'log kya kahenge' operates as a cultural maintenance factor.", grade: "supported", sources: ["S11", "S12"] },
  ],
};
