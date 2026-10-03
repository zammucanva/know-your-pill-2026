import type { PsychiatryCourse } from "./types";

/**
 * PSYCHIATRIC DISORDER & OFFENDING — canonical Psychiatry course
 * (migration batch 11, Group O — forensic psychiatry).
 *
 * KYP-written learning content built ON the canonical note
 * (download/kyp-notes/psychiatry-offending.md — untouched foundation),
 * re-researched against the lineages the note cites (Farrington's
 * Cambridge cohort, McCord's Cambridge–Somerville, Nottingham,
 * Newcastle, Dunedin, Pittsburgh, Indianapolis, Rochester, Swanson's
 * ECA and 1,410-patient analyses, Caspi's MAOA×maltreatment work,
 * Gossop's NTORS follow-up, Shaw's Confidential Inquiry) with
 * per-claim provenance.
 *
 * Drug routes: none linked — this note assigns none of the twelve KYP
 * antidepressant lessons a clinical role in offending. The real tiers
 * (antipsychotics for the psychosis whose TCO symptoms antecede violence;
 * buprenorphine/methadone maintenance behind the NTORS offence
 * reductions) live in their own courses, recorded in contentGaps,
 * never invented here.
 */
export const psychiatryOffendingCourse: PsychiatryCourse = {
  /* ---- Identity ---- */
  slug: "psychiatry-offending",
  title: "Psychiatric Disorder & Offending",
  shortName: "Offending",
  kind: "concept",
  category: "Forensic Psychiatry",
  groupLetter: "O",
  groupName: "Forensic psychiatry",
  learningPath: ["Psychiatry", "Forensic Psychiatry", "Psychiatric Disorder & Offending"],

  status: "PUBLISHED",
  lastReviewed: "2026-09-29",

  estimatedReadTime: "36 min",
  yieldRating: "high",
  primaryAudience: "medical",

  tagline:
    "Why the link between mental disorder and offending needs a formulation, not a checklist",

  summary:
    "This course covers the longitudinal evidence linking child-rearing disadvantage, mental disorder and substance misuse with offending. The clinical task is a formulation of perpetrator, victim and context rather than a checklist.",

  /* ---- Lesson 1: Foundations ---- */
  learningObjectives: [
    "Recite the child-rearing predictors with their study numbers: supervision (the strongest and most replicable predictor, Cambridge–Somerville to age 45), discipline (Nottingham 40% vs 14%), and the warmth buffer (51/21/23).",
    "Explain the broken-home literature's conclusion: conflict, not structure; the affectionate mother and the post-disruption trajectory, and the three theory classes (life-course, trauma, selection).",
    "Describe the criminal-parents and large-family findings with their mediating mechanisms: supervision not teaching; attention dilution, overcrowding and delinquent-sibling exposure.",
    "Summarise the neuropsychological and genetic findings at honest effect size: frontal findings in impulsive not predatory aggression, EEG frontal slowing, serotonin-impulsivity, MAOA×maltreatment, and the twin-study developmental shift.",
    "State schizophrenia's violence association (2–4× (men) / 6–8× (women) after adjustment, ~5% population-attributable, homicide 5–15%, first-episode one-third) with the TCO construct and the comorbidity multipliers (3–16× / 4–18×).",
    "Quote the substance-offending numbers: alcohol in at least half of assaults; the ECA ladder (2/7/20/22); NTORS 10% committing 76% of acquisitive crimes; crime preceding drug use (14.5 vs 16.2/19.9 years).",
    "Run the five-step assessment of the substance-using offender, apply the perpetrator-victim-context triad, and deliver the formulation the checklist substitute would render 'at best lazy and at worst negligent'.",
  ],
  quickFacts: [
    { label: "The headline predictor", value: "Poor parental supervision", detail: "The strongest and most replicable child-rearing predictor of later offending. Cambridge–Somerville following the prediction to age 45; the finding that generalises to Indian working-parent, migrant-labour and street-children realities" },
    { label: "The warmth buffer", value: "51% vs 21%", detail: "Conviction for the sons of cold punitive mothers against warm punitive (warm non-punitive 23%): warmth protects even within physical punishment; discipline reframed as a two-variable system" },
    { label: "The broken-home verdict", value: "Conflict, not structure", detail: "McCord's quartet: broken-without-affectionate-mother 62%, united-with-conflict 52%, united-no-conflict 26%, broken-with-affectionate-mother 22%; a loving mother neutralises much of the break" },
    { label: "The concentration", value: "6% of families → half of convictions", detail: "The Cambridge finding; 63% of boys with a convicted parent convicted by 40; the mediating chain supervision, not teaching (89% of convicted men at 32 opposed their children offending)" },
    { label: "The schizophrenia excess", value: "2–4× (men), 6–8× (women)", detail: "After controlling socio-economic status, marital status and substance abuse, with ~5% of violent crime attributable to severe mental illness, homicide schizophrenia rates of 5–15%, and family members more often victims than strangers" },
    { label: "The symptom-level predictor", value: "TCO", detail: "Threat-control-override: persecutory delusions, passivity phenomena, thought insertion; perceived threat plus perceived loss of self-control; antecedes community violence even after controlling for psychopathy and substance abuse" },
    { label: "The multiplier", value: "Alcohol in half of assaults", detail: "A key factor in at least half of interpersonal assaults (British Crime Surveys); the ECA ladder's staircase of one-year violence: no disorder 2%, major mental illness 7%, substance misuse 20%, comorbid 22%" },
    { label: "The treatability", value: "NTORS: 10% → 76%", detail: "10% of treatment clients committing 76% of pre-treatment acquisitive crimes, and convictions for acquisitive, drug-selling and violent crimes reduced at 5 years: the nihilism the data refutes" },
  ],
  knowledgeGraph: [
    { label: "Schizophrenia", type: "condition", href: "/psychiatry/schizophrenia/", note: "The disorder behind the modest excess: 2–4× (men) / 6–8× (women) after adjustment; the TCO symptoms and comorbid multipliers riding its positive symptoms" },
    { label: "Homicide, Mass Murder & Infanticide", type: "condition", href: "/psychiatry/homicide-infanticide/", note: "The rarest outcome of the same architecture: the schizophrenia rates of 5–15% and the family-victim pattern" },
    { label: "Juvenile Offending", type: "condition", href: "/psychiatry/juvenile-offending/", note: "The same predictors at the younger edge: supervision, warmth, conflict, family size; the onset sequence beginning" },
    { label: "Mental Health Law", type: "condition", href: "/psychiatry/mental-health-law/", note: "Where the formulation goes to court: specific vs basic intent, diminished responsibility, the court report's three tasks" },
    { label: "Alcohol Use Disorders", type: "condition", href: "/psychiatry/alcohol-use-disorders/", note: "The multiplier's home course: half of interpersonal assaults; the relapse-prevention tier that reduces offending" },
    { label: "Opioid Use Disorders", type: "condition", href: "/psychiatry/opioid-use-disorders/", note: "The treatability engine: buprenorphine/methadone maintenance behind the NTORS conviction reductions" },
    { label: "Cannabis & Mental Health", type: "condition", href: "/psychiatry/cannabis-mental-health/", note: "Case 1's comorbidity: the joint smoked 'for the voices'; the dual-diagnosis work that treats both channels" },
    { label: "Prefrontal cortex", type: "brain-region", href: "#brain", note: "The executive brake: impulsive/affective aggression's address; predatory killers' blood flow resembling controls" },
    { label: "Amygdala", type: "brain-region", href: "#brain", note: "The threat reader: the MAOA×maltreatment interaction and the orbitofrontal-amygdala connectivity of the schizophrenia-violence findings" },
    { label: "Serotonin", type: "neurotransmitter", href: "/psychiatry/neurotransmitters/", note: "Impulsivity rather than violence per se: the honest narrow reading of the most over-read finding in the field" },
  ],

  /* ---- Lesson 2: Mechanism & Neuroscience ---- */
  mechanism: {
    summary:
      "Offending emerges from the interaction of social deprivation, parenting, intelligence, peers, genetics, substance misuse, victimisation, personality and mental disorder: no single strand pulls alone. The longitudinal science (Farrington's synthesis) supplies the psychosocial architecture: poor supervision the strongest and most replicable predictor; harsh, erratic and cold discipline adding risk that warmth buffers (51% vs 21%); family conflict rather than family breakage carrying the broken-home association (McCord's 62/52/26/22); criminal parents concentrating convictions through supervision, not instruction; large families diluting attention and exposing boys to delinquent siblings; and the socio-economic gradient read through the 17–18 affluence paradox. Onto this ordinary architecture the disorder layer adds its modest excesses: schizophrenia's 2–4× (men) / 6–8× (women) after adjustment; driven partly by a premorbid conduct-disorder pathway (20–40% of violent schizophrenia cases) and marked at symptom level by threat-control-override; and the substance-misuse multiplier that dominates every table it enters (alcohol in half of assaults; the ECA 2/7/20/22 staircase). The neurobiology beneath is real but modest and never deterministic: prefrontal structural and functional reductions marking impulsive/affective rather than predatory aggression; reduced serotonin function relating to impulsivity rather than violence per se; the MAOA×maltreatment gene-environment interaction, statistically detectable and individually non-predictive. The integrating clinical figure: every violent act is a perpetrator-victim-context triad, and the assessment's task is a formulation, never a checklist.",
    steps: [
      "Most offending grows from ordinary disadvantage: supervision, discipline, conflict, poverty and peers. Farrington's longitudinal architecture, with poor parental supervision the strongest and most replicable predictor (Cambridge–Somerville to age 45).",
      "The warmth buffer inside discipline: 51% conviction under cold punitive mothers, 21% under warm punitive, 23% under warm non-punitive; warmth protects even within physical punishment; and the broken-home verdict: conflict is criminogenic, structure is not (McCord's 62/52/26/22).",
      "The concentration arithmetic: less than 6% of Cambridge families produced half of all convictions; 63% of boys with a convicted parent were convicted by 40: the mediating chain being supervision itself, not the teaching of crime (89% of convicted men at 32 opposed their children offending).",
      "The disorder layer: schizophrenia's modest violence excess (2–4× men / 6–8× women after adjustment; ~5% of violent crime attributable; homicide 5–15%) with two patterns: premorbid conduct disorder and antisocial PD predating psychosis, versus violence arising later with the illness.",
      "The symptom-level engine: threat-control-override (TCO); persecutory delusions, passivity phenomena, thought insertion; perceived threat plus perceived loss of self-control, anteceding community violence after controlling for psychopathy and substance abuse; comorbidity multipliers (3–16× substance, 4–18× personality disorder) dwarfing the disorder effect.",
      "The substance-misuse multiplier: alcohol a key factor in at least half of interpersonal assaults; the ECA ladder (2% / 7% / 20% / 22% one-year violence); acquisitive offending concentrated (NTORS 10% committing 76%); crime preceding drug use (14.5 vs 16.2/19.9 years).",
      "The neurobiological layer at honest effect size: prefrontal reductions in impulsive/affective (not predatory) aggression; EEG frontal slowing in more than half of repetitively violent prisoners; serotonin relating to impulsivity rather than violence per se; MAOA×maltreatment a prevention-relevant interaction, never a predictive test: the chapter's caveat that these findings suggest management strategies without determining individual violence.",
    ],
    grade: "supported",
  },
  brainRegions: [
    { id: "orbitofrontal-prefrontal", name: "Orbitofrontal and prefrontal cortex (the executive brake)", role: "Traumatic orbitofrontal damage producing impulsivity and aggression; prefrontal executive test abnormalities in antisocial subjects; EEG frontal slowing in more than half of repetitively violent prisoners; reduced prefrontal size and activity in aggressive patients, with predatory killers' blood flow resembling controls: the findings mark impulsive/affective, not premeditated, aggression.", grade: "established" },
    { id: "amygdala", name: "Amygdala (the threat reader)", role: "Threat detection and emotion intensity: structural abnormalities and impaired orbitofrontal-amygdala connectivity in the schizophrenia-violence neurobiology; the MAOA×maltreatment interaction reducing amygdala regulatory-prefrontal reactivity; emotion-intensity-perception deficits generating conflict and missing the resolution signals that would end it.", grade: "supported" },
    { id: "hippocampus", name: "Hippocampus (the context ledger)", role: "Reduced whole-brain and hippocampal volumes in the violent-schizophrenia findings: the memory-context layer of a picture whose better specific-executive and verbal test performance paradoxically marks the antisocial subgroup.", grade: "supported" },
  ],
  neurotransmitters: [
    { name: "Serotonin", symbol: "5-HT", role: "Reduced serotonin function relates to impulsivity rather than violence per se: the impulsive pathway with SSRI-treatment implications; the honest narrow reading of a finding every cohort over-reads.", grade: "supported", drugConnection: "The SSRI logic targets impulsivity's chemistry, but no KYP drug route is prescribed here; the comorbid-depression tier belongs to the depressive-disorder courses." },
    { name: "Dopamine", symbol: "DA", role: "The psychosis currency: the positive symptoms constituting the TCO construct (persecutory delusions, passivity, thought insertion) ride dopaminergic pathways; antipsychotic treatment the management lever when the formulation names psychosis as the major determinant.", grade: "supported" },
    { name: "GABA", symbol: "GABA", role: "The depressant disinhibition: alcohol's potentiation of GABAergic inhibition producing the impaired judgement and disinhibition behind at least half of interpersonal assaults.", grade: "established" },
    { name: "Glutamate", symbol: "Glu", role: "The withdrawal state's engine: rebound hyperexcitability behind the overlooked irritability-and-aggression window, and the delirium tremens with impaired perception, affect, judgement and impulse control.", grade: "established" },
    { name: "Norepinephrine", symbol: "NE", role: "Stimulant arousal: the noradrenergic hyperarousal behind stimulant-related irritability, and the toxic psychoses of severe intoxication.", grade: "supported" },
  ],
  pathways: [
    {
      id: "supervision-conviction-chain",
      name: "The supervision-to-conviction chain (the psychosocial architecture)",
      steps: [
        { label: "Poor supervision and monitoring", detail: "The strongest and most replicable predictor: parents not knowing where their children are; Cambridge–Somerville holding the prediction to age 45" },
        { label: "Harsh, erratic, cold discipline", detail: "Nottingham: 40% of offenders smacked or beaten at 11 vs 14% of non-offenders; the warmth buffer operating within punishment (51% cold-punitive vs 21% warm-punitive conviction)" },
        { label: "The school-failure bridge", detail: "Low verbal IQ → school failure → delinquency (Lynam's Pittsburgh chain); poor abstract-concept manipulation and executive-function deficits compounding; truancy at 13.8 the sequence's first card" },
        { label: "Delinquent peers and co-offending", detail: "20% of boys with near-age brothers co-offending with them; large families (4+ siblings doubling conviction risk) supplying both the crowding and the models" },
        { label: "The concentration", detail: "Less than 6% of Cambridge families producing half of convictions; 63% of boys with convicted parents convicted by 40: the mediating chain supervision itself, not the teaching of crime (89% of convicted men at 32 opposed their children offending)" },
      ],
      clinicalManifestation: "The acquisitive decade of case 2: truancy 13, theft 14, first substance 16–17, heroin 19, the twice-convicted father, six siblings in two rooms: one biography carrying the whole architecture.",
      grade: "established",
    },
    {
      id: "tco-pathway",
      name: "The psychosis pathway (TCO to community violence)",
      steps: [
        { label: "Schizophrenia with positive symptoms", detail: "The 2–4× (men) / 6–8× (women) violence excess after adjusting socio-economic status, marital status and substance abuse" },
        { label: "Perceived threat + perceived loss of control", detail: "The threat-control-override construct: persecutory delusions, passivity phenomena, thought insertion; the world reading as dangerous AND the self as overridden" },
        { label: "The comorbid multipliers", detail: "Substance use 3× (men) / 16× (women); personality disorder 4× / 18×: the comorbid group's common origin in conduct disorder" },
        { label: "Escalation through unreadable resolution", detail: "Emotion-intensity-perception deficits and impaired orbitofrontal-amygdala connectivity: conflict generated, resolution signals missed, escalation the default" },
      ],
      clinicalManifestation: "The threatened neighbour: thought insertion with persecutory content naming a victim and a shared building: the TCO symptom as antecedent marker, violence not yet occurred.",
      grade: "supported",
    },
    {
      id: "gene-environment-pathway",
      name: "The gene-environment pathway (MAOA × maltreatment)",
      steps: [
        { label: "Childhood maltreatment", detail: "Indianapolis: abused-under-11 children significantly more violent over 15 years; Rochester: maltreatment under 12 predicting offending after controls; Cambridge–Somerville: half of abused or neglected boys with serious crime, alcoholism, mental illness or death before 35" },
        { label: "The low-activity MAOA variant", detail: "The gene-environment interaction: low-activity variant plus maltreatment → adult antisocial behaviour, with reduced amygdala regulatory-prefrontal reactivity and limbic volume reductions" },
        { label: "Impulsive, not predatory, aggression", detail: "The serotonin link: reduced function relating to impulsivity rather than violence per se, and the frontal findings marking the impulsive/affective form (predatory killers' blood flow resembling controls)" },
        { label: "The honest ceiling", detail: "Statistically detectable, individually non-predictive: a research finding informing prevention, never a test; the chapter's caveat that none of this causes or predicts individual violence deterministically" },
      ],
      clinicalManifestation: "The repetitively violent prisoner with EEG frontal slowing and the childhood record: the formulation's biological layer, held at honest effect size.",
      grade: "supported",
    },
  ],
  timeline: [
    { id: "first-decade", time: "Ages 0–10", title: "The architecture assembles", description: "Supervision, discipline style, warmth, family size, parental conflict and the criminal-parent concentration take their measurable positions: poor supervision already the strongest replicable predictor of what follows (Cambridge–Somerville following its boys to age 45); Newcastle: disruption in the first 5 years doubling conviction risk.", phase: "onset" },
    { id: "school-bridge", time: "Ages 10–13", title: "The school-failure bridge", description: "Low verbal IQ → school failure → delinquency (Lynam's Pittsburgh chain); truancy beginning around 13.8 years; the executive-function deficits compounding and the delinquent peer group forming.", phase: "onset" },
    { id: "onset-sequence", time: "Ages 13.8–19.9", title: "The onset sequence", description: "Truancy 13.8 → first crime 14.5 → first drugs 16.2 → hard drugs 19.9 years: crime PRECEDES drug use; the sequence argument that defeats the single-cause defence; family size the most important independent predictor to age 32 in the Cambridge logistic regression.", phase: "peak" },
    { id: "peak-paradox", time: "Ages 17–18", title: "The peak and the affluence paradox", description: "Peak offending age, with convicted males relatively well paid against their studying non-delinquent peers (unskilled adult wages vs none): the socio-economic paradox that keeps the SES literature honest.", phase: "peak" },
    { id: "long-tail", time: "To ages 40–45", title: "The concentration and the long tail", description: "Less than 6% of Cambridge families producing half of all convictions; 63% of boys with a convicted parent convicted by 40; desistance the majority story, the concentration the exception that drives policy.", phase: "duration" },
    { id: "treatment-window", time: "The treatment years", title: "The modifiable layer", description: "NTORS 5-year follow-up: convictions for acquisitive, drug-selling and violent crimes reduced after treatment; the comorbid multipliers (3–16× substance, 4–18× personality disorder) treatable; therapeutic nihilism dispelled in both directions.", phase: "recovery" },
  ],

  /* ---- Lesson 3: Clinical Practice ---- */
  epidemiology: {
    globalPrevalence: "Schizophrenia, personality disorder and substance-related disorders are significantly overrepresented among offenders: psychosis affects 3.7% of male and 4% of female prisoners: 2–4× community rates, per the 23,000-prisoner systematic review. Violence risk in schizophrenia runs 2–4× (men) and 6–8× (women) after controlling socio-economic status, marital status and substance abuse; about 5% of violent crime in Northern European populations is attributable to severe mental illness; homicide schizophrenia rates run 5–15%, with family members more often victims than strangers; aggression occurs in one-third of first-episode psychosis cases. Alcohol is a key factor in at least half of interpersonal assaults (British Crime Surveys); alcohol and drug misuse contribute to two-fifths of homicides, with 17% committed by patients with severe mental illness PLUS substance misuse. Drug misusers overwhelmingly commit acquisitive offences. NTORS: 10% of clients committed 76% of the pre-treatment acquisitive crimes.",
    indianPrevalence: "NCRB-based Indian data show the majority of violent crime committed without established disorder; alcohol deeply implicated in interpersonal violence: festival violence, domestic violence and road rage mirroring the Western half-of-assaults pattern; prison psychiatry underserved, with Indian prisons holding large psychotic and substance-disordered populations with minimal mental health input; the 3.7%/4% psychosis figures with their 2–4× elevation setting the service case.",
    lifetimeRisk: "The concentration arithmetic: less than 6% of Cambridge families produced half of all convictions; 63% of boys with a convicted parent were convicted by 40; 4+ siblings by age 10 doubling juvenile conviction risk (9% with one child rising to 24% with four-plus, Wadsworth).",
    genderRatio: "The schizophrenia multiplier is larger in women (6–8× against men's 2–4×) because the community baseline is lower; comorbid substance use multiplies women's risk harder too (16× against men's 3×).",
    ageOfOnset: "The onset sequence: truancy 13.8 → crime 14.5 → drugs 16.2 → hard drugs 19.9 years: crime preceding drug use; peak offending age 17–18, with the affluence paradox (convicted males relatively well paid at the peak).",
    indianNotes: "The 5%-attributable figure is the stigma-countering number Indian clinicians most need: media narratives binding mental illness to violence against the measured modesty of the excess; the drink-before-the-offence question is the practical screen at every forensic assessment.",
  },
  etiology: [
    { category: "social", factor: "The child-rearing architecture (the four dimensions)", details: "Supervision/monitoring: the strongest and most replicable predictor (Cambridge–Somerville, best predictor of violent and property crime to age 45). Discipline: harsh physical punishment (Nottingham: 40% of offenders smacked or beaten at 11 vs 14% of non-offenders) and erratic, inconsistent discipline. Warmth/coldness: the warmth buffer: 51% conviction for cold punishing mothers, 21% for warm punishing, 23% for warm non-punitive; warmth protects even within punishment. Involvement completes the four. Explanations: attachment (Bowlby, unattached children becoming offenders) and social learning (inconsistent, non-contingent responses and antisocial models)." },
    { category: "social", factor: "Family structure as conflict, not breakage", details: "Newcastle: disruption in the first 5 years doubles conviction risk; Dunedin: single-parent families overrepresented among violent offenders (28% vs 17% vs 9%); the National Survey: divorce/separation worse than death, under-5 worst, remarriage adding risk. McCord's classic quartet: broken-without-affectionate-mother 62%, united-with-conflict 52%, united-no-conflict 26%, broken-with-affectionate-mother 22%; conflict is criminogenic, structure is not; a loving mother compensates. Cambridge: staying with the mother after separation equalled intact-low-conflict rates; the post-disruption trajectory (who cares, how stably) is decisive, favouring life-course theories (accumulating stressors, changing caretakers) over trauma (separation itself) and selection (pre-existing family differences) theories." },
    { category: "social", factor: "Criminal parents, large families and the socio-economic gradient", details: "St Louis: arrested parents → arrested children, with similar offence types; less than 6% of Cambridge families produced half of all convictions; 63% of boys with a convicted parent were convicted by 40; same-sex and older-sibling influences stronger; criminal parents did NOT teach crime (89% of convicted men at 32 opposed their children offending; joint parent-child convictions vanishingly rare): the mediating chain is poor supervision. Explanations: intergenerational risk-factor entrapment, environmental mediation, genetic mechanisms, official bias, all supported, none sufficient alone. Large family size: 4+ siblings doubles juvenile conviction risk (the most important independent predictor to age 32); Wadsworth 9% → 24%; mechanisms: parental attention dilution, overcrowding (no prediction in the least-crowded homes), delinquent-sibling exposure (20% of boys with near-age brothers co-offended with them). SES: the literature inconsistent, but British studies link low SES and offending (National Survey: 3% highest category to 19% lowest); low income and poor housing predict more consistently than occupational prestige, with the paradox that convicted males were relatively well paid at the peak offending age of 17–18." },
    { category: "social", factor: "Teenage mothers and child abuse", details: "Teenage mothers' children at risk for low attainment, antisocial behaviour, substance use, early sex and delinquency (the biological father's presence mitigates); Newcastle: teenage-married mothers twice as likely to have offender sons. Child abuse: Indianapolis; abused-under-11 children significantly more violent over 15 years; Cambridge–Somerville: half of abused or neglected boys had serious crime, alcoholism, mental illness or death before 35; Rochester: maltreatment under 12 predicted offending after controls. Theories: social learning (imitation), attachment/social bonding (low self-control), strain (negative emotions → revenge). The intergenerational transmission is the architecture's engine room." },
    { category: "biological", factor: "The neurobiology of aggression, honestly read", details: "Low IQ predicts offending, mediated through school failure (Lynam's Pittsburgh analysis: low verbal IQ → school failure → delinquency), poor abstract-concept manipulation (foreseeing consequences, appreciating victims' feelings) and executive-function deficits. Orbitofrontal traumatic damage → impulsivity and aggression; prefrontal executive test abnormalities in antisocial subjects; EEG frontal slowing in more than half of repetitively violent prisoners; neuroimaging showing reduced prefrontal size and activity in aggressive patients: predatory killers' blood flow resembling controls: the findings mark impulsive/affective, not premeditated, aggression. Two postulated groups: acquired frontal lesion impairing judgement and empathy; and developmental executive deficits from foetal/birth injury, learning disorders, ADHD, substance misuse and antisocial PD with episodic dyscontrol. Reduced serotonin function relates to impulsivity rather than violence per se (with SSRI-treatment implications); cortisol and dietary insufficiencies contribute." },
    { category: "genetic", factor: "The gene-environment interactions", details: "Adoption studies: biological parent-adoptee property-offence continuity; the Danish cohort's paternal-violence-adoptee-schizophrenia link. MAOA×maltreatment: the low-activity variant with childhood maltreatment → reduced amygdala regulatory-prefrontal reactivity, increased aggression, limbic volume reductions; statistically detectable, individually non-predictive. Twin studies: childhood antisocial behaviour with callous-unemotional traits is strongly genetic; adolescent-onset antisocial behaviour is environmentally driven: the developmental shift. The chapter's caveat holds: these findings suggest management strategies; they neither cause nor predict individual violence deterministically." },
    { category: "psychological", factor: "The disorder layer and its multipliers", details: "Schizophrenia's two aggression patterns: (1) conduct disorder (in 20–40%) and antisocial PD PREDATING psychosis; the premorbid-antisocial pathway; (2) violence arising later with the illness. Symptom evidence method-conflicted but converging: positive symptoms raise minor and serious violence risk (negative symptoms reduce serious violence, perhaps through living alone); serious violence associated with psychotic AND depressive symptoms, childhood conduct problems and victimisation; TCO anteceding community violence after controlling for psychopathy and substance abuse; hallucinations, acute suicidality, acute conflict, separations, housing problems and lack of insight all raising risk. Comorbidity multipliers: substance use 3× (men) / 16× (women); personality disorder 4× / 18×: the comorbid group's common origin in conduct disorder." },
  ],
  symptomClusters: [
    {
      category: "1. The psychosis-driven presentation (the TCO picture)",
      symptoms: ["Persecutory delusions naming a specific person or agency: the threat half of threat-control-override", "Passivity phenomena and thought insertion: the control-override half: the self experienced as overridden from outside", "The two-pattern history: conduct problems predating psychosis (the premorbid-antisocial pathway, 20–40%) versus violence arriving with the illness", "Accompanying risk raisers: hallucinations, acute suicidality, acute conflict, separations, housing problems, lack of insight", "First-episode numbers: aggression in one-third of first-episode psychosis cases; under 10% seriously aggressive when psychotic, 23% with lesser aggression; comorbid drug misuse 9× more aggressive after service contact"],
    },
    {
      category: "2. The substance-driven presentation (the multiplier picture)",
      symptoms: ["Intoxication disinhibition: alcohol a key factor in at least half of interpersonal assaults; stranger and domestic violence particularly", "Withdrawal irritability and aggression: the overlooked state; delirium tremens with impaired perception, affect, judgement and impulse control", "Stimulant arousal and irritability; toxic psychoses at severe intoxication; 'pathological intoxication' of doubtful validity (usually hypoglycaemia, head injury or other organicity)", "Acquisitive offending as the drug-misuse signature: concentrated: 10% of NTORS clients committing 76% of pre-treatment acquisitive crimes", "The sequence marker: crime preceding drug use (14.5 vs 16.2/19.9 years): the biography that defeats the single-cause defence"],
    },
    {
      category: "3. The lifelong antisocial presentation (the ordinary criminogenic layer)",
      symptoms: ["Poor supervision and harsh, erratic, cold discipline in the childhood history: the architecture assembling early, with the warmth buffer absent", "Large family, convicted parent, parental conflict and the socio-economic gradient: the concentration background (6% of families, half of convictions)", "Amnesia for the offence: common after violence, complicating but never precluding fitness to plead", "The personality layer: antisocial PD with episodic dyscontrol; emotion-intensity-perception deficits generating and escalating conflict", "The victim layer: people with mental illness far more often victims than perpetrators; the reverse of the media narrative"],
    },
  ],
  diagnosticCriteria: [
    {
      system: "The five-step assessment of the substance-using offender",
      code: "The chapter's structure",
      criteria: [
        "(1) A detailed life history with corroboration: relationships, work, social situation.",
        "(2) The substance history: onset, dose, route, weekly pattern, desired vs actual effects, effect on symptoms and behaviour, self-harm/aggression associations, treatment history.",
        "(3) A detailed offence history with the effect of substances and illness on mental state BEFORE, DURING AND AFTER each offence: corroborated from witness statements.",
        "(4) A full mental state with intelligence, personality and insight estimates.",
        "(5) The practical implications for management and medico-legal reporting.",
      ],
      duration: "Every step corroborated: witness statements, records and family account; the offence-history step never from the defendant's memory alone (amnesia is common after violence).",
      indianNote: "The Indian forensic assessment under the BNS unsoundness provisions: the five steps in sequence, the drink-before-the-offence screen asked explicitly, and the formulation the court is owed, not a label.",
    },
    {
      system: "The formulation discipline",
      code: "Perpetrator × victim × context",
      criteria: [
        "Every violent act is a perpetrator-victim-context triad: the drunk aggressive victim frightening the suspicious impulsive perpetrator, with alcohol and a knife available: three parts, never a single cause.",
        "Articulate which factors accounted for PREVIOUS offending and which bear on FUTURE offending, in the patient's own biography, not a checklist.",
        "Mental disorder may be the major determinant, entirely coincidental, or one interacting factor, even psychosis-explicable offences require the wider look (substances, networks, personality).",
        "The anti-checklist rule: actuarial-tool reduction is 'at best lazy and at worst negligent'. The HCR-20 (Historical/Clinical/Risk-management, 20 items) is a scaffold placing substance misuse among the significant risk factors, never a substitute for the articulated formulation.",
        "Three cautions discipline the diagnostic use of the evidence: methodological (offences are man-made, shifting concepts; captive, selected prison populations disadvantaged by ethnicity, poverty, homelessness and mental illness; unreliable records), attributional (the population association never reverses into individual causation), and formulational (the assessment must be biographical).",
      ],
      duration: "The formulation is written, revisited and revised. A living document through the follow-up, not a one-time verdict.",
      indianNote: "The formulation discipline travels where the actuarial tables do not: the Indian court report's credibility rests on the five steps and the triad, not on an imported score.",
    },
  ],
  severityScales: [
    {
      name: "HCR-20",
      fullName: "Historical/Clinical/Risk-management 20-item structured professional judgement",
      measures: "Violence risk as structured professional judgement: the scaffold placing substance misuse among the significant risk factors; items not reproduced (the principle is the teaching point, and the instrument's reduction to a checklist is the failure mode).",
      ranges: [],
      indianNote: "In Indian practice the instrument supports the court report; the formulation discipline travels where the actuarial tables do not.",
    },
    {
      name: "The comorbidity risk ladder",
      fullName: "ECA one-year violence prevalence by diagnostic group",
      measures: "One-year violence prevalence stratified by diagnostic group: the Epidemiologic Catchment Area comorbidity staircase.",
      ranges: [
        { min: 0, max: 0, severity: "No disorder: 2%", action: "The base rate: the floor against which every multiplier is read, and the number behind 'most violence happens without mental illness'" },
        { min: 1, max: 1, severity: "Major mental illness: 7%", action: "The modest excess: the number that counters stigma while refusing to deny the association; treat the illness, count the comorbidities" },
        { min: 2, max: 2, severity: "Substance misuse disorder: 20%", action: "The dominant multiplier: treating the substance misuse IS the risk-management move (NTORS 5-year conviction reductions)" },
        { min: 3, max: 3, severity: "Comorbid: 22%", action: "The staircase's top step: dual diagnosis as the central task of modern mental health care: staff training, joint working, enhanced care programme" },
      ],
      indianNote: "The ladder's Indian reading: the alcohol question at every forensic assessment, because the middle rung is the one Indian practice most often misses.",
    },
  ],
  differentialDiagnosis: [
    { condition: "The disorder-driven offence", distinguishingFeatures: "TCO symptoms temporally tied to the offence; psychosis content contiguous with the victim (the named neighbour, the relative); mental state before, during and after the offence documented from witness statements.", keyDifferentiator: "The formulation names mental disorder as the major determinant, and still looks wider: substances, networks, personality." },
    { condition: "The coincidental disorder", distinguishingFeatures: "A psychiatric diagnosis present but the offence pattern predating it: the acquisitive decade (theft at 14, first substance 16–17, heroin 19); conduct-disorder history (premorbid in 20–40% of violent schizophrenia).", keyDifferentiator: "The sequence argument: what preceded what; the biography, not the diagnosis, carries the causal weight." },
    { condition: "The substance-driven offence", distinguishingFeatures: "The drink-before-the-offence screen positive; intoxication disinhibition or withdrawal irritability documented; acquisitive pattern matching dependence funding.", keyDifferentiator: "The ECA ladder position (20%/22% against 2%/7%) plus the medico-legal analysis: simple intoxication is no defence to basic-intent crimes; the narrow specific-intent exception turns on whether the accused was SO intoxicated as to be unable to form the intent: purposiveness before, during and after the offence the clinical clue." },
    { condition: "The ordinary criminogenic offence", distinguishingFeatures: "The psychosocial architecture in the biography without disorder: poor supervision, convicted parent, 4+ siblings, conflict-heavy home, delinquent peers.", keyDifferentiator: "The 5%-attributable figure framing the population truth: most violent crime happens without severe mental illness; disorder, when present, is usually one interacting factor." },
    { condition: "The organic-state offence", distinguishingFeatures: "Acquired frontal lesion, head injury, hypoglycaemia or delirium, with 'pathological intoxication' of doubtful validity usually revealing hypoglycaemia, head injury or other organicity on examination.", keyDifferentiator: "The medical workup the formulation demands before any psychiatric attribution settles." },
  ],
  management: [
    { category: "psychotherapy", name: "Treat the disorder and the criminogenic factors together", description: "Treating mental disorder without addressing substance misuse, networks and structure will not reduce offending: the two-channel rule. Dual diagnosis is CORE business of modern mental health care: staff training in substance misuse, joint working with drug and alcohol teams, local clinical leadership, and an enhanced care programme for severe mental illness with destabilising substance use.", whenToUse: "Every case where disorder and misuse coexist: the comorbid rung of the ECA ladder (22%).", indianContext: "The Indian CMHT and district tiers building the joint-working habit; the enhanced-CPA logic delivered through family structures where formal care coordination is thin." },
    { category: "lifestyle", name: "Treat the substance misuse — therapeutic nihilism dispelled", description: "The NTORS 5-year follow-up: convictions for acquisitive, drug-selling and violent crimes reduced after treatment; half of clients crime-free, with the concentration (10% committing 76%) the target-rich remainder. The offender is treatable; the mentally disordered offender is manageable. The nihilism is the myth.", whenToUse: "At every contact: the drink-before-the-offence question is the Indian forensic screen in one line.", indianContext: "Opioid-agonist maintenance (buprenorphine, methadone) (the treatability engine behind the conviction reductions) has no KYP drug lesson here; the Opioid Use Disorders course holds it." },
    { category: "lifestyle", name: "The relapse-prevention architecture", description: "Define the risk: self-harm, relapse, violence, and toward whom (family, partners, carers); estimate probability and severity; name the early-warning signs (behaviours, symptoms, non-compliance); change what can be changed, and add support, care and security; medication supervision where needed. The identified-victim principle: family members of patients with TCO symptoms deserve specific safety planning.", whenToUse: "From the first assessment, updated at every review: the crisis plan written before the crisis.", indianContext: "The family as the early-warning system: the missed appointment and the returning symptom theme are the two signs Indian relatives can be taught to name." },
    { category: "psychotherapy", name: "The court report in its three-task structure", description: "(1) The psychiatric contribution to THIS offence in the life context; (2) whether treatment could prevent reoffending; (3) protecting society. The medico-legal doctrine carried honestly: amnesia complicates but never precludes fitness to plead; simple intoxication is no defence to basic-intent crimes and only a narrow defence to specific-intent crimes; insanity rarely available (voluntary consumption bars automatism); diminished responsibility requires an abnormality of mind from disease, injury or inherent causes: intoxication is no defence, though alcohol dependence could qualify as disease if the first drink was involuntary.", whenToUse: "Every medico-legal referral.", indianContext: "Indian forensic assessments under the BNS unsoundness provisions need the five-step structure and the formulation discipline; the specific/basic-intent and diminished-responsibility doctrines have Indian analogues for the expert to master locally." },
    { category: "pharmacotherapy", name: "The pharmacotherapy tier — held honestly", description: "The pharmacology that genuinely reduces offending risk lives in other courses: antipsychotic treatment of the psychosis whose TCO symptoms antecede violence (the Schizophrenia course); opioid-agonist maintenance behind the NTORS offence reductions (the Opioid Use Disorders course); the alcohol relapse-prevention tier (the Alcohol Use Disorders course). No KYP drug route is invented here: the absence recorded in contentGaps.", whenToUse: "The formulation decides which course's treatment applies: this course's job is the attribution, not the prescription.", indianContext: "The Indian reality: the medicines are the cheap layer; the formulation capacity is the scarce one." },
  ],
  safety: {
    redFlags: [
      "TCO symptoms with a NAMED victim: persecutory delusions plus passivity or thought insertion aimed at an identified person: admission for assessment, with the identified-victim safety plan",
      "Comorbid substance misuse in psychosis: the multiplier tiers (3–16× substance, 4–18× personality disorder); and the 9× first-episode aggression elevation after service contact: the first weeks of engagement are the risk window",
      "Acute suicidality, acute conflict, separations, housing problems and lack of insight: the situational risk raisers that surround every violence assessment",
      "Withdrawal states: the overlooked irritability-and-aggression window; delirium tremens with impaired perception, affect, judgement and impulse control is a medical emergency",
      "Aggression in one-third of first-episode psychosis cases: the untreated first presentation is itself the emergency",
      "Missed appointments and the returning symptom theme: the early-warning signs the family can name before the crisis",
    ],
    urgentGuidance:
      "The order of operations: (1) a named victim plus TCO symptoms means admission for assessment. The acute-symptom multiplier treated as the emergency it is; (2) the comorbid substance misuse addressed simultaneously (dual diagnosis, enhanced care programme): treating one channel alone will not reduce offending; (3) withdrawal states managed medically: delirium tremens kills; (4) the identified-victim principle: family members of patients with TCO symptoms get specific safety planning, not reassurance; (5) corroboration from witness statements before the formulation is written. The uncorroborated self-report is the weakest evidence in the file; (6) amnesia for the offence complicates but never precludes assessment: fitness to plead is decided on the legal criteria, not the memory.",
  },
  drugLinks: [],
  contentGaps: [
    "No KYP drug lesson is linked: none of the twelve antidepressant routes with KYP drug pages carries a clinical role in this note's offending architecture. The pharmacotherapy that genuinely appears (antipsychotic treatment of the psychosis whose TCO symptoms antecede violence) belongs to the Schizophrenia course; taught there, referenced here, route never invented.",
    "Opioid-agonist maintenance (buprenorphine, methadone) (the treatability engine behind the NTORS conviction reductions and case 2's court-report recommendation) has no KYP drug lesson; the Opioid Use Disorders course teaches it and this course points to it, never duplicates.",
    "The alcohol relapse-prevention tier (naltrexone, acamprosate, disulfiram) behind 'treat the substance misuse' as the risk-management move has no KYP lessons here; the Alcohol Use Disorders course holds the tier.",
    "The HCR-20 is named and its role taught (scaffold, never substitute) but its items are not reproduced: a structured professional judgement instrument is taught as principle, not transcribed.",
    "The medico-legal doctrines (specific vs basic intent, diminished responsibility, insanity) are taught at exam depth as principles; the jurisdiction-specific statute wording (including India's BNS unsoundness provisions) is flagged for local mastery, not reproduced.",
  ],
  patientGuide: {
    whatIsIt:
      "This course answers a question families, courts and journalists ask wrongly: are mentally ill people dangerous? The measured answer: there is a small but real excess of violence risk in schizophrenia (about two to four times in men after adjusting for everything else) but this translates to only around 5% of violent crime being attributable to severe mental illness, far outweighed by alcohol, poverty and ordinary criminality; and people with mental illness are far more often victims than perpetrators. The bigger story is ordinary: offending grows mostly from disadvantages anyone can list (poor supervision of children, harsh and inconsistent discipline, family conflict, poverty, delinquent peers) with mental disorder usually one interacting factor among several, sometimes coincidental, occasionally the main one.",
    whatCausesIt:
      "The causes stack rather than compete. Children unsupervised (parents not knowing where they are), harshly or erratically disciplined, and without warmth are the most predictably at risk. The finding holds from childhood to middle age. Family CONFLICT matters far more than family breakage: a broken home with a loving mother does better than an intact home full of conflict. A small group of families (fewer than 6% in one famous study) produced half of all convictions, through supervision, not teaching. Very large families, convicted parents, teenage motherhood and childhood abuse each add risk. Illness adds its layer: certain psychotic experiences (believing someone is threatening you and controlling your thoughts (doctors call these threat-control-override symptoms)) precede violence more than any other symptoms. Alcohol is the biggest single factor of all: it sits behind at least half of interpersonal assaults.",
    symptoms:
      "What brings someone to a forensic assessment: threats or violence in the context of psychotic beliefs naming a specific person; violence only when drinking or withdrawing from alcohol or drugs; a long acquisitive record (theft, burglary) funding a dependence; amnesia for the offence itself, which is common and does not by itself decide anything legal. The warning signs that matter most to families: a delusion returning with a named person in it, missed appointments, drinking before conflict, and talk of revenge or threat.",
    treatment:
      "Treatment works, and the nihilism is the myth: the national treatment study (NTORS) found convictions for acquisitive, drug-selling and violent crimes reduced at five years after treatment. The rules: treat the illness AND the substance misuse together (treating one alone does not reduce offending); name the risks specifically, toward whom, how badly, with what warning signs; write the crisis plan before the crisis; and give the family of anyone with threat-control-override symptoms a specific safety plan of their own. For the court, the treating team answers three questions: what did the illness contribute to this offence in this life, could treatment prevent reoffending, and how is society protected.",
    selfHelp: [
      "Learn the two early-warning signs you can act on: the returning symptom theme (the fixed belief coming back) and the missed appointment, both are calls to the treating team, not moral failings.",
      "Ask the drink question at every assessment: what was drunk before the incident? Alcohol sits in half of assaults: it is the most treatable factor in most violent histories.",
      "Do not accept 'the illness made him do it' or 'the breakup made him do it' as explanations: the honest version names perpetrator, victim and context together, and honesty is what keeps everyone safest.",
      "If a relative with psychosis has named a specific person as a threat, treat that as urgent: contact the treating team the same day and ask for the safety plan to be reviewed.",
      "Families carrying a violent or offending relative need their own support. The endurance of the household is a clinical variable, not a background fact.",
    ],
    whenToSeekHelp: [
      "A delusion naming a specific person returning or intensifying: same-day contact with the treating team",
      "Any threat made, however conditional ('if he comes near me I will...'): urgent assessment",
      "Withdrawal shakes, sweating, confusion or fits: a medical emergency, not a psychiatric opinion",
      "Drinking escalating alongside conflict at home: the multiplier at work, and the window to intervene",
      "Missed appointments piling up: the quietest and most reliable early-warning sign of all",
    ],
    indianResources: [
      "Tele-MANAS 14416 (24×7, free), for family distress, crisis guidance and the caregiver's own exhaustion",
      "The district de-addiction centre and the DMHP psychiatric tier: the dual-diagnosis treatment channel",
      "Child guidance clinics, school engagement and Anganwadi-linked parenting support: the supervision finding's policy translation",
    ],
  },

  /* ---- Lesson 4: Indian Context ---- */
  indianPractice: {
    indianGuidelines: "No India-specific forensic-offending pathway exists; Indian forensic assessments under the BNS unsoundness provisions need the five-step structure and the formulation discipline, with the specific/basic-intent and diminished-responsibility doctrines having Indian analogues the expert must master locally. Practice follows the evidence architecture this course teaches, delivered through the district and prison tiers that exist.",
    systemContext: "The Indian forensic patient is met late, in a court lock-up, an observation ward or a prison with minimal mental health input. Indian prisons hold large psychotic and substance-disordered populations with minimal psychiatry (the 3.7%/4% psychosis figures at 2–4× community rates set the service case); NCRB-based data show most violent crime committed without established disorder; and media narratives bind mental illness to violence. The 5%-attributable figure is the stigma-countering number Indian clinicians most need.",
    programmeContext: "The prevention translation is Indian and cheap: child guidance, school engagement and Anganwadi-linked parenting support map onto the strongest predictor in the science (supervision); the MAOA×maltreatment and warmth findings give child protection (POCSO enforcement, parenting programmes) a neurobiological as well as moral rationale; the drink-before-the-offence question is the practical screen at every forensic assessment.",
    costConsiderations: "The expensive layer in Indian forensic psychiatry is not the medication. It is the formulation capacity (scarce, time-heavy, court-dependent) and the prison mental health tier (underserved, chronically short-staffed). The prevention programmes the evidence supports are the cheapest tier the system has never fully funded; the note gives no Indian cost figures and none are invented here.",
    culturalConsiderations: "Alcohol is the Indian multiplier: consumed at home and in the street, it sits in the Western data's half of interpersonal assaults, and Indian alcohol-violence patterns (festival violence, domestic violence, road rage) mirror this. The supervision finding generalises to Indian working-parent, migrant-labour and street-children realities; the warmth finding speaks to every Indian household where punishment is the default language of care; and the stigma conversation (media narratives against the 5% figure) belongs in every public-education answer the Indian clinician gives.",
    patientCounselling: [
      "The stigma script: 'About 5% of violent crime is attributable to severe mental illness; your relative's diagnosis raises risk modestly, and people with mental illness are far more often victims than perpetrators.'",
      "The drink script: 'The single most useful fact about the incident is what was drunk beforehand; alcohol sits behind at least half of assaults, and it is the most treatable factor we can change.'",
      "The supervision script: 'The strongest predictor science has found is whether someone knew where the child was. It is also the most fixable, at any income, in any household.'",
      "The safety-plan script: 'If the belief about a named person returns, or appointments start being missed, call us that day. Those two signs are the alarm system.'",
      "The treatability script: 'Treatment reduces convictions; measured at five years, in a national study. The belief that offenders cannot be helped is the myth this course exists to retire.'",
    ],
  },
  decisionPath: {
    title: "The referred offender: attributing and formulating",
    nodes: [
      {
        id: "start",
        question: "A patient with a psychiatric history is referred after an offence (or a threat). Where do you begin?",
        branches: [
          { label: "Psychotic symptoms: threat, control, passivity", next: "tco-gate" },
          { label: "No psychosis; substance misuse dominates", next: "substance-gate" },
          { label: "No psychosis; lifelong antisocial pattern", next: "trajectory-gate" },
          { label: "Mental state normal; the question is causation itself", next: "attribution-gate" },
        ],
      },
      {
        id: "tco-gate",
        question: "Threat-control-override symptoms: persecutory delusions, passivity phenomena, thought insertion; perceived threat plus perceived loss of self-control.",
        branches: [
          { label: "A named victim identified", next: "named-victim-path" },
          { label: "Comorbid substance misuse", next: "tco-comorbid-path" },
          { label: "No named victim, no weapon access", next: "tco-manage-path" },
        ],
      },
      {
        id: "named-victim-path",
        question: "The TCO symptom with a person attached to it.",
        recommendation: "Urgent: admission for assessment (the acute-symptom multiplier treated as the emergency); antipsychotic review; the identified-victim principle: specific safety planning for the named person and the family; early-warning signs written down (the returning theme, missed appointments); housing or contact mediation on discharge.",
      },
      {
        id: "tco-comorbid-path",
        question: "The multiplier stacked on the symptom.",
        recommendation: "Treat BOTH channels simultaneously: antipsychotic treatment of the psychosis plus dual-diagnosis work on the substance misuse (the 3–16× substance tier; enhanced care programme); treating one alone will not reduce offending; the first weeks of service contact are the risk window (the 9× first-episode finding).",
      },
      {
        id: "tco-manage-path",
        question: "The antecedent marker without a target.",
        recommendation: "Formulate anyway: the two-pattern history taken (conduct problems predating psychosis, 20–40%, versus violence arriving with the illness); the situational raisers reviewed (suicidality, conflict, separations, housing, insight); the safety plan and crisis plan written; follow-up tightened. An antecedent managed is an offence prevented.",
      },
      {
        id: "substance-gate",
        question: "No psychosis; the substance history dominates. Which pattern?",
        branches: [
          { label: "Acquisitive offending (theft, burglary)", next: "acquisitive-path" },
          { label: "Violence while intoxicated", next: "intoxication-path" },
          { label: "Withdrawal-state irritability and aggression", next: "withdrawal-path" },
        ],
      },
      {
        id: "acquisitive-path",
        question: "The drug-misuse signature: offending that funds the dependence.",
        recommendation: "Run the sequence argument first (crime preceding drug use, 14.5 vs 16.2 years: dependence amplifies an established trajectory, it does not create one); the NTORS concentration noted (10% committing 76%, the target-rich remainder); treat the substance misuse (opioid-agonist maintenance, no KYP drug lesson; the Opioid Use Disorders course) plus occupational structuring; the family and supervision factors named as the treatable criminogenic core.",
      },
      {
        id: "intoxication-path",
        question: "The disinhibited offence.",
        recommendation: "The drink-before-the-offence screen documented; the medico-legal analysis drawn (simple intoxication no defence to basic-intent crimes; the narrow specific-intent exception turning on purposiveness before, during and after the offence; diminished responsibility requiring abnormality of mind from disease, injury or inherent causes: dependence qualifying only if the first drink was involuntary); the drinking treated as the risk-management move.",
      },
      {
        id: "withdrawal-path",
        question: "The overlooked state.",
        recommendation: "Medical management first: delirium tremens (impaired perception, affect, judgement, impulse control) is an emergency; the withdrawal-aggression window documented in the report; relapse prevention built (the Alcohol Use Disorders course's tier); 'pathological intoxication' claims examined for the real organicity (hypoglycaemia, head injury) beneath them.",
      },
      {
        id: "trajectory-gate",
        question: "No psychosis; the pattern is lifelong. What is the history's architecture?",
        branches: [
          { label: "Conduct problems long preceded any illness", next: "trajectory-path" },
          { label: "The family architecture dominates the history", next: "trajectory-path" },
          { label: "The question is whether disorder matters at all", next: "attribution-gate" },
        ],
      },
      {
        id: "trajectory-path",
        question: "The antisocial pathway that predates everything, and the architecture beneath it: convicted parent, poor supervision, 4+ siblings, conflict, the warm overwhelmed mother.",
        recommendation: "The premorbid-antisocial pattern named honestly (the 20–40% conduct-disorder pathway of violent schizophrenia; the comorbid personality-disorder tier, 4–18×), the formulation holding disorder as interacting or coincidental; the treatable criminogenic core addressed in its own right: supervision and structure targets, the family engaged as the early-warning system, education and employment as the desistance scaffold; the concentration findings reframing the case from moral failure to predictable architecture, which is what makes it addressable.",
      },
      {
        id: "attribution-gate",
        question: "The normal mental state and the causal question the court is asking.",
        recommendation: "The formulation delivered in the three-task structure: the psychiatric contribution to THIS offence in the life context; whether treatment could prevent reoffending; protecting society. The three cautions applied: methodological (captive, selected populations; shifting offence concepts), attributional (the population association never reverses into individual causation), formulational (perpetrator, victim, context in this patient's biography), and the checklist refused: 'at best lazy and at worst negligent'.",
      },
    ],
    startNodeId: "start",
  },
  commonMistakes: [
    {
      mistake: "Answering 'are the mentally ill dangerous?' with a yes or a no instead of the numbers",
      why: "The yes stigmatises a population that is far more often victim than perpetrator; the no denies a real (if modest) excess that families and courts need managing.",
      correction: "The measured answer: 2–4× (men) / 6–8× (women) after adjustment; about 5% of violent crime attributable to severe mental illness; far outweighed by alcohol, poverty and ordinary criminality, and people with mental illness more often victims than perpetrators.",
    },
    {
      mistake: "Reading the schizophrenia diagnosis as the cause of the offence",
      why: "The population-level association does not reverse into individual causation: sometimes the disorder is the major determinant, sometimes entirely coincidental, usually one interacting factor.",
      correction: "The formulation: which factors accounted for previous offending and which bear on future offending, in this patient's biography; the sequence argument and the two-pattern history (premorbid conduct disorder in 20–40%) applied before any attribution settles.",
    },
    {
      mistake: "Using the risk tool as the assessment",
      why: "Actuarial reduction is 'at best lazy and at worst negligent': the score substitutes arithmetic for the articulation the court, the team and the family all need.",
      correction: "The HCR-20 as scaffold (placing substance misuse among the significant risk factors), the formulation as the building: perpetrator, victim, context; named, biographical, revisited.",
    },
    {
      mistake: "Letting 'the addiction made him do it' pass in court-report reasoning",
      why: "The sequence argument contradicts it: crime precedes drug use (14.5 vs 16.2 years on average): dependence amplifies an established antisocial trajectory, it does not create one.",
      correction: "The honest report: the onset sequence documented, the amplification named (offending intensified after the dependence began), the treatability evidence delivered (maintenance plus structuring with documented crime-reduction findings).",
    },
    {
      mistake: "Treating only the psychosis, or only the drinking",
      why: "The comorbid group sits at the top of the ECA ladder (22% one-year violence against 7% for illness alone): treating one channel leaves the multiplier running.",
      correction: "Dual diagnosis as core business: staff training, joint working with drug and alcohol teams, local clinical leadership, enhanced care programme, both channels treated simultaneously.",
    },
    {
      mistake: "Reading the broken home as the cause",
      why: "The longitudinal science says conflict explains more than breakage, and a loving mother neutralises much of the break (the broken-with-affectionate-mother group at 22% against united-no-conflict at 26%).",
      correction: "The viva answer: McCord's quartet (62/52/26/22); conflict criminogenic, structure irrelevant, maternal warmth compensating, and the post-disruption arrangements mattering more than the disruption.",
    },
  ],

  /* ---- Lesson 5: Exam Revision ---- */
  examLens: {
    mbbs: {
      viva: [
        "The supervision headline: poor parental supervision/monitoring; the strongest and most replicable child-rearing predictor of later offending (Cambridge–Somerville holding the prediction to age 45).",
        "The warmth-buffer trio with percentages: cold-punitive 51%, warm-punitive 21%, warm-non-punitive 23%; warmth protects even within physical punishment.",
        "McCord's broken-home quartet: 62/52/26/22; conflict criminogenic, structure irrelevant, the affectionate mother compensating.",
        "TCO defined: threat-control-override; persecutory delusions, passivity phenomena, thought insertion; perceived threat plus perceived loss of self-control; antecedes community violence after controlling for psychopathy and substance abuse.",
        "The serotonin distinction: reduced serotonin function relates to IMPULSIVITY rather than violence per se, with the SSRI-treatment implication.",
        "The medico-legal pair: intoxication no defence to basic-intent crimes, a narrow defence to specific-intent crimes only; diminished responsibility requiring abnormality of mind from disease, injury or inherent causes.",
      ],
      practical: [
        "Demonstrate the five-step assessment of the substance-using offender: life history with corroboration; substance history (onset, dose, route, weekly pattern, desired vs actual effects, effect on symptoms and behaviour, self-harm/aggression associations, treatment history); offence history with mental state before/during/after each offence from witness statements; full mental state with intelligence, personality and insight estimates; practical implications.",
        "Ask the drink-before-the-offence question: the Indian forensic screen in one line, and the highest-yield single question in the whole assessment.",
      ],
      longAnswer: [
        "Discuss the relationship between psychiatric disorder and offending: the psychosocial architecture, the disorder associations, the substance-misuse interface and the formulation discipline (the evergreen forensic essay).",
        "Assessment and management of the substance-using offender: the five steps, the HCR-20 context, the risk-management principles and the medico-legal interface.",
      ],
    },
    neetPg: {
      highYield: [
        "SCHIZOPHRENIA-VIOLENCE: 2–4× (men) / 6–8× (women) after adjustment; ~5% of violent crime attributable to severe mental illness; homicide schizophrenia 5–15% (family members more often victims than strangers); aggression in one-third of first-episode psychosis; conduct disorder premorbid in 20–40%.",
        "COMORBID MULTIPLIERS: substance use 3× (men) / 16× (women); personality disorder 4× / 18×: the comorbid group's common origin in conduct disorder.",
        "TCO: threat-control-override; persecutory delusions + passivity/thought insertion = perceived threat + perceived loss of self-control; antecedes community violence after controlling psychopathy and substance abuse.",
        "ECA LADDER (one-year violence): no disorder 2% / major mental illness 7% / substance misuse 20% / comorbid 22%; the comorbidity staircase.",
        "ALCOHOL: a key factor in at least half of interpersonal assaults (British Crime Surveys); alcohol/drug misuse contributing to two-fifths of homicides (17% severe mental illness PLUS substance misuse).",
        "NTORS: half of clients crime-free; 10% committing 76% of pre-treatment acquisitive crimes; convictions for acquisitive, drug-selling and violent crimes reduced at 5 years: treatability proven.",
        "SEQUENCE: truancy 13.8 → crime 14.5 → drugs 16.2 → hard drugs 19.9 years: crime PRECEDES drug use; the sequence argument against single-cause defences.",
        "CONCENTRATION: <6% of Cambridge families → half of convictions; 63% of boys with convicted parents convicted by 40; 4+ siblings doubling juvenile conviction risk (9% → 24%); 20% co-offending with near-age brothers; warmth buffer 51/21/23; McCord 62/52/26/22.",
        "NEUROBIOLOGY: prefrontal reductions in IMPULSIVE/AFFECTIVE (not predatory) aggression; predatory killers' blood flow resembling controls; EEG frontal slowing in >half of repetitively violent prisoners; serotonin → impulsivity; MAOA×maltreatment gene-environment interaction; callous-unemotional childhood antisocial strongly genetic, adolescent-onset environmental.",
        "PRISON: psychosis 3.7% (men) / 4% (women): 2–4× community rates (the 23,000-prisoner systematic review).",
        "LEGAL: intoxication no defence to basic-intent crimes; the narrow specific-intent exception (SO intoxicated as to be unable to form the intent, purposiveness before/during/after the clue); diminished responsibility requires abnormality of mind from disease/injury/inherent causes: dependence qualifying as disease only if the FIRST DRINK was involuntary; insanity rarely available (voluntary consumption bars automatism).",
      ],
      pyqConcepts: [
        "The TCO MCQ: the construct's components (persecutory delusions, passivity phenomena, thought insertion).",
        "The ECA ladder MCQ: 2/7/20/22.",
        "The diminished-responsibility-and-alcohol-dependence MCQ: the involuntary-first-drink principle.",
        "The supervision MCQ: the strongest and most replicable predictor (not warmth, not family structure).",
        "The serotonin MCQ: impulsivity rather than violence per se.",
      ],
    },
    inicet: {
      clinicalReasoning: [
        "A 34-year-old man with schizophrenia under community follow-up tells staff his upstairs neighbour 'is putting thoughts of killing me into my head through the fan': no violence yet; the five-step assessment uncovers regular cannabis smoked 'for the voices' and adolescent conduct problems; the reasoning: TCO as the antecedent marker (perceived threat plus perceived loss of self-control, surviving control for psychopathy and substance abuse), the comorbidity multipliers counted (the 3–16× substance tier), the perpetrator-victim-context triad operationalised (a named victim, a shared building, no established weapon access); admission for assessment, antipsychotic review with dual-diagnosis work, the family safety plan with named early-warning signs, housing mediation on discharge: the formulation written before the offence, which is the only place it can be written.",
        "A 27-year-old before the courts for burglary: theft from age 14, first substance at 16–17, heroin at 19, truancy from 13; the father convicted twice, six siblings in two rooms, parental conflict, the mother warm and overwhelmed; the reasoning: the sequence argument (crime preceding drug use, 14.5 against 16.2 years) defeating the single-cause defence; the NTORS concentration pattern (offending intensifying after the dependence); the treatability evidence (agonist maintenance plus occupational structuring, with the 5-year conviction reductions) delivered to the court in the three-task structure: the psychosocial architecture read as one biography, and addressed as one.",
      ],
    },
    fmge: {
      frequentlyTested: [
        "Poor parental supervision = the strongest, most replicable predictor of later offending.",
        "Alcohol is a key factor in at least half of interpersonal assaults.",
        "Crime precedes drug use (14.5 vs 16.2 years): dependence amplifies, never creates.",
        "About 5% of violent crime is attributable to severe mental illness.",
        "Serotonin relates to impulsivity, not violence per se.",
        "TCO = persecutory delusions + passivity/thought insertion; antecedes community violence.",
      ],
    },
    psychiatryResidency: {
      advancedPearls: [
        "The witness-statement discipline: mental state before, during and after EACH offence, corroborated; the uncorroborated self-report is the weakest evidence in the file (and amnesia, common after violence, complicates but never precludes fitness to plead).",
        "The purposiveness clue: what the accused did before, during and after the offence; the clinical evidence for or against specific intent, and the question the lawyers cannot answer without you.",
        "The identified-victim principle: family members of patients with TCO symptoms deserve specific safety planning; the named neighbour belongs in the risk plan, not just the named patient.",
        "The honest effect-size conversation: MAOA×maltreatment is statistically detectable and individually non-predictive; a prevention finding, never a test; the chapter's caveat that neurobiology suggests management strategies without deterministic prediction is the sentence to quote when someone asks for the violence gene.",
        "The prison-psychiatry service case: 3.7%/4% psychosis at 2–4× community rates in underserved Indian prisons: the formulation capacity the system lacks is the cheap layer to build.",
        "The 'at best lazy and at worst negligent' warning: the actuarial tool reduced to a checklist is the professional failure mode of this entire field; the HCR-20 is the scaffold, the formulation is the building.",
      ],
    },
  },
  clinicalCases: [
    {
      title: "The threatened neighbour",
      presentation: "A 34-year-old man with schizophrenia says his upstairs neighbour is 'putting thoughts of killing me into my head through the fan': no violence yet, a formulation already overdue.",
      initialPresentation: "A 34-year-old man under community mental health team follow-up for schizophrenia was referred after telling staff that his upstairs neighbour 'is putting thoughts of killing me into my head through the fan'. No violence had occurred, but his family were frightened by the change. The five-step assessment uncovered regular cannabis use (a joint smoked 'for the voices') and a history of adolescent conduct problems; a victim was already specified (a named neighbour, in a shared building), and no weapon access had been established.",
      history: "Schizophrenia under community follow-up; the delusion of thought insertion with persecutory content directed at a named neighbour; cannabis use self-medicated 'for the voices'; conduct problems in adolescence: the premorbid-antisocial pathway's marker; no established weapon access.",
      examination: "Mental state: persecutory delusions with thought insertion; the TCO construct's two halves (perceived threat plus perceived loss of self-control) anchored to a named person; hallucinations present; insight partial; intelligence and personality estimates recorded per the five-step structure.",
      diagnosis: "Schizophrenia with threat-control-override symptoms anteceding risk: a formulation, not a checklist: the TCO construct as antecedent marker, the comorbidity multipliers (the 3–16× substance tier, the conduct-disorder pathway) counted, and the perpetrator-victim-context triad operationalised with a named victim and a shared building.",
      management: "Admission for assessment (the acute-symptom multiplier); antipsychotic review with cannabis-focused dual-diagnosis work; an explicit safety plan with the family: early-warning signs named: the 'fan' theme returning, missed appointments; housing mediation on discharge; the named-neighbour consideration written into the risk planning.",
      outcome: "The admission held: antipsychotic review and the dual-diagnosis work begun, the 'fan' theme fading over the weeks of the admission, the family safety plan written with its early-warning signs, and discharge arranged with housing mediation; the named neighbour remaining in the risk plan. The case's teaching value standing intact: the TCO symptom anteceded; it did not yet act.",
      teachingPoints: [
        "The TCO construct in clinical form: thought insertion plus persecutory content; perceived threat plus perceived loss of self-control.",
        "The comorbidity multipliers counted, not ignored: the cannabis use (the 3–16× substance tier) and the adolescent conduct problems (the premorbid-antisocial pathway, 20–40%).",
        "The perpetrator-victim-context triad operationalised: a named victim, a shared building, no weapon access; each element of the formulation carrying its own management.",
        "Formulation, not checklist: admission for the acute-symptom multiplier, the safety plan with named early-warning signs, the housing mediation; none of it an actuarial score's output.",
      ],
    },
    {
      title: "The acquisitive decade",
      presentation: "A 27-year-old before the courts for burglary (theft since 14, first substance at 16–17, heroin at 19) and a defence asking whether 'addiction caused the offending'.",
      initialPresentation: "A 27-year-old man with an opioid-use history was seen for a court report after a burglary. His record showed theft from age 14, before any drug use (first substance at 16–17, heroin at 19), with truancy from 13. The family audit revealed the classic architecture: a father convicted twice, poor supervision, six siblings in two rooms, parental conflict, and a mother warm but overwhelmed.",
      history: "The onset sequence: truancy at 13, petty crime at 14, first substance at 16–17, heroin at 19; crime preceding drug use; offending intensified after the heroin (the NTORS concentration pattern); the family architecture: the twice-convicted father, poor supervision, six siblings in two rooms, parental conflict, the warm overwhelmed mother.",
      examination: "The five-step assessment completed: detailed life history with corroboration; substance history (onset, dose, route, weekly pattern, the effect on symptoms and behaviour); the offence history with mental state before, during and after each offence; full mental state with intelligence, personality and insight estimates; the practical implications for management and medico-legal reporting drawn.",
      diagnosis: "Substance dependence amplifying an established antisocial trajectory: crime preceded drug use; the psychosocial architecture (convicted father, poor supervision, six siblings, conflict, the warm overwhelmed mother) in one biography.",
      management: "Ongoing buprenorphine maintenance plus occupational structuring: the treatment with documented crime-reduction evidence; the family and supervision factors named as the treatable criminogenic core; the report written in the three-task structure: the psychiatric contribution to this offence in the life context, whether treatment could prevent reoffending, and protecting society.",
      outcome: "The report stated: substance dependence amplified an established antisocial trajectory rather than creating it; treatment recommended with its documented crime-reduction evidence; the family and supervision factors named as the treatable core: the sequence argument and the treatability evidence delivered to a court.",
      teachingPoints: [
        "The sequence argument against single-cause defences: crime at 14.5 years on average precedes drug use at 16.2: the biography, not the diagnosis, carries the causal weight.",
        "The psychosocial architecture in one biography: the convicted father, the poor supervision, the six siblings in two rooms, the conflict, the warm overwhelmed mother; the longitudinal science's variables as a person.",
        "The treatability evidence delivered to a court: the NTORS conviction reductions and the maintenance-plus-structuring package with documented crime-reduction evidence.",
        "The concentration pattern applied to one life: the offending intensified after the heroin; the 10%-committing-76% logic in miniature.",
      ],
    },
  ],
  clinicalPearls: [
    "Poor parental supervision is the strongest and most replicable child-rearing predictor of later offending. Cambridge–Somerville holding the prediction to age 45.",
    "The warmth buffer: 51% conviction under cold punitive mothers against 21% under warm punitive; warmth protects even within physical punishment.",
    "McCord's quartet (62/52/26/22): conflict is criminogenic, structure is not; a loving mother neutralises much of the broken home.",
    "Less than 6% of Cambridge families produced half of all convictions; 63% of boys with a convicted parent were convicted by 40. The mediating chain is supervision, not teaching (89% of convicted men at 32 opposed their children offending).",
    "Schizophrenia raises violence risk 2–4× (men) and 6–8× (women) after adjustment, and about 5% of violent crime is attributable to severe mental illness: both numbers belong in every answer.",
    "TCO (threat-control-override) antecedes community violence even after controlling for psychopathy and substance abuse: the symptom-level predictor inside the modest excess.",
    "The comorbidity multipliers dwarf the disorder effect: substance use 3–16×, personality disorder 4–18× in schizophrenia.",
    "Alcohol sits in at least half of interpersonal assaults; the ECA ladder (2/7/20/22) makes substance misuse (not mental illness) the dominant multiplier.",
    "Crime precedes drug use (14.5 vs 16.2 years): the sequence argument that defeats 'addiction caused it'; dependence amplifies an established trajectory, it does not create one.",
    "NTORS: 10% of clients committing 76% of pre-treatment acquisitive crimes, and convictions reduced at 5 years: the treatability the nihilists deny.",
    "Every violent act is perpetrator × victim × context: the drunk aggressive victim, the suspicious impulsive perpetrator, the knife available: a three-part formulation, never a single cause.",
    "The actuarial checklist as substitute for the formulation is 'at best lazy and at worst negligent'. The HCR-20 is the scaffold, the formulation is the building.",
    "Reduced serotonin function relates to impulsivity rather than violence per se: the most over-read finding in the field, read narrow.",
  ],
  highYieldSummary: [
    "The framing: most offending grows from ordinary disadvantages (supervision, discipline, conflict, poverty, peers); some grows from disorder (schizophrenia's modest violence excess, the substance-misuse multiplier, the frontal neurobiology); and the clinical task is a formulation of perpetrator, victim and context, never a checklist. Offending emerges from the interaction of social deprivation, parenting, intelligence, peers, genetics, substance misuse, victimisation, personality and mental disorder.",
    "The psychosocial architecture (the longitudinal science): poor parental supervision the strongest and most replicable predictor (to age 45); harsh physical punishment (40% vs 14% at 11) and erratic discipline; the warmth buffer (51/21/23); teenage mothers (twice the offender sons) and child abuse (half of abused or neglected boys with serious crime, alcoholism, mental illness or death before 35); the broken-home verdict. CONFLICT not structure (McCord 62/52/26/22; the affectionate mother neutralising; life-course over trauma and selection theories); criminal parents (6% of families → half of convictions; 63% of sons convicted by 40; the chain supervision, not teaching: 89% opposed); large families (4+ siblings doubling risk; 9% → 24%; 20% co-offending); the SES gradient (3% → 19%) with the 17–18 affluence paradox.",
    "The disorder layer, honestly framed: schizophrenia's violence risk 2–4× (men) / 6–8× (women) after adjustment; ~5% of violent crime attributable to severe mental illness (Northern European populations); homicide schizophrenia rates 5–15% (family members more often victims than strangers); aggression in one-third of first-episode psychosis (under 10% seriously aggressive when psychotic, 23% lesser; comorbid drug misuse 9× more aggressive after service contact); prison psychosis 3.7%/4% at 2–4× community rates. Two patterns: premorbid conduct disorder and antisocial PD (20–40%) predating psychosis, versus violence arising with the illness. TCO (perceived threat plus perceived loss of self-control) antecedes community violence after controlling psychopathy and substance abuse. Comorbidity multipliers: substance use 3–16×, personality disorder 4–18×.",
    "The neurobiology at honest effect size: prefrontal structural/functional reductions and EEG frontal slowing (>half of repetitively violent prisoners) marking IMPULSIVE/AFFECTIVE not predatory aggression (predatory killers' blood flow resembling controls); two postulated groups (acquired frontal lesion; developmental executive deficits); reduced serotonin function → impulsivity rather than violence per se; MAOA×maltreatment: statistically detectable, individually non-predictive; childhood antisocial behaviour with callous-unemotional traits strongly genetic, adolescent-onset environmentally driven; adoption continuity and the Danish paternal-violence-adoptee-schizophrenia link. The chapter's caveat: these suggest management strategies; they neither cause nor predict individual violence deterministically.",
    "The substance-misuse multiplier: violence is not an inevitable pharmacological consequence (expectancy, consumption pattern, individual response, peers and interpersonal dynamics all shape it), but alcohol is the single factor most associated with violence (at least half of interpersonal assaults; stranger and domestic violence particularly; two-fifths of homicides, 17% with severe mental illness PLUS substance misuse). The ECA ladder (one-year violence: none 2%, major mental illness 7%, substance misuse 20%, comorbid 22%); acquisitive offending as the drug-misuse signature (NTORS: 10% committing 76%); the onset sequence (13.8 → 14.5 → 16.2 → 19.9) proving crime precedes drug use; withdrawal the overlooked aggression state; 'pathological intoxication' of doubtful validity.",
    "The assessment and management: the five-step assessment (life history with corroboration; substance history; offence history with mental state before/during/after each offence from witness statements; full mental state with intelligence, personality, insight; practical implications) inside the structured HCR-20 context, with the explicit warning that actuarial reduction is 'at best lazy and at worst negligent'. Risk management: define the risk (toward whom), probability and severity, early-warning signs, change what can be changed; treat the substance misuse (NTORS 5-year conviction reductions); dual diagnosis as a central task (staff training, joint working, clinical leadership, enhanced CPA); the identified-victim principle for TCO families; the court report's three tasks.",
    "The medico-legal interface: amnesia common after violence, complicating but never precluding fitness to plead; simple intoxication no defence to basic-intent crimes, a narrow defence to specific-intent crimes (was the accused SO intoxicated as to be unable to form the intent, purposiveness before/during/after the clue); insanity rarely available (voluntary consumption bars automatism); diminished responsibility requiring abnormality of mind from disease, injury or inherent causes: intoxication no defence, alcohol dependence qualifying as disease only if the first drink was involuntary.",
    "The India layer: the 5% figure as the stigma antidote for a media environment binding mental illness to violence; alcohol as the Indian multiplier (festival violence, domestic violence, road rage) with the drink-before-the-offence screen at every forensic assessment; the supervision finding generalising to working-parent, migrant-labour and street-children realities (child guidance, school engagement, Anganwadi-linked parenting support as the policy translation); the prison-psychiatry service case (3.7%/4% psychosis at 2–4× community rates, minimal input); and the MAOA×maltreatment and warmth findings giving POCSO enforcement and parenting programmes a neurobiological as well as moral rationale.",
  ],

  /* ---- Lesson 6: Active Recall ---- */
  microQuizzes: [
    {
      id: "offending-quiz-1",
      question: "The single strongest and most replicable child-rearing predictor of later offending:",
      options: ["Parental warmth", "Poor parental supervision and monitoring", "Bedtime routines", "School fees"],
      correctIndex: 1,
      explanation: "Parents who do not know where their children are, and who let them roam unsupervised, raise the risk measured to age 45 (Cambridge–Somerville) — warmth is the buffer within discipline, not the headline predictor.",
      afterSectionId: "mechanism",
    },
    {
      id: "offending-quiz-2",
      question: "In McCord's analysis of broken homes, which group had the LOWEST later offending prevalence?",
      options: ["Broken homes without affectionate mothers (62%)", "United homes with parental conflict (52%)", "United homes without conflict (26%) — statistically tied with broken homes with affectionate mothers (22%)", "All groups equal"],
      correctIndex: 2,
      explanation: "With the affectionate-mother broken home at 22% — proving conflict, not breakage, is criminogenic, and maternal warmth compensates for paternal loss.",
      afterSectionId: "differential",
    },
    {
      id: "offending-quiz-3",
      question: "The ECA survey's one-year violence prevalences (no disorder / major mental illness / substance misuse / comorbid):",
      options: ["2% / 7% / 20% / 22%", "20% / 20% / 20% / 20%", "0% / 25% / 50% / 75%", "5% / 5% / 10% / 10%"],
      correctIndex: 0,
      explanation: "The comorbidity staircase: substance misuse (alone or with mental illness) carries the risk, with the comorbid group worst of all.",
      afterSectionId: "diagnosis",
    },
    {
      id: "offending-quiz-4",
      question: "Threat-control-override (TCO) symptoms comprise:",
      options: ["Anxiety, tremor and sweating", "Persecutory delusions, passivity phenomena and thought insertion — perceived threat plus perceived loss of self-control", "Depression and guilt", "Flashbacks and avoidance"],
      correctIndex: 1,
      explanation: "TCO antecedes community violence in schizophrenia-spectrum disorder even after controlling for psychopathy and substance abuse — the symptom-level predictor within the modest excess.",
      afterSectionId: "symptoms",
    },
    {
      id: "offending-quiz-5",
      question: "Reduced serotonin function in offenders is most closely associated with:",
      options: ["Violence directly", "Impulsivity rather than violence per se", "Intelligence", "Psychosis"],
      correctIndex: 1,
      explanation: "Serotonin relates to impulsiveness, aggression, anxiety and depression — the impulsive pathway, with SSRI-treatment implications; the finding every cohort over-reads, read narrow.",
      afterSectionId: "management",
    },
    {
      id: "offending-quiz-6",
      question: "A defendant with alcohol dependence argues diminished responsibility for a killing committed while drunk. The correct legal analysis:",
      options: ["Intoxication always supports the defence", "Intoxication itself is no defence; dependence could qualify as a disease only if the first drink of the day was involuntary", "Voluntary drinking always negates murder entirely", "Alcohol is irrelevant to the defence"],
      correctIndex: 1,
      explanation: "The defence must establish an abnormality of mind from disease, injury or inherent causes; intoxication effects are set aside, and only genuine involuntary drinking within dependence could meet the disease limb.",
      afterSectionId: "indian-practice",
    },
  ],
  activeRecallQuestions: [
    { question: "Recite the four child-rearing dimensions with the warmth-buffer conviction percentages, and state what the warmth buffer proves.", answer: "THE FOUR DIMENSIONS: supervision/monitoring; discipline; warmth/coldness; involvement. SUPERVISION is the strongest and most replicable predictor of later offending. Cambridge–Somerville following the prediction to age 45. DISCIPLINE: harsh physical punishment (Nottingham: 40% of offenders smacked or beaten at 11 against 14% of non-offenders) and erratic, inconsistent discipline. WARMTH: the buffer; 51% conviction for the sons of cold punishing mothers, 21% for warm punishing, 23% for warm non-punitive. WHAT IT PROVES: warmth protects even WITHIN physical punishment; discipline is a two-variable system (what is done, and whether it is done inside a warm relationship), and the exclamation 'he was punished!' is clinically incomplete until the warmth variable is named. The explanations: attachment (Bowlby) and social learning (inconsistent, non-contingent responses and antisocial models).", topic: "Psychosocial architecture" },
    { question: "Give McCord's broken-home quartet with its four percentages, and the conclusion plus the three theory classes.", answer: "THE QUARTET: broken home WITHOUT an affectionate mother 62%; UNITED home WITH conflict 52%; united home without conflict 26%; broken home WITH an affectionate mother 22%. THE CONCLUSION: conflict is criminogenic, structure is not; a loving mother compensates for much of the break (the broken-with-affectionate-mother group landing below the united-with-conflict group and level with the intact-low-conflict homes). THE TRAJECTORY FINDING: staying with the mother after separation equalled intact-low-conflict rates. WHO cares and HOW stably matters more than the separation itself. THE THREE THEORY CLASSES: life-course (accumulating stressors and changing caretakers, the favoured one), trauma (the separation itself), and selection (pre-existing family differences). Newcastle adds: disruption in the first 5 years doubles conviction risk; Dunedin: single-parent families overrepresented among violent offenders (28% vs 17% vs 9%); the National Survey: divorce/separation worse than death, under-5 worst, remarriage adding risk.", topic: "Psychosocial architecture" },
    { question: "State the criminal-parents concentration findings and the mediating chain, including the number that proves it is not teaching.", answer: "THE FINDINGS: less than 6% of Cambridge families produced half of all convictions; 63% of boys with a convicted parent were themselves convicted by 40; St Louis: arrested parents predicting arrested children, with similar offence types; same-sex and older-sibling influences stronger. THE MEDIATING CHAIN: POOR SUPERVISION, not the transmission of criminal skill. THE PROOF: 89% of convicted men at 32 OPPOSED their children offending, and joint parent-child convictions are vanishingly rare; criminal parents do not teach crime; they fail to supervise, and the risk factors entrap intergenerationally. THE EXPLANATIONS, ALL SUPPORTED, NONE SUFFICIENT ALONE: intergenerational risk-factor entrapment, environmental mediation, genetic mechanisms, official bias. The practical translation: the treatable variable in the convicted-parent household is supervision, which is also why the finding generalises to Indian working-parent and migrant-labour realities.", topic: "Psychosocial architecture" },
    { question: "Recite the schizophrenia-violence table with its honest framing: the multipliers, the attributable fraction, the homicide rates, the first-episode figure, and the comorbidity multipliers.", answer: "THE MULTIPLIERS: 2–4× in men and 6–8× in women, AFTER controlling socio-economic status, marital status and substance abuse (the women's multiplier is larger because their community baseline is lower). THE HONEST FRAMING: about 5% of violent crime in Northern European populations is attributable to severe mental illness; a modest excess, far outweighed by alcohol, poverty and ordinary criminality; people with mental illness far more often victims than perpetrators; and the population association never reverses into individual causation (sometimes the major determinant, sometimes coincidental, usually one interacting factor). THE HOMICIDE RATES: schizophrenia in 5–15% of homicides, with family members more often victims than strangers. THE FIRST-EPISODE FIGURE: aggression in one-third of first-episode psychosis cases (under 10% seriously aggressive when psychotic, 23% lesser aggression; comorbid drug misuse 9× more aggressive after service contact). THE COMORBID MULTIPLIERS: substance use 3× (men) / 16× (women); personality disorder 4× / 18×: dwarfing the disorder effect itself. PRISON: psychosis 3.7% of male and 4% of female prisoners, 2–4× community rates (the 23,000-prisoner systematic review).", topic: "Disorder associations" },
    { question: "Explain the TCO construct, its evidence, and its two clinical patterns of schizophrenia-related aggression.", answer: "THE CONSTRUCT: threat-control-override; persecutory delusions, passivity phenomena and thought insertion; the operational pair being PERCEIVED THREAT (the world is dangerous) plus PERCEIVED LOSS OF SELF-CONTROL (the self is overridden). THE EVIDENCE: TCO symptoms ANTECEDE community violence in schizophrenia-spectrum disorder, surviving statistical control for psychopathy and substance abuse; the symptom-level predictor inside the modest excess (the method-conflicted symptom literature converging: positive symptoms raise minor and serious violence risk; negative symptoms reduce serious violence, perhaps through living alone; serious violence associated with psychotic AND depressive symptoms, childhood conduct problems and victimisation; hallucinations, acute suicidality, acute conflict, separations, housing problems and lack of insight all raising risk). THE TWO PATTERNS: (1) the premorbid-antisocial pathway; conduct disorder (20–40%) and antisocial PD PREDATING the psychosis; (2) violence arising later WITH the illness. THE NEUROBIOLOGY of the second: better specific-executive and verbal performance with greater impulsivity (the antisocial subgroup), worse orbitofrontal performance, reduced whole-brain and hippocampal volumes, impaired orbitofrontal-amygdala connectivity, emotion-intensity-perception deficits generating conflict and missing resolution signals. THE PRACTICE: TCO symptoms plus a named victim = the identified-victim principle; specific safety planning for the family, admission for assessment when acute.", topic: "Disorder associations" },
    { question: "Summarise the neurobiology of offending at honest effect size: the frontal findings, the serotonin finding, the MAOA interaction, and the twin-study shift.", answer: "THE FRONTAL FINDINGS: orbitofrontal traumatic damage producing impulsivity and aggression; prefrontal executive test abnormalities in antisocial subjects; EEG frontal slowing in more than half of repetitively violent prisoners; reduced prefrontal size and activity in aggressive patients. WITH the crucial qualifier that predatory killers' blood flow resembles controls: the findings mark IMPULSIVE/AFFECTIVE aggression, not premeditated aggression. TWO POSTULATED GROUPS: acquired frontal lesion (impaired judgement and empathy) and developmental executive deficits (foetal/birth injury, learning disorders, ADHD, substance misuse, antisocial PD with episodic dyscontrol). SEROTONIN: reduced function relates to IMPULSIVITY rather than violence per se; the impulsive pathway, with SSRI-treatment implications; cortisol and dietary insufficiencies contributing. MAOA×MALTREATMENT: the low-activity variant with childhood maltreatment → adult antisocial behaviour, with reduced amygdala regulatory-prefrontal reactivity and limbic volume reductions; statistically detectable, individually NON-predictive: a prevention finding, never a test. THE TWIN SHIFT: childhood antisocial behaviour with callous-unemotional traits strongly genetic; adolescent-onset antisocial behaviour environmentally driven. ADOPTION: biological parent-adoptee property-offence continuity; the Danish paternal-violence-adoptee-schizophrenia link. THE CAVEAT TO CLOSE WITH: these findings suggest management strategies; they neither cause nor predict individual violence deterministically.", topic: "Neurobiology" },
    { question: "Quote the substance-offending number set: alcohol's share of assaults, the ECA ladder, the NTORS concentration, and the onset sequence with its argument.", answer: "ALCOHOL: a key factor in AT LEAST HALF of interpersonal assaults (British Crime Surveys); stranger and domestic violence particularly; alcohol and drug misuse contributing to two-fifths of homicides (17% by patients with severe mental illness PLUS substance misuse, the comorbidity doing the work). THE ECA LADDER (one-year violence): no disorder 2%; major mental illness 7%; substance misuse disorder 20%; comorbid 22%: the comorbidity staircase that makes substance misuse, not mental illness, the dominant multiplier. NTORS: half of clients crime-free; 10% committing 76% of the pre-treatment acquisitive crimes; convictions for acquisitive, drug-selling and violent crimes reduced at 5 years: treatability proven and therapeutic nihilism dispelled in both directions. THE ONSET SEQUENCE: truancy 13.8 → crime 14.5 → drugs 16.2 → hard drugs 19.9 years. CRIME PRECEDES DRUG USE. THE ARGUMENT: the sequence defeats the single-cause defence; dependence AMPLIFIES an established antisocial trajectory (including impulsive acquisitive offending, robbery and burglary), it does not create one; the law reflects this (simple intoxication no defence to basic-intent crimes; diminished responsibility requiring a qualifying abnormality beyond intoxication).", topic: "Substance misuse" },
    { question: "Walk through the five-step assessment of the substance-using offender, the HCR-20's role, and the anti-checklist warning.", answer: "THE FIVE STEPS: (1) a detailed life history with corroboration; relationships, work, social situation; (2) the substance history: onset, dose, route, weekly pattern, desired vs actual effects, effect on symptoms and behaviour, self-harm/aggression associations, treatment history; (3) a detailed offence history with the effect of substances and illness on mental state BEFORE, DURING AND AFTER each offence, corroborated from witness statements (amnesia is common and never the only source); (4) a full mental state with intelligence, personality and insight estimates; (5) the practical implications for management and medico-legal reporting. THE HCR-20: the Historical/Clinical/Risk-management 20-item structured professional judgement placing substance misuse among the significant risk factors; the SCAFFOLD that organises what the formulation must articulate. THE ANTI-CHECKLIST WARNING: actuarial-tool reduction is 'at best lazy and at worst negligent'; the psychiatrist must articulate a formulation: which factors accounted for previous offending, which bear on future offending, in this patient's biography, on the perpetrator-victim-context triad (the drunk aggressive victim frightening the suspicious impulsive perpetrator with alcohol and a knife available). RISK MANAGEMENT follows: define the risk (self-harm, relapse, violence, toward whom), probability and severity, early-warning signs, change what can be changed, treat the substance misuse, dual diagnosis as core business.", topic: "Assessment" },
  ],
  faqs: [
    { question: "Are mentally ill people dangerous?", answer: "The measured answer: a small but real excess of violence risk in schizophrenia (2–4× in men after adjustments; 6–8× in women), around 5% of violent crime attributable to severe mental illness: far outweighed by alcohol, poverty and ordinary criminality. And people with mental illness are far more often victims than perpetrators: the number every stigma conversation deserves." },
    { question: "Does schizophrenia cause his violence?", answer: "Sometimes primarily, especially with threat-control-override symptoms (persecutory delusions, passivity, thought insertion). Sometimes coincidentally: the offence pattern predates the illness (the premorbid conduct-disorder pathway, 20–40%). Usually as one factor among substances, personality, history and context. The formulation is the answer, not the diagnosis." },
    { question: "His parents split up: that explains it?", answer: "The longitudinal science says: conflict explains more than breakage; a loving mother neutralises much of the break (the broken-with-affectionate-mother group at 22%, level with intact low-conflict homes); and the post-separation arrangements (with whom, how stably) matter more than the separation itself." },
    { question: "Can addiction excuse the burglary?", answer: "No. Crime typically PRECEDES heavy drug use (14.5 against 16.2 years on average): dependence amplifies an established trajectory, it does not create one, and the law reflects this: simple intoxication is no defence to basic-intent crimes, and diminished responsibility requires a qualifying abnormality of mind beyond intoxication (dependence qualifying as disease only if the first drink was involuntary)." },
    { question: "Is there a violence gene?", answer: "No. There is a gene-environment interaction (the low-activity MAOA variant with childhood maltreatment) detectable statistically and informing prevention, but never a predictive test for any individual. The honest formulation counts biology as one layer at modest effect size, never as destiny." },
    { question: "Can treating him actually prevent offending?", answer: "Yes: treatment of substance misuse reduces convictions at 5 years (the NTORS finding: acquisitive, drug-selling and violent crime convictions all reduced); treating psychosis with its comorbidities is risk management; the offender is treatable and the mentally disordered offender is manageable. The nihilism is the myth." },
    { question: "What is the HCR-20, and do I need it?", answer: "The Historical/Clinical/Risk-management 20-item structured professional judgement instrument: a scaffold that places substance misuse among the significant risk factors and organises what the risk factors are. What it is NOT is the assessment itself: reducing the work to the score is 'at best lazy and at worst negligent'. The formulation (perpetrator, victim, context, in this patient's biography) is the deliverable; the instrument is the checklist that helps you not forget a factor while you write it." },
    { question: "What should every Indian forensic assessment ask first?", answer: "The drink-before-the-offence question. Alcohol sits behind at least half of interpersonal assaults in the Western data, and Indian alcohol-violence patterns (festival violence, domestic violence, road rage) mirror this. It is the single highest-yield question in the assessment, and the most often missed. The second question is the supervision one (who knew where he was) because that is the architecture the treatment will address." },
  ],

  /* ---- References ---- */
  references: {
    guidelines: [
      { source: "HCR-20 — Historical/Clinical/Risk-management 20-item structured professional judgement approach: the scaffold-not-substitute principle (items not reproduced)" },
      { source: "The court-report structure — the psychiatric contribution to the offence, treatment-preventability, and protection of society (the medico-legal frame)" },
    ],
    textbooks: [
      { source: "New Oxford Textbook of Psychiatry 2e, ch 11.2 + 11.3.1 + 11.3.2 — source chapter mapped; content rewritten and updated beyond it (2009)" },
    ],
    trials: [
      { source: "Gossop M et al. — NTORS (the National Treatment Outcome Research Study): the 5-year criminal-outcome follow-up" },
      { source: "Swanson JW — the Epidemiologic Catchment Area analysis of mental disorder, substance abuse and community violence (1994); the 1,410-patient schizophrenia violence study" },
    ],
    reviews: [
      { source: "Farrington DP — the Cambridge Study in Delinquent Development and the psychosocial-synthesis lineage" },
      { source: "McCord J — the Cambridge–Somerville Youth Study: supervision, warmth, broken homes, abuse outcomes" },
      { source: "Newson J & Newson E — the Nottingham punishment and family-size studies" },
      { source: "Kolvin I et al. — the Newcastle Thousand-Family Study; Silva P, Moffitt TE et al. — the Dunedin cohort" },
      { source: "Lynam D — the Pittsburgh Youth Study (low verbal IQ → school failure → delinquency)" },
      { source: "Maxfield MG & Widom CS — the Indianapolis abuse cohort; Smith CA & Thornberry TP — the Rochester Youth Development Study" },
      { source: "Robins L — the St Louis adoptee and parental-criminality studies" },
      { source: "Hodgins S, Naudts S — the neurobiological correlates of schizophrenia and violence" },
      { source: "Caspi A et al. — the MAOA×maltreatment interaction; Viding E et al. — the callous-unemotional twin findings" },
      { source: "Shaw J et al. — the National Confidential Inquiry on alcohol and drugs in homicide" },
    ],
    patientResources: [
      { source: "The formulation script — perpetrator, victim and context named in the patient's own biography; the 5% answer every stigma conversation deserves" },
      { source: "Tele-MANAS 14416 (24×7, free) — the family distress channel; the district de-addiction centre and DMHP psychiatric tier — the treatment channels" },
    ],
  },

  /* ---- Learning architecture ---- */
  learningPaths: [
    {
      mode: "patient",
      label: "Patient & Family",
      estimatedTime: "7 min",
      description: "Plain language: the honest answer to 'are the mentally ill dangerous', the alcohol and supervision facts, the warning signs, the treatability.",
      visibleSections: ["top", "quick-facts", "patient-guide", "faq"],
    },
    {
      mode: "mbbs",
      label: "MBBS Student",
      estimatedTime: "28 min",
      description: "The psychosocial architecture with its numbers, the disorder associations, the TCO construct, the medico-legal rules.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "exam-lens", "high-yield", "faq"],
    },
    {
      mode: "neetPg",
      label: "NEET PG / INICET",
      estimatedTime: "36 min",
      description: "The full number stack, the five-step assessment, the formulation discipline, both cases and the India layer.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq"],
    },
    {
      mode: "resident",
      label: "Resident / Clinician",
      estimatedTime: "44 min",
      description: "Everything: the court-report craft, the honest effect sizes, the prison-psychiatry case, provenance and references.",
      visibleSections: ["top", "quick-facts", "learning-objectives", "knowledge-graph", "mechanism", "brain", "neurotransmitters", "pathways", "timeline", "symptoms", "diagnosis", "differential", "management", "patient-guide", "indian-practice", "decision-path", "common-mistakes", "exam-lens", "clinical-case", "high-yield", "active-recall", "faq", "references"],
    },
  ],
  lessonGroups: [
    { number: 1, title: "Foundations", description: "The three-number world: ordinary disadvantage, modest disorder excess, dominant multiplier.", sectionIds: ["top", "quick-facts", "learning-objectives", "knowledge-graph"], checkpoint: "You can recite the warmth trio (51/21/23), McCord's quartet (62/52/26/22) and the schizophrenia multipliers (2–4×/6–8×) cold." },
    { number: 2, title: "Mechanism & Neuroscience", description: "The architecture's chains: supervision-to-conviction, TCO-to-violence, MAOA×maltreatment.", sectionIds: ["mechanism", "brain", "neurotransmitters", "pathways", "timeline"], checkpoint: "You can trace the three pathways and name what serotonin does and does not predict." },
    { number: 3, title: "Clinical Practice", description: "The five-step assessment, the severity ladders, the attribution differentials, the risk-management principles.", sectionIds: ["symptoms", "diagnosis", "differential", "management", "patient-guide"], checkpoint: "You can run the five steps and refuse the checklist with the 'at best lazy and at worst negligent' quote." },
    { number: 4, title: "Indian Context", description: "The 5% antidote, the alcohol screen, the prison service case, the supervision translation.", sectionIds: ["indian-practice", "decision-path", "common-mistakes"], checkpoint: "You can deliver the stigma script and the drink-before-the-offence question in one consultation." },
    { number: 5, title: "Exam Revision", description: "The exam lens, the two cases and the high-yield number stack.", sectionIds: ["exam-lens", "clinical-case", "high-yield"], checkpoint: "You can answer the offending essay cold and recite the ECA ladder and the sequence ages without hesitation." },
    { number: 6, title: "Active Recall", description: "Retrieval practice, FAQ and references.", sectionIds: ["active-recall", "faq", "references"], checkpoint: "You can answer the recall questions cold. If not, you know which lesson to revisit." },
  ],

  /* ---- Provenance (internal) ---- */
  provenance: [
    { id: "S1", source: "New Oxford Textbook of Psychiatry 2e, ch 11.2 + 11.3.1 + 11.3.2 — source chapter mapped; content rewritten and updated beyond it", sourceType: "textbook", year: "2009", dateReviewed: "2026-09-29" },
    { id: "S2", source: "Farrington DP — the Cambridge Study in Delinquent Development and the ch 11.2 synthesis: supervision, family size, criminal parents, the concentration findings", sourceType: "primary", year: "1961 onward", dateReviewed: "2026-09-29" },
    { id: "S3", source: "McCord J — the Cambridge–Somerville Youth Study: supervision, warmth, the broken-home quartet, abuse outcomes (prediction to age 45)", sourceType: "primary", year: "1939 onward", dateReviewed: "2026-09-29" },
    { id: "S4", source: "Newson J & Newson E — the Nottingham punishment and family-size studies", sourceType: "primary", year: "1960s onward", dateReviewed: "2026-09-29" },
    { id: "S5", source: "Kolvin I et al. — the Newcastle Thousand-Family Study (early disruption, teenage marriage, family size); Silva P, Moffitt TE et al. — the Dunedin cohort (single parents, caretaker changes)", sourceType: "primary", year: "1947 and 1970s birth cohorts", dateReviewed: "2026-09-29" },
    { id: "S6", source: "Lynam D et al. — the Pittsburgh Youth Study (low verbal IQ → school failure → delinquency)", sourceType: "primary", year: "1980s–90s", dateReviewed: "2026-09-29" },
    { id: "S7", source: "Maxfield MG & Widom CS — the Indianapolis abuse cohort; Smith CA & Thornberry TP — the Rochester Youth Development Study", sourceType: "primary", year: "1980s–90s cohorts", dateReviewed: "2026-09-29" },
    { id: "S8", source: "Robins L — the St Louis adoptee and parental-criminality studies", sourceType: "primary", year: "1960s–70s", dateReviewed: "2026-09-29" },
    { id: "S9", source: "Swanson JW et al. — the 1,410-patient schizophrenia violence study (symptom risk factors); the 1994 ECA analysis of mental disorder, substance abuse and community violence", sourceType: "primary", year: "1994 and 1990s", dateReviewed: "2026-09-29" },
    { id: "S10", source: "Hodgins S, Naudts S — the neurobiological correlates of schizophrenia and violence (orbitofrontal, amygdala-connectivity, volume findings)", sourceType: "review", year: "1990s–2000s", dateReviewed: "2026-09-29" },
    { id: "S11", source: "Caspi A et al. — the MAOA×maltreatment gene-environment interaction; Viding E et al. — the callous-unemotional twin findings", sourceType: "primary", year: "2002 onward", dateReviewed: "2026-09-29" },
    { id: "S12", source: "Gossop M et al. — NTORS: the 5-year criminal-outcome follow-up", sourceType: "primary", year: "2000s", dateReviewed: "2026-09-29" },
    { id: "S13", source: "Shaw J et al. — the National Confidential Inquiry on alcohol and drugs in homicide", sourceType: "primary", year: "2000s", dateReviewed: "2026-09-29" },
  ],
  evidenceMap: [
    { text: "Poor parental supervision is the strongest and most replicable child-rearing predictor of later offending, the prediction holding to age 45 (Cambridge–Somerville); harsh physical punishment (40% vs 14% at age 11, Nottingham) and erratic discipline add risk; the warmth buffer operates within punishment (51% cold-punitive vs 21% warm-punitive vs 23% warm-non-punitive conviction).", grade: "established", sources: ["S1", "S3", "S4"] },
    { text: "The broken-home verdict: conflict is criminogenic, structure is not: McCord's quartet (broken-without-affectionate-mother 62%, united-with-conflict 52%, united-no-conflict 26%, broken-with-affectionate-mother 22%); Newcastle's first-5-years doubling; Dunedin's 28/17/9 single-parent gradient; life-course theories favoured over trauma and selection; the post-disruption trajectory decisive.", grade: "established", sources: ["S1", "S3", "S5"] },
    { text: "The criminal-parents concentration: less than 6% of Cambridge families produced half of all convictions; 63% of boys with a convicted parent were convicted by 40; the mediating chain is poor supervision, not the teaching of crime (89% of convicted men at 32 opposed their children offending; joint parent-child convictions vanishingly rare).", grade: "established", sources: ["S1", "S2", "S8"] },
    { text: "Large family size: 4+ siblings doubles juvenile conviction risk (the most important independent predictor to age 32); Wadsworth's 9% → 24%; mechanisms of attention dilution, overcrowding and delinquent-sibling exposure (20% co-offending with near-age brothers).", grade: "established", sources: ["S1", "S2", "S4"] },
    { text: "Schizophrenia's violence association: 2–4× (men) and 6–8× (women) after controlling SES, marital status and substance abuse; ~5% of violent crime attributable to severe mental illness in Northern European populations; homicide schizophrenia rates 5–15% with family members more often victims than strangers; aggression in one-third of first-episode psychosis; prison psychosis 3.7% (men) / 4% (women) at 2–4× community rates.", grade: "established", sources: ["S1", "S9"] },
    { text: "Threat-control-override (TCO) symptoms: persecutory delusions, passivity phenomena, thought insertion; perceived threat plus perceived loss of self-control: antecede community violence in schizophrenia-spectrum disorder after controlling for psychopathy and substance abuse; comorbidity multipliers: substance use 3× (men) / 16× (women), personality disorder 4× / 18×, the comorbid group's common origin in conduct disorder (premorbid in 20–40%).", grade: "supported", sources: ["S1", "S9"] },
    { text: "The neurobiology of aggression at honest effect size: prefrontal structural/functional reductions and EEG frontal slowing (>half of repetitively violent prisoners) marking impulsive/affective rather than predatory aggression (predatory killers' blood flow resembling controls); reduced serotonin function relating to impulsivity rather than violence per se; MAOA×maltreatment statistically detectable and individually non-predictive; callous-unemotional childhood antisocial behaviour strongly genetic, adolescent-onset environmentally driven: the findings suggesting management strategies without deterministic individual prediction.", grade: "supported", sources: ["S1", "S10", "S11"] },
    { text: "Alcohol is a key factor in at least half of interpersonal assaults (British Crime Surveys); alcohol and drug misuse contribute to two-fifths of homicides, with 17% by patients with severe mental illness plus substance misuse: violence not an inevitable pharmacological consequence but shaped by expectancy, consumption pattern, individual response, peers and interpersonal dynamics.", grade: "established", sources: ["S1", "S13"] },
    { text: "The ECA comorbidity ladder of one-year violence: no disorder 2%, major mental illness 7%, substance misuse disorder 20%, comorbid 22%; substance misuse, not mental illness, the dominant multiplier.", grade: "established", sources: ["S1", "S9"] },
    { text: "NTORS: half of clients crime-free at entry's pre-treatment count with 10% committing 76% of the acquisitive crimes; convictions for acquisitive, drug-selling and violent crimes reduced at 5 years: treatability demonstrated and therapeutic nihilism dispelled in both directions.", grade: "established", sources: ["S1", "S12"] },
    { text: "The onset sequence: truancy 13.8, crime 14.5, drugs 16.2, hard drugs 19.9 years: crime preceding drug use: dependence amplifies an established antisocial trajectory rather than creating one; low verbal IQ mediating through school failure (Lynam's Pittsburgh chain).", grade: "established", sources: ["S1", "S2", "S6"] },
    { text: "The assessment, management and medico-legal architecture: the five-step assessment of the substance-using offender (life history with corroboration; substance history; offence history with mental state before/during/after each offence from witness statements; full mental state with intelligence, personality and insight estimates; practical implications); the HCR-20 as scaffold, never substitute ('at best lazy and at worst negligent'); dual diagnosis as a central task of modern mental health care; the court report's three tasks; amnesia complicating but never precluding fitness to plead; intoxication no defence to basic-intent crimes (a narrow specific-intent exception only), insanity rarely available, and diminished responsibility requiring abnormality of mind from disease, injury or inherent causes: alcohol dependence qualifying as disease only if the first drink was involuntary.", grade: "established", sources: ["S1"] },
    { text: "The India layer: NCRB-based data showing most violent crime without established disorder; alcohol deeply implicated in Indian interpersonal violence (festival, domestic, road-rage patterns); prison psychiatry underserved; the 5%-attributable figure as the stigma-countering number; the supervision finding's policy translation (child guidance, school engagement, Anganwadi-linked parenting support).", grade: "supported", sources: ["S1"] },
  ],
};
