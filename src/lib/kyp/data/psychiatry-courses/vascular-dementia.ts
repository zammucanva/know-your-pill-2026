import type { PsychiatryCourse } from "./types";

/**
 * VASCULAR DEMENTIA — canonical Psychiatry course
 * (migration batch 7, Group A — neurocognitive disorders, part 2 of 2).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/vascular-dementia.md — untouched foundation),
 * re-researched against current guidance (the NINDS-AIREN lineage,
 * the post-stroke dementia cohort syntheses, the midlife blood-pressure
 * trials and the Lancet Commission life-course risk model) with
 * per-claim provenance.
 *
 * Drug routes: sertraline and escitalopram (the SSRI tier that treats
 * the depression and the pseudobulbar affect riders) have KYP lessons
 * and are linked; the donepezil/memantine cognition tier, the
 * antiplatelet/anticoagulant stack and the statin tier have no KYP
 * lessons and are recorded in contentGaps, never invented.
 */
export const vascularDementiaCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "vascular-dementia",
  title: "Vascular Dementia",
  shortName: "VaD",
  kind: "disorder",
  category: "Neurocognitive Disorder",
  groupLetter: "A",
  groupName: "Neurocognitive disorders",
  learningPath: ["Psychiatry", "Neurocognitive Disorders", "Vascular Dementia"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "34 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The staircase decline: thinking loss from damaged blood supply, largely preventable",

  summary:
    "Vascular dementia is thinking loss from damaged brain blood supply, declining in steps rather than smoothly, with slowness and planning trouble appearing before memory fails. Its vascular drivers are largely treatable, making it the dementia with the largest preventable fraction.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define vascular dementia and vascular cognitive impairment, and explain the stepwise-course concept.",
    "Describe the three mechanisms: large-vessel infarcts, strategic infarcts, and small-vessel disease.",
    "Contrast the cognitive profile (early executive slowing, patchy deficits) with Alzheimer's (early memory loss).",
    "Recognise the neurological extras: gait change, falls, urinary symptoms, pseudobulbar affect, parkinsonism.",
    "Build the risk-factor list and the prevention prescription: the treatment's real core.",
    "Apply the diagnostic logic: imaging plus a temporal link to a vascular event, and why the history matters as much as the scan.",
    "Manage it: risk-factor control, stroke prevention, cautious cognition medicines, walking and mood, family education.",
    "Explain mixed dementia and why it changes almost every management plan.",
  ],
  quickFacts: [
    { label: "The course shape", value: "Staircase, not ramp", detail: "Each infarct drops the person down a step abruptly, then a plateau (sometimes with partial recovery) until the next step; families who draw this staircase in clinic have handed you the diagnosis" },
    { label: "The share", value: "15–25% as the pure form", detail: "But mixed vascular-Alzheimer brains are the commonest pathologist finding. The true contribution is larger than the headcount; roughly a quarter to a third of stroke survivors develop dementia within a year" },
    { label: "The mechanisms", value: "Large vessel / strategic / small vessel", detail: "Three doors to the same endpoint: cortical strokes that add up, ONE well-placed infarct (thalamus, caudate, angular gyrus) that alone can cause dementia, and the deep arteriolar disease of lacunes plus white-matter change" },
    { label: "The profile", value: "Slowness and planning first", detail: "The frontal-subcortical circuits fail before memory does: patchy deficits, relatively preserved insight early, exactly the profile memory-weighted screens under-sell" },
    { label: "The extras", value: "Gait, falls, urgency, the crying", detail: "Small-stepped unsteady gait appearing with or before the thinking disorder, urinary urgency early, and pseudobulbar affect: sudden laughter or crying out of proportion to feelings ('he cries for nothing')" },
    { label: "The engine", value: "Hypertension, the biggest player", detail: "Rides with diabetes, smoking, atrial fibrillation, cholesterol, obesity and sleep apnoea: every one treatable, which is why this is the dementia you can fight back against" },
    { label: "The Indian signature", value: "'Stopped tablets when pressure felt normal'", detail: "The classic cause of the next step down the staircase; awareness and control rates under a third, spirit-predominant drinking without nutrition, and a stroke follow-up culture that never asks a memory question" },
    { label: "The one prescription", value: "Two organs saved", detail: "Blood pressure, sugar, statin, aspirin-or-anticoagulation, walking, salt reduction: the memory clinic prescription IS the heart clinic prescription; the same vessels threaten both, which is why survival is shorter than in Alzheimer's" },
  ],
  knowledgeGraph: [
    { label: "Alzheimer's Disease & Dementia", type: "condition", href: "/psychiatry/alzheimers-dementia/", note: "The smooth ramp against the staircase, and the mixed-brain reality that makes separation partly academic" },
    { label: "Delirium", type: "condition", href: "/psychiatry/delirium/", note: "Every overnight worsening is a new infarct, a seizure or a delirium trigger until proven otherwise. Investigate, don't blame the dementia" },
    { label: "Dementia with Lewy Bodies", type: "condition", href: "/psychiatry/lewy-body-dementia/", note: "The other great mimic of fluctuation: hallucinations and the antipsychotic catastrophe distinguish it" },
    { label: "Dementia in Parkinson's Disease", type: "condition", href: "/psychiatry/parkinsons-dementia/", note: "The subcortical-profile cousin: executive failure with cued recall preserved on both sides of that border" },
    { label: "Frontotemporal Dementia", type: "condition", href: "/psychiatry/frontotemporal-dementia/", note: "The other dementia memory screens under-sell: the frontal-executive differential when imaging is clean" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The weeks-onset, effort-dependent mimic: mood before gait change; treating it can 'give back' what looked like dementia" },
    { label: "Amnesic Syndromes", type: "condition", href: "/psychiatry/amnesic-syndromes/", note: "The strategic thalamic infarct that presents as pure amnesia: the stroke door into the filing circuit" },
    { label: "Traumatic Brain Injury Neuropsychiatry", type: "condition", href: "/psychiatry/tbi-neuropsychiatry/", note: "The chronic subdural that mimics both dementias in the falling, anticoagulated elderly: the CT that repays itself" },
    { label: "Acetylcholine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "Why the donepezil tier gives modest benefit here (a secondary chemistry, not the emptied tank it is in Alzheimer's)" },
    { label: "Frontal lobes", type: "brain-region", href: "#brain", note: "The manager offices whose wiring the small-vessel disease cuts first: speed and planning before memory" },
    { label: "Thalamus", type: "brain-region", href: "#brain", note: "The strategic memory relay, one well-placed infarct here can alone produce abrupt dementia" },
    { label: "White matter (the deep wiring)", type: "brain-region", href: "#brain", note: "The under-perfused insulation that swells and misfires: the confluent change of Binswanger's picture" },
    { label: "Sertraline", type: "drug", href: "/drugs/sertraline/", note: "The SSRI tier for the depression rider and the pseudobulbar-affect episodes" },
    { label: "Escitalopram", type: "drug", href: "/drugs/escitalopram/", note: "The alternative SSRI of the same carefully-chosen tier" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry vascular dementia. The pipes and the wiring: imagine the deep brain as a loft crossed by thin water pipes with the wiring clipped alongside. Hypertension pounds the pipes for decades; they thicken, stiffen and start to leak. Every time a pipe blocks, a patch of wiring dies (a lacune); every time the whole loft is under-supplied, the wiring's insulation swells and misfires (white-matter change). The loft connects the frontal manager offices to the rest of the house, so the first complaints are about speed and management, not memory storage. The three doors: large-vessel cortical strokes knock out whole cognitive functions and the dementia is what the strokes add up to; ONE well-placed strategic infarct (the thalamic memory relay, the caudate frontal circuit, the angular gyrus) can cause dementia alone in a hypertensive patient overnight; and small-vessel disease (lacunes plus diffuse white-matter change) produces the classic subcortical picture of slowing, apathy, executive failure, small-stepped gait, falls and urinary urgency. The shared soil: the same vessel disease quietly narrows coronary and renal arteries, which is why vascular dementia patients die more of heart attacks, heart failure and kidney disease than of the dementia itself, and why the memory clinic prescription (pressure, sugar, statin, walking, smoking cessation) is also the heart clinic prescription. One prescription, two organs saved.",
    steps: [
      "The pipes and the wiring: hypertension pounds the deep arterioles for decades; they thicken, stiffen and leak; each blockage kills a patch of wiring (a lacune), chronic under-perfusion swells the insulation (white-matter change).",
      "The loft geography: the damaged wiring connects the frontal manager offices to the rest of the house; speed and planning fail first, memory storage holds longer.",
      "The three doors: large-vessel cortical strokes that add up; the single strategic infarct (thalamus, caudate, angular gyrus) that alone can cause abrupt dementia; small-vessel disease producing the subcortical picture.",
      "The staircase: Alzheimer's is a ramp; vascular dementia is a staircase: each infarct a sudden drop, then a plateau, sometimes partial recovery, until the next step.",
      "The shared soil: the same disease narrows coronary and renal arteries; the memory clinic prescription IS the heart clinic prescription; one prescription, two organs saved.",
      "The prevention arithmetic: because the drivers (pressure, sugar, smoking, cholesterol, rhythm) are treatable, this is the dementia with the largest preventable fraction; the fight-back diagnosis.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "frontal-lobes", name: "Frontal lobes (the manager offices)", role: "The frontal-subcortical circuits whose wiring small-vessel disease cuts first: planning, speed and judgement fail while memory storage holds; the profile memory-weighted screens under-sell.", grade: "established" },
    { id: "thalamus", name: "Thalamus (the memory relay)", role: "The strategic site: a single well-placed infarct here can produce abrupt dementia on its own; the sudden-onset classic in a hypertensive patient.", grade: "established" },
    { id: "white-matter", name: "Deep white matter (the wiring loft)", role: "The confluent under-perfused change of small-vessel disease: the Binswanger picture's substrate; connects the frontal offices to the house.", grade: "established" },
    { id: "basal-ganglia", name: "Basal ganglia and deep grey nuclei", role: "The lacune cluster zone: caudate strategic infarcts hitting the frontal circuit; the engine room of the subcortical signature.", grade: "established" },
    { id: "cerebellar-connections", name: "Gait networks (the subcortical motor highways)", role: "The small-stepped, unsteady 'gait apraxia' that appears with or before the thinking disorder: the neurological extra that points vascular.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Acetylcholine", symbol: "ACh", role: "Not the emptied tank of Alzheimer's but a secondary casualty: the donepezil tier's modest, unlicensed-in-spirit benefit runs on this partial chemistry.", grade: "supported", drugConnection: "The anticholinergic bladder-urgency prescriptions that tempt this population drain the same secondary chemistry: timed toileting first." },
    { name: "Dopamine", symbol: "DA", role: "The lower-body parkinsonism and the gait networks' sluggishness, not the Parkinson's disease depletion, but the same highways interrupted by small-vessel lacunes.", grade: "supported" },
    { name: "Serotonin", symbol: "5-HT", role: "The depression and pseudobulbar-affect chemistry: the SSRI tier's target; the post-stroke depression literature's home ground.", grade: "established", drugConnection: "Sertraline and escitalopram: the SSRI pair for the depression rider and the pseudobulbar episodes." },
    { name: "Noradrenaline", symbol: "NE", role: "The apathy-fatigue contribution of the subcortical picture: the signalling that the interrupted circuits normally carried.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "small-vessel-pathway",
      name: "The pipes-and-wiring cascade",
      steps: [
        { label: "Hypertension pounds for decades", detail: "The deep arterioles thicken, stiffen and start to leak: the lipohyalinosis of the small-vessel world" },
        { label: "Each blockage kills a patch", detail: "A lacune: a tiny deep infarct in the wiring loft" },
        { label: "Chronic under-perfusion swells the insulation", detail: "Diffuse white-matter change: the misfiring wiring of the frontal-subcortical circuits" },
        { label: "The manager offices disconnect", detail: "Slowing, planning failure, gait change, urinary urgency: speed and management before memory storage" },
      ],
      clinicalManifestation: "The 66-year-old who cannot balance the household accounts after a 'giddiness week', walks in small steps and cries at odd moments: the subcortical vascular picture personified.",
      grade: "established",
    },
    {
      id: "strategic-infarct-pathway",
      name: "The single well-placed stroke",
      steps: [
        { label: "The embolus or branch occlusion", detail: "Often in a hypertensive or fibrillating heart's territory" },
        { label: "The strategic site falls", detail: "Thalamus (memory relay), caudate (frontal circuit), angular gyrus (language-number), medial frontal (initiation and encoding)" },
        { label: "Dementia appears overnight", detail: "Sudden-onset cognitive loss in a hypertensive patient: the strategic-infarct signature" },
        { label: "The lesson", detail: "One stroke, however small, well-placed is enough: 'how many strokes' is the wrong question, 'where' is the right one" },
      ],
      clinicalManifestation: "The overnight 'severely confused since yesterday evening' whose scan shows a fresh left thalamic infarct: the emergency that imaging alone untangles.",
      grade: "established",
    },
    {
      id: "shared-soil-pathway",
      name: "The shared soil (two organs, one disease)",
      steps: [
        { label: "The same vessels everywhere", detail: "What narrows the cerebral arterioles narrows the coronary and renal arteries in the same patient" },
        { label: "The competing mortality", detail: "Vascular dementia patients die more of heart attacks, heart failure and kidney disease than of the dementia itself" },
        { label: "The prescription's double life", detail: "Pressure, sugar, statin, walking, salt, tobacco cessation: the memory clinic's chart IS the cardiologist's chart" },
        { label: "The clinical translation", detail: "Survival after diagnosis shorter than Alzheimer's, not because the dementia is faster, but because the soil claims other organs first" },
      ],
      clinicalManifestation: "The staircase patient whose follow-up must weigh the cardiology calendar as heavily as the cognition score, one prescription, two organs saved.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "decades-of-pressure", time: "Decades before", title: "The pounding years", description: "Hypertension, diabetes, smoking, cholesterol and fibrillating atria quietly thicken the pipes: the modifiable engine running years before the first step.", phase: "onset" },
    { id: "first-steps", time: "The presenting years", title: "The first steps down", description: "A 'giddiness week' followed by lost account-balancing; a fall and subsequent fear of walking; the family's staircase beginning to draw itself.", phase: "onset" },
    { id: "plateau-era", time: "Between infarcts", title: "The plateaus", description: "Stable function between steps: sometimes with partial recovery; rehabilitation after each step recovers what the brain can route around; fluctuations between plateaus (better mornings, worse evenings) common.", phase: "peak" },
    { id: "neurological-tier", time: "The advancing years", title: "Gait, bladder, mood", description: "Small-stepped gait and falls, urinary urgency, pseudobulbar crying, depression and apathy: the extras that amplify the cognitive load and end independent living.", phase: "duration" },
    { id: "mixed-late-stage", time: "Final years", title: "The mixed brain and the body's bill", description: "Mixed vascular-Alzheimer pathology the rule in old brains; the heart and kidneys presenting their own bills; falls and fractures converting a walking dementia into a bed-bound one.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Vascular dementia accounts for roughly 15–25% of dementia as the 'pure' form, but mixed vascular-Alzheimer brains are the commonest pathologist finding, so the true contribution is larger than the headcount. The stroke connection: about a quarter to a third of stroke survivors develop dementia within a year, with risk remaining raised for years. East Asia and Eastern Europe report relatively higher proportions; men predominate slightly (unlike Alzheimer's); onset overlaps with stroke age (60s–70s); survival after diagnosis tends to be shorter than Alzheimer's because the same vessels threaten the heart and kidneys too.",
    indianPrevalence: "India runs one of the world's largest young-onset stroke and insulin-resistance burdens: rising hypertension (awareness and control rates under a third), among the world's largest diabetes populations, and heavy smoking combine to feed vascular brain injury. The 10/66 Indian sites and metro memory-clinic series suggest vascular and mixed cases form a leading subgroup of late-life cognitive impairment. Under-detection is enormous: the first 'mini-stroke' forgetfulness is dismissed as weakness of age, and the CT that follows the stroke is rarely accompanied by any cognitive assessment. The single biggest Indian opportunity is one memory question at every stroke follow-up.",
    lifetimeRisk: "A quarter to a third of stroke survivors develop dementia within a year of the stroke: the risk staying raised for years; hypertension the single biggest modifiable driver across the life course.",
    genderRatio: "Men predominate slightly, unlike Alzheimer's: the stroke-population mirror.",
    ageOfOnset: "Overlaps with stroke age, typically 60s–70s, with the Indian young-onset stroke burden pulling presentations younger than in Western series.",
    indianNotes: "Every stroke clinic should be doing a memory test at follow-up: the cheapest scalable screening India owns; the unasked question, not the unavailable scan, is the failure point.",
  },
  etiology: [
    { category: "biological", factor: "The mechanism trio", details: "Large-vessel cortical infarcts knocking out whole functions; the single strategic infarct (thalamus, caudate, angular gyrus, medial frontal) causing dementia alone; small-vessel disease (lacunes plus diffuse white-matter change (the Binswanger extreme)) producing the subcortical executive picture." },
    { category: "biological", factor: "The risk stack", details: "Hypertension (the biggest player), diabetes, smoking, atrial fibrillation, high cholesterol, obesity, sleep apnoea, excessive salt, physical inactivity; event-related: any stroke, any TIA, coronary bypass or major vascular surgery (post-operative cognitive decline)." },
    { category: "genetic", factor: "The rare inherited form", details: "CADASIL. NOTCH3 mutation, autosomal dominant: migraine with aura in the 30s, recurrent small strokes in the 40s–50s, then subcortical dementia; ask the family tree in any youngish patient with white-matter disease and migraines." },
    { category: "environmental", factor: "The Indian exposures", details: "Early-onset diabetes in the 40s, smokeless-tobacco and smoking use, untreated atrial fibrillation, very low blood-pressure-control rates, and the notorious pattern of stopping tablets once 'pressure felt normal': the classic cause of the next step down the staircase." },
    { category: "psychological", factor: "The depression-apathy amplifier", details: "Depression and apathy frequent and under-treated; post-stroke depression both mimicking and worsening cognition; insight relatively preserved early, which is exactly why frustration, embarrassment and depression are so common." },
    { category: "social", factor: "The household kitchen", details: "Blood-pressure tendencies and diabetes run in families and shared kitchens: the diagnosis of one elder becoming the prevention opportunity for a whole household (the 'we all eat from the same kitchen' conversation)." },
  ],
  symptomClusters: [
    {
      category: "1. Cognitive, the subcortical face",
      symptoms: ["Slowness of thought (bradyphrenia): answers arrive late, decisions take forever, mental gear-changes stiff", "Executive failure early: cannot plan a puja or family function managed for 30 years; stuck when routines change; poor money judgement", "Patchy, uneven deficits: some functions surprisingly intact, others clearly lost, unlike Alzheimer's even decline", "Recent-event memory remaining usable for years, though retrieval is slow", "Insight relatively preserved early: the engine of the depression, frustration and embarrassment that co-travel"],
    },
    {
      category: "2. Neurological extras (the clues to vascular)",
      symptoms: ["Gait: small steps, shuffling, unsteadiness; the walking disorder appearing WITH or BEFORE the thinking disorder; falls follow", "Urinary urgency, frequency, incontinence: earlier than in Alzheimer's", "Pseudobulbar affect: sudden uncontrolled laughter or crying out of proportion to feelings ('he cries for nothing') from subcortical disconnection", "Focal signs: mild weakness, clumsy hand, asymmetrical reflexes, dysarthria, lower-body parkinsonism", "Fluctuations between plateaus (better mornings, worse evenings); overnight worsening means a NEW infarct, a seizure or a delirium trigger. Investigate, don't blame the dementia"],
    },
    {
      category: "3. Mood and the human tier",
      symptoms: ["Depression frequent, biological and reactive at once, and under-treated: treating it can 'give back' what looked like dementia", "Apathy in a subgroup, misread as laziness", "Irritability and low frustration tolerance from the frontal-circuit burden", "Family distress amplified by the preserved insight: the person knows the steps are happening"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5 / ICD-11 logic (paraphrased)",
      code: "Major vascular neurocognitive disorder",
      criteria: [
        "The major-neurocognitive-disorder skeleton met: decline from baseline, objective deficits, loss of independence, not delirium.",
        "The vascular declaration: decline relating TEMPORALLY to a cerebrovascular event (stroke, haemorrhage) OR imaging evidence of significant vascular injury plus a stepwise/abrupt course consistent with it.",
        "ICD-11 similarly requires cerebrovascular disease judged the CAUSE, not a fellow-traveller. The link, not the co-presence, is the diagnosis.",
        "The NINDS-AIREN research tradition (named, not reproduced) formalised the same idea: dementia + cerebrovascular disease + a link between them.",
      ],
      duration: "Stepwise decline with plateaus: the timeline's shape itself is diagnostic evidence.",
      indianNote: "The history is the half-diagnosis: the staircase timeline, the known stroke or TIA, the transient monocular blindness, the stopped tablets. Dig for the steps before ordering a single scan.",
    },
    {
      system: "The practical work-up",
      code: "History, gait, weighted testing, imaging, vascular screen",
      criteria: [
        "Examination: blood pressure in both arms, cardiac rhythm (the unfelt fibrillating pulse), carotid bruits, focal neurology, and gait observation: the gait is often more eloquent than the memory test.",
        "Cognitive testing with executive weighting: MoCA-type preferred over memory-weighted screens; fluency, trail-making-type tasks: the deficit PATTERN (executive/processing-speed out of proportion to amnesia) is the diagnostic gold.",
        "Imaging (the one dementia where imaging is close to mandatory): CT acceptable for infarct demonstration; MRI shows lacunes, white-matter hyperintensities, microbleeds, strategic infarcts, but imaging must be LINKED to the clinical picture or you will label every scanned elder (white-matter change is common in normal ageing).",
        "Vascular workup: ECG (rhythm), echo where indicated, sugar/lipids/renal function, homocysteine in the young, carotid imaging in large-vessel cases.",
        "Rule-out bloods as in any dementia (thyroid, B12, one fact, one home, the Alzheimer's course's list).",
        "Young patient with white-matter disease and migraines: the family tree for CADASIL; genetic testing and skin biopsy exist, mostly tertiary-centre.",
      ],
      duration: "A clinic-day diagnosis built on the timeline; the review intervals (3–6 months) that map the staircase's steps.",
      indianNote: "Hachinski ischaemic score (named): the classic pointer toward vascular rather than degenerative cause; students should know what it TRIES to measure, not reproduce its items.",
    },
  ],
  severityScales: [
    {
      name: "The staircase ladder",
      fullName: "Step-and-plateau staging",
      measures: "Where the person stands on the staircase, and what the next intervention should be.",
      ranges: [
        { min: 0, max: 0, severity: "First step taken, plateaus stable", action: "The full vascular work-up and the prevention prescription begun; the family taught the staircase map (each step an event, each plateau a review, overnight change an emergency)" },
        { min: 1, max: 1, severity: "Steps recurring, gait and bladder joining", action: "Gait physiotherapy and home falls-audit; timed toileting for urgency (avoiding the anticholinergic bladder tier); depression and pseudobulbar affect treated; driving and finances reviewed while insight lasts" },
        { min: 2, max: 2, severity: "Established dependency, mixed pathology", action: "The five-floor dementia management programme; swallowing and falls surveillance; comfort-first planning, and the household's own prevention conversation (the shared kitchen's message)" },
      ],
      indianNote: "The step events in Indian follow-up cluster around the stopped-tablet weeks and the untreated fibrillating pulses: the two preventable engines to name in every consultation.",
    },
    {
      name: "The blood-pressure tightrope",
      fullName: "The frail-elderly perfusion balance",
      measures: "How hard to push the pressure down: the disease's central pharmacological paradox.",
      ranges: [
        { min: 0, max: 0, severity: "Stiff arteries, frail body", action: "Steady guideline control over years, NOT dramatic drops: sudden over-treatment in stiff arteries can worsen perfusion and even cognition; check lying-standing pressures and review for dizziness" },
        { min: 1, max: 1, severity: "Postural symptoms on treatment", action: "Loosen targets with the physician; the fall risk of over-treatment competes with the stroke risk of under-treatment: a clinical decision reviewed at each visit, never a family one" },
        { min: 2, max: 2, severity: "Advanced white-matter disease", action: "The gentlest control that holds; microbleeds on MRI temper the antithrombotic enthusiasm: the physician-led balance of bleeding against blocking" },
      ],
      indianNote: "'He stopped his BP tablet because the temple check-up read normal': the one-line response that belongs in every Indian clinic: 'The tablet keeps the pressure normal; stopping it removes the wall the water was leaning on.'",
    },
  ],
  differentialDiagnosis: [
    { condition: "Alzheimer's disease", distinguishingFeatures: "Stepwise vs smooth; slowness/planning first vs memory first; focal signs present; MRI infarct load, against the amnestic-first ramp of the gradual erasure.", keyDifferentiator: "The course's SHAPE and the profile's ORDER: staircase + executive-first, plus the imaging's lacunes." },
    { condition: "Normal-pressure hydrocephalus", distinguishingFeatures: "Gait worse than cognition proportionately, incontinence early, large ventricles without cortical shrinkage: the shuntable mimic.", keyDifferentiator: "Ventricle size on imaging against cortical atrophy; the gait-cognition proportion." },
    { condition: "Depression (the mimicking fog)", distinguishingFeatures: "Weeks-onset, effort-dependent testing, mood change before gait change: treating it can 'give back' what looked like dementia.", keyDifferentiator: "The onset tempo and the effort-pattern on testing; the SSRI trial's diagnostic-as-therapeutic double life." },
    { condition: "Progressive supranuclear palsy and the parkinsonian dementias", distinguishingFeatures: "Eye-movement palsy, axial rigidity, symmetrical parkinsonism: the vertical-gaze failure being the classic.", keyDifferentiator: "The eye movements and the symmetry; the imaging's infarct absence." },
    { condition: "Delirium (again)", distinguishingFeatures: "The step of a NEW stroke vs a fluctuating toxic-metabolic picture, both sudden, both emergencies, both image-worthy when in doubt.", keyDifferentiator: "The delirium cascade (urine, salts, bowels, chart) vs the focal deficit's signature; imaging settles the tie." },
    { condition: "Mixed dementia (the honest reality)", distinguishingFeatures: "Most real elderly brains carry both amyloid and vascular pathology: the clinical picture a blend, the risk factors feeding both fires.", keyDifferentiator: "The separation is partly academic: the treatment of BOTH is vascular-care-plus-the-appropriate-cognition-tier; name the mixture honestly and treat both engines." },
  ],
  management: [
    { category: "lifestyle", name: "Vascular risk control: the heart of the treatment", description: "Blood pressure treated to guideline targets but GENTLY in the frail elderly (sudden over-treatment in stiff arteries worsens perfusion and cognition); antiplatelet therapy after non-cardioembolic stroke per the physician; ANTICOAGULATION for atrial fibrillation after stroke, one of the most evidence-backed dementia-preventing moves there is (microbleeds on MRI tempering over-aggressive antithrombotics in advanced small-vessel disease); diabetes and lipids to guideline; statin after stroke as advised; walking 30 minutes most days (falls permitting), salt reduction, smoking cessation: the cheapest and best-tolerated 'memory medicines' in this disease; sleep apnoea asked about and treated.", whenToUse: "From diagnosis, forever: the disease-modifying treatment is a system of follow-up, not a tablet.", indianContext: "Amlodipine, metformin, a statin and aspirin together cost under a couple of hundred rupees a month in generics (approx 2026, varies); the actual challenge is compliance and follow-up, not cost, one family member should own the medicine box and the BP diary." },
    { category: "pharmacotherapy", name: "Cognition medicines: modest, worth trying, honestly framed", description: "Donepezil and memantine have trials in vascular cognitive impairment showing small benefits on cognition and global impression: frequently used off-label-in-spirit for this indication, same dosing as the Alzheimer's tier. Do not promise what they cannot deliver: the disease-modifying treatment here is the vascular control, and that is not a tablet; it is a system of follow-up.", whenToUse: "After the vascular programme is running: the modest ceiling stated to the family at the first prescription.", indianContext: "Generic donepezil/memantine sit in the ₹300–800/month band (approx 2026); the honest framing that saves the relationship: 'these hold a little function; the staircase's brakes are the blood-pressure, sugar and walking programme.'" },
    { category: "lifestyle", name: "The neurological extras: gait, bladder, affect, mood", description: "Gait and falls: physiotherapy, home rails, loose rugs removed, night lighting, footwear; a single fall with hip fracture converts a walking vascular dementia into a bed-bound one. Urinary urgency: timed toileting, prostatic issues treated in men, anticholinergic bladder drugs AVOIDED where possible (they blunt cognition). Pseudobulbar affect: explain it first ('the wiring, not the heart'). SSRI or low-dose options reduce episodes. Depression: treated actively (SSRIs, activation, problem-solving support); mood improvement alone can 'give back' what looked like dementia. Agitation/BPSD: the same trigger-first, drug-second ladder as the Alzheimer's course.", whenToUse: "From the first step: the extras amplify the cognitive load and end independence sooner than the memory does.", indianContext: "The home falls-audit and timed-toileting craft are the Indian family's tier: rails, night lighting, the floor mattress, the companion walks; inexpensive and decisive." },
    { category: "lifestyle", name: "Prevention: the family prescription", description: "For the patient's siblings and children, who share the risk: the same blood-pressure, sugar, salt, tobacco and exercise message; framed this way, the diagnosis of one elder becomes the prevention opportunity for a whole household. District-level stroke follow-up camps that add one memory question are the cheapest scalable screening India owns.", whenToUse: "At diagnosis: the shared-kitchen conversation converts the illness into the household's health plan.", indianContext: "The 'we all eat from the same kitchen' conversation (less salt, less fried, more walking for everyone): the family-level advice that fits Indian household structure naturally." },
  ],
  safety: {
    redFlags: [
      "A sudden new step down (more confusion, new weakness, slurred speech, one-sided change) or an overnight behavioural change: a fresh stroke until imaging says otherwise: an emergency, not an expected decline",
      "The stopped-tablet pattern discovered at follow-up: 'the pressure felt normal at the temple check-up': the next step down the staircase is already loading",
      "The first fall or a near-fall pattern: the hip fracture that converts a walking dementia into a bed-bound one is the competing emergency",
      "An unfelt fibrillating pulse found incidentally: each untreated week is embolic risk compounding the staircase",
      "Drowsiness with headache weeks after any fall in the elderly: the chronic subdural that mimics the staircase's steps",
    ],
    urgentGuidance:
      "The order of operations: (1) any SUDDEN change gets imaged; new infarct, seizure or delirium-trigger before any blame lands on the dementia; (2) the vascular programme audited the same week (tablets actually taken? pressure diary honest? rhythm checked?); (3) the falls-and-bladder tier engineered before the next step (rails, lighting, toileting timetable, physiotherapy); (4) mood treated as disease, not character; (5) the household's own prevention conversation held once, early: the shared kitchen's message. The sentence that organises the whole service: every stroke follow-up asks one memory question.",
  },
  drugLinks: [
    {
      name: "Sertraline",
      slug: "sertraline",
      role: "The SSRI tier for the depression rider and the pseudobulbar episodes",
      rationale: "Post-stroke depression is frequent, under-treated, and both mimics and worsens cognition, treating it can return function no cholinesterase inhibitor reaches. The same SSRI tier reduces pseudobulbar-affect episodes ('the wiring, not the heart' explained first). The KYP lesson carries the full profile behind the choice.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Symptom-targeted comorbidity care alongside the vascular programme that owns the disease modification: pressure, sugar, rhythm, smoking, walking.",
    },
    {
      name: "Escitalopram",
      slug: "escitalopram",
      role: "The alternative SSRI of the same tier",
      rationale: "The second member of the SSRI pair chosen on tolerability and comorbidity: the post-stroke depression and affect-episode tier with the least anticholinergic load, the same logic the Parkinson's and Lewy body courses teach.",
      evidenceLevel: "expert-review",
      clinicalDisclaimer: "Same tier and framing as sertraline: comorbidity care; the staircase's brakes remain the vascular programme.",
    },
  ],
  contentGaps: [
    "Donepezil and memantine (the modest cognition tier with vascular-cognitive-impairment trials) have no KYP drug lessons; the honest expectation-setting is taught here, the routes never invented.",
    "The antithrombotic stack (aspirin, clopidogrel, the DOAC/warfarin tier) and the statin tier have no KYP lessons; their stroke-prevention logic is taught here as physician-co-managed territory.",
    "The antihypertensive classes and the diabetes tier have no KYP lessons: the pressure-tightrope craft (gentle in the frail, steady over years) is taught in this course.",
    "The cognitive enhancer refusal note: no tablet family substitutes for the vascular programme; documented so no KYP route implies otherwise.",
  ],
  patientGuide: {
    whatIsIt:
      "This is thinking loss caused by damaged blood supply to the brain: strokes big and small. Unlike Alzheimer's, it usually comes in STEPS: a sudden drop after a small stroke, then a plateau, then another step. Planning and speed are affected first and most, while memory may hold for years; walking changes, falls, urinary urgency and sudden crying or laughing out of proportion to feelings often walk alongside. The most hopeful fact in this disease: its main drivers (blood pressure, sugar, cholesterol, rhythm problems, smoking) are all treatable, which makes this the dementia you can fight back against.",
    whatCausesIt:
      "The brain is the most blood-hungry organ we have. When the small deep vessels harden, narrow or burst (usually from years of high blood pressure, diabetes, smoking or cholesterol) patches of the brain's wiring die or misfire. Sometimes one well-placed stroke (in the thalamus, the brain's memory relay) can cause the picture alone. The same vessel disease also threatens the heart and the kidneys, which is why the treatment protects all three at once.",
    symptoms:
      "Thinking: slowed answers, difficulty planning (a function managed for 30 years becomes impossible), patchy abilities (some intact, some lost) with memory holding longer than in Alzheimer's. Body: small-stepped unsteady walking, falls, urinary urgency, sudden crying or laughing that does not match feelings. Mood: depression and low drive, common and treatable. Course: stepwise; sudden drops then plateaus; overnight worsening usually means a NEW stroke, an infection or a medicine problem, and is a signal to go to hospital, not to accept.",
    treatment:
      "The heart of the treatment is the vascular programme: blood pressure controlled steadily (never dropped suddenly in the frail), sugar and cholesterol managed, atrial fibrillation anticoagulated, walking most days, less salt, no smoking, and one family member owning the medicine box and the BP diary, because stopping tablets when 'pressure feels normal' is the classic cause of the next step. Cognition medicines (donepezil/memantine) give modest benefit in some people, honestly framed. Gait physiotherapy and home fall-proofing protect walking; timed toileting manages the bladder without the tablets that dull thinking; depression and the crying episodes respond to SSRIs.",
    selfHelp: [
      "The staircase map on the wall: each step an event to report, each plateau a stable season to enjoy; the family that knows the map does not mistake a plateau for recovery or a step for the end.",
      "The medicine box and BP diary owned by ONE named family member; never stopped because a reading came back normal: 'the tablet keeps it normal'.",
      "The falls-audit at home: rails, night lighting, loose rugs removed, footwear with grip, a companion for outdoor walks; each fall risks the hip fracture that ends walking.",
      "The bladder timetable: toileting on a schedule, evening fluids tapered; the bladder tablets that 'work' often dull the mind. Ask before adding.",
      "The overnight-change rule: sudden confusion or new weakness means hospital, that day.",
      "The shared-kitchen conversation: less salt, less fried, more walking, for everyone at the table, because the risk is shared and so is the protection.",
      "The crying-episodes script: 'the wiring, not the heart'; explainable, often reducible, not madness.",
    ],
    whenToSeekHelp: [
      "Any sudden step down: new weakness, slurred speech, one-sided change, overnight confusion: hospital that day",
      "A fall, or a pattern of near-falls: same-week review and home audit",
      "Crying or laughing episodes changing character, or mood clearly sinking: the SSRI conversation",
      "The pulse felt irregular at any home check: the fibrillation question, before the next stroke asks it",
      "The family caregiver's own exhaustion: her collapse is the patient's next step; her care is part of the treatment",
    ],
    indianResources: [
      "The stroke-clinic follow-up that adds one memory question. Ask for it; it is the screening India owns",
      "Jan Aushadhi generics for the blood-pressure, sugar and statin tier: the programme is affordable; the follow-up discipline is the prescription",
      "ARDSI (Alzheimer's and Related Disorders Society of India) chapters: caregiver training and day-care options in many cities",
      "Tele-MANAS 14416 (24×7, free): the caregiver's own support line",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "The Indian Stroke Association and neurology practice guidance for secondary stroke prevention apply directly; psychiatric and geriatric practice follows DSM/ICD logic plus IPS general guidance: no India-specific vascular-dementia pathway exists, so the craft is joining the two worlds: the stroke clinic's prevention tier and the memory clinic's care programme.",
    systemContext: "Stroke units and neurology OPDs own the event but miss the sequel (no cognitive check at follow-up); memory clinics live in metros; general medicine manages 'pressure and sugar' without connecting them to the mind; psychiatry enters late, for depression or BPSD. The single biggest Indian opportunity (every stroke clinic doing a memory test at follow-up) costs one question.",
    programmeContext: "PM-JAY (Ayushman Bharat) covers stroke treatment and hospital events; risk-factor medicines are cheap generics through Jan Aushadhi stores; the practical daily pathway is the local PHC plus district follow-up. District-level stroke camps that add one memory question are the cheapest scalable screening we have.",
    costConsiderations: "Amlodipine, metformin, a statin and aspirin together under a couple of hundred rupees a month in generics (approx 2026); donepezil/memantine in the ₹300–800 band; the real economic burden is supervision time, not tablets: the family member who owns the medicine box and the BP diary is the programme's most valuable employee.",
    culturalConsiderations: "The four clinical traps are cultural: (1) the 'weakness' clinics where cognitive symptoms never get asked; (2) the CT-lesion-obsessed practice where white-matter change is either ignored or over-diagnosed; (3) stopping antihypertensives when 'the pressure became normal': the temple check-up's fatal reading; (4) pseudobulbar crying attributed to depression alone. The family-level prevention message ('we all eat from the same kitchen') converts the diagnosis into the household's health plan: the Indian family structure as the delivery system for prevention.",
    patientCounselling: [
      "The one-line philosophy: 'This is the dementia with brakes; the blood pressure, sugar and walking programme slows the staircase; the tablet you stop today is the step you fall down next month.'",
      "The stopped-tablet script: 'The tablet keeps the pressure normal; stopping it removes the wall the water was leaning on.'",
      "The staircase script: 'The illness comes in steps with flat stretches between; sudden drops are events to report, not the expected slope; overnight change means hospital.'",
      "The crying script: 'The sudden tears are wiring, not heart; explainable, often reducible with the same tablet that treats depression, and not madness.'",
      "The shared-kitchen script: 'The risk that brought this illness sits in the kitchen and the family tree; less salt, less fried, more walking, everyone's numbers checked; his diagnosis is the household's prevention opportunity.'",
      "The driving-and-money conversation held EARLY, while insight lasts: the expiry-dated window the Mental Healthcare Act 2017 planning tools serve.",
    ],
  },
  decisionPath: {
    title: "The stroke patient whose mind is changing",
    nodes: [
      {
        id: "start",
        question: "A patient with vascular risk (or a known stroke) shows cognitive decline, gait change or behaviour change. First: the timeline's SHAPE.",
        branches: [
          { label: "Stepwise drops with plateaus", next: "vad-gate" },
          { label: "Sudden change over hours-days", next: "emergency-path" },
          { label: "Smooth decline over years", next: "mixed-alzheimers-path" },
          { label: "Weeks-onset with mood change first", next: "depression-path" },
        ],
      },
      {
        id: "emergency-path",
        question: "Sudden change: new infarct, seizure or delirium-trigger; the tie imaging settles.",
        recommendation: "Hospital and imaging now: focal deficit's signature vs the delirium cascade (urine, salts, bowels, chart); treat the cause, re-baseline, then reassess what remains. Overnight worsening is never 'just the dementia' until proven so.",
      },
      {
        id: "vad-gate",
        question: "The staircase: stepwise drops, plateaus between, neurological extras alongside.",
        branches: [
          { label: "Executive-first profile, gait/urgency/affect present", next: "vad-workup" },
          { label: "Gait far worse than cognition, incontinence early, large ventricles", next: "nph-path" },
          { label: "Young patient, migraines, white-matter disease", next: "cadasil-path" },
        ],
      },
      {
        id: "vad-workup",
        question: "The work-up: history, gait, weighted testing, the linked imaging.",
        recommendation: "Blood pressure both arms and the unfelt pulse (atrial fibrillation); gait observation (more eloquent than the memory test); MoCA-type executive-weighted testing; MRI linked to the clinical picture (not the lesion-list alone); ECG, sugar, lipids, renal; thyroid and B12 once; the Hachinski question remembered as concept, not recited as items.",
      },
      {
        id: "cadasil-path",
        question: "The young white-matter brain with migraines: the inherited door.",
        recommendation: "The family tree for early strokes and migraine with aura; NOTCH3 testing and skin biopsy are tertiary-centre confirmations. The clinical job is knowing to ask before labelling a 45-year-old's 'dementia' degenerative.",
      },
      {
        id: "nph-path",
        question: "The shuntable mimic: gait-first, incontinence early, ventricles large.",
        recommendation: "Neurosurgical referral for the shunt conversation: the one dementia-like picture with a surgical door; the imaging's ventricle-to-atrophy proportion distinguishes it from the small-vessel staircase.",
      },
      {
        id: "depression-path",
        question: "The mimicking fog: weeks-onset, effort-dependent, mood before gait.",
        recommendation: "Treat the depression actively (SSRI, activation, problem-solving) and re-test: the mood improvement that 'gives back' cognition is the diagnosis's confirmation; both can coexist, so re-assess after treatment, not instead of it.",
      },
      {
        id: "mixed-alzheimers-path",
        question: "The smooth ramp in a vascular brain: the mixed reality.",
        recommendation: "Name the mixture honestly: the treatment of BOTH is vascular-care-plus-the-appropriate-cognition-tier; the cholinesterase logic of the Alzheimer's course runs alongside the staircase's brakes; the risk factors feed both fires, so both engines get treated.",
      },
      {
        id: "management-gate",
        question: "Vascular dementia confirmed. The programme, in strict order:",
        branches: [
          { label: "The vascular programme (always first)", next: "risk-path" },
          { label: "Cognition declining despite the programme", next: "cognition-path" },
          { label: "Gait / falls / bladder / affect", next: "body-mind-path" },
          { label: "Family and household questions", next: "family-path" },
        ],
      },
      {
        id: "risk-path",
        question: "The heart of the treatment: the prevention prescription.",
        recommendation: "Blood pressure steady and gentle (never dramatic drops in the frail); anticoagulation for the fibrillating pulse (the best-evidenced dementia-preventing move); antiplatelet per the physician after non-cardioembolic stroke; sugar and lipids to guideline; walking, salt, smoking; sleep apnoea asked about; ONE family member owning the medicine box and the BP diary.",
      },
      {
        id: "cognition-path",
        question: "The modest tier, honestly framed.",
        recommendation: "Donepezil or memantine trialled with the expectation-setting script: small benefits on cognition and global impression in some people; the disease-modifying treatment is the vascular system, not a tablet; review at fixed intervals, taper when advanced disease removes speech, swallow and function.",
      },
      {
        id: "body-mind-path",
        question: "The extras that end independence.",
        recommendation: "Physiotherapy, home rails, rugs removed, night lighting, footwear; timed toileting (not the anticholinergic bladder tier); pseudobulbar affect explained then treated (SSRI/low-dose options); depression treated as disease; BPSD handled trigger-first, drug-second with the written review date.",
      },
      {
        id: "family-path",
        question: "The household's prevention and the caregiver's wall.",
        recommendation: "The shared-kitchen conversation (salt, fried food, walking, everyone's numbers checked); the five-floor dementia management programme for the patient; the caregiver asked about HERSELF at every visit, when she fails, the patient falls; disability certification and MHA 2017 planning while insight lasts.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing Alzheimer's because 'MRI shows atrophy too' while ignoring the lacunes",
      why: "Old brains carry both; the atrophy draws the eye while the lacunes and white-matter change carry the diagnosis. The staircase history and executive-first profile get lost in the scan's shadow.",
      correction: "The linked-diagnosis discipline: imaging PLUS the temporal link to vascular events PLUS the deficit pattern; the scan never makes the diagnosis alone.",
    },
    {
      mistake: "Diagnosing vascular dementia from white-matter spots alone",
      why: "The mirror error: white-matter change is common in normal ageing, labelling every scanned elder vascular is the over-call that starts wrong treatment and wrong prognostication.",
      correction: "The same link in reverse: no clinical staircase, no executive-first profile, no focal signs, then the spots are ageing's wallpaper, not a diagnosis.",
    },
    {
      mistake: "Missing the atrial fibrillation because nobody felt the pulse",
      why: "The unfelt irregular pulse is the quiet embolic engine: each untreated week compounds the staircase; the rhythm check costs nothing and changes everything.",
      correction: "Pulse-feeling taught at every elderly contact; ECG when irregular; anticoagulation after stroke is the best-evidenced dementia-preventing move this disease owns.",
    },
    {
      mistake: "Blaming the dementia for an overnight decline that was a new infarct or a sodium of 118",
      why: "Sudden change in this disease is a new event until proven otherwise: the delirium rules and the imaging question both skipped in the reflex to attribute.",
      correction: "The overnight rule: sudden confusion, new weakness, one-sided change; hospital and imaging that day; the delirium cascade (urine, salts, bowels, chart) alongside.",
    },
    {
      mistake: "Over-treating blood pressure in the frail elderly and worsening cognition",
      why: "Stiff arteries need pressure to perfuse; the dramatic drop prescribed with good intent starves the wiring and manufactures a step down the very staircase the treatment was meant to brake.",
      correction: "Steady guideline control over years, never dramatic drops; lying-standing pressures checked; postural symptoms loosen targets: the balance reviewed as a clinical decision each visit.",
    },
    {
      mistake: "Accepting 'he stopped his tablets: pressure felt normal' as harmless history",
      why: "The stopped-tablet pattern is the classic Indian cause of the next step; the normal reading is the TREATMENT WORKING, misread as the treatment finished.",
      correction: "The one-line script at every visit: 'The tablet keeps the pressure normal; stopping it removes the wall the water was leaning on', and one named family member owning the medicine box.",
    },
    {
      mistake: "Prescribing the anticholinergic bladder drug for the urgency",
      why: "The urgency is real and distressing, but the tablets that 'work' drain the secondary acetylcholine the cognition is leaning on: the pharmaceutical trade of bladder for brain.",
      correction: "Timed toileting first, prostatic issues treated in men, the anticholinergic tier avoided where possible: the same discipline the delirium and Parkinson's courses teach.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The mechanism trio (large-vessel, strategic-infarct, small-vessel) with one region named for the strategic door (thalamus, caudate, angular gyrus).",
        "The staircase against the ramp: stepwise course with plateaus versus Alzheimer's smooth decline; the profile's order (executive first, memory later).",
        "Why anticoagulation in atrial fibrillation is one of the strongest dementia-prevention tools: the rhythm question's downstream arithmetic.",
        "The Hachinski ischaemic score: what it tries to measure (vascular vs degenerative weighting), not its items.",
        "Mixed dementia: why the pathologist's commonest finding changes the management plan (both engines treated).",
      ],
      practical: [
        "Demonstrate the gait observation that outranks the memory test: small steps, unsteadiness, the walking disorder that appears with or before the thinking disorder.",
        "Take the staircase history: collateral timeline of steps, plateaus and events; the stopped-tablet question asked without judgement.",
      ],
      longAnswer: [
        "A 66-year-old hypertensive diabetic with two years of stepwise cognitive decline and gait deterioration: assessment and management (the evergreen VaD essay, the linked diagnosis, the prevention prescription, the extras).",
        "Vascular risk factors and dementia: the life-course model and the prevention opportunity (the Lancet Commission framing as discussion).",
      ],
    },
    neetPg: {
      highYield: [
        "THE PROFILE: early executive dysfunction and psychomotor slowing with relatively preserved memory; the subcortical-frontal signature against Alzheimer's amnestic-first.",
        "THE COURSE: stepwise decline with plateaus (multi-infarct/small-vessel signature) against the smooth ramp.",
        "STRATEGIC INFARCT SITES: thalamus (memory relay), caudate (frontal circuit), angular gyrus (language-number), one well-placed infarct alone can cause abrupt dementia.",
        "POST-STROKE DEMENTIA: roughly a quarter to a third of stroke survivors develop dementia within a year; risk remains raised for years.",
        "SHARE: 15–25% as pure vascular; mixed vascular-Alzheimer brains the commonest autopsy finding: the contribution larger than the headcount.",
        "NEUROLOGICAL EXTRAS: gait disorder with or before cognition, urinary urgency early, pseudobulbar affect, lower-body parkinsonism, focal signs.",
        "IMAGING: the one dementia where imaging is close to mandatory; lacunes, white-matter hyperintensities, microbleeds, strategic infarcts; BUT must be clinically linked (white-matter change is common in normal ageing).",
        "ANTICOAGULATION IN AF post-stroke: one of the best-evidenced dementia-preventing moves; microbleeds temper antithrombotic aggression in advanced small-vessel disease.",
        "CADASIL: NOTCH3, autosomal dominant; migraine with aura (30s), recurrent small strokes (40s-50s), subcortical dementia; ask the family tree in young white-matter disease.",
        "BLOOD PRESSURE PARADOX: midlife control protects late-life cognition; sudden over-treatment in the frail elderly worsens perfusion and cognition.",
        "DONEPEZIL/MEMANTINE in vascular cognitive impairment: small trial benefits, off-label-in-spirit; the disease-modifying treatment is the vascular programme.",
        "NPH AGAINST VaD: gait far worse than cognition, incontinence early, large ventricles without cortical shrinkage; the shuntable mimic.",
      ],
      pyqConcepts: [
        "Hachinski score as concept: the classic viva's 'what does it measure'.",
        "Binswanger's disease and the lacunar state: the historical names for the small-vessel picture.",
        "The one memory question at stroke follow-up: the programme-design answer for community screening questions.",
        "'The scan does not make the diagnosis; the link between the vessels and the mind does': the rehearsed line.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 66-year-old bank manager with 15 years of hypertension (tablets stopped whenever he 'felt fine') and diabetes, documented three drops over two years (balance of household accounts lost after a 'giddiness week', a bathroom fall with subsequent fear of walking, crying episodes at odd moments) with slowness and poor planning but relatively preserved recent memory: the staircase history IS the diagnosis; the management that begins with the medicine box owned by one son, the BP diary, physiotherapy and the SSRI, not with a cholinesterase inhibitor.",
        "A 72-year-old hypertensive with known mild forgetfulness brought in 'severely confused since yesterday evening', the gait acutely worse and the smile asymmetrical: the overnight rule; urgent imaging showing the fresh left thalamic strategic infarct, the newly detected atrial fibrillation anticoagulated, the partial recovery settling at a new lower baseline: sudden cognitive worsening in a vascular patient is imaged, never assumed.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Vascular dementia = stepwise decline + focal signs + executive-predominant deficits + infarcts on imaging.",
        "Thalamus = the classic strategic single-infarct dementia site.",
        "Anticoagulate atrial fibrillation after stroke: the dementia-prevention move.",
        "CADASIL = NOTCH3, migraine + early strokes + subcortical dementia.",
        "Small-vessel picture: gait change, urinary urgency, pseudobulbar affect.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The consultation's highest-value instrument is the staircase timeline taken from the family: three questions (what dropped, when, what preceded it) that no scan replaces.",
        "The stopped-tablet history is the Indian signature: ask it without judgement at every follow-up, because the shame around it is what hides the next step's cause.",
        "The gait is the examination's most eloquent single observation in this disease. Watch the patient walk before sitting them down for the memory test.",
        "The pseudobulbar-affect explanation ('the wiring, not the heart') converts a family's embarrassment into alliance faster than any prescription: said first, then treated.",
        "The household prevention conversation is the diagnosis's second life: the shared kitchen's salt, fried food and walking discussion turns one elder's illness into a family's health plan; the Indian family structure as the delivery system for the Lancet Commission's life-course message.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The staircase nobody drew",
      presentation: "Three drops over two years that nobody connected (the accounts lost, the fall, the crying) in a man whose tablets stopped whenever he 'felt fine'.",
      initialPresentation: "A 66-year-old bank manager with 15 years of hypertension (medicines stopped whenever he 'felt fine') and diabetes was brought by his son for 'memory problems'. The family, asked to draw the timeline, documented three drops over two years: first, suddenly unable to balance the household accounts after a 'giddiness week' eight months earlier; second, a bathroom fall with subsequent fear of walking alone; third, six months on, crying episodes at odd moments and losing the thread while reciting prayers. Between the drops, stable plateaus. Testing showed striking slowness and poor planning with relatively preserved memory for recent events.",
      history: "Hypertension 15 years with the on-off adherence pattern the son reluctantly confirmed ('he stops them when the temple check-up reads normal'); type 2 diabetes 12 years, loosely followed; former smoker; no known stroke documented, one episode of transient monocular blindness two years ago dismissed as 'weakness'; no mood syndrome preceding the first drop.",
      examination: "Blood pressure 168/96 both arms; pulse regular; small-stepped cautious gait, unsteady on turns; brisk left-sided reflexes with a clumsy left hand; timed fluency and trail-type tasks disproportionately failed against a preserved recent-memory performance; the crying episodes observed in consultation: sudden, brief, out of proportion to affect.",
      diagnosis: "Subcortical ischaemic vascular dementia (small-vessel disease with lacunar events) on the stopped-tablet staircase.",
      management: "Antihypertensives restarted with a BP diary and the son in charge of the tablet box; diabetes tightened; MRI: multiple lacunes and confluent white-matter changes, linked clinically to the staircase; physiotherapy for gait with home rails and night lighting; sertraline for the affect episodes and the undercurrent of depression; the staircase map explained to the family with the overnight-change rule.",
      outcome: "At one year: no further steps down, walking with a stick, the crying episodes halved on the SSRI, the accounts delegated to the son with the patient retaining the signing role and the household's prevention conversation held once; pressure, sugar, salt and walking for everyone at the table.",
      teachingPoints: [
        "The stepwise history IS the diagnosis: the family that draws the staircase has handed it to you.",
        "'Stopped my tablets' is the Indian signature cause of the next step; the normal reading is the treatment working, misread as the treatment finished.",
        "Control of the staircase matters more than any memory tablet. The vascular programme is the disease modification.",
        "Pseudobulbar affect responds to explanation first, SSRI second: 'the wiring, not the heart'.",
      ],
    },
    {
      title: "The overnight dementia that demanded a scan",
      presentation: "A 'severely confused since yesterday evening' whose asymmetrical smile and worsened gait forced the imaging that found the thalamic infarct and the fibrillating pulse.",
      initialPresentation: "A 72-year-old hypertensive woman with known mild forgetfulness was brought by her daughter with 'she has become severely confused since yesterday evening'. The speed of onset suggested delirium, but two details redirected: her gait had acutely worsened overnight (she had needed help to stand, new for her) and her smile was asymmetrical on examination; a focal signature alongside the confusion.",
      history: "Hypertension 20 years, adherent; mild cognitive complaint for two years, never formally assessed; no prior stroke; no fever, urinary symptoms or medicine change to explain a delirium; the daughter's diary of the preceding week unremarkable.",
      examination: "Drowsy but arousable, disoriented to date; right facial asymmetry; left-sided pronator drift; gait unsafe without support; the pulse irregularly irregular on palpation, confirmed on ECG as atrial fibrillation.",
      diagnosis: "Acute strategic infarct (left thalamic region) with new atrial fibrillation, on a background of mild vascular cognitive impairment.",
      management: "Urgent imaging: fresh left thalamic infarct; anticoagulation after the neurology assessment; blood pressure stabilised (gently, not dropped); the delirium-overlay managed with familiar faces, day-night orientation and the family coached through the re-baseline expectations; her cognition improved partially over weeks.",
      outcome: "A new baseline, lower than before, but stable on the anticoagulated, pressure-controlled programme: the family taught the staircase map and the overnight-change rule with the specific instruction that any recurrence is a same-day hospital event.",
      teachingPoints: [
        "Sudden cognitive worsening in a vascular patient = new stroke, seizure or delirium-trigger: image, don't assume.",
        "The thalamus is the classic strategic memory relay, one well-placed infarct is enough for 'dementia overnight'.",
        "AF found is AF treated. The anticoagulation is the dementia-prevention move this disease owns.",
        "Every step down deserves a cause hunt; the overnight rule protects the family from both panic and complacency.",
      ],
    },
  ],
  clinicalPearls: [
    "In vascular dementia, the scan does not make the diagnosis; the link between the vessels and the mind does.",
    "The staircase against the ramp: stepwise drops with plateaus versus Alzheimer's smooth slide; the single most examinable distinction.",
    "Slowness and planning fail first; memory holds for years: the profile memory-weighted screens under-sell.",
    "Roughly a quarter to a third of stroke survivors develop dementia within a year: the stroke clinic is this disease's screening station, and the memory question is free.",
    "Anticoagulation for atrial fibrillation after stroke: one of the best-evidenced dementia-preventing moves in medicine.",
    "One well-placed infarct is enough: thalamus (memory relay), caudate (frontal circuit), angular gyrus (language-number).",
    "The blood-pressure paradox: midlife control protects late-life cognition; sudden over-treatment in the frail elderly worsens perfusion and manufactures the next step.",
    "'Stopped tablets when pressure felt normal': the classic Indian cause of the next step down the staircase; the normal reading is the treatment working.",
    "The anticholinergic bladder trade: tablets that fix urgency by draining the secondary acetylcholine the cognition leans on; timed toileting first.",
    "Pseudobulbar affect: 'the wiring, not the heart'; explainable, often reducible, never madness.",
    "Mixed dementia is the pathologist's commonest finding. The treatment of BOTH is vascular-care-plus-the-appropriate-cognition-tier; name the mixture honestly.",
    "CADASIL: NOTCH3, migraine with aura in the 30s, small strokes in the 40s-50s, subcortical dementia; the family tree question in young white-matter disease.",
    "The same vessels threaten the heart and kidneys: the memory clinic prescription IS the heart clinic prescription; one prescription, two organs saved.",
  ],
  highYieldSummary: [
    "Definition: vascular dementia = major neurocognitive disorder arising from cerebrovascular disease; declared when the decline relates temporally to a vascular event OR significant imaging vascular injury plus a consistent stepwise/abrupt course; the LINK (not the co-presence) is the diagnosis (DSM-5/ICD-11 paraphrased; NINDS-AIREN tradition).",
    "Epidemiology: 15–25% of dementia as the pure form (second commonest worldwide); mixed vascular-Alzheimer brains the commonest autopsy finding; a quarter to a third of stroke survivors demented within a year; slight male preponderance; survival shorter than Alzheimer's (the shared soil claiming heart and kidneys).",
    "Mechanisms: the trio; large-vessel cortical infarcts (the dementia is what the strokes add up to); strategic single infarcts (thalamus, caudate, angular gyrus, medial frontal, abrupt dementia alone); small-vessel disease (lacunes + white-matter change, the subcortical executive picture, Binswanger the historical extreme); CADASIL (NOTCH3) the rare inherited door.",
    "Clinical: subcortical profile (bradyphrenia, executive failure, patchy deficits, memory relatively preserved, insight preserved early with its depression/frustration consequences); neurological extras (small-stepped gait with or before cognition, falls, urinary urgency early, pseudobulbar affect, focal signs, lower-body parkinsonism); course = steps and plateaus with between-plateau fluctuations; overnight change = new infarct/seizure/delirium until proven otherwise.",
    "Diagnosis: the staircase history (the half-diagnosis); BP both arms + the unfelt pulse; gait observation outranking the memory test; executive-weighted testing (MoCA-type); imaging near-mandatory but MUST be clinically linked (white-matter change common in ageing); vascular workup (ECG, echo where indicated, sugar/lipids/renal, homocysteine in the young, carotid in large-vessel); Hachinski as concept; differentials. Alzheimer's (ramp), NPH (gait-first, ventricles), depression (weeks-onset, effort-dependent), PSP (eyes, symmetry), delirium (the cascade).",
    "Management: (1) the vascular programme; pressure steady-gentle in the frail, anticoagulation for AF (the best-evidenced dementia-preventing move), antiplatelet after non-cardioembolic stroke, sugar/lipids/statins, walking, salt, smoking cessation, sleep apnoea treated; (2) cognition medicines modest and honestly framed (donepezil/memantine, off-label-in-spirit); (3) the extras: physiotherapy and home falls-audit, timed toileting (not anticholinergics), pseudobulbar affect explained then SSRI, depression treated actively; (4) BPSD trigger-first, drug-second with review dates; (5) the household prevention conversation (the shared kitchen).",
    "The Indian tier: young-onset stroke and insulin-resistance burden; awareness/control under a third; the stopped-tablet signature; CT-lesion-obsessed practice missing the link; no cognitive check at stroke follow-up (the one-question fix); PM-JAY for events, Jan Aushadhi for the daily programme (the full risk stack under a couple of hundred rupees a month); the family member owning the medicine box and BP diary as the programme's keystone.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "vad-quiz-1",
      question: "The cognitive profile that most suggests vascular rather than Alzheimer's dementia is:",
      options: ["Early profound episodic memory loss", "Early executive dysfunction and psychomotor slowing", "Fluent empty speech", "Loss of reading early"],
      correctIndex: 1,
      explanation: "Subcortical-frontal circuits fail first in small-vessel disease; memory is relatively spared early.",
      afterSectionId: "diagnosis",
    },
    {
      id: "vad-quiz-2",
      question: "A 70-year-old has had three abrupt drops in function over two years with plateaus between. The imaging most likely shows:",
      options: ["Hippocampal atrophy only", "Multiple infarcts / lacunes and white-matter change", "Normal study", "A frontal tumour"],
      correctIndex: 1,
      explanation: "Stepwise decline plus plateau is the multi-infarct / small-vessel signature.",
      afterSectionId: "diagnosis",
    },
    {
      id: "vad-quiz-3",
      question: "The single strategic lesion most classically able to cause sudden dementia is:",
      options: ["Left thalamic infarct", "Occipital pole infarct", "Cerebellar infarct", "Small internal capsule lacune"],
      correctIndex: 0,
      explanation: "The thalamus is the memory and relay gateway; strategic infarcts there (also caudate, angular gyrus) can produce abrupt dementia.",
      afterSectionId: "mechanism",
    },
    {
      id: "vad-quiz-4",
      question: "In a frail elderly patient with extensive white-matter disease, the blood pressure approach is:",
      options: ["Drive it as low as possible immediately", "Steady guideline control, avoiding abrupt over-treatment", "Stop all antihypertensives", "Treat only when symptomatic"],
      correctIndex: 1,
      explanation: "Long-term control protects the brain; acute over-treatment of stiff cerebrovascular systems can worsen perfusion and cognition.",
      afterSectionId: "management",
    },
    {
      id: "vad-quiz-5",
      question: "Atrial fibrillation found after a stroke matters most because:",
      options: ["It predicts epilepsy", "Anticoagulation prevents further infarcts, and further cognitive steps", "It requires a pacemaker always", "It explains the crying episodes"],
      correctIndex: 1,
      explanation: "Rhythm control of stroke recurrence is one of the best-evidenced dementia-prevention moves; pseudobulbar affect is unrelated.",
      afterSectionId: "management",
    },
    {
      id: "vad-quiz-6",
      question: "CADASIL is:",
      options: ["A mitochondrial disorder", "An autosomal dominant small-vessel disease (NOTCH3) with migraine and early strokes", "A complication of diabetes only", "A variant of Alzheimer's disease"],
      correctIndex: 1,
      explanation: "NOTCH3 mutations; migraine with aura, recurrent subcortical strokes in the 40s–50s, then subcortical dementia; ask the family tree in young white-matter-disease patients.",
      afterSectionId: "differential",
    },
  ],
  activeRecallQuestions: [
    { question: "Say the three mechanisms of vascular dementia and one example region for strategic infarct.", answer: "(1) Large-vessel disease: carotid and middle-cerebral territory infarcts knocking out whole functions; the dementia is what the strokes add up to. (2) Strategic-infarct dementia: ONE well-placed stroke causing dementia alone; classically the thalamus (the memory relay), the caudate (frontal circuit), the angular gyrus (language-number) or the medial frontal/anterior communicating territory (initiation and encoding). (3) Small-vessel disease: the deep arterioles stiffening into lacunes plus diffuse white-matter change; the subcortical picture of slowing, executive failure, small-stepped gait, falls, urinary urgency and pseudobulbar affect (Binswanger the historical extreme). Most real elderly brains are mixed: amyloid and vascular pathology together, both engines to treat.", topic: "Mechanism" },
    { question: "Contrast the vascular cognitive profile with Alzheimer's in three phrases.", answer: "Staircase against ramp (stepwise drops with plateaus versus the smooth slide); slowness-and-planning against storage-and-retrieval (executive/processing-speed failing first with patchy preserved functions, versus the amnestic-first erosion); the body speaking alongside (gait change, falls, urinary urgency, pseudobulbar affect and focal signs walking in with the cognition, none of which Alzheimer's brings until late). Add the imaging tiebreaker: lacunes and white-matter burden against hippocampal atrophy; linked to the clinical picture, never read alone.", topic: "Diagnosis" },
    { question: "Walk into a room: which two gait observations push you toward subcortical vascular disease?", answer: "First: the SMALL-STEPPED, shuffling, cautious gait (short strides, feet barely clearing, turning en bloc) appearing WITH or BEFORE the thinking disorder (in Alzheimer's, gait stays normal until late). Second: the WORSENING ON TURNS and under dual-task (walking while talking deteriorates disproportionately); the frontal-circuit signature that is also a falls risk. Both observations cost nothing, outrank the memory test in this disease, and both belong in the fall-prevention plan the same afternoon.", topic: "Clinical practice" },
    { question: "A patient's family proudly says he stopped his BP tablet because 'pressure was normal at the temple check-up.' Your one-line response?", answer: "'The tablet keeps the pressure normal; stopping it removes the wall the water was leaning on.' The normal reading is the treatment WORKING, misread as the treatment finished. The classic Indian cause of the next step down the staircase. The follow-through: restart with the physician's review, one named family member owning the medicine box and the BP diary, and the staircase map taught so the family understands what each future step means (an event to report, not a slope to accept).", topic: "Indian practice" },
    { question: "Why is anticoagulation in atrial fibrillation one of the strongest dementia-prevention tools?", answer: "Because the fibrillating heart throws emboli that become the staircase's steps. Each untreated week is compounded embolic risk, and the post-stroke dementia arithmetic (a quarter to a third demented within a year) is largely downstream of preventable recurrence. Anticoagulation after stroke in AF is therefore one of the best-evidenced moves in medicine for protecting cognition, not just the heart. The practical Indian layer: the unfelt irregular pulse is the quiet engine; teach pulse-feeling at every elderly contact, ECG the irregularity, and let the physician-led anticoagulation decision follow (microbleeds on MRI tempering the aggression in advanced small-vessel disease).", topic: "Management" },
    { question: "What is mixed dementia, and how does it change your treatment priorities?", answer: "Mixed dementia = the coexistence of Alzheimer-type and vascular pathology in one brain: the pathologist's commonest finding in elderly dementia, which means the clinic's clean dichotomy is partly fiction. The priorities change three ways: (1) BOTH engines get treated; the vascular programme (pressure, sugar, rhythm, smoking, walking) runs regardless of the label, because it protects the brain that the amyloid is also eroding; (2) the cognition-tier question opens: the cholinesterase logic of the Alzheimer's course applies alongside the staircase's brakes; (3) the prognostication gets honest: neither label alone predicts the course, so the trajectory is tracked, and the review intervals (not the first consultation) carry the management. Name the mixture to the family: 'two engines, both being braked.'", topic: "Diagnosis" },
    { question: "Name two things you would NOT do with blood pressure in a frail 84-year-old with extensive white-matter disease.", answer: "(1) NOT drive it down dramatically or fast: stiff cerebrovascular systems need their pressure to perfuse the under-supplied white matter; acute over-treatment can worsen perfusion and cognition, manufacturing the very step it meant to prevent; steady guideline control over years is the discipline. (2) NOT stop treatment altogether because of age or a few postural wobbles: long-term control is the strongest evidence-backed protection this brain owns; instead CHECK lying-standing pressures, loosen targets with the physician when postural symptoms are real, and review the balance as a clinical decision each visit, never a family one, and never an all-or-nothing one. (The antithrombotic sibling of this caution: microbleeds on MRI temper over-aggressive antithrombotics in advanced small-vessel disease.)", topic: "Management" },
  ],
  faqs: [
    { question: "The doctor said it is not Alzheimer's but vascular, is that better news?", answer: "In one way, yes: the causes (blood pressure, sugar, cholesterol, rhythm problems) are partly treatable, so the staircase can be slowed. But it is still a serious dementia; it still changes life; it still needs planning." },
    { question: "Can the damage already done be repaired?", answer: "Lost brain tissue does not regrow. But plateaus are real, rehabilitation can recover some function after each step, and mood, hearing or pain problems can masquerade as worsening, so treat what is treatable before concluding it is a step." },
    { question: "He cried at the wedding for no reason. Is he depressed?", answer: "Possibly, but if laughter and crying burst out of proportion to feelings, it may be pseudobulbar affect: a wiring problem from small-vessel disease. It is explainable, often reducible with medicines, and it is not 'madness'." },
    { question: "Should I stop his blood pressure medicines now that he has dementia?", answer: "No: the opposite, unless his doctor has a specific reason. Good blood pressure control protects what remains. Only frail-patient over-treatment (falls, dizziness on standing) calls for loosening, and that is a clinical decision, not a family one." },
    { question: "Will I get it too?", answer: "Blood-pressure tendencies and diabetes do run in families and shared kitchens, which is why we ask the whole household to cut salt, walk, and get their numbers checked. That is the good news: it is actionable." },
    { question: "He walks so slowly. Is exercise safe?", answer: "Yes, adapted: walking within the house, then short outdoor walks with a stick and a companion; physiotherapy exercises for balance. Bed rest makes both gait and thinking worse." },
    { question: "What watchful signs mean 'go to hospital'?", answer: "A new sudden step down (more confusion, new weakness, slurred speech, one-sided change) or an overnight behavioural change. These can mean a fresh stroke; they are emergencies." },
    { question: "Do the memory medicines used for Alzheimer's work here?", answer: "Slightly, in some people, for some functions. Worth a monitored trial. But the disease's real treatment is the risk-factor system, and that is lifelong, not a course." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased vascular neurocognitive-disorder logic" },
      { source: "NINDS-AIREN criteria (1993) — the classic research framework (named, described in own words)" },
      { source: "Indian Stroke Association / neurology practice guidance — secondary stroke prevention as the dementia-prevention tier" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.8 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Cholinesterase inhibitors and memantine in vascular cognitive impairment — the Cochrane/systematic-review tier (small cognition/global benefits, honestly framed)" },
      { source: "Stroke prevention trials in atrial fibrillation — anticoagulation's downstream cognitive benefit" },
      { source: "Blood pressure trials with dementia outcomes — midlife control protecting late-life cognition; over-treatment in the very frail cautioned" },
    ],
    reviews: [
      { source: "Hachinski VC — the ischaemic score (1975) and the vascular/multi-infarct dementia concept" },
      { source: "Post-stroke dementia incidence studies — the quarter-to-a-third-within-a-year arithmetic" },
      { source: "CADASIL / NOTCH3 literature (Joutel et al. and successors) — the inherited small-vessel door" },
      { source: "Lancet Commission on dementia prevention (2020/2024) — vascular factors in the life-course risk model" },
      { source: "10/66 Dementia Research Group — cross-site vascular contribution including Indian sites; Indian stroke epidemiology and control-rate studies" },
    ],
    patientResources: [
      { source: "The staircase map and the medicine-box discipline — the two instruments this course hands to every Indian vascular-dementia family" },
      { source: "ARDSI (Alzheimer's and Related Disorders Society of India) chapters and Tele-MANAS 14416 — caregiver support lines" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the staircase map, the medicine-box rule, the overnight-change signs, the falls craft.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The mechanism trio, the staircase against the ramp, the strategic sites, the prevention prescription.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "37 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "45 min",
      description: "Everything: the linked-diagnosis discipline, the blood-pressure tightrope, the household prevention craft, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The staircase concept, the share of dementia, the mechanisms' trio.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the three mechanisms and the staircase-against-ramp distinction cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The pipes and wiring, the strategic doors, the shared soil.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can trace the small-vessel cascade and explain why one thalamic infarct is enough." },
    { number: 3, title: "Clinical Practice", description: "The executive-first profile, the linked diagnosis, the prevention prescription.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the staircase history, the gait observation and the five-part management order." },
    { number: 4, title: "Indian Context", description: "The stopped tablets, the unfelt pulses, the shared kitchen.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the stopped-tablet script and the household prevention conversation." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the VaD essay cold and recite the strategic sites without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 4.1.8 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "DSM-5 / DSM-5-TR (APA) and ICD-11 (WHO) — the paraphrased vascular neurocognitive-disorder logic", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
    { id: "S3", source: "NINDS-AIREN criteria (1993) — the classic research framework for vascular dementia (named, described in own words)", sourceType: "guideline", year: "1993", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Hachinski VC — the ischaemic score and the multi-infarct dementia concept (what it measures, not its items)", sourceType: "primary", year: "1975", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Post-stroke dementia incidence cohort syntheses — the quarter-to-a-third-within-a-year statistic and the years-raised tail", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Cholinesterase inhibitors and memantine in vascular cognitive impairment — Cochrane/systematic reviews (small cognition and global benefits)", sourceType: "systematic-review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Stroke prevention trials in atrial fibrillation — anticoagulation's downstream cognitive protection; blood-pressure trials with dementia outcomes (midlife control protective; frail-elderly over-treatment cautioned)", sourceType: "trial", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "CADASIL / NOTCH3 literature (Joutel et al. and successors) — the autosomal-dominant small-vessel door", sourceType: "primary", year: "1990s onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Lancet Commission on dementia prevention (2020/2024) — vascular factors within the life-course risk model", sourceType: "review", year: "2020–2024", dateReviewed: "2026-09-29" },
    { id: "S10", source: "10/66 Dementia Research Group cross-site studies including Indian sites; Indian stroke epidemiology and hypertension awareness/treatment/control studies", sourceType: "review", year: "2000s–2020s", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Indian Stroke Association practice guidance and PM-JAY programme framing; Jan Aushadhi generic cost realities (approx 2026)", sourceType: "indian-guideline", year: "2020s", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The linked-diagnosis rule: vascular neurocognitive disorder is declared when the decline relates temporally to a cerebrovascular event OR significant imaging vascular injury coexists with a stepwise/abrupt course. The LINK, not the co-presence of scan findings, carries the diagnosis; white-matter change is common in normal ageing and must not be read alone.", grade: "established", sources: ["S2", "S3"] },
    { text: "The mechanism trio: large-vessel cortical infarcts; strategic single infarcts (thalamus the classic memory relay, caudate the frontal circuit, angular gyrus the language-number site) alone sufficient for abrupt dementia; and small-vessel disease (lacunes plus confluent white-matter change) producing the subcortical executive picture. Binswanger the historical extreme name.", grade: "established", sources: ["S1", "S3"] },
    { text: "Epidemiology: vascular dementia 15–25% of dementia as the pure form with mixed vascular-Alzheimer brains the commonest autopsy finding; roughly a quarter to a third of stroke survivors develop dementia within a year with risk remaining raised; slight male preponderance; survival shorter than Alzheimer's (the shared vascular soil claiming heart and kidneys).", grade: "established", sources: ["S5", "S9"] },
    { text: "The clinical profile: early executive dysfunction and psychomotor slowing with relatively preserved memory, patchy deficits, preserved insight early (with its depression and frustration consequences); neurological extras: small-stepped gait appearing with or before cognition, urinary urgency earlier than Alzheimer's, pseudobulbar affect from subcortical disconnection, focal signs.", grade: "established", sources: ["S1", "S5"] },
    { text: "Anticoagulation for atrial fibrillation after stroke is among the best-evidenced cognition-protecting moves in this disease; the unfelt irregular pulse is the quiet embolic engine, pulse-feeling at elderly contacts and ECG confirmation precede the physician-led anticoagulation decision; microbleeds on MRI temper antithrombotic aggression in advanced small-vessel disease.", grade: "established", sources: ["S7"] },
    { text: "The blood-pressure paradox: midlife hypertension control protects late-life cognition (the trial tier), while sudden over-treatment in the frail elderly with stiff arteries can worsen cerebral perfusion and cognition; steady guideline control over years, lying-standing checks, and clinically-reviewed (never familial) target decisions.", grade: "established", sources: ["S7", "S9"] },
    { text: "Cognition medicines: donepezil and memantine show small benefits on cognition and global impression in vascular cognitive impairment trials; off-label-in-spirit, honestly framed; the disease-modifying treatment is the vascular programme (a system of follow-up, not a tablet).", grade: "established", sources: ["S6"] },
    { text: "The anticholinergic trade-off: bladder-urgency anticholinergics blunt cognition in exactly the population leaning on secondary acetylcholine; timed toileting and prostatic treatment first; the discipline shared with the delirium and Parkinson's courses.", grade: "established", sources: ["S1"] },
    { text: "Pseudobulbar affect: sudden involuntary laughter/crying out of proportion to feelings from subcortical disconnection; explanation first ('the wiring, not the heart'), SSRI or low-dose options reducing episodes.", grade: "established", sources: ["S1"] },
    { text: "CADASIL: NOTCH3 mutation, autosomal dominant; migraine with aura in the 30s, recurrent subcortical strokes in the 40s–50s, then subcortical dementia; the family-tree question in young white-matter-disease presentations.", grade: "established", sources: ["S8"] },
    { text: "The Indian tier: young-onset stroke and insulin-resistance burden with hypertension awareness/control under a third; the stopped-tablet pattern as the classic next-step cause; no cognitive check at stroke follow-up (the one-question fix); the full generic risk stack under a couple of hundred rupees monthly (approx 2026) making compliance and follow-up (not cost) the barrier; PM-JAY covering events and Jan Aushadhi the daily programme.", grade: "supported", sources: ["S10", "S11"] },
    { text: "The household prevention framing: family-shared kitchens and genetics make the diagnosis of one elder the prevention opportunity for the whole household; the life-course message of the Lancet Commission delivered through the Indian family structure ('we all eat from the same kitchen').", grade: "supported", sources: ["S9", "S10"] },
  ],
};
