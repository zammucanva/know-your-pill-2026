import type { PsychiatryCourse } from "./types";

/**
 * INDIGENOUS & FOLK HEALING — canonical Psychiatry concept course
 * (migration batch 14, Group P — treatment methods).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/indigenous-healing.md — untouched
 * foundation, itself built on Tseng's Oxford ch 6.5 synthesis),
 * re-researched against the lineages the note itself cites
 * (Frank's Persuasion and Healing, Torrey's Witchdoctors and
 * Psychiatrists, Kennedy's zar study, Jilek's spirit-dancing and
 * advantages work, Prince's Yoruba ritual, Griffith & Mahy's
 * Spiritual Baptist study, Hsu's temple counselling, Kirmayer's
 * metaphor synthesis) with per-claim provenance.
 *
 * Drug routes: the note assigns no medication any role in folk
 * healing — drugLinks is empty by design; the comorbidity riders
 * (dissociative, psychotic, depressive) are treated in their own
 * courses; the herbal-interaction and psychedelic lines have no
 * KYP lessons and are recorded in contentGaps, never invented.
 */
export const indigenousHealingCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "indigenous-healing",
  title: "Indigenous & Folk Healing — Culturally Embedded Care",
  shortName: "Folk Healing",
  kind: "concept",
  category: "Treatment Methods",
  groupLetter: "P",
  groupName: "Treatment methods",
  learningPath: ["Psychiatry", "Treatment Methods", "Indigenous & Folk Healing — Culturally Embedded Care"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "30 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "Shamanism, zar ceremonies, sacrificial ritual, divination and temple fortune-sticks are not psychology to the people who use them — they are religion and magic — yet they deliver recognisable psychotherapeutic effects through shared common factors, and the psychiatrist's job is knowledgeable respect, selective support and protection from harm.",

  summary:
    "The field Tseng's chapter defines: non-orthodox therapeutic practices based on indigenous cultural traditions, operating outside official healthcare systems, validated by experience rather than science, and — the key property — CULTURALLY EMBEDDED: so intensely rooted in the cultural system that invented them that they do not transplant where they lack meaning and legitimacy. Neither healer nor client calls any of it psychological therapy, yet from the mental-health point of view these practices often deliver genuine psychotherapy: FOLK PSYCHOTHERAPY. The course walks the four orientations (supernatural, natural, medical-physiological, socio-psychological); the spirit-mediumship fork the exam loves — the SHAMAN dissociates while the client consults the supernatural through him, whereas in the ZAR ceremony the CLIENT enters the dissociated state herself; the religious healing ceremonies (Salish spirit dancing's brainwashing-like three phases, the Yoruba sacrifice's reassurance-and-conviction logic, Spiritual Baptist mourning's 7 days, snake-handling's risk of death, the Christian healing spectrum); divination's therapeutic operation (the clear-cut answer plus the NAMING effect — the Rumpelstiltskin principle: anxiety falls when the trouble is named); and fortune-telling's quieter liberty — fate is modifiable, the goal adjustment rather than resignation. The synthesis: the common therapeutic factors shared with modern psychotherapy (hope aroused by capitalising on dependency, naming, the healer's admired qualities, expectation and emotional arousal, learning and mastery, technique — Frank, Torrey, Kirmayer), the traditional sector's documented advantages, the chapter's tri-partite stance (prohibit nothing blindly, study everything, support what helps), the five harms the protection duty covers, and the regulation demand — periodic survey and reevaluation so malpractice is prevented. The Indian translation is the chapter's best illustration: the temple-dargah-ojha landscape, the entry question ('which healer has he seen, what was done, what did it cost?'), the possession-trance triad, and the Erwadi-type institutions that make the regulation demand an Indian clinical duty, not an abstraction.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Define indigenous and folk healing with all four defining elements — non-orthodox, based on indigenous cultural traditions, operating outside official healthcare systems, experience-validated — and explain 'culturally embedded' and 'folk psychotherapy'.",
    "Place the major practices on the four-orientation spectrum (supernatural, natural, medical-physiological, socio-psychological) with one practice for each.",
    "Distinguish shamanism from the zar ceremony by WHO dissociates, and state each mechanism list — the shaman's authority, suggestion and hope against the zar's catharsis, desire fulfilment and female-role compensation.",
    "Describe the religious healing ceremonies: spirit dancing's three-phase brainwashing-like mechanism, the Yoruba sacrifice's reassurance-and-conviction logic, Spiritual Baptist mourning, snake-handling's risk, and the Christian healing spectrum.",
    "Explain divination's therapeutic operation — the naming effect (the Rumpelstiltskin principle) and the clear-cut answer — and fortune-telling's shift to the natural orientation: fate is modifiable, the goal harmony with nature.",
    "Recite the shared common therapeutic factors (Frank, Torrey, Kirmayer) and the traditional sector's advantages over cosmopolitan medicine.",
    "State the three professional attitudes (prohibit, study, support), the chapter's resolution, the five harms, and the regulation demand for periodic survey and malpractice prevention.",
    "Apply the clinical stance in India: the entry question asked without contempt; the possession-trance triad; collaboration over competition; the Erwadi-type protection duty.",
  ],
  quickFacts: [
    { label: "The definition", value: "Four defining elements", detail: "Non-orthodox; based on indigenous cultural traditions; operating outside official healthcare systems; validated by experience rather than scientific principles — with 'culturally embedded' (intensely rooted in the culture that invented it) explaining why these practices transplant so badly" },
    { label: "The paradox", value: "Folk psychotherapy", detail: "Healer and client consider these religious ceremonies or supernatural exercises, not psychological therapy — yet psychotherapeutic effects accrue anyway, which is why the psychiatrist must know them" },
    { label: "The dissociation fork", value: "Who dissociates decides", detail: "Shamanism: the HEALER enters trance (mechanisms: supernatural power as authority, suggestion, hope); zar: the CLIENT enters the dissociated state (mechanisms: emotional catharsis, desire fulfilment, compensation for the suppressed female role)" },
    { label: "The naming law", value: "The Rumpelstiltskin principle", detail: "Anxiety falls when the trouble is named — Torrey's point that witchdoctors and psychiatrists share this root; divination's core therapeutic operation" },
    { label: "The hope law", value: "Hope through dependency", detail: "Frank's formulation: the core of religious and magical healing is the ability to arouse hope by capitalising on the patient's dependency — the first of the shared common factors" },
    { label: "The ceremony catalogue", value: "Five forms to recite", detail: "Spirit dancing (depatterning, training, indoctrination); Yoruba sacrifice (bad luck passes to the animal killed in the supplicant's stead); Spiritual Baptist mourning (7 days of prayer, fasting, dreams); snake-handling (excitement at the risk of life); Christian healing across the spectrum" },
    { label: "The sector's advantages", value: "Seven over cosmopolitan medicine", detail: "Cultural congeniality; maximal use of the healer's personality; holistic approach; accessibility and availability (especially developing areas); effective use of affect and altered states; collective therapy management; cost-effectiveness" },
    { label: "The Indian entry question", value: "Which healer, what done, what cost", detail: "The traditional sector is often the FIRST help-seeking step in India — temple and dargah healing largely free-to-cheap (offerings, approx 2026), the commercial exorcist end extracting life savings" },
  ],
  knowledgeGraph: [
    { label: "Dynamic Psychotherapy — The Procedural Unconscious", type: "condition", href: "/psychiatry/dynamic-psychotherapy/", note: "The shared common factors and the symbols-and-metaphors comparison — witchdoctor and psychiatrist, common roots (Torrey)" },
    { label: "Group Therapy — Yalom's Curative Factors", type: "condition", href: "/psychiatry/group-therapy/", note: "The zar as collective event: catharsis, cohesion and hope delivered to a group — the ceremony as group therapy before group therapy" },
    { label: "Family Therapy — Circular Causality", type: "condition", href: "/psychiatry/family-therapy/", note: "The help-seeking family and the healer circuit — the system the entry question maps before any individual diagnosis is made" },
    { label: "Therapeutic Communities — The Four Henderson Principles", type: "condition", href: "/psychiatry/therapeutic-communities/", note: "Healing embedded in community — the ceremony and the milieu compared as total healing environments" },
    { label: "Depersonalization / Derealization Disorder", type: "condition", href: "/psychiatry/depersonalization-disorder/", note: "The dissociation-spectrum course nearest the possession-trance differential — the compartmentalisation half of the spectrum" },
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "Psychosis wearing possession's clothing — the mental-state examination behind the trance that separates the two" },
    { label: "Acute & Transient Psychotic Disorders", type: "condition", href: "/psychiatry/acute-transient-psychosis/", note: "The short-lived possession-like presentations — context, course and first-rank symptoms doing the separating" },
    { label: "Recovered & False Memories", type: "condition", href: "/psychiatry/recovered-memories/", note: "Faith-healing and exorcism as sustained-suggestion contexts — the implantation risk some ceremonies carry" },
    { label: "Dopamine", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "Hope and anticipation's chemistry — the expectation engine both sectors run on" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "Expectation, appraisal and meaning-making — the machinery that hope, naming and conviction recruit" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Folk healing is psychotherapy by other means, and its engine is the common factors. The encounter begins inside the family's explanatory model — soul loss, sorcery, spirit intrusion, taboo violation, disharmony with nature — so the healer and the client share a world before any treatment begins. The naming move comes first: divination identifies the trouble with a clear-cut answer, and anxiety falls the moment the problem is named (the Rumpelstiltskin principle — witchdoctor and psychiatrist share this root). The hope move follows: the healer presents personal qualities the culture admires, takes responsibility as an authority, and arouses hope by capitalising on the client's dependency (Frank's formulation of the core of religious and magical healing). The arousal move heightens it: drumming, dancing, testimony, sacrifice — expectation and emotional arousal amplified by the setting, the healer's self-belief and reputation. Then the client's own work: in the zar the client herself enters the dissociated state — catharsis, fulfilment of unsatisfied desire, compensation for the suppressed female role; in spirit dancing the ordeal depatterns and re-trains; in mourning the member fasts and dreams for 7 days. The social redistribution closes the loop: the ceremony enrols family and community — the zar's demanded gifts are things husbands should provide, and relatives gather to provide them — so surrounding support is activated, not sidelined. The outcome is assurance, suggestion and conviction — restored balance in real life. What the ceremonies lack is the specific, tested ingredient for defined disorders, which is where medicine enters; what they deliver reliably is the nonspecific engine our own psychotherapies run on.",
    steps: [
      "The model's claim: folk healing delivers psychotherapeutic effects without being called psychotherapy by anyone involved — the common factors run whether or not the frame is psychological.",
      "The naming step: divination provides a clear-cut answer to an undefined suffering — the Rumpelstiltskin principle: anxiety falls when the trouble is named.",
      "The hope step: the healer arouses hope by capitalising on the client's dependency — an admired authority taking responsibility for the outcome.",
      "The arousal step: ceremony — drumming, dancing, testimony, sacrifice — raises expectation and emotional arousal, amplified by setting, the healer's self-belief and reputation.",
      "The client-side work: the zar's client dissociates to exhaustion (catharsis, desire fulfilment, role compensation); spirit dancing's initiates are depatterned, trained and indoctrinated; the mourning member fasts and dreams — learning and mastery consolidating.",
      "The social redistribution: the ceremony moves goods and roles — the spirit's demanded gifts are things husbands should provide; relatives and friends gather to provide them; the sacrificial feast closes the event — the surrounding support activated.",
      "The outcome: assurance, suggestion and conviction — restored balance in real life; the specific, tested ingredient for defined disorders is what the sector lacks.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "prefrontal", name: "Prefrontal cortex (expectation's office)", role: "Appraisal, expectation and meaning-making — the machinery that converts a named diagnosis into a reduced threat response, and the seat of the conviction the ceremonies generate.", grade: "supported" },
    { id: "ventral-striatum", name: "Ventral striatum (anticipation's target)", role: "The reward-system target of hope and expectation — the anticipation signal that makes both the healer's promise and the treatment plan credible to the brain.", grade: "supported" },
    { id: "amygdala", name: "Amygdala (the alarm naming quiets)", role: "The threat response that falls when the trouble is named — the anxiety circuit the clear-cut answer reaches, whichever sector delivers the naming.", grade: "supported" },
    { id: "tpj", name: "Temporoparietal junction (the self-boundary)", role: "The self-versus-other boundary whose disturbance underlies trance and possession phenomenology — the neurobiological address of 'the spirit speaks through her'.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Dopamine", symbol: "DA", role: "Anticipation and hope's chemistry — the reward-system signalling of expectation; the shared engine of ritual engagement, placebo response and therapeutic alliance.", grade: "supported" },
    { name: "Norepinephrine", symbol: "NE", role: "The arousal of ceremony — drumming, dancing and testimony drive the adrenergic heightening of the ritual setting that stamps the experience in.", grade: "proposed" },
    { name: "Oxytocin", symbol: "OT", role: "The dependency-and-support channel — trust in the healer and the enrolled family; the biology of Frank's capitalising-on-dependency.", grade: "proposed" },
    { name: "Endogenous opioids", symbol: "EO", role: "The catharsis and ordeal chemistry — exhaustion dancing, ice-water immersion, fasting and the calm that follows the collapse after trance.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "naming-pathway",
      name: "The naming pathway (divination to calm)",
      steps: [
        { label: "Undefined suffering", detail: "Somatic complaints and anxiety with no name the family can use" },
        { label: "The diviner's procedure", detail: "Afa strings, Ifa palm nuts, burned turtle-shell cracks, or the temple fortune-stick (chien; Japanese kujibiki)" },
        { label: "The clear-cut answer", detail: "The trouble named and matched to a fortune paper — a definite way to address the problem" },
        { label: "The alarm quiets", detail: "Prefrontal reappraisal reaching the amygdala's threat signal — anxiety falls when the problem is named" },
        { label: "The compliance plan", detail: "Finding the proper way to comply with the universe through divine instruction — prayer, offering, adjustment" },
      ],
      clinicalManifestation: "The client who leaves the temple calmer than any reassurance visit achieves — the Rumpelstiltskin principle in action.",
      grade: "supported",
    },
    {
      id: "catharsis-pathway",
      name: "The catharsis pathway (the zar ceremony)",
      steps: [
        { label: "The chronic anxieties of the life conditions", detail: "Sex-segregated society, low female status, restricted religious participation, marital insecurity" },
        { label: "The ceremony assembles", detail: "Participants in clean clothing; the patient in white with gold and perfume; the master singing and drumming" },
        { label: "The dissociated work", detail: "The called spirit makes her shake, dance and tremble until she falls exhausted — abreaction inside the sanctioned trance" },
        { label: "The spirit's demands", detail: "Jewellery, clothing, expensive foods — things husbands should provide — propitiation and persuasion, never coercion" },
        { label: "The social redistribution", detail: "Relatives and friends gather to provide the demanded goods; the animal sacrifice and feast close the event" },
        { label: "Restored balance", detail: "Emotional catharsis, fulfilment of unsatisfied desire, compensation for the suppressed female role — the balance renegotiated in real life" },
      ],
      clinicalManifestation: "The woman relieved of the persistent anxieties of her position — the ceremony as the culture's own psychotherapy for an untenable social arrangement.",
      grade: "supported",
    },
    {
      id: "expectancy-pathway",
      name: "The expectancy pathway (healer to hope)",
      steps: [
        { label: "The admired healer", detail: "Personal qualities admired by the culture — the authority figure the family already trusts" },
        { label: "Expectation raised", detail: "The culturally legitimate setting and the healer's self-belief and reputation" },
        { label: "Anticipation fires", detail: "The dopaminergic engine of hope — agency restored to a household that had none" },
        { label: "Engagement follows", detail: "The treatment — magical or medical — is taken up with conviction: proper curative steps are visibly being taken" },
        { label: "Hope does its work", detail: "The active ingredient Frank named: aroused by capitalising on dependency, shared by every therapy that works" },
      ],
      clinicalManifestation: "The patient who improves because someone authoritative took responsibility — the common factor the consulting room borrows back.",
      grade: "proposed",
    },
  ],
  timeline: [
    { id: "embedded-era", time: "Pre-industrial societies", title: "The embedded era", description: "Folk healing is the only healing: healer and priest one role, therapy and religion one event — the culturally embedded state the chapter takes as its baseline.", phase: "onset" },
    { id: "separation-era", time: "19th–20th century", title: "The great separation", description: "Orthodox medicine professionalises and reclassifies the folk sector as superstition — the prohibition attitude (modern clinicians dismissing it) hardens on both sides of the colonial encounter.", phase: "onset" },
    { id: "synthesis-era", time: "1961–1986", title: "The synthesis decades", description: "Frank's Persuasion and Healing (1961); Kennedy's zar-as-psychotherapy study (1967); Jilek's spirit-dancing analysis (1976); Hsu's Chinese temple counselling study (1976); Torrey's Witchdoctors and Psychiatrists (1986) — the shared-root thesis established.", phase: "peak" },
    { id: "consolidation-era", time: "1993–2009", title: "Cultural psychiatry consolidates", description: "Kirmayer's metaphor synthesis (1993); Jilek's traditional-healing advantages list (1994); Tseng's Handbook of Cultural Psychiatry (2001); the Oxford ch 6.5 synthesis codifying the clinical stance (2009).", phase: "duration" },
    { id: "indian-present", time: "Now", title: "The Indian regulatory present", description: "The temple-dargah-ojha landscape as first-contact care; the Erwadi-type institutions as the protection failure; the chapter's demand for periodic survey, reevaluation and malpractice prevention still unmet Indian regulatory space.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice (concept course: the stance as clinical work) ---- */
  epidemiology: {
    globalPrevalence: "The note's lineage records no survey numbers — the honest epidemiology is structural. Indigenous and folk healing exists in pre-industrial and modern societies alike, and in most of the world — and for many patients in the industrialised West — folk healing precedes, accompanies or follows psychiatric contact. The traditional sector is often the FIRST help-seeking step, and the delay it introduces is a clinical variable in every pathway; the quality range among healers is wide, and in most societies no formal regulation exists as it does for modern therapy.",
    indianPrevalence: "The Indian landscape is the chapter's best illustration: temple healing (Tirupati, Shirdi, the goddess-circuit pilgrimages), dargah shrines (the Sufi healing tradition), exorcism practice (bhuta-vidya's classical descendant in the contemporary ojha/bhagat), jyotisha (the fate-modifiable astrological guidance system), numerology, physiognomy-adjacent traditions, yoga and meditation (the nature-orientation practices now globally exported as therapy), and the Ayurvedic medical-physiological orientation — a first-contact sector of vast scale whose exact size this lineage does not survey.",
    lifetimeRisk: "Structural, not numerical: the Indian psychiatric pathway so commonly runs through the healer first that the entry question ('which healer has he seen, what was done, what did it cost?') assumes it — the consultation that never asks works blind.",
    genderRatio: "The zar ceremony is a female event — its sociology (sex-segregated societies, low female status, restricted religious participation, marital insecurity) making zar an ideal situation for the relief of persistent and regular anxieties; shamanic selection varies by society.",
    indianNotes: "Costs (approx 2026): temple and dargah healing largely free-to-cheap (offerings) — one of the sector's documented advantages; the exploitative end (commercial exorcists, guaranteed-cure clinics) extracts life savings — the Indian target of the chapter's regulation demand.",
  },
  etiology: [
    { category: "social", factor: "Cultural embeddedness", details: "The practice belongs to the culture's own meaning system — the healer shares the family's explanatory model and legitimacy; culturally embedded practices do not transplant where they lack meaning, which is also why dismissing them dismisses the family's world." },
    { category: "social", factor: "Accessibility, availability and cost", details: "The traditional sector's documented advantages: accessibility and availability especially in developing areas, collective therapy management, cost-effectiveness — the healer is there when the district psychiatrist is not." },
    { category: "psychological", factor: "Explanatory-model fit", details: "Supernatural causal language — soul loss, sorcery, spirit intrusion, taboo violation, disharmony with nature — makes the suffering meaningful inside the family's world; the coping is correspondingly magical (prayer, charms, extraction or exorcism rituals)." },
    { category: "psychological", factor: "Hope where medicine offers chronicity", details: "The healer arouses hope by capitalising on dependency and presents personal qualities the culture admires — an authority taking responsibility, against the medicine that offers management rather than cure." },
    { category: "biological", factor: "The medical-physiological wing", details: "Herbal medicine, acupuncture and mesmerism serve patients who want bodily treatment through 'natural' means — and put herbal substances into the drug-interaction history every psychiatrist must ask for." },
  ],
  symptomClusters: [
    {
      category: "1. The explanatory-model signals",
      symptoms: ["Supernatural causal talk: soul loss, sorcery, spirit intrusion, taboo violation, disharmony with nature", "The family's first narrative of the illness framed as spirit work, evil eye or planetary influence rather than symptom history", "Magical coping already under way: charms, prayer, ritual baths, thread amulets, dietary rules"],
    },
    {
      category: "2. The ceremony reports",
      symptoms: ["Trance and drumming described matter-of-factly by relatives — the event, not the symptom, as the unit of treatment", "Ordeal elements reported: dancing to exhaustion, fasting, ice water, 7-day chamber seclusion", "Fortune-stick drawing, astrological consultation, sacrificial dates in the family calendar"],
    },
    {
      category: "3. The possession presentations",
      symptoms: ["Episodes of shaking, dancing or trembling until the person falls exhausted, with the spirit demanding favours afterwards", "Altered-voice speech during episodes, amnesia for them afterwards", "The Indian OPD's full spectrum: culturally sanctioned possession trance (normal in context), dissociative disorder presenting as possession, and psychosis wearing possession's clothing"],
    },
    {
      category: "4. The harm signals",
      symptoms: ["Treatment delay — the pathway that runs through the healer before the hospital, the delay itself a prognosis variable", "Money leaving the house: offerings escalating into life-savings extraction, the 'guaranteed-cure' clinic", "Unexplained injuries during exorcism; the patient chained or beaten in an Erwadi-type institution; healer-prescribed substances of unknown composition"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The entry question",
      code: "The assessment's first instrument",
      criteria: [
        "'Which healer has he seen?' — temple, dargah, ojha, astrologer or guru; the answer shapes prognosis through the delay it reveals.",
        "'What was done?' — the ceremony catalogue in the family's account; the herbal substances taken (the drug-interaction history); the rituals whose costs and injuries must be asked for directly.",
        "'What did it cost?' — the financial ledger, from free-to-cheap offerings (approx 2026) to life-savings extraction; the exploitation screen in one question.",
        "The explanatory model recorded respectfully — the family's world documented, not corrected, so the alliance survives the diagnosis that follows.",
      ],
      duration: "One minute at first contact — the most productive question of the whole pathway.",
      indianNote: "In Indian practice the entry question is the OPD's blind-spot audit: the family volunteers none of it unless asked; asked without contempt, the answer usually includes everything — the delay, the costs, the substances and the belief.",
    },
    {
      system: "The possession-trance triad",
      code: "Three questions behind every ceremony report",
      criteria: [
        "Context-norm: is the trance state culturally sanctioned in this setting? (The zar participant in a Muslim society, the mourning member, the festival dancer — normal in context; the ceremony alone is not a diagnosis.)",
        "Distress and dysfunction: disorder requires distress, dysfunction and clinical features — the episodes damaging marriage, work or safety rather than discharging inside the sanctioned event.",
        "The mental-state examination behind the trance: first-rank symptoms, thought form, hallucinations outside the episodes, course and insight — the examination that separates the dissociative from the psychotic presentation.",
      ],
      duration: "Applied at the ceremony-report and the OPD both — the differential lives in the psychiatric assessment, never in the ceremony itself.",
      indianNote: "Indian OPDs meet the full spectrum in one week: sanctioned possession trance normal in its festival context; dissociative disorder presenting as possession when the distress and dysfunction accumulate; psychosis wearing possession's clothing when the mental state behind the trance breaks down.",
    },
  ],
  differentialDiagnosis: [
    { condition: "Culturally sanctioned possession trance", distinguishingFeatures: "The trance occurs inside its sanctioned context (ceremony, festival, mourning), the community accepts it, and there is no independent distress or dysfunction beyond the occasion.", keyDifferentiator: "A normal variant in context — respect and monitoring, never a label; the ceremony is the culture's own therapeutic event." },
    { condition: "Dissociative disorder (possession presentations)", distinguishingFeatures: "Episodes with altered-voice speech and subsequent amnesia occurring outside sanctioned contexts, with accumulating distress and dysfunction — the marriage, the household duties, the safety.", keyDifferentiator: "The differential is psychiatric, the respect cultural: treat the disorder, honour the ceremony, and address the life-context anxieties the zar sociology exposes." },
    { condition: "Psychosis wearing possession's clothing", distinguishingFeatures: "Delusions and hallucinations present outside the trance episodes; first-rank symptoms, thought disorder or a deteriorating course that no ceremony explains.", keyDifferentiator: "The mental-state examination behind the trance decides — the psychosis treated as psychosis, with family psychoeducation distinguishing illness from spirit without ridiculing either." },
    { condition: "The harmful healer encounter", distinguishingFeatures: "The parallel protection assessment: financial exploitation, sexual involvement with clients, dangerous prescribed substances, physical injury during exorcism, or the chained and beaten Erwadi-type institution.", keyDifferentiator: "Not a differential diagnosis but a differential duty — the protection question runs alongside every diagnostic one and does not pause for cultural respect." },
  ],
  management: [
    { category: "psychotherapy", name: "Ask without contempt — the entry-question discipline", description: "The consultation that never asks about healer involvement works blind; the question asked with contempt loses the family. The entry question (which healer, what was done, what did it cost) delivers the delay history, the substance history and the belief context in one respectful minute.", whenToUse: "Every first contact — and again whenever the family's account of the illness is supernatural in frame.", indianContext: "The Indian family volunteers none of it unless asked; asked respectfully, the answer shapes prognosis (delay), drug history (herbal interactions) and the alliance (contempt for the healer dismisses the family's world)." },
    { category: "service-design", name: "Selective support — the chapter's resolution", description: "The three professional attitudes (prohibition, academic study, support) resolve into the working position: any folk healing practice that is proven or at least considered helpful to the client and useful to the community deserves support and encouragement. Support what helps, study what puzzles, prevent what harms.", whenToUse: "Whenever healer involvement is disclosed — the stance that follows every entry question.", indianContext: "Where healers refer onwards ('he needs a doctor's medicine for this'), support and liaison; where they chain and beat, protect and report — the tri-partite stance operationalised for India." },
    { category: "psychotherapy", name: "The possession-trance triad applied", description: "Context-norm, distress and dysfunction, and the mental-state examination behind the trance — three questions that keep the sanctioned ceremony unpathologised, the dissociative disorder treated, and the psychosis recognised.", whenToUse: "Every possession or trance presentation, in the OPD and in the family's ceremony account alike.", indianContext: "The Indian OPD meets the full spectrum; the discipline is the same triad — respect for the sanctioned trance, treatment for the disorder, examination for the psychosis." },
    { category: "service-design", name: "Protection from harm — the clinical duty", description: "The five harms watched for directly: treatment delay, financial exploitation, sexual involvement with clients, dangerous prescribed substances, and physical injury or death during exorcism. The protective duty does not pause for cultural respect.", whenToUse: "Continuous — the protection question rides alongside every diagnostic one.", indianContext: "The Erwadi-type institution (chaining and beating in the name of healing) is the Indian face of the failure: examine, document, involve the authorities — the malpractice-prevention demand applied to its named target." },
    { category: "psychotherapy", name: "Borrow the common factors deliberately", description: "Hope aroused by capitalising on dependency; the problem named; the healer's admired qualities; expectation and emotional arousal in the setting; learning and mastery; technique — the common factors the shaman's tent and the consulting room share, strengthened deliberately in our own practice.", whenToUse: "Every therapeutic encounter — the shaman-to-psychiatrist comparison is the fastest way to teach medical students what psychotherapy actually runs on.", indianContext: "The teaching gift for Indian medical students: therapeutic hope, expectation and the healer's authority understood fastest through the comparison — the chapter as teaching instrument as much as clinical guide." },
    { category: "service-design", name: "Regulation advocacy — the system-level stance", description: "Folk therapy should be subject to periodic surveys and reevaluation by the health administration, so benefits are protected and malpractice prevented; the healer who refuses examination and regulation should be discouraged or prevented from practising.", whenToUse: "The advocacy layer: institutional and district-level work beyond the individual consultation.", indianContext: "Largely nobody regulates these practices in India — the demand for survey, evaluation and malpractice prevention is unmet regulatory space, the system-level application of the clinical stance." },
  ],
  safety: {
    redFlags: [
      "Unexplained injuries in a patient 'under treatment' by a healer — the physical injury and death that occur during exorcisms",
      "The patient chained, bound or beaten in an Erwadi-type healing institution — immediate protection and documentation, whatever the family's beliefs",
      "Money leaving the house at life-savings scale — the commercial exorcist or 'guaranteed-cure' clinic extracting the family's future",
      "Suspected sexual involvement between healer and client — the exploitation the quality range conceals",
      "Healer-prescribed substances of unknown composition entering the patient — the interaction history taken directly, the remedies not assumed benign",
      "A treatable disorder progressing through months of rituals — the treatment delay that converts a first episode into a chronic one",
    ],
    urgentGuidance:
      "The protection order of operations: (1) examine the patient — away from the family if needed — and document injuries; (2) treat the medical or psychiatric emergency first, the belief context second; (3) for confinement, chaining or assault in a healing institution, involve the authorities — the chapter's malpractice-prevention duty has an Indian address; (4) take the substance and cost history directly (herbal interactions, life-savings extraction); (5) keep the door open for the family — the alliance survives the report only if the clinician never opened it with contempt.",
  },
  drugLinks: [],
  contentGaps: [
    "The note assigns no medication any role in folk healing — none of KYP's 12 drug lessons is linked; the comorbidity riders (dissociative, psychotic, depressive) are treated in their own courses, the routes taught there, never invented here.",
    "The herbal-interaction tier (healer-prescribed substances entering the drug history — the note's India lens) has no KYP pharmacovigilance lesson; the discipline of asking directly is taught here.",
    "The psychedelic line (cactus substances used for trance induction among native American healers, per the note) is taught as ethnography only — modern psychedelic-assisted therapy has no KYP lesson and no route is implied.",
    "The full dissociative-disorders account (the possession differential's home) is taught at triad level here; the live dissociation-spectrum course covers the depersonalisation half, and no dedicated possession-disorder lesson exists — recorded honestly.",
    "The explanatory-model interview (the structured elicitation of the family's supernatural narrative) has no KYP lesson; the entry question is taught here as the working instrument.",
  ],
  patientGuide: {
    whatIsIt:
      "A field of knowledge, not an illness: the healing practices that exist outside official healthcare — temple and shrine healing, ceremonies, spirit mediums, divination, astrology, herbal medicine — and what every doctor should know about them. They are not psychology to the people who use them; they are religion and tradition. Yet they can deliver real relief — calm, hope, support, meaning — and they can also delay proper treatment and sometimes cause harm. Your doctor asking about them is not judging your family; the question is how the best care is planned.",
    whatCausesIt:
      "These practices arise from culture itself — each healing tradition was invented by the community that uses it, which is why it feels natural and trustworthy to that community and strange to outsiders. Families turn to them because they share the beliefs, because the healer is close by and affordable, because the healer offers hope, and because a spirit or a planet is a more understandable cause than a chemical imbalance.",
    symptoms:
      "Not applicable as an illness. The relevant experiences: a family describing ceremonies, trance states, spirits or planetary causes for the suffering; remedies and amulets from a healer; money spent on rituals. Warning signs needing a doctor's direct attention: injuries from any ritual, the patient being chained or beaten, savings draining away, or the person getting worse despite months of ritual treatment.",
    treatment:
      "The doctor's discipline, not a prescription: ask about the healer respectfully, support what the healing does for you (hope, calm, community, meaning), protect against the harms (delay, expense, injury, dangerous substances), and treat the medical illness alongside — not instead of — the beliefs. Collaboration protects better than prohibition: families who keep both doors open do best.",
    selfHelp: [
      "Tell the doctor everything being taken — herbal remedies and healers' substances included; they can interact with medicines.",
      "Keep the hospital appointments alongside the temple visits — both doors open, neither replacing the other.",
      "Watch the money: offerings are one thing; a 'guaranteed cure' that drains savings is exploitation.",
      "Never accept chaining, beating or confinement in any healing setting — that is harm, not treatment, whoever performs it.",
      "If the person is getting worse after months of ritual treatment, bring them to medical care; delay is the commonest harm of all.",
    ],
    whenToSeekHelp: [
      "Any injury during a ritual or ceremony — medical assessment first, questions later",
      "The person being chained, bound or beaten at any healing place — urgent protection",
      "Savings draining at life-changing scale for 'guaranteed' cures — tell the treating doctor",
      "A mental illness worsening despite rituals — the two systems used together, not in sequence",
      "Possession-like episodes with danger to the person or others — psychiatric assessment now",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free, multiple Indian languages) — for distress, family crises and guidance on where to go",
      "District hospital psychiatry OPD under the DMHP — the orthodox channel that works alongside the family's beliefs",
      "The treating team's family-counselling session — ask for the visit that includes the healer question respectfully",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific guideline governs the folk-healing interface; practice follows the Oxford chapter's tri-partite stance (prohibit nothing blindly, study everything, support what helps, prevent what harms) with the Mental Healthcare Act 2017's rights-and-restraint architecture as the protection instrument when the Erwadi-type picture appears.",
    systemContext: "The Indian pathway usually begins at the temple, the dargah or the ojha, and reaches the district psychiatric OPD late — brought by relatives once rituals fail. The entry question ('which healer has he seen, what was done, what did it cost?') is the system's honest audit: the answers shape prognosis (the delay), drug history (herbal interactions) and the alliance (contempt for the healer loses the family).",
    programmeContext: "The DMHP district psychiatric tier and Tele-MANAS 14416 are the orthodox channel; the temple and dargah circuits are the de facto first tier — largely free-to-cheap (offerings, approx 2026) and closer to home. The chapter's programme-level demand — periodic survey and reevaluation of folk practice so malpractice is prevented — remains unmet Indian regulatory space.",
    costConsiderations: "Temple and dargah healing is largely free-to-cheap (offerings, approx 2026) — one of the sector's documented advantages and the reason the exploitative end is not the whole story; the commercial exorcist and 'guaranteed-cure' clinic extract life savings and constitute the regulation demand's Indian target. The psychiatric tier's own costs (district OPD care, essential medicines) sit alongside, not instead.",
    culturalConsiderations: "The Indian landscape is the chapter's best illustration: temple healing (Tirupati, Shirdi, the goddess-circuit pilgrimages), dargah shrines (the Sufi healing tradition), exorcism practice (bhuta-vidya's classical descendant in the contemporary ojha/bhagat), jyotisha (the fate-modifiable astrological guidance), numerology and physiognomy-adjacent traditions, yoga and meditation (the nature-orientation practices now globally exported as therapy), and the Ayurvedic medical-physiological orientation. The chien-drawing description maps directly onto temple prasna and fortune-stick practice. Dismissing the healer dismisses the family's world — the alliance survives only respect; and where healers chain and beat (the Erwadi-type institutions), respect for culture ends and protection begins.",
    patientCounselling: [
      "The entry-question script: 'Before we plan treatment, tell me what has been tried — which healer, what was done, what did it cost. I ask everyone, and it helps me plan.'",
      "The collaboration script: 'Your temple visits and your medicines can both continue — keep both doors open; if the healing gives you peace, keep it; if the illness grows, come to us first.'",
      "The protection script: 'Chaining, beating or injury in any healing setting is harm, not treatment — whoever does it. Tell me, and we will act together.'",
      "The cost script: 'Offerings are one thing; a guaranteed cure that drains the family's savings is exploitation — let us look at what has left the house.'",
      "The naming-gift script: 'The healer named the trouble and your worry eased — that is real medicine of its kind; ours adds the treatments the spirits cannot supply.'",
      "The delay script: 'Every month of ritual alone is a month the illness has had to grow — run the two together, not one after the other.'",
    ],
  },
  decisionPath: {
    title: "The patient who has already seen the healer",
    nodes: [
      {
        id: "start",
        question: "The entry question has been asked — which healer, what was done, what did it cost. What does the picture show?",
        branches: [
          { label: "Healer involved, no harm, care continues alongside", next: "collaboration-gate" },
          { label: "Possession or trance phenomenology reported", next: "possession-gate" },
          { label: "Harm signals (delay, expense, injury, exploitation)", next: "harm-gate" },
        ],
      },
      {
        id: "collaboration-gate",
        question: "The healer's disposition toward medical care.",
        branches: [
          { label: "Refers onwards ('he needs a doctor's medicine for this')", next: "liaison-path" },
          { label: "Parallel, benign and cheap", next: "benign-path" },
        ],
      },
      {
        id: "liaison-path",
        question: "The chapter's support attitude operationalised.",
        recommendation: "Support and liaison: acknowledge the referral, involve the healer in psychoeducation where the family consents, share the treatment frame — the family's world kept, the specific treatment delivered. The common-ground healer is the system's ally, not its competitor.",
      },
      {
        id: "benign-path",
        question: "Benign parallel care with no current harm.",
        recommendation: "Monitor and keep the door open: ask at every visit what the healing does for the patient; support the hope, meaning and community it delivers; watch for delay and cost drift; no prohibition, no endorsement — the sector's advantages honestly credited.",
      },
      {
        id: "possession-gate",
        question: "The possession-trance triad begins. First: context-norm — is the state sanctioned in this setting?",
        branches: [
          { label: "Sanctioned context, no independent distress or dysfunction", next: "sanctioned-path" },
          { label: "Distress or dysfunction accumulating", next: "disorder-gate" },
        ],
      },
      {
        id: "sanctioned-path",
        question: "Culturally sanctioned trance — normal in context.",
        recommendation: "Respect and no label: the ceremony delivers the common factors to a consenting community; document, monitor, keep the door open. Zar or ceremony attendance alone is not a diagnosis — the differential is psychiatric, the respect cultural.",
      },
      {
        id: "disorder-gate",
        question: "Distress and dysfunction present. The triad's second step: the mental-state examination behind the trance.",
        branches: [
          { label: "Episodic altered-voice speech with amnesia; no first-rank symptoms outside episodes", next: "dissociative-path" },
          { label: "Delusions, hallucinations or thought disorder outside the trance", next: "psychosis-path" },
        ],
      },
      {
        id: "dissociative-path",
        question: "Dissociative disorder, possession presentations.",
        recommendation: "Treat as dissociative disorder: the respect cultural, the differential psychiatric — psychotherapy addressing the dissociation and the life-context anxieties beneath it (the zar sociology's lesson: the suffering tracks the life conditions); safety planning; family psychoeducation that keeps the alliance.",
      },
      {
        id: "psychosis-path",
        question: "Psychosis wearing possession's clothing.",
        recommendation: "Treat the psychosis: the full antipsychotic and psychoeducation programme belongs to the schizophrenia and acute-psychosis courses (no drug route duplicated here); the family's model engaged respectfully — illness distinguished from spirit without ridiculing either, because the alliance carries the adherence.",
      },
      {
        id: "harm-gate",
        question: "The protection assessment: which harm?",
        branches: [
          { label: "Treatment delay and expense only", next: "delay-path" },
          { label: "Injury, chaining, beating, dangerous substances, sexual or financial exploitation", next: "protection-path" },
        ],
      },
      {
        id: "delay-path",
        question: "Delay and cost without direct injury.",
        recommendation: "Re-engagement: the family meeting that honours the pathway travelled ('you did what your world offered — now let us add what medicine offers'); the delay recorded as a prognosis variable; the cost probe ('what has left the house so far?'); the entry question repeated at every visit.",
      },
      {
        id: "protection-path",
        question: "Active harm — the Erwadi-type picture or the exorcism injury.",
        recommendation: "The protection duty does not pause for cultural respect: examine the patient (away from the family if needed), document injuries, treat medically, involve the authorities for confinement or assault, and report the institution — the chapter's malpractice-prevention demand applied to its named Indian target.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Never asking about healer involvement",
      why: "The consultation works blind: the delay, the costs, the herbal substances and the belief context all stay invisible — and the treatment plan is built on a pathway the doctor has not seen.",
      correction: "The entry question at every first contact, phrased as routine rather than suspicion: which healer, what was done, what did it cost — the most productive minute in the pathway.",
    },
    {
      mistake: "Contempt for the healer (or for the family's beliefs)",
      why: "Dismissing the healer dismisses the family's world: the alliance collapses at the first ridicule, the follow-up is lost, and the family returns to the sector alone.",
      correction: "Respectful elicitation and selective support: the healing credited for what it delivers (hope, calm, community), the medicine added for what it alone supplies — collaboration protects better than prohibition.",
    },
    {
      mistake: "Pathologising every ceremony — calling sanctioned trance a disorder",
      why: "The context-norm step is skipped and a normal variant acquires a psychiatric label: the family is insulted, the 'patient' is confused, and the ceremony's real function (the culture's own psychotherapy) is missed.",
      correction: "The triad discipline: context-norm first, then distress and dysfunction, then the mental-state examination behind the trance — disorder requires all three, the ceremony alone requires none.",
    },
    {
      mistake: "Romanticising the sector — the harms forgotten",
      why: "Cultural respect inverted into clinical negligence: the fraud, the financial exploitation, the sexual involvement, the dangerous substances and the exorcism injuries pass unexamined because 'culture' forbids the question.",
      correction: "The protection duty stated plainly: the five harms asked about directly at every review; the Erwadi-type institution reported, not respected — protection is the part of respect that is real.",
    },
    {
      mistake: "Treating psychosis wearing possession's clothing as pure culture",
      why: "The supernatural frame is accepted as the whole explanation and the first-rank symptoms behind it are never examined — the schizophrenia treated as a spirit for another lost year.",
      correction: "The mental-state examination behind the trance, every time: delusions, hallucinations and thought disorder outside the episodes decide the diagnosis; the family's model is engaged respectfully while the treatment follows the examination.",
    },
    {
      mistake: "Assuming the healer only delays treatment",
      why: "The chapter's support attitude is lost: the healer who refers onwards is an ally the system cannot replace, and the common factors the sector delivers are mistaken for obstacles.",
      correction: "Collaboration over competition: where healers refer, support and liaise; where they chain and beat, protect and report — the tri-partite stance applied to the healer in front of you, not to a stereotype.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "Define indigenous and folk healing with the four defining elements, and explain 'culturally embedded' and 'folk psychotherapy' — why neither healer nor client calls it therapy, and why effects accrue anyway.",
        "The four orientations with one practice each: supernatural (spirit mediumship, religious ceremony, divination); natural (fortune-telling, astrology, meditation); medical-physiological (mesmerism, acupuncture, herbal medicine); socio-psychological (Zen training, Alcoholics Anonymous, most modern psychotherapy).",
        "The shaman-versus-zar fork: who dissociates, and each mechanism list — the shaman's authority, suggestion and hope; the zar's catharsis, desire fulfilment and female-role compensation.",
        "The Rumpelstiltskin principle: anxiety falls when the trouble is named — Torrey's shared-root thesis between witchdoctors and psychiatrists.",
        "The common therapeutic factors list and the traditional sector's advantages over cosmopolitan medicine.",
      ],
      practical: [
        "Take the healer history: demonstrate the entry question (which healer, what was done, what did it cost) asked without contempt — and present the explanatory model the family gave, respectfully documented.",
        "Demonstrate the possession-trance triad on a ceremony-report: context-norm, distress and dysfunction, and the mental-state examination behind the trance.",
      ],
      longAnswer: [
        "The common therapeutic factors shared by folk healing and modern psychotherapy — Frank, Torrey and Kirmayer's synthesis, with the shaman-versus-zar comparison as the illustrating pair.",
        "Indigenous and folk healing practices: definition, orientations, therapeutic mechanisms, and the clinician's stance toward the traditional sector in India.",
      ],
    },
    neetPg: {
      highYield: [
        "THE DISSOCIATION FORK: shamanism — the HEALER dissociates (mechanisms: authority, suggestion, hope); zar — the CLIENT dissociates (mechanisms: emotional catharsis, fulfilment of unsatisfied desire, compensation for the suppressed female role).",
        "THE ZAR SOCIOLOGY: Muslim societies (Ethiopia, Egypt, Iraq, Kuwait, Sudan, Somaliland); a female event — the demanded gifts (jewellery, clothing, expensive foods) are things husbands should provide; propitiation and persuasion, never coercion; ends with animal sacrifice and feast.",
        "THE CEREMONY CATALOGUE: spirit dancing (Salish; brainwashing-like: depatterning through shock, physical training, indoctrination); Yoruba sacrifice (bad luck passes to the animal killed in the supplicant's stead — reassurance and the generation of conviction); Spiritual Baptist mourning (7 days of prayer, fasting, dreams and visions); snake-handling (deaths, prohibition, persistence); Christian healing across the spectrum.",
        "DIVINATION'S OPERATION: the clear-cut answer plus the naming effect — the Rumpelstiltskin principle; methods: Afa (bush-mango half-shells), Ifa (palm nuts), burned turtle-shell cracks, the chien fortune-stick (Japanese kujibiki).",
        "FORTUNE-TELLING'S SHIFT: supernatural to natural orientation — fate is modifiable, the goal harmony with nature (astrology, the Yi-Jing, physiognomy).",
        "THE COMMON FACTORS: hope through capitalising on dependency (Frank); naming (Torrey); admired personal qualities; expectation and emotional arousal; learning and mastery; technique — plus shared symbols and metaphors (Kirmayer).",
        "THE SECTOR'S ADVANTAGES: cultural congeniality; maximal use of the healer's personality; holistic approach; accessibility and availability; effective use of affect and altered states; collective therapy management; cost-effectiveness.",
        "THE STANCE: the three attitudes (prohibit, study, support) resolving into — any practice proven or at least considered helpful to the client and useful to the community deserves support and encouragement.",
        "THE HARMS FIVE: treatment delay, financial exploitation, sexual involvement, dangerous substances, physical injury during exorcism.",
        "THE REGULATION DEMAND: periodic surveys and reevaluation by the health administration; the healer refusing examination discouraged or prevented from practising.",
        "THE INDIAN LAYER: temple healing (Tirupati, Shirdi, the goddess circuit), dargah shrines, the ojha/bhagat descendant of bhuta-vidya, jyotisha, the Erwadi-type institutions — and the entry question.",
      ],
      pyqConcepts: [
        "The shaman-versus-zar distinction — the single most examined line in this territory (who dissociates, and which mechanism list follows).",
        "The Rumpelstiltskin principle — the short-note favourite connecting divination to psychotherapy's shared roots.",
        "The common therapeutic factors — the list-question that recurs across viva and PG formats.",
        "Spirit dancing's brainwashing-like mechanism — the anthropology question wearing a psychiatry exam's clothes.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 24-year-old newly married woman is brought to the district OPD after eight months of episodes of altered-voice speech with amnesia, during which the family consulted a temple healer and then an ojha whose rituals and thread amulet cost the household two months' income: the entry question surfaces the delay, the substances and the belief context in one respectful minute; the triad discipline applied — the episodes sanctioned by neither context nor course, the distress and dysfunction accumulating, the mental state behind the trance clean of first-rank symptoms — resolves to a dissociative (possession) disorder treated with psychotherapy and family sessions, the temple visits neither endorsed nor forbidden; the teaching: the differential is psychiatric, the respect cultural, and the delay the variable the entry question exists to catch.",
        "A 32-year-old woman in a sex-segregated community with two years of chronic anxiety and marital insecurity attends — with her female relatives, not a hospital — a zar ceremony: clean clothing, white dress with gold and perfume, the master drumming until the called spirit makes her dance and tremble to exhaustion, then demands the jewellery, clothing and expensive foods that relatives gather to provide; the visiting physician is asked whether 'the illness' needs hospital: the triad answers — sanctioned context, no independent dysfunction, the trance the event's own mechanism — no disorder, no label, the psychiatric door kept open; the teaching: the demanded goods are things husbands should provide, and the ceremony is the culture's psychotherapy for an untenable social arrangement — folk healing, not a case.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Zar: the CLIENT dissociates; shamanism: the HEALER dissociates.",
        "The Rumpelstiltskin principle: anxiety falls when the trouble is named.",
        "Frank: the core of religious and magical healing = arousing hope by capitalising on dependency.",
        "Fortune-telling's orientation: natural — fate is modifiable.",
        "Snake-handling: emotional excitement sought at the risk of life.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The entry question is the interface's whole craft in one line — which healer, what was done, what did it cost — asked as routine, never as suspicion; the answer predicts the delay, the interactions and the alliance in a single minute.",
        "The family-alliance arithmetic: contempt for the healer loses the family at the first sentence; respectful elicitation keeps them through the whole treatment — and the healer who refers onwards is the rare ally the district system cannot manufacture.",
        "The protection duty does not pause for cultural respect — the chained and beaten patient of the Erwadi-type institution is examined away from the family, documented, and reported; the malpractice-prevention demand has a clinical address.",
        "The shaman-to-psychiatrist comparison is the fastest teaching instrument Indian medical education owns for the common factors — hope, expectation, naming and the healer's authority understood in one lecture that would take a psychotherapy module a month.",
        "The honest neuroscience discipline: the common-factors mechanisms (expectation, arousal, catharsis) run on real circuitry, but this territory's evidence is anthropological and clinical, not neurobiological — the grades record the distance so the teaching never overclaims.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The healer the family saw first",
      presentation: "Eight months of rituals before the district hospital — the entry question that finally named the disorder the family had been treating as a spirit.",
      initialPresentation: "A 24-year-old newly married woman was brought to the district psychiatric OPD by her mother-in-law after episodes in which she would stiffen, speak in an altered voice naming the husband's dead first wife, and afterwards be amnesic for the episode. The family had consulted a temple healer and then an ojha for eight months of rituals; the mother-in-law volunteered this only when asked directly, and estimated the costs hesitantly.",
      history: "Episodes began after marital discord in a household where the wife's position was precarious; the family's explanatory model was spirit affliction by the dead first wife. Treatments: temple offerings, ojha rituals, a thread amulet and herbal preparations the family could not name (the substance history taken directly); no psychiatric contact until the episodes began occurring outside any ritual context and the husband insisted.",
      examination: "Between episodes: normal mental state, no first-rank symptoms, no thought disorder, full insight into the marital conflict though not into the model. During an observed episode: altered-voice speech, apparent loss of control, subsequent amnesia. Distress and dysfunction accumulating — marital strain, household duties abandoned, one episode of self-harm gesture.",
      diagnosis: "Dissociative disorder — possession presentations, on a substrate of marital discord, in a family whose explanatory model remained supernatural.",
      management: "The entry question completed respectfully (healer seen, what was done, what it cost); psychoeducation holding both models — 'the healer named a spirit, we name a disorder of the mind under strain, and both can be honoured while we treat'; dissociation-focused psychotherapy; marital and family sessions addressing the discord; the ojha's role acknowledged with a request for collaboration rather than correction; the herbal remedies recorded for interaction review.",
      outcome: "Episodic frequency reduced over the following months as the marital discord was addressed in family sessions; the family continued occasional temple visits — now alongside, not instead of, psychiatric follow-up; the alliance held through the whole arc, the mother-in-law becoming the appointment-keeper.",
      teachingPoints: [
        "The entry question's yield: eight months of delay, two months' income spent, an unnamed herbal pharmacology — the three variables no referral letter carried.",
        "The triad discipline: the episodes sanctioned by neither context nor course; the distress and dysfunction accumulating; the mental state behind the trance clean — a dissociative disorder, not a spirit and not psychosis.",
        "Collaboration over competition: the ojha acknowledged, not attacked — the family alliance that carried the treatment to the end.",
        "The life-context lesson the zar sociology teaches: the disorder tracked the woman's position, and the treatment addressed the position, not only the episode.",
      ],
    },
    {
      title: "The spirit who wanted the gold",
      presentation: "The woman danced until she fell exhausted, and the spirit asked for the things her husband had never given her — zar as the culture's own psychotherapy.",
      initialPresentation: "A 32-year-old married woman in a sex-segregated community did not present to a clinic at all; her sister asked the visiting physician, after a zar ceremony, whether 'the illness' needed hospital. Two years of chronic anxiety, somatic complaints and marital insecurity; female relatives arranged the ceremony after judging her troubles the work of a spirit.",
      history: "The life conditions the note's sociology predicts: restricted religious participation, low household status, marital insecurity with a co-wife's children in the house; the anxieties persistent and regular, unrelieved by the imam's prayers, which were not hers to lead.",
      examination: "The ceremony observed: participants in clean clothing, the patient in white with gold and perfume; the ceremony master singing and drumming; the called spirit making her shake, dance and tremble until she fell exhausted; the spirit then demanding jewellery, clothing and expensive foods — which relatives and friends gathered to provide — propitiation and persuasion, never coercion; the event ending with animal sacrifice and feast.",
      diagnosis: "Culturally sanctioned zar participation — folk psychotherapy, not a disorder; the persistent anxieties of the life conditions remain (the sociological substrate the ceremony treats, not cures).",
      management: "No psychiatric treatment imposed: the physician's stance — respect the ceremony, ask what it does for her, watch for the harms (the cost to the household, the exploitative healer), and keep the door open. The sociological substrate acknowledged with the sister; no label offered, no prohibition issued.",
      outcome: "Relief after the ceremony — the demanded goods provided, the exhaustion and feast closing the event; the anxieties expected to recur with the marital stressors, the ceremony repeatable as the culture's periodic relief; the psychiatric door left open without pathologising either the woman or her world.",
      teachingPoints: [
        "Who dissociates decides: the CLIENT's dissociation is the zar's mechanism — the shaman-versus-zar fork in one observed afternoon.",
        "The three mechanisms in the flesh: emotional catharsis (the dance to exhaustion), fulfilment of unsatisfied desire (the demanded gifts), compensation for the suppressed female role (the goods are things husbands should provide).",
        "The diagnostic discipline: sanctioned context, no independent dysfunction — a ceremony, not a case; the differential is psychiatric, the respect cultural.",
        "The clinician's stance: ask what the healing does, support what helps, monitor what harms — the chapter's resolution at the bedside of a patient who never became one.",
      ],
    },
  ],
  clinicalPearls: [
    "Who dissociates decides: shamanism — the HEALER enters trance (authority, suggestion, hope); zar — the CLIENT enters the dissociated state (catharsis, desire fulfilment, female-role compensation).",
    "The zar's demanded gifts are things husbands should provide — the ceremony as the culture's renegotiation of an untenable social arrangement, ended with animal sacrifice and feast.",
    "The Rumpelstiltskin principle: anxiety falls when the trouble is named — witchdoctors and psychiatrists share this root (Torrey).",
    "Frank's law: the core of religious and magical healing is the ability to arouse hope by capitalising on the patient's dependency.",
    "Spirit dancing's three phases: depatterning through shock (restraint, blindfolding, kinetic and acoustic bombardment, then stillness and starvation), physical training (running, ice-water immersion, dancing), indoctrination.",
    "The Yoruba sacrifice's logic: the supplicant's bad luck passes to the animal killed in his stead — the healing power of reassurance and the generation of conviction: proper curative steps visibly being taken.",
    "Spiritual Baptist mourning: 7 days of prayer, fasting, dreams and visions in the back chamber — claimed benefits from mood relief to communication with God.",
    "Snake-handling: emotional excitement sought at the risk of life — occasional deaths, government prohibition, persistence.",
    "Divination's operation: a clear-cut answer plus the naming effect; fortune-telling's liberty: fate is modifiable — adjustment, not resignation.",
    "The traditional sector's advantages: cultural congeniality, the healer's personality maximally used, holistic approach, accessibility, affect and altered states, collective management, cost-effectiveness.",
    "The chapter's resolution: any folk healing practice proven or at least considered helpful to the client and useful to the community deserves support and encouragement.",
    "The harms five: treatment delay, financial exploitation, sexual involvement, dangerous substances, physical injury during exorcism — and the regulation demand they justify: periodic survey, reevaluation, malpractice prevention.",
    "The Indian entry question — which healer has he seen, what was done, what did it cost — asked without contempt, answered with everything: the delay, the ledger, the pharmacology and the belief.",
  ],
  highYieldSummary: [
    "Definition: indigenous and folk healing = non-orthodox therapeutic practices based on indigenous cultural traditions, operating outside official healthcare systems, experience-validated rather than science-founded — CULTURALLY EMBEDDED (intensely rooted in the culture that invented them, hence difficult to transplant); neither healer nor client considers them psychological therapy, yet they deliver psychotherapeutic effects: FOLK PSYCHOTHERAPY. The four orientations: supernatural (spirit mediumship, religious ceremony, divination); natural (fortune-telling, astrology, meditation); medical-physiological (mesmerism, acupuncture, herbal medicine); socio-psychological (Zen training, Alcoholics Anonymous, est, most modern psychotherapy).",
    "Spirit mediumship — the fork: SHAMANISM (Central and North Eurasia, diffused widely): the healer enters trance (rhythmic singing, dancing, praying, sometimes psychedelic substances), becomes possessed, and the client consults the supernatural THROUGH him — mechanisms: supernatural power as authority, suggestion, hope; causal concepts: soul loss, sorcery, spirit intrusion, taboo violation, disharmony with nature. ZAR (Muslim societies — Ethiopia, Egypt, Iraq, Kuwait, Sudan, Somaliland): the CLIENT also experiences the dissociated state — mechanisms: emotional catharsis, fulfilment of unsatisfied desire, compensation for the suppressed female role; the sociology: sex-segregated societies, low female status, restricted religious participation, marital insecurity.",
    "The religious healing ceremonies: Salish SPIRIT DANCING (brainwashing-like: depatterning through shock, physical training, indoctrination); YORUBA sacrifice (the diviner's tossed palm nuts identify the offended lineage deity; the animal dies in the supplicant's stead — reassurance and the generation of conviction); SPIRITUAL BAPTIST mourning (7 days of prayer, fasting, dreams and visions); SNAKE-HANDLING (trance-state handling of poisonous snakes — occasional deaths, prohibition, persistence); CHRISTIAN healing across the spectrum from Christian Science to fundamentalist healers to the Roman Catholic anointing of the sick. Common operations: prayer, testimony, sacrifice, reliving, possession; common aims: assurance, suggestion, conviction — healing the problem and giving life perspective.",
    "Divination and fortune-telling: divination foretells the unknown by occult means, the diviner-client interaction the key variable — methods from the Afa strings and Ifa palm nuts to burned turtle shells and the temple chien (Japanese kujibiki: a sincere prayer, a fortune-stick drawn, its number matched to a fortune paper); the therapeutic operation: a CLEAR-CUT ANSWER plus the NAMING effect — the Rumpelstiltskin principle — with the goal of finding the proper way to comply with the universe. Fortune-telling shifts the reference from supernatural to NATURAL (microcosm-macrocosm, vital-force balance): astrology, the Yi-Jing, physiognomy — and its liberty: FATE IS MODIFIABLE, the goal adjustment and harmony with nature.",
    "The common therapeutic factors (Frank; Torrey's Witchdoctors and Psychiatrists; Kirmayer on symbols): arousing hope by capitalising on dependency; decreasing anxiety by naming what is wrong; the therapist's personal qualities admired by the culture; the client's expectations and the emotional arousal enhanced by setting, self-belief and reputation; the emerging sense of learning and mastery; technique — with both sectors using symbols and metaphors for interpretation and suggestion, folk healers sometimes more deliberately. The traditional sector's advantages: cultural congeniality, maximal use of the healer's personality, holistic approach, accessibility and availability, effective use of affect and altered states, collective therapy management, cost-effectiveness.",
    "The stance and the regulation demand: the three attitudes — prohibition (dismissing superstition), academic study (anthropologists, cultural psychiatrists), support (community health workers facing personnel shortages) — resolve into the chapter's position: any practice proven or at least considered helpful to the client and useful to the community deserves support and encouragement. The universal factors: cultivation of hope, activation of surrounding support, enhancement of culturally sanctioned coping — the supernatural dimension less intentionally utilised by modern therapy. The harms five (delay, financial exploitation, sexual involvement, dangerous substances, exorcism injury) plus the wide, unregulated quality range justify the demand: periodic surveys and reevaluation by the health administration, malpractice prevented, the refusing healer discouraged or prevented from practising.",
    "The Indian layer: the temple-dargah-ojha landscape (Tirupati, Shirdi, the goddess circuit; the Sufi dargah tradition; bhuta-vidya's descendant in the ojha/bhagat; jyotisha and the chien-to-prasna mapping; yoga and meditation exported globally; the Ayurvedic medical-physiological orientation); the entry question as the OPD's instrument; the possession spectrum's triad discipline (sanctioned trance normal in context; dissociative disorder presenting as possession; psychosis wearing possession's clothing); collaboration where healers refer onwards, protection and reporting where they chain and beat (the Erwadi-type institutions); costs free-to-cheap at the offering end, life-savings extraction at the commercial end (approx 2026) — the regulation demand's unmet Indian target.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "ih-quiz-1",
      question: "The critical distinction between shamanism and the zar ceremony is:",
      options: ["The continent of origin only", "Who experiences the altered state: the healer in shamanism; the client in zar", "The musical instruments used", "The duration of the trance"],
      correctIndex: 1,
      explanation: "The dissociating person determines the mechanism: the shaman's authority-suggestion-hope versus the zar's client-side catharsis, desire fulfilment and role compensation.",
      afterSectionId: "mechanism",
    },
    {
      id: "ih-quiz-2",
      question: "The 'Rumpelstiltskin principle' in healing refers to:",
      options: ["Spinning straw into gold", "The anxiety-reducing power of naming the problem", "Fairy-tale psychoanalysis", "Keeping the client's name secret"],
      correctIndex: 1,
      explanation: "Anxiety falls when the trouble is named — Torrey's shared root of witchdoctors and psychiatrists, and divination's core therapeutic operation.",
      afterSectionId: "symptoms",
    },
    {
      id: "ih-quiz-3",
      question: "The zar ceremony's therapeutic mechanisms include all EXCEPT:",
      options: ["Emotional catharsis", "Fulfilment of unsatisfied desires (the spirit's demanded gifts)", "Compensation for the suppressed female role", "Genetic counselling"],
      correctIndex: 3,
      explanation: "The three real mechanisms are inseparable from the ceremony's sociology — sex-segregated, low-status women's lives making zar an ideal situation for the relief of persistent and regular anxieties.",
      afterSectionId: "diagnosis",
    },
    {
      id: "ih-quiz-4",
      question: "A patient reports possession episodes. Which finding most strongly points to psychosis rather than a dissociative presentation?",
      options: ["Amnesia for the episodes afterwards", "Altered-voice speech during the episodes", "Delusions and hallucinations present outside the episodes", "The family consulted a healer first"],
      correctIndex: 2,
      explanation: "The mental-state examination behind the trance decides: first-rank symptoms outside the episodes separate psychosis wearing possession's clothing from the dissociative presentation.",
      afterSectionId: "differential",
    },
    {
      id: "ih-quiz-5",
      question: "According to the chapter, the core of religious and magical healing's effectiveness lies in:",
      options: ["Pharmacological activity of the rituals", "The ability to arouse hope by capitalising on the patient's dependency", "Insurance coverage", "Dietary rules"],
      correctIndex: 1,
      explanation: "Frank's formulation — the first of the common therapeutic factors shared by folk and modern therapy.",
      afterSectionId: "management",
    },
    {
      id: "ih-quiz-6",
      question: "The Indian entry question that audits the whole help-seeking pathway is:",
      options: ["When did the symptoms begin?", "Which healer has he seen, what was done, what did it cost?", "Is there a family history of mental illness?", "What medicines has he taken?"],
      correctIndex: 1,
      explanation: "The answers shape prognosis (the delay), the drug history (herbal interactions) and the alliance (contempt for the healer loses the family) — the traditional sector is often the first help-seeking step.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Define indigenous/folk healing with all four defining elements, and explain 'culturally embedded' and 'folk psychotherapy'.", answer: "DEFINITION: non-orthodox therapeutic practices based on indigenous cultural traditions, operating outside official healthcare systems, validated by experience rather than scientific principles — found in pre-industrial and modern societies alike. CULTURALLY EMBEDDED: intensely tied to the cultural system that invented them, therefore difficult to transplant where they lack meaning and legitimacy (all therapies are culturally influenced; these are culturally ROOTED). FOLK PSYCHOTHERAPY: neither healer nor client considers them psychological therapy — they are religious ceremonies or supernatural exercises — yet they often provide genuine psychotherapeutic effects, which is the psychiatrist's reason for knowing them.", topic: "Definition" },
    { question: "List the four orientations with one practice each.", answer: "SUPERNATURAL: spirit mediumship, religious healing ceremonies, divination. NATURAL: fortune-telling, astrology, meditation. MEDICAL-PHYSIOLOGICAL: mesmerism, acupuncture, herbal medicine. SOCIO-PSYCHOLOGICAL: Zen training, Alcoholics Anonymous, est, most modern psychotherapy. The categories are arbitrary and overlapping but clarifying — the same ceremony can be read at several levels, and the spectrum's honest message is that orthodox psychotherapy sits at one end of a continuity, not outside it.", topic: "Orientations" },
    { question: "Who dissociates in shamanism versus the zar ceremony — and what mechanism list follows from each?", answer: "SHAMANISM: the HEALER enters trance (rhythmic singing, dancing, praying, sometimes psychedelic substances such as the cactus preparations), becoming possessed by a god or power; the client consults the supernatural THROUGH him. Mechanisms: the supernatural power used as an AUTHORITY figure, making SUGGESTIONS, providing HOPE. ZAR: the CLIENT also experiences the dissociated state — she shakes, dances and trembles until she falls exhausted, and the spirit then demands favours. Mechanisms: EMOTIONAL CATHARSIS, FULFILMENT OF UNSATISFIED DESIRE (the demanded jewellery, clothing and expensive foods), and COMPENSATION FOR THE SUPPRESSED FEMALE ROLE — the implicit goal being restored balance in real life.", topic: "Spirit mediumship" },
    { question: "Recite the ceremony catalogue: spirit dancing's three phases, the Yoruba sacrifice's therapeutic logic, Spiritual Baptist mourning, and snake-handling's risk.", answer: "SPIRIT DANCING (Salish): brainwashing-like — depatterning through shock (restraint, blindfolding, kinetic and intensive acoustic stimulation, then stillness, silence, starvation), physical training (running, ice-water immersion, dancing), and indoctrination. YORUBA SACRIFICE: the diviner's tossed palm nuts identify the offended lineage deity; the animal is killed in the supplicant's stead, the bad luck passing to it — the healing power lying in REASSURANCE AND THE GENERATION OF CONVICTION: proper curative steps are visibly being taken. SPIRITUAL BAPTIST MOURNING: after washing and anointing, 7 days of prayer, fasting, dreams and visions in a back chamber — claimed benefits from mood relief to communication with God. SNAKE-HANDLING: trance-state handling of poisonous snakes as a sign of blessing — occasional deaths, government prohibition, persistence: emotional excitement sought AT THE RISK OF LIFE.", topic: "Ceremonies" },
    { question: "Explain divination's therapeutic operation and fortune-telling's shift.", answer: "DIVINATION: foretelling the unknown by occult means, the interpretation usually by the diviner — the diviner-client interaction the key variable. Methods: the Afa strings of the Nsukka Ibo, the Yoruba Ifa palm nuts, burned turtle-shell cracks, and the chien system of the Chinese temple (Japanese kujibiki): a sincere prayer, a fortune-stick drawn, its number matched to a fortune paper. The operation: providing a CLEAR-CUT ANSWER — psychologically helpful as a definite way to address the problems — plus the NAMING effect (the Rumpelstiltskin principle: anxiety falls when the trouble is named), the goal being to find the proper way to comply with the universe through divine instruction. FORTUNE-TELLING: the reference shifts from supernatural to NATURAL — microcosm-macrocosm, the human life as part of the universe, problems as imbalance of vital forces or disharmony with natural principles; astrology, the Yi-Jing, physiognomy; and the subtle liberty: FATE IS MODIFIABLE — adjustment and concrete guidance for choices, not passive acceptance.", topic: "Divination" },
    { question: "Recite the six shared common therapeutic factors and the traditional sector's advantages.", answer: "THE FACTORS (Frank; Torrey; Kirmayer): (1) arousing HOPE by capitalising on dependency — the core of religious and magical healing; (2) decreasing anxiety by NAMING what is wrong — the Rumpelstiltskin principle; (3) the healer's PERSONAL QUALITIES admired by the culture; (4) the client's EXPECTATIONS and the EMOTIONAL AROUSAL enhanced by setting, the therapist's self-belief and reputation; (5) the emerging sense of LEARNING AND MASTERY; (6) TECHNIQUE — with both sectors using symbols and metaphors for interpretation and suggestion, folk healers sometimes more deliberately. THE ADVANTAGES: cultural congeniality; maximal use of the healer's personality; holistic approach; accessibility and availability (especially developing areas); effective use of affect and altered states; collective therapy management; cost-effectiveness.", topic: "Common factors" },
    { question: "State the three professional attitudes, the chapter's resolution, the harms list, and the regulation demand.", answer: "THE ATTITUDES: prohibition (modern clinicians dismissing superstition), academic study (anthropologists and cultural psychiatrists), support (community health workers facing personnel shortages). THE RESOLUTION: any folk healing practice that is proven or at least considered helpful to the client and useful to the community deserves support and encouragement. THE HARMS: fraud and financial exploitation, sexual involvement with clients, dangerous prescribed substances, physical injury and even death during exorcisms — plus, from the clinical lens, treatment delay. THE REGULATION DEMAND: folk therapy should be subject to periodic surveys and reevaluation by the health administration so benefits are protected and malpractice prevented; the healer who refuses examination and regulation should be discouraged or prevented from practising.", topic: "Stance & regulation" },
    { question: "What is the Indian entry question, and what does each of its three parts yield?", answer: "'WHICH HEALER HAS HE SEEN, WHAT WAS DONE, WHAT DID IT COST?' The first part maps the pathway (temple, dargah, ojha, astrologer — the de facto first tier) and shapes PROGNOSIS through the delay it reveals. The second yields the treatment tried, the ceremony catalogue in the family's account, and the HERBAL SUBSTANCES taken — the drug-interaction history no referral letter carries. The third is the exploitation screen — from free-to-cheap offerings (approx 2026) to life-savings extraction at the commercial exorcist end — and the answer to all three, asked without contempt, is the alliance: contempt for the healer dismisses the family's world and loses them at the first sentence.", topic: "Indian practice" },
  ],
  faqs: [
    { question: "Are faith healers just frauds?", answer: "Some are; most are not. The field spans benign, culturally embedded healers delivering real therapeutic mechanisms — hope, naming, catharsis, community support — alongside exploiters and the untrained, which is exactly why the honest position is evaluation and regulation rather than blanket judgement in either direction." },
    { question: "Should I tell my patient to stop going to the temple healer?", answer: "Ask first what the healing does for her: support what helps (hope, community, meaning), monitor what harms (delay, expense, dangerous rituals), and keep the psychiatric door open. Collaboration protects better than prohibition — and the family that is ordered to choose usually chooses the healer." },
    { question: "Is a zar or possession ceremony a dissociative disorder?", answer: "Not by itself: culturally sanctioned trance is normal in its context, and the ceremony alone is not a diagnosis. Disorder requires distress, dysfunction and clinical features — the differential is psychiatric, the respect cultural, and the mental-state examination behind the trance is what performs the separation." },
    { question: "Do these practices actually work?", answer: "They deliver the nonspecific common factors reliably — hope, naming, expectation, catharsis, support — the same engine our psychotherapies run on. What they lack is the specific, tested ingredient for defined disorders, which is where medicine enters: both doors open is the honest prescription." },
    { question: "Can meditation count as folk healing?", answer: "Under the broad definition, yes: a self-training practice for tranquillity, growth and prevention, sitting in the natural orientation — and its global export into modern therapy is the clearest case of the folk sector feeding the orthodox, in the direction nobody expected." },
    { question: "What harms should I actually watch for?", answer: "The five the chapter names: treatment delay, financial exploitation, sexual involvement with clients, dangerous prescribed substances, and physical injury during exorcism. Your protective duty runs through all of them — and never pauses for cultural respect." },
    { question: "Who regulates these practices in India?", answer: "Largely nobody: the chapter's demand for periodic survey, evaluation and malpractice prevention is unmet Indian regulatory space. Clinical advocacy belongs at the institutional and district level — and the protection duty (examine, document, report the Erwadi-type institution) is the bedside version of it." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "The Oxford ch 6.5 clinical stance — the tri-partite attitude resolution and the survey-reevaluation-malpractice-prevention demand (paraphrased from the source chapter)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 6.5 — source chapter mapped; content rewritten and updated beyond it (2009)" },
      { source: "Tseng WS — Handbook of Cultural Psychiatry (pp. 515–37), the expanded synthesis of the chapter's material (2001)" },
      { source: "Frank JD — Persuasion and Healing: hope through dependency and the common factors (1961)" },
      { source: "Torrey EF — Witchdoctors and Psychiatrists: the common roots of psychotherapy (1986)" },
      { source: "La Barre EH — They Shall Take Up Serpents: the snake-handling cult (1962)" },
    ],
    trials: [
      { source: "Kennedy JG — Nubian zar ceremonies as psychotherapy (Human Organization 26:185–94, 1967)" },
      { source: "Griffith EEH & Mahy GE — psychological benefits of Spiritual Baptist mourning (Am J Psychiatry 141:769–73, 1984)" },
      { source: "Hsu J — counselling in the Chinese temple: divination by chien drawing (1976)" },
    ],
    reviews: [
      { source: "Jilek WG — brainwashing as a therapeutic technique in contemporary Canadian Indian spirit dancing (1976)" },
      { source: "Prince R — symbols and psychotherapy: the Yoruba sacrificial ritual — the reassurance-and-conviction mechanism (1975)" },
      { source: "Kirmayer LJ — healing and the invention of metaphor (Culture, Medicine and Psychiatry 17:161–95, 1993)" },
      { source: "Jilek WG — traditional healing in the prevention and treatment of alcohol and drug abuse — the advantages list (1994)" },
      { source: "Hufford D — Christian religious healing: the industrialised-society spectrum (1977)" },
    ],
    patientResources: [
      { source: "Tele-MANAS 14416 — India's national tele-mental-health helpline, free, for family distress and pathway guidance" },
      { source: "The entry-question script — the one-minute instrument this course hands to every Indian clinician" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "5 min",
      description: "Plain language: what folk healing is, why the doctor asks about healers, what helps, what harms, both doors open.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "24 min",
      description: "The definition, the four orientations, the shaman-zar fork, the ceremonies, the common factors, the stance.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "31 min",
      description: "Full course with the decision path, the Indian layer and both cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "37 min",
      description: "Everything — the entry-question craft, the triad discipline, the protection duty, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The definition, the four orientations, the folk-psychotherapy paradox.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can define the field with all four elements and explain why it is culturally embedded." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The common-factors engine: naming, hope, arousal, catharsis, restitution.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can walk the three pathways (naming, catharsis, expectancy) and say who dissociates in each." },
    { number: 3, title: "Clinical Practice", description: "The entry question, the possession triad, the stance as clinical work.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can ask the entry question without contempt and run the possession-trance triad cold." },
    { number: 4, title: "Indian Context", description: "The temple-dargah-ojha landscape, the decision path, the common mistakes.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the collaboration script, the protection script and the Erwadi-type report decision." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and high-yield facts.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the shaman-zar question and recite the common factors and the harms five cold." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 6.5 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Frank JD — Persuasion and Healing: hope through dependency, the common factors", sourceType: "textbook", year: "1961", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Torrey EF — Witchdoctors and Psychiatrists: the common roots of psychotherapy (the shared-root thesis; the Rumpelstiltskin principle)", sourceType: "textbook", year: "1986", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Kennedy JG — Nubian zar ceremonies as psychotherapy (Human Organization 26:185–94): the zar's mechanisms and sociology", sourceType: "primary", year: "1967", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Jilek WG — brainwashing as a therapeutic technique in contemporary Canadian Indian spirit dancing", sourceType: "primary", year: "1976", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Prince R — symbols and psychotherapy: the Yoruba sacrificial ritual (the reassurance-and-conviction mechanism)", sourceType: "primary", year: "1975", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Griffith EEH & Mahy GE — psychological benefits of Spiritual Baptist mourning (Am J Psychiatry 141:769–73)", sourceType: "primary", year: "1984", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Hsu J — counselling in the Chinese temple: divination by chien drawing (the temple-counselling study)", sourceType: "primary", year: "1976", dateReviewed: "2026-09-29" },
    { id: "S9", source: "La Barre EH — They Shall Take Up Serpents: the snake-handling cult", sourceType: "textbook", year: "1962", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Kirmayer LJ — healing and the invention of metaphor (Culture, Medicine and Psychiatry 17:161–95): symbols and metaphors in both sectors", sourceType: "primary", year: "1993", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Jilek WG — traditional healing in the prevention and treatment of alcohol and drug abuse (the advantages list)", sourceType: "review", year: "1994", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Tseng WS — Handbook of Cultural Psychiatry (pp. 515–37), the expanded synthesis of the source chapter's material; Indian contextual layer (the entry-question practice pattern) added from Indian practice literature", sourceType: "textbook", year: "2001 / 2026 context", dateReviewed: "2026-09-29" },
    { id: "S13", source: "Hufford D — Christian religious healing: the industrialised-society spectrum", sourceType: "review", year: "1977", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "Definition: indigenous and folk healing practices are non-orthodox therapeutic practices based on indigenous cultural traditions, operating outside official healthcare systems, experience-validated rather than science-founded, found in pre-industrial and modern societies alike — culturally embedded (intensely tied to the cultural system that invented them, hence difficult to transplant); neither healer nor client considers them psychological therapy, yet they often provide psychotherapeutic effects: folk psychotherapy.", grade: "established", sources: ["S1", "S12"] },
    { text: "The four orientations: supernatural (spirit mediumship, religious healing ceremonies, divination); natural (fortune-telling, astrology, meditation); medical-physiological (mesmerism, acupuncture, herbal medicine); socio-psychological (Zen training, Alcoholics Anonymous, est, most modern psychotherapy) — arbitrary and overlapping but clarifying.", grade: "established", sources: ["S1", "S12"] },
    { text: "The spirit-mediumship fork: in shamanism the HEALER enters trance (rhythmic singing, dancing, praying, sometimes psychedelics) and the client consults the supernatural through him — mechanisms of authority, suggestion and hope; in the zar ceremony the CLIENT also experiences the dissociated state — mechanisms of emotional catharsis, fulfilment of unsatisfied desire, and compensation for the suppressed female role.", grade: "established", sources: ["S1", "S4", "S3"] },
    { text: "The zar sociology: Muslim societies (Ethiopia, Egypt, Iraq, Kuwait, Sudan, Somaliland); a female event — clean clothing, the patient in white with gold and perfume, the master singing and drumming, the called spirit making her shake, dance and tremble until she falls exhausted, then demanding jewellery, clothing and expensive foods (things husbands should provide), which relatives and friends gather to provide — propitiation and persuasion, never coercion — ending with animal sacrifice and feast; the ceremony relieves the persistent anxieties of sex-segregated, low-status women's lives.", grade: "established", sources: ["S4", "S1"] },
    { text: "The ceremony catalogue: Salish spirit dancing's brainwashing-like three phases (depatterning through shock, physical training, indoctrination); the Yoruba sacrificial ritual's reassurance-and-generation-of-conviction logic (bad luck passing to the animal killed in the supplicant's stead); Spiritual Baptist mourning's 7 days of prayer, fasting, dreams and visions; snake-handling's occasional deaths under prohibition; Christian religious healing across the spectrum from Christian Science to fundamentalist healers to Roman Catholic anointing of the sick.", grade: "established", sources: ["S5", "S6", "S7", "S9", "S13"] },
    { text: "Divination's therapeutic operation: providing a clear-cut answer plus the naming effect — the Rumpelstiltskin principle (anxiety falls when the trouble is named) — with the goal of finding the proper way to comply with the universe through divine instruction; methods include the Afa strings, the Yoruba Ifa palm nuts, burned turtle-shell cracks, and the Chinese temple chien / Japanese kujibiki fortune-stick.", grade: "established", sources: ["S1", "S8", "S3"] },
    { text: "Fortune-telling's shift: the reference moves from supernatural to natural (microcosm-macrocosm, vital-force imbalance, disharmony with natural principles); varieties include astrology, the Yi-Jing and physiognomy; and its subtle liberty — fate is modifiable — makes it adjustment and guidance, not passive acceptance.", grade: "established", sources: ["S1", "S12"] },
    { text: "The common therapeutic factors shared with modern psychotherapy: arousing hope by capitalising on dependency (Frank); decreasing anxiety by naming what is wrong (Torrey's Rumpelstiltskin principle); the therapist's personal qualities admired by the culture; the client's expectations and the emotional arousal enhanced by setting, self-belief and reputation; the emerging sense of learning and mastery; technique — with both sectors using symbols and metaphors, folk healers sometimes more deliberately (Kirmayer).", grade: "established", sources: ["S2", "S3", "S10"] },
    { text: "The traditional sector's advantages over cosmopolitan medicine: cultural congeniality; maximal use of the healer's personality; holistic approach; accessibility and availability (especially developing areas); effective use of affect and altered states; collective therapy management; cost-effectiveness.", grade: "established", sources: ["S11", "S1"] },
    { text: "The stance: the three professional attitudes (prohibition, academic study, support) resolve into the chapter's position — any folk healing practice that is proven or at least considered helpful to the client and useful to the community deserves support and encouragement; the universal factors named: cultivation of hope, activation of surrounding support, enhancement of culturally sanctioned coping.", grade: "established", sources: ["S1", "S2"] },
    { text: "The harms and the regulation demand: fraud and financial exploitation, sexual involvement with clients, dangerous prescribed substances, physical injury and even death during exorcisms — with a wide quality range among healers and no formal regulation in most societies; hence the demand for periodic surveys and reevaluation by the health administration, with the healer who refuses examination discouraged or prevented from practising.", grade: "established", sources: ["S1", "S13"] },
    { text: "The Indian layer: the temple-dargah-ojha landscape (Tirupati, Shirdi, the goddess circuit; the Sufi dargah tradition; bhuta-vidya's descendant in the ojha/bhagat; jyotisha; yoga and meditation; the Ayurvedic medical-physiological orientation); the entry question; the possession spectrum's triad discipline; the Erwadi-type institutions; free-to-cheap offering-end costs with life-savings extraction at the commercial end (approx 2026) — practice-pattern description from Indian clinical literature, context honestly labelled.", grade: "supported", sources: ["S1", "S12"] },
  ],
};
