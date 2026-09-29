import type { PsychiatryCourse } from "./types";

/**
 * CHILD ADVERSITY CONTEXTS — canonical Psychiatry course
 * (migration batch 13, Group L — child & adolescent psychiatry).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/child-adversity-contexts.md — untouched
 * foundation), re-researched against the note's evidence lineage
 * (Thoburn's placement dimensions, Brodzinsky's overt/covert loss,
 * the Rutter and Lindblad adoptee cohorts, the Rushton & Dance
 * late-placement follow-ups, the Ramchandani-Stein-Murray
 * parental-illness mechanisms, the Weissman offspring cohorts,
 * Black & Urbanowicz's 2-month trial, Dowdney's 1-in-5 synthesis,
 * Schut & Stroebe's targeting rule, UNICEF's orphanhood figures)
 * with per-claim provenance.
 *
 * Drug routes: none linked — no medicine treats these adversities
 * themselves; comorbid-disorder pharmacotherapy belongs to its own
 * courses; recorded honestly in contentGaps, route never invented.
 */
export const childAdversityContextsCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "child-adversity-contexts",
  title: "Child Adversity Contexts — Bereavement, Adoption, Parental Illness",
  shortName: "Adversity contexts",
  kind: "disorder",
  category: "Child & Adolescent Psychiatry",
  groupLetter: "L",
  groupName: "Child & adolescent psychiatry",
  learningPath: ["Psychiatry", "Child & Adolescent Psychiatry", "Child Adversity Contexts — Bereavement, Adoption, Parental Illness"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "30 min",
  yieldRating: "medium",
  primaryAudience: "medical",

  tagline:
    "Three adversities that are not disorders but shape everything — the child placed into a new family, the child living beside an ill parent, the child who loses one — with a single clinical grammar running through all three: risk is real, resilience is the norm, and the treatment is mostly communication, parenting and time.",

  summary:
    "This course gathers three contexts that psychiatry keeps meeting without ever naming them disorders: children placed in new families (adoption, fostering, kinship care), children growing up alongside parental illness (depression, schizophrenia, eating disorders, substance misuse, anxiety, cancer, HIV), and children who lose a parent to death. The framing discipline comes first: none of these is a diagnosis, each is a risk multiplier with resilience as the standing counterweight — most children in all three contexts do NOT develop disorder — and the assessment that documents protective factors (a well parent, high IQ, social support, communication, preparation) as deliberately as risk factors is the one that gets the plan right. For placed children, the six dimensions of family placement (age at placement, prior disturbance, attachments made and lost, placement history, type of adoption, cultural match) form the ready-made assessment skeleton, with age beyond 6 months at placement as the risk gradient and Brodzinsky's contrast doing the mechanism work: later-placed children live the loss overtly and sometimes traumatically, while infant-placed children meet it covertly as comprehension grows. The outcome arithmetic is more hopeful than the lecture-hall mood: about 5% of infant-placed adoptees leave before 18 (adoption breakdown) while roughly 80% of adopters and adoptees report broad satisfaction, and adoptees outperform the adverse environments they left — against matched birth-parent homes a slightly elevated emotional and behavioural risk remains, peaking around age 11, with adoptive identity as the lifelong undertone. For children of ill parents, four mechanisms transmit the risk: impaired parenting, family and environmental discord, direct symptom involvement (the child inside a delusion or an obsession), and the bidirectional child-to-parent arrow — infant irritability and poor motor control at 10 days predict later maternal depression; the parental-cancer finding carries the whole teaching in one line: informed children are LESS anxious than uninformed ones, because communication is the mechanism of protection, not a procedural kindness. For bereaved children the developmental logic governs: the full concept of death (irreversibility, universality) matures only by about 7, so the under-7s grieve in bites — somatic complaints, repeated questions, magical reversals — while adolescents carry the guilt-and-anger load with suicidal feelings more likely acted on inside a depressive reaction. The numbers to quote: 1 in 5 parentally bereaved children needs specialist referral; 1.5–4% of children in industrialised countries lose a parent, up to 21% in some developing countries with HIV responsible for up to three-quarters of those deaths. The management machinery is deliberately unglamorous: a brief family intervention around 2 months after parental death reduces children's morbidity at 1 year, with Schut & Stroebe's conclusion that children are a special case — likely to benefit from primary intervention open to all bereaved children, unlike adults where targeting complicated grief works better; and for traumatic deaths, the sequencing rule is absolute — treat PTSD first, because the witnessed terrifying image blocks the recall mourning needs, and bereavement counselling before trauma treatment does not work. The India layer is structural, not decorative: the joint family is the default placement system (kinship care, usually excellent for attachment and identity continuity, usually unassessed), CARA regulates the formal route, the death rituals — viewing, cremation, the 13-day rites, the yearly shraddha — supply precisely the communal mourning participation the Western literature finds protective, and the clinical additions the Indian district needs are the individual child interview, the memory work and the traumatic-death exception.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Use the six dimensions of family placement (age at placement, prior disturbance, attachments, placement history, type of adoption, cultural match) to structure risk assessment for any adopted, fostered or kinship-placed child.",
    "Summarise placement outcomes honestly: the ~5% infant-adoption breakdown figure, the ~80% satisfaction finding, the adoptees-versus-adverse-environments advantage, and the Swedish inter-country cohort's caveats.",
    "Name the four mechanisms by which parental illness transmits risk to children — impaired parenting, family discord, direct symptom involvement, bidirectional child-to-parent effects — with a clinical example of each.",
    "Describe the disorder-specific risks: parental depression's three-fold offspring depression, schizophrenia, eating disorders (mealtime conflict and infant weight), substance misuse (FAS and the attention finding), anxiety (behavioural inhibition), cancer (communication as the pivotal variable), HIV.",
    "Explain childhood grief developmentally: the under-7 understanding threshold, viewing the body, funerals, adolescent guilt — and manage traumatic bereavement with the PTSD-first sequencing.",
    "Deliver the brief preventive family intervention after parental death and the child-focused techniques: memory boxes, letters to the deceased, rituals, making sense.",
    "Apply the Indian lens to all three contexts: kinship care as the default placement, CARA as the formal route, disclosure barriers in stigmatised parental illness, and the ritual calendar as mourning scaffolding.",
    "Run the resilience audit in every adversity assessment — documenting the well parent, the supports, the communication and the preparation as deliberately as the risks.",
  ],
  quickFacts: [
    { label: "The framework", value: "Six dimensions of placement", detail: "Age at placement, prior disturbance, attachments made and lost, placement history, type of adoption, cultural match — the risk architecture for any placed child; age beyond 6 months at placement the gradient, prior maltreatment and institutionalisation the cargo" },
    { label: "The referral figure", value: "1 in 5", detail: "One in five parentally bereaved children needs specialist referral (Dowdney's synthesis) — while most bereaved children do NOT develop disorder; the resilience audit belongs in every assessment" },
    { label: "The transmission", value: "Four mechanisms", detail: "Impaired parenting, family/environmental discord, direct symptom involvement (the child inside a delusion or obsession) and bidirectional child-to-parent effects — the generic viva answer for parental illness" },
    { label: "The understanding threshold", value: "Under 7", detail: "Children under 7 cannot fully grasp death's irreversibility and universality — 4-year-olds can understand much with help; simple biological explanations, repeated honestly, let comprehension mature alongside mourning" },
    { label: "The intervention window", value: "2 months", detail: "A brief family intervention around 2 months after parental death reduces children's morbidity at 1 year (Black & Urbanowicz) — children a special case, likely to benefit from primary intervention open to all" },
    { label: "The best-quantified parental risk", value: "Three-fold", detail: "Parental depression roughly triples offspring major depression, with anxiety, substance and social impairment riding along into adulthood; ~13% of women have postnatal depression" },
    { label: "The placement arithmetic", value: "~5% breakdown, ~80% satisfied", detail: "About 5% of infant-placed adoptees leave before 18 (adoption breakdown) while roughly 80% of adopters and adoptees report broad satisfaction; 'success' studies ranging below 50% to 95% — a warning about the measures, not the children" },
    { label: "The Indian default", value: "Kinship first, CARA second", detail: "The joint family absorbs orphaned children — often well, always unassessed; the 13-day rites and the yearly shraddha supply the communal mourning the Western literature finds protective" },
  ],
  knowledgeGraph: [
    { label: "Child Trauma & Abuse — The Disclosure Discipline", type: "condition", href: "/psychiatry/child-trauma-abuse/", note: "The traumatic-death and maltreatment overlap — the witnessed-image territory and the disclosure craft this course's sequencing rule borrows" },
    { label: "Post-Traumatic Stress Disorder (PTSD)", type: "condition", href: "/psychiatry/ptsd/", note: "The first-thing-treated in traumatic bereavement — the imagery-blocking mechanism and the trauma-focused tier this course sequences" },
    { label: "Child Anxiety — The School-Refusal Engines", type: "condition", href: "/psychiatry/child-anxiety/", note: "The anxiety-transmission partner: behavioural inhibition, parental over-protection and modelling — the two-fold familial specificity" },
    { label: "Bereavement & Complicated Grief", type: "condition", href: "/psychiatry/bereavement/", note: "The adult account and the targeting-rule contrast — adults: target complicated grief; children: primary universal intervention" },
    { label: "Depressive Disorders", type: "condition", href: "/psychiatry/depressive-disorders/", note: "The parental illness with the best-quantified offspring risk (three-fold) and the comorbid tier a bereaved adolescent may cross into" },
    { label: "ADHD — The Brakes and the Engine", type: "condition", href: "/psychiatry/adhd/", note: "The placed-child differential — the institutionalisation overlap and the attention/impulsivity finding in substance-misusing parents' children" },
    { label: "Child Assessment & Epidemiology — The Prevalence Movers", type: "condition", href: "/psychiatry/child-assessment-epidemiology/", note: "The individual child interview discipline this course leans on — parents under-report, so the child is seen alone" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The alarm circuitry behind behavioural inhibition's increased startle — the temperament that travels in the anxiety transmission" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The still-maturing regulation machinery the adolescent grief load lands on — the executive ceiling under which all three adversities work" },
    { label: "Oxytocin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "The attachment system's chemistry — the machinery a placement severs and re-forms, taught at model level" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Three mechanism stories carry the whole course. The identity story (adoption): the placed child carries two extra hurdles on the road to maturity — separation-and-loss, and the construction of an adoptive identity — and Brodzinsky's contrast explains the two clinical tempers: in later-placed children the loss is overt, sometimes traumatic, arriving with the child's own memory of it; in infant-placed children it is covert, emerging as comprehension grows, which is why emotional and behavioural risk peaks around age 11 and then declines into later adolescence, leaving some adults with a continuous or episodic unease around the question of why their birth parents gave them up. The communication story (parental illness): what damages children of ill parents is rarely the diagnosis itself but what the illness does to the interaction — withdrawal, unavailability, harshness, conflict or silence — with the parental-cancer finding as the cleanest proof: children's anxiety tracks whether they are told about the illness and how well, and informed children show lower anxiety than uninformed ones. The mourning-machinery story (bereavement): to mourn, the child must summon the image of the dead person; if that image is a terrifying picture from a witnessed death, the child avoids it, and the grief cannot proceed — which is why traumatic bereavement is treated in sequence, post-traumatic symptoms first, mourning after. Around all three runs the resilience counterweight: most children do not develop disorder, and the protective factors (a well parent, high IQ, social support, communication, preparation) are as assessable as the risks.",
    steps: [
      "The placement architecture: the six dimensions (age at placement, prior disturbance, attachments, placement history, type of adoption, cultural match) locate the risk — age beyond 6 months the gradient, prior maltreatment and institutionalisation the cargo, 'drift' through contested legal proceedings the avoidable amplifier.",
      "The identity story: two hurdles for the adoptee — separation-and-loss and making sense of an adoptive identity; Brodzinsky's contrast (overt, sometimes traumatic loss in later-placed children; covert, emergent loss in infant-placed children) with maladjustment peaking around age 11 and declining into later adolescence.",
      "The transmission story: parental illness reaches the child through four mechanisms — impaired parenting (the depressed mother less vocal, positive and spontaneous; more negative, intrusive, less communicative), family discord (possibly more proximal than the illness itself), direct symptom involvement (the child inside a delusion or obsession), and bidirectional child-to-parent effects.",
      "The bidirectional arrow: the causation runs both ways — infant irritability and poor motor control at 10 days predict later maternal depression; the child is never only a receiver.",
      "The communication story: the parental-cancer proof — informed children are less anxious than uninformed children; imagination is worse than information, and communication is the mechanism of protection, not a procedural kindness.",
      "The developmental grief story: mourning requires the summoned image; the full concept of death matures only by about 7 (irreversibility, universality), so young children work the loss in bites — somatic reactions, repeated questions, the 'abroad' and 'on a trip' reversals that dissolve as comprehension and mourning proceed together.",
      "The mourning-machinery block: a terrifying witnessed image blocks the recall mourning needs — the child avoids the image, the grief cannot proceed, and the treatment sequence follows the mechanism: treat PTSD first, mourning after.",
    ],
    grade: "established",
  },
  brainRegions: [
    { id: "amygdala", name: "Amygdala (the alarm)", role: "The temperamental startle signature — behavioural inhibition with autonomic reactivity and increased startle in infancy marks the anxiety transmission's endowment; the same circuitry that later holds the intrusive images of traumatic bereavement.", grade: "supported" },
    { id: "prefrontal-cortex", name: "Prefrontal cortex (the still-building regulator)", role: "The maturing regulation machinery the adolescent burden lands on — which is why adolescent bereavement can strike mid-separation and mid-conflict with guilt and anger, and why suicidal feelings are more likely acted on inside a depressive reaction.", grade: "supported" },
    { id: "hippocampus", name: "Hippocampus (the stress-exposure tier)", role: "The stress-exposure architecture the antenatal-anxiety line points to — possible intrauterine HPA-axis effects on the developing child; taught as a model, not a mapping.", grade: "proposed" },
  ],
  neurotransmitters: [
    { name: "Oxytocin", symbol: "OT", role: "The attachment system's chemistry — the machinery a placement severs and a new caregiving relationship re-forms; the biological language of the six dimensions' attachment axis.", grade: "proposed" },
    { name: "Serotonin", symbol: "5-HT", role: "The mood and anxiety transmission tier — the chemistry the parental-depression lines ride on and the comorbid disorder treatment targets; no adversity-specific role claimed.", grade: "proposed" },
    { name: "Noradrenaline", symbol: "NA", role: "The autonomic reactivity behind the increased startle of behavioural inhibition — and the arousal engine of the traumatic bereavement picture the PTSD-first rule addresses.", grade: "supported" },
    { name: "Cortisol", symbol: "Cort", role: "The neuroendocrine member: the HPA axis the antenatal-anxiety hypothesis names as a possible intrauterine route of child risk — a proposed mechanism, honestly graded.", grade: "proposed" },
  ],
  pathways: [
    {
      id: "four-mechanism-pathway",
      name: "The four-mechanism transmission chain (parental illness to child risk)",
      steps: [
        { label: "The parent falls ill", detail: "Depression, schizophrenia, eating disorder, substance misuse, anxiety, cancer, HIV — none damages the child by label alone" },
        { label: "Mechanism 1: impaired parenting", detail: "Withdrawal, unavailability, harshness; the depressed mother less vocal, positive and spontaneous, more negative and intrusive" },
        { label: "Mechanism 2: family discord", detail: "Marital conflict — possibly more proximal to the child's outcome than the illness itself; socio-economic disadvantage clustering alongside" },
        { label: "Mechanisms 3 and 4: symptom involvement and the reverse arrow", detail: "The child incorporated into a delusion or obsession (rarer); and child-to-parent effects — infant irritability and poor motor control at 10 days predicting later maternal depression" },
        { label: "The outcome distribution", detail: "Elevated risk across social, emotional, cognitive and physical domains — with resilience the modal outcome and protective factors assessable" },
      ],
      clinicalManifestation: "The child of the depressed mother: three-fold major depression risk with anxiety, substance and social impairment — and the clinical task of mapping which mechanism carries the load in THIS household.",
      grade: "established",
    },
    {
      id: "mourning-machinery-pathway",
      name: "The mourning-machinery chain (image to grief, and its blockage)",
      steps: [
        { label: "The death must be recalled", detail: "Mourning runs on summoning the image of the dead person — reminiscing, expressing, making sense" },
        { label: "The ordinary machinery works", detail: "Communication about the dead parent, expression of feeling, shared rituals; the concept of death matures by about 7 and comprehension grows with mourning, not despite it" },
        { label: "The traumatic block", detail: "A witnessed horrific death installs a terrifying image; re-invoking it re-invokes the helplessness and terror of the moment" },
        { label: "Avoidance wins", detail: "The child avoids the image — and the grief cannot proceed: 'I cannot see her face; I see the fire instead'" },
        { label: "The sequence the mechanism dictates", detail: "Treat PTSD first (trauma-focused, imaginal exposure); mourning work introduced once the intrusive images have lost their charge" },
      ],
      clinicalManifestation: "The 9-year-old who watched her mother die in a kitchen fire: nightmares, kitchen refusal, smoke startle — and a face she cannot summon because the fire arrives instead.",
      grade: "supported",
    },
    {
      id: "adoption-identity-pathway",
      name: "The adoption identity chain (placement to adult identity work)",
      steps: [
        { label: "The placement", detail: "The six dimensions set the load: age at placement, prior disturbance, attachments made and lost, placement history, type of adoption, cultural match" },
        { label: "Two hurdles loaded", detail: "Separation-and-loss plus the construction of an adoptive identity — the child's own comprehension doing the timing" },
        { label: "Overt or covert loss", detail: "Later-placed: overt, sometimes traumatic; infant-placed: covert, emerging as the child comprehends it (Brodzinsky)" },
        { label: "The age-11 peak", detail: "Emotional and behavioural maladjustment risk peaks around age 11, declining into later adolescence" },
        { label: "The adult residue", detail: "Among the broadly satisfied, some carry a continuous or episodic unease — and when serious adult problems emerge, adoptive identity often underlies the presenting symptoms" },
      ],
      clinicalManifestation: "The adolescent adoptee whose presenting symptoms sit on an unexamined identity question — the formulation the six dimensions would have anticipated.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "the-loss-event", time: "Day zero", title: "The death, the diagnosis or the move", description: "The sudden loss (road accident, fire), the expected one (preparation lowers later anxiety), the parental diagnosis, or the placement — the adversity lands; what happens in the next hours is telling and ritual, and the adults' composure is the child's first medicine.", phase: "onset" },
    { id: "first-days", time: "The first days", title: "Telling, viewing, the funeral", description: "The straight biological explanation for the young; viewing the body where culturally normative and the body is not mutilated (it may reduce misconceptions); funeral attendance supported by clinical experience; the open question of preparation already settled if the death was expected.", phase: "onset" },
    { id: "two-month-window", time: "Around 2 months", title: "The intervention window", description: "The brief family intervention's evidence lives here — support the widowed parent's grief with practical help, open family communication about the dead parent, the four therapeutic elements begun; in placement work, this is the multi-agency support window that prevents drift.", phase: "peak" },
    { id: "morbidity-year", time: "Months 3–12", title: "The morbidity the intervention bends", description: "Untreated, the struggling households produce the year-one morbidity the trial reduced; follow-up appointments after time-limited interventions because problems can emerge later; the placed child's settling (or stress reactions) consolidate in this stretch.", phase: "duration" },
    { id: "adolescence", time: "The adolescent years", title: "Guilt, anger and the acted-on risk", description: "The death may strike mid-separation and mid-conflict; sad affect can now be sustained and grief done directly — but behavioural and academic presentations are equally likely, and suicidal feelings inside a depressive reaction are more likely acted on; the adoptee's identity questions peak around age 11 and decline into later adolescence.", phase: "duration" },
    { id: "adulthood", time: "The long term", title: "Identity work and continuing bonds", description: "Adults adopted as infants: healthier, higher IQ, less criminality than peers from the environments they were born into — with the Swedish-cohort caveat and the episodic identity unease; bereaved adults carry the loss inside continuing bonds; the brief intervention's differences fade by 2 years, the targeting lesson written into practice.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Family placement: 'success' rates range from below 50% to 95% depending on measures — a standing warning about the evidence base; about 5% of infant-placed adoptees leave before 18 (adoption breakdown) while roughly 80% of adopters and adoptees report broad satisfaction; in a Swedish cohort of roughly 6,000 inter-country-adopted adults, more similarities than differences with peers but elevated psychiatric problems, substance abuse and suicide; for later placements, 8 years on, 19% of one English sample of children placed over age 5 had left their placements, and only just over half of the continuing placements were rated continuing/happy. Parental illness: about 13% of women have postnatal depression; up to 40% of some sub-Saharan antenatal clinic attenders are HIV-positive. Bereavement: in industrialised countries 1.5–4% of children lose a parent in childhood; in some developing countries up to 21%, with HIV responsible for up to three-quarters of such deaths (UNICEF).",
    indianPrevalence: "The Indian numbers run through different channels: massive kinship absorption of orphaned children (the joint family as the default child-welfare system), CARA-regulated adoption with its own waiting lists, a high parental illness burden (tuberculosis, late-diagnosed cancer, HIV in concentrated epidemics), and road-traffic and disaster deaths creating exactly the sudden-death bereavements the chapters flag as highest-risk. Childhood bereavement in India is thus commoner than Western epidemiology suggests — and mostly carried by extended families with little professional input.",
    lifetimeRisk: "Not a disorder, so no incidence: the working figures are the 1 in 5 parentally bereaved children needing specialist referral, and the slightly elevated emotional and behavioural risk of adoptees versus matched birth-parent homes — with resilience the modal outcome in all three contexts.",
    genderRatio: "Placed children: the middle-years social, emotional and behavioural difficulties run higher in boys; the parental-illness and bereavement chapters report no consistent gender gradient.",
    ageOfOnset: "Three age-windows instead of an onset: the 6-month placement gradient (risk rising with age at placement beyond 6 months), the adoptive-maladjustment peak around age 11, and the under-7 death-concept threshold.",
    indianNotes: "CARA adoption costs are regulated and modest; the interventions in this note are conversation- and time-based; the scarce commodity is trained counselling capacity, which Tele-MANAS and NGO bereavement programmes partially supply (approx 2026).",
  },
  etiology: [
    { category: "biological", factor: "The inherited and congenital load", details: "Genetics plus environment plus gene-environment interaction for the parental-illness routes; the infant's own contribution (irritability and poor motor control at 10 days predicting later maternal depression — the reverse arrow); fetal alcohol spectrum risk in the substance-misusing household (FAS in 5.9% of alcoholic women's births versus 0.01–0.03% of all births)." },
    { category: "psychological", factor: "Attachment and temperament", details: "Anxious, ambivalent or avoidant attachments formed and then lost; the 'born worrier' temperament carrying the private question of what was not worth keeping about me, while the resilient child shrugs off even mediocre substitute parenting; the two identity hurdles for the adoptee." },
    { category: "social", factor: "The placement history", details: "Pre-placement maltreatment and neglect; institutionalisation; sibling separation; multiple carer changes; 'drift' — placement delayed by contested legal proceedings; transracial and inter-country placement adding the loss of cultural, ethnic and racial ties; socio-economic disadvantage clustering around parental illness." },
    { category: "environmental", factor: "The death's circumstances", details: "Traumatic circumstances (witnessed horrific death; suicide or homicide with media interest, disfigured or delayed bodies, withheld mementoes); compromised surviving parenting; pre-death adversity (the loss hard to separate from what preceded it); the collapse of support systems that find the death unbearable." },
    { category: "psychological", factor: "Developmental level", details: "Concept of death incomplete before 7; learning disability raising bereavement risk through cognitive difficulty with death's components plus dependency; adolescent mid-separation conflict loading guilt and anger onto the loss." },
  ],
  symptomClusters: [
    {
      category: "1. The placed child (by stage since placement)",
      symptoms: ["Short-term: English infants with good early care placed quickly settle without obvious stress; Romanian institutionalised infants placed in the early months also settle well; children placed after 6 months show stress reactions to attachment loss or the adverse-reaction effects of prior maltreatment", "Middle years: higher rates of social, emotional and behavioural difficulty than matched non-adopted peers (especially boys) — inability to settle, restlessness, lying or fantasising, peer and teacher difficulties, low self-esteem and insecurity, peaking around age 11 and declining into later adolescence", "Later-placed children: the pre-placement problems travel with them, plus institutionalisation effects (inter-country adoptees), attachment disturbances and the consequences of multiple moves", "Adults adopted as infants: healthier, higher IQ, less criminality, fewer psychiatric symptoms than peers from the environments they were born into; broadly similar to those raised by comparable birth parents — with the Swedish-cohort caveat of elevated psychiatric disorder, substance misuse and suicide", "Relinquishing parents: moderate distress to long-term grief that may affect children born later — and some relinquishing parents are themselves children"],
    },
    {
      category: "2. The child of the ill parent (by parental disorder)",
      symptoms: ["Parental depression (either parent — paternal depression now has independent evidence): three-fold major depression in offspring plus anxiety disorders, substance dependence and social and physical-health impairment extending into adulthood; postnatal depression: infant emotional and behavioural risk, possible cognitive effects, and developing-country evidence of infant physical-health risks (poor growth, diarrhoeal illness)", "Schizophrenia: greatly increased offspring schizophrenia risk; obstetric complications; childhood attentional problems that persist and mark later risk; social difficulties with peers and teachers; adolescent social-relationship and thought-disorder problems; adult schizotypal behaviour — much of the non-cognitive burden tracing to family disruption rather than 'schizophrenogenic' communication", "Eating disorders: infancy risk of failure to thrive (anorexia history); intrusive mealtimes with negative emotion and conflict, less infant autonomy, infant weight inversely related to mealtime conflict; middle childhood: self-evaluation by body shape and weight, dietary restriction", "Alcoholism and substance misuse: FAS (5.9% of alcoholic women's births); impaired cognitive and social development; ADHD/attention/impulsivity — the most consistent finding; aggression, fewer friends, criminality risk; elevated risk of the same misuse in adolescence with resilience the norm; parenting deficits of neglect and harsh discipline", "Anxiety: considerable familial specificity (two-fold risk); temperamental behavioural inhibition and autonomic reactivity (increased startle in infancy); parental over-protection limiting skill development; social-phobia modelling; possible intrauterine HPA-axis effects of antenatal anxiety", "Cancer: adolescent children show elevated emotional disturbance (younger children inconsistently); problem-focused coping adaptive, emotion-focused coping (venting, denial, apathy) predictive of anxiety and depression — informed children less anxious than uninformed ones", "HIV: school-age children of affected mothers show externalising and internalising problems, lower social skills and academic difficulties — with maternal depression the plausible key mechanism"],
    },
    {
      category: "3. The bereaved child (by developmental stage)",
      symptoms: ["Young children: anxiety or depressive reactions, often somatic (regression in achieved control, anorexia, insomnia); cannot distinguish temporary from permanent loss; no full understanding of death before 7 though 4-year-olds can understand much with help", "Pre-pubertal schoolchildren: can be helped to comprehend death's reality; viewing the body (where culturally normative and the body is not mutilated) may reduce misconceptions; attending the funeral appears — clinically, though not scientifically — to help grieving", "Adolescents: the death may strike mid-separation, mid-conflict; guilt and anger; suicidal feelings more likely acted on within a depressive reaction; can sustain sad affect and grieve directly, but also react with behavioural and academic difficulties", "Children with learning difficulties: higher risk — conceptual difficulty with death's components plus dependency", "Other losses: grandparent deaths (devastating where caregiving), sibling death (high morbidity, mitigated by preparation and ritual participation; adolescents may deny finality), friend/pet/home losses (usually non-pathological with supported parents — though adolescent friends' suicide shows elevated depression in controlled studies, not elevated attempted suicide)"],
    },
    {
      category: "4. The traumatic-bereavement picture",
      symptoms: ["PTSD risk from witnessed deaths; suicide and homicide deaths add traumatic content, media interest and broken support systems", "The blocked image: the child cannot summon the dead person's face — the terrifying picture arrives instead ('I see the fire, not her')", "Nightmares, avoidance of the death's locations and reminders, exaggerated startle to its sensory traces", "Deterioration after well-meant ritual participation — the rites landing on untreated trauma", "Bereavement counselling tried and failed — the signature that the sequence, not the dose, was wrong"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The three assessments",
      code: "One framework per context",
      criteria: [
        "Placed children: assess on the six dimensions — age at placement, prior disturbance, attachments made and lost, placement history and duration, adoption type, cultural match — which tell you where the risk sits and what the differential should include (attachment disorders, consequences of maltreatment, ADHD, the institutionalisation overlap, PTSD, identity issues in adolescence).",
        "Children of ill parents: do not diagnose the child without mapping the family — the child's disorder may mirror the parent's but the range is broad (social, emotional, cognitive, physical); screen specifically for the four mechanisms (parenting capacity, marital discord, socio-economic strain, symptom involvement); in parental cancer, assess what the child has been told.",
        "Bereaved children: parents under-report child symptoms relative to children's own reports — interview children individually; look for the diagnosable disorders (depression, anxiety, PTSD) that cross thresholds; assess trauma exposure and the imagery-blocking mechanism; check the surviving parent's functioning, because the children's outcome rides on it.",
        "The resilience audit, all three contexts: document protective factors (a well parent, high IQ, social support, communication, preparation) as deliberately as risk factors.",
      ],
      duration: "Contexts, not episodes — but the disorder thresholds inside them follow their own clocks (the bereavement window below).",
      indianNote: "The kinship-placed child reaches no clinic gate at all — the joint-family placement happens without assessment; the six-dimension screen (pre-loss adversity, caregiving quality, favouritism and exploitation within the host household, school continuity) is the Indian clinician's to initiate.",
    },
    {
      system: "The classification framing",
      code: "DSM V62.82 / ICD-10 Z63.4",
      criteria: [
        "Uncomplicated bereavement is not a disorder: DSM's bereavement coding (V62.82) against major depression (296.2), with the roughly 2-month window before major depression is diagnosed in bereavement.",
        "ICD-10's framing: adjustment-disorder coding (F43.2) where symptoms cross the threshold, and the bereavement Z-code (Z63.4) carrying the 6-month context note.",
        "The disorders that DO cross thresholds — depression, anxiety, PTSD — get their own diagnoses and their own treatment tiers; the adversity is the context, never the label.",
        "None of the three adversities is itself a diagnosis: placement status, parental illness and bereavement enter the formulation as risk multipliers with resilience the modal outcome.",
      ],
      duration: "The ~2-month DSM window before major depression is diagnosed in bereavement; ICD-10's Z63.4 6-month frame.",
      indianNote: "The Indian clinic's practical rule: code the disorder if it is there, name the adversity in the formulation always — the family hears 'he lost his father and is struggling', not 'he is diseased', and stays engaged.",
    },
  ],
  severityScales: [
    {
      name: "The bereavement referral staging",
      fullName: "The adversity-response ladder (a teaching staging, not a scored instrument)",
      measures: "Where a parentally bereaved child sits between the ordinary grief most children run and the disorder thresholds a minority cross.",
      ranges: [
        { min: 0, max: 0, severity: "The ordinary course (most children)", action: "No disorder; the four therapeutic elements running through ordinary family life — communication about the dead parent, reminiscing, expression of feeling, making sense; the community rituals doing the containment; no clinic needed unless the household asks" },
        { min: 1, max: 1, severity: "The struggling band (the 1-in-5 territory)", action: "Communication closed or the surviving parent exhausted or subthreshold symptoms: the brief family intervention offered around 2 months — open to all bereaved children, not only complicated cases (the children-as-special-case rule); practical support to the widowed parent; teacher sensitisation; follow-up appointments because problems can emerge later" },
        { min: 2, max: 2, severity: "The threshold and traumatic band", action: "Depression, anxiety or PTSD crossing thresholds: disorder-specific treatment; for witnessed or violent deaths the sequencing rule applies absolutely — trauma-focused treatment of PTSD first, mourning work once the intrusive images have lost their charge" },
      ],
      indianNote: "The staging travels: the stage-1 tier is conversation-, time- and ritual-based, deliverable at a district clinic visit; the stage-2 trauma tier is the scarce trained-counselling capacity Tele-MANAS and NGO programmes partially supply.",
    },
    {
      name: "The placement-outcome staging",
      fullName: "The six-dimension risk ladder (a teaching staging, not a scored instrument)",
      measures: "Where a placed child's risk sits on the six-dimension architecture — and what each rung demands.",
      ranges: [
        { min: 0, max: 0, severity: "Infant placement with good prior care", action: "The lowest-risk rung: settles quickly without obvious stress (the English and Romanian infant findings); ordinary paediatric surveillance with the identity questions anticipated for later — openness the modern answer, total-severance secrecy the dismantled 20th-century experiment" },
        { min: 1, max: 1, severity: "Placement after 6 months, or prior disturbance", action: "The gradient rung: expect stress reactions to attachment loss and the adverse-reaction effects of prior maltreatment; multi-agency support before, during and after placement; contact between birth parents, carers and child facilitated; the differential worked (attachment disorders, maltreatment consequences, ADHD, PTSD)" },
        { min: 2, max: 2, severity: "Breakdown territory", action: "Later placements carrying prior disturbance, drift and contested proceedings, multiple moves, sibling separation: treatment foster care with trained, supported carers and multisystemic programmes (better outcomes than service-as-usual); 'overstaying' reframed as success where the task-centred family becomes a secure base into adulthood" },
      ],
      indianNote: "The kinship placement sits wherever its facts put it — the Indian error is assuming it always sits at rung 0 because the carers are relatives; the same screen applies (favouritism, exploitation, school continuity, pre-loss adversity).",
    },
  ],
  differentialDiagnosis: [
    { condition: "Attachment disorders (reactive attachment / disinhibited social engagement)", distinguishingFeatures: "The placed child's indiscriminate friendliness or absent comfort-seeking traced to the caregiving history rather than to the placement itself.", keyDifferentiator: "The attachments dimension of the six: the disorder requires the pathogenic care history — the placement is its treatment, not its cause." },
    { condition: "ADHD", distinguishingFeatures: "Restlessness, inattention and impulsivity in a placed child — the institutionalisation overlap and the substance-misusing-parent finding (attention problems the most consistent child outcome).", keyDifferentiator: "The timeline (symptoms pre-dating the placement or the loss) and the history dimension of the six — maltreatment and deprivation can both mimic and drive it." },
    { condition: "PTSD", distinguishingFeatures: "Intrusive images, avoidance and startle after a witnessed death — the traumatic-bereavement core; also the pre-existing trauma layer under any of the three adversities.", keyDifferentiator: "The blocked image ('I see the fire, not her') — and the sequencing consequence: trauma treatment precedes grief work." },
    { condition: "Major depression", distinguishingFeatures: "The adolescent depressive reaction to bereavement — sustained sad affect now possible, guilt, and suicidal feelings more likely acted on.", keyDifferentiator: "The ~2-month DSM window before the diagnosis is made in bereavement — the grief given its chance to be grief first." },
    { condition: "Adjustment disorder (ICD-10 F43.2)", distinguishingFeatures: "Symptomatic distress beyond the ordinary response in the months after the adversity, below the depression threshold.", keyDifferentiator: "Threshold and impairment: the ICD adjustment framing holds the subthreshold band the brief family intervention targets." },
    { condition: "Learning disability", distinguishingFeatures: "The higher-risk bereaved group — cognitive difficulty with death's components plus dependency complicating every mechanism.", keyDifferentiator: "The developmental assessment: the under-7 comprehension limit extended by the cognitive level; explanations pitched to the tested, not the chronological, age." },
  ],
  management: [
    { category: "placement-planning", name: "Preparation, matching and multi-agency support", description: "The 'keep them out of care at all costs' attitude produces ill-planned placements that break down — preparation and matching on the six dimensions come first; good contact between birth parents, foster carers and the child is facilitated, not tolerated; multi-agency support runs before, during and after placement; openness is the modern answer for adoption (total-severance closed adoption was a 20th-century experiment — UK secrecy from 1958, Alabama records sealed until 1991 — now largely dismantled by access-to-information legislation and open contact).", whenToUse: "Every placement decision, formal (CARA) or informal (kinship) — the informal ones need the framework brought to them.", indianContext: "CARA-regulated adoption carries the formal route's structure; the kinship default needs the same six-dimension questions asked without the paperwork — pre-loss adversity, caregiving quality, favouritism, exploitation, school continuity." },
    { category: "placement-planning", name: "Time-limited placements and treatment foster care", description: "Temporary, emergency, assessment, treatment and bridging placements each named for their function, returning to the same foster carers where possible; treatment foster care (specially recruited, trained, supported carers) with multisystemic programmes shows better outcomes than service-as-usual for troubled children; 'overstaying' reframed as success where the task-centred family becomes a secure base into adulthood.", whenToUse: "Later placements with prior disturbance, drift and breakdown territory — the 19% band.", indianContext: "The Indian district has no treatment-foster-care tier: the multisystemic logic is approximated by the anganwadi-teacher-family triangle the clinic can convene — the name-the-model question asked before any private package is paid for." },
    { category: "family", name: "Treat the parental illness and the parenting interface", description: "Family-perspective working alongside the parental treatment itself; social support for the family; in parental cancer: assist parents to recognise and cope with children's distress, communicate about the illness (informed children are less anxious), support problem-focused coping; in HIV: identify and treat maternal depression as the caregiving mechanism; in substance misuse: enhance social supports and treat the family system; in anxiety: work with parental over-protection and modelling.", whenToUse: "Every household where a parent carries a disorder — the mechanism screen (parenting, discord, symptom involvement, the reverse arrow) tells you which lever to pull.", indianContext: "The stigma layer is the Indian mechanism to name: HIV and still TB and leprosy carry family-level stigma that suppresses exactly the communication shown protective — the child knows the parent is 'sick' but not what is happening; the clinical task is permission-giving for honest, age-appropriate disclosure." },
    { category: "psychotherapy", name: "The brief preventive family intervention after parental death", description: "A brief family intervention around 2 months after parental death reduces children's morbidity at 1 year (Black & Urbanowicz); Schut & Stroebe's conclusion: children are a special case, likely to benefit from primary intervention — open to all bereaved children, not only complicated cases. Support the widowed parent's grief and mourning with practical help (child care, financial advice) — as important as counselling the child; support and guide other adults (teachers, religious leaders); the four therapeutic elements: family communication about the dead parent promoted, mourning through reminiscing, appropriate expression of feelings, making sense of the death; child techniques — art and storytelling, letters to the deceased, the memory box, rituals (candles, balloons), opening-up games, role play — deliverable by carefully selected, trained, supervised volunteers.", whenToUse: "Offered universally in the months after parental death; preparation for an expected death lowers later anxiety and begins earlier still.", indianContext: "The surviving-parent package is deliverable anywhere: practical support (MGNREGA/survivor pensions, school fee waivers), one clinic visit at ~2 months, teacher sensitisation — none of it requires infrastructure Indian districts lack; the ritual calendar (the 13-day rites, the yearly shraddha) is the ally, not the obstacle." },
    { category: "psychotherapy", name: "Trauma first in traumatic bereavement", description: "The sequencing rule the mechanism dictates: treat PTSD first — trauma-focused CBT with gradual imaginal exposure to the memory — with grief work introduced once the intrusive images have lost their charge; bereavement counselling before trauma treatment does not work; the family is counselled that this sequence, not ritual forcing or ritual avoidance, is the evidence-based path.", whenToUse: "Any witnessed or violent death with intrusive imagery, avoidance or startle — the blockage confirmed by the child's account (or the parent's, taken separately).", indianContext: "NCRB-context suicide deaths and accidental deaths arrive with the complicating features the chapter lists — stigma, police procedures, delayed or disfigured bodies, media — expect the PTSD-first rule to apply especially often, and expect the family's well-meant ritual pressure to need the sequencing conversation." },
    { category: "social", name: "The disorder-specific tier and the follow-up habit", description: "Children meeting disorder thresholds get disorder-specific treatment (depression, anxiety, PTSD — their own courses); follow-up appointments after time-limited interventions because problems can emerge later; the resilience audit repeated at each contact; young children given straight biological explanations of what death means, and helped to recognise and cope with sad affects in themselves and the surviving family.", whenToUse: "Continuous discipline beneath every plan in this course — the adversity is chronic even when the episodes are not.", indianContext: "Tele-MANAS 14416 (24×7, free) as the distress and follow-up channel between scarce clinic visits; the trained-counselling scarcity recorded honestly (approx 2026)." },
  ],
  safety: {
    redFlags: [
      "Suicidal feelings in an adolescent's depressive reaction to bereavement — more likely acted on than at any other developmental point; ask directly, treat the depression",
      "Intrusive images, avoidance and startle after a witnessed death — the traumatic-bereavement block: treat PTSD first; bereavement counselling before trauma treatment does not work",
      "Deterioration after ritual participation in a witnessed or violent death — the rites landing on untreated trauma, not ritual failure",
      "Placement breakdown in the offing — drift through contested proceedings, multiple moves, sibling separation: the multi-agency window is closing while the paperwork argues",
      "The exploited or scapegoated child inside an unassessed kinship arrangement — favouritism, school discontinuity, household labour: kinship care gets the same screen as any placement",
      "The parentally bereaved child whose surviving parent is collapsing — the children's outcome rides on the surviving parent's functioning; exhaustion, two jobs and closed communication are the treatable mechanism, not the child's diagnosis",
    ],
    urgentGuidance:
      "The order of operations: (1) the adolescent depressive reaction with suicidal feelings — assessed and treated as the emergency it is; (2) the witnessed or violent death — the PTSD-first sequencing begun, the family told why counselling alone failed; (3) the surviving parent's functioning audited at every contact (grief support with practical help is as important as counselling the child); (4) the placement at drift — multi-agency convening before, not after, the breakdown; (5) the kinship arrangement screened with the same six dimensions as any placement; (6) follow-up appointments kept after time-limited interventions, because problems can emerge later.",
  },
  drugLinks: [],
  contentGaps: [
    "No medicine treats the adversities themselves — the pharmacotherapy that enters these children's lives is comorbid-disorder treatment (depression, anxiety, PTSD), each with its own KYP course and its own tier; no drug is linked here, the route never invented.",
    "The child SSRI tier for comorbid post-bereavement depression exists as KYP drug lessons only in adult-dosing form — the child tier is named at class level and taught in the mood and anxiety courses, never linked from here.",
    "Trauma-focused CBT for childhood PTSD — the first move in traumatic bereavement — has no KYP lesson of its own; the sequencing rule is taught here, the therapy in the PTSD and Child Trauma & Abuse courses.",
    "Treatment foster care and the multisystemic programme models (the placed-child management tier) have no KYP delivery-model lessons — their logic is taught here so the name-the-model question can be asked before a family pays.",
    "The brief family bereavement intervention and the child grief techniques (memory boxes, letters, rituals, opening-up games) are volunteer-deliverable but have no KYP lesson outside this course — taught here in full.",
  ],
  patientGuide: {
    whatIsIt:
      "This course is about three hard things that happen to children — being placed in a new family (adoption or fostering), living with a parent who has an illness (depression, schizophrenia, an eating disorder, substance misuse, anxiety, cancer or HIV), and losing a parent to death. None of these three is itself an illness. They are adversities: they raise the chances of emotional and behavioural difficulty, and most children who live through them do NOT develop a disorder. What protects children is remarkably consistent across all three: honest, age-appropriate communication; a functioning caring adult; preparation when the hard thing can be foreseen; and the chance to make sense of what happened.",
    whatCausesIt:
      "For placed children, the risk comes from what happened before and around the placement — maltreatment, neglect, time in an institution, separations and moves, and the age at which the child was placed (younger is generally easier). For children of ill parents, the risk travels four routes: the illness making parenting harder, conflict in the family, the child being drawn into the parent's symptoms, and the child's own temperament affecting the parent in return. For bereaved children, the risk depends on the child's age (children under 7 cannot fully understand that death is permanent), learning difficulties, whether the death was witnessed or violent, how the surviving parent is coping, and what life was like before the death.",
    symptoms:
      "Placed children may be restless, unable to settle, telling stories that are not true (fantasising rather than lying), struggling with friends and school, or carrying low self-esteem — often peaking around age 11 and easing after. Children of ill parents show a wide range: low mood, anxiety, attention problems, body and eating concerns, or physical complaints — the pattern follows the parent's illness and the household's communication. Bereaved children grieve in the language of their age: tummy aches, sleep trouble and regression when young; questions asked over and over; guilt, anger and school decline in adolescence. Warning signs needing professional assessment: talk of suicide in a grieving teenager, nightmares and avoidance after a witnessed death, or a child who is getting worse rather than slowly better.",
    treatment:
      "There is no medicine for adversity itself — the treatment is the household and the conversation. For placed children: careful matching, preparation, contact where it helps, and support that does not vanish after the placement. For children of ill parents: treat the parent's illness AND the family's way of talking about it — children who are informed about a parent's cancer are measurably less anxious than children left guessing. For bereaved children: a brief family intervention around 2 months after the death (talking about the parent who died, remembering together, expressing feelings, making sense of what happened) reduces problems a year later; memory boxes, letters and simple rituals help the child's own work. If the death was witnessed or violent, the trauma is treated FIRST — the frightening images must lose their grip before the grieving can begin; grief counselling before trauma treatment does not work. The surviving parent's wellbeing is part of the child's treatment: practical help, rest and support for the parent are as important as sessions for the child.",
    selfHelp: [
      "Tell children the truth in words their age can hold — imagination is worse than information; the child who is told is calmer than the child who guesses.",
      "Let the young child ask the same question many times — understanding of death builds slowly until about age 7; answer with simple biological truth each time.",
      "Include children in the mourning the culture already provides — the funeral, the viewing where it is the custom and the body is not disfigured, the yearly rites; participation helps, with a prepared and available adult alongside.",
      "Make remembering easy: a memory box, photographs, letters to the person who died, a lamp lit on the monthly or yearly remembrance.",
      "Watch the surviving parent, not only the child — the child's recovery rides on the adult's; practical help (child care, money advice, school fee waivers) is treatment.",
      "If the death was witnessed or violent and the child has nightmares, avoidance or a startle response, seek trauma-focused help FIRST — grief work comes after.",
      "For the adopted or fostered child, keep the story open and honest — secrecy was the failed experiment of the last century; identity questions are normal, lifelong and answerable.",
    ],
    whenToSeekHelp: [
      "Any talk of suicide, or a grieving adolescent who seems depressed rather than bereaved — assessment now, not later",
      "Nightmares, avoidance and jumpiness after a witnessed or violent death — trauma-focused treatment first, grief work after",
      "A bereaved child getting worse rather than slowly better over the months, or new problems appearing after things had settled",
      "A placed child whose distress or behaviour is not easing across the first school terms, or any suggestion of breakdown in the placement",
      "A child of an ill parent carrying the household alone — excluded, overheard half-truths, school decline — ask the treating team for a family conversation",
      "The surviving parent's own collapse — grief that cannot function; the child's best protection is the parent's treatment",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free) — the distress, follow-up and caregiver channel between clinic visits",
      "CARA (Central Adoption Resource Authority) — the regulated adoption route with its waiting lists and safeguards",
      "The district hospital psychiatric tier / DMHP — where the brief family intervention and the trauma-focused referrals live",
      "School counsellors and class teachers — the sensitisation tier the surviving-parent package trains",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific adversity pathway exists; practice follows the source chapters' frameworks (the six dimensions, the four mechanisms, the bereavement-management ladder) with CARA's adoption regulation as the formal placement structure and the Juvenile Justice care-and-protection tier behind it; the DSM/ICD classification handles any disorder thresholds crossed.",
    systemContext: "The Indian reality is that most of this never reaches a clinic: the joint family absorbs the orphaned and separated child (kinship care as the default child-welfare system — often good for attachment, culture and identity continuity, always informal and unassessed), and the bereaved household is carried by relatives, teachers and religious structures with little professional input. The clinic meets the exceptions: the child who deteriorates, the placement that sours, the stigmatised illness nobody has explained.",
    programmeContext: "CARA-regulated adoption with its waiting lists as the formal route; Tele-MANAS 14416 and NGO bereavement programmes partially supplying the trained-counselling scarcity; the district psychiatric tier (DMHP) as the referral destination for threshold disorders and trauma-focused treatment.",
    costConsiderations: "The effective interventions are conversation- and time-based and nearly free (one clinic visit at ~2 months, teacher sensitisation, the memory-box and ritual work the household already owns); CARA adoption costs are regulated and modest; the expensive and scarce item is trained counselling capacity (approx 2026) — which is why the volunteer-deliverable design of the child grief techniques matters here specifically.",
    culturalConsiderations: "The Indian death rituals — viewing, cremation, the 13-day rites, the yearly shraddha — are precisely the community participation the Western literature finds protective: children are usually included, mourning is communal, and the calendar of remembrance continues; the clinical additions are the individual child interview, the memory work and the traumatic-death exception where the witnessed image blocks mourning. Stigma shapes the parental-illness side: HIV and still TB and leprosy suppress exactly the disclosure shown protective — the child knows the parent is 'sick' but not what is happening, excluded from hospital visits, overhearing whispered half-truths. The suicide and accidental-death layer (the NCRB context) arrives with stigma, police procedures, delayed or disfigured bodies and media — expect the PTSD-first rule to apply especially often.",
    patientCounselling: [
      "The disclosure script: 'Children who are told, in words their age can hold, are calmer than children left guessing — imagination is worse than information; the illness does not protect the child from the not-knowing, the not-knowing harms him.'",
      "The kinship script: 'Relatives caring for the child is often the best placement India has — and it still deserves the questions we would ask any placement: schooling, fairness, workload, and how the child is really doing.'",
      "The ritual script: 'The rites are the village's grief medicine and the child belongs inside them — our additions are the child's own words, pictures and questions, and the one exception: if the death was witnessed, we treat the frightening images first.'",
      "The surviving-parent script: 'Your grief is the child's weather — practical help, rest and one honest conversation do more for him than any session he attends alone.'",
      "The 'abroad' script: 'He is not lying — he is holding a comprehension still under construction; answer the questions with simple truth and the story dissolves as understanding and mourning proceed.'",
      "The follow-up script: 'Grief has a long tail and problems can appear late — the appointments at 3 and 6 months are not bureaucracy; they are how we catch the one child in five who needs more.'",
    ],
  },
  decisionPath: {
    title: "The child inside an adversity — where the risk sits and what to do",
    nodes: [
      {
        id: "start",
        question: "A child arrives inside one of the three adversities — or the suspicion of one. Which door?",
        branches: [
          { label: "Placed or being placed (adoption, foster, kinship)", next: "placement-gate" },
          { label: "Living with an ill parent", next: "illness-gate" },
          { label: "A parent has died", next: "bereavement-gate" },
        ],
      },
      {
        id: "placement-gate",
        question: "The six-dimension assessment — age at placement, prior disturbance, attachments, placement history, adoption type, cultural match. Where does this child sit?",
        branches: [
          { label: "Infant placement, good prior care", next: "infant-path" },
          { label: "Placed after 6 months, or prior disturbance", next: "later-path" },
          { label: "Kinship arrangement, never assessed", next: "kinship-path" },
        ],
      },
      {
        id: "infant-path",
        question: "The lowest-risk rung.",
        recommendation: "Expected to settle without obvious stress; ordinary surveillance with the identity questions ANTICIPATED, not awaited — openness the modern answer, the story told early and honestly; the middle-years wobble around age 11 expected and explained to the carers as a passing peak, not a verdict.",
      },
      {
        id: "later-path",
        question: "The gradient rung — the child's history travels with them.",
        recommendation: "Multi-agency support before, during and after placement; contact facilitated where safe; the differential worked (attachment disorders, maltreatment consequences, ADHD, the institutionalisation overlap, PTSD); where the placement is at drift or breaking down — treatment foster care with trained, supported carers and multisystemic programmes (better outcomes than service-as-usual); 'overstaying' reframed as success where the family becomes a secure base into adulthood.",
      },
      {
        id: "kinship-path",
        question: "The Indian default placement — excellent continuity, zero assessment.",
        recommendation: "Bring the six dimensions to the informal placement: pre-loss adversity, caregiving quality, favouritism and exploitation within the host household, school continuity; the same risk screen as CARA's formal route, delivered as a conversation, not a file — the joint family is the placement system, and it still deserves the questions.",
      },
      {
        id: "illness-gate",
        question: "Which illness, and what is it doing to the interaction?",
        branches: [
          { label: "Cancer or stigmatised illness (HIV, TB) — the disclosure question", next: "disclosure-path" },
          { label: "Depression, anxiety, substance misuse — the interaction tier", next: "parenting-path" },
        ],
      },
      {
        id: "disclosure-path",
        question: "The communication story: the diagnosis itself is rarely what damages.",
        recommendation: "Assist the parents to tell the children, in age-appropriate detail — informed children show lower anxiety than uninformed ones; support problem-focused coping over venting, denial and apathy; for HIV, treat the maternal depression (the caregiving mechanism); for the stigma layer, permission-giving for honest disclosure — the whispered half-truth is the harmful version.",
      },
      {
        id: "parenting-path",
        question: "The four-mechanism screen on THIS household.",
        recommendation: "Treat the parental illness AND the interface: family-perspective working; parenting capacity supported; marital discord addressed as possibly the more proximal cause; the child kept out of the symptoms where possible; the reverse arrow remembered (the irritable infant and the depressed mother each treating the other); social supports enhanced — especially in the substance-misusing household where the family system is the treatment unit.",
      },
      {
        id: "bereavement-gate",
        question: "The death — and the machinery it left behind.",
        branches: [
          { label: "Witnessed or violent death, intrusive images, avoidance", next: "trauma-path" },
          { label: "Ordinary death — the brief family intervention is offered to all", next: "intervention-path" },
          { label: "Disorder threshold crossed (depression, anxiety, PTSD)", next: "disorder-path" },
        ],
      },
      {
        id: "trauma-path",
        question: "The image-blocking mechanism — the face cannot be summoned.",
        recommendation: "Treat PTSD first: trauma-focused CBT with gradual imaginal exposure to the memory; grief work introduced once the intrusive images have lost their charge; the family counselled that this sequence — not ritual forcing, not ritual avoidance — is the evidence-based path; bereavement counselling before trauma treatment does not work, and the deterioration after the rites was the mechanism speaking, not ritual failure.",
      },
      {
        id: "intervention-path",
        question: "The universal offer — children are the special case.",
        recommendation: "The brief family intervention around 2 months after the death: the surviving parent supported with practical help first (child care, financial advice, MGNREGA/survivor pensions, school fee waivers); family communication about the dead parent opened; the four therapeutic elements (reminiscing, expression, making sense) run through ordinary household life; the child techniques offered — memory box, letters, rituals; teachers and religious leaders guided; the community's ritual calendar enlisted as the ally; follow-up at 3 and 6 months because problems can emerge later.",
      },
      {
        id: "disorder-path",
        question: "The threshold crossed — the adversity was the context, the disorder is the diagnosis.",
        recommendation: "Disorder-specific treatment: the adolescent depressive reaction (with the suicidal feelings taken seriously — more likely acted on) treated as the depression it is; anxiety and PTSD in their own tiers; the ~2-month bereavement window respected in the diagnosing; the adversity named in the formulation so the family hears 'he lost his father and became depressed', not a label that hides the loss.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Diagnosing the adversity — handing the family a disorder label for a risk context",
      why: "None of the three adversities is a disorder, and most children in all three do not develop one; the label pathologises the ordinary and misses the actual mechanism (communication, parenting, preparation) that treatment works on.",
      correction: "Formulate the adversity, diagnose only what crosses a threshold — and document the protective factors (a well parent, high IQ, social support, communication, preparation) with the same seriousness as the risks.",
    },
    {
      mistake: "Taking the parent's report as the child's symptoms",
      why: "Parents under-report child symptoms relative to children's own reports — and the closed-communication household (the very mechanism you are treating) is the one most likely to say 'he is fine'.",
      correction: "Interview children individually — the assessment move this whole literature rests on; the child who tells the examiner his father is 'abroad' is telling you the household's silence in his own words.",
    },
    {
      mistake: "Running bereavement counselling before trauma treatment in a witnessed death",
      why: "The mourning machinery is blocked: the terrifying image cannot be summoned, so it cannot be worked with — more counselling on the grief only confirms to the family that nothing works.",
      correction: "Treat PTSD first — trauma-focused, gradual imaginal exposure — and introduce grief work once the intrusive images have lost their charge; the sequence, not the dose, is the treatment.",
    },
    {
      mistake: "Deciding not to tell the children about a parent's illness 'to protect them'",
      why: "The parental-cancer finding runs the other way: informed children are less anxious than uninformed ones — imagination is worse than information, and the whispered half-truth is the harmful version.",
      correction: "Permission-giving for honest, age-appropriate disclosure; assist the parents with the words and the timing; the Indian stigma layer (HIV, TB) makes the permission-giving the clinician's active task, not a suggestion.",
    },
    {
      mistake: "Assessing a placed child without the six dimensions",
      why: "Without the framework the risk sits nowhere: the restlessness reads as ADHD, the fantasising as lying, the identity unease as 'typical teenager' — and the placement's real cargo (prior maltreatment, attachment history, cultural match) never enters the formulation.",
      correction: "The six-dimension skeleton at every contact: age at placement, prior disturbance, attachments made and lost, placement history, adoption type, cultural match — with the middle-years peak around age 11 anticipated, not pathologised.",
    },
    {
      mistake: "Treating the child and ignoring the surviving parent (or the parenting interface)",
      why: "The bereaved child's outcome rides on the surviving parent's functioning; the child of the ill parent rides on the interaction the illness produces — treating the child alone leaves the mechanism untouched.",
      correction: "The parent package: practical help (child care, financial advice, school fee waivers, pensions), grief support, teacher sensitisation — and in parental illness, treat the parent's disorder and the family's way of talking about it as one job.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The six dimensions of family placement — age at placement, prior disturbance, attachments, placement history, type of adoption, cultural match — and the risk gradient beyond 6 months at placement.",
        "The four mechanisms of parental-illness transmission with an example each — impaired parenting, family discord, direct symptom involvement, bidirectional child-to-parent effects.",
        "Why children under 7 cannot mourn 'properly' and what helps them — irreversibility and universality maturing by about 7; simple biological explanations, repeated honestly.",
        "The traumatic-bereavement sequencing rule — why the PTSD is treated before the mourning.",
        "Brodzinsky's contrast — overt loss in later-placed children, covert emergent loss in infant-placed children.",
      ],
      practical: [
        "Demonstrate the individual child interview in a bereavement case — the parent seen first, the child seen alone, the under-reporting gap named in the presentation.",
        "Counsel a parent with cancer on telling the children — the informed-children-are-less-anxious finding delivered as permission-giving.",
        "Assemble the memory-box, letter and ritual package for a school-age bereaved child — and explain where it sits in the evidence.",
      ],
      longAnswer: [
        "A 7-year-old loses a parent in a road accident: discuss the developmental understanding of death, the assessment (including the individual interview) and the management of childhood bereavement.",
        "Children of parents with mental illness: the mechanisms of risk transmission, the disorder-specific findings, and the principles of clinical management.",
        "Adoption and fostering in child psychiatry: the dimensions of placement assessment, outcome evidence and the management of placement difficulties.",
      ],
    },
    neetPg: {
      highYield: [
        "THE REFERRAL FIGURE: 1 in 5 parentally bereaved children needs specialist referral (Dowdney) — with most bereaved children NOT developing disorder.",
        "THE TRANSMISSION: four mechanisms — impaired parenting, family/environmental discord, direct symptom involvement, bidirectional child-to-parent effects (infant irritability and poor motor control at 10 days predicting later maternal depression).",
        "THE NUMBERS TO QUOTE: three-fold offspring major depression with parental depression; ~13% postnatal depression; FAS in 5.9% of alcoholic women's births; 1.5–4% of children parentally bereaved in industrialised countries, up to 21% in some developing countries with HIV behind up to three-quarters.",
        "THE PLACEMENT ARITHMETIC: ~5% infant-adoption breakdown before 18; ~80% broad satisfaction; the later-placement finding (19% left, only just over half of continuing placements happy at 8 years); the Swedish inter-country cohort's elevated psychiatric problems, substance misuse and suicide.",
        "THE DEVELOPMENTAL THRESHOLD: full concept of death (irreversibility, universality) by about 7 — under-7s cannot distinguish temporary from permanent loss; 4-year-olds can understand with help.",
        "THE SEQUENCING RULE: traumatic bereavement — treat PTSD first; bereavement counselling before trauma treatment does not work.",
        "THE TRIAL: brief family intervention at ~2 months after parental death reduces child morbidity at 1 year (differences no longer significant at 2 years) — Schut & Stroebe: children a special case benefiting from primary (universal) intervention, unlike adults where complicated grief is targeted.",
        "THE CANCER FINDING: children's anxiety tracks whether they are informed and the quality of communication — informed children less anxious than uninformed ones.",
        "THE CLASSIFICATION: DSM bereavement V62.82 vs major depression 296.2 with the ~2-month window; ICD-10 adjustment disorder F43.2 and Z63.4 (the 6-month context).",
        "THE INDIAN CORNER: kinship care as the default placement; CARA as the formal route; the 13-day rites and yearly shraddha as protective communal mourning; disclosure barriers in stigmatised parental illness (HIV, TB).",
      ],
      pyqConcepts: [
        "The informed-versus-uninformed children comparison — the discussion-question magnet on parental cancer.",
        "The image-blocking mechanism — the concept behind every 'why did grief counselling fail after the witnessed death' vignette.",
        "The 2-month intervention trial and the children-versus-adults targeting contrast — the preventive-psychiatry discussion favourite.",
        "The adoptee outcome comparison set (against adverse environments: better; against matched birth-parent homes: slightly elevated risk peaking around age 11).",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 12-year-old, eight months after his father's road-accident death (not witnessed), presents with school refusal and headaches; the widowed mother has removed all mention of the father from the house 'so no one becomes sad', and the boy keeps the father's mobile phone hidden in his school bag and tells classmates his father is 'abroad'. The mother reports he is coping; seen alone, he does not know how his father died, whether he suffered, or what happens now. The reasoning: parents under-report — the individual interview is the assessment; the 'abroad' story is unprocessed reality, not lying; the closed communication is the treatable mechanism; the formulation is inhibited mourning, not yet a disorder, inside the 1-in-5 referral band. The plan: the brief family intervention, the joint session, the biological explanation, the questions answered, the teacher informed, the memory box, the letter, the lamp on the monthly death-day, follow-up at 3 and 6 months.",
        "A 9-year-old who watched her mother die in a kitchen fire has nightmares, refuses the kitchen, startles at smoke, and cannot see her mother's face — the fire arrives instead; she deteriorated after the final religious rites the extended family pressed for, and bereavement counselling has failed. The reasoning: the image-blocking mechanism — the mourning machinery blocked by the terrifying image; the ritual deterioration was trauma landing on untreatment, not ritual failure. The plan: trauma-focused CBT first (gradual imaginal exposure), grief work once the intrusive images have lost their charge, the family counselled on the sequence — and the recognition that the sequence, not the dose, was what the failed counselling got wrong.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Children under 7 lack full understanding of death's irreversibility and universality.",
        "1 in 5 parentally bereaved children needs specialist referral.",
        "Traumatic bereavement: treat PTSD first, mourning after.",
        "Informed children of parents with cancer are less anxious than uninformed children.",
        "The four mechanisms: impaired parenting, family discord, direct symptom involvement, bidirectional child effects.",
        "Parental depression triples offspring major depression risk.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The individual child interview is the discipline the whole bereavement literature rests on — parents under-report, and the closed-communication household is precisely the one that says 'he is fine'; see the child alone or the assessment did not happen.",
        "The surviving parent is the treatment's load-bearing wall: practical help (child care, financial advice, pensions, fee waivers) is clinical work with an evidence base, not social-work handoff — the child's outcome rides on the parent's functioning.",
        "Kinship care needs the same six-dimension screen as CARA placement — favouritism, exploitation, school continuity and pre-loss adversity asked as a conversation, not assumed away because the carers are relatives.",
        "The ritual calendar is the therapy's ally in ordinary deaths (the 13-day rites, the yearly shraddha — communal mourning the Western literature envies) and needs sequencing respect in traumatic ones — the deterioration after the rites is the mechanism speaking.",
        "Anticipate the age-11 peak when counselling adoptive families: the middle-years wobble explained as a passing, comprehensible phase converts a crisis into a consultation.",
        "The resilience audit is the advanced move: documenting the well parent, the supports, the communication and the preparation is what keeps the adversity from being read as destiny.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The talkative boy with the silent house",
      presentation: "Eight months after his father's road-accident death, a 12-year-old tells classmates his father is 'abroad' — and keeps the man's mobile phone hidden in his school bag.",
      initialPresentation: "A 12-year-old boy was referred through the school counselling channel for school refusal and recurring headaches, eight months after his father died in a road accident he did not witness. The household was silent by design: his widowed mother, sad and exhausted across two jobs, had kept every mention of the father out of the house 'so no one becomes sad'; his class had been told nothing, and his sleep was poor.",
      history: "Father's death eight months prior, sudden, unwitnessed by the boy; no previous psychiatric contact; no trauma exposure; the mother's report described a coping child — the under-reporting pattern; the hidden phone and the 'abroad' story surfaced only when he was interviewed alone, with his questions intact: how did his father die, did he suffer, what happens now.",
      examination: "Individually interviewed and at ease, he spoke openly of the father and of not knowing the facts of the death; no threshold disorder — no depressive syndrome, no PTSD; headaches time-locked to school mornings; a bereaved child inside a communication-closed home, not yet a disorder, squarely in the one-in-five referral band.",
      diagnosis: "Inhibited mourning within a communication-closed household — the treatable mechanism identified, the disorder thresholds not crossed.",
      management: "The brief family intervention: a session with mother and son together; permission to open the father's box of belongings; the straight biological explanation of death; his questions answered; the teacher informed (the class told nothing until then); the child techniques — the memory box, a letter to the father, and lighting a lamp on the monthly death-day per family custom; follow-up at 3 and 6 months.",
      outcome: "The follow-up trajectory the intervention targets: the 'abroad' story dissolving as the biological truth and the answers landed — the fantasy receding as understanding and mourning proceed, the note's own mechanism — with the school return negotiated alongside the informed teacher and the ritual calendar enlisted as the therapy's ally rather than its rival.",
      teachingPoints: [
        "Parents under-report — interview the child: the individual interview is the assessment this case turns on.",
        "The closed-communication pattern is the treatable mechanism — the session that opens the household is the treatment.",
        "The 'abroad' fantasies signal unprocessed reality, not lying — answered with simple biological truth, they dissolve.",
        "The ritual calendar became the therapy's ally — the monthly lamp doing what the memory box and the letter do.",
        "Squares in the 1-in-5 band without crossing a threshold — the brief family intervention is exactly for this picture.",
      ],
    },
    {
      title: "The girl who watched",
      presentation: "A 9-year-old who watched her mother die in a kitchen fire can no longer see her mother's face — the fire arrives instead.",
      initialPresentation: "Three months after witnessing her mother's death in a kitchen fire, a 9-year-old girl presented with nightmares, complete refusal of the kitchen, and an exaggerated startle to cooking smoke. The extended family had pressed for the final religious rites to 'complete' the mourning — and she had deteriorated after attending them. Bereavement counselling had already failed.",
      history: "Mother's death witnessed three months prior — the kitchen fire seen from close range; no prior psychiatric history; the family's account of the rites and the deterioration after them; no separate interview obstacles — the child's own report given plainly.",
      examination: "Intrusive imagery, avoidance of the kitchen and its reminders, exaggerated startle to smoke — and the mechanism's signature: attempting to summon her mother's face, she saw the fire instead; grief present but blocked; the deterioration after ritual participation read correctly as trauma meeting unprocessed imagery, not ritual failure.",
      diagnosis: "Traumatic bereavement with PTSD — the mourning machinery blocked by the terrifying witnessed image.",
      management: "Trauma-focused CBT for the PTSD first, with gradual imaginal exposure to the memory; grief work introduced once the intrusive images had lost their charge; the family counselled that this sequence — neither ritual forcing nor ritual avoidance — is the evidence-based path; the rites kept for the remembrance calendar rather than the acute phase.",
      outcome: "The sequence the formulation predicted: the imaginal exposure draining the image's charge, the face becoming summonable again, and the mourning work begun on an unblocked machinery — with the family holding the sequencing explanation that made the earlier failure comprehensible rather than mysterious.",
      teachingPoints: [
        "The image-blocking mechanism in clinical form: the face cannot be summoned because the fire arrives instead.",
        "Treat trauma before mourning — the sequencing rule, and the reason the bereavement counselling failed.",
        "Family rites are protective in ordinary deaths but cannot substitute for trauma treatment in witnessed deaths.",
        "The deterioration after the rites was the mechanism speaking — not evidence against ritual, and not ritual failure.",
      ],
    },
  ],
  clinicalPearls: [
    "Three adversities, none a disorder, all risk multipliers — and resilience the modal outcome in every one of them; the assessment that documents protective factors is the one that gets the plan right.",
    "The six dimensions of placement — age, prior disturbance, attachments, placement history, adoption type, cultural match — with age beyond 6 months as the gradient: the framework that tells you where the risk sits.",
    "About 5% of infant-placed adoptees leave before 18 (adoption breakdown) while roughly 80% of adopters and adoptees are broadly satisfied — adoptees outperform the environments they left, with a slightly elevated risk against matched birth-parent homes peaking around age 11.",
    "The Swedish inter-country cohort caveat: ~6,000 adults, more similarities than differences — but elevated psychiatric problems, substance misuse and suicide.",
    "Four mechanisms carry parental illness to the child: impaired parenting, family discord, direct symptom involvement and the bidirectional arrow — infant irritability and poor motor control at 10 days predicting later maternal depression.",
    "Parental depression roughly triples offspring major depression (three-fold), with anxiety, substance and social impairment riding along; ~13% of women have postnatal depression; FAS marks 5.9% of alcoholic women's births.",
    "The parental-cancer finding carries the whole communication story in one line: informed children are less anxious than uninformed ones — imagination is worse than information.",
    "The full concept of death matures by about 7 — under 7, the child cannot distinguish temporary from permanent loss; 4-year-olds can understand much with help.",
    "1 in 5 parentally bereaved children needs specialist referral; parents under-report child symptoms — interview children individually.",
    "The witnessed image blocks the mourning machinery — treat PTSD first; bereavement counselling before trauma treatment does not work.",
    "The brief family intervention around 2 months after parental death reduces child morbidity at 1 year — and children are the special case: primary intervention open to all, unlike adults where complicated grief is targeted (Schut & Stroebe).",
    "Kinship care is the Indian placement system — often excellent, always unassessed; the six dimensions travel to the joint family as a conversation.",
    "The Indian ritual calendar — viewing, cremation, the 13-day rites, the yearly shraddha — is the communal mourning the Western literature finds protective; the clinical additions are the individual child interview, the memory work and the traumatic-death exception.",
  ],
  highYieldSummary: [
    "Definition: three adversity contexts that are not disorders but shape everything — children placed in new families (adoption, fostering, kinship care), children living with parental illness (depression, schizophrenia, eating disorders, substance misuse, anxiety, cancer, HIV), and parentally bereaved children — each a risk multiplier with resilience the modal outcome and communication, parenting and preparation as the working levers.",
    "Epidemiology: placement 'success' from below 50% to 95% by measure — ~5% infant-adoption breakdown, ~80% satisfaction, the Swedish inter-country cohort (~6,000; elevated psychiatric problems, substance misuse, suicide) and the English over-5 placements (19% left at 8 years, only just over half of the rest happy); ~13% postnatal depression; up to 40% of some sub-Saharan antenatal attenders HIV-positive; 1.5–4% of children parentally bereaved in industrialised countries, up to 21% in some developing countries with HIV behind up to three-quarters of deaths; 1 in 5 bereaved children needing specialist referral.",
    "Mechanism: the placement architecture (six dimensions, the 6-month gradient, Brodzinsky's overt-versus-covert loss, the age-11 maladjustment peak declining into later adolescence, the lifelong identity theme); the four-mechanism transmission (impaired parenting, family discord — possibly more proximal than the illness, direct symptom involvement, bidirectional child-to-parent effects with the 10-day infant predictors); the communication story (informed children less anxious — communication is the mechanism of protection); the mourning machinery (the summoned image, and its blockage by witnessed terror).",
    "Clinical pictures: the placed child by stage (quick settling for infant placements with good prior care; the middle-years restlessness, fantasising, peer-teacher difficulty and low self-esteem peaking around 11; the later-placed child's travelling history; the adult adoptee's advantage-with-a-caveat); the child of the ill parent by disorder (three-fold depression; schizophrenia's attentional and social markers tracing to family disruption more than 'schizophrenogenic' communication; eating disorders' mealtime conflict with infant weight inverse to conflict; substance misuse's FAS 5.9% and attention/impulsivity as the most consistent finding; anxiety's two-fold specificity with behavioural inhibition and increased startle; cancer's adolescent disturbance and coping-style split; HIV's maternal-depression mechanism); the bereaved child by developmental stage (somatic under-7s; the comprehending schoolchild — viewing the body where normative and not mutilated, funerals clinically helpful; the adolescent guilt-and-anger load with suicidal feelings more likely acted on; learning disability as higher risk; friend-suicide bereavement with depression elevated but attempted suicide not).",
    "Diagnosis: three frameworks, one discipline — the six dimensions for placed children; the four-mechanism family map (never diagnosing the child without it) for parental illness; the individual child interview for bereavement (parents under-report); the resilience audit in all three; DSM's ~2-month window before major depression in bereavement (V62.82 vs 296.2) and ICD-10's F43.2/Z63.4 framing; the threshold disorders treated as themselves.",
    "Management: placement — preparation and matching (the 'keep them out of care at all costs' attitude produces breakdowns), facilitated contact, multi-agency support, treatment foster care with multisystemic programmes for the troubled; parental illness — treat the disorder AND the interface (the cancer disclosure assistance, the HIV maternal-depression treatment, the anxiety over-protection work); bereavement — the brief family intervention at ~2 months (reduced morbidity at 1 year; universal offer per Schut & Stroebe), the surviving-parent practical package, the four therapeutic elements (communication about the dead parent, reminiscing, expression of feelings, making sense), the child techniques (memory boxes, letters, rituals, art and storytelling, opening-up games), follow-up because problems emerge late — and the absolute sequencing rule for traumatic deaths: treat PTSD first.",
    "The Indian tier: kinship care as the default placement system (screened with the same six dimensions — favouritism, exploitation, school continuity); CARA as the formal route; the stigma layer suppressing protective disclosure in HIV and TB; the ritual calendar (viewing, cremation, the 13-day rites, the yearly shraddha) as protective communal mourning with the traumatic-death sequencing exception; the surviving-parent package deliverable at district level (MGNREGA/survivor pensions, fee waivers, one clinic visit at ~2 months, teacher sensitisation, Tele-MANAS as the follow-up channel); the scarce commodity trained counselling capacity (approx 2026) — hence the volunteer-deliverable design of the child grief techniques.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "cac-quiz-1",
      question: "The framework that structures risk assessment for any adopted, fostered or kinship-placed child organises:",
      options: ["Six dimensions of family placement", "Four mechanisms of transmission", "Five channels of damage", "Three developmental stages of grief"],
      correctIndex: 0,
      explanation: "Age at placement, prior disturbance, attachments, placement history, type of adoption, cultural match — the ready-made long-answer skeleton, with age beyond 6 months at placement as the gradient.",
      afterSectionId: "diagnosis",
    },
    {
      id: "cac-quiz-2",
      question: "Which of the following is one of the four mechanisms by which parental illness transmits risk to children?",
      options: ["The child's school board", "The season of the child's birth", "Parental illness interfering with parenting and parent-child interaction", "The child's blood group only"],
      correctIndex: 2,
      explanation: "With family discord, direct symptom involvement (the child inside a delusion or obsession) and bidirectional child-to-parent effects — the complete four-mechanism viva answer.",
      afterSectionId: "mechanism",
    },
    {
      id: "cac-quiz-3",
      question: "In parental cancer, the variable most clearly linked to children's anxiety levels is:",
      options: ["The cancer's histological type", "Whether children are informed about the illness and the quality of communication", "The hospital's reputation", "The child's birth order"],
      correctIndex: 1,
      explanation: "Informed children show lower anxiety than uninformed children — communication is the protective mechanism, not a procedural kindness.",
      afterSectionId: "symptoms",
    },
    {
      id: "cac-quiz-4",
      question: "A 6-year-old whose mother died suddenly keeps asking when she is coming back. The developmental explanation:",
      options: ["Psychotic denial requiring antipsychotics", "Manipulative attention-seeking", "Incomplete concept of death — full understanding of irreversibility and universality ordinarily develops by about 7 years", "Early bipolar disorder"],
      correctIndex: 2,
      explanation: "Simple biological explanations and repeated honest answers — the comprehension matures with mourning, not in spite of it.",
      afterSectionId: "symptoms",
    },
    {
      id: "cac-quiz-5",
      question: "A child witnessed her father's violent death; six months later she has intrusive images, avoids all reminders, and bereavement counselling has failed. The next step:",
      options: ["More intensive bereavement counselling", "Immediate ritual completion only", "Reassurance and no treatment", "Trauma-focused treatment of PTSD first — mourning proceeds once the traumatic imagery is processed"],
      correctIndex: 3,
      explanation: "The image-blocking mechanism: the terrifying witnessed image blocks the recall mourning needs — treat the trauma first, the grief after.",
      afterSectionId: "management",
    },
    {
      id: "cac-quiz-6",
      question: "The controlled study of a brief family intervention 2 months after parental death found:",
      options: ["No effects at any time point", "Reduced children's morbidity at 1 year, with differences no longer significant at 2 years", "Worsened outcomes", "Effects only in adults"],
      correctIndex: 1,
      explanation: "Symptom relief in the short and medium term justified the intervention — and children are the special case likely to benefit from primary (universal) intervention, unlike adults.",
      afterSectionId: "management",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the six dimensions of family placement and the risk gradient by age at placement.", answer: "THE SIX DIMENSIONS: (1) age at placement, (2) prior disturbance (the maltreatment, neglect and disturbance the child arrives with), (3) attachments made and lost (anxious, ambivalent or avoidant patterns formed to earlier carers, then severed), (4) placement history (duration, moves, disruptions, drift through contested proceedings), (5) type of adoption (infant domestic, later-placed, inter-country, foster-to-adopt, kinship), (6) cultural match (transracial and inter-country placement adding the loss of cultural, ethnic and racial ties). THE GRADIENT: risk rises with age at placement beyond 6 months — English infants with good early care placed quickly settle without obvious stress, Romanian institutionalised infants placed in the early months settle well, and children placed after 6 months show stress reactions to attachment loss and the adverse-reaction effects of prior maltreatment. The clinical use: the six dimensions tell you where the risk sits, what the differential should include (attachment disorders, maltreatment consequences, ADHD, the institutionalisation overlap, PTSD, adolescent identity issues) and what to ask next — the framework travels to the unassessed kinship placement as a conversation.", topic: "Adoption & placement" },
    { question: "What two hurdles does the adopted child carry on the road to maturity, at what age does maladjustment risk peak, and what is Brodzinsky's contrast?", answer: "THE TWO HURDLES: separation-and-loss, and the construction of an adoptive identity — making sense of being raised by one family while another gave you up. THE PEAK: emotional and behavioural maladjustment risk peaks around age 11 and declines into later adolescence — the comprehension window in which the covert loss surfaces. BRODZINSKY'S CONTRAST: in later-placed children the loss is OVERT and sometimes traumatic — the child remembers the birth family and the removal; in infant-placed children it is COVERT and emergent — the loss surfaces as the child becomes able to comprehend it, which is why the middle years wobble arrives on schedule rather than out of nowhere. THE ADULT RESIDUE: even among the broadly satisfied, some carry a continuous or episodic unease around identity and the question of why the birth parents gave them up — and when serious adult problems emerge, adoptive identity often underlies the presenting symptoms. Openness is the modern answer: total-severance closed adoption was a 20th-century experiment (UK secrecy from 1958, Alabama records sealed until 1991), now largely dismantled by access-to-information legislation and open contact.", topic: "Adoption & placement" },
    { question: "Give the four mechanisms by which parental illness transmits risk to children, with one example each.", answer: "MECHANISM 1 — IMPAIRED PARENTING: the illness degrades the interaction itself; the depressed mother is less vocal, positive and spontaneous, more negative, intrusive and less communicative. MECHANISM 2 — FAMILY/ENVIRONMENTAL DISCORD: marital conflict and socio-economic disadvantage clustering around the illness — the discord possibly MORE proximal to the child's outcome than the illness itself. MECHANISM 3 — DIRECT SYMPTOM INVOLVEMENT: the child incorporated into the parent's psychopathology — inside a delusion, or the object of an obsession (the rarer but most dramatic route). MECHANISM 4 — BIDIRECTIONAL CHILD-TO-PARENT EFFECTS: the arrow runs both ways — infant irritability and poor motor control at 10 days predict later maternal depression; the child is a participant, never only a receiver. The clinical translation: the four-mechanism screen IS the family assessment — parenting capacity, discord, symptom involvement, reverse effects — and each mechanism names its own lever (treat the parenting interface, address the discord, protect the child from the symptoms, treat the child's contribution).", topic: "Parental illness" },
    { question: "Which parenting behaviours mark maternal depression, what mediates beyond the mother-child pair, and what is the offspring risk arithmetic?", answer: "THE PARENTING BEHAVIOURS: less vocal, less positive, less spontaneous; more negative and intrusive; less communicative — the withdrawal-unavailability-harshness triad the communication story names. THE MEDIATOR BEYOND THE PAIR: marital discord — a key mediator, possibly more proximal to the child's outcome than the depression itself (plus socio-economic disadvantage clustering). THE ARITHMETIC: parental depression roughly triples offspring major depression (three-fold), with anxiety disorders, substance dependence, and social and physical-health impairment extending into adulthood; either parent carries it — paternal depression now has independent evidence; postnatal depression (~13% of women) adds infant emotional and behavioural risk, possible cognitive effects, and developing-country evidence of infant physical-health risks (poor growth, diarrhoeal illness). The adolescence picture: mood and anxiety disorders arriving on schedule. The treatment logic: treat the parental depression AND the interface — never the child alone.", topic: "Parental illness" },
    { question: "State the parental-cancer finding about informed versus uninformed children, and the coping-style split that rides with it.", answer: "THE FINDING: children's anxiety tracks whether they are told about the illness and how well — INFORMED CHILDREN SHOW LOWER ANXIETY THAN UNINFORMED ONES. The cleanest proof of the communication story: what damages children of ill parents is rarely the diagnosis itself but the interaction it produces (withdrawal, unavailability, harshness, conflict, silence) — and disclosure is the modifiable part of that interaction. Imagination is worse than information: the child left guessing fills the silence with something scarier than the truth. THE COPING SPLIT: adolescent children of cancer patients show elevated emotional disturbance (younger children inconsistently); problem-focused coping is adaptive, while emotion-focused coping — venting, denial, apathy — predicts anxiety and depression. THE CLINICAL TASK: assist parents to recognise and cope with children's distress, communicate about the illness in age-appropriate detail, and support the problem-focused mode — with the Indian stigma layer (HIV, TB) making the permission-giving for honest disclosure the clinician's active task.", topic: "Parental illness" },
    { question: "Why can children under 7 not mourn 'properly', and what helps them?", answer: "BECAUSE THE CONCEPT OF DEATH IS INCOMPLETE: the two load-bearing components — irreversibility (the dead do not come back) and universality (death comes for everyone) — mature fully only by about 7 years; younger children cannot distinguish temporary from permanent loss, which is why the bereaved 6-year-old asks when mother is coming back, and why the 'abroad' and 'on a trip' stories are comprehension under construction, not lies or denial. FOUR-YEAR-OLDS can understand much with help. WHAT HELPS: straight biological explanations of what death means (the heart stops, the body cannot work again), repeated honestly every time the question returns; letting them see mourning adults; expecting the questions to repeat — the comprehension matures WITH mourning, not in spite of it. The pre-pubertal schoolchild can be helped to comprehend death's reality; viewing the body (where culturally normative and the body is not mutilated) may reduce misconceptions; attending the funeral appears — clinically, though not scientifically — to help grieving. Young children's reactions are often somatic: regression in achieved control, anorexia, insomnia.", topic: "Bereavement" },
    { question: "Explain the image-blocking mechanism and the treatment sequence it dictates.", answer: "THE MECHANISM: to mourn, the child must summon the image of the dead person — mourning runs on recall, reminiscing and making sense. When the death was witnessed and horrific, the summoned image IS the terrifying picture (or re-invokes the helplessness and terror of the moment); the child avoids the image, and the grief cannot proceed — the mourning machinery is blocked at its first step. The clinical signature: 'I cannot see her face — I see the fire instead'; nightmares, avoidance of the death's reminders, exaggerated startle; deterioration after well-meant ritual participation (the rites landing on untreated trauma); and bereavement counselling failing because it works on the machinery that is blocked. THE SEQUENCE IT DICTATES: treat PTSD first — trauma-focused CBT with gradual imaginal exposure to the memory — with grief work introduced once the intrusive images have lost their charge; bereavement counselling BEFORE trauma treatment does not work. The Indian application: NCRB-context suicide and accidental deaths arrive with the complicating features (stigma, police procedures, delayed or disfigured bodies, media) — expect the rule to apply especially often, and counsel the family that the sequence, not ritual forcing or avoidance, is the evidence-based path.", topic: "Bereavement" },
    { question: "What did the brief 2-month family intervention show, and why are children a 'special case' in bereavement intervention targeting?", answer: "THE TRIAL: Black & Urbanowicz's controlled study of a brief family intervention delivered around 2 months after parental death — reduced children's morbidity at 1 year, with differences no longer significant at 2 years; the short- and medium-term symptom relief justified the intervention. THE SPECIAL CASE (Schut & Stroebe): in adults, bereavement intervention works best when TARGETED at complicated grief — universal adult screening-and-treating does not pay; in CHILDREN the opposite — primary (universal) intervention, open to all bereaved children and not only complicated cases, is likely to benefit — because the bereaved child's risks are developmental, the morbidity is real, and the delivery (a family session, the four therapeutic elements, practical support to the surviving parent) is cheap and safe. THE PACKAGE: support the widowed parent's grief with practical help (as important as counselling the child); promote family communication about the dead parent, mourning through reminiscing, appropriate expression of feelings, and making sense of the death; child techniques (memory boxes, letters, rituals) deliverable by trained volunteers; follow-up appointments because problems can emerge later; preparation for an expected death lowers later anxiety.", topic: "Bereavement management" },
  ],
  faqs: [
    { question: "We are adopting — what should we worry about?", answer: "The six dimensions tell you: the child's age, what came before, the attachments made and lost, the placement history, the type of adoption and the cultural match. Infant placements carry the lowest risk; older placements bring the child's history with them. Most adopted children do well — better than they would have in the circumstances they came from — with a slightly raised risk of emotional and behavioural difficulties peaking around age 11, and identity questions to accompany them for life. Preparation, honesty and support do the rest." },
    { question: "Should we tell the children about my cancer?", answer: "Yes, in age-appropriate detail: children who are informed and can talk with their parents about the illness are measurably less anxious than children left guessing — imagination is worse than information. The clinical team's job includes helping you find the words and the timing." },
    { question: "He was only four — does he really understand that his grandfather died?", answer: "Not fully: children build the complete concept of death (its irreversibility and universality) only by about 7, though 4-year-olds can understand much with help. Give simple biological explanations, let them see mourning adults, and expect the questions to repeat — each honest answer is another brick in the comprehension." },
    { question: "Should the children attend the funeral?", answer: "Generally yes — clinical experience supports it — and where your culture includes viewing the body and the child wants to, that too, but never with a mutilated body, and always with preparation and an available adult. The rites are the community's grief medicine; children belong inside it, held." },
    { question: "Her friend took her own life — is my daughter at risk of suicide now?", answer: "Adolescents bereaved by a friend's suicide show more depression than peers in controlled studies, but not more attempted suicide. Take the sadness seriously, keep communication open, and watch for the depression that warrants treatment — the risk is treatable mood, not contagion." },
    { question: "Since my husband died, my son says his father is 'on a trip'. Is he lying?", answer: "He is managing an unfinished comprehension. Answer his questions with simple biological truth; the fantasy dissolves as understanding and grief proceed. The 'abroad' story is the mind holding a fact it cannot yet hold — honesty, repeated kindly, is the treatment." },
    { question: "The relatives want the final rites done quickly, but my son is worse since the last one. What do we do?", answer: "If the death was witnessed or violent, the rituals may be landing on untreated trauma — the frightening image is blocking the mourning the rites are meant to complete. The sequence is trauma treatment first, mourning work after; the rites kept for the remembrance calendar once the images have lost their charge. The rites are not the problem — the untreated trauma is." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "DSM-IV/DSM-5 (APA) — the bereavement-versus-major-depression framing (V62.82 vs 296.2, the ~2-month window)" },
      { source: "ICD-10 (WHO) — the adjustment-disorder F43.2 and bereavement Z63.4 (6-month) coding context" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 9.3.5 + 9.3.6 + 9.3.7 — source chapters mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Black D, Urbanowicz MA (1987). Family intervention with bereaved children. JCPP 28, 467–76 — the controlled 2-month brief-intervention trial" },
      { source: "Fisher P, Chamberlain P — the treatment foster care (multisystemic) outcome trials" },
    ],
    reviews: [
      { source: "Brodzinsky D et al. — the psychology of adoption loss (overt vs covert)" },
      { source: "Rutter M et al. — the English and Romanian Adoptees (ERA) cohort; the institutionalisation and resilience literature" },
      { source: "Lindblad F et al. — the Swedish inter-country adoptee cohort (~6,000 adults)" },
      { source: "Rushton A, Dance D — the 133 English children placed over age 5, eight-year outcomes" },
      { source: "Weissman M et al. — the longitudinal offspring-of-depressed-parents studies (the three-fold risk)" },
      { source: "Murray L, Cooper P — postnatal depression and child development, including the developing-country findings" },
      { source: "Dowdney L (2000). Childhood bereavement following parental death. JCPP 41, 819–30 — the 1-in-5 synthesis" },
      { source: "Schut H, Stroebe M — the bereavement-intervention efficacy reviews (children as the special case)" },
      { source: "UNICEF (2006). Africa's orphaned and vulnerable generations — the 21% orphanhood and HIV-share figures" },
    ],
    patientResources: [
      { source: "CARA (Central Adoption Resource Authority) — the regulated Indian adoption route" },
      { source: "Tele-MANAS 14416 (24×7, free) — the distress, follow-up and caregiver channel" },
      { source: "The memory-box, letter and ritual package — the family scripts this course hands to every bereaved household" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "6 min",
      description: "Plain language: what these adversities are and are not, the communication rule, the warning signs, the help that works.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "22 min",
      description: "The six dimensions, the four mechanisms, the under-7 threshold, the sequencing rule, the numbers to quote.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "27 min",
      description: "Full course with the decision path, the Indian layer and both clinical cases.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "30 min",
      description: "Everything — the individual-interview craft, the surviving-parent package, the kinship screen, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The three adversities, the six dimensions, the four mechanisms, the 1-in-5 figure.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the six dimensions, the four mechanisms and the referral figure cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The identity story, the communication story, the mourning machinery.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can explain why the witnessed image blocks mourning and why communication is the mechanism of protection." },
    { number: 3, title: "Clinical Practice", description: "The three assessments, the developmental pictures, the management ladders.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the individual child interview, the six-dimension screen and the brief family intervention." },
    { number: 4, title: "Indian Context", description: "Kinship default, CARA, the ritual calendar, the stigma layer.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can screen a kinship placement and sequence a traumatic bereavement in an Indian household." },
    { number: 5, title: "Exam Revision", description: "Exam lens, the two cases and the high-yield numbers.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the bereavement essay and quote the figures without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold — if not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 9.3.5 + 9.3.6 + 9.3.7 — source chapters mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Brodzinsky D et al. — the psychology of adoption loss: overt versus covert (the later-placed/infant-placed contrast)", sourceType: "primary", year: "1980s–1990s", dateReviewed: "2026-09-29" },
    { id: "S3", source: "Rutter M et al. — the English and Romanian Adoptees (ERA) cohort: institutionalisation effects, infant-placement settling, the resilience line", sourceType: "primary", year: "1990s–2000s", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Lindblad F et al. — the Swedish inter-country adoptee cohort (~6,000 adults: elevated psychiatric problems, substance misuse and suicide)", sourceType: "primary", year: "2000s", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Rushton A, Dance D — the 133 English children placed over age 5, eight-year outcomes (19% left; just over half of continuing placements happy)", sourceType: "primary", year: "2000s", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Fisher P, Chamberlain P — treatment foster care with multisystemic programmes versus service-as-usual (the placed-child management tier)", sourceType: "trial", year: "2000s", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Weissman M et al. (the offspring-of-depressed-parents longitudinal line — the three-fold risk) and Murray L, Cooper P (the postnatal-depression and infant-development cohorts, developing-country findings, the 10-day infant predictors)", sourceType: "primary", year: "1980s–2000s", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Black D, Urbanowicz MA (1987) — family intervention with bereaved children: the controlled 2-month brief-intervention trial (JCPP 28, 467–76)", sourceType: "trial", year: "1987", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Dowdney L (2000) — childhood bereavement following parental death: the 1-in-5 specialist-referral synthesis (JCPP 41, 819–30)", sourceType: "review", year: "2000", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Schut H, Stroebe M — the bereavement-intervention efficacy reviews: children as the special case (primary/universal intervention), adults targeted at complicated grief", sourceType: "review", year: "2000s", dateReviewed: "2026-09-29" },
    { id: "S11", source: "DSM-IV/DSM-5 (APA) and ICD-10 (WHO) — the bereavement classification framing (V62.82 vs 296.2, the ~2-month window; ICD-10 F43.2/Z63.4, 6 months)", sourceType: "classification", year: "1994–2013", dateReviewed: "2026-09-29" },
    { id: "S12", source: "UNICEF (2006) — Africa's orphaned and vulnerable generations: the up-to-21% parental orphanhood figure and HIV's up-to-three-quarters share of such deaths", sourceType: "government", year: "2006", dateReviewed: "2026-09-29" },
    { id: "S13", source: "The Indian tier as cited in the note's Indian-practice section — CARA adoption regulation, Tele-MANAS 14416, the NCRB suicide/accidental-death context, MGNREGA/survivor-pension support routes, cost realities (approx 2026)", sourceType: "indian-guideline", year: "2020s", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "The six dimensions of family placement (age at placement, prior disturbance, attachments, placement history, type of adoption, cultural match) structure the risk assessment for any placed child, with age beyond 6 months at placement as the risk gradient — infant placements with good prior care settling quickly, later placements carrying the child's history with them.", grade: "established", sources: ["S1", "S2", "S3"] },
    { text: "Placement outcomes: 'success' rates ranging below 50% to 95% by measure; ~5% of infant-placed adoptees leaving before 18 (adoption breakdown) with ~80% broad satisfaction; the Swedish inter-country cohort (~6,000 adults) showing more similarities than differences with peers but elevated psychiatric problems, substance misuse and suicide; the English over-5 placements (19% left at 8 years, only just over half of continuing placements happy).", grade: "established", sources: ["S1", "S4", "S5"] },
    { text: "Adopted children outperform the adverse environments they were born into (health, IQ, criminality, symptoms) while carrying a slightly elevated emotional and behavioural risk against matched birth-parent homes, peaking around age 11 and declining into later adolescence, with adoptive identity as the lifelong theme — Brodzinsky's overt (later-placed) versus covert, emergent (infant-placed) loss.", grade: "established", sources: ["S1", "S2", "S3"] },
    { text: "The four mechanisms of parental-illness transmission: impaired parenting (the depressed mother less vocal, positive and spontaneous; more negative, intrusive, less communicative), family/environmental discord (possibly more proximal than the illness itself), direct symptom involvement (the child inside a delusion or obsession), and bidirectional child-to-parent effects (infant irritability and poor motor control at 10 days predicting later maternal depression).", grade: "established", sources: ["S1", "S7"] },
    { text: "Parental depression roughly triples offspring major depression (three-fold) with anxiety, substance dependence and social/physical-health impairment into adulthood (paternal depression with independent evidence); ~13% postnatal depression with infant emotional/behavioural risk and developing-country physical-health risks; disorder-specific findings across schizophrenia, eating disorders (infant weight inversely related to mealtime conflict; failure to thrive), substance misuse (FAS 5.9% of alcoholic women's births; attention/impulsivity the most consistent finding), anxiety (two-fold specificity, behavioural inhibition, increased startle), cancer and HIV (maternal depression the plausible mechanism).", grade: "established", sources: ["S1", "S7"] },
    { text: "The parental-cancer finding: children's anxiety tracks whether they are informed and how well — informed children show lower anxiety than uninformed children; communication is the mechanism of protection. Adolescent children show elevated emotional disturbance with problem-focused coping adaptive and emotion-focused coping (venting, denial, apathy) predictive of anxiety and depression.", grade: "established", sources: ["S1"] },
    { text: "Bereavement epidemiology: 1.5–4% of children lose a parent in childhood in industrialised countries, up to 21% in some developing countries, with HIV responsible for up to three-quarters of such deaths; 1 in 5 parentally bereaved children needs specialist referral while most bereaved children do not develop disorder.", grade: "established", sources: ["S9", "S12"] },
    { text: "The developmental logic of childhood grief: the full concept of death (irreversibility, universality) matures by about 7 (4-year-olds understanding much with help); young children react somatically and cannot distinguish temporary from permanent loss; viewing the body (culturally normative, not mutilated) may reduce misconceptions; funeral attendance clinically helpful; adolescent guilt with suicidal feelings more likely acted on inside a depressive reaction; learning disability raising risk.", grade: "established", sources: ["S1"] },
    { text: "Parents under-report child symptoms relative to children's own reports — children must be interviewed individually; the DSM ~2-month window before major depression is diagnosed in bereavement (V62.82 vs 296.2) and ICD-10's adjustment-disorder/bereavement-Z coding (F43.2, Z63.4) frame the thresholds.", grade: "established", sources: ["S1", "S9", "S11"] },
    { text: "Traumatic bereavement and the image-blocking mechanism: the witnessed terrifying image blocks the recall mourning needs — hence treat PTSD first, with bereavement counselling before trauma treatment documented not to work; suicide/homicide deaths adding traumatic content, media interest, disfigured or delayed bodies and broken support systems; the sequence (trauma-focused treatment then grief work) is the explicit rule.", grade: "established", sources: ["S1"] },
    { text: "The brief preventive family intervention around 2 months after parental death reduces children's morbidity at 1 year (differences no longer significant at 2 years; short- and medium-term relief justifying it) — with Schut & Stroebe's conclusion that children are a special case likely to benefit from primary (universal) intervention, unlike adults where targeting complicated grief works better; the four therapeutic elements (communication about the dead parent, reminiscing, expression of feeling, making sense) and the child techniques (memory boxes, letters, rituals) deliverable by trained volunteers.", grade: "established", sources: ["S8", "S10"] },
    { text: "The placement-management tier: preparation and matching (the 'keep them out of care at all costs' attitude producing ill-planned breakdowns), facilitated contact, multi-agency support, time-limited placements with the same carers where possible, treatment foster care with multisystemic programmes outperforming service-as-usual, and 'overstaying' reframed as success where the family becomes a secure base.", grade: "supported", sources: ["S1", "S6"] },
    { text: "The Indian tier: kinship care as the default placement system (unassessed — screened for pre-loss adversity, caregiving quality, favouritism and exploitation, school continuity), CARA as the regulated formal route, the ritual calendar (viewing, cremation, the 13-day rites, the yearly shraddha) supplying the protective communal mourning, stigma (HIV, TB) suppressing the disclosure shown protective, the NCRB-context deaths expecting the PTSD-first rule, and the surviving-parent package (MGNREGA/survivor pensions, fee waivers, one ~2-month visit, teacher sensitisation, Tele-MANAS) deliverable at district level with trained-counselling capacity the scarce commodity (approx 2026).", grade: "supported", sources: ["S1", "S13"] },
  ],
};
