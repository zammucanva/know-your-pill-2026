/* KYP Synapse Studio — more medications: the remaining psychiatric drugs of the KYP library that act at a
 * synapse (ids match the KYP drug-page slugs so each drug page can link here) plus extra neurology and
 * psychiatry drugs. Same short format as data-drugs.js. Teaching schematic; confirm against prescribing information.
 *
 * Not included on purpose: medical foods and hormones with no synapse mechanism (L-methylfolate, caprylidene,
 * triiodothyronine), disulfiram (its aversive effect is a liver-enzyme action) and fixed combinations
 * (naltrexone-bupropion, phentermine-topiramate), which are covered by their component drugs.
 */
(function (global) {
  "use strict";

  const LIB = global.KYP_DRUGS;
  const SRC = "Standard pharmacology references (e.g. Katzung & Trevor; Goodman & Gilman; Stahl's Essential Psychopharmacology). Confirm against current prescribing information.";
  function add(d) { d.evidence = d.evidence || SRC; d.aliases = d.aliases || []; d.pathways = d.pathways || []; LIB[d.id] = d; }
  function family(base, list) { list.forEach((o) => add(Object.assign({}, base, o))); }
  const R = (id, effect, note) => ({ id, effect, note: note || "" });
  const P = (id, effect) => ({ id, effect });

  /* ===================================================== Antipsychotics ===================================================== */
  const FGA = {
    class: "First-generation antipsychotic", uses: "Schizophrenia and other psychoses", species: ["dopamine"], receptors: ["D2"], action: "receptor_antagonist", actsOn: ["D2"],
    regions: [R("nacc", "down", "Mesolimbic D2 blockade, linked to the antipsychotic effect"), R("striatum", "down", "Nigrostriatal blockade, linked to movement side effects"), R("hypothalamus", "down", "Tuberoinfundibular blockade raises prolactin")],
    pathways: [P("mesolimbic", "down"), P("nigrostriatal", "down")], onset: "Agitation settles in hours; the antipsychotic effect builds over days to weeks.",
    simplifications: "D2 antagonism is drawn. Many also block H1, α1 and muscarinic receptors; not drawn.",
  };
  family(FGA, [
    { id: "cyamemazine", name: "Cyamemazine", aliases: ["Tercian"], uses: "Psychosis, severe anxiety" },
    { id: "flupenthixol", name: "Flupentixol (flupenthixol)", aliases: ["Fluanxol", "Depixol"], uses: "Schizophrenia (including depot injection), depression at low doses" },
    { id: "loxapine", name: "Loxapine", aliases: ["Loxitane", "Adasuve (inhaled)"] },
    { id: "mesoridazine", name: "Mesoridazine", aliases: ["Serentil"], extra: "Withdrawn in many countries because of heart-rhythm risk." },
    { id: "molindone", name: "Molindone", aliases: ["Moban"] },
    { id: "pipothiazine", name: "Pipotiazine (pipothiazine)", aliases: ["Piportil"], extra: "Used as a long-acting depot injection." },
    { id: "thiothixene", name: "Thiothixene", aliases: ["Navane"] },
    { id: "trifluoperazine", name: "Trifluoperazine", aliases: ["Stelazine"], uses: "Schizophrenia, anxiety" },
    { id: "zuclopenthixol", name: "Zuclopenthixol", aliases: ["Clopixol"], extra: "Used orally and as depot injections." },
  ]);
  const SGA = {
    class: "Second-generation antipsychotic", uses: "Schizophrenia", species: ["dopamine", "serotonin"], receptors: ["D2", "5-HT2A"], action: "receptor_antagonist", actsOn: ["D2", "5-HT2A"],
    regions: [R("nacc", "down", "D2 blockade in the reward/salience circuit"), R("striatum", "down", "D2 blockade (movement side effects at higher doses)"), R("pfc", "mixed", "5-HT2A blockade modulates cortical signalling")],
    pathways: [P("mesolimbic", "down"), P("mesocortical", "mixed")], onset: "Days to weeks.", simplifications: "Many also block other receptors (α1, H1, muscarinic); not drawn.",
  };
  family(SGA, [
    { id: "blonanserin", name: "Blonanserin", aliases: ["Lonasen"], extra: "Approved mainly in Japan and Korea." },
    { id: "perospirone", name: "Perospirone", aliases: ["Lullan"], extra: "Used mainly in Japan; also a 5-HT1A partial agonist." },
    { id: "sertindole", name: "Sertindole", aliases: ["Serdolect"], extra: "Heart-rhythm monitoring is required." },
    { id: "zotepine", name: "Zotepine", aliases: ["Nipolept"] },
  ]);
  family(Object.assign({}, FGA, { class: "Atypical antipsychotic (selective D2/D3 antagonist)", extra: "Selective for D2/D3; at low doses it preferentially blocks presynaptic autoreceptors, which can raise dopamine." }), [
    { id: "sulpiride", name: "Sulpiride", aliases: ["Dolmatil", "Eglonyl"], uses: "Schizophrenia, depression at low doses" },
    { id: "amisulpride", name: "Amisulpride", aliases: ["Solian"], species: ["dopamine"], receptors: ["D2", "D3"], actsOn: ["D2"], uses: "Schizophrenia; low doses for dysthymia" },
  ]);

  /* ===================================================== Benzodiazepines ===================================================== */
  family({
    class: "Benzodiazepine (GABA-A positive allosteric modulator)", species: ["gaba"], receptors: ["GABA-A"], action: "pam", actsOn: ["GABA-A"],
    regions: [R("amygdala", "up", "More inhibition in fear/anxiety circuits"), R("pfc", "up", "More cortical inhibition (sedation)"), R("thalamus", "up", "More inhibition in arousal and sensory relay"), R("hippocampus", "up", "Impairs forming new memories")],
    pathways: [P("gabaergic", "up")], onset: "Minutes to an hour; tolerance and dependence can develop with regular use.", simplifications: "It enhances the effect of GABA (it does not open the channel by itself). Speed and duration differ between drugs; not drawn.",
  }, [
    { id: "clorazepate", name: "Clorazepate", aliases: ["Tranxene"], uses: "Anxiety, adjunct for seizures, alcohol withdrawal" },
    { id: "estazolam", name: "Estazolam", aliases: ["ProSom"], uses: "Insomnia" },
    { id: "flunitrazepam", name: "Flunitrazepam", aliases: ["Rohypnol"], uses: "Severe insomnia (restricted in many countries)", extra: "Strongly sedating; misuse risk is high." },
    { id: "flurazepam", name: "Flurazepam", aliases: ["Dalmane"], uses: "Insomnia", extra: "Its active metabolite lasts for days." },
    { id: "loflazepate", name: "Ethyl loflazepate (loflazepate)", aliases: ["Victan"], uses: "Anxiety" },
    { id: "quazepam", name: "Quazepam", aliases: ["Doral"], uses: "Insomnia", extra: "Prefers GABA-A receptors containing the α1 subunit." },
  ]);
  add({
    id: "zopiclone", name: "Zopiclone", aliases: ["Imovane", "Zimovane"], class: "Z-drug (GABA-A positive allosteric modulator)", uses: "Insomnia",
    species: ["gaba"], receptors: ["GABA-A"], action: "pam", actsOn: ["GABA-A"], regions: [R("thalamus", "up", "More inhibition promoting sleep"), R("pfc", "up"), R("hypothalamus", "up", "Sleep-promoting circuits")], pathways: [P("gabaergic", "up")],
    onset: "Within 30 minutes.", simplifications: "Racemic mixture of which eszopiclone is the active S-enantiomer. A bitter taste and next-day drowsiness are common.",
  });

  /* ===================================================== Antidepressants ===================================================== */
  const TCA2 = {
    class: "Tricyclic-type antidepressant", uses: "Depression", species: ["serotonin", "norepinephrine"], receptors: ["5-HT1A", "5-HT2A"], action: "reuptake_inhibitor", actsOn: ["SERT", "NET"],
    regions: [R("pfc", "up", "More serotonin and norepinephrine signalling"), R("raphe", "mixed"), R("lc", "mixed"), R("hypothalamus", "mixed", "Sedation and appetite effects (H1 blockade not drawn)")],
    pathways: [P("serotonergic", "up"), P("noradrenergic", "up")], onset: "Benefit takes weeks.",
    simplifications: "Reuptake blockade is drawn. Blockade of histamine H1, muscarinic and α1 receptors (sedation, dry mouth, dizziness) is not drawn.",
  };
  family(TCA2, [
    { id: "amoxapine", name: "Amoxapine", aliases: ["Asendin"], extra: "A metabolite also blocks D2 receptors." },
    { id: "dothiepin", name: "Dosulepin (dothiepin)", aliases: ["Prothiaden", "Dothiepin"] },
    { id: "lofepramine", name: "Lofepramine", aliases: ["Gamanil"], extra: "Metabolised to desipramine; generally better tolerated than older tricyclics." },
    { id: "maprotiline", name: "Maprotiline", aliases: ["Ludiomil"], species: ["norepinephrine"], actsOn: ["NET"], extra: "Mainly blocks norepinephrine reuptake." },
  ]);
  add({
    id: "trimipramine", name: "Trimipramine", aliases: ["Surmontil"], class: "Tricyclic antidepressant (weak reuptake inhibitor)", uses: "Depression with insomnia",
    species: ["histamine", "serotonin"], receptors: ["H1", "5-HT2A"], action: "receptor_antagonist", actsOn: ["H1", "5-HT2A"],
    regions: [R("hypothalamus", "down", "H1 blockade: sedation"), R("pfc", "mixed", "5-HT2A blockade")], pathways: [P("histaminergic", "down")], onset: "Sedation within hours; mood benefit takes weeks.",
    simplifications: "Unlike other tricyclics it is a very weak reuptake inhibitor; receptor blockade is the main action drawn.",
  });
  add({
    id: "mianserin", name: "Mianserin", aliases: ["Tolvon"], class: "Tetracyclic antidepressant", uses: "Depression",
    species: ["norepinephrine", "serotonin", "histamine"], receptors: ["alpha2_pre", "5-HT2A", "H1"], action: "receptor_antagonist", actsOn: ["alpha2_pre", "5-HT2A", "H1"],
    regions: [R("lc", "up", "Blocking α2 autoreceptors releases the brake on norepinephrine"), R("pfc", "up"), R("hypothalamus", "down", "H1 blockade: sedation")],
    pathways: [P("noradrenergic", "up"), P("histaminergic", "down")], onset: "Sedation is quick; mood benefit takes weeks.", simplifications: "Similar in action to mirtazapine; blood monitoring is advised in older people.",
  });
  family({
    class: "MAOI (monoamine oxidase inhibitor)", uses: "Depression", species: ["serotonin", "norepinephrine"], receptors: ["5-HT1A", "5-HT2A"], action: "enzyme_inhibitor", actsOn: ["MAO"],
    regions: [R("pfc", "up", "More monoamine available"), R("raphe", "up"), R("lc", "up"), R("amygdala", "up")], pathways: [P("serotonergic", "up"), P("noradrenergic", "up")],
    onset: "Benefit takes weeks. Strict dietary and drug-interaction precautions apply for irreversible MAOIs.", simplifications: "More monoamine is stored in vesicles, so each release is larger.",
  }, [
    { id: "isocarboxazid", name: "Isocarboxazid", aliases: ["Marplan"], extra: "Irreversible, non-selective." },
    { id: "moclobemide", name: "Moclobemide", aliases: ["Aurorix", "Manerix"], extra: "Reversible and selective for MAO-A, so dietary restrictions are less strict." },
  ]);
  family({
    class: "SNRI (serotonin–norepinephrine reuptake inhibitor)", uses: "Depression", species: ["serotonin", "norepinephrine"], receptors: ["5-HT1A", "5-HT2A"], action: "reuptake_inhibitor", actsOn: ["SERT", "NET"],
    regions: [R("raphe", "mixed", "Serotonin neurons"), R("lc", "mixed", "Norepinephrine neurons"), R("pfc", "up", "More serotonin and norepinephrine signalling"), R("amygdala", "up")],
    pathways: [P("serotonergic", "up"), P("noradrenergic", "up")], onset: "Clinical benefit typically takes weeks.", simplifications: "Only transporter blockade is drawn.",
  }, [
    { id: "levomilnacipran", name: "Levomilnacipran", aliases: ["Fetzima"], extra: "Shows more norepinephrine than serotonin reuptake blockade." },
    { id: "milnacipran", name: "Milnacipran", aliases: ["Savella", "Ixel"], uses: "Fibromyalgia (US), depression (elsewhere)" },
  ]);
  add({
    id: "reboxetine", name: "Reboxetine", aliases: ["Edronax"], class: "Selective norepinephrine reuptake inhibitor", uses: "Depression",
    species: ["norepinephrine"], receptors: ["alpha_post"], action: "reuptake_inhibitor", actsOn: ["NET"],
    regions: [R("lc", "mixed", "Norepinephrine neuron cell bodies"), R("pfc", "up", "More norepinephrine signalling")], pathways: [P("noradrenergic", "up")], onset: "Benefit takes weeks.",
    simplifications: "Only the norepinephrine transporter is drawn.",
  });
  add({
    id: "agomelatine", name: "Agomelatine", aliases: ["Valdoxan"], class: "Melatonin agonist and 5-HT2C antagonist", uses: "Depression",
    species: ["melatonin"], receptors: ["MT1"], action: "receptor_agonist", actsOn: ["MT1"],
    regions: [R("hypothalamus", "down", "Melatonin receptors in the body clock help resynchronise sleep"), R("pfc", "up", "5-HT2C blockade is proposed to raise dopamine and norepinephrine there")],
    pathways: [], onset: "Weeks; liver tests are monitored.", simplifications: "The melatonin-receptor action is drawn. The 5-HT2C antagonism (not drawn) is thought to add to the antidepressant effect.",
  });
  add({
    id: "tianeptine", name: "Tianeptine", aliases: ["Stablon", "Coaxil"], class: "Atypical antidepressant (μ-opioid agonist)", uses: "Depression (not approved in the US; misuse reported)",
    species: ["opioid"], receptors: ["MOR", "MOR_pre"], action: "partial_agonist", actsOn: ["MOR", "MOR_pre"], efficacy: 0.6,
    regions: [R("nacc", "up", "μ-opioid activation drives reward"), R("pag", "up"), R("medulla", "down", "Opioid respiratory depression is possible at high doses")], pathways: [P("opioid", "mixed")],
    onset: "Within days to weeks.", simplifications: "Its antidepressant action was long attributed to enhanced serotonin reuptake; current evidence points to μ-opioid receptor activation and glutamate modulation. High doses carry opioid-type dependence risk.",
  });

  /* ===================================================== Stimulants, appetite, sleep ===================================================== */
  add({
    id: "dexamphetamine", name: "Dexamfetamine (dextroamphetamine)", aliases: ["Dexedrine", "Zenzedi"], class: "Stimulant (monoamine releasing agent)", uses: "ADHD, narcolepsy",
    species: ["dopamine", "norepinephrine"], receptors: ["D1", "D2"], action: "releaser", actsOn: ["DAT", "NET"],
    regions: [R("pfc", "up", "Attention/executive circuits"), R("striatum", "up"), R("nacc", "up", "Reward circuit"), R("lc", "up")], pathways: [P("mesocortical", "up"), P("mesolimbic", "up"), P("nigrostriatal", "up"), P("noradrenergic", "up")],
    onset: "Within an hour of an oral dose.", simplifications: "Also acts on VMAT2 and TAAR1; condensed into 'vesicles empty and the transporter runs backwards'.",
  });
  add({
    id: "pemoline", name: "Pemoline", aliases: ["Cylert"], class: "Stimulant (dopamine reuptake inhibitor)", uses: "ADHD (withdrawn in many countries because of liver failure)",
    species: ["dopamine"], receptors: ["D1", "D2"], action: "reuptake_inhibitor", actsOn: ["DAT"],
    regions: [R("pfc", "up", "Attention circuits"), R("striatum", "up")], pathways: [P("mesocortical", "up"), P("nigrostriatal", "up")], onset: "Benefit builds over days.", simplifications: "Weak dopamine reuptake blockade is drawn; liver toxicity led to its withdrawal.",
  });
  add({
    id: "lorcaserin", name: "Lorcaserin", aliases: ["Belviq"], class: "5-HT2C receptor agonist", uses: "Weight management (withdrawn in 2020)",
    species: ["serotonin"], receptors: ["5-HT2C"], action: "receptor_agonist", actsOn: ["5-HT2C"],
    regions: [R("hypothalamus", "up", "5-HT2C activation on appetite-suppressing (POMC) neurons"), R("vta", "mixed")], pathways: [P("serotonergic", "up")],
    onset: "Within days.", simplifications: "Withdrawn from the US market in 2020 after a clinical-trial signal for cancer.",
  });
  add({
    id: "flibanserin", name: "Flibanserin", aliases: ["Addyi"], class: "5-HT1A agonist / 5-HT2A antagonist", uses: "Hypoactive sexual desire disorder in premenopausal women",
    species: ["serotonin"], receptors: ["5-HT1A", "5-HT2A"], action: "receptor_agonist", actsOn: ["5-HT1A"],
    regions: [R("pfc", "mixed", "Shifts serotonin signalling and raises dopamine/norepinephrine"), R("hypothalamus", "mixed", "Sexual-desire circuits")], pathways: [P("serotonergic", "mixed")],
    onset: "Taken nightly; benefit builds over weeks. Alcohol can cause dangerous low blood pressure.", simplifications: "The 5-HT2A antagonism is described but not drawn.",
  });
  add({
    id: "tasimelteon", name: "Tasimelteon", aliases: ["Hetlioz"], class: "Melatonin receptor agonist", uses: "Non-24-hour sleep-wake disorder",
    species: ["melatonin"], receptors: ["MT1"], action: "receptor_agonist", actsOn: ["MT1"],
    regions: [R("hypothalamus", "down", "MT1/MT2 receptors in the body clock signal 'night'"), R("thalamus", "down")], pathways: [], onset: "Benefit builds over weeks.", simplifications: "The effect is on timing of sleep, not sedation.",
  });
  add({
    id: "sodium-oxybate", name: "Sodium oxybate", aliases: ["Xyrem"], class: "GABA-B / GHB receptor agonist", uses: "Narcolepsy with cataplexy",
    species: ["gaba"], receptors: ["GABA-B"], action: "receptor_agonist", actsOn: ["GABA-B"],
    regions: [R("thalamus", "down", "Promotes deep slow-wave sleep"), R("hypothalamus", "down"), R("pfc", "down")], pathways: [P("gabaergic", "up")],
    onset: "Within minutes; taken at bedtime and again in the night. A controlled substance with serious breathing and misuse risks.", simplifications: "Acts at GABA-B receptors (drawn) and GHB receptors (not drawn).",
  });

  /* ===================================================== Addiction medicines, cholinergic ===================================================== */
  add({
    id: "acamprosate", name: "Acamprosate", aliases: ["Campral"], class: "Alcohol-dependence treatment (glutamate modulator)", uses: "Maintaining abstinence in alcohol use disorder",
    species: ["glutamate"], receptors: ["NMDA", "AMPA"], action: "channel_blocker", actsOn: ["NMDA"],
    regions: [R("nacc", "down", "Calms the glutamate over-activity of early abstinence"), R("pfc", "down"), R("hippocampus", "down")], pathways: [P("glutamatergic", "down")],
    onset: "Taken for months; it does not treat withdrawal.", simplifications: "Its mechanism is not settled; dampening of NMDA-mediated hyperexcitability after alcohol stops is the best-supported idea.",
  });
  add({
    id: "nalmefene", name: "Nalmefene", aliases: ["Selincro"], class: "Opioid receptor antagonist / modulator", uses: "Reducing alcohol consumption",
    species: ["opioid"], receptors: ["MOR", "MOR_pre"], action: "receptor_antagonist", actsOn: ["MOR", "MOR_pre"],
    regions: [R("nacc", "down", "Blunts the rewarding effect of alcohol"), R("pag", "down")], pathways: [P("opioid", "down")], onset: "Taken as needed on drinking days.",
    simplifications: "Also a kappa-receptor partial agonist (not drawn).",
  });
  add({
    id: "tacrine", name: "Tacrine", aliases: ["Cognex"], class: "Acetylcholinesterase inhibitor", uses: "Alzheimer disease (withdrawn: liver toxicity)",
    species: ["acetylcholine"], receptors: ["nAChR"], action: "enzyme_inhibitor", actsOn: ["AChE"],
    regions: [R("bf", "up", "Source of cholinergic projections"), R("hippocampus", "up"), R("pfc", "up")], pathways: [P("cholinergic", "up")], onset: "Benefit was modest.", simplifications: "The first drug approved for Alzheimer disease; replaced by safer cholinesterase inhibitors.",
  });

  /* ===================================================== Further neurology and psychiatry ===================================================== */
  family({
    class: "Dopamine receptor agonist", species: ["dopamine"], receptors: ["D2", "D3"], action: "receptor_agonist", actsOn: ["D2", "D3"],
    regions: [R("striatum", "up", "Direct stimulation of dopamine receptors where dopamine is lacking"), R("sn", "mixed", "Dopamine neurons here degenerate in Parkinson disease"), R("hypothalamus", "down", "D2 stimulation lowers prolactin")],
    pathways: [P("nigrostriatal", "up")], uses: "Parkinson disease", onset: "Within an hour.", simplifications: "Many ergot-derived agonists also act on serotonin receptors; not drawn.",
  }, [
    { id: "bromocriptine", name: "Bromocriptine", aliases: ["Parlodel", "Cycloset"], uses: "Parkinson disease, high prolactin, acromegaly" },
    { id: "cabergoline", name: "Cabergoline", aliases: ["Dostinex"], uses: "High prolactin, Parkinson disease" },
    { id: "apomorphine", name: "Apomorphine", aliases: ["Apokyn"], uses: "Rescue treatment of Parkinson 'off' episodes", extra: "Injected for a rapid effect." },
    { id: "rotigotine", name: "Rotigotine", aliases: ["Neupro"], uses: "Parkinson disease, restless legs syndrome", extra: "Given as a skin patch." },
  ]);
  add({
    id: "safinamide", name: "Safinamide", aliases: ["Xadago"], class: "MAO-B inhibitor", uses: "Parkinson disease (add-on)",
    species: ["dopamine"], receptors: ["D1", "D2"], action: "enzyme_inhibitor", actsOn: ["MAO"], regions: [R("striatum", "up", "Less dopamine breakdown"), R("sn", "mixed")], pathways: [P("nigrostriatal", "up")],
    onset: "Benefit builds over weeks.", simplifications: "A reversible MAO-B inhibitor that also reduces glutamate release (not drawn).",
  });
  add({
    id: "istradefylline", name: "Istradefylline", aliases: ["Nourianz"], class: "Adenosine A2A receptor antagonist", uses: "Parkinson disease (add-on for 'off' time)",
    species: ["adenosine"], receptors: ["A2A"], action: "receptor_antagonist", actsOn: ["A2A"], regions: [R("striatum", "up", "Releases the A2A brake on movement circuits"), R("sn", "mixed")], pathways: [P("nigrostriatal", "up")],
    onset: "Benefit builds over weeks.", simplifications: "It acts like caffeine at a single receptor subtype (A2A), mainly in the striatum.",
  });
  add({
    id: "daridorexant", name: "Daridorexant", aliases: ["Quviviq"], class: "Dual orexin receptor antagonist", uses: "Insomnia",
    species: ["orexin"], receptors: ["OX2"], action: "receptor_antagonist", actsOn: ["OX2"], regions: [R("hypothalamus", "down", "Orexin signalling drives wakefulness"), R("lc", "down")], pathways: [],
    onset: "Within an hour; works by quieting the wake drive.", simplifications: "Only the receptor block is drawn.",
  });
  family({
    class: "Neuroactive steroid (GABA-A positive allosteric modulator)", species: ["gaba"], receptors: ["GABA-A"], action: "pam", actsOn: ["GABA-A"],
    regions: [R("amygdala", "up", "More inhibition in mood circuits"), R("pfc", "up"), R("thalamus", "up"), R("hippocampus", "up")], pathways: [P("gabaergic", "up")], onset: "Faster than conventional antidepressants.",
    simplifications: "These steroids act on both synaptic and extrasynaptic GABA-A receptors; the difference is not drawn.",
  }, [
    { id: "zuranolone", name: "Zuranolone", aliases: ["Zurzuvae"], uses: "Postpartum depression", extra: "A 14-day oral course; sedation is common." },
    { id: "brexanolone", name: "Brexanolone", aliases: ["Zulresso"], uses: "Postpartum depression", extra: "Given as a continuous intravenous infusion over about 60 hours." },
    { id: "ganaxolone", name: "Ganaxolone", aliases: ["Ztalmy"], uses: "Seizures in CDKL5 deficiency disorder" },
  ]);
  family({
    class: "Sodium-channel blocker (anticonvulsant)", species: ["glutamate"], receptors: ["AMPA"], action: "na_channel_blocker", actsOn: ["Nav"],
    regions: [R("temporal", "down", "Dampens seizure-prone firing"), R("hippocampus", "down"), R("motor", "down")], pathways: [P("glutamatergic", "down")], onset: "Needs steady dosing.",
    simplifications: "Use-dependent sodium-channel block is drawn. Other actions are described, not drawn.",
  }, [
    { id: "cenobamate", name: "Cenobamate", aliases: ["Xcopri"], uses: "Focal seizures", extra: "Also enhances GABA-A receptors (not drawn)." },
    { id: "eslicarbazepine", name: "Eslicarbazepine", aliases: ["Aptiom"], uses: "Focal seizures" },
    { id: "rufinamide", name: "Rufinamide", aliases: ["Banzel"], uses: "Lennox–Gastaut seizures" },
  ]);
  add({
    id: "primidone", name: "Primidone", aliases: ["Mysoline"], class: "Barbiturate-type anticonvulsant (GABA-A modulator)", uses: "Seizures, essential tremor",
    species: ["gaba"], receptors: ["GABA-A"], action: "pam", actsOn: ["GABA-A"], regions: [R("thalamus", "up"), R("pfc", "up"), R("cerebellum", "up", "Tremor control")], pathways: [P("gabaergic", "up")],
    onset: "Starts at a low dose to limit sedation.", simplifications: "Partly converted to phenobarbital, which does most of the GABA-A work.",
  });
  add({
    id: "ethosuximide", name: "Ethosuximide", aliases: ["Zarontin"], class: "T-type calcium-channel blocker", uses: "Absence seizures",
    species: ["glutamate"], receptors: ["AMPA"], action: "ca_channel_ligand", actsOn: ["VGCC"], regions: [R("thalamus", "down", "Blocks the T-type calcium channels that drive the 3-per-second spike-and-wave rhythm"), R("pfc", "down")], pathways: [P("glutamatergic", "down")],
    onset: "Within days.", simplifications: "T-type channels in thalamic neurons are the target; the generic calcium-channel animation is used.",
  });
  add({
    id: "solriamfetol", name: "Solriamfetol", aliases: ["Sunosi"], class: "Dopamine and norepinephrine reuptake inhibitor", uses: "Excessive sleepiness in narcolepsy and sleep apnoea",
    species: ["dopamine", "norepinephrine"], receptors: ["D1", "D2"], action: "reuptake_inhibitor", actsOn: ["DAT", "NET"],
    regions: [R("pfc", "up", "Alertness and attention"), R("hypothalamus", "up", "Wake-promoting circuits"), R("striatum", "up")], pathways: [P("mesocortical", "up"), P("noradrenergic", "up")],
    onset: "Within an hour.", simplifications: "Blocks reuptake only; it does not trigger release.",
  });
  add({
    id: "lofexidine", name: "Lofexidine", aliases: ["Lucemyra"], class: "α2-adrenergic agonist", uses: "Relief of opioid withdrawal symptoms",
    species: ["norepinephrine"], receptors: ["alpha2_pre"], action: "receptor_agonist", actsOn: ["alpha2_pre"], regions: [R("lc", "down", "Calms the norepinephrine surge of opioid withdrawal"), R("hypothalamus", "down")], pathways: [P("noradrenergic", "down")],
    onset: "Within an hour.", simplifications: "It treats symptoms of withdrawal; it does not treat the addiction itself.",
  });
  add({
    id: "oxybutynin", name: "Oxybutynin", aliases: ["Ditropan"], class: "Anticholinergic (muscarinic antagonist)", uses: "Overactive bladder",
    species: ["acetylcholine"], receptors: ["M1"], action: "receptor_antagonist", actsOn: ["M1"], regions: [R("hippocampus", "down", "Can impair memory"), R("pfc", "down", "Can cause confusion, especially in older people")], pathways: [P("cholinergic", "down")],
    onset: "Within an hour.", simplifications: "Its intended action is on the bladder; the brain effects shown are its central side effects.",
  });
})(window);
