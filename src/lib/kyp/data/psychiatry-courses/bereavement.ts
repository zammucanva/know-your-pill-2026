import type { PsychiatryCourse } from "./types";

/**
 * BEREAVEMENT & COMPLICATED GRIEF — canonical Psychiatry
 * course (migration batch 2, Group E).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/bereavement.md — untouched foundation),
 * re-researched against current guidance (DSM-5-TR prolonged
 * grief disorder 2022, ICD-11 6E22 with the 6-month gate,
 * Stroebe & Schut's dual-process model, Shear's complicated
 * grief therapy trials, the widowers' suicide-risk and
 * takotsubo literature, Indian mourning-ritual studies) with
 * per-claim provenance.
 *
 * SSRIs treat the depressive component only — sertraline links
 * to the existing KYP drug lesson with that honest positioning;
 * grief-specific therapy outperforms antidepressants for the
 * core syndrome.
 */
export const bereavementCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "bereavement",
  title: "Bereavement & Complicated Grief",
  shortName: "Grief",
  kind: "disorder",
  category: "Trauma- & Stressor-Related Disorder",
  groupLetter: "E",
  groupName: "Stress, trauma & dissociation-spectrum",
  learningPath: ["Psychiatry", "Trauma & Stress", "Bereavement & Complicated Grief"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "Grief is the healthy, necessary work of rebuilding a life around a loss — it hurts by design, moves in waves not stages, and in most people slowly finds its place; prolonged grief disorder is the name for the minority whose grief stays frozen in its first intensity, disabling them for months and years.",
  summary:
    "Losing a parent, a spouse, a child rearranges a person from the inside: identity, daily routine, future plans, even appetite and sleep are all built around someone who is now absent. Grief is the rebuilding process, and it is supposed to hurt, oscillate, and take longer than anyone around the griever expects. The clinical task is mostly to protect the process: reassure families that waves of sorrow at six months are normal, protect sleep and nutrition, keep the bereaved connected, and honour the rituals that cultures evolved precisely to carry this work. But grief can also go wrong in two directions, and both need real treatment: it can freeze into prolonged grief disorder (the person remains as shattered at the first anniversary as on the first day; ICD-11 since 2019, DSM-5-TR since 2022), or it can mask and mate with major depression — a different illness needing its own treatment. Indian mourning culture (the 13-day rites, the terahvin, the feeding of others, the white clothes) is a sophisticated, community-delivered grief programme that modern evidence largely validates; the clinician's job is to work with it, not around it. This course covers the three pictures — normal grief, prolonged grief disorder, grief-masking depression — the dual-process model, the duration gates, complicated grief therapy, and the Indian realities: missed rites, suicide-bereaved families, widow health, and the unritualised COVID cohort.",
  estimatedReadTime: "32 min",
  yieldRating: "high",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Describe normal grief's true shape — waves, tasks, continuing bonds — not tidy stages.",
    "Differentiate normal grief, prolonged grief disorder, and grief-masking depression with confidence.",
    "State the DSM-5-TR and ICD-11 duration gates for prolonged grief disorder.",
    "Use the dual-process model to explain to families when grieving and when resting are both correct.",
    "Recognise disenfranchised grief and high-risk bereavements (child loss, suicide loss, stigmatised deaths).",
    "Deliver grief counselling principles; know when complicated-grief therapy and antidepressants enter — and when they do not.",
    "Harness Indian mourning rituals as clinical allies, and construct delayed rites when the machinery was missed.",
    "Screen bereaved children, elderly widows, and suicide-bereaved families for the complications that matter.",
  ],
  quickFacts: [
    { label: "The shape", value: "Waves, not stages", detail: "Sudden sobbing at the mangoes he liked — triggered, arriving, passing; distinct from depression's constant flat grey" },
    { label: "The healthy mechanism", value: "Oscillation", detail: "The dual-process model: alternating between the loss room (confronting) and the restoration room (living, banking, joking) — pathology is permanent residence in either" },
    { label: "Continuing bonds", value: "Healthy for life", detail: "The tulsi water offered, the favourite dish cooked on the death anniversary — the inner relationship with the dead is what most healthy grievers do worldwide, not a failure to 'move on'" },
    { label: "PGD gate (ICD-11)", value: "≥ 6 months", detail: "Grief frozen at first-day intensity with functional collapse beyond 6 months post-death (ICD-11 6E22)" },
    { label: "PGD gate (DSM-5-TR)", value: "≥ 12 months adults", detail: "12 months in adults, 6 in children/adolescents — 'beyond cultural norms' is the comparative clause both systems use" },
    { label: "Highest-risk losses", value: "Child & violent death", detail: "Prolonged-grief conditional rates up to ~20% in some series after child death; suicide loss adds stigma and blame" },
    { label: "The suicide-risk group", value: "Elderly widowers", detail: "The classic elevated-risk demographic — screen directly; early widowhood weeks are also the stress-cardiomyopathy ('broken heart') window" },
    { label: "The treatment", value: "Grief-specific therapy", detail: "Complicated grief therapy (Shear) outperforms antidepressants for the core syndrome; SSRIs treat the depressive component only" },
  ],
  knowledgeGraph: [
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "After violent death, grief shares an engine with PTSD — the hybrid complicated-grief picture; treat both" },
    { label: "Acute Stress Reactions", type: "condition", href: "/psychiatry/acute-stress-reaction/", note: "Natural death alone is not DSM-5 trauma — but witnessed violent death can be" },
    { label: "Adjustment Disorders", type: "condition", href: "/psychiatry/adjustment-disorder/", note: "The non-death loss-and-change reaction — grief's cousin on the other side of the family" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The masquerade that needs medicine — global anhedonia, worthlessness, vegetative collapse" },
    { label: "Suicide & Deliberate Self-Harm", type: "condition", href: "/psychiatry/suicide-self-harm/", note: "Screen the bereaved directly — widowers and suicide-bereaved parents are the high-vigilance groups" },
    { label: "Depersonalization / Derealization Disorder", type: "condition", href: "/psychiatry/depersonalization-disorder/", note: "Derealization in acute grief is common and transient — 'the world went flat'; distinguish from the disorder" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The system the SSRI rides on — for the depressive component, never for grief per se" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The yearning engine — separation distress rides the attachment circuitry" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three stories carry the teaching. The amputation phantom: a spouse of 40 years is not a person you knew — they are a load-bearing wall in the architecture of your day; remove the wall and the whole house shifts (the tea made for two, the side of the bed, the name never called out again without an answer); grief is the house learning to stand differently, and phantom sensations (sensing presence, hearing the scooter at the gate) are part of the work — normal in the first months, misread as hallucinations of illness by frightened families. The oscillating labourer: the dual-process model pictures the griever alternating between the loss room (confronting the pain, sorting the belongings, crying the memories) and the restoration room (bank work, cooking, jokes with a cousin, a nap); healthy grief OSCILLATES — pathology has two shapes: permanent residence in the loss room (prolonged grief) and permanent flight into the restoration room (masked, postponed grief that erupts years later in somatic form). The unfiled and the unspoken: when the death is sudden and violent, grief shares an engine with PTSD (the memory of the death itself is hot and intrusive); when the death is stigmatised or secret, the grief is disenfranchised — no room, no ritual, no listener, so the work cannot run.",
    steps: [
      "Start with attachment: the deceased was a load-bearing wall in the day's architecture; loss is structural, not merely sad.",
      "The rebuilding runs by oscillation — loss-room work (confronting, sorting, crying) alternating with restoration-room work (banking, cooking, joking, napping); 'she laughs at a wedding' is the mechanism working.",
      "Phantom sensations (presence, dreams that feel like visits) are the attachment system's expected readjustment — normal, usually welcomed, time-limited.",
      "The second year is often harder than the first: the first runs on shock, relatives and first-anniversary rituals; the second runs on the griever alone — the most-reassuring true sentence in grief medicine.",
      "When the death is violent or unseen, the death-memory itself stays hot (PTSD engine); when the death is stigmatised or unritualised, the work has no machinery to run (disenfranchised / frozen work).",
      "Complicated-grief therapy's logic is to finally run the work that never ran: retelling, approaching the avoided, restoring roles.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "amygdala", name: "Amygdala (attachment circuitry)", role: "The separation-distress engine of yearning and the panic of early grief — the 'call-and-search' behaviour of a bonded brain losing its object.", grade: "proposed" },
    { id: "accumbens", name: "Ventral striatum / reward seeking", role: "The yearning-to-reunite circuitry — activated by reminders of the deceased in acute grief, the neurobiology of longing.", grade: "proposed" },
    { id: "pfc", name: "Prefrontal cortex", role: "The meaning-making and world-rebuilding apparatus — rebuilding the assumptive world is cognitive work; exhaustion here is part of 'grief brain'.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Cortisol", symbol: "CRT", role: "The stress axis of early grief — sleep and appetite disturbance, the immune dip, the early-widowhood cardiac-risk window.", grade: "supported" },
    { name: "Serotonin", symbol: "5-HT", role: "The system the SSRI rides — for the depressive component that can mate with grief; it does not dissolve grief itself.", grade: "supported", drugConnection: "The sertraline lesson exists in the KYP Medication Library." },
  ],
  pathways: [
    {
      id: "grief-oscillation",
      name: "The dual-process model",
      steps: [
        { label: "Loss room", detail: "Confronting the pain, sorting the belongings, crying the memories" },
        { label: "Restoration room", detail: "Bank work, cooking, jokes with a cousin, a nap" },
        { label: "Healthy grief oscillates", detail: "'She laughs at a wedding' is not disrespect — it is the mechanism working" },
        { label: "Pathology 1: stuck in the loss room", detail: "Prolonged grief disorder — frozen at first-day intensity" },
        { label: "Pathology 2: permanent flight into restoration", detail: "Masked/postponed grief — erupting years later, often somatic" },
      ],
      clinicalManifestation: "Wave-shaped sorrow with preserved function (normal) versus frozen yearning or postponed eruption (complicated).",
      grade: "established",
    },
    {
      id: "grief-trauma",
      name: "The violent-death hybrid",
      steps: [
        { label: "Sudden, violent or unseen death", detail: "The death memory itself is encoded hot" },
        { label: "Intrusions of the death scene", detail: "Imagined or witnessed; hypervigilance and startle may join" },
        { label: "Grief work jammed", detail: "The mind avoids the memory that needs processing" },
        { label: "Hybrid picture", detail: "Complicated grief after violent deaths is often grief + PTSD together" },
        { label: "Treat both", detail: "Grief-specific therapy with trauma-processing components" },
      ],
      clinicalManifestation: "Yearning plus intrusions, avoidance and arousal — beyond either diagnosis alone.",
      grade: "supported",
    },
    {
      id: "grief-machinery",
      name: "The rites run the work",
      steps: [
        { label: "Death within a ritual system", detail: "13 days, terahvin, feeding, white clothes — company, roles, structure" },
        { label: "The work runs", detail: "Loss-room time scheduled by the community; restoration-room roles assigned" },
        { label: "Rites impossible (COVID, distance, stigma)", detail: "Unseen deaths, restricted cremations, missed terahvins" },
        { label: "The work jams", detail: "Frozen grief at industrial scale — the missing-machinery cohort" },
        { label: "Constructed rites late", detail: "Delayed observance, family letter ritual, feeding guests — the machinery can be run late" },
      ],
      clinicalManifestation: "Prolonged grief concentrated among the unritualised — and responsive to constructed rites.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "grief-early", time: "Days–weeks", title: "Shock, fog, the machinery starts", description: "Numbness or waves; the rites (or their absence) begin their work; sleep, food and weight guarded by the family; phantom sensations common and normal.", phase: "onset" },
    { id: "grief-months", time: "Months 1–12", title: "The oscillating first year", description: "Waves tied to reminders; anniversaries flare predictably (birthday, death day, festival); roles rebuilt in the restoration room; the GP check at 6–8 weeks and around the first anniversary.", phase: "peak" },
    { id: "grief-year2", time: "Year 2", title: "The harder year", description: "'The second year is often harder than the first' — the first ran on shock, relatives and first-anniversary rituals; the second runs on her alone. The single most-reassuring true sentence in grief medicine.", phase: "duration" },
    { id: "grief-gates", time: "6–12 months", title: "The diagnostic gates", description: "ICD-11 gate at 6 months, DSM-5-TR at 12 months (adults): frozen intensity + functional collapse beyond cultural norms = prolonged grief disorder → grief-specific treatment.", phase: "duration" },
    { id: "grief-long", time: "Years", title: "Continuing bonds, lifelong", description: "The scent of it stays lifelong; healthy grievers keep an inner relationship (the tulsi water, the favourite dish) — illness only when the bond crowds out the living.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Grief itself is universal; prolonged grief disorder affects a minority of bereaved — conditional rates highest after child death (up to ~20% in some series) and violent death; roughly one in ten bereaved in general cohorts by broader complicated-grief definitions.",
    indianPrevalence: "No dedicated Indian PGD survey. Indian clinical reality includes the world's largest unritualised bereavement cohort in recent memory (COVID-19 waves: unseen deaths, restricted cremations, time-slotted funerals) — the missing-machinery population at elevated prolonged-grief risk.",
    lifetimeRisk: "Every person who loves will grieve; the clinical risk is conversion to prolonged grief disorder, depression, or the widowers' mortality/suicide elevation.",
    genderRatio: "Elderly widows carry elevated risks for depression, malnutrition and abandonment; elderly widowers carry the classic elevated suicide risk — the under-recognised twin.",
    ageOfOnset: "All ages; children grief in bursts and are failed by silence; the very old face the widowhood cliff.",
    indianNotes: "Suicide-bereaved families face stigma and blame (in-law fault-finding is a recurring pattern) that suppress the work; pregnancy and child loss are disenfranchised in much of India ('you can have another').",
  },
  etiology: [
    { category: "biological", factor: "Attachment depth", details: "The load-bearing-wall effect: a spouse of decades, a child, a twin — the depth of the daily interweave sets the size of the hole; sudden and violent deaths add the trauma engine." },
    { category: "psychological", factor: "Circumstances of the death", details: "Sudden, violent, un witnessed (the body never seen), stigmatised (suicide, overdose, HIV) — each dimension jams a different part of the work." },
    { category: "social", factor: "Disenfranchised grief", details: "Losses society does not recognise or permit — secret relationships, estrangement, pregnancy loss, the ex-officio mourner; no room, no ritual, no listener, so the work cannot run." },
    { category: "social", factor: "Weak support & missed rites", details: "Isolated migrants who cannot attend rites — the Indian-specific trap: the tech worker who missed his father's terahvin because the visa came too late; the COVID cohort." },
    { category: "psychological", factor: "High-risk griever positions", details: "The competent administrator of rites (the eldest son who runs everything flawlessly) — a high-risk griever, not a protected one; and children: unexplained and unsupported losses fail them." },
    { category: "social", factor: "Protective factors", details: "Rituals with roles, one confidant, meaning frameworks (religious/philosophical), and being needed (a task, a dependent, a community role) in the first months." },
  ],
  symptomClusters: [
    {
      category: "Normal grief — the honest picture",
      symptoms: ["Waves: sudden sobbing at the mangoes he liked — triggered, arriving, passing", "Physical: chest tightness, hollow stomach, appetite and sleep disturbance (weeks, not months of collapse)", "Sensing presence: feeling him in the kitchen, dreams that feel like visits (comforting, usually welcomed)", "Preoccupation with the deceased: wanting to talk about him repeatedly — this is the work, not a symptom", "Guilt in normal proportions: 'could I have been there more' — modifiable by facts and comfort", "Role rebuilding: learning the accounts, the ration card, the driving; continuing bonds lifelong"],
    },
    {
      category: "Prolonged grief disorder — the frozen picture",
      symptoms: ["Identity-level absorption: 'a part of me died with her'; disbelief the death is real, months and years on", "Intense yearning/longing daily, at the same rawness as the early weeks", "Preoccupation with the deceased or the death circumstances that crowds out function", "Avoidance of reminders OR the opposite: shrine-level fixation with no other life resuming", "Intense sorrow, bitterness, guilt that does not soften; 'the world ended for me'", "Inability to trust, emotional numbness, feeling detached from the living", "Marked impairment (work, self-care, relationships) beyond cultural norms for the mourning period"],
    },
    {
      category: "Grief-masking major depression — the masquerade that needs medicine",
      symptoms: ["Persistent anhedonia about EVERYTHING (not only the loss domain) — the wedding laughter is gone too", "Worthlessness and self-loathing beyond guilt about the death: 'I am a worthless person', not 'I should have driven him myself'", "Neurovegetative collapse that flattens rather than ripples: months of 3-hour sleep, 10% weight loss, psychomotor slowing", "Suicidal ideation of the 'join him' or 'escape' kind — a red line demanding depression-level care", "Psychotic features (guilt-laden, nihilistic) — an emergency", "Failure to function at ALL at any point (even the restoration room is empty)"],
    },
    {
      category: "Children's dialect",
      symptoms: ["Grief in bursts between play — normal", "Regression (bedwetting returns), separation panic, somatic complaints as their grief dialect", "School collapse, persisting regression — watch for", "Truth in age-shaped doses: euphemisms like 'went to sleep' breed fear of sleep"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "ICD-11",
      code: "Prolonged grief disorder (6E22)",
      criteria: [
        "Bereavement (loss of a close relationship); the response involves intense yearning/longing for the deceased or preoccupation with the deceased or the circumstances of the death.",
        "The grief response has persisted for at least 6 months, is consistently at an intensity that exceeds expected social/cultural norms, and is associated with functional impairment.",
        "Qualifiers exist for the atypical presentations; the construct is a disturbance of the grief process itself.",
      ],
      duration: "≥ 6 months since the loss (with cultural comparison).",
      indianNote: "Cite the family's own mourning frame in your written assessment — 'beyond cultural norms' is the comparative clause both systems use.",
    },
    {
      system: "DSM-5-TR",
      code: "Prolonged grief disorder (F43.81 / 309.89, trauma- and stressor-related section)",
      criteria: [
        "Death of a person close to the bereaved at least 12 months ago (adults; 6 months for children/adolescents).",
        "Since the death, a persistent grief response with intense yearning/longing or preoccupation with the deceased (or, in children, the deceased person being sought).",
        "Plus at least three associated symptoms across identity disruption, disbelief, avoidance of reminders, intense emotional pain, difficulty reintegrating, numbness, life feels meaningless, loneliness — nearly every day for the last month.",
        "Marked impairment; the duration and severity clearly exceed expected social, cultural or religious norms.",
      ],
      duration: "≥ 12 months after the death in adults (≥ 6 months in children/adolescents).",
      indianNote: "The PG-13 / Prolonged Grief Disorder-13 scale and the ICD-11 Traumatic Grief Inventory are the named instruments; PHQ-9 gates the depression question — scores used, not diagnose-by.",
    },
  ],
  severityScales: [
    {
      name: "PG-13",
      fullName: "Prolonged Grief Disorder-13 scale (Prigerson)",
      measures: "The yearning/preoccupation/burden cluster that defines PGD — named for documentation; items not reproduced (copyright).",
      ranges: [],
      indianNote: "The clinical 'railway' in district settings is function and the timeline interview: eating, weight, sleep architecture, work attendance, self-care — the three-picture gate mapped against the family's mourning norms.",
    },
    {
      name: "PHQ-9 (depression gate)",
      fullName: "Patient Health Questionnaire-9 — used as the depression-gate measure",
      measures: "Separates the depressive masquerade from grief: scores here describe the illness that needs medicine, not the grief itself.",
      ranges: [
        { min: 0, max: 4, severity: "Minimal", action: "Grief-frame care: protect the process, family guardians, ritual support" },
        { min: 5, max: 9, severity: "Mild", action: "Monitor; grief counselling; re-score at the next review" },
        { min: 10, max: 14, severity: "Moderate", action: "Formal depression evaluation — grief plus a depressive component may be present" },
        { min: 15, max: 27, severity: "Moderately severe–severe", action: "Treat as depression regardless of the death's recency: antidepressant + review; never let 'she is grieving' delay treatment by a year" },
      ],
      indianNote: "Waves with preserved function are grief; flat grey with vegetative collapse is depression — the PHQ-9 confirms what the interview shapes.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Normal grief", distinguishingFeatures: "Waves, triggers, presence-sensing, function returning, guilt proportionate.", keyDifferentiator: "Protect the process: reassure and support — diagnose nothing." },
    { condition: "Major depression", distinguishingFeatures: "Constant flat grey, anhedonia for all, worthlessness, vegetative collapse.", keyDifferentiator: "Global collapse beyond the loss domain; treat as depression, medicine and all." },
    { condition: "Prolonged grief disorder", distinguishingFeatures: "Frozen first-day intensity past the gate; yearning/identity absorption; function collapsed.", keyDifferentiator: "Grief-specific therapy — the treatment that targets the core syndrome." },
    { condition: "PTSD component", distinguishingFeatures: "Intrusions of the death scene, hypervigilance, startle after violent death.", keyDifferentiator: "Treat the trauma alongside the grief — the hybrid picture." },
    { condition: "Masked (postponed) grief", distinguishingFeatures: "Somatic storm years after unprocessed loss.", keyDifferentiator: "Unmask gently, run the work — often in the restoration-room refugee." },
    { condition: "Underlying bipolar/psychosis unmasked by grief", distinguishingFeatures: "Manic or psychotic flare within weeks of loss.", keyDifferentiator: "Urgent care — the grief was the trigger, not the illness." },
  ],
  management: [
    {
      category: "psychotherapy",
      name: "For normal grief: protect the process (the prescription is a programme, not a pill)",
      description: "Legitimise the waves and the timetable ('the second year is often harder than the first'); sleep, food and movement guarded by the family — assign ONE relative to each; roles and tasks (the bereaved do better when needed); ritual participation encouraged, not forced; continuing bonds honoured; the GP check at 6–8 weeks and around the first anniversary (the anniversaries are predictable flare windows).",
      whenToUse: "Every bereaved person, from day one.",
      indianContext: "The ritual calendar IS the treatment architecture for most families: the 13 days of imposed company and roles, the terahvin's formal closing, the sraddha/annual rites institutionalising continuing bonds, the first festival re-entry. Read the family's ritual map — asking 'what have your family's observances been?' is both diagnosis and treatment.",
    },
    {
      category: "psychotherapy",
      name: "For PGD: complicated grief therapy (Shear)",
      description: "The best-tested protocol: elements of exposure (retelling the death story, approaching avoided places and belongings), restoration work (goal-setting, re-engagement), and memory-evoked emotional connection; 16 sessions typical. Grief-focused CBT variants are equivalent in spirit — the Indian district psychologist can deliver the structure after training (DMHP/NIMHANS modules).",
      whenToUse: "The frozen picture past the gates, with functional collapse.",
      indianContext: "Fact-reconstruction retelling when the death was unseen (hospital records read together with the therapist) — the COVID-widow manoeuvre; support groups (suicide-bereaved circles, widows' networks, parents' circles) are unmatched for disenfranchised grief.",
    },
    {
      category: "pharmacotherapy",
      name: "Medication — the honest position",
      description: "SSRIs treat the depressive component and global distress; they do NOT specifically dissolve grief. Grief-specific therapy outperforms antidepressants for the core syndrome. Say this plainly to families who arrive asking for 'tablets to stop the pain': the pain is the work, and we can help the work run.",
      whenToUse: "The depressive component mating with grief; global distress at depressive severity.",
      indianContext: "Sertraline ≈ ₹60–150/month (approx 2026); antidepressants per the Depressive Disorders course's India ledger; grief-specific therapy private ≈ ₹600–1,500/session, DMHP/district psychologists nominal.",
    },
    {
      category: "brain-stimulation",
      name: "For grief-masking depression with psychotic features",
      description: "Treat as depression — antidepressants, and ECT for psychotic-level presentations (guilt-laden, nihilistic). Do not let 'she is grieving' delay treatment of a treatable depression by a year.",
      whenToUse: "Psychotic depression in the bereaved — an emergency.",
      indianContext: "ECT availability concentrates in medical-college hospitals.",
    },
    {
      category: "lifestyle",
      name: "For bereaved children",
      description: "Truth in age-shaped doses (euphemisms like 'went to sleep' breed fear of sleep); routines preserved; one grieving adult who can talk; school informed; bursts of play between sobbing are normal. Watch for school collapse, persisting regression, somatic complaints as their grief dialect.",
      whenToUse: "Every bereaved child.",
      indianContext: "Children are failed by silence and by adult embarrassment — the 'protecting the children' concealment of suicide deaths does double harm; tell the truth in protected doses.",
    },
  ],
  safety: {
    redFlags: [
      "Suicidal ideation of the 'join him' or 'escape' kind — depression-level care, same day",
      "Elderly widowers — the classic elevated-suicide-risk group; screen directly at every contact",
      "Psychotic features (guilt-laden, nihilistic) — an emergency",
      "The still-blank, sleepless, non-functioning griever at two months and beyond — the watched one",
      "Heavy alcohol in the bereaved man — the nightly anaesthetic that strips deep sleep; grief plus alcohol is the commonest escalation",
      "Total functional collapse at any point (even the restoration room is empty)",
    ],
    urgentGuidance:
      "The direct suicide screen belongs to every bereaved review — widowers and suicide-bereaved parents above all (see the Suicide & Self-Harm course's bereavement section for the family-side work). Early widowhood weeks are also the stress-cardiomyopathy window — 'broken heart' has an ICD code; chest symptoms in fresh widows get cardiac review, not just reassurance.",
  },
  drugLinks: [
    { name: "Sertraline", slug: "sertraline", role: "For the depressive component", rationale: "When the picture mates with depression (global anhedonia, worthlessness, vegetative collapse) — SSRIs treat that component; they do not dissolve grief itself, and grief-specific therapy outperforms them for the core syndrome." },
  ],
  contentGaps: [
    "Complicated grief therapy and grief-focused CBT delivery guides have no standalone KYP skills modules yet (the structure lives in this course).",
  ],
  patientGuide: {
    whatIsIt:
      "Grief is the healthy, necessary work of rebuilding a life around someone who is gone. It hurts by design, it moves in waves rather than neat stages, and it takes longer than everyone around you expects. It is not an illness — though it can freeze (prolonged grief disorder) or mate with depression, and both of those do have names, gates and treatments.",
    whatCausesIt:
      "The person you lost was a load-bearing wall in the architecture of your day. Removing the wall shifts the whole house — the tea made for two, the side of the bed, the plans. Grief is the house learning to stand differently: partly by facing the loss, partly by rebuilding daily life, in alternation. The work runs better with company, roles and ritual.",
    symptoms:
      "Waves of sorrow set off by reminders; a hollow stomach and broken sleep; sensing the person's presence or dreaming of them; wanting to talk about them a lot; guilt in normal proportions; learning the tasks they used to do. All normal. The worry signs: the same rawness as day one a year later; life still stopped; or a flat grey emptiness in everything with thoughts that you are worthless.",
    treatment:
      "For most grief, the treatment is people, rituals, time, and sometimes structured grief counselling — protecting sleep, food, roles and connection while the work runs. If the grief freezes (still day-one raw past the year mark with life stopped), there is now a named condition — prolonged grief disorder — with a specific talking therapy that works on retelling and re-engaging. If depression mates with the grief, that part is treated with antidepressants — but no tablet dissolves grief itself.",
    selfHelp: [
      "Let the waves come and pass — fighting them costs more than riding them.",
      "Accept the roles and tasks the family and rituals offer; being needed is medicine in the first months.",
      "Keep the continuing bonds that comfort: the tulsi water, the favourite dish on the anniversary, talking to the photograph.",
      "Guard sleep and food — assign one relative to each if you cannot track them yourself.",
      "Expect the second year to be harder than the first; that is the normal shape, not a relapse.",
    ],
    whenToSeekHelp: [
      "Still at day-one rawness at the first anniversary with life stopped — the gate has a name now",
      "Flat grey emptiness in everything, worthlessness, months of broken sleep and weight loss — the depression masquerade",
      "Any thoughts of joining the person or of ending your life — same-day help (Tele-MANAS 14416)",
      "Drinking nightly since the death",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages)",
      "District psychologists under DMHP for grief-focused work — nominal or free",
      "Suicide-bereaved support circles and widows' networks where available; temple/gurudwara/mosque/church communities will schedule delayed observances on request",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No condition-specific Indian guideline; management follows ICD-11/DSM-5-TR constructs with the NDMA/NIMHANS psychosocial-care modules and DMHP delivery infrastructure.",
    systemContext: "The family, the community and the ritual calendar do most of the care; the clinician adds the three-picture gate, the safety screens, and grief-specific therapy for the frozen cases through district psychologists.",
    programmeContext: "DMHP district psychologists deliver grief-focused CBT structure after NIMHANS-module training; Tele-MANAS 14416 provides the counselling tier; pandemic-era bereavement cohorts are the standing challenge the system is still absorbing.",
    costConsiderations: "Grief-specific therapy private ≈ ₹600–1,500/session; DMHP/district psychologists nominal; sertraline ≈ ₹60–150/month (approx 2026). The cheapest high-yield interventions are free: the ritual map, the family guardians, the delayed rite.",
    culturalConsiderations: "Read the ritual map of the family in front of you: Hindu families vary regionally (13-day/terahvin in the north, shorter observances elsewhere); Muslim families observe 3-day iddat-based mourning with 40-day markers; Christian families hold novenas and month's-mind masses; Sikh families the path recitations. Asking 'what have your family's observances been?' is both diagnosis and treatment. Honour the tradition's own equanimity-with-engagement state; the clinical line is distress-and-impairment, never the content of belief.",
    patientCounselling: [
      "The missed-rites migrant prescription: a delayed observance with community (temple/gurudwara/mosque will schedule one), a written-letter ritual, a feeding of guests — do not dismiss it as 'just symbolic'; symbolism is the machinery, and delayed rites work because the work never ran, not because the date matters.",
      "Suicide-bereaved families: early normalisation contact, children told the truth in protected doses, and direct engagement with the blame dynamics (in-law fault-finding is a recurring pattern) — the shame that silence builds is the second injury.",
      "Widow health in late life: the geriatric review asks the three function questions and weighs her; widowers' suicide risk is the under-recognised twin — screen directly.",
      "Pregnancy and child loss: disenfranchised in much of India ('you can have another'); the parents' grief is real and long; neonatal bereavement-care programmes (seeing, naming, memory-making) are evidence-based and under-used; miscarriage grief likewise — name it, schedule the review.",
      "The 'he is not crying at all' alarm: two readings — the protected strength-position of the eldest son running the rites (give him a scheduled breakdown slot — the barber's touch, the last flower — and someone watching him after day 13), or masked/postponed grief; distinguish by function over weeks.",
      "For your institution: a hospital bereavement protocol (viewing where possible, a staff member who speaks, no paperwork ambushes at the exit) — mental-health prevention at source.",
    ],
  },
  decisionPath: {
    title: "The three-picture gate",
    nodes: [
      {
        id: "start",
        question: "A bereaved person is brought or presents. What is the shape of the picture?",
        branches: [
          { label: "Waves with function returning", next: "normal" },
          { label: "Frozen first-day rawness", next: "gate-check" },
          { label: "Flat grey collapse", next: "depression" },
        ],
      },
      {
        id: "gate-check",
        question: "Duration and cultural comparison: beyond the gate (ICD-11 ≥ 6 months; DSM-5-TR ≥ 12 months adults) and beyond the family's mourning norms?",
        branches: [
          { label: "Yes — past the gate, collapsed", next: "pgd" },
          { label: "Inside the gate / within norms", next: "watch" },
        ],
      },
      {
        id: "depression",
        question: "Global anhedonia, worthlessness, vegetative collapse, or 'join him' ideation?",
        branches: [
          { label: "Yes", next: "treat-depression" },
          { label: "Psychotic features present", next: "emergency" },
        ],
      },
      { id: "normal", question: "Normal grief.", recommendation: "Protect the process: legitimise the waves and the second-year warning; family guardians for sleep/food; roles and ritual participation; the 6–8-week and anniversary checks; continue bonds honoured." },
      { id: "watch", question: "Early but intense.", recommendation: "Active support: grief counselling structure, the ritual map read, disenfranchisement addressed (constructed rites where machinery was missed); re-review against the gates; screen directly at each contact." },
      { id: "pgd", question: "Prolonged grief disorder.", recommendation: "Grief-specific treatment: complicated grief therapy (retelling + approaching the avoided + restoration work), support groups for the disenfranchised; SSRI only for the depressive component; for unseen deaths, fact-reconstruction retelling with records." },
      { id: "treat-depression", question: "Grief-masking depression.", recommendation: "Treat as depression regardless of the death's recency (see the Depressive Disorders course): antidepressant, review, and the direct suicide screen — never let 'she is grieving' delay treatment by a year." },
      { id: "emergency", question: "Psychotic depression in the bereaved.", recommendation: "Emergency depression-level care including ECT where indicated; the grief was the trigger, not the illness." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Writing 'major depression' because the person cries at 2 months",
      why: "Waves with preserved function are grief — the work running, not an illness; premature labels medicalise normal love.",
      correction: "Map the shape: waves tied to the lost person with function returning = protect the process; flat grey global collapse = depression.",
    },
    {
      mistake: "Writing 'normal grief' for the 2-year frozen picture with weight loss",
      why: "Missing prolonged grief disorder withholds the specific therapy that works; the frozenness is as diagnosable as it is treatable.",
      correction: "Apply the gates: ICD-11 ≥ 6 months, DSM-5-TR ≥ 12 months (adults), plus beyond-cultural-norms collapse — then treat with grief-specific therapy.",
    },
    {
      mistake: "Prescribing antidepressants for grief per se",
      why: "The honest position is component-treatment: SSRIs treat the depressive rider; grief-specific therapy outperforms them for the core syndrome.",
      correction: "Say it plainly to families asking for 'tablets to stop the pain': the pain is the work, and we can help the work run.",
    },
    {
      mistake: "Treating presence-sensing as psychosis",
      why: "Sensing the dead's presence in early grief is normal — an exam trap worth three marks and a family catastrophe when fumbled.",
      correction: "Ask the shape: comforting, time-limited, insight intact — reassure; only delusional elaboration with lost insight escalates.",
    },
    {
      mistake: "Missing the alcohol in the bereaved man",
      why: "Grief plus alcohol is the commonest escalation in bereaved men — the nightly anaesthetic strips the deep sleep that processes loss.",
      correction: "Ask directly at every bereaved review; bring him in on the drinking itself, and the grief work follows.",
    },
    {
      mistake: "Forgetting the direct suicide screen in widowers",
      why: "Elderly widowers are the classic elevated-suicide-risk demographic — the under-recognised twin of the widow-health focus.",
      correction: "Direct screen at every contact; early widowhood weeks also get the cardiac screen (the takotsubo window).",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Normal grief vs pathological grief: differentiate (the evergreen).",
        "Prolonged grief disorder: the new diagnosis (ICD-11/DSM-5-TR) and its criteria logic.",
        "Cultural factors in Indian mourning and their psychiatric significance.",
        "Complicated grief therapy: principles.",
      ],
      practical: [
        "Explain the dual-process model to a family in four sentences, and say why 'she laughed at the wedding' is good news.",
        "Write your delayed-rites prescription for a migrant who missed his father's terahvin.",
      ],
      longAnswer: [
        "Bereavement: normal and complicated grief, differential diagnosis, management.",
        "The COVID-19 unritualised deaths as the modern Indian-context viva vignette.",
      ],
    },
    neetPg: {
      highYield: [
        "PGD gates: ICD-11 ≥ 6 months; DSM-5-TR ≥ 12 months in adults (≥ 6 months children/adolescents); 'beyond cultural norms' is the comparative clause.",
        "Models to name: Stroebe & Schut's dual-process model (the modern exam favourite); Worden's tasks; continuing bonds (Klass); the Bowlby/Parkes attachment lineage; Kübler-Ross quoted then critiqued.",
        "Prolonged-grief conditional rates: highest after child death (up to ~20% in some series) and violent death.",
        "Grief-specific therapy (Shear's CGT) outperforms antidepressants for the core syndrome; SSRIs treat the depressive component.",
        "Elderly widowers = the classic elevated-suicide-risk group; early widowhood = stress-cardiomyopathy window ('broken heart' has an ICD code).",
        "Death of a parent by natural causes is NOT, by itself, DSM-5 trauma; the violent/witnessed death can be.",
        "Sensing the dead's presence in early grief is normal, not psychotic — the three-mark trap.",
      ],
      pyqConcepts: [
        "The grief–depression–PTSD triangle after violent death.",
        "Disenfranchised grief as a concept with Indian examples (pregnancy loss, suicide stigma, secret relationships).",
        "The unritualised COVID cohort as prolonged-grief risk — the modern Indian viva vignette.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 58-year-old widow 14 months after her husband's death: daily intense yearning at first-day intensity, function collapsed, 6 kg lost — the PGD read with the gate check.",
        "The grieving daughter who laughs at a cousin's wedding then cries all night — the oscillation read, not deterioration.",
        "The widower at week 6 with chest tightness — both the cardiac screen (takotsubo window) and the direct suicide screen in one review.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "PGD gates: 6 months (ICD-11) / 12 months adults (DSM-5-TR).",
        "Normal grief = waves + preserved function; depression = global anhedonia + worthlessness + vegetative collapse.",
        "Presence-sensing in early grief is normal; complicated grief therapy for the frozen picture.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The competent administrator of rites is a high-risk griever, not a protected one — give the eldest son a scheduled breakdown slot and someone watching him after day 13.",
        "Fact-reconstruction retelling (hospital records read together) is the manoeuvre for unseen deaths — the COVID-widow protocol.",
        "Constructed rites are legitimate medicine: delayed observance, the family letter ritual, feeding guests — whenever the family is ready, the work can still run.",
        "Write your institution's bereavement protocol (viewing where possible, a staff member who speaks, no paperwork ambushes): mental-health prevention at source.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The son who ran everything",
      presentation: "41-year-old eldest son, Jaipur — ran his father's entire 13-day funeral flawlessly; on day 16, insomnia, chest tightness and panic at the father's scooter keys; by month 3 still sleeping 4 hours, avoiding the father's room, and 'grieving wrong — I have not cried once'.",
      initialPresentation: "A 41-year-old eldest son in Jaipur, day 16 after his father's death, presenting with insomnia, chest tightness and panic at the sight of the father's scooter keys, having run the entire 13-day funeral flawlessly — priests arranged, a hundred relatives fed daily, bank and property paperwork completed on day 10. By month 3: still 4-hour sleep, avoiding the father's room, functioning at work but 'grieving wrong — I have not cried once; I must not have loved him enough'. Assessment found grief frozen in the restoration room: the work never ran because he was the ritual administrator.",
      history: "No prior psychiatric history; married, two children; the father's death after a short illness; the family praising his competence throughout.",
      examination: "Composed, hyper-functional exterior; sleep 4 hours; appetite reduced; no anhedonia beyond the loss domain; no worthlessness; no suicidal ideation; avoidance confined to the father's room and belongings.",
      diagnosis: "Grief frozen in the restoration room (masked/postponed grief pattern) — the competent-administrator presentation, inside the PGD watch window.",
      management: "Referral to the district psychologist for grief-focused work: scheduled loss-room time, the room re-entered with his younger brother, the scooter eventually donated with a family ceremony; a sleep bridge for 10 nights; the family briefed on why the strongest son is the watched one.",
      outcome: "By month 9: two full crying sessions ('the work finally ran'), sleep restored, function full — no medication beyond the sleep bridge.",
      teachingPoints: [
        "The competent administrator of rites is a high-risk griever, not a protected one.",
        "'Not crying' can mean the work is scheduled, not absent — distinguish by function over weeks.",
        "Behavioural re-entry (the room, the scooter) unlocked what reassurance could not.",
      ],
    },
    {
      title: "The COVID widow at year three",
      presentation: "58-year-old Ludhiana teacher — lost her husband in the 2021 wave: taken by ambulance, admitted through an emergency she could not enter, died unseen eleven days later, cremation attended by five people in a time slot; at year 3, still unable to enter the bedroom, daily 'he will walk in any moment' expectations, teaching on autopilot, 5-hour sleep, 6 kg lost.",
      initialPresentation: "A 58-year-old Ludhiana teacher, three years after losing her husband in the 2021 COVID wave — an unseen death (he was admitted through an emergency she could not enter, dying eleven days later) and an unritualised cremation (five people, a time slot). At year 3: unable to enter the bedroom, daily 'he will walk in any moment' expectations, teaching on autopilot, 5-hour sleep, 6 kg lost, and bitter refusal of all rituals ('what rituals, nobody came'). Well past every gate: prolonged grief disorder with a trauma component.",
      history: "No prior psychiatric history; two adult children, one abroad; the son now assigned as the food/sleep guardian.",
      examination: "Alert, bitter, yearning-dominant; identity-level absorption ('the world ended for me'); sleep 5 hours; weight down 6 kg; no psychotic features; PHQ-9 in the moderate-severe band.",
      diagnosis: "Prolonged grief disorder (well past both gates) with a trauma component from the unseen death.",
      management: "Grief-specific therapy with retelling of the constructed last days — hospital records requested and read together with the therapist (fact reconstruction); a family-constructed substitute rite at year 4 (feeding guests, a delayed observance); SSRI for the depressive layer; the son as the assigned food/sleep guardian.",
      outcome: "At 18 months of follow-up: bedroom re-entered, teaching with presence again, annual sraddha observed.",
      teachingPoints: [
        "Deaths without rites manufacture prolonged grief at industrial scale — the machinery was missing.",
        "Constructed/delayed rites are legitimate medicine.",
        "Fact-reconstruction retelling replaces the missing death-scene knowledge.",
      ],
    },
  ],
  clinicalPearls: [
    "Three pictures, one gate question each: waves with function (normal — protect the process); frozen past the gates (PGD — grief-specific therapy); flat grey collapse (depression — treat as depression).",
    "Gates: ICD-11 ≥ 6 months; DSM-5-TR ≥ 12 months adults; 'beyond cultural norms' is the comparative clause — cite the family's own mourning frame.",
    "'The second year is often harder than the first' — the single most-reassuring true sentence in grief medicine.",
    "Continuing bonds (the tulsi water, the anniversary dish) are healthy lifelong practices, not unfinished mourning.",
    "Presence-sensing in early grief is normal — the three-mark exam trap and the casualty catastrophe when fumbled.",
    "Elderly widowers: screen directly every contact; fresh widows with chest symptoms: cardiac review too (the takotsubo window).",
    "The competent administrator of rites is the high-risk griever — give him a scheduled breakdown slot.",
    "Delayed rites work because the work never ran, not because the date matters.",
  ],
  highYieldSummary: [
    "Grief = waves + oscillation (dual-process model) + continuing bonds; it is the rebuilding process, not an illness.",
    "PGD = frozen first-day intensity + identity absorption + functional collapse, past the 6-month (ICD-11) / 12-month (DSM-5-TR adult) gates, beyond cultural norms.",
    "Depression mates with grief via global anhedonia, worthlessness and vegetative collapse — treat regardless of recency.",
    "Highest-risk bereavements: child death, violent death, suicide loss, disenfranchised and unritualised losses (the COVID cohort).",
    "Treatment: normal grief — protect the process (people, rituals, roles, time); PGD — complicated grief therapy (retelling + approaching + restoration); depression component — SSRIs; never antidepressants for grief per se.",
    "Indian layer: the ritual calendar as treatment architecture; missed-rites migrants; suicide-bereaved stigma; widow health and widowers' suicide risk; the 'not crying' eldest son.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "grief-quiz-1",
      question: "In a 58-year-old widow 14 months after her husband's death, the finding most specific for PROLONGED GRIEF DISORDER rather than normal grief is:",
      options: ["Crying when passing his favourite shop", "Daily intense yearning and identity-level preoccupation at first-day intensity, with function still collapsed", "Dreams of him", "Sadness on the anniversary"],
      correctIndex: 1,
      explanation: "Frozen intensity + functional collapse beyond the gate — the two-hallmark picture.",
      afterSectionId: "diagnosis",
    },
    {
      id: "grief-quiz-2",
      question: "The ICD-11 and DSM-5-TR duration gates for prolonged grief disorder are:",
      options: ["3 months both", "6 months (ICD-11); 12 months in adults per DSM-5-TR", "12 months both", "24 months both"],
      correctIndex: 1,
      explanation: "Know both systems — a favourite 'compare ICD vs DSM' question.",
      afterSectionId: "diagnosis",
    },
    {
      id: "grief-quiz-3",
      question: "The feature that tips a grieving picture toward MAJOR DEPRESSION needing medication is:",
      options: ["Triggered waves of crying", "Presence-sensing experiences", "Persistent anhedonia for ALL domains + worthlessness + neurovegetative collapse", "Talking about the deceased daily"],
      correctIndex: 2,
      explanation: "Global anhedonia and worthlessness belong to depression, not grief.",
      afterSectionId: "differential",
    },
    {
      id: "grief-quiz-4",
      question: "Complicated grief therapy's core components are:",
      options: ["Hypnosis and age regression", "Retelling/approaching the avoided + restoration and goal re-engagement", "Long-term supportive listening without agenda", "Family scapegoat resolution"],
      correctIndex: 1,
      explanation: "The exposure-plus-restoration structure (Shear).",
      afterSectionId: "management",
    },
    {
      id: "grief-quiz-5",
      question: "Sensing the presence of the deceased in early grief should be:",
      options: ["Treated as first-rank psychosis", "Reassured as a normal experience of early grief", "Referred for ECT", "Managed with antipsychotics PRN"],
      correctIndex: 1,
      explanation: "Normal in the first months — a classic misdiagnosis trap worth three marks.",
      afterSectionId: "symptoms",
    },
    {
      id: "grief-quiz-6",
      question: "The Indian clinical situation most strongly associated with prolonged grief in the current era is:",
      options: ["Terahvin observance", "Unritualised COVID-era deaths (unseen deaths, restricted cremations)", "Feeding guests on the death anniversary", "Annual sraddha rites"],
      correctIndex: 1,
      explanation: "The missing-machinery cohort; the rites in the other options are protective.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the three pictures with one signature feature each.", answer: "Normal grief: waves tied to the lost person with function returning (protect the process). Prolonged grief disorder: frozen first-day yearning past the gates with identity absorption and functional collapse (grief-specific therapy). Grief-masking depression: global anhedonia, worthlessness, vegetative collapse, 'join him' ideation (treat as depression, medicine and all).", topic: "Diagnosis" },
    { question: "State the ICD-11 and DSM-5-TR duration gates.", answer: "ICD-11: at least 6 months since the loss. DSM-5-TR: at least 12 months in adults, 6 in children/adolescents. Both add the comparative clause — beyond expected social, cultural or religious norms; cite the family's own mourning frame in writing.", topic: "Diagnosis" },
    { question: "Explain the dual-process model to a family in four sentences, and say why 'she laughed at the wedding' is good news.", answer: "'Grief runs in two rooms: the loss room, where she faces the pain, and the everyday room, where she banks, cooks and laughs. Healthy grieving moves between the two — resting in one, working in the other. Her laughing at the wedding means the everyday room still works, which is exactly what we want. The worry is the person who cannot enter either room.'", topic: "Counselling" },
    { question: "Name the four strongest risk factors for complicated grief.", answer: "Child death (conditional rates up to ~20% in some series); violent death (the trauma hybrid); disenfranchised grief (stigmatised, secret or minimised losses); weak support and missed rites (the migrant who cannot attend, the unritualised COVID cohort).", topic: "Prognosis" },
    { question: "What distinguishes grief-guilt from depression-worthlessness at the bedside?", answer: "Grief-guilt is proportionate and loss-tied ('could I have been there more'), modifiable by facts and comfort. Depression-worthlessness is global and self-directed ('I am a worthless person'), unresponsive to facts, and comes with vegetative collapse and the 'join him' ideation that demands depression-level care.", topic: "Differential" },
    { question: "What are the two components of complicated-grief therapy, and why does exposure belong in it?", answer: "Retelling/approaching the avoided (the death story, the places and belongings) plus restoration work (goal-setting, re-engagement, roles). Exposure belongs because avoidance is what jams the work — the memory of the death and the avoided objects are exactly where the processing has to run.", topic: "Management" },
    { question: "Write your delayed-rites prescription for a migrant who missed his father's terahvin.", answer: "A delayed observance with community — the temple/gurudwara/mosque schedules one on request; a written-letter ritual to the father; a feeding of guests as he would have done. Tell him plainly: the rites are the machinery that runs the work, and the machinery can be run late — it works because the work never ran, not because the date matters.", topic: "Indian practice" },
    { question: "What do you tell a mother, at the miscarriage review, that she will not hear from the joint family?", answer: "'This loss was a person to you, and your grief deserves its own name and time. The family's minimising — you can have another — is exactly why we schedule parents like you for review: come at six weeks, tell us about her, and we will watch the grief run its course properly.'", topic: "Counselling" },
  ],
  faqs: [
    { question: "How long does grief last? When should we worry?", answer: "There is no expiry date, only a direction: healthy grief keeps moving — waves, but the sea between them slowly widens. As a rough cultural compass: waves are expected through the whole first year, anniversaries flare yearly, and the scent of it stays lifelong. What we watch for medically is FREEZING — the same rawness at the first anniversary as the first day, sleep and weight still failing, life still stopped." },
    { question: "Is it normal that he still talks to her photograph?", answer: "Yes, and it may stay healthy for life. Keeping an inner relationship with the dead — the tulsi water, the favourite dish, the photograph spoken to — is called continuing bonds, and it is what most healthy grievers do worldwide. It is illness only when the bond crowds out the living." },
    { question: "She was fine at the function, then cried all night. Is she getting worse?", answer: "That is grief's actual shape — waves, not a slope. The oscillation between facing the loss and living the life is the healthy mechanism itself. Worry, rather, about the person who cannot do either of the two rooms." },
    { question: "Doctor, give her something for the sadness.", answer: "The sadness is not a malfunction to switch off — it is the mind doing the work. Medicines help when the picture turns into depression (sleep and appetite collapse, worthlessness, no laughter anywhere); that is different and treatable. For grief itself, the treatment is people, rituals, time, and sometimes structured grief therapy." },
    { question: "The priest said the terahvin must close the mourning. She is still crying after it.", answer: "Rituals mark the community's arc, not the heart's. Indian observances close the formal mourning period, and many families find the waves persisting for months after — which is normal. If year one still feels like week one at the anniversary, come to us: that specific frozenness has a name and a treatment now." },
    { question: "He has started drinking since his brother died.", answer: "That is the route Indian men often take — alcohol as a nightly anaesthetic that strips the deep sleep which processes loss. Grief plus alcohol is the commonest escalation we see in bereaved men; bring him in on the drinking itself, and the grief work follows." },
    { question: "My son died by suicide. People say such families are punished.", answer: "Nothing about your family is being punished. His death was the outcome of an illness of unbearable pain, not of anything you did or failed to do — and the shame that silence builds is the second injury. Grief after suicide is the hardest grief, and it needs the most support; we have people trained specifically in it." },
    { question: "She is 78 and a widow now. Should we shift her to her son's house in another city immediately?", answer: "Not urgently. Identity, temple, neighbours and routine are her load-bearing walls; stripping them all at once adds relocation loss to attachment loss. A staged plan — visits first, winter stays, then deciding — protects her better than a heroic rescue." },
    { question: "The baby died at 7 months of pregnancy. Everyone says 'forget it, you will have another'.", answer: "This loss was a person to you, and your grief deserves its own name and time. The family's minimising is the reason we schedule a review for parents like you — come at six weeks, tell us about her, and we will watch the grief run its course properly." },
    { question: "We never did the rites properly — the lockdown, the queues. Is that why she cannot move on?", answer: "Yes, in part: that is one of the clearest findings of these years. Rites are the machinery that runs the work; when they are impossible, the work jams. The good news is the machinery can be run late — delayed observances, feeding guests, the letter ritual; whenever the family is ready, the work can still run." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5-TR (APA, 2022) — prolonged grief disorder as a new diagnosis; logic paraphrased, criteria not reproduced" },
      { source: "ICD-11 (WHO, 2019/2022) — prolonged grief disorder 6E22; the 6-month gate", url: "https://icd.who.int/" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.6.5 — source chapter mapped; content rewritten and updated beyond it (2009)" },
      { source: "Worden JW — tasks of mourning; Klass D, Silverman PR & Nickman SL — continuing bonds" },
    ],
    trials: [
      { source: "Shear MK et al. — complicated grief therapy trials and the PCT/CGT RCTs (JAMA Psychiatry / AJP series)" },
      { source: "Prigerson HG et al. — the PG-13 and diagnostic-threshold studies" },
    ],
    reviews: [
      { source: "Stroebe MS & Schut H — the dual-process model of coping with bereavement (Omega / Death Studies)" },
      { source: "Parkes CM — bereavement across cultures; the Bowlby/Parkes attachment lineage" },
      { source: "Boelen PA et al. — cognitive-behavioural conceptualisation of disturbed grief" },
      { source: "Stahl ST & Arnold JL / Manor B — widowers' mortality and suicide risk; the takotsubo/broken-heart literature (Witte et al.)" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416; 1-800-891-4416)" },
      { source: "Worden JW — Children and Grief; Dyregrov A — Grief in Children (child bereavement resources)" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "5 min",
      description: "Plain language: the waves, the second year, the worry signs, and Indian help.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "22 min",
      description: "The three pictures, the gates, the models and the management tiers.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "30 min",
      description: "Full course with the three-picture decision path, the Indian ritual layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "38 min",
      description: "Everything — the delayed-rites craft, the fact-reconstruction protocol, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The waves, the three pictures, the gates and the risk groups.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the three pictures with a signature feature each and the two duration gates." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The amputation phantom, the oscillating labourer, the unfiled and the unspoken.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain the dual-process model to a family and say why 'she laughed at the wedding' is good news." },
    { number: 3, title: "Clinical Practice", description: "Protect the normal, treat the frozen, unmask the postponed, catch the masquerade.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the three-picture gate, deliver the second-year sentence, and know what CGT contains and why exposure belongs in it." },
    { number: 4, title: "Indian Context", description: "The ritual map, the missed-rites migrant, suicide-bereaved families, widow and widower health.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can write a delayed-rites prescription and brief the family on why the strongest son is the watched one." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can answer the gates and presence-sensing questions cold and name the models examiners want." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "DSM-5-TR — prolonged grief disorder criteria logic (paraphrased)", sourceType: "classification", edition: "Text revision", year: "2022", dateReviewed: "2026-09-28" },
    { id: "S2", source: "ICD-11 — prolonged grief disorder (6E22); the 6-month gate", sourceType: "classification", edition: "ICD-11 MMS", year: "2019/2022", locator: "https://icd.who.int/", dateReviewed: "2026-09-28" },
    { id: "S3", source: "New Oxford Textbook of Psychiatry 2e, ch 4.6.5 — source chapter mapped; content rewritten", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Stroebe MS & Schut H — the dual-process model of coping with bereavement", sourceType: "primary", year: "1999 onward", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Worden JW — tasks of mourning; Klass D, Silverman PR & Nickman SL — continuing bonds", sourceType: "textbook", year: "1996–2018 editions", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Shear MK et al. — complicated grief therapy trials (PCT/CGT RCTs, JAMA Psychiatry / AJP series)", sourceType: "trial", year: "2005–2010s", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Prigerson HG et al. — the PG-13 and diagnostic-threshold studies", sourceType: "primary", year: "1995–2020s", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Kersting A et al. / Jordan AH & Litz B — DSM-5 debates and the evidence base for grief diagnoses", sourceType: "review", year: "2010s", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Parkes CM — bereavement across cultures; Bowlby's attachment lineage", sourceType: "textbook", year: "1960s–2010s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Stahl ST & Arnold JL / Manor B — widowers' mortality and suicide risk; Witte et al. — the takotsubo/broken-heart literature", sourceType: "primary", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S11", source: "Boelen PA et al. — cognitive-behavioural conceptualisation and treatment of disturbed grief", sourceType: "primary", year: "2000s–2010s", dateReviewed: "2026-09-28" },
    { id: "S12", source: "Indian context: pandemic-era bereavement studies from Indian departments (IJP correspondence); NMHS 2015–16 framing; Mental Healthcare Act 2017", sourceType: "government", year: "2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "ICD-11 prolonged grief disorder requires at least 6 months since the loss; DSM-5-TR requires at least 12 months in adults and 6 in children/adolescents, with the beyond-cultural-norms comparative clause.", grade: "established", sources: ["S1", "S2"] },
    { text: "The dual-process model (Stroebe & Schut) — oscillation between loss-orientation and restoration-orientation — is the best-validated description of healthy grieving; permanent residence in either room is the pathological shape.", grade: "established", sources: ["S4"] },
    { text: "Continuing bonds (the ongoing inner relationship with the deceased) are a healthy outcome in most grievers, not a failure to mourn.", grade: "established", sources: ["S5"] },
    { text: "Complicated grief therapy (Shear) — retelling/approaching plus restoration components — outperforms antidepressants for the core prolonged-grief syndrome.", grade: "established", sources: ["S6", "S7"] },
    { text: "SSRIs treat the depressive component of bereavement but do not specifically dissolve grief; the honest position is component-treatment.", grade: "supported", sources: ["S6", "S8"] },
    { text: "Prolonged-grief conditional risk is highest after child death (up to ~20% in some series) and violent death; suicide loss adds stigma and blame burden.", grade: "supported", sources: ["S7", "S8"] },
    { text: "Elderly widowers carry the classic elevated suicide risk among the bereaved; early widowhood weeks carry elevated stress-cardiomyopathy (takotsubo) risk.", grade: "supported", sources: ["S10"] },
    { text: "Sensing the deceased's presence in early grief is a normal experience, distinct from psychotic phenomena.", grade: "established", sources: ["S9", "S3"] },
    { text: "Death of a parent by natural causes is not, by itself, DSM-5 trauma; witnessed or violent death can be — the grief-PTSD hybrid after violent deaths is real and both components need treating.", grade: "established", sources: ["S1", "S11"] },
    { text: "Unritualised deaths (unseen bodies, restricted funerals — the COVID cohort) are strongly associated with prolonged grief; constructed or delayed rites are a legitimate clinical intervention.", grade: "supported", sources: ["S12", "S9"] },
    { text: "The amputation-phantom and oscillation stories are teaching syntheses of the attachment-account literature (proposed as mechanism narrative, established as clinical description).", grade: "proposed", sources: ["S9", "S4"] },
    { text: "Children grieve in bursts; euphemistic explanations ('went to sleep') breed fear of sleep; truth in age-shaped doses with one grieving adult who can talk is the practice standard.", grade: "supported", sources: ["S5", "S3"] },
  ],
};
