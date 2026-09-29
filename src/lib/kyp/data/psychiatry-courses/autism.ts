import type { PsychiatryCourse } from "./types";

/**
 * AUTISM SPECTRUM DISORDER — canonical Psychiatry course
 * (migration batch 12, Group L — child & adolescent psychiatry),
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/autism.md — untouched foundation),
 * re-researched against current guidance: the DSM-5/ICD-11
 * construct, the CDC ADDM and NIMHANS prevalence lineages,
 * the Zwaigenbaum early-identification work, the Early Start
 * Denver Model, the WHO CST / NIMHANS ComDEAL parent-mediated
 * delivery evidence, the RUPP irritability trials, and the
 * RPwD 2016 / National Trust service spine.
 *
 * Drug routes: NONE linked — the pharmacotherapy is comorbidity-
 * targeted only (risperidone/aripiprazole, methylphenidate/
 * atomoxetine, melatonin, low-start SSRIs); none has a KYP drug
 * lesson, so drugLinks is empty and the tier is taught here,
 * recorded in contentGaps; no drug treats autism itself.
 */
export const autismCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "autism",
  title: "Autism Spectrum Disorder — The Prediction Engine",
  shortName: "ASD",
  kind: "disorder",
  category: "Child & Adolescent Psychiatry",
  groupLetter: "L",
  groupName: "Child & adolescent psychiatry",
  learningPath: ["Psychiatry", "Child & Adolescent Psychiatry", "Autism Spectrum Disorder — The Prediction Engine"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "40 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "The autistic brain leans on prediction less and on raw detail more — the world arrives less filtered, less pre-formatted — so the child does the rational thing and anchors to the predictable: the same route, the same plate, the same clip. Insistence on sameness is not stubbornness; it is self-built scaffolding against a world that feels like static, and the clinical task is to build prediction inside the social stream, then stretch it.",

  summary:
    "Autism is a difference in how the brain develops its social-communication wiring and its handling of sensation, attention and routine — present from early childhood, lifelong, and wildly variable in profile: a non-speaking child with a strong desire to connect and a fluent-speaking professor who cannot read social subtext are both autistic, which is what 'spectrum' actually means. The clinical architecture runs on two channels: the sharing channel (pointing, showing, gaze in service of communication, to-and-fro conversation) and the predictability channel (intense focused interests, repetitive play, sensory over- and under-reaction, distress at change) — DSM-5 and ICD-11 require both, plus the sensory clause inside the second, present from the early developmental period (possibly masked until demands exceed capacity), causing impairment, and never 'explained away' by intellectual disability, which is judged independently and coexists in a third to half of diagnosed children. The mechanism course teaches four stories in plain words — the prediction engine (sameness as scaffolding against static), the sensory gain dial (the mixer-grinder that is genuinely painful, the under-registered name-call), the attention tunnel (monotropism: the beam that makes both the intense interest and the missed wave), and the connectivity pattern (slow, explicit, rewarded imitation learning — the reason faces and feelings CAN be taught as skills). The discipline of diagnosis is clinical — no blood test — anchored on the 18-month red-flag check (Name, Point, Show, Pretend; fail one, refer now, hearing test first, never 'wait till three'), because the years from 1 to 4 are the brain's most buildable window and intervention inside them changes trajectories. The management grid is honest about what works: 15–25 structured weekly hours of naturalistic developmental-behavioural intervention, communication opened through whatever channel works (AAC/PECS when speech is delayed — giving the channel REDUCES meltdowns), occupational-sensitory work, visual structure used as medicine, education placement decided by function not stigma, and pharmacotherapy ONLY for defined comorbid symptoms. The India layer is load-bearing: a million-plus under-identified children (roughly 1 in 100 in the NIMHANS community study, against about 1 in 36 in US surveillance), the two lost years between parental concern and specialist confirmation, the therapy desert outside metros with its middle-class-breaking ₹6,000–30,000/month session stacks — and the workable rails: parent-mediated programmes validated in Indian conditions (NIMHANS ComDEAL and WHO CST, delivered in Indian districts), RBSK District Early Intervention Centres, RPwD 2016 entitlements, the National Trust framework with Niramaya insurance, and parent organisations that navigate what no clinic can. And the girl who masks — school-fine, home-collapsing, diagnosed at 13 — is taught as a clinical alert in her own right, because the Dr Jekyll/Mr Hyde report is a presentation, not a rarity.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Recognise the early red flags of autism in a toddler — the 18-month checkpoints (name response, pointing to show, showing, pretend play) — and act on them the same month, not at three.",
    "Explain the two-domain DSM-5/ICD-11 structure (social communication + restricted/repetitive patterns) with the sensory clause, and assign severity levels 1–3 as support descriptors, not 'mild/severe' verdicts.",
    "Tell the four brain stories in plain words — the prediction engine, the sensory gain dial, the attention tunnel, the connectivity pattern — and derive interventions from each.",
    "Run the diagnostic workup: developmental history with the red-flag timeline, autism-specific observation (ADOS-2 lineage, ADI-R/3Di named), developmental/IQ testing, hearing, language assessment, selected genetics, and the comorbidity sweep.",
    "Separate autism from its mimics: hearing impairment, primary language disorder, intellectual disability, social anxiety, deprivation — and detect the quiet girl who masks.",
    "Deliver the management grid: early intensive naturalistic developmental-behavioural intervention, communication systems including AAC/PECS, occupational and sensory work, parent-mediated programmes, education placement by function, and pharmacotherapy only for defined comorbid symptoms.",
    "Handle Indian realities: the two lost years, scarce professionals, the parent-mediated route (ComDEAL, WHO CST), therapy economics, RPwD 2016 and the National Trust framework.",
    "Answer the hard family questions honestly: vaccines, screens, 'will he talk', the centres that promise cures, marriage and adulthood.",
  ],
  quickFacts: [
    { label: "The red-flag check", value: "Name, Point, Show, Pretend", detail: "All expected by 18 months — no name response, no pointing to show or request, no bringing toys to display, no pretend play: a fail on any one obligates immediate autism-specific assessment with hearing testing, not watch-and-wait" },
    { label: "The prevalence", value: "1 in 36 and 1 in 100", detail: "US CDC surveillance reports about 1 in 36 eight-year-olds; the Indian community study (NIMHANS, 2021, 4,000+ households) found roughly 1 in 100 children — a million-plus, heavily under-identified; the global rise is criteria, detection and awareness, not a new brain condition" },
    { label: "The earliest deviator", value: "Joint attention", detail: "Pointing, showing and gaze-sharing deviate BEFORE speech — the reason the 18-month check outranks any word-count question; the strongest predictors of later speech are early joint-attention engagement and non-verbal problem-solving" },
    { label: "The genetics", value: "60–90% heritable", detail: "Twin-study heritability among the highest in neurodevelopment; common variants of small effect plus rare de novo mutations; sibling recurrence roughly 10–20% versus ~1% base; the broader autism phenotype running in family lines" },
    { label: "The engine", value: "Prediction", detail: "The autistic brain leans on prediction less and raw detail more; social life is the least predictable stream of all — so the child anchors to the same route, the same plate, the same clip; sameness is scaffolding, not stubbornness" },
    { label: "The missed girl", value: "Masking", detail: "Girls imitate peers, suppress stims and copy social scripts — holding it together at school and collapsing at home (the Dr Jekyll/Mr Hyde report), presenting at 10–14 with anxiety, eating difficulty or exhaustion" },
    { label: "The comorbidity law", value: "Illness presents as behaviour change", detail: "'He is flapping much more today' is a medical symptom until proven otherwise — constipation, caries, ear infection and reflux behind 'sudden aggression'; epilepsy rides along in ~10–20% with an adolescent second peak" },
    { label: "The drug law", value: "Two drugs, one symptom", detail: "Risperidone and aripiprazole are the only two with solid evidence — and only for severe irritability/aggression (weight, sedation, prolactin monitoring); NO drug treats autism's core" },
    { label: "The Indian spine", value: "ComDEAL, WHO CST, RBSK/DEIC, RPwD, National Trust", detail: "Parent-training as the scalable delivery channel (NIMHANS ComDEAL; WHO CST delivered in Indian districts with a tele-version); free entry through District Early Intervention Centres; RPwD 2016 entitlements, National Trust guardianship and the genuine ₹1-lakh-cover Niramaya insurance" },
  ],
  knowledgeGraph: [
    { label: "ADHD — The Brakes and the Engine", type: "condition", href: "/psychiatry/adhd/", note: "The commonest riding comorbidity — inattention and hyperactivity layered on the autism profile, each treated on its own terms, methylphenidate/atomoxetine titrated carefully" },
    { label: "Intellectual Disability — Supports, Not Just Scores", type: "condition", href: "/psychiatry/intellectual-disability-overview/", note: "A third to half of autistic children carry it — each judged independently; one never excludes the other, and the supports-not-scores frame fits both" },
    { label: "Genetic Syndromes in ID — The Psychiatry Each Carries", type: "condition", href: "/psychiatry/id-syndromes/", note: "Fragile X, tuberous sclerosis, Rett and chromosome 15 duplications — the syndromic layer behind selected genetic referrals (karyotype, fragile X, CGH microarray)" },
    { label: "Developmental Disorders — The Learning Channels", type: "condition", href: "/psychiatry/developmental-disorders/", note: "The family frame: the shared early-identification architecture and the co-travelling learning differences of the early-years window" },
    { label: "Child Assessment & Epidemiology — The Prevalence Movers", type: "condition", href: "/psychiatry/child-assessment-epidemiology/", note: "The developmental-history craft and the survey machinery behind the rising measured prevalence — what moved and why it is not an epidemic" },
    { label: "Child Anxiety — The School-Refusal Engines", type: "condition", href: "/psychiatry/child-anxiety/", note: "The adolescent anxiety rider and the demand-heavy school years — the costume that 'sudden stubbornness' wears in the autistic adolescent" },
    { label: "Insomnias — Chronic Insomnia Disorder", type: "condition", href: "/psychiatry/insomnia/", note: "The chronic, under-treated settling and night-waking problems — behavioural programme first, melatonin the best-evidenced pharmacology when needed" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The anxiety rider's chemistry and the long-standing serotonin line in autism research — the SSRI tier's target, careful and low-start (activation risk)" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The irritability tier's target — risperidone and aripiprazole, the two best-evidenced drugs in this condition, and their weight/sedation/prolactin monitoring" },
    { label: "The social-brain network", type: "brain-region", href: "#brain", note: "The distributed face-processing, gaze-reading and social-attention machinery that coordinates differently — eye contact as a processing trade-off, not simple deficit" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Four stories carry the neuroscience of autism — each a working model, each with a direct clinical translation. The prediction engine: the brain runs on prediction, building models of what happens next and flagging surprises; in autism the engine leans on prediction less and on raw detail more, so the world arrives less filtered, less pre-formatted — and social life, the least predictable stream of all, is exactly where the strain lands. The child does the rational thing: anchors to the predictable (the same route, the same plate, the same clip, the train timetable, the ceiling fan), and insistence on sameness reads correctly as self-built scaffolding against a world that feels like static. Therapy does not remove the scaffolding need — it builds prediction INSIDE the social stream (routines, visual schedules, previewing changes) and then stretches it. The sensory gain dial: every brain has volume dials for sound, touch, light and smell; in autism they are set differently, often UP (the temple loudspeaker, the mixer grinder, the seams of new clothes, a relative's perfume can be genuinely painful), sometimes LOW (the child who under-registers his own name is not ignoring it); the flapping, spinning and toe-walking — stimming — are the nervous system tuning itself. The attention tunnel: typical attention is a broad floodlight shared across people and things; autistic attention more often runs as a narrow, deep beam — monotropism — the engine of both the intense interests AND the missed social bids; the beam is also the teaching handle (enter the tunnel and build language, counting and reciprocity inside it). The connectivity pattern: early brain overgrowth with atypical long-range connectivity and locally dense wiring; the parts that need to coordinate — face-processing, language, motor-imitation, across distant regions — synchronise differently, which is why imitation-based learning runs better slow, explicit and rewarded than fast and implicit, and why the child CAN learn faces and feelings as skills, like typing: the fact that keeps early intervention honest and hopeful.",
    steps: [
      "The prediction engine: less prediction, more raw detail — the world less filtered and less pre-formatted; the social stream the least predictable of all; the child anchors to sameness as self-built scaffolding, and therapy builds prediction INSIDE the social stream (routines, visual schedules, previewing) and then stretches it.",
      "The sensory gain dial: volume dials set differently, often up (sound, texture, light, perfume genuinely painful) and sometimes low (the under-registered name-call); stimming — flapping, spinning, toe-walking — is the nervous system tuning itself, not a symptom to extinguish first.",
      "The attention tunnel: monotropism — a narrow, deep beam instead of the broad floodlight; the engine of both the intense interests (dinosaurs, train routes, vehicle logos, dates) and the missed social bids; enter the tunnel and teach inside it: the principle separating naturalistic developmental-behavioural intervention from cold drills.",
      "The connectivity pattern: early overgrowth, locally dense wiring, differently synchronised long-range links; imitation-based learning — the human baby's default channel — runs better slow, explicit and rewarded than fast and implicit; faces and feelings CAN be taught as skills.",
      "The genetic architecture: heritability 60–90% from twin studies; many common variants of small effect plus rare de novo mutations; sibling recurrence ~10–20%; the broader autism phenotype in family lines; the syndromic layer (fragile X, tuberous sclerosis, Rett, chromosome 15 duplications) behind selected genetic referrals.",
      "The buildable window: the years from 1 to 4 are the brain's most buildable; early, intense, structured intervention inside that window changes trajectories — 15–25 hours weekly in some form, professional plus parent-delivered combined.",
      "The double exclusion that is not one: intellectual disability is judged INDEPENDENTLY — autism and ID coexist in a third to half of diagnosed children; diagnosing one never excludes the other, and stopping at either label loses the child the other's services.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "social-brain-network", name: "The social-brain network (the sharing channel's hub set)", role: "Face-processing, gaze-direction reading and social-attention allocation across distributed regions — coordinating differently in autism; the reason eye contact is a processing trade-off (reduced especially when listening hard), not simple deficit.", grade: "supported" },
    { id: "prefrontal-prediction", name: "Prefrontal predictive machinery (the forecasting office)", role: "Builds the models of what happens next and flags surprise — the office the autistic brain consults less; the social stream arriving unfiltered is this office's overload, and the sameness rituals its compensation.", grade: "supported" },
    { id: "sensory-gating", name: "Sensory gating pathways (the volume dials)", role: "The gain settings for sound, touch, light and smell — set differently, often up: the mixer-grinder pain and the festival-crush collapse; sometimes down: the name-call that never registers; the layer an occupational therapist profiles before anyone labels behaviour.", grade: "supported" },
    { id: "language-imitation", name: "Language and motor-imitation circuitry", role: "The face-processing + language + motor-imitation coordination that synchronises differently — the reason the human default channel (fast implicit imitation) fails and the slow, explicit, rewarded version works; the teaching handle of every naturalistic programme.", grade: "supported" },
    { id: "connectivity-pattern", name: "The early-overgrowth connectivity pattern", role: "Early brain overgrowth with locally dense wiring and atypical long-range links — the technical summary of what imaging shows, translating clinically as coordination costs across distant systems (and the honest reason no single lesion story exists).", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "The irritability tier's target — risperidone and aripiprazole, the two best-evidenced drugs in this condition, act on dopamine signalling (with serotonin receptors); their price is the monitoring set: weight, sedation, prolactin.", grade: "established", drugConnection: "Risperidone and aripiprazole for severe irritability/aggression in autism — no KYP drug lessons; taught here, route never invented." },
    { name: "Serotonin", symbol: "5-HT", role: "The anxiety rider's chemistry and the longest-standing neurotransmitter lead in autism research; the SSRI tier for the anxious autistic adolescent — careful, low-start, watching for activation.", grade: "supported", drugConnection: "No specific SSRI is assigned to this population by the evidence — the tier is taught here as a class, and no KYP route is invented for it." },
    { name: "GABA", symbol: "GABA", role: "The excitation-inhibition balance candidate behind the sensory gain dial — the chemistry hypothesis for why the dials sit where they sit, and the shared ground with epilepsy (~10–20% across the lifespan).", grade: "proposed" },
    { name: "Melatonin", symbol: "MLT", role: "The sleep comorbidity's best-evidenced pharmacology — after the behavioural programme (settling routine, environment) has been built first; the chronic, under-treated night-waking of autistic children has its most honest answer here.", grade: "supported", drugConnection: "Melatonin for sleep — no KYP lesson; approx ₹200–500/month (OTC-adjacent, 2026); behavioural programme always first." },
  ],
  pathways: [
    {
      id: "prediction-pathway",
      name: "The prediction engine (from unfiltered world to insistence on sameness)",
      steps: [
        { label: "The engine leans on prediction less", detail: "Models of what-happens-next consulted less; raw detail weighted more — the world arriving less filtered, less pre-formatted" },
        { label: "The social stream strains first", detail: "Faces change, tone shifts, rules are implicit — the least predictable stream of all; the child does the rational thing" },
        { label: "The anchor goes down", detail: "The same route, the same plate, the same YouTube clip, the train timetable, the ceiling fan — self-built scaffolding against static" },
        { label: "Therapy builds prediction inside the stream", detail: "Routines, visual schedules, timers for transitions, previewing any change ('tomorrow we go by auto, not car; here is the auto picture') — then stretches it" },
      ],
      clinicalManifestation: "The reupholstered sofa and the thirty-minute scream — insistence on sameness read correctly as scaffolding, and the intervention that follows from the reading.",
      grade: "supported",
    },
    {
      id: "sensory-gain-pathway",
      name: "The sensory gain dial (from dials to meltdown)",
      steps: [
        { label: "The dials sit differently", detail: "Often up: loudspeaker, mixer grinder, seams, perfume — genuinely painful or demand-collapsing; sometimes down: the name that never registers" },
        { label: "The load accumulates", detail: "Sensory input plus demands plus change stacking through a school day or a festival evening" },
        { label: "The system overflows", detail: "Meltdown or shutdown — NOT a tantrum: no audience-seeking, often with fear, exhaustion after; the system-overload outcome" },
        { label: "The audit precedes the label", detail: "Sensory profiling (an occupational-therapy job) before behavioural labelling; many 'behaviour problems' are sensory events with an obvious trigger once audited" },
      ],
      clinicalManifestation: "The Diwali-week meltdown treated with an engineering answer — ear defenders bought in advance, a retreat room identified, shorter visits — instead of punishment that deepens the spiral.",
      grade: "supported",
    },
    {
      id: "attention-tunnel-pathway",
      name: "The attention tunnel (from monotropism to the teaching handle)",
      steps: [
        { label: "The beam narrows and deepens", detail: "Monotropism: attention as a narrow, deep beam rather than the broad shared floodlight" },
        { label: "Both stereotype halves explained at once", detail: "The intense interest (dinosaurs, routes, logos, dates) AND the missed social bid — a person's wave does not enter the beam" },
        { label: "The beam is entered, not fought", detail: "Teaching inside the child's interest — language, counting, reciprocity built on doors, lids, trains — the naturalistic developmental-behavioural principle" },
        { label: "The interest becomes a talent-in-waiting", detail: "The curriculum doorway and, later, the vocational route (data entry, testing, libraries, mechanics, art)" },
      ],
      clinicalManifestation: "The boy whose lid-and-door obsession became the requesting game — the first intentional picture-handover and the screaming that lost its job.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "infancy-signs", time: "Infancy (0–12 months)", title: "The quiet first year", description: "Weak or absent name response, limited back-and-forth babble, preference for objects over faces — higher-support presentations visible in infancy; fluent-speaking presentations may not surface for years.", phase: "onset" },
    { id: "red-flag-window", time: "12–18 months", title: "The red-flag window", description: "Joint attention deviates BEFORE speech — the Name, Point, Show, Pretend check, all expected by 18 months; a fail on any one obligates immediate autism-specific assessment with hearing testing. Parents typically notice concerns by 18–24 months; diagnosis averages 3–4 years even in well-resourced systems — the two-year gap of wasted buildable time.", phase: "peak" },
    { id: "regression-window", time: "18–24 months", title: "The regression subgroup", description: "Loss of words or skills in a subgroup — always warrants workup: hearing, seizures, the Landau–Kleffner thought, the syndromes (Rett: the regression-at-6–18-months girl with hand-wringing, a specific entity, ICD-11 separate).", phase: "peak" },
    { id: "buildable-window", time: "Years 1–4", title: "The buildable window", description: "The brain's most buildable years: 15–25 structured hours weekly of naturalistic developmental-behavioural work in some form (professional plus parent-delivered), the communication channel opened whatever its form — PECS, choice-boards, speech-generating apps — and meltdowns falling as the vacuum closes.", phase: "duration" },
    { id: "school-years", time: "The school years", title: "The comorbidity decades", description: "ADHD, anxiety (the demand-heavy years, demand-avoidance presentations), chronic under-treated sleep, GI problems riding along; epilepsy's first peak in early childhood; illness presenting as behaviour change — the audit that never stops; placement decided by function and reviewed yearly.", phase: "duration" },
    { id: "adolescence-long-arc", time: "Adolescence and adulthood", title: "The second peak and the long arc", description: "Epilepsy's adolescent second peak (a regression at this age warrants EEG thinking — and catatonia-like slowing kept in mind); the masking girl presenting at 10–14; anxiety and depression spiking in the fluent-speaking, aware-of-difference profile; vocational streams from 14+; National Trust planning and the 'after us' question answered with a written plan, early.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Measured prevalence has risen steadily: current US CDC surveillance reports about 1 in 36 eight-year-olds, with most high-quality surveys elsewhere landing between 1 and 2 per 100. The rise is largely explained by broadened criteria, better detection (including girls and children without intellectual disability) and awareness — not a true epidemic of a new brain condition. Boys are identified 3–4 times more often than girls: part real biology, part girls' quieter, masking presentations being missed. Mean age of diagnosis in well-resourced systems is ~3–4 years while parents notice concerns by 18–24 months — the two-year gap early-red-flag vigilance closes.",
    indianPrevalence: "The landmark community study of over 4,000 households (Srinivasan, NIMHANS and colleagues, 2021) estimated roughly 1 in 100 children — a million-plus Indian children, heavily under-identified. The typical trajectory: concern noticed at 2–3 years, dismissed as 'he will talk late, his uncle also did'; presentation at 4–5 for 'speech delay'; diagnosis by developmental paediatricians and psychiatrists concentrated in metros; then the desert — special educators, speech therapists and occupational therapists in short supply outside cities, private therapy priced per session.",
    lifetimeRisk: "Lifelong condition with highly variable profiles; sibling recurrence roughly 10–20% in younger siblings of autistic children versus ~1% for others — a real elevation, not a certainty.",
    genderRatio: "Boys identified 3–4 times more often than girls, with the detection bias of masking documented; late-diagnosed fluent-speaking women increasingly identified in adulthood.",
    ageOfOnset: "Early childhood: higher-support presentations noticed in infancy; fluent-speaking presentations may be identified only at school age or later (the masked girl typically at 10–14).",
    indianNotes: "The two lost years are the Indian signature — parent notices at 18 months, specialist confirms at 4 years, the gap swallowed by reassurance and watchful waiting; every paediatrician and GP who checks the 18-month flags recovers those years for dozens of children per career.",
  },
  etiology: [
    { category: "genetic", factor: "The dominant story", details: "Heritability estimates 60–90% from twin studies — among the most heritable neurodevelopmental conditions; the architecture is many common gene variants of small effect PLUS rare de novo mutations; sibling recurrence ~10–20%; the 'broader autism phenotype' — social-communication quirks in parents, the biology expressed mildly, often visible in the mother who 'reads people slowly and finds assemblies unbearable'; the syndromic layer: fragile X, tuberous sclerosis, Rett (a specific entity, ICD-11 separate), chromosome 15 duplications — genetic referral with karyotype/fragile-X/CGH microarray for selected cases (syndromic clues, regression, family recurrence)." },
    { category: "biological", factor: "The neurodevelopmental modifiers", details: "Advanced parental age, prematurity, very low birth weight and prenatal exposures raising risk modestly — valproate the clearest medication signal. Deprivation-driven social difficulties (institutionalised children) can MIMIC autism and improve with care — the reason the developmental history, not just the checklist, carries the diagnosis." },
    { category: "environmental", factor: "The myths that must die", details: "NO evidence for vaccines (one retracted fraudulent paper started the claim; every large study since, including millions-strong cohorts, is negative); NO evidence that screen time causes autism (heavy screens steal practice hours and delay language in any child — limited as schedule-building, not guilt); NO evidence for cold 'refrigerator' parenting (a discarded psychoanalytic slander). Nothing a typical Indian family did or did not do CAUSES autism — stated explicitly, because blame theories are the first thing to kill." },
    { category: "social", factor: "The Indian blame climate", details: "The local myth set (vaccines, 'the mother worked', 'too much mobile', 'God's punishment') does damage twice: delays help-seeking AND loads the mother with guilt — addressed in the first session, 90 seconds of myth-killing preventing a year of maternal depression and family blame-war; the two-child-family dynamics: the 'you spoilt him' accusation from elders, and the hidden second-born at the higher recurrence risk." },
  ],
  symptomClusters: [
    {
      category: "1. The sharing channel (social communication)",
      symptoms: ["Infancy/toddlerhood: name response weak or absent; not pointing to show or request; not bringing toys to display; no shared gaze-checking; does not follow a point; limited back-and-forth babble; preference for objects over faces", "Pretend play absent or delayed (feeding a doll, 'driving' a block) while object play may be rich but repetitive — wheels spinning, lining up, sorting", "Language: delayed; echolalia (repeating heard words and scripts, often WITH meaning — 'want biscuit' memorised as one word); pronoun reversal ('you want water' meaning 'I'); unusual prosody — flat, sing-song, pedantic", "Conversation at older ages: one-sided lectures on the interest; poor reciprocal questioning; missing sarcasm, teasing and lies; idioms taken literally ('keep an eye on the bag')", "Eye contact: reduced, avoided, or used on the child's OWN terms — reduced ESPECIALLY when listening hard; a processing trade-off, not always a deficit"],
    },
    {
      category: "2. The predictability channel (restricted and repetitive)",
      symptoms: ["Repetitive motor movements: hand-flapping, finger-flicking, rocking, spinning, toe-walking — stimming as self-regulation", "Repetitive object use: lining up, sorting, opening-closing, spinning wheels", "Insistence on sameness: the same route to school, the same cup; distress at furniture moved, new clothes, haircuts; rituals around food (texture/colour-based selectivity — a nutritional issue in itself)", "Intense restricted interests: vehicles, trains, maps, celestial bodies, animal facts, video clips — the interest often a talent-in-waiting", "Sensory responses: hands over ears at mixer, blender or festivals; smell-sniffing; staring at spinning objects; pain reactions that seem too little or too much; food textures refused"],
    },
    {
      category: "3. The comorbidity layer (the frequent travellers)",
      symptoms: ["Intellectual disability in roughly a third to half of diagnosed children — determines support needs, never excludes the autism diagnosis (each judged independently)", "ADHD — very common; inattention and hyperactivity layered on the autism-specific profile", "Anxiety — especially the demand-heavy school years; 'demand avoidance' presentations", "Sleep problems (settling, night-waking) — chronic and under-treated", "Epilepsy ~10–20% across the lifespan, two peaks: early childhood and adolescence — a regression in adolescence warrants EEG thinking", "Gastrointestinal: constipation (often feeding-selectivity related) and reflux — both worsen behaviour silently", "Meltdowns and shutdowns — NOT tantrums: the system-overload outcome (sensory + demand + change), no audience-seeking, often with fear and exhaustion after", "Regression (loss of words/skills at 18–24 months) in a subgroup — always warrants workup"],
    },
    {
      category: "4. The missed girl (the clinical alert)",
      symptoms: ["Masking: imitating peers, suppressing stims, copying social scripts — holding it together at school", "The Dr Jekyll/Mr Hyde report: a different child at home — screaming, flapping when excited, scripting, exhausted", "Presenting at 10–14 with anxiety, eating difficulty or school burnout rather than with social-communication complaints", "Detection: ask about the home-collapse pattern — and ask the grandmother, the most accurate historian in the multi-generation household"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "DSM-5 / ICD-11 (logic paraphrased)",
      code: "Two domains, both required",
      criteria: [
        "(A) Persistent differences in social communication and social interaction across multiple contexts: social-emotional reciprocity, nonverbal communicative behaviours, and developing/maintaining relationships.",
        "(B) Restricted, repetitive patterns of behaviour, interests or activities — at least TWO of: stereotyped movement or speech; insistence on sameness; intense restricted interests; sensory differences (the clause most often forgotten).",
        "(C) Present from the early developmental period — may be masked until demands exceed capacity (the girl who holds it together until adolescence).",
        "(D) Causing significant impairment.",
        "(E) Not better explained by intellectual disability — which is judged INDEPENDENTLY; autism and ID coexist, one does not exclude the other.",
        "Specifiers: severity levels 1/2/3 per domain (support needed — descriptors of support, not 'mild/severe' verdicts), intellectual disability status, language level, associated medical/genetic conditions (e.g., epilepsy). ICD-11 splits the same architecture with explicit qualifiers.",
      ],
      duration: "Present from the early developmental period; identification ranges from infancy (higher-support) to adolescence or adulthood (the fluent-speaking, masking profiles).",
      indianNote: "The mnemonic RISE — Reciprocity, Interaction, Sameness, Excess/deficit of Sensation — carries the four symptom pillars; for the toddler red flags: Name, Point, Show, Pretend, all by 18 months, fail one, refer.",
    },
    {
      system: "The workup",
      code: "Clinical, structured, audited",
      criteria: [
        "Developmental history with the red-flag timeline: response to name, pointing, showing, pretend play, joint-attention episodes; regression specifically probed; family history (the broader phenotype in plain sight).",
        "Structured observation: ADOS-2 lineage (the gold-standard play/conversation-eliciting tool, with ADOS-derived calibrated severity) plus interview schedules like ADI-R/3Di in specialist centres; DSM-5/ICD-11 levels assigned for services.",
        "Developmental/IQ testing: Mullen/Bayley-lineage for toddlers, WISC-lineage for older children — literacy-adjusted for Indian children; the profile, not just a number.",
        "Language assessment by a speech-language pathologist: the receptive-versus-expressive gap is crucial — the child who UNDERSTANDS more than he produces is on a different track than global comprehension loss.",
        "Hearing test: mandatory before any 'speech delay' verdict.",
        "Medical genetics: karyotype + fragile X ± CGH microarray where syndromic clues, regression or family recurrence; metabolic screen selectively (the skin-smell-hair-organomegaly sweep).",
        "EEG where regression, staring spells or epilepsy; brain MRI only for focal signs or regression with seizure thinking.",
        "The comorbidity audit: sleep, feeding/GI, ADHD screen, anxiety — and the child's own pain/illness reporting style (illness presents as BEHAVIOUR CHANGE).",
      ],
      duration: "The assessment is longitudinal — severity levels and support plans reviewed as the child grows and the demands change.",
      indianNote: "In India the workup competes with the 'wait till three' reflex and the unexamined 'speech delay' label; the three 18-month flags (name response, pointing to show, pretend play) recover the two lost years when actually asked.",
    },
  ],
  severityScales: [
    {
      name: "DSM-5 / ICD-11 severity levels",
      fullName: "Levels of support needed (per domain)",
      measures: "Social-communication and restricted/repetitive domains each rated 1 (requiring support), 2 (requiring substantial support), 3 (requiring very substantial support) — assigned for services, alongside intellectual disability status and language level.",
      ranges: [],
      indianNote: "The levels map to the educational plan and the RPwD certification pathway, not to a verdict on the child's worth or future; they are re-assessed as support needs change.",
    },
    {
      name: "ADOS-2 calibrated severity",
      fullName: "Autism Diagnostic Observation Schedule, second edition",
      measures: "The play/conversation-eliciting gold-standard observation with calibrated severity scores; ADI-R and 3di as the interview counterparts in specialist centres — instruments NAMED and referred, items never reproduced.",
      ranges: [],
      indianNote: "Access is metro-concentrated; the developmental history with the red-flag timeline carries the diagnosis where instruments are unavailable, and the referral never waits for the tool.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Hearing impairment", distinguishingFeatures: "No pointing or showing but STRONG non-verbal reciprocity — gaze, mime, social babbling; grows fast after aids.", keyDifferentiator: "Test hearing first, always: the mandatory exclusion before any 'speech delay' verdict." },
    { condition: "Primary developmental language disorder", distinguishingFeatures: "Social reciprocity intact — eye contact, showing, pretend play and joint attention all present despite poor speech.", keyDifferentiator: "The sharing channel survives the language loss; the child connects at whatever level speech allows." },
    { condition: "Intellectual disability without autism", distinguishingFeatures: "Social interest commensurate to mental age — the child ENGAGES warmly at their level; repetitive behaviours less fixed, interests not over-focused.", keyDifferentiator: "The quality of the social bid at the child's mental age — and remember the rule: autism + ID coexist, one never excludes the other, each judged separately." },
    { condition: "Social anxiety / selective mutism", distinguishingFeatures: "History of typical infancy (pointed, showed, pretended); mute in school but speaks at home; interest in peers visible.", keyDifferentiator: "The early-years history — the sharing channel was there before the fear arrived." },
    { condition: "Attachment/deprivation history (institutionalised child)", distinguishingFeatures: "Recovers social reciprocity with sustained caregiving trajectory.", keyDifferentiator: "The developmental history again: deprivation mimics; care reveals." },
    { condition: "ADHD", distinguishingFeatures: "Impulsivity and poor attention everywhere, but pointing/showing/reciprocity age-typical.", keyDifferentiator: "Comorbidity is the norm, though — the separation is for the exam, the audit is for the plan." },
    { condition: "The masked girl (late-diagnosed)", distinguishingFeatures: "Anxiety, eating difficulty or school-burnout presentations at 10–14 with the home-collapse pattern and social-exhaustion history.", keyDifferentiator: "Probe the earlier years — pointing, showing, pretend play — and take the home version, not the school's, as the true register." },
  ],
  management: [
    { category: "psychotherapy", name: "Early intensive intervention (the core evidence)", description: "Naturalistic Developmental Behavioural Interventions (NDBI) — applied-behaviour-analysis techniques delivered inside PLAY and the CHILD'S interests, the Early Start Denver Model the archetype: 15–25 structured hours weekly in some form (professional + parent-delivered combined), measured targets, developmental sequence; ABA-lineage structured teaching for specific skills; TEACCH-style visual structure for classrooms.", whenToUse: "From diagnosis, inside the buildable years 1–4 — the window where intervention changes trajectories.", indianContext: "Professional density is thin, so parent-mediated programmes carry the dose: NIMHANS ComDEAL (Communication Development in Autism through Elevation of parent-learning) and WHO's Caregiver Skills Training (delivered in Indian districts, tele-version available) — parents trained to run naturalistic sessions through daily routines with periodic professional review." },
    { category: "psychotherapy", name: "Communication systems (speech is not the only door)", description: "Speech-language therapy for pre-verbal foundations (imitation, joint attention, requesting); AAC when speech is delayed or absent — PECS (picture exchange), choice-boards, speech-generating devices and apps; giving a communication channel REDUCES meltdowns (the behaviour IS communication; remove the vacuum and the screaming loses its job); total communication — speech + gesture + pictures + text together; typing and keyboards for older minimally-speaking children with literacy taught explicitly (reading can outpace speech); stims respected as regulation, not symptoms to extinguish first.", whenToUse: "From day one — the channel opens whatever its form; the strongest predictors of later speech (early joint-attention engagement, non-verbal problem-solving) are worked on before words.", indianContext: "PECS is cheap, trainable and home-deliverable — the Indian workhorse; the first picture-handover is a clinical event worth charting." },
    { category: "lifestyle", name: "Sensory and occupational work", description: "Occupational therapy: the sensory profile, graded exposure, daily-living skills (dressing, eating, toileting), motor coordination; environmental engineering at home — predictable spaces, warning before the blender or vacuum, clothes labels cut, food-texture mapping: cheap, powerful.", whenToUse: "Alongside the communication programme — the sensory audit precedes any behavioural label.", indianContext: "The temple loudspeaker, the mixer grinder and the wedding band are the Indian sensory calendar — anticipatory engineering (ear defenders bought in advance, a retreat room at the venue, shorter visits) keeps the child IN family and religious life instead of excluded from it." },
    { category: "lifestyle", name: "Structure and visual supports (the sameness used as medicine)", description: "Visual timetables (the picture sequence of the day), first-then boards, timers for transitions, previewing any change ('tomorrow we go by auto, not car; here is the auto picture'); consistency across home and school; social stories — short illustrated scripts for haircuts, festivals and weddings, written for the child's own event.", whenToUse: "From diagnosis onward, reviewed at every transition point — the prediction built inside the stream, then stretched.", indianContext: "The visual schedule board is a one-time cost with daily returns; the grandmother given ONE defined job (the daily 20-minute joint-attention play slot) converts the household's most accurate observer into its most reliable therapist." },
    { category: "lifestyle", name: "Education (placement by function, not stigma)", description: "Inclusion with support where possible — every child's right to neighbourhood schooling, a shadow or special educator where needed; special school when support needs exceed the inclusive classroom's capacity, decided by FUNCTION; teaching adaptations: the low-traffic corner seat, short/literal/visual instructions, warning before change, the child's interest as the curriculum doorway; NIOS/open schooling for board years; vocational streams from 14+.", whenToUse: "Reviewed yearly — placement is a tool, not a verdict.", indianContext: "Indian schools range from refusing admission ('we don't take such children') to excellent resource rooms: know the RPwD education-rights language, carry the certificate, expect the shadow-educator compromise — and ask the revealing question: 'what happens when he flaps his hands in your assembly?'" },
    { category: "pharmacotherapy", name: "Symptom-targeted only (no drug treats autism itself)", description: "Irritability/aggression/meltdown severity: risperidone and aripiprazole, the two best-evidenced (weight, sedation, prolactin monitoring). ADHD: methylphenidate/atomoxetine — usable, titrated carefully, atomoxetine often better tolerated. Sleep: behavioural programme first; melatonin the best evidence when needed. Epilepsy: standard antiepileptics, neurologist-led. SSRIs for anxiety: careful, low-start (activation risk).", whenToUse: "Never for the core condition — only for defined comorbid symptoms that impair or endanger.", indianContext: "Approx 2026 costs: risperidone ₹30–150/month, aripiprazole ₹150–600, melatonin ₹200–500, methylphenidate ₹200–600/month — the pharmacology is the cheap layer of the plan; the expensive mistake is the unexamined therapy stack." },
    { category: "lifestyle", name: "Adolescence and adulthood (the long-run)", description: "Puberty preparation with visual material; privacy and self-care skills; safety and consent teaching in concrete scripts; vulnerability protection (autistic girls and boys are abuse targets — body rules taught explicitly); mental-health watch: anxiety and depression spike in adolescents, especially the fluent-speaking, aware-of-difference profile; catatonia-like slowing kept in mind with a big regression or change; vocational training around the interest; legal planning — RPwD certification, National Trust guardianship (limited, under the 2016 amendment logic), the sibling conversation and the 'after us' written plan, done early and in the open.", whenToUse: "The adolescent transition begins years before puberty — the plan, not the crisis, carries the family.", indianContext: "Indian autism-employment initiatives exist (Action for Autism's employment work, SAP-style neurodiversity hiring pilots) but are metro-concentrated; late-diagnosed fluent-speaking adults are increasingly marrying, working and self-advocating in India." },
  ],
  safety: {
    redFlags: [
      "Regression — loss of words or skills at 18–24 months — always warrants workup: hearing, seizures, the Landau–Kleffner thought, the syndromes; never 'a phase'",
      "A previously fluent autistic adolescent with new staring spells, academic decline or regression: epilepsy's second peak — EEG/neurology evaluation BEFORE behavioural framing (catatonia-like slowing also kept in mind)",
      "Illness presenting as behaviour change: 'he is flapping much more today' is a medical symptom until proven otherwise — constipation, caries, ear infection, reflux behind the 'sudden aggression'",
      "Meltdowns read and treated as naughtiness — escalating punishment deepens the spiral; audit the sensory, demand and change load instead",
      "The school-perfect girl collapsing at home — the masking presentation arriving at 10–14 as anxiety, eating difficulty or exhaustion; probe the earlier years before settling for an adolescent-emotion label",
      "Severe texture/colour-based food selectivity — a nutritional issue in itself (the sensory-type avoidant-restrictive pattern), worsened by unmonitored elimination diets",
    ],
    urgentGuidance:
      "The order of operations: (1) refer on the 18-month flags, not after the wait — 'wait till three' costs the buildable window; (2) hearing test before any speech-delay verdict, always; (3) regression gets its workup (hearing, EEG where indicated, syndromes) — it is a symptom, not a temperament; (4) the adolescent regression gets EEG thinking before behavioural framing; (5) every behaviour change gets a medical audit before a psychiatric one; (6) protection from the cure-commerce: everything with 'cure', 'recovery' or 'detox' attached is commerce — the family given permission to fire any centre promising it, and redirected to the parent organisation the same week.",
  },
  drugLinks: [],
  contentGaps: [
    "The irritability tier — risperidone and aripiprazole, the only two drugs with solid evidence in this condition (weight, sedation, prolactin monitoring) — has no KYP drug lessons; the tier is taught here, route never invented.",
    "The ADHD rider's pharmacology (methylphenidate/atomoxetine, titrated carefully, atomoxetine often better tolerated) has no KYP lessons here; the stimulant rules belong to the ADHD course and are referenced, not duplicated.",
    "Melatonin — the best-evidenced sleep pharmacology after the behavioural programme — has no KYP lesson; taught here with the behavioural-first discipline.",
    "The epilepsy tier (standard antiepileptics, neurologist-led, ~10–20% with the adolescent second peak) has no KYP lessons; the EEG-where-regression rule is taught here.",
    "The SSRI-for-anxiety tier (careful, low-start, activation risk) names no specific SSRI in this population; the KYP SSRI lessons exist but no route is assigned to the autistic adolescent here — the comorbidity pharmacology is taught in this course, never invented as a link.",
  ],
  patientGuide: {
    whatIsIt:
      "Autism is a difference in how the brain develops its wiring for sharing — pointing, showing, eye contact used for communication, back-and-forth conversation — and its handling of sensation, attention and routine. It is present from early childhood and lifelong, and it varies enormously from person to person: one autistic child may not speak and still deeply want to connect; another may speak fluently, top the class in science, and be unable to read social subtext. Both are autistic. That is what 'spectrum' means — not a slide from mild to severe, but wildly different profiles. Around a third to half of autistic children also have intellectual disability; many others are average or above. There is no blood test; the diagnosis is clinical, and it is worth making EARLY, because the years from 1 to 4 are the brain's most buildable window, and support inside them changes trajectories.",
    whatCausesIt:
      "Strong genetic roots — heritability 60–90%, among the strongest in medicine's neurodevelopmental conditions; a younger sibling's chance is higher than average (roughly 10–20%) but most siblings develop typically. It was NOT the vaccines (studied in millions of children, no link; the one paper claiming it was fraudulent and retracted). It was NOT the mobile or the screen (they don't cause it — though heavy screen time steals practice hours and delays language in any child). It was NOT the mother working, or staying home, or 'not giving enough time', or God's punishment. Nothing a typical family did or did not do caused this — and the relatives implying otherwise are wrong. Say it plainly, kill the guilt, and spend the energy on the programme instead.",
    symptoms:
      "The sharing channel: not responding to name by 12–18 months; not pointing at a plane or dog; not bringing toys to show you; no pretend play (feeding a doll); later, one-sided conversations, missed sarcasm, idioms taken literally, eye contact used on the child's own terms. The predictability channel: hand-flapping, rocking, toe-walking; lining up and sorting toys; the same route demanded, the same cup, distress when the sofa is reupholstered or new clothes appear; intense interests (trains, vehicles, maps, animal facts) that are often talents-in-waiting; hands over ears at the mixer grinder or festival; food refused by texture or colour. Meltdowns are NOT tantrums — they are overload (sensory plus demands plus change), with no audience-seeking, often fear, and exhaustion after. Regression — actual loss of words — needs a medical review the week it is noticed, not a wait.",
    treatment:
      "Autism is supported, not cured — anyone selling a 'cure', 'recovery' or 'detox' is selling commerce, not medicine. What works: early, intensive, playful intervention built on the child's own interests (15–25 structured hours a week in some form, professional plus parent-delivered); a communication channel opened whatever its form — pictures (PECS), choice-boards, apps, typing — because giving the child a way to ask REDUCES meltdowns; occupational therapy for the sensory profile and daily skills; visual schedules, first-then boards and previewed changes (the sameness used as medicine); school placement decided by the child's support needs, reviewed yearly; and medicines ONLY for specific accompanying problems (severe irritability: two well-evidenced options exist; sleep: the behavioural programme first, then medicine; ADHD and anxiety: treated on their own terms). None of it treats autism itself — all of it builds function, communication and quality of life.",
    selfHelp: [
      "The 18-month check on the fridge: Name (does he respond?), Point (does he point to show or ask?), Show (does he bring things to display?), Pretend (does he feed a doll?) — a fail on any one means an assessment now, not at three.",
      "The dose logic of the Indian therapy market: parent-training plus ONE anchor professional session weekly, done faithfully at home, outperforms haphazard daily commercial sessions — a family with money left and a trained parent beats a family bankrupted by sessions.",
      "The engineering list: warning before the blender or vacuum, clothes labels cut, food-texture mapping, a visual timetable board, ear defenders bought before the firecracker season, a retreat room identified at the wedding venue.",
      "The interest is the doorway: enter the tunnel (lids, trains, dinosaurs) and teach inside it — requesting games with jars and lids before flashcards.",
      "One defined job for the grandmother (or whoever watches daily): the 20-minute joint-attention play slot — the household's most accurate observer becomes its most reliable therapist.",
      "Fire any centre promising a cure; the free and subsidised channels exist — district early-intervention centres (RBSK/DEIC), government hospital child-guidance clinics, NGO programmes like Action for Autism.",
      "Write the long-term plan early — functional skills first (communication, safety, toileting, daily living), the guardianship question asked while there is time to do it calmly, the sibling conversation held in the open.",
    ],
    whenToSeekHelp: [
      "Any 12–18-month-old failing the name/point/show/pretend check — assessment this month, with hearing testing; 'wait till three' is the enemy",
      "Loss of words or skills at any age — medical review now (hearing, seizures, syndromes are looked for)",
      "Behaviour change without explanation — more flapping, new agitation, sudden aggression: a medical symptom until proven otherwise (constipation, ear infection, reflux, caries)",
      "A previously fluent adolescent declining or staring — epilepsy's second peak: EEG before counselling-only plans",
      "The school-fine girl collapsing at home — exhaustion, eating difficulty, self-harm signals: ask for the earlier-years history (pointing, showing, pretend play) and the home version",
      "Any proposal involving 'cure', 'detox', stem cells or hyperbaric oxygen for autism — bring it to the treating team before money changes hands",
    ],
    indianResources: [
      "RBSK District Early Intervention Centres — the free entry point for assessment and early intervention",
      "RPwD 2016 entitlements: certification, education rights, benchmark-disability benefits where applicable",
      "The National Trust framework: limited guardianship for adults needing decision support, and Niramaya health insurance — a genuine ₹1-lakh-cover scheme for persons with autism, intellectual disability and cerebral palsy",
      "Parent organisations — Action for Autism (Delhi), Forum for Autism (Mumbai), the Autism Society of India and regional support groups: the real navigation system; refer families on day one",
      "Parent-mediated training programmes — NIMHANS ComDEAL and WHO Caregiver Skills Training (delivered in Indian districts, tele-version available)",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific autism clinical guideline exists; practice follows the DSM-5/ICD-11 construct with the NIMHANS ComDEAL model as the indigenous parent-mediated delivery evidence and WHO CST as its international sibling; the legal and service spine is the RPwD Act 2016 plus the National Trust Act framework.",
    systemContext: "The typical Indian trajectory: concern noticed at 2–3 years, dismissed ('he will talk late, his uncle also did'; 'his father also spoke at 4'); presentation to a professional at 4–5, usually for 'speech delay'; diagnosis by a developmental paediatrician or psychiatrist at centres concentrated in metros; then the desert — special educators, speech therapists and occupational therapists in short supply outside cities, private therapy priced per session. The two lost years between 'parent notices at 18 months' and 'specialist confirms at 4 years' are the system's signature failure — every paediatrician and GP who checks the three 18-month flags (name response, pointing to show, pretend play) recovers those years for dozens of children per career. Refer on the flag, not after the wait.",
    programmeContext: "The government spine: RPwD 2016 (education, employment, certification, benchmark-disability benefits where applicable); the National Trust Act (guardianship — limited, under the 2016 amendment logic — and schemes like Niramaya health insurance, a genuine ₹1-lakh-cover scheme); RBSK District Early Intervention Centres as the free entry point. The delivery evidence: NIMHANS ComDEAL and WHO's Caregiver Skills Training, delivered in Indian districts with a tele-version available. Parent organisations — Action for Autism Delhi, Forum for Autism Mumbai, regional support groups, the Autism Society of India — are the real navigation system; refer families on day one.",
    costConsiderations: "Metro therapy costs (approx 2026): speech therapy ₹400–1,000 per session, occupational therapy ₹400–1,000, autism-specific early intervention/ABT ₹500–2,000 — three to five sessions a week is a middle-class-breaking ₹6,000–30,000 per month, and families sell land for ₹25,000/month stacks. The honest counsel: parent-training plus ONE professional anchor session weekly, done faithfully at home, outperforms haphazard daily commercial sessions; free and subsidised channels exist (district early-intervention centres under RBSK, government hospital child-guidance clinics, NGO programmes like Action for Autism). The pharmacology is the cheap layer: risperidone ₹30–150/month, aripiprazole ₹150–600, melatonin ₹200–500, methylphenidate ₹200–600 (approx 2026).",
    culturalConsiderations: "The local myth set (vaccines, 'the mother worked', 'too much mobile', 'God's punishment') does damage twice — delays help-seeking AND loads the mother with guilt; the first-session script kills the myths explicitly in 90 seconds, preventing a year of maternal depression and family blame-war. The joint family: grandparents need one job — no comparisons with the cousin's child — and the grandmother saying 'this one is different from his brother at this age' is usually the most accurate historian in the room; interview her, not just the mother's notes. Festivals and meltdowns: Diwali firecrackers, wedding bands, temple crowds — anticipatory sensory planning (ear defenders in advance, a retreat room, shorter visits) keeps the child IN family and religious life instead of excluded from it. The marriage question from parents of a 4-year-old: park it — the functional-adulthood trajectory (toileting, communication, safety, work) answers the downstream question; late-diagnosed fluent-speaking adults are increasingly marrying, working and self-advocating in India. The school negotiation: from 'we don't take such children' to excellent resource rooms — the revealing interview question is 'what happens when he flaps his hands in your assembly?'",
    patientCounselling: [
      "The first-session script: kill the guilt myths explicitly (vaccines, mobile, working mother, karma) — 90 seconds of this prevents a year of maternal depression — then the honest frame: 'his brain develops differently; he learns differently; we now teach the way he learns, early and consistently; most children make big gains; it is lifelong, not curable, and absolutely worth investing in.' Then refer to a parent organisation THE SAME WEEK.",
      "The therapy-economics script: the dose logic (parent-delivered plus one anchor professional), the free channels (RBSK/DEIC, government clinics, NGO training), and permission to fire any 'cure'-promising centre — a family with money left and a parent trained beats a family bankrupted by sessions.",
      "The school script: know the RPwD education-rights language, carry the certificate, expect the shadow-educator compromise, and judge the school by its answer to the assembly question.",
      "The marriage script: park it; the functional-adulthood trajectory answers it — communication, safety, daily living, work first.",
      "The grandmother script: give her ONE defined job — the daily 20-minute joint-attention play slot — and take her comparative observations as data.",
      "The festival script: ear defenders bought in advance, a retreat room identified at the venue, shorter visits — culturally massive, clinically simple.",
    ],
  },
  decisionPath: {
    title: "The child who doesn't point — from the 18-month flags to the plan",
    nodes: [
      {
        id: "start",
        question: "Autism is the question — a flagged toddler, a 'speech delay' verdict, a school-fine girl collapsing at home, or an established diagnosis needing the programme. Which door?",
        branches: [
          { label: "Toddler 12–24 months, red flags on the check", next: "red-flag-path" },
          { label: "Older child carrying a 'speech delay' verdict", next: "speech-delay-gate" },
          { label: "Adolescent girl: school-fine, home-collapse", next: "masked-girl-path" },
          { label: "Diagnosis made; the intervention question", next: "intervention-gate" },
        ],
      },
      {
        id: "red-flag-path",
        question: "The 18-month check: Name, Point, Show, Pretend.",
        recommendation: "All four expected by 18 months. A fail on any one — no name response, no pointing to show, no bringing toys to display, no pretend play — obligates IMMEDIATE autism-specific assessment with hearing testing: 'wait till three' wastes the buildable window, and the flagged toddler referred this month is a different child at four. The regression probe runs alongside: loss of words at 18–24 months gets its own workup (hearing, seizures, the syndromes).",
      },
      {
        id: "speech-delay-gate",
        question: "The 'speech delay' verdict arrives. What stands behind it?",
        branches: [
          { label: "Hearing never tested", next: "hearing-path" },
          { label: "Reciprocity intact (points, shows, pretends)", next: "language-disorder-path" },
          { label: "Red flags on the developmental history", next: "workup-path" },
        ],
      },
      {
        id: "hearing-path",
        question: "The mandatory first exclusion.",
        recommendation: "Hearing test before any 'speech delay' verdict — always, no exceptions. The hearing-impaired child has STRONG non-verbal reciprocity (gaze, mime, social babbling) and grows fast after aids; the test is cheap, the omission costs years.",
      },
      {
        id: "language-disorder-path",
        question: "Primary developmental language disorder.",
        recommendation: "Social reciprocity intact — eye contact, showing, pretend play and joint attention all present despite the poor speech. Speech-language pathway with monitoring; the sharing channel was never the casualty, and the distinction is made on the floor of the interview, not on a word count.",
      },
      {
        id: "masked-girl-path",
        question: "The Dr Jekyll/Mr Hyde report.",
        recommendation: "The school-perfect, home-collapsing girl: probe the earlier years (pointing, showing, pretend play — 'mother had to guess needs'), take the HOME version as the true register, ask the grandmother, note the mother's own trait profile (the broader phenotype in plain sight), and assess with the adolescent tools (ADOS-2 Module 4 lineage) plus the mood/comorbidity sweep. 'Sudden stubbornness' in an autistic adolescent is usually anxiety wearing a costume.",
      },
      {
        id: "workup-path",
        question: "The autism-specific workup.",
        recommendation: "Developmental history with the red-flag timeline and the regression probe; family history; ADOS-2-lineage structured observation (ADI-R/3Di in specialist centres); developmental/IQ testing (Mullen/Bayley-lineage for toddlers, WISC-lineage for older children, literacy-adjusted); language assessment with the receptive-versus-expressive gap; hearing; genetics where syndromic clues, regression or recurrence (karyotype, fragile X, CGH microarray); EEG where regression or staring spells; MRI only for focal signs. Then: severity levels 1–3 and ID status assigned separately (each judged independently), and the comorbidity audit — sleep, feeding/GI, ADHD, anxiety, and the child's pain-reporting style.",
      },
      {
        id: "intervention-gate",
        question: "Autism confirmed. The programme is assembled by need and by what the local system can carry.",
        branches: [
          { label: "Early years, professionals available", next: "ndbi-path" },
          { label: "Thin professional density / breaking costs", next: "parent-mediated-path" },
          { label: "A comorbid symptom dominates the picture", next: "symptom-tier-path" },
        ],
      },
      {
        id: "ndbi-path",
        question: "The core evidence tier.",
        recommendation: "Naturalistic Developmental Behavioural Intervention — the Early Start Denver Model archetype: 15–25 structured hours weekly (professional plus parent-delivered combined), measured targets, developmental sequence, teaching inside the child's interests. AAC/PECS opened early when speech is delayed (the channel reduces meltdowns); OT for the sensory profile; visual structure (timetables, first-then boards, previewed changes) as the sameness used as medicine; school placement by function, reviewed yearly.",
      },
      {
        id: "parent-mediated-path",
        question: "The Indian scalable route.",
        recommendation: "ComDEAL-style parent training or WHO CST (delivered in Indian districts, tele-version available): parents trained to run naturalistic sessions through daily routines, with periodic professional review and ONE anchor session weekly. Free channels: RBSK District Early Intervention Centres, government hospital child-guidance clinics, NGO programmes (Action for Autism). Fire any centre promising a cure; the same money buys a year of parent-delivered intervention with better-documented gains.",
      },
      {
        id: "symptom-tier-path",
        question: "Pharmacotherapy — symptom-targeted only.",
        recommendation: "No drug treats autism itself. Severe irritability/aggression: risperidone and aripiprazole, the two best-evidenced (weight, sedation, prolactin monitoring). ADHD rider: methylphenidate/atomoxetine, titrated carefully. Sleep: behavioural programme first, melatonin when needed. Anxiety: SSRI careful and low-start (activation risk). Epilepsy: neurologist-led. Each comorbidity treated on its own terms — and the behaviour change audited medically before it is treated pharmacologically.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "'Wait till three' for the flagged toddler",
      why: "The two lost years: parental concern at 18 months, specialist confirmation at 4 — the brain's most buildable window spent on reassurance ('boys speak late', 'his uncle also did').",
      correction: "Refer on the 18-month flags: Name, Point, Show, Pretend — a fail on any one justifies immediate autism-specific assessment with hearing testing.",
    },
    {
      mistake: "The 'speech delay' verdict without the hearing test and the joint-attention history",
      why: "The unexamined label absorbs two treatable mimics — hearing impairment (test first, always) and the language-disorder distinction (reciprocity intact) — and closes the diagnostic mind that should be opening.",
      correction: "Hearing test mandatory; joint attention (pointing, showing, gaze-sharing) probed before any word-count verdict — it is the earliest deviating milestone, before speech.",
    },
    {
      mistake: "Diagnosing intellectual disability and stopping",
      why: "Autism and intellectual disability coexist — one does not exclude the other, and each is judged independently; the child stopped at the ID label loses the autism-specific intervention, and vice versa.",
      correction: "Both assessed, both diagnosed where present, both planned for — the dual formulation decides the services.",
    },
    {
      mistake: "Missing the masked girl until the adolescent crisis",
      why: "The school-fine, home-collapsing girl presents at 10–14 with 'anxiety', 'eating difficulty' or 'stubbornness' — the masking presentation read as adolescent emotion, the autism never asked about.",
      correction: "Ask for the home version (the Dr Jekyll/Mr Hyde report), probe the earlier years (pointing, showing, pretend play), and ask the grandmother — the single interview manoeuvre that detects it.",
    },
    {
      mistake: "Treating meltdowns as naughtiness with escalating punishment",
      why: "The meltdown is overload (sensory + demand + change), not audience-seeking conduct; punishment deepens the spiral and teaches fear — and behind 'sudden aggression' often sits a medical cause (constipation, caries, ear infection, reflux) presenting as behaviour change.",
      correction: "Audit the load (sensory triggers, demands, changes), audit the body (illness presents as behaviour change in autistic children — 'flapping much more today' is a medical symptom until proven otherwise), and engineer the environment down before any consequence system goes up.",
    },
    {
      mistake: "Banning stims as step one",
      why: "Flapping, rocking and spinning are the nervous system tuning itself — regulation removed before any replacement exists leaves the child more overloaded and less available.",
      correction: "Respect stims as regulation; intervene only when they injure the child or block learning — and even then by REPLACING, not just suppressing.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The 18-month red-flag check: Name, Point, Show, Pretend — all expected by 18 months; fail one, refer for autism-specific assessment with hearing testing.",
        "The two DSM-5 domains plus the clause most often forgotten: social communication + restricted/repetitive patterns, WITH the sensory differences clause inside the second.",
        "The earliest deviating milestone: joint attention (pointing, showing, shared gaze) — before speech.",
        "The vaccine question, answered plainly: no link in any large study (millions-strong cohorts); the original claim fraudulent and retracted; the MMR-age timing coincidence explains why the myth felt true.",
        "Meltdown versus tantrum: overload, not audience — no audience-seeking, often fear, exhaustion after.",
        "Echolalia: often MEANINGFUL language in construction ('want biscuit' memorised as one word); pronoun reversal classic ('you want water' meaning 'I').",
      ],
      practical: [
        "Take the red-flag developmental history: response to name, pointing to show, bringing toys to display, pretend play — the four questions that gave the diagnosis away in the Indore case.",
        "Detect the masked girl: ask for the HOME version of the school-fine adolescent, and interview the grandmother — the most accurate historian in the multi-generation household.",
        "Demonstrate the hearing-first discipline: no 'speech delay' verdict without the audiogram.",
      ],
      longAnswer: [
        "An 18-month-old not responding to name, with no pointing and repetitive toy play: outline the assessment and management (the evergreen essay — the red-flag history, the workup, the two-domain diagnosis, the management grid).",
        "Early red flags of autism: the developmental deviators, the regression subgroup, the immediate-referral rule.",
        "Distinguish autism from language delay and intellectual disability — the reciprocity axis and the independent-judgement rule.",
        "The role of parent-mediated intervention in LAMI settings: ComDEAL and WHO CST as the scalable delivery channel.",
      ],
    },
    neetPg: {
      highYield: [
        "PREVALENCE: ~1 in 36 (US surveillance, eight-year-olds) against ~1 in 100 (the Indian community study, 2021) — the rise is criteria, detection and awareness, not an epidemic.",
        "THE GENDER RATIO: boys identified 3–4 times more often — part real biology, part girls' masking presentations missed.",
        "THE GENETICS: twin heritability 60–90%; sibling recurrence ~10–20% versus ~1% base; the broader autism phenotype in family lines.",
        "THE COMORBIDITY MATHS: intellectual disability in roughly a third to half; epilepsy ~10–20% with TWO peaks (early childhood and ADOLESCENCE — a regression at that age means EEG thinking).",
        "THE EARLIEST DEVIATOR: JOINT ATTENTION — pointing, showing, gaze-sharing — before speech; the strongest predictors of later speech are early joint-attention engagement and non-verbal problem-solving.",
        "THE DRUG LAW: risperidone and aripiprazole — the only two with solid evidence, and only for severe irritability/aggression (weight, sedation, prolactin monitoring); NO drug treats the core condition.",
        "THE DELIVERY EVIDENCE: NDBI/early intensive (ESDM archetype, 15–25 hours) plus parent-mediated programmes (WHO CST, NIMHANS ComDEAL) — the LAMI-country answer.",
        "THE MECHANISM STORIES: the prediction engine (sameness as scaffolding), the sensory gain dial, the attention tunnel (monotropism), the connectivity pattern — each with its intervention.",
        "THE SYNDROMIC LAYER: fragile X, tuberous sclerosis, Rett (regression at 6–18 months with hand-wringing; a specific entity, ICD-11 separate), chromosome 15 duplications — the selected-cases genetics referral.",
        "THE PRENATAL SIGNAL: valproate — the clearest medication signal; advanced parental age, prematurity, very low birth weight raise risk modestly.",
        "THE INDIAN LEGAL SPINE: RPwD 2016 + National Trust (guardianship, Niramaya insurance) + RBSK/DEIC early-intervention entry.",
        "THE MNEMONICS: RISE (Reciprocity, Interaction, Sameness, Excess/deficit of Sensation) — the four symptom pillars; Name, Point, Show, Pretend — the toddler red flags.",
      ],
      pyqConcepts: [
        "The sibling-recurrence question (10–20%) — the genetics viva's steady guest.",
        "The MMR question — the settled null, stated plainly; the retracted fraudulent paper's history.",
        "The earliest-milestone question — joint attention before speech.",
        "The two-drug question — risperidone and aripiprazole for irritability, nothing for the core.",
        "The adolescent-regression question — epilepsy's second peak; EEG before behavioural framing.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 26-month-old boy brought for 'he doesn't talk': no name response even in a quiet room, never pointed at a plane or dog, brought no toys to show, opens and closes the fridge door repetitively, lined up steel tumblers, screamed for 30 minutes when the sofa was reupholstered; two video consultations had yielded 'wait till three'. The reasoning chain: the four-question red-flag history that gave the diagnosis away; hearing tested and normal (the loop closed); Mullen-scale testing showing non-verbal reasoning near-age with communication domains at 12-month level; ADOS-2 Module 1 in the autism range; management built on the prediction-engine reading — the door-and-lid interest becoming the requesting game, PECS opened with two pictures, the grandmother given the daily 20-minute joint-attention slot — and at 12 months, 40 spoken words, two-word combinations emerging, pointing at buses from the window, and a leaf shown to his father once. The lesson: the flags, the loop-closing, and the interest as the curriculum.",
        "A 13-year-old convent-school girl: three weeks of school refusal, crying spells, headaches, hand-washing 'until they feel right', 4 a.m. wakings; the school calls her a model student with top marks in science; the mother weeps that she is 'a different child at home — screaming, flapping when excited, scripting entire Attenborough episodes, the same six foods since she was small'. The reasoning chain: the Dr Jekyll/Mr Hyde report IS the masking presentation; the revisited history (sat late, walked late, no pointing — 'I had to guess her needs', one intense friendship that collapsed when the friend 'broke the rules') plus the mother's own trait profile (reads people slowly, finds assemblies unbearable — the broader phenotype in plain sight); ADOS-2 Module 4 in the autism range, cognition above average, PHQ-9 elevated, the selectivity texture-based and long-standing (a sensory signature, not body-image pathology). The lesson: diagnosis at 13 was therapy by itself — identity relief precedes skill work, and 'sudden stubbornness' in the autistic adolescent is usually anxiety wearing a costume.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Joint attention deviates before speech — the earliest milestone.",
        "Vaccines do not cause autism: the settled null; the fraudulent, retracted origin claim.",
        "Risperidone and aripiprazole for severe irritability — the two-evidence-drug answer; no drug treats the core.",
        "Meltdown is not tantrum: overload, not audience.",
        "The DSM-5 sensory clause — inside the restricted/repetitive domain, the clause most often forgotten.",
        "Echolalia is often meaningful; pronoun reversal is classic.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The prediction-engine script for parents whose child melts down when the sofa is moved: 'his brain leans on prediction less and raw detail more — the sameness is his scaffolding against static; we build prediction inside the day (schedules, previews) and then stretch it' — the script that converts a behaviour problem into an engineering problem.",
        "The therapy-economics consultation is clinical work in India: the dose logic (parent-delivered plus one anchor professional session), the free channels (RBSK/DEIC, government clinics, NGO programmes), and permission to fire any centre promising a cure — a family with money left and a parent trained beats a family bankrupted by sessions.",
        "The grandmother's observation is data: in the multi-generation household, the elder saying 'this one is different from his brother at this age' is usually the most accurate historian in the room — interview her, not just the mother's notes.",
        "The same-week rule: refer to a parent organisation (Action for Autism, Forum for Autism, regional groups) at the first consultation — they navigate what no clinic can, and the family that meets other families stays in treatment.",
        "The legal spine held early: RPwD certification, the National Trust limited-guardianship route, Niramaya's ₹1-lakh cover, and the written long-term plan with the sibling conversation held in the open — the 'after us' question answered with a plan, not reassurance.",
        "The comorbidity audit at every review: sleep, feeding/GI, ADHD, anxiety, epilepsy — and illness presenting as behaviour change, the rule that keeps autistic children medically safe inside psychiatric follow-up.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The 'speech delay' that wasn't the whole story",
      presentation: "A 26-month-old who lined up steel tumblers and screamed for thirty minutes at a reupholstered sofa — and whose two video consultations had both ended with 'wait till three'.",
      initialPresentation: "A 26-month-old boy from Indore, brought by both parents with the complaint 'he doesn't talk; his cousin spoke full sentences at two'. The history: babbling present, words absent; no response to his name even in a quiet room; never pointed at a plane or dog; brought no toys to show; repetitive door-and-lid play, tumbler-lining, and a 30-minute scream when the family sofa was reupholstered. The grandmother volunteered that 'he is different from his brother; he stays in his own world'.",
      history: "Two prior video consultations had yielded 'wait till three' — the two lost years in miniature. No regression reported. No dysmorphism noted; development otherwise unremarkable except the communication domains; the family's WhatsApp vaccine fears documented as the first session's business.",
      examination: "Gaze avoided not absolutely but under demand; tracked spinning fan blades in preference to a singing face; hearing testing tolerated and normal; no dysmorphic features. Mullen-scale testing: non-verbal reasoning near-age, communication domains both at the 12-month level. ADOS-2 Module 1 scores in the autism range; no regression.",
      diagnosis: "Autism spectrum disorder, level 2 social-communication, language at early single-word level, cognition a relative strength.",
      management: "Hearing confirmed normal (the loop closed); parents enrolled in a parent-mediated ComDEAL-style programme — weekly training at a child-guidance clinic 40 minutes away, daily home sessions built around his door-and-lid interest, requesting games with jars and lids first; PECS begun with two pictures (biscuit, ball) in week 3; occupational-therapy referral for the sensory profile (the mixer-grinder warning ritual, cut labels, firm-pressure games); a visual daily-schedule board hung at home; the grandmother given ONE defined job — the daily 20-minute joint-attention play slot, she chose the singing game; the vaccine question answered in the first session with the evidence in one paragraph, and the schedule completed.",
      outcome: "At 12 months follow-up: 40 spoken words, two-word combinations emerging, pointing at buses from the window — and showing his father a leaf once; the family sent the video. The screaming episodes had dropped from daily to twice weekly within six weeks of the first intentional picture-handover (week 6).",
      teachingPoints: [
        "The four-question 18-month history gave the diagnosis away: name response, pointing to show, bringing to display, pretend play — asked in under a minute of the Indore consultation.",
        "PECS reduced the screaming by giving communication a channel: the behaviour WAS the language, and the vacuum's closure took its job away.",
        "The interest (lids and doors) became the curriculum — the attention tunnel entered rather than fought.",
        "The grandmother was converted from blamer to therapist with one defined role — the household's best observer given the best job.",
        "'Wait till three' cost this child a year — the two lost years in one sentence.",
      ],
    },
    {
      title: "The girl who held it together at school",
      presentation: "A model student with top marks in science — who at home screamed, flapped, scripted Attenborough, and had eaten the same six foods since she was small.",
      initialPresentation: "A 13-year-old girl in a Pune convent school, brought for 'sudden stubbornness and crying spells': three weeks of school refusal, headaches, marked food selectivity, washing her hands 'until they feel right', and a 4 a.m.-waking pattern. The school's report: 'a model student, slightly quiet, top marks in science'. The home report (mother, weeping): 'she is a different child at home — screaming, flapping her hands when excited, scripting entire Attenborough episodes, and she has eaten the same six foods since she was small.'",
      history: "Revisited deliberately: sat late, walked late; no pointing in infancy (the mother had to guess her needs); intense imaginary worlds; one friendship at a time that collapsed when the friend 'broke the rules'; the lifelong home labels 'sensitive and adamant'. The mother admitted she 'reads people slowly and finds assemblies unbearable, always has' — the broader autism phenotype in plain sight.",
      examination: "Fluent language with pedantic prosody; ADOS-2 Module 4 scores in the autism range; cognition above average; PHQ-9 elevated; no eating-disorder pathology — the selectivity texture-based and long-standing, a sensory signature, not body-image.",
      diagnosis: "Autism spectrum disorder, previously unrecognised — the masking profile — with secondary anxiety and depression, and avoidant-restrictive food intake (sensory type).",
      management: "The diagnosis named to HER first — the relief scene: 'there is a name and a whole internet of girls like me' — framed as explanation, not defect. Anxiety treated with a low-dose SSRI plus CBT adapted to her literal style (written rules, explicit social scripts); a school accommodation letter (assembly-break permission, a lunch-table alternative, a 'quiet pass'); the food work referred for slow sensory-ladder desensitisation with no coercion; mother-and-child co-education about masking costs and energy accounting (a 'battery day' system for social-load planning); the father counselled separately out of the 'she is being dramatic' frame.",
      outcome: "At six months: school attendance full; flapping permitted at home ('it is how she is happy, we stopped fighting it'); the friendship question under her own active study — she read the social-communication literature herself and requested a social-coaching group.",
      teachingPoints: [
        "The Dr Jekyll/Mr Hyde home-school report IS the masking presentation — always ask for the home version.",
        "The mother's own trait profile is family history the family is living inside — the broader phenotype in plain sight.",
        "Diagnosis at 13 was therapy by itself: identity relief precedes skill work.",
        "'Sudden stubbornness' in an autistic adolescent is usually anxiety wearing a costume.",
      ],
    },
  ],
  clinicalPearls: [
    "Joint attention deviates before speech — pointing, showing, shared gaze: the earliest milestone, and the reason the 18-month Name-Point-Show-Pretend check outranks any word count.",
    "Refer on the flag, not after the wait: 'wait till three' costs the buildable window; the flagged toddler referred this month is a different child at four.",
    "Insistence on sameness is scaffolding, not stubbornness — the prediction engine read correctly; therapy builds prediction inside the social stream, then stretches it.",
    "Meltdown is not tantrum: overload, not audience — no audience-seeking, often fear, exhaustion after; punishment deepens the spiral.",
    "The settled nulls, stated plainly in clinic and viva: no vaccine link (millions-strong cohorts; one retracted fraudulent paper), no screen causation, no cold-parenting causation.",
    "Echolalia is often meaningful language in construction; pronoun reversal is classic — the child who says 'you want water' meaning 'I'.",
    "Intellectual disability and autism coexist — each judged independently; diagnosing one never excludes the other, and roughly a third to half of autistic children carry both.",
    "Risperidone and aripiprazole — the only two drugs with solid evidence, and only for severe irritability; no drug treats autism's core.",
    "Epilepsy rides along in ~10–20% with an adolescent second peak: a regression in adolescence gets EEG thinking (and catatonia on the list) before behavioural framing.",
    "Illness presents as behaviour change: 'he is flapping much more today' is a medical symptom until proven otherwise — constipation, caries, ear infection, reflux behind the 'sudden aggression'.",
    "The masked girl: school-fine, home-collapsing — the Dr Jekyll/Mr Hyde report; ask the home version and ask the grandmother.",
    "Enter the attention tunnel: the interest (lids, trains, dinosaurs) is the curriculum doorway and later the vocational route — monotropism as the teaching handle.",
    "The Indian spine: ComDEAL and WHO CST as the scalable delivery, RBSK/DEIC as the free entry, RPwD 2016 + National Trust + Niramaya as the legal frame, parent organisations referred on day one.",
  ],
  highYieldSummary: [
    "Definition: autism spectrum disorder = persistent differences in social communication and social interaction PLUS restricted, repetitive patterns of behaviour, interests or activities (at least two of stereotyped movement/speech, insistence on sameness, intense restricted interests, sensory differences — the clause most often forgotten), present from the early developmental period (possibly masked until demands exceed capacity), causing significant impairment, and not better explained by intellectual disability — which is judged independently and coexists in roughly a third to half. Severity levels 1/2/3 are per-domain support descriptors, assigned alongside ID status and language level; ICD-11 splits the same architecture with explicit qualifiers. The mnemonic RISE — Reciprocity, Interaction, Sameness, Excess/deficit of Sensation.",
    "The red-flag discipline: the 18-month check — Name, Point, Show, Pretend; a fail on any one obligates immediate autism-specific assessment WITH hearing testing. Joint attention is the earliest deviating milestone, before speech; the strongest predictors of later speech are early joint-attention engagement and non-verbal problem-solving, both worked on from day one. Parents typically notice by 18–24 months while diagnosis averages 3–4 years even in well-resourced systems — the two-year gap that early-red-flag vigilance closes; in India the gap is longer (concern at 2–3, dismissal as 'he will talk late', presentation at 4–5 for 'speech delay').",
    "The four mechanism stories and their translations: the prediction engine (less prediction, more raw detail — sameness as scaffolding; intervention: routines, visual schedules, previewing, then stretching); the sensory gain dial (dials set differently, often up — the mixer-grinder pain — sometimes down — the under-registered name-call; intervention: sensory profiling before behavioural labelling, environmental engineering); the attention tunnel (monotropism — the narrow deep beam behind both the intense interests and the missed social bids; intervention: enter the tunnel and teach inside it); the connectivity pattern (early overgrowth, atypical long-range coordination — imitation learning better slow, explicit and rewarded; intervention: the reason faces and feelings CAN be taught as skills).",
    "The differential discipline: hearing impairment (strong non-verbal reciprocity; test hearing first, always); primary developmental language disorder (reciprocity intact); intellectual disability without autism (social interest commensurate to mental age — and the coexistence rule remembered); social anxiety/selective mutism (typical infancy history, speaks at home); deprivation (recovers with sustained care — the history, not the checklist, carries it); ADHD (reciprocity age-typical, comorbidity the norm); and the masked girl (anxiety/eating/burnout at 10–14 with home-collapse — probe the earlier years, ask the grandmother).",
    "The management grid: early intensive naturalistic developmental-behavioural intervention (ESDM archetype, 15–25 structured hours weekly, professional plus parent-delivered); communication systems opened early — AAC/PECS when speech is delayed, because giving the channel reduces meltdowns; occupational and sensory work; visual structure used as medicine; education placement by function with the RPwD right to neighbourhood schooling, reviewed yearly; and pharmacotherapy ONLY for defined comorbid symptoms — risperidone and aripiprazole (irritability; weight, sedation, prolactin monitoring), methylphenidate/atomoxetine (ADHD, titrated carefully), melatonin after the behavioural sleep programme, SSRIs careful and low-start, epilepsy neurologist-led. No drug treats autism itself. Nothing with 'cure', 'recovery' or 'detox' attached is medicine — the gluten-casein-free trial shows weak and inconsistent evidence and unmonitored diets worsen the selective eating.",
    "The comorbidity layer that changes management: intellectual disability (a third to half — support needs), ADHD (very common), anxiety (the demand-heavy years), sleep (chronic, under-treated), GI (constipation, reflux — worsening behaviour silently), epilepsy (~10–20%, two peaks: early childhood and adolescence — adolescent regression means EEG), meltdowns/shutdowns (overload, not conduct), and the regression subgroup (loss of words at 18–24 months — workup obligatory: hearing, seizures, the Landau–Kleffner thought, the syndromes). The standing rule: illness in autistic children presents as BEHAVIOUR CHANGE.",
    "The India layer: prevalence ~1 in 100 (the NIMHANS community study of 4,000+ households, 2021) against ~1 in 36 in US surveillance, a million-plus under-identified children; the two lost years; the therapy desert outside metros with its ₹6,000–30,000/month session stacks (speech/OT ₹400–1,000 per session, ABT ₹500–2,000 — approx 2026) answered by the dose logic: parent-training plus ONE anchor professional session, free channels through RBSK/DEIC, government child-guidance clinics and NGO programmes; the scalable delivery evidence in NIMHANS ComDEAL and WHO CST (delivered in Indian districts, tele-version available); the legal spine of RPwD 2016, National Trust limited guardianship and the ₹1-lakh-cover Niramaya insurance; the cultural work of killing the blame myths in 90 seconds, giving the grandmother one defined job, planning the festivals with ear defenders and retreat rooms — and referring to the parent organisations (Action for Autism, Forum for Autism) on day one, because they navigate what no clinic can.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "asd-quiz-1",
      question: "The earliest developmental milestone that typically deviates in autism:",
      options: ["Walking", "Joint attention (pointing, showing, shared gaze)", "Single words", "Bowel control"],
      correctIndex: 1,
      explanation: "Joint attention deviates before speech — the 18-month Name, Point, Show, Pretend check exists because the sharing channel moves first.",
      afterSectionId: "symptoms",
    },
    {
      id: "asd-quiz-2",
      question: "An 18-month-old fails the red-flag check (no name response, no pointing, no showing, no pretend play). The correct action:",
      options: ["Reassure and review at age 3", "Refer for autism-specific assessment now, with hearing testing", "Advise speech therapy only", "Wait for regression to occur"],
      correctIndex: 1,
      explanation: "The flags justify immediate referral: 'wait till three' wastes the buildable window — the years from 1 to 4 are the brain's most buildable.",
      afterSectionId: "diagnosis",
    },
    {
      id: "asd-quiz-3",
      question: "The DSM-5 two-domain structure, plus the clause most often forgotten:",
      options: ["IQ + adaptive function", "Social communication + restricted/repetitive patterns — with the sensory differences clause", "Language delay + motor stereotypies", "Anxiety + attachment"],
      correctIndex: 1,
      explanation: "The sensory clause sits inside the restricted/repetitive domain — and sensory triggers sit behind much of what gets labelled 'behaviour'.",
      afterSectionId: "diagnosis",
    },
    {
      id: "asd-quiz-4",
      question: "A school-perfect 13-year-old girl screams and flaps only at home, eats the same six foods, and held one intense friendship that collapsed when the friend 'broke the rules'. Best hypothesis:",
      options: ["Conduct disorder", "Masked autism with the home-collapse pattern", "Early psychosis", "Oppositional defiant disorder"],
      correctIndex: 1,
      explanation: "The Dr Jekyll/Mr Hyde report: probe the earlier years (pointing, showing, pretend play) and take the home version as the true register.",
      afterSectionId: "differential",
    },
    {
      id: "asd-quiz-5",
      question: "The two best-evidenced drugs for severe irritability/aggression in autism:",
      options: ["Fluoxetine and lithium", "Risperidone and aripiprazole", "Haloperidol and diazepam", "Atomoxetine and clonidine"],
      correctIndex: 1,
      explanation: "Symptom-targeted pharmacotherapy with weight, sedation and prolactin monitoring — and no drug treats the core condition.",
      afterSectionId: "management",
    },
    {
      id: "asd-quiz-6",
      question: "The Indian parent-mediated early-intervention programme developed at NIMHANS, and its international sibling:",
      options: ["ComDEAL — with WHO CST as the international sibling", "Dava-Pairav and Tele-MANAS-child", "SNEHA-ASHA and ASHA-Kiran", "Niramaya and Anmol"],
      correctIndex: 0,
      explanation: "Communication DEall: parent-training as the scalable delivery channel; WHO's Caregiver Skills Training is the international sibling delivered in Indian districts.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the 18-month red-flag check and state what a fail on any one item obligates you to do.", answer: "THE CHECK: Name, Point, Show, Pretend — response to name, pointing to show or request, bringing toys to display, and pretend play (feeding a doll, 'driving' a block); all expected by 18 months. The clinical recitation is the three-flag version (name response, pointing to show, pretend play). THE OBLIGATION: immediate autism-specific assessment WITH hearing testing — never 'wait till three', never a speech-therapy-only verdict. The reasoning: joint attention deviates before speech, the years from 1 to 4 are the brain's most buildable window, and the two lost years between parental concern (18–24 months) and typical diagnosis (3–4 years, later in India) are exactly the years intervention changes trajectories. Every paediatrician and GP who runs this check recovers those years for dozens of children per career — refer on the flag, not after the wait.", topic: "Diagnosis" },
    { question: "State the two DSM-5 domains plus the sensory clause, and explain how severity levels 1–3 map to support rather than to 'mild/defect'.", answer: "DOMAIN A: persistent differences in social communication and social interaction across multiple contexts — social-emotional reciprocity, nonverbal communicative behaviours, developing and maintaining relationships. DOMAIN B: restricted, repetitive patterns of behaviour, interests or activities — at least TWO of stereotyped movement/speech, insistence on sameness, intense restricted interests, and SENSORY DIFFERENCES (the clause most often forgotten). Plus: present from the early developmental period (may be masked until demands exceed capacity — the girl who holds it together until adolescence), causing significant impairment, and not better explained by intellectual disability — which is judged INDEPENDENTLY and coexists. THE LEVELS: 1 (requiring support), 2 (requiring substantial support), 3 (requiring very substantial support), assigned PER DOMAIN alongside ID status and language level — they are descriptors of the support the child needs for services and education planning, not verdicts on worth, intelligence or future; they are re-assessed as demands and supports change. The mnemonic RISE carries the pillars: Reciprocity, Interaction, Sameness, Excess/deficit of Sensation.", topic: "Diagnosis" },
    { question: "Why is 'he will talk late' a dangerous sentence at 24 months — and what distinguishes autism from pure language delay on the floor of the interview?", answer: "WHY DANGEROUS: it is the sentence that swallows the two lost years — parental concern at 18 months, specialist confirmation at 4, with the buildable window spent on reassurance; it is also the sentence the Indian system says by reflex ('his uncle also did', 'his father also spoke at 4'). THE DISTINCTION ON THE FLOOR: the sharing channel. The autistic 24-month-old has weak or absent name response, no pointing to show or request, no bringing of toys to display, no shared gaze-checking, no following of a point, and absent or delayed pretend play — while object play may be rich but repetitive (lining up, spinning wheels, opening-closing). The child with a primary developmental language disorder has poor speech with INTACT reciprocity: eye contact, showing, pretend play and joint attention all present — the child connects at whatever level speech allows. The hearing-impaired child shows STRONG non-verbal reciprocity (gaze, mime, social babbling) and grows fast after aids — which is why hearing is tested first, always, before any speech-delay verdict is allowed to stand. Echolalia with meaning and pronoun reversal point further toward autism when present.", topic: "Differential" },
    { question: "Explain the prediction-engine story to a parent whose child melts down when the sofa is moved — and give two interventions that follow from it.", answer: "THE STORY (the parent version): the brain runs on prediction — it builds models of what happens next and flags surprises. In autism the engine leans on prediction less and on raw detail more, so the world arrives less filtered, less pre-formatted: more like static than a familiar programme. Social life is the least predictable stream of all — faces change, tone shifts, rules are implicit — so the child does the rational thing and anchors to the predictable: the same route, the same plate, the same sofa. The meltdown at the reupholstered sofa is not naughtiness about fabric — it is the loss of an anchor, the scaffolding against static pulled away. INTERVENTION ONE: build prediction INSIDE the day — the visual timetable (the picture sequence of the day), first-then boards, timers for transitions, and previewing every change before it arrives ('tomorrow we go by auto, not car; here is the auto picture'). INTERVENTION TWO: stretch the prediction gently, not abruptly — new things introduced with warning, rehearsal and social stories (the illustrated script for the haircut, the festival, the wedding), and the sensory layer engineered alongside (labels cut, warning before the blender, ear defenders bought before Diwali). Therapy does not remove the scaffolding need — it builds prediction inside the social stream, then stretches it.", topic: "Mechanism" },
    { question: "Give the evidence hierarchy of intervention in autism — and the role of medication: which two drugs, for which symptom, with what monitoring?", answer: "THE HIERARCHY: (1) EARLY INTENSIVE NDBI — naturalistic developmental-behavioural intervention, the Early Start Denver Model the archetype: ABA-lineage techniques delivered inside play and the child's interests, 15–25 structured hours weekly in some form (professional plus parent-delivered combined), measured targets, developmental sequence — the core evidence for communication, adaptive function and later school placement. (2) PARENT-MEDIATED DELIVERY — the scalable route where professionals are thin: NIMHANS ComDEAL and WHO Caregiver Skills Training (delivered in Indian districts, tele-version available), parents trained to run naturalistic sessions through daily routines with periodic professional review. (3) COMMUNICATION SYSTEMS — speech-language therapy for pre-verbal foundations, and AAC/PECS opened early when speech is delayed: giving a channel REDUCES meltdowns because the behaviour IS communication. (4) OT AND SENSORY WORK — the sensory profile, graded exposure, daily-living skills, environmental engineering. (5) STRUCTURE — visual schedules, previewing, social stories, TEACCH-style classroom structure; education placement by function. MEDICATION'S ROLE: symptom-targeted only, no drug treats the core. The TWO drugs: risperidone and aripiprazole — the only two with solid evidence, for severe irritability/aggression/meltdown severity — with weight, sedation and prolactin monitoring as the price. The riders treated on their own terms: methylphenidate/atomoxetine for ADHD (titrated carefully), melatonin for sleep after the behavioural programme, SSRIs for anxiety careful and low-start (activation risk), antiepileptics neurologist-led.", topic: "Management" },
    { question: "Name the Indian service spine for autism — and give one honest sentence about therapy economics.", answer: "THE SPINE: RBSK's District Early Intervention Centres as the free entry point; RPwD 2016 entitlements (certification, education rights, benchmark-disability benefits where applicable); the National Trust Act framework (limited guardianship for adults needing decision support, and Niramaya health insurance — a genuine ₹1-lakh-cover scheme for persons with autism, ID and cerebral palsy); the delivery evidence of NIMHANS ComDEAL and WHO CST; and the parent organisations — Action for Autism Delhi, Forum for Autism Mumbai, the Autism Society of India and regional groups — the real navigation system, referred to on day one. THE ECONOMICS SENTENCE: metro therapy runs ₹400–1,000 per speech or occupational session and ₹500–2,000 for autism-specific early intervention, so three-to-five sessions a week is a middle-class-breaking ₹6,000–30,000 a month (approx 2026) — and the honest counsel is that parent-training plus ONE professional anchor session weekly, done faithfully at home, outperforms haphazard daily commercial sessions, while the free channels (RBSK/DEIC, government child-guidance clinics, NGO programmes) carry the families the market excludes: a family with money left and a trained parent beats a family bankrupted by sessions.", topic: "Indian context" },
    { question: "List five comorbidities that change management in autism — and state the illness-presents-as-behaviour-change rule.", answer: "THE FIVE: (1) EPILEPSY — ~10–20% across the lifespan with two peaks, early childhood and adolescence; an adolescent regression gets EEG thinking (and catatonia on the list) before behavioural framing. (2) ADHD — very common; inattention and hyperactivity layered on the autism profile, treated on its own terms. (3) SLEEP — settling and night-waking problems, chronic and under-treated; behavioural programme first, melatonin the best-evidenced pharmacology when needed. (4) GASTROINTESTINAL — constipation (often feeding-selectivity related) and reflux, both worsening behaviour silently. (5) ANXIETY — especially the demand-heavy school years and the fluent-speaking, aware-of-difference adolescent; in the masked girl it is the presenting costume. (Also deserving the list: intellectual disability in a third to half, and the feeding/nutrition layer.) THE RULE: illness in autistic children presents as BEHAVIOUR CHANGE — the mother who says 'he is flapping much more today' is reporting a medical symptom until proven otherwise; constipation, caries, ear infection and reflux sit behind 'sudden aggression' often enough that the medical audit precedes the behavioural and pharmacological response, every time.", topic: "Clinical practice" },
    { question: "What is the masking presentation in girls — and which single interview manoeuvre detects it?", answer: "THE PRESENTATION: girls more often mask — imitating peers, suppressing stims, copying social scripts — holding it together at school and collapsing at home: the Dr Jekyll/Mr Hyde report (the model student, slightly quiet, top marks; the different child at home — screaming, flapping when excited, scripting, exhausted). They present at 10–14 not with social-communication complaints but with anxiety, eating difficulty, school refusal or exhaustion — and are read as adolescent emotion until someone asks the earlier-years history (pointing, showing, pretend play: 'mother had to guess her needs') and notices the sensory signature (the same six foods since small, the assemblies that were always unbearable) and often the mother's own trait profile — the broader autism phenotype in plain sight. THE MANOEUVRE: ask for the HOME version — 'how is she at home?' — and take it, not the school's report, as the true register; in the multi-generation household, ask the grandmother, usually the most accurate historian in the room. The follow-through: diagnosis named to HER first, framed as explanation not defect — identity relief precedes skill work; diagnosis at 13 was therapy by itself.", topic: "Clinical practice" },
  ],
  faqs: [
    { question: "Did the vaccines do this?", answer: "No. This has been studied more than almost any question in medicine — very large studies across countries, including over a million children, find no link; the one paper that claimed it was fraudulent and retracted, its author struck off. Vaccines prevented diseases that used to kill and disable children; they did not cause this. The timing coincidence explains why the myth felt true: the MMR age overlaps with when autism becomes visible." },
    { question: "Was it because I gave him the mobile too early?", answer: "No. Screens do not cause autism. (Screens also do not treat it — and heavy screen time can steal practice hours and delay language in ANY child, so we limit them: as schedule-building, not as guilt.)" },
    { question: "Will he ever speak?", answer: "Most autistic children develop useful speech, and those who do not can still communicate — pictures, apps, typing. Our job is to open a communication channel whatever form it takes. The strongest predictors of later speech are early joint-attention engagement and non-verbal problem-solving — both of which we work on from day one, before words." },
    { question: "A centre says they can cure autism with diet, detox, stem cells or hyperbaric oxygen.", answer: "No treatment cures autism. A child who improves did so through development and teaching, not the diet — and the improvement gets sold back to you as the diet's miracle. The gluten-casein-free trial shows weak and inconsistent evidence, and unmonitored diets can worsen the already-selective eating. The same money buys a year of parent-delivered intervention with better-documented gains." },
    { question: "Is it because I worked, or didn't give enough time?", answer: "No. This is a neurodevelopmental difference with strong genetic roots. Mothers who worked did not cause this, mothers who stayed home did not prevent it, and the relatives implying otherwise are wrong. You are now the most important resource this child has — guilt will waste your energy." },
    { question: "Special school or normal school?", answer: "The child's support needs decide, not our ambition or shame. A child who can learn in a classroom with adaptations belongs in the inclusive school with support — which is also his legal right under RPwD; a child who needs a low-sensory, high-structure, individually-paced setting learns MORE in the special school. Placement is reviewed yearly: a tool, not a verdict." },
    { question: "Why does he flap his hands — should we stop it?", answer: "Flapping and rocking are how his nervous system regulates itself; they usually mean excitement or coping, not illness. Stopping them by force removes the coping without removing the need. We intervene on stims only when they injure the child or block learning — and even then by replacing, not just suppressing." },
    { question: "What about a second child — will it also have autism?", answer: "The chance is higher than the base rate — roughly 10–20% for a younger sibling versus about 1% for others. A real elevation, but not a certainty: most siblings develop typically. A pregnancy decision is bigger than this number; genetic counselling can individualise it." },
    { question: "What will happen to him when we are gone?", answer: "That question is why we plan: functional skills (communication, safety, daily living), the National Trust guardianship route, the sibling conversation held early and in the open, and a written long-term plan — while building whatever independent living his trajectory allows. Ask for the planning session now, not the reassurance version; the plan is what lets you sleep." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-5 / DSM-5-TR (APA) — the autism spectrum disorder construct (logic paraphrased; criteria not reproduced)" },
      { source: "WHO ICD-11 — the autism spectrum disorder framing with explicit qualifiers" },
      { source: "WHO Caregiver Skills Training (CST) programme — the parent-mediated delivery channel for developmental disorders in LAMI settings" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.3 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Dawson G et al. — the Early Start Denver Model randomised trial (early intensive intervention evidence)" },
      { source: "RUPP Autism Network — the risperidone and aripiprazole trials behind the two-evidence-drug position for irritability" },
      { source: "Srinivasan SM et al. (NIMHANS) — the Indian community prevalence study (~1 in 100, 2021)" },
    ],
    reviews: [
      { source: "Zwaigenbaum L et al. — early identification of autism (the red-flag evidence); Ozonoff S et al. — the sibling-recurrence work" },
      { source: "Schreibman L et al. — parent-mediated naturalistic training (the delivery-route evidence)" },
      { source: "Lord C et al. — the ADOS-2/ADI-R diagnostic instrument literature (named only, items not reproduced)" },
      { source: "Taylor B, Hvidtjørn D et al. — the MMR null lineages, including the retracted Wakefield paper's history" },
      { source: "NIMHANS Communication DEall (ComDEAL) programme literature — the Indian parent-mediated evidence" },
    ],
    patientResources: [
      { source: "Action for Autism (Delhi), Forum for Autism (Mumbai), the Autism Society of India and regional parent support groups — the navigation system referred on day one" },
      { source: "RPwD Act 2016, the National Trust Act framework (limited guardianship; Niramaya insurance) and RBSK District Early Intervention Centres — the entitlement and free-entry spine" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "9 min",
      description: "Plain language: the two channels, the 18-month check, what helps, what to refuse, and the Indian rails.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "31 min",
      description: "The red-flag check, the two-domain logic, the four brain stories, the differential, the management grid.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "40 min",
      description: "Full course with the decision path, Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "48 min",
      description: "Everything — the workup discipline, the comorbidity pharmacology, the India layer, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The two channels, the red-flag check, the prevalence arithmetic.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite Name, Point, Show, Pretend and what a fail obligates." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The prediction engine, the sensory gain dial, the attention tunnel, the connectivity pattern.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can tell the four brain stories to a parent and derive an intervention from each." },
    { number: 3, title: "Clinical Practice", description: "The workup discipline, the mimics, the management grid, the comorbidity pharmacology.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the red-flag history, the hearing-first rule and the symptom-targeted drug tier." },
    { number: 4, title: "Indian Context", description: "The two lost years, the therapy economics, the parent-mediated route, the legal spine.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the first-session script and the dose-logic counselling." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the 18-month-old essay cold and the vaccine viva plainly." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 9.2.3 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "DSM-5 / DSM-5-TR (APA) — the autism spectrum disorder construct (logic paraphrased; criteria not reproduced)", sourceType: "classification", year: "2013–2022", dateReviewed: "2026-09-29" },
    { id: "S3", source: "WHO ICD-11 — the autism spectrum disorder framing with explicit qualifiers", sourceType: "classification", year: "2019–2022", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Maenner MJ et al. — CDC ADDM surveillance reports (the ~1-in-36 eight-year-old prevalence line; the detection-bias reading of the boy:girl ratio)", sourceType: "primary", year: "2020s", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Srinivasan SM et al. (NIMHANS and colleagues) — the Indian community prevalence study of 4,000+ households (~1 in 100, 2021)", sourceType: "primary", year: "2021", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Zwaigenbaum L et al. — early identification of autism (the red-flag evidence); Ozonoff S et al. — the sibling-recurrence work", sourceType: "review", year: "2000s onward", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Dawson G et al. — the Early Start Denver Model randomised trial (early intensive intervention); Schreibman L et al. — parent-mediated naturalistic training (the delivery route)", sourceType: "trial", year: "2010s", dateReviewed: "2026-09-29" },
    { id: "S8", source: "WHO — the Caregiver Skills Training programme for developmental disorders (LAMI-country delivery, including Indian districts and the tele-version)", sourceType: "who", year: "2020s", dateReviewed: "2026-09-29" },
    { id: "S9", source: "NIMHANS Communication DEall (ComDEAL) programme literature — the Indian parent-mediated delivery evidence", sourceType: "review", year: "2010s", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Hvidtjørn D et al. / Taylor B et al. and the MMR-contrast lineages — the vaccine-autism null findings (including the retracted Wakefield paper's history)", sourceType: "review", year: "1998–2019", dateReviewed: "2026-09-29" },
    { id: "S11", source: "RUPP Autism Network — the risperidone and aripiprazole trials: the two-evidence-drug position for irritability in autism", sourceType: "trial", year: "2000s–2010s", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Lord C et al. — the ADOS-2/ADI-R diagnostic instrument literature (named only, items not reproduced; the 3Di as the interview counterpart)", sourceType: "primary", year: "1989 onward", dateReviewed: "2026-09-29" },
    { id: "S13", source: "Indian legal/service layer: RPwD Act 2016; the National Trust Act framework (limited guardianship; Niramaya insurance); RBSK/District Early Intervention Centres; Action for Autism and Forum for Autism service navigation — with approx 2026 cost realities", sourceType: "government", year: "2016 onward", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "Prevalence: about 1 in 36 eight-year-olds in current US CDC surveillance, most high-quality surveys elsewhere landing 1–2 per 100; the rise largely explained by broadened criteria, better detection (girls, children without intellectual disability) and awareness — not a true epidemic of a new brain condition; boys identified 3–4 times more often, part real biology and part masking presentations missed; parents typically noticing concerns by 18–24 months against a mean diagnosis age of ~3–4 years.", grade: "established", sources: ["S2", "S4", "S6"] },
    { text: "India: the landmark community study of over 4,000 households (Srinivasan, NIMHANS and colleagues, 2021) estimating roughly 1 in 100 children — a million-plus, heavily under-identified; the typical trajectory of concern at 2–3 years dismissed as 'he will talk late', presentation at 4–5 for 'speech delay', metro-concentrated diagnosis, then the therapy desert outside cities.", grade: "established", sources: ["S5", "S13"] },
    { text: "Genetics: twin-study heritability 60–90% — among the most heritable neurodevelopmental conditions; many common variants of small effect plus rare de novo mutations; sibling recurrence roughly 10–20% versus ~1% base; the broader autism phenotype in family lines; the syndromic layer (fragile X, tuberous sclerosis, Rett — a specific entity, ICD-11 separate — and chromosome 15 duplications) behind selected genetic referrals (karyotype, fragile X, CGH microarray).", grade: "established", sources: ["S1", "S6"] },
    { text: "The environmental nulls: no evidence for vaccines (one retracted fraudulent paper; every large study since, including millions-strong cohorts, negative), no evidence that screen time causes autism (heavy screens steal practice hours and delay language in any child), and no evidence for cold 'refrigerator' parenting — a discarded psychoanalytic slander; advanced parental age, prematurity, very low birth weight and prenatal valproate (the clearest medication signal) raise risk modestly.", grade: "established", sources: ["S1", "S10"] },
    { text: "The four mechanism stories — the prediction engine (less prediction, more raw detail; sameness as self-built scaffolding), the sensory gain dial (differently set, often up — genuine pain at ordinary volumes — sometimes down), the attention tunnel (monotropism: the narrow deep beam behind both intense interests and missed social bids), and the connectivity pattern (early overgrowth with atypical long-range coordination; imitation learning better slow, explicit and rewarded) — taught as working models with direct intervention translations.", grade: "supported", sources: ["S1", "S7"] },
    { text: "Early identification: joint attention (pointing, showing, gaze-sharing) deviates before speech — the 18-month red-flag check (Name, Point, Show, Pretend; fail one, refer now) with hearing testing; regression at 18–24 months in a subgroup, always warranting workup (hearing, seizures, the Landau–Kleffner thought, the syndromes); 'wait till three' as the two-lost-years error.", grade: "established", sources: ["S2", "S6"] },
    { text: "Diagnosis: the two-domain DSM-5/ICD-11 logic (social communication + restricted/repetitive with the sensory clause), present from the early developmental period possibly masked until demands exceed capacity, causing impairment, intellectual disability judged independently and coexisting (a third to half of diagnosed children); the ADOS-2-lineage observation with ADI-R/3Di in specialist centres; Mullen/Bayley- and WISC-lineage testing literacy-adjusted; hearing mandatory; EEG where regression or staring; MRI only for focal signs.", grade: "established", sources: ["S1", "S2", "S3", "S12"] },
    { text: "Intervention: naturalistic developmental behavioural intervention (the Early Start Denver Model archetype) at 15–25 structured hours weekly improving communication, adaptive function and later school placement; parent-mediated delivery as the scalable route (Schreibman's naturalistic training lineage; NIMHANS ComDEAL and WHO CST delivered in Indian districts with a tele-version); AAC/PECS opening a communication channel that reduces meltdowns; occupational-sensory work and visual structure; education placement by function with the RPwD right to neighbourhood schooling.", grade: "established", sources: ["S7", "S8", "S9", "S13"] },
    { text: "Pharmacotherapy: symptom-targeted only — no drug treats autism's core; risperidone and aripiprazole the two best-evidenced for severe irritability/aggression (weight, sedation, prolactin monitoring); methylphenidate/atomoxetine usable for the ADHD rider with careful titration; behavioural sleep programme first with melatonin the best evidence when needed; SSRIs for anxiety careful and low-start (activation risk); epilepsy standard antiepileptics, neurologist-led.", grade: "established", sources: ["S11"] },
    { text: "The comorbidity layer: epilepsy ~10–20% across the lifespan with early-childhood and adolescent peaks (an adolescent regression warrants EEG thinking, catatonia kept in mind); illness in autistic children presenting as BEHAVIOUR CHANGE; meltdowns and shutdowns as system-overload outcomes, not tantrums; the masking girl presenting at 10–14 with anxiety, eating difficulty or exhaustion and the Dr Jekyll/Mr Hyde home-school report as her signature.", grade: "established", sources: ["S1", "S2", "S4"] },
    { text: "The India layer: the two lost years between parental concern and specialist confirmation; the therapy economics (speech/OT ₹400–1,000 per session, autism-specific early intervention ₹500–2,000, middle-class-breaking ₹6,000–30,000/month stacks at 3–5 sessions weekly — approx 2026) answered by the dose logic of parent-training plus one anchor professional session; the free channels (RBSK District Early Intervention Centres, government child-guidance clinics, NGO programmes); the pharmacology as the cheap layer (risperidone ₹30–150/month, aripiprazole ₹150–600, melatonin ₹200–500, methylphenidate ₹200–600 — approx 2026).", grade: "supported", sources: ["S9", "S13"] },
    { text: "The legal and family spine: RPwD 2016 entitlements (certification, education rights, benchmark-disability benefits), the National Trust framework with limited guardianship under the 2016 amendment logic and Niramaya health insurance (a genuine ₹1-lakh-cover scheme for persons with autism, ID and cerebral palsy); the first-session myth-killing script (90 seconds preventing a year of maternal depression); the grandmother as the most accurate historian; festival anticipatory sensory planning; parent organisations referred the same week.", grade: "supported", sources: ["S13"] },
  ],
};
