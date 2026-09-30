import type { PsychiatryCourse } from "./types";

/**
 * MEMORY REHABILITATION — canonical Psychiatry course
 * (migration batch 7, Group A — neurocognitive disorders, part 2 of 2).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/memory-rehabilitation.md — untouched
 * foundation), re-researched against the Glisky-Schacter
 * vanishing-cues tradition, the Wilson errorless-compensation
 * programme, the Camp spaced-retrieval literature and the
 * Clare-Woods early-dementia review lineage) with per-claim
 * provenance. A CONCEPT course: the engineering discipline that
 * teaches the person and the household to run daily life on the
 * memory that remains.
 *
 * Drug routes: NONE — the prescription pad for this course is a
 * diagram, not a tablet (the field's founding honesty). The
 * cognitive-enhancer tier is explicitly NOT this course's
 * territory and is recorded in contentGaps, never invented.
 */
export const memoryRehabilitationCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "memory-rehabilitation",
  title: "Memory Rehabilitation",
  shortName: "Memory rehab",
  kind: "concept",
  category: "Neurocognitive Disorder",
  groupLetter: "A",
  groupName: "Neurocognitive disorders",
  learningPath: ["Psychiatry", "Neurocognitive Disorders", "Memory Rehabilitation"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "30 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The engineering discipline — compensation, not restoration, for the memory that remains",

  summary:
    "Memory rehabilitation teaches the person and household to run daily life on the memory that remains. Restoration drills largely fail, so effective programmes build external prosthetics, errorless learning methods and supportive environments matched to which memory system is broken.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "State the field's honest verdict: restoration drills largely fail, compensation largely works — and explain the evidence behind it.",
    "Run the pre-rehabilitation assessment: WHICH memory is broken (storage, retrieval, prospective), because each prescribes a different method.",
    "Teach the external prosthetic tier (memory books, phones-as-brain, alarms, fixed-places doctrine) and individualise for literacy and tech comfort.",
    "Apply errorless learning and spaced retrieval correctly, and explain WHY errors are dangerous for the amnesic learner.",
    "Arrange the prosthetic environment: routine, signage, one-place-one-object, visual landmarks.",
    "Train the family as the prosthetic team, with the two failure modes (the dependency cage; the abandonment crash) and their antidotes.",
    "Prescribe by syndrome: MCI, mild-to-moderate Alzheimer's, Korsakoff, TBI — what each realistically gains.",
    "Work the Indian realities: household prosthetics, the joint-family scaffold, smartphone-as-memory, costs, and the tele-counselling delivery channel.",
  ],
  quickFacts: [
    { label: "The verdict", value: "Restoration fails, compensation works", detail: "Trained lists improve and life stays broken (the failed transfer test); the unglamorous engineering (a diary used with spouse coaching, an alarm-and-checklist system, environmental restructuring) repeatedly delivers functional gains on real targets" },
    { label: "The assessment", value: "Storage, retrieval, or prospective?", detail: "Storage broken (Alzheimer's, Korsakoff) → prosthetics; retrieval weak (TBI, depression, ageing) → cue-based strategies; prospective failing (the 'forgets to do') → engineering: alarms, anchors, the when-then grammar — the misprescription is the commonest clinical error" },
    { label: "The prosthetic tier", value: "Systems that remember FOR the person", detail: "The memory book (today's page, the where-I-put-it register), the phone-as-brain (alarms, photo-labels, voice notes), the one-place-one-object doctrine — the household's physical law deleting a class of 'lost' crises" },
    { label: "The errorless law", value: "The amnesic recorder stores its mistakes", detail: "Trial-and-error learning lets the wrong guess become an unintended lesson; errorless learning supplies the answer first, keeps success at 100% — the counter-intuitive founding law of teaching the amnesic brain" },
    { label: "The spaced-retrieval engine", value: "Recall at expanding intervals", detail: "Correctly recall now, again at 30 seconds, 2 minutes, 10, an hour, a day — each successful retrieval multiplying the trace's durability; the single best-validated technique for planting specific facts" },
    { label: "The two failure modes", value: "The cage and the crash", detail: "The dependency cage (every need pre-empted, remaining skills going dark from disuse) and the abandonment crash (the family that expected cure, got plateau, stopped everything) — both counselled explicitly at prescription time" },
    { label: "The outcome measure", value: "Function, not scores", detail: "A rehabilitation reporting list-improvement is reporting the failed paradigm; one reporting the grandfather managing his tablets and the market ledger is reporting success — roles retained, independence held" },
    { label: "The Indian tier", value: "The household already runs on prosthetics", detail: "The wall calendar, the tiffin system, the knot in the pallu, the shop ledger — the clinician formalises the existing system rather than importing an alien one; the grandchild setting up the medicine alarm is the country's de facto rehab worker" },
  ],
  knowledgeGraph: [
    { label: "Amnesic Syndromes", type: "condition", href: "/psychiatry/amnesic-syndromes/", note: "The storage-broken archetypes this course engineers around: the procedural gift preserved, the routine-and-labels home, the family as hippocampus" },
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The maintenance-and-function tier for MCI and early disease — the window before the household has replaced the person's function wholesale" },
    { label: "Traumatic Brain Injury Neuropsychiatry", type: "condition", href: "/psychiatry/tbi-neuropsychiatry/", note: "The retrieval-weak archetypes — the cue-based strategy tier's beneficiaries; the prosthetic canon's home population" },
    { label: "Managing Dementia", type: "condition", href: "/psychiatry/dementia-management/", note: "The umbrella this course's engineering serves — Floor 4's method tier and the family programme's skills package" },
    { label: "Vascular Dementia", type: "condition", href: "/psychiatry/vascular-dementia/", note: "The executive-first profile the prosthetic environment scaffolds between the steps" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The retrieval-weak mimic — the effort-dependent encoding failure that cueing and treatment restore" },
    { label: "Insomnia", type: "condition", href: "/psychiatry/insomnia/", note: "The sleep tier that carries the consolidation this course's methods depend on" },
    { label: "Acetylcholine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The honest boundary: the pharmacology lives in the disease courses — this course's prescription pad is a diagram" },
    { label: "Hippocampus", type: "brain-region", href: "#brain", note: "The recording room this course routes around — the storage tier's broken floor" },
    { label: "Frontal lobes", type: "brain-region", href: "#brain", note: "The retrieval-and-strategy seat — the cue-based tier's target when the recording is intact" },
    { label: "Basal ganglia", type: "brain-region", href: "#brain", note: "The habit systems that carry the procedural learning — the surviving wiring the routines are built on" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "The mechanism story of memory rehabilitation is the story of what SURVIVES. The damaged storage (the hippocampal recording in Alzheimer's and Korsakoff) resists the restoration drills — the trained list improves, the transfer test fails — because no amount of practice rebuilds the lost filing machinery. But the residual abilities — procedural learning (the bicycle kind), routines, priming, the cue-based habits — POWER the compensations: the errorless methods work precisely because they recruit the surviving systems while avoiding the broken error-correction machinery (the amnesic recorder stores its mistakes — a wrong guess becomes an unintended lesson — so the guessing is eliminated rather than corrected). Spaced retrieval works because each SUCCESSFUL recall at an expanding interval multiplies the trace's durability through the surviving consolidation channels. The fixed environment converts weak episodic recall into preserved cue-based performance — the routine doing the remembering the hippocampus cannot. And the external systems (the diary, the phone, the one-place doctrine) simply move the memory OUTSIDE the skull — the prosthetic principle: the system remembers FOR the person. The design logic that unifies the tiers: every cue the environment carries is memory the person need not hold; every habit the routine builds is retrieval the hippocampus need not perform; every alarm that fires is prospective memory the brain need not store. The engineering does not fight the lesion — it routes around it, on the wiring that remains.",
    steps: [
      "The honest verdict's mechanism: restoration drills fail the transfer test because practice cannot rebuild the lost filing machinery — the trained list improves, nearby life stays broken.",
      "The survivors' inventory: procedural learning, routines, priming, cue-based habits — the residual abilities that power every compensation.",
      "The errorless law: the amnesic recorder stores its own mistakes — a wrong guess becomes an unintended lesson — so the answer is supplied first and success held at 100%.",
      "The spaced-retrieval engine: each successful recall at an expanding interval multiplies the trace's durability through the surviving consolidation channels — recall practiced, not re-read.",
      "The environmental conversion: fixed routine and physical scaffolding converting weak episodic recall into preserved cue-based performance — the routine doing the remembering.",
      "The prosthetic principle: the diary, the phone, the one-place doctrine moving the memory OUTSIDE the skull — the system remembering FOR the person.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "hippocampus", name: "Hippocampal formation (the broken floor)", role: "The new-episodic recording machinery this course routes around — intact immediate and procedural function on either side of it, the assessment's first question.", grade: "established" },
    { id: "basal-ganglia", name: "Basal ganglia habit systems (the survivors)", role: "The procedural learning circuits that outlast the episodic failure — the wiring the routines, habits and errorless teaching are built on.", grade: "established" },
    { id: "frontal-lobes", name: "Frontal lobes (the strategy seat)", role: "The retrieval search and strategy deployment — the cue-based tier's target when the recording is intact but the search is weak (TBI, depression, ageing).", grade: "established" },
    { id: "cerebellum", name: "Cerebellum (the conditioning partner)", role: "The procedural and conditioned-learning partnerships — the timing and habit circuits the spaced retrieval exploits.", grade: "supported" },
    { id: "association-cortex", name: "Neocortical semantic stores (the preserved archive)", role: "The old knowledge and priming systems that survive — the material the errorless teaching builds its successes on.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Acetylcholine", symbol: "ACh", role: "The honest boundary marker: the cholinergic pharmacology belongs to the disease courses — this course's methods work on the wiring that remains, whatever the chemistry's state.", grade: "established" },
    { name: "Dopamine", symbol: "DA", role: "The habit systems' reinforcement chemistry — the reward loops that the routine-building and the spaced-retrieval successes ride on.", grade: "supported" },
    { name: "Noradrenaline", symbol: "NE", role: "The attention-arousal substrate every encoding depends on — the sleep-and-alertness tier this course's methods presuppose.", grade: "supported" },
    { name: "Serotonin", symbol: "5-HT", role: "The mood-and-engagement chemistry — the goal-driven participation the rehabilitation's efficacy demonstrably requires.", grade: "supported" },
  ],
  pathways: [
    {
      id: "transfer-failure-pathway",
      name: "The honest verdict (why drills fail)",
      steps: [
        { label: "The drill trains the list", detail: "Hours of practice on the material — the practiced list's scores climbing session by session" },
        { label: "The transfer test arrives", detail: "Nearby life, unpracticed: the medications, the appointments, the household's real targets — unchanged" },
        { label: "The verdict lands", detail: "Restoration failed the transfer test; the paradigm itself was miscalibrated — practicing storage does not rebuild the filing machinery" },
        { label: "The pivot", detail: "Compensation: the engineering tier (prosthetics, methods, environment, family) aiming at real functional targets instead of scores" },
      ],
      clinicalManifestation: "The worksheet-tapered patient who cannot manage her medicines — the failed paradigm worn as a clinical disappointment.",
      grade: "established",
    },
    {
      id: "errorless-pathway",
      name: "The errorless law (teaching the amnesic brain)",
      steps: [
        { label: "The old assumption questioned", detail: "Trial-and-error learning assumes the learner can compare the guess against the answer — the error-correction memory itself broken here" },
        { label: "The mistake recorded as lesson", detail: "The amnesic recorder stores the wrong guess with the target — each error an unintended teaching" },
        { label: "The answer supplied first", detail: "Eliminate the guessing: the word given immediately, copied and repeated, success held at 100%" },
        { label: "The surviving systems recruited", detail: "The procedural and priming channels carrying the learning the episodic machinery cannot" },
      ],
      clinicalManifestation: "The naming practice where the word is given before the guess — the session that ends with the name known instead of two wrong versions competing.",
      grade: "established",
    },
    {
      id: "prosthetic-pathway",
      name: "The prosthetic principle (memory outside the skull)",
      steps: [
        { label: "The system chosen", detail: "The memory book, the phone, the one-place doctrine — matched to the person's literacy, tech comfort and household" },
        { label: "The USE trained", detail: "The book works when its use is the skill taught — errorlessly, jointly with the family in the first weeks" },
        { label: "The environment aligned", detail: "Every cue the environment carries is memory the person need not hold — signage, the calendar wall, the fixed places" },
        { label: "The family joined", detail: "The diary-owner named, the medicine-checker assigned, the protected-roles list for the elder — the human tier completing the circuit" },
      ],
      clinicalManifestation: "The retired professor managing the market ledger and his own tablets through the wall calendar and the chai-anchored alarm — function, not scores.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "assessment-stage", time: "Week 0", title: "The three-floors assessment", description: "Which memory is broken — storage, retrieval, prospective — and the syndrome-matched prescription written before any technique taught; the goals drawn from the patient's own valued roles.", phase: "onset" },
    { id: "installation-stage", time: "Weeks 1–4", title: "The systems installed", description: "The prosthetic tier chosen and trained (the book, the phone, the one-place doctrine); the first errorless teaching begun; the family trained in one structured session.", phase: "onset" },
    { id: "consolidation-stage", time: "Weeks 4–8", title: "The habits forming", description: "The spaced retrieval expanding its intervals; the routine hardening into procedural memory; the cue chains (the alarm, the anchor, the medicine) linking end-to-end.", phase: "peak" },
    { id: "review-stage", time: "Week 8", title: "The honest review", description: "The function outcomes measured against the written goals — roles held, independence preserved, the specific targets met or re-engineered; the plateau explained as holding, not failing.", phase: "peak" },
    { id: "maintenance-stage", time: "The long term", title: "The maintained system", description: "The household's prosthetic life running — the review cadence spacing out; the family's stamina monitored; the disease courses' trajectories respected as the engineering's context.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "The field's population: every amnesia and every dementia carries a rehabilitable function layer — MCI and mild dementia (the maintenance-and-function tier: strategies, psychoeducation, the intervention window before the household has replaced the person wholesale), Korsakoff and dense amnesias (the prosthetic-and-environmental tier), TBI amnesias (the prosthetic canon's home population with Sohlberg-Mateer's external-aid training). The consistent finding across four decades: functional gains on real targets (medications taken, appointments kept, meals cooked, roles retained) from compensation, against task-bound gains from restoration — the evidence base this course stands on.",
    indianPrevalence: "India's rehabilitation reality: a handful of formal programmes (NIMHANS, AIIMS, the metro private-neuropsychology tier) against a population need in the millions; the dementia-NGO tier (ARDSI chapters teaching household adaptation) as the reachable channel; and at population scale, the IDEA itself migrating through family education and tele-counselling — the DMHP or Tele-MANAS counsellor coaching the grandchild through one structured session (which alarm, which icons, the one-place rule) multiplying the reach at near-zero cost.",
    lifetimeRisk: "Not applicable as risk — the course's population is every storage, retrieval or prospective failure the clinic meets; the question never whether to prescribe, only which tier.",
    genderRatio: "The caregivers trained are predominantly women (the household's memory workforce); the patients span both — the engineering serving each identically.",
    ageOfOnset: "All ages: the TBI students and the young Korsakoff at one end, the MCI and early-dementia elders at the other — the tier chosen by syndrome, not by age.",
    indianNotes: "The smartphone paradox: reach is vast, training is thin — the phone arrived as the country's most widely distributed memory prosthesis ahead of any clinic's instruction; the clinical task is training, simplification (one screen, three icons) and family patience.",
  },
  etiology: [
    { category: "biological", factor: "The broken floor determines the prescription", details: "Storage failure (Alzheimer's, Korsakoff — the hippocampal recording gone): prosthetics and environment, never the drills; retrieval weakness (TBI, depression, ageing, frontal syndromes — the recording intact, the search weak): the cue-based strategy tier that genuinely helps; prospective failure (the remembering-to-remember): the engineering tier — alarms, anchors, the when-then grammar." },
    { category: "psychological", factor: "The engagement prerequisites", details: "The goal-driven participation the efficacy requires — the patient's own valued roles (the evening prayer, the shop's cash box, the roses, the Sunday dal) as the programme's engine; goal-driven programmes outperforming generic worksheets everywhere; the depression treated first when it has emptied the engagement." },
    { category: "social", factor: "The family as delivery system", details: "Whoever fills the diary, sets the alarms and holds the routine at home IS the rehabilitation programme in most of India — the one trained family member outperforming the referral to a nonexistent clinic; the two failure modes (the cage, the abandonment) counselled explicitly." },
    { category: "environmental", factor: "The physical and cultural scaffolding", details: "The signage, the colour-coded doors, the clock-and-calendar wall, the well-lit corridor without patterned flooring — and the Indian household's EXISTING prosthetics (the festival calendar, the tiffin system, the knot in the pallu, the shop ledger) formalised rather than replaced." },
    { category: "social", factor: "The commercial inversion to resist", details: "The apps and courses selling 'restoration' against the evidence — the honest clinic sells engineering; the prescription pad for this course is a diagram, not a tablet; the family's money protected from the worksheet economy." },
  ],
  symptomClusters: [
    {
      category: "1. The storage-broken presentations",
      symptoms: ["The Korsakoff loop and the Alzheimer's recording failure — new episodic learning the broken floor", "Procedural learning PRESERVED (the bicycle kind) — the surviving channel the routines are built on", "The prescription: prosthetics and environment, never the effortful rehearsal (prescribing to the broken floor is the commonest error)"],
    },
    {
      category: "2. The retrieval-weak presentations",
      symptoms: ["The tip-of-the-tongue state; the word found when the category is given — the recording intact, the search failing", "The TBI, depression, ageing and frontal pictures — the cue-based strategies, mnemonics and organised encoding genuinely helping here", "The misprescription risk reversed: the prosthetic-only prescription for a retrieval-weak patient withholds the strategy tier that could restore independent access"],
    },
    {
      category: "3. The prospective failures (the 'forgets to do')",
      symptoms: ["The tablet not remembered at nine; the gas left on — the most functionally devastating and most treatable memory failures", "Never trained in the abstract: BUILT — alarms, the one-place ritual (tablets on the plate with the chai), the implementation intentions ('when the chai comes, then the tablet')", "Most household 'memory failures' that bring families to clinics are prospective failures with engineering answers"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The pre-rehabilitation assessment",
      code: "The three-question functional anatomy",
      criteria: [
        "WHICH memory is broken — the question that prevents the wasted prescription: storage (the recording room: Alzheimer's, Korsakoff), retrieval (the filing room: TBI, depression, ageing, frontal), or prospective (the doing-of-it: the appointments missed, the tablets forgotten)?",
        "The syndrome's trajectory mapped — the engineering designed for the disease's course, not against it (the Alzheimer's programme staged; the Korsakoff programme permanent; the TBI programme recovery-oriented).",
        "The person's OWN goals elicited — the valued roles (lead the evening prayer, manage the cash box, water the roses, cook Sunday's dal) that the programme's targets are drawn from; goal-driven programmes outperforming generic worksheets everywhere.",
        "The household's existing prosthetics inventoried — the calendar, the ledger, the tiffin system, the knot in the pallu: the formalisation of the existing system, not the importation of an alien one.",
        "The family's capacity assessed — the trainable member identified, the stamina estimated, the two failure modes pre-counselled (the cage, the abandonment).",
      ],
      duration: "The assessment is a consultation, not a battery — the three questions and the household inventory, completed before any technique is taught.",
      indianNote: "Test in the person's script, train in the person's tongue, build on the household's own prosthetics — the literacy- and language-adjusted discipline the MCI tier teaches and this course applies.",
    },
  ],
  severityScales: [
    {
      name: "The tier-matching ladder",
      fullName: "Syndrome-to-method prescription staging",
      measures: "Which engineering the syndrome warrants — the assessment's output as a clinical decision.",
      ranges: [
        { min: 0, max: 0, severity: "Retrieval-weak syndromes (TBI, depression, ageing)", action: "The strategy tier: cue-based retrieval practice, mnemonics, organised encoding — the genuinely-helped population; plus the prosthetic support where the load demands it" },
        { min: 1, max: 1, severity: "MCI and mild dementia", action: "The maintenance tier: strategies plus psychoeducation plus the intervention window defended — each month of preserved role a month of preserved selfhood; the household's wholesale-replacement-of-function prevented" },
        { min: 2, max: 2, severity: "Dense amnesias and moderate-severe dementia", action: "The prosthetic-and-environmental tier: the book, the phone, the one-place doctrine, the signage, the routine — the family trained, the roles protected, the safety engineered" },
      ],
      indianNote: "The misprescription is the commonest clinical error: strategy drills for the storage-broken, prosthetics-only for the retrieval-weak — the three-question assessment preventing both.",
    },
    {
      name: "The family-tier audit",
      fullName: "The two failure modes staging",
      measures: "The household's health as a rehabilitation delivery system.",
      ranges: [
        { min: 0, max: 0, severity: "The balanced team", action: "The diary-owner named, the medicine-checker assigned, the protected-roles list for the elder — the prompt-the-system-not-the-answer discipline held" },
        { min: 1, max: 1, severity: "The cage forming", action: "Every need pre-empted, the remaining skills going dark from disuse — the antidote taught: prompt the SYSTEM (point to the diary), let the hands do what the hands still do, protect the scheduled tasks he still performs" },
        { min: 2, max: 2, severity: "The crash arriving", action: "The family that expected cure, got plateau, and stopped everything — the antidote: the honest goal-setting at prescription time ('we are watching independence HOLD, not memory return'), the eight-week review pre-booked" },
      ],
      indianNote: "The joint family's risks travel with its strengths: the servants-and-daughters-in-law pre-empting every task (the cage arriving earlier), the diffuse responsibility (every member assuming another checked) — the family meeting that assigns ONE diary-owner, ONE medicine-checker and the protected-roles list is the intervention.",
    },
  ],
  differentialDiagnosis: [
    { condition: "The untreated depression masquerading as progression", distinguishingFeatures: "The effort-dependent encoding failure that cueing and treatment restore — the rehabilitation's prerequisite, not its target.", keyDifferentiator: "The mood treated first; the retrieval tier's response then distinguishing the residual." },
    { condition: "The pharmacological fog", distinguishingFeatures: "The sedating-and-anticholinergic burden manufacturing the very failures the engineering is being asked to compensate.", keyDifferentiator: "The stop-list audit before the diary prescription — the Dementia Management course's Floor 2 discipline running first." },
    { condition: "The commercial worksheet economy", distinguishingFeatures: "The apps and courses selling restoration against the evidence — the family's money and hope spent on the failed paradigm.", keyDifferentiator: "The verdict stated plainly at prescription ('the memory itself does not regrow; the engineering returns what the exercises never did — his roles and his independence').", },
    { condition: "The wrong-tier prescription", distinguishingFeatures: "Strategy drills for the storage-broken; prosthetics-only for the retrieval-weak — the assessment skipped and the mismatch landed.", keyDifferentiator: "The three-question anatomy re-run whenever the programme stalls: the right method for the right floor." },
  ],
  management: [
    { category: "lifestyle", name: "The prosthetic tier: systems that remember FOR the person", description: "The memory book / diary — the founding tool: a structured daily book (today's page, appointments, 'facts about people I met', the where-I-put-it register), introduced early, coached JOINTLY with the family in the first weeks, treated as the extension of the self rather than a shame object; its USE being the skill taught, errorlessly. The phone-as-brain: calendar alarms with voice notes, location reminders, photo-labels of people (the social prosthetic), medicine-app alarms — simplified to one screen, three icons, the one gesture needed at each cue. The one-place-one-object doctrine: keys, wallet, spectacles, tablets — fixed locations, always returned, labelled shelves; the household's physical law that deletes an entire class of 'lost' crises. Medicine engineering: the weekday-compartment organiser plus the chai-anchored alarm; blister strips on the plate; the caregiver's weekly fill-and-check ritual.", whenToUse: "From the assessment — the storage-broken and the prospective-failing tiers' core prescription.", indianContext: "The household already runs on prosthetics — the wall calendar with festival dates, the tiffin system, the knot in the pallu, the shop ledger: formalise the existing system rather than import an alien one (the kitchen god's shelf as the medicines shelf — fixed, sacred, unmovable)." },
    { category: "lifestyle", name: "The method tier: teaching the amnesic brain", description: "ERRORLESS LEARNING — the counter-intuitive founding law: the amnesic brain records its mistakes, so eliminate the guessing (the answer given immediately, copied and repeated, success held at 100%); naming practice, routine teaching and orientation boards all run errorlessly — the practical rider: some error is unavoidable in life, and there is a mild counter-case for challenge where retrieval is the weak floor, hence the assessment-first rule. SPACED RETRIEVAL — practice RECALLING, not re-reading, at expanding intervals (correctly recall once now, again after 30 seconds, 2 minutes, 10, an hour, a day): each successful retrieval multiplying the trace's durability — the single best-validated technique for planting specific facts (the walker's location, the new aide's name, 'I have moved to my son's house'). VANISHING CUES — the support faded backward letter-by-letter as the person succeeds, the scaffold removed as the wall sets. IMPLEMENTATION INTENTIONS AND ROUTINES — the when-X-then-Y grammar converting intention into cue-triggered action; the fixed daily rhythm as cognition offloaded to the clock.", whenToUse: "The specific-fact planting and the routine-building — matched to the surviving systems, never to the broken floor.", indianContext: "The errorless principle delivered in the family session with one worked example (the new aide's name taught to the grandfather correctly on the first attempt) — the technique transferred in ten minutes to every future teaching moment in the household." },
    { category: "lifestyle", name: "The environmental and human tiers", description: "THE PROSTHETIC ENVIRONMENT: signage (the WC's label when 'toilet' flees the vocabulary), colour-coded doors, the visible clock-and-calendar wall, the well-lit corridor without patterned flooring (the visual-confusion tax), the garden path that loops home — every cue the environment carries is memory the person need not hold. THE FAMILY AS THE PROSTHETIC TEAM: trained in the methods (the errorless prompt-before-error rule, the 30-second wait, the one-instruction-at-a-time grammar, the diary's joint filling) and in their own stamina management — the two failure modes counselled explicitly: the DEPENDENCY CAGE (every need pre-empted, the patient's remaining skills going dark from disuse — the antidote: prompt the system, not the answer; let the hands do what the hands still do) and the ABANDONMENT CRASH (the family that expected cure, got plateau, stopped everything — the antidote: honest goal-setting at prescription time). THE PERSON'S OWN HIERARCHY: the goals drawn from the patient's valued roles — goal-driven programmes outperforming generic worksheets everywhere, and role-loss being what the family actually mourns.", whenToUse: "From installation week — the environment and the family carrying the programme between reviews.", indianContext: "The joint family as scaffold and as risk: many hands running the routine (genuine capacity) against the earlier-arriving cage and the diffuse responsibility — the family meeting assigning ONE diary-owner, ONE medicine-checker and the protected-roles list being the intervention itself." },
    { category: "lifestyle", name: "The review discipline: function, not scores", description: "The eight-week review pre-booked at prescription — the function outcomes measured against the WRITTEN goals (the tablets managed, the appointments kept, the ledger held, the prayer led); the plateau explained as holding, not failing ('we are not waiting for memory to return; we are watching independence hold — and holding is this treatment's success'); the goals re-engineered rather than abandoned when the disease's trajectory moves; the family's stamina re-audited at each review — the collapsed caregiver ending the programme for both.", whenToUse: "Week 8, then the cadence the trajectory demands — the review closing the loop that the worksheet economy never opens.", indianContext: "The review deliverable in the Indian setting: the diagram updated, the family session repeated once, the grandchild's alarm-setup checked — the tele-counselling tier multiplying the reach at near-zero cost." },
  ],
  safety: {
    redFlags: [
      "The family spending on the restoration economy (apps, courses, worksheet clinics) against the evidence — the honest verdict delivered before the money goes",
      "The dependency cage forming — every task pre-empted, the remaining skills going dark: the protected-roles list disappearing from the household's life",
      "The abandonment crash — the family that stopped everything after the plateau: the eight-week review re-booked the same week it is missed",
      "The caregiver's collapse — the diary-owner's stamina failing takes the whole prosthetic system with it; her endurance audited at every review",
      "The misprescription discovered late — strategy drills exhausting the storage-broken patient, or the prosthetic-only plan withholding the strategy tier from the retrieval-weak: the three questions re-run at any stall",
      "The unsafe cue chain — the alarm that ends in the snooze rather than the medicine: the anchor redesigned until the chain ends in the action (the tablets ON the chai plate)",
    ],
    urgentGuidance:
      "The order of operations: (1) the three-question assessment before any technique (which floor broken — the misprescription prevented); (2) the goals written from the patient's own roles before the systems chosen; (3) the household's existing prosthetics formalised, not replaced; (4) the family trained in one structured session with the two failure modes pre-counselled; (5) the eight-week review pre-booked with the function outcomes defined; (6) the honest verdict stated plainly at prescription time — inoculating the family against the restoration economy and protecting the holding-as-success frame that funds the programme's endurance.",
  },
  drugLinks: [],
  contentGaps: [
    "No pharmacology is this course's territory: the cognitive-enhancer tier (donepezil, memantine) has no KYP drug lessons and belongs to the disease courses — the prescription pad for this course is a diagram, not a tablet.",
    "The stimulant tier (methylphenidate and relatives, physician-governed for selected fatigue-attention cases) has no KYP lessons — referenced in the TBI and HAND courses, not here.",
    "The antidepressant tier that treats the engagement-emptying depression has its KYP lessons (sertraline, escitalopram, mirtazapine) taught in the disease courses — the boundary documented so this course invents no routes.",
    "The melatonin-and-rhythm tier lives in the Insomnia course — the sleep foundation this course's methods presuppose, referenced not duplicated.",
  ],
  patientGuide: {
    whatIsIt:
      "Memory rehabilitation does not try to regrow the memory — the exercises that promised it have failed every fair test. What works is engineering: systems that remember FOR the person (a diary, a phone with alarms, one fixed place for each thing), learning methods that work WITH the memory problem instead of against it, and a home arranged so that the memory is never the thing that decides safety. Done well, it returns something the exercises never did: the roles, the independence and the dignity of daily life run on the memory that remains.",
    whatCausesIt:
      "Nothing is being 'fixed' here — the engineering works because the brain keeps some channels even when the recording machinery fails: habits and routines (the bicycle kind of memory) survive long after the facts-and-events kind fades. The methods build everything on those survivors: the fixed routine becomes the memory, the alarm becomes the remembering, and the diary becomes the hippocampus the household can rely on.",
    symptoms:
      "The problems this course addresses: the same question asked in a loop, the appointments and tablets forgotten, the objects lost, the tasks left half-done — the daily frictions of a memory that no longer records or reminds. The engineering answers each: the today-page for the questions, the anchored alarm for the tablets, the one-place rule for the objects, the when-then grammar for the tasks.",
    treatment:
      "The programme has an order. First the assessment (which memory is struggling — the recording, the finding, or the doing) — because each has a different answer. Then the systems: the diary or the phone, chosen for the household's own habits; one place for each important object; the medicines anchored to a daily event. Then the methods: the errorless teaching (the answer given before the guess — because mistakes stick in this condition) and the spaced practice of the few facts that matter. Then the family: one person owning the diary, one the medicines, and the patient's own roles protected rather than pre-empted. Then the honest review at eight weeks: not memory returning, but independence holding — that is this treatment's success.",
    selfHelp: [
      "The one-place rule from today: keys, wallet, spectacles, tablets — one labelled place each, always returned; the 'lost' crisis deleted by physical law.",
      "The today-page: a single notebook, one page per day — the appointments, the visitors, the where-I-put-it entries; the question-loop shrinking by becoming the book's job.",
      "The anchored alarm: the medicine tied to a fixed daily event (the chai, the meal) — the cue chain ending in the tablet, not the snooze.",
      "The when-then grammar for the tasks that matter: 'when the lamp is lit, then the blood-pressure tablet' — the intention converted into a cue.",
      "The three-icon phone: stripped to the needed gestures, the grandchild's ten-minute setup, the family's patience with the re-teaching.",
      "The protected-roles list: the tasks he still performs, written down and defended against the household's loving over-help — the hands doing what the hands still do.",
      "The eight-week expectation: written on the first page of the diary — 'we are watching independence hold, not memory return'.",
    ],
    whenToSeekHelp: [
      "The systems stalling despite honest use — the three questions re-run and the tier re-matched",
      "The family's exhaustion rising — the stamina re-audited and the respite re-engineered before the crash",
      "The household spending on restoration promises — the honest verdict requested from the treating team before the money goes",
      "The tasks becoming unsafe (the gas, the stove, the wandering) — the environmental tier upgraded the same week",
      "The mood sinking and the engagement emptying — the depression treated first; the rehabilitation waits on it",
      "The disease's trajectory moving past the programme — the goals re-engineered with the treating team rather than abandoned",
    ],
    indianResources: [
      "The district and tele-counselling tier (DMHP / Tele-MANAS 14416) — one structured session coaching the family through the alarm-and-anchor setup",
      "ARDSI chapters — the household-adaptation teaching tier in many cities",
      "The household's own prosthetics (the calendar, the ledger, the tiffin system) — the foundation the clinic formalises; ask the treating team to build on them",
      "The grandchild's ten minutes — the de facto rehabilitation workforce; ask the clinic for the one-session script that multiplies it",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific memory-rehabilitation guideline exists; the practice follows the international evidence synthesis (the Cicerone-tier verdicts, the errorless-spaced-retrieval canon) adapted through the household-prosthetic Indian delivery — the formalisation of the family's existing systems as the national channel.",
    systemContext: "A handful of formal programmes (NIMHANS, AIIMS, the metro private-neuropsychology tier) serve a population need in the millions; the dementia-NGO tier (ARDSI chapters) teaches household adaptation in the reachable cities; at population scale, the IDEA migrates through family education and tele-counselling — the DMHP or Tele-MANAS counsellor coaching the grandchild through one structured session multiplying the reach at near-zero cost.",
    programmeContext: "The private 'memory clinic' cognitive-rehab packages in the metros (₹500–1,500 per session, approx 2026) sell the worksheet tier of dubious transfer — the honest district prescription being the diagram, the family training session and the review at eight weeks; the government tier (the PHC, the district hospital) carrying the medical context the engineering rides on.",
    costConsiderations: "The effective programme is nearly free: a diary (₹50–150), a wall calendar (₹100), a basic phone alarm (a ₹1,000 device or the existing one), a compartments box (₹150–400) — against the worksheet economy's session fees and the restoration apps' subscriptions; the scarcest resource is the trained family hour, delivered free by the counsellor tier when the system remembers to use it.",
    culturalConsiderations: "The Indian household ALREADY runs on prosthetics — the wall calendar with festival dates, the steel-tiffin system, the grandmother's knot in the sari pallu, the shop ledger, the knot-and-coin mnemonics of a partly-literate culture: the formalisation of these systems outperforms any imported kit, and the kitchen god's shelf as the medicines shelf (fixed, sacred, unmovable) is the design principle the imported manual never carries. The joint family as scaffold and risk: many hands running the routine, against the earlier-arriving cage (the servants and daughters-in-law pre-empting every task) and the diffuse responsibility (every member assuming another checked). The smartphone paradox: the reach is vast, the training thin — the young grandchild setting up the medicine alarm in ten minutes is the country's de facto rehabilitation worker; the one structured session that multiplies this (which alarm, which icons, the one-place rule) is the health system's cheapest scaling move.",
    patientCounselling: [
      "The one-line verdict: 'The memory itself does not regrow — the engineering returns what the exercises never did: his roles and his independence.'",
      "The cage script: 'It feels kinder and it is quietly cruel — unused skills die faster than used ones; the diary, the tablets, the watering-can stay HIS; the check behind him stays ours.'",
      "The abandonment script: 'We are not waiting for memory to return — we are watching independence HOLD, and holding is this treatment's success; the eight-week review will show it.'",
      "The household-formalisation script: 'Your calendar, your ledger, your tiffin system — the rehabilitation your family already runs; we formalise your own system rather than importing an alien one.'",
      "The anchoring script: 'The alarm alone is not enough — the tablets ON the chai plate, the diary AT the alarm: the cue chain must end in the medicine, not the snooze.'",
      "The literacy script: 'Her prosthetic needs no script — the voice-note phone, the picture-board, the ledger she already keeps, the knot she already ties; we formalise her own system.'",
      "The grandchild script: 'One structured session — which alarm, which icons, the one-place rule — and the household's youngest becomes its rehabilitation worker.'",
    ],
  },
  decisionPath: {
    title: "The memory complaint that needs engineering, not exercises",
    nodes: [
      {
        id: "start",
        question: "A memory complaint with a demand for 'memory exercises'. First: the three questions.",
        branches: [
          { label: "Recording failing (new events never stick)", next: "storage-path" },
          { label: "Finding failing (the tip-of-the-tongue, cue-helped)", next: "retrieval-path" },
          { label: "Doing failing (the tablets, the appointments)", next: "prospective-path" },
          { label: "Restoration products already purchased", next: "verdict-path" },
        ],
      },
      {
        id: "verdict-path",
        question: "The commercial inversion: the family arrives with the apps and the worksheet receipts.",
        recommendation: "The honest verdict delivered first and kindly: the exercises that promise regrowth have failed every fair test; what works is the engineering — the systems, the methods, the environment, the family; the money protected and the holding-as-success frame installed as the programme's foundation.",
      },
      {
        id: "storage-path",
        question: "The broken floor: prosthetics and environment, never the drills.",
        branches: [
          { label: "MCI / mild disease (roles intact, window open)", next: "maintenance-path" },
          { label: "Dense amnesia / moderate-severe disease", next: "prosthetic-path" },
        ],
      },
      {
        id: "maintenance-path",
        question: "The intervention window: before the household replaces the person wholesale.",
        recommendation: "The strategy-plus-psychoeducation tier; the goals from the patient's own roles; each month of preserved role a month of preserved selfhood; the family warned against the pre-emptive takeover; the eight-week review with function outcomes.",
      },
      {
        id: "retrieval-path",
        question: "The weak search: the cue-based tier genuinely helps.",
        recommendation: "The strategy tier prescribed — cue-based retrieval practice, mnemonics, organised encoding, vanishing cues — the population the restoration paradigm failed by aiming at the wrong floor; the prosthetic support where the load demands it; the depression treated first when it empties the engagement.",
      },
      {
        id: "prospective-path",
        question: "The doing-of-it: never trained, always BUILT.",
        recommendation: "The engineering tier: the anchored alarms, the one-place rituals (tablets on the chai plate), the when-then implementation intentions, the cue chains audited end-to-action — the most functionally devastating and most treatable of the memory failures.",
      },
      {
        id: "prosthetic-path",
        question: "The systems installed: the book, the phone, the one-place law.",
        recommendation: "The prosthetic tier chosen for the household (literacy, tech comfort, the existing systems formalised); the USE trained errorlessly and jointly with the family; the environment aligned (signage, the calendar wall, the fixed places); the safety engineered alongside.",
      },
      {
        id: "method-gate",
        question: "The method tier: which technique for which target?",
        branches: [
          { label: "A specific fact to plant (the aide's name, the new home)", next: "spaced-path" },
          { label: "A routine or skill to teach", next: "errorless-path" },
          { label: "The family's prompting to correct", next: "family-path" },
        ],
      },
      {
        id: "spaced-path",
        question: "Spaced retrieval: recall at expanding intervals.",
        recommendation: "The fact chosen; the successful recall practiced at the expanding intervals (immediate, 30 seconds, 2 minutes, 10, an hour, a day) — each success multiplying the trace's durability; the vanishing-cues variant where the support fades backward letter-by-letter as success holds.",
      },
      {
        id: "errorless-path",
        question: "Errorless learning: the answer before the guess.",
        recommendation: "The mistake-avoidance explained to the family once (the amnesic recorder stores its own errors); the answer supplied first, copied and repeated, success held at 100% — the naming practice, the routine teaching, the orientation boards all run on the law; the mild counter-case for challenge acknowledged only where retrieval is the weak floor.",
      },
      {
        id: "family-path",
        question: "The human tier: the team trained, the modes pre-counselled.",
        recommendation: "One structured session: the errorless prompt-before-error rule, the 30-second wait, the one-instruction grammar, the diary's joint filling; the diary-owner and medicine-checker named; the protected-roles list written; the cage and the crash explained with their antidotes; the stamina management taught as part of the prescription.",
      },
      {
        id: "review-gate",
        question: "The eight-week review: function, not scores.",
        branches: [
          { label: "Goals met, holding", next: "maintain-path" },
          { label: "Programme stalled", next: "reassess-path" },
          { label: "Family faltering", next: "caregiver-path" },
        ],
      },
      {
        id: "maintain-path",
        question: "Holding as success: the maintenance cadence.",
        recommendation: "The goals re-confirmed and the cadence spaced out; the trajectory respected as the engineering's context (the disease courses' staging); the household's prosthetic life running as the new normal — the review that protects the endurance of the whole system.",
      },
      {
        id: "reassess-path",
        question: "The stall: the three questions re-run.",
        recommendation: "The tier-matching re-checked (the misprescription found late is the commonest stall); the goals re-engineered against the trajectory; the household's existing prosthetics re-formalised where the drift has undone them; the restoration economy's re-arrival guarded against.",
      },
      {
        id: "caregiver-path",
        question: "The wall's condition: the family faltering.",
        recommendation: "The diary-owner's stamina audited as clinical work; the respite re-engineered with dates; the depression treated where it has arrived; the programme scaled honestly to the household's carrying capacity — the collapsed caregiver ending the programme for both.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Prescribing restorative drills to the storage-broken patient",
      why: "The effortful rehearsal aims at the broken floor: the practiced list improves, the transfer test fails, and the family's hope is spent on the paradigm the evidence retired — often at the worksheet economy's session fees.",
      correction: "The three-question assessment first: storage-broken → the prosthetic-and-environmental tier; the verdict stated plainly and kindly at prescription time.",
    },
    {
      mistake: "Withholding the strategy tier from the retrieval-weak patient",
      why: "The mirror misprescription: the prosthetic-only reflex for a patient whose recording is intact and whose search could be trained — the cue-based strategies that genuinely help, withheld by the same skipped assessment.",
      correction: "The same three questions run honestly: retrieval-weak → cue-based strategies, mnemonics, organised encoding — the population the restoration paradigm failed by aiming at the wrong floor.",
    },
    {
      mistake: "Letting errors happen during teaching 'to build the learning'",
      why: "The trial-and-error instinct from ordinary pedagogy: the wrong guess stored as an unintended lesson by the very recorder the teaching is trying to reach — two competing versions of the name now in the trace.",
      correction: "The errorless law: the answer supplied before the guess, success held at 100%, the copying and repetition carrying the learning through the surviving channels.",
    },
    {
      mistake: "Handing over the diary without training its USE",
      why: "The book as object rather than skill — the beautiful notebook given, unexplained, unfilled, and abandoned in a drawer within a fortnight; the prosthetic that never became the person's extension.",
      correction: "The USE is the skill taught: the joint filling in the first weeks, the errorless introduction, the today-page's routine anchored to a fixed daily moment — the extension of the self, not the shame object in the drawer.",
    },
    {
      mistake: "The household pre-empting every task out of kindness",
      why: "The dependency cage: the servants and daughters-in-law absorbing each function as it wobbles — the remaining skills going dark from disuse faster than the disease would have taken them.",
      correction: "The protected-roles list written and defended: prompt the SYSTEM (point to the diary), not the answer; let the hands do what the hands still do; the tablets, the watering-can, the cash-box stay HIS.",
    },
    {
      mistake: "Promising memory return to secure the family's engagement",
      why: "The inflated promise buys the first month and loses the programme: the plateau arrives, the family reads it as failure, and everything stops — the abandonment crash the honest framing prevents.",
      correction: "The goal-setting at prescription time: 'we are watching independence HOLD, not memory return' — the eight-week review pre-booked to convert the plateau into the success it actually is.",
    },
    {
      mistake: "Importing an alien prosthetic kit into a running household",
      why: "The imported system (the foreign-format planner, the unfamiliar app) competes with the household's own working prosthetics — the festival calendar, the ledger, the tiffin rhythm — and loses to them by disuse.",
      correction: "The formalisation principle: build on what the household already runs — the kitchen god's shelf as the medicines shelf, the shop ledger as the memory book, the evening lamp-lighting as the diary anchor.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The restoration-versus-compensation verdict with the two lines of evidence (the failed transfer test; the functional gains on real targets).",
        "The three-question assessment (storage, retrieval, prospective) with one syndrome each and the matching tier.",
        "The errorless-learning law and its explanation: why trial-and-error is dangerous for the amnesic learner.",
        "The spaced-retrieval mechanics walked through one concrete target fact.",
        "The two family failure modes (the cage, the abandonment) with the antidote sentence for each.",
      ],
      practical: [
        "Demonstrate the three-icon phone setup and the anchored alarm for a real household's medicine schedule — the engineering delivered in ten minutes.",
        "Take the goals history: the patient's valued roles elicited and converted into the programme's written targets — the prescription the worksheets never write.",
      ],
      longAnswer: [
        "Design a memory rehabilitation programme for a Korsakoff patient with an illiterate wife (the evergreen Indian viva): the household-prosthetic answer sheet — the formalised systems, the errorless teaching, the trained family, the safety engineering.",
        "Compensation versus restoration in memory rehabilitation: the evidence verdict and its clinical translation.",
      ],
    },
    neetPg: {
      highYield: [
        "THE VERDICT: four decades of restoration drills fail the transfer test (trained lists improve, life unchanged); compensation-focused approaches (external systems, errorless teaching, environment) deliver functional gains — medications taken, appointments kept, roles retained.",
        "THE ASSESSMENT TRIO: storage broken (Alzheimer's, Korsakoff → prosthetics/environment); retrieval weak (TBI, depression, ageing, frontal → cue-based strategies); prospective failing (the 'forgets to do' → BUILT: alarms, one-place rituals, implementation intentions).",
        "THE ERRORLESS LAW: the amnesic recorder stores its own mistakes — each error risks being recorded as the lesson; supply the answer first, keep success at 100% (Glisky-Schacter vanishing-cues lineage).",
        "SPACED RETRIEVAL: successful recall tested at expanding intervals (immediate, 30 s, 2 min, 10 min, hours, day) — each success deepening the trace; the best-validated fact-planting technique in Alzheimer's and amnesia (Camp lineage).",
        "THE PROSTHETIC TIER: the memory book (its USE being the skill trained), the phone-as-brain, the one-place-one-object doctrine, the medicine engineering (compartment box + the chai-anchored alarm).",
        "PROSEDURAL LEARNING SURVIVES: the bicycle kind of memory outlasting the episodic — the surviving channel the routines and errorless methods are built on.",
        "GOAL-DRIVEN PROGRAMMES: the patient's valued roles as the engine — outperforming generic worksheets everywhere; role-loss what the family actually mourns.",
        "THE TWO FAILURE MODES: the dependency cage (over-help retiring skills faster than the disease — prompt the system, not the answer) and the abandonment crash (expected cure, got plateau, stopped — honest goal-setting at prescription).",
        "FUNCTION NOT SCORES as the outcome measure: the list-improvement report as the failed paradigm's signature; the grandfather-managing-his-tablets as the success.",
        "THE ENVIRONMENTAL TIER: every cue the environment carries is memory the person need not hold — signage, colour-coded doors, the clock-and-calendar wall, the loop-home garden path.",
        "THE INDIAN DELIVERY: the household's existing prosthetics formalised (calendar, ledger, tiffin, the knot in the pallu); the trained family member outperforming the nonexistent clinic; the grandchild's alarm-setup as the de facto rehab workforce.",
        "THE COMMERCIAL INVERSION: the apps and courses selling restoration against the evidence — the honest clinic sells engineering; the prescription pad is a diagram.",
      ],
      pyqConcepts: [
        "Errorless vs trial-and-error learning — the viva anchor with the mechanism attached.",
        "Spaced retrieval mechanics — the short note with the expanding intervals listed.",
        "The Korsakoff-with-illiterate-wife programme design — the Indian answer sheet (the household-prosthetic tier).",
        "The compensation-versus-restoration verdict — the discussion question the evidence synthesis settles.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A retired professor with MCI, his household beginning to absorb his functions (the daughter-in-law now managing his medicines 'to help him'), presenting for 'memory exercises': the three-question assessment; the maintenance-tier prescription — the strategy teaching, the goals drawn from his own roles (the market ledger, the evening prayer), the protected-roles list defended against the loving takeover, the diary introduced jointly, the eight-week review pre-booked — the window defended before the wholesale replacement of function completes it.",
        "A Korsakoff mill worker whose wife is literate only in Telugu, the family asking 'what is the point of a diary she cannot write': the household-prosthetic prescription — the voice-note phone, the picture-board, the shop ledger she already keeps, the knot she already ties; the formalisation of her own system as the rehabilitation; the anchored alarm with the tablets on the chai plate; the family session that names her the diary-owner and the grandchild the alarm-technician — the engineering answer that never required the script the family thought it did.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Restoration drills fail; compensation works — the field's founding verdict.",
        "Errorless learning: errors are dangerous for the amnesic learner (the answer supplied first).",
        "Spaced retrieval: recall at expanding intervals — the fact-planting technique.",
        "Procedural learning survives amnesia — exploit it in care.",
        "The dependency cage: over-help retires skills faster than the disease.",
        "Function, not scores, is the rehabilitation's outcome measure.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The verdict delivered plainly at the FIRST consultation is the programme's foundation: it inoculates the family against the restoration economy, protects their money, and installs the holding-as-success frame that funds the endurance the engineering requires.",
        "The one structured family session is the Indian delivery channel: the errorless rule, the 30-second wait, the one-instruction grammar, the named diary-owner, the protected-roles list — one session, teachable by any counsellor, transforming the household from a correction-machine into a prosthetic team.",
        "The formalisation principle beats the importation every time: the household's own calendar, ledger, tiffin rhythm and sacred shelves outperform any imported kit because they already run — the clinician's craft is seeing the existing prosthetics and building on them.",
        "The grandchild's ten-minute alarm setup is the country's de facto rehabilitation workforce — the structured session that multiplies it (which alarm, which icons, the one-place rule) is the health system's cheapest scaling move.",
        "The review at eight weeks is where the programme is won or lost: the function outcomes measured against the WRITTEN goals, the plateau reframed as the success it is, and the faltering family caught before the crash — the consultation that the worksheet economy never schedules.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The ledger and the evening prayer",
      presentation: "A retired professor's household absorbing his functions out of kindness — the window defended with a diary, a list and an honest frame.",
      initialPresentation: "A 71-year-old retired professor with MCI presented with his son for 'memory exercises'. The assessment found the recording wobbling but the roles intact — and the household already mid-takeover: the daughter-in-law had assumed his medicines 'to help him', the shop ledger he had kept for forty years recently 'simplified' by the son, and the evening prayer he led now occasionally pre-empted 'to save him the embarrassment'.",
      history: "MCI diagnosed eight months earlier, the annual check stable; the family's anxiety rising with each minor slip; no depression; the professor's own distress at the role-losses politely unspoken in front of the family; the request for 'exercises' the son had researched online.",
      examination: "The three-question assessment: storage wobbling (the new-episodic recording failing at the edges), retrieval intact (cueing helps immediately), prospective fraying (the missed tablets when the household forgot to remind); the valued-roles history taken separately and privately — the ledger, the prayer, the roses.",
      diagnosis: "Mild cognitive impairment in the intervention window — the functional takeover underway, the roles at risk, the rehabilitation amenable.",
      management: "The honest verdict first (the exercises that promise regrowth have failed every fair test; the engineering returns what they never did); the maintenance-tier prescription: the strategy teaching for the retrieval floor, the diary introduced jointly with the professor and his wife, the anchored alarm for the medicines, the protected-roles list written and explained to the household (the ledger, the prayer, the watering-can stay HIS); the eight-week review pre-booked with the written goals.",
      outcome: "At eight weeks: the medicines managed through the alarm-and-anchor chain; the ledger restored to his hands with the son's monthly audit; the prayer led throughout; the family's anxiety measurably lower on the holding-as-success frame — the window defended, each month of preserved role a month of preserved selfhood.",
      teachingPoints: [
        "The intervention window: the engineering begun before the household has replaced the person's function wholesale.",
        "The protected-roles list is the dependency-cage antidote — the loving takeover reversed with a written list and one family session.",
        "The goals from the patient's OWN roles (the ledger, the prayer) — the programme the worksheets never write.",
        "The honest verdict at prescription time funds the endurance: holding as success, stated first, reviewed at eight weeks.",
      ],
    },
    {
      title: "The diary she could not write",
      presentation: "A Korsakoff mill worker's family asking 'what is the point of a diary she cannot write?' — and the engineering answer that never required the script.",
      initialPresentation: "A 58-year-old mill worker, six months into an established Korsakoff syndrome, was brought by his wife and grandson for follow-up. The family had been given a memory diary at the district hospital and abandoned it in a drawer — 'what is the point of a diary she cannot write?' being the wife's honest question, the grandson's phone the household's only technology, and the question-loop each morning the household's unsolved problem.",
      history: "Korsakoff syndrome six months established (the alcohol route, abstinent since, thiamine maintained); the wife literate in Telugu only, managing money, medicines and appointments; the grandson (14) the household's technologist; the morning question-loop and the missed afternoon doses the two unsolved frictions.",
      examination: "The architecture stable (immediate intact, recent ruined, remote retained); the procedural channels demonstrably preserved (he still folded the shop's papers, walked the same route, sang the same songs); the household's existing prosthetics inventoried — the wall calendar, the tiffin system, the knot his wife tied in her sari pallu for the market days.",
      diagnosis: "Established Korsakoff syndrome in a household with unformalised prosthetics — the engineering tier never matched to the family's actual instruments.",
      management: "The household-prosthetic prescription: the voice-note phone for the wife's reminders (no script needed — her own voice, Telugu); the picture-board for the day's structure; the anchored alarm with the tablets ON the chai plate (the cue chain ending in the medicine, not the snooze); the today-page kept by the WIFE (one line per visitor, one line per event) with him trained errorlessly to point at it; the grandson given the ten-minute alarm-technician role; the family session naming her the diary-owner and pre-counselling the cage and the crash.",
      outcome: "The question-loop shrinking as the today-page became the household's habit; the afternoon doses caught by the anchored alarm within the fortnight; the wife's knot and calendar formalised into the system they had always been — the engineering answer that never required the script the family thought it did.",
      teachingPoints: [
        "The literacy-adjusted prosthetic: the voice-note phone, the picture-board, the ledger she already keeps — her own system formalised, not an imported one.",
        "The anchored alarm's chain audit: the cue must end in the medicine (the tablets on the plate), not in the snooze.",
        "The today-page kept by the family and pointed to by the patient — the question-loop shrinking by becoming the book's job.",
        "The grandchild's ten minutes as the de facto rehabilitation workforce — the one structured session that multiplies it.",
      ],
    },
  ],
  clinicalPearls: [
    "Restoration fails, compensation works — the forty-year verdict; the engineering delivers what the exercises never did: roles, independence, dignity.",
    "Assess before you prescribe: storage broken → prosthetics; retrieval weak → strategies; prospective failing → build the alarms and anchors — the misprescription is the commonest error.",
    "The amnesic recorder stores its own mistakes — supply the answer before the guess; errorless is the founding law of teaching this brain.",
    "Spaced retrieval: recall (not re-read) at expanding intervals — the best-validated fact-planting technique in amnesia and dementia.",
    "Procedural learning survives: the bicycle kind of memory outlasting the episodic — the surviving channel the routines are built on.",
    "The memory book works when its USE is the skill taught — errorlessly, jointly, anchored to a fixed daily moment.",
    "The one-place-one-object doctrine deletes an entire class of 'lost' crises by physical law.",
    "The cue chain must end in the action: the alarm, the anchor, the medicine — tablets ON the chai plate, not the snooze.",
    "Prompt the system, not the answer — the dependency-cage antidote; let the hands do what the hands still do.",
    "Holding is this treatment's success: the eight-week review measuring function against written goals, the plateau reframed.",
    "Function, not scores: the grandfather managing his tablets and the market ledger is the outcome that matters.",
    "Formalise the existing household system — the calendar, the ledger, the tiffin rhythm, the knot in the pallu — rather than importing an alien kit.",
    "The cheapest effective rehabilitation programme in the world: a wall calendar, a routine, and a trained spouse.",
  ],
  highYieldSummary: [
    "Definition: memory rehabilitation = the compensatory engineering that runs daily life on the memory that remains — external systems that remember FOR the person, methods that work WITH the amnesia (errorless learning, spaced retrieval, vanishing cues), environments that carry the cues, and the family trained as the prosthetic team — never the attempt to regrow the damaged storage.",
    "The evidence: restoration drills fail the transfer test (trained lists improve, life stays broken); the compensation tier delivers functional gains on real targets (medications taken, appointments kept, meals cooked, roles retained) across the amnesias and dementias — the field's founding verdict, settled over four decades.",
    "The assessment: which memory is broken — STORAGE (Alzheimer's, Korsakoff: prosthetics and environment, never the drills), RETRIEVAL (TBI, depression, ageing, frontal: the cue-based strategy tier that genuinely helps), or PROSPECTIVE (the most functionally devastating and most treatable: never trained in the abstract, always BUILT — alarms, one-place rituals, the when-then grammar).",
    "The method tier: errorless learning (the amnesic recorder stores its own mistakes — the answer supplied first, success at 100%); spaced retrieval (successful recall at expanding intervals — each success multiplying the trace's durability; the best-validated fact-planting technique); vanishing cues (the scaffold faded backward as success holds); implementation intentions and routines (the when-X-then-Y grammar; cognition offloaded to the clock).",
    "The prosthetic and environmental tiers: the memory book (its USE the skill taught); the phone-as-brain (simplified, alarmed, photo-labelled); the one-place-one-object doctrine; the medicine engineering (the compartment box plus the anchored alarm); the signage, colour-coding, the calendar wall, the loop-home path — every cue the environment carries being memory the person need not hold.",
    "The human tier: the family trained in one structured session (the errorless rule, the 30-second wait, the one-instruction grammar, the joint diary-filling); the two failure modes pre-counselled — the dependency cage (over-help retiring skills; the antidote: prompt the system, protect the roles) and the abandonment crash (expected cure, got plateau; the antidote: honest goal-setting at prescription); the goals drawn from the patient's own valued roles, role-loss being what the family actually mourns.",
    "The Indian tier: the household already running on prosthetics (the festival calendar, the tiffin system, the knot in the pallu, the shop ledger) — formalised, not replaced; the joint family as scaffold and risk (the earlier-arriving cage, the diffuse responsibility); the smartphone paradox (reach vast, training thin — the grandchild's ten-minute setup as the de facto workforce); the programme nearly free (₹50-400 for the physical tier, approx 2026) against the metro worksheet economy (₹500-1,500/session of dubious transfer); the tele-counselling session as the scaling channel; the review at eight weeks with function, not scores, as the measure.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "memrehab-quiz-1",
      question: "The consistent verdict of four decades of memory-rehabilitation research:",
      options: ["Restorative drills produce broad functional transfer", "Compensation-focused approaches deliver functional gains; restorative gains stay task-bound", "Neither approach shows any benefit", "Pharmacotherapy outperforms all psychosocial methods"],
      correctIndex: 1,
      explanation: "The trained list improves and life does not; the engineering tier is where the function lives.",
      afterSectionId: "mechanism",
    },
    {
      id: "memrehab-quiz-2",
      question: "During naming practice, the amnesic patient guesses wrongly twice before the therapist supplies the word. In errorless learning this constitutes:",
      options: ["Good effort: errors build learning", "A training failure: each error risks being recorded as the lesson itself", "Irrelevant to learning", "A deliberate challenge technique"],
      correctIndex: 1,
      explanation: "The amnesic recorder stores the mistake with the target; the errorless logic exists precisely to prevent this.",
      afterSectionId: "management",
    },
    {
      id: "memrehab-quiz-3",
      question: "'The tablet must be remembered at 9 with the morning chai.' This target belongs to:",
      options: ["Restorative list training", "Prospective-memory engineering: the alarm plus the physical anchor, the when-then grammar", "Mnemonic imagery", "Increasing cholinesterase dose"],
      correctIndex: 1,
      explanation: "Prospective failures are built around, never drilled away — cues, alarms and anchors carry them.",
      afterSectionId: "management",
    },
    {
      id: "memrehab-quiz-4",
      question: "Spaced retrieval's defining mechanics:",
      options: ["Re-reading material at fixed daily intervals", "Successful recall tested at expanding intervals — each success deepening the trace", "Passive listening to recordings", "Massed repetition in one session"],
      correctIndex: 1,
      explanation: "Recall-not-review, at expanding gaps — the planting technique for durable specific facts.",
      afterSectionId: "management",
    },
    {
      id: "memrehab-quiz-5",
      question: "The family of a mild-Alzheimer's patient has begun doing every task for him. The correct programme correction:",
      options: ["Congratulate the family: total care is the goal", "The dependency cage: prompt the SYSTEM not the ANSWER, protect his remaining roles, schedule the tasks he still performs", "Withdraw all family involvement", "Prescribe an antipsychotic"],
      correctIndex: 1,
      explanation: "Over-help retires skills faster than the disease does; the trained team prompts aids and preserves roles.",
      afterSectionId: "differential",
    },
    {
      id: "memrehab-quiz-6",
      question: "The best Indian delivery design for memory rehabilitation at district scale:",
      options: ["Metro memory clinics for all", "The household-prosthetic package: formalise the family's existing aids, train one member via tele-counselling, review at eight weeks", "Imported computer worksheets, one per patient", "Restorative app subscriptions for every household"],
      correctIndex: 1,
      explanation: "The prosthetic tier is nearly free; the family is the delivery system; the review closes the loop — the engineering answer scaled to the treatment gap.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "State the restoration-versus-compensation verdict and the two lines of evidence behind it.", answer: "THE VERDICT: restoration drills largely fail — compensation largely works. EVIDENCE ONE (the failed transfer test): the classic controlled trials taught patients lists and tables with hours of practice; the practiced lists improved, transferred to NOTHING, and life with family report stayed unchanged — the restoration dream failing precisely at the test that matters. EVIDENCE TWO (the functional gains): the unglamorous interventions — a memory book used with spouse coaching, an alarm-and-checklist system for a head-injured student, environmental restructuring for a dementia household — repeatedly deliver functional gains on REAL targets: medications taken, appointments kept, meals cooked, roles retained. The clinical translation: say the negative result plainly to families (it inoculates them against the apps and herbal courses that promise the gym), then show them what the engineering does.", topic: "Evidence" },
    { question: "The three-floors assessment (storage, retrieval, prospective); name a syndrome each and the matching intervention tier.", answer: "STORAGE (the recording room): Alzheimer's and Korsakoff — the new-episodic filing broken; the prescription is PROSTHETICS AND ENVIRONMENT, never the effortful rehearsal (prescribing to the broken floor is the commonest error: the effortful shopping-list rehearsal for a patient who cannot file). RETRIEVAL (the filing room): TBI, depression, ageing, frontal syndromes — the recording intact, the search weak (the tip-of-the-tongue, the word found when the category is given); the prescription is the CUE-BASED STRATEGY TIER — mnemonics, organised encoding, vanishing cues — the population the 'memory strategy' training genuinely helps. PROSPECTIVE (the doing-of-it): the tablet not remembered at nine, the gas left on — the most functionally devastating and most treatable; the prescription is ENGINEERING — alarms, the one-place rituals (tablets on the plate with the chai), the implementation intentions ('when the chai comes, then the tablet') — never trained in the abstract, always BUILT.", topic: "Assessment" },
    { question: "Why is trial-and-error learning dangerous for the amnesic patient? Give the errorless alternative in a one-sentence rule.", answer: "THE DANGER: ordinary pedagogy assumes the learner can hold the guess beside the answer and correct it — but the error-correction memory is itself the broken machinery here, so the amnesic recorder stores the WRONG GUESS with the target, and a wrong answer becomes an unintended lesson (two competing versions of the name now in the trace, and no episodic memory of which one was corrected). THE RULE: 'Give the answer before the guess — supply the word immediately, have it copied and repeated, and keep success at one hundred percent.' The practical riders: some error is unavoidable in life (the law governs the TEACHING, not the living); and there is a mild counter-case for challenge where retrieval is the weak floor (the assessment-first rule resolving the tension); but for the storage-broken learner, the elimination of guessing is the founding discipline.", topic: "Methods" },
    { question: "Walk spaced retrieval through its expanding intervals for one concrete target fact.", answer: "THE TARGET: the new aide's name ('Meena') for a patient with mild Alzheimer's. THE WALK: ask 'what is your new helper's name?' — she answers correctly; ask again at 30 SECONDS (correct); again at 2 MINUTES (correct); again at 10 MINUTES (correct); again at AN HOUR (correct); again LATER THAT DAY (correct); again TOMORROW (correct) — each successful recall at each expanding gap multiplying the trace's durability, exactly as the consolidation literature predicts. THE FAILURE RULE: if she fails at any interval, the gap shortens (back to the last successful interval) and rebuilds — the expansion tracks the success, never the calendar. THE VARIANTS: the vanishing-cues companion fading the prompt backward (M-E-E… → M-E… → M…) as success holds; the pairing with errorless presentation on the first trials. THE SCOPE: the best-validated technique for planting SPECIFIC facts — the walker's location, the new home's name, 'I have moved to my son's house' — never a general memory cure.", topic: "Methods" },
    { question: "Design the prosthetic tier for: a retired professor with MCI; a Korsakoff mill worker; an illiterate farm-owning elder with early Alzheimer's.", answer: "THE PROFESSOR (MCI, retrieval intact, roles at risk): the memory book kept by HIMSELF (the today-page, the where-I-put-it register — his USE of it the trained skill); the phone-as-brain with calendar alarms and photo-labels (tech-comfortable); the one-place doctrine for keys and spectacles; the market ledger and the evening prayer protected on the written roles list; the eight-week function review. THE MILL WORKER (Korsakoff, storage gone, procedures preserved): the today-page kept by the WIFE (one line per visitor and event), him trained errorlessly to POINT at it; the anchored alarm with the tablets on the chai plate; the picture-board for the day's structure; the song-and-route routines exploited as the surviving memory; the safety locks and the ID card. THE FARM ELDER (early Alzheimer's, illiterate): the VOICE-NOTE phone (her own reminders in her own tongue — no script needed); the picture-based memory board; the knot she already ties and the shop ledger she already keeps, formalised; the kitchen-god's shelf as the fixed medicine place; the when-then grammar delivered verbally ('when the lamp is lit, then the tablet'); the grandson as the alarm technician. The design principle across all three: the tier matched to the floor, the script and the household — never the imported kit.", topic: "Prescription" },
    { question: "The two family failure modes (cage, abandonment); give the antidote sentence for each.", answer: "THE DEPENDENCY CAGE: every need pre-empted by loving hands — the patient's remaining skills going dark from disuse, the servants and daughters-in-law absorbing each wobbling function faster than the disease takes it (the cage arrives EARLIER in the joint family). THE ANTIDOTE SENTENCE: 'It feels kinder and it is quietly cruel: unused skills die faster than used ones — the diary, the tablets, the watering-can stay HIS; the check behind him stays ours' — the prompt-the-SYSTEM-not-the-answer discipline (point to the diary; do not supply the answer), the protected-roles list written and defended, the scheduled tasks he still performs kept his. THE ABANDONMENT CRASH: the family that expected cure, got plateau, and stopped everything — the diary in the drawer, the alarms unanswered, the whole programme dismantled on the misunderstanding of what success looks like. THE ANTIDOTE SENTENCE: 'We are not waiting for the memory to return — we are watching independence HOLD, and holding is this treatment's success' — the honest goal-setting AT PRESCRIPTION TIME (never at the plateau), the eight-week review pre-booked to convert the plateau into the demonstrated success it actually is.", topic: "Family tier" },
    { question: "What makes a rehabilitation goal 'good'? Give two examples in the patient's own economy of meaning.", answer: "A good goal is drawn from the PATIENT'S valued roles (never the clinic's generic worksheet), is FUNCTIONAL and observable (a real task of daily life, not a test score), is achievable on the surviving architecture (matched to the floor the assessment found), and carries a defined review point (the eight-week measure). EXAMPLE ONE: 'The grandfather leads the evening prayer each day' — the prayer being the household's fixed ritual, the hymns surviving in procedural memory long after the episodic fails, the role's preservation protecting his standing in the family (the role-loss being what the family actually mourns). EXAMPLE TWO: 'He manages the shop's cash box under his son's weekly audit' — the ledger he has kept for forty years being his own existing prosthetic (formalised, not replaced), the arithmetic surviving in the overlearned channels, the audit as the safety net that lets the role stay his. Each goal: concrete, role-based, reviewable — and each outperforming every generic worksheet the clinic ever printed, precisely because the motivation is the patient's own economy of meaning.", topic: "Prescription" },
  ],
  faqs: [
    { question: "Will these exercises bring his memory back, doctor?", answer: "Honestly, the memory itself does not regrow; the exercises that promise it have failed every fair test. What works is the engineering around it — systems, routines and our training — and those return something the exercises never did: his roles and his independence." },
    { question: "She keeps asking the same thing — will the diary not stop that?", answer: "The diary converts the asking into a turning of a page: she asks, we answer ONCE and point to the today-page; over weeks the pointing itself becomes the habit. The question-loop shrinks by becoming someone else's job — the book's." },
    { question: "If we do everything for him, is that not kinder?", answer: "It feels kinder and it is quietly cruel: unused skills die faster than used ones. We will teach the balance — the diary, the tablets, the watering-can stay HIS; the check behind him stays ours." },
    { question: "He never remembers the alarm — he switches it off and forgets it.", answer: "Then the alarm alone is not enough: it needs the anchor (the tablet ON the chai plate, the diary AT the alarm) so the cue chain ends in the medicine, not in the snooze." },
    { question: "She is a farmer's wife, she cannot write — what use is a diary?", answer: "Her prosthetic needs no script: the voice-note phone, the picture-board, the ledger she already keeps, the knot she already ties — we formalise her own system; her household has run on memory aids for decades." },
    { question: "The phone is too complicated for my father.", answer: "Then the phone is ours, not his: we strip it to three icons, we alarm it, and we teach the ONE gesture he needs at each cue; the young ones at home can own the rest." },
    { question: "How long before we see it working?", answer: "The systems take weeks, the habits take a month or two, and the honest review is at eight weeks: we are not waiting for memory to return, we are watching independence hold — and holding is this treatment's success." },
    { question: "Am I to supervise everything, then, forever?", answer: "Your stamina is part of the prescription: the fixed routine does half your work, the one-place rule does another share, and our reviews rebalance it — a collapsed caregiver ends the programme for both of you." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "Cicerone K et al. — the cognitive-rehabilitation evidence syntheses (the archive for the what-works verdicts)" },
      { source: "WHO iSupport-tier caregiver-training framing — the family-session delivery logic adapted for India" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.14 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Wilson B — the memory-rehabilitation programme of work: the practical errorless-compensation paradigm; her trials of the memory book and external aids in TBI and stroke" },
      { source: "Camp C — spaced-retrieval development in dementia populations; the combined errorless-spaced literature" },
    ],
    reviews: [
      { source: "Glisky E, Schacter D — the vanishing-cues and errorless-learning founding literature with amnesic patients" },
      { source: "Kessels R, de Haan E — the errorless-learning and vanishing-cues reviews (the meta-analytic tier)" },
      { source: "Clare L, Woods R — the definitive rehabilitation-in-early-dementia review lineage (compensation, strategy, maintenance tiers; goal-setting and individuality findings)" },
      { source: "Troyer A — the MCI memory-strategy and compensation literature" },
      { source: "Sohlberg M, Mateer L — external-memory-aid training in TBI (the prosthetic canon; prospective-memory engineering)" },
      { source: "Hopper T, Bayles K et al. — errorless methods and environmental cueing in dementia communication; Gitlin L et al. — environmental interventions and caregiver-outcome dyads" },
      { source: "The Indian tier — NIMHANS neuropsychology programme literature, ARDSI family-training materials, DMHP/tele-counselling documentation (context, honestly labelled)" },
    ],
    patientResources: [
      { source: "The household-prosthetic package (the today-page, the anchored alarm, the one-place law, the protected-roles list) — the instruments this course hands to every Indian family" },
      { source: "Tele-MANAS 14416 — the structured family session's delivery channel at district scale" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: the honest verdict, the systems that remember FOR, the protected roles, the eight-week frame.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The verdict, the three questions, the errorless law, spaced retrieval, the two failure modes.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "33 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "41 min",
      description: "Everything — the household-formalisation craft, the family session script, the eight-week review discipline, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The verdict, the assessment trio, the outcome measure.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the restoration-versus-compensation verdict with its two evidence lines cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The survivors' inventory, the errorless law, the prosthetic principle.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the environment outperforms the drills and why errors become lessons." },
    { number: 3, title: "Clinical Practice", description: "The tiers prescribed, the methods applied, the review discipline.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the three questions, walk spaced retrieval and design a household's prosthetic tier." },
    { number: 4, title: "Indian Context", description: "The formalisation principle, the family session, the grandchild workforce.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the formalise-not-import prescription and the one structured family session." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the Korsakoff-programme design essay cold and recite the verdict without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.14 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Glisky E, Schacter D — the vanishing-cues and errorless-learning founding literature with amnesic patients (1980s-90s)", sourceType: "primary", year: "1980s–1990s", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Wilson B — the memory-rehabilitation programme of work: the errorless-compensation paradigm; the memory-book and external-aid trials in TBI and stroke", sourceType: "primary", year: "1980s–2010s", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Kessels R, de Haan E — the errorless-learning and vanishing-cues reviews (the meta-analytic tier)", sourceType: "review", year: "2000s", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Camp C — spaced-retrieval (the expanding-retrieval method) development in dementia populations", sourceType: "primary", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Clare L, Woods R — the rehabilitation-in-early-dementia review lineage (compensation, strategy, maintenance tiers; goal-setting and individuality findings)", sourceType: "review", year: "2000s–2010s", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Troyer A — the MCI memory-strategy and compensation literature", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Sohlberg M, Mateer L — external-memory-aid training in TBI (the prosthetic canon; prospective-memory engineering)", sourceType: "primary", year: "1980s–2000s", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Cicerone K et al. — the cognitive-rehabilitation evidence syntheses (the honest what-works verdicts)", sourceType: "systematic-review", year: "2000s–2020s", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Hopper T, Bayles K et al. — errorless methods and environmental cueing in dementia communication; Gitlin L et al. — environmental interventions and caregiver-outcome dyads", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "The Indian tier — NIMHANS neuropsychology programme literature, ARDSI family-training materials, DMHP/tele-counselling documentation; household cost realities (approx 2026)", sourceType: "review", year: "2010s–2020s", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The founding verdict: restoration drills (lists, tables, computer games) fail the transfer test — practiced skills improve, nearby life stays broken; compensation-focused approaches (external systems, errorless teaching, environmental restructuring) deliver functional gains on real targets (medications taken, appointments kept, meals cooked, roles retained).", grade: "established", sources: ["S3", "S9"] },
    { text: "The assessment trio: storage failure (Alzheimer's, Korsakoff) prescribing prosthetics-and-environment; retrieval weakness (TBI, depression, ageing, frontal syndromes) prescribing the cue-based strategy tier; prospective failure (the remembering-to-remember) prescribing pure engineering (alarms, one-place rituals, implementation intentions) — the misprescription (drills for the storage-broken, prosthetics-only for the retrieval-weak) being the commonest clinical error.", grade: "established", sources: ["S6", "S7", "S8"] },
    { text: "The errorless law: the amnesic brain records its own mistakes — each error an unintended lesson through the broken error-correction machinery — so the answer is supplied before the guess and success held at 100%; the evidence favouring it across the amnesias, with the practical rider of a mild counter-case for challenge where retrieval is the weak floor.", grade: "established", sources: ["S2", "S4"] },
    { text: "Spaced retrieval: successful recall tested at expanding intervals (immediate, 30 s, 2 min, 10 min, hours, day), each success multiplying the trace's durability — the single best-validated technique for planting specific facts in Alzheimer's and amnesia; vanishing cues its partner, the scaffold faded backward as success holds.", grade: "established", sources: ["S5"] },
    { text: "The prosthetic tier: the memory book (its USE as the trained skill, introduced jointly with the family, treated as the extension of the self); the phone-as-brain (alarms, photo-labels, voice notes — simplified to the needed gestures); the one-place-one-object doctrine deleting a class of 'lost' crises; the medicine engineering (compartment box plus the anchored alarm).", grade: "established", sources: ["S3", "S8"] },
    { text: "The environmental tier: signage, colour-coded doors, the visible clock-and-calendar wall, the well-lit corridor without patterned flooring, the loop-home path — every cue the environment carries being memory the person need not hold; errorless environmental cueing extending to communication in dementia.", grade: "established", sources: ["S10"] },
    { text: "The human tier: the family trained as the prosthetic team (the errorless rule, the 30-second wait, the one-instruction grammar, the joint diary-filling) with the two failure modes counselled explicitly — the dependency cage (over-help retiring skills faster than the disease; the antidote: prompt the system not the answer, protect the roles) and the abandonment crash (expected cure, got plateau; the antidote: honest goal-setting at prescription time with the eight-week review pre-booked).", grade: "established", sources: ["S3", "S6"] },
    { text: "Goal-driven programmes outperform generic worksheets: the goals drawn from the patient's valued roles, with role-loss being what the family actually mourns — the individuality and goal-setting findings of the early-dementia review lineage.", grade: "established", sources: ["S6", "S7"] },
    { text: "The outcome measure: function, not scores — the rehabilitation reporting list-improvement reporting the failed paradigm; one reporting the grandfather managing his tablets and the market ledger reporting success; the eight-week review with written goals as the loop that closes the programme.", grade: "established", sources: ["S9"] },
    { text: "The Indian tier: the household already running on prosthetics (the festival calendar, the tiffin system, the knot in the pallu, the shop ledger) — formalised rather than replaced; the joint family as scaffold and risk (the earlier-arriving cage, the diffuse responsibility — the family meeting assigning ONE diary-owner, ONE medicine-checker and the protected-roles list as the intervention); the smartphone paradox (the grandchild's alarm setup as the de facto workforce); the programme nearly free (₹50–400 physical tier, approx 2026) against the metro worksheet economy (₹500–1,500/session); the tele-counselling session as the scaling channel.", grade: "supported", sources: ["S11"] },
  ],
};
