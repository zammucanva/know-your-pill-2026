import type { PsychiatryCourse } from "./types";

/**
 * MANAGING DEMENTIA — canonical Psychiatry course
 * (migration batch 7, Group A — neurocognitive disorders, part 2 of 2).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/dementia-management.md — untouched foundation),
 * re-researched against current guidance (the NICE dementia-
 * guideline lineage, the Brodaty caregiver-intervention trials,
 * the Sampson palliative-dementia evidence, WHO iSupport) with
 * per-claim provenance. A CONCEPT course: the practical umbrella
 * that the disease-specific notes point into — it teaches the
 * five-floor system of care, not one disorder.
 *
 * Drug routes: sertraline (the SSRI tier for mood-driven BPSD and
 * the carer's own depression) has a KYP lesson and is linked; the
 * cholinesterase-inhibitor/memantine tier, the antipsychotic tier
 * and the whole BPSD pharmacology live in the disease courses and
 * are recorded in contentGaps, never invented here.
 */
export const dementiaManagementCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "dementia-management",
  title: "Managing Dementia — The Five Floors",
  shortName: "Dementia care",
  kind: "concept",
  category: "Neurocognitive Disorder",
  groupLetter: "A",
  groupName: "Neurocognitive disorders",
  learningPath: ["Psychiatry", "Neurocognitive Disorders", "Managing Dementia"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "33 min",
  yieldRating: "high",
  primaryAudience: "resident",

  tagline:
    "Whatever the cause of a dementia, the management always has the same five floors — tell it truly, treat what is treatable, drug the symptoms knowingly, engineer the environment, and support the family who does the caring — and the quality of life five years from diagnosis depends less on which medicine was chosen than on how well those floors were built.",

  summary:
    "This is the umbrella course: it puts the practical SYSTEM of dementia care in one place and points to the disease-specific courses (Alzheimer's, vascular, Lewy body, frontotemporal, HIV, Parkinson's, the amnesic and alcohol-related courses) for the details each of them owns. Dementia management is a long, multi-year construction project that begins the day of diagnosis, and most of the suffering families remember was PREVENTABLE: the crisis admissions caused by constipation and urinary infections; the lost money and legal rights because planning came too late; the caregiver's own breakdown because nobody asked about her; the fights over bathing and feeding that a change of technique would have dissolved. The five floors, in their order: Floor 1, tell it truly — the disclosure and planning consultation that converts a chaotic decline into a managed project; Floor 2, treat what is treatable — the reversible-load checklist (PAIN FUSES: pain, activity/constipation, infection, night and sleep, faecal impaction, urine retention, senses, environment, sedating drug burden) run at every review and at every 'worsening'; Floor 3, drug the symptoms knowingly — the modest cognition tier, the antipsychotic decision with its mortality warning carried openly, the stop-list discipline; Floor 4, engineer the environment and read the behaviour — routine as memory, the unmet-need method, the technique corrections that dissolve the bathing and dining wars; Floor 5, support the family — the load-bearing wall under everything, with the caregiver's own health monitored as vigilantly as the patient's. The evidence hierarchy that should embolden every clinician: caregiver intervention trials reduce institutionalisation and carer depression with effect sizes EXCEEDING the drug effects — in India, where virtually all care is home care by one doctor plus one family, the five floors are the treatment with the strongest evidence in the whole field.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Organise dementia management into the five floors and explain why the order matters.",
    "Run the reversible-load checklist (PAIN FUSES) that precedes any escalation of symptoms.",
    "Match the pharmacological options to stage and to dementia subtype — including which drugs to STOP.",
    "Manage BPSD as behaviour-as-communication, with the drug ladder as second line and fixed review dates.",
    "Build the caregiver programme: education, skills, respite, monitoring and crisis plans.",
    "Sequence the legal and financial steps while insight lasts — the expiry-dated window.",
    "Manage the final phase: swallowing, feeding decisions, infections and comfort-first care.",
    "Design the realistic Indian service pathway: the family-doctor spine, PHC/district support, and the four lines that constitute the whole national infrastructure when written consistently.",
  ],
  quickFacts: [
    { label: "The five floors", value: "Tell, Treat, Drug, Dwell, De-family-support", detail: "Disclose and plan; remove the reversible load; prescribe knowingly; engineer the environment and read behaviour; support the family — the order is the architecture, each floor carrying the ones above it" },
    { label: "The checklist", value: "PAIN FUSES", detail: "Pain · Activity/constipation · Infection · Night and sleep · Faecal impaction · Urine retention · Senses · Environment · Sedating/anticholinergic burden — run at every review and every 'worsening' before any prescription change" },
    { label: "The evidence hierarchy", value: "Carer training beats drugs", detail: "Caregiver intervention trials reduce institutionalisation and carer depression with effect sizes exceeding the drug effects on life outcomes — the strongest treatment in the whole field" },
    { label: "The reserve rule", value: "Lost reserve, reversed learning", detail: "The dementing brain tips into delirium at noise, fever or a moved bed that a healthy brain shrugs off; and abilities go in reverse order of learning — songs, prayers and habits outlasting newest skills (build on the survivors)" },
    { label: "The antipsychotic decision", value: "Lowest dose, shortest time, review date written", detail: "The mortality/stroke warnings carried openly; SSRI for mood-driven behaviour first; the DLB/PDD dopamine-blocker prohibition absolute without the specialist's call (the wallet card)" },
    { label: "The legal window", value: "Insight expires silently", detail: "Nominee updates, supported decision-making under the Mental Healthcare Act 2017, disability certification (unlocks entitlements, takes months) — all requiring the capacity that only the early months hold" },
    { label: "The final-phase evidence", value: "Hand-feeding beats early tubes", detail: "Comfort and dignity comparable or better without the feeding tube's promise — the conversation held at the moderate stage in the living room, not eight times in casualty" },
    { label: "The Indian spine", value: "One doctor + one family + four lines", detail: "The realistic team; the four lines worth writing at every visit (cognition score, function level, top behaviours, carer status + next review) constituting the whole national infrastructure when done consistently; PM-JAY and Jan Aushadhi as the cost tier" },
  ],
  knowledgeGraph: [
    { label: "Alzheimer's Disease & Dementia — The Gradual Erasure", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The commonest dementia's own course, workup and cognition-tier details — the disease course this umbrella serves" },
    { label: "Vascular Dementia — The Staircase Decline", type: "condition", href: "/psychiatry/vascular-dementia/", note: "The vascular programme as Floor 2's loudest member — the risk-factor control that IS disease modification there" },
    { label: "Dementia with Lewy Bodies — The Fluctuating Dementia", type: "condition", href: "/psychiatry/lewy-body-dementia/", note: "The antipsychotic catastrophe course — the wallet-card rule this umbrella enforces across every subtype" },
    { label: "Dementia in Parkinson's Disease — The Twin Decline", type: "condition", href: "/psychiatry/parkinsons-dementia/", note: "The best cholinesterase responses and the same forbidden list — the subtype-specific tier pointing into this system" },
    { label: "Frontotemporal Dementia — When Personality Changes First", type: "condition", href: "/psychiatry/frontotemporal-dementia/", note: "The subtype where cholinesterase inhibitors do NOT belong and the behavioural floors carry everything" },
    { label: "Delirium — Acute Brain Failure", type: "condition", href: "/psychiatry/delirium/", note: "Floor 2's discipline teacher — the reversible-load cascade every 'sudden worsening' runs first" },
    { label: "Amnesic Syndromes — The Punched-Out Memory Hole", type: "condition", href: "/psychiatry/amnesic-syndromes/", note: "The routine-and-labels home system this umbrella generalises — the family as hippocampus" },
    { label: "Memory Rehabilitation — The Engineering Discipline", type: "condition", href: "/psychiatry/memory-rehabilitation/", note: "Floor 4's method tier: errorless learning, spaced retrieval, the prosthetic environment built on surviving abilities" },
    { label: "Alcohol-Related Dementia — The Engine You Can Switch Off", type: "condition", href: "/psychiatry/alcohol-related-dementia/", note: "The abstinence architecture as the disease-specific Floor 3 that outperforms every tablet" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The mood floor: depression treated as disease in the patient AND screened in the carer — the one-year screen that protects the wall" },
    { label: "Acetylcholine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The chemistry behind the modest cognition tier — deepest in the synucleinopathies, absent in FTD" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The mood-driven-BPSD tier's target — the SSRI before the antipsychotic in the right behavioural readings" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "The SSRI tier for mood-driven behaviour and the carer's own depression — the one drug this umbrella links" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Two facts about the dementing brain drive everything in this course. First, the brain has LOST ITS RESERVE: a noise, a fever, a moved bed that a healthy brain shrugs off will tip a demented one into delirium — which is why reversible-load vigilance (the PAIN FUSES tier) is a permanent programme, not a one-time workup, and why 'sudden worsening' is a load problem until proven otherwise. Second, abilities are lost in REVERSE ORDER OF LEARNING: the most recently acquired functions (newest memories, novel planning, inhibition) go first; the oldest (songs, prayers, habitual routines, procedural skills) persist. Management exploits this arithmetic instead of mourning it: it stops trying to teach the lost functions and instead BUILDS LIFE ON THE SURVIVING ONES — routine as memory, ritual as comfort, music as language. The behavioural symptoms (BPSD) are the brain's remaining communication channel: the person who cannot say 'my tooth hurts' says it as refusal to eat, as aggression during face-washing, as nighttime wandering. Read the behaviour, treat the cause. The two facts together explain the evidence hierarchy that organises the whole field: the environmental and caregiver tiers outperform the pharmacological tier on life outcomes precisely because they work WITH the surviving architecture and the reserve arithmetic rather than against the lost chemistry.",
    steps: [
      "The reserve rule: the demented brain tips into delirium at loads a healthy brain shrugs off — reversible-load vigilance as a permanent programme, not a one-time workup.",
      "The reverse-order law: newest skills lost first (newest memories, novel planning, inhibition); oldest persist (songs, prayers, routines, procedural skills).",
      "The management exploitation: build life on the survivors — routine as memory, ritual as comfort, music as language; stop teaching the lost functions.",
      "The BPSD reading: behaviour as the brain's remaining communication channel — the unmet need (toilet, pain, fear, boredom, loneliness) read before the sedative reached for.",
      "The five floors as the architecture: each floor carrying the ones above — disclosure converting chaos into a project; the load checklist preventing the false escalations; the drugs riding on structure, never replacing it.",
      "The caregiver arithmetic: the carer's endurance predicting institutionalisation, elder abuse and hospitalisation — the load-bearing wall whose maintenance is the treatment's strongest evidence.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "frontal-lobes", name: "Frontal lobes (the fading manager)", role: "The newest-layer seats of inhibition and planning lost earliest — the reason techniques (one instruction, structured choice) replace demands, and disinhibition is read as disease, not disrespect.", grade: "established" },
    { id: "hippocampal-formation", name: "Hippocampal circuitry (the filing room)", role: "The episodic recording failing — the reason routines and prosthetics carry the day and the Memory Rehabilitation course's engineering applies.", grade: "established" },
    { id: "procedural-networks", name: "Basal ganglia-cerebellar habit systems (the survivors)", role: "The procedural learning outlasting the episodic — the surviving architecture the environment tier builds on: the songs, the routes, the rituals.", grade: "established" },
    { id: "right-hemisphere-affective", name: "Affective and musical circuits (the preserved channels)", role: "The emotional and musical processing outlasting the verbal — music as language and warmth as communication in the late stages.", grade: "supported" },
    { id: "cholinergic-projection", name: "Nucleus basalis projection (the variable chemistry)", role: "The subtype-dependent cholinergic loss — deepest in the synucleinopathies (the cognition tier's responders), spared-and-worsened in FTD (the non-responders).", grade: "established" },
  ],
  neurotransmitters: [
    { name: "Acetylcholine", symbol: "ACh", role: "The subtype-dependent target: the cholinesterase tier's modest function-holding in Alzheimer's and the synucleinopathies (best in DLB/PDD) — and its honest absence of benefit in FTD (where it can worsen).", grade: "established", drugConnection: "The donepezil/memantine tier's logic lives in the disease courses; this umbrella teaches when NOT to reach for it." },
    { name: "Serotonin", symbol: "5-HT", role: "The mood-driven-BPSD chemistry — the SSRI tier treating the demand-withdrawal and fear-driven behaviours before any antipsychotic is considered.", grade: "established", drugConnection: "Sertraline: the SSRI for mood-driven behaviour in the patient, and for the carer's own depression — one molecule, two floors." },
    { name: "Dopamine", symbol: "DA", role: "The antipsychotic decision's terrain: the mortality/stroke warnings of its blockade in dementia, and the absolute prohibition in the DLB/PDD subtypes (the wallet card's chemistry).", grade: "established" },
    { name: "Noradrenaline", symbol: "NE", role: "The arousal-sleep architecture the sundowning tier rides — the evening agitation's mixed chemistry treated environment-first.", grade: "supported" },
  ],
  pathways: [
    {
      id: "reserve-pathway",
      name: "The reserve rule (why 'sudden worsening' is a lie)",
      steps: [
        { label: "The reserve spent", detail: "The demented brain runs no headroom — the buffer that absorbed noise, fever, and change already spent by the disease" },
        { label: "The ordinary arrives", detail: "A urinary infection, an impaction, a moved bed, a new tablet — each an ordinary load on an extraordinary brain" },
        { label: "The tip into delirium", detail: "The family sees 'sudden worsening' and braces for the decline's acceleration — the clinic sees the cascade" },
        { label: "The checklist runs", detail: "PAIN FUSES at every 'worsening': most episodes dissolve without a single new prescription — the false escalations prevented" },
      ],
      clinicalManifestation: "The evening agitation that was five days of constipation — the phone call and the aperient that prevented an admission, a CT and an antipsychotic.",
      grade: "established",
    },
    {
      id: "reverse-order-pathway",
      name: "The reverse-order law (building on survivors)",
      steps: [
        { label: "The newest lost first", detail: "Novel planning, recent memories, inhibition — the recently-acquired layers peeling away" },
        { label: "The oldest persist", detail: "Songs, prayers, habitual routines, procedural skills — the deep architecture holding" },
        { label: "The management pivot", detail: "Stop teaching the lost functions; build life on the survivors — the routine as memory, the ritual as comfort, the music as language" },
        { label: "The technique dividends", detail: "The bathing and dining wars dissolved by sequencing and timing changes; the one-instruction grammar; the same-sentence discipline" },
      ],
      clinicalManifestation: "The patient who cannot name the visitor but sings every verse of the evening prayer — the channel the care plan speaks through.",
      grade: "established",
    },
    {
      id: "unmet-need-pathway",
      name: "The unmet-need method (behaviour as a sentence)",
      steps: [
        { label: "The behaviour arrives", detail: "Refusal to eat, aggression at face-washing, nighttime wandering — the family's crisis" },
        { label: "The four questions asked", detail: "What happened exactly? What preceded it? What followed it? What need could this be?" },
        { label: "The need decoded", detail: "Toilet, pain, fear, boredom, loneliness — the sentence read before the sedative reached for" },
        { label: "The antecedent changed", detail: "Redirect, never argue; change the trigger, not the person — the technique correction outperforming the prescription" },
      ],
      clinicalManifestation: "The bathing war ended by moving bath time to the morning's best hour — the aggression that was never 'aggression'.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "diagnosis-moment", time: "Day one", title: "The disclosure consultation", description: "Floor 1 built: the illness named plainly, the myths corrected, the written problem list and red-flag list registered, the legal-window work opened in the same month — insight expires silently.", phase: "onset" },
    { id: "early-phase", time: "The stable years", title: "Floors 2-4 running", description: "The 3-6-monthly reviews with the load checklist; the modest cognition tier where the subtype warrants; the environment engineered; the roles preserved — each month of preserved role a month of preserved selfhood.", phase: "peak" },
    { id: "mid-phase", time: "The advancing years", title: "BPSD era and the drug decisions", description: "The unmet-need method carrying the behaviours; the antipsychotic decision made rarely, with the mortality warning carried and the review date written; the carer's endurance monitored as the load-bearing wall.", phase: "duration" },
    { id: "late-phase", time: "The final phase", title: "Comfort-first care", description: "The swallowing conversation held ONCE at the moderate stage (not eight times in casualty); the hand-feeding techniques; the infection decisions made in the living room; the comfort goal defined and delivered.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "The management-relevant epidemiology: most dementia care happens at home, by unpaid family members, for years; the median carer a 50-60-year-old woman related by marriage or blood, often with no help and health problems of her own. Global evidence agrees that caregiver depression is common, that caregiver intervention trials (education plus problem-solving) REDUCE patient institutionalisation and carer depression, and that the highest-cost events (admissions, fractures, tube insertions) are the ones structured care prevents — management is not the soft option after drugs; it is the treatment with the strongest effect sizes in the whole field.",
    indianPrevalence: "Virtually all Indian dementia care is home care: the 8.8-million-and-rising population served by a median carer matching the global picture — a daughter-in-law or a spouse, untrained, unsupported, unasked-about. The service reality: no national dementia care programme yet (the National Programme for Health Care of Elderly the nearest platform); ARDSI chapters and WHO iSupport-type programmes the practical tools to hand families; the whole national infrastructure, when done consistently, being four lines in a file.",
    lifetimeRisk: "Every dementia patient will need every floor eventually — the question only of how early each was built.",
    genderRatio: "The carer population overwhelmingly female — the labour force of the disease being women in their 50s-60s whose own health the evidence says to monitor.",
    ageOfOnset: "The disease courses span the 60s-90s (young-onset variants younger); the management architecture identical across the ages, the employment and young-family questions added for the young-onset households.",
    indianNotes: "The caregiver-intervention trial evidence includes LMIC sites — the training that reduces institutionalisation and carer depression works in the Indian family structure, delivered in one session plus phone follow-up.",
  },
  etiology: [
    { category: "biological", factor: "The disease causes the dementia; these factors cause the CRISES", details: "Pain (joints, teeth, abdomen), urinary infection, dehydration, anticholinergic/sedating drug loads, sensory impairment, sleep disruption — the reversible-load cluster behind most 'sudden worsenings' and crisis admissions." },
    { category: "psychological", factor: "The fear and grief layers", details: "Fear (of the dark, of bathing, of strangers) and grief at losses the person can still half-perceive — each presenting as behaviour, each responding to technique before pharmacology." },
    { category: "environmental", factor: "The environmental triggers", details: "Noise, glare, new rooms, hospital admissions (delirium on dementia), absence of routine — the moved-bed principle operating at every scale from the ward to the household." },
    { category: "social", factor: "The carer tier", details: "Exhaustion, high expressed emotion, the misreading of symptoms as intentional, absence of respite — the family factors that predict institutionalisation, abuse and hospitalisation more strongly than most patient factors." },
    { category: "social", factor: "The systemic tier", details: "Late diagnosis, no follow-up plan, no written instructions, multiple uncoordinated prescribers — the Indian multi-doctor stack manufacturing the very escalations the five floors prevent." },
  ],
  symptomClusters: [
    {
      category: "1. Cognition (the slow decline, the function preserved)",
      symptoms: ["The disease-specific courses own the profiles — this floor's job: slow the decline, preserve the function, review at 3-6-month intervals", "The trajectory (not any single score) deciding drug continuation and stage planning", "The four-line review record: cognition score, function level, top two behaviours, carer status + next date"],
    },
    {
      category: "2. Activities of daily living (the independence ladder)",
      symptoms: ["Lost layer-by-layer in a lawful order: finances → medicines → travel → dressing → toileting → feeding", "Each layer's removal planned with the family BEFORE the crisis: the power-of-attorney tier, the medicine ownership, the travel companion, the dressing aids, the toileting timetable, the feeding techniques", "The preserved layers defended against the over-helping reflex (the dependency cage the Memory Rehabilitation course teaches to avoid)"],
    },
    {
      category: "3. Behaviour and mood (BPSD as communication)",
      symptoms: ["Agitation and aggression — the unmet-need reading before any prescription", "Apathy (flat) distinguished from depression (painful) — the reflex antidepressant missing the distinction", "Sleep reversal and sundowning — the light-and-rhythm programme before any hypnotic", "Wandering, misidentification, shadowing — the safety tier and the technique tier, each with its own page in the family programme"],
    },
    {
      category: "4. Comorbidities (the body carrying the mind)",
      symptoms: ["Falls and fractures — the audit tier (rails, lighting, footwear, bone health: calcium/vitamin D and the osteoporosis assessment)", "Swallowing — the surveillance and the ONE conversation about its endpoint", "Continence — the timetable tier before the anticholinergic trade", "Infections, pain, weight — each a reversible-load member and a comfort-review point in the final phase"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The management-relevant parts of diagnosis",
      code: "Two acts belong to the diagnostic consultation itself",
      criteria: [
        "The subtype and the workup belong to the disease courses — but DISCLOSURE DONE WELL belongs to this one: family present, honest, hopeful where hope is real, the written next steps registered.",
        "The baseline register taken at the same visit: the cognitive score, the function level, the behaviour checklist, the medicines list, the CARER STATUS — the reference point every future visit compares against.",
        "At every subsequent visit, the brief re-scoring — the trajectory (not the single number) deciding the drug questions and the stage planning.",
        "The subtype-specific cautions carried forward from the disease courses: the wallet card for DLB/PDD, the FTD no-cholinesterase rule, the vascular programme, the alcohol engine — the umbrella enforcing each.",
      ],
      duration: "The disclosure register opened the day of diagnosis; the reviews at 3-6 months (stable) and sooner after any fall, sudden change or medicine event.",
      indianNote: "The four lines worth writing at every visit — cognition score, function level, top behaviours, carer status + next review date — constitute the whole national dementia infrastructure when done consistently; the quality-improvement answer every exam rewards.",
    },
  ],
  severityScales: [
    {
      name: "The five-floor audit",
      fullName: "Construction staging of the care system",
      measures: "Which floors are built, which are load-bearing, which are missing.",
      ranges: [
        { min: 0, max: 0, severity: "Floors 1-2 built (diagnosis-year)", action: "Disclosure done, the register open, the load checklist running at every review, the legal window opened the same month, the family programme taught in one session" },
        { min: 1, max: 1, severity: "Floors 3-4 under construction (the stable years)", action: "The modest drugs where the subtype warrants, the stop-list audited, the environment engineered, the unmet-need method taught, the roles preserved, the driving decision documented" },
        { min: 2, max: 2, severity: "Floor 5 carrying all (the advancing years)", action: "The carer's own health on the review record; the respite prescribed in words with dates; the final-phase conversations held ONCE, early, at home; the comfort goal defined and delivered" },
      ],
      indianNote: "The floors cost almost nothing to build — the ₹300-800/month medicine tier (approx 2026) being the smallest line in the disease's true bill; the supervision time and the preventable admissions being the largest.",
    },
    {
      name: "The BPSD stepped ladder",
      fullName: "Behaviour-escalation staging (drug-last discipline)",
      measures: "How far the behaviour has escalated — and what the NEXT intervention must be.",
      ranges: [
        { min: 0, max: 0, severity: "Load-check and unmet-need territory", action: "PAIN FUSES run; the four questions asked; the antecedent changed; the technique corrected — most behaviours dissolve here without any prescription" },
        { min: 1, max: 1, severity: "Mood-driven behaviour", action: "The SSRI tier (sertraline) for the fear-demand-depression readings; the light-and-rhythm programme for sundowning; the structured-day reinforcement" },
        { min: 2, max: 2, severity: "Danger or refractory distress", action: "The antipsychotic decision made rarely and knowingly: lowest dose, shortest time, the mortality/stroke warning acknowledged, the review date WRITTEN — and never a dopamine blocker in DLB/PDD without the specialist's explicit call" },
      ],
      indianNote: "'Behaviour is a sentence; read it before you sedate it' — the one-line philosophy that orders the whole ladder.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Delirium masquerading as progression", distinguishingFeatures: "The sudden change with the fluctuating course — the load checklist's territory, never the disease's.", keyDifferentiator: "The PAIN FUSES cascade before any 'acceleration' is accepted: urine, stool, pain, senses, drugs, the chart." },
    { condition: "Depression riding the dementia", distinguishingFeatures: "The mood's independent treatability — the 'give back' of apparent cognitive decline when the mood lifts.", keyDifferentiator: "The mood screen at every review; the SSRI trial's diagnostic-as-therapeutic double life (in the patient AND the carer)." },
    { condition: "The over-medicated state", distinguishingFeatures: "The anticholinergic and sedating burden manufacturing the very behaviours it is prescribed for — the Indian OPD's clean-up tier.", keyDifferentiator: "The stop-list audit at every visit: bladder anticholinergics, first-generation antihistamines, tricyclics, long-acting benzodiazepines, the 'brain tonics' and vitamin cocktails." },
    { condition: "The caregiver's report as the disease's surface", distinguishingFeatures: "The behaviour diary revealing the household's patterns (the exhaustion, the expressed emotion) as behaviour's amplifier.", keyDifferentiator: "The carer's own status on the four-line record — the wall's condition audited, not assumed." },
    { condition: "Normal-stage disease read as crisis (and crisis read as normal)", distinguishingFeatures: "The staged-expectation mismatch: families braced for the wrong stage, or dismissing the real one.", keyDifferentiator: "The staged education at each review — the trajectory's honest map preventing both the false alarms and the missed emergencies." },
  ],
  management: [
    { category: "lifestyle", name: "Floor 1 — Tell it truly: the disclosure and planning consultation", description: "Name the illness plainly; correct the myths ('old age', 'madness', 'curse'); state honestly what medicine can and cannot do. Register the project: the written problem list, the named follow-up doctor, the 3-monthly reviews, the red-flag list for urgent contact ('sudden change', 'not passing urine', 'fall', 'fever with confusion'). Begin the legal window work in the same month — insight expires silently.", whenToUse: "The day of diagnosis — the floor every other floor stands on.", indianContext: "The disclosure with the family present (the default Indian arrangement as the asset): the household convened, the illness named, the project registered — one consultation converting a chaotic decline into a managed construction." },
    { category: "lifestyle", name: "Floor 2 — Treat what is treatable: the reversible-load checklist", description: "PAIN FUSES run at every review and at every 'worsening': Pain (teeth, joints, abdomen) · Activity/constipation · Infection (urine, chest, skin) · Night and sleep · Faecal impaction (the hidden classic) · Urine retention · Senses (glasses, hearing, dentures, earwax) · Environment (new room, noise, light) · Sedating/anticholinergic drug burden, stripped. Vascular patients: the pressure-sugar-cholesterol regime (the vascular course's own floor). All patients: the bone-health package (calcium/vitamin D, the osteoporosis assessment) — the fracture-prevention tier of the falls floor.", whenToUse: "Every review, every 'sudden worsening', every pre-operative and post-hospitalisation reassessment.", indianContext: "The two classic Indian triggers never to miss: the urinary infection and the impaction — the pair behind most 'dementia emergencies' in Indian casualty; the phone-triage checklist that prevents the admission, the CT and the antipsychotic." },
    { category: "pharmacotherapy", name: "Floor 3 — Drug the symptoms knowingly", description: "Cognition: the cholinesterase inhibitors and memantine in the subtypes that warrant (Alzheimer's mild-moderate; DLB/PDD the best responses) — dosing, monitoring and honest expectations in the disease courses; NOT indicated in FTD, the vascular benefit modest. BPSD drugs: AFTER the load check and the non-drug methods: SSRI for mood-driven behaviour; the low-dose antipsychotic with the written review date and the mortality/stroke warning acknowledged — smallest dose, shortest time; the DLB/PDD dopamine-blocker prohibition absolute. Stop-list discipline: the anticholinergic bladder tier, first-generation antihistamines, tricyclics, long-acting benzodiazepines, the tonics and cocktail vitamins — the Indian OPD clean-up. Deprescribing with honesty: when advanced disease takes the swallow and speech, tapering the cognition drugs is ethical end-of-life care, not abandonment.", whenToUse: "On the rehabilitation floors' foundation — the pharmacology riding on structure, never replacing it.", indianContext: "The effective monthly medicine budget of standard care (donepezil/memantine/SSRI in generics) commonly ₹300-800 (approx 2026): one review date per prescription, one written change per visit — the prescribing discipline the budget demands and the chart deserves." },
    { category: "lifestyle", name: "Floor 4 — Engineer the environment and read the behaviour", description: "Routine as memory: the fixed sequences for day, meals, bath and bed; the same sentences at the same times; the family that can be kept, kept. The unmet-need method: for every behaviour the four questions (what happened, what preceded, what followed, what need could this be) — change the antecedent, redirect, never argue. The technique corrections: one instruction at a time; music from their youth; hand-washing before hand-feeding; bathing in their preferred hour and sequence; a failed technique is the wrong technique, not the wrong person. Wandering and safety: the ID card/bracelet, door alarms, locks above eye-level, the traffic and terrace audit, night lighting and the floor mattress. The sleep programme: daylight, daytime activity, no chair-napping, evening calm — the load list checked before any sleep drug. Day-care even two afternoons a week protects caregiver survival.", whenToUse: "From the first post-diagnosis visit — the environment doing the work the lost functions cannot.", indianContext: "The family programme as the one-hour survival package (communication rules, bathing and dining technique, the behaviour diary, the red flags, when to call whom) — teachable by any doctor or counsellor, deliverable once, transformative: the Indian delivery channel for the whole environmental tier." },
    { category: "lifestyle", name: "Floor 5 — Support the family (the load-bearing wall)", description: "The caregiver register: at every visit one question to the carer ('how are YOU sleeping, eating, coping?'); the carer depression screen once a year; the carer treated as a patient when needed. Skills teaching: the survival package above. Respite engineering: sibling rosters, the paid attendant for the heaviest hours, day-care, the planned short admissions — respite prescribed in words, with a date. Support organisations: the ARDSI chapters, the dementia helplines, tele-MANAS for the carer's own mental health. Legal and financial (while insight lasts): nominee updates, joint mandates, the written family arrangement, supported decision-making under the Mental Healthcare Act 2017, disability certification (unlocks entitlements; do it early — it takes months).", whenToUse: "From diagnosis — the wall built before it cracks, not after.", indianContext: "'We are family, no formalities' is the sentence that hides the caregiver until she breaks — the rosters, the shared log, the one-medicine-owner and the quarterly respite for the primary one, drafted WITH the doctor's help as clinical work." },
    { category: "lifestyle", name: "The final phase — comfort-first care", description: "Swallowing failure: hand-feeding with posture and texture techniques beats early tube insertion for comfort and dignity in advanced dementia (the evidence consistent; discussed BEFORE the crisis, ideally at the moderate stage). Recurrent chest infections: the honest conversation about hospital transfer versus symptom comfort at home — held once, early, not eight times in casualty. Pain and agitation: the regular comfort review. A quiet, warm, pain-free, clean and company-rich final phase is a realistic goal at home — and Indian families, given one honest plan, usually deliver it.", whenToUse: "From the moderate stage (the conversation's window) through the final months (the plan's execution).", indianContext: "The living-room conversation over the casualty escalation: the one honest discussion of feeding, infections and transfer preferences that converts eight casualty crises into one dignified home phase — the single most protective act of the late course." },
  ],
  safety: {
    redFlags: [
      "Any 'sudden worsening' — the load cascade (urine, stool, pain, senses, drugs) before any acceptance of decline: most episodes are reversible, and the false escalations (admission, CT, antipsychotic) are the injuries",
      "The first fall and the fracture risk — the audit tier same-week (rails, lighting, footwear, the bone-health package, the lying-standing pressure)",
      "The antipsychotic started anywhere without a review date — the mortality/stroke warning demanding the written date and the taper plan; the wallet-card check in every DLB/PDD casualty visit",
      "The carer's own collapse signals — weight loss, uncontrolled anger at the patient, her missed medicines: the wall cracking is the patient's next emergency",
      "The missed legal window — the insight expiring before the nominations, the supported decision-making and the disability certification: the entitlements that take months, started too late",
      "The swallowing change — the ONE conversation's cue arriving: the hand-feeding techniques taught and the tube decision made at home, not in casualty",
    ],
    urgentGuidance:
      "The order of operations: (1) 'sudden worsening' = the PAIN FUSES cascade by phone or in clinic — the urine and the bowels before the scan and the sedative; (2) the falls tier audited at the first fall, not the fracture; (3) the antipsychotic decision made rarely, knowingly, with the written review date — and never a dopamine blocker in DLB/PDD without the specialist; (4) the carer's status asked at EVERY visit and her collapse treated as the emergency it is; (5) the legal window worked the month of diagnosis; (6) the final-phase conversation held ONCE at the moderate stage — the hand-feeding teaching, the infection decisions, the transfer preferences — so the last months run on a plan instead of a series of casualty escalations.",
  },
  drugLinks: [
    {
      name: "Sertraline",
      slug: "sertraline",
      role: "The SSRI tier for mood-driven BPSD — and for the carer's own depression",
      rationale: "The one molecule serving both sides of the dyad: the fear-demand-depression behavioural readings in the patient (the SSRI tier before any antipsychotic), and the carer's own depression (the one-year screen's treatment) — the wall's chemistry maintained alongside the patient's.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Symptom-targeted care within the five-floor programme: the load checklist first, the unmet-need method second, the pharmacology riding on structure — never replacing it.",
    },
  ],
  contentGaps: [
    "The cholinesterase-inhibitor and memantine tier has no KYP drug lessons — the subtype-specific dosing, monitoring and honest-expectation logic lives in the disease courses (Alzheimer's, DLB, PDD); this umbrella teaches only when NOT to reach for it.",
    "The antipsychotic tier (the BPSD end-of-ladder with its mortality/stroke warning) has no KYP drug lessons — the stepped discipline and the DLB/PDD prohibition are taught here and in the Lewy body course.",
    "Methylphenidate and the stimulation tier have no KYP lessons — the apathy distinction taught here refers onward without inventing routes.",
    "The bone-health pharmacology (calcium/vitamin D, the osteoporosis tier) has no KYP lessons — the falls-floor package is taught as the physician-co-managed tier.",
    "The sleep pharmacology lives in the Insomnia course — referenced, not duplicated; the hypnotic restraint taught as this course's default.",
  ],
  patientGuide: {
    whatIsIt:
      "Whatever the cause of the memory illness, the care always has the same five parts: telling it truly, treating what is treatable, using medicines carefully, arranging the home and the day, and supporting the family who does the caring. The good news this course carries: most of the suffering families remember was preventable — the crisis admissions from constipation and urine infections, the money and legal losses from late planning, the caregiver's own breakdown from never being asked about, the daily fights that a change of technique dissolves. The illness cannot yet be cured; the care can be built, and how well it is built decides the quality of life years ahead.",
    whatCausesIt:
      "The brain that has lost its reserve tips into confusion at loads a healthy brain shrugs off — an infection, a pain, a moved bed, a new tablet. And abilities leave in reverse order of learning: the newest skills first, the oldest (songs, prayers, routines) last. The care is built on these two facts: the loads prevented vigilantly, and life built on the surviving abilities — routine as memory, ritual as comfort, music as language.",
    symptoms:
      "The behaviours that worry families most — refusal, agitation, aggression, wandering, night-waking, the bathing and feeding fights — are communications from a brain that can no longer say 'my tooth hurts' or 'I am frightened'. Reading the behaviour (what happened, what came before, what need might this be) dissolves more of these than any tablet; the technique corrections (timing, sequencing, one instruction at a time, the familiar music) dissolve most of the rest.",
    treatment:
      "The treatment's order: the loads removed (pain, constipation, urine, senses, sleep, the sedating tablets stripped); the environment engineered (the fixed routine, the labels, the safety locks, the night lighting); the behaviours read before they are medicated; the medicines used knowingly and sparingly (the memory tier where the subtype warrants, the mood tier for the fear-driven readings, the sedatives only for danger, at the smallest dose, for the shortest time, with the review date written); and the family supported (the carer asked about herself at every visit, the respite planned with dates, the legal steps taken early while the understanding lasts).",
    selfHelp: [
      "The written plan on the wall: the day's fixed sequence, the red flags for urgent contact, the next review date — the household's constitution.",
      "The behaviour diary: what happened, what preceded, what followed, what need might this be — the four questions that decode most 'crises'.",
      "The one-instruction grammar: single steps, the same sentences at the same times, the choice of two offered (never the open question).",
      "The technique humility: a failed bathing or feeding method is the wrong technique, not the wrong person — change the hour, the sequence, the music, the helper.",
      "The carer's own column: her sleep, her food, her medicines, her one question at every visit — the wall's maintenance as clinical work.",
      "The legal-month rule: nominations, joint mandates, the disability application — the month of diagnosis, because the window closes silently.",
      "The one-conversation rule for the final phase: the feeding, the infections and the transfer preferences discussed ONCE at home, at the moderate stage — the eight casualty escalations prevented by one living-room conversation.",
    ],
    whenToSeekHelp: [
      "Any sudden change in behaviour or thinking — the urine-and-bowels check before accepting decline (most 'sudden worsenings' are reversible loads)",
      "The first fall — the home audit and the bone-health review the same week, not the fracture after",

      "A new prescription from any doctor for sedation — the review date asked for by name; and every casualty visit in a Lewy body/Parkinson's dementia patient carrying the wallet card",
      "The carer's own exhaustion, anger or weight loss — her treatment is part of the patient's treatment",
      "The swallowing change — the hand-feeding techniques and the plan's activation, not the rushed tube decision in casualty",
      "The legal window's signs of closing (confusion about money, signatures) — the nominations done that month",
    ],
    indianResources: [
      "ARDSI (Alzheimer's and Related Disorders Society of India) chapters — caregiver training, day-care, the family tier in many cities",
      "Tele-MANAS 14416 (24×7, free) — the carer's own support line and the family's routing questions",
      "The disability certification pathway (unlocks entitlements — start early, it takes months) and the Mental Healthcare Act 2017's supported decision-making tools",
      "Jan Aushadhi generics for the medicine tier (₹300–800/month, approx 2026) — the disease's true cost being supervision time, not tablets",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No national dementia care programme yet — the National Programme for Health Care of Elderly the nearest platform; the practical guidance assembled from the NICE-lineage architecture, WHO's iSupport caregiver programme, and the ARDSI/Dementia India Report service realities, delivered through the family-doctor spine.",
    systemContext: "The realistic team: one doctor (family physician, psychiatrist or neurologist) + one named family caregiver + (where available) a community worker or ASHA-adjacent link for monitoring; the tertiary memory clinics for diagnosis confirmation and difficult BPSD only. Tele-follow-up: the video or phone review between physical visits — one call a month to the carer maintaining adherence to the plan at near-zero cost.",
    programmeContext: "PM-JAY and the state insurance tiers for the hospital events; Jan Aushadhi for the daily generics; the district tier (DMHP psychiatric services, the PHC) as the follow-up channel; ARDSI and the dementia NGOs as the family-support tier — the ecosystem assembled around the four-line record.",
    costConsiderations: "The effective monthly medicine budget of standard care commonly ₹300-800 (approx 2026) — the real economic burden being supervision time, not tablets; the investigations limited to the essential (thyroid, B12, sugar once; imaging when the picture is atypical); no biomarker or PET insistence in routine Indian practice.",
    culturalConsiderations: "The joint family as the care system — the asset (many hands, the shared household) and the risk (the diffuse responsibility where every member assumes another checked; the dependency cage arriving early through loving over-help). The 'we are family, no formalities' sentence that hides the caregiver until she breaks — the rosters, shared log and named medicine-owner drafted as clinical work. The disclosure done with the family present as the default: the household convened, the illness named, the project registered. The final-phase conversations held at home in the living room — the Indian family, given one honest plan, usually delivering a dignified home ending that no casualty sequence could match.",
    patientCounselling: [
      "The one-line philosophy: 'Dementia is managed like a household project — floors built early, load checked often, and the wall (the family) reinforced before it cracks.'",
      "The sudden-change script: 'Sudden changes are usually not the disease — they are a urine infection, constipation, pain or a new tablet; run the checklist with the doctor before accepting the decline.'",
      "The behaviour script: 'The behaviour is a sentence; read it before you sedate it — what happened, what came before, what need might this be?'",
      "The carer script: 'Your endurance is the treatment's foundation — your sleep, your food, your own doctor: asked about at every visit, by name.'",
      "The respite script: 'Respite prescribed in words with dates — the roster, the day-care, the planned admission: not an indulgence, a structural repair.'",
      "The legal script: 'The month of diagnosis is the month of the nominations, the family arrangement and the disability application — the window closes silently, and the entitlements take months.'",
      "The final-phase script: 'The feeding, infection and transfer preferences discussed once, now, at home — so the last months run on a plan instead of eight casualty decisions.'",
    ],
  },
  decisionPath: {
    title: "The dementia diagnosis that starts the project",
    nodes: [
      {
        id: "start",
        question: "A dementia diagnosis (any subtype) has been made. The project's first decision: what happens in THIS consultation.",
        branches: [
          { label: "The disclosure itself", next: "disclosure-path" },
          { label: "A 'sudden worsening' at any later visit", next: "load-path" },
          { label: "A behaviour the family cannot hold", next: "bpsd-path" },
          { label: "The final phase approaching", next: "final-path" },
        ],
      },
      {
        id: "disclosure-path",
        question: "Floor 1: the disclosure and planning consultation.",
        recommendation: "The illness named plainly with the family present; the myths corrected; the written problem list and red-flag list registered; the baseline record taken (cognition, function, behaviours, medicines, CARER status); the legal window opened the same month; the follow-up doctor named and the 3-monthly cadence set.",
      },
      {
        id: "load-path",
        question: "Floor 2's moment: 'sudden worsening' = load until proven otherwise.",
        recommendation: "PAIN FUSES by phone or in clinic: pain, activity/constipation, infection, night, faecal impaction, urine retention, senses, environment, sedating burden — the urine and the bowels before the scan and the sedative; most episodes dissolve without a new prescription; re-baseline after each true event.",
      },
      {
        id: "bpsd-path",
        question: "The behaviour ladder, climbed in order.",
        branches: [
          { label: "The four questions decode it", next: "unmet-need-path" },
          { label: "Mood-driven reading (fear, withdrawal, sadness)", next: "ssri-path" },
          { label: "Danger or refractory distress", next: "antipsychotic-path" },
        ],
      },
      {
        id: "unmet-need-path",
        question: "The unmet-need method: the antecedent changed.",
        recommendation: "The diary's four questions (what happened, what preceded, what followed, what need could this be) — toilet, pain, fear, boredom, loneliness decoded; the antecedent changed, the redirect deployed, the argument declined; the technique corrected (the hour, the sequence, the music, the helper) — a failed technique is the wrong technique, not the wrong person.",
      },
      {
        id: "ssri-path",
        question: "The mood-driven tier.",
        recommendation: "Sertraline (the linked SSRI) for the fear-demand-depression readings; the light-and-rhythm programme for sundowning; the structured day reinforced; the carer's own mood screened at the same visit — one molecule serving both sides of the dyad when both need it.",
      },
      {
        id: "antipsychotic-path",
        question: "The rare, knowing decision.",
        recommendation: "Only after the load check and the non-drug methods have run: lowest dose, shortest time, the mortality/stroke warning acknowledged with the family, the review date WRITTEN on the prescription — and the absolute rule: never a dopamine blocker in DLB/PDD without the specialist's explicit call (the wallet card travelling to every casualty visit).",
      },
      {
        id: "final-path",
        question: "The final phase: the once-and-early conversations.",
        recommendation: "Held at the moderate stage, at home: the swallowing conversation (the hand-feeding techniques taught — posture, texture, the unhurried pace; the tube's honest evidence); the infection decisions (hospital transfer versus symptom comfort, the family's own preferences recorded); the transfer preferences documented — the eight casualty escalations prevented by one living-room conversation; the comfort goal defined: quiet, warm, pain-free, clean, company-rich.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Escalating antipsychics before running the checklist",
      why: "The five-day constipation presenting as evening agitation gets sedated instead of cleared — the admission, the fall, the stroke risk all following a prescription that never needed to exist.",
      correction: "The ladder's order enforced: load check → unmet-need method → mood tier → only then the rare, dated, warned antipsychotic decision.",
    },
    {
      mistake: "Attributing a delirium to progression",
      why: "The reserve rule forgotten: the ordinary load (infection, impaction, the moved bed) read as the disease's acceleration — the reversible treated as the inevitable.",
      correction: "'Sudden worsening' = load until proven otherwise: the PAIN FUSES cascade at every event, with the re-baseline after each true episode.",
    },
    {
      mistake: "Forgetting the carer as patient",
      why: "The wall's condition assumed rather than audited — the exhaustion, the anger, the missed medicines of the person doing the caring, until her collapse takes the patient's care with it.",
      correction: "The carer's column on the four-line record: one question at every visit ('how are YOU sleeping, eating, coping?'), the depression screen yearly, her treatment as clinical work.",
    },
    {
      mistake: "Prescribing tonics to feel helpful",
      why: "The impotence of the modest drug tier displaced onto vitamin cocktails and 'brain tonics' — the family's money spent on the placebo tier while the real floors go unbuilt.",
      correction: "The honest expectation-setting that outperforms the tonic: what medicine can and cannot do, said plainly at disclosure and repeated at every escalation — the credibility that funds every other instruction.",
    },
    {
      mistake: "Late legal planning after insight expired",
      why: "The nominations, the family arrangement, the disability certification all requiring the capacity that only the early months hold — the entitlements delayed into unobtainability by the family's (and the clinic's) discomfort.",
      correction: "The legal-month rule: the window worked the month of diagnosis — the applications started early (they take months), the supported decision-making documented while the participation is real.",
    },
    {
      mistake: "The eight-times-in-casualty feeding conversation",
      why: "The tube decision deferred to the crisis moments when the family is least able to deliberate — the escalations each made alone, the dignity lost in the repetition.",
      correction: "The once-and-early rule: the swallowing, infection and transfer conversations held ONCE at the moderate stage at home — the hand-feeding taught, the preferences recorded, the plan ready.",
    },
    {
      mistake: "Teaching the lost functions instead of building on the survivors",
      why: "The reverse-order law unexploited: the rehabilitation aimed at the recent, lost layers while the songs, prayers and routines — the surviving architecture — sit unused.",
      correction: "The pivot the law prescribes: routine as memory, ritual as comfort, music as language — the environment and the family programme built on the oldest, deepest abilities.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The five floors in order, with the reason disclosure precedes drugs (the project before the prescriptions — chaos converted into construction).",
        "The PAIN FUSES checklist recited — and the two classic Indian triggers it must never miss (the urinary infection and the impaction).",
        "The antipsychotic rule as one sentence with three numbers in it: lowest dose, shortest time, the review date written.",
        "The cholinesterase-responder subtypes (DLB/PDD best; FTD none — can worsen) and the vascular modesty.",
        "The feeding-tube evidence in two sentences a family can repeat (hand-feeding comparable comfort and dignity; tubes not clearly preventing pneumonia or prolonging comfort).",
      ],
      practical: [
        "Run the caregiver register: the one question, the yearly screen, the treatment-as-patient — demonstrate on the carer accompanying any dementia patient.",
        "Draft the four-line review record (cognition score, function level, top behaviours, carer status + next date) — the whole national infrastructure in four lines.",
      ],
      longAnswer: [
        "Design a community dementia service for a district (the evergreen programme-design essay: the family-doctor spine + the carer training + phone follow-up + day-care + the red-flag card — the five-floor logic at population scale).",
        "The stepped management of behavioural and psychological symptoms of dementia: evidence hierarchy and the antipsychotic decision.",
      ],
    },
    neetPg: {
      highYield: [
        "THE FIVE FLOORS: tell it truly; treat what is treatable; drug the symptoms knowingly; engineer the environment; support the family — the order being the architecture.",
        "THE CHECKLIST: PAIN FUSES (Pain, Activity/constipation, Infection, Night, Faecal impaction, Urine retention, Senses, Environment, Sedating burden) — run at every review and every 'worsening'.",
        "THE EVIDENCE HIERARCHY: caregiver intervention trials REDUCE institutionalisation and carer depression with effect sizes EXCEEDING drug effects — management is the treatment with the strongest effect sizes in the field.",
        "THE ANTIPSYCHOTIC RULE: lowest dose, shortest time, review date written, the mortality/stroke warning acknowledged — and NO dopamine blockade in DLB/PDD without the specialist's call.",
        "THE RESPONDER SUBTYPES: cholinesterase inhibitors best in DLB/PDD, modest in Alzheimer's mild-moderate, NOT indicated in FTD (can worsen), modest in vascular.",
        "THE REVERSE-ORDER LAW: abilities lost in reverse order of learning — songs, prayers, routines and procedural skills outlasting the newest skills; care built on the survivors.",
        "THE RESERVE RULE: the demented brain tipping into delirium at loads a healthy brain shrugs off — reversible-load vigilance as a permanent programme.",
        "THE FEEDING-TUBE EVIDENCE: hand-feeding with posture and texture techniques beats early tube insertion for comfort and dignity in advanced dementia.",
        "THE LEGAL WINDOW: nominee updates, supported decision-making under the Mental Healthcare Act 2017, disability certification — all expiry-dated by insight; start the month of diagnosis.",
        "THE FOUR LINES: cognition score, function level, top behaviours, carer status + next review date — the review record on which every management decision rides.",
        "THE CARER REGISTER: one question every visit, depression screen yearly, treatment as patient — the load-bearing wall's maintenance schedule.",
        "THE BPSD PHILOSOPHY: 'behaviour is a sentence; read it before you sedate it' — the unmet-need method (four questions) before every pharmacological step.",
      ],
      pyqConcepts: [
        "Design-a-community-dementia-service — the five-floor logic at population scale (the family-doctor spine answer).",
        "The BPSD stepped algorithm — the short-note favourite with the evidence hierarchy attached.",
        "The four-lines-in-the-file quality-improvement answer — the Indian infrastructure that costs nothing.",
        "The carer-intervention evidence — the discussion-question staple that inverts the drug-first reflex.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 79-year-old with Alzheimer's disease, stable on donepezil, agitated each evening for a week; the family reaching for 'a stronger tablet' and a casualty visit: the telephone triage running the load checklist — five days of unopened bowels and two days of skipped evening meals (the constipation-appetite cycle) — the aperient, the hydration, the unchanged routine, NO new prescriptions, the 48-hour review call: the evening storms subsiding with the bowels — one phone call preventing an admission, a CT and an antipsychotic, the highest-value intervention of the month.",
        "A 72-year-old widower's vascular dementia managed alone by his daughter 'because we are family': eleven months in, she presents with depressive symptoms, weight loss and uncontrolled anger at her father, his function collapsing in the same month (missed medicines, a fall, a urinary infection): the re-management — her treatment as a patient, the two-sibling rotation with written shifts, day-care two afternoons weekly, the quarterly respite planned, the behaviour diary — the father stabilised at the pre-collapse baseline, the daughter's depression remitted: the wall repaired before the house fell.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The five floors and their order (disclosure first).",
        "Sudden worsening = reversible load until proven otherwise (the checklist before the scan and the sedative).",
        "Antipsychotics in dementia: lowest dose, shortest time, review date — mortality/stroke warning.",
        "Caregiver training: the strongest effect sizes in dementia care.",
        "Hand-feeding over early tubes in advanced dementia.",
        "MHA 2017: supported decision-making while insight lasts.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The four-line review record is the residency's signature instrument: cognition, function, behaviours, carer status + date — four lines that constitute the whole national dementia infrastructure when written consistently, and the trajectory record on which every real decision (drugs, stages, respite) actually rides.",
        "The phone-triage load check is the highest-value clinical minute in the field: the urine-and-bowels cascade run by telephone, preventing the admission-CT-antipsychotic sequence that Indian casualty delivers to 'sudden worsening' by reflex.",
        "The carer is the co-patient of every consultation: the one question asked by name, the yearly screen, her treatment begun without apology — the residency's discipline of seeing two patients where the chart lists one.",
        "The legal-month rule guards the entitlements: the disability certification started the month of diagnosis (it takes months), the nominations and family arrangement drafted while the signature still means what the person means it to.",
        "The once-and-early final-phase conversation is the palliative skill of the field: the swallowing, infection and transfer preferences discussed at the moderate stage in the living room — the plan that converts eight casualty crises into one dignified home ending, which Indian families, given one honest plan, usually deliver.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The admission that never happened",
      presentation: "An evening-agitation week that ended with an aperient and a phone call — the checklist as the whole consultation.",
      initialPresentation: "A 79-year-old with Alzheimer's disease, stable on donepezil, became agitated each evening for a week; the family reached for 'a stronger tablet' and prepared for a casualty visit. The telephone triage before either: the load checklist run item by item with the daughter on the line.",
      history: "Alzheimer's disease five years, donepezil-maintained, the baseline register current from the three-monthly reviews; no falls, no fever reported; the daughter's diary noting the evenings worsening over the week with the days quiet.",
      examination: "By phone: no fever, no pain localisation, no new medicines; the two positive findings elicited — five days of unopened bowels and two days of skipped evening meals (the constipation-appetite cycle closing its loop).",
      diagnosis: "Faecal impaction with the secondary appetite-sleep disruption — the reversible load masquerading as disease acceleration.",
      management: "Emergency plan: the aperient, the hydration push, the unchanged routine explicitly protected, NO new prescriptions; the review call scheduled at 48 hours.",
      outcome: "The evening storms subsided with the bowels; the 48-hour call confirming the calm; the family left with the checklist on the wall and the sudden-change script for the next episode — the admission, the CT and the antipsychotic all prevented by one phone call.",
      teachingPoints: [
        "'Sudden worsening' is a load problem until proven otherwise — the checklist IS the consultation.",
        "The constipation-appetite-sleep cycle is the classic Indian reversible cascade — the two findings the phone triage must never miss.",
        "One phone call prevented an admission, a CT and an antipsychotic — the highest-value intervention of the month.",
        "The re-baseline after each true event protects the trajectory record from the noise.",
      ],
    },
    {
      title: "The wall that was not built",
      presentation: "Eleven months of 'we are family' ending in the daughter's depression and the father's collapse — the same month.",
      initialPresentation: "A 72-year-old widower's vascular dementia was managed alone by his daughter, who had refused all help 'because we are family'. Eleven months in, she presented herself with depressive symptoms, weight loss and uncontrolled anger at her father — and his function had collapsed in the same month: missed medicines, a fall, a urinary infection.",
      history: "Vascular dementia three years, the staircase managed with the risk-factor programme; the daughter the sole caregiver from the diagnosis, employed outside the home, her siblings in other cities; no respite ever taken; the 'sudden worsening' of the father's month being the missed-medicines cascade on the mother-structure's collapse.",
      examination: "The two-patient consultation: the father's load cascade (the impaction and the infection treated), the daughter's own examination — the depression screen positive, the weight loss documented, the anger pattern the exhaustion's signature.",
      diagnosis: "Caregiver collapse with the secondary patient decompensation — the load-bearing wall failing under the house it carried.",
      management: "The re-management: the daughter treated as a patient in her own right; the two-sibling rotation drafted with written shifts; day-care two afternoons weekly arranged; the respite admission planned quarterly with dates; the behaviour diary taught; the father's load cascade cleared alongside.",
      outcome: "The father stabilised at the pre-collapse baseline; the daughter's depression remitted with her own treatment; the rotation held through the following year with one respite admission and no further collapses — the wall repaired before the house fell.",
      teachingPoints: [
        "The caregiver is the infrastructure: when she fails, the patient falls with her.",
        "Respite prescribed in words WITH DATES beats respite discussed in principle.",
        "'We are family, no formalities' is the sentence that hides the caregiver until she breaks.",
        "The two-patient consultation: every dementia visit examines the dyad, or it has examined neither.",
      ],
    },
  ],
  clinicalPearls: [
    "Dementia is managed like a household project: floors built early, load checked often, and the wall (the family) reinforced before it cracks.",
    "Sudden changes are usually NOT the disease: urine, bowels, pain, senses, sleep, tablets — the checklist before the scan and the sedative.",
    "The evidence hierarchy's inversion: carer training outperforms the pharmacology on life outcomes — the strongest treatment in the field wears an apron.",
    "Behaviour is a sentence; read it before you sedate it — the four questions of the unmet-need method.",
    "Abilities leave in reverse order of learning: build on the survivors — routine as memory, ritual as comfort, music as language.",
    "The antipsychotic rule in three numbers: lowest dose, shortest time, the review date written — with the DLB/PPD dopamine-blocker prohibition absolute.",
    "The cholinesterase responders: DLB/PDD best, Alzheimer's modest, FTD none (can worsen), vascular modest.",
    "Hand-feeding beats early tubes in advanced dementia — the conversation held once, at home, at the moderate stage.",
    "The legal window expires silently: nominations, family arrangements, MHA 2017 tools and the disability certification all dated by insight.",
    "Four lines at every visit — cognition, function, behaviours, carer status + date — constitute the whole national infrastructure when written consistently.",
    "The carer is the co-patient: one question by name at every visit, the yearly screen, the treatment without apology.",
    "A failed technique is the wrong technique, not the wrong person: change the hour, the sequence, the music, the helper.",
    "Deprescribing is end-of-life care, not abandonment: when the swallow and speech go, the cognition tier tapers honestly.",
  ],
  highYieldSummary: [
    "Definition: the five-floor system of dementia care — (1) tell it truly (disclosure, the register, the legal window); (2) treat what is treatable (the PAIN FUSES reversible-load checklist); (3) drug the symptoms knowingly (the modest subtype-specific cognition tier, the mood-driven SSRI tier, the rare warned dated antipsychotic, the stop-list); (4) engineer the environment and read the behaviour (routine as memory, the unmet-need method, the technique corrections, the safety tier); (5) support the family (the carer register, the respite with dates, the legal work while insight lasts) — plus the final-phase comfort-first tier (hand-feeding over tubes, the once-and-early conversations).",
    "The management-relevant epidemiology: most care is home care by unpaid family for years; the median carer a 50-60-year-old woman; carer depression common; the carer-intervention trials (education plus problem-solving) reducing institutionalisation and carer depression with effect sizes exceeding the drug effects; the highest-cost events (admissions, fractures, tubes) the ones structured care prevents.",
    "The two brain laws driving the system: the lost reserve (ordinary loads tipping the demented brain into delirium — the permanent vigilance programme) and the reverse-order law (newest skills first lost, songs/prayers/routines persisting — the care built on survivors).",
    "BPSD as communication: the four questions (what happened, what preceded, what followed, what need could this be); the antecedent changed, the redirect deployed, the argument declined; the SSRI tier for the mood-driven readings before any antipsychotic is considered.",
    "The pharmacological disciplines: the responder subtypes (DLB/PDD best; Alzheimer's mild-moderate modest; FTD not indicated; vascular modest); the antipsychotic rule (lowest dose, shortest time, review date written, mortality/stroke warning carried, the DLB/PDD prohibition); the stop-list (anticholinergics, first-generation antihistamines, tricyclics, long-acting benzodiazepines, tonics); the honest deprescribing at the end.",
    "The caregiver programme: the register (one question every visit, screen yearly, treat as patient), the one-hour survival package (communication rules, bathing and dining technique, the behaviour diary, the red flags, when to call whom), the respite engineering (rosters, day-care, planned admissions — prescribed in words with dates), the support tier (ARDSI, helplines, tele-MANAS 14416).",
    "The Indian tier: the one-doctor-plus-one-family spine with the tele-follow-up call; the four-line review record as the whole infrastructure; PM-JAY for events and Jan Aushadhi for the ₹300-800/month generics; the two classic reversible triggers (urinary infection and impaction) behind most Indian 'dementia emergencies'; the joint family as asset and risk (the shared household's hands versus the diffuse responsibility and the dependency cage); the once-and-early living-room conversation converting eight casualty escalations into one dignified home ending.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "dmgt-quiz-1",
      question: "A dementia patient's evening agitation worsens over a week. The first response is:",
      options: ["Increase the antipsychotic", "Run the reversible-load checklist (pain, stool, urine, senses, sleep, drugs)", "Admit for CT", "Stop the memory medicine"],
      correctIndex: 1,
      explanation: "Sudden change is a load problem until proven otherwise — most episodes dissolve without new prescriptions.",
      afterSectionId: "management",
    },
    {
      id: "dmgt-quiz-2",
      question: "The dementia subtype with the BEST response to cholinesterase inhibitors is:",
      options: ["Frontotemporal dementia", "Dementia with Lewy bodies / PDD", "Vascular dementia", "Normal-pressure hydrocephalus"],
      correctIndex: 1,
      explanation: "The deepest cholinergic deficits sit in the synucleinopathies; FTD has no benefit and can worsen.",
      afterSectionId: "management",
    },
    {
      id: "dmgt-quiz-3",
      question: "The evidence-based position on feeding tubes in advanced dementia:",
      options: ["Tubes prolong comfort reliably", "Hand-feeding carries comparable comfort and dignity without clear tube benefit", "Tubes prevent aspiration pneumonia", "Mandatory once swallow fails"],
      correctIndex: 1,
      explanation: "Consistent trial and cohort evidence; the conversation belongs early, at home, not in casualty.",
      afterSectionId: "management",
    },
    {
      id: "dmgt-quiz-4",
      question: "Among all interventions in dementia care, the largest effect sizes come from:",
      options: ["Newer antipsychotics", "Structured caregiver training and support", "Brain tonics", "Vitamin megadoses"],
      correctIndex: 1,
      explanation: "Caregiver intervention trials reduce carer depression and patient institutionalisation, outperforming drug effects on life outcomes.",
      afterSectionId: "mechanism",
    },
    {
      id: "dmgt-quiz-5",
      question: "Legal and financial planning must happen:",
      options: ["After behavioural symptoms settle", "Early, while insight remains — the window expires silently", "Only after disability certification", "Never in dementia"],
      correctIndex: 1,
      explanation: "Nomination, mandates, family agreements and MHA 2017 tools all require the patient's preserved capacity — start the month of diagnosis.",
      afterSectionId: "management",
    },
    {
      id: "dmgt-quiz-6",
      question: "The four lines worth writing at every dementia review are:",
      options: ["Weight, BP, pulse, temperature", "Cognition score, function level, top behaviours, carer status + next review date", "Drug list only", "Family history only"],
      correctIndex: 1,
      explanation: "Those four lines (plus the date) constitute the trajectory record on which every management decision rides.",
      afterSectionId: "diagnosis",
    },
  ],
  activeRecallQuestions: [
    { question: "Name the five floors in order and explain why disclosure comes before drugs.", answer: "THE FLOORS: (1) TELL IT TRULY — the disclosure and planning consultation (name the illness, correct the myths, register the project, open the legal window); (2) TREAT WHAT IS TREATABLE — the PAIN FUSES reversible-load checklist; (3) DRUG THE SYMPTOMS KNOWINGLY — the modest subtype-specific tier, the mood tier, the rare warned antipsychotic, the stop-list; (4) ENGINEER THE ENVIRONMENT AND READ THE BEHAVIOUR — routine as memory, the unmet-need method, the technique corrections; (5) SUPPORT THE FAMILY — the carer register, the skills package, the respite with dates. WHY DISCLOSURE FIRST: because the disclosure converts a chaotic decline into a managed project — the family that knows what is happening and what can be done becomes the treatment's delivery system (in India, virtually the whole delivery system); the prescriptions written on an undisclosed foundation are escalated by a family that mistakes loads for progression and abandoned by one that was never told what the medicine could not do. The order is the architecture: each floor carries the ones above it.", topic: "Management" },
    { question: "Recite the reversible-load checklist, and the two classic Indian triggers it must never miss.", answer: "PAIN FUSES: P — Pain (teeth, joints, abdomen); A — Activity/constipation; I — Infection (urine, chest, skin); N — Night and sleep; F — Faecal impaction (the hidden classic); U — Urine retention; S — Senses (glasses, hearing, dentures, earwax); E — Environment (new room, noise, light, the moved bed); S — Sedating/anticholinergic drug burden, stripped. THE TWO CLASSIC INDIAN TRIGGERS: the URINARY INFECTION and the FAECAL IMPACTION — the pair behind most 'dementia emergencies' in Indian casualty, both phone-triageable, both treatable for the price of an aperient and a urine dipstick, and both — untreated — ending in the admission-CT-antipsychotic sequence that the checklist exists to prevent. The checklist is run at every review and at every 'worsening' by reflex, not by recall.", topic: "Clinical practice" },
    { question: "Which two dementia subtypes respond best to cholinesterase inhibitors, and which one forbids dopamine blockers?", answer: "THE RESPONDERS: dementia with Lewy bodies and Parkinson's disease dementia — the synucleinopathies with the deepest nucleus-basalis cholinergic loss; donepezil and rivastigmine buying real function and even psychotic-feature relief there (the Alzheimer's response modest in the mild-moderate window; the vascular benefit smaller; FTD the explicit non-responder where the tier can WORSEN the picture). THE FORBIDDEN SUBTYPE: DLB/PDD — the dopamine-blocker prohibition absolute without the specialist's explicit call, because D2 blockade in the synucleinopathies causes the severe rigidity-worsening, swallowing-failure and malignant-type reactions (the wallet card: 'severe sensitivity to antipsychotic drugs; for agitation contact the treating doctor; avoid haloperidol/risperidone') — the rule this umbrella enforces across every subtype's casualty visit.", topic: "Pharmacology" },
    { question: "Write the antipsychotic rule as one sentence with three numbers in it.", answer: "'In dementia, an antipsychotic is the smallest dose, for the shortest time, with the review date written on the prescription — and never without the mortality-and-stroke warning said aloud to the family.' The three numbers embedded: the SMALLEST dose (start low, titrate by necessity not comfort), the SHORTEST time (days-to-weeks for a crisis, never the open-ended repeat that Indian OPDs default to), and the WRITTEN review date (the specific calendar date that converts the taper from intention to instruction). The sentence's context: the rule fires only after the load checklist and the unmet-need method have run (most behaviours dissolve before this sentence is needed) — and the DLB/PDD prohibition rides alongside it as the absolute veto that no agitation, however severe, overrides.", topic: "Pharmacology" },
    { question: "The unmet-need method: the four questions for any behaviour.", answer: "(1) WHAT HAPPENED EXACTLY? — the behaviour described in observable terms, not character terms ('he struck the helper during the face-wash', not 'he turned violent'); (2) WHAT PRECEDED IT? — the antecedent hunted (the hour, the room, the helper's approach, the sequence attempted, the temperature, the noise); (3) WHAT FOLLOWED IT? — the consequences mapped (what the behaviour achieved, escaped, or communicated — the reinforcement pattern that may be teaching it); (4) WHAT NEED COULD THIS BE? — the sentence decoded: toilet, pain, fear, boredom, loneliness, over-stimulation, the task asked too fast or too complex. The intervention that follows: change the ANTECEDENT, not the person — redirect, never argue; correct the technique (the hour, the sequence, the music, the helper); give the need its channel before the behaviour needs one. The philosophy in one line: behaviour is a sentence; read it before you sedate it.", topic: "Clinical practice" },
    { question: "Five steps of legal/financial planning and the expiry date on each.", answer: "(1) NOMINEE UPDATES — bank accounts, deposits, insurance, the pension: expires when the person can no longer sign with intent; (2) JOINT MANDATES / operating instructions: the bank's own capacity thresholds approximating the window's end; (3) THE WRITTEN FAMILY ARRANGEMENT — property and caregiving responsibilities recorded with the family's agreement: expires when consensus dissolves with the capacity that could anchor it; (4) SUPPORTED DECISION-MAKING and advance preferences under the Mental Healthcare Act 2017: requires the person's participation while insight holds — the law's own expiry date; (5) DISABILITY CERTIFICATION — the entitlement-unlocker that does NOT require capacity but takes months: its expiry is the delay itself (the application started too late is the benefit arriving after the need's season). The governing rule: the whole tier worked the MONTH OF DIAGNOSIS — the window closes silently, and no later moment announces itself as the last one with capacity in it.", topic: "Indian practice" },
    { question: "The caregiver register: what to ask, how often, what to screen annually.", answer: "WHAT TO ASK: one question, by name, at EVERY visit — 'How are YOU sleeping, eating, coping?' — the three-line probe that catches the wall's condition while it is still a crack: her sleep (the night-waking carer's own delirium risk), her food (the weight loss that precedes the collapse), her coping (the anger and the guilt that predict both elder abuse and institutionalisation). HOW OFTEN: every review — the register is a vital sign, not an annual event; sooner after any fall, hospitalisation or behavioural escalation of the patient (the wall's load events). WHAT TO SCREEN ANNUALLY: the carer depression screen — a structured instrument or the two-question version, with a positive screen treated as the clinical event it is (her SSRI, her own review slot, her treatment as a patient without apology). The residency discipline underneath: every dementia consultation examines TWO patients, or it has examined neither.", topic: "Clinical practice" },
  ],
  faqs: [
    { question: "What is the plan, overall, in one line?", answer: "Keep him comfortable, safe and connected at home for as long as possible, with planned reviews, preventable crises prevented, and the family protected from breaking." },
    { question: "How often should we see the doctor?", answer: "Every three to six months in the stable phases, sooner after any fall, sudden change or medicine event, plus whatever phone check-in your doctor offers in between." },
    { question: "He suddenly got much worse this week. Is the disease accelerating?", answer: "Sudden changes are usually not the disease; they are a urine infection, constipation, pain, a new tablet or sleep disruption. Run the checklist with your doctor before accepting the decline as permanent." },
    { question: "Should he have a feeding tube when swallowing fails?", answer: "In advanced dementia, hand-feeding with good technique gives comparable comfort and dignity; tubes do not clearly prevent pneumonia or prolong comfort. Discuss this with the family early, so the decision is made in the living room, not the casualty." },
    { question: "We are three brothers in different cities. How do we share this?", answer: "Written rotation shifts, one shared daily log, one medicine-owner, and quarterly respite for the primary one; the doctor should help draft it — 'we are family, no formalities' is how caregivers break." },
    { question: "Is day-care worth the money?", answer: "Even two afternoons a week reliably lowers caregiver stress and delays residential placement — among the best value purchases in the entire disease." },
    { question: "When should the memory medicines be stopped?", answer: "When advanced disease removes speech, swallow and daily function; a tapering agreed with the doctor is honest care, not giving up; earlier if side effects outweigh the function being held." },
    { question: "Can I leave him alone for two hours?", answer: "Build up alone-time with safety installed: ID card, gas off, floor mattress, familiar routine, a phone with one-button dialling — and rehearse what he should do when he forgets where you are." },
    { question: "What legal steps are still open now that he is already forgetful?", answer: "If insight remains: nominee updates, supported decision-making documentation under the Mental Healthcare Act 2017, and family agreements; once insight is gone the options narrow — do it in the earlier window, however uncomfortable." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "NICE dementia guideline lineage — the assessment and management architecture this course's floors reorganise" },
      { source: "Mental Healthcare Act 2017 (India) — advance directives, supported decision-making and nominated representative provisions" },
      { source: "National Programme for Health Care of the Elderly (India) — the nearest policy platform for service-design answers" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.13 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Brodaty H et al. and the caregiver-intervention literature — carer training reducing institutionalisation and carer depression (including LMIC-site trials)" },
      { source: "Cochrane reviews — antipsychotics in dementia (efficacy and the mortality/stroke warning); non-pharmacological BPSD interventions; cholinesterase inhibitors and memantine" },
    ],
    reviews: [
      { source: "Sampson EL et al. and the palliative dementia literature — feeding-tube outcomes in advanced dementia" },
      { source: "Prince M et al. — 10/66 and LMIC dementia care studies, including the India caregiver-intervention trial" },
      { source: "WHO iSupport programme for dementia carers — the family-training basis adaptable to Indian languages" },
      { source: "Dementia India Reports (ARDSI 2010, 2020) — Indian services, caregiving realities and policy framing" },
      { source: "Falls and fracture-prevention guidance in older people (NICE-lineage) — the bone-health package of Floor 2" },
    ],
    patientResources: [
      { source: "The red-flag card and the four-line review record — the two instruments this course hands to every Indian dementia household" },
      { source: "ARDSI chapters, the dementia helplines, and Tele-MANAS 14416 — the carer's own support tier" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "8 min",
      description: "Plain language: the five-part plan, the sudden-change checklist, the technique corrections, the carer's own care.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "26 min",
      description: "The five floors, the PAIN FUSES checklist, the antipsychotic rule, the legal window.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "35 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "44 min",
      description: "Everything — the four-line record, the phone triage, the two-patient consultation, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The five floors, the evidence hierarchy, the two brain laws.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the floors in order and state the carer-training evidence cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The reserve rule, the reverse-order law, the unmet-need reading.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the environmental tier outperforms the pharmacological on life outcomes." },
    { number: 3, title: "Clinical Practice", description: "The checklist, the drug disciplines, the behaviour ladder, the caregiver programme.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run PAIN FUSES, the four questions and the antipsychotic rule with the three numbers." },
    { number: 4, title: "Indian Context", description: "The four-line record, the phone triage, the legal month, the final-phase conversation.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can draft the four lines, run the phone triage and hold the once-and-early conversation." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the programme-design essay cold and recite the checklist without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.13 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "NICE dementia guideline lineage — the assessment and management architecture this course's floors reorganise", sourceType: "guideline", year: "2000s–2020s", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Brodaty H et al. and the caregiver-intervention literature — carer training reducing institutionalisation and carer depression, including LMIC-site trials", sourceType: "review", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Cochrane reviews — antipsychotics in dementia (efficacy and the mortality/stroke warning); non-pharmacological BPSD interventions; cholinesterase inhibitors and memantine", sourceType: "systematic-review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Sampson EL et al. and the palliative dementia literature — feeding-tube outcomes in advanced dementia", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Prince M et al. — 10/66 and LMIC dementia care studies, including the India caregiver-intervention trial", sourceType: "primary", year: "2000s–2010s", dateReviewed: "2026-09-29" },
    { id: "S7", source: "WHO iSupport programme for dementia carers — the family-training basis adaptable to Indian languages", sourceType: "who", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Dementia India Reports (ARDSI 2010, 2020) — Indian services, caregiving realities and policy framing", sourceType: "review", year: "2010–2020", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Mental Healthcare Act 2017 (India) — advance directives, supported decision-making and nominated representative provisions", sourceType: "government", year: "2017", dateReviewed: "2026-09-29" },
    { id: "S10", source: "National Programme for Health Care of the Elderly (India) — the nearest policy platform; falls and fracture-prevention guidance (NICE-lineage) for the bone-health package", sourceType: "guideline", year: "2010s onward", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Indian cost realities — Jan Aushadhi generic pricing, PM-JAY coverage framing, the ₹300–800/month medicine tier (approx 2026)", sourceType: "review", year: "2020s", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The five-floor architecture: disclosure and planning; the reversible-load checklist; the knowing pharmacology; the environmental-behavioural tier; the family tier — each floor carrying the ones above, with the disclosure converting a chaotic decline into a managed project.", grade: "established", sources: ["S1", "S2"] },
    { text: "The two brain laws: the lost reserve (ordinary loads tipping the demented brain into delirium — permanent reversible-load vigilance, 'sudden worsening' a load problem until proven otherwise) and the reverse-order law (abilities lost newest-first, songs/prayers/routines persisting — care built on the surviving architecture).", grade: "established", sources: ["S1"] },
    { text: "The evidence hierarchy: caregiver intervention trials (education plus problem-solving) reduce patient institutionalisation and carer depression with effect sizes exceeding the drug effects — the management tier as the strongest treatment in the field, including in LMIC-site and Indian family-structure trials.", grade: "established", sources: ["S3", "S6"] },
    { text: "The reversible-load discipline: the PAIN FUSES checklist run at every review and every 'worsening' — with the urinary infection and the faecal impaction as the two classic Indian triggers behind most 'dementia emergencies', both phone-triageable and both preventing the admission-CT-antipsychotic sequence.", grade: "established", sources: ["S1", "S2"] },
    { text: "The pharmacological disciplines: the responder subtypes (DLB/PDD best, Alzheimer's mild-moderate modest, FTD not indicated and can worsen, vascular modest); the antipsychotic rule (smallest dose, shortest time, review date written, mortality/stroke warning carried, the DLB/PDD dopamine-blocker prohibition absolute); the stop-list (anticholinergics, first-generation antihistamines, tricyclics, long-acting benzodiazepines, tonics); the honest deprescribing at the end.", grade: "established", sources: ["S2", "S4"] },
    { text: "The BPSD method: behaviour as communication — the four questions of the unmet-need reading (what happened, what preceded, what followed, what need could this be) before any pharmacological step, with the antecedent changed and the technique corrected rather than the person sedated.", grade: "established", sources: ["S2", "S4"] },
    { text: "The disclosure-and-register discipline: the diagnostic consultation itself carrying the honest naming, the myth correction, the written problem list, the red-flag list for urgent contact ('sudden change', 'not passing urine', 'fall', 'fever with confusion') and the baseline register (cognition, function, behaviours, medicines, carer status) — the reference point every future visit compares against, with the trajectory rather than any single score deciding the drug questions.", grade: "established", sources: ["S1", "S2"] },
    { text: "The final-phase evidence: hand-feeding with posture and texture techniques carrying comfort and dignity comparable or better than early tube insertion in advanced dementia — the conversation held once, early, at home (the moderate stage), converting the eight casualty escalations into one planned home phase.", grade: "established", sources: ["S5"] },
    { text: "The legal window: nominee updates, joint mandates, written family arrangements, the Mental Healthcare Act 2017's supported decision-making and advance preferences, and the disability certification — all expiry-dated by insight and all to be worked the month of diagnosis (the certification itself taking months).", grade: "established", sources: ["S9"] },
    { text: "The Indian service design: the one-doctor-plus-one-family spine with monthly tele-follow-up; the four-line review record (cognition, function, behaviours, carer status + date) as the whole infrastructure when written consistently; PM-JAY for events and Jan Aushadhi for the ₹300–800/month generics; the joint family as asset and risk; ARDSI/WHO iSupport as the family-training tier; tele-MANAS 14416 as the carer's line.", grade: "supported", sources: ["S7", "S8", "S10", "S11"] },
  ],
};
