import type { PsychiatryCourse } from "./types";

/**
 * DELIRIUM — canonical Psychiatry course
 * (migration batch 6, Group A — neurocognitive disorders, part 1 of 2).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/delirium.md — untouched foundation),
 * re-researched against current guidance (DSM-5/ICD-11, Inouye's
 * acute-brain-organ-failure framing, the 4AT and CAM bedside screens,
 * the NICE CG103 architecture, the multicomponent-prevention Cochrane
 * evidence) with per-claim provenance.
 *
 * Drug routes: amitriptyline carries a KYP lesson and is linked as the
 * anticholinergic-burden CAUTION (a drug that can CAUSE the syndrome);
 * haloperidol, olanzapine, risperidone, quetiapine and the
 * withdrawal-tier benzodiazepines have no KYP lessons and are
 * recorded in contentGaps, never invented.
 */
export const deliriumCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "delirium",
  title: "Delirium",
  shortName: "Delirium",
  kind: "disorder",
  category: "Neurocognitive Disorder",
  groupLetter: "A",
  groupName: "Neurocognitive disorders",
  learningPath: ["Psychiatry", "Neurocognitive Disorders", "Delirium"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-28",

  estimatedReadTime: "35 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Acute brain failure: sudden confusion signalling a treatable physical cause",
  summary:
    "Delirium is an acute, fluctuating disturbance of attention and awareness caused by physical illness, drugs or surgery. It is a medical emergency: hunt the cause first, manage the environment, and use drugs last, at the lowest dose for the shortest time.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define delirium in one sentence and explain why it is a medical emergency, not a psychiatric curiosity.",
    "Distinguish hyperactive, hypoactive and mixed delirium, and state why the hypoactive form is the dangerous, missed one.",
    "Apply a bedside screening approach (CAM / 4AT, named, not reproduced) in under two minutes: plus the months-backwards informal test.",
    "Separate delirium from dementia and from depression using onset, course and attention.",
    "Build a cause checklist using the predisposing-vulnerability plus precipitating-insult (two-hit) model.",
    "Outline the investigations every delirium work-up must include, and when to image, do an EEG, or a lumbar puncture.",
    "Manage delirium: treat the cause, manage the environment, and use antipsychotic drugs only when you must, with the doses.",
    "Explain the prognosis honestly at 1 week, 1 month and 6 months, and why untreated delirium is never 'just confusion'.",
  ],
  quickFacts: [
    { label: "The one-line definition", value: "Acute, fluctuating disturbance of attention and awareness due to a medical condition or substance", detail: "Every word earns its place: acute (hours–days), fluctuating (the signature that separates it from dementia), attention (the core domain), and a physical cause that must be hunted" },
    { label: "Hospital frequency", value: "1 in 5 general inpatients", detail: "ICU 30–75%; post-hip-fracture up to 50%; terminal illness up to 80%: 'terminal agitation' is usually delirium" },
    { label: "The missed subtype", value: "Hypoactive (quiet) delirium", detail: "Roughly half of cases: drowsy, withdrawn, 'well-behaved'; carries the WORST prognosis because it is missed and the underlying cause festers" },
    { label: "The two-hit model", value: "Vulnerable brain + insult", detail: "An 85-year-old with dementia can become delirious from a change of room or a dose of cough syrup: the more vulnerable the brain, the smaller the insult needed" },
    { label: "The chemistry", value: "Acetylcholine fails, dopamine runs free", detail: "The final common pathway: why anticholinergic drugs precipitate it and dopamine-blockers calm the storm while the cause is fixed" },
    { label: "The mortality truth", value: "6–12-month mortality approaches acute MI", detail: "Hospitalised delirium is never benign: longer stays, dementia unmasking, institutionalisation and death all follow it" },
    { label: "The EEG signature", value: "Diffuse slowing", detail: "Reflects widespread cortical dysfunction; a normal EEG argues strongly against delirium and non-convulsive status gets excluded" },
    { label: "The Indian structural gift", value: "The 24-hour family member", detail: "Western guidelines engineer volunteer reorientation programmes; Indian wards already have the protective factor. Use it deliberately" },
  ],
  knowledgeGraph: [
    { label: "Acetylcholine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The alertness-orientation system whose failure is delirium's final common pathway" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The arousal pusher that runs unchecked when acetylcholine fails: hallucinations and paranoia" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The attention-and-filter seat: first to brown out when the seesaw tips" },
    { label: "Thalamus", type: "brain-region", href: "#brain", note: "The arousal relay station: the sleep-wake switch that delirium always attacks" },
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The strongest predisposing vulnerability, and the alarm bell that a dementia has begun when a first delirium lands on it" },
    { label: "Dementia with Lewy Bodies", type: "condition", href: "/psychiatry/lewy-body-dementia/", note: "The antipsychotic catastrophe territory: haloperidol can be life-threatening there" },
    { label: "Dementia in Parkinson's Disease", type: "condition", href: "/psychiatry/parkinsons-dementia/", note: "Vulnerable brain plus antiparkinsonian drugs: the two-hit model in one patient" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The third of the bedside three-way discrimination: 'withdrawn and quiet' is screened, not assumed" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The young-onset, voices-and-fixed-beliefs contrast to sudden visual misperceptions in the medically ill" },
    { label: "Amitriptyline", type: "drug", href: "/drugs/amitriptyline/", note: "The anticholinergic-burden caution: a KYP-lessoned drug that can CAUSE the syndrome; the drug-chart review step" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry delirium. The seesaw of acetylcholine and dopamine: deep in the brainstem, acetylcholine keeps us alert, focused and orientated while dopamine pushes arousal; most causes of delirium (low oxygen, low glucose, toxins, inflammation) tip the seesaw towards acetylcholine failure and relative dopamine excess. The delirious brain first misperceives (acetylcholine failing), then builds vivid hallucinations and paranoia (dopamine unchecked), which is why dopamine-blocking drugs calm the storm while the real cause is being fixed, and why anticholinergic drugs (bladder tablets, some cold remedies, tricyclics) can precipitate the syndrome at any age. Inflammation at the gate: the brain is guarded by the blood–brain barrier; in severe infection, surgery or trauma, the body's inflammatory signals (cytokines) cross or signal through this gate and switch on the brain's immune cells, the microglia, and activated microglia disturb synapses, effectively browning out the highest, newest functions first: attention, orientation, and the filter that tells dream from waking. This is why a chest infection in the toes can produce hallucinations in the cortex. The sleep-wake collapse: delirium always attacks the brain's clock and the switch between sleeping and waking, as the switch fails, dream imagery leaks into waking hours (worse at dusk: sundowning), attention fades in waves, and nights become wild while days become sleepy. Families often notice day-night reversal before any doctor notices the confusion.",
    steps: [
      "The seesaw: acetylcholine (alert, focused, orientated) vs dopamine (arousal push); insults tip it towards acetylcholine failure with relative dopamine excess.",
      "The misperception cascade: acetylcholine failure first blurs perception; unchecked dopamine then builds the vivid hallucinations and paranoia.",
      "Inflammation at the gate: cytokines from infection, surgery or trauma signal through the blood-brain barrier and activate microglia.",
      "Activated microglia disturb synapses: the highest, newest functions brown out first: attention, orientation, the dream-waking filter.",
      "The sleep-wake switch fails: dream imagery leaks into waking (sundowning), attention waves, nights wild and days sleepy; the family sees day-night reversal first.",
      "The ageing brain's thin cholinergic reserve is why the elderly are the vulnerable tier: the smallest insult suffices.",
      "The treatments mirror the biology: fix the insult, restore the sensory and circadian environment, and only then (if danger demands) briefly block dopamine.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "prefrontal-cortex", name: "Prefrontal cortex", role: "The attention-and-filter seat: the newest, most metabolically demanding cortex browns out first: inattention, disorganisation, the dream-waking filter failing.", grade: "supported" },
    { id: "thalamus", name: "Thalamus (the arousal relay)", role: "The relay station of arousal and sensory gating: its dysfunction underlies the clouded consciousness and the sleep-wake collapse.", grade: "supported" },
    { id: "brainstem-cholinergic", name: "Brainstem cholinergic nuclei", role: "The ascending acetylcholine supply (pedunculopontine and laterodorsal tegmental nuclei): the fails whose failure is the final common pathway.", grade: "proposed" },
    { id: "hypothalamus-clock", name: "Suprachiasmatic nucleus (the clock)", role: "The circadian pacemaker whose disconnection produces day-night reversal and sundowning.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Acetylcholine", symbol: "ACh", role: "Alertness, orientation, attention: the system whose failure is delirium's final common pathway; the elderly brain's thin cholinergic reserve is the vulnerability.", grade: "established", drugConnection: "Why anticholinergic burden (bladder drugs, cold remedies, tricyclics like amitriptyline) precipitates or worsens delirium: check the drug chart first." },
    { name: "Dopamine", symbol: "DA", role: "Arousal push and perceptual salience: relatively excessive when acetylcholine fails: the hallucinations, paranoia and agitation.", grade: "supported", drugConnection: "Why dopamine-blockers (haloperidol, quetiapine) calm the storm, and why they are catastrophic in Lewy body disease." },
    { name: "Serotonin", symbol: "5-HT", role: "Sleep architecture and arousal cycling: disturbed secondarily in the circadian collapse; the withdrawal states ride partly on it.", grade: "proposed" },
    { name: "Melatonin", symbol: "—", role: "The clock's hormone: its rhythm collapses with day-night reversal; the basis for light-and-rhythm environmental treatment.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "cholinergic-failure-pathway",
      name: "The seesaw tips (acetylcholine fails)",
      steps: [
        { label: "The insult arrives", detail: "Hypoxia, hypoglycaemia, toxins, uraemia, infection products: any metabolic or toxic blow" },
        { label: "The cholinergic supply fails", detail: "The thin-reserve elderly brain tips first; the young brain needs a bigger insult" },
        { label: "Perception blurs, attention waves", detail: "Misperceptions (the drip becomes a snake), the same question thirty times an hour, drift mid-sentence" },
        { label: "Dopamine runs relatively free", detail: "Vivid visual hallucinations, fleeting poorly-formed delusions, paranoia, the restless night" },
      ],
      clinicalManifestation: "The 3 a.m. call: yesterday's orientated patient now at a bus stand in his home town, pulling at catheters, seeing people at the window.",
      grade: "supported",
    },
    {
      id: "neuroinflammation-pathway",
      name: "Inflammation at the gate (microglial brown-out)",
      steps: [
        { label: "Systemic inflammation", detail: "Infection, surgery, trauma: circulating cytokines" },
        { label: "The blood-brain barrier signals", detail: "Cytokines cross or signal through the gate; the brain's immune cells activate" },
        { label: "Microglia disturb synapses", detail: "The connections between neurons are perturbed: a system-wide brown-out" },
        { label: "The newest functions fail first", detail: "Attention, orientation, the dream-waking filter: cortex suffers from a toes-level infection" },
      ],
      clinicalManifestation: "The chest infection that presents as seeing small animals at dusk: the body's illness arriving as the mind's confusion.",
      grade: "supported",
    },
    {
      id: "circadian-collapse-pathway",
      name: "The sleep-wake collapse (sundowning)",
      steps: [
        { label: "The clock and switch fail", detail: "Delirium always attacks the circadian pacemaker and the sleep-wake switch" },
        { label: "Dream imagery leaks into waking", detail: "Worse at dusk: hypnagogic imagery arriving in the evening hours" },
        { label: "Attention fades in waves", detail: "Fluctuation through the day, almost always worse at night" },
        { label: "Day-night reversal declares itself", detail: "Nights wild, days sleepy: the family notices before any doctor does" },
      ],
      clinicalManifestation: "Sundowning: the evening worsening that families report first and that the drug chart never explains.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "onset-hours", time: "Hours to days", title: "The switch flips", description: "Often an exact clock time is recallable ('after the operation's second night', 'since the fever'). The abruptness itself is the diagnostic clue against dementia.", phase: "onset" },
    { id: "fluctuation-days", time: "Days", title: "The waves", description: "Attention waxes and wanes through each day, worse at night; lucid mornings deceive families into cancelling the work-up. The fluctuation is the signature, not reassurance.", phase: "peak" },
    { id: "cause-treatment", time: "Days to weeks", title: "The cause found, the tide turns", description: "With the insult treated (the infection, the sodium, the drug stopped, the bladder drained), most episodes clear over days to a few weeks; the elderly and demented recover slowest.", phase: "recovery" },
    { id: "residual-weeks", time: "Weeks to months", title: "The not-quite-himself tail", description: "Subtle problems with memory and concentration can persist for weeks; older patients and those with dementia recover slowest: families must be told this honestly at discharge.", phase: "duration" },
    { id: "the-future", time: "Months to years", title: "The unmasked and the vulnerable", description: "An episode makes future episodes more likely (every surgeon who touches this patient must know) and often unmasks an underlying dementia. The first delirium is a prognostic event, not a one-off.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "10–30% of general medical inpatients develop delirium at some point in admission (the widely quoted figure: roughly one in five); intensive care 30–75% (ventilated and elderly highest); post-operative after hip fracture up to 50% of older patients, after major cardiac surgery 30–50%; terminal illness up to 80%: 'terminal agitation' is usually delirium. Mortality is substantially raised: in-hospital mortality is high, and 6–12-month mortality of hospitalised delirium approaches that of acute myocardial infarction. This is why it must never be dismissed as 'just confusion'.",
    indianPrevalence: "No national prevalence figure exists; hospital-based studies from Indian medical colleges consistently find the MAJORITY of cases missed until severe: a quiet, drowsy patient labelled 'tired', a restless one labelled 'agitated', not delirious. Common Indian precipitants in hospital series: sepsis (urinary, chest, abdominal), electrolyte imbalance (low sodium especially), hepatic encephalopathy, tuberculosis of the brain, cerebral malaria, stroke, uncontrolled diabetes, and post-operative states. Alcohol withdrawal delirium (delirium tremens) is common where alcohol use is high and admission is late: a frequent psychiatry referral in district hospitals.",
    lifetimeRisk: "An episode of delirium makes future episodes more likely with any new illness or surgery; the 6–12-month mortality approaches acute MI; longer stays, dementia unmasking and institutionalisation all follow untreated episodes.",
    genderRatio: "Male sex modestly over-represented in some series; the determining variable is brain vulnerability (age, dementia, sensory impairment), not sex.",
    ageOfOnset: "Any age under sufficient insult (severe sepsis, ICU); but the classic and commonest terrain is the elderly inpatient: the thin-cholinergic-reserve brain on a ward at night.",
    indianNotes: "The Indian family-practice paradox: a family member usually stays with the patient 24 hours a day; a PROTECTIVE factor most Western guidelines try to engineer with volunteers. We already have it; we need to use it deliberately (reorientation, familiar voice, day-night structure). Untreated cataracts, hearing loss, chronic malnutrition and late presentation of infections raise the baseline vulnerability.",
  },
  etiology: [
    { category: "biological", factor: "The vulnerability (predisposing half of the two-hit model)", details: "Old age (the biggest single risk), pre-existing dementia or mild cognitive impairment, prior stroke, Parkinson's disease, frailty, malnutrition, dehydration, and the sensory tier: poor vision (cataract) and poor hearing (wax, presbyacusis), each DOUBLING the risk, both together worse. Indian context: chronic malnutrition and anaemia in the elderly, untreated cataracts, late-presenting infections." },
    { category: "environmental", factor: "The ward itself", details: "Unfamiliar environment, no daylight, no clock, no glasses, no hearing aid, sleep deprivation, catheter in situ, long ward stays, intensive care: the precipitating environment that hospital routines can either deepen or reverse." },
    { category: "biological", factor: "Drugs (the most reversible cause)", details: "Opioids, benzodiazepines, anticholinergics (bladder drugs, tricyclics, some antiemetics and cold remedies), steroids, antiparkinsonian drugs, and the sudden WITHDRAWAL of long-term benzodiazepines or alcohol. The drug chart review is the highest-yield five minutes of the work-up." },
    { category: "biological", factor: "Infection and metabolism", details: "Urinary tract (commonest in the elderly, sometimes without pain or fever), chest, skin, abdomen, malaria, tuberculosis, any sepsis; low or high sodium, high or low glucose, calcium upset, kidney and liver failure (hepatic encephalopathy), thyroid disorders, thiamine (B1) and B12 deficiency." },
    { category: "biological", factor: "Brain events and local discomfort", details: "Stroke (especially right parietal), seizure or post-ictal state, head injury, encephalitis, tumours with raised pressure; surgery and anaesthesia (hip, cardiac, prolonged procedures); urinary retention, severe constipation/impaction, pain, blocked catheter: the classic 'confused because nobody asked when he last passed urine'." },
  ],
  symptomClusters: [
    {
      category: "1. Attention collapses (the core)",
      symptoms: ["Cannot hold attention: drifts off mid-sentence, must repeat questions, follows a finger for seconds and loses it", "Easily distracted by irrelevant sounds: cannot filter ward noise", "Awareness of surroundings waxing and waning: the same question asked thirty times in one hour"],
    },
    {
      category: "2. Cognition and perception",
      symptoms: ["Disorientation, to TIME first, then place, later to person", "Immediate and recent memory fail; old memories stay relatively intact (he talks about 1975 as if it were yesterday)", "Rambling, incoherent speech; mistaking the nurse for a dead relative; ideas of reference (the TV is about him)", "Fleeting, poorly-formed delusions; visual hallucinations (small animals, children, people at the window): classically at dusk or night", "Misinterpretations: the drip becomes a snake; the ward becomes a bus station he is trying to leave"],
    },
    {
      category: "3. The three faces of arousal and behaviour",
      symptoms: ["Hyperactive (15–45%): restless, shouting, plucking at sheets, pulling catheters, climbing out of bed, paranoid, not sleeping; everyone notices, sometimes overtreated", "Hypoactive (roughly half): quiet, drowsy, withdrawn, slow to answer, staring, off food, 'depressed'; nobody notices; carries the WORST prognosis because it is missed", "Mixed: swings between the two; hyperactive at 2 a.m., flat all day; the commonest form of all"],
    },
    {
      category: "4. The clock and the autonomic tier",
      symptoms: ["Day-night reversal, fragmented sleep, worse symptoms at dusk (sundowning)", "Onset hours to days; symptoms fluctuate through the day, almost always worse at night: the signature a dementia never shows", "Autonomic signs in severe cases: sweating, tremor, fast pulse, flushing; the withdrawal states' calling card"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5 / ICD-11 logic (paraphrased)",
      code: "The four ideas",
      criteria: [
        "Attention and awareness are disturbed: the person cannot focus, sustain or shift attention.",
        "The disturbance begins abruptly (hours to days), represents a change from baseline, and FLUCTUATES through the day.",
        "At least one more domain of cognition is affected: memory, orientation, language, perception.",
        "There is direct evidence from history, examination or tests of a medical cause (illness, drug, withdrawal), and the picture is not better explained by a pre-existing dementia alone (though the two very often coexist).",
      ],
      duration: "Hours to days in onset; the episode itself typically days to weeks; fluctuation through each day is the defining course.",
      indianNote: "The MBBS doctor in a clinic can make this diagnosis with a calendar, a good collateral history and the months-backwards test: no psychiatrist needed for the diagnosis itself; the work-up follows the cause.",
    },
    {
      system: "Bedside screening (named, not reproduced)",
      code: "CAM, 4AT, DRS-R-98",
      criteria: [
        "CAM (Confusion Assessment Method): trained staff, about 2 minutes; acute onset-fluctuation, inattention, disorganised thinking, altered arousal.",
        "4AT: four quick checks including an attention test and arousal assessment; usable by any junior doctor or nurse without special training.",
        "DRS-R-98: the severity instrument of research and audit.",
        "The informal but honest test: say the MONTHS backwards or days of the week backwards; a person who can do that in hospital at night is almost certainly not delirious.",
      ],
      duration: "The screens run in minutes; the informal attention task in thirty seconds.",
      indianNote: "The 4AT is the district-hospital instrument by design: no special training, no equipment; the months-backwards test is the clinic's free version.",
    },
  ],
  severityScales: [
    {
      name: "The three-face severity ladder",
      fullName: "Hyperactive–mixed–hypoactive clinical grading",
      measures: "The behavioural face of the episode, which decides who gets noticed and who gets missed.",
      ranges: [
        { min: 0, max: 0, severity: "Hyperactive", action: "Restless, shouting, plucking, pulling lines, paranoid: noticed and treated (sometimes overtreated); the diagnosis is rarely missed" },
        { min: 1, max: 1, severity: "Mixed", action: "Swings between wild nights and flat days: the commonest form; the night shift and the day team see different patients" },
        { min: 2, max: 2, severity: "Hypoactive", action: "Quiet, drowsy, withdrawn, off food: read as 'tired' or 'depressed'; carries the WORST prognosis because it is missed and the cause festers untreated" },
      ],
      indianNote: "The hypoactive row is the Indian district-hospital reality: the majority of cases in hospital series are missed until severe, and the quiet ones never reach the psychiatrist at all.",
    },
    {
      name: "The two-hit vulnerability ladder",
      fullName: "Predisposing-vulnerability plus precipitating-insult model",
      measures: "How much brain reserve the patient brings, which decides how small an insult suffices.",
      ranges: [
        { min: 0, max: 0, severity: "Young, healthy brain", action: "Needs a major insult (severe sepsis, ICU ventilation, high toxin load): delirium here is an ICU event" },
        { min: 1, max: 1, severity: "Older brain, some sensory loss", action: "Moderate insults suffice: urinary infection, sodium upset, new opioid; the spectacles-and-hearing-aid tier matters" },
        { min: 2, max: 2, severity: "Dementia plus age (the classic terrain)", action: "A change of room, a dose of cough syrup, one missed night: the smallest insult flips the switch; prevention protocols start pre-operatively" },
      ],
      indianNote: "The Indian elderly arrive with more vulnerability per insult: untreated cataracts and wax, chronic anaemia and malnutrition, late-presenting infections; the two-hit model localised.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Dementia", distinguishingFeatures: "Onset months–years (delirium: hours–days, often with an exact clock time); course slowly progressive and steady (delirium: fluctuates through the day, worse at night); attention intact until late stages (delirium: globally impaired EARLY); consciousness clear (delirium: clouded); hallucinations late if any vs delirium's common visual ones.", keyDifferentiator: "Acute onset and fluctuating attention: a dementia does not swing from 'oriented' to 'seeing cats' within eight hours." },
    { condition: "Depression", distinguishingFeatures: "Onset weeks–months; persistently low with diurnal variation but clear consciousness and only mildly reduced concentration ('can't concentrate' vs cannot-HOLD attention); speech slowed but coherent; hallucinations usually absent (may hear critical voices, not sudden visual misperceptions); usually very treatable.", keyDifferentiator: "Depression's attention complaint is a report; delirium's attention failure is a demonstrable bedside task failure (months backwards)." },
    { condition: "Dementia with Lewy bodies (the trap within the differential)", distinguishingFeatures: "Fluctuating cognition and visual hallucinations make DLB look delirious, but DLB's fluctuations are weeks-to-months, parkinsonism coexists, and REM-sleep behaviour disorder often precedes by years; a first 'delirium-like' presentation in a dementing patient still demands the full physical work-up.", keyDifferentiator: "Haloperidol can be catastrophic in DLB, when Lewy body disease is on the table, reach for quetiapine and treat the cause with extra care." },
    { condition: "Schizophrenia / primary psychosis", distinguishingFeatures: "Begins young and insidiously; dominated by AUDITORY hallucinations and fixed, systematised delusions; attention and orientation intact; no acute medical context: vs the elderly, medically ill patient with sudden VISUAL misperceptions, fluctuating attention and a physical cause on the work-up.", keyDifferentiator: "Sudden visual hallucinations in a medically ill older person are delirium (or a dementia), not new-onset schizophrenia." },
    { condition: "Non-convulsive status epilepticus", distinguishingFeatures: "The subtle-episode mimic: fluctuating confusion without convulsions; suspect with epilepsy history, or delirium disproportionate to the found cause; the EEG decides: diffuse slowing argues delirium, epileptiform activity names the seizure.", keyDifferentiator: "The EEG in doubt: it is 'rarely needed but decisive'." },
  ],
  management: [
    { category: "lifestyle", name: "Step 1 — Find and treat the cause (the only definitive treatment)", description: "Recheck the drug chart and stop every non-essential, especially anticholinergic, drug. Treat infection. Correct sodium, glucose, oxygen, hydration. Relieve urinary retention and impacted stool. Manage pain (paracetamol first; minimise opioids). Thiamine before any glucose in malnourished or alcoholic patients.", whenToUse: "Every single episode, in parallel with everything else: the confusion is a signal, not the disease.", indianContext: "Indian series' commonest reversible causes: hyponatraemia, silent urinary infection, sepsis, hepatic encephalopathy, retained urine with blocked catheter; the five-minute cures live in this list." },
    { category: "lifestyle", name: "Step 2 — Environmental and supportive management (works for everyone)", description: "One familiar family member present day and night; spectacles on, hearing aids in, dentures in, earwax removed; reorientate repeatedly (introduce yourself each time, clock and calendar visible, daylight by day, dim light at night); protect sleep (no routine night observations unless essential, cluster night care, minimise noise, warm milk beats sedatives); mobilise by day; AVOID catheters, restraints and cage beds; treat the fear (calm voice, eye level, short sentences, one instruction at a time, never argue with the hallucination, orient gently instead).", whenToUse: "From the first hour, on every patient, regardless of subtype, and continued after discharge.", indianContext: "None of this costs money beyond the family's time; in district hospitals this bundle is often more effective than any prescription, and the 24-hour family attendant is the structural advantage Western guidelines try to engineer." },
    { category: "pharmacotherapy", name: "Step 3 — Drugs: only when distress or danger demands", description: "Lowest dose, shortest time. Haloperidol 0.25–0.5 mg orally (repeat after 30–60 min if needed; max ~2–3 mg/day in the elderly): cheap, available everywhere; watch rigidity, dystonia, QT. Olanzapine 2.5 mg or risperidone 0.25–0.5 mg as alternatives. Quetiapine 12.5–25 mg at night where parkinsonism or Lewy body dementia is suspected (haloperidol can be catastrophic there). AVOID benzodiazepines except withdrawal states (alcohol, benzodiazepine withdrawal; catatonia: lorazepam 0.5–1 mg). Last days of life: titrate comfort over clarity; palliative sedation is sometimes the kindest treatment.", whenToUse: "When agitation endangers the patient (pulling lines, climbing out) or distress is severe, after Steps 1 and 2 are running, never instead of them.", indianContext: "Haloperidol tablets cost a few rupees: the real cost of delirium care is the investigation for the cause and the family's time, not the medication; quetiapine generic keeps a course under ₹100–150 (approx 2026, varies)." },
    { category: "lifestyle", name: "Prevention (better than cure)", description: "Multicomponent prevention programmes (nurse-led protocols: reorientation, sleep protection, early mobilisation, hydration, sensory aids, removing deliriogenic drugs) cut delirium rates by about a third in trials and cost almost nothing to adapt.", whenToUse: "From the pre-operative clinic for high-risk elective surgery patients; from admission for the elderly; from the ICU for ventilated patients.", indianContext: "The Indian ward adaptation is natural: the family member IS the reorientation protocol; train them deliberately (the familiar voice, the clock, the daylight walk)." },
  ],
  safety: {
    redFlags: [
      "Sudden confusion in any inpatient: a medical emergency until the cause is found: the work-up starts now, not tomorrow",
      "The quiet, drowsy elderly patient labelled 'tired' or 'depressed': hypoactive delirium, the missed face with the worst prognosis",
      "Fever with neck stiffness, immunosuppression, or confusion out of proportion to the found cause. LP and encephalitis on the table",
      "Alcohol withdrawal with autonomic storm (sweating, tremor, tachycardia, flushing): delirium tremens: parenteral thiamine BEFORE any glucose, benzodiazepines properly dosed",
      "Anticoagulated patient, head injury, focal signs or first seizure: image now",
      "Known or suspected Lewy body dementia with agitation: haloperidol contraindicated territory (severe, even life-threatening reactions)",
    ],
    urgentGuidance:
      "The order of operations: (1) recognise fast (months-backwards costs thirty seconds; CAM/4AT in two minutes); (2) hunt the cause in parallel: vitals and saturation, drug chart review, bladder and bowel, bloods (sodium first among equals), urine, infection screen; (3) start the environmental bundle immediately (family member, senses restored, day-night structure); (4) treat the cause definitively; (5) drugs only when distress or danger demands: lowest dose, shortest time, quetiapine-not-haloperidol if Lewy body is possible; (6) benzodiazepines only for withdrawal states; (7) image, EEG or LP by the specific indications, and never discharge a patient without telling the family the one-line rule: any sudden confusion means a physical problem; take him to a doctor the same day.",
  },
  drugLinks: [
    {
      name: "Amitriptyline",
      slug: "amitriptyline",
      role: "The anticholinergic-burden caution: a drug that can CAUSE this syndrome",
      rationale: "The tricyclic with the heaviest anticholinergic load in common psychiatric use: in the elderly, it is a classic delirium precipitant through exactly the cholinergic-failure mechanism this course teaches. The drug-chart review step of every delirium work-up runs straight into it. The KYP lesson shows the full receptor profile behind the warning.",
      evidenceLevel: "textbook",
      clinicalDisclaimer: "Linked as a CAUTION, not a treatment: amitriptyline is not a therapy for delirium in any circumstance; in the vulnerable brain it is on the list of drugs to STOP.",
    },
  ],
  contentGaps: [
    "Haloperidol: the classic delirium sedation drug (0.25–0.5 mg oral, max ~2–3 mg/day elderly): has no KYP drug lesson; its evidence is taught here, the route never invented.",
    "Olanzapine, risperidone and quetiapine (the alternative antipsychotic tier, quetiapine preferred where Lewy body is suspected) have no KYP lessons.",
    "Lorazepam and the withdrawal-tier benzodiazepines (the one setting where they treat rather than worsen) have no KYP lessons.",
    "Thiamine and the parenteral withdrawal protocols have no KYP lessons: recorded, never invented.",
  ],
  patientGuide: {
    whatIsIt:
      "Delirium is a sudden clouding of the brain caused by physical illness, drugs or surgery: the brain's equivalent of a fever of thinking. A person who was normal yesterday becomes confused tonight: not recognising family, asking the same question again and again, seeing things that are not there, or sometimes just going unusually quiet and sleepy. It is common in hospital (about one in five general inpatients), it is NOT insanity or a mental illness in origin, and it usually improves over days to weeks once the cause (an infection, a medicine, a salt imbalance, a full bladder) is found and treated.",
    whatCausesIt:
      "The body's illness arrives in the mind. An infection, an operation, low oxygen, low sodium or other blood-chemistry upset, certain medicines (especially painkillers of the opioid family, sleeping tablets, and drugs with 'anticholinergic' effects on the bladder and gut), alcohol withdrawal, a retained bladder or severe constipation, pain: any of these can switch a vulnerable brain into confusion. The older and frailer the brain, the smaller the insult needed: an 85-year-old with early dementia can become delirious from a change of room or a dose of cough syrup.",
    symptoms:
      "The picture families report: asking the same question every few minutes; not knowing where he is or what time of day; talking about old times as if they were now; mistaking the nurse for a relative; seeing small animals or people at the window (especially at dusk and night); restless nights and sleepy days; sometimes pulling at drips and trying to climb out of bed, and just as often the OPPOSITE: quiet, drowsy, withdrawn, eating little, mistaken for depression. The symptoms come on within hours to days and fluctuate through the day, worse at night.",
    treatment:
      "The treatment is the cause: the doctor will review every tablet (stopping the suspects), treat infection, correct salts and sugars, drain the bladder, manage pain, and run the environmental programme that genuinely works: one familiar family member present, spectacles and hearing aids on, daylight and a clock by day, a dark quiet night, walking by day, no restraints. Medicines to calm the storm are used only when distress or danger demands, at the lowest dose for the shortest time. The best medicine is often a familiar face, daylight, hearing aids and spectacles, not sedation.",
    selfHelp: [
      "Stay with him through the confusion, one familiar face, day and night if possible; your voice reorients better than any tablet.",
      "Bring his spectacles and hearing aids to hospital, and ask for earwax to be checked. The senses are half the treatment.",
      "Keep the days bright and active (walk, sit up, talk) and the nights dark and quiet: ask the night staff to cluster their checks.",
      "Have a clock and calendar in view; introduce yourself each time as if the first; answer the same question with the same patience the thirtieth time.",
      "Never argue with what he says he sees: orient gently instead ('you are in hospital, I am here, it is night, you are safe').",
      "Refuse sedatives offered at home after discharge for 'sleep': ask for a review of every evening tablet instead; many 'sleep' syrups carry anticholinergic loads.",
      "Learn the one-line rule for the family: any sudden confusion means a physical problem. Take him to a doctor the same day.",
    ],
    whenToSeekHelp: [
      "Any sudden change in thinking or behaviour in a medically ill or elderly person: same-day medical review, not a sedative",
      "New visual hallucinations or disorientation in hospital: tell the team immediately (do not wait for the morning round)",
      "A quiet, drowsy, withdrawn patient who 'isn't himself': the missed, dangerous face deserves the same urgency as agitation",
      "After discharge: any recurrence of confusion, new fever, or a night of wild reversal; return the same day",
      "Before any future surgery: tell the surgeon and anaesthetist about the past episode; prevention protocols exist and work",
    ],
    indianResources: [
      "The family attendant as the treatment's core: reorientation, the familiar voice, day-night structure: the structural advantage Indian wards already have",
      "District hospital general medicine and the MBBS clinic: the diagnosis needs no specialist: a calendar, a collateral history and the months-backwards test",
      "Tele-MANAS 14416 (24×7, free), for the family's distress and routing during and after the episode",
      "The pre-operative clinic conversation for any elderly family member facing surgery: ask for the delirium-prevention bundle by name",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific delirium guideline exists; management follows the international architecture (DSM-5/ICD-11 diagnostic logic, NICE CG103's prevention-diagnosis-management spine, the Inouye acute-brain-organ-failure framing, the multicomponent-prevention Cochrane evidence) with Indian adaptation craft: the family-attendant-as-protocol, the electrolyte-and-infection cause profile of Indian series, and the hepatic-encephalopathy and cerebral-malaria realities of the district consultation.",
    systemContext: "Where it is seen: general medical, surgical and ICU wards of district hospitals; post-operative orthopaedic wards (hip fracture, prostate surgery); medical wards managing decompensated liver disease; palliative care. Psychiatry is consulted only when the patient is agitated: the hypoactive cases almost never reach us. Many patients are first labelled by families as having 'gone mad', or given sedatives by the family doctor at night; the antidote is simple teaching: any abrupt change in thinking or behaviour is a MEDICAL event.",
    programmeContext: "There is no specific national delirium programme; delirium care piggybacks on whatever programme owns the precipitating illness (TB, malaria, diabetes, stroke). The elderly patient with delirium in a government facility is managed under general geriatric services where they exist, otherwise general medicine. The MBBS doctor in a clinic can make this diagnosis with a calendar, a good collateral history and the months-backwards test, then arrange the work-up: no psychiatrist needed for the diagnosis itself.",
    costConsiderations: "Haloperidol tablets cost a few rupees; the real cost of delirium care is the investigation for the cause and the family's time, not the medication. Quetiapine where needed: generic 25 mg keeps a course under ₹100–150 (approx 2026, varies by brand and scheme). The environmental bundle (family attendant, senses restored, day-night structure) costs nothing beyond the family's time; in district hospitals it is often more effective than any prescription.",
    culturalConsiderations: "The 24-hour family attendant is the protective factor Western guidelines engineer with volunteer programmes. India already has it; the teaching task is to use it deliberately (reorientation, the familiar voice, day-night structure). Against this stands the labelling tier: 'gone mad' as the family's first frame (spiritual remedies considered before medical ones, the 11 p.m. bus-stand case), the quiet elderly patient read as 'just tired', the sedative offered at home by the family doctor. The destigmatising one-minute family script: the brain has caught a fever of thinking, the same way the body catches a fever; common after serious illness and operations, not insanity, and treated with your voice, his glasses, daylight and protected sleep.",
    patientCounselling: [
      "The one-minute family script at diagnosis: 'The brain has caught a fever of thinking, the same way the body catches a fever. It is common after serious illness and operations. It is not insanity. We are treating the cause; he needs your voice, his glasses, daylight, and his sleep protected. It usually improves over days to weeks; tell us if it does not.'",
      "The discharge instruction as one repeatable line: 'Any sudden confusion means a physical problem; take him to a doctor the same day; do not start sedatives on your own.'",
      "The restraint refusal script: 'Tying him down increases the struggle and the fear and worsens outcomes. A person sitting with him plus treating the cause works better; restraint is a last resort under medical orders, loosened as early as possible.'",
      "The night-sedation counselling for the post-discharge family: structured sleep hygiene and a review of every evening tablet, many 'sleep' syrups are anticholinergic and feed the next episode.",
      "The pre-operative teaching moment: an episode makes future episodes more likely. Tell every surgeon who operates on this patient; prevention protocols exist and cut rates by about a third.",
      "The prognostic honesty script: often much better in days but 'not fully himself' for weeks; memory and concentration subtleties can persist; the old and the demented recover slowest.",
    ],
  },
  decisionPath: {
    title: "The acutely confused patient",
    nodes: [
      {
        id: "start",
        question: "A patient (or elderly relative at home) has become confused over hours to days. First: is this delirium at all?",
        branches: [
          { label: "Acute onset + fluctuating + inattention (months-backwards failed)", next: "delirium-confirmed" },
          { label: "Slow months-to-years decline, attention intact", next: "dementia-path" },
          { label: "Weeks of low mood, clear consciousness, coherent speech", next: "depression-path" },
        ],
      },
      {
        id: "delirium-confirmed",
        question: "Delirium is on the table. Which face is in front of you?",
        branches: [
          { label: "Restless, plucking, shouting, not sleeping (hyperactive)", next: "safety-gate" },
          { label: "Quiet, drowsy, withdrawn, off food (hypoactive)", next: "safety-gate" },
          { label: "Swings between the two (mixed, the commonest)", next: "safety-gate" },
        ],
      },
      {
        id: "safety-gate",
        question: "SAFETY TRIAGE: any red flag? (fever with neck stiffness, immunosuppression, anticoagulation, head injury, focal signs, first seizure, autonomic storm)",
        branches: [
          { label: "Yes", next: "escalate-now" },
          { label: "No", next: "cause-hunt" },
        ],
      },
      {
        id: "escalate-now",
        question: "Escalated care: image / LP / EEG by the specific indication.",
        recommendation: "CT-MRI now for anticoagulation, head injury, focal signs, first seizure, or no cause found; LP when encephalitis or meningitis is on the table (fever, confusion out of proportion, meningism, immunosuppression); EEG in doubt: diffuse slowing confirms delirium and excludes non-convulsive status. In parallel: the environmental bundle and the drug-chart review start regardless.",
      },
      {
        id: "cause-hunt",
        question: "Run the two-hit work-up: the drug chart, the body, and the bloods.",
        branches: [
          { label: "Drug found (opioid, benzodiazepine, anticholinergic, steroid)", next: "drug-cause" },
          { label: "Withdrawal state (alcohol, benzodiazepines)", next: "withdrawal-cause" },
          { label: "Infection / sepsis (urinary, chest, malaria, TB)", next: "infection-cause" },
          { label: "Metabolic (sodium, glucose, calcium, renal, hepatic, thyroid, B1/B12)", next: "metabolic-cause" },
          { label: "Local discomfort (retained urine, impaction, pain, blocked catheter)", next: "local-cause" },
          { label: "Nothing found yet", next: "escalate-now" },
        ],
      },
      {
        id: "drug-cause",
        question: "The most reversible cause of all: stop the suspects.",
        recommendation: "Stop every non-essential drug, especially the anticholinergic tier (bladder drugs, tricyclics, some antiemetics and cold remedies); reassess opioid need (paracetamol first); the confusion often clears with the drug chart alone. Continue the environmental bundle throughout.",
      },
      {
        id: "withdrawal-cause",
        question: "The one setting where benzodiazepines are the treatment, not the danger.",
        recommendation: "Alcohol or benzodiazepine withdrawal: benzodiazepines properly dosed (lorazepam 0.5–1 mg tier) with parenteral thiamine BEFORE any glucose load; watch the autonomic storm; this is delirium tremens territory. A frequent district-hospital psychiatry referral where admission is late.",
      },
      {
        id: "infection-cause",
        question: "Treat the infection; the confusion follows the fever.",
        recommendation: "Urinary (commonest in the elderly, sometimes without pain or fever; treat the patient, not the dipstick), chest, skin, abdominal; malaria and TB of the brain on the Indian list; blood cultures if febrile. The antibiotics are the delirium treatment.",
      },
      {
        id: "metabolic-cause",
        question: "Correct the chemistry: slowly where sodium is low.",
        recommendation: "Sodium first among equals (the 118 mmol/L quiet-widow case); glucose, calcium, renal and hepatic tiers (hepatic encephalopathy on the Indian consultation list); thyroid; thiamine and B12 in the malnourished. Correction of the electrolyte IS the psychiatric cure.",
      },
      {
        id: "local-cause",
        question: "The five-minute cures nobody asked about.",
        recommendation: "Palpate the bladder (the blocked-catheter bus-stand case); check the bowels; ask about pain and treat it; a full bladder with a blocked catheter is the classic 'confused because nobody asked when he last passed urine'. Released, he slept and woke orientated by evening.",
      },
      {
        id: "dementia-path",
        question: "Chronic decline: dementia work-up on its own track.",
        recommendation: "Months-to-years onset with attention intact until late = the dementia pathway (cognitive assessment, reversible-cause screen, the Alzheimer's course); BUT any sudden worsening on that background is delirium ON TOP of dementia until proven otherwise. The same cause-hunt runs.",
      },
      {
        id: "depression-path",
        question: "The mimic that must be tested, not assumed.",
        recommendation: "Weeks of low mood, clear consciousness, coherent speech, but run the attention task anyway: the quiet elderly inpatient labelled 'depressed' whose days-backwards fails is hypoactive delirium (the sodium-118 widow). Any NEW psychiatric label in a medical inpatient requires an attention test first.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Dismissing new confusion as 'just his age' or 'just the dementia'",
      why: "Acute change is never ageing: the 78-year-old with dementia who becomes suddenly more confused has delirium ON TOP of dementia until proven otherwise. A treatable cause is hiding.",
      correction: "Anchor to the baseline with the family (exact onset, clock time if recallable); any departure measured in hours-to-days triggers the cause-hunt regardless of known dementia.",
    },
    {
      mistake: "Missing hypoactive delirium inside 'tired', 'cooperative' or 'depressed'",
      why: "The quiet face is roughly half of cases and carries the worst prognosis: the label 'calm and withdrawn, probably depression' lets the hyponatraemia or the silent urinary infection fester.",
      correction: "The thirty-second rule: any new psychiatric label in a medical inpatient requires an attention test first; months or days-of-the-week backwards; a failure reroutes the whole plan.",
    },
    {
      mistake: "Giving benzodiazepines for night-time agitation in a non-withdrawal patient",
      why: "Sedatives deepen the confusion: the night nurse's diazepam made the bus-stand case worse, as it usually does outside withdrawal states.",
      correction: "Warm milk and a dark quiet room beat sedatives; the drug tier (if truly needed) is the antipsychotic-at-lowest-dose route; benzodiazepines reserved for withdrawal states and catatonia.",
    },
    {
      mistake: "Treating the psychosis before the physiology: high-dose antipsychotics for 'agitation'",
      why: "The agitation is a signal; dopamine blockade masks it while the sepsis, the sodium or the bladder keeps working underneath.",
      correction: "Steps 1 and 2 first (cause + environment); drugs only when distress or danger demands, lowest dose shortest time, and quetiapine, not haloperidol, wherever Lewy body disease is possible.",
    },
    {
      mistake: "Forgetting the catheter, the bowel, the pain, the glasses and the hearing aids",
      why: "The five-minute cures (a drained bladder, removed wax, spectacles on) and the sensory tier (each of poor vision and hearing DOUBLES risk) live at the bottom of the list where nobody looks.",
      correction: "The physical exam ends with three questions: when did he last pass urine, when did he last open his bowels, where are his glasses and hearing aids?",
    },
    {
      mistake: "Ordering the CT reflexively while the drug chart goes unread",
      why: "The most reversible cause (drugs) sits in the notes, not the scanner: opioids, benzodiazepines, anticholinergics, steroids, antiparkinsonian drugs.",
      correction: "The five-minute drug-chart review precedes imaging: stop every non-essential, flag the anticholinergic tier by name, and check what was STOPPED (withdrawal) as carefully as what was started.",
    },
    {
      mistake: "Tying the confused patient down so he does not pull the drip",
      why: "Restraint deepens the fear and the confusion, increases the struggle and worsens outcomes, and in the Indian ethical frame, tying down confused elderly patients is restraint, not care.",
      correction: "A person sitting with him plus treating the cause works better; restraint is a last resort under medical orders, loosened as early as possible.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define delirium in one sentence: acute, fluctuating disturbance of attention and awareness due to a medical condition or substance.",
        "The delirium-dementia-depression differential table: onset, course, attention, consciousness, hallucinations, reversibility; know it cold.",
        "Causes of post-operative delirium; the two-hit model with the cough-syrup example.",
        "Why haloperidol is used, its doses (0.25–0.5 mg oral, max ~2–3 mg/day elderly) and its risks (rigidity, dystonia, QT).",
        "The EEG finding in delirium (diffuse slow activity) and what a normal record argues.",
      ],
      practical: [
        "Demonstrate the bedside screen: months-backwards on a ward patient, then present the two-hit formulation (vulnerability + insult) from the drug chart and vitals.",
        "Take the collateral history: baseline function, exact onset, drug list including over-the-counter and eye drops, alcohol and benzodiazepine history, recent falls.",
      ],
      longAnswer: [
        "A 74-year-old man, three days after prostate surgery, becomes acutely confused at night: differential diagnosis and management (the evergreen post-operative delirium essay).",
        "Delirium: aetiology, clinical features, diagnosis and management; the two-hit model and the cause checklist as the answer skeleton.",
      ],
    },
    neetPg: {
      highYield: [
        "FLUCTUATING ATTENTION is the highest-yield single fact: acute onset + fluctuation = delirium, whatever the hallucinations look like.",
        "Hypoactive delirium = the quiet subtype with worse outcomes and the highest miss rate (the 'depressed' inpatient whose days-backwards fails).",
        "Disorientation sequence: TIME first, then place, later person.",
        "Hallucinations in delirium are predominantly VISUAL (small animals, people at the window), worse at dusk (sundowning).",
        "Two-hit model: advanced age + pre-existing dementia is the strongest predisposing vulnerability; infection, drugs, metabolic upset, hypoxia the classic precipitating insults.",
        "Drugs that precipitate: opioids, benzodiazepines, ANTICHOLINERGICS (bladder drugs, tricyclics, some antiemetics/cold remedies), steroids, antiparkinsonian drugs.",
        "ICD-10/DSM logic: (1) disturbed attention and awareness; (2) acute onset and fluctuation; (3) another cognitive domain affected; (4) evidence of a medical cause.",
        "EEG: diffuse slowing (triphasic waves a special subset, classically metabolic); normal EEG argues against delirium.",
        "Haloperidol 0.25–0.5 mg oral is the classic choice; QUETIAPINE 12.5–25 mg where Lewy body disease is suspected (haloperidol can be catastrophic).",
        "Benzodiazepines are correct ONLY in withdrawal states (alcohol, benzodiazepines; catatonia): thiamine before any glucose.",
        "Mortality: 6–12-month mortality of hospitalised delirium approaches acute MI, never 'just confusion'.",
        "I WATCH DEATH for causes: Infection, Withdrawal, Acute metabolic, Trauma, CNS pathology, Hypoxia, Deficiencies, Endocrine, Acute vascular, Toxins/drugs, Heavy metals.",
      ],
      pyqConcepts: [
        "Right parietal stroke presenting as acute confusion: the localised lesion that mimics the global syndrome.",
        "Hepatic encephalopathy as the psychiatric consultation; delirium tremens management (thiamine before glucose, benzodiazepines, autonomic storm watch).",
        "Cerebral malaria and TB meningitis as causes of acute confusion in the Indian exam corner.",
        "Pyuria without symptoms in the elderly: treat the patient, not the dipstick.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 74-year-old retired schoolteacher, three days after prostate surgery, begins at 11 p.m. to insist he is at a bus stand in his home town, tries to climb over the cot rails and asks the same question every two minutes; the family considered spiritual remedies; the night nurse gave diazepam and he became worse; morning review found a distended bladder with a blocked catheter: released, he slept and was orientated by evening: the full arc of a five-minute cure, the benzodiazepine error, and the family-labelling tier in one case.",
        "A 68-year-old widow with mild diabetes, admitted with a chest infection, becomes 'cooperative and sleepy', eats little, and is written up as 'calm and withdrawn, probably depression'; the resident who asked her to name the days of the week backwards found she could not get past Tuesday; sodium was 118 mmol/L: the hypoactive trap, the thirty-second attention test that caught it, and the electrolyte that WAS the 'psychiatry'.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "The defining feature: acute onset with fluctuating attention (vs dementia's slow decline with intact early attention).",
        "Visual hallucinations in the medically ill elderly = delirium until proven otherwise; schizophrenia begins young with voices and fixed beliefs.",
        "Anticholinergic drugs precipitate delirium even when taken as prescribed.",
        "EEG: generalised slow activity; the withdrawal exception for benzodiazepines.",
        "The disposition order: treat the cause, environment second, drugs last at lowest dose.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "Liaison craft: the referral says 'agitated, please sedate'; your first act is the drug chart and the bladder, not the syringe; the psychiatry of delirium is mostly internal medicine performed carefully.",
        "The Inouye framing to teach every house officer: delirium is acute brain ORGAN FAILURE; the same urgency as renal failure, with 6–12-month mortality approaching MI.",
        "The prevention economics: multicomponent nurse-led programmes cut rates by about a third at almost no cost, on Indian wards, the trained family attendant IS the protocol; this is the consult that changes a hospital more than any prescription.",
        "The DLB trap: a first 'delirium-like' fluctuation with visual hallucinations and parkinsonism; treat the work-up as delirium (full cause-hunt), but write the antipsychotic chart with quetiapine-only caution.",
        "Prognostic honesty as therapy: tell families 'days to weeks, often not fully himself for some time, the old and demented recover slowest'; the unscripted family invents worse explanations (madness, possession, dying).",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The night the family thought he was possessed",
      presentation: "Three days after prostate surgery, a retired schoolteacher began insisting at 11 p.m. that he was at a bus stand, and the family began considering spiritual remedies.",
      initialPresentation: "A 74-year-old retired schoolteacher, three nights post prostate surgery in a district hospital, was referred as 'acutely confused, possibly possessed'. From 11 p.m. he insisted he was at a bus stand in his home town, repeatedly tried to climb over the cot rails, and asked the same question: 'when does the bus come?': every two minutes. He did not recognise his son at 3 a.m. The family's first frame was spiritual; the night nurse's was pharmaceutical.",
      history: "Baseline fully independent and orientated until this admission; no prior psychiatric history; post-operative course uncomplicated until night three; no fever documented; urine output charted as 'low' the evening before; no new drugs except the post-operative analgesia ladder and a night-time sedative given on ward request.",
      examination: "Vitals stable but exam interrupted by agitation; attention could not be held beyond a sentence; disorientated to place and situation; no focal neurological signs; abdomen revealed a distended, dull bladder with a blocked catheter; prostate surgical site unremarkable.",
      diagnosis: "Hyperactive post-operative delirium, precipitated by urinary retention with a blocked catheter (with a possible anticholinergic contribution from the night sedative): the five-minute cure hiding in the abdomen.",
      management: "The catheter unblocked and the bladder drained; the night sedative discontinued; the environmental bundle started (son present day and night, clock and daylight, no restraints); no antipsychotic required. Management of the retention cause and review of the drug chart completed the work-up: sodium, infection screen and drug review all clean.",
      outcome: "Released, he slept through the morning; by evening he was orientated except for mild patchiness that cleared over three days. The family's spiritual frame retired with the catheter bag.",
      teachingPoints: [
        "Post-operative evening confusion is delirium until proven otherwise. The clock time of onset is itself the diagnostic clue.",
        "A blocked catheter is a five-minute cure: the physical exam ends with 'when did he last pass urine?'",
        "Benzodiazepines made it worse, as they usually do outside withdrawal states. The night sedative was a second precipitant.",
      ],
    },
    {
      title: "The quiet one who was labelled depressed",
      presentation: "A widow admitted with a chest infection became 'cooperative and sleepy', and the chart said depression until a thirty-second attention test.",
      initialPresentation: "A 68-year-old widow with mild, tablet-controlled diabetes, admitted with community-acquired pneumonia on a medical ward, was reassessed on day four for 'being calm and withdrawn, probably depression, not eating well'. Nursing notes documented 'cooperative and sleepy' for two days. The resident, prompted by the contrast with her baseline (a talkative grandmother who managed her own household), asked her to name the days of the week backwards.",
      history: "Baseline independent and socially engaged; pneumonia improving on antibiotics; no prior depression or psychiatric contact; medicines unchanged except a newly added combination 'cold and cough' syrup supplied from home by the family; intake documented as 'little' for two days; no pain, no urinary symptoms volunteered.",
      examination: "Quiet, slow to answer, staring spells; arousal mildly reduced but reusable with voice; disorientated to day and date; days-backwards failed at Tuesday; no focal signs; chest improving; mild asterixis was not present; the family's cough-syrup bottle was reviewed on the bedside.",
      diagnosis: "Hypoactive delirium secondary to hyponatraemia (Na 118 mmol/L) with an anticholinergic cough-syrup contribution: the 'depression' that was an electrolyte plus a home remedy.",
      management: "The home cough syrup stopped; sodium corrected slowly with monitoring; infection treatment continued; the environmental bundle (daughter present, glasses on, daylight, day-night structure); no psychotropic of any kind: the 'depression' received no antidepressant, correctly.",
      outcome: "With slow sodium correction the quietness resolved; the 'depression' disappeared with the electrolyte; at discharge she was fully orientated and the family left with the one-line rule: any sudden confusion means a physical problem; same-day doctor, no self-started sedatives.",
      teachingPoints: [
        "Hypoactive delirium hides inside 'poor appetite' and 'withdrawal': roughly half of cases, carrying the worst prognosis because they are missed.",
        "Any NEW psychiatric label in a medical inpatient requires an attention test first: the thirty-second rule that rewrote this chart.",
        "In the elderly, hyponatraemia and silent urinary infection are the two commonest reversible causes in Indian series, and the family-supplied 'harmless' home remedy belongs on the drug chart.",
      ],
    },
  ],
  clinicalPearls: [
    "Sudden confusion = delirium until proven otherwise; and delirium = something physical until proven otherwise.",
    "The signature: acute onset + FLUCTUATING attention; a dementia does not swing from 'oriented' to 'seeing cats' within eight hours.",
    "Roughly one in five general inpatients; up to half of ICU and post-hip-fracture patients; up to 80% at the end of life: 'terminal agitation' is usually delirium.",
    "The three faces: hyperactive (noticed, sometimes overtreated), hypoactive (roughly half, missed, worst prognosis), mixed (commonest of all).",
    "The two-hit model: advanced age + pre-existing dementia is the strongest vulnerability; an insult as small as a room change or a dose of cough syrup suffices.",
    "Drug-chart review is the highest-yield five minutes: opioids, benzodiazepines, anticholinergics, steroids, antiparkinsonians, and withdrawal of long-term sedatives.",
    "The elderly's disorientation runs TIME first, then place, later person; hallucinations are visual and dusk-worst (sundowning).",
    "Months-backwards or days-backwards: the free thirty-second bedside test; a person who can do it at night in hospital is almost certainly not delirious.",
    "EEG in doubt: diffuse slowing confirms delirium and excludes non-convulsive status; a normal record argues strongly against it.",
    "Benzodiazepines only for withdrawal states (and catatonia): thiamine before any glucose in the malnourished or alcoholic patient.",
    "Haloperidol 0.25–0.5 mg oral, max ~2–3 mg/day elderly; QUETIAPINE 12.5–25 mg where Lewy body is possible: haloperidol can be catastrophic there.",
    "The best medicine is often a familiar face, daylight, hearing aids and spectacles, not restraints: restraint deepens fear and worsens outcomes.",
    "Untreated delirium is a prognostic event: longer stay, dementia unmasking, institutionalisation, 6–12-month mortality approaching acute MI.",
  ],
  highYieldSummary: [
    "Definition: acute, fluctuating disturbance of attention and awareness due to a medical condition or substance; hours-to-days onset, worse at night, each day's course waving between faces (hyperactive 15–45%, hypoactive ~half, mixed commonest).",
    "Epidemiology: ~1 in 5 general inpatients; ICU 30–75%; post-hip-fracture up to 50%; terminal illness up to 80%; mortality at 6–12 months approaches acute MI: a medical emergency, not a psychiatric curiosity.",
    "Mechanism: the acetylcholine-dopamine seesaw (insults tip it to cholinergic failure with relative dopaminergic excess, misperception first, then vivid hallucinations and paranoia); neuroinflammation at the blood-brain barrier (microglial synapse disturbance browning out the newest functions); the sleep-wake switch collapse (dream imagery leaking into dusk, day-night reversal).",
    "The two-hit model: vulnerability (age, dementia, prior stroke, Parkinson's, frailty, sensory loss (each of poor vision and poor hearing DOUBLES risk) plus insult (drugs, infection, metabolic, brain events, surgery, local discomfort, the ward itself)) the more vulnerable the brain, the smaller the insult.",
    "Diagnosis: DSM-5's four ideas (disturbed attention/awareness; acute onset and fluctuation; another cognitive domain; evidence of a medical cause); CAM/4AT bedside screens in two minutes; months-backwards in thirty seconds; work-up = vitals, drug chart, bladder and bowel, bloods (sodium first), urine (treat the patient not the dipstick), ECG; CT for anticoagulation/head injury/focal signs/first seizure; EEG in doubt; LP when encephalitis or meningitis is on the table.",
    "Differential: delirium vs dementia (onset, course, attention, consciousness) vs depression (the attention task distinguishes report from failure); DLB the special trap (fluctuations in weeks-to-months, parkinsonism, RBD history, quetiapine-only caution); non-convulsive status the EEG-decided mimic.",
    "Management ladder: (1) find and treat the cause; the only definitive treatment; (2) the environmental bundle: family member, senses restored, reorientation, sleep protected, mobilise by day, no catheters/restraints; (3) drugs only when distress or danger demands: haloperidol 0.25–0.5 mg (max ~2–3 mg/day elderly), quetiapine 12.5–25 mg if Lewy body possible, benzodiazepines ONLY for withdrawal (lorazepam 0.5–1 mg) with thiamine before glucose.",
    "Prevention: multicomponent nurse-led programmes cut rates by about a third; reorientation, sleep protection, early mobilisation, hydration, sensory aids, deliriogenic-drug removal; start in the pre-operative clinic for high-risk surgery; on Indian wards the trained family attendant IS the protocol.",
    "The Indian tier: majority of cases missed until severe (the quiet 'tired', the restless 'agitated'); commonest reversible causes in Indian series = hyponatraemia, silent urinary infection, sepsis, hepatic encephalopathy, retained urine; hepatic encephalopathy, delirium tremens, cerebral malaria and TB meningitis the exam-corner consultations; the 24-hour family attendant the structural gift: use it deliberately.",
    "Prognosis honesty: most episodes clear over days to weeks with the cause treated; weeks of not-quite-himself subtleties; the elderly and demented recover slowest; an episode predicts future episodes (tell every future surgeon) and often unmasks a dementia. The first delirium is a prognostic event, not a one-off.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "delirium-quiz-1",
      question: "The single feature that most reliably separates delirium from dementia is:",
      options: ["Visual hallucinations", "Acute onset and fluctuation of attention", "Age above 70", "Night-time worsening"],
      correctIndex: 1,
      explanation: "Hallucinations and night-worsening occur in both; the defining difference is acutely disturbed, fluctuating attention.",
      afterSectionId: "diagnosis",
    },
    {
      id: "delirium-quiz-2",
      question: "A 78-year-old woman with pneumonia is quiet, drowsy and eating little. The most useful next bedside step is:",
      options: ["Start an antidepressant", "Ask her to recite the days of the week backwards", "Order an MRI brain", "Refer for psychotherapy"],
      correctIndex: 1,
      explanation: "Classic hypoactive delirium — a 30-second attention task flags it so the search for the cause (here: sodium) can begin.",
      afterSectionId: "symptoms",
    },
    {
      id: "delirium-quiz-3",
      question: "Which drug class can precipitate delirium even when taken as prescribed?",
      options: ["Paracetamol", "Anticholinergics (bladder drugs, some antiemetics, tricyclics)", "Plain insulin", "Calcium tablets"],
      correctIndex: 1,
      explanation: "Anticholinergic burden is among the commonest and most reversible causes, especially in the elderly — the drug chart review is the highest-yield five minutes.",
      afterSectionId: "management",
    },
    {
      id: "delirium-quiz-4",
      question: "In delirium due to alcohol withdrawal, the correct first-line drug approach is:",
      options: ["Haloperidol alone", "A benzodiazepine plus thiamine before any glucose", "Quetiapine", "Amitriptyline"],
      correctIndex: 1,
      explanation: "Withdrawal states are the exception where benzodiazepines treat the mechanism — and thiamine must precede any glucose load.",
      afterSectionId: "management",
    },
    {
      id: "delirium-quiz-5",
      question: "An 80-year-old man with known Lewy body dementia develops post-operative agitation. Which should be avoided?",
      options: ["Quetiapine in low dose", "Environmental reorientation", "Haloperidol intramuscularly", "Treating urinary retention"],
      correctIndex: 2,
      explanation: "Lewy body disease can react to dopamine-blockers like haloperidol with severe, even life-threatening rigidity and deterioration — quetiapine is the cautious route.",
      afterSectionId: "differential",
    },
    {
      id: "delirium-quiz-6",
      question: "The typical EEG finding in delirium is:",
      options: ["A normal record", "Generalised slow activity", "Triphasic waves only", "Temporal epileptiform spikes"],
      correctIndex: 1,
      explanation: "Diffuse slowing reflects widespread cortical dysfunction; triphasic waves are a special (classically metabolic) subset; a normal EEG argues strongly against delirium.",
      afterSectionId: "diagnosis",
    },
  ],
  activeRecallQuestions: [
    { question: "Say the four clinical ideas DSM-5 uses to build delirium, without looking.", answer: "(1) Attention and awareness are disturbed: cannot focus, sustain or shift attention; (2) the disturbance begins abruptly (hours to days), a change from baseline, and FLUCTUATES through the day; (3) at least one more cognitive domain is affected: memory, orientation, language, perception; (4) direct evidence of a medical cause (illness, drug, withdrawal), with the picture not better explained by pre-existing dementia alone (though the two often coexist).", topic: "Diagnosis" },
    { question: "Why is hypoactive delirium more dangerous than hyperactive, even though it looks 'well behaved'?", answer: "Roughly half of all cases are hypoactive (quiet, drowsy, withdrawn, off food) and they are read as 'tired' or 'depressed', so the diagnosis is missed and the underlying cause (hyponatraemia, silent urinary infection, sepsis) festers untreated. Hyperactive cases are noticed immediately, sometimes overtreated; hypoactive cases carry the worst prognosis precisely because nobody's alarm sounds. The thirty-second countermeasure: any new psychiatric label in a medical inpatient requires an attention test first (months or days backwards).", topic: "Clinical practice" },
    { question: "A 78-year-old with dementia becomes acutely confused. How do you decide this is delirium ON TOP of dementia, and what changes about your prognosis?", answer: "Anchor to the family-confirmed baseline: any departure measured in hours-to-days (with fluctuating attention and (typically) dusk-worsening) is delirium until proven otherwise, however advanced the dementia; a dementia alone never swings that fast. The full cause-hunt runs (drug chart, infection, sodium, glucose, bladder, bowel, imaging indications). Prognosis changes three ways: recovery is slower than in non-demented patients; the episode often unmasks or accelerates the underlying dementia (a step-down in baseline); and future episodes become more likely with any insult: every future surgeon must be told, and prevention protocols started.", topic: "Clinical practice" },
    { question: "Name five drugs that can precipitate delirium in an elderly Indian outpatient before you blame 'age'.", answer: "Any five of: opioids (post-operative and chronic-pain ladders); benzodiazepines (the night-sedation habit, and their WITHDRAWAL); anticholinergics: bladder drugs, tricyclics like amitriptyline, some antiemetics and over-the-counter cold/cough remedies (the family-supplied syrup on the bedside); steroids; antiparkinsonian drugs; and abrupt withdrawal of long-term sedatives or alcohol. The drug chart review (including over-the-counter and home-supplied medicines) is the highest-yield five minutes of the work-up.", topic: "Pharmacology" },
    { question: "What is the one clinical setting where a benzodiazepine is the CORRECT treatment for delirium?", answer: "Withdrawal states (alcohol withdrawal (delirium tremens) and benzodiazepine withdrawal) plus catatonia. In withdrawal, the mechanism is receptor-level (the sedative-dependent brain's rebound hyperarousal), so properly-dosed benzodiazepines (lorazepam 0.5–1 mg tier) treat the cause while thiamine is given BEFORE any glucose load in the malnourished or alcoholic patient. In every other delirium, benzodiazepines deepen the confusion: the night nurse's diazepam making the bus-stand case worse is the standing example.", topic: "Pharmacology" },
    { question: "In agitated delirium with suspected Lewy body disease, which antipsychotic do you avoid, and what do you reach for instead?", answer: "AVOID haloperidol (including intramuscularly). Lewy body disease carries severe, even life-threatening sensitivity to dopamine-blockers (rigidity, deterioration, catastrophic reactions). REACH FOR quetiapine 12.5–25 mg at night, the cautious route where parkinsonism or DLB is suspected, at the lowest dose for the shortest time, with the environmental bundle and the cause-hunt running in parallel. The DLB note's warning generalises: whenever the fluctuating-dementia patient lands in hospital, the default antipsychotic chart changes.", topic: "Management" },
    { question: "Write the delirium management ladder from memory, with the drug doses.", answer: "STEP 1: find and treat the cause (the only definitive treatment): drug-chart review stopping non-essentials (anticholinergic tier first), treat infection, correct sodium/glucose/oxygen/hydration, drain the bladder, clear the bowels, manage pain (paracetamol first, minimise opioids), thiamine before glucose in the malnourished/alcoholic. STEP 2: the environmental bundle (works for everyone): one familiar family member, spectacles-hearing aids-dentures on and earwax removed, reorientation with clock and calendar, daylight by day and dark quiet nights with clustered care, mobilise by day, AVOID catheters and restraints, treat the fear (calm voice, eye level, short sentences, never argue with the hallucination). STEP 3: drugs only when distress or danger demands: haloperidol 0.25–0.5 mg orally (repeat 30–60 min if needed, max ~2–3 mg/day elderly), or olanzapine 2.5 mg / risperidone 0.25–0.5 mg, or quetiapine 12.5–25 mg if Lewy body possible; benzodiazepines only withdrawal states (lorazepam 0.5–1 mg); last days of life: comfort over clarity.", topic: "Management" },
    { question: "Give the Indian public-health and family-education tier for delirium.", answer: "(1) The teaching sentence for every clinic and family: any abrupt change in thinking or behaviour is a MEDICAL event; same-day doctor, no self-started sedatives; (2) the MBBS doctor can make the diagnosis with a calendar, collateral history and months-backwards: no psychiatrist needed for diagnosis; (3) the 24-hour family attendant used deliberately (reorientation, familiar voice, day-night structure) is the prevention protocol Western guidelines pay volunteers to imitate; (4) the multicomponent prevention bundle started pre-operatively for high-risk surgery; (5) the discharge one-liner for relatives: 'any sudden confusion means a physical problem; take him to a doctor the same day'; (6) the labelling antidote: 'gone mad' reframed as 'the brain has caught a fever of thinking'.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Doctor, has he gone mad?", answer: "No. His brain is temporarily failing to work clearly because the body is ill. It is as physical as a fever: it affects about one in five hospital patients, and when the underlying illness is treated, the confusion usually improves. Madness is neither the cause nor the destination." },
    { question: "Why is he worse at night?", answer: "The brain's sleep-wake switch is part of what is failing, so dream imagery starts leaking into the evening hours. This is common and temporary (sundowning is its name) and it is why we protect his nights: dark, quiet, familiar company, and no routine disturbances unless essential." },
    { question: "He keeps seeing people who are not there. Is that schizophrenia?", answer: "Visual hallucinations in a medically ill older person are almost always delirium or a dementia. Schizophrenia begins young and is dominated by voices and fixed beliefs, not sudden visual misperceptions arriving with fever or infection. The eyes are not the problem; the illness is." },
    { question: "Will it come back?", answer: "An episode does make future episodes more likely with another illness or surgery. That is why we tell every surgeon who operates on him, and why the prevention bundle (your presence, his senses, his sleep, his medicines reviewed) starts before the next admission, not during it." },
    { question: "Should we tie him down so he does not pull the drip?", answer: "Restraints usually increase the struggle and the fear, and they worsen outcomes. A person sitting with him, plus treating the cause, works better. Restraint is a last resort under medical orders, loosened as early as possible, and a frightened, held-down patient confuses longer." },
    { question: "Can you give something so he sleeps at night?", answer: "A quiet, dark, warm night with a familiar face works better than sleeping tablets in delirium: sedatives can deepen the confusion. If a drug is truly needed it is chosen carefully, given at the lowest dose, and stopped as early as possible. Warm milk genuinely beats sedatives here." },
    { question: "He was fine in two days. Is he completely back to normal now?", answer: "Often much better but not fully himself for weeks: subtle problems with memory and concentration can persist. Older patients and those with dementia recover slowest. Keep the days structured, the senses working and the nights protected, and report any recurrence the same day." },
    { question: "Is delirium the same as dementia?", answer: "No. Dementia comes on slowly over years and is not caused by a treatable infection. Delirium comes on in hours to days and is usually reversible when its cause is found. They can coexist, and a delirium is often the first alarm bell that a dementia has begun, which is why we watch recovery closely afterwards." },
    { question: "What do we tell the relatives at home after discharge?", answer: "One line, repeated: 'Any sudden confusion means a physical problem; take him to a doctor the same day, and do not start sedatives on your own.' Bring his glasses and hearing aids everywhere, keep days bright and nights dark, and keep the medicine list (including home remedies) on paper." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased diagnostic logic (attention, acute onset-fluctuation, additional domain, medical cause)" },
      { source: "NICE Clinical Guideline CG103 — Delirium: prevention, diagnosis and management (2010, updated)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.1 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Siddiqi N et al. — Cochrane review of multicomponent delirium prevention (2016): rates cut by about a third" },
    ],
    reviews: [
      { source: "Inouye SK et al. — the Confusion Assessment Method (1990) and the conceptual papers on delirium as acute brain organ failure (2014, Nature Reviews Neurology)" },
      { source: "Bellelli G et al. — the 4AT rapid delirium screen for routine clinical use (2011; repeatedly validated since)" },
      { source: "Cerejeira J & Mukaetova-Ladinska EB — the acetylcholine-dopamine-inflammation aetiological framework (2012)" },
      { source: "Wilson K et al. and later syntheses — delirium at the end of life" },
      { source: "Indian context — hospital-based studies of delirium frequency and causes (medical college series, 2000s–2020s): common, missed, electrolyte- and infection-dominated" },
      { source: "WHO dementia and cognitive-decline reports (2020s) — acute confusion in the elderly as a neglected global priority" },
    ],
    patientResources: [
      { source: "The one-minute family script and the discharge one-liner — the two instruments this course hands to every family" },
      { source: "Tele-MANAS — India's national tele-mental-health helpline (14416), for family distress and routing during and after episodes" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: why the confusion means illness, the three things families must know, the bundle that works.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The three-way table, the two-hit model, the work-up minimum and the management ladder.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "38 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "46 min",
      description: "Everything: the liaison craft, the prevention economics, evidence grading, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The definition, the numbers, the two-hit model.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define delirium in one sentence and say why it is a medical emergency, not a psychiatric curiosity." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The cholinergic seesaw, the microglial brown-out, the sleep-wake collapse.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why anticholinergic drugs precipitate the syndrome and why a chest infection produces cortical hallucinations." },
    { number: 3, title: "Clinical Practice", description: "The three faces, the screens, the work-up minimum, the management ladder.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run months-backwards, order the work-up by priority and write the three-step management plan with doses." },
    { number: 4, title: "Indian Context", description: "The missed hypoactive majority, the family-attendant gift, the district-hospital reality.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the one-minute family script and use the attendant as the prevention protocol." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the delirium-dementia-depression table cold and recite I WATCH DEATH without prompting." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.1 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-28" },
    { id: "S2", source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased delirium diagnostic logic", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-28" },
    { id: "S3", source: "Inouye SK et al. — the Confusion Assessment Method (1990) and the acute-brain-organ-failure conceptual papers (2014, Nature Reviews Neurology)", sourceType: "primary", year: "1990 / 2014", dateReviewed: "2026-09-28" },
    { id: "S4", source: "Bellelli G et al. — the 4AT rapid delirium screen for routine clinical use (validated repeatedly since 2011)", sourceType: "primary", year: "2011 onward", dateReviewed: "2026-09-28" },
    { id: "S5", source: "NICE Clinical Guideline CG103 — Delirium: prevention, diagnosis and management", sourceType: "guideline", year: "2010, updated", dateReviewed: "2026-09-28" },
    { id: "S6", source: "Siddiqi N et al. — Cochrane review: multicomponent interventions for delirium prevention (rates reduced by about a third)", sourceType: "systematic-review", year: "2016", dateReviewed: "2026-09-28" },
    { id: "S7", source: "Cerejeira J & Mukaetova-Ladinska EB — the acetylcholine-dopamine-inflammation aetiological framework", sourceType: "review", year: "2012", dateReviewed: "2026-09-28" },
    { id: "S8", source: "Wilson K et al. and later syntheses — delirium at the end of life; terminal-agitation framing", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-28" },
    { id: "S9", source: "Hospital-based Indian studies of delirium frequency and causes (medical college series) — the missed-majority and electrolyte-infection cause profile", sourceType: "review", year: "2000s–2020s", dateReviewed: "2026-09-28" },
    { id: "S10", source: "WHO dementia and cognitive-decline reports — acute confusion in the elderly as a neglected global priority; DLB antipsychotic-sensitivity literature (cross-referenced to the Lewy body course)", sourceType: "who", year: "2020s", dateReviewed: "2026-09-28" },
  ],
  evidenceMap: [
    { text: "Delirium definition and signature: acute (hours-to-days) onset, fluctuating course worse at night, globally impaired attention; the features that separate it from dementia (months-years, steady, attention intact until late) and depression (weeks-months, clear consciousness).", grade: "established", sources: ["S1", "S2"] },
    { text: "Frequency: roughly 10–30% of general medical inpatients (quoted: one in five); ICU 30–75%; post-hip-fracture up to 50%; terminal illness up to 80%; 6–12-month mortality of hospitalised delirium approaches that of acute myocardial infarction.", grade: "established", sources: ["S1", "S3", "S5"] },
    { text: "The three behavioural faces: hyperactive (15–45%, noticed), hypoactive (roughly half, missed, worst prognosis), mixed (commonest); the hypoactive form hides inside 'tired', 'withdrawn' and 'depressed' labels.", grade: "established", sources: ["S1", "S3"] },
    { text: "The two-hit model: predisposing vulnerability (advanced age, pre-existing dementia, the strongest; prior stroke, Parkinson's, frailty, sensory impairment with poor vision and hearing each doubling risk) plus precipitating insult (drugs, infection, metabolic upset, hypoxia, surgery, local discomfort, the ward environment): the more vulnerable the brain, the smaller the insult needed.", grade: "established", sources: ["S3", "S5"] },
    { text: "The neurotransmitter seesaw: acetylcholine failure with relative dopamine excess as the final common pathway; anticholinergic burden (bladder drugs, tricyclics, some antiemetics and cold remedies) precipitates or worsens delirium; dopamine-blockers (haloperidol 0.25–0.5 mg oral, max ~2–3 mg/day elderly; quetiapine 12.5–25 mg where Lewy body is possible) calm the storm at lowest dose, shortest time.", grade: "supported", sources: ["S7", "S5"] },
    { text: "The neuroinflammatory tier: systemic inflammatory signals (infection, surgery, trauma) activate microglia through or at the blood-brain barrier, disturbing synapses and browning out attention, orientation and the dream-waking filter.", grade: "supported", sources: ["S7"] },
    { text: "Bedside screening: the CAM (~2 minutes, trained staff) and 4AT (no special training) are validated screens; the informal months-backwards test is an honest clinic-level discriminator, passing it in hospital at night argues strongly against delirium.", grade: "established", sources: ["S3", "S4"] },
    { text: "The work-up minimum: collateral history (baseline, exact onset, full drug list including over-the-counter, alcohol and benzodiazepine history), vitals with saturation, bladder and bowel examination, bloods (sodium first among equals), urine (treat the patient, not the dipstick, asymptomatic pyuria in the elderly misleads), ECG; CT/MRI for anticoagulation, head injury, focal signs, first seizure or cause not found; EEG in doubt (diffuse slowing; excludes non-convulsive status); LP when encephalitis or meningitis is on the table.", grade: "established", sources: ["S1", "S5"] },
    { text: "Management ladder: (1) treat the cause; the only definitive treatment; (2) the environmental bundle (familiar family member, senses restored, reorientation, sleep protection, daytime mobilisation, no catheters or restraints): effective and nearly cost-free; (3) drugs only when distress or danger demands, benzodiazepines reserved for withdrawal states (with thiamine before glucose) and catatonia.", grade: "established", sources: ["S5", "S6"] },
    { text: "Prevention: multicomponent nurse-led programmes (reorientation, sleep protection, early mobilisation, hydration, sensory aids, deliriogenic-drug removal) cut delirium rates by about a third in trials; the pre-operative clinic is the start point for high-risk surgery.", grade: "established", sources: ["S6"] },
    { text: "The Indian tier: hospital series find the majority of cases missed until severe; commonest reversible causes are hyponatraemia, silent urinary infection, sepsis, hepatic encephalopathy and retained urine; delirium tremens, cerebral malaria and TB meningitis are the exam-corner consultations; the 24-hour family attendant is a protective factor Western guidelines engineer with volunteers.", grade: "supported", sources: ["S9"] },
    { text: "Prognosis: most treated episodes clear over days to weeks with a not-quite-himself tail of weeks; the elderly and demented recover slowest; an episode predicts future episodes and often unmasks an underlying dementia: a prognostic event, not a one-off.", grade: "established", sources: ["S1", "S3"] },
  ],
};
