import type { PsychiatryCourse } from "./types";

/**
 * INTELLECTUAL DISABILITY — OVERVIEW — canonical Psychiatry course
 * (migration batch 8, Group N — intellectual disability, part 1 of 4).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/intellectual-disability-overview.md — untouched
 * foundation), re-researched against current guidance (the ICD-11
 * disorder-of-intellectual-development architecture, the DSM-5-TR
 * severity-by-support logic and the AAIDD lineage behind it, the Maulik
 * prevalence meta-analyses, the Walker early-stimulation evidence,
 * the Wehman supported-employment tradition, and the RPwD 2016 /
 * National Trust benefit spine) with per-claim provenance.
 *
 * Drug routes: NONE linked — no medicine treats the intellectual
 * disability itself, and this note assigns none of the twelve KYP drug
 * lessons a role. The genuine comorbidity pharmacology (the
 * anticonvulsant tier for the epilepsy that rides in, the carefully
 * monitored severe-self-injury-and-aggression bands, the treatable-
 * cause tier — thyroid replacement, the PKU diet, valproate's
 * pregnancy ledger) has no KYP lessons and is recorded in
 * contentGaps with cross-references to the live Depressive Disorders
 * and Bipolar Disorders courses — taught here, route never invented.
 */
export const intellectualDisabilityOverviewCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "intellectual-disability-overview",
  title: "Intellectual Disability",
  shortName: "ID",
  kind: "disorder",
  category: "Intellectual Disability",
  groupLetter: "N",
  groupName: "Intellectual disability",
  learningPath: ["Psychiatry", "Intellectual Disability", "Intellectual Disability"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "38 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Supports, not just scores: severity graded by adaptive support needs, not the IQ decimal",

  summary:
    "Intellectual disability means limited intellectual and adaptive functioning from the developmental period, with severity graded by support needs rather than IQ alone. Treatment is education, skills and support architecture delivered over decades, with the family as primary therapist.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define intellectual disability on the two-dial model (intellectual AND adaptive deficits, both from the developmental period, both persistent) and explain why the IQ ~70 line is a rough door while adaptive functioning is the real definition.",
    "Grade severity the modern way: by adaptive support needs across the conceptual, social and practical domains (the AAIDD/ICD-11/DSM-5 logic), not by IQ decimal points.",
    "Separate ID from its lookalikes: mental illness (the great Indian conflation), specific learning disorder, autism without ID, sensory impairment, deprivation-driven delay, borderline functioning and the regression tier.",
    "Draw the cause-map by timing (prenatal / perinatal / postnatal, plus the psychosocial amplifier) with India's prevention ledger: the claimed victories and the open ground.",
    "Run the assessment with the Indian instruments (developmental schedules, the Binet-Kamat, the Vineland Social Maturity Scale, performance batteries) and know what an IQ number does and does not license you to conclude.",
    "Deliver the intervention ladder: early intervention (0–6), school placement logic, skills-and-vocational training, health and behaviour, and the family's lifetime architecture.",
    "Navigate the Indian legal-and-benefit spine: RPwD 2016 benchmark certification, the pension, concessions, Niramaya, National Trust guardianship, and hold the marriage, sibling and 'after we die' conversations early and in the open.",
  ],
  quickFacts: [
    { label: "The two dials", value: "Intellectual AND adaptive, both early", detail: "Reasoning (test-measured) plus adaptation (the lived skill of running a life, dressing, money, safety, relationships, work); one dial alone certifies nothing, because the lookalikes dissociate exactly there" },
    { label: "The rough door", value: "IQ ~70", detail: "Roughly two standard deviations below the mean: a screening threshold, not the definition; severity and planning run on adaptive support needs across conceptual, social and practical domains (the AAIDD/ICD-11/DSM-5 move)" },
    { label: "The invisible majority", value: "~1% prevalence, ~85% mild", detail: "Methodological bands 0.5–1.5%; the severity pyramid 85-10-3-2 (mild-moderate-severe-profound); the mild band learns slower, works structured jobs, marries, and stays invisible to statistics precisely because it functions among us" },
    { label: "The causes by timing", value: "The 3 P's", detail: "Prenatal (genes, TORCH, alcohol, valproate, iodine, folate), Perinatal (hypoxia, prematurity, kernicterus), Postnatal (meningitis, cerebral malaria, lead, deprivation): plus the psychosocial amplifier that writes poverty into IQ-and-adaptation" },
    { label: "The screen-before-certify pair", value: "Hearing and vision, always first", detail: "The language-starved deaf child tests low until the channel is fixed: the classic Indian mis-certification, prevented by one rule run before any label is written" },
    { label: "The Indian instruments", value: "Binet-Kamat and VSMS", detail: "Kamat's Binet adaptation for the reasoning dial; the Vineland Social Maturity Scale (Indian adaptation, Malin's lineage) for the adaptive dial; Seguin-form-board and Bhatia-type performance batteries for the non-literate-and-language-disordered" },
    { label: "The treatment's shape", value: "No medicine for ID itself", detail: "The treatment IS education, skills, health and the support architecture: delivered in decades, in doses of repetition, with the family as the primary therapist; medicines have careful roles only for epilepsy, treatable causes and the severe behavioural bands" },
    { label: "The benefit spine", value: "RPwD 2016, ≥40% benchmark", detail: "The medical board's percentage assessment above 40% unlocks the state disability pension, travel concessions, Niramaya insurance (₹1-lakh family cover at token premium), National Trust guardianship and the 4% government-job reservation" },
  ],
  knowledgeGraph: [
    { label: "Genetic Syndromes in ID", type: "condition", href: "/psychiatry/id-syndromes/", note: "Down syndrome, fragile X and the behavioural phenotypes: the syndrome-specific surveillance and counselling tier this overview points downward to" },
    { label: "Dual Diagnosis in ID", type: "condition", href: "/psychiatry/id-dual-diagnosis/", note: "The mental-illness-in-ID territory: recognition above general-population rates, the behaviour-as-communication discipline, the careful medication tier" },
    { label: "ID Treatment & Services", type: "condition", href: "/psychiatry/id-treatment-services/", note: "The intervention ladder's full account: early intervention, school-and-vocational routes, the service map and the lifetime plan" },
    { label: "Mental Health Law", type: "condition", href: "/psychiatry/mental-health-law/", note: "Consent, capacity and the guardianship questions the marriage-and-after-we-die conversations run on" },
    { label: "Autism Spectrum Disorder", type: "condition", href: "/psychiatry/autism/", note: "The classic co-occurrence and the lookalike separation: the total-communication discipline shared between the two conditions" },
    { label: "ADHD", type: "condition", href: "/psychiatry/adhd/", note: "The distractible lookalike whose performance varies wildly with engagement: reasoning intact one-to-one" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The adult comorbidity that arrives at above general-population rates: treatable, and under-recognised because it hides behind 'he is anyway like that'" },
    { label: "Bipolar Disorders", type: "condition", href: "/psychiatry/bipolar-disorders/", note: "Valproate's neural-tube-plus-neurodevelopmental ledger: the pregnancy rules behind one preventable prenatal tier" },
    { label: "Glutamate", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The learning machine's molecular currency: the plasticity engine the buildable window runs on" },
    { label: "Cerebral cortex (the buildable canvas)", type: "brain-region", href: "#brain", note: "The 0–6 window's densest synapse-building terrain: the tissue early intervention teaches through" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three framing stories carry the neuroscience of intellectual disability. The two dials: the diagnosis requires the reasoning dial AND the living dial both low, from early, persistently, because they dissociate in the lookalikes (the learning-disordered child has average reasoning with one academic channel narrow; the autistic child may have high reasoning with low social adaptation; the deprived child low tested reasoning with fast-recovering adaptation). Only the pair, together, early and persistent, is ID, and treatment-planning weights the ADAPTIVE dial far above the reasoning dial: the IQ number grades the paper; the functional level designs the life. The buildable window: the 0–6 brain runs its maximal plasticity circuitry; synaptogenesis at its densest, the learning machine at its most teachable. Early intervention does not raise the IQ as a number (the honest literature); it builds the adaptive architecture (communication, self-care, social wiring, the learning-to-learn skills) that the adult outcome runs on. ID is therefore not a fixed quantity to accept but a capacity curve to climb: slower, with more repetitions, with different methods, but climbable for the large mild-moderate majority. The Indian conflation: the subcontinent's folk-taxonomy runs 'mand-buddhi' (the slow child) and 'pagal' (the mad) through one social category, with consequences both ways; the intellectually-disabled adult's psychosis goes untreated because 'he is anyway like that', the family hides the child under the madness's stigma, and the temple-exorcism route receives both. The clinical counter is one teaching sentence: slowness is of the mind's SPEED; madness is of the mind's CONTENT: different conditions, different treatments, and the first needs a teacher's patience and a certificate, not an asylum.",
    steps: [
      "The two dials: intellectual functioning (reasoning, learning, problem-solving) AND adaptive functioning (daily living, communication, social independence), both limited, both from the developmental period, both persistent; one dial alone certifies nothing.",
      "The dissociation principle: the lookalikes split exactly on the dials; learning disorder (one channel narrow, reasoning global), autism without ID (social adaptation low, reasoning intact-or-high), deprivation delay (tested reasoning low, adaptation fast-recovering).",
      "The adaptive dial outranks: the IQ ~70 line is the rough door; the support needs across conceptual, social and practical domains grade the severity and design the plan: the AAIDD/ICD-11/DSM-5 move away from IQ-decimal grading.",
      "The buildable window: 0–6 synaptogenesis at its densest; early intervention builds the ADAPTIVE architecture (communication, self-care, social wiring, learning-to-learn), not the IQ number. The honest literature, and the reason under-5 'delay' gets intervention, not verdicts.",
      "The capacity curve: skills encode through repetition and method (slower, more trials, different teaching) and the adult outcome (work, travel, money, relationships) is the product of thousands of small taught skills, not of an IQ correction.",
      "The deprivation amplifier: un-stimulating environments lower tested reasoning and adaptive performance together; enrichment recovers a substantial fraction, which is why deprivation-delayed children get the trial-before-label, never the certificate first.",
      "The conflation's mechanism-cost: folding slowness and madness into one folk category leaves the dual-diagnosis untreated ('he is anyway like that') and the child hidden. The speed-versus-content distinction is therefore clinical work, not folklore correction.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "cerebral-cortex", name: "Cerebral cortex (the buildable canvas)", role: "The terrain of the 0–6 window's densest synapse formation and experience-dependent refinement: the tissue the repetition-based teaching of ID management works through; diffuse developmental insults land here as slowed circuit-building rather than a punched-out lesion.", grade: "supported" },
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the reasoning executive)", role: "Abstract thinking, problem-solving, planning and judgement: the machinery of the conceptual domain; its developmental pace sets what the reasoning dial can measure, and its slow maturation is why functional (not academic) curricula carry the mild band.", grade: "supported" },
    { id: "hippocampus", name: "Hippocampus (the recording machinery)", role: "New-skill and new-knowledge encoding: the machinery that errorless, step-wise, heavily repeated teaching exploits; the reason 'practiced to independence, maintained by routine' is the operational grammar of every ADL ladder.", grade: "supported" },
    { id: "deep-white-matter", name: "Deep white matter (the network's cabling)", role: "The connectivity that distributed intelligence and processing speed run on: diffuse insults and deprivation slow the whole network rather than punching one hole, which is why ID presents as everything-slower rather than one function missing.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Glutamate", symbol: "Glu", role: "The NMDA-dependent plasticity that makes learning encodeable at all: the buildable window's molecular currency; the teaching-economics of ID (repetition, method, patience) works because this machinery keeps encoding across the whole lifespan, slower but present.", grade: "supported" },
    { name: "GABA", symbol: "GABA", role: "The inhibitory counterweight that shapes the excitation–inhibition balance of synapse formation and pruning in early development, and the pharmacological address of the epilepsy comorbidity, whose seizure-freedom question stands at every review.", grade: "supported", drugConnection: "The anticonvulsant tier for the epilepsy that rides in has no KYP drug lessons: taught here and in the Dual Diagnosis in ID course, route never invented." },
    { name: "Dopamine", symbol: "DA", role: "The fronto-striatal attention-and-reward machinery: the channel whose ADHD overlap makes the distractible lookalike: performance varying wildly with engagement while reasoning sits intact one-to-one.", grade: "proposed", drugConnection: "Stimulants for the ADHD overlap belong to the comorbidity tier: no KYP lessons; recorded in contentGaps." },
  ],
  pathways: [
    {
      id: "buildable-window-pathway",
      name: "The buildable window (developmental programme to capacity curve)",
      steps: [
        { label: "The developmental programme limited", detail: "A genetic syndrome, a prenatal exposure, a perinatal insult, a postnatal infection (or an unidentifiable combination) slows the circuit-building itself" },
        { label: "The 0–6 window opens", detail: "Synaptogenesis at its densest; the learning machine at its most teachable: the years early intervention must not waste" },
        { label: "Repetition encodes the adaptive architecture", detail: "Communication (words, signs, pictures), self-care, social wiring, learning-to-learn: built by daily routines-as-curriculum, trial upon trial" },
        { label: "The adult outcome runs on taught skills", detail: "Work, fixed-route travel, money handling, relationships: the product of thousands of small taught skills, not of an IQ correction" },
      ],
      clinicalManifestation: "The mild-band adult who cooks, travels to work on a fixed bus, manages a phone-based salary instruction and supervises a sheltered-workshop station: capacity built, not IQ restored.",
      grade: "established",
    },
    {
      id: "deprivation-amplifier-pathway",
      name: "The deprivation amplifier (poverty to recoverable delay)",
      steps: [
        { label: "Poverty writes itself into the brain", detail: "Undernutrition, low parental education, un-stimulating environment, institutionalisation: the amplifier that scores on every survey" },
        { label: "Understimulation lowers both dials", detail: "Tested reasoning and adaptive performance fall together in the stimulation-starved child: the compound of malnutrition-and-deprivation" },
        { label: "The enrichment trial", detail: "Stimulation, nutrition and schooling delivered: the institutional natural experiments' lesson: development collapses without stimulation, and partially recovers with it" },
        { label: "Recovery separates the lookalike", detail: "The child who gains fast with stimulation is deprivation-delayed, not ID: trial-before-label, always, before the certificate" },
      ],
      clinicalManifestation: "The neglected or institutional child who surges on the developmental schedule within months of enrichment: the recoverable fraction no IQ number predicts.",
      grade: "established",
    },
    {
      id: "conflation-pathway",
      name: "The conflation (folk taxonomy to untreated illness)",
      steps: [
        { label: "One social category receives both", detail: "'Mand-buddhi' and 'pagal' filed together: the slow child and the mad adult in one stigma slot" },
        { label: "The adult's illness hides", detail: "'He is anyway like that': the treatable depression or psychosis of dual diagnosis dismissed as the baseline slowness" },
        { label: "The child gets hidden", detail: "The concealment reflex (the marriage-of-the-siblings logic) costs the child the schooling and stimulation the development runs on" },
        { label: "Both routes meet the exorcist", detail: "The temple-exorcism tier receives the untreated illness and the hidden child alike" },
      ],
      clinicalManifestation: "The intellectually-disabled adult whose psychosis has gone untreated for years while the family sought the temple route: the speed-versus-content sentence delivered too late.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "buildable-window", time: "Conception to 6 years", title: "The buildable window", description: "The aetiology map lands here (genes, TORCH, alcohol, valproate, iodine, hypoxia, kernicterus, meningitis) and the plasticity circuitry runs at its densest; the presenting signs are the late milestones (walking after 18 months, first words after 2–3 years, phrases after 4) with the regression question asked at every contact.", phase: "onset" },
    { id: "disclosure-years", time: "Ages 3–8", title: "The disclosure years", description: "The nursery-and-school gap becomes undeniable: cannot sit for tasks, cannot hold a pencil, cannot keep the class's pace; the Std 1–3 disclosure point; the before-certify pair (hearing, vision) and the lookalike-separation run here, before any label.", phase: "peak" },
    { id: "school-decade", time: "Ages 6–16", title: "The school-and-skills decade", description: "The placement logic answered functionally (inclusive with resource support, special education, the NIOS open route), the functional curriculum (literacy-to-function, numeracy-to-life, the social-and-safety tier), the pre-vocational workshop culture: placement reviewed yearly, a tool never a verdict.", phase: "duration" },
    { id: "transition-bridge", time: "Ages 16–25", title: "The certification-and-employment bridge", description: "The RPwD medical-board assessment and the ≥40% benchmark; the supported-employment route (job coach, on-site training, fading supervision); the protection curriculum for the gullibility flag; the marriage question asked in whispers.", phase: "peak" },
    { id: "adult-decades", time: "The adult decades", title: "The semi-independent life with support", description: "Open-or-sheltered employment, the family-enterprise station, semi-independent living with support-for-complexity (money, contracts, consent); health maintenance with the rule that illness presents as behaviour: 'he is flapping more today' earns a physical examination first.", phase: "duration" },
    { id: "after-we-die", time: "The parents' later years", title: "The after-we-die horizon", description: "The National Trust guardianship route, the will-and-trust architecture, the sibling's role consented-to-not-assumed, the group-home waiting lists, and the WRITTEN care plan: the document that outlives the parents' voices and lets everyone sleep.", phase: "duration" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Roughly 1% of any population meets the two-dial rule, with methodological bands of 0.5–1.5%; the sex ratio runs mildly male-predominant at 1.2–1.5:1 (partly ascertainment, partly the X-linked syndromes' contribution). The severity pyramid: mild ~85%, moderate ~10%, severe ~3–4%, profound ~1–2%. The modern trend in well-serviced populations: severe-profound proportions falling (perinatal care, newborn screening, rubella and CMV-adjacent prevention) while mild-band identification rises with school demands; the academic-load unmasking effect. Aetiology's honest split: severe-profound ID is mostly organic (identifiable syndromes, injuries, metabolic disease); mild ID is substantially polygenic-plus-social: the deprivation-and-education layer that poverty writes into IQ-and-adaptation.",
    indianPrevalence: "Community surveys and the NSSO-adjacent estimates place intellectual disability in the 1–3% band (survey-method-dependent): over a crore, 10+ million Indians, and the largest disability group seeking certificates in most districts. The cause-layer differs from the West: a heavier preventable share (historical iodine deficiency in the sub-Himalayan goitre belt before iodisation; congenital hypothyroidism without universal newborn screening; kernicterus from Rh-incompatibility and G6PD; perinatal hypoxia's institutional gaps; CNS infections; maternal undernutrition) plus the deprivation-amplification layer: the malnutrition-stimulation compound of poverty.",
    lifetimeRisk: "Recurrence answered honestly by cause: most isolated mild-ID cases are polygenic with low recurrence (~3–5%); the identifiable syndromes carry their own genetics. Down's recurrence low after a free trisomy 21 and higher after a translocation (karyotyping matters), fragile X's X-linked pattern, the metabolic diseases' quarter-risk tiers: the genetic-counselling value of identifying the CAUSE, beyond the intellectual satisfaction.",
    genderRatio: "1.2–1.5:1 male-predominant; partly ascertainment bias, partly the X-linked syndromes' genuine contribution.",
    ageOfOnset: "The developmental period, by definition: the limitations are present from the earliest trajectory, though the DISCLOSURE clusters at ages 3–8 (the Std 1–3 academic-unmasking point), and the under-2 label is premature unless profound-and-syndromic.",
    indianNotes: "The service reality: special-educator and psychologist density is metro-concentrated; the actual delivery system is the district's disability board (the medical board for certification), the anganwadi-and-ASHA frontline (the detection tier), and the growing NGO/special-school tier, with the National Trust's frameworks (Niramaya, guardianship, the Disha and Vikaas scheme era) as the statutory spine most families have never been told about.",
  },
  etiology: [
    { category: "genetic", factor: "The genetic tier", details: "Down syndrome (trisomy 21 (the commonest identifiable cause, risk rising with maternal age), fragile X (the commonest inherited cause of ID in boys) the family's 'many quiet boys' history), countless single-gene metabolic-and-syndromic causes (phenylketonuria the classic preventable-by-screening), and copy-number variants; the Indian consanguinity layer raises the syndrome-risk that genetic counselling addresses." },
    { category: "biological", factor: "Prenatal: infections, exposures, nutrients", details: "The TORCH tier (rubella, CMV, toxoplasmosis, syphilis, HIV); alcohol (the fetal alcohol spectrum, an under-recognised Indian preventable layer), anticonvulsants (valproate's neural-tube-plus-neurodevelopmental ledger), radiation, lead-and-mercury, untreated maternal hypothyroidism; iodine deficiency (the cretinism tier, largely conquered by iodised salt, the historical lesson) and folate deficiency (the neural-tube layer)." },
    { category: "biological", factor: "Perinatal and postnatal: the injury tier", details: "Hypoxic-ischaemic injury (the birth-asphyxia tier (the Indian institutional-gap layer), extreme prematurity and very-low-birth-weight, kernicterus (the jaundice-that-was-never-treated, Rh-incompatibility and G6PD) 'the yellow went to the brain'), neonatal hypoglycaemia and sepsis; then CNS infections (bacterial meningitis, viral encephalitis, cerebral malaria), head injuries, lead exposure (the surma-and-industrial tier), chronic severe malnutrition-and-stimulation-deprivation, hypothyroidism-presenting-in-childhood, and the post-meningitis deafness-plus-cognitive compound." },
    { category: "social", factor: "The psychosocial amplifier", details: "Poverty, parental education, un-stimulating environment, institutionalisation: the mild-ID amplifier that scores on every survey; the clinical translation: deprivation-delayed children RECOVER substantially with enrichment, so do not certify what stimulation has not yet been tried on." },
  ],
  symptomClusters: [
    {
      category: "1. The presenting child (what families bring)",
      symptoms: ["Late milestones: the head-late, sit-late, talk-late sequence: walking after 18 months, first words after 2–3 years, phrases after 4", "The nursery/school years' gap: cannot sit for tasks, cannot hold a pencil, cannot keep the class's pace; the Std 1–3 disclosure point", "The social-skill gap: plays younger, is led by younger children, gullibility-and-trust beyond age", "The self-care lag: dressing, toileting, eating-utensil mastery arriving years late", "The behaviour layer that rides frustration: tantrums, the 'stubborn' label; the communication-gap's exhaust, not the condition's core"],
    },
    {
      category: "2. The functional bands (the severity that plans)",
      symptoms: ["Mild (~85%): academic ceiling around primary level with special methods; adult band: semi-independent living with support-for-complexity (money, contracts, medical consent), open-or-sheltered employment realistic (packing, gardening, kitchen-assistant, data-entry-with-training, tailoring, delivery-with-fixed-routes), relationships-and-marriage realistic for many WITH support, against the exploitation watch-list", "Moderate (~10%): academic ceiling pre-primary (basic sight-words, money-as-tokens); full supervision for safety-and-money; communication from short sentences to AAC-and-signage; supported employment (the supervised workshop, the family-enterprise station); daily-living skills teachable to good independence with years of training", "Severe (~3–4%): communication basic-to-symbolic; mobility usually preserved; full support for daily living. The training targets are comfort, the communication channel, basic self-care participation and the long-term architecture", "Profound (~1–2%): the medical-complexity co-travel (epilepsy, cerebral palsy, sensory impairment, the multi-disability tier); custodial-plus-engagement care; the ethics architecture of comfort and inclusion in family life"],
    },
    {
      category: "3. The comorbid tourists (what else rides in)",
      symptoms: ["Epilepsy: the seizure-freedom question at every review", "Cerebral palsy (the motor tier) and sensory impairment: the audited-and-corrected layer behind the screen-before-certify rule", "Autism's co-occurrence. ID-autism the classic overlap, both diagnoses able to stand", "The behavioural-symptom layer: self-injury, aggression, the ADHD-overlap", "Mental illness at ABOVE general-population rates in adults with ID: depression, psychosis, the under-treated because under-recognised (the dual-diagnosis territory)"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "ICD-11 / DSM-5 (logic paraphrased)",
      code: "Disorder of intellectual development",
      criteria: [
        "Deficits in general mental abilities (reasoning, problem-solving, abstract thinking, academic learning, experiential learning) the intellectual dial.",
        "Deficits in adaptive functioning across the three domains: conceptual (language, reading, money, time), social (interpersonal skills, social responsibility, gullibility), practical (personal care, occupational skills, travel, safety); the adaptive dial.",
        "Onset in the developmental period, both dials limited from the early trajectory, persisting; the under-2 caution holds ('delay is a FLAG not a verdict' unless profound-and-syndromic).",
        "Severity specifiers (mild, moderate, severe, profound) assigned on ADAPTIVE-domain performance, not IQ decimals: the AAIDD-lineage support-need logic the modern systems deliberately adopted; IQ ~70 remains only the rough door that first raises the question.",
      ],
      duration: "Lifelong by definition: the developmental-period onset is what separates ID from the acquired cognitive injuries of adulthood.",
      indianNote: "The certification route runs through the district medical board's IQ-plus-adaptive assessment with the percentage logic: ≥40% the benchmark tier that unlocks the benefit spine; the instruments are the Binet-Kamat (reasoning) and the VSMS (adaptive), read with culture-language-literacy humility: a score earned in the wrong language is a number, not a verdict.",
    },
    {
      system: "The assessment sequence",
      code: "Seven steps, in order",
      criteria: [
        "The developmental history: milestone-by-milestone WITH the regression question; any lost skill, at any age, earns the metabolic-degenerative hunt; the pregnancy-birth-illness timeline; the family pattern (fragile X's 'many quiet boys', the consanguinity loop).",
        "The medical examination: dysmorphism review (the syndromic gestalt), skin (the hypopigmented ash-leaf of tuberous sclerosis, the café-au-lait of NF1), the motor system (CP's tone-and-reflex audit), growth and head circumference, and the before-certification mandatory pair, vision-and-hearing.",
        "Intellectual assessment with Indian instruments: the developmental schedules and developmental-quotient logic for under-5s; the Binet-Kamat for the verbal-and-literate; performance-and-non-verbal batteries (the Seguin form-board and Bhatia lineage, Raven's-type matrices) for the non-literate-and-language-disordered.",
        "Adaptive assessment: the Vineland Social Maturity Scale (the Indian-adapted VSMS (the social-age/social-quotient logic) and its modern cousins) the diagnosis's second dial and the planning's primary instrument.",
        "The tiered cause-hunt: karyotype-and-fragile-X for the syndromic-and-familial; TSH-and-lead where the picture hints; metabolic screen where the treatables are plausible; MRI for the microcephalic, the regressing, the focal-exam, with the newborn-screening advocacy for the next sibling.",
        "The lookalike-separation (the differential table), before certification, always.",
        "Certification: the medical board's assessment, the percentage-and-benchmark logic, the disability certificate and the UDID's growing digital spine.",
      ],
      duration: "The buildable window disciplines the tempo: under-5s get the INTERVENTION and a dated re-assessment, not the verdict; the certification decision waits for the dials to be measurable in the child's own language-and-literacy.",
      indianNote: "The recurring Indian waste: the 'reassess at 5' note written without the intervention-referral; a buildable year lost to the letter's politeness; the intervention letter and the re-assessment date go on the same page.",
    },
  ],
  severityScales: [
    {
      name: "Binet-Kamat",
      fullName: "Kamat's Indian adaptation of the Binet scales: the reasoning dial",
      measures: "Tested intellectual functioning in the verbal-and-literate child and adult: the rough door's instrument, never the definition's.",
      ranges: [],
      indianNote: "The score read with culture-language-literacy humility: a number earned in the wrong language is a number, not a verdict. The performance batteries exist precisely for this correction.",
    },
    {
      name: "VSMS",
      fullName: "Vineland Social Maturity Scale (Indian adaptation. Malin's lineage)",
      measures: "The adaptive dial: social age and social quotient across daily living, communication, social independence and occupational capacity.",
      ranges: [],
      indianNote: "The classic Indian-adapted adaptive instrument, with Binet-Kamat on the other dial, the pair that the certification boards' percentage assessments are built on.",
    },
    {
      name: "The support-band ladder",
      fullName: "Severity by support needs: the AAIDD/ICD-11/DSM-5 logic",
      measures: "Adaptive-domain support needs across conceptual, social and practical functioning: the severity that PLANS.",
      ranges: [
        { min: 0, max: 0, severity: "Mild (~85%)", action: "Academic ceiling around primary level with special methods; adult band: semi-independent living with support-for-complexity, structured employment realistic, relationships-and-marriage realistic for many WITH support and the exploitation watch-list attached" },
        { min: 1, max: 1, severity: "Moderate (~10%)", action: "Academic ceiling pre-primary (sight-words, money-as-tokens); full supervision for safety-and-money; communication from short sentences to AAC; supported employment; daily-living skills teachable to good independence with years of training" },
        { min: 2, max: 2, severity: "Severe (~3–4%)", action: "Communication basic-to-symbolic; mobility usually preserved; full support for daily living. The training targets are comfort, the communication channel, basic self-care participation and the long-term architecture" },
        { min: 3, max: 3, severity: "Profound (~1–2%)", action: "The medical-complexity co-travel (epilepsy, cerebral palsy, sensory impairment); custodial-plus-engagement care; comfort, inclusion in family life and the system's support obligations as the ethics architecture" },
      ],
      indianNote: "The certification board converts the functional bands into the percentage assessment: ≥40% the benchmark disability tier that unlocks pension, concessions, Niramaya, guardianship and the 4% government-job reservation.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Mental illness (the 'madness' conflation)", distinguishingFeatures: "The content-versus-speed distinction: delusions and hallucinations are illness, not slowness; ID's cognition is slow-but-reality-anchored, while the dual-diagnosis overlap genuinely exists and both conditions are treated.", keyDifferentiator: "The teaching sentence: slowness is of the mind's SPEED, madness of the mind's CONTENT; different conditions, different treatments." },
    { condition: "Specific learning disorder", distinguishingFeatures: "One academic channel narrow (reading, writing, arithmetic) with reasoning-and-adaptive globally intact: the isolated deficit against ID's global limitation.", keyDifferentiator: "The dial pattern: the learning-disordered child's reasoning and adaptive functioning hold; only the single channel narrows." },
    { condition: "Autism without ID", distinguishingFeatures: "The social-reciprocity profile with reasoning intact-or-high; adaptation limited socially but not globally-practical, and the co-occurrence frequent enough that both diagnoses can stand together.", keyDifferentiator: "The social domain's specific deficit against ID's three-domain (conceptual-social-practical) global pattern." },
    { condition: "Sensory impairment (deafness, blindness)", distinguishingFeatures: "The language-starved deaf child tests low until the channel is fixed. The mis-certification the screen-before-certify rule exists to prevent.", keyDifferentiator: "Vision-and-hearing tested, and corrected, BEFORE any intellectual verdict is written." },
    { condition: "Deprivation / stimulation-deficient delay", distinguishingFeatures: "Institutional-or-neglect history; the child who gains fast with stimulation is deprivation-delayed, not ID.", keyDifferentiator: "The recovery-with-enrichment test: trial-before-label; do not certify what stimulation has not yet been tried on." },
    { condition: "Borderline intellectual functioning", distinguishingFeatures: "IQ 70–85 with adaptive-functioning strained-but-coping: the school-struggle tier.", keyDifferentiator: "Educational support rather than the full ID architecture; the coping-at-the-margin adaptive pattern separates it." },
    { condition: "Developmental delay (the under-5 caution)", distinguishingFeatures: "Under-2s especially: delay is a FLAG, not a verdict. The permanent label is premature unless the picture is profound-and-syndromic.", keyDifferentiator: "Early intervention plus dated re-assessment, not certification; the buildable window's discipline." },
    { condition: "Progressive / metabolic disorders (the regression tier)", distinguishingFeatures: "Skills LOST, not slowly-gained: the deterioration that changes the prognosis and the workup.", keyDifferentiator: "The 'any lost skill' rule: regression at any age triggers the metabolic-degenerative hunt (the treatables: PKU, hypothyroid, the degenerative list)." },
    { condition: "ADHD", distinguishingFeatures: "The distractible child whose performance varies wildly with engagement; reasoning intact one-to-one.", keyDifferentiator: "The engagement test: the one-to-one assessment reveals the reasoning the classroom never sees." },
    { condition: "Epilepsy's interictal-and-drug fog", distinguishingFeatures: "Untreated seizures and the anticonvulsant load both depress measured cognition.", keyDifferentiator: "The seizure-control and drug-load audits run before any cognitive verdict is signed." },
  ],
  management: [
    { category: "lifestyle", name: "Early intervention (0–6, the buildable window)", description: "Stimulation-and-development programmes (home-visit and centre models), milestone-targeted training, parent-coached handling: the daily-living routines AS the curriculum (bathing, feeding, dressing are the therapy hours); communication-first: speech therapy where language is emerging, AAC-and-signs-and-pictures where it is not; the disability-specific medical care (seizure control, nutrition, sensory corrections, syndrome-specific surveillance).", whenToUse: "From the first identified delay: the earlier the better, and never deferred to 'reassess at 5'.", indianContext: "The DEIC-RBSK centres and the National Trust's Disha-scheme tier; the anganwadi-linkage potential; the NGO-and-parent-network under-6 units; and the honest default: the parent-trained-at-home-plus-monthly-review model that outperforms the no-programme vacuum." },
    { category: "lifestyle", name: "School-and-education (the placement logic, answered functionally)", description: "The child who holds the inclusive classroom's pace-with-support goes inclusive (resource-room-and-remedial tier, the RPwD education-right backing); the child who cannot goes special education (the slow-paced, skill-loaded curriculum); the NIOS-open-route for the middle band's board years. The functional curriculum: literacy-to-function (forms, bus-boards, messages), numeracy-to-life (money, change, time-telling), the social-and-safety curriculum (stranger-rules, body-rules), the pre-vocational layer (the habit of work itself).", whenToUse: "From school entry, reviewed YEARLY: placement is a tool, not a verdict; neither placement is morally superior, the child's learning rate decides.", indianContext: "The admission battle ('we don't take such children'), the shadow-educator compromise, the teacher-briefing letter carrying the communication-first handling instructions, and the anti-corporal-punishment vigilance: the punishment-of-the-un-teachable is the Indian school's recurring wound." },
    { category: "lifestyle", name: "Skills-and-vocational training (the adult-outcome engine)", description: "The ADL ladder (dressing-toileting-hygiene-cooking-money-travel, each skill taught in steps, practiced to independence, maintained by routine, the visual-schedule supports, the fixed-route travel training); vocational assessment-and-training: the sheltered-workshop tier (the NGO-enterprise units: baking, candle-making, data-entry, gardening, printing) → supported employment (the job-coach model: placement with on-site training-and-fading support) → the family-enterprise station (the shop's inventory-counter. The Indian default that works); the self-advocacy-and-protection curriculum for the mild band's adolescence (body-and-consent rules, the money-and-exploitation rules, the marriage-and-relationship education).", whenToUse: "Across the school-and-transition years, accelerating at 16-plus when the certification-and-employment bridge opens.", indianContext: "The RPwD's 4% government-job reservation (the benchmark-certification tier), the private-sector disability-hiring programmes' growing tier, and the honest counsel: the STRUCTURED job (routine, clear tasks, kind supervision) matters more than the salary; the structure is the disability-management." },
    { category: "psychotherapy", name: "The behaviour-and-mental-health layer", description: "The behaviour's communication-first analysis (what is the behaviour SAYING, pain, boredom, demand, illness?); the mental-illness recognition-and-treatment of dual diagnosis (depression, psychosis, at above general-population rates, under-treated because under-recognised); the medication's careful roles: for epilepsy, for the severe-self-injury-and-aggression bands with monitoring, never for 'the ID itself'.", whenToUse: "Whenever behaviour changes (after the medical screen, illness presents as behaviour) or the mental-state screen flags; reviewed at every contact.", indianContext: "The dual-diagnosis discipline crosses here to the Dual Diagnosis in ID course; the 'he is anyway like that' sentence retired from the family's and the clinician's vocabulary alike." },
    { category: "lifestyle", name: "Health maintenance (the under-treated layer)", description: "The syndrome-specific surveillance (the genetic-syndromes tier); the general health's aggressive care: the under-treated-pain-and-illness pattern of adults with ID, where illness presents as behaviour ('he is flapping more today' earns a physical examination, not a behavioural label); the dental-and-sensory-and-nutrition audits; the transition-to-adult-medicine architecture.", whenToUse: "Lifelong, at every review: the seizure-freedom question, the vision-and-hearing re-audit, the dental tier, the bowel-and-pain screen behind every behaviour change.", indianContext: "Niramaya insurance (₹50–100/year premium-capped family cover to ₹1 lakh) exists precisely because this population's health costs cluster where income does not; enrolment is part of treatment." },
    { category: "lifestyle", name: "The family-and-lifetime architecture", description: "The parent-training-and-support spine (the parents-as-therapists model WITH respite; the parent organisations as the emotional-and-informational backbone); the certification-and-benefits navigation (the scheme list on one page); the long-term-planning conversation: the guardianship-and-wills-and-trust tier, the sibling's role-and-burden conversation held EARLY-and-openly, the written care-plan that outlives the parents' voices; the genetic counselling for the diagnosable (the recurrence numbers, the next-pregnancy screening options).", whenToUse: "From diagnosis onward: the 'after we die' conversation held EARLY, in the open, and written down, not at the 2 a.m. crisis.", indianContext: "The National Trust's legal-guardsianship registration (the limited-guardianship's modern position), the group-home-and-supported-living landscape's Indian reality (sparse, NGO-tier, metro-concentrated) and its improving trajectory: the plan's existence is the family's sleep-improver." },
  ],
  safety: {
    redFlags: [
      "Any lost skill, at any age: regression: the metabolic-degenerative hunt runs BEFORE any label settles (the treatables: PKU, hypothyroidism, the degenerative syndromes)",
      "Behaviour change in severe-communication-limitation is an illness signal: 'he is flapping more today' earns a physical examination (pain, infection, constipation, dental) before a behavioural label; under-treated pain and illness is this population's pattern",
      "Uncontrolled seizures: the seizure-freedom question at every review; untreated epilepsy erodes the developmental trajectory itself, and the anticonvulsant-load audit precedes any cognitive verdict",
      "The exploitation of the vulnerable adult: the 'friend' who borrows and never returns, the marriage-dowry-and-then-abandoned patterns: the protection curriculum and the RPwD's legal remedies are urgent care, not paperwork",
      "The beating-for-not-learning school: punishment-of-the-un-teachable adds a trauma layer to the developmental one; the teacher-briefing letter first, the placement-review next, the child-protection route where it continues",
      "Untreated severe neonatal jaundice: 'the yellow went to the brain': the kernicterus question (Rh-incompatibility, G6PD) that both explains this child and protects the next",
    ],
    urgentGuidance:
      "The order of operations: (1) regression at any age → the metabolic-degenerative hunt now, the label deferred; (2) behaviour change → the medical screen first: illness presents as behaviour in this population, and the pain-and-infection-and-dental tier is treated before the behavioural interpretation; (3) seizures → seizure-freedom pursued actively and reviewed at every visit; (4) vision-and-hearing before ANY certification: the screen-before-certify rule that prevents the classic mis-certification; (5) exploitation disclosed → the protection curriculum, the joint-holder salary architecture and the RPwD legal tier engaged the same week; (6) no family leaves the consultation without the scheme page: the certificate-and-benefit information gap is itself a treatment gap.",
  },
  drugLinks: [],
  contentGaps: [
    "The anticonvulsant tier for the epilepsy comorbidity (the seizure-freedom question at every review) has no KYP drug lessons. The pharmacology is taught here and cross-referenced to the Dual Diagnosis in ID course; route never invented.",
    "The carefully monitored medication tier for the severe-self-injury-and-aggression bands (real pharmacology with real risks, deliberately held to the comorbidity tier and never for 'the ID itself') has no KYP lessons; the no-medicine-treats-ID law is taught in this course's management section.",
    "The comorbid-depression and psychosis pharmacology (SSRIs, antipsychotics) is not linked: the twelve KYP drug lessons exist, but this note assigns them no ID-specific role; the clinical architecture lives in the live Depressive Disorders and Schizophrenia courses riding on the Dual Diagnosis in ID frame, a cross-reference rather than a drugLink.",
    "The treatable-cause tier: thyroid replacement for congenital hypothyroidism, the PKU diet, valproate's pregnancy-prevention ledger (the neural-tube-plus-neurodevelopmental account held in the live Bipolar Disorders course); has no KYP drug lessons; the prevention logic is taught in this course's aetiology section.",
    "The 'brain-power tonics and syrups' commerce is documented as a refusal, not a route: no marketed brain tonic treats intellectual disability, and the consultation that leaves it unchallenged fails the family's money and the child's years.",
  ],
  patientGuide: {
    whatIsIt:
      "Your child learns slower: the mind's speed, not the mind's content. Intellectual disability means BOTH the reasoning (learning, problem-solving, understanding) AND the everyday-living skills (dressing, money, safety, relationships, work) are behind, from early childhood, and will remain behind in some measure for life. It is a developmental condition, not madness, not a curse, not anyone's fault, and not something you did or failed to do. The number a test gives is the SPEED, not the ceiling: the skills taught over the next ten years will decide your child's adult life far more than any score will.",
    whatCausesIt:
      "For a large share of families the honest answer is a timing map, not a single villain: something in the pregnancy (a genetic pattern like Down syndrome, an infection, alcohol or certain medicines, iodine or nutrition), at birth (a difficult delivery, severe jaundice, prematurity), or in early childhood (meningitis, malaria affecting the brain, injury, lead, or (very importantly) too little nutrition and stimulation). Often it is an unidentifiable combination. Where we can find the cause we tell you, because a known cause answers the questions about your NEXT child, even when it changes nothing for this one.",
    symptoms:
      "The early signs: walking late (after 18 months), first words late (after 2–3 years), phrases later still; playing with younger children and being led by them; trusting too easily; self-care arriving years late. At school: cannot sit for tasks, cannot hold a pencil, cannot keep the class's pace. The gap usually becomes undeniable around Std 1–3. Frustration shows as tantrums and the 'stubborn' label. That is the communication gap's exhaust, not naughtiness. The bands: most affected children (about 85%) are in the MILD band; slower learners who, with teaching, grow into adults who work, travel, manage money with help, and for many, marry and raise families with support. Smaller numbers need more help, down to the small profound group with additional medical problems.",
    treatment:
      "No medicine treats the slowness itself. The syrups marketed for 'brain power' are commerce. The real treatment is what you deliver daily: early intervention in the buildable first years (your daily routines (bathing, feeding, dressing) ARE the therapy hours), schooling matched to your child's pace (inclusive school with support where the pace holds; special school where it cannot: reassessed yearly), skills training toward work and semi-independent living, and the certificate route: the RPwD 2016 disability certificate (above 40%, the 'benchmark' tier) unlocks the pension, travel concessions, Niramaya health insurance, guardianship frameworks and reservation provisions. Medicines DO have honest roles (for seizures, for treatable causes like thyroid, and for specific mental-health problems that can ride along) prescribed carefully and reviewed regularly.",
    selfHelp: [
      "The routines-are-curriculum rule: bathing, feeding and dressing, done slowly, narrated, with the child participating at each step; twenty structured minutes beat an hour of unstructured worry.",
      "Communication first: words where words come, signs-and-pictures where they do not. The channel matters more than the form.",
      "Take the child everywhere: the hidden child stays home unstimulated; the exposure-and-schooling IS the treatment: the family's social machinery is negotiable, the buildable years are not.",
      "Ask for the scheme page: the certificate, the pension, the concessions, the Niramaya card, the guardianship route; written on one page, updated annually; families are rarely told the full list.",
      "Watch the behaviour that means illness: a child who cannot say 'my ear hurts' will show it (flapping more, refusing food, banging) get the physical check before the behavioural label.",
      "Begin the 'after we die' plan early and write it down: the guardianship route, the will, the sibling's consented (not assumed) role, his routines, his medicines, his people; the plan is what lets everyone sleep.",
      "Protect without hiding: the money rules, the body-and-consent rules, the 'friend asking for money' scripts; rehearsed with role-play, because gullibility is the mild band's real risk.",
    ],
    whenToSeekHelp: [
      "Any skill your child HAD and has LOST: words, walking, feeding: the regression rule; medical assessment now, not reassurance",
      "A behaviour change you cannot explain: the illness-behind-behaviour rule: pain, infection, constipation and dental problems all present as 'behaviour' first",
      "Any seizure or suspected seizure: the seizure-freedom question changes the whole developmental trajectory",
      "Exploitation disclosed or suspected: the borrowing 'friend', the marriage-dowry-then-abandoned pattern: the legal protections work best early",
      "Punishment at school for not learning: that is not teaching; the teacher-briefing letter, the placement review, and where it continues, the child-protection route",
      "The family's own exhaustion: the caregiver's collapse is the treatment's load-bearing wall failing; the respite tier and the parent organisations exist for exactly this",
    ],
    indianResources: [
      "The district medical board: the RPwD certification-and-UDID route; the certificate itself is nominal in cost, the UDID card is free; ask the treating team for the scheme page",
      "The National Trust tier. Disha early-intervention and Vikaas day-care schemes, Niramaya health insurance (₹50–100/year, family cover to ₹1 lakh), and the legal-guardsianship registration",
      "The government DEIC-RBSK early-intervention centres (subsidised) and the local anganwadi: the frontline that can detect, teach and re-enrol",
      "The parent organisations and special schools: the informational and emotional backbone; the local-and-national networks the National Trust registers",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "The RPwD Act 2016 certification framework governs: the district medical board's percentage assessment (IQ plus adaptive functioning), the ≥40% benchmark-disability tier, the UDID card's digital spine, with the National Trust Act framework alongside (Niramaya insurance, legal guardianship registration, the Disha and Vikaas schemes). Clinical classification follows ICD-11's disorder-of-intellectual-development terminology with DSM-5's severity-by-support logic; the delivery spine is the DEIC-RBSK early-intervention architecture plus the anganwadi-and-ASHA frontline.",
    systemContext: "The family typically meets the system at the anganwadi (the detection tier), the paediatric OPD (the 'reassess at 5' tier), or the district hospital, and the certification at the district medical board. Specialist density is metro-concentrated; the actual delivery system is the NGO-and-special-school tier plus the parents themselves. The first session's three sentences decide a family's decade: (1) the naming-and-de-shaming; 'your child learns slower, not worse; this is a developmental condition, not madness, not anyone's curse, not your fault'; (2) the capacity frame: 'the number I measured is the speed, not the ceiling; the skills we teach in the next ten years decide his adult life far more than the number does'; (3) the architecture sentence: 'there is a certificate route and a set of government supports that most families are never told about; we will walk that route together'. The guilt-and-blame triage (the in-laws' 'her family's blood' theories, the mother's silent self-accusation) is treatment-work, not bedside manner.",
    programmeContext: "The RPwD benefit spine: the state disability pension (₹300–2,000+/month, state-variable, the NSAP-and-state schemes), rail travel concessions at 50–75% with escort provision, Niramaya insurance (₹50–100/year premium-capped, family cover to ₹1 lakh), the 4% government-job reservation for the benchmark tier, and the National Trust's guardianship registration. The early-intervention tier: the DEIC-RBSK centres, the Disha scheme's under-6 window, the Vikaas day-care scheme; the NIOS open route for the middle band's board years.",
    costConsiderations: "India, approx 2026: early-intervention-and-special-education at NGO-and-private tier ₹500–3,000/month (the government DEIC-and-scheme tiers subsidised); speech-and-OT sessions ₹400–1,000 each; the certification route itself nominal, the UDID card free; the disability pension state-variable at ₹300–2,000+/month. The recurring Indian failure is not the cost. It is the family that never gets TOLD about the benefit spine; the certificate's-and-scheme's information gap is itself a treatment gap, and the scheme list on one page is the highest-yield prescription in this field.",
    culturalConsiderations: "The subcontinent's folk-taxonomy files 'mand-buddhi' (the slow one) and 'pagal' (the mad) in one social category, with consequences both ways: the adult's treatable psychosis dismissed as 'he is anyway like that', the child hidden under the madness's stigma, and the temple-exorcism route receiving both. The teaching sentence (worth saying verbatim): slowness is of the mind's SPEED; madness is of the mind's CONTENT: different conditions, different treatments. The hide-the-child pressure (the marriage-of-the-siblings-needs-no-disabled-sibling-in-the-photo logic) costs the CHILD the stimulation-and-education development runs on: the clinical counter is practical, not ideological. The marriage question deserves honest architecture, not whispers: many adults with mild ID marry, sustain families and parent with support; the partner's right-to-know, the consent-and-vulnerability assessment (understood-and-willing versus family-arranged-and-compliant), the contraception-and-parenting planning, and the protection-against-exploitation watch (the marriage-dowry-then-abandoned patterns of the exploited mild-ID woman, with the RPwD's legal remedies). The sibling carries the family's invisible load: the early-and-open version (the written plan, the sibling's CHOICE honoured, the professional-and-legal structure that does not depend on one person's lifetime sacrifice) protects both. And the 'after we die' conversation, held EARLY: the guardianship route, the financial architecture, the living arrangement's information, the WRITTEN care-plan.",
    patientCounselling: [
      "The first-session script: 'He learns slower, not worse; this is a developmental condition, not madness, not a curse, not your fault; the skills we teach over the next ten years will matter far more than the number on any test.'",
      "The arithmetic-of-delay script (for the 'he will catch up on his own' family): 'He climbs with help; without help the gap widens': the conversion, not the dismissal.",
      "The scheme page: the certificate route, the pension, the concessions, the Niramaya enrolment, the guardianship registration; written on one page, kept in the clinic file, updated annually.",
      "The school-negotiation script: the admission battle, the shadow-educator compromise, the NIOS route, and the no-beating line: a child who cannot meet a pace cannot be beaten into it; no syllabus is worth the trauma.",
      "The marriage-question script: honesty as protection; the disclosure's ethics, the consent assessment, and the exploitation watch; 'never' and the family-arranged silence are both wrong answers.",
      "The after-we-die script: 'The plan, not the reassurance'; guardianship, the will, the sibling's consented role, the written care-plan; 'we hold this conversation early, in the open, and write it down'.",
    ],
  },
  decisionPath: {
    title: "The child who is 'just slow', from first concern to the entitlement spine",
    nodes: [
      {
        id: "start",
        question: "A child or adult presented with developmental slowness. First: the age, and the regression question.",
        branches: [
          { label: "Any lost skill, at any age", next: "regression-path" },
          { label: "Under 5, no regression", next: "early-window-path" },
          { label: "School-age, the gap now visible", next: "school-gate" },
          { label: "Adult: certificate, work, protection", next: "adult-gate" },
        ],
      },
      {
        id: "regression-path",
        question: "The regression tier: skills lost, not slowly-gained.",
        recommendation: "The 'any lost skill' rule: the metabolic-degenerative hunt runs BEFORE any label; the treatables (PKU, hypothyroidism, the degenerative syndromes' list) and the MRI for the microcephalic, the regressing, the focal-exam; the certificate question deferred until the hunt is exhausted.",
      },
      {
        id: "early-window-path",
        question: "The buildable window: under-5 delay is a FLAG, not a verdict. Has the before-certify pair been run?",
        branches: [
          { label: "Hearing and vision not yet tested", next: "sensory-screen-path" },
          { label: "Sensory screens done and clear", next: "early-intervention-path" },
        ],
      },
      {
        id: "sensory-screen-path",
        question: "The screen-before-certify rule.",
        recommendation: "Vision and hearing tested and corrected BEFORE any intellectual verdict: the language-starved deaf child tests low until the channel is fixed; the classic Indian mis-certification, prevented by one audiology-and-vision referral; then re-assess.",
      },
      {
        id: "early-intervention-path",
        question: "The under-5 discipline: intervention, not labels.",
        recommendation: "The DEIC-referred, mother-coached home programme: the daily routines as curriculum, the 20-minute structured-play slots, picture-and-sign communication where words are sparse; the anganwadi re-enrolment negotiated (the sitting-capacity built, not demanded); the family's 'he will catch up' converted with the gap-widening arithmetic; the 6-month re-assessment DATED, never the bare 'reassess at 5' note.",
      },
      {
        id: "school-gate",
        question: "The Std 1–3 disclosure: the gap is now undeniable. The placement question: answered functionally.",
        branches: [
          { label: "Holds the class's pace with support", next: "placement-path" },
          { label: "Cannot hold, drowning-and-withdrawing", next: "placement-path" },
          { label: "Behaviour or mental-illness flags", next: "dual-diagnosis-path" },
        ],
      },
      {
        id: "placement-path",
        question: "The placement answered by learning rate, not philosophy.",
        recommendation: "The pace-holder goes inclusive (resource-room-and-remedial tier, the RPwD education-right backing); the drowning child goes special education (the slow-paced, skill-loaded curriculum), with the NIOS-open-route for the middle band's board years. The functional curriculum runs in both: literacy-to-function, numeracy-to-life, the social-and-safety tier, the pre-vocational habit of work. Reviewed YEARLY: a tool, never a verdict; and the teacher-briefing letter (short tasks, visual supports, the no-beating line) travels with the child.",
      },
      {
        id: "dual-diagnosis-path",
        question: "The behaviour-and-mental-health layer.",
        recommendation: "The medical screen FIRST (illness presents as behaviour, pain, infection, dental, constipation treated before interpretation); then the behaviour's communication-first analysis; then the mental-illness recognition: 'he is anyway like that' retired, the depression-and-psychosis tier treated; the medication careful and monitored (epilepsy, severe bands), never for the ID itself: the Dual Diagnosis in ID course's full account.",
      },
      {
        id: "adult-gate",
        question: "The adult with ID: the family's three questions; certificate, job, and what after me.",
        branches: [
          { label: "The certificate-and-benefits spine", next: "certificate-path" },
          { label: "Work, and the vulnerable adult's protection", next: "employment-path" },
          { label: "The marriage question / after-we-die", next: "family-path" },
        ],
      },
      {
        id: "certificate-path",
        question: "The RPwD route: the highest outcome-per-clinic-hour in this field.",
        recommendation: "The medical board's IQ-plus-adaptive assessment → the disability certificate with the ≥40% benchmark tier → the UDID card; then the applications run the same month: the state disability pension, the rail travel concessions, the Niramaya enrolment, the National Trust-registered organisation's membership, and the scheme page on one prescription, because the family that is never told is the recurring Indian failure.",
      },
      {
        id: "employment-path",
        question: "Work and protection, run together.",
        recommendation: "Supported employment: the job-coach placement with on-site training and fading supervision (the evidence-realistic bridge between the sheltered workshop and the open market), with the structure-kit: the visual task-list, the fixed shift, the named supervisor, the workplace buddy. In parallel the protection curriculum: the money rules (salary into the bank, the father as joint-holder), the 'friend-asking-for-money' scripts, the body-and-consent rules; the gullibility flag predicts the exploitation risks.",
      },
      {
        id: "family-path",
        question: "The marriage question and the after-we-die plan.",
        recommendation: "The marriage question's honest architecture: the partner's right-to-know, the consent-and-vulnerability assessment, the contraception-and-parenting-with-support planning, the exploitation watch. The after-we-die plan, held EARLY and written: the National Trust guardianship route (the limited-guardianship position), the will-and-trust with the property's settled-with-protections logic, the sibling's role CONSENTED-to-not-assumed, the group-home waiting-list information, and the written care-plan; the document that outlives the parents' voices.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Certifying on an IQ number earned in the wrong language or literacy",
      why: "A child tested in a language she does not own produces a number that measures the test's fit, not her mind. The score then follows her through every school gate and benefit board for life.",
      correction: "The culture-language-literacy humility rule: match the instrument (Binet-Kamat for the verbal-and-literate; Seguin-form-board, Bhatia and matrices-type batteries for the non-literate) and read every score as a number, not a verdict.",
    },
    {
      mistake: "The deaf child certified as intellectually disabled",
      why: "The language-starved child tests low until the channel is fixed: the mis-certification that spends a lifetime correcting a hearing problem with an educational label.",
      correction: "The screen-before-certify pair: vision and hearing tested, and corrected, before any intellectual verdict is written. The single rule that prevents the classic Indian error.",
    },
    {
      mistake: "Labelling the under-2 (or writing 'reassess at 5' without the referral)",
      why: "The permanent verdict in the buildable window wastes the years of maximal plasticity; the bare 'reassess at 5' note wastes a buildable year with the letter's politeness.",
      correction: "Delay is a FLAG, not a verdict: early intervention now, a DATED re-assessment, and the intervention letter on the same page; under-5s get the intervention, not the label.",
    },
    {
      mistake: "Missing regression",
      why: "Slowly-gained skills are ID's pattern; LOST skills are the degenerative-metabolic tier: the distinction that changes the workup, the prognosis and the next-sibling counselling.",
      correction: "The 'any lost skill' rule at every contact: regression at any age triggers the metabolic-degenerative hunt before any certificate is written.",
    },
    {
      mistake: "The dual-diagnosis blindness: 'he is anyway like that'",
      why: "The treatable depression or psychosis of the adult with ID hides behind the baseline slowness; mental illness runs at ABOVE general-population rates in this population and is under-treated precisely because it is under-recognised.",
      correction: "The mental-state screen at every review, the behaviour's communication-first analysis, and the speed-versus-content distinction applied to the family's own vocabulary.",
    },
    {
      mistake: "The certificate-and-benefit information gap",
      why: "The family that is never told about the RPwD spine (pension, concessions, Niramaya, guardianship, the 4% reservation) loses more outcome-per-consult than any prescription in this field could deliver.",
      correction: "The scheme list on one page, in the clinic file, updated annually: the clinician who writes the certificate-guidance letter and the scheme list together delivers the field's highest-yield clinical act.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The definition-and-severity skeleton: intellectual AND adaptive deficits, developmental onset, the three adaptive domains (conceptual-social-practical, the C-S-P mnemonic), severity by support-need bands per ICD-11's 'disorder of intellectual development' terminology.",
        "The prevalence arithmetic: ~1% (bands 0.5–1.5%), ~85% mild: the 85-10-3-2 pyramid; the aetiology split (severe-profound mostly organic, mild substantially polygenic-plus-social).",
        "The cause-map by timing: the 3 P's: prenatal (genes, TORCH, alcohol, valproate, iodine, folate), perinatal (hypoxia, prematurity, kernicterus), postnatal (meningitis, cerebral malaria, lead, deprivation).",
        "The lookalike-separation in one line each: mental illness (speed-versus-content), learning disorder (one channel), autism (social domain), deafness (screen-before-certify), deprivation (recovery-with-enrichment), borderline (IQ 70–85 coping).",
        "The intervention ladder in order: early intervention → school placement logic → skills-and-vocational → health-and-behaviour → the lifetime architecture; and the RPwD-2016 spine (≥40% benchmark, UDID, pension, Niramaya, guardianship, 4% reservation).",
      ],
      practical: [
        "Take the developmental history milestone-by-milestone WITH the regression question, and demonstrate the family-pattern questions (the fragile X 'many quiet boys', the consanguinity loop).",
        "Map a case's adaptive functioning across the three domains aloud (conceptual (money, time, literacy), social (gullibility, responsibility), practical (travel, self-care, safety)) and assign the support band from it, not from the IQ decimal.",
      ],
      longAnswer: [
        "A 4-year-old with no speech and global developmental delay: approach (the screen-before-certify pair, the under-5 intervention-not-label logic, the tiered cause-workup, the family's three sentences).",
        "Intellectual disability: definition, classification and management, with 'distinguish intellectual disability from mental illness' and 'preventable causes of intellectual disability in India' as the classic riders.",
      ],
    },
    neetPg: {
      highYield: [
        "THE DEFINITION: deficits in BOTH intellectual AND adaptive functioning with developmental onset, one dial alone certifies nothing.",
        "THE SEVERITY RULE: DSM-5/ICD-11 assign mild/moderate/severe/profound on ADAPTIVE-domain support needs (conceptual-social-practical), NOT IQ decimals; the exam favourite of the modern systems.",
        "THE PYRAMID: ~1% prevalence; ~85% mild, ~10% moderate, ~3–4% severe, ~1–2% profound; male predominance 1.2–1.5:1.",
        "THE CAUSE LEADERS: Down syndrome = the commonest IDENTIFIABLE cause (risk rising with maternal age); fragile X = the commonest INHERITED cause in boys; PKU = the classic preventable-by-screening metabolic cause.",
        "THE AETIOLOGY SPLIT: severe-profound mostly organic; mild substantially polygenic-plus-social (the deprivation-and-education layer).",
        "THE SCREEN-BEFORE-CERTIFY PAIR: hearing and vision; the deaf child mis-certified as ID is the classic Indian error.",
        "THE UNDER-5 RULE: 'delay' gets intervention, not the label; regression at ANY age gets the metabolic-degenerative hunt.",
        "THE INDIAN INSTRUMENTS: Binet-Kamat (the IQ dial), VSMS (the adaptive dial), the DDST and Seguin/Bhatia lineages (developmental/performance).",
        "THE PREVENTION LEDGER: iodisation and rubella vaccination the claimed victories; newborn screening (congenital hypothyroid, PKU), perinatal care and kernicterus prevention the open ground.",
        "THE PHARMACOLOGY LINE: no medicine treats ID itself; medicines only for epilepsy, treatable causes, and the severe behavioural bands with monitoring.",
        "THE RPwD SPINE: ≥40% benchmark disability; UDID; pension, concessions, Niramaya (₹1-lakh cover), National Trust guardianship, 4% government-job reservation.",
        "THE CONFLATION BUSTER: ID is the mind's SPEED; psychosis is the mind's CONTENT, with the honest rider that dual diagnosis occurs and is treatable.",
      ],
      pyqConcepts: [
        "The severity-by-support-need move (away from IQ-decimal grading): the single most-tested conceptual point.",
        "Down versus fragile X: identifiable versus inherited: the one-word distinction the examiner wants.",
        "The mandatory before-certification investigations: vision and hearing, not EEG/MRI.",
        "The RPwD benchmark percentage (40%) and the entitlements it unlocks.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 4-year-old Bhopal boy with a district paediatrician's note reading 'global developmental delay, reassess at 5': walked at 20 months, not beyond two words, plays with the 2-year-old neighbour, the anganwadi dropped, the grandmother certain 'his father also spoke late'. The approach: hearing tested first (normal, the before-certify rule), the developmental schedule placing him at 2-year-equivalent, the VSMS-adjacent social-age ~2, no regression, no dysmorphism, normal tone-and-reflexes, TSH normal, a birth history of 'mild jaundice for a week, treated with sunlight-and-ghee' (the retro-unsettlable kernicterus mark). The answer's shape: intervention-not-label; the DEIC-referred mother-coached programme, the picture-and-sign communication begun, the anganwadi re-enrolment negotiated, the family's 'he will catch up' converted with the gap-widening arithmetic, the 6-month re-assessment dated. At 12 months: 20 words plus 30 signs-and-pictures in active use, two-word combinations emerging, the sitting-time to 30 minutes; the trajectory's slope improved, the outcome (not the IQ) moved.",
        "An 18-year-old Nashik man with mild ID (Binet-Kamat IQ 62 at 14, VSMS consistent, six special-school years, two workshop years) and a father asking 'certificate, job, and what after me'. The answer's shape: the medical board's assessment → the RPwD-and-UDID with the ≥40% benchmark; the supported-employment route (the job coach, the supermarket back-end station, the supervision-fading schedule, the buddy system); the protection curriculum for the gullibility flag (the salary into the bank with the father as joint-holder, the money-scripts rehearsed); and the long-term conversation held EARLY (the father 58: the written plan, the lifetime-interest-document route, the sister's role CONSENTED-to-not-assumed, the group-home waiting-list information). At 2 years: 22 months of continuous employment, one teasing-incident resolved with mediation, and the father's verdict; 'I sleep differently now'.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Both dials required for the diagnosis: intellectual plus adaptive, developmental onset.",
        "Severity by adaptive support needs, not IQ points.",
        "Down syndrome: the commonest identifiable cause; fragile X: the commonest inherited cause in boys.",
        "Hearing and vision before certification: the deaf child is not intellectually disabled.",
        "RPwD 2016: the 40% benchmark disability tier.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The first session's three sentences (the naming-and-de-shaming, the capacity frame, the architecture sentence) decide a family's decade more than any assessment score that follows them.",
        "The scheme page is a clinical instrument: the clinician who writes the certificate-guidance letter and the scheme list on one page delivers more outcome-per-consult than any prescription written in this field.",
        "The 'he will catch up' family is converted, not dismissed: 'he climbs with help; without help the gap widens': the arithmetic of delay beats the reassurance and the dismissal both.",
        "Illness presents as behaviour in severe-communication-limitation: 'he is flapping more today' earns the physical examination (pain, infection, dental, bowel) before the behavioural formulation. The under-treated-pain pattern is this population's reproach.",
        "The sibling's consent architecture (her informed choice, the professional-and-legal structure as backstop) is the after-we-die conversation done RIGHT: early, written, and guilt-free.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The reassess-at-5 note and the clock that was running",
      presentation: "A four-year-old with two words, a dropped anganwadi card, and a paediatrician's note that would have politely wasted a buildable year.",
      initialPresentation: "A 4-year-old boy from Bhopal was brought by his mother carrying the district-hospital paediatrician's note: 'global developmental delay, reassess at 5'. He had walked at 20 months, spoke no more than two words, followed one-step commands, and played with the 2-year-old neighbour; the anganwadi card showed the family had stopped sending him, the worker noting 'he cannot sit with the other children'; the grandmother's frame was 'his father also spoke late; he will catch up'.",
      history: "Full-term normal delivery; a week of 'mild jaundice treated with sunlight-and-ghee' in the newborn days (the kernicterus question mark that could not be settled retro-diagnostically, filed under possible-perinatal-cause); no regression by the family's account (no skill gained then lost); no seizures; the father reportedly a late talker.",
      examination: "The developmental schedule placed him at the 2-year-equivalent across domains; hearing tested normal (the before-certify rule run first); the VSMS-adjacent parent-report adaptive map placed social-age ~2; no dysmorphism, normal head circumference, normal tone-and-reflexes; TSH normal; vision screened clear.",
      diagnosis: "Global developmental delay, consistent with disorder of intellectual development in evolution: mild-to-moderate band suspected, cause undetermined; the IQ-label question deliberately deferred (under-5s get the INTERVENTION, not the verdict).",
      management: "The early-intervention package: DEIC referral with the mother-coached home programme; the daily routines as curriculum (dressing, bathing, feeding as the therapy hours), 20-minute structured-play slots, picture-and-sign communication begun since words were sparse; the anganwadi re-enrolment negotiated with the worker briefed to build sitting-capacity rather than demand it; the father's-and-grandmother's reframe sessions converting 'he will catch up on his own' into 'he climbs with help; without help the gap widens'; a 6-month re-assessment dated in the notes.",
      outcome: "At 12-month follow-up: 20 words plus 30 signs-and-pictures in active use, two-word combinations emerging, dressing-with-supervision achieved, the anganwadi sitting-time extended to 30 minutes; the trajectory's slope improved, and the intervention's honest yield was measured in outcomes, not IQ points.",
      teachingPoints: [
        "Under-5 'delay' gets intervention, not labels. The reassess-at-5 note without the intervention-referral is the Indian system's recurring waste of a buildable year.",
        "The before-certify pair (hearing, vision) ran first: the deaf-mis-certified tier's rule, honoured in the sequence.",
        "The anganwadi worker was the system's existing asset: the re-enrolment negotiation beat the drop-out.",
        "The family's 'he will catch up' was converted with the gap-widening arithmetic, not dismissed: the grandmother became an ally of the programme.",
        "The mother-as-therapist package outperformed the referral-to-nothing default: the honest Indian delivery reality.",
      ],
    },
    {
      title: "The certificate, the supermarket shelf, and the father who sleeps differently now",
      presentation: "IQ 62 at fourteen, three family questions at eighteen, and a job-coach-designed workstation that answered all three.",
      initialPresentation: "An 18-year-old man from Nashik, assessed at 14 with a Binet-Kamat IQ of 62 and a consistent VSMS social-quotient (six special-school years behind him with functional literacy-and-numeracy and two pre-vocational workshop years) was brought by his father with three questions asked in order: 'certificate, job, and what after me'.",
      history: "Birth asphyxia at a home delivery (the perinatal cause on record); no syndromic features; the younger sister a BSc student; the family's genetic-counselling conversation held around the sporadic-perinatal cause's low recurrence; no behavioural or mental-health flags on the screen (the dual-diagnosis rule applied).",
      examination: "The adaptive-function mapping: conceptual; functional literacy, operational mobile competence, money-as-tokens with supervision; social: the polite-and-trusting style with the gullibility flag prominent (the 'friend' who borrowed-and-never-returned documented in the report); practical: fixed-route bus travel, independent dressing-hygiene-meals, the workshop's packing-and-quality tasks at production pace.",
      diagnosis: "Mild intellectual disability: the perinatal (birth-asphyxia) cause, no syndromic features; the support profile mapping to the mild band's semi-independent adult architecture.",
      management: "The certification-and-benefits architecture executed: the medical board's assessment → the RPwD certificate with the ≥40% benchmark tier and the UDID; the state-pension and travel-concession applications; the Niramaya enrolment; the National Trust-registered organisation's membership. The employment route in parallel: supported employment; the NGO's job coach placing him at a supermarket's back-end station (shelf-stocking, inventory counting) with on-site training, a supervision-fading schedule, a workplace-buddy system, and the structure-kit (visual task-list, fixed shift, named supervisor). The protection curriculum for the vulnerability layer: money rules taught with role-play, the salary into the bank with the father as joint holder, the 'friend-asking-for-money' scripts, the body-and-consent rules. The long-term-planning conversation held EARLY: the father was 58: the written plan begun, the guardianship registration information given, the property's settled-with-protections (lifetime-interest-document) route explained, the sister's role CONSENTED-to-not-assumed in a family session that respected her medical-college arithmetic, and the group-home waiting-list information filed for the later decades.",
      outcome: "At 2 years: 22 months of continuous employment, the salary structure with the bank route intact, one workplace conflict (a teasing incident) resolved with the job coach's mediation and the supervisor-and-buddy intervention, and the father's report at the last review: 'I sleep differently now.'",
      teachingPoints: [
        "The certification-and-benefit navigation delivered more outcome-per-clinic-hour than any clinical act in this field: the page-with-the-scheme-list as a clinical instrument.",
        "Supported employment (the job coach plus fading supervision) is the Indian-realistic bridge to open employment: neither the sheltered-workshop-forever default nor the open-market abandonment.",
        "The protection curriculum is as essential as the vocational one: the gullibility flag predicted the exploitation risks.",
        "The sibling's consent architecture (the sister's informed choice with the professional-structure backstop) is the after-we-die conversation done right: early, written, guilt-free.",
        "The employment's structure (the fixed shift, the visual lists, the named supervisor) IS the disability-management: the job designed around the profile, not the profile forced into the job.",
      ],
    },
  ],
  clinicalPearls: [
    "The two-dial law: intellectual AND adaptive, both from the developmental period, one dial alone certifies nothing, because every lookalike dissociates on exactly one dial.",
    "IQ ~70 is the rough door; adaptive functioning is the definition: severity and the whole treatment plan run on support needs across the conceptual, social and practical domains.",
    "~1% prevalence, ~85% mild: the invisible majority works, marries and lives among us; the statistics never meet the people the mild band becomes.",
    "Down syndrome: the commonest identifiable cause. Fragile X: the commonest inherited cause in boys, and the family's 'many quiet boys' history is the clinical clue.",
    "Screen before you certify: hearing and vision first; the language-starved deaf child is the classic Indian mis-certification.",
    "Under-5 delay is a flag, not a verdict: intervene, and date the re-assessment; the bare 'reassess at 5' note wastes a buildable year with its politeness.",
    "Any lost skill, at any age: the regression rule that redirects the workup to the metabolic-degenerative tier before any certificate is written.",
    "No medicine treats the intellectual disability itself. The treatment IS education, skills, health and the support architecture, in doses of repetition, for decades.",
    "Illness presents as behaviour in severe-communication-limitation: 'he is flapping more today' earns a physical examination before a behavioural label.",
    "The RPwD ≥40% benchmark unlocks the pension, the concessions, the Niramaya cover, the guardianship and the 4% reservation: the scheme page on one prescription is the field's highest-yield act.",
    "The conflation buster, teachable verbatim: slowness is of the mind's SPEED; madness is of the mind's CONTENT: different conditions, different treatments.",
    "The after-we-die plan (guardianship, will, the sibling's consented role, the written care-plan) is the answer to the 2 a.m. question every ID parent eventually asks: held early, held in the open, written down.",
    "Deprivation-delayed children recover substantially with enrichment: trial-before-label, never certify what stimulation has not yet been tried on.",
  ],
  highYieldSummary: [
    "Definition: intellectual disability (ICD-11: disorder of intellectual development) = deficits in intellectual functioning (reasoning, problem-solving, abstract thinking, academic and experiential learning) AND deficits in adaptive functioning across the conceptual, social and practical domains, with onset in the developmental period, both dials, both early, both persistent; the IQ ~70 line (roughly two standard deviations below the mean) is the rough door that raises the question, never the definition that answers it.",
    "Classification: severity (mild, moderate, severe, profound) is assigned on adaptive-domain support needs (the AAIDD-lineage logic that ICD-11 and DSM-5 adopted), a deliberate move away from IQ-decimal grading; the bands' adult-outcome arithmetic: mild (~85%) semi-independent living with support-for-complexity, structured employment, marriage-and-family realistic for many; moderate (~10%) supervised employment and teachable daily-living independence; severe (~3–4%) full support with communication-channel targets; profound (~1–2%) the medical-complexity co-travel tier.",
    "Epidemiology: ~1% global prevalence (methodological bands 0.5–1.5%), male predominance 1.2–1.5:1, ~85% mild; the aetiology split: severe-profound mostly organic (syndromes, injuries, metabolic), mild substantially polygenic-plus-social; India 1–3% (survey-dependent), over a crore of people, with the heavier preventable share (iodine-Deficiency history, congenital hypothyroidism without universal newborn screening, kernicterus from Rh-and-G6PD, perinatal hypoxia, CNS infections) and the deprivation-amplification layer.",
    "Aetiology by timing: the 3 P's: PRENATAL (Down syndrome the commonest identifiable, fragile X the commonest inherited in boys, the TORCH tier, alcohol's fetal spectrum, valproate's ledger, iodine largely conquered, folate open); PERINATAL (hypoxic-ischaemic injury, extreme prematurity, kernicterus, 'the yellow went to the brain'); POSTNATAL (meningitis, encephalitis, cerebral malaria, head injuries, the surma-and-industrial lead tier, malnutrition-and-stimulation deprivation): plus the psychosocial amplifier, and the recurrence answer: isolated mild ~3–5%, the syndromes their own genetics, karyotyping deciding the Down tier's counselling.",
    "Assessment craft: the developmental history with the regression question; the examination (dysmorphism, skin signs, tone, growth, head circumference) with the mandatory vision-and-hearing pair BEFORE certification; the Indian instruments (the Binet-Kamat (reasoning), the VSMS (adaptive, the social-quotient logic), the Seguin-and-Bhatia performance batteries for the non-literate) each read with culture-language-literacy humility; the tiered cause-hunt (karyotype-and-fragile-X, TSH-and-lead, the metabolic screen, MRI for the microcephalic-regressing-focal); then the lookalike-separation and the certification.",
    "Management: the ladder; (1) early intervention 0–6 (routines-as-curriculum, communication-first with AAC where words fail, the DEIC-and-Disha delivery); (2) school placement answered functionally (inclusive-with-remedial / special / NIOS, reviewed yearly, the functional curriculum, the anti-corporal-punishment line); (3) skills-and-vocational (the ADL ladder, the sheltered-workshop → supported-employment → family-enterprise route, the protection curriculum); (4) the behaviour-and-mental-health layer (communication-first, dual diagnosis treated, medication careful and monitored, never for the ID itself); (5) health maintenance (illness-presents-as-behaviour, the syndrome-specific surveillance); (6) the family-and-lifetime architecture (parents-as-therapists with respite, the benefits navigation, the after-we-die plan, genetic counselling).",
    "The Indian spine: RPwD 2016 certification through the district medical board; the ≥40% benchmark unlocking the state pension (₹300–2,000+/month, state-variable), rail concessions (50–75% with escort), Niramaya insurance (₹50–100/year, ₹1-lakh family cover), National Trust guardianship and the 4% government-job reservation; the UDID card free; the DEIC-RBSK-and-anganwadi delivery tier; and the three family conversations (the marriage question (disclosure, consent, the exploitation watch), the sibling's consented role, and the after-we-die plan) held early, held openly, written down.",
    "The traps that cost marks and patients: certifying on a wrong-language IQ number; the deaf child certified; the under-2 label; the missed regression; the dual-diagnosis blindness ('he is anyway like that'); the certificate-and-benefit information gap: the cheapest treatment miss in Indian ID care; and the brain-tonic commerce unchallenged in the consultation.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "ido-quiz-1",
      question: "The diagnosis of intellectual disability requires:",
      options: ["An IQ below 70 alone", "Deficits in BOTH intellectual AND adaptive functioning, with onset in the developmental period", "Adaptive deficits alone", "Any developmental delay below age 5"],
      correctIndex: 1,
      explanation: "The two-dial rule — one dial alone certifies nothing; the lookalikes (learning disorder, autism, deafness, deprivation) each dissociate on exactly one dial.",
      afterSectionId: "diagnosis",
    },
    {
      id: "ido-quiz-2",
      question: "DSM-5/ICD-11 severity levels (mild to profound) are assigned based on:",
      options: ["IQ-decimal bands", "Adaptive-functioning support needs across the conceptual, social and practical domains", "Brain MRI findings", "The identified aetiology"],
      correctIndex: 1,
      explanation: "The AAIDD-lineage move the modern systems adopted: severity = what support the person needs — the exam favourite of the whole topic.",
      afterSectionId: "diagnosis",
    },
    {
      id: "ido-quiz-3",
      question: "Before certifying a child with global developmental delay as intellectually disabled, the mandatory pair:",
      options: ["EEG and MRI", "Vision and hearing testing", "Lumbar puncture", "A genetic panel"],
      correctIndex: 1,
      explanation: "The screen-before-certify rule: the language-starved deaf child tests low until the channel is fixed — the classic Indian mis-certification.",
      afterSectionId: "differential",
    },
    {
      id: "ido-quiz-4",
      question: "The appropriate response to global developmental delay in a 2-year-old:",
      options: ["Permanent certification immediately", "Early intervention with a dated re-assessment — delay at this age is a flag, not a verdict", "Wait for school age", "Reassure the family unconditionally"],
      correctIndex: 1,
      explanation: "The buildable window's discipline: intervene now, label later if at all — the bare 'reassess at 5' note wastes a buildable year.",
      afterSectionId: "management",
    },
    {
      id: "ido-quiz-5",
      question: "The family asks whether their child will 'become mad like his uncle with schizophrenia'. The core teaching distinction:",
      options: ["ID and psychosis are the same spectrum", "ID is the mind's SPEED; psychosis is the mind's CONTENT — different conditions, different treatments", "Both are treated with the same drugs", "ID always progresses to psychosis"],
      correctIndex: 1,
      explanation: "The conflation buster — with the honest rider that dual diagnosis CAN occur, is treatable, and is under-recognised.",
      afterSectionId: "symptoms",
    },
    {
      id: "ido-quiz-6",
      question: "The RPwD 2016 'benchmark disability' percentage that unlocks the entitlement spine for intellectual disability:",
      options: ["10%", "20%", "40%", "75%"],
      correctIndex: 2,
      explanation: "≥40% — the medical board's tier that unlocks the pension, concessions, Niramaya, guardianship and the 4% government-job reservation.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "State the two-dial definition of intellectual disability and the modern severity-grading principle.", answer: "THE DEFINITION: deficits in intellectual functioning (reasoning, problem-solving, abstract thinking, academic and experiential learning) AND deficits in adaptive functioning across the three domains (conceptual (language, literacy, money, time), social (interpersonal skills, responsibility, gullibility), practical (personal care, occupational skills, travel, safety)) with onset in the developmental period and persistence. The IQ ~70 line is a rough door inherited from the psychometric era; the ADAPTIVE dial is the real definition. THE GRADING PRINCIPLE: severity (mild/moderate/severe/profound) is assigned on adaptive-domain SUPPORT NEEDS (the AAIDD-lineage logic that ICD-11 ('disorder of intellectual development') and DSM-5 adopted) a deliberate move away from IQ-decimal grading, because support needs plan the placement, the training goals and the benefits architecture while the IQ decimal plans nothing. The exam sentence: severity = support needs, not IQ points.", topic: "Foundations" },
    { question: "Name the lookalikes of ID and the one rule that prevents the commonest Indian mis-certification.", answer: "THE LOOKALIKES: (1) mental illness; the content-versus-speed distinction (psychosis's delusions and hallucinations against ID's slow-but-reality-anchored cognition; dual diagnosis coexists and both are treated); (2) specific learning disorder, one academic channel narrow, reasoning-and-adaptive globally intact; (3) autism without ID: social-reciprocity deficit with reasoning intact-or-high, both diagnoses able to stand together; (4) sensory impairment: the language-starved deaf child; (5) deprivation/stimulation-deficient delay: the recovery-with-enrichment test; (6) borderline intellectual functioning. IQ 70–85 with strained-but-coping adaptation; (7) the under-5 developmental-delay caution: a flag, not a verdict; (8) the progressive/metabolic regression tier: skills LOST, not slowly-gained; (9) ADHD: performance varying wildly with engagement, reasoning intact one-to-one; (10) epilepsy's interictal-and-drug fog. THE RULE: screen-before-certify; vision and hearing tested, and corrected, before any intellectual verdict: the deaf child mis-certified as ID is the classic Indian error, prevented by one audiology referral.", topic: "Diagnosis" },
    { question: "Draw the cause-map by timing, and name two prevention victories India has partially claimed plus two still-open layers.", answer: "BY TIMING: the 3 P's: PRENATAL: genetic (Down syndrome the commonest identifiable cause with maternal-age risk; fragile X the commonest inherited in boys with the 'many quiet boys' history; the single-gene metabolic tier with PKU the classic preventable-by-screening; copy-number variants), congenital infections (the TORCH tier), exposures (alcohol's fetal spectrum, valproate's neural-tube-and-neurodevelopmental ledger, radiation, lead, mercury, untreated maternal hypothyroidism), nutrition (iodine: the cretinism tier largely conquered by iodised salt; folate: the neural-tube layer). PERINATAL: hypoxic-ischaemic injury (the birth-asphyxia institutional-gap layer), extreme prematurity and very-low-birth-weight, kernicterus (Rh-incompatibility and G6PD, 'the yellow went to the brain'), neonatal hypoglycaemia and sepsis. POSTNATAL: CNS infections (meningitis, encephalitis, cerebral malaria), head injuries, the surma-and-industrial lead tier, chronic malnutrition-and-stimulation deprivation, childhood-presenting hypothyroidism, the post-meningitis deafness-plus-cognitive compound. Plus the psychosocial amplifier (poverty, parental education, un-stimulating environments, institutionalisation) the mild-ID multiplier on every survey. THE LEDGER: claimed; iodisation (the sub-Himalayan goitre-cretinism belt) and rubella vaccination; open: universal newborn screening (congenital hypothyroidism, PKU) and perinatal care with kernicterus prevention.", topic: "Aetiology" },
    { question: "What are the Indian-validated instruments for each dial, and why does under-5 'delay' get intervention instead of labels?", answer: "THE INSTRUMENTS: for the intellectual dial; the developmental schedules and the developmental-quotient logic for under-5s (the DDST-lineage screening), the Binet-Kamat (Kamat's Indian adaptation of the Binet scales, the standard IQ instrument for the verbal-and-literate), and the performance-and-non-verbal batteries for the non-literate-and-language-disordered (the Seguin form-board and Bhatia lineage, the Raven's-type matrices); for the adaptive dial: the Vineland Social Maturity Scale (the Indian adaptation, Malin's lineage; the social-age-and-social-quotient tradition), the diagnosis's second dial and the planning's primary instrument. Every score read with culture-language-literacy humility: a number earned in the wrong language is a number, not a verdict. THE UNDER-5 RULE: the 0–6 window runs synaptogenesis at its densest; the brain's most teachable years; early intervention builds the adaptive architecture (communication, self-care, social wiring, learning-to-learn) that the adult outcome runs on, even though it does not raise the IQ number; a permanent label in this window adds stigma without adding a single service, while the deferred-label-plus-intervention route adds the services without pre-empting the verdict; hence delay is a FLAG, intervention the response, and the re-assessment DATED.", topic: "Assessment" },
    { question: "Walk the severity bands' adult-outcome logic: what is realistic per band for employment, living and relationships?", answer: "MILD (~85%): academic ceiling around primary-school level with special methods (functional literacy-and-numeracy); the adult band: semi-independent living with support reserved for complexity (money decisions, contracts, medical consent); open-or-sheltered employment realistic (the structured-job tier: packing, gardening, kitchen-assistant, data-entry-with-training, tailoring, delivery-with-fixed-routes); relationships-and-marriage realistic for many WITH support and protection, against the vulnerability watch-list (exploitation, manipulation, the marriage-and-then-abandoned patterns). MODERATE (~10%): academic ceiling pre-primary (sight-words, money-as-tokens); full supervision for safety-and-money; communication from short sentences to AAC-and-signage; supported employment (the supervised workshop, the family-enterprise station); daily-living skills teachable to good independence with YEARS of training (dressing, hygiene, simple cooking with supervision, fixed-route travel). SEVERE (~3–4%): communication basic-to-symbolic, mobility usually preserved, full support for daily living. The targets: comfort, the communication channel, basic self-care participation, the long-term architecture. PROFOUND (~1–2%): the medical-complexity co-travel (epilepsy, cerebral palsy, sensory impairment), custodial-plus-engagement care, the ethics of comfort and inclusion in family life. The clinical grammar: the band plans the TRAINING GOALS, not the human being's worth.", topic: "Clinical practice" },
    { question: "Recite the intervention ladder in order, with one Indian delivery example per tier.", answer: "THE LADDER: (1) EARLY INTERVENTION (0–6, the buildable window) (stimulation-and-development programmes, parent-coached routines-as-curriculum, communication-first with AAC where words fail) delivered through the DEIC-RBSK centres and the National Trust's Disha scheme, with the anganwadi linkage and the honest parent-trained-at-home-plus-monthly-review default. (2) SCHOOL-AND-EDUCATION: the placement answered functionally (inclusive-with-resource-support where the pace holds; special education's slow-paced skill-loaded curriculum where it cannot; the NIOS open route for the middle band), the functional curriculum (literacy-to-function, numeracy-to-life, the social-and-safety tier), reviewed yearly. (3) SKILLS-AND-VOCATIONAL: the ADL ladder taught in steps and practiced to independence; the sheltered-workshop → supported-employment (the job-coach model with fading supervision, the Wehman lineage's Indian NGO adaptations) → family-enterprise-station route; the protection curriculum for the mild band's adolescence. (4) THE BEHAVIOUR-AND-MENTAL-HEALTH LAYER: the communication-first analysis, the dual-diagnosis recognition and treatment, medication careful and monitored (epilepsy, the severe bands), never for the ID itself. (5) HEALTH MAINTENANCE: the syndrome-specific surveillance, the aggressive general care (illness presents as behaviour), the transition to adult medicine. (6) THE FAMILY-AND-LIFETIME ARCHITECTURE: parents-as-therapists with respite, the parent organisations, the certification-and-benefits navigation, the after-we-die plan, the genetic counselling.", topic: "Management" },
    { question: "List the RPwD-2016 benefit spine and the certification benchmark that unlocks it, then the three Indian family conversations and their ethical cores.", answer: "THE SPINE: the district medical board's percentage assessment → the ≥40% benchmark-disability tier → the state disability pension (₹300–2,000+/month, state-variable, the NSAP-and-state schemes), the rail travel concessions (50–75% with escort provision), the Niramaya health insurance (₹50–100/year premium-capped, family cover to ₹1 lakh (the National Trust's flagship), the National Trust legal-guardsianship registration, the 4% government-job reservation, and the legal protections against discrimination) consolidated on the UDID card (free). THE THREE CONVERSATIONS: (1) the MARRIAGE question; its ethical core the partner's right-to-know (the disclosure's ethics; the marriage-without-disclosure's void-and-abandonment patterns harm everyone), with the consent-and-vulnerability assessment (understood-and-willing versus family-arranged-and-compliant) and the exploitation watch; (2) the SIBLING conversation: its core the sibling's CHOICE honoured: the role consented-to, not assumed, with the professional-and-legal structure as backstop; (3) the AFTER-WE-DIE plan: its core the written document: the guardianship route, the will-and-trust with the property settled-with-protections, the living-arrangement information, and the written care-plan (the routines, the medicines, the preferences, the persons); held early, held openly, because the plan's existence is the family's sleep-improver and its absence is the 2 a.m. panic of every ID parent over 55.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Why did this happen to our child?", answer: "For a large share of families the honest answer is a timing map, not a single villain: something in the pregnancy, the birth or early infancy, a genetic pattern, or an unidentifiable combination. Where we can find the cause we tell you, because a known cause answers the recurrence questions for your NEXT child even when it changes nothing for this one. What it never was: your karma, your 'family blood' as the in-laws say, or anything you did or did not do." },
    { question: "Will our next child be the same?", answer: "It depends on the cause we find. That is why we look. Most cases like a birth injury carry a low next-time chance; Down syndrome mostly repeats only slightly above the general rate, and testing exists; fragile X and some metabolic conditions have real patterns (a quarter-risk in some). Genetic counselling before the next pregnancy is the answer, not guessing." },
    { question: "Is this madness? Will he become pagal?", answer: "No, and this distinction matters most of all. Slowness is the mind's SPEED; madness is the mind's CONTENT: fixed false beliefs, voices, the losing of contact with reality. Your child's mind is slow but anchored in reality. People with intellectual disability CAN develop depression or other mental illnesses like anyone else (and when that happens it is treatable) but slowness itself is not, and does not become, madness." },
    { question: "Will he ever talk, read, work or marry?", answer: "Honest bands. Talking: most children with ID develop useful communication; words for many, signs-and-pictures for some; the channel matters more than the form. Reading: functional literacy is realistic for the mild band (forms, bus-boards, messages). Work: yes, for most of the mild-and-moderate bands with training; structured employment, supported placements, the family-enterprise station. Marriage: for many with mild ID, yes, with support, disclosure-and-consent, and protection planning. The conversation deserves more honesty than either 'never' or a family-arranged silence." },
    { question: "The teacher beats him for not learning. What do we do?", answer: "That is not teaching, and it is causing harm on top of the condition: a child who cannot meet a pace cannot be beaten into it. The steps: the school conversation with the communication-first handling letter (short tasks, visual supports, patience architecture); the placement review if the school cannot hold it (the special-school and NIOS routes exist); and where the beating continues, the RPwD's and child-protection's legal layer. No syllabus is worth the trauma." },
    { question: "Should we send him to a normal school or a special school?", answer: "The child's learning rate decides, not our ambition and not anyone's philosophy. The child who holds the class's pace with support goes inclusive, with remedial-and-resource help; the child who cannot, who drowns-and-withdraws, learns MORE in the special school's slow, structured, success-building curriculum. And it is reviewed yearly: placement is a tool, not a verdict." },
    { question: "Is there any medicine that will make him better?", answer: "No medicine treats the intellectual disability itself, and the syrups-and-tonics marketed for 'brain power' are commerce. Medicines DO have honest roles: for seizures, for thyroid-or-metabolic causes where treatable, and for specific behavioural-and-mental-health problems that ride along; prescribed carefully and reviewed regularly. The real treatment is what you deliver daily: teaching, routines, repetition, schooling. The skills ladder is the medicine." },
    { question: "What is this certificate everyone mentions, and what does it actually get us?", answer: "It is the RPwD-2016 disability certificate issued by the district medical board, and above 40% (the 'benchmark' tier) it unlocks real things: the state disability pension, travel concessions, the Niramaya health insurance (₹1-lakh family cover at a token premium), legal protections against discrimination, guardianship frameworks and reservation provisions. The route costs little and the UDID card consolidates it. Families are rarely told the full list. Ask us for the page with the schemes." },
    { question: "What will happen to him after we are gone?", answer: "The question every parent of a child with ID eventually asks at 2 a.m. And the answer is a plan, not a reassurance: the legal guardianship route (the National Trust's registration framework), the financial architecture (the will, the trust with protections, the property settled with lifetime-interest structures), the living-arrangement information (group-homes and supported-living, sparse but growing), the sibling's role consented-to and never assumed, and the WRITTEN care-plan: his routines, his medicines, his preferences, his people. We hold this conversation early, in the open, and write it down. The plan is what lets everyone sleep." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "WHO — ICD-11 disorders of intellectual development (the construct, domain and severity logic, paraphrased)" },
      { source: "American Psychiatric Association — DSM-5-TR intellectual developmental disorder framework (severity-by-support logic, paraphrased)" },
      { source: "Rights of Persons with Disabilities Act 2016 (India) — benchmark certification, entitlements and education rights" },
      { source: "National Trust Act framework (India) — Niramaya insurance, legal guardianship registration, Disha and Vikaas scheme documentation" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, chs 10.1–10.3 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Wehman P et al. — the supported-employment evidence lineages (the job-coach, fading-support model) and their Indian NGO-tier adaptations" },
    ],
    reviews: [
      { source: "Maulik PK et al. — the global intellectual disability prevalence meta-analyses (the ~1% anchor) and the Indian-context work of the same group" },
      { source: "Roizen NJ — the aetiology-and-epidemiology review lineages; Walker SP et al. — the early-stimulation intervention evidence (the under-5 window's yield)" },
      { source: "Durkin MS et al. — the developing-country ID-epidemiology tiers (the deprivation-and-prevention framing)" },
      { source: "The Indian assessment lineage — Kamat's Binet adaptation, the Vineland Social Maturity Scale (Indian adaptation: Malin's lineage), Bhatia's performance battery, the Seguin form board (instrument histories; items not reproduced)" },
    ],
    patientResources: [
      { source: "The scheme page — the certificate, pension, concessions, Niramaya and guardianship list on one prescription (the instrument this course hands to every Indian ID family)" },
      { source: "The written after-we-die plan template — the guardianship route, the will-and-trust architecture, the sibling's consented role, the care-plan that outlives the parents' voices" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "8 min",
      description: "Plain language: what this is (and is not), the honest bands, the no-medicine rule, the certificate-and-benefits page, the two big family conversations.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The two-dial definition, the 85-10-3-2 pyramid, the 3 P's cause-map, the Indian instruments, the lookalike table.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "36 min",
      description: "Full course with the decision path, the Indian layer and both cases: the severity-by-support rule, the screen-before-certify pair, the RPwD spine.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "46 min",
      description: "Everything: the assessment craft, the benefits navigation as clinical work, the family architecture, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The two dials, the rough door, the invisible majority.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can state the two-dial definition cold and explain why the IQ ~70 line is the door, not the definition." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The buildable window, the capacity curve, the conflation's cost.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why early intervention moves the adaptive trajectory and not the IQ number." },
    { number: 3, title: "Clinical Practice", description: "The bands that plan, the assessment craft, the intervention ladder.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the screen-before-certify pair, the Indian instruments and the support-band assignment on a real case." },
    { number: 4, title: "Indian Context", description: "The RPwD spine, the first session's three sentences, the family's architecture.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can write the scheme page and hold the marriage, sibling and after-we-die conversations honestly." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the 'approach to a 4-year-old with global delay' and the 'definition-classification-management' essays cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 10.1–10.3 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "WHO — ICD-11 disorders of intellectual development: the construct, the three adaptive domains and the severity-by-support logic (paraphrased)", sourceType: "classification", year: "2022", dateReviewed: "2026-09-29" },
    { id: "S3", source: "American Psychiatric Association — DSM-5-TR intellectual developmental disorder framework (the severity-by-support-need move and the AAIDD lineage behind it, paraphrased)", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Maulik PK et al. — the global ID prevalence meta-analyses (the ~1% anchor) and the Indian-context work of the same group", sourceType: "meta-analysis", year: "2011 onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Roizen NJ — the aetiology-and-epidemiology review lineages (the cause-by-timing map)", sourceType: "review", year: "1990s–2000s", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Walker SP et al. — the early-stimulation intervention evidence (the under-5 buildable window's yield on adaptive outcomes)", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Durkin MS et al. — the developing-country ID-epidemiology tiers (the deprivation-amplifier and the prevention framing)", sourceType: "review", year: "1990s–2010s", dateReviewed: "2026-09-29" },
    { id: "S8", source: "The Indian assessment lineage — Kamat's Binet adaptation, the Vineland Social Maturity Scale (Indian adaptation: Malin's lineage), Bhatia's performance battery, the Seguin form board (instrument histories; items not reproduced)", sourceType: "review", year: "1930s onward", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Wehman P et al. — the supported-employment evidence lineages (the job-coach model with on-site training and fading support) and the Indian NGO-tier job-coach adaptations", sourceType: "primary", year: "1980s onward", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Rights of Persons with Disabilities Act 2016 (India) and the National Trust Act framework — benchmark certification, Niramaya, guardianship, Disha-and-Vikaas scheme documentation", sourceType: "government", year: "1999–2016", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Indian context — the NSSO-tier IDD surveys, the DEIC-RBSK early-intervention delivery architecture, and state-pension-and-scheme variability notes (approx 2026)", sourceType: "government", year: "approx 2026", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The two-dial definition: deficits in intellectual functioning AND adaptive functioning across the conceptual, social and practical domains, with onset in the developmental period, one dial alone certifies nothing; the IQ ~70 line a rough door, the adaptive dial the definition, the severity grader and the treatment planner.", grade: "established", sources: ["S1", "S2", "S3"] },
    { text: "Severity by support needs: the mild/moderate/severe/profound specifiers are assigned on adaptive-domain support needs (the AAIDD-lineage logic adopted by ICD-11 and DSM-5); the deliberate move away from IQ-decimal grading.", grade: "established", sources: ["S2", "S3"] },
    { text: "Epidemiology: ~1% prevalence (methodological bands 0.5–1.5%); the severity pyramid ~85% mild, ~10% moderate, ~3–4% severe, ~1–2% profound; male predominance 1.2–1.5:1 (partly ascertainment, partly X-linked); India's 1–3% survey band: over a crore of people, the largest disability group seeking certificates in most districts.", grade: "established", sources: ["S4", "S7", "S11"] },
    { text: "The aetiology split and map: severe-profound ID mostly organic (identifiable syndromes, injuries, metabolic); mild ID substantially polygenic-plus-social, with the cause-by-timing map (prenatal genetic/infective/exposure/nutritional, perinatal hypoxic-kernicteric-premature, postnatal infective-traumatic-toxic-deprivational) and the psychosocial amplifier.", grade: "established", sources: ["S1", "S5", "S7"] },
    { text: "The Indian prevention ledger: iodisation conquering the sub-Himalayan goitre-cretinism belt and rubella vaccination as the partially-claimed victories; universal newborn screening (congenital hypothyroidism, PKU), perinatal care and kernicterus prevention (Rh-incompatibility, G6PD) as the open ground.", grade: "supported", sources: ["S7", "S11"] },
    { text: "The buildable window: early intervention (0–6) does not raise the IQ as a number but builds the adaptive architecture (communication, self-care, social wiring, learning-to-learn) that the adult outcome runs on; adult outcomes driven by adaptive-skill training far more than IQ points.", grade: "established", sources: ["S1", "S6"] },
    { text: "The deprivation rule: deprivation-delayed children recover substantially with enrichment (the institutional natural experiments' lesson); trial-before-label; do not certify what stimulation has not yet been tried on.", grade: "established", sources: ["S6", "S7"] },
    { text: "The Indian instruments: the Binet-Kamat (the reasoning dial), the Vineland Social Maturity Scale with Malin's Indian adaptation (the adaptive dial, the social-quotient logic), the Seguin-form-board and Bhatia performance batteries for the non-literate; every score read with culture-language-literacy humility.", grade: "supported", sources: ["S8"] },
    { text: "The screen-before-certify rule: vision and hearing tested and corrected before any intellectual verdict; the language-starved deaf child testing low until the channel is fixed being the classic Indian mis-certification; and the under-5 discipline (delay a flag, not a verdict; intervention with a dated re-assessment).", grade: "established", sources: ["S1", "S2"] },
    { text: "No pharmacotherapy for the ID itself: the treatment IS education, skills, health and the support architecture; medicines carrying careful roles only for epilepsy, treatable causes and the severe self-injury-and-aggression bands, with monitoring; the recurrence answer (isolated mild ~3–5%; the syndromes' own genetics; karyotyping deciding the Down tier's counselling).", grade: "established", sources: ["S1", "S3"] },
    { text: "The supported-employment route: the job-coach model (placement with on-site training and fading supervision) as the evidence-realistic bridge between the sheltered workshop and open employment; the structure (routine, clear tasks, kind supervision) being the disability-management.", grade: "established", sources: ["S9"] },
    { text: "The RPwD 2016 spine: the medical board's percentage assessment with the ≥40% benchmark unlocking the state disability pension (₹300–2,000+/month, state-variable), rail travel concessions (50–75% with escort), Niramaya insurance (₹50–100/year premium-capped family cover to ₹1 lakh), National Trust guardianship registration and the 4% government-job reservation, with the certificate's information gap itself a treatment gap.", grade: "established", sources: ["S10", "S11"] },
    { text: "Dual diagnosis: mental illness at above general-population rates in adults with ID; depression, psychosis, under-treated because under-recognised; the content-versus-speed distinction separating treatable illness from the baseline slowness while both conditions are treated when both exist.", grade: "supported", sources: ["S1", "S2"] },
  ],
};
