import type { PsychiatryCourse } from "./types";

/**
 * RECOVERED & FALSE MEMORIES — canonical Psychiatry concept
 * course (migration batch 2, Group E).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/recovered-memories.md — untouched
 * foundation, itself built on Brewin's Oxford ch 4.6.3
 * synthesis), re-researched against the primary literature
 * (Loftus's implantation experiments, Pope & Hudson's and
 * McNally's repression critiques, Gleaves's genuine-recovery
 * synthesis, Lindsay & Read's gradient, the BPS/APA consensus
 * statements) with per-claim provenance.
 *
 * A CONCEPT course (kind: "concept"): the disorder-specific
 * clinical sections are not applicable and are omitted by
 * design — the completion matrix records this, per the
 * learning-system brief's concept-course pattern.
 */
export const recoveredMemoriesCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "recovered-memories",
  title: "Recovered & False Memories",
  shortName: "Trauma Memory",
  kind: "concept",
  category: "Trauma Memory Science",
  groupLetter: "E",
  groupName: "Stress, trauma & dissociation-spectrum",
  learningPath: ["Psychiatry", "Trauma & Stress", "Recovered & False Memories"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  tagline:
    "Recovered memories can be genuine or implanted; the clinician holds a disciplined middle",
  summary:
    "This course examines the evidence on both sides of the recovered-memory controversy, including implantation studies and corroborated recoveries. The practical application is disciplined memory work that avoids suggestion while staying fair to patients and families.",
  estimatedReadTime: "25 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Distinguish the ordinary trauma-memory pattern (details forgotten, occurrence remembered) from the contested complete-forgotten-recovered pattern.",
    "State the false-memory position's claims and its scientific bases: the implantation experiments and the repression critique.",
    "Quote the genuine-recovery evidence: the 20–60% forgetting figures, the three supporting factors, the ~40% corroboration rate.",
    "Explain the neurocognitive reconciliation: inhibition as ordinary memory machinery; the dual stress effect on fear-conditioning and autobiographical memory.",
    "Recite the consensus statements (BPS 1995; APA) and Lindsay and Read's gradient.",
    "Apply the five practice rules: no suggestive memory work; hypnosis safeguards; unusual-cases-only active recovery; the critical attitude; the corroboration discipline.",
    "Recognise the debate's degradation patterns (motive-questioning, credential disparagement, asymmetric scrutiny) and stay neutral.",
    "Apply the Indian layer: family-accusation stakes, the suggestive contexts (past-life regression, faith healing, possession-exorcism), the POCSO disclosure interface.",
  ],
  quickFacts: [
    { label: "The typical pattern", value: "Details fade, occurrence stays", detail: "Forgetting details of the event or one's reactions while remembering that it occurred — the ordinary trauma-memory pattern; the controversy begins at COMPLETE forgetting" },
    { label: "Forgetting evidence", value: "20–60%", detail: "Of child-abuse reporters across 20+ longitudinal and retrospective studies describe periods of years when they could not remember the abuse" },
    { label: "Corroboration", value: "~40%", detail: "Of clinician-reported recovered memories carry corroborative evidence (confessions, other victims, court records) — criticised in quality, hard to dismiss wholesale" },
    { label: "Laboratory implantation", value: "25–30%", detail: "Apparent childhood memories of single non-abusive events successfully implanted in a quarter to a third of subjects, particularly the highly hypnotisable or suggestible" },
    { label: "The repression verdict", value: "Forgetting real, mechanism unsupported", detail: "Pope, Hudson, McNally: no credible scientific support for 'repression' as a mechanism — the honest splitting of the question" },
    { label: "The consensus", value: "Both occur", detail: "BPS 1995 and the APA Working Group: traumatic events can be forgotten and recovered, sometimes essentially accurately — and such 'memories' can also be false in whole or part" },
    { label: "The gradient", value: "Lindsay & Read", detail: "Spontaneously recovered memories of common abuse: few grounds for doubt; suggestion-derived memories from initially-denying patients: scepticism; the grey zone between: experts disagree" },
  ],
  knowledgeGraph: [
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "Amnesia is a PTSD feature; the fragment-without-context memory signature is this course's neuroscience" },
    { label: "Acute Stress Reactions", type: "condition", href: "/psychiatry/acute-stress-reaction/", note: "The peritraumatic recording failure — dissociation marking the memory that never filed properly" },
    { label: "Depersonalization / Derealization Disorder", type: "condition", href: "/psychiatry/depersonalization-disorder/", note: "The detachment half of the dissociation spectrum; this course covers the compartmentalisation half (amnesia)" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The rumination-versus-retrieval distinction at the memory clinic's edge" },
    { label: "Neurotransmitters", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The catecholamine mechanisms of the dual stress effect — enhanced fear conditioning, impaired autobiographical memory" },
    { label: "Hippocampus", type: "brain-region", href: "#brain", note: "The contextual binder whose failure leaves fragments without time-and-place stamps" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The fear-conditioning engine that strengthens under extreme stress" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The reconciliation runs through ordinary memory science. First, inhibition is normal machinery: ordinary memory relies as much on the ability to suppress unwanted material as on the ability to access it — experimental retrieval-inhibition studies demonstrate the mechanism, and a subgroup of people show persistently poor memory for negative experiences. Second, the emotion-memory circuitry gives reason to believe memory behaves differently under extreme real-world stress than in laboratory experiments: extraordinarily high catecholamine levels, perhaps with cortisol-release failure, can produce amnesia — the specific proposal being that extreme stress produces simultaneously ENHANCED fear conditioning (the amygdala's unforgettable fragment) and IMPAIRED autobiographical memory (the hippocampal context that never binds). That dual effect is the PTSD signature as neuroscience: the event unforgettable in pieces, unlocatable in place and time. The laboratory cannot ethically reproduce it (no one has attempted abuse implantation experimentally, and plausibility gates suggestibility) — which is precisely why the debate resists clean settlement and why the practice rules exist.",
    steps: [
      "Start with ordinary memory: reconstructive, not recorded; source confusion is a daily event; imagined events can acquire the feel of remembered ones.",
      "Inhibition is part of the machinery: suppressing unwanted material is an ordinary cognitive act, demonstrable experimentally — forgetting does not require a special mechanism called 'repression'.",
      "Under extreme stress the system splits: catecholamine surge (perhaps with cortisol failure) enhances amygdala-driven fear conditioning while impairing hippocampal contextual binding.",
      "The result: the traumatic event stored as unforgettable sensory fragments without a time-and-place stamp — the clinical picture PTSD presents.",
      "The laboratory distance: implantation experiments use plausible single non-abusive events; no one has attempted abuse implantation; plausibility gates suggestibility — the extrapolations run in both directions and neither side's extreme holds.",
      "The practice consequence: since no one can distinguish a genuinely recovered memory from a suggested one by its vividness alone, the discipline falls to HOW the memory surfaced — the gradient — and to process safeguards, not to intuition.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "amygdala", name: "Amygdala", role: "Fear conditioning strengthened by extreme stress — the engine of the unforgettable fragment.", grade: "supported" },
    { id: "hippocampus", name: "Hippocampus", role: "Contextual binding impaired under extreme stress — the missing time-and-place stamp that leaves fragments unlocatable.", grade: "supported" },
    { id: "pfc", name: "Prefrontal cortex", role: "Retrieval inhibition — the ordinary machinery of suppressing unwanted material; its existence undermines the need for a special 'repression' mechanism.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Norepinephrine", symbol: "NE", role: "The catecholamine surge of extreme stress — the proposed driver of the dual effect (enhanced fear conditioning with impaired contextual memory).", grade: "supported", drugConnection: "The propranolol memory-reconsolidation research line is adjacent but distinct — no KYP lesson exists (recorded honestly as beyond this course's scope)." },
    { name: "Cortisol", symbol: "CRT", role: "The proposed failure point: cortisol-release failure under extreme stress may contribute to the amnesic half of the dual effect.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "rm-dual-stress",
      name: "The dual stress effect",
      steps: [
        { label: "Extreme stress event", detail: "Catecholamine surge, perhaps cortisol-release failure" },
        { label: "Amygdala track strengthens", detail: "Fear conditioning enhanced — the unforgettable fragment" },
        { label: "Hippocampal track weakens", detail: "Contextual binding impaired — no time-and-place stamp" },
        { label: "The dissociated trace", detail: "Unforgettable in pieces, unlocatable in context — the PTSD memory signature" },
        { label: "Later partial return", detail: "Fragments and reactions can resurface with or without therapy — mechanism ordinary, not 'repression'" },
      ],
      clinicalManifestation: "PTSD's amnesia-plus-flashbacks picture; the trauma remembered in pieces that lack contextual anchoring.",
      grade: "supported",
    },
    {
      id: "rm-suggestion",
      name: "The suggestion pathway (the implantable memory)",
      steps: [
        { label: "Sustained suggestive context", detail: "A therapist, a regression programme, an exorcist — someone has decided what the symptoms mean" },
        { label: "Plausible scenario offered", detail: "'These feelings usually mean something happened in childhood'" },
        { label: "Imaginative elaboration", detail: "Visualization, dream interpretation, body 'memories' rehearsed as narrative" },
        { label: "Source monitoring fails", detail: "The imagined acquires the feel of the remembered — the laboratory's 25–30%" },
        { label: "Certainty crystallises", detail: "The patient now defends the memory as fact; the family fracture completes" },
      ],
      clinicalManifestation: "A confident, emotionally intense 'memory' whose origin trace runs through suggestion — indistinguishable from genuine recovery by vividness alone.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "rm-1980s", time: "Late 1980s–early 1990s", title: "The recovered-memory therapy era", description: "Therapists using hypnosis, 'memory work' and guided imagery to 'recover' suspected abuse; accusations multiplying after therapy begins; families disrupted.", phase: "onset" },
    { id: "rm-1993", time: "1993", title: "Loftus's founding paper", description: "'The reality of repressed memories' (Am Psychol) sets out the false-memory position and the malleability evidence; the False Memory Syndrome Foundation and its British counterpart organise the accused-families' side.", phase: "peak" },
    { id: "rm-1995", time: "1995", title: "The consensus documents", description: "The BPS Working Party and the APA Working Group interim statement land the disciplined middle: genuine recovered memories occur, false ones occur; safeguards and neutrality required.", phase: "peak" },
    { id: "rm-2000s", time: "2000s", title: "The evidence matures", description: "Gleaves's synthesis and the forget/recovery studies consolidate the genuine-recovery evidence; McNally's 'Remembering Trauma' consolidates the sceptical reading; the Pope–dissociative-amnesia exchange exemplifies the definitional stalemate.", phase: "recovery" },
    { id: "rm-today", time: "Now", title: "Practice consequences", description: "Recovered-memory therapy almost vanished from mainstream practice; suggestive situations are still acknowledged as capable of inducing false memories; the Indian layer: past-life-regression programmes and faith-healing contexts carry the same suggestion risk.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: management + patient education) ---- */
  management: [
    {
      category: "psychotherapy",
      name: "The critical-accepting stance",
      description: "A patient recovering trauma material needs neither enthusiastic confirmation nor dismissal: listen, document, support, and withhold judgement — the stance the consensus mandates. Take the suffering seriously while withholding truth-certification: the twin perils are uncritical acceptance and summary dismissal.",
      whenToUse: "Every recovery presentation, from the first session.",
      indianContext: "The neutrality protects both the possibly-abused patient and the possibly-falsely-accused family; an incest accusation in a joint family ruptures the household economy and the marriage network — the clinician's discipline is the daily protection of everyone involved.",
    },
    {
      category: "psychotherapy",
      name: "The no-suggestion rule (absolute)",
      description: "Never tell a patient what their symptoms 'must mean' about childhood; memory work follows the material, never leads it. This is the single practice rule that prevents the manufacture of false memories — and it is explicit teaching, not assumed subcultural knowledge.",
      whenToUse: "Every session, every patient, forever.",
      indianContext: "The Indian therapy-training gap (few formal psychotherapy supervisions) makes this rule's explicitness more important, not less; the suggestive contexts (regression programmes, possession-exorcism rituals, some faith-healing) are sustained-suggestion situations with implantation potential.",
    },
    {
      category: "psychotherapy",
      name: "Safeguards for hypnosis and guided imagery",
      description: "Hypnosis increases suggestibility and confabulation without improving accuracy — it is not a memory-uncovering instrument. The guidelines permit it only with explicit safeguards against suggestive influence, and never as a recovery tool. Active recovery attempts are appropriate only in unusual cases with both parties aware of the false-memory risk.",
      whenToUse: "Whenever hypnosis or imagery is contemplated near trauma material.",
      indianContext: "Past-life-regression programmes marketed in Indian metros sit exactly here: the 'memories' they produce deserve the gradient's sceptical end by default.",
    },
    {
      category: "lifestyle",
      name: "The corroboration discipline",
      description: "Where memories carry legal consequences, corroboration is sought properly — records, witnesses, other victims — not assumed, and not dismissed. The expert's court role is the memory-science educator (reconstructive memory; the corroboration standard), never the memory's confirmer.",
      whenToUse: "Whenever legal or family consequences flow from a recovered memory.",
      indianContext: "POCSO's mandatory reporting meets recovered memories at the disclosure interface: the child's spontaneous statement carries evidentiary primacy (forensic interviewing standards); the adult recovery discovered years later navigates the corroboration channel instead.",
    },
    {
      category: "psychotherapy",
      name: "Treat the presenting distress, sequence the memory work",
      description: "The Indian PTSD populations' treatment programmes embody this course's science without naming the controversy: TF-CBT's pacing — processing when stable, not excavating under crisis. The flashbacks caution: even vivid traumatic memories can be partly inaccurate; treat the suffering as real and the content as probably-but-not-certainly true.",
      whenToUse: "All trauma-spectrum treatment planning.",
      indianContext: "The disaster, conflict and displacement cohorts present the fragment-without-context pattern; their programmes' stability-first sequencing is the practice translation of the dual-stress neuroscience.",
    },
  ],
  drugLinks: [],
  contentGaps: [
    "The memory-reconsolidation pharmacology line (propranolol research) is beyond this course's clinical scope and has no KYP drug lesson — recorded honestly rather than gestured at.",
  ],
  patientGuide: {
    whatIsIt:
      "A field of knowledge, not an illness: what science knows about how traumatic memories are stored, forgotten, remembered — and sometimes unintentionally created. It matters to you if memories from your past have been surfacing, or if a therapist or healer has been suggesting what your symptoms 'really' mean.",
    whatCausesIt:
      "Extreme stress stores events differently: unforgettable in emotional pieces, weak in time-and-place detail. Because all memory is reconstructive, vividly-felt memories can be genuine recoveries, ordinary reconstructions, or — under sustained suggestion — implanted narratives. No test distinguishes them by vividness alone.",
    symptoms:
      "Not applicable as an illness; the relevant experiences are memory fragments returning, amnesia for parts of overwhelming events, or new 'memories' emerging during therapy, regression programmes or healing rituals.",
    treatment:
      "The discipline, not a prescription: a good clinician listens and supports without leading, never tells you what your symptoms must mean about your childhood, avoids hypnosis as a memory tool, and — where legal consequences might flow — helps corroboration follow its proper channel. Your suffering is taken seriously throughout, whichever way the question of the memory's accuracy resolves.",
    selfHelp: [
      "Let memories surface at their own pace; the harder the digging, the less trustworthy the yield.",
      "Be cautious with programmes and practitioners that promise to 'recover' memories or diagnose your past.",
      "Keep a plain diary of what surfaced, when, and in what context — it serves any later corroboration and your own clarity.",
      "Your distress is real and treatable regardless of the memory question; therapy for the suffering does not require settling the history first.",
    ],
    whenToSeekHelp: [
      "Memories surfacing in ways that overwhelm or destabilise you",
      "Anyone — therapist, healer, regression programme — telling you what your symptoms 'must mean' about your past",
      "Legal or family confrontation being considered on the basis of a recovered memory",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages) for stabilisation support",
      "District hospital psychiatry OPD under DMHP for trauma-spectrum care",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No Indian-specific guideline; the BPS/APA consensus documents and the Lindsay–Read gradient are the working instruments, with forensic interviewing standards governing child disclosure (POCSO interface).",
    systemContext: "The controversy arrives in India with the same stakes — family accusations, legal proceedings — but different dynamics: family collectivism means an incest accusation in a joint family ruptures the household economy and the marriage network, making the clinician's neutrality the protection of everyone involved.",
    programmeContext: "Indian PTSD treatment programmes (disaster, conflict, displacement) already embody the science — stability before processing; the DMHP/tele-mental-health tier can deliver the stabilisation-first discipline.",
    costConsiderations: "The corroboration channel is the affordable one: records and witnesses cost time, not therapy fees; regression programmes cost money and credibility — the gradient's sceptical end applies to what they produce.",
    culturalConsiderations: "The suggestive contexts abound: hypnosis-flavoured faith-healing, possession-exorcism rituals, past-life-regression programmes marketed in Indian metros — all sustained-suggestion situations with implantation potential. A patient presenting 'recovered' material after such exposures deserves the gradient's sceptical end. Honour what ritual and faith do for meaning and comfort; keep the memory-science line distinct: what calms is not what confirms.",
    patientCounselling: [
      "The consultation discipline script: 'Take it seriously, withhold certification: we listen, document, support, and maintain the critical attitude — spontaneously recovered memories have few grounds for doubt; therapy-work-derived memories warrant careful examination; corroboration follows its own proper channel.'",
      "For families facing an accusation: the expert's role is the memory-science educator — reconstructive memory, the corroboration standard — never the memory's confirmer or its executioner.",
      "For the therapist-in-training: the no-suggestion rule is explicit teaching in India precisely because formal supervisions are scarce; the rule is the syllabus.",
      "For the POCSO interface: the child's spontaneous statement carries evidentiary primacy; the adult-recovery counterpart navigates corroboration — the gradient applies across the age range.",
      "The flashbacks caution for every trauma patient: even vivid memories can be partly inaccurate — treat the suffering as real, the content as probably-but-not-certainly true.",
    ],
  },
  decisionPath: {
    title: "The gradient gate (how did the memory surface?)",
    nodes: [
      {
        id: "start",
        question: "A patient presents with a recovered or recovering traumatic memory. How did it surface?",
        branches: [
          { label: "Spontaneously, outside therapy", next: "credible" },
          { label: "During suggestive work (regression, hypnosis, 'memory work')", next: "sceptical" },
          { label: "Partly both / unclear", next: "grey" },
        ],
      },
      {
        id: "credible",
        question: "Spontaneously recovered memory of a common-form trauma, or recovered details of never-forgotten abuse?",
        branches: [
          { label: "Yes", next: "few-doubts" },
          { label: "Unusual form", next: "grey" },
        ],
      },
      { id: "few-doubts", question: "Few grounds for doubt.", recommendation: "Take it seriously; treat the trauma-spectrum consequences (see the PTSD course); where legal consequences flow, corroboration follows its proper channel — never assumed, never dismissed." },
      { id: "sceptical", question: "Suggestion-derived, initially-denying.", recommendation: "Scepticism by default: document the suggestive exposure; do not certify the content; treat the presenting distress; if legal stakes exist, the corroboration standard and the memory-science educator role apply. The sustained-suggestion situation is acknowledged as capable of inducing false memories." },
      { id: "grey", question: "The grey zone.", recommendation: "Experts will disagree — that is the honest position. Maintain the critical-accepting stance; follow the material without leading; re-review; treat by need. The gradient exists precisely because this zone resists settlement." },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Enthusiastically confirming a therapy-recovered memory to validate the patient",
      why: "Uncritical acceptance is one of the twin perils: it can cement a false memory, fracture a family on the strength of a suggestion, and put the clinician's credibility behind content nobody can certify.",
      correction: "The critical-accepting stance: validate the suffering, withhold the certification, document the context of recovery.",
    },
    {
      mistake: "Dismissing every recovered memory as 'false memory syndrome'",
      why: "Summary dismissal is the other peril: the genuine-recovery evidence is far more extensive than the false-memory evidence; a dismissed survivor loses treatment for real trauma.",
      correction: "The gradient: spontaneous recoveries of common abuse forms have few grounds for doubt; the scepticism belongs to suggestion-derived material from initially-denying patients.",
    },
    {
      mistake: "Using hypnosis or guided imagery to 'recover' memories",
      why: "Hypnosis increases suggestibility and confabulation without improving accuracy — it manufactures confidence, not truth.",
      correction: "Hypnosis only with explicit safeguards and never as the memory-uncovering instrument; active recovery only in unusual cases with both parties aware of the false-memory risk.",
    },
    {
      mistake: "Telling the patient what their symptoms 'must mean' about childhood",
      why: "This is the implantation mechanism in one sentence — the laboratory's scenario-offering, scaled to the clinic.",
      correction: "The no-suggestion rule is absolute: memory work follows the material, never leads it.",
    },
    {
      mistake: "Certifying a recovered memory's accuracy for a court",
      why: "No one can distinguish genuine from suggested recovery by vividness; the expert who certifies has left the science.",
      correction: "The expert's role is the memory-science educator — reconstructive memory, the corroboration standard — never the memory's confirmer.",
    },
    {
      mistake: "Treating a vivid flashback's every detail as established fact",
      why: "Even genuinely-traumatic vivid memories can be partly inaccurate — the caution applies to all trauma work.",
      correction: "Treat the suffering as real and the content as probably-but-not-certainly true; the distinction costs nothing therapeutically.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The typical trauma-memory pattern versus the contested complete-forgetting boundary.",
        "The false-memory position's central claim and the laboratory implantation findings.",
        "The 20–60% forgetting evidence, the three supporting factors, and the 40% corroboration figure.",
        "The BPS/APA consensus statements and Lindsay and Read's gradient.",
      ],
      practical: [
        "State the five practice rules and apply them to a therapy-recovered memory vignette.",
        "Explain in one sentence why hypnosis is not a memory-recovery tool.",
      ],
      longAnswer: [
        "The recovered-memory controversy: the evidence on both sides and the consensus discipline.",
        "Trauma memory and its neurobiology: the dual stress effect and its clinical correlates.",
      ],
    },
    neetPg: {
      highYield: [
        "Ordinary pattern: details forgotten, occurrence remembered — the controversy begins at complete forgetting.",
        "Implantation: 25–30% of subjects, particularly the highly hypnotisable/suggestible.",
        "Forgetting: 20–60% of abuse reporters across 20+ studies; ~40% of clinician-reported recoveries corroborated.",
        "Repression verdict: forgetting real, mechanism unsupported (Pope/Hudson/McNally).",
        "Dual stress effect: enhanced fear conditioning + impaired autobiographical memory — the PTSD signature.",
        "Consensus: genuine and false recovered memories both occur (BPS 1995; APA Working Group).",
        "Gradient: spontaneous = credible; suggestion-derived = sceptical; grey between = experts disagree.",
      ],
      pyqConcepts: [
        "The dissociative-amnesia definitional debate (the Pope exchange) as the exemplar of the field's unsettled edges.",
        "Amnesia as a PTSD criterion-adjacent feature — the fragment-without-context storage.",
        "Malingering versus dissociative amnesia versus ordinary fragmentation — the forensic triangle.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A patient 'recovers' abuse memories during past-life-regression sessions — the gradient's sceptical end plus the presenting-distress treatment.",
        "A survivor spontaneously remembers an unreported childhood event years later — the few-grounds-for-doubt end plus the corroboration channel.",
        "A lawyer asks you to certify that a recovered memory is true — the memory-science educator role, declined certification.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Both genuine and false recovered memories occur — the consensus.",
        "Hypnosis is not a memory-recovery tool; no suggestive memory work.",
        "Spontaneous = credible; suggestion-derived = sceptical.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The debate's degradation patterns (motive-questioning, credential disparagement, asymmetric scrutiny) are themselves a lesson in reading contested literatures — recognise them and stay neutral.",
        "Every study in this field has flaws; the honest reading is the uncomfortable middle, and teaching it to trainees is the professional inheritance of the controversy.",
        "The Indian suggestive contexts (regression programmes, exorcism rituals, some faith-healing) make the no-suggestion rule a live clinical boundary here, not a historical footnote.",
        "Document the context of recovery (where, when, under what suggestive exposure) as meticulously as the content — in court, the gradient question will be asked.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The regression that found a father",
      presentation: "26-year-old Bengaluru marketing executive — presented 'memories' of childhood incest recovered across six past-life-regression sessions, seeking a certificate for a family confrontation.",
      initialPresentation: "A 26-year-old marketing executive, presenting after six sessions of a past-life-regression programme with 'clear memories' of childhood incest by her father — images that had 'opened up' during guided regression, elaborated session by session. She had entered the programme for insomnia and a sense that 'something from childhood must explain this', a framing the programme had encouraged. The memories were vivid, emotionally intense, and previously entirely absent from her history — she had described a warm relationship with her father at intake two years earlier. She now sought a certificate to support a family confrontation.",
      history: "Insomnia and dysthymic symptoms for 18 months; no prior trauma disclosures; the regression programme was self-booked after an Instagram advertisement.",
      examination: "Distressed, articulate, entirely convinced; the 'memories' narrated with sensory detail and mounting certainty; no PTSD cluster architecture around a specific incident.",
      diagnosis: "Suggestion-derived recovered memory material (the gradient's sceptical end) presenting with genuine distress — the therapeutic target being the distress and the process discipline, not the content.",
      management: "The critical-accepting stance: distress validated, certification declined, the gradient explained in plain words; the suggestive-exposure context documented; stabilisation-focused therapy for the insomnia and dysthymia; the family confrontation counselled to wait while corroboration questions are honestly framed.",
      outcome: "Over four months of stability-first work, the insomnia and mood improved; the memory narrative's certainty softened without confrontation or rupture; family relationships preserved pending the proper channels.",
      teachingPoints: [
        "The suggestion pathway is alive in Indian commercial regression programmes — document the exposure.",
        "Validate the suffering, withhold the certification — both at once, every session.",
        "Declining the certificate is not dismissing the patient; done with respect, it keeps every later door open.",
      ],
    },
    {
      title: "The letter that was already in the drawer",
      presentation: "44-year-old Lucknow teacher — spontaneously remembered a previously-unspoken adolescent episode while sorting her late mother's letters; the memory was coherent, non-sought, and later corroborated by a cousin.",
      initialPresentation: "A 44-year-old teacher, presenting for help with distress that arose after a spontaneous memory: while sorting her late mother's letters, she read a note that named a relative's adolescent transgression against her — an episode she had not thought of for decades but recognised instantly as true, with the emotional weight arriving over the following days. She had not been in therapy, had sought no recovery of anything, and wanted help with the upheaval, not with the truth question.",
      history: "No suggestive exposures — no therapy, no regression, no hypnotic work; the trigger was the letter itself.",
      examination: "Distressed but grounded; the memory narrated as recognition rather than construction; partial, contextual, and consistent with documented family geography of the period.",
      diagnosis: "Spontaneously recovered memory at the gradient's credible end, presenting with genuine trauma-spectrum distress.",
      management: "The few-grounds-for-doubt lane: the memory taken seriously, the distress treated (stabilisation, then structured processing as needed); her chosen corroboration conversation with a cousin supported; no certification offered or demanded — none was needed.",
      outcome: "The cousin corroborated key elements; the processing work completed over ten sessions; the family handled the matter privately and on their own terms.",
      teachingPoints: [
        "Spontaneous recovery outside any suggestive context is the gradient's credible end — few grounds for doubt.",
        "Recognition-versus-construction is the phenomenological tell examiners can ask about.",
        "Treatment is for the distress; the truth question resolves through its own proper channels when it resolves at all.",
      ],
    },
  ],
  clinicalPearls: [
    "The controversy begins at COMPLETE forgetting — the ordinary pattern stops short of it.",
    "Forgetting is real (20–60% of abuse reporters); 'repression' as a mechanism is unsupported — split the question honestly.",
    "Laboratory implantation succeeds in 25–30% — and no one has attempted abuse implantation; the extrapolation gaps cut both ways.",
    "Three supporting factors for genuine recovery: non-abuse-trauma memories, pre-therapy recoveries, ~40% corroboration.",
    "The dual stress effect — enhanced fear conditioning with impaired autobiographical memory — is the neuroscience of the PTSD signature.",
    "The consensus: both genuine and false recovered memories occur; the twin perils are uncritical acceptance and summary dismissal.",
    "The gradient: spontaneous = credible; suggestion-derived = sceptical; the grey zone is honestly unsettled.",
    "No suggestive memory work; hypnosis only with safeguards; corroboration through its proper channel; the expert educates, never certifies.",
  ],
  highYieldSummary: [
    "Ordinary trauma memory: details forgotten, occurrence remembered; the contested zone is complete forgetting with later recovery.",
    "False-memory position: therapeutic suggestion can produce confident false memories (25–30% lab implantation; Loftus; FMSF); repression lacks credible support (Pope/Hudson/McNally).",
    "Genuine-recovery evidence: 20–60% of abuse reporters describe years of forgetting; recoveries before therapy; non-abuse-trauma memories; ~40% corroboration (Gleaves synthesis).",
    "Neurocognitive reconciliation: inhibition is ordinary machinery; extreme stress = enhanced fear conditioning + impaired autobiographical memory.",
    "Consensus (BPS 1995; APA): both genuine and false recovered memories occur; Lindsay–Read's gradient is the working instrument.",
    "Five practice rules: no suggestive memory work; hypnosis safeguards; unusual-cases-only active recovery; the critical attitude toward any post-amnesia memory; the corroboration discipline.",
    "Indian layer: joint-family accusation stakes; regression/exorcism/faith-healing as the suggestive contexts; the POCSO spontaneous-statement interface.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "rm-quiz-1",
      question: "The ordinary pattern of trauma memory (as opposed to the contested pattern) is:",
      options: ["Complete forgetting of the event with later total recovery", "Forgetting details of the event or one's reactions while remembering that the event occurred", "Perfect memory", "Only physical symptoms"],
      correctIndex: 1,
      explanation: "The controversy begins specifically at complete forgetting (especially of abuse) with later recovery; the typical pattern stops short of that.",
      afterSectionId: "mechanism",
    },
    {
      id: "rm-quiz-2",
      question: "Laboratory implantation studies have successfully created apparent childhood memories of single non-abusive events in approximately:",
      options: ["1% of subjects", "25–30% of subjects (particularly those high in hypnotisability or suggestibility)", "100% of subjects", "No subjects"],
      correctIndex: 1,
      explanation: "The malleability evidence — with the critics' counters (plausibility gating; the laboratory-clinic distance; no abuse-implantation attempts) qualifying its extrapolation.",
      afterSectionId: "mechanism",
    },
    {
      id: "rm-quiz-3",
      question: "The three factors supporting genuine recovered memories are:",
      options: ["Therapist conviction, patient enthusiasm, family disruption", "Recovered memories of non-abuse traumas; recoveries before any therapy; ~40% corroboration in clinician-reported cases", "Hypnosis results, dream content, body sensations", "Legal victories, media reports, best-selling books"],
      correctIndex: 1,
      explanation: "Each factor strains the pure-suggestion account; the corroboration (confessions, other victims, court records) is criticised in quality but hard to dismiss wholesale.",
      afterSectionId: "management",
    },
    {
      id: "rm-quiz-4",
      question: "The consensus position of the BPS and APA working parties (1995) is:",
      options: ["All recovered memories are false", "All recovered memories are true", "Traumatic events can be forgotten and recovered from total amnesia, sometimes essentially accurately — and such memories can also be false in whole or part", "The question is unanswerable and should be ignored"],
      correctIndex: 2,
      explanation: "The disciplined middle, with Lindsay and Read's gradient as its working instrument.",
      afterSectionId: "diagnosis",
    },
    {
      id: "rm-quiz-5",
      question: "The proposed neurobiological account of traumatic amnesia holds that extreme stress produces:",
      options: ["Enhanced fear conditioning together with impaired autobiographical memory", "Global memory enhancement", "Immunity to forgetting", "Only physical pain"],
      correctIndex: 0,
      explanation: "The dual effect: unforgettable fragments without contextual binding — the PTSD memory signature as neuroscience.",
      afterSectionId: "brain",
    },
    {
      id: "rm-quiz-6",
      question: "Good clinical practice with recovered memories includes all EXCEPT:",
      options: ["No suggestive memory work", "Hypnosis and guided imagery only with safeguards against suggestive influence", "A critical attitude toward any post-amnesia memory, including vivid flashbacks", "Enthusiastic confirmation of the memory's truth to validate the patient"],
      correctIndex: 3,
      explanation: "The twin perils are uncritical acceptance and summary dismissal; the validating move is taking the suffering seriously while withholding truth-certification.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "State the ordinary trauma-memory pattern versus the contested pattern.", answer: "Ordinary: forgetting details of the event or one's reactions while remembering that the event occurred. Contested: COMPLETE forgetting of events (especially child abuse) with later recovery — the boundary where the controversy begins.", topic: "Concepts" },
    { question: "Quote the forgetting evidence, the three supporting factors, and the corroboration figure.", answer: "20–60% of child-abuse reporters across 20+ studies describe periods of years of forgetting. Supporting factors: recovered memories of non-abuse traumas (suggestion can't explain); recoveries before any therapy; ~40% of clinician-reported recoveries corroborated (confessions, other victims, court records) — quality criticised, wholesale dismissal implausible.", topic: "Evidence" },
    { question: "The repression verdict in one sentence.", answer: "Forgetting is real; 'repression' as a mechanism is unsupported — Pope, Hudson and McNally's critique splits the question honestly, and the honest answer keeps both halves.", topic: "Concepts" },
    { question: "State the dual stress effect and what clinical picture it explains.", answer: "Extreme stress produces simultaneously enhanced fear conditioning (the amygdala's unforgettable fragment) and impaired autobiographical memory (the hippocampal context that never binds) — the PTSD signature: the event unforgettable in pieces, unlocatable in place and time.", topic: "Neuroscience" },
    { question: "Recite the consensus statements and Lindsay and Read's gradient.", answer: "BPS 1995 / APA Working Group: traumatic events can be forgotten and recovered from total amnesia, sometimes essentially accurately, and such 'memories' can also be false in whole or part. Gradient: spontaneously recovered memories of common abuse forms — few grounds for doubt; suggestion-derived memories from initially-denying patients — scepticism; the grey zone between — experts will disagree.", topic: "Consensus" },
    { question: "Name the five practice rules.", answer: "(1) No suggestive memory work — follow, never lead; (2) hypnosis and guided imagery only with safeguards, never as recovery tools; (3) active recovery attempts only in unusual cases with both parties aware of the false-memory risk; (4) the critical attitude toward ANY post-amnesia memory, vivid flashbacks included; (5) the corroboration discipline — proper channels, never assumed, never dismissed.", topic: "Practice" },
    { question: "What Indian contexts raise the suggestion risk, and how do you counsel them?", answer: "Past-life-regression programmes marketed in metros; possession-exorcism rituals; hypnosis-flavoured faith-healing — all sustained-suggestion situations with implantation potential. Counsel: the gradient's sceptical end for material surfacing under such exposure; document the exposure; treat the presenting distress; the no-suggestion rule as explicit teaching.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Can someone really forget abuse and remember it years later?", answer: "Yes: between a fifth and two-thirds of abuse reporters in research describe years of forgetting, recoveries occurring before therapy and with corroboration in about 40% of clinician-reported cases. The phenomenon is real — even though the mechanism ('repression') remains unproven." },
    { question: "Can a therapist accidentally create a false memory?", answer: "Yes, in sustained suggestion conditions: therapists who decide abuse must underlie the symptoms and pressure the patient to remember — laboratory implantation succeeds in a quarter of suggestible subjects. The risk is exactly why suggestive memory work is now prohibited practice." },
    { question: "My patient suddenly remembers abuse — do I believe her?", answer: "Take it seriously and withhold certification: listen, document, support, and maintain the critical attitude the consensus requires. Spontaneously recovered memories have few grounds for doubt; therapy-work-derived memories from initially-denying patients warrant scepticism; corroboration follows its own proper channel." },
    { question: "Is a vivid flashback necessarily accurate?", answer: "Not in every detail: even highly vivid traumatic memories can be misleading or partly wrong. Treat the suffering as real and the content as probably-but-not-certainly true — the distinction costs nothing therapeutically." },
    { question: "Why is it so hard to settle this debate scientifically?", answer: "Because the crucial studies — implanting abuse memories, verifying decades-old recoveries — cannot ethically or practically be run. The debate's heat comes from real families destroyed on both sides, and the science supports the uncomfortable middle: both genuine recovered memories and false implanted memories occur." },
    { question: "Should we use hypnosis to help her remember?", answer: "Not as a recovery tool: hypnosis increases suggestibility and confabulation without improving accuracy. The guidelines permit it only with explicit safeguards, and never as the memory-uncovering instrument." },
    { question: "Does trauma memory work differently from ordinary memory?", answer: "Probably: extreme stress may simultaneously strengthen fear learning (the unforgettable fragment) and weaken contextual-autobiographical binding (the missing context) — the neuroscience explaining PTSD's signature: the event unforgettable in pieces, unlocatable in place and time." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "British Psychological Society Working Party on Recovered Memories — the 1995 consensus document" },
      { source: "American Psychological Association Working Group — the 1995 interim statement on recovered memories" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.6.3 (Brewin) — source chapter mapped; content rewritten (2009)" },
      { source: "McNally RJ — Remembering Trauma (Harvard University Press, 2003): the sceptical synthesis" },
      { source: "Davies GM & Dalgleish T (eds.) — Recovered Memories: Seeking the Middle Ground (Wiley, 2001)" },
    ],
    trials: [
      { source: "Loftus EF — the implantation-experiment tradition and 'The reality of repressed memories' (Am Psychol, 1993)" },
      { source: "Pope HG & Hudson JI — the repression-critique reviews; the dissociative-amnesia exchange" },
    ],
    reviews: [
      { source: "Gleaves DH et al. — False and recovered memories in the laboratory and clinic: the genuine-recovery synthesis" },
      { source: "Lindsay DS & Read JD — 'Memory work' and recovered memories: the gradient (Psychology, Public Policy and Law, 1995)" },
      { source: "Wright D, Ost J & French CC — Recovered and false memories (The Psychologist, 2006)" },
      { source: "Brewin CR et al. — dual-representation and trauma-memory neurocognitive models" },
    ],
    patientResources: [
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416) for stabilisation support" },
      { source: "Forensic interviewing standards for child disclosure (POCSO interface, India)" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient",
      estimatedTime: "4 min",
      description: "Plain language: how memory really works, why no one should tell you what your past 'must' be.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "18 min",
      description: "Both sides of the evidence, the consensus, the practice rules.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "25 min",
      description: "Full course with the gradient decision path, the Indian suggestive contexts and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "32 min",
      description: "Everything — the forensic-consultation craft, the debate-literacy layer, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "drug-navigation", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The observations, the two positions, the consensus.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state both positions' core claims and the consensus that holds them." },
    { number: 2, title: "Mechanism & Neuroscience", description: "Inhibition as ordinary machinery; the dual stress effect; the suggestion pathway.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain the dual effect in three sentences and the implantation pathway in five." },
    { number: 3, title: "Clinical Practice", description: "The critical-accepting stance, the no-suggestion rule, the corroboration discipline (concept course: management + patient education).", sectionIds: ["management", "patient-guide"], checkpoint: "You can run the five practice rules and decline a certification request without dismissing the patient — the disorder-specific diagnostic sections are NOT_APPLICABLE for this concept (recorded in the completion matrix)." },
    { number: 4, title: "Indian Context", description: "Joint-family accusation stakes, the suggestive contexts, the POCSO interface, the gradient gate.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can apply the gradient to an Indian regression-recovered memory and document the suggestive exposure." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two consultation cases, drug navigation and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"], checkpoint: "You can recite the numbers (20–60%, 25–30%, ~40%) with their sources and their caveats." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "Brewin CR — the Oxford ch 4.6.3 synthesis; Posttraumatic Stress Disorder: Malady or Myth? (2003)", sourceType: "textbook", year: "2003", dateReviewed: "2026-09-28" },
    { id: "S2", source: "Loftus EF — The reality of repressed memories (Am Psychol 48:518–37) and the implantation-experiment tradition", sourceType: "primary", year: "1993", dateReviewed: "2026-09-28" },
    { id: "S3", source: "Pope HG & Hudson JI — the repression-critique reviews; Pope HG et al. — the dissociative-amnesia exchange", sourceType: "primary", year: "1995–1997", dateReviewed: "2026-09-28" },
    { id: "S4", source: "McNally RJ — Remembering Trauma: the sceptical synthesis (Harvard University Press)", sourceType: "textbook", year: "2003", dateReviewed: "2026-09-28" },
    { id: "S5", source: "Lindsay DS & Read JD — 'Memory work' and recovered memories of childhood sexual abuse (Psychology, Public Policy and Law 1:846–908)", sourceType: "primary", year: "1995", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Gleaves DH et al. — False and recovered memories in the laboratory and clinic: a review", sourceType: "review", year: "2004", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Wright D, Ost J & French CC — Recovered and false memories (The Psychologist 19:352–5)", sourceType: "review", year: "2006", dateReviewed: "2026-09-28" },
    { id: "S8", source: "British Psychological Society Working Party on Recovered Memories; APA Working Group interim statement — the consensus documents", sourceType: "guideline", year: "1995", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Brewin CR et al. — dual-representation and trauma-memory neurocognitive models", sourceType: "primary", year: "1996–2010s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "Terr L — the chained-versus-single-trauma memory observations (the paediatric-trauma companion tradition)", sourceType: "primary", year: "1990s", dateReviewed: "2026-09-28" },
    { id: "S11", source: "Davies GM & Dalgleish T (eds.) — Recovered Memories: Seeking the Middle Ground (Wiley)", sourceType: "textbook", year: "2001", dateReviewed: "2026-09-28" },
    { id: "S12", source: "New Oxford Textbook of Psychiatry 2e, ch 4.6.3 — source chapter mapped; content rewritten; Indian contextual layer (POCSO disclosure standards, suggestive-context practice patterns) added from Indian practice literature", sourceType: "textbook", year: "2009 / 2026 context", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "The typical trauma-memory pattern is forgetting details and reactions while remembering the occurrence; the controversy centres on memories recovered after complete forgetting of events.", grade: "established", sources: ["S1", "S4"] },
    { text: "Between 20 and 60% of people reporting child sexual abuse across 20+ studies describe periods of years when they could not remember the abuse — findings replicate across clinical, community and professional samples.", grade: "established", sources: ["S6", "S1"] },
    { text: "Laboratory implantation studies create apparent childhood memories of single non-abusive events in approximately 25–30% of subjects, particularly those high in hypnotisability or suggestibility.", grade: "established", sources: ["S2", "S7"] },
    { text: "The implantation evidence's courtroom extrapolation is qualified: plausibility gates suggestibility, no one has attempted abuse implantation experimentally, and the laboratory-clinic distance is real.", grade: "supported", sources: ["S4", "S7"] },
    { text: "Approximately 40% of clinician-reported recovered memories carry corroborative evidence (confessions, other victims, court records); the corroboration quality is criticised but wholesale dismissal is implausible.", grade: "supported", sources: ["S6"] },
    { text: "'Repression' as a mechanism lacks credible scientific support (Pope/Hudson; McNally) — forgetting is real, the mechanism remains unproven.", grade: "established", sources: ["S3", "S4"] },
    { text: "Extreme stress may produce simultaneously enhanced fear conditioning and impaired autobiographical memory — the dual effect explaining PTSD's fragment-without-context signature.", grade: "supported", sources: ["S9", "S1"] },
    { text: "The BPS (1995) and APA consensus: traumatic events can be forgotten and recovered from total amnesia, sometimes essentially accurately, and such 'memories' can also be false in whole or part.", grade: "established", sources: ["S8"] },
    { text: "Lindsay and Read's gradient — spontaneously recovered memories of common abuse: few grounds for doubt; suggestion-derived memories from initially-denying patients: scepticism — is the working instrument of the consensus.", grade: "established", sources: ["S5", "S8"] },
    { text: "Sustained suggestive situations (therapy, regression programmes, exorcism rituals) are acknowledged as capable of inducing false memories; recovered-memory therapy has nearly vanished from mainstream practice.", grade: "established", sources: ["S8", "S7"] },
    { text: "Even vivid traumatic flashbacks can be partly inaccurate — the symptom is treated empathically while its every detail is not certified.", grade: "supported", sources: ["S1", "S4"] },
    { text: "The Indian layer (joint-family accusation dynamics; past-life-regression and faith-healing suggestion contexts; the POCSO spontaneous-statement interface) is practice-pattern description from Indian clinical literature — context honestly labelled.", grade: "supported", sources: ["S12"] },
  ],
};
