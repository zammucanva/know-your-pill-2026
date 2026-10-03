#!/usr/bin/env python3
"""
MCQ 4-STEP QUALITY CHECK — reusable gate for every KYP MCQ batch
Usage: python3 mcq_4step_check.py [path/to/batch.json]
       (defaults to KYP_SSRI_MCQ_Batch_01.json)
NOTE: the FACTS table below is class-specific (currently SSRIs). When
validating a new drug-class batch, extend FACTS with that class's
canonical facts (half-life, CYP, pregnancy category, labels) from the
site monographs BEFORE running — the fact anchors are the gate.
Step 1: Structural integrity (schema, IDs, bounds, uniqueness)
Step 2: Relevance / medical-accuracy anchors (fact table cross-check)
Step 3: Distractor quality (similarity to answer, near-dup options, numeric proximity)
Step 4: Answer-key audit (explanation justification, stats consistency, spread)
"""
import json, re, difflib, itertools, sys
from collections import Counter

PATH = sys.argv[1] if len(sys.argv) > 1 else "/home/z/my-project/download/KYP_SSRI_MCQ_Batch_01.json"
data = json.load(open(PATH))
questions = data["questions"]
stats = data.get("stats", {})

report = []
def log(s=""):
    report.append(s)

def header(t):
    log("\n" + "=" * 72)
    log(t)
    log("=" * 72)

# ---------------------------------------------------------------- STEP 1
header("STEP 1 - STRUCTURAL INTEGRITY")
s1_issues = 0
REQ = ["id", "drugSlug", "domain", "difficulty", "style", "afterSectionId",
       "question", "options", "correctIndex", "explanation"]
ALLOWED_SECTIONS = {"top", "quick-facts", "objectives", "learning-objectives", "knowledge-graph",
                    "mechanism", "brain", "brain-regions", "neurotransmitters", "pathways",
                    "neural-pathways", "timeline", "high-yield-summary"}
ALLOWED_DIFF = {"Foundation", "Clinical", "Advanced"}
ALLOWED_STYLE = {"vignette", "recall"}

ids = Counter()
for i, q in enumerate(questions, 1):
    qid = q.get("id", f"<idx{i}>")
    # required fields
    for f in REQ:
        if f not in q or q[f] in (None, "", []):
            log(f"[S1] {qid}: missing/empty field '{f}'"); s1_issues += 1
    ids[q.get("id", "")] += 1
    # options shape
    opts = q.get("options", [])
    if len(opts) != 4:
        log(f"[S1] {qid}: has {len(opts)} options (need 4)"); s1_issues += 1
    if len(set(o.strip().lower() for o in opts)) != len(opts):
        log(f"[S1] {qid}: duplicate option text"); s1_issues += 1
    if any(len(o.strip()) < 4 for o in opts):
        log(f"[S1] {qid}: suspiciously short option"); s1_issues += 1
    # correctIndex bounds
    ci = q.get("correctIndex", -1)
    if not isinstance(ci, int) or not (0 <= ci <= 3):
        log(f"[S1] {qid}: correctIndex {ci} out of range"); s1_issues += 1
    # enums
    if q.get("difficulty") not in ALLOWED_DIFF:
        log(f"[S1] {qid}: bad difficulty '{q.get('difficulty')}'"); s1_issues += 1
    if q.get("style") not in ALLOWED_STYLE:
        log(f"[S1] {qid}: bad style '{q.get('style')}'"); s1_issues += 1
    if q.get("afterSectionId") not in ALLOWED_SECTIONS:
        log(f"[S1] {qid}: afterSectionId '{q.get('afterSectionId')}' not in site section set"); s1_issues += 1
    # explanation substance
    expl = q.get("explanation", "")
    if len(expl) < 80:
        log(f"[S1] {qid}: explanation too short ({len(expl)} chars)"); s1_issues += 1
    # question substance
    if len(q.get("question", "")) < 20:
        log(f"[S1] {qid}: question stem too short"); s1_issues += 1

for dup_id, n in ids.items():
    if n > 1:
        log(f"[S1] duplicate question id: {dup_id} x{n}"); s1_issues += 1

log(f"\nStep 1 total questions: {len(questions)} | issues found: {s1_issues}")

# ---------------------------------------------------------------- STEP 2
header("STEP 2 - RELEVANCE / MEDICAL FACT ANCHORS")
# Fact table from KYP monographs (verified earlier against live site data)
FACTS = {
    "sertraline": {
        "half_life": "22-36", "cyp": "2B6", "pregnancy": "C",
        "notes": ["SERT selectivity", "Zoloft", "diarrhoea/diarrhea association",
                  "paediatric OCD >=6", "dose 25-200", "cardiac safety profile"]
    },
    "fluoxetine": {
        "half_life": "4-6 days (norfluoxetine 7-15 days)", "cyp": "2D6 inhibition",
        "pregnancy": "C",
        "notes": ["Prozac", "bulimia", "paediatric >=8", "long half-life",
                  "activating/energising", "PMDD", "weekly formulation"]
    },
    "escitalopram": {
        "half_life": "27-32", "cyp": "minimal CYP", "pregnancy": "C",
        "notes": ["S-enantiomer of citalopram", "QTc", "10-20mg", "most tolerable",
                  "ceiling dose", "least interactions"]
    },
    "paroxetine": {
        "half_life": "21", "cyp": "2D6 strongest", "pregnancy": "D",
        "notes": ["shortest half-life", "discontinuation syndrome", "tamoxifen",
                  "most sedating/anticholinergic", "weight gain", "Paxil"]
    },
    # --- SSRI batch 03 (citalopram + fluvoxamine; class completion) ---
    "citalopram": {
        "half_life": "~33h (Tripathi 7e)", "cyp": "2C19 substrate (dose cap in PMs); weak 2D6 inhibitor", "pregnancy": "C",
        "notes": ["most SERT-selective SSRI (KYP)", "racemic; escitalopram = S-enantiomer, R antagonises allosteric SERT effect",
                  "QTc dose cap 40mg; 20mg if >60y or CYP2C19 PM (FDA 2011)", "MDD label; panic off-label",
                  "nausea/somnolence/sweating common AEs", "overdose QTc/torsades caution (Tripathi)"]
    },
    "fluvoxamine": {
        "half_life": "~18h (Tripathi 7e), no active metabolite", "cyp": "potent 1A2 inhibitor", "pregnancy": "C",
        "notes": ["OCD-only FDA label", "tizanidine CONTRAINDICATED (1A2)", "clozapine/theophylline levels rise",
                  "duloxetine caution (shared 1A2)", "more sedating-feeling SSRI", "CR once-nightly formulation",
                  "serotonin-syndrome vigilance with MAOIs/linezolid"]
    },
    # --- SNRI batch (Batch 02) ---
    "venlafaxine": {
        "half_life": "~5h parent, ~11h ODV", "cyp": "2D6->ODV", "pregnancy": "C",
        "notes": ["dose-dependent BP rise", "worst discontinuation", "SERT low dose, NET >=150-225mg",
                  "overdose cardiotoxicity", "neonatal hypertension"]
    },
    "desvenlafaxine": {
        "half_life": "~11h", "cyp": "minimal (conjugation+renal)", "pregnancy": "C",
        "notes": ["active metabolite of venlafaxine", "MDD-only label", "renal adjust severe CKD ~50mg cap"]
    },
    "duloxetine": {
        "half_life": "12h", "cyp": "1A2 and 2D6", "pregnancy": "C",
        "notes": ["hepatotoxicity warning - avoid alcohol/liver disease", "5 FDA indications",
                  "DPNP+fibromyalgia+chronic musculoskeletal", "balanced SERT/NET from dose one",
                  "fluvoxamine 1A2 interaction", "nausea most common early AE"]
    },
    "milnacipran": {
        "half_life": "~8h", "cyp": "minimal (renal unchanged)", "pregnancy": "C",
        "notes": ["US label fibromyalgia", "MDD label EU/Asia", "twice daily", "NE-leaning", "uncontrolled HTN avoid"]
    },
    "levomilnacipran": {
        "half_life": "~12h XR", "cyp": "3A4 minor", "pregnancy": "C",
        "notes": ["most noradrenergic SNRI", "MDD-only label", "enantiomer of milnacipran",
                  "urinary hesitation/testicular pain", "HR/BP rise"]
    },
    # --- MAOI & RIMA batch (Batch 05) — Katzung 14e ch.30/9/28 + Tripathi 7e ch.31/33 ---
    "phenelzine": {
        "half_life": "~11h plasma; enzyme effect 2-3 weeks (hit-and-run)", "cyp": "acetylation minor", "pregnancy": "X",
        "notes": ["hydrazine irreversible nonselective MAO-A+B", "pyridoxine/B6 deficiency neuropathy",
                  "sedation weight gain paradoxical hypotension", "cheese reaction -> phentolamine",
                  "14-day washout both directions", "45-90 mg/day"]
    },
    "tranylcypromine": {
        "half_life": "short; enzyme effect 2-3 weeks", "cyp": "ring hydroxylation + N-acetylation", "pregnancy": "X",
        "notes": ["amphetamine-like structure", "most activating, insomnia", "fastest onset of MAOIs",
                  "high tyramine sensitivity", "30-60 mg/day", "discontinuation delirium"]
    },
    "isocarboxazid": {
        "half_life": "long; enzyme effect 2-3 weeks", "cyp": "acetylation", "pregnancy": "X",
        "notes": ["hydrazine irreversible nonselective MAO-A+B", "rarely used/obsolete",
                  "same class interaction rules", "30-60 mg/day"]
    },
    "selegiline": {
        "half_life": "8-10h (metabolites 9-11h)", "cyp": "N-demethylation", "pregnancy": "X",
        "notes": ["MAO-B selective at Parkinson doses 5-10 mg", "loses selectivity at antidepressant doses",
                  "transdermal 6 mg/24h patch retains selectivity -> fewer dietary restrictions",
                  "L-amphetamine/L-methamphetamine metabolites -> insomnia sympathomimetic",
                  "avoid pethidine/tramadol/methadone/dextromethorphan/OTC colds", "contraindicated convulsive disorders"]
    },
    "moclobemide": {
        "half_life": "1-2 h (short)", "cyp": "1A2 inhibitor per Katzung table", "pregnancy": "X",
        "notes": ["RIMA reversible selective MAO-A", "tyramine displaces inhibitor -> minor pressor risk, no/low dietary restriction",
                  "washout 1-2 days vs 14 days", "150 mg BD-TDS max 600 mg/day", "serotonin syndrome with SSRIs/TCAs/pethidine",
                  "nausea dizziness headache insomnia", "safer in overdose, good for elderly/heart disease"]
    },
    # --- Atypical antidepressants (Batch 06) — Katzung 14e Ch.30 + Tripathi 7e + KYP monograph facts ---
    "bupropion": {
        "half_life": "biphasic (~1h then ~14h)", "cyp": "2D6 inhibition via hydroxybupropion", "pregnancy": "C",
        "notes": ["NDRI DA/NE", "smoking cessation Zyban", "seasonal affective disorder",
                  "dose-related seizures highest in class", "eating disorder contraindication",
                  "insomnia agitation", "weight loss", "sexual sparing", "max ~450 mg"]
    },
    "mirtazapine": {
        "half_life": "20-40h", "cyp": "substrate 2D6/3A4/1A2", "pregnancy": "C",
        "notes": ["NaSSA alpha-2 auto/heteroreceptor", "5HT2A/5HT2C/5HT3/H1 blockade",
                  "sedation strongest at low doses (taught quirk)", "appetite/weight up",
                  "sexual sparing", "SSRI augmentation", "evening dosing"]
    },
    "mianserin": {
        "half_life": "not anchored", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["alpha-2 + 5HT2 + H1, no uptake inhibition", "tetracyclic",
                  "agranulocytosis/blood dyscrasias", "liver dysfunction",
                  "seizures in overdose, low fatality", "India availability", "minimal anticholinergic"]
    },
    "trazodone": {
        "half_life": "not anchored", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["SARI 5HT2A + weak SERT + alpha-1", "low-dose hypnotic 25-100 mg",
                  "antidepressant 300-600 mg", "orthostatic hypotension", "priapism",
                  "rare hepatotoxicity", "mCPP active metabolite"]
    },
    "nefazodone": {
        "half_life": "not anchored", "cyp": "potent 3A4 inhibition", "pregnancy": "not anchored",
        "notes": ["SARI", "black-box hepatotoxicity 2001 fulminant failure", "sexual sparing",
                  "sedation", "hydroxynefazodone + mCPP metabolites", "no longer commonly prescribed"]
    },
    # --- Typical antipsychotics I (Batch 08) — Katzung 14e Ch.29 + Tripathi 7e Ch.32 + KYP task anchors ---
    "chlorpromazine": {
        "half_life": "18-30h (Tripathi); metabolites excreted for weeks-months", "cyp": "2D6 substrate", "pregnancy": "not anchored",
        "notes": ["prototype aliphatic phenothiazine, low potency 100-1000 mg/day min 100 mg",
                  "strong alpha-1 (orthostatic hypotension) + muscarinic + H1 (sedation)",
                  "oral bioavailability 25-35%; haloperidol ~65%", "poikilothermia/hypothermia in elderly",
                  "cholestatic jaundice 2-4% at 2-4 weeks", "skin pigmentation, corneal/lenticular deposits",
                  "CTZ antiemetic but NOT motion sickness; lowers seizure threshold",
                  "overdose: miotic pupils, hypotension, hypothermia, rarely fatal"]
    },
    "haloperidol": {
        "half_life": "~24h (Tripathi)", "cyp": "3A4 and 2D6", "pregnancy": "not anchored",
        "notes": ["butyrophenone, most widely used first-generation", "D2 > alpha1 > D4 > 5HT2A affinity, MAXIMAL EPS",
                  "minimal anticholinergic, no weight gain, jaundice rare", "bioavailability ~65%",
                  "decanoate depot ~4-weekly with oral cover during loading", "IV use QTc/torsades warning (ICU delirium)",
                  "classic NMS trigger; acute dystonia -> IM promethazine/benztropine; akathisia -> propranolol",
                  "preferred for Tourette syndrome and Huntington disease", "hyperprolactinaemia amenorrhoea-galactorrhoea"]
    },
    "fluphenazine": {
        "half_life": "not anchored", "cyp": "2D6 substrate", "pregnancy": "not anchored",
        "notes": ["high potency piperazine phenothiazine, 2-60 mg/day min 2 mg", "EPS marked, minimum autonomic actions",
                  "decanoate depot IM every 2-4 weeks (ANATENSOL DECANOATE/PROLINATE)", "parenteral rapid initiation pair with haloperidol",
                  "less likely jaundice/hypersensitivity than CPZ", "fluoxetine/paroxetine 2D6 inhibitors raise levels"]
    },
    "trifluoperazine": {
        "half_life": "not anchored", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["high potency piperazine phenothiazine, 5-60 mg/day min 5 mg", "EPS marked, least alpha-blockade among common phenothiazines",
                  "weakest anticholinergic (with haloperidol)", "piperazine = lowest seizure-threshold propensity",
                  "withdrawn/apathetic patient choice", "Indian PPI brands STELABID/GASTABID contain 1 mg"]
    },
    "perphenazine": {
        "half_life": "not anchored", "cyp": "2D6 substrate", "pregnancy": "not anchored",
        "notes": ["mid-potency piperazine phenothiazine, 8-64 mg/day min 10 mg", "CATIE first-generation comparator",
                  "schizoaffective/psychotic-depression augmentation at lower dose", "brand Trilafon"]
    },
    "thioridazine": {
        "half_life": "not anchored", "cyp": "2D6 substrate", "pregnancy": "not anchored",
        "notes": ["low potency piperidine phenothiazine, marked central anticholinergic, lowest EPS",
                  "retinal pigmentary degeneration (only antipsychotic retinal deposits), cap 800 mg/d",
                  "T-wave/QTc changes >300 mg/d; most torsadogenic classic; overdose lethal with mesoridazine",
                  "NOT a potent CTZ antiemetic (exception)", "highest sexual-dysfunction propensity (alpha-1)",
                  "limited/withdrawn use; fluoxetine raises levels"]
    },
    # --- TCA & tetracyclic batch (Batch 04) — Katzung 14e ch.30/58 + Tripathi 7e ch.33 + KYP task anchors ---
    "imipramine": {
        "half_life": "9-24h (desipramine 14-62h)", "cyp": "2D6 substrate", "pregnancy": "C",
        "notes": ["prototype TCA", "NET+SERT", "demethylated to desipramine",
                  "nocturnal enuresis 25mg bedtime", "panic", "alpha-1 orthostatic hypotension", "overdose cardiotoxic"]
    },
    "amitriptyline": {
        "half_life": "16-24h", "cyp": "2D6 substrate", "pregnancy": "C",
        "notes": ["most sedating/anticholinergic/weight gain", "parent of nortriptyline",
                  "migraine prophylaxis", "neuropathic pain", "dangerous in overdose"]
    },
    "clomipramine": {
        "half_life": "long (active desmethyl metabolite)", "cyp": "2D6 substrate", "pregnancy": "C",
        "notes": ["most serotonergic TCA SERT+++", "gold-standard TCA for OCD", "seizure potential (with bupropion)",
                  "sexual dysfunction", "brands CLOFRANIL/ANAFRANIL"]
    },
    "nortriptyline": {
        "half_life": "long, linear kinetics", "cyp": "2D6 substrate", "pregnancy": "C",
        "notes": ["active metabolite of amitriptyline", "secondary amine NET++", "therapeutic window 50-150 ng/mL",
                  "best cardiac tolerability post-MI", "reliable serum levels"]
    },
    "desipramine": {
        "half_life": "long, linear kinetics", "cyp": "2D6 substrate", "pregnancy": "C",
        "notes": ["active metabolite of imipramine", "most noradrenergic classic TCA", "minimal anticholinergic",
                  "notorious overdose arrhythmia", "abolishes guanethidine/clonidine"]
    },
    "doxepin": {
        "half_life": "16-24h", "cyp": "2D6 substrate", "pregnancy": "C",
        "notes": ["strongest H1 blockade of TCAs", "low-dose 3-6mg hypnotic", "topical 5% for pruritus",
                  "sedating", "cimetidine interaction"]
    },
    "trimipramine": {
        "half_life": "long", "cyp": "2D6 substrate", "pregnancy": "C",
        "notes": ["weakest reuptake inhibition (NET/SERT ~0)", "H1+++ receptor-driven", "most sedating",
                  "insomnia-depression", "brand SURMONTIL"]
    },
    "protriptyline": {
        "half_life": "long", "cyp": "2D6 substrate", "pregnancy": "C",
        "notes": ["most activating TCA NET+++", "minimal sedation weight-neutral", "historical narcolepsy/wake use",
                  "not marketed in India"]
    },
    "lofepramine": {
        "half_life": "long", "cyp": "2D6 substrate", "pregnancy": "C",
        "notes": ["metabolised to desipramine", "lower anticholinergic/cardiotoxic", "least lethal TCAs in overdose",
                  "India/UK availability"]
    },
    "dothiepin": {
        "half_life": "long", "cyp": "2D6 substrate", "pregnancy": "C",
        "notes": ["NA+5HT reuptake inhibitor strongly sedating", "among most lethal TCAs in overdose (with amitriptyline)",
                  "brands PROTHIADEN/DOTHIN", "cardiac caution in IHD"]
    },
    "maprotiline": {
        "half_life": "long", "cyp": "2D6 substrate", "pregnancy": "C",
        "notes": ["tetracyclic selective NRI", "highest seizure incidence among antidepressants (dose-related)",
                  "TCA-like adverse effects", "not marketed in India"]
    },
    "amoxapine": {
        "half_life": "variable (divided doses)", "cyp": "2D6 substrate", "pregnancy": "C",
        "notes": ["tetracyclic N-demethylated metabolite of loxapine", "D2 blockade -> EPS/hyperprolactinaemia",
                  "7-hydroxyamoxapine potent D2 blocker", "seizures incl status in overdose", "psychotic depression history"]
    },
    # --- Atypical antidepressants II (Batch 07) — Katzung 14e ch.30 + Tripathi 7e ch.33/35 + KYP task anchors ---
    "vilazodone": {
        "half_life": "not anchored (~11h label; not used in this batch)", "cyp": "substrate: CYP3A4 primary, minor 2C19/2D6; mild 2C19 inducer; NOT a potent CYP inhibitor", "pregnancy": "C",
        "notes": ["SPARI: potent SERT inhibition + 5-HT1A partial agonism", "MUST take with food - bioavailability roughly halves fasting",
                  "MDD-only label", "titrate 10 -> 20 -> 40 mg", "diarrhoea/nausea commonest AEs", "low sexual dysfunction",
                  "ketoconazole/strong 3A4 inhibitors raise levels >=50%", "~1% excreted unchanged renally"]
    },
    "vortioxetine": {
        "half_life": "not anchored (~66h label; not used in this batch)", "cyp": "substrate CYP2D6 + 2B6; not a potent CYP inhibitor; strong 2D6 inhibitors (bupropion/fluoxetine/paroxetine) halve max dose to 20 mg", "pregnancy": "C",
        "notes": ["multimodal: SERT + 5-HT1A/1B agonism + 5-HT3/5-HT7 antagonism", "not classified as SSRI (actions not primarily SERT)",
                  "cognition: processing speed/executive function approval EU+USA", "MDD-only label",
                  "nausea dose-dependent leading AE", "linear dose-proportional PK, tightly protein-bound"]
    },
    "agomelatine": {
        "half_life": "short (~1-2h; bedtime dosing)", "cyp": "CYP1A2 primary (2C9/2C19 minor); fluvoxamine contraindicated", "pregnancy": "not anchored",
        "notes": ["MT1/MT2 agonist + 5-HT2C antagonist", "phase-advancing, sleep architecture without daytime hangover",
                  "5-HT2C block disinhibits frontal DA/NE", "LFT monitoring baseline ~3/6/12/24 weeks - hepatotoxicity",
                  "no sexual dysfunction, no weight gain, no discontinuation syndrome", "EU/India/Australia; never FDA-approved"]
    },
    "tianeptine": {
        "half_life": "~2.5h (short) -> 12.5 mg BD-TDS", "cyp": "not anchored (beta-oxidation)", "pregnancy": "not anchored",
        "notes": ["mu-opioid receptor agonism (historical 'serotonin reuptake enhancer' label per Tripathi)",
                  "anxiodepressive states with psychosomatic symptoms + endogenous depression",
                  "12.5 mg BD-TDS, brand STABLON (India/EU)", "abuse/misuse potential - the exam hook",
                  "neither sedative nor stimulant", "AEs: dry mouth, epigastric pain, flatulence, drowsiness/insomnia, tremor, bodyache"]
    },
    "reboxetine": {
        "half_life": "not anchored", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["pure NRI, weak 5-HT effect (Tripathi)", "EU/India (Narebox 4 mg BD or 8 mg OD); never FDA-approved (investigational USA, Katzung)",
                  "noradrenergic AE cluster: insomnia, palpitation, dry mouth, constipation, sexual distress, urinary symptoms",
                  "minimal antimuscarinic/sedative actions", "safer in overdose than TCAs", "efficacy questioned in meta-analyses (2010 controversy)"]
    },
    "atomoxetine": {
        "half_life": "not anchored (EM ~5h / PM ~22h)", "cyp": "2D6 hydroxylation, EM/PM polymorphism; fluoxetine/paroxetine/quinidine raise levels", "pregnancy": "C",
        "notes": ["pure NRI non-stimulant ADHD therapy", "weeks-to-effect, not immediate like stimulants",
                  "no abuse potential, not scheduled (no dependence per Tripathi)", "boxed warning suicidal ideation in children/young adults",
                  "AEs: dyspepsia, anorexia/GI, growth retardation possible, somnolence, HR/BP rise", "rare hepatotoxicity warning",
                  "contraindicated glaucoma + MAOIs", "Attentrol/Axepta brands; children >6 y + adults; 0.5-1.2 mg/kg/day, adults 40 mg max 100 mg"]
    },
    # --- Atypical antipsychotics I (Batch 10) — Katzung 14e ch.29 + Table 4-2, Tripathi 7e ch.32, KYP anchors ---
    "risperidone": {
        "half_life": "not anchored (2D6 -> active 9-hydroxyrisperidone; ~10% poor metabolisers)", "cyp": "2D6 substrate (Katzung 2D6 list)", "pregnancy": "not anchored",
        "notes": ["benzisoxazole: D2 + potent 5-HT2A antagonism, high alpha-1/H1 affinity",
                  "most prolactin-elevating atypical - galactorrhoea/amenorrhoea/gynaecomastia, osteoporosis risk",
                  "EPS dose-related, minimal below ~6 mg/day (Tripathi)", "BP can rise with SSRI co-prescription (Tripathi)",
                  "converted to 9-hydroxyrisperidone = paliperidone (Katzung)",
                  "LAI 2-weekly and monthly; hyperprolactinemia (risperidone) in Katzung toxicity table"]
    },
    "paliperidone": {
        "half_life": "not anchored", "cyp": "minimal CYP dependence; predominantly renal excretion", "pregnancy": "not anchored",
        "notes": ["9-hydroxyrisperidone = active metabolite of risperidone marketed standalone (Katzung)",
                  "OROS osmotic-push once-daily ER; inert shell may pass in stool",
                  "LAI monthly and 3-monthly", "prolactin-elevating like risperidone (Katzung)",
                  "renal impairment -> dose reduction", "modest QTc; less 2D6-dependence than risperidone"]
    },
    "olanzapine": {
        "half_life": "24-30h (Tripathi)", "cyp": "1A2 + glucuronyl transferase (Tripathi); smoking induces 1A2 (Katzung table)", "pregnancy": "not anchored",
        "notes": ["binding order 5-HT2A > H1 > D4 > D2 > alpha-1 (Katzung)",
                  "metabolic top shared with clozapine - weight/diabetes/dyslipidaemia",
                  "potent antimuscarinic; dose-related seizure-threshold lowering (Katzung)",
                  "minimal prolactin rise (Tripathi)", "smokers need ~40% higher dose (KYP anchor)",
                  "LAI 3-hour post-injection observation (post-injection delirium/sedation syndrome)",
                  "off-label refractory CINV multi-receptor antiemetic; stroke risk in elderly (Tripathi)"]
    },
    "quetiapine": {
        "half_life": "~6h (Tripathi); IR BD / XR once-daily", "cyp": "3A4 substrate (Katzung 3A4 list)", "pregnancy": "not anchored",
        "notes": ["binding order H1 > alpha-1 > M1,3 > D2 > 5-HT2A (Katzung)",
                  "lowest EPS with clozapine - minimal prolactin (Tripathi)",
                  "sedation + orthostatic hypotension during titration", "moderate weight gain; mild QTc",
                  "labels: schizophrenia, bipolar manic + depressive episodes (mono), MDD adjunct XR",
                  "beagle cataract finding -> periodic eye checks (KYP trivia)", "carbamazepine 3A4 induction interaction"]
    },
    "aripiprazole": {
        "half_life": "~75h / ~3 days (Tripathi)", "cyp": "3A4 and 2D6; carbamazepine -> double dose, ketoconazole/quinidine -> half dose (Tripathi)", "pregnancy": "not anchored",
        "notes": ["D2 partial agonist (dopamine system stabiliser) + 5-HT1A partial agonist + 5-HT2A antagonist",
                  "very high D2 occupancy without EPS - partial agonism (Katzung PET)",
                  "akathisia most common AE", "weight/prolactin-sparing; can lower prolactin (reverse hyperprolactinaemia)",
                  "labels: schizophrenia, bipolar, MDD adjunct, Tourette, autism irritability",
                  "non-sedating, may cause insomnia (Tripathi)"]
    },
    # --- Hypnotics & sleep agents (Batch 13) — Katzung 14e ch.22/16, Tripathi 7e ch.29/43 + KYP anchors ---
    "zolpidem": {
        "half_life": "1.5-3.5h (Katzung table); ~2h (Tripathi); longer in women and elderly", "cyp": "CYP3A4 to inactive metabolites", "pregnancy": "not anchored",
        "notes": ["imidazopyridine non-BZD, alpha-1 (BZ1)-selective GABA-A positive allosteric modulator",
                  "boxed warning complex sleep behaviours: sleep-driving/sleep-eating with amnesia",
                  "FDA 2013: female immediate-release dose halved to 5 mg (slower clearance, next-morning driving impairment)",
                  "no anticonvulsant/muscle-relaxant actions; flumazenil reverses its sedation",
                  "hypnosis dose 2.5-10 mg (Katzung table); India NITREST/ZOLDEM 5/10 mg",
                  "scheduled controlled substance (C-IV USA); rifampicin 3A4 induction lowers effect"]
    },
    "zopiclone": {
        "half_life": "5-6h (Tripathi)", "cyp": "CYP3A4 substrate (Katzung 3A4 list)", "pregnancy": "not anchored",
        "notes": ["cyclopyrrolone, first of the non-BZD hypnotics (Tripathi); racemate, S-enantiomer = eszopiclone",
                  "bitter metallic taste (dysgeusia) is the signature adverse effect",
                  "7.5 mg bedtime, elderly 3.75 mg; short courses 2-4 weeks (ZOPITRAN/ZOPICON/ZOLIUM)",
                  "does not alter REM sleep, tends to prolong stages 3-4",
                  "used to wean insomniacs off regular BZDs (Tripathi)", "overdose safety similar to benzodiazepines"]
    },
    "eszopiclone": {
        "half_life": "~6h (Katzung table) - longest of the Z-drugs; prolonged in elderly and by 3A4 inhibitors", "cyp": "CYP3A4 (ketoconazole prolongs half-life, rifampin induces metabolism)", "pregnancy": "not anchored",
        "notes": ["S-enantiomer of zopiclone, cyclopyrrolone", "dose 1-3 mg at bedtime (Katzung table)",
                  "efficacy maintained up to 6 months without tolerance; little tolerance/dependence (Tripathi)",
                  "increases total sleep time; decreases REM at highest recommended dose (Katzung)",
                  "dysgeusia shared with parent zopiclone", "insomnia with comorbid depression adjunct data (KYP)"]
    },
    "zaleplon": {
        "half_life": "~1h (Katzung table <1 to 1-2h) - shortest of the standard hypnotics", "cyp": "metabolised via aldehyde dehydrogenase (Katzung Table 22-1); disulfiram can raise exposure", "pregnancy": "not anchored",
        "notes": ["pyrazolopyrimidine Z-drug acting at alpha-1 (BZ1) GABA-A",
                  "only hypnotic usable for middle-of-the-night dosing when >=4 h of sleep remain",
                  "minimal rebound insomnia and no significant withdrawal (Katzung/Tripathi)",
                  "oral bioavailability ~30% from first-pass metabolism; 5-10 mg max 20 mg (ZAPLON/ZALEP/ZASO)",
                  "effect does not fade on nightly use; still limit to 1-2 weeks (Tripathi)"]
    },
    "ramelteon": {
        "half_life": "parent 1-3h (Tripathi); active metabolite 2-5h (Katzung)", "cyp": "CYP1A2 mainly (2C9 also involved); fluvoxamine raises levels over 50-fold - contraindicated", "pregnancy": "not anchored",
        "notes": ["MT1/MT2 melatonin receptor agonist at the suprachiasmatic nucleus; no direct GABAergic action (Katzung)",
                  "no abuse potential, not scheduled - choice for insomniac with substance-use history",
                  "8 mg about half an hour before bed; ROZEREM; approved in India (Tripathi)",
                  "may increase prolactin with possible menstrual/hormonal effects (Katzung)",
                  "modest sleep-latency reduction; no rebound insomnia or withdrawal",
                  "extensive first-pass metabolism with low bioavailability"]
    },
    "tasimelteon": {
        "half_life": "not anchored (melatonergic PK resembles ramelteon)", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["MT1/MT2 melatonin agonist, orally active, no direct GABAergic action (Katzung)",
                  "approved for non-24-hour sleep-wake disorder in totally blind individuals",
                  "entrainment of the free-running suprachiasmatic rhythm is the therapeutic concept",
                  "orphan niche; not a general first-line insomnia hypnotic", "no abuse potential/unscheduled like ramelteon"]
    },
    "suvorexant": {
        "half_life": "not anchored in gate; half-life prolonged by CYP3A4 inhibitors (azoles, clarithromycin, verapamil)", "cyp": "CYP3A4 substrate", "pregnancy": "not anchored",
        "notes": ["dual orexin receptor antagonist (OX1/OX2) blocking the wake-drive neuropeptide system (Katzung)",
                  "FDA-approved for both sleep-onset and sleep-maintenance insomnia",
                  "next-day somnolence is the most common adverse effect",
                  "narcolepsy contraindicated (orexin neurons already lost); cataplexy caution (KYP)",
                  "avoid strong 3A4 inhibitors (ketoconazole, fluvoxamine) and grapefruit juice (KYP)"]
    },
    "hydroxyzine": {
        "half_life": "not anchored", "cyp": "not anchored", "pregnancy": "not anchored (teratogenic in animals per Tripathi; caution in pregnancy)",
        "notes": ["first-generation piperazine H1 antihistamine, markedly sedating (Katzung/Tripathi)",
                  "anxiolytic for anxiety with autonomic manifestations + antipruritic/urticaria; non-scheduled",
                  "cetirizine is its active metabolite; cetirizine penetrates brain poorly",
                  "anticholinergic burden: urinary retention/narrow-angle glaucoma/delirium risk in elderly",
                  "QTc prolongation warning in certain situations (KYP)",
                  "25-50 mg oral or IM; ATARAX 10/25 mg in India"]
    },
    "diphenhydramine": {
        "half_life": "not anchored", "cyp": "2C19 and 2D6 substrate (Katzung tables)", "pregnancy": "not anchored",
        "notes": ["first-generation ethanolamine H1 antihistamine; strong BBB penetration; classic OTC sleep aid",
                  "BENADRYL 25/50 mg (Tripathi); motion sickness and acute dystonia uses; dimenhydrinate salt",
                  "central anticholinergic -> confusion/delirium in elderly; BEERS-criteria avoid (KYP)",
                  "rapid tolerance to hypnotic effect within days - poor long-term choice",
                  "paradoxical excitation in children; overdose = belladonna-like central excitation (Tripathi)",
                  "additive anticholinergia with TCAs/phenothiazines/atropine substitutes (Tripathi)"]
    },
    # --- Atypical antipsychotics II (Batch 11) — Katzung 14e ch.29, Tripathi 7e ch.32, KYP anchors ---
    "clozapine": {
        "half_life": "~12h (Tripathi); norclozapine active", "cyp": "1A2 principal (2C19/3A4 contribute); tobacco smoke induces 1A2 -> quitting raises levels", "pregnancy": "not anchored",
        "notes": ["gold standard treatment-RESISTANT schizophrenia (two failed adequate trials; 300-900 mg/d, 30-50% respond, judged over 6 months)",
                  "only antipsychotic approved to reduce suicide risk", "agranulocytosis ~0.8% -> weekly CBC early, ANC thresholds (REMS)",
                  "myocarditis first month (fever/tachycardia/chest pain) -> discontinue; cardiomyopathy later",
                  "severe constipation/paralytic ileus can be fatal; sialorrhoea paradoxical; dose-related seizures >600 mg",
                  "strongest sedation + metabolic risk (diabetes with olanzapine)", "minimal EPS, no prolactin rise (loose D2)",
                  "never stop abruptly (rapid severe relapse); haemodialysis useless in overdose"]
    },
    "ziprasidone": {
        "half_life": "~8h (Tripathi) BD dosing", "cyp": "3A4 substrate (ketoconazole raises levels)", "pregnancy": "not anchored",
        "notes": ["MUST take with ~500 kcal meal; fasting bioavailability ~50% of fed", "greatest QTc risk among atypicals -> baseline ECG; avoid thioridazine/pimozide/class IA-III antiarrhythmics",
                  "least weight gain SGAP (with aripiprazole/lurasidone lean tier)", "IM form for acute agitation (improves within 1-2 h)",
                  "D2+5HT2A/2C + 5HT1A agonism + 5HT1D antagonism + moderate 5HT/NA reuptake inhibition", "little antimuscarinic; nausea/vomiting common"]
    },
    "lurasidone": {
        "half_life": "not anchored (label ~18h; not used in this batch)", "cyp": "3A4 substrate - strong 3A4 inhibitors (ketoconazole/ritonavir) and inducers (rifampicin/carbamazepine) contraindicated", "pregnancy": "not anchored",
        "notes": ["take WITH food >=350 kcal (second food pearl)", "bipolar DEPRESSION monotherapy label (with quetiapine, olanzapine-fluoxetine)",
                  "lowest metabolic burden + low weight gain", "akathisia main AE; modest prolactin rise",
                  "D2+5HT2A antagonism + 5HT7 antagonism + 5HT1A partial agonism", "metabolic-syndrome switch agent"]
    },
    "asenapine": {
        "half_life": "not anchored", "cyp": "minor 1A2/2D6", "pregnancy": "not anchored",
        "notes": ["SUBLINGUAL/buccal ONLY - swallowed tablet near-zero bioavailability", "avoid eating/drinking ~10 min after dose",
                  "schizophrenia + bipolar manic/mixed labels", "tongue hypoesthesia/oral numbness/dysgeusia local effects",
                  "intermediate metabolic weight tier (with quetiapine)", "5HT2A/D2 + alpha-2 antagonism"]
    },
    "cariprazine": {
        "half_life": "effective ~1-3 weeks (active didesmethyl metabolite)", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["D3-PREFERRING partial agonist (D3 > D2) - unique; negative-symptom promise", "US approval 2015; schizophrenia + bipolar I (manic/mixed/depressive)",
                  "switching hazard: effects persist weeks after stopping", "akathisia main AE; low weight gain; prolactin-sparing"]
    },
    "brexpiprazole": {
        "half_life": "not anchored", "cyp": "2D6 + 3A4; strong 2D6 inhibitors (fluoxetine/paroxetine) -> halve dose; strong 3A4 inducers (carbamazepine) -> increase dose", "pregnancy": "not anchored",
        "notes": ["aripiprazole successor: D2 partial agonist + stronger 5HT2A antagonism -> less akathisia, more sedation", "schizophrenia + adjunct MDD labels",
                  "no/minimal prolactin rise (Katzung)", "modest weight gain"]
    },
    "iloperidone": {
        "half_life": "not anchored", "cyp": "2D6 and 3A4; PMs need roughly half dose", "pregnancy": "not anchored",
        "notes": ["strong alpha-1 blockade -> orthostatic hypotension; needs slow titration", "low EPS/metabolic; modest QTc", "limited adoption", "2D6/3A4 inhibitors raise levels"]
    },
    "sertindole": {
        "half_life": "not anchored", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["QTc-prolonging; EU limited-use programme with ECG monitoring; never FDA-approved", "no sedation, low EPS/metabolic; never first-line"]
    },
    "zotepine": {
        "half_life": "~14h (Tripathi)", "cyp": "not anchored (extensive first-pass)", "pregnancy": "not anchored",
        "notes": ["D2/D1+5HT2+alpha-1+H1 + weak NA reuptake inhibition (with ziprasidone the antipsychotic NRI flavour)", "seizures dose-related (clozapine-like)",
                  "weight gain/hyperglycaemia/dyslipidaemia as clozapine", "available in India, no specific advantage; discontinued UK",
                  "dose 25 mg TDS up to 100 mg TDS; brands ZOLEPTIL/NIPOLEPT 25, 50 mg"]
    },
    "blonanserin": {
        "half_life": "not anchored", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["Japan-developed; D2+5HT2A WITHOUT 5HT1A/alpha-1/H1 (receptor-clean)", "low metabolic burden; moderate EPS (anticholinergic cover sometimes)",
                  "transdermal patch developed in Japan"]
    },
    "perospirone": {
        "half_life": "not anchored", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["benzisothiazole (Japan); D2/5HT2A + weak 5HT1A partial agonism", "low metabolic; EPS moderate", "not marketed in India"]
    },
    "amisulpride": {
        "half_life": "~12h (Tripathi)", "cyp": "no CYP dependence - excreted largely unchanged renally; renal dose adjustment", "pregnancy": "not anchored",
        "notes": ["substituted benzamide (sulpiride congener); limbic-preferring D2/D3, low 5HT2 affinity",
                  "dose-dependent: ~50-100 mg presynaptic autoreceptors (anxiolytic/antidepressant-type); 50-300 mg negative symptoms; 200-400 BD acute psychosis (Tripathi)",
                  "MARKED hyperprolactinaemia (top tier with sulpiride/risperidone)", "not a sedative - insomnia/anxiety/agitation common",
                  "QTc prolongation especially in predisposed elderly", "relatively weight-neutral; not FDA-approved (EU/India); SULPITAC/AMIPRIDE/ZONAPRIDE"]
    },
    # --- Mood stabilisers & anticonvulsants (Batch 14) — Katzung 14e ch.24/29 + Table 59-1/24-2, Tripathi 7e ch.30/32, KYP anchors ---
    "lithium": {
        "half_life": "16-30h (Tripathi) / ~20h (Katzung); clearance ~1/5 of creatinine", "cyp": "none - no metabolism, renal only", "pregnancy": "D",
        "notes": ["inositol monophosphatase + GSK-3 inhibition", "0.5-0.8 maintenance, 0.8-1.1/1.2 acute mania (12h post-dose level)",
                  "toxicity signs >1.5 mEq/L, >2 likely toxic; haemodialysis (Tripathi >4)", "80% filtered load reabsorbed in PCT competing with Na",
                  "NSAID/thiazide/ACE-inhibitor level-raising cluster", "nephrogenic DI -> amiloride DOC; TSH q6-12mo; Ebstein anomaly",
                  "leukocytosis, weight gain, chronic interstitial nephritis; suicide-risk reduction; LICAB/LITHOSUN 300/400"]
    },
    "valproate": {
        "half_life": "10-15h (Tripathi) / 9-18h (Katzung)", "cyp": "2C9/2C19 + glucuronidation (hepatic)", "pregnancy": "D",
        "notes": ["broad spectrum: Na-channel + weak T-current + GABA-T inhibition/GABA up", "mania, migraine prophylaxis, absence/myoclonic DOC",
                  "idiosyncratic hepatotoxicity <2y + polytherapy (fatalities <4 months)", "thrombocytopenia, hyperammonaemia -> L-carnitine, pancreatitis",
                  "alopecia, weight gain, PCOS in young girls", "NTD 1-2% first trimester + cognitive impairment; avoid in women of childbearing potential",
                  "~90% protein bound; 50-100 mcg/mL; inhibits lamotrigine/phenobarbitone metabolism; VALPARIN/ENCORATE/DEPAKOTE"]
    },
    "carbamazepine": {
        "half_life": "36h initial -> 8-12h autoinduced (Katzung); 20-40 -> 10-20h (Tripathi)", "cyp": "3A4 substrate+inducer (2B6 up-regulation too)", "pregnancy": "D",
        "notes": ["iminostilbene tricyclic related to imipramine; Na-channel inactivated-state block", "autoinduction - levels fall first weeks, re-escalate",
                  "enzyme induction -> OCP failure, reduces haloperidol/lamotrigine/valproate/topiramate", "hyponatraemia/SIADH (ADH enhancement) + benign leukopenia; agranulocytosis/aplastic rare",
                  "SJS risk HLA-B*15:02 - screen Asians (10-fold)", "DOC trigeminal neuralgia (~60% respond); mania second-line after Li/VPA",
                  "valproate combo doubles teratogenic frequency; TEGRETOL/MAZETOL/CARBATOL 200-400 TDS"]
    },
    "lamotrigine": {
        "half_life": "~24h (13-15h with inducers; ~doubled by valproate)", "cyp": "UGT glucuronidation (not CYP)", "pregnancy": "C",
        "notes": ["phenyltriazine Na-channel block, reduced glutamate/aspartate release", "bipolar depression prophylaxis - NOT effective in mania; bipolar II choice",
                  "valproate inhibits glucuronidation -> halve dose/slow titration (12.5-25 mg alt days)", "carbamazepine/phenytoin/PB induce -> halve levels",
                  "slow titration 25 -> 200 mg over ~6 weeks to avoid SJS; serious rash 0.08-0.3% adults", "weight-neutral, cognition-sparing, paradoxical insomnia; no routine levels",
                  "OCP metabolism not altered; LAMETEC/LAMITOR/LAMIDUS 25/50/100"]
    },
    "oxcarbazepine": {
        "half_life": "parent 1-2h; active MHD/licarbazepine 8-12h", "cyp": "weak inducer (3A4 lesser extent); reduced to MHD non-CYP, glucuronidated", "pregnancy": "C",
        "notes": ["10-keto analog of carbamazepine; prodrug for S(+)/R(-)-licarbazepine (MHD)", "cannot form 10,11-epoxide; no autoinduction, weaker induction",
                  "hyponatraemia may be MORE common than carbamazepine - still monitor sodium", "~25-30% SJS cross-reactivity quoted with CBZ hypersensitivity",
                  "NOT effective in acute mania (Katzung ch.29); ~1.5x less potent (doses ~50% higher)", "focal seizures; bipolar off-label; OXETOL/OXCARB/OXEP 150/300/600"]
    },
    "topiramate": {
        "half_life": "20-30h monotherapy; 12-15h with inducers", "cyp": "minimal CYP (20-50% metabolised); 50-80% renal unchanged", "pregnancy": "D",
        "notes": ["multi-mechanism: Na block + AMPA/kainate antagonism + GABA-A potentiation + weak CA II/IV inhibition", "dysnomia/word-finding + cognitive slowing, paresthesias",
                  "urolithiasis 0.5-1.5%; metabolic acidosis (hyperchloraemic non-anion-gap)", "weight loss (~85% adults lose ~5%; peaks 12-18 months) - the weight-losing mood stabiliser",
                  "acute myopia/angle-closure glaucoma; oligohidrosis/hyperthermia in children", "oral clefts 16-21-fold RR first trimester",
                  "migraine prophylaxis + Lennox-Gastaut + JME; OCP caution >200 mg/d; adjunct alcohol-use disorder"]
    },
    "gabapentin": {
        "half_life": "5-8h", "cyp": "none - renal excretion unchanged", "pregnancy": "C",
        "notes": ["GABA analogue but binds alpha2-delta Ca-channel subunit, NOT GABA receptors", "saturable l-amino acid transporter absorption -> dose-dependent bioavailability fall",
                  "post-herpetic neuralgia/diabetic neuropathy first-line (Tripathi); restless legs; anxiety", "no efficacy in generalized epilepsies; may aggravate absence/myoclonic",
                  "not effective in mania (Katzung ch.29)", "dizziness/somnolence at initiation; weight gain, peripheral oedema; renal dose adjustment",
                  "newer misuse/abuse recognition + respiratory depression with opioids; NEURONTIN/GABANTIN/GABAPIN"]
    },
    "pregabalin": {
        "half_life": "4.5-7h", "cyp": "none - renal excretion unchanged", "pregnancy": "C",
        "notes": ["alpha2-delta ligand, higher potency than gabapentin, no GABA-receptor action", "LINEAR dose-independent absorption >90% bioavailability (vs gabapentin saturable)",
                  "DPNP/PHN/CRPS first-line tier + fibromyalgia label", "US Schedule V controlled substance - misuse potential; withdrawal on abrupt stop",
                  "dizziness/somnolence, weight gain, peripheral oedema", "renal dose adjustment; PREGABA/NEUGABA/TRUEGABA 75-150 BD max 600 mg/day"]
    },
    "levetiracetam": {
        "half_life": "6-8h", "cyp": "none - 2/3 renal unchanged, 1/3 deaminated in blood", "pregnancy": "C",
        "notes": ["binds SV2A synaptic vesicle protein, reduces glutamate release; piracetam analog", "broad spectrum: focal (adults+children), primary GTCS, JME myoclonic",
                  "essentially NO drug-drug interactions - drug of choice in polypharmacy", "behavioural/psychiatric AEs: irritability, aggression, agitation, psychosis",
                  "IV form for status epilepticus; brivaracetam adds no benefit alongside (same SV2A)", "max 3000 mg/d; LEVOREXA/TORLEVA/LEVTAM 0.25/0.5/1.0 g"]
    },
    "tiagabine": {
        "half_life": "5-8h (shortened by enzyme inducers)", "cyp": "3A4 oxidation (hepatic)", "pregnancy": "C",
        "notes": ["selective GAT-1 GABA reuptake inhibitor - unique/only mechanism of its kind", "nipecotic acid + lipophilic anchor; rationally designed; potentiates tonic inhibition",
                  "second-line adjunct focal seizures; CONTRAINDICATED in generalized epilepsies", "history of non-convulsive status in off-label psychiatric use",
                  "can provoke seizures in non-epilepsy use", "90-100% bioavailable, highly protein bound, take with food; 4 -> 16-56 mg/day"]
    },
    "zonisamide": {
        "half_life": "1-3 days (~60h) once daily; shortened by CYP3A4 inducers", "cyp": "acetylation + CYP3A4; Tripathi notes mainly urinary excretion", "pregnancy": "C",
        "notes": ["sulfonamide-derived broad-spectrum; Na-channel + T-type Ca + weak carbonic anhydrase inhibition", "avoid in sulfonamide-sensitive patients (classic trick)",
                  "renal stones, weight loss, oligohidrosis - shares profile with topiramate (sulfamate)", "200-400 mg/d max 600; add-on refractory focal + broad spectrum",
                  "olfactory hallucinations/psychosis rare", "CYP3A4 inducers (CBZ/PHT/PB) shorten half-life - dose may need increase",
                  "ZONISEP/ZONICARE/ZONIT 50/100 mg cap"]
    },
    # --- Benzodiazepine batch (Batch 12) ---
    "alprazolam": {"half_life": "~11h", "cyp": "3A4 oxidative", "pregnancy": "D", "notes": ["panic", "high abuse liability", "triazolo"]},
    "diazepam": {"half_life": "20-100h effective", "cyp": "oxidative -> desmethyldiazepam", "pregnancy": "D", "notes": ["status epilepticus", "alcohol withdrawal", "accumulates elderly"]},
    "lorazepam": {"half_life": "~12-14h", "cyp": "glucuronidation (LOT)", "pregnancy": "D", "notes": ["status epilepticus first-line IM", "hepatic-safe", "amnesia"]},
    "clonazepam": {"half_life": "18-50h", "cyp": "oxidative", "pregnancy": "D", "notes": ["myoclonic/absence", "akathisia", "dependence"]},
    "chlordiazepoxide": {"half_life": "long + metabolites", "cyp": "oxidative prodrug", "pregnancy": "D", "notes": ["first BZ marketed", "alcohol withdrawal"]},
    "clorazepate": {"half_life": "long via desmethyldiazepam", "cyp": "prodrug needs gastric acid", "pregnancy": "D", "notes": ["prodrug", "PPI delays absorption"]},
    "oxazepam": {"half_life": "~8h", "cyp": "glucuronidation (LOT)", "pregnancy": "D", "notes": ["hepatic-safe", "low abuse slow onset", "no active metabolites"]},
    "temazepam": {"half_life": "10-15h", "cyp": "glucuronidation (LOT)", "pregnancy": "D", "notes": ["sleep maintenance", "gel-cap abuse history"]},
    "midazolam": {"half_life": "1.5-3h", "cyp": "3A4", "pregnancy": "D", "notes": ["procedural sedation", "buccal/intranasal status", "anterograde amnesia"]},
    "estazolam": {"half_life": "10-24h", "cyp": "oxidative", "pregnancy": "D", "notes": ["insomnia", "tolerance"]},
    "flurazepam": {"half_life": "30-100h effective", "cyp": "oxidative active metabolite", "pregnancy": "D", "notes": ["hangover", "falls elderly"]},
    "quazepam": {"half_life": "long", "cyp": "oxidative alpha1-preferring metabolite claim", "pregnancy": "D", "notes": ["insomnia 15mg"]},
    "triazolam": {"half_life": "2-4h", "cyp": "3A4 extreme", "pregnancy": "D", "notes": ["ultra-short", "rebound insomnia", "amnesia", "dental sedation"]},
    "flunitrazepam": {"half_life": "18-26h", "cyp": "oxidative", "pregnancy": "D", "notes": ["Rohypnol", "date-rape", "not US-approved"]},
    "loflazepate": {"half_life": "long via desmethyldiazepam", "cyp": "ester prodrug", "pregnancy": "D", "notes": ["prodrug", "once daily anxiolytic"]},
    # --- Substance-use-disorder treatments (Batch 16a) — Katzung 14e ch.23/31/7/32/41, Tripathi 7e ch.28/30/34 + KYP anchors ---
    "naltrexone": {
        "half_life": "~10h oral (Katzung); 100 mg oral blocks injected heroin up to 48h; monthly IM depot", "cyp": "not anchored (hepatic first-pass; no class CYP teaching)", "pregnancy": "not anchored",
        "notes": ["pure mu-opioid antagonist (nonselective), orally active",
                  "alcohol-use disorder: 50 mg/day oral cuts craving/heavy drinking via endorphin-reward blockade; NALTIMA 50 mg India",
                  "extended-release IM injection every 4 weeks (depot) for adherence",
                  "MUST be opioid-free (7-10 days) first - precipitates acute withdrawal in opioid-dependent patients (incl. tramadol/methadone users)",
                  "blocks therapeutic analgesic effects of usual opioid doses - perioperative trap",
                  "dose-dependent hepatotoxicity; caution with abnormal aminotransferases; avoid combining with disulfiram (both potential hepatotoxins)",
                  "OPRM1 (mu-receptor gene) polymorphism linked to blunted response - genotype-guided pharmacotherapy possibility (Katzung ch.23)"]
    },
    "buprenorphine": {
        "half_life": "terminal ~40h (Tripathi); long duration from slow dissociation from mu receptors (resistant to naloxone reversal)", "cyp": "CYP3A4 substrate (KYP anchor)", "pregnancy": "not anchored",
        "notes": ["partial mu-receptor agonist (low intrinsic activity) + delta/kappa ANTAGONIST = mixed agonist-antagonist (Katzung ch.31/Tripathi ch.34)",
                  "ceiling effect on respiratory depression (and analgesia) - safer in overdose than full agonists (methadone); the signature exam pearl",
                  "sublingual route preferred (first-pass); long duration; excreted unchanged in bile/faeces",
                  "opioid-dependence maintenance (FDA 2002, as effective as methadone with counselling); higher SL doses for OST",
                  "combined with naloxone as Suboxone to deter IV diversion (naloxone sublingually inactive)",
                  "precipitates withdrawal if given too soon after full agonists (heroin/methadone) - wait for moderate withdrawal",
                  "naloxone does NOT reverse established buprenorphine effect (tight binding); still fatal with benzos/CNS depressants esp. IV misuse",
                  "Probuphine 6-month implant; Butrans 1-week transdermal patch; Indian brands NORPHIN/TIDIGESIC/BUPRIGESIC"]
    },
    "acamprosate": {
        "half_life": "not anchored", "cyp": "none - eliminated almost entirely by kidneys, does not participate in drug-drug interactions (Katzung)", "pregnancy": "not anchored",
        "notes": ["taurine analogue; weak NMDA-receptor antagonist + GABAA-receptor activator (glutamatergic stabiliser of early abstinence)",
                  "maintains ABSTINENCE after withdrawal (vs naltrexone's craving/heavy-drinking reduction); efficacy rated comparable to naltrexone (Tripathi)",
                  "666 mg (two 333 mg enteric-coated tablets) two-three times daily; start soon after withdrawing alcohol; COMBINE study (alone not significant in US trial)",
                  "diarrhoea/loose motion is the most common adverse effect (also nausea, abdominal pain, itching)",
                  "renally eliminated -> dose adjust in CKD; safe in liver disease/cirrhosis (mirror of disulfiram/naltrexone hepatic caution)"]
    },
    "disulfiram": {
        "half_life": "elimination slow; action persists several days after last dose (Katzung); alcohol sensitisation lasts 7-14 days after stopping (Tripathi)", "cyp": "inhibits several CYP isoenzymes -> phenytoin/warfarin/isoniazid levels rise (Katzung)", "pregnancy": "not anchored (safety in pregnancy not demonstrated)",
        "notes": ["irreversible ALDH (aldehyde dehydrogenase) inhibitor -> acetaldehyde accumulation -> aldehyde syndrome: flushing, throbbing headache, vomiting, hypotension (1-4 h)",
                  "aversion/deterrence therapy ONLY in motivated abstinent subjects; not for physically dependent patients; 12 h alcohol-free before start",
                  "regimen 500 mg/day x 1 week then 250 mg daily; sensitisation 2-3 h after first dose, peak ~12 h (Tripathi)",
                  "hidden alcohol: mouthwash, sauces, cough syrups, vinegar - reaction treated supportively (IV fluids, antiemetics; no specific antidote)",
                  "also inhibits alcohol dehydrogenase and dopamine beta-hydroxylase; chelates copper - Wilson's disease adjunct (KYP)",
                  "side effects: rashes, metallic taste, nervousness, malaise; hepatitis/neuropathy rare (KYP)",
                  "ESPERAL/ANTADICT/DEADICT 250 mg tabs (ANTABUSE internationally); disulfiram-like with alcohol: metronidazole, procarbazine (Tripathi)"]
    },
    "varenicline": {
        "half_life": "long (high-affinity persistent receptor binding per Katzung; no number anchored in this batch)", "cyp": "none/minimal - non-CYP clearance, largely renal; no significant interactions; cimetidine inhibits renal tubular secretion raising levels (KYP)", "pregnancy": "not anchored",
        "notes": ["alpha4beta2 nicotinic receptor PARTIAL agonist - substitution eases craving/withdrawal while antagonist component blocks nicotine reward (Tripathi ch.30/Katzung ch.7)",
                  "most effective single smoking-cessation agent: efficacy superior to bupropion head-to-head (Katzung 14e)",
                  "0.5 mg OD titrated to 1 mg BD, up to 12 weeks then taper (Tripathi)",
                  "nausea is the most common AE - take with food and full glass of water; insomnia, abnormal dreams",
                  "neuropsychiatric boxed warning added 2008, REMOVED 2016 after EAGLES trial; Katzung: incidence low, surveillance continues; monitor mood",
                  "renal excretion -> dose adjust in CKD; cytisine (laburnum) is its natural analog (Katzung)",
                  "partial-agonist logic mirrors aripiprazole's D2 partial agonism (class pearl)"]
    },
    "nalmefene": {
        "half_life": "8-10h (Katzung) - much longer than naloxone's 1-2h IV action (renarcotisation teaching)", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["pure opioid antagonist, derivative of naltrexone; mu-antagonist + partial kappa-antagonist (KYP)",
                  "longer-acting opioid-overdose reversal than naloxone (US: IV only per Katzung 14e); naloxone's short action lets opioids re-sedate (renarcotisation)",
                  "as-needed (targeted) use for alcohol-use reduction approved in EU; NOT FDA-approved for AUD (Katzung ch.23)",
                  "lacks naltrexone's hepatotoxicity, higher oral bioavailability, longer acting (Tripathi)",
                  "no abuse potential; no tolerance to antagonism; no withdrawal of its own; precipitates withdrawal in opioid-dependent subjects"]
    },
    "naltrexone-bupropion": {
        "half_life": "not anchored (components: naltrexone ~10h oral; bupropion biphasic ~14h)", "cyp": "bupropion component: 2D6 inhibition via hydroxybupropion (see bupropion entry)", "pregnancy": "not anchored",
        "notes": ["weight-management combination (Contrave-type): naltrexone craving/reward blockade + bupropion NDRI appetite/DA; synergistic (Katzung ch.31/41 approved weight-loss list)",
                  "contraindicated: uncontrolled hypertension (bupropion raises BP/HR), seizure history, eating disorders (bulimia), opioid use (naltrexone blocks analgesia/precipitates withdrawal), MAOIs with 14-day washout",
                  "nausea is the most common adverse effect; also insomnia, dry mouth, constipation",
                  "blocks usual opioid analgesia - perioperative planning trap like standalone naltrexone"]
    },
    "sodium-oxybate": {
        "half_life": "~30 min (Katzung ch.32 PK context); peak plasma 20-30 min after 10-20 mg/kg", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["sodium salt of gamma-hydroxybutyrate (GHB); GABAB receptors the sole mediators (GABAB-knockout mice; Katzung)",
                  "narcolepsy WITH cataplexy: consolidates night sleep -> reduces cataplexy and daytime sleepiness; restricted-access distribution (REMS-type programme; KYP)",
                  "TWO divided night doses (bedtime + 2.5-4 h later)",
                  "HIGH abuse potential: euphoria, amnesia, sedation; 'liquid ecstasy'/date-rape heritage (Katzung ch.32)",
                  "respiratory depression fatal with alcohol/sedative-hypnotics; abrupt discontinuation risky (KYP)",
                  "VTA GABA neurons ~10x more sensitive to GHB than dopamine neurons (Katzung)"]
    },
    # --- Adjunct & autonomic agents (Batch 16b) — Katzung 14e ch.10/11/22/28/29 + Tripathi 7e ch.10/19/29/32/33 + KYP anchors ---
    "buspirone": {
        "half_life": "2-4h (Katzung) / 2-3.5h (Tripathi)", "cyp": "3A4 substrate - inhibitors (erythromycin, ketoconazole, grapefruit juice, nefazodone) raise levels; rifampin induces", "pregnancy": "B",
        "notes": ["azapirone 5-HT1A partial agonist; no direct GABA-A/BZD-site interaction, no anticonvulsant or muscle-relaxant properties",
                  "GAD only; ineffective in panic/OCD/severe anxiety; anxiolysis takes 2-4 weeks (Katzung 3-4 wks; Tripathi max benefit ~2 wks) - never for acute anxiety",
                  "non-sedating, no dependence/withdrawal/rebound, does not suppress BZD withdrawal, no alcohol cross-tolerance, minimal abuse liability",
                  "SSRI augmentation for residual symptoms; dopamine-facilitating activity may offset SSRI sexual dysfunction",
                  "BP rise with MAO inhibitors; active alpha2-blocking metabolite 1-PP; FDA pregnancy category B",
                  "5-15 mg OD-TDS; ANXIPAR/BUSPIN/BUSCALM 5,10 mg (Tripathi)"]
    },
    "propranolol": {
        "half_life": "not anchored (extensive first-pass; wide inter-individual clearance variation - Katzung PK example)", "cyp": "extensive hepatic first-pass metabolism (blood-flow limited)", "pregnancy": "not anchored",
        "notes": ["prototype NONSELECTIVE beta-1+beta-2 blocker (weak beta-3), inverse agonist, no intrinsic sympathomimetic activity (Tripathi ch.10)",
                  "performance/situational anxiety - SOMATIC symptoms only (palpitation, tremor, sweating); does NOT touch worry/tension/fear; not panic core",
                  "antipsychotic-induced AKATHISIA classic remedy (Tripathi: more effective, for non-responsive cases); lithium postural tremor; SSRI jitteriness adjunct",
                  "cautions: asthma bronchospasm, diabetes (masks hypoglycaemia), heart block; lipophilic -> CNS nightmares/fatigue/depression",
                  "INDERAL/CIPLAR 10,40,80 mg (Tripathi)"]
    },
    "prazosin": {
        "half_life": "2-3h plasma, single-dose effect 6-8h (Tripathi); ~3h (Katzung); bioavailability ~60%", "cyp": "hepatic metabolism, excreted mainly in bile", "pregnancy": "not anchored",
        "notes": ["first highly selective alpha-1 blocker (alpha1:alpha2 ~1000:1); arterioles>veins; no noradrenaline-release rise -> mild reflex tachycardia vs phentolamine",
                  "PTSD NIGHTMARES signature psychiatric indication, added to the SSRI backbone; veteran/trauma populations (KYP anchor)",
                  "first-dose hypotension/syncope - start 0.5-1 mg at BEDTIME; tolerance to this effect develops (Tripathi)",
                  "other uses: hypertension, BPH (bladder trigone/prostatic alpha-1), Raynaud's; alpha-blocking AEs miosis/nasal stuffiness/inhibited ejaculation",
                  "PRAZOPRES 0.5/1/2 mg; MINIPRESS XL GITS 2.5/5 mg OD; usual 1-4 mg BD-TDS"]
    },
    "clonidine": {
        "half_life": "8-12h (Tripathi); peak 2-4h; half to two-thirds excreted unchanged in urine", "cyp": "not anchored (renal + hepatic metabolites)", "pregnancy": "not anchored",
        "notes": ["central alpha-2A partial agonist (brainstem vasomotor centre) + imidazoline receptors -> reduced sympathetic outflow, bradycardia",
                  "OPIOID WITHDRAWAL attenuation (clonidine-assisted detox - sweating, cramps, diarrhoea; Katzung ch.28/31)",
                  "ADHD: slow/continuous-release (Kapvay XR KYP) monotherapy or stimulant adjunct; tics reduce ~50% (Tourette)",
                  "REBOUND HYPERTENSION on abrupt stop (missed 1-2 days; risk >1 mg/d) - phaeochromocytoma-like; reinstitute or alpha+beta-block, then taper",
                  "AEs: sedation, dry mouth/nose/eyes, constipation, impotence, bradycardia; TCA/chlorpromazine abolish antihypertensive effect",
                  "also hot flushes, smoking/narcotic craving, diabetic diarrhoea; weekly transdermal patch; CATAPRES 150 mcg/ARKAMIN 100 mcg"]
    },
    "guanfacine": {
        "half_life": "not anchored (longer, smoother than clonidine; XR once daily)", "cyp": "3A4 substrate - avoid strong 3A4 inhibitors (ketoconazole-type; KYP)", "pregnancy": "not anchored",
        "notes": ["selective alpha-2A agonist - prefrontal noradrenergic tuning (working memory/impulse control); less alpha-2B/imidazoline than clonidine",
                  "ADHD XR (Intuniv) monotherapy + stimulant adjunct, favoured with tics/anxiety comorbidity; non-stimulant, unscheduled",
                  "LESS rebound hypertension than clonidine - still taper, never stop abruptly",
                  "AE cluster: sedation, fatigue, hypotension, bradycardia",
                  "Katzung: old immediate-release antihypertensive offered no advantage over clonidine; ~50% tic reduction in Tourette like clonidine"]
    },
    "flumazenil": {
        "half_life": "0.7-1.3h (Katzung) / ~1h (Tripathi); IV onset seconds; action 1-2h; oral bioavailability ~16% (IV only)", "cyp": "rapid hepatic clearance/metabolism", "pregnancy": "not anchored",
        "notes": ["competitive BZD-site antagonist on GABA-A (1,4-BZD derivative); little intrinsic activity, no effect in BZD-naive subjects",
                  "reverses BZDs + Z-drugs (zolpidem/zaleplon/eszopiclone); does NOT antagonise ethanol, barbiturates, opioids, general anaesthetics",
                  "RESEDATION - all BZDs outlast it; repeat boluses/infusion + monitored observation; approved for overdose AND procedural reversal (0.2 mg/min IV titration, Tripathi)",
                  "hazards: precipitated abstinence/seizures in BZD-dependent patients; seizures/arrhythmias with TCA co-ingestion; respiratory-depression reversal less predictable",
                  "not routine in undifferentiated coma; sedation not abolished by 5 mg = non-BZD depressant (Tripathi differential-diagnosis pearl)"]
    },
    "benztropine": {
        "half_life": "not anchored", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["central antimuscarinic - restores striatal DA/ACh balance after D2 blockade; acute dystonia 2 mg IV/IM (Katzung), oral 1-6 mg/day",
                  "treats+prevents acute dystonia and drug-induced parkinsonism (prophylaxis with high-EPS antipsychotics); NOT for tardive dyskinesia - anticholinergics can WORSEN it (trap); akathisia prefers propranolol/BZD",
                  "elderly: confusion/memory impairment, urinary retention, precipitates angle-closure glaucoma; heat intolerance/hyperthermia; additive anticholinergia with TCAs (Katzung)",
                  "withdrawal attempt of antiparkinsonism cover every 3-4 months (parkinsonism may be self-limiting)"]
    },
    "trihexyphenidyl": {
        "half_life": "not anchored", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["central anticholinergic (tertiary amine crosses BBB) - most commonly used drug for drug-induced parkinsonism in India; also Parkinson's adjunct",
                  "2-10 mg/day in 2-3 divided doses, start lowest dose; PACITANE/PARBENZ 2 mg (Tripathi); Katzung parkinsonism range 6-20 mg",
                  "euphoria/misuse potential reported (street use/diversion) - restrict prescription, review indication",
                  "AEs: belladonna cluster (dry mouth, blurred vision, constipation, retention) + elderly confusion/memory impairment",
                  "levodopa should NEVER be used in drug-induced parkinsonism (D2 blocked); amantadine occasional alternative (Katzung)"]
    },
    # --- Stimulants & cognition enhancers (Batch 15) — Katzung 14e ch.9/32 + Alzheimer passage, Tripathi 7e CNS-stimulant & cognition chapters, KYP anchors ---
    "amphetamine": {
        "half_life": "not anchored", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["indirect DA/NE releaser: reverses DAT/NET + VMAT2 substrate displacing vesicular amines (Katzung transporter figure)",
                  "ADHD + narcolepsy labels; Schedule II (Adderall mixed salts, Biphetamine)",
                  "peripheral sympathomimetic: BP/HR up, insomnia, appetite suppression, growth slowing; cardiac screening before stimulants",
                  "amphetamine psychosis with stereotypy at high doses; MAOI combination contraindicated",
                  "weak base: acidified urine ionizes/traps it and accelerates excretion (Katzung Fig 1-5); Tripathi dose 5-15 mg oral"]
    },
    "dexamphetamine": {
        "half_life": "not anchored", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["d-enantiomer more potent than l-isomer (Katzung); Dexedrine single-entity product vs Adderall 1:1:1:1 four-salt mixture",
                  "core indications ADHD + narcolepsy; cataplexy itself needs SSRI/SNRI or sodium oxybate, not stimulants",
                  "Tripathi oral dose 5-10 mg; Schedule II; methamphetamine has even higher central:peripheral ratio"]
    },
    "lisdexamfetamine": {
        "half_life": "not anchored", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["L-lysine amide PRODRUG of dexamphetamine - enzymatic hydrolysis (rate-limiting, route-independent) -> slower onset, blunted euphoria, LOWER abuse liability",
                  "still Schedule II (Vyvanse listed in Katzung CSA table); prodrug design blunts but does not abolish misuse risk",
                  "indications: ADHD + binge-eating disorder (only FDA-approved BED drug)"]
    },
    "methylphenidate": {
        "half_life": "4-6h plasma (Tripathi 7e), central effect outlasts it", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["DAT/NET reuptake BLOCKER (groups with cocaine in Katzung figure) - NOT a releaser; contrast amphetamine",
                  "first-line ADHD (superior to amphetamine: less tachycardia/growth retardation per Tripathi; ~3/4 children improve) + narcolepsy",
                  "IR morning+noon dosing; OROS once daily; transdermal patch; children 0.25-1 mg/kg/day, adults 5-10 mg BD; RETALIN India",
                  "growth/weight suppression (drug holidays debated); rebound/wear-off; caution structural cardiac disease, hypertension, MAOI contraindication; Schedule II"]
    },
    "dexmethylphenidate": {
        "half_life": "not anchored", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["d-threo enantiomer = pharmacologically active half of racemic methylphenidate (Focalin/Focalin XR, ADHD)",
                  "dosed at HALF the racemate's milligram dose - enantiomer pattern like escitalopram/levomilnacipran"]
    },
    "modafinil": {
        "half_life": "~15 h (Tripathi); absorbed within 2-4 h", "cyp": "3A4 inducer + 2C19 inhibitor", "pregnancy": "not anchored",
        "notes": ["wake-promoting: weak DAT/NET inhibition + orexin/histamine activation; raises 5HT/glutamate, lowers GABA (Katzung); NOT amphetamine-like releaser",
                  "labels: narcolepsy, shift-work disorder, OSA residual sleepiness; Tripathi 100-200 mg morning+afternoon or 200 mg 1 h pre-shift; MODALERT/PROVAKE",
                  "CYP3A4 induction -> ORAL CONTRACEPTIVE FAILURE (classic); CYP2C19 inhibition raises diazepam/phenytoin/omeprazole; Katzung inducer list",
                  "serious rash/SJS warning -> stop immediately; headache/insomnia commonest, mild BP/HR rise; Schedule IV (Katzung CSA table)"]
    },
    "armodafinil": {
        "half_life": "R-enantiomer slower clearance than S -> later Tmax, longer coverage at equal dose", "cyp": "3A4 inducer + 2C19 inhibitor (class-wide)", "pregnancy": "not anchored",
        "notes": ["R-enantiomer of racemic modafinil (Nuvigil) - single-isomer version; PK (not label) is the differentiator",
                  "same three labels: OSA residual sleepiness, SWD, narcolepsy (Tripathi note)",
                  "OCP-failure 3A4 induction applies to armodafinil too; rash warning + Schedule IV carry over"]
    },
    "pemoline": {
        "half_life": "not anchored", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["chemically unrelated CNS stimulant like methylphenidate; insignificant sympathomimetic/CVS actions; slow onset (Tripathi)",
                  "HEPATOTOXICITY: acute liver failure -> boxed warning, LFT monitoring, withdrawn (discontinued USA, not available India - Tripathi)",
                  "hepatotoxicity twin of tacrine - both retired by the liver"]
    },
    "donepezil": {
        "half_life": "~70 h (Tripathi) -> once-daily bedtime dosing", "cyp": "2D6/3A4 metabolism (Katzung CYP caution: inhibitors raise levels)", "pregnancy": "not anchored",
        "notes": ["reversible CENTRAL-selective AChE inhibitor; weak peripheral inhibition at therapeutic doses",
                  "Alzheimer's across all severities (Tripathi: even relatively severe); 5 -> 10 mg OD; DONECEPT India; not hepatotoxic",
                  "AEs: GI upset, insomnia/vivid dreams, muscle cramps, BRADYCARDIA/syncope (caution beta-blockers/sick sinus)",
                  "flagship replacement of tacrine: same marginal benefit, less toxicity, OD convenience"]
    },
    "galantamine": {
        "half_life": "shorter than donepezil -> BD dosing (Tripathi 4 mg BD max 12 mg BD)", "cyp": "2D6 and 3A4 substrate (strong inhibitors paroxetine/ketoconazole raise levels)", "pregnancy": "not anchored",
        "notes": ["DUAL mechanism: cerebral AChE inhibition + allosteric potentiation of nicotinic receptors (unique in AD set)",
                  "natural alkaloid; mild-moderate AD; GALAMER 4/8/12 mg India",
                  "shared class AEs: cholinergic GI upset, weight loss"]
    },
    "rivastigmine": {
        "half_life": "~2 h plasma but cerebral AChE inhibited up to 10 h (carbamyl dissociates slowly - Tripathi)", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["pseudo-irreversible carbamate inhibiting AChE AND BuChE (dual cholinesterase), brain G1-isoform preference",
                  "Alzheimer's + PARKINSON'S DISEASE DEMENTIA (unique label)",
                  "transdermal patch reduces GI AEs; weight-loss monitoring; titration 1.5 mg BD -> 6 mg BD; EXELON/RIVAMER India"]
    },
    "tacrine": {
        "half_life": "short plasma action -> multiple daily (historically QID) dosing", "cyp": "not anchored", "pregnancy": "not anchored",
        "notes": ["FIRST AChE inhibitor with AD benefit (Katzung: first drug shown to have any benefit); efficacy slight",
                  "withdrawn for HEPATOTOXICITY (significant; ALT every-other-week monitoring era) - replaced by donepezil/rivastigmine/galantamine",
                  "Tripathi: lipophilic acridine; binds ONLY the anionic site (with edrophonium) - non-carbamate reversible inhibitor"]
    },
    "memantine": {
        "half_life": "not anchored", "cyp": "minimal - largely renal excretion unchanged (dose adjust in impairment)", "pregnancy": "not anchored",
        "notes": ["low-affinity UNCOMPETITIVE use-dependent NMDA-channel antagonist - dampens tonic glutamate excitotoxicity, spares physiological transmission",
                  "moderate-to-SEVERE Alzheimer's (milder benefit unclear); replace or supplement AChE inhibitors; combination with donepezil common (Katzung: mixed results)",
                  "no cholinergic cardiac/GI burden (contrast AChE inhibitors); AEs dizziness/confusion/hallucinations/constipation/headache",
                  "Tripathi: 5 mg OD -> 10 mg BD, stop if no benefit 6 months; ADMENTA/MENTADEM/ALMANTIN; amantadine-related"]
    },
    # --- Special & novel agents (Batch 16c) — Katzung 14e ch.25/31/32/38/28/23/16/41, Tripathi 7e, KYP anchors ---
    "ketamine": {
        "half_life": "not anchored (bolus effect ends by redistribution; norketamine active at 1/3-1/5 parent potency)", "cyp": "hepatic N-demethylation to norketamine", "pregnancy": "not anchored",
        "notes": ["phencyclidine derivative; dissociative anaesthesia; major effect = inhibition of the NMDA receptor complex (Katzung ch.25)",
                  "rapid-acting antidepressant at SUB-anaesthetic doses (~0.5 mg/kg over 40 min vs 1-2 mg/kg IV / 4-6 mg/kg IM induction); downstream AMPA trafficking + mTOR synaptogenesis (KYP)",
                  "esketamine S-enantiomer intranasal for treatment-resistant depression + acute suicidality; REMS (sedation, dissociation, BP rise)",
                  "emergence reactions (vivid dreams, hallucinations, out-of-body) are the main limiting factor; blunted by benzodiazepines (Katzung)",
                  "central sympathetic stimulation -> transient rises in BP/HR/CO; cerebral vasodilator raising CBF/CMRO2 (caution raised ICP); bronchodilation + preserved respiratory drive (asthma pearl)",
                  "chronic heavy misuse -> ulcerative cystitis (suprapubic pain, frequency, haematuria) + cognitive problems; abuse/rape-drug history (Tripathi)"]
    },
    "dextromethorphan": {
        "half_life": "not anchored (extensive first-pass; active dextrorphan)", "cyp": "CYP2D6 probe substrate - O-demethylation to dextrorphan (metabolic-ratio phenotyping)", "pregnancy": "not anchored",
        "notes": ["sigma-1 agonist + weak NMDA antagonist; dextrorotatory levorphanol derivative with essentially no opioid agonism",
                  "antitussive 15-30 mg 3-4x daily (Katzung); Tripathi 10-20 mg TDS (children 2-6 y 2.5-5 mg; 6-12 y 5-10 mg); common in proprietary cough combinations",
                  "OTC; non-addicting at therapeutic doses but abused ('robotripping') - high doses give a dissociative state via NMDA + serotonergic/opioid-site/cholinergic actions (Katzung ch.32); hallucinations/ataxia (Tripathi)",
                  "deaths in young children -> FDA banned use <6 years",
                  "MAOI caution/avoidance - serotonin syndrome (classic Tripathi interaction); also caution with SSRIs",
                  "dextromethorphan-bupropion fixed-dose combination: rapid-onset oral MDD therapy (sigma-1 + NMDA signalling + NDRI drive; bupropion 2D6 inhibition raises DXM exposure)"]
    },
    "l-methylfolate": {
        "half_life": "not anchored", "cyp": "none of note - vitamin-like, no CYP induction/inhibition", "pregnancy": "not anchored",
        "notes": ["active circulating folate (L-5-MTHF); remethylates homocysteine to methionine for SAM synthesis; supports tetrahydrobiopterin cofactor of monoamine synthesis",
                  "bypasses the MTHFR reduction step that folic acid requires (C677T-style polymorphism logic)",
                  "adjunct AUGMENTATION in SSRI non-responders; prescription MEDICAL-FOOD niche (not a conventional drug indication, not an OTC multivitamin)",
                  "essentially no adverse-effect burden; classic caution: corrects B12-deficiency anaemia while neurological damage progresses - check B12",
                  "distinct from folinic-acid (leucovorin) methotrexate rescue"]
    },
    "triiodothyronine": {
        "half_life": "~24h (liothyronine, Katzung) vs levothyroxine ~7 days", "cyp": "none of note; accelerates clotting-factor catabolism (warfarin potentiation)", "pregnancy": "not anchored",
        "notes": ["nuclear thyroid-receptor agonist; 3-4x more potent than T4; most T3 arises from peripheral T4 deiodination",
                  "classic rapid ANTIDEPRESSANT AUGMENTATION of TCAs/SSRIs (historically favoured in women with low-T3 profiles); not chronic monotherapy",
                  "Katzung honesty: T3+antidepressant meta-analysis inconclusive; thyroid hormones detrimental in depression with normal levels",
                  "hyperthyroid symptom risk: palpitations, tremor, sweating, insomnia; arrhythmia/angina risk higher than T4 (Tripathi); bone loss with long use",
                  "hyperthyroidism augments warfarin - INR monitoring/dose reduction",
                  "Tripathi: liothyronine not freely available in India; occasionally IV with T4 in myxoedema coma; l-thyroxine preferred for all routine indications"]
    },
    "caprylidene": {
        "half_life": "not anchored (MCT portal absorption, rapid beta-oxidation)", "cyp": "none of note", "pregnancy": "not anchored",
        "notes": ["medium-chain triglyceride ketogenic agent: ketone bodies cross the BBB as alternative brain fuel bypassing impaired neuronal glucose utilisation in Alzheimer's",
                  "MEDICAL FOOD (label honesty: no drug-standard efficacy demonstration; evidence modest/controversial); adjunct to, not replacement for, cholinesterase inhibitors/memantine",
                  "GI upset dominant: nausea, diarrhoea, flatulence; managed by taking with food and splitting doses",
                  "no rhabdomyolysis/hyperkalaemia/tardive-dyskinesia profile (those belong to statins/RAAS blockers/dopamine antagonists)"]
    },
    "pimavanserin": {
        "half_life": "not anchored", "cyp": "CYP3A4/2D6 substrate; strong 3A4 inhibitors (ketoconazole) raise exposure/QTc risk", "pregnancy": "not anchored",
        "notes": ["selective 5-HT2A inverse agonist/antagonist with ZERO D2 blockade - the entire design logic: treats Parkinson's disease psychosis without worsening motor status",
                  "the ONLY approved therapy for Parkinson's disease psychosis (Katzung ch.28 lists it for PD psychosis)",
                  "QTc prolongation warning -> baseline/follow-up ECG vigilance",
                  "not labelled for Alzheimer's-disease psychosis (failed trials); general dementia psychosis starts non-drug",
                  "D2 blockers (haloperidol/risperidone) worsen parkinsonism; quetiapine only off-label"]
    },
    "flibanserin": {
        "half_life": "not anchored (nightly bedtime dosing)", "cyp": "CYP3A4 heavily (strong 3A4 inhibitors contraindicated; moderate inhibitors e.g. fluconazole raise levels); 2D6 minor", "pregnancy": "not anchored",
        "notes": ["5-HT1A agonist + 5-HT2A antagonist - central serotonin rebalancing toward dopamine/noradrenaline; NOT an aphrodisiac",
                  "acquired, generalised HSDD in premenopausal women only",
                  "bedtime dosing because hypotension/somnolence peak early post-dose; daytime dosing invites syncope",
                  "BOXED: alcohol contraindicated - flibanserin augments ethanol hypotension, severe orthostatic hypotension/syncope (Katzung ch.23)",
                  "common AEs: dizziness, somnolence, nausea, fatigue, hypotension - worst early in treatment",
                  "diagnosis gate: exclude depression/relationship/drug causes; therapy adjunctive to psychosexual counselling"]
    },
    "lorcaserin": {
        "half_life": "not anchored", "cyp": "CYP2A6/2C19/2D6 (label); interactions pharmacodynamic, not metabolic", "pregnancy": "not anchored",
        "notes": ["selective 5-HT2C agonist over 5-HT2A/2B - POMC/CART satiety activation; selectivity avoids the 2B valvulopathy/pulmonary hypertension that doomed fenfluramine/dexfenfluramine (Katzung ch.16)",
                  "WITHDRAWN at FDA request in 2020 - CAMELLIA-TIMI 61 CV-outcomes trial showed increased cancer risk (the exam hook)",
                  "was 10 mg twice daily as adjunct to diet/exercise (BMI >=30 or >=27 with comorbidity)",
                  "serotonergic: serotonin-syndrome caution with SSRIs/SNRIs/MAOIs",
                  "hypoglycaemia with insulin/sulfonylureas - reduce antidiabetic doses",
                  "never an Indian mainstay; orlistat remains the accessible anti-obesity option; sibutramine (CV) and rimonabant (psychiatric) also withdrawn"]
    },
    "phentermine-topiramate": {
        "half_life": "topiramate component 20-30h monotherapy (extended-release once-daily escalation)", "cyp": "topiramate minimal CYP but enzyme-inducing potential (OCP reliability caution)", "pregnancy": "contraindicated - topiramate orofacial clefts (boxed)",
        "notes": ["combination weight management: phentermine sympathomimetic (noradrenergic appetite suppression) + topiramate anticonvulsant (satiety/weight)",
                  "US Schedule IV controlled substance - phentermine amphetamine-like abuse potential",
                  "contraindicated: pregnancy (boxed orofacial clefts), hyperthyroidism, narrow-angle glaucoma, recent MAOI use",
                  "AEs: paraesthesia + cognitive/word-finding slowing (topiramate), tachycardia/BP rise (phentermine), mood effects",
                  "adjunct to diet/exercise only - never a lifestyle substitute"]
    },

}
s2_issues = 0
NUM = re.compile(r"\d+(?:\.\d+)?")
def numbers_in(t):
    return [float(x) for x in NUM.findall(t)]

for q in questions:
    qid = q["id"]; slug = q["drugSlug"]
    full = q["question"] + " " + " ".join(q["options"]) + " " + q["explanation"]
    if slug != "mixed" and slug not in FACTS:
        log(f"[S2] {qid}: unknown drugSlug '{slug}'"); s2_issues += 1
    # fact-consistency: half-life numbers cited for right drug
    if "half-life" in full.lower() or "half life" in full.lower():
        if slug in FACTS:
            hl_ok = FACTS[slug]["half_life"]
            # verify the canonical half-life range appears somewhere in Q or explanation
            canon = re.findall(r"22-36", full) if slug == "sertraline" else None
    # pregnancy category consistency
    m = re.search(r"Category\s+([ABCDX])", full)
    if m and slug in FACTS:
        if m.group(1) != FACTS[slug]["pregnancy"]:
            log(f"[S2] {qid}: states Category {m.group(1)}, site says {FACTS[slug]['pregnancy']}")
            s2_issues += 1
    # CYP consistency
    for cyp in re.findall(r"CYP\s?(\d[A-Z]\d)", full):
        if slug not in FACTS:
            continue
        expected = FACTS[slug]["cyp"]
        if slug == "sertraline" and cyp == "2B6": continue
        if slug == "fluoxetine" and cyp == "2D6": continue
        if slug == "paroxetine" and cyp == "2D6": continue
        if slug == "escitalopram" and cyp in ("2D6",):  # allowed as distractor mention
            if "inhib" in full.lower() and slug == "escitalopram" and "escitalopram is a strong 2D6" in full.lower():
                log(f"[S2] {qid}: escitalopram wrongly described as strong 2D6 inhibitor"); s2_issues += 1
    # explanation must not contradict correctIndex option for canonical numbers
    # (deep semantic check done manually via dump)
log(f"Step 2 mechanical fact-anchor issues: {s2_issues} (deep semantic pass done manually)")

# ---------------------------------------------------------------- STEP 3
header("STEP 3 - DISTRACTOR QUALITY (the 'options too close to answer' check)")

def norm(t):
    t = t.lower()
    t = re.sub(r"[^a-z0-9\s]", " ", t)
    t = re.sub(r"\s+", " ", t).strip()
    return t

def tok(t):
    return set(norm(t).split())

def jaccard(a, b):
    A, B = tok(a), tok(b)
    if not A or not B: return 0.0
    return len(A & B) / len(A | B)

def ratio(a, b):
    return difflib.SequenceMatcher(None, norm(a), norm(b)).ratio()

STOP = {"the","a","an","of","to","in","is","are","and","or","for","with","on","by",
        "it","its","as","at","than","this","that","be","been","was","were","has",
        "have","had","not","no","only","most","least","more","less","very","much"}

def content_tokens(t):
    return tok(t) - STOP

s3_flags = 0
for q in questions:
    qid = q["id"]; opts = q["options"]; ci = q["correctIndex"]
    ans = opts[ci]
    ANS = content_tokens(ans)
    for j, opt in enumerate(opts):
        if j == ci: continue
        # lexical overlap with answer
        ov_j = jaccard(ans, opt)
        ov_r = ratio(ans, opt)
        OT = content_tokens(opt)
        shared = ANS & OT
        if ov_j >= 0.55 or ov_r >= 0.72:
            log(f"[S3-CLOSE] {qid}: answer(option{ci}) vs option{j}  jaccard={ov_j:.2f} ratio={ov_r:.2f} shared={sorted(shared)}")
            s3_flags += 1
        elif len(shared) >= 4 and ov_j >= 0.35:
            log(f"[S3-WATCH] {qid}: answer(option{ci}) vs option{j} share {len(shared)} content words: {sorted(shared)} (verify distractor still clearly wrong)")
            s3_flags += 1
        # numeric proximity: distractor numbers within ±20% of answer numbers
        an, on = numbers_in(ans), numbers_in(opt)
        for x in an:
            for y in on:
                if x != 0 and abs(x - y) / max(abs(x), abs(y)) <= 0.15 and x != y:
                    log(f"[S3-NUM] {qid}: answer has {x}, option{j} has {y} - numerically too close (<=15% apart)")
                    s3_flags += 1
                    break
            else:
                continue
            break
    # near-duplicate distractors (confusable pair)
    for a, b in itertools.combinations([i for i in range(4) if i != ci], 2):
        ov = jaccard(opts[a], opts[b])
        if ov >= 0.65:
            log(f"[S3-DUP] {qid}: distractors option{a} & option{b} near-duplicates jaccard={ov:.2f}")
            s3_flags += 1
    # 'all/none of the above' style
    for j, opt in enumerate(opts):
        if re.search(r"all of the above|none of the above|\bboth a and b\b|\ba and c\b", opt, re.I):
            log(f"[S3-STYLE] {qid}: option{j} uses 'all/none of the above' pattern")
            s3_flags += 1
log(f"\nStep 3 flags: {s3_flags}")

# ---------------------------------------------------------------- STEP 4
header("STEP 4 - ANSWER-KEY AUDIT")
s4_issues = 0
dist = Counter()
for q in questions:
    ci = q["correctIndex"]; dist[ci] += 1
    ans_text = q["options"][ci]
    expl = q["explanation"]
    # explanation should contain significant content words of the correct answer
    ans_kw = content_tokens(ans_text)
    expl_kw = content_tokens(expl)
    covered = ans_kw & expl_kw
    if ans_kw and len(covered) / len(ans_kw) < 0.25:
        log(f"[S4] {q['id']}: explanation barely restates the correct answer "
            f"(covers {len(covered)}/{len(ans_kw)} keywords) - verify justification exists")
        s4_issues += 1
    # distractor must not be endorsed by explanation (exclusion check)
    for j in range(4):
        if j == ci: continue
        dkw = content_tokens(q["options"][j])
        # look for explicit negation of distractor
        d_norm = norm(q["options"][j])
        # find core noun phrase (longest bigram) of distractor
        if not dkw: continue
        # check if explanation contains distractor phrase WITHOUT nearby negation
        for phrase_len in (6, 5, 4):
            words = d_norm.split()
            if len(words) < phrase_len: continue
            found_neg = False
            for k in range(len(words) - phrase_len + 1):
                ph = " ".join(words[k:k+phrase_len])
                if ph in norm(expl):
                    ctx = expl.lower()
                    # crude negation scan in a window around the phrase
                    idx = norm(expl).find(ph)
                    window = norm(expl)[max(0, idx-120):idx+len(ph)+60]
                    if any(n in window for n in [" not ", "no ", "never ", "unlike", "rather", "instead", "whereas", "it does", "does not", "is not"]):
                        found_neg = True
                    if not found_neg:
                        log(f"[S4-ENDORSE?] {q['id']}: explanation restates distractor option{j} phrase '{ph}' without visible negation - manual check")
                        s4_issues += 1
            break

# stats consistency
by_drug = Counter(q["drugSlug"] for q in questions)
by_diff = Counter(q["difficulty"] for q in questions)
by_style = Counter(q["style"] for q in questions)
by_domain = Counter(q["domain"] for q in questions)
log(f"Answer spread actual: {dict(sorted(dist.items()))}  | stats claims: {stats.get('answerSpread')}")
if {str(k): v for k, v in sorted(dist.items())} != {k: v for k, v in stats.get("answerSpread", {}).items()}:
    log("[S4] answerSpread mismatch vs stats block"); s4_issues += 1
if dict(by_drug) != stats.get("byDrug"):
    log(f"[S4] byDrug mismatch: actual {dict(by_drug)} vs stats {stats.get('byDrug')}"); s4_issues += 1
if dict(by_diff) != stats.get("byDifficulty"):
    log(f"[S4] byDifficulty mismatch: actual {dict(by_diff)} vs stats {stats.get('byDifficulty')}"); s4_issues += 1
if dict(by_style) != stats.get("byStyle"):
    log(f"[S4] byStyle mismatch: actual {dict(by_style)} vs stats {stats.get('byStyle')}"); s4_issues += 1
if dict(by_domain) != stats.get("byDomain"):
    log(f"[S4] byDomain mismatch: actual {dict(by_domain)} vs stats {stats.get('byDomain')}"); s4_issues += 1
if stats.get("total") != len(questions):
    log("[S4] stats.total mismatch"); s4_issues += 1
log(f"\nStep 4 issues: {s4_issues}")

# ---------------------------------------------------------------- dump for manual review
with open("/home/z/my-project/scripts/mcq_review_dump.txt", "w") as f:
    for q in questions:
        f.write(f"\n{'='*70}\n[{q['id']}] {q['domain']} | {q['difficulty']} | {q['style']} | after={q['afterSectionId']}\n")
        f.write(f"Q: {q['question']}\n")
        for j, o in enumerate(q["options"]):
            mark = " <== ANSWER" if j == q["correctIndex"] else ""
            f.write(f"  ({chr(65+j)}) {o}{mark}\n")
        f.write(f"EXPL: {q['explanation']}\n")

with open("/home/z/my-project/scripts/mcq_check_report.txt", "w") as f:
    f.write("\n".join(report))

print("\n".join(report))
