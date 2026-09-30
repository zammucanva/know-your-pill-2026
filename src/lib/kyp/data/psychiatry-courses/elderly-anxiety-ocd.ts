import type { PsychiatryCourse } from "./types";

/**
 * ANXIETY & OCD IN THE ELDERLY — canonical Psychiatry course
 * (migration batch 10, Group M — psychiatry of old age).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/elderly-anxiety-ocd.md — untouched foundation),
 * re-researched against the chapter's own lineages (the Lindesay
 * old-age synthesis, Tyrer's general neurotic syndrome, the
 * Goldberg–Huxley vulnerability model, the Åström stroke cohort,
 * the Beekman/Krasucki/Larkin late-life epidemiology, the
 * Mohlman–Koder adapted-CBT evidence, Suribhatla & Lindesay's
 * old-age psychopharmacology) with per-claim provenance. The
 * general disorder science lives in the F-group courses (GAD,
 * Panic, OCD); this course teaches the old-age specifics — the
 * changed presentation, the wrong-tablet default, the after-50
 * rule and the India layer.
 *
 * Drug routes: the SSRI first-line tier (sertraline, escitalopram)
 * has KYP lessons and is linked; venlafaxine (named by the chapter
 * alongside the SSRIs) is taught here; oxazepam and the
 * benzodiazepine class, buspirone, hydroxyzine, the beta-blocker
 * and low-dose neuroleptic tiers, and adapted CBT have no KYP
 * lessons — taught here, recorded in contentGaps, never invented.
 */
export const elderlyAnxietyOcdCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "elderly-anxiety-ocd",
  title: "Anxiety & OCD in the Elderly",
  shortName: "Elderly Anxiety/OCD",
  kind: "disorder",
  category: "Psychiatry of Old Age",
  groupLetter: "M",
  groupName: "Psychiatry of old age",
  learningPath: ["Psychiatry", "Psychiatry of Old Age", "Anxiety & OCD in the Elderly"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "34 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "Common and treatable, yet answered with a renewing benzodiazepine, not an antidepressant",

  summary:
    "In old age, anxiety shifts its address: worry turns to health and finances, fear of falling becomes the signature phobia, and panic misroutes to organ clinics. Antidepressants with CBT adapted to the ageing sensorium are first-line, not a renewing benzodiazepine.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "State the general-neurotic-syndrome model — extensive comorbidity, diagnostic instability over time, all the disorders persisting into old age — and explain why OCD stands apart as distinct, stable and differently caused.",
    "Recognise how anxiety changes its address with age: worry aimed at health, finances and crime; fear of falling as the signature geriatric phobia; panic misrouted to cardiology, neurology and gastroenterology.",
    "Judge whether an elder's fear is 'reasonable' against physical frailty and the availability of social support — never against age alone — and defend the judgement in a viva.",
    "Apply the late-onset interrogations: post-65 agoraphobia as illness-triggered rather than panic-driven; post-stroke anxiety's chronicity and its drag on functional recovery; the after-50 obsessional organic rule.",
    "Work the differential web: depression (the comorbidity drag on antidepressant response), dementia (bidirectional with anxiety), delirium, paranoid states, and the physical mimics with their drug list (oral hypoglycaemics, corticosteroids, caffeine, sympathomimetics).",
    "Prescribe the ladder honestly: antidepressants first-line with geriatric dosing care; benzodiazepines reluctantly and briefly when genuinely needed (the oxazepam logic); buspirone's slow start; beta-blocker contraindications; the neuroleptic tier's minimal role.",
    "Deliver the Indian layer: the 'tension' doorway question, the benzodiazepine-legacy conversion, family-delivered exposure, and the one-question screen at every stroke, MI and fall follow-up.",
  ],
  quickFacts: [
    { label: "The classification stance", value: "general neurotic syndrome", detail: "The elderly stress-related and anxiety disorders are better understood as aspects of one general neurotic syndrome — extensive comorbidity, diagnostic instability over time — than as discrete categories; OCD the exception: distinct, stable, different aetiology" },
    { label: "The service paradox", value: "Community rates significant, clinical rates low", detail: "These disorders do not pass easily through the filters on the pathway to care — the central service fact; prevalence and incidence fall with age; female preponderance; the late-onset exceptions being phobic disorder, panic and OCD" },
    { label: "The signature phobia", value: "fear of falling", detail: "The geriatric addition to the phobia list — and the reasonableness rule travelling with it: clinically significant fears dismissed as 'reasonable for her age' when it is physical frailty and social support, not age, that determine perceived vulnerability" },
    { label: "The post-65 pattern", value: "Agoraphobia follows illness, not panic", detail: "Agoraphobia first appearing after 65 usually arises after an alarming experience of physical ill health — the illness-triggered avoidance that the prevention window in stroke, MI and falls aftercare exists to catch" },
    { label: "The after-50 rule", value: "New obsessions: organic until excluded", detail: "First-onset obsessions after 50 are rare and demand a search for dementia or a space-occupying lesion — or recognition as part of a primary affective disorder; the workup comes before the label" },
    { label: "The wrong tablet", value: "A benzodiazepine instead of the right things", detail: "The chapter's organising complaint: untreated, or treated with a renewing benzodiazepine, instead of the right things — an antidepressant and adapted CBT; when a benzo is genuinely needed, oxazepam (short half-life, no active metabolites) is the least problematic" },
    { label: "The comorbidity drag", value: "Depression travels with the anxiety", detail: "Depressive symptoms are integral to many elderly neurotic disorders — and comorbid anxiety predicts poorer antidepressant response with more relapse and recurrence; assess and treat the depressive component in its own right" },
    { label: "The Indian signature", value: "'Tension', gas, sleeplessness — and the renewing prescription", detail: "Indian elders present through the somatic doorway and are normalised ('what do you expect at this age?'), somatised into medical clinics, or tranquillised for years; converting a long-term user to an SSRI plus taper is the single highest-yield geriatric intervention many Indian OPDs can offer" },
  ],
  knowledgeGraph: [
    { label: "Generalized Anxiety Disorder (GAD)", type: "condition", href: "/psychiatry/gad/", note: "The F-group science of the worry condition — THIS course adds the elderly content shift (health, finances, crime), the 'tension' doorway and the frailty-and-support judgement" },
    { label: "Panic Disorder & Agoraphobia", type: "condition", href: "/psychiatry/panic-disorder/", note: "The general architecture of the surge — and the old-age difference: panic misrouted to cardiology and neurology, agoraphobia after 65 triggered by illness rather than panic" },
    { label: "Obsessive-Compulsive Disorder (OCD)", type: "condition", href: "/psychiatry/ocd/", note: "The exception to the general neurotic syndrome — distinct, stable, differently caused; and the lifelong disorder whose after-50 impostors this course teaches to exclude" },
    { label: "Benzodiazepine Misuse", type: "condition", href: "/psychiatry/benzodiazepine-misuse/", note: "The wrong tablet's fuller story — tolerance, dependence, the withdrawal on erratic discontinuation, and the taper discipline that converts the legacy prescription" },
    { label: "Delirium in the Elderly", type: "condition", href: "/psychiatry/elderly-delirium/", note: "The benzodiazepine accumulation endgame — and the two-way street: severe anxiety precipitating delirium in the vulnerable, frightening hallucinations producing stormy anxiety" },
    { label: "Mood Disorders in the Elderly", type: "condition", href: "/psychiatry/elderly-mood/", note: "The comorbidity that matters most — depressive symptoms integral to these disorders, comorbid anxiety predicting poorer antidepressant response and more relapse" },
    { label: "Mild Cognitive Impairment", type: "condition", href: "/psychiatry/mci/", note: "The bidirectional street: early dementia presenting with anxiety and obsessinality, anxiety and depression producing the subjective cognitive impairment that presents first" },
    { label: "Substance Use in the Elderly", type: "condition", href: "/psychiatry/elderly-substance-use/", note: "The mistreatment trap's other half — sedative and alcohol abuse growing in the void left by the untreated anxiety" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The modulation the first-line tier restores — why an antidepressant, not a tranquilliser, is the answer to late-life anxiety and OCD alike" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The threat detector whose output the elderly body translates into chest, gut and dizziness — launching the somatic detour" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Two mechanism stories organise this course, and neither begins with a brain map. The thermostat story: every person carries a lifelong baseline setting — premorbid vulnerability, the genetic contribution (evidenced in younger subjects; the old-age contribution unknown), temperament, early experience whose fingerprints persist into old age. Old age multiplies the destabilising events (physical illness, bereavement, retirement, institutionalisation) while the support systems that buffered earlier shocks thin; and what patient and doctor then do — the benzodiazepine, the avoidance, the worry rituals, the reassurance-seeking — either restores the setting or elaborates the symptoms. The meaning of the event matters as much as the event: loss events tilt toward depression, threatening events toward anxiety, and both mingle in every one of these disorders. The somatic detour story: anxiety in the elderly exits through the body — palpitations to cardiology, dizziness to neurology, gut symptoms to gastroenterology — each specialty investigating honestly and finding nothing, or finding the true abnormality the anxiety has amplified, while the real disorder consolidates behind years of negative tests as 'cardiac neurosis': every somatic flutter now meaning the heart, avoidance following, deconditioning making the next flutter more likely. Beneath both stories runs the shared fear circuitry the F-group courses teach — the amygdala's threat detection under prefrontal regulation, serotonergic modulation doing its slow work, the noradrenergic engine driving the somatics — and OCD's separate engine: the one member of the family with its own circuitry, distinct and stable, whose first appearance after 50 is a signal of brain disease until imaging and cognitive testing say otherwise. The treatment logic follows the mechanism exactly: antidepressants restore the serotonergic regulation the syndrome lacks on a weeks-scale; benzodiazepines borrow against the very GABA system they titrate; adapted CBT and graded exposure reverse the elaborations — the avoidance, the deconditioning, the checking.",
    steps: [
      "The baseline setting: premorbid vulnerability — genetic contribution, temperament, early experience (parental loss and childhood abuse effects persisting into old age) — sets how far an insult swings the system.",
      "Old age multiplies the shocks: illness, bereavement, retirement, institutionalisation — the destabilisers arriving on a thinned support network; the same thermostat, more shocks, fewer buffers.",
      "The meaning decides the colour: loss events tilt toward depression, threatening events toward anxiety — and both travel together, because anxiety and depression mingle in all of these disorders.",
      "The symptoms take the new realities as their content: health, finances, crime — a body that can fall, a heart that has failed, a street that feels less safe; the fear of falling the signature geriatric addition.",
      "The somatic detour: autonomic arousal exits through the body — cardiology, neurology, gastroenterology — each specialty finding nothing while the 'cardiac neurosis' consolidates behind the negative tests.",
      "What happens next decides elaboration versus restitution: the benzodiazepine–avoidance–reassurance loop entrenches (tolerance, deconditioning, the wrong tablet); the antidepressant plus adapted CBT and graded exposure restitutes.",
      "OCD runs its own engine: distinct, stable, differently caused — the exception to the general neurotic syndrome, and after 50 a first onset is organic until excluded (dementia, space-occupying lesion, or the affective route).",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "amygdala", name: "Amygdala (the threat detector)", role: "Flags threat and drives the autonomic surge — hyperresponsive across the anxiety disorders; in the elderly its output is read as chest, gut and dizziness, which is how the somatic detour begins.", grade: "established" },
    { id: "medial-prefrontal", name: "Medial prefrontal cortex (the regulator)", role: "The top-down brake that tells a flutter it is only a flutter — regulation thinning with age and with the frontal atrophy of the dementias, one reason anxiety rides along with cognitive decline and one reason reassurance alone fails.", grade: "supported" },
    { id: "hippocampus", name: "Hippocampus (the context library)", role: "Files the safe-versus-dangerous context of places and situations; its failure in early dementia presents as anxiety and obsessinality — while anxiety and depression in turn produce the subjective cognitive impairment that presents first. The bidirectional street the differential respects.", grade: "supported" },
    { id: "cstc-loops", name: "Basal ganglia and cortico-striato-thalamo-cortical loops (the OCD engine)", role: "The error-detection and habit circuitry driving the obsession–compulsion cycle — OCD's own machinery, distinct and stable across the lifespan, the exception that never blends into the general neurotic syndrome.", grade: "established" },
    { id: "locus-coeruleus", name: "Locus coeruleus (the arousal hub)", role: "The noradrenergic battery behind the palpitations, tremor and sleep disruption of elderly anxiety — the somatics that misroute the patient to cardiology and that the beta-blockers try (and often fail, given their contraindications) to quiet.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "The modulation the antidepressants restore — the SSRI tier's target in generalised anxiety, panic and OCD alike; the weeks-scale onset is the pharmacology behind the chapter's first-choice stance.", grade: "established", drugConnection: "Sertraline and escitalopram — the linked SSRI pair; venlafaxine carries the evidence alongside per the chapter and is taught here." },
    { name: "GABA", symbol: "GABA", role: "The receptor system the benzodiazepine borrows — immediate calm, accumulating toll: tolerance, dependence, and in the elderly the accumulation producing delirium, incontinence, falls.", grade: "established", drugConnection: "No KYP benzodiazepine lesson — the misuse perspective and the taper discipline live in the Benzodiazepine Misuse course; the oxazepam no-active-metabolites logic taught here." },
    { name: "Noradrenaline", symbol: "NE", role: "The sympathetic arousal engine of the panic somatics — the palpitations, tremor and sweating that send the elder to cardiology; the system the beta-blockers target and the reason their geriatric contraindications matter.", grade: "supported" },
    { name: "Glutamate", symbol: "Glu", role: "The excitatory arm of the cortico-striato-thalamo-cortical loops — the obsession–compulsion engine's firing; the serotonergic quieting of it is why SSRIs are specifically effective in OCD.", grade: "supported" },
  ],
  pathways: [
    {
      id: "thermostat-pathway",
      name: "The thermostat (vulnerability to elaboration or restitution)",
      steps: [
        { label: "The baseline setting", detail: "Premorbid vulnerability — genetics, temperament, early experience — the thermostat's lifelong setting, mostly fixed before the fifties" },
        { label: "The old-age destabiliser", detail: "Illness, bereavement, retirement, institutionalisation arriving on a thinned network; the event's meaning tilting the colour (loss → depression, threat → anxiety)" },
        { label: "The symptom acquires elderly content", detail: "Health, finances, crime — the fear of falling, the failed heart, the unsafe street replacing the younger adult's stage of worries" },
        { label: "Elaboration or restitution", detail: "The benzodiazepine–avoidance–reassurance loop entrenches the symptoms; the antidepressant plus adapted CBT and graded exposure restitutes the setting" },
      ],
      clinicalManifestation: "The retired teacher four months after her MI — housebound, pulse-checking hourly, the temple door too far — the post-event pattern the aftercare window exists to catch.",
      grade: "supported",
    },
    {
      id: "somatic-detour-pathway",
      name: "The somatic detour (autonomic surge to cardiac neurosis)",
      steps: [
        { label: "The autonomic surge", detail: "Noradrenergic arousal: palpitations, dizziness, gut symptoms — the panic attack or the generalised surge wearing the body's clothes" },
        { label: "The specialty misrouting", detail: "Cardiology, neurology, gastroenterology — each investigating honestly, finding nothing (or the true abnormality the anxiety has amplified)" },
        { label: "The cardiac neurosis consolidates", detail: "Every somatic flutter now means the heart; years of negative tests behind which the real disorder sits untreated — misdiagnosis and inappropriate investigation MORE likely at this age, not less" },
        { label: "Avoidance and deconditioning", detail: "The flutter avoided, the body deconditioned — the next flutter more likely; the loop closing on itself" },
      ],
      clinicalManifestation: "The elder with a drawer of normal ECGs whose panic was never once named — the detour the drug history and physical examination are meant to interrupt.",
      grade: "established",
    },
    {
      id: "after-50-pathway",
      name: "The after-50 route (new obsessions to the organic answer)",
      steps: [
        { label: "New obsessions or rituals after 50", detail: "Checking, ruminations, hoarding appearing for the first time — rare, and a signal of brain disease until excluded" },
        { label: "The organic workup", detail: "Cognitive testing and imaging: dementia or a space-occupying lesion sought; the affective route (obsessions as part of a primary affective disorder) considered" },
        { label: "The compensation pattern", detail: "The dementia's checking driven by memory failure and frontal rigidity — the surface resemblance to OCD without the ego-dystonic obsession underneath" },
        { label: "The management follows the cause", detail: "Family psychoeducation and environmental adaptation for the dementia's rituals — not the SSRI–ERP package of OCD proper" },
      ],
      clinicalManifestation: "The 76-year-old new checker whose MRI showed frontal atrophy — the 'OCD' that was the dementia presenting.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "lifelong-setting", time: "The decades before", title: "The thermostat's setting", description: "Most elderly people with neurotic disorders developed them before their fifties — vulnerability, temperament and early experience set decades earlier; the exceptions that arrive late being phobic disorder, panic and OCD.", phase: "onset" },
    { id: "destabilisation", time: "The event and the weeks after", title: "The destabiliser arrives", description: "Illness, bereavement, retirement or institutionalisation; loss events tilting toward depression, threatening events toward anxiety; the symptoms surging on a thinned support network.", phase: "peak" },
    { id: "somatic-detour", time: "The first years", title: "The detour through the body", description: "Palpitations to cardiology, dizziness to neurology, gut symptoms to gastroenterology — the negative tests accumulating while the disorder consolidates as 'cardiac neurosis'.", phase: "duration" },
    { id: "wrong-tablet-era", time: "The years on the prescription", title: "The wrong tablet", description: "The renewing benzodiazepine: immediate calm, then tolerance and dependence, and in the elderly the accumulation producing delirium, incontinence, falls — with withdrawal symptoms on any erratic discontinuation.", phase: "duration" },
    { id: "right-treatment", time: "Weeks 2–12 of the right things", title: "The restitution", description: "The antidepressant (SSRI, weeks-scale) plus adapted CBT and graded exposure — the accompany-then-wait ladder climbing back to the temple, the courtyard, the bus; reassurance working only inside the exposure plan.", phase: "recovery" },
    { id: "untreated-long-term", time: "The untreated long term", title: "What untreated anxiety becomes", description: "Post-stroke anxiety becoming chronic in a significant proportion and tracking poor functional recovery; anxiety-disorder mortality elevated in elderly patients; deconditioning, avoidance, and the sedative–alcohol mistreatment trap.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Neurotic disorders are relatively uncommon in clinical populations but carry significant community prevalence — they do not pass easily through the filters on the pathway to care, the chapter's central service fact. Survey criteria differ, but the general findings hold: female preponderance for most disorders; prevalence and incidence falling with age; most elderly people with neurotic disorders developed them before their fifties, the exceptions that arrive late being phobic disorder, panic and OCD; anxiety-disorder mortality elevated in elderly patients.",
    indianPrevalence: "Community old-age mental health surveys report persistent anxiety-symptom burden — often somatically expressed as 'gas', 'tension' and sleep complaints — and the pathway filter is even tighter than the Western one: anxiety in an Indian elder is normalised ('what do you expect at this age?'), somatised into medical clinics, or tranquillised with renewing benzodiazepine prescriptions rather than assessed — exactly the mistreatment pattern the chapter warns against.",
    ageOfOnset: "Mostly long-standing, established before the fifties; the late-onset minority — phobic disorder, panic and OCD — causes the diagnostic difficulty, with post-65 agoraphobia usually following alarming physical ill health and first-onset obsessions after 50 demanding the organic search.",
    genderRatio: "Female preponderance for most of these disorders.",
    indianNotes: "The 'tension' doorway: the presenting label hides the full disorder underneath — the screening skill is asking what the tension is about (health, money, safety, falling), when it started, and what happened just before.",
  },
  etiology: [
    { category: "biological", factor: "Premorbid vulnerability", details: "Genetic factors contribute significantly (the evidence from younger subjects; the old-age contribution unknown); temperament and early experience — the effects of parental loss and childhood physical/sexual abuse persisting into old age." },
    { category: "social", factor: "Old-age destabilisation and the social network", details: "Physical illness, bereavement, retirement, institutionalisation — the meaning of the event mattering (loss events tilting toward depression, threatening events toward anxiety); smaller social networks associating with anxiety disorders, though a hard life may equip one for old-age coping and the adversity–self-esteem effect is not straightforward." },
    { category: "biological", factor: "Physical illness as cause", details: "The post-MI 'cardiac neurosis'; post-stroke anxiety with some lesion-location relationship; arthritis, balance disorders and sensory impairment raising vulnerability and avoidance; dementia carrying higher anxiety rates unrelated to cognitive severity (vascular dementia possibly more vulnerable) — arising from insight-related distress or as a response to psychotic misinterpretations; caregivers of dementia patients carrying high anxiety–depression risk." },
    { category: "biological", factor: "Drugs and trauma", details: "Oral hypoglycaemics, corticosteroids, caffeine excess and sympathomimetic preparations as iatrogenic causes; PTSD in elderly survivors (war, holocaust) persistent, with late onset or recurrence precipitated decades after the original trauma — late-life trauma also producing PTSD that tends to persist." },
    { category: "psychological", factor: "Anxiety as cause in turn", details: "Physical illness as consequence: the decades of anxiety-driven smoking and drinking; and the mistreatment trap itself — sedative and alcohol abuse growing in the void left by the untreated disorder." },
  ],
  symptomClusters: [
    {
      category: "1. The psychological face",
      symptoms: ["Worry aimed at health, finances and crime — the elderly content shift", "Phobias resembling younger adults' with the geriatric additions — fear of falling prominent", "Anxiety and depression mingling in all of these disorders", "The reasonableness trap: clinically significant fears dismissed as 'reasonable for her age' when frailty and support — not age — determine perceived vulnerability"],
    },
    {
      category: "2. The somatic detour",
      symptoms: ["Panic presentations misdirected to cardiology, neurology and gastroenterology", "Misdiagnosis and inappropriate investigation MORE likely at this age, not less", "Each specialty finding nothing — or finding the true abnormality the anxiety has amplified"],
    },
    {
      category: "3. The behavioural face",
      symptoms: ["Phobic avoidance — the housebound drift", "Sedative and alcohol abuse — the mistreatment trap", "Abnormal illness behaviours: somatisation, hypochondriasis", "In the cognitively impaired, disturbed behaviour as the MAIN presenting feature of the anxiety"],
    },
    {
      category: "4. The obsessional face",
      symptoms: ["OCD features resembling younger patients'", "First onset after 50 rare — demanding investigation for dementia or a space-occupying lesion, or recognition as part of a primary affective disorder", "The lifelong-versus-late distinction made by informant history"],
    },
    {
      category: "5. The late-onset patterns",
      symptoms: ["Most disorders long-standing; the late-onset minority causing the diagnostic difficulty", "Post-65 agoraphobia usually arising after alarming physical ill health rather than panic", "Post-stroke anxiety disorders common, becoming chronic in a significant proportion, tracking poor functional recovery"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The classification frame",
      code: "general neurotic syndrome — OCD excepted",
      criteria: [
        "Extensive comorbidity and diagnostic instability over time — the disorders understood as aspects of one general neurotic syndrome rather than discrete categories, all persisting into old age.",
        "OCD assessed separately: distinct, stable, differently caused — the exception that keeps its own identity across the lifespan.",
        "The depressive component assessed in its own right whenever an anxiety disorder is diagnosed — comorbidity the rule, not the exception.",
        "The reasonableness of any fear judged against physical frailty and the availability of social support — never against age alone.",
      ],
      duration: "Most of these conditions are years-to-decades standing by the time old age arrives; the new-onset minority is precisely where the diagnostic effort concentrates.",
      indianNote: "The 'tension' doorway: ask what the tension is about (health, money, safety, falling), when it started, and what happened just before — the three questions that open the somatic label.",
    },
    {
      system: "The organic screen",
      code: "Drug history and physical examination — always",
      criteria: [
        "Physical disorders present as anxiety and anxiety presents as physical disorder — the assessment always includes a drug history and a physical examination.",
        "A physical cause suspected when there is no past psychiatric history and no life event to account for the onset.",
        "The drug list: oral hypoglycaemics, corticosteroids, caffeine excess, sympathomimetic preparations.",
        "Cardiovascular, respiratory and endocrine disorders presenting as anxiety or depression with little else.",
      ],
      duration: "At the first assessment, before any psychotropic is started — the screen that precedes the label.",
      indianNote: "The Indian elder's medicine bag — hypoglycaemics, steroid courses bought over the counter, sympathomimetic cold remedies, the endless chai — makes the drug history the fastest organic screen in the OPD.",
    },
    {
      system: "The late-onset interrogations",
      code: "after-50 obsessions; after-65 agoraphobia",
      criteria: [
        "First-onset obsessions after 50: dementia or a space-occupying lesion sought (imaging and cognitive workup) — or the obsessions recognised as part of a primary affective disorder.",
        "Agoraphobia first appearing after 65: the alarming physical illness sought (the MI, the stroke, the fall) — not the panic-driven pattern of younger adults.",
        "Post-stroke anxiety asked about at every stroke review — the chronicity risk and the functional-recovery drag.",
      ],
      duration: "The workup precedes the label in every late-onset presentation — the after-50 rule has no outpatient shortcut.",
      indianNote: "The imaging and cognitive workup is available in district hospitals — new rituals in an Indian elder are not 'old-age habit'; they are structural disease until examined.",
    },
  ],
  severityScales: [
    {
      name: "GAD-7",
      fullName: "Generalized Anxiety Disorder-7",
      measures: "The brief anxiety-severity screen where formal rating helps; the elderly worry content (health, finances, crime) answers the same questions.",
      ranges: [],
      indianNote: "Where literacy permits; the 'tension' doorway question — what is the tension about? — often outperforms the instrument in the Indian OPD.",
    },
    {
      name: "Y-BOCS",
      fullName: "Yale–Brown Obsessive Compulsive Scale",
      measures: "The standard OCD severity instrument — for the lifelong, ego-dystonic OCD that keeps its identity into old age, not for the dementia-driven checking the after-50 rule separates out.",
      ranges: [],
      indianNote: "Apply only after the after-50 interrogation has cleared the organic layer — scoring a dementia's compulsions as OCD severity is the instrument's commonest geriatric misuse.",
    },
    {
      name: "The mistreatment-to-management ladder",
      fullName: "Where the patient sits on the wrong-tablet-to-right-treatment course",
      measures: "The course's own staging: untreated in the community, on the wrong tablet, or on the right things.",
      ranges: [
        { min: 0, max: 0, severity: "Untreated, community-dwelling", action: "The filter-to-care majority: significant community prevalence, low clinical contact — the one-question screen at every primary-care and post-event contact" },
        { min: 1, max: 1, severity: "On the wrong tablet", action: "The renewing benzodiazepine: the conversion plan — SSRI started and established, the planned taper with replacement strategies, the falls-and-confusion audit running alongside" },
        { min: 2, max: 2, severity: "On the right things", action: "Antidepressant (adequate trial, stated duration) plus adapted CBT with graded exposure — goals agreed, review frequency set, adverse consequences anticipated (dependency, side effects, self-harm risk)" },
      ],
      indianNote: "Stage 1 is the commonest Indian presentation — the years-long renewing prescription; the conversion to stage 2 is the single highest-yield geriatric intervention many Indian OPDs can offer.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Depression (the comorbidity that drags)", distinguishingFeatures: "Depressive symptoms integral to many of these disorders; the two mingling in every clinic room — and comorbid anxiety predicting poorer antidepressant response with more relapse and recurrence.", keyDifferentiator: "The mood screen at every assessment, the depressive component treated in its own right — the prognostic drag named before the treatment plan is written." },
    { condition: "Dementia (the bidirectional street)", distinguishingFeatures: "Early dementia presenting with anxiety and obsessinality; anxiety and depression producing subjective cognitive impairment as the presenting symptom; dementia carrying higher anxiety rates independent of cognitive severity.", keyDifferentiator: "Screen for cognition whenever cognition and anxiety co-travel — and apply the after-50 rule to any new ritual or rumination before the OCD label." },
    { condition: "Delirium (the two-way street)", distinguishingFeatures: "Quiet in the elderly but affectively stormy responses to frightening hallucinations; conversely severe anxiety precipitating delirium in the vulnerable — and benzodiazepine accumulation causing it iatrogenically.", keyDifferentiator: "The fluctuation and the attention exam; the drug chart reviewed before the anxiety is blamed (the Delirium in the Elderly course's account)." },
    { condition: "Paranoid states and schizophrenia", distinguishingFeatures: "Fear in response to psychotic experience rarely confuses the picture; the exception being hypochondriacal ideas against monosymptomatic delusions.", keyDifferentiator: "The delusional quality and the systematisation — the Late-Life Psychosis course's territory when the fear's content stops being ego-dystonic." },
    { condition: "Physical illness presenting as anxiety", distinguishingFeatures: "Cardiovascular, respiratory and endocrine disorders presenting as anxiety or depression with little else; drug causes — oral hypoglycaemics, corticosteroids, caffeine excess, sympathomimetics.", keyDifferentiator: "The rule: no past psychiatric history and no life event to account for onset → suspect the physical layer; drug history and physical examination always." },
    { condition: "PTSD arriving decades late", distinguishingFeatures: "Persistent PTSD in elderly survivors (war, holocaust), with late onset or recurrence precipitated decades after the original trauma; late-life trauma producing PTSD that tends to persist.", keyDifferentiator: "The trauma history taken seriously however old — the reactivation of a 1947 partition memory presenting as 'agitation at night' is PTSD until asked about." },
  ],
  management: [
    { category: "psychotherapy", name: "The framework wherever care happens", description: "From the outset: thorough assessment and accurate diagnosis; the full treatment range (patient education, lifestyle advice, bibliotherapy, supportive counselling); clear agreed goals; an adequate trial; stated duration; review frequency; anticipated adverse consequences (dependency, side effects, self-harm risk).", whenToUse: "Every patient, every setting — primary care is where these disorders live and where the framework must run.", indianContext: "The framework fits the Indian OPD consultation: goals agreed with the family present, the duration written down, the review date fixed — the structures that survive a five-minute slot." },
    { category: "psychotherapy", name: "Adapted CBT and graded exposure", description: "Goals and techniques the same as for younger adults, with adaptations for sensory impairment, physical illness/disability and cognitive dysfunction; individual tailoring limits group CBT though task-centred group activities (anxiety management) work well; the clinician understanding the psychodynamics of elderly concerns and defences — and auditing their own preconceptions about elderly people's capacity for growth and change.", whenToUse: "The psychological half of the first-line pair — running alongside the antidepressant, not waiting for it.", indianContext: "Graded exposure deliverable by trained family members — the accompany-then-wait ladder for fear of falling and post-illness agoraphobia, the joint family as behavioural co-therapist." },
    { category: "pharmacotherapy", name: "Antidepressants first-line", description: "Now first choice in generalised anxiety and panic, especially with depressive symptoms — SSRIs and venlafaxine carry the evidence; SSRIs specifically effective in OCD. Geriatric dosing care throughout: start low, titrate slowly, watch hyponatraemia, bleeding and the fall risk, and give the trial its stated duration — the anxiolytic effect arriving on a weeks-scale, not hours-scale.", whenToUse: "First-line pharmacotherapy for the elderly anxiety disorders; the benzodiazepine is not the alternative, it is the mistake.", indianContext: "SSRIs are inexpensive generics — the barrier is never the pharmacy; converting a long-term benzodiazepine user to an SSRI plus planned taper is the single highest-yield geriatric intervention many Indian OPDs can offer." },
    { category: "pharmacotherapy", name: "Benzodiazepines, reluctantly", description: "The most used and most inappropriately used drugs in this population; elderly sensitivity with accumulation producing delirium, incontinence, falls; oxazepam (short half-life, no active metabolites) the least problematic; withdrawal symptoms occurring on erratic discontinuation; long-term use avoided where possible, reserved for the few unresponsive to everything else.", whenToUse: "Rarely, genuinely, briefly — short-acting agent, stated stop date, the taper planned at the same consultation the prescription is written.", indianContext: "The Indian prescription legacy renews alprazolam, clonazepam and diazepam for years; the chapter's warnings apply verbatim — falls, confusion, accumulation — and the planned taper with replacement strategies is the answer." },
    { category: "pharmacotherapy", name: "The limited alternatives", description: "Buspirone: well tolerated but around 2 weeks to effect — useless acutely, indicated for severe chronic generalised anxiety and dependence-risk patients. Beta-blockers: sympathetic symptom control limited by geriatric contraindications (COPD, sinus bradycardia, heart failure). Neuroleptics: limited role with the extrapyramidal burden — short low-dose courses (haloperidol, zuclopenthixol) only for benzodiazepine-intolerant patients; hydroxyzine as the sedative antihistamine alternative.", whenToUse: "Niche roles only — the alternatives are alternatives, not first moves; each carries its own geriatric caution.", indianContext: "Oxazepam and buspirone are available in India; the temptation in a busy OPD is the faster-acting wrong answer — the discipline is the chapter's ladder, not the queue's." },
    { category: "lifestyle", name: "Prevention in the aftercare window", description: "Primary prevention presently limited — but the physical-illness association opens the practical window: intervene early after strokes, heart attacks and falls to prevent chronic neurotic disability; whether better earlier-life treatment lowers late-life chronicity will show as cohorts age.", whenToUse: "At every post-event review — one question ('Since the attack, does your chest fear stop you from going out?') identifying the preventable disability.", indianContext: "Indian stroke and MI follow-ups rarely include an anxiety screen — the single question, asked at every review, is the prevention programme the note asks for." },
  ],
  safety: {
    redFlags: [
      "First-onset obsessions or rituals after 50 — dementia or a space-occupying lesion until excluded: imaging and cognitive workup before any OCD label",
      "The drowsy, confused or repeatedly falling elder on a long-term benzodiazepine — the accumulation cascade (delirium, incontinence, falls) read as 'age' while the prescription renews",
      "Anxiety with no past psychiatric history and no life event accounting for onset — suspect the physical layer: cardiovascular, respiratory, endocrine; the drug list (oral hypoglycaemics, corticosteroids, caffeine excess, sympathomimetics)",
      "Severe anxiety precipitating delirium in the vulnerable — and frightening hallucinations in delirium producing the affectively stormy responses",
      "Self-harm risk — an anticipated adverse consequence of the framework, not an afterthought; comorbid depression the amplifier asking for its own assessment",
      "New houseboundness after stroke, MI or fall — the post-event window in which chronic neurotic disability is still preventable, and closing",
    ],
    urgentGuidance:
      "The order of operations: (1) the after-50 rule first — new obsessions get the imaging and cognitive workup before any OCD label or SSRI–ERP package; (2) the no-history-no-life-event rule — drug history and physical examination always, the physical cause hunted and the offending drug stopped (corticosteroids, sympathomimetics, caffeine excess) before the psychotropic started; (3) the benzodiazepine accumulation recognised as an emergency-grade iatrogenic state — falls, delirium and incontinence treated AND the prescription converted (SSRI established, then the planned taper); (4) self-harm risk and the comorbid depression asked about explicitly at every review of an anxious elder; (5) the post-event screen — 'Since the attack, does your chest fear stop you from going out?' — delivered at every stroke, MI and fall follow-up, with graded exposure begun while the window is open.",
  },
  drugLinks: [
    {
      name: "Sertraline",
      slug: "sertraline",
      role: "The SSRI workhorse of the first-line tier",
      rationale: "Antidepressants are now first choice in generalised anxiety and panic in old age, especially with depressive symptoms — SSRIs and venlafaxine carry the evidence, and SSRIs are specifically effective in OCD. Sertraline is the geriatric workhorse of that class assignment: start low, titrate slowly, watch hyponatraemia and the fall risk, and give the trial its stated duration.",
      evidenceLevel: "textbook",
      clinicalDisclaimer: "Symptom-targeted first-line pharmacotherapy with geriatric dosing care — the adapted-CBT leg travels with it; a benzodiazepine is not the alternative, it is the mistake the course exists to unlearn.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      role: "The low-interaction SSRI alternative",
      rationale: "The second member of the SSRI pair for the polypharmacy elder — minimal interaction burden in a patient already on cardiac, diabetic and anticoagulant medication, the same first-line evidence base, the same weeks-scale patience. The class assignment is the chapter's (SSRIs first-line, with venlafaxine named alongside as the co-evidence); the geriatric care is the start-low discipline.",
      evidenceLevel: "textbook",
      clinicalDisclaimer: "First-line anxiolysis and antidepressant coverage in one — but an adequate trial means stated duration and scheduled review, the framework's discipline, never the renewing-prescription habit this course exists to end.",
    },
  ],
  contentGaps: [
    "Oxazepam — the benzodiazepine of least harm in the elderly (short half-life, no active metabolites) — has no KYP drug lesson; the reluctant, short-course benzodiazepine logic is taught here and cross-referenced to Benzodiazepine Misuse — The Borrowed Calm, where the tolerance, dependence and taper disciplines live.",
    "Buspirone (well tolerated, ~2 weeks to effect, for severe chronic generalised anxiety and dependence-risk patients) has no KYP drug lesson; the slow-start caveat is taught here, the route never invented.",
    "Hydroxyzine (the sedative antihistamine alternative) and the short low-dose neuroleptic courses (haloperidol, zuclopenthixol) for benzodiazepine-intolerant patients have no KYP lessons; their limited roles are taught here.",
    "Adapted CBT — the co-first-line psychological treatment tailored for sensory impairment, physical illness/disability and cognitive dysfunction — has no KYP psychotherapy lesson; the adaptation principles and the family-delivered accompany-then-wait ladder are taught here.",
    "Beta-blockers for sympathetic symptom control (limited by COPD, sinus bradycardia and heart failure) have no KYP lesson; the contraindication-led caution is taught here as part of the pharmacological ladder.",
  ],
  patientGuide: {
    whatIsIt:
      "Anxiety and stress-related disorders in old age are common, distressing, costly — and treatable. Mostly they are the continuation into late life of a lifelong tendency (most elders with these conditions developed them before their fifties), now aimed at the new realities: health, money, safety, falling. The worry becomes an illness when it is severe and persistent, when it stops the person doing things, and when the suffering is real — judged against how frail the person is and how much support they have, never against their age. OCD stands apart from the rest: a separate, stable condition of its own — and obsessions appearing for the FIRST time after 50 are usually not OCD at all, but the surface of another brain condition needing a scan and memory tests.",
    whatCausesIt:
      "A lifelong vulnerability meeting old age's shocks: illness, bereavement, retirement, moving into care. Losses tilt the mood toward depression; frightening events tilt it toward anxiety — and the two usually travel together. Physical illness itself can cause the anxiety (after a heart attack or a stroke, with arthritis or balance trouble, with failing sight or hearing), and so can medicines — sugar tablets (oral hypoglycaemics), steroid courses, too much caffeine, and some cold remedies. Anxiety also travels with memory problems in both directions.",
    symptoms:
      "Worry about health, money and crime; a fear of falling that stops walks and stairs; the heart racing and the stomach churning — sending the patient to cardiology and gastroenterology, whose tests come back normal while the fear grows; the slow drift into staying home; sleeping tablets and alcohol filling the gap; in the memory-impaired, restless or disturbed behaviour that IS the anxiety showing; and checking or ruminating that appears for the first time after 50 — which needs the scan before any OCD label.",
    treatment:
      "The right things: an antidepressant — SSRIs are first-line for generalised anxiety, panic and OCD, working on a weeks-scale (not hours) and treating the depression that usually travels along — plus talking treatment adapted for hearing, vision, mobility and memory: CBT with graded exposure, often with the family helping on the accompany-then-wait ladder. The wrong thing: the reflex sleeping tablet (a benzodiazepine) — it calms today and then causes falls, confusion, incontinence and dependence; if one is genuinely needed it should be short-acting, brief and with a planned stop, oxazepam being the least problematic. And the prevention truth: after a stroke, heart attack or fall, ask early whether fear is stopping recovery — that is the window.",
    selfHelp: [
      "Name the tension's content: what is the worry actually about — health, money, safety, falling? The naming begins the treatment.",
      "The accompany-then-wait ladder: a family member walks to the gate, then waits there; next week the corner, then the temple — the graded exposure the joint family can deliver.",
      "Keep walking: deconditioning makes every symptom more likely — the avoided staircase makes the next flutter worse.",
      "The caffeine and chai audit, the alcohol honesty, the medicine-bag review — the three quickest self-deliverable organic screens.",
      "Give the antidepressant its weeks: the anxiolytic effect arrives on a weeks-scale — stopping at day ten is stopping one week early.",
      "The sleeping-tablet conversation: a planned taper with replacement strategies works; erratic stopping produces withdrawal and worse nights.",
      "Ask the one question at every follow-up after illness: 'Since the attack, does your chest fear stop you from going out?'",
    ],
    whenToSeekHelp: [
      "Checking, ruminating or hoarding appearing for the first time after 50 — the scan and the memory tests come before the OCD label",
      "Confusion, falls or wetting episodes on long-term sleeping tablets — the prescription itself has become the emergency",
      "Chest symptoms with every cardiac test normal but the fear growing and the house shrinking — the anxiety disorder needs its own treatment, not a fourth ECG",
      "Houseboundness after a stroke, heart attack or fall — the window for preventing chronic disability is open now, not later",
      "Thoughts of self-harm, or the depression sitting beneath the worry — asked about directly, the same day",
      "Restless, disturbed behaviour in a memory-impaired elder — often anxiety presenting through the only channel left",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free) — the counselling tier for the elder's anxiety and the family's burden alike",
      "The district hospital psychiatry tier and the DMHP — where the SSRI prescription and the taper plan belong",
      "Generic SSRIs through Jan Aushadhi and primary-health channels — inexpensive; the barrier is never the pharmacy, it is the diagnosis",
      "The family exposure-ladder card — ask the treating team for the written accompany-then-wait version at the next visit",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific old-age anxiety pathway exists; practice follows the same first-line evidence this course teaches — the antidepressant plus adapted CBT — delivered through the district psychiatry tier, DMHP structures and tele-MANAS counselling, with the after-50 rule and the post-event screen as the two habits that travel into any Indian clinic.",
    systemContext: "The 'tension' doorway: Indian elders present with tension, body heat, gas, sleeplessness and head pressure — beneath the somatic labels sit the full anxiety disorders, and the screening skill is asking what the tension is about (health, money, safety, falling), when it started, and what happened just before. The pathway filter is even tighter than the Western one: anxiety in an Indian elder is normalised ('what do you expect at this age?'), somatised into medical clinics, or tranquillised with renewing benzodiazepine prescriptions rather than assessed.",
    programmeContext: "Tele-MANAS counselling carries what CBT capacity exists; bibliotherapy and patient-education materials cost nothing; the district hospital and DMHP psychiatric tier carry the diagnosis, the SSRI and the taper; and the post-event moment — stroke and MI follow-ups that rarely include an anxiety screen — is where the one-question prevention programme lives.",
    costConsiderations: "SSRIs are inexpensive generics in India; CBT capacity is thin (tele-MANAS counselling; the bibliotherapy/education materials cost nothing); oxazepam and buspirone are available — and the deconditioning-and-falls costs of untreated anxiety dwarf the treatment costs. The expensive item is not the tablet; it is the decade of the wrong tablet.",
    culturalConsiderations: "The somatic doorway is cultural, not pathological: the elder who reports 'gas' and 'tension' is describing anxiety in the idiom the household and the OPD both understand. The joint family is the delivery channel — the accompany-then-wait exposure ladder run by trained relatives, the informant history that separates the lifelong from the late, the medicine-bag review the daughter-in-law can hold. The benzodiazepine legacy is the cultural hazard: prescriptions renewing for years on the strength of one old insomnia complaint, the chapter's warnings (falls, confusion, accumulation) applying verbatim.",
    patientCounselling: [
      "The first-day script: 'This tablet is an antidepressant, not a sleeping tablet — it is the correct medicine for anxiety in old age, it works over weeks not hours, and it treats the low mood that travels with the worry.'",
      "The sleeping-tablet script: 'The tablet you have taken for years can be stopped — not suddenly, but with a plan: the new medicine established first, then the slow taper, with the family knowing what to expect.'",
      "The reasonableness script: 'Her fear of falling is not silly for her age — it is serious for her frailty. The question is not how old she is but how steady she is and who is with her.'",
      "The post-stroke script: 'Since the attack, does your chest fear stop you from going out? — the one question the follow-up should always carry; the fear is treatable and treating it is part of the rehabilitation.'",
      "The new-checking script: 'Checking that starts after fifty is not an old-age habit — it needs the scan and the memory tests first, because the cause decides the treatment.'",
      "The talking-therapy script: 'Old people benefit from talking treatment as much as the young — the therapy is adjusted for hearing, sight and memory, and the family can help deliver it.'",
    ],
  },
  decisionPath: {
    title: "The anxious elder in the OPD",
    nodes: [
      {
        id: "start",
        question: "An elder with tension, worry, panic or new rituals. First: the onset and the frame.",
        branches: [
          { label: "Lifelong pattern, worse now", next: "neurotic-gate" },
          { label: "Began after an illness, loss or move", next: "event-gate" },
          { label: "First-time rituals or ruminations after 50", next: "after-50-gate" },
          { label: "Body first — the specialty detour", next: "somatic-gate" },
        ],
      },
      {
        id: "neurotic-gate",
        question: "The general neurotic syndrome: comorbidity the rule, OCD the exception.",
        branches: [
          { label: "Depressive symptoms present", next: "comorbid-path" },
          { label: "On a renewing benzodiazepine", next: "benzo-path" },
          { label: "Neither — no antidepressant trial yet", next: "first-line-path" },
        ],
      },
      {
        id: "comorbid-path",
        question: "The anxiety-depression mixture.",
        recommendation: "The SSRI tier first (start low, go slow; adequate trial with a stated duration) — comorbid anxiety predicting poorer antidepressant response and more relapse, so the depressive component assessed and treated in its own right; adapted CBT travelling with the prescription.",
      },
      {
        id: "benzo-path",
        question: "The wrong tablet, renewed for years.",
        recommendation: "The conversion: SSRI started and established, then the planned taper with replacement strategies — the single highest-yield geriatric intervention many Indian OPDs can offer; the falls-and-confusion audit running alongside, and the withdrawal risk respected on the way down.",
      },
      {
        id: "first-line-path",
        question: "The benzo-naive anxious elder.",
        recommendation: "Antidepressant plus adapted CBT (sensory, physical and cognitive tailoring) with graded exposure; a benzodiazepine only if truly unavoidable — the oxazepam logic (short half-life, no active metabolites), a short course, a stated stop date, the taper planned at the same consultation.",
      },
      {
        id: "event-gate",
        question: "The destabiliser named: illness, bereavement, retirement, institutionalisation.",
        branches: [
          { label: "Post-stroke, post-MI or post-fall", next: "post-event-path" },
          { label: "Bereavement, retirement or the move into care", next: "loss-path" },
        ],
      },
      {
        id: "post-event-path",
        question: "The prevention window.",
        recommendation: "The one-question screen ('Since the attack, does your chest fear stop you from going out?'); graded exposure with the family as co-therapist (the accompany-then-wait ladder); the SSRI for the generalised component; the cardiology/physio review scheduled so the reassurance is authoritative rather than casual — post-stroke anxiety otherwise becomes chronic and drags functional recovery with it.",
      },
      {
        id: "loss-path",
        question: "The meaning of the event.",
        recommendation: "The colour sorted — loss tilting toward depression, threat toward anxiety, both treated on their merits; supportive counselling and bibliotherapy; the social network mapped (smaller networks associating with anxiety disorders); depression screened explicitly, the SSRI started if the picture warrants, and the same adapted-CBT offer extended.",
      },
      {
        id: "after-50-gate",
        question: "First-onset obsessions after 50: the organic interrogation before any OCD label.",
        branches: [
          { label: "Cognitive impairment on testing", next: "dementia-path" },
          { label: "Cognition intact", next: "intact-path" },
        ],
      },
      {
        id: "dementia-path",
        question: "The workup has spoken: dementia or a space-occupying lesion.",
        recommendation: "Imaging and cognitive testing confirmed the organic cause; family psychoeducation reframing the rituals as compensation (memory failure and frontal rigidity, not ego-dystonic obsession); environmental adaptations — the single lock, the written checklist, the safe stove; behavioural management of the dementia's rituals, NOT the SSRI–ERP package of OCD proper.",
      },
      {
        id: "intact-path",
        question: "Cognition intact: the affective route or the true late-onset exception.",
        recommendation: "The two intact-cognition answers: obsessions as part of a primary affective disorder (the antidepressant treating both layers, reviewed at the adequate-trial interval) or genuine late-onset OCD — the rare exception confirmed by informant history; SSRI first-line (specifically effective in OCD) with ERP adapted for the elderly sensorium and memory.",
      },
      {
        id: "somatic-gate",
        question: "The body led: palpitations, dizziness, gut — and the specialties found nothing.",
        recommendation: "Drug history and physical examination always; the no-history-no-life-event rule applied — cardiovascular, respiratory and endocrine layers sought, the drug list reviewed (oral hypoglycaemics, corticosteroids, caffeine excess, sympathomimetics), the offending agent stopped; the physical layer treated or cleared before the anxiety label is written — then the same first-line tier, with the psychoeducation that the palpitations are adrenaline, not the stent failing.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Prescribing the benzodiazepine as the first move (and renewing it at every visit)",
      why: "The wrong tablet: immediate calm purchasing accumulation — delirium, incontinence, falls in the elderly — plus tolerance, dependence and withdrawal symptoms on any erratic discontinuation; the commonest and most inappropriate use in this population.",
      correction: "The antidepressant first (SSRI, start low, stated duration) with adapted CBT; a benzodiazepine only when genuinely unavoidable — oxazepam, short-acting, brief, with the taper planned at the first consultation.",
    },
    {
      mistake: "Dismissing the fear as 'reasonable for her age'",
      why: "Age is not the calibration — physical frailty and the availability of social support determine perceived vulnerability; the dismissal leaves a treatable disorder to consolidate into the housebound drift.",
      correction: "Judge every fear against frailty and support; treat the fear of falling with the graded-exposure ladder and the gait-and-environment audit, not with reassurance alone.",
    },
    {
      mistake: "Labelling new after-50 rituals as late-onset OCD",
      why: "First onset of obsessions after 50 is rare — the surface usually belongs to a dementia, a space-occupying lesion or an affective disorder; the label sends the family down the wrong treatment road entirely.",
      correction: "The after-50 rule: imaging and cognitive testing before the label; the informant history separating the lifelong from the late; the management following the cause found.",
    },
    {
      mistake: "Reading post-MI or post-stroke houseboundness as physical weakness alone",
      why: "Post-65 agoraphobia usually follows the alarming illness; post-stroke anxiety becomes chronic in a significant proportion and tracks poor functional recovery — the 'weakness' reading misses the treatable fear driving the deconditioning.",
      correction: "The anxiety question at every aftercare review; graded exposure begun as part of the rehabilitation; the SSRI where the generalised component warrants — the prevention window held open.",
    },
    {
      mistake: "Missing the physical mimic (or the drug cause)",
      why: "Cardiovascular, respiratory and endocrine disorders present as anxiety in old age with little else; oral hypoglycaemics, corticosteroids, caffeine excess and sympathomimetics do the same — and the anxiety label then hides a treatable medical cause.",
      correction: "Drug history and physical examination always; a physical cause suspected when there is no past psychiatric history and no life event to account for onset; the offending drug stopped before the psychotropic started.",
    },
    {
      mistake: "Stopping the antidepressant at two weeks, or reaching for the fast-acting tier instead",
      why: "The SSRI's anxiolytic effect arrives on a weeks-scale; the abandoned trial and the benzodiazepine shortcut both end at the same address — the wrong tablet or no tablet, with the disorder intact.",
      correction: "The framework's discipline: an adequate trial with a stated duration, scheduled review, anticipated adverse consequences — and buspirone's ~2-week start remembered as the reason nothing faster is on offer.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The classification stance: the elderly stress-related and anxiety disorders as aspects of a general neurotic syndrome (extensive comorbidity, diagnostic instability over time) — OCD the exception: distinct, stable, different aetiology.",
        "The reasonableness rule: physical frailty and the availability of social support — not age — determine perceived vulnerability; 'reasonable for her age' is not a clinical judgement.",
        "The after-50 obsessional rule: new-onset obsessions demand the search for dementia or a space-occupying lesion, or recognition as part of a primary affective disorder — the workup before the label.",
        "The benzodiazepine caution: elderly sensitivity with accumulation producing delirium, incontinence, falls; oxazepam (short half-life, no active metabolites) least problematic; withdrawal symptoms on erratic discontinuation; long-term use avoided.",
        "The pharmacological ladder: antidepressants first choice in generalised anxiety and panic (SSRIs and venlafaxine carry the evidence; SSRIs specifically effective in OCD); buspirone around 2 weeks to effect; beta-blockers contraindication-limited; neuroleptics a minimal role.",
      ],
      practical: [
        "Take the 'tension' history: what is the tension about (health, money, safety, falling), when did it start, what happened just before — the three questions that open the somatic label.",
        "Demonstrate the frailty-and-support assessment that replaces the age judgement on an anxious elder — and the informant history that separates the lifelong from the late.",
        "Present the physical screen: the drug history (hypoglycaemics, corticosteroids, caffeine, sympathomimetics) and the focused examination that precede any anxiety label.",
      ],
      longAnswer: [
        "Anxiety and stress-related disorders in the elderly: presentation, differential diagnosis and management — the evergreen essay (the changed content, the differential web, the treatment ladder with the benzodiazepine caution and the prevention window).",
        "Obsessional states of late onset: the after-50 organic rule, its two alternatives, and the management that follows the cause found.",
      ],
    },
    neetPg: {
      highYield: [
        "THE CLASSIFICATION STANCE: general neurotic syndrome (Tyrer) — comorbidity + diagnostic instability; OCD DISTINCT AND STABLE, different aetiology.",
        "THE EPIDEMIOLOGY: community rates significant, clinical rates low — the pathway-to-care filter; prevalence falls with age; female preponderance; the late-onset exceptions phobic disorder, panic and OCD; mortality elevated.",
        "THE GERIATRIC CONTENT SHIFT: health/finances/crime worries; fear of falling the signature phobia; panic misrouted to cardiology, neurology, gastroenterology.",
        "POST-65 AGORAPHOBIA: follows alarming physical illness, not panic — hence the prevention window in stroke, MI and falls aftercare.",
        "THE AFTER-50 RULE: new obsessions → dementia or space-occupying lesion (or the affective route); imaging and cognitive workup first.",
        "POST-STROKE ANXIETY: common, chronic in a significant proportion, tracking poor functional recovery.",
        "THE COMORBIDITY DRAG: depression + anxiety → poorer antidepressant response, more relapse and recurrence.",
        "THE WRONG TABLET: the benzodiazepine reflex against the right things (antidepressant + adapted CBT); oxazepam = short half-life + no active metabolites, the least problematic agent.",
        "THE PHYSICAL MIMIC RULE: no past psychiatric history + no life event → suspect physical; the drug list (oral hypoglycaemics, corticosteroids, caffeine excess, sympathomimetics).",
        "THE ALTERNATIVES' CAVEATS: buspirone ~2 weeks to effect (useless acutely); beta-blockers limited by COPD, sinus bradycardia, heart failure; neuroleptics (haloperidol, zuclopenthixol) short low-dose, benzodiazepine-intolerant only; hydroxyzine the sedative antihistamine alternative.",
      ],
      pyqConcepts: [
        "The oxazepam pharmacology stem — the benzodiazepine with no active metabolites and a short half-life.",
        "The late-onset exceptions stem — which anxiety disorders can present de novo in the elderly (phobic, panic, OCD).",
        "The new-rituals-after-50 stem — the imaging-first answer.",
        "The post-65 housebound stem — the physical-illness trigger behind the agoraphobia.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 70-year-old retired teacher, four months after an anterior MI, has stopped walking to the temple, will not climb the stairs to her flat, and checks her pulse hourly; cardiology reviews are repeatedly normal, the daughter reports she 'has become housebound', and there is no prior psychiatric history — the onset clearly dated to the infarct: post-event agoraphobia and health anxiety ('cardiac neurosis'), the classic post-65 pattern, illness-triggered rather than panic-driven — managed with psychoeducation (the palpitations are adrenaline, not the stent failing), graded re-exposure from doorstep to courtyard to temple with the daughter as company then waiting, an SSRI for the generalised component, and the cardiology review scheduled so the reassurance is authoritative — at three months, temple visits resumed and the pulse-checking abandoned: the prevention window caught, the deconditioning reversed, the reassurance working because it sat inside an exposure plan.",
        "A 76-year-old man develops checking rituals (locks, gas stove, wallet) and newspaper hoarding over five months, with family-reported memory complaints and no lifelong obsessional history — cognitive testing shows impairments and the MRI shows frontal atrophy consistent with a frontotemporal process: the 'OCD' is the dementia presenting, the checking driven by memory failure and frontal rigidity rather than ego-dystonic obsession — the after-50 organic rule in action, the management being family psychoeducation reframing the rituals as compensation, environmental adaptations (single lock, written checklist, safe stove), and no SSRI–ERP package as such: the workup before the label, the informant history as the hinge, and the treatment following the cause found.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Oxazepam: short half-life, no active metabolites — the least problematic benzodiazepine in the elderly.",
        "New-onset obsessions after 50: organic until excluded (dementia, space-occupying lesion) — or part of an affective disorder.",
        "Post-65 agoraphobia: triggered by alarming physical illness, not panic.",
        "SSRIs: first-line for late-life generalised anxiety and panic — and specifically effective in OCD.",
        "Fear of falling: the signature geriatric phobia — reasonableness judged by frailty and support, not age.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The conversion of a long-term benzodiazepine user to an SSRI plus a planned taper is the single highest-yield geriatric intervention many Indian OPDs can offer — the renewing-prescription audit as standing practice, not a campaign.",
        "The clinician's own preconceptions are part of the instrument: the chapter's instruction to audit what you believe about elderly people's capacity for growth and change before running adapted CBT — the therapist effect measured in the mirror.",
        "The family as behavioural co-therapist: the accompany-then-wait exposure ladder delivered by trained relatives — the joint family's clinical dividend, formalising what the household already does well.",
        "The one-question post-event screen — 'Since the attack, does your chest fear stop you from going out?' — at every stroke, MI and fall follow-up: the prevention programme one sentence long.",
        "The informant history separates the lifelong from the late — in the after-50 interrogation it is the hinge the imaging then confirms; question the family separately and specifically, always.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The heart that fell",
      presentation: "Four months after her heart attack, the retired teacher who taught three generations to climb stairs checks her pulse every hour and will not climb her own — cardiology has nothing more to offer, and nobody has yet named what she has.",
      initialPresentation: "A 70-year-old retired teacher was brought by her daughter to the psychiatry OPD four months after an anterior myocardial infarction. Since the attack she had stopped walking to the temple, refused to climb the stairs to her flat, and was checking her pulse hourly. Cardiology reviews were repeatedly normal; the daughter's summary was that her mother 'has become housebound'. There was no psychiatric history of any kind, and the onset was clearly dated to the MI.",
      history: "Anterior MI four months earlier, stented, on standard cardiac medication; no psychiatric history before the event; the daughter confirming the temple visits stopped within weeks of the attack; sleep disturbed since; no alcohol; a benzodiazepine offered by the family physician for sleep, taken occasionally — the wrong tablet waiting to become a habit.",
      examination: "Alert and oriented; pulse regular during the examination itself — checked thrice during it; no cardiac findings beyond the treated infarct; no cognitive impairment on brief testing; the anxiety surfacing as the stairs and the temple were discussed, with the pulse checked immediately afterwards.",
      diagnosis: "Post-event agoraphobia and health anxiety ('cardiac neurosis') — the classic post-65 pattern: illness-triggered rather than panic-driven.",
      management: "Psychoeducation linking the anxiety symptoms to autonomic arousal — the palpitations are adrenaline, not the stent failing; graded re-exposure from doorstep to courtyard to temple, the daughter as company and then waiting at the gate; an SSRI for the generalised anxiety component; cardiology review scheduled so the reassurance was authoritative rather than casual.",
      outcome: "At three months: temple visits resumed and the pulse-checking abandoned; sleep restored and the stairs back in daily use — the occasional sleeping tablet never becoming the renewing prescription.",
      teachingPoints: [
        "Post-65 agoraphobia follows illness, not panic — the geriatric pattern behind the prevention window in stroke, MI and falls aftercare.",
        "Deconditioning perpetuates the symptoms: each avoided staircase makes the next flutter more likely.",
        "Reassurance works only inside a graded exposure plan — outside one it merely renews the checking.",
      ],
    },
    {
      title: "The new checker",
      presentation: "A 76-year-old man who never checked anything in his life now checks the locks, the gas and his wallet through the day — and the newspapers no longer leave the house.",
      initialPresentation: "A 76-year-old man was brought by his son after five months of progressive checking rituals — the door locks, the gas stove, his wallet — and the accumulating newspapers he would not let anyone discard. The family had also noticed memory complaints. There was no lifelong obsessional history: the son, questioned separately, was categorical that his father had never been a checker, a doubter or a ritualist.",
      history: "Five months of checking and hoarding; memory complaints reported by the family; no lifelong obsessional traits; no recent medication changes, no corticosteroids, no sympathomimetics; no psychiatric history — the presentation entirely new for a man of fixed lifelong habits.",
      examination: "Cognitive testing showed impairments; the MRI showed frontal atrophy consistent with a frontotemporal process — the workup the after-50 rule demands, done before any label.",
      diagnosis: "The dementia presenting as 'OCD' — first-onset obsessional symptoms after 50 with the organic cause confirmed: the checking driven by memory failure and frontal rigidity, not ego-dystonic obsession.",
      management: "Family psychoeducation reframing the rituals as compensation; environmental adaptations — a single lock, a written checklist, a safe stove; behavioural management of the dementia's rituals, with no SSRI–ERP package as such.",
      outcome: "The rituals settled into the managed routine of the household rather than resolving — the family, understanding the memory failure underneath, stopped arguing with the checking and started accommodating it.",
      teachingPoints: [
        "The after-50 organic rule in action: new-onset obsessions earn the imaging and cognitive workup before any OCD label.",
        "Behavioural management of the dementia's rituals, not treatment of OCD proper — the distinction changes everything about the family conversation.",
        "Informant history separates the lifelong from the late — the son's categorical 'he was never a checker' is the diagnostic hinge.",
      ],
    },
  ],
  clinicalPearls: [
    "The wrong tablet: a renewing benzodiazepine instead of the right things — an antidepressant and adapted CBT; the chapter's one-line complaint and the course's whole reason.",
    "The general neurotic syndrome: extensive comorbidity, diagnostic instability over time — with OCD the exception, distinct, stable and differently caused.",
    "Reasonableness is judged by physical frailty and the availability of social support — never by age.",
    "The fear of falling is the signature geriatric phobia — and a treatable one, with the graded-exposure ladder and the gait-and-environment audit.",
    "Post-65 agoraphobia follows alarming physical illness, not panic — the pattern that makes stroke, MI and falls aftercare the prevention programme.",
    "The after-50 rule: new obsessions mean dementia or a space-occupying lesion until excluded — or the affective route; the workup before the label.",
    "Post-stroke anxiety is common, becomes chronic in a significant proportion, and tracks poor functional recovery — treating the fear is part of the rehabilitation.",
    "Comorbid depression drags the prognosis: poorer antidepressant response, more relapse and recurrence — assess it explicitly.",
    "Oxazepam: short half-life, no active metabolites — the least problematic benzodiazepine when one is genuinely needed; long-term use avoided regardless of agent.",
    "Buspirone takes around 2 weeks — useless acutely; beta-blockers are limited by COPD, sinus bradycardia and heart failure; neuroleptics stay a minimal, short low-dose role.",
    "Community prevalence significant, clinical rates low — the pathway-to-care filter is the service fact these disorders carry.",
    "No past psychiatric history and no life event to account for onset → suspect the physical layer; drug history and physical examination, always.",
    "Mortality is elevated in elderly patients with anxiety disorders — 'only anxiety' is not a benign sentence in old age.",
  ],
  highYieldSummary: [
    "Definition and classification: the stress-related, anxiety and obsessional disorders of old age — common, distressing, costly, treatable — organised not as discrete categories but as aspects of a general neurotic syndrome (extensive comorbidity, diagnostic instability over time, all persisting into old age), with OCD the single exception: a distinct, stable condition with a different aetiology.",
    "Epidemiology: relatively uncommon in clinical populations with significant community prevalence — the pathway-to-care filter; female preponderance; prevalence and incidence falling with age; most elders developed their disorders before the fifties, the late exceptions being phobic disorder, panic and OCD; anxiety-disorder mortality elevated in elderly patients; the Indian filter tighter still (normalisation, somatisation, tranquillisation).",
    "Mechanism: the vulnerability–destabilisation–restitution model — premorbid vulnerability (genetic contribution, temperament, early experience) meeting old age's destabilisers (illness, bereavement, retirement, institutionalisation; loss tilting toward depression, threat toward anxiety) on a thinned social network, with restitution or elaboration decided by what patient and doctor do next; the somatic detour consolidating 'cardiac neurosis' behind the negative tests; OCD's own cortico-striato-thalamo-cortical engine standing apart.",
    "Clinical faces: worry aimed at health, finances and crime; fear of falling the signature phobia; panic misrouted to cardiology, neurology and gastroenterology with misdiagnosis MORE likely at this age; the reasonableness judgement calibrated to frailty and support, not age; phobic avoidance, sedative and alcohol misuse, somatisation and hypochondriasis; disturbed behaviour as the main presenting feature in the cognitively impaired; first-onset obsessions after 50 rare and organic until excluded.",
    "Differential web: depression (the comorbidity drag — poorer antidepressant response, more relapse), dementia (bidirectional with anxiety; subjective cognitive impairment as the presenting symptom), delirium (quiet, but anxiety-precipitated and anxiety-mimicking; the benzodiazepine accumulation cause), paranoid states (rarely confusing except hypochondriacal ideas vs monosymptomatic delusions), and the physical mimics with the drug list (oral hypoglycaemics, corticosteroids, caffeine excess, sympathomimetics) — the no-history-no-life-event rule guarding them all.",
    "Management: the framework (assessment, full treatment range, agreed goals, adequate trial, stated duration, review frequency, anticipated adverse consequences); antidepressants first-line in generalised anxiety and panic (SSRIs and venlafaxine carry the evidence; SSRIs specifically effective in OCD; start low, go slow); benzodiazepines reluctantly and briefly when truly needed (oxazepam — short half-life, no active metabolites; the accumulation producing delirium, incontinence, falls); buspirone slow, beta-blockers contraindication-limited, neuroleptics minimal, hydroxyzine the antihistamine alternative; CBT adapted for sensory impairment, physical illness and cognitive dysfunction; prevention folded into the stroke, MI and falls aftercare window.",
    "The Indian tier: the 'tension' doorway (gas, body heat, sleeplessness, head pressure — ask what the tension is about); the normalisation filter ('what do you expect at this age?'); the benzodiazepine street — renewing alprazolam, clonazepam and diazepam for years, with the SSRI-plus-taper conversion as the single highest-yield geriatric intervention many Indian OPDs can offer; family-delivered exposure (the accompany-then-wait ladder, the joint family as behavioural co-therapist); the one-question post-event screen at every stroke and MI follow-up; the after-50 rule at district-hospital imaging capacity; SSRIs as inexpensive generics — the barrier never the pharmacy, always the diagnosis.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "eao-quiz-1",
      question: "The model that best describes the relationship among the elderly stress-related and anxiety disorders (OCD excepted):",
      options: ["Discrete, mutually exclusive categories", "Aspects of a general neurotic syndrome — extensive comorbidity, diagnostic instability over time", "Subtypes of schizophrenia", "Entirely physical diseases"],
      correctIndex: 1,
      explanation: "The chapter's classification stance: with OCD standing apart as distinct, stable and differently caused.",
      afterSectionId: "diagnosis",
    },
    {
      id: "eao-quiz-2",
      question: "Agoraphobia first appearing after the age of 65 is most commonly:",
      options: ["Panic-driven, as in younger adults", "A consequence of an alarming experience of physical ill health", "A schizophrenia prodrome", "Malingering"],
      correctIndex: 1,
      explanation: "The geriatric pattern: illness-triggered avoidance — hence the prevention window in stroke, MI and falls aftercare.",
      afterSectionId: "symptoms",
    },
    {
      id: "eao-quiz-3",
      question: "Obsessional symptoms appearing for the first time after age 50 warrant:",
      options: ["Reassurance that this is normal ageing", "Investigation for dementia or a space-occupying lesion (or recognition as part of an affective disorder)", "Immediate SSRI–ERP", "A benzodiazepine for the distress"],
      correctIndex: 1,
      explanation: "First-onset obsessions in old age are rare and organic until excluded — the after-50 rule.",
      afterSectionId: "symptoms",
    },
    {
      id: "eao-quiz-4",
      question: "Which benzodiazepine is least problematic in the elderly, and why?",
      options: ["Diazepam — the longest acting, so the smoothest", "Nitrazepam — the best for sleep", "Oxazepam — short half-life, no active metabolites", "Chlordiazepoxide — the safest liver profile"],
      correctIndex: 2,
      explanation: "Oxazepam's profile minimises accumulation and its delirium–incontinence–falls consequences; long-term use remains to be avoided regardless of agent.",
      afterSectionId: "management",
    },
    {
      id: "eao-quiz-5",
      question: "Depression comorbid with anxiety in the elderly predicts:",
      options: ["Better antidepressant response", "Poorer antidepressant response, with greater relapse and recurrence", "No difference", "Spontaneous cure"],
      correctIndex: 1,
      explanation: "The prognostic drag of comorbidity — one reason to assess the depressive component explicitly before planning treatment.",
      afterSectionId: "differential",
    },
    {
      id: "eao-quiz-6",
      question: "The prevention opportunity the chapter highlights for elderly neurotic disability:",
      options: ["Annual psychotherapy for all elders", "Early intervention after strokes, heart attacks and falls", "Nightly benzodiazepine cover for the frail", "Avoiding all medical care"],
      correctIndex: 1,
      explanation: "The physical-illness association makes event follow-up the practical prevention point — one question at every post-event review.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Why are these disorders better seen as a general neurotic syndrome — and what is the exception?", answer: "Because the elderly stress-related and anxiety disorders show EXTENSIVE COMORBIDITY (the anxiety, depressive and phobic pictures blending in the same patient), DIAGNOSTIC INSTABILITY OVER TIME (the label migrating as symptoms surface and submerge), and PERSISTENCE — all of them running on into old age rather than remitting with age. Treating them as discrete categories fragments a picture that clinically arrives whole. THE EXCEPTION IS OCD: a distinct, stable condition with a different aetiology — its own cortico-striato-thalamo-cortical engine, its own lifelong trajectory, its own specific pharmacology (SSRIs specifically effective). The practical consequence of the exception: OCD keeps its identity into old age, and its first appearance AFTER 50 is not OCD arriving late — it is brain disease until the workup says otherwise.", topic: "Classification" },
    { question: "What determines whether an elderly person's fear is 'reasonable'?", answer: "PHYSICAL FRAILTY AND THE AVAILABILITY OF SOCIAL SUPPORT — never age alone. Perceived vulnerability is calibrated by how steady the body is and who stands behind it; two 80-year-olds with the same fear of falling may sit at opposite ends of clinical significance if one needs a frame and lives alone and the other walks with a stick and a household. The clinical failure the rule corrects: the dismissal 'that is reasonable for her age', which leaves a treatable disorder — avoidance, deconditioning, the housebound drift — to consolidate. The exam answer in one line: reasonableness is judged against frailty and support, not against the birth certificate.", topic: "Clinical assessment" },
    { question: "Describe the somatic detour of elderly panic and its specialty destinations.", answer: "Anxiety in the elderly exits through the body: PALPITATIONS send the patient to CARDIOLOGY, dizziness to NEUROLOGY, gut symptoms to GASTROENTEROLOGY — each specialty investigating honestly and finding nothing, or finding the true abnormality the anxiety has amplified. Misdiagnosis and inappropriate investigation are MORE likely at this age, not less. Behind the years of negative tests the real disorder — panic, phobia, generalised anxiety — consolidates as 'cardiac neurosis': every somatic flutter now meaning the heart, avoidance following, deconditioning making the next flutter more likely. The corrective is the chapter's rule: physical disorders can present as anxiety and anxiety presents as physical disorder, so the assessment ALWAYS includes a drug history and physical examination — and a physical cause is suspected when there is no past psychiatric history and no life event to account for the onset.", topic: "Clinical practice" },
    { question: "What usually causes agoraphobia first presenting after 65?", answer: "An ALARMING EXPERIENCE OF PHYSICAL ILLNESS — the myocardial infarction, the stroke, the fall — rather than the panic-driven pattern of younger adults. The illness supplies both the threat (a body that has demonstrably failed once) and the avoidance logic (do not go where it might happen again); deconditioning then entrenches the houseboundness, and the untreated fear tracks poor functional recovery — post-stroke anxiety in particular becoming chronic in a significant proportion. This is why the prevention window exists: the early intervention after strokes, heart attacks and falls that the aftercare review is supposed to carry — one question ('Since the attack, does your chest fear stop you from going out?') and a graded-exposure plan while the window is still open.", topic: "Late-onset patterns" },
    { question: "State the after-50 obsessional rule and its two alternatives to dementia.", answer: "THE RULE: obsessional symptoms appearing for the FIRST time after age 50 are rare and demand a search for organic disease — the workup (imaging and cognitive testing) comes before any OCD label. THE TWO ALTERNATIVES TO DEMENTIA: (1) a SPACE-OCCUPYING LESION — the structural cause the imaging seeks; (2) a PRIMARY AFFECTIVE DISORDER — obsessions arising as part of a depressive illness, which carries a wholly different treatment (the antidepressant treating both layers). The hinge of the whole interrogation is the INFORMANT HISTORY: 'he was never a checker' separates the lifelong OCD arriving into old age (treat as OCD: SSRI plus adapted ERP) from the late impostor (treat the cause: family psychoeducation and environmental adaptation for the dementia's rituals — no SSRI–ERP package as such).", topic: "Diagnosis" },
    { question: "Give the vulnerability–destabilisation–restitution model and four old-age destabilisers.", answer: "THE MODEL (the Goldberg–Huxley frame): each person's premorbid VULNERABILITY — genetic contribution (evidenced in younger subjects; the old-age contribution unknown), temperament, early experience (parental loss and childhood abuse effects persisting into old age) — sets the baseline; a DESTABILISING event swings the system; and what patient and doctor then do either RESTITUTES the setting or ELABORATES the symptoms — the benzodiazepine, the avoidance, the worry rituals and the reassurance-seeking all elaborating; the antidepressant, adapted CBT and graded exposure restituting. The event's MEANING matters as much as its fact: loss events tilt toward depression, threatening events toward anxiety. FOUR OLD-AGE DESTABILISERS: physical illness, bereavement, retirement, institutionalisation — arriving precisely as the social networks that once buffered them thin. Old age does not change the thermostat; it multiplies the shocks and removes the buffers.", topic: "Mechanism" },
    { question: "Recite the pharmacological ladder with the oxazepam, buspirone and beta-blocker caveats.", answer: "THE LADDER: (1) ANTIDEPRESSANTS FIRST — now the first choice in generalised anxiety and panic, especially with depressive symptoms: SSRIs and venlafaxine carry the evidence, SSRIs are specifically effective in OCD; geriatric dosing care (start low, go slow), an adequate trial with a stated duration, hyponatraemia and fall risk watched. (2) BENZODIAZEPINES RELUCTANTLY — the most used and most inappropriately used tier; elderly sensitivity with accumulation producing delirium, incontinence, falls; the OXAZEPAM CAVEAT: short half-life and no active metabolites make it the least problematic agent when one is genuinely needed — short course, stated stop, withdrawal symptoms expected on erratic discontinuation, long-term use avoided. (3) BUSPIRONE — well tolerated but around 2 WEEKS to effect: useless acutely, indicated for severe chronic generalised anxiety and dependence-risk patients. (4) THE BETA-BLOCKER CAVEAT: sympathetic symptom control limited by geriatric contraindications — COPD, sinus bradycardia, heart failure. (5) NEUROLEPTICS — a minimal role given the extrapyramidal burden: short low-dose courses (haloperidol, zuclopenthixol) only for benzodiazepine-intolerant patients, with hydroxyzine as the sedative antihistamine alternative.", topic: "Pharmacology" },
    { question: "What is the prevention opportunity in stroke, MI and falls aftercare — and which comorbidity predicts poorer antidepressant response in elderly anxiety?", answer: "THE PREVENTION OPPORTUNITY: primary prevention of the neurotic disorders is presently limited, but the physical-illness association opens a practical window — INTERVENE EARLY AFTER STROKES, HEART ATTACKS AND FALLS to prevent chronic neurotic disability, because post-event anxiety and agoraphobia are common, become chronic in a significant proportion, and track poor functional recovery. The delivery: one question at every post-event review ('Since the attack, does your chest fear stop you from going out?'), graded exposure begun with the family as co-therapist, the SSRI where the generalised component warrants. Whether better earlier-life treatment lowers late-life chronicity will show as cohorts age. THE COMORBIDITY: DEPRESSION — comorbid anxiety predicting POORER antidepressant response with more relapse and recurrence, which is why the depressive component is assessed and treated in its own right at every review.", topic: "Management" },
  ],
  faqs: [
    { question: "Isn't worry normal at her age?", answer: "The content of worry — health, money, safety — is normal; the disorder is defined by severity, persistence, avoidance and suffering, judged against her frailty and support, not her birth certificate. When the worry stops her walking to the temple or keeps her checking her pulse hourly, it has crossed from content to condition — and it is treatable." },
    { question: "Why does the doctor prescribe an antidepressant for anxiety?", answer: "Because antidepressants — the SSRIs, with venlafaxine — are the first-line, evidence-backed treatment for generalised anxiety and panic in old age, and depression usually travels with the anxiety. They work over weeks, not hours. The old reflex, a benzodiazepine, carries falls, confusion and dependence — which is why the antidepressant, not the tranquilliser, is the correct answer even when the complaint sounds like nerves." },
    { question: "She has been on sleeping tablets for years — can she ever stop?", answer: "Yes, with a planned taper and replacement strategies: the new medicine established first, then the slow reduction with the family knowing what to expect. The long-term risks — falls, memory trouble, dependence — are precisely why the chapter prefers withdrawal where possible. What must never happen is erratic stopping, which produces withdrawal symptoms and worse nights." },
    { question: "Since his stroke he will not leave the house — is that physical weakness?", answer: "Sometimes both, and they feed each other: post-stroke anxiety and agoraphobia are common, become chronic in a significant proportion, and slow functional recovery. The weakness improves with rehabilitation; the fear improves with treatment — graded exposure back to the street and the market, often with family walking alongside, plus an antidepressant where the worry is generalised. Treating the fear is part of the rehabilitation, not separate from it." },
    { question: "Grandmother has started checking everything — is that OCD?", answer: "First-time rituals after 50 are more often the surface of a dementia or another brain condition than OCD arriving late; the scan and the memory tests come before the label. If the workup is clear and the mood is low, the obsessions may be part of a depressive illness — which the antidepressant treats. The checking itself is managed with the family's understanding and small environmental adaptations while the cause decides the treatment." },
    { question: "Can old people really benefit from talking therapy?", answer: "Yes — CBT works in later life with the same goals and techniques as for younger adults, adapted for hearing, vision, mobility and memory. Task-centred group activities work well too. Older patients often bring the motivation and life perspective that make therapy succeed — the clinician's doubt about their capacity for change says more about the clinician." },
    { question: "Are benzodiazepines ever the right answer in the elderly?", answer: "Rarely, briefly, and deliberately: short-acting, for a stated period, with the taper planned at the same consultation — and when one is genuinely needed, oxazepam is the least problematic (short half-life, no active metabolites, minimal accumulation). What is never right is the renewing prescription that turns a week of insomnia into years of falls and confusion." },
    { question: "What exactly is the fear of falling — and can it be treated?", answer: "It is the signature phobia of old age: a fear disproportionate to the frailty that anchors it, driving avoidance of stairs, walks and outings — and the avoidance deconditions the body until the fear becomes accurate. It is treated with the graded-exposure ladder (accompany, then wait, then extend), a gait-and-environment audit (rails, lighting, footwear), and confidence rebuilt step by step. Reassurance alone does not work — the exposure plan does." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "WHO — ICD-10/ICD-11 neurotic, stress-related and obsessive-compulsive groupings: the classification frame the general-neurotic-syndrome debate addresses" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 8.5.5 — source chapter mapped; content rewritten and updated beyond it (2009)" },
      { source: "Suribhatla S, Lindesay J — Treatment of anxiety disorders, in Practical Old Age Psychopharmacology (2005)" },
    ],
    trials: [
      { source: "Åström M — Generalized anxiety disorder in stroke patients: a 3-year longitudinal study (Stroke, 1996)" },
      { source: "Mohlman J — Psychosocial treatment of late-life GAD: the CBT evidence (2004)" },
    ],
    reviews: [
      { source: "Tyrer P — Classification of Neurosis: the general neurotic syndrome model (1989)" },
      { source: "Goldberg D, Huxley P — Common Mental Disorders: a bio-social model: vulnerability, destabilisation and the pathway-to-care filters (1992)" },
      { source: "Lindesay J — Phobic disorders in the elderly (British Journal of Psychiatry, 1991)" },
      { source: "Beekman ATF et al. — Anxiety disorders in later life: the Longitudinal Aging Study Amsterdam, the network-size association (1998)" },
      { source: "Krasucki C, Howard R, Mann A — The relationship between anxiety disorders and age: the late-onset exceptions (1998)" },
      { source: "Larkin AB et al. — The natural history of neurotic disorder in an elderly urban population: the Liverpool longitudinal study (1992)" },
      { source: "Koder DA — Treatment of anxiety in the cognitively impaired elderly: can CBT help? (1998)" },
      { source: "Ruskin PE, Talbot JA (eds.) — Aging and Posttraumatic Stress Disorder: persistent and late-onset PTSD in the elderly" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 (24×7, free) and the district psychiatry tier — the Indian counselling and treatment channels" },
      { source: "The one-question post-event screen and the family accompany-then-wait exposure ladder — the two instruments this course hands to every Indian family" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the worry that is treatable, the right tablet and the wrong one, the fear of falling, the checking-after-50 warning.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "27 min",
      description: "The classification stance, the geriatric faces, the differential web, the treatment ladder with the oxazepam caveat.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "34 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "42 min",
      description: "Everything — the benzo-legacy conversion, the after-50 interrogation, the family exposure ladder, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The wrong-tablet problem, the general neurotic syndrome, the geriatric faces.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the classification stance and the OCD exception, and name the signature phobia." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The thermostat, the somatic detour, the after-50 route.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can walk the vulnerability–destabilisation–restitution chain and say what elaborates and what restitutes." },
    { number: 3, title: "Clinical Practice", description: "The differential web, the treatment ladder, the patient guide.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the after-50 interrogation and recite the pharmacological ladder with its caveats." },
    { number: 4, title: "Indian Context", description: "The tension doorway, the benzo legacy, the family ladder, the post-event screen.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can open the 'tension' label, plan a benzo conversion and deliver the one-question post-event screen." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the elderly-anxiety essay cold and recite the after-50 rule without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 8.5.5 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Tyrer P — Classification of Neurosis: the general neurotic syndrome model", sourceType: "primary", year: "1989", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Goldberg D, Huxley P — Common Mental Disorders: a bio-social model: vulnerability–destabilisation–restitution and the pathway-to-care filters", sourceType: "primary", year: "1992", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Lindesay J — Phobic disorders in the elderly (Br J Psychiatry 159, 531–41): the geriatric phobia findings and the late-onset agoraphobia pattern", sourceType: "primary", year: "1991", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Åström M — Generalized anxiety disorder in stroke patients: a 3-year longitudinal study (Stroke 27, 270–5)", sourceType: "primary", year: "1996", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Beekman ATF et al. — Anxiety disorders in later life: the Longitudinal Aging Study Amsterdam: the network-size association", sourceType: "primary", year: "1998", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Krasucki C, Howard R, Mann A — The relationship between anxiety disorders and age: the late-onset exceptions", sourceType: "review", year: "1998", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Larkin AB et al. — The natural history of neurotic disorder in an elderly urban population: the Liverpool longitudinal study", sourceType: "primary", year: "1992", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Mohlman J — Psychosocial treatment of late-life generalized anxiety disorder: the CBT evidence", sourceType: "review", year: "2004", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Koder DA — Treatment of anxiety in the cognitively impaired elderly: the adapted-CBT question", sourceType: "review", year: "1998", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Suribhatla S, Lindesay J — Treatment of anxiety disorders, in Practical Old Age Psychopharmacology: the pharmacological ladder", sourceType: "review", year: "2005", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Ruskin PE, Talbot JA (eds.) — Aging and Posttraumatic Stress Disorder: persistent and late-onset PTSD in the elderly", sourceType: "review", year: "1990s", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The classification stance: the elderly stress-related and anxiety disorders are better understood as aspects of a general neurotic syndrome (extensive comorbidity, diagnostic instability over time, all persisting into old age) than as discrete categories — with OCD the exception: a distinct, stable condition with a different aetiology.", grade: "supported", sources: ["S1", "S2"] },
    { text: "Epidemiology: relatively uncommon in clinical populations with significant community prevalence — the pathway-to-care filter; female preponderance; prevalence and incidence falling with age; most elderly patients developed their disorders before the fifties, the late exceptions being phobic disorder, panic and OCD; anxiety-disorder mortality elevated in elderly patients.", grade: "established", sources: ["S1", "S7", "S8"] },
    { text: "The geriatric content shift: worry aimed at health, finances and crime; fear of falling the prominent geriatric phobia; panic misdirected to cardiology, neurology and gastroenterology with misdiagnosis and inappropriate investigation more likely at this age — and the reasonableness rule: clinically significant fears dismissed as 'reasonable for her age' when physical frailty and the availability of social support, not age, determine perceived vulnerability.", grade: "established", sources: ["S1", "S4"] },
    { text: "Post-65 agoraphobia usually arises after an alarming experience of physical ill health rather than panic; post-stroke anxiety disorders are common, become chronic in a significant proportion, and track poor functional recovery.", grade: "established", sources: ["S1", "S4", "S5"] },
    { text: "The after-50 obsessional rule: first-onset obsessions after 50 are rare and demand investigation for dementia or a space-occupying lesion, or recognition as part of a primary affective disorder; OCD features otherwise resemble younger patients'.", grade: "established", sources: ["S1", "S7"] },
    { text: "The aetiological frame: premorbid vulnerability (genetic contribution from younger-subject evidence; temperament; early experience persisting into old age), destabilisation by old-age life events (illness, bereavement, retirement, institutionalisation — the meaning of the event mattering), and restitution or elaboration by what patient and doctor do next; smaller social networks associating with anxiety disorders.", grade: "supported", sources: ["S1", "S3", "S6"] },
    { text: "The physical layer: physical illness as cause (the post-MI 'cardiac neurosis', post-stroke anxiety with some lesion-location relationship, arthritis, balance disorders and sensory impairment raising vulnerability and avoidance) and drugs as cause (oral hypoglycaemics, corticosteroids, caffeine excess, sympathomimetic preparations) — with the rule: drug history and physical examination always, and a physical cause suspected when there is no past psychiatric history and no life event to account for onset.", grade: "established", sources: ["S1", "S5"] },
    { text: "The comorbidity drag: depressive symptoms integral to many elderly neurotic disorders; comorbid anxiety predicting poorer antidepressant response with more relapse and recurrence — the depressive component assessed and treated in its own right.", grade: "established", sources: ["S1"] },
    { text: "The treatment ladder: antidepressants now first choice in generalised anxiety and panic (SSRIs and venlafaxine carrying the evidence; SSRIs specifically effective in OCD); benzodiazepines reluctantly (elderly accumulation producing delirium, incontinence and falls; oxazepam with its short half-life and no active metabolites least problematic; withdrawal symptoms on erratic discontinuation; long-term use avoided); buspirone well tolerated but around 2 weeks to effect; beta-blockers limited by COPD, sinus bradycardia and heart failure; neuroleptics a limited short low-dose role (haloperidol, zuclopenthixol) with hydroxyzine as the sedative antihistamine alternative.", grade: "established", sources: ["S1", "S11"] },
    { text: "Adapted CBT: goals and techniques as for younger adults with adaptations for sensory impairment, physical illness/disability and cognitive dysfunction; individual tailoring limiting group CBT though task-centred group activities (anxiety management) work well; the clinician auditing their own preconceptions about elderly people's capacity for growth and change.", grade: "supported", sources: ["S1", "S9", "S10"] },
    { text: "The prevention window: primary prevention presently limited, but the physical-illness association opening the practical point — intervene early after strokes, heart attacks and falls to prevent chronic neurotic disability; whether better earlier-life treatment lowers late-life chronicity to show as cohorts age.", grade: "supported", sources: ["S1", "S5"] },
    { text: "PTSD in elderly survivors (war, holocaust) is persistent, with late onset or recurrence precipitated decades after the original trauma; late-life trauma also producing PTSD that tends to persist; dementia carrying higher anxiety rates unrelated to cognitive severity, and caregivers of dementia patients carrying high anxiety–depression risk.", grade: "supported", sources: ["S1", "S12"] },
    { text: "The Indian tier: the 'tension' somatic doorway (gas, body heat, sleeplessness, head pressure), the normalisation filter ('what do you expect at this age?'), the renewing benzodiazepine legacy with the SSRI-plus-taper conversion as the highest-yield OPD intervention, family-delivered graded exposure (the accompany-then-wait ladder), and the one-question post-event screen — the note's Indian practice layer, KYP-authored from the chapter's warnings.", grade: "supported", sources: ["S1", "S11"] },
  ],
};
