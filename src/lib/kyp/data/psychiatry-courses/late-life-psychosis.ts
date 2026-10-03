import type { PsychiatryCourse } from "./types";

/**
 * LATE-LIFE PSYCHOSIS — canonical Psychiatry course
 * (migration batch 10, Group M — psychiatry of old age).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/late-life-psychosis.md — untouched
 * foundation), re-researched against current guidance (the
 * Howard consensus, the Harris-Jeste dose-response evidence,
 * the Corbin-Eastwood and Thewlis sensory-deprivation lineage,
 * the FDA/EMA mortality warnings, the McKeith Lewy body
 * neuroleptic-sensitivity rule, the NMHS 2015–16 tier).
 *
 * Drug routes: NONE — the antipsychotic tier (risperidone,
 * olanzapine, aripiprazole, quetiapine at geriatric
 * fraction-doses, and the depot strategies) has no KYP drug
 * lessons; the dose law and cautions are taught here, the
 * absence recorded in contentGaps, never invented (the
 * Schizophrenia course's honest-gap precedent).
 */
export const lateLifePsychosisCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "late-life-psychosis",
  title: "Late-Life Psychosis",
  shortName: "Late-Life Psychosis",
  kind: "disorder",
  category: "Psychiatry of Old Age",
  groupLetter: "M",
  groupName: "Psychiatry of old age",
  learningPath: ["Psychiatry", "Psychiatry of Old Age", "Late-Life Psychosis"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "38 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The ridden-upon illness: deafness, dementia, depression or drugs may lie underneath",

  summary:
    "Psychosis with onset after 40 shows more persecutory delusions and fewer negative symptoms than early-onset illness, and often rides on treatable causes. Rule out delirium, dementia, depression and sensory loss before diagnosing, and prescribe antipsychotics at reduced doses.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define the onset cutoffs (late-onset >40, very-late-onset >60) and recite the phenomenological signature of each: persecutory, partition and misidentification delusions with hallucinations and FEWER negative symptoms.",
    "Recite the reorder-rule cold: delirium → dementia → depression → substances/medications → primary psychosis, and the one-line workup sequence it generates.",
    "Explain the sensory-deprivation engine (hearing loss → suspicion) and its treatment implication: the hearing aid as antipsychotic adjunct.",
    "Distinguish primary late-onset psychosis from dementia-related psychosis (BPSD) and from delusional disorder's years-locked pattern.",
    "Run the workup in order: delirium screen, cognitive testing, sensory testing, MRI, medication audit, mood assessment, and defend why audiometry sits so high.",
    "Prescribe antipsychotics in elders with the cautions: the dementia-related-psychosis mortality/stroke warnings, the Lewy body neuroleptic-sensitivity catastrophe, the anticholinergic load, falls and stroke risk.",
    "Manage the family: the accused daughter-in-law, the 'old age talk' dismissal, the gas-pipe inspection requests, the depot temptation.",
    "Handle Indian realities: the deaf-elder audit, the joint-family pathways, the three-layer theft-accusation analysis, when depot strategies actually help adherence.",
  ],
  quickFacts: [
    { label: "The cutoffs", value: ">40 late; >60 very-late", detail: "Late-onset schizophrenia after 40; very-late-onset schizophrenia-like psychosis after 60: the dimensional use of the same criteria with onset specifiers; roughly a quarter of all schizophrenia-spectrum cases begin after 40" },
    { label: "The signature", value: "Island-in-a-preserved-sea", detail: "Persecutory, partition and misidentification delusions with hallucinations, and an absent or faint negative-symptom layer: the elder converses coherently, stays groomed, keeps cooking and the pension accounts; the cost concentrates in the family's siege" },
    { label: "The ridden-upon law", value: "Deafness, dementia, depression, drugs, stroke", detail: "Late-life psychosis frequently RIDES on something treatable: untreated sensory loss, a brewing dementia, a depression, a medication, silent cerebrovascular disease; find the mount before naming the rider" },
    { label: "The reorder-rule", value: "D-D-D-S-P", detail: "Delirium, Dementia, Depression, Substances/medications. THEN the Primary label: age reorders the differential so completely that the primary diagnosis is the last stop, not the first" },
    { label: "The highest-yield test", value: "Audiometry", detail: "The unaided presbycusis finding is the most productive single investigation in late-life paranoia. The muffled-world engine, and the hearing aid becomes part of the treatment" },
    { label: "The dose law", value: "Quarter-to-half", detail: "Risperidone 0.25–0.5 mg, olanzapine 2.5 mg, aripiprazole 2.5–5 mg, quetiapine 12.5–25 mg at night: half-step titration at weekly-plus intervals; elders respond and suffer at fractions of young-adult doses" },
    { label: "The cautions in lethality order", value: "Mortality warning, then LBD catastrophe", detail: "(a) The regulatory increased mortality and stroke warnings in dementia-related psychosis; (b) the Lewy body neuroleptic-sensitivity catastrophe: no typicals, micro-dosed atypicals, quetiapine the usual compromise; (c) falls, sedation, orthostasis; (d) metabolic and prolactin layers" },
    { label: "The Indian signature", value: "The deaf elder and the daughter-in-law", detail: "Decades of unaided presbycusis mis-routed to psychiatry; the joint-family theft-accusation carrying three layers (the re-hidden purse, the last power-lever, occasionally the real abuse); 'budhape ki baat' delaying assessment by years" },
  ],
  knowledgeGraph: [
    { label: "Delirium in the Elderly", type: "condition", href: "/psychiatry/elderly-delirium/", note: "The first stop of the reorder-rule: the great mimic whose screen precedes every label" },
    { label: "Dementia with Lewy Bodies", type: "condition", href: "/psychiatry/lewy-body-dementia/", note: "The formed visual hallucinations, the dream-acting RBD flag and the neuroleptic-sensitivity law that forbids careless antipsychotics" },
    { label: "Mild Cognitive Impairment", type: "condition", href: "/psychiatry/mci/", note: "The cognitive-testing discipline, the literacy-adjusted instruments and the district-cost map this workup borrows" },
    { label: "Mood Disorders in the Elderly", type: "condition", href: "/psychiatry/elderly-mood/", note: "The depressive engine under many 'paranoid' elders: the guilt-content probe and the ECT-tier fork" },
    { label: "Persistent Delusional Disorder", type: "condition", href: "/psychiatry/delusional-disorder/", note: "The years-locked single-theme system: the neighbour-war decade that stays otherwise intact; the ECG rule for the pimozide-era exceptions" },
    { label: "Suicide in the Elderly", type: "condition", href: "/psychiatry/elderly-suicide/", note: "The depressive engine's darkest output: the risk hunted before the label settles" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "The secondary-mania workup's home, where a steroid or dopaminergic medication excites as well as frightens" },
    { label: "Vascular Dementia", type: "condition", href: "/psychiatry/vascular-dementia/", note: "The stroke layer: the silent basal-ganglia and white-matter burden of the very-late-onset imaging studies" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The aging system's recalibration: the fraction-dose law and the Lewy body hypersensitivity catastrophe in one molecule" },
    { label: "Temporal cortex", type: "brain-region", href: "#brain", note: "The auditory association tier where the muffled input and the voices live" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry late-life psychosis. The muffled-world engine: a brain that has spent seventy years cross-checking sound with context gets its input muffled (presbycusis) while its social world shrinks (widowhood, retirement, children abroad); conversations arrive as fragments, and the meaning-starved brain does what brains do: fills the gaps with narrative. In a low-trust, high-stakes social world (a joint family's inheritance tensions), the gap-filling defaults to suspicion: 'paranoia' that is substantially an ENGINEERING problem, the input broken rather than the mind. Fix the channel (hearing aids, better lighting for the cataract-blurred face-reading) and the system recalibrates, which is why the geriatric psychosis workup treats the EARS as seriously as the mind. The low-tolerance engine: the aging brain's dopamine machinery runs closer to its thresholds in both directions; less reserve against delirium's chaos, lower doses needed for both benefit and harm. The elderly patient who needs 1–2 mg of risperidone where a young adult needed 6 also develops drug-induced parkinsonism, sedation, falls and confusion at doses a 30-year-old would shrug off; at the extreme of this engine sits the Lewy body dopamine-hypersensitivity catastrophe, where micro-doses that are 'gentle' in principle fell the patient in practice. The borrowed-fire engine: much late-life psychosis is the dementia's smoke; misidentification syndromes from a failing recognition system (the phantom boarder, the mirror-sign, the stranger in the mirror being the misread self), theft-delusions from a memory system that cannot find the purse the patient herself re-hid, and Lewy body's formed visual hallucinations (children in the garden, visitors in the sitting room, often with retained insight and a curious calmness at the start). The clinical translation of all three: psychosis in an elder with ANY cognitive signal is the dementia's symptom until proven otherwise, and the treatment runs the BPSD trigger-first ladder, not the antipsychotic reflex.",
    steps: [
      "The muffled world: presbycusis plus a shrinking social world delivers fragmented input; the meaning-starved brain fills the gaps with narrative, and in a low-trust household the narrative defaults to suspicion.",
      "The engineering fix: the hearing aid and the cataract surgery repair the channel itself; measurable paranoia reductions in the audiology-anchored literature; the ears treated as seriously as the mind.",
      "The low-tolerance engine: the aging dopamine system recalibrates; a lower 'psychosis ceiling' that responds to FRACTIONS of young-adult doses and decompensates on small provocation.",
      "The two-direction law: the same recalibration means drug-induced parkinsonism, sedation, falls and confusion arrive at doses a 30-year-old would shrug off; benefit and harm both scaled down.",
      "The borrowed fire: the dementias open with psychosis; the misidentification syndromes of a failing recognition system, the theft-delusions of a memory system that cannot find what it re-hid, Lewy body's formed visual hallucinations with their curious early calm.",
      "The treatment fork: an elder with ANY cognitive signal gets the BPSD trigger-first ladder (the Dementia Management course's five floors). The antipsychotic is the reserved third step, never the reflex.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "temporal-auditory-cortex", name: "Temporal cortex (the auditory association tier)", role: "Where the muffled world is processed: the fragmented conversations, the voices 'from the fan', the gap-filling that defaults to suspicion when the input channel fails; the audiometry finding's cerebral address.", grade: "supported" },
    { id: "temporoparietal-recognition-hubs", name: "Temporoparietal recognition hubs", role: "The failing recognition system of the dementias: the impostor-householder, the phantom boarder, the stranger in the mirror being the misread self; the misidentification syndromes' seat.", grade: "supported" },
    { id: "basal-ganglia-white-matter", name: "Basal ganglia and deep white matter", role: "The silent cerebrovascular burden the imaging studies of very-late-onset cases find: the stroke layer's address; the vascular contributions are real and sit under the 'primary' label more often than the label admits.", grade: "supported" },
    { id: "frontal-lobes", name: "Frontal lobes (the spared-and-implicated paradox)", role: "Formal thought disorder and negative symptoms are largely SPARED in the late-onset form (the coherent, groomed, functionally preserved elder between delusional islands) while the frontal monitoring of reality is what the neurodegenerative engines erode first in the dementia-psychosis direction.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The aging system's recalibration: the lower psychosis ceiling that both saves (fraction doses work) and endangers (the same doses overshoot); at the extreme, the Lewy body dopamine-hypersensitivity catastrophe where even quetiapine 25 mg fells the patient.", grade: "established", drugConnection: "The antipsychotic tier that targets it (risperidone, olanzapine, aripiprazole, quetiapine) has no KYP drug lessons. The geriatric dose law is taught in this course." },
    { name: "Acetylcholine", symbol: "ACh", role: "The anticholinergic fog that doubles the 'confusion-with-ideas' presentations: the nightly bladder tablet and the sedative stacks; and the cholinergic deficit that powers Lewy body's formed visual hallucinations.", grade: "supported" },
    { name: "GABA", symbol: "GABA", role: "The benzodiazepine-decade layer: the twelve-year alprazolam prescription masquerading as (and amplifying) late-life suspicion and confusion; the taper that precedes or accompanies any antipsychotic decision.", grade: "supported" },
    { name: "Estrogen", symbol: "E2", role: "The neuromodulator of the female-dominance story: women's late-life estrogen decline proposed as one contributor to the very-late-onset form's striking female predominance; the window of vulnerability.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "muffled-world-pathway",
      name: "The muffled world (sensory deprivation to partition paranoia)",
      steps: [
        { label: "The channel fails", detail: "Decades of unaided presbycusis (and the cataract-blurred face-reading) deliver conversations as fragments" },
        { label: "The social world shrinks", detail: "Widowhood, retirement, children abroad: the cross-checking context that would correct the misread disappears" },
        { label: "The gap-filling defaults", detail: "The meaning-starved brain fills the gaps with narrative; in a low-trust, high-stakes household the narrative defaults to suspicion: 'they whisper about me' (they do, two rooms away, audibly and incomprehensibly)" },
        { label: "The partition theme crystallises", detail: "The home itself violated through the partitions: gas through the walls, intruders through the ceiling, the flat above as the conspirators' address" },
        { label: "The channel is fixed", detail: "Hearing aids fitted, cataract surgery, better lighting: the system recalibrates; the hearing aid as antipsychotic adjunct" },
      ],
      clinicalManifestation: "The paranoid widow who hears voices through the fan and whispers-about-her from the kitchen: a frequent audiology patient mis-routed to psychiatry.",
      grade: "supported",
    },
    {
      id: "low-tolerance-pathway",
      name: "The low-tolerance engine (recalibrated dopamine to the dose law)",
      steps: [
        { label: "The system recalibrates", detail: "The aging dopamine machinery runs closer to its thresholds in both directions: a lower psychosis ceiling" },
        { label: "Benefit at fractions", detail: "Risperidone 0.25–0.5 mg where a young adult needed 6: the geriatric dose law's foundation" },
        { label: "Harm at fractions", detail: "The same doses produce parkinsonism, sedation, falls and confusion that a 30-year-old would shrug off: the overshoot that reads as 'worsening' and invites the fatal escalation" },
        { label: "The extreme: the catastrophe", detail: "The Lewy body dopamine-hypersensitivity catastrophe: no typicals, atypicals micro-dosed with extreme caution, quetiapine the usual compromise; even quetiapine 25 mg can fell the patient" },
        { label: "The de-prescribing reflex", detail: "The psychotic elder who worsens on medication is a FALLS/confusion assessment, not a dose-escalation mandate" },
      ],
      clinicalManifestation: "The Cochin schoolmaster felled by the 'gentle' quetiapine 25 mg: two falls and profound sedation in three weeks.",
      grade: "established",
    },
    {
      id: "borrowed-fire-pathway",
      name: "The borrowed fire (neurodegeneration's opening to the BPSD fork)",
      steps: [
        { label: "The recognition system fails", detail: "Misidentification syndromes: the phantom boarder, the mirror-sign, the stranger in the mirror being the misread self" },
        { label: "The memory system misplaces", detail: "The re-hidden purse reported stolen: theft-delusions from a system that cannot find what it itself hid" },
        { label: "The hallucinations form", detail: "Lewy body's formed visual hallucinations: children in the garden, visitors in the sitting room, often with retained insight and a curious calmness at the start" },
        { label: "The fork is taken", detail: "Psychosis in an elder with ANY cognitive signal is the dementia's symptom until proven otherwise: the trigger-first ladder, carer education and environment structuring BEFORE the prescription" },
      ],
      clinicalManifestation: "The 'family of four' at dusk in the sitting room: the dementia announcing itself through the visual system.",
      grade: "established",
    },
  ],
  timeline: [
    { id: "unaided-decades", time: "The decades before", title: "The muffled world builds", description: "Presbycusis unaided for decades, the social world shrinking: widowhood, retirement, the children abroad; the low-trust household tensions accumulating; the meaning-starved gap-filling quietly defaulting to suspicion.", phase: "onset" },
    { id: "presenting-months", time: "The presenting months", title: "The sealed windows", description: "The delusions declare: gas pumped through the ceiling, the food tasting of medicine, the daughter-in-law 'searching my box'; the windows taped, the weight lost, the family under siege; function often still preserved (cooking, accounts, temple-going).", phase: "onset" },
    { id: "workup-week", time: "The first week", title: "The reorder-rule workup", description: "Delirium screen (days vs months, attention, day-night pattern), the informant's memory-first-versus-suspicion-first timeline, the MoCA, the medication audit, and the audiometry: severe bilateral presbycusis, never tested, the highest-yield finding of the assessment.", phase: "peak" },
    { id: "co-rider-months", time: "Months 1–3", title: "The co-riders treated", description: "Hearing aids fitted (the daughter-in-law accompanying the audiology visit, the first therapeutic act, relationship-wise), the anticholinergic substituted, the benzodiazepine tapered, the fraction-dose antipsychotic begun at 0.25 mg and titrated to 0.5 mg over three weeks.", phase: "duration" },
    { id: "maintenance-era", time: "Months 6–12 and after", title: "The low-dose remission", description: "The partition-delusion remits; residual mild referential suspicion; remission held at LOW maintenance doses after 6–12 months; the supervised slow-taper attempt after a stable year: the dated-review card in the family's hand throughout.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Roughly a quarter of all schizophrenia-spectrum cases have their onset after 40; the very-late-onset schizophrenia-like psychosis (>60) form is rarer and strikingly female-predominant, with strong associations to sensory impairment (deafness above all), social isolation and premorbid paranoid or schizoid personality traits. The risk architecture differs from early-onset: family history runs weaker; women's late-life estrogen decline is one proposed contributor to the female dominance of the very-late form. The course is notably SHALLOWER than early-onset (fewer negative symptoms, better preserved social functioning, fewer hospitalisation needs, response to lower medication doses) though mortality and functional decline still run above population baselines on the medical-comorbidity freight of the age.",
    indianPrevalence: "No dedicated Indian late-onset psychosis survey exists; the NMHS 2015–16 geriatric mental-morbidity tier showed high prevalence of late-life disorders overall, with the service reality that elderly psychiatric presentations route through general physicians and neurology before psychiatry. Two Indian amplifiers: the untreated-deafness epidemic (decades of unaided presbycusis (the single biggest modifiable paranoia engine in Indian elders) and the joint-family pathway's double edge) more observation AND more accusation surface, the daughter-in-law-theft accusation a household-level presentation with both illness and family-dynamics layers needing untangling.",
    genderRatio: "Strikingly female-predominant in the very-late-onset (>60) form: the sex shift that distinguishes the late-life presentations; the estrogen-decline window one proposed contributor.",
    ageOfOnset: "Late-onset after 40; very-late-onset after 60: the two cutoffs that define the groups.",
    indianNotes: "The geriatric-psychiatry service density is metro-concentrated; the realistic spine is the general-physician + family-pharmacist execution of the dose-and-review discipline, the district-lab/audiometry tier for the co-riders, and the Tele-MANAS/family-physician checkpoints for follow-through.",
  },
  etiology: [
    { category: "biological", factor: "The aging dopamine system's recalibration", details: "Receptor changes with age producing a lower 'psychosis ceiling'. The reason elders respond to FRACTIONS of young-adult doses and decompensate on small provocation; at the extreme, the Lewy body hypersensitivity that makes even 'gentle' doses dangerous. Estrogen's late-life decline contributes to the female dominance of the very-late form." },
    { category: "biological", factor: "Sensory deprivation: the modifiable layer", details: "Presbycusis and cataract, the best-documented association of late-life paranoia; the muffled input that the meaning-starved brain fills with suspicious narrative. Silent cerebrovascular disease rides alongside: the basal ganglia and white-matter burden the imaging studies of very-late-onset cases find. The vascular contributions are real." },
    { category: "biological", factor: "Neurodegeneration's opening chapters", details: "Alzheimer's theft-delusions, Lewy body's formed visual hallucinations, Parkinson's disease psychosis (the dopaminergic-medication engine): the borrowed-fire engine that turns 'psychosis' into the dementia's first declared symptom." },
    { category: "environmental", factor: "The iatrogenic and substance layer", details: "Dopaminergic agents (levodopa and the agonists (Parkinson's psychosis engine), steroids, anticholinergics (the fog doubles), the digoxin-toxicity-era classics) and the under-recognised: persistent benzodiazepine or alcohol misuse in elders masquerading as 'confusion-with-ideas'. Where the picture excites as well as frightens, this audit runs the secondary-mania workup (the Bipolar Disorders course's territory)." },
    { category: "social", factor: "Isolation, migration and the family-conflict kindling", details: "Social isolation, widowhood, migration and foreign-language settings (the 'foreigner-in-a-strange-land' paranoid states); premorbid paranoid or schizoid traits hardened by decades of low-trust living; the caregiving-stress and dependency-conflict layer: the unaided-deaf elder's accusations as the only remaining power-lever in a household where authority has migrated to the son and daughter-in-law: part illness, part family-system signal." },
  ],
  symptomClusters: [
    {
      category: "1. The late-onset primary psychosis signature",
      symptoms: [
        "Delusions: persecutory (poisoned food, gas through the walls, neighbours conspiring), partition (the classic: 'they come through the wall/ceiling; they are in the flat above/next door': one's home violated through the partitions), misidentification (the impostor-householder), referential and somatic themes (infestation, 'something done to me')",
        "Hallucinations: auditory (voices, running commentary, third-person, often related to the deafness channel), visual (persons, religious figures), olfactory (poison smells); hypnagogic visual phenomena in elders are common and benign",
        "The ABSENT or faint layer: formal thought disorder and negative symptoms; the elder converses coherently, is groomed, socially appropriate between delusional islands",
        "Function often preserved for years: cooking, accounts, temple-going; the illness's cost concentrated in the family's siege",
        "The island-in-a-preserved-sea quality that separates the presentation from early-onset schizophrenia",
      ],
    },
    {
      category: "2. The co-rider patterns (what to hunt before believing the label)",
      symptoms: [
        "Fluctuating consciousness, night-worsening, new inattention → delirium (the great mimic, screened first)",
        "Formed visual hallucinations, parkinsonism, dream-acting, capgras → Lewy body dementia (and its neuroleptic-sensitivity law)",
        "Gradual theft-delusions with memory decline → Alzheimer's: the re-hidden purse reported stolen",
        "A mood engine: the 'guilty-poisoned' content with weight loss and early waking → psychotic depression (the treatment fork: the ECT-tier evidence in elders)",
        "The medication timeline and the substance audit: the anticholinergic-benzodiazepine-dopaminergic layer, the steroid excitements",
        "The deafness signature: voices heard 'from the fan', conversation-suspicion in noise, television volume wars",
        "The stroke layer: silent basal-ganglia and white-matter burden under very-late-onset presentations",
      ],
    },
    {
      category: "3. Danger signs (the red-flag tier)",
      symptoms: [
        "Refusal of food or water on poisoning logic: the weight-loss clock running",
        "The accused-party confrontation: assault risk toward the daughter-in-law or the neighbour",
        "Wandering on partition-logic: 'I must escape through their flat'",
        "Suicide risk in the depressive engine: the guilt-content probe completed before the label settles",
      ],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The classification logic (DSM-5/ICD-11 paraphrased)",
      code: "Onset specifiers: the dimensional use",
      criteria: [
        "Late-onset schizophrenia (onset >40) and very-late-onset schizophrenia-like psychosis (>60) are dimensional uses of the same criteria as schizophrenia and delusional disorder with onset cutoffs: DSM-5 keeps schizophrenia's criteria with the specifier discipline; ICD-11 carries the late-onset architecture.",
        "Delusional disorder is heavily represented in the elderly: the years-locked single-theme system (the 'neighbour war' decade) with otherwise intact function; the full locked-pattern account and the pimozide-era ECG rule live in the Persistent Delusional Disorder course.",
        "The phenomenological signature carries the diagnostic weight: persecutory/partition/misidentification themes, hallucinations, faint negative symptoms, preserved function, the female predominance and sensory-impairment association of the very-late form.",
        "The criteria are the END of the assessment, not the beginning: the reorder-rule governs: delirium, dementia, depression, substances/medications excluded before the primary label is applied.",
      ],
      duration: "Months-scale symptom development for the late-onset psychoses; years-scale lock for the delusional-disorder pattern.",
      indianNote: "The 'late schizophrenia' label accepted before the delirium-dementia-depression reorder is the beginning of mistreatment: the viva's first sentence and the OPD's first discipline.",
    },
    {
      system: "The workup sequence (the reorder-rule in practice)",
      code: "Nine steps, in order",
      criteria: [
        "Delirium screen first: onset timeline (days vs months), attention testing, day-night pattern, recent illness/medication/surgery; the CAM-tier logic (named).",
        "Cognitive testing: MoCA or the literacy-adjusted instruments; the informant change-report: the family's 'what changed first' interview, memory-first versus suspicion-first telling the dementia story apart from the primary-psychosis story.",
        "Sensory testing: audiometry and vision; the unaided presbycusis finding is the highest-yield test in this population.",
        "Mood assessment: the geriatric depression screen (GDS-tier, named) with the psychotic-depression probe; guilt, nihilistic, somatic content.",
        "Medication and substance audit: the full list with anticholinergic-burden counting, the benzo-alcohol honest history, dopaminergic meds where Parkinson's; the secondary-mania consideration where the picture excites.",
        "Medical labs: TSH, B12, glucose, renal, electrolytes, and the infection screen where acute; the UTI-the-delirium classic.",
        "Imaging: MRI where affordable/indicated; the structural mimics (silent infarcts, mass lesions, NPH) and the vascular burden; the first-psychosis-at-any-age rule extends to elders with any cognitive or focal signal.",
        "The Parkinson/Lewy body examination: the soft signs, the dream-acting history (RBD), the levodopa timeline. BEFORE any antipsychotic decision (the LBD catastrophe prevention).",
        "Rating scales (named only): the neuropsychiatric-inventory tier for tracking BPSD-adjacent symptoms; the PANSS-tier for primary psychosis tracking in specialist hands.",
      ],
      duration: "The workup and the co-rider treatment run together: the hearing aids and the medication audit do not wait for the label.",
      indianNote: "The three-signs notebook (dated entries of what was believed, when it worsened, what followed) converts the joint family's anecdote-storm into assessment data; the district-lab/audiometry tier executes the sensory and lab steps.",
    },
  ],
  severityScales: [
    {
      name: "The D-D-D-S-P ladder",
      fullName: "The reorder-rule staging (Delirium–Dementia–Depression–Substances/medications–Primary)",
      measures: "Where the assessment stands in the reordered differential: the layers that must clear before the primary label.",
      ranges: [
        { min: 0, max: 0, severity: "D: the delirium screen", action: "Days-scale onset, fluctuation, inattention, night-worsening: hunt the source (UTI, drug, hypoxia) before anything else; the great mimic treated first" },
        { min: 1, max: 1, severity: "D: the dementia signal", action: "Memory and function decline tracking WITH the psychosis; the informant timeline; the BPSD trigger-first ladder, not the antipsychotic reflex" },
        { min: 2, max: 2, severity: "D: the mood engine", action: "The guilt/nihilistic probe with weight loss and early waking: psychotic depression on its own ladder, the ECT-tier fork held open" },
        { min: 3, max: 3, severity: "S: the substance/medication layer", action: "The anticholinergic–benzodiazepine–dopaminergic audit; the timeline lock to prescriptions clears it; the secondary-mania workup where the picture excites" },
        { min: 4, max: 4, severity: "P: the primary label", action: "Only now: the late-onset schizophrenia-spectrum or delusional-disorder label; the co-riders still treated alongside" },
      ],
      indianNote: "'The four before the label': first the flags, then the deafness, then the drugs, then the diagnosis; the mnemonic that orders the Indian OPD's ten minutes.",
    },
    {
      name: "The named-instrument tier",
      fullName: "CAM, MoCA, GDS, NPI, PANSS: names only",
      measures: "The screening and tracking instruments named in this workup; items are never reproduced here.",
      ranges: [],
      indianNote: "Literacy-adjusted MoCA variants for the Indian elder; the informant interview carrying what the score cannot; the audiometry sitting above them all in yield.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Delirium", distinguishingFeatures: "Days-scale onset, fluctuation, inattention, night-worsening: hunt the source (UTI, drug, hypoxia).", keyDifferentiator: "The tempo: days versus months; the attention test; the great mimic screened before every label." },
    { condition: "Dementia's BPSD (Alzheimer's theft-delusions)", distinguishingFeatures: "Memory and function decline track WITH the psychosis; the informant timeline runs memory-first; trigger-first management.", keyDifferentiator: "The memory-first versus suspicion-first question the family answers better than any scale." },
    { condition: "Lewy body dementia's hallucinations", distinguishingFeatures: "Formed visual hallucinations + parkinsonism + fluctuation + dream-acting (RBD); the neuroleptic-sensitivity law.", keyDifferentiator: "Small doses → catastrophe: the examination that must precede ANY antipsychotic decision." },
    { condition: "Psychotic depression", distinguishingFeatures: "Guilt/nihilistic content, weight loss, early waking, psychomotor change; the under-diagnosed one.", keyDifferentiator: "ECT-tier responsiveness; the guilt-content probe the label depends on; the suicide risk that rides with it." },
    { condition: "Delirium-from-medication (the iatrogenic layer)", distinguishingFeatures: "The timeline lock to prescriptions: the anticholinergic/benzodiazepine audit clears it.", keyDifferentiator: "The medication list as the diagnostic instrument; the steroid and dopaminergic excitements pointing to the secondary-mania workup." },
    { condition: "Dopaminergic-medication psychosis (Parkinson's)", distinguishingFeatures: "The levodopa-history lock; reduce-dose-first logic; quetiapine/pimavanserin-tier thinking.", keyDifferentiator: "The medication timeline predating the ideas; the negotiation with the neurologist before any new prescription." },
    { condition: "Sensory-deprivation paranoia", distinguishingFeatures: "The deafness signature: voices 'from the fan', conversation-suspicion in noise, television volume wars; partial insight often present.", keyDifferentiator: "The channel-fix response: the hearing aid as antipsychotic adjunct, the audiometry finding." },
    { condition: "Late-onset schizophrenia-spectrum (the primary label)", distinguishingFeatures: "Months-scale onset, island-in-a-preserved-sea, persecutory/partition content, coherent thought, intact grooming and function.", keyDifferentiator: "The diagnosis of exclusion the reorder-rule earns: reached only after every engine has been examined." },
    { condition: "Delusional disorder (late) and the family-conflict layer", distinguishingFeatures: "The years-locked single-theme system, otherwise intact: versus the accusation pattern with no hallucinations and no fixed system that escalates with household events.", keyDifferentiator: "The family-session tool for the conflict layer; the locked system for the disorder; the real-abuse screen never skipped in either." },
  ],
  management: [
    { category: "lifestyle", name: "The co-rider treatment (before or with any antipsychotic)", description: "Hearing aids and cataract surgery where the sensory engine is real: measurable paranoia reductions in the audiology-anchored literature; social-channel rebuilding (the day-structure, the senior-citizens' association, the temple-committee role, isolation's antidote as prescription); depression treated on the elderly-depression ladder with ECT for the psychotic melancholic tier; delirium's source treated; the dementia's BPSD managed trigger-first (carer education, trigger-hunting, environment structuring BEFORE the prescription); the medication audit executed: anticholinergic-load reduction, the benzodiazepine taper, the dopaminergic-dose negotiation where Parkinson's.", whenToUse: "Always, before or with any antipsychotic; the co-riders are half the treatment.", indianContext: "The district rehabilitation centre tier delivers the hearing aids and the audiometry (the MCI course's cost map); the highest-yield Indian geriatric-psychosis interventions cost almost nothing." },
    { category: "pharmacotherapy", name: "Antipsychotic pharmacotherapy — the fraction-dose law with the lethality-ordered cautions", description: "The dose law: start at a quarter-to-half of young-adult starting doses (risperidone 0.25–0.5 mg, olanzapine 2.5 mg, aripiprazole 2.5–5 mg, quetiapine 12.5–25 mg at night), titrate at half-steps at weekly-plus intervals, expect effect at fractions of the young-adult effective dose. The cautions in order of lethality: (a) the regulatory increased mortality and stroke warnings for antipsychotics in dementia-related psychosis; prescribe only for severe risk or distress, at the lowest dose, with documented periodic review-and-reduction attempts (the deprescribing discipline, not the prescription-and-forget culture); (b) the Lewy body sensitivity catastrophe. NO typicals, the atypicals at micro-doses with extreme caution, quetiapine the usual compromise; (c) falls, sedation, orthostasis; (d) the metabolic and prolactin layers even at low doses. Choice logic: risperidone (the best late-onset evidence base, careful above 1–2 mg), olanzapine (metabolic caution in the sedentary elder), aripiprazole (the lower-sedation option; akathisia watch), quetiapine (the LBD/Parkinson's compromise where sensitivity risk exists; orthostasis caution); avoid high-potency typicals and pimozide except in the specific delusional-disorder cardiology-checked cases.", whenToUse: "After the co-riders are being treated, for severe distress or danger, never as the first reflex.", indianContext: "Risperidone ₹30–150/month, olanzapine ₹50–250, quetiapine ₹100–400, aripiprazole ₹150–600 (approx 2026); the geriatric pharmacovigilance reality: the dose-discipline documented in fewer than half of Indian geriatric prescriptions; the dated-review card the counter-architecture." },
    { category: "psychotherapy", name: "The family work (the siege-management module)", description: "The accused-party counsel: no counter-accusation sieges (the daughter-in-law-versus-mother-in-law war is the illness's fuel); the 'assume the symptom' script: she believes it fully, arguing strengthens it, redirect rather than debate. Confrontation-protective planning for the neighbour-wars: the family's designated negotiator, the immediate-neighbour briefing where safe, the legal-risk audit when the accused is escalating. The carer-load assessment and support: the family's own burnout treating the elder's illness, the caregiver's depression screen. The reframe of 'possessed/evil-eye' family theories: the medical frame delivered without contempt, the local idiom respected, the mechanism translated.", whenToUse: "From the first contact: the family is both the history's source and the treatment's delivery channel.", indianContext: "The daughter-in-law's role explicitly re-framed and honoured in the treatment plan: the alliance that carries the medication schedule; the 'do not battle the symptom's props' rule (the taped windows ignored rather than fought)." },
    { category: "brain-stimulation", name: "ECT in this population (the honest position)", description: "For psychotic depression in the elderly, for the catatonic and the food-refusing wasting patient, and for the medication-intolerant severe case, ECT is often the SAFEST and fastest option: the modern-modality reality versus the family's film-era terror; the consent architecture and the cognitive-side-effect honesty: transient memory disturbance, monitored, recovering.", whenToUse: "The food-refusing wasting elder; the psychotic melancholia; the medication-intolerant severe case.", indianContext: "In the elderly that option is often the fastest life-saver: the film-era fear should not decide it; the consent conversation held with the family's elders together." },
    { category: "lifestyle", name: "The review architecture (the maintenance, the taper and the adherence engineering)", description: "Late-onset primary psychoses often hold remission at LOW maintenance doses after 6–12 months, and a supervised slow-taper attempt is reasonable after a stable year. Adherence engineering in the Indian joint family: the medicine-administration role (the daughter-in-law who already runs the diabetic-and-BP schedule absorbs the antipsychotic slot), the simplification principle (once-daily dosing), and depot strategies ONLY where the family cannot sustain daily administration and the illness's cost is severe. The geriatric depot doses are fractions of the young-adult ones, with the review discipline applied with double force.", whenToUse: "From the day of the first prescription: the review date written with it, the dated-review card in the family's hand.", indianContext: "The depot is a legitimate tool for adherence-failure in severe illness, NOT a convenience-chemical-restraint for family peace: the 'long injection to settle it permanently' request declined with the reasons given." },
  ],
  safety: {
    redFlags: [
      "Refusal of food or water on poisoning logic: the weight-loss clock running; treat-this-week severity, the ECT-tier conversation early where the content is depressive",
      "The accused-party confrontation: assault risk toward the daughter-in-law or the neighbour; the siege managed, not ignored",
      "Wandering on partition-logic: 'I must escape through their flat'; the exit hazard the delusion demands",
      "Suicide risk in the depressive engine: the guilt-content probe completed before the label settles",
      "Profound sedation or falls after any antipsychotic dose: the Lewy body dopamine-hypersensitivity catastrophe until proven otherwise: a FALLS/confusion assessment, not a dose-escalation mandate",
      "Days-scale onset or fluctuating consciousness with new inattention: delirium first: hunt the source (UTI, drug, hypoxia) before any psychiatric label",
    ],
    urgentGuidance:
      "The order of operations: (1) delirium excluded first; the days-versus-months timeline, the attention test, the day-night pattern, the CAM-tier logic; (2) the food-refusing elder treated THIS WEEK: sealed packaged food she opens herself, food she watches being cooked, one trusted feeder, and the doctor the same week; the ECT-tier conversation held early where the content is depressive; (3) profound sedation or falls on any antipsychotic read as the Lewy body alert: the falls audit and the micro-dose reduction, never the dose-escalation reflex; (4) the accused-party confrontation planned: the designated negotiator, the immediate-neighbour briefing where safe; (5) the regulatory mortality and stroke cautions honoured: every prescription carrying its written review date; (6) the family's own exhaustion treated as a clinical variable: the caregiver's collapse is the treatment's collapse.",
  },
  drugLinks: [],
  contentGaps: [
    "The antipsychotic tier (risperidone, olanzapine, aripiprazole, quetiapine at geriatric fraction-doses, and the depot strategies) has no KYP drug lessons; the dose law, the lethality-ordered cautions and the choice logic are taught in this course: the Schizophrenia course's honest-gap precedent, the route never invented.",
    "The dementia-psychosis pharmacology (rivastigmine's place in Lewy body, pimavanserin-tier thinking in Parkinson's disease psychosis) has no KYP drug lessons; it is referenced to the Dementia with Lewy Bodies and Dementia in Parkinson's courses rather than duplicated here.",
    "ECT (the often-safest fast option in elderly psychotic depression and the food-refusing wasting patient) has no KYP lesson; the fork, the consent architecture and the cognitive-honesty framing are taught within this course.",
    "The sensory tier that outranks most prescriptions here (the hearing aid, the cataract surgery, the audiometry route) has no KYP lesson; the district rehabilitation-centre pathway and the MCI course's cost map are referenced instead.",
  ],
  patientGuide: {
    whatIsIt:
      "When a person over 40 (and especially over 60) develops 'strange ideas', the ideas themselves follow a pattern: someone is poisoning the food, neighbours are pumping gas through the walls or coming through the ceiling, things are being stolen, occasionally people are seen who are not there. This is a psychosis, but the late-life version is a different animal from the young-adult illness: it runs a shallower course, it often responds to very small medicine doses, and (most importantly) it frequently RIDES on something we can treat: unrepaired hearing loss, a depression, a medicine side-effect, or the beginnings of a dementia. The doctor's first job is not to name the illness but to find what it is riding on.",
    whatCausesIt:
      "Several engines can produce it. Unaddressed deafness is the commonest: the brain fills the gaps of what it cannot hear with its own story, and the story is often a suspicious one; 'they whisper about me'. Loneliness, widowhood and moving to an unfamiliar place feed the same engine. A depression can carry 'guilty-poisoned' ideas. Certain medicines (Parkinson's drugs, steroids, bladder tablets, sleeping tablets taken for years) can produce ideas and confusion. A dementia's beginning can show itself this way, especially Lewy body's well-formed visions of people, and Alzheimer's fixed beliefs about theft. Small silent strokes contribute in some.",
    symptoms:
      "The ideas: poisoned food (with weight loss and eating only packaged food the person opens herself), gas or intruders coming through walls and ceilings (sometimes with windows sealed against them), theft accusations (often aimed at the daughter-in-law) and, occasionally, people seen at dusk who are not there, or the spouse declared 'replaced'. Hearing voices (often connected to poor hearing ('voices from the fan')) is common. What is strikingly ABSENT: the person usually talks sensibly, stays clean and groomed, and manages cooking and accounts between the fixed ideas. Danger signs needing quick attention: refusing food or water because of poisoning beliefs, threats toward the accused person, wandering off on the delusion's logic, or any talk of death and guilt.",
    treatment:
      "The treatment runs in a strict order. First the search for what it rides on: a hearing test (the single most useful test in this condition), a memory test, a mood check, a full medicine review, and blood tests; several of these are treatable this month. Second, the co-riders treated: hearing aids fitted, sedating or bladder medicines changed, depression treated, sleep and company rebuilt. Third (only for severe distress or danger, and at a fraction of the doses a younger person would take) a small antipsychotic dose, started low, reviewed on a written date, with periodic attempts to reduce. For the food-refusing or severely depressed elderly patient, ECT is often the safest and fastest option. The modern treatment is very different from the films. Throughout: the family coached not to argue with the ideas (arguing strengthens them) but to redirect, and the household's safety (the person, the accused party, the windows and the stove) planned together.",
    selfHelp: [
      "Get the hearing tested before anything else: the unaddressed deafness under many 'paranoid' elders is treatable, and the hearing aid itself quiets the suspicious gap-filling.",
      "Keep a dated notebook of what was believed, when it worsened and what followed. It turns the family's confusion into the doctor's best data.",
      "Do not argue with the ideas: she believes them fully; sympathise with the feeling ('your things feel unsafe; let's lock the box and keep the key with you'), redirect to routine activities, and bring the pattern to the doctor.",
      "One trusted feeder and food the person sees opened or opened herself: the poisoning-logic weight loss is the emergency end of this illness.",
      "Ask for the dated-review card: the medicine's review date written in the family's hand; the prescription-and-forget culture is the documented danger.",
      "Keep the day peopled: the temple-committee role, the senior-citizens' association, the fixed routine; isolation is this illness's oxygen.",
      "The caregiver's own health: the spouse or daughter carrying this illness needs her own check-ups and relief; the treatment's load-bearing wall.",
    ],
    whenToSeekHelp: [
      "Food or water refused on poisoning beliefs: the doctor the same week; the weight-loss clock matters",
      "Any threat toward the accused person (daughter-in-law, neighbour): the confrontation planned before it happens, not after",
      "Profound drowsiness, a fall, or new confusion after any new medicine: the dose is overshooting; report the same week (and mention Lewy body if visions and stiffness coexist)",
      "Days-scale onset of the ideas with night-worsening: a physical cause (infection, medicine) is likely and needs urgent review",
      "New well-formed visions of people, especially with stiffness, slowed walking or dream-acting: the Lewy body assessment before any medicine change",
      "Any talk of death, guilt or being a burden: the depressive engine's risk assessed immediately",
    ],
    indianResources: [
      "The district rehabilitation centre and the district audiometry tier: the hearing-aid channel this course treats as the highest-yield act",
      "Tele-MANAS (the national tele-mental-health line): the family's distress channel and the follow-through checkpoints",
      "The DMHP district psychiatric tier: the assessment and the review-dated prescriptions",
      "The three-signs notebook and the dated-review card: the two paper instruments this course hands to every family",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific late-onset psychosis pathway exists; practice follows the DSM-5/ICD-11 onset-specifier framing with the NMHS 2015–16 geriatric tier as the epidemiology spine and the geriatric antipsychotic dose-and-review discipline as the prescribing law.",
    systemContext: "Elderly psychiatric presentations route through general physicians and neurology before psychiatry: the geriatric-psychiatry service density is metro-concentrated; the realistic spine is the general-physician + family-pharmacist execution of the dose-and-review discipline, with the district-lab/audiometry tier for the co-riders and Tele-MANAS/family-physician checkpoints for follow-through.",
    programmeContext: "The district rehabilitation centre route delivers the hearing aids (the MCI course's cost map); the DMHP district psychiatric tier carries the assessment; Tele-MANAS provides the follow-through; the highest-yield Indian geriatric-psychosis interventions cost almost nothing: the hearing test, the medication audit and the dated-review card.",
    costConsiderations: "Risperidone ₹30–150/month, olanzapine ₹50–250, quetiapine ₹100–400, aripiprazole ₹150–600 (approx 2026); the geriatric pharmacovigilance reality: the dose-discipline documented in fewer than half of Indian geriatric prescriptions, the dated-review card the counter-architecture; the expensive items are the imaging and the specialist time, the scarcest is the follow-up structure the family must become.",
    culturalConsiderations: "The deaf-elder epidemic is the Indian amplifier: decades of unaided presbycusis, the 'paranoid' widow who hears voices through the fan a frequent audiology patient mis-routed to psychiatry. The daughter-in-law-theft accusation is a clinical pattern with three layers: the illness's misplacement engine (the re-hidden purse), the dependency-power dynamics (the accusation as the last power-lever), and occasionally the real abuse of the elder (the elder's claim is not always illness, the family-violence screen belongs in the assessment). The 'budhape ki baat' dismissal delays assessment by years ('Budhape ki baat hai', the counter-frame: the things she says are not age, they are symptoms, and some of them are treatable this month). The Ayurveda-tonic-and-faith-healer tier reads late-life delusions as possession-and-astrology; the engagement discipline translates the idiom, keeps the family engaged and routes the engine to medicine. The pension-and-property siege attaches persecutory content to inheritance anxieties: the legal-structuring conversation done EARLY, while capacity stands, reduces the property-stress that feeds the illness. The single-room observation problem: joint families bring the elder without the months of behaviour-history documentation the diagnosis needs; the three-signs notebook converts the anecdote-storm into data. The depot temptation ('a long injection to settle it permanently') declined as convenience-chemical-restraint: the depot is for adherence-failure in severe illness, at geriatric fraction-doses, with double-force review.",
    patientCounselling: [
      "The one-line philosophy: 'What she says is not old age. It is a symptom with a differential, and several of the causes are treatable this month; our first job is the hearing test and the medicine list, not the label.'",
      "The hearing-aid script: 'The suspicious ideas ride on what she cannot hear; the aid feeds the brain real context and shrinks the gap-filling; the first weeks amplify everything including misheard sound, so start part-time and let the fitting-and-follow-up adjust it.'",
      "The accused-party script: 'She believes it fully; arguing strengthens it and wages war on the household: sympathise with the feeling, redirect, and once, quietly, verify that no real theft or neglect is happening; elders who are actually mistreated also say so, and are also disbelieved.'",
      "The medicine script: 'The dose that works in the elderly is a fraction of the young-adult one, if she becomes shaky, drowsy or falls, it is a dose-adjustment signal or a Lewy body alert, never a reason to double.'",
      "The review script: 'The prescription carries its own review date; the dated-review card in your hand; the taper attempt after a stable year is part of the treatment, not a lapse in it.'",
      "The food-refusal script: 'Sealed packaged food she opens herself, food she watches being cooked, one trusted feeder, and the doctor this week; this is the emergency end of the illness, and where guilt-content rides on it, the ECT conversation early.'",
    ],
  },
  decisionPath: {
    title: "The grey-haired patient with 'strange ideas'",
    nodes: [
      {
        id: "start",
        question: "An elder presents with new 'strange ideas': persecutory, partition or misidentification content, with or without hallucinations. The first decision: the tempo and the company it keeps.",
        branches: [
          { label: "Days-scale onset, fluctuating, night-worse", next: "delirium-path" },
          { label: "Formed visions + stiffness or dream-acting", next: "lbd-path" },
          { label: "Memory and function declining with the ideas", next: "dementia-path" },
          { label: "Months-scale suspicion, function preserved", next: "workup-gate" },
        ],
      },
      {
        id: "delirium-path",
        question: "The great mimic first: the delirium screen.",
        recommendation: "CAM-tier logic: attention testing, day-night pattern, the recent illness/medication/surgery hunt (the UTI-the-delirium classic); treat the source before any psychiatric label: the first D of the reorder-rule, the Elderly Delirium course's full territory.",
      },
      {
        id: "lbd-path",
        question: "The Lewy body pattern: formed visual hallucinations, parkinsonism, fluctuation, dream-acting.",
        recommendation: "The LBD workup BEFORE any antipsychotic decision: the neuroleptic-sensitivity law. NO typicals, atypicals at micro-doses with extreme caution (quetiapine the usual compromise), carer-education-first (do not medicate every vision); the rivastigmine discussion with the neurologist; the Dementia with Lewy Bodies course's wallet-card discipline.",
      },
      {
        id: "dementia-path",
        question: "The cognitive signal tracks with the psychosis.",
        recommendation: "Psychosis in an elder with ANY cognitive signal is the dementia's symptom until proven otherwise: the informant memory-first timeline, the MoCA, the trigger-first BPSD ladder; carer education, trigger-hunting, environment structuring BEFORE the prescription (the Managing Dementia course's five floors).",
      },
      {
        id: "workup-gate",
        question: "The months-scale, suspicion-first, function-preserved presentation: the reorder-rule workup runs; delirium screen, cognitive testing, SENSORY testing, mood assessment, medication audit, labs, imaging, the Parkinson/Lewy body examination. What does it find?",
        branches: [
          { label: "Severe unaided presbycusis found", next: "sensory-path" },
          { label: "The medication layer (anticholinergic, benzo decade, dopaminergic)", next: "med-audit-path" },
          { label: "The mood engine (guilt content, weight loss, early waking)", next: "depression-path" },
          { label: "The workup clears, or the layers are treated and the ideas persist", next: "primary-gate" },
        ],
      },
      {
        id: "sensory-path",
        question: "The muffled-world engine found.",
        recommendation: "Audiometry executed and the hearing aids fitted: the hearing aid as antipsychotic adjunct with measurable paranoia reductions in the audiology-anchored literature; the cataract surgery and the lighting audit; the social-channel rebuilding (the temple-committee role, the senior-citizens' association); reassess the ideas after the channel is fixed: the medicine joins only where they persist.",
      },
      {
        id: "med-audit-path",
        question: "The iatrogenic layer found.",
        recommendation: "The anticholinergic substituted, the benzodiazepine converted to a gradual taper (the Benzo Misuse course's bridge logic), the dopaminergic dose negotiated with the neurologist where Parkinson's, the steroid timeline addressed, and where the picture excites as well as frightens, the secondary-mania workup (the Bipolar Disorders course) runs alongside; reassess before prescribing anything new.",
      },
      {
        id: "depression-path",
        question: "The mood engine found.",
        recommendation: "The geriatric depression screen and the guilt-content probe positive: psychotic depression on its own ladder; the elderly-depression tier with ECT held open for the melancholic, the food-refusing and the medication-intolerant tiers; the suicide risk assessed directly; the Mood Disorders in the Elderly course's full account.",
      },
      {
        id: "primary-gate",
        question: "The primary late-onset label now earned: late-onset schizophrenia-spectrum or very-late-onset schizophrenia-like psychosis. The severity decision:",
        branches: [
          { label: "Severe distress or danger (food refusal, assault risk)", next: "antipsychotic-path" },
          { label: "Mild; the co-riders treatable", next: "trial-without-path" },
          { label: "Wasting food-refusal with depressive content", next: "ect-path" },
        ],
      },
      {
        id: "antipsychotic-path",
        question: "The fraction-dose law with the lethality-ordered cautions.",
        recommendation: "Start at a quarter-to-half of young-adult doses (risperidone 0.25–0.5 mg at night, titrating to 0.5 mg over weeks; olanzapine 2.5 mg; aripiprazole 2.5–5 mg; quetiapine 12.5–25 mg at night), half-step titration at weekly-plus intervals; the written review date from day one; the cautions in order: the dementia-related mortality/stroke warnings (severe cases only), the LBD catastrophe (already excluded), falls and sedation, the metabolic and prolactin layers.",
      },
      {
        id: "trial-without-path",
        question: "The honest trial without the antipsychotic.",
        recommendation: "Worth an honest trial in mild cases: the co-riders are half the treatment, and some sensory-driven suspicion states quiet down with the channel fixed, the sedatives cleared and the days re-peopled, but tracked with the three-signs notebook and a review date; if the sealed windows and the food-logic persist past the trial, the medicine joins. 'Trying without' is a plan, not a hope.",
      },
      {
        id: "ect-path",
        question: "The fastest life-saver in this population.",
        recommendation: "For psychotic depression with food refusal, the catatonic and the medication-intolerant severe case, ECT is often the SAFEST and fastest option: the consent architecture with the family's elders, the cognitive-honesty framing (transient memory disturbance, monitored, recovering); the film-era fear addressed, not deferred to.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Labeling late-life psychosis 'schizophrenia' without the delirium-dementia-depression reorder",
      why: "The primary label applied first is the beginning of mistreatment: the delirium treated as psychosis, the dementia's BPSD treated as a primary illness, the depression's guilt content missed entirely.",
      correction: "The reorder-rule recited before the diagnosis: delirium, dementia, depression, substances/medications. THEN the primary label; the criteria are the END of the assessment, not the beginning.",
    },
    {
      mistake: "Missing the deafness engine: treating the muffled channel with dopamine blockers",
      why: "The unaided presbycusis under many 'paranoid' elders is the modifiable engine; the antipsychotic prescribed for an input problem adds falls, confusion and mortality risk to a treatable engineering fault.",
      correction: "Audiometry in every late-life paranoia assessment: the unaided presbycusis finding is the highest-yield test in this population, and the hearing aid becomes part of the treatment.",
    },
    {
      mistake: "The quetiapine-25-mg 'gentle dose' overshooting in a Lewy body patient",
      why: "The neuroleptic-sensitivity catastrophe: even the 'gentle' atypical at geriatric doses fells the Lewy body patient; profound sedation, falls, the family losing faith in the treatment.",
      correction: "The Parkinson/Lewy body examination (the dream-acting history, the soft signs, the levodopa timeline) BEFORE any antipsychotic decision; in LBD, no typicals, micro-dosed atypicals (quetiapine 12.5 mg at night), carer-education-first.",
    },
    {
      mistake: "Prescription-and-forget geriatric antipsychotics: no review dates, no deprescribing attempts",
      why: "The regulatory increased mortality and stroke warnings in dementia-related psychosis demand documented periodic review-and-reduction; the prescription without the review architecture is the documented Indian pharmacovigilance failure (the dose-discipline recorded in fewer than half of geriatric prescriptions).",
      correction: "The dated-review card in the family's hand from day one; the supervised slow-taper attempt after a stable year; the psychotic elder who worsens on medication getting a FALLS/confusion assessment, not a dose escalation.",
    },
    {
      mistake: "The daughter-in-law accusation routed to the family court instead of the clinic (and the real-abuse screen skipped)",
      why: "The theft accusation carries three layers: the illness's misplacement engine, the dependency-power dynamics, and occasionally the real abuse of the elder; treating it as pure family dispute misses the illness, and treating it as pure illness disbelieves the genuinely mistreated elder.",
      correction: "The three-layer untangling: the re-hidden purse sought (and found), the household power map read, and the family-violence screen completed once, quietly, before every accusation is dismissed as paranoia.",
    },
    {
      mistake: "Psychotic depression missed under the 'paranoid elder' reading",
      why: "The 'guilty-poisoned' content with weight loss and early waking reads as paranoia; the depressive engine's suicide risk and its ECT-tier responsiveness are then both missed: the under-diagnosed one of this population.",
      correction: "The mood screen with the guilt-content probe in every late-life psychosis assessment; the ECT fork held open for the psychotic melancholic, the catatonic and the food-refusing wasting patient.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The classification skeleton: late-onset schizophrenia (onset >40) and very-late-onset schizophrenia-like psychosis (>60); the dimensional use of schizophrenia/delusional-disorder criteria with onset specifiers.",
        "The phenomenological signature: persecutory/partition/misidentification delusions, hallucinations, faint negative symptoms, preserved function; the female predominance and sensory-impairment association of the very-late form.",
        "The reorder-rule: delirium → dementia → depression → substances/medications → primary psychosis, with the one-line workup sequence it generates.",
        "The geriatric dose law with two example starting doses (risperidone 0.25–0.5 mg; quetiapine 12.5–25 mg at night) and the cautions in order of lethality.",
        "The Lewy body catastrophe rule (typicals forbidden; even atypicals micro-dosed) and its wallet-card logic.",
      ],
      practical: [
        "Demonstrate the workup on a 'strange ideas' elder: the delirium screen, the informant's memory-first-versus-suspicion-first timeline, the MoCA, and the advocacy for audiometry as the highest-yield test.",
        "Elicit the deafness signature: the voices 'from the fan', the conversation-suspicion in noise, the television volume wars, and demonstrate the accused-party counselling script to the family.",
      ],
      longAnswer: [
        "A 70-year-old woman with delusions of neighbours pumping gas: differential diagnosis and management (the reorder-rule full ladder with the Indian layer).",
        "Antipsychotic use in the elderly with dementia: the cautions and the prescribing discipline (the mortality/stroke warnings, the LBD law, the dose law, the review architecture).",
      ],
    },
    neetPg: {
      highYield: [
        "THE CUTOFFS: late-onset = >40; very-late-onset = >60; roughly a quarter of schizophrenia-spectrum cases begin after 40.",
        "THE VERY-LATE FORM: female-predominant, strongly associated with deafness, isolation and migrant status; the sensory-impairment association the exam keeps testing.",
        "THE COURSE: SHALLOWER than early-onset; fewer negative symptoms, better preserved function, response to fraction-doses.",
        "THE SIGNATURE: partition delusions (gas-through-wall, intruders-through-ceiling) = the classic late-life theme; the island-in-a-preserved-sea quality.",
        "THE FIRST STEP: the reorder-rule; delirium, dementia, depression, substances/medications, THEN primary psychosis; the primary label is the LAST stop.",
        "THE HIGHEST-YIELD TEST: audiometry; the unaided presbycusis engine; the hearing aid as antipsychotic adjunct.",
        "THE MORTALITY WARNING: antipsychotics in dementia-related psychosis carry increased mortality/stroke warnings; lowest dose, severe cases only, documented periodic review/deprescribing.",
        "THE LBD CATASTROPHE: neuroleptic sensitivity; typicals forbidden, even atypicals micro-dosed; the quetiapine-25-mg 'gentle dose' trap.",
        "THE DOSE LAW: quarter-to-half starting doses, half-step titration at weekly-plus intervals; elders respond and suffer at fractions.",
        "ECT in elderly psychotic depression and the wasting food-refusing patient: often the SAFEST fast option.",
        "THE INDIAN AUDITS: the hearing test in every late-life paranoia; the anticholinergic-benzo fog audit; the daughter-in-law-accusation three-layer analysis.",
      ],
      pyqConcepts: [
        "The onset cutoffs: the single most-tested fact of this topic (>40 versus >60).",
        "The regulatory position on antipsychotics in dementia-related psychosis: the discussion-question magnet.",
        "The audiometry yield in late-life paranoia: the investigation-choice question.",
        "Psychosis versus BPSD differentiation: the management-fork question.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 68-year-old Lucknow widow with 14 months of escalating accusations: gas pumped through the ceiling, the windows sealed with tape, 6 kg lost on the 'medicine-tasting' food shift to packaged biscuits, the daughter-in-law accused of searching her box; coherent, groomed, managing her own pension account, MoCA 26/30: the workup's decisive findings being severe bilateral presbycusis never tested ('she just says what to everyone'), a nightly anticholinergic bladder tablet and twelve years of alprazolam 0.5 mg; the co-riders treated first (the bilateral hearing aids with the daughter-in-law accompanying the audiology visit, the bladder tablet substituted, the alprazolam tapered) and only then risperidone 0.25 mg at night titrated to 0.5 mg over three weeks: the gas-claims falling from hourly to weekly, the window-tape removed by herself, remission of the partition-delusion at nine months: the ridden-upon illness treated in the correct order, the audiometry as the highest-yield test, and the daughter-in-law's alliance engineered explicitly.",
        "A 74-year-old retired schoolmaster with six weeks of 'seeing people at night' (the family of four in the sitting room at dusk, two children in the garden, the wife once accused of 'replacing the real one') and the GP's quetiapine 25 mg (started three weeks earlier for 'the visions') producing profound sedation and two falls; the assembled history revealing 18 months of unrecognised dream-acting (the RBD flag), a two-year softening of handwriting and gait, daytime fluctuating alertness, cogwheel rigidity bilaterally and MoCA 19/30: the diagnosis being dementia with Lewy bodies, the quetiapine reduced to 12.5 mg at night (the micro-dose discipline), the falls audit (bed rail, night-light, the bathroom route), the carer education from the LBD package (the benign-report channel, do not medicate every vision) and the rivastigmine discussion begun: the visions falling from nightly to weekly, no falls since the reduction, the misidentification cleared: the reorder-rule in action, the LBD workup preceding any primary label, and the lesson that even 'gentle' atypical doses overshoot in Lewy body.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Very-late-onset schizophrenia-like psychosis = onset after 60 (late-onset itself is after 40).",
        "The first step in an elder with new 'strange ideas': rule out delirium, dementia, depression and medication causes; the reorder-rule.",
        "The most productive single investigation in late-life paranoia: audiometry.",
        "Partition delusions (gas through the wall, intruders through the ceiling) = the classic late-life theme.",
        "Antipsychotics in dementia-related psychosis: increased mortality and stroke warnings; severe cases only, lowest dose, documented review.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The LBD examination (the dream-acting history, the soft signs, the levodopa timeline) precedes ANY antipsychotic decision in this population: the catastrophe prevented in the clinic costs nothing but the three questions.",
        "The accused-party counsel is treatment, not etiquette: the daughter-in-law-versus-mother-in-law war is the illness's fuel, and the accused party re-framed and honoured in the treatment plan becomes the medication schedule's carrier.",
        "The depot request ('a long injection to settle it permanently') is declined with reasons given. The geriatric depot is for adherence-failure in severe illness at fraction-doses with double-force review, never convenience-chemical-restraint for family peace.",
        "The 'budhape ki baat' dismissal is the population's biggest killer of time: the counter-frame delivered at the first contact; 'the things she says are not age; they are symptoms; some of them are treatable this month'.",
        "The three-layer daughter-in-law analysis (the misplacement engine, the power dynamics, the real-abuse screen) is the joint-family consultation's core competency: the re-hidden purse found, the household power map read, and the genuinely mistreated elder disbelieved by neither clinician nor family.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The gas through the wall",
      presentation: "Fourteen months of sealed windows and packaged biscuits: the neighbours' gas, the daughter-in-law's searches, and the hearing test nobody had ever run.",
      initialPresentation:
        "A 68-year-old widow in Lucknow, living with her son's family, was brought after 14 months of escalating accusations: the upstairs neighbours were 'pumping gas through the ceiling' at night (she had sealed her windows with tape and cloth), her food 'tasted of medicine', and her daughter-in-law 'searches my box when I bathe'. At first contact she spoke coherently, was groomed, managed her own pension account and attended temple daily.",
      history:
        "Fourteen months of persecutory and partition-themed accusations with food avoidance (the shift to packaged biscuits and 6 kg of weight loss); no prior psychiatric history; the three-signs notebook retrospectively assembled by the son showing a suspicion-first, not memory-first, timeline with no cognitive decline over the year; the medication list revealing a nightly anticholinergic bladder tablet and twelve years of alprazolam 0.5 mg.",
      examination:
        "Coherent, groomed, socially appropriate between the delusional islands; literacy-adjusted MoCA 26/30; audiometry revealing severe bilateral presbycusis, never previously tested ('she just says what to everyone'); TSH and B12 normal; MRI showing mild age-consistent changes only.",
      diagnosis:
        "Very-late-onset schizophrenia-like psychosis with persecutory and partition themes, riding on a severe sensory-deprivation and sedative-load layer: the ridden-upon illness in its purest form.",
      management:
        "The co-riders first: bilateral hearing aids fitted (the daughter-in-law accompanying the audiology visit, the first therapeutic act, relationship-wise), the bladder tablet substituted, the alprazolam converted to a gradual taper; then risperidone 0.25 mg at night (the geriatric dose law), titrated to 0.5 mg over three weeks. The family scripts: no debates on the gas-claims, the redirect-to-temple script, the daughter-in-law's role explicitly re-framed and honoured in the treatment plan; the taped windows ignored rather than fought ('do not battle the symptom's props'); the dated-review card in the son's hand.",
      outcome:
        "At 3 months: food refusals gone, weight regained, the gas-claims stated once weekly rather than hourly, the window-tape removed by herself ('I don't think they do it now'); hearing aids worn daily (the son's report: 'she answers the phone; the house is louder'). At 9 months: on 0.5 mg, remission of the partition-delusion with residual mild referential suspicion; the taper-discussion scheduled.",
      teachingPoints: [
        "The audiometry was the highest-yield test in the assessment: the unaided presbycusis engine found in minutes.",
        "The co-rider treatment preceded the antipsychotic and was half the treatment: the hearing aids, the bladder tablet, the twelve-year alprazolam.",
        "The geriatric dose ran at a twelfth of the young-adult ceiling: 0.5 mg where a young adult needed 6.",
        "The daughter-in-law's alliance was engineered explicitly: the accused-party counsel as treatment architecture.",
        "The notebook's suspicion-first timeline excluded the dementia story: the differential's spine answered by the family's dated entries.",
      ],
    },
    {
      title: "The visitors in the sitting room",
      presentation: "The family of four at dusk, the wife 'replaced', and the 'gentle' quetiapine that felled a Lewy body brain in three weeks.",
      initialPresentation:
        "A 74-year-old retired Cochin schoolmaster was brought by his wife for 'seeing people at night': for six weeks he had described a 'family of four' sitting in the sitting room at dusk, occasionally 'two children in the garden', and had begun, in the last two weeks, to call out to them, and once to accuse his wife of 'replacing the real one'. His GP had started quetiapine 25 mg three weeks earlier for 'the visions'.",
      history:
        "Six weeks of formed visual hallucinations with emerging delusional misidentification; 18 months of 'walking dreams' (shouting and punching in sleep, the RBD flag, unrecognised); a two-year softening of his handwriting and gait (the parkinsonism creeping); a memory decline the wife dated to 'a year, maybe more'; daytime naps with fluctuating alertness.",
      examination:
        "Cogwheel rigidity bilaterally, slowed gait; MoCA 19/30 with attention-fluctuation across the session; the hallucinations described with curious calm ('they don't trouble me much; I know they shouldn't be there'); profound sedation and two falls since the quetiapine was started.",
      diagnosis:
        "Dementia with Lewy bodies: visual hallucinations with emerging delusional misidentification, RBD, parkinsonism and cognitive fluctuation; the quetiapine dose (though the 'gentle' choice in principle) had overshot his neuroleptic sensitivity.",
      management:
        "Quetiapine reduced to 12.5 mg at night (the LBD micro-dose reality, the wallet-card discipline applied); the falls audit done (bed rail, night-light, the bathroom route cleared); carer education from the LBD package: the hallucinations' 'benign-report' channel, engage and assess, do not medicate every vision; a rivastigmine discussion begun with the neurologist (the LBD's best-evidence cognitive agent).",
      outcome:
        "At 3 months: the 'family of four' reported weekly rather than nightly, no falls since the reduction, the misidentification cleared, and the wife's notebook documenting the pattern (the good days following nights of good sleep, the fluctuation map).",
      teachingPoints: [
        "The 'psychosis' was a dementia's opening chapter: the reorder-rule in action, the LBD workup preceding any primary label.",
        "The RBD history, sitting unrecognised for 18 months, was the retro-diagnosis: the dream-acting question worth asking in every late-life psychosis.",
        "Even quetiapine at 'low' geriatric doses can overshoot in Lewy body: the dopamine-hypersensitivity catastrophe and the micro-dose discipline.",
        "The hallucination-management for LBD runs carer-education-first: the 'do not medicate every vision' doctrine.",
        "The misidentification ('the real one') was the family's alarm-signal, correctly routed to assessment rather than to the tantrum-channel.",
      ],
    },
  ],
  clinicalPearls: [
    "Late-onset = onset after 40; very-late-onset = after 60: the two cutoffs that define the groups, and roughly a quarter of schizophrenia-spectrum cases begin after 40.",
    "The signature: persecutory and partition delusions with hallucinations and FEWER negative symptoms; the island-in-a-preserved-sea that separates the late-onset form from the early one.",
    "Psychosis in an elder with ANY cognitive signal is the dementia's symptom until proven otherwise: the reorder-rule: delirium, dementia, depression, substances/medications, THEN the primary label.",
    "Audiometry is the most productive single investigation in late-life paranoia: the unaided presbycusis engine, and the hearing aid as antipsychotic adjunct.",
    "The geriatric dose law: quarter-to-half of young-adult starting doses, half-step titration at weekly-plus intervals; elders respond and suffer at fractions.",
    "The lethality order of the cautions: the dementia-related mortality/stroke warnings first, the Lewy body neuroleptic-sensitivity catastrophe second, falls and sedation third, the metabolic and prolactin layers fourth.",
    "The Lewy body catastrophe rule: NO typicals; the atypicals at micro-doses with extreme caution: quetiapine the usual compromise; the wallet-card discipline.",
    "Risperidone 0.5 mg where a young adult needed 6, and the Lewy body patient felled by quetiapine 25 mg: the low-tolerance engine in both directions.",
    "Late-onset psychoses often hold remission at LOW maintenance doses after 6–12 months: the supervised slow-taper attempt after a stable year, the dated-review card in the family's hand.",
    "ECT in elderly psychotic depression and the food-refusing wasting patient: often the SAFEST and fastest option; the film-era fear should not decide it.",
    "The daughter-in-law-theft accusation carries three layers: the misplacement engine, the dependency-power dynamics, and occasionally the real abuse; the family-violence screen belongs in the assessment.",
    "'Budhape ki baat': the 'just old age' dismissal that costs this population years of treatable illness; age explains slowness, not sealed windows and 6-kg weight loss.",
    "The psychotic elder who worsens on medication is a FALLS/confusion assessment, not a dose-escalation mandate.",
  ],
  highYieldSummary: [
    "Definition: late-life psychosis = the schizophrenia-spectrum and delusional presentations arriving after 40 (late-onset) and after 60 (very-late-onset schizophrenia-like psychosis) (dimensional uses of the standard criteria with onset specifiers) plus the ridden-upon law: the delusions and hallucinations frequently ride on untreated sensory loss, a brewing dementia, a depression, a medication or a stroke, so the primary label is the LAST stop of the assessment.",
    "Epidemiology: roughly a quarter of schizophrenia-spectrum cases begin after 40; the very-late form is rarer, strikingly female-predominant, and strongly associated with deafness, social isolation and migrant status; family history weaker than early-onset; the course notably shallower (fewer negative symptoms, better preserved function, fewer hospitalisations, response to lower doses) though mortality still above population baselines; the Indian layer: no dedicated survey, the NMHS 2015–16 geriatric tier, the untreated-deafness epidemic and the joint-family double edge.",
    "Mechanism: the muffled-world engine (sensory deprivation plus a shrunken social world, the meaning-starved gap-filling defaulting to suspicion, an engineering problem fixed at the ear); the low-tolerance engine (the aging dopamine system's recalibration, fraction doses for benefit AND for harm, ending in the Lewy body dopamine-hypersensitivity catastrophe); the borrowed-fire engine (the dementias' opening chapters, misidentification from the failing recognition system, theft-delusions from the re-hidden purse, Lewy body's formed visual hallucinations with early retained insight).",
    "Clinical: the primary signature; persecutory, partition ('they come through the wall/ceiling') and misidentification delusions, auditory hallucinations wired to the deafness channel, visual and olfactory hallucinations, and the ABSENT negative-symptom layer with function preserved for years; the co-rider patterns to hunt (delirium's days-scale fluctuation, Lewy body's visions-parkinsonism-dream-acting triad, Alzheimer's tracking memory decline, the guilty-poisoned depressive engine, the medication timeline); the danger signs: food refusal on poisoning logic, the accused-party confrontation, wandering on partition-logic, suicide risk in the depressive engine.",
    "Diagnosis: the criteria are the END of the assessment; the workup runs the reorder-rule in nine steps: delirium screen (CAM-tier), cognitive testing with the informant's memory-first-versus-suspicion-first timeline, SENSORY testing (audiometry, the highest-yield test in this population), the mood screen with the guilt probe, the medication and substance audit (anticholinergic burden, the benzo decade, the dopaminergic and steroid layers, the secondary-mania workup where the picture excites), the labs (TSH, B12, glucose, renal, electrolytes, the infection screen), the MRI, the Parkinson/Lewy body examination BEFORE any antipsychotic decision, and the named-instrument tier (MoCA, GDS, NPI, PANSS).",
    "Management: the frame; rule out first, treat co-riders second, antipsychotic third at the SMALLEST effective dose with a written stop-review date: the hearing aids and cataract surgery, the social-channel rebuilding, the depression treated (the ECT fork for the psychotic melancholic, the catatonic and the food-refusing wasting patient), the delirium's source and the BPSD's trigger-first ladder, the medication audit; then the fraction-dose pharmacotherapy (risperidone 0.25–0.5 mg the best-evidence choice, careful above 1–2 mg; olanzapine 2.5 mg; aripiprazole 2.5–5 mg; quetiapine 12.5–25 mg at night the LBD/Parkinson's compromise) with the cautions in lethality order and the review architecture: the maintenance at LOW doses after 6–12 months, the supervised taper attempt after a stable year, the depot only for genuine adherence failure at geriatric fraction-doses.",
    "The Indian tier: the deaf-elder audit as the highest-yield act (the district rehabilitation-centre route); the daughter-in-law accusation's three layers (the re-hidden purse, the last power-lever, the real-abuse screen); the 'budphase ki baat' counter-frame; the possession-and-astrology idiom translated without contempt; the pension-and-property legal conversation held EARLY while capacity stands; the three-signs notebook converting the joint family's anecdote-storm into data; the costs (risperidone ₹30–150/month, quetiapine ₹100–400, approx 2026) with the pharmacovigilance reality (dose-discipline documented in fewer than half of Indian geriatric prescriptions), and the dated-review card, the hearing test and the medication audit as the interventions that cost almost nothing.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "llp-quiz-1",
      question: "Very-late-onset schizophrenia-like psychosis is defined by onset after:",
      options: ["25", "40", "60", "75"],
      correctIndex: 2,
      explanation: ">60 (late-onset itself is >40) — female-predominant and strongly associated with sensory impairment, isolation and migrant status.",
      afterSectionId: "top",
    },
    {
      id: "llp-quiz-2",
      question: "The FIRST step in assessing an elderly patient with new 'strange ideas':",
      options: ["Start a low-dose antipsychotic", "Rule out delirium, then dementia, depression and medication causes (the reorder-rule)", "Order genetic testing", "Arrange admission"],
      correctIndex: 1,
      explanation: "Age reorders the differential: the primary label is the LAST stop — D-D-D-S-P, the four before the label.",
      afterSectionId: "diagnosis",
    },
    {
      id: "llp-quiz-3",
      question: "The most productive single investigation in late-life paranoia:",
      options: ["EEG", "Audiometry (the unaided presbycusis engine)", "PET scan", "Lumbar puncture"],
      correctIndex: 1,
      explanation: "The muffled-world engine — and the hearing aid becomes part of the treatment.",
      afterSectionId: "diagnosis",
    },
    {
      id: "llp-quiz-4",
      question: "A 74-year-old with formed visual hallucinations, parkinsonism and dream-acting develops severe sedation and falls on quetiapine 25 mg. The lesson:",
      options: ["Quetiapine is contraindicated in all elderly", "Lewy body sensitivity — even 'gentle' atypical doses can overshoot; micro-dose, and typicals are forbidden", "Double the dose to control the visions", "Switch to haloperidol"],
      correctIndex: 1,
      explanation: "The Lewy body catastrophe rule: the wallet-card discipline applied at geriatric scale — no typicals, micro-dosed atypicals, carer-education-first.",
      afterSectionId: "management",
    },
    {
      id: "llp-quiz-5",
      question: "The regulatory position on antipsychotics in dementia-related psychosis:",
      options: ["First-line for all BPSD", "Warnings of increased mortality/stroke: severe cases only, lowest dose, documented periodic review/deprescribing", "Proven safe in elders", "Only typicals are restricted"],
      correctIndex: 1,
      explanation: "The prescribing architecture that distinguishes discipline from refusal — the dated-review card, not the prescription-and-forget culture.",
      afterSectionId: "management",
    },
    {
      id: "llp-quiz-6",
      question: "Compared with early-onset schizophrenia, late-onset psychosis typically shows:",
      options: ["More negative symptoms", "Persecutory/partition themes, faint negative symptoms, preserved function, response to fraction-doses", "Chronic hospitalisation courses", "Equal dose requirements"],
      correctIndex: 1,
      explanation: "The island-in-a-preserved-sea signature: the shallower course that runs on fractions of the young-adult doses.",
      afterSectionId: "symptoms",
    },
  ],
  activeRecallQuestions: [
    { question: "State the onset cutoffs for late-onset and very-late-onset psychosis, and three phenomenological differences from early-onset schizophrenia.", answer: "THE CUTOFFS: late-onset schizophrenia = onset after 40; very-late-onset schizophrenia-like psychosis = onset after 60: dimensional uses of the same criteria with onset specifiers, with roughly a quarter of all schizophrenia-spectrum cases beginning after 40. THREE DIFFERENCES: (1) DELUSION CONTENT; persecutory and partition themes dominate (gas through the walls, intruders through the ceiling, the home violated through its partitions) with misidentification and somatic themes, against the early-onset form's broader bizarre range; (2) THE NEGATIVE-SYMPTOM LAYER: absent or faint: the elder converses coherently, stays groomed, socially appropriate between the delusional islands, function preserved for years (cooking, accounts, temple-going); the island-in-a-preserved-sea quality; (3) THE COURSE AND THE DOSE: notably shallower: fewer hospitalisation needs, better preserved social functioning, and response to FRACTIONS of young-adult doses (the low-tolerance engine). Add the epidemiology the exam wants: the very-late form is strikingly female-predominant and strongly associated with deafness, isolation and migrant status.", topic: "Foundations" },
    { question: "Recite the reorder-rule (delirium → dementia → depression → substance/medication → primary) and the one-line workup sequence it generates.", answer: "THE RULE: delirium first (the great mimic, days-scale onset, fluctuation, inattention, night-worsening; hunt the source: UTI, drug, hypoxia), dementia second (memory and function decline tracking WITH the psychosis; the informant's memory-first timeline; Lewy body's formed visual hallucinations especially), depression third (the guilty-poisoned content with weight loss and early waking (the psychotic-depressive engine), substances and medications fourth (the anticholinergic bladder tablet, the benzodiazepine decade, the dopaminergic meds, the steroids) and the secondary-mania workup where the picture excites), and only THEN the primary late-onset label. THE ONE-LINE WORKUP: delirium screen (CAM-tier logic) → cognitive testing (MoCA, literacy-adjusted; the informant's 'what changed first') → sensory testing (audiometry and vision: the highest-yield test in this population) → mood assessment (GDS-tier with the guilt probe) → medication and substance audit (anticholinergic-burden counting) → labs (TSH, B12, glucose, renal, electrolytes, infection screen) → imaging (MRI where indicated; silent infarcts, mass, NPH, the vascular burden) → the Parkinson/Lewy body examination BEFORE any antipsychotic decision. The mnemonic: D-D-D-S-P, 'the four before the label'; first the flags, then the deafness, then the drugs, then the diagnosis.", topic: "Diagnosis" },
    { question: "Explain the sensory-deprivation engine and the 'hearing aid as antipsychotic adjunct' evidence position.", answer: "THE ENGINE: a brain that has spent seventy years cross-checking sound with context gets its input muffled (decades of unaided presbycusis) while its social world shrinks (widowhood, retirement, children abroad). Conversations arrive as fragments and the meaning-starved brain fills the gaps with narrative; in a low-trust, high-stakes social world (a joint family's inheritance tensions) the gap-filling defaults to suspicion: 'they whisper about me' (they do, two rooms away, audibly and incomprehensibly). The result is 'paranoia' that is substantially an ENGINEERING problem: the input is broken, not the mind. THE EVIDENCE POSITION: the sensory-impairment association is late-life paranoia's best-documented finding (the Corbin-Eastwood lineage, the modern updates); the audiology-anchored literature reports measurable paranoia reductions after hearing-aid fitting and cataract surgery: the hearing aid as antipsychotic adjunct, the co-rider treated before or with any prescription. The clinical translation: the geriatric psychosis workup treats the EARS as seriously as the mind; audiometry in every late-life paranoia assessment, and the channel fixed (aids, surgery, lighting) before the dopamine blockers. The Indian urgency: the untreated-deafness epidemic is the single biggest modifiable paranoia engine in Indian elders; the audiometry costs almost nothing at the district tier.", topic: "Mechanism" },
    { question: "Give the geriatric antipsychotic dose law with two example starting doses, and the three cautions in order of lethality.", answer: "THE DOSE LAW: start at a quarter-to-half of young-adult starting doses, titrate at half-steps at weekly-plus intervals, and expect effect at fractions of the young-adult effective dose. TWO EXAMPLES: risperidone 0.25–0.5 mg at night (careful above 1–2 mg, the best late-onset evidence base); quetiapine 12.5–25 mg at night (the LBD/Parkinson's compromise where sensitivity risk exists). The second pair for completeness: olanzapine 2.5 mg (metabolic caution in the sedentary elder) and aripiprazole 2.5–5 mg (the lower-sedation option; the akathisia watch). THE CAUTIONS IN LETHALITY ORDER: (1) the regulatory increased mortality and stroke warnings for antipsychotics in dementia-related psychosis; prescribe only for severe risk or distress, at the lowest dose, with documented periodic review-and-reduction attempts (the deprescribing discipline, not the prescription-and-forget culture); (2) the Lewy body neuroleptic-sensitivity catastrophe. NO typicals, the atypicals at micro-doses with extreme caution (quetiapine the usual compromise; the wallet-card rule); (3) falls, sedation and orthostasis: the elder felled by a dose a 30-year-old would shrug off (with the metabolic and prolactin layers riding behind them even at low doses). The two corollary laws: the psychotic elder who worsens on medication is a FALLS/confusion assessment, not a dose-escalation mandate; and the maintenance runs at LOW doses after 6–12 months with a supervised slow-taper attempt after a stable year.", topic: "Pharmacology" },
    { question: "What is the regulatory mortality-warning position for antipsychotics in dementia-related psychosis, and the prescribing discipline it imposes?", answer: "THE POSITION: the regulatory agencies (the FDA/EMA lineage) carry warnings of increased mortality and stroke for antipsychotics used in dementia-related psychosis; the warnings that transformed this corner of geriatric prescribing. The medicines are neither forbidden nor safe: they are RESTRICTED to severe risk or distress, at the lowest dose, with the discipline documented. THE IMPOSED DISCIPLINE: (1) the indication narrowed; severe distress or danger only (the food-refusing, the assault-risk, the catastrophic distress), never the first reflex for every vision or every restlessness; (2) the dose law: quarter-to-half starting doses, half-step titration, effect expected at fractions; (3) the documented periodic review-and-reduction attempts: the deprescribing discipline with written dates, the dated-review card in the family's hand, against the prescription-and-forget culture; (4) the cautions ordered: the mortality/stroke warnings first, then the Lewy body sensitivity catastrophe (the examination BEFORE any prescription), then falls, sedation, orthostasis, then the metabolic and prolactin layers. The honest counterweight: avoided altogether, a severe delusion can kill too (food refusal, assault); the skill is in the prescribing architecture, not in refusal. The Indian execution: the dose-discipline documented in fewer than half of Indian geriatric prescriptions; the dated-review card the counter-architecture, and the Tele-MANAS/family-physician checkpoints the follow-through.", topic: "Management" },
    { question: "Name the LBD catastrophe rule (typicals forbidden; even atypicals micro-dosed) and its wallet-card logic.", answer: "THE RULE: in dementia with Lewy bodies, NO typical antipsychotics (the neuroleptic-sensitivity catastrophe) and even the atypicals are micro-dosed with extreme caution, quetiapine the usual compromise. The evidence lineage is McKeith's: Lewy body patients felled by doses that are ordinary elsewhere; profound sedation, rigidity, falls, the catastrophe that reads as 'worsening' and invites the fatal escalation. THE WALLET-CARD LOGIC: the rule travels with the patient, not with the prescriber's memory; the Lewy body patient (and the family) carries the card that says 'this brain is dopamine-hypersensitive; no typicals; atypicals only at micro-doses with extreme caution', so that the casualty officer, the night-duty physician and the next consultant all meet the rule before they meet the prescription pad. THE WORKUP MANDATE: the Parkinson/Lewy body examination precedes ANY antipsychotic decision in late-life psychosis; the soft signs, the dream-acting history (RBD sitting unrecognised for 18 months is the classic), the levodopa timeline; and the quetiapine-25-mg trap named: even the 'gentle' choice overshoots; 12.5 mg at night is the micro-dose reality, with carer-education-first ('do not medicate every vision') and the falls audit running alongside.", topic: "Pharmacology" },
    { question: "Which co-riders must be treated before or with the antipsychotic, per the frame?", answer: "THE FRAME: rule out first, treat co-riders second, antipsychotic third. The co-riders are half the treatment. THE LIST: (1) THE SENSORY ENGINE; bilateral hearing aids where the presbycusis is real (measurable paranoia reductions in the audiology-anchored literature), cataract surgery, the lighting audit for the face-reading; (2) THE SOCIAL CHANNEL (the day-structure, the senior-citizens' association, the temple-committee role) isolation's antidote written as a prescription; (3) THE DEPRESSION: treated on the elderly-depression ladder, with ECT for the psychotic melancholic tier (the ECT fork held open early in the guilt-content pictures); (4) THE DELIRIUM'S SOURCE: hunted and treated (the UTI, the drug, the hypoxia); (5) THE DEMENTIA'S BPSD (managed trigger-first (carer education, trigger-hunting, environment structuring BEFORE the prescription) the five-floors ladder of the Dementia Management course); (6) THE MEDICATION AUDIT: the anticholinergic load reduced (the nightly bladder tablet substituted), the benzodiazepine decade converted to a gradual taper, the dopaminergic dose negotiated with the neurologist where Parkinson's. The Indian execution: the district rehabilitation centre for the aids, the daughter-in-law's medicine-administration role for the adherence, and the whole package costing almost nothing at the district tier.", topic: "Management" },
    { question: "The daughter-in-law accusation pattern: the three layers to untangle before treating.", answer: "LAYER ONE (THE ILLNESS'S MISPLACEMENT ENGINE: the re-hidden purse) the memory system (dementia's beginning) or the fixed delusion that cannot find what the patient herself hid, the object reported stolen. The test: search where she hides things; the found purse settles a year of accusation. LAYER TWO (THE DEPENDENCY-POWER DYNAMICS: the accusation as the last remaining power-lever in a household where authority has migrated to the son and daughter-in-law) part illness, part family-system signal; the joint family's more-observation-AND-more-accusation surface. The response: the family-session tool, the accused-party counsel (no counter-accusation sieges, the war is the illness's fuel), the daughter-in-law's role explicitly re-framed and honoured in the treatment plan (the alliance that carries the medication schedule). LAYER THREE (THE REAL-ABUSE SCREEN: the elder's claim is not always illness) occasionally the real theft or neglect of the elder hides inside the 'paranoid' complaint, and the genuinely mistreated elder is also disbelieved. The rule: once, quietly, verify that no real abuse is happening before every accusation is dismissed as paranoia. The counselling script that holds all three: 'your things feel unsafe, that's upsetting; let's lock the box and keep the key with you': sympathise with the feeling, redirect, and bring the pattern to the treating doctor.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Is she going mad at 70? Is this schizophrenia like her nephew?", answer: "It is a psychosis, but the late-life version is a different animal from the young-adult illness: it runs a shallower course, often responds to small doses, and frequently rides on things we can treat; her deafness, her tablets, her depression, sometimes a dementia's beginnings. The nephew's illness and hers may share a name in the family's fear; they do not share the course." },
    { question: "The doctor said antipsychotics can be dangerous in the elderly. Should we avoid them altogether?", answer: "The caution is real: in dementia-related psychosis these medicines carry warnings of increased mortality and stroke, which is why our discipline is. Treat the co-riders first, use the medicine only for severe distress or danger, at the smallest dose, with written review dates and periodic taper attempts. Avoided altogether, a severe delusion (food-refusal, assault) can kill too; the skill is in the prescribing architecture, not in refusal." },
    { question: "She keeps saying her daughter-in-law steals from her box. Do we confront them both?", answer: "Don't run a trial. The re-hidden purse is the dementia-or-delusion's classic trick. The object is hidden (often by the patient herself) and reported stolen. Arguing strengthens the belief and wages war on the marriage of the household. The script: sympathise with the feeling ('your things feel unsafe, that's upsetting; let's lock the box and keep the key with you'), redirect, and bring the pattern to the treating doctor. And once, just once, quietly verify that no real theft or neglect is happening: elders who are actually mistreated also say so, and are also disbelieved." },
    { question: "He is 76 and says people come through the wall. Isn't this just old age talking?", answer: "'Just old age' is the sentence that costs this population years of treatable illness. The partition-delusion pattern is a symptom with a differential (deafness, a dementia's beginnings, a late-onset psychosis) and several of those are treatable this month. Age explains slowness; it does not explain sealed windows and 6-kg weight loss." },
    { question: "Her hearing is bad but she refuses the hearing aid; she says it makes the voices clearer.", answer: "That complaint is real: an aid amplifies everything, including misheard sound, in the first weeks. The audiology answer is fitting-and-follow-up (the programming adjustment), not abandonment, and in the medium run the aided ear feeds the brain real context, which shrinks the suspicious gap-filling. Start with part-time wearing hours, choose the comfortable model, and let the family's patience carry the first month." },
    { question: "Won't risperidone make him shaky like his brother-in-law on those tablets?", answer: "Drug-induced parkinsonism in elders is dose-dependent and common, which is why the geriatric dose starts at a fraction of the young-adult one, titrates slowly, and is reviewed on written dates. If shakiness appears, it is a dose-adjustment signal (or a Lewy body alert), not a life sentence; we adjust, substitute or stop. The un-prescribed delusion is also a danger; the skill is dosing, not refusal." },
    { question: "She has stopped eating because she thinks we poison the food. What do we do TODAY?", answer: "This is the emergency end of the condition: today; sealed packaged food she opens herself, food she watches being cooked, one trusted feeder, and the doctor the same week (weight-loss clocks matter; this is a treat-this-week severity). And if the food-refusal rides on a depression-with-guilt-content, the response includes the ECT-tier conversation early; in the elderly, that option is often the fastest life-saver, and the film-era fear should not decide it." },
    { question: "Can we try without medicine, only the hearing aid and family changes?", answer: "Worth an honest trial in mild cases: the co-riders are half the treatment, and some sensory-driven suspicion states quiet down substantially with the channel fixed, the sedatives cleared and the days re-peopled. But track it with the notebook and a review date; if the sealed windows and the food-logic persist past the trial, the medicine joins. 'Trying without' is a plan, not a hope." },
    { question: "Will she need the tablet forever?", answer: "Late-onset psychoses often hold remission at LOW doses after 6–12 months, and a supervised slow-taper attempt after a stable year is reasonable. Some elders relapse at any taper and stay on their fraction-dose for good, at which dose the harm ledger is usually kind. What she never needs is prescription-and-forget: the review card is part of the prescription." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "FDA / EMA regulatory warnings — increased mortality and stroke with antipsychotics in dementia-related psychosis (the prescribing discipline)" },
      { source: "American Psychiatric Association: DSM-5-TR schizophrenia and delusional-disorder criteria applied with onset specifiers (logic paraphrased)" },
      { source: "WHO ICD-11 — the late-onset architecture for the schizophrenia-spectrum framing" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 8.5.3 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "McKeith I et al. — the Lewy body neuroleptic-sensitivity evidence (the catastrophe rule and the wallet-card logic's foundation)" },
    ],
    reviews: [
      { source: "Howard R et al. — the late-onset and very-late-onset schizophrenia consensus (the cutoffs and the phenomenology)" },
      { source: "Palmer BW et al. and Harris MJ & Jeste DV — late-life schizophrenia phenomenology and the dose-response evidence (the fraction-dose law)" },
      { source: "Corbin SL & Eastwood MR, updated by Thewlis A et al. — the sensory-deprivation and hearing-loss lineage of late-life paranoid states (the hearing-aid evidence)" },
      { source: "Prakash R and the Indian late-life psychiatry literature context; NMHS 2015–16 geriatric mental-morbidity tier" },
    ],
    patientResources: [
      { source: "Tele-MANAS and the family-physician checkpoints — the Indian follow-through channel for the dose-and-review discipline" },
      { source: "The three-signs notebook and the dated-review card — the two paper instruments this course hands to every Indian family" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: what the ideas are riding on, the hearing test, the family scripts, the warning signs.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "27 min",
      description: "The cutoffs, the signature, the reorder-rule, the workup sequence, the dose law with its cautions.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "36 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "44 min",
      description: "Everything: the ridden-upon workup, the lethality-ordered cautions, the family architecture, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The cutoffs, the ridden-upon law, the signature and the reorder-rule.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the two cutoffs, the phenomenological signature and the five stations of the reorder-rule cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The muffled world, the low-tolerance engine, the borrowed fire.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the hearing aid is antipsychotic and why quetiapine 25 mg felled the schoolmaster." },
    { number: 3, title: "Clinical Practice", description: "The reorder-rule workup, the differential, the fraction-dose treatment and the patient guide.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the nine-step workup and deliver the lethality-ordered cautions with the dose law." },
    { number: 4, title: "Indian Context", description: "The deaf-elder audit, the daughter-in-law layers, the decision path and the mistakes.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the 'not age, symptoms' counter-frame and the three-layer accusation analysis." },
    { number: 5, title: "Exam Revision", description: "The exam lens, the two cases and the high-yield density.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the 70-year-old-gas-through-the-wall essay cold and recite the cautions in lethality order." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, the family's FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 8.5.3 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "American Psychiatric Association: DSM-5 / DSM-5-TR — schizophrenia and delusional-disorder criteria applied with onset specifiers (logic paraphrased)", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
    { id: "S3", source: "WHO ICD-11 — the late-onset architecture for the schizophrenia-spectrum framing", sourceType: "classification", year: "2019–2022", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Howard R et al. — the late-onset and very-late-onset schizophrenia consensus (the cutoffs and the phenomenology)", sourceType: "review", year: "2000", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Palmer BW et al. / Harris MJ & Jeste DV — late-life schizophrenia phenomenology and the dose-response evidence (the fraction-dose law)", sourceType: "review", year: "1990s–2000s", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Corbin SL & Eastwood MR / Thewlis A et al. — the sensory-deprivation and hearing-loss lineage of late-life paranoid states (the hearing-aid evidence)", sourceType: "review", year: "1986 onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "FDA / EMA regulatory warnings — increased mortality and stroke with antipsychotics in dementia-related psychosis (the prescribing discipline)", sourceType: "guideline", year: "2005 onward", dateReviewed: "2026-09-29" },
    { id: "S8", source: "McKeith I et al. — the Lewy body neuroleptic-sensitivity evidence (the catastrophe rule)", sourceType: "primary", year: "1992 onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "NMHS 2015–16 (Gururaj G et al., NIMHANS) — the geriatric mental-morbidity tier and the service-routing reality", sourceType: "government", year: "2016", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Prakash R / the Indian late-life psychiatry literature context — the deaf-elder tier and the joint-family management patterns", sourceType: "review", year: "1990s–2010s", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Indian service layer — district audiometry/rehabilitation routes, geriatric pharmacovigilance realities, antipsychotic cost ranges (approx 2026)", sourceType: "indian-guideline", year: "2026", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The onset cutoffs and phenomenology: late-onset schizophrenia (onset >40) and very-late-onset schizophrenia-like psychosis (>60) as dimensional uses of schizophrenia/delusional-disorder criteria with onset specifiers; the signature being persecutory/partition/misidentification delusions with hallucinations and absent-or-faint negative symptoms: the island-in-a-preserved-sea.", grade: "established", sources: ["S1", "S2", "S3", "S4"] },
    { text: "Epidemiology: roughly a quarter of all schizophrenia-spectrum cases have their onset after 40; the very-late form is rarer, strikingly female-predominant, strongly associated with sensory impairment (deafness above all), social isolation and migrant status; family history weaker than early-onset; the estrogen-decline window one proposed contributor to the female dominance.", grade: "established", sources: ["S4", "S5", "S1"] },
    { text: "The course: notably SHALLOWER than early-onset (fewer negative symptoms, better preserved social functioning, fewer hospitalisation needs, response to lower medication doses) though mortality and functional decline still run above population baselines on the medical-comorbidity freight of the age.", grade: "established", sources: ["S1", "S5"] },
    { text: "The sensory-deprivation engine: unaided presbycusis (and the cataract-blurred face-reading) as late-life paranoia's best-documented modifiable association; the muffled input filled with suspicious narrative; hearing-aid fitting and cataract surgery delivering measurable paranoia reductions (the hearing aid as antipsychotic adjunct).", grade: "supported", sources: ["S6", "S10"] },
    { text: "The low-tolerance engine: the aging dopamine system's recalibration; a lower psychosis ceiling with benefit and harm both arriving at fractions of young-adult doses; elders responding to 1–2 mg of risperidone where young adults needed 6, and developing parkinsonism, sedation, falls and confusion at doses a 30-year-old would shrug off.", grade: "established", sources: ["S1", "S5"] },
    { text: "The regulatory position: increased mortality and stroke warnings for antipsychotics in dementia-related psychosis; prescribing restricted to severe risk/distress, at the lowest dose, with documented periodic review-and-reduction attempts (the deprescribing discipline against the prescription-and-forget culture).", grade: "established", sources: ["S7"] },
    { text: "The Lewy body catastrophe rule: neuroleptic sensitivity; typicals forbidden, atypicals micro-dosed with extreme caution (quetiapine the usual compromise); the quetiapine-25-mg overshoot trap and the wallet-card discipline; the Parkinson/Lewy body examination (RBD history, soft signs, levodopa timeline) preceding ANY antipsychotic decision.", grade: "established", sources: ["S8", "S7"] },
    { text: "The geriatric dose law and the maintenance architecture: quarter-to-half of young-adult starting doses (risperidone 0.25–0.5 mg, olanzapine 2.5 mg, aripiprazole 2.5–5 mg, quetiapine 12.5–25 mg at night), half-step titration at weekly-plus intervals; remission held at LOW maintenance doses after 6–12 months with a supervised slow-taper attempt reasonable after a stable year; the depot reserved for genuine adherence failure at geriatric fraction-doses.", grade: "established", sources: ["S5", "S7", "S1"] },
    { text: "ECT in this population: for elderly psychotic depression, the catatonic and the food-refusing wasting patient, and the medication-intolerant severe case; often the SAFEST and fastest option; the consent architecture and the transient, monitored, recovering cognitive side effects honestly framed against the film-era fear.", grade: "established", sources: ["S1", "S5"] },
    { text: "The workup sequence and the criteria's position: the reorder-rule governs (delirium → dementia → depression → substances/medications → primary), with the nine-step sequence. CAM-tier delirium screen, MoCA/literacy-adjusted cognitive testing with the informant timeline, audiometry and vision, the GDS-tier mood screen with the guilt probe, the medication and substance audit (anticholinergic burden, the benzo decade, dopaminergic and steroid layers, the secondary-mania consideration), labs, MRI, the Parkinson/Lewy body examination before any antipsychotic, and the named-instrument tier (NPI, PANSS).", grade: "established", sources: ["S1", "S2", "S3", "S6"] },
    { text: "The Indian tier: no dedicated late-onset psychosis survey; the NMHS 2015–16 geriatric tier with the GP-and-neurology-first routing; the untreated-deafness epidemic as the single biggest modifiable paranoia engine in Indian elders; the daughter-in-law-accusation's three layers (misplacement engine, power dynamics, the real-abuse screen); the 'budhape ki baat' delay; the antipsychotic costs (risperidone ₹30–150/month, olanzapine ₹50–250, quetiapine ₹100–400, aripiprazole ₹150–600, approx 2026) with the dose-discipline documented in fewer than half of Indian geriatric prescriptions; the dated-review card, the three-signs notebook and the Tele-MANAS/family-physician checkpoints as the counter-architecture.", grade: "supported", sources: ["S9", "S10", "S11"] },
  ],
};
