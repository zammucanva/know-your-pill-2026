# Review packet: the 'In short' sentence bank

**Status: NOT REVIEWED.** Each sentence below is shown above quoted Medication Guide text on medicine pages. A sentence is shown only when the quoted section matches every support pattern listed. It is not a review record; every decision field is blank.

For each sentence, check that it says the same as EVERY source wording listed, keeps any condition, number or limit those wordings carry, and cannot be read as a promise or as advice for one person.

## Reviewer identity (once per packet; no decision below counts without all of it)

Name: ____
Professional qualification (for example MBBS, MD Psychiatry, MD Pharmacology, PharmD): ____
Registration body and number (for example National Medical Commission or State Medical Council): ____
Affiliation: ____
Conflicts of interest (write 'none' if none): ____
Date of review: ____
Scope (what you reviewed and against what, in your own words; the record's `scope` field): ____

Record the outcome in the matching JSON template (`<slug>.record-template.json`) and check it with `bun scripts/evidence/review-record-check.ts <file>`. The record also carries the packet digest (which ties it to this exact packet content) and the check fails if any item has changed since. A passing check means the record is complete. It is not clinical approval, and the app never shows a statement as reviewed on that basis alone.

## antidepressant-suicidality-early-or-dose (shown 1 time, 1 distinct source wording)

Plain sentence: Antidepressant medicines may increase suicidal thoughts or actions in some children, teenagers and young adults within the first few months of treatment or when the dose is changed.

Support patterns (all must match): `increase suicidal thoughts or actions in some children, teenagers,? and young adults within the first few months of treatment (or|and) when the dose is changed`

- [1] • Milnacipran hydrochloride tablets and antidepressant medicines may increase suicidal thoughts or actions in some children, teenagers, and young adults within the first few months of treatment or when the dose is changed.

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## antidepressant-suicidality-early (shown 4 times, 4 distinct source wordings)

Plain sentence: Antidepressant medicines may increase suicidal thoughts or actions in some children, teenagers and young adults within the first few months of treatment.

Support patterns (all must match): `increase suicidal thoughts or actions in some children, teenagers,? and young adults within the first few months of treatment(?! (or|and) when)`

- [1] All risks and benefits of treatment with antidepressant medicines All treatment choices for depression or other serious mental illnesses Antidepressant medicines may increase suicidal thoughts or actions in some children, teenagers, and young adults within the first few months of treatment.
- [1] Antidepressant medications may increase suicidal thoughts or actions in some children, teenagers, and young adults within the first few months of treatment.
- [1] • Antidepressant medicines may increase suicidal thoughts or actions in some children, teenagers, and young adults within the first few months of treatment.
- [1] Bupropion may increase suicidal thoughts or actions in some children, teenagers, and young adults within the first few months of treatment.

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## antidepressant-suicidality (shown 0 times, 0 distinct source wordings)

Plain sentence: Antidepressant medicines may increase suicidal thoughts or actions in some children, teenagers and young adults.

Support patterns (all must match): `increase suicidal thoughts or actions in some children, teenagers,? and young adults(?! within the first)`


Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## antidepressant-suicidality-young (shown 0 times, 0 distinct source wordings)

Plain sentence: Antidepressant medicines may increase suicidal thoughts or actions in some young people.

Support patterns (all must match): `antidepressant[^.]{0,200}suicidal thoughts or actions in some (people|children|patients)[^.]{0,80}(young|younger|years of age)|may increase (the risk of )?suicidal thoughts or actions in some (people|children|patients)[^.]{0,80}(young|younger|years of age)`  and  `^(?![\s\S]*(first few months|children, teenagers,? and young adults))`


Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## antiepileptic-suicidality (shown 0 times, 0 distinct source wordings)

Plain sentence: Medicines for seizures may cause suicidal thoughts or actions in a very small number of people.

Support patterns (all must match): `antiepileptic[^.]{0,250}suicidal thoughts or actions|suicidal thoughts or actions[^.]{0,250}antiepileptic`  and  `very small number|small number`


Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## watch-mood-changes (shown 10 times, 9 distinct source wordings)

Plain sentence: Pay close attention to new or sudden changes in mood, behaviour, thoughts or feelings, especially when the medicine is started or the dose is changed.

Support patterns (all must match): `pay close attention to any changes`  and  `(started|dose is changed|dose changes)`

- [2] Pay close attention to any changes, especially sudden changes, in mood, behaviors, thoughts, or feelings. | This is very important when an antidepressant medicine is started or when the dose is changed.
- [1] Pay close attention to any changes, especially sudden changes in mood, behavior, thoughts, or feelings, of if you develop suicidal thoughts or actions. | This is very important when an antidepressant medicine is started or when the dose is changed.
- [1] Pay close attention to any changes, especially sudden changes in mood, behaviors, thoughts, or feelings. | This is very important when an antidepressant medicine is started or when the dose is changed.
- [1] Pay close attention to any changes, especially sudden changes in mood, behavior, thoughts, or feelings, or if you develop suicidal thoughts or actions. | This is very important when an antidepressant medicine is started or when the dose is changed.
- [1] o Pay close attention to any changes, especially sudden changes in mood, behaviors, thoughts, or feelings. | This is very important when an antidepressant medicine is started or when the dose is changed.
- [1] • Pay close attention to any changes, especially sudden changes, in mood, behaviors, thoughts, or feelings. | This is very important when an antidepressant medicine is started or when the dose is changed.
- [1] Pay close attention to any changes, especially sudden changes in mood, behaviors, thoughts, or feelings. | This is very important when brexpiprazole tablets or the antidepressant medicine is started or when the dose is changed.
- [1] ○ Pay close attention to any changes, especially sudden changes in mood, behaviors, thoughts, or feelings. | This is very important when VRAYLAR or the antidepressant medicine is started or when the dose is changed.
- ... and 1 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## call-for-mood-changes (shown 10 times, 8 distinct source wordings)

Plain sentence: Call your healthcare provider right away to report new or sudden changes in mood, behaviour, thoughts or feelings.

Support patterns (all must match): `call (the|your) (health ?care )?provider right away to report`

- [2] Call your healthcare provider right away to report new or sudden changes in mood, behavior, thoughts, or feelings or if you develop suicidal thoughts or actions.
- [2] Call the healthcare provider right away to report new or sudden changes in mood, behavior, thoughts, or feelings.
- [1] Call your healthcare provider right away to report new or sudden changes in mood, behavior, thoughts or feelings.
- [1] Call your healthcare provider right away to report new or sudden changes in mood, behavior, thoughts, or feelings.
- [1] o Call the healthcare provider right away to report new or sudden changes in mood, behavior, thoughts, or feelings.
- [1] • Call the healthcare provider right away to report new or sudden changes in mood, behavior, thoughts, or feelings.
- [1] Call your healthcare provider right away to report new or sudden changes in mood, behavior, thoughts, or feelings, or if you develop suicidal thoughts or actions.
- [1] ○ Call the healthcare provider right away to report new or sudden changes in mood, behavior, thoughts, or feelings, or if you develop suicidal thoughts or actions.

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## suicidal-thoughts-get-help (shown 19 times, 18 distinct source wordings)

Plain sentence: If you have thoughts about suicide or dying, call your healthcare provider right away.

Support patterns (all must match): `thoughts about suicide or dying`  and  `(call|contact)[^.]{0,80}(provider|doctor)`

- [2] Call your healthcare provider right away if you have any of the following: | Call your healthcare provider right away if you have any of these symptoms, especially if they are new, worse, or worry you: | thoughts about suicide or dying attempts to commit suicide new or worse depression new or worse anxiety feeling agitated or restless panic attacks trouble sleeping (insomnia) new or worse irritabi
- [1] Call your healthcare provider right away to report new or sudden changes in mood, behavior, thoughts, or feelings or if you develop suicidal thoughts or actions. | Call your healthcare provider between visits as needed, especially if you have concerns about symptoms. | Call your healthcare provider or get emergency help right away if you have any of the following symptoms, especially if they are n
- [1] Call your healthcare provider right away to report new or sudden changes in mood, behavior, thoughts or feelings. | Call your healthcare provider between visits as needed, especially if you are worried about symptoms. | Call a healthcare provider right away if you have any of the following symptoms, especially if they are new, worse, or worry you: | Thoughts about suicide or dying Attempts to comm
- [1] Call the healthcare provider right away to report new or sudden changes in mood, behavior, thoughts, or feelings. | Call the healthcare provider between visits as needed, especially if you have concerns about symptoms. | Call your healthcare provider right away if you have any of the following symptoms, especially if they are new, worse, or worry you: | o thoughts about suicide or dying o trouble 
- [1] Call your healthcare provider right away to report new or sudden changes in mood, behavior, thoughts, or feelings or if you develop suicidal thoughts or actions. | Call your healthcare provider between visits as needed, especially if you have concerns about symptoms. | Call your healthcare provider or get emergency medical help right away if you or your family member have any of the following symp
- [1] Watch for these changes and call your healthcare provider right away if you notice: | Call your healthcare provider right away or go to the nearest hospital emergency room if you have any of the following symptoms, especially if they are new, worse, or worry you: | attempts to commit suicide feeling agitated, restless, angry or irritable acting on dangerous impulses trouble sleeping (insomnia) act
- [1] Call your healthcare provider right away to report new or sudden changes in mood, behavior, thoughts, or feelings. | Call your healthcare provider between visits as needed, especially if you have concerns about symptoms. | Call your healthcare provider or get emergency medical help right away if you or your family member have any of the following symptoms, especially if they are new, worse, or wor
- [1] o Call the healthcare provider right away to report new or sudden changes in mood, behavior, thoughts, or feelings. | Call the healthcare provider between visits as needed, especially if you have concerns about symptoms. | Call a healthcare provider right away if you or your family member has any of the following symptoms, especially if they are new, worse, or worry you: | thoughts about suicide o
- ... and 10 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## dementia-death (shown 7 times, 7 distinct source wordings)

Plain sentence: Older people with dementia-related psychosis who take antipsychotic medicines have a higher chance of death.

Support patterns (all must match): `dementia-related psychosis`  and  `(increased|higher) (risk|chance) of (death|dying)|risk of death`

- [1] chest pain flu-like symptoms fast heartbeat or palpitations feel tired or faint shortness of breath swollen legs, ankles, or feet fever Increased risk of death in elderly people with dementia-related psychosis. | Medicines like clozapine tablets can increase the risk of death in elderly people who have lost touch with reality (psychosis) due to confusion and dementia. | Clozapine tablets are not f
- [1] Increased risk of death in elderly people with dementia-related psychosis. | Medicines like lurasidone hydrochloride tablets can raise the risk of death in elderly people who have lost touch with reality (psychosis) due to confusion and memory loss (dementia). | Lurasidone hydrochloride tablets are not approved for the treatment of people with dementia-related psychosis.
- [1] Increased risk of death in elderly people who are confused, have memory loss and have lost touch with reality (dementia-related psychosis). | Increased risk of death in elderly people who are confused, have memory loss and have lost touch with reality (dementia-related psychosis).
- [1] • See “What is the most important information I should know about olanzapine tablets?”, which describes the increased risk of death in elderly people with dementia-related psychosis and the risks of high blood sugar, high cholesterol and triglyceride levels, and weight gain. | • Increased incidence of stroke or “mini-strokes” called transient ischemic attacks (TIAs) in elderly people with dementia
- [1] • Increased risk of death in elderly patients with dementia-related psychosis: | Medicines like aripiprazole tablets can raise the risk of death in elderly people who have lost touch with reality (psychosis) due to confusion and memory loss (dementia). | Aripiprazole tablets are not approved for the treatment of patients with dementia-related psychosis.
- [1] Increased risk of death in elderly people with dementia-related psychosis. | Medicines like brexpiprazole tablets can raise the risk of death in elderly people who have lost touch with reality (psychosis) due to confusion and memory loss (dementia). | Brexpiprazole tablets are not approved for the treatment of people with dementia-related psychosis.
- [1] Increased risk of death in elderly people with dementia related psychosis. | Medicines like VRAYLAR can raise the risk of death in elderly who have lost touch with reality (psychosis) due to confusion and memory loss (dementia). | VRAYLAR is not approved for the treatment of patients with dementia-related psychosis.

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## opioid-sedation (shown 11 times, 11 distinct source wordings)

Plain sentence: Using it together with opioid medicines (and with other medicines or substances that slow the brain) can cause severe drowsiness, breathing problems, coma and death.

Support patterns (all must match): `opioid`  and  `(alcohol|depressants|CNS)`  and  `(severe drowsiness|profound sedation|sedation)`  and  `breathing`  and  `coma`  and  `death`

- [1] Taking benzodiazepines with opioid medicines, alcohol, or other central nervous system (CNS) depressants (including street drugs) can cause severe drowsiness, breathing problems (respiratory depression), coma and death. | – shallow or slowed breathing – breathing stops (which may lead to the heart stopping) – excessive sleepiness (sedation) Do not drive or operate heavy machinery until you know ho
- [1] Taking benzodiazepines with opioid medicines, alcohol, or other central nervous system (CNS) depressants (including street drugs) can cause severe drowsiness, breathing problems (respiratory depression), coma, and death. | shallow or slowed breathing breathing stops (which may lead to the heart stopping) excessive sleepiness (sedation) Do not drive or operate heavy machinery until you know how tak
- [1] Taking benzodiazepines with opioid medicines, alcohol, or other central nervous system (CNS) depressants (including street drugs) can cause severe drowsiness, breathing problems (respiratory depression), coma and death. | shallow or slowed breathing breathing stops (which may lead to the heart stopping) excessive sleepiness (sedation)Do not drive or operate heavy machinery until you know how takin
- [1] Taking benzodiazepines with opioid medicines, alcohol, or other central nervous system (CNS) depressants (including street drugs) can cause severe drowsiness, breathing problems (respiratory depression), coma and death. | shallow or slowed breathing, breathing stops (which may lead to the heart stopping), excessive sleepiness (sedation). | There is a risk of abuse, misuse, and addiction with benzo
- [1] Taking benzodiazepines with opioid medicines, alcohol, or other central nervous system depressants (including street drugs) can cause severe drowsiness, breathing problems (respiratory depression), coma and death. | • shallow or slowed breathing • breathing stops (which may lead to the heart stopping) • excessive sleepiness (sedation) Do not drive or operate heavy machinery until you know how taki
- [1] Taking benzodiazepines with opioid medicines, alcohol, or other central nervous system (CNS) depressants (including street drugs) can cause severe drowsiness, breathing problems (respiratory depression), coma and death. | – shallow or slowed breathing – breathing stops (which may lead to the heart stopping) – excessive sleepiness (sedation). | Do not drive or operate heavy machinery until you know
- [1] Taking benzodiazepines with opioid medicines, alcohol, or other central nervous system depressants (CNS) (including street drugs) can cause severe drowsiness, breathing problems (respiratory depression), coma and death. | shallow or slowed breathing breathing stops (which may lead to the heart stopping) excessive sleepiness (sedation) Do not drive or operate heavy machinery until you know how taki
- [1] Taking benzodiazepines with opioid medicines, alcohol, or other central nervous system(CNS) depressants (including street drugs) can cause severe drowsiness, breathing problems (respiratory depression), coma and death.Get emergency help right away if any of the following happens: | shallow or slowed breathing breathing stops (which may lead to the heart stopping) excessive sleepiness (sedation). |
- ... and 3 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## abuse-misuse-addiction-overdose-death (shown 16 times, 16 distinct source wordings)

Plain sentence: There is a risk of abuse, misuse and addiction, which can lead to overdose and death.

Support patterns (all must match): `abuse,? misuse,? and addiction`  and  `overdose`  and  `death`

- [1] Taking benzodiazepines with opioid medicines, alcohol, or other central nervous system (CNS) depressants (including street drugs) can cause severe drowsiness, breathing problems (respiratory depression), coma and death. | • Risk of abuse, misuse, and addiction. | There is a risk of abuse, misuse, and addiction with benzodiazepines, including XANAX, which can lead to overdose and serious side effec
- [1] Taking benzodiazepines with opioid medicines, alcohol, or other central nervous system (CNS) depressants (including street drugs) can cause severe drowsiness, breathing problems (respiratory depression), coma, and death. | Risk of abuse, misuse, and addiction.There is a risk of abuse, misuse, and addiction with benzodiazepines, including clonazepam tablet which can lead to overdose and serious sid
- [1] Taking benzodiazepines with opioid medicines, alcohol, or other central nervous system (CNS) depressants (including street drugs) can cause severe drowsiness, breathing problems (respiratory depression), coma and death. | Risk of abuse, misuse, and addiction. | There is a risk of abuse, misuse, and addiction with benzodiazepines including clorazepate dipotassium tablets which can lead to overdose 
- [1] Taking benzodiazepines with opioid medicines, alcohol, or other central nervous system (CNS) depressants (including street drugs) can cause severe drowsiness, breathing problems (respiratory depression), coma and death. | Risk of abuse, misuse, and addiction. | There is a risk of abuse, misuse, and addiction with benzodiazepines, including VALIUM, which can lead to overdose and serious side effect
- [1] Taking benzodiazepines with opioid medicines, alcohol, or other central nervous system depressants (including street drugs) can cause severe drowsiness, breathing problems (respiratory depression), coma and death. | • Risk of abuse, misuse, and addiction. | There is a risk of abuse, misuse, and addiction with benzodiazepines including lorazepam tablets which can lead to overdose and serious side e
- [1] Taking benzodiazepines with opioid medicines, alcohol, or other central nervous system (CNS) depressants (including street drugs) can cause severe drowsiness, breathing problems (respiratory depression), coma and death. | • Risk of abuse, misuse, and addiction. | There is a risk of abuse, misuse, and addiction with benzodiazepines, including oxazepam which can lead to overdose and serious side eff
- [1] Taking benzodiazepines with opioid medicines, alcohol, or other central nervous system depressants (CNS) (including street drugs) can cause severe drowsiness, breathing problems (respiratory depression), coma and death. | Risk of abuse, misuse, and addiction. | There is a risk of abuse, misuse, and addiction with benzodiazepines, including estazolam, which can lead to overdose and serious side eff
- [1] Taking benzodiazepines with opioid medicines, alcohol, or other central nervous system(CNS) depressants (including street drugs) can cause severe drowsiness, breathing problems (respiratory depression), coma and death.Get emergency help right away if any of the following happens: | Risk of abuse, misuse, and addiction.There is a risk of abuse, misuse, and addiction with benzodiazepines, including 
- ... and 8 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## abuse-misuse-addiction-overdose (shown 0 times, 0 distinct source wordings)

Plain sentence: There is a risk of abuse, misuse and addiction, which can lead to overdose.

Support patterns (all must match): `abuse,? misuse,? and addiction`  and  `overdose`


Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## physical-dependence-withdrawal (shown 0 times, 0 distinct source wordings)

Plain sentence: Your body can become physically dependent on it. Stopping suddenly or lowering the dose too quickly can cause withdrawal reactions, which can be life-threatening.

Support patterns (all must match): `physical dependence`  and  `withdrawal reactions[^.]{0,120}life-threatening|life-threatening[^.]{0,120}withdrawal reactions`  and  `(stop(ping)?|reduc(e|ing)|lower(ing)?)[^.]{0,120}(suddenly|abruptly|too (quickly|fast)|rapidly)`  and  `^(?![\s\S]*(several days|several weeks|for weeks))`


Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## complex-sleep-behaviours (shown 7 times, 7 distinct source wordings)

Plain sentence: It can cause sleep-walking, sleep-driving or other activities while you are not fully awake, which you may not remember.

Support patterns (all must match): `sleep-?(walking|driving)`  and  `(not fully awake|not remember|do not remember)`

- [1] The next morning, you may not remember that you did anything during the night. | driving a car (“sleep-driving”) making and eating food talking on the phone having sex sleep-walking Call your healthcare provider right away if you find out that you have done any of the above activities after taking estazolam.
- [1] The next morning, you may not remember that you did anything during the night. | driving a car (“sleep-driving”) having sex making and eating food sleep-walking talking on the phone Call your healthcare provider right away if you find out that you have done any of the above activities after taking Quazepam Tablets.
- [1] The next morning, you may not remember that you did anything during the night. | o driving a car (“sleep-driving”) o making and eating food o talking on the phone o having sex o sleep-walking Call your healthcare provider right away if you find out that you have done any of the above activities after taking temazepam.
- [1] The next morning, you may not remember that you did anything during the night. | – driving a car ("sleep-driving") – making and eating food – talking on the phone – having sex – sleep-walking Call your healthcare provider right away if you find out that you have done any of the above activities after taking triazolam.
- [1] complex sleep behaviors such as sleep-walking, sleep-driving, preparing and eating food, making phone calls, having sex or doing other activities while not fully awake that you may not remember the next morning.
- [1] The next morning, you may not remember that you did anything during the night. | driving a car ("sleep-driving") making and eating food talking on the phone having sex sleep-walking Call your doctor right away if you find out that you have done any of the above activities after taking Ramelteon tablets.
- [1] The next morning, you may not remember that you did anything during the night. | • driving a car ("sleep-driving") • making and eating food • talking on the phone • having sex • sleep-walking Important: | • have ever experienced a complex sleep behavior (such as driving a car, making and eating food, talking on the phone or having sex while not fully awake) after taking zaleplon • drink alcohol • 

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## serotonin-syndrome (shown 7 times, 7 distinct source wordings)

Plain sentence: The text lists signs of serotonin syndrome, a potentially life-threatening problem. Get medical help right away if you have them.

Support patterns (all must match): `(call|go to the nearest|get (emergency|medical))[^.:]{0,200}(signs and symptoms|symptoms) of serotonin syndrome`  and  `life-threatening`

- [1] A potentially life-threatening problem called serotonin syndrome can happen when you take TRINTELLIX with certain other medicines. | Call your healthcare provider or go to the nearest hospital emergency room right away if you have any of the following signs and symptoms of serotonin syndrome:
- [1] See, “What is the most important information I should know about desvenlafaxine extended-release tablets?” Serotonin syndrome.A potentially life-threatening problem called serotonin syndrome can happen when you take desvenlafaxine extended-release tablets with certain other medicines. | See, “Do not take desvenlafaxine extended-release tablets if you:” Call your healthcare provider or go to the ne
- [1] A potentially life-threatening problem called serotonin syndrome can happen when FETZIMA is taken with certain other medicines. | ” C all you r healthcare provider or go to the nearest hospital emergency room right away if you have any of the following signs and symptoms of serotonin syndrome:
- [1] This condition can be life-threatening, symptoms may include: | Call your healthcare provider right away if you get these symptoms and they are severe or if they happen with any of the symptoms of serotonin syndrome listed above.
- [1] A potentially life-threatening problem called serotonin syndrome can happen when vilazodone hydrochloride tablets are taken with certain other medicines. | See, "Who should not take vilazodone hydrochloride tablets?" Stop taking vilazodone hydrochloride tablets and call your healthcare provider or go to the nearest hospital emergency room right away if you have any of the following signs and sympt
- [1] This problem may happen when Dextroamphetamine Sulfate Tablets is taken with certain other medicines and may be life-threatening. | Stop taking Dextroamphetamine Sulfate Tablets and call your healthcare provider or go to the nearest hospital emergency room right away if you or your child develop any of the following signs and symptoms of serotonin syndrome:
- [1] This problem may happen when Amphetamine Sulfate Tablets is taken with certain other medicines and may be life-threatening. | Call your healthcare provider or go to the nearest hospital emergency room right away if you or your child develop any of the following signs and symptoms of serotonin syndrome agitation, hallucinations, coma fast heartbeat flushing Seizure sweating or fever Loss of coordin

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## allergic-reaction (shown 1 time, 1 distinct source wording)

Plain sentence: The text lists signs of a serious allergic reaction. Get medical help right away if you have them.

Support patterns (all must match): `(signs|symptoms) of (a |an )?(serious )?allergic reaction`  and  `(emergency|medical help|call your (healthcare provider|doctor)|call a healthcare provider)`

- [1] If you have a seizure while taking CONTRAVE, stop taking CONTRAVE and call your healthcare provider right away. | You or someone close to you should get emergency medical help right away if you: | Stop taking CONTRAVE and call your healthcare provider or go to the nearest hospital emergency room right away if you have any of the following signs and symptoms of an allergic reaction:

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## take-exactly (shown 57 times, 57 distinct source wordings)

Plain sentence: Take it exactly as your healthcare provider tells you.

Support patterns (all must match): `exactly as (your|a)? ?(health ?care )?provider (tells|told|prescribed)|exactly as prescribed`

- [1] Take TRINTELLIX exactly as your healthcare provider tells you to take it.
- [1] Take nefazodone at the same time every day exactly as prescribed by your doctor.
- [1] Take trazodone hydrochloride tablets exactly as your healthcare provider tells you.
- [1] Take desvenlafaxine extended-release tablets exactly as your healthcare provider tells you to.
- [1] Take FETZIMA exactly as your healthcare provider tells you to take it.
- [1] • Take milnacipran hydrochloride tablets exactly as your healthcare provider tells you.
- [1] Take clozapine tablets exactly as your healthcare provider tells you to take it.
- [1] Take lurasidone hydrochloride tablets exactly as your healthcare provider tells you to take it.
- ... and 49 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## dose-not-yourself (shown 18 times, 14 distinct source wordings)

Plain sentence: Do not change your dose yourself.

Support patterns (all must match): `do not change your dose`

- [4] Do not change your dose without talking to your healthcare provider.
- [2] Do not change your dose on your own.
- [1] Do not change your dose or stop taking nefazodone without talking with your doctor first.
- [1] Do not change your dose or stop taking FETZIMA without first talking to your healthcare provider.
- [1] Do not change your dose or stop taking vilazodone hydrochloride tablets without first talking to your healthcare provider.
- [1] Do not change your dose or stop taking clozapine tablets unless your healthcare provider tells you to.
- [1] • Do not change your dose or stop taking your medicine without your doctor’s approval.
- [1] • Do not change your dose of gabapentin tablets without talking to your healthcare provider.
- ... and 6 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## do-not-stop (shown 32 times, 32 distinct source wordings)

Plain sentence: Do not stop taking it without first talking to your healthcare provider.

Support patterns (all must match): `(do not|never) stop[^.]{0,140}(without|suddenly|abruptly)`  and  `(talk|talking|talked) (to|with)[^.]{0,60}(provider|doctor)`

- [1] Never stop an antidepressant medicine without first talking to a healthcare provider. | Talk to your healthcare provider about the side effects of your medicines.
- [1] If you feel drowsy after taking trazodone hydrochloride tablets, talk to your healthcare provider. | Do not stop taking trazodone hydrochloride tablets without talking to your healthcare provider.
- [1] Do not stop taking trazodone hydrochloride tablets without talking to your healthcare provider.
- [1] Never stop an antidepressant medicine without first talking to your healthcare provider. | Talk to the healthcare provider about the side effects of the medicine prescribed for you or your family member. | Talk to your child's healthcare provider for more information.
- [1] • Never stop an antidepressant medicine without first talking to a healthcare provider. | Talk to the healthcare provider about the side effects of the medicine prescribed for you or your family member. | Talk to your child’s healthcare provider for more information.
- [1] Do not stop taking gabapentin tablets without first talking to your healthcare provider.
- [1] Do not stop taking gabapentin tablets without first talking to a healthcare provider.
- [1] • Do not change your dose of gabapentin tablets without talking to your healthcare provider. | • Do not stop taking gabapentin tablets without talking to your healthcare provider first.
- ... and 24 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## stopping-suddenly-problems (shown 37 times, 32 distinct source wordings)

Plain sentence: Stopping suddenly can cause problems.

Support patterns (all must match): `stopping[^.]{0,120}(suddenly|abruptly)[^.]{0,120}(can|may) cause`

- [3] Stopping an antidepressant medicine suddenly can cause other symptoms.
- [2] Stopping tiagabine hydrochloride suddenly can cause serious problems.
- [2] Stopping carbamazepine suddenly can cause serious problems.
- [2] Stopping valproic acid capsules suddenly can cause serious problems.
- [1] Stopping gabapentin tablets suddenly can cause serious problems.
- [1] • Stopping gabapentin tablets suddenly can cause serious problems. | Stopping a seizure medicine suddenly in a person who has epilepsy can cause seizures that will not stop (status epilepticus).
- [1] Stopping TOPAMAX suddenly can cause serious problems.
- [1] Stopping TOPAMAX suddenly may cause serious problems.
- ... and 24 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## missed-take (shown 8 times, 8 distinct source wordings)

Plain sentence: If you miss a dose, take it as soon as you remember.

Support patterns (all must match): `miss(ed)? a dose`  and  `take (it|the missed dose) as soon as you remember`

- [1] If you miss a dose of FETZIMA, take the missed dose as soon as you remember.
- [1] If you miss a dose of vilazodone hydrochloride tablets, take the missed dose as soon as you remember.
- [1] • If you miss a dose of olanzapine tablets, take the missed dose as soon as you remember.
- [1] If you miss a dose of quetiapine tablets, take it as soon as you remember.
- [1] • If you miss a dose of aripiprazole tablets, take the missed dose as soon as you remember.
- [1] • If you miss a dose of lamotrigine tablets, take it as soon as you remember.
- [1] If you miss a dose of buprenorphine sublingual tablets, take it as soon as you remember.
- [1] If you miss a dose of varenicline tablets, take it as soon as you remember.

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## missed-skip (shown 7 times, 5 distinct source wordings)

Plain sentence: If it is almost time for the next dose, skip the missed one and take the next dose at the usual time.

Support patterns (all must match): `almost time for (your |the )?next dose`  and  `(skip|do not take) the missed dose`

- [2] If it is almost time for the next dose, skip the missed dose and take your next dose at the regular time.
- [2] If it is almost time for the next dose, just skip the missed dose and take your next dose at the regular time.
- [1] If it is almost time for your next dose, just skip the missed dose.
- [1] If it is almost time for your next dose, skip the missed dose and take the next dose at your regular time.
- [1] If it is almost time for your next dose, skip the missed dose.

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## no-double-dose (shown 0 times, 0 distinct source wordings)

Plain sentence: Do not take two doses at the same time.

Support patterns (all must match): `(do not|never) take (two|double)[^.]{0,80}(at the same time|doses)`


Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## with-or-without-food (shown 16 times, 16 distinct source wordings)

Plain sentence: It can be taken with or without food.

Support patterns (all must match): `with or without food`

- [1] Take TRINTELLIX with or without food.
- [1] You may take nefazodone with or without food.
- [1] Desvenlafaxine extended-release tablets may be taken either with or without food.
- [1] Take FETZIMA with or without food.
- [1] • You may take milnacipran hydrochloride tablets with or without food.
- [1] Take clozapine tablets with or without food.
- [1] • Olanzapine tablets can be taken with or without food.
- [1] Take quetiapine tablets by mouth, with or without food.
- ... and 8 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## swallow-whole (shown 11 times, 11 distinct source wordings)

Plain sentence: Swallow it whole.

Support patterns (all must match): `swallow(ed)?[^.]{0,60}whole(?![^.]*\b(or|and|but|except)\b)`  and  `^(?![\s\S]*(score line|broken in half|cut in half|half tablet))`

- [1] Swallow desvenlafaxine extended-release tablets whole, with fluid.
- [1] Swallow FETZIMA capsules whole.
- [1] • Swallow ziprasidone capsules whole.
- [1] • Aripiprazole tablets should be swallowed whole.
- [1] Swallow the tablets whole.
- [1] • Swallow the capsules whole.
- [1] Swallow valproic acid capsules whole. | Tell your healthcare provider if you cannot swallow valproic acid capsules whole.
- [1] Clonazepam tablets should be taken with water and swallowed whole.
- ... and 3 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## overdose-get-help (shown 21 times, 21 distinct source wordings)

Plain sentence: If you take too much, call your healthcare provider or go to the nearest hospital emergency room right away.

Support patterns (all must match): `((take|taken) too (much|many)|overdose)[^.]{0,200}(call|contact)[^.]{0,120}(healthcare provider|doctor)[^.]{0,200}(hospital )?emergency room`

- [1] If you take too much trazodone hydrochloride tablets, call your healthcare provider, your Poison Control Center at 1-800-222-1222, or go to the nearest emergency room right away.
- [1] • If you take too much milnacipran hydrochloride tablets, call your healthcare provider or go to the nearest hospital emergency room right away.
- [1] If you take too much (overdose) clozapine, call your healthcare provider or the Poison Help line at 1-800-222-1222 or go to the nearest hospital emergency room right away.
- [1] If you take too much lurasidone hydrochloride tablets, call your healthcare provider or poison control center or go to the nearest hospital emergency room right away.
- [1] What to do for an overdose In case of an overdose, call your doctor or poison control center right away or go to the nearest emergency room.
- [1] • If you take too many aripiprazole tablets, call your healthcare provider or poison control center at 1-800-222-1222 right away, or go to the nearest hospital emergency room.
- [1] If you take too much VRAYLAR, call your healthcare provider or Poison Control Center at 1-800-222-1222 or go to the nearest hospital emergency room, right away.
- [1] If you take too much TOPAMAX, call your healthcare provider right away or go to the nearest emergency room.
- ... and 13 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## tell-all-medicines (shown 33 times, 14 distinct source wordings)

Plain sentence: Tell your healthcare provider about all the medicines you take, including prescription and over-the-counter medicines, vitamins and herbal supplements.

Support patterns (all must match): `about all the medicines you take`

- [17] Tell your healthcare provider about all the medicines you take, including prescription and over-the-counter medicines, vitamins, and herbal supplements.
- [2] Tell your healthcare provider about all the medicines you take, including prescription and over-the-counter medicines, vitamins or herbal supplements.
- [2] Tell your healthcare provider about all the medicines you take, including prescription and non-prescription medicines, vitamins, and herbal supplements.
- [2] Tell your doctor about all the medicines you take, including prescription and over-the-counter medicines, vitamins, and herbal supplements.
- [1] Tell your healthcare provider about all the medicines you take, including prescription and over-the counter medicines, vitamins, and herbal supplements.
- [1] Tell your healthcare provider about all the medicines you take, including prescription, over-the-counter medicines, vitamins, and herbal supplements.
- [1] Tell your healthcare provider about all the medicines you take,including prescription and over-the-counter medicines, vitamins, and herbal supplements.
- [1] have or have had depression, mood problems, or suicidal thoughts or behavior have any other medical conditions Tell your healthcare provider about all the medicines you take,including prescription and non-prescription medicines, vitamins, herbal supplements and medicines that you take for a short period of time.
- ... and 6 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## tell-all-conditions (shown 35 times, 35 distinct source wordings)

Plain sentence: Tell your healthcare provider about all your medical conditions.

Support patterns (all must match): `about all (of )?your medical conditions`

- [1] Before taking TRINTELLIX, tell your healthcare provider about all your medical conditions, including if you:
- [1] Before you take trazodone hydrochloride tablets tell your healthcare provider about all of your medical conditions, including if you:
- [1] Before taking desvenlafaxine extended-release tablets tell your healthcare provider about all your medical conditions, including if you:
- [1] Before taking FETZIMA, tell your healthcare provider about all your medical conditions, including if you:
- [1] Before taking vilazodone hydrochloride tablets, tell your healthcare provider about all your medical conditions, including if you:
- [1] Before taking clozapine tablets, tell your healthcare provider about all your medical conditions, including if you:
- [1] Before taking lurasidone hydrochloride tablets, tell your healthcare provider about all of your medical conditions, including if you:
- [1] Before taking aripiprazole tablets, tell your healthcare provider about all your medical conditions, including if you have or had:
- ... and 27 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## tell-pregnancy (shown 42 times, 36 distinct source wordings)

Plain sentence: Tell your healthcare provider if you are pregnant or plan to become pregnant.

Support patterns (all must match): `(are|become) pregnant or plan to (become|get) pregnant|pregnant or plan to (become|get) pregnant`

- [5] are pregnant or plan to become pregnant.
- [3] • are pregnant or plan to become pregnant.
- [1] have or had bleeding problems have, or have a family history of, bipolar disorder, mania, or hypomania have high pressure in the eye (glaucoma) have low sodium levels in your blood are pregnant or plan to become pregnant.
- [1] have heart problems, including QT prolongation or a family history of it have ever had a heart attack have bipolar disorder have liver or kidney problems have other serious medical conditions are pregnant or plan to become pregnant.
- [1] have high blood pressure have heart problems have cerebrovascular problems or had a stroke have or had bleeding problems have, or have a family history of, bipolar disorder, mania or hypomania have high cholesterol or high triglycerides have or had depression, suicidal thoughts or behavior have kidney or liver problems have or had seizures or convulsions have low sodium levels in your blood are pr
- [1] have or have a family history of suicide, depression, bipolar disorder, mania, or hypomania have high blood pressure have or had heart problems, including fast heartbeat, or stroke have or had bleeding problems have glaucoma (high pressure in the eye) have or had problems urinating (hesitation) or emptying your bladder (retention) have or had seizures (convulsions) have low sodium levels in your b
- [1] • have any other medical conditions • are pregnant or plan to become pregnant.
- [1] have or have a family history of suicide, depression, bipolar disorder, mania or hypomania have or had bleeding problems have or had seizures or convulsions have high pressure in the eye (glaucoma) have low sodium levels in your blood drink alcohol are pregnant or plan to become pregnant.
- ... and 28 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## tell-breastfeeding (shown 37 times, 9 distinct source wordings)

Plain sentence: Tell your healthcare provider if you are breastfeeding or plan to breastfeed.

Support patterns (all must match): `breastfeeding or plan to breastfeed`

- [19] are breastfeeding or plan to breastfeed.
- [11] • are breastfeeding or plan to breastfeed.
- [1] have had any problem with the way your heart beats or any heart related illness or disease any family history of heart disease, including recent heart attack have had any problem with fainting or dizziness are taking or have recently taken any prescription medicines are taking any over-the-counter medicines you can buy without a prescription, including natural/herbal remedies have had any problems
- [1] The purpose of this registry is to collect information about the safety of antiepileptic drugs during pregnancy are breastfeeding or plan to breastfeed.
- [1] have a history of depression, mental illness, or suicidal thoughts have liver disease have a lung disease or breathing problems are pregnant, or planning to become pregnant are breastfeeding or plan to breastfeed.
- [1] o Babies born to mothers who take zolpidem tartrate tablets during the third trimester of pregnancy may have symptoms of breathing problems and sedation (such as sleepiness or low muscle tone) • are breastfeeding or plan to breastfeed.
- [1] • if you are breastfeeding or plan to breastfeed.
- [1] if you are breastfeeding or plan to breastfeed.
- ... and 1 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## alcohol (shown 8 times, 7 distinct source wordings)

Plain sentence: Do not drink alcohol while taking it.

Support patterns (all must match): `(do not drink|avoid drinking|should avoid drinking) alcohol(ic beverages)?( (while taking|during treatment)[^.]{0,60})?\.(?<!lot of alcohol\.)`  and  `^(?![\s\S]*(a lot of alcohol|close to the time))`

- [2] You should avoid drinking alcohol.
- [1] Do not drink alcoholic beverages while taking nefazodone.
- [1] Avoid drinking alcohol during treatment with FETZIMA.
- [1] Avoid drinking alcohol during treatment with vilazodone hydrochloride tablets.
- [1] • Avoid drinking alcohol while taking olanzapine tablets.
- [1] Do not drink alcohol while taking quetiapine tablets.
- [1] Do not drink alcohol while taking BELSOMRA.

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## alcohol-until-talk (shown 16 times, 16 distinct source wordings)

Plain sentence: Do not drink alcohol or take other medicines that make you sleepy or dizzy until you have talked with your healthcare provider.

Support patterns (all must match): `do not drink alcohol or take other (medicines|drugs)[^.]{0,40}(sleepy or dizzy)[^.]{0,100}(until you talk|without (first )?talking)`

- [1] Do not drink alcohol or take other medicines that make you sleepy or dizzy while taking trazodone hydrochloride tablets until you talk with your healthcare provider.
- [1] • Do not drink alcohol or take other medicines that make you sleepy or dizzy while taking gabapentin tablets without first talking with your healthcare provider.
- [1] Do not drink alcohol or take other medicines that make you sleepy or dizzy while taking tiagabine hydrochloride without first talking to your healthcare provider.
- [1] • Do not drink alcohol or take other drugs that make you sleepy or dizzy while taking zonisamide capsules until you talk to your health care provider.
- [1] Do not drink alcohol or take other drugs that make you sleepy or dizzy while taking carbamazepine until you talk to your healthcare provider.
- [1] Do not drink alcohol or take other medicines that make you sleepy or dizzy while taking valproic acid capsules, until you talk with your doctor.
- [1] – Do not drink alcohol or take other drugs that may make you sleepy or dizzy while taking XANAX without first talking to your healthcare provider.
- [1] Do not drink alcohol or take other drugs that may make you sleepy or dizzy while taking clonazepam tablets until you talk to your healthcare provider.
- ... and 8 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## driving (shown 45 times, 45 distinct source wordings)

Plain sentence: Do not drive or use machines until you know how it affects you.

Support patterns (all must match): `do not (drive|operate)[^.]{0,120}until you know how [^.]{0,80}(affects?|affect) you\.`  and  `^(?![\s\S]*(hours|when you start))`

- [1] Do not drive, operate heavy machinery, or do other dangerous activities until you know how trazodone hydrochloride tablets affects you.
- [1] Do not drive a car or operate heavy machinery until you know how desvenlafaxine extended-release tablets affects you.
- [1] Do not drive, operate heavy machinery, or do other dangerous activities until you know how FETZIMA affects you.
- [1] • Do not drive or operate machinery until you know how milnacipran hydrochloride tablet affects you.
- [1] Do not drive, operate heavy machinery, or do other dangerous activities until you know how vilazodone hydrochloride tablets affects you.
- [1] Do not drive, operate machinery, swim, climb, or do dangerous activities until you know how clozapine tablets affect you.
- [1] Do not drive, operate heavy machinery, or do other dangerous activities until you know how lurasidone hydrochloride tablets affects you.
- [1] Do not drive, operate machinery, or do other dangerous activities until you know how quetiapine tablet affects you.
- ... and 37 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## do-not-share (shown 6 times, 6 distinct source wordings)

Plain sentence: Do not share it with other people.

Support patterns (all must match): `do not share`

- [1] – Do not share your XANAX with other people.
- [1] Do not share your clorazepate dipotassium tablets with other people.
- [1] Do not share your VALIUM with other people.
- [1] o Do not share your lorazepam tablets with other people.
- [1] – Do not share your oxazepam with other people.
- [1] Do not share your flurazepam hydrochloride capsules with other people.

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## keep-safe-misuse (shown 15 times, 15 distinct source wordings)

Plain sentence: Keep it in a safe place to prevent misuse and abuse.

Support patterns (all must match): `safe place to prevent misuse and abuse`

- [1] Keep XANAX in a safe place to prevent misuse and abuse.
- [1] Keep clorazepate dipotassium tablets in a safe place to prevent misuse and abuse.
- [1] Keep VALIUM in a safe place to prevent misuse and abuse.
- [1] Keep lorazepam tablets in a safe place to prevent misuse and abuse.
- [1] Keep oxazepam capsules in a safe place to prevent misuse and abuse.
- [1] Keep estazolam in a safe place to prevent misuse and abuse.
- [1] Flurazepam hydrochloride is a federal controlled substance (C-IV) because it contains flurazepam that can be abused or lead to dependence.Keep in a safe place to prevent misuse and abuse.
- [1] Keep Quazepam Tablets in a safe place to prevent misuse and abuse.
- ... and 7 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## keep-safe-children (shown 1 time, 1 distinct source wording)

Plain sentence: Keep it in a safe place, away from children.

Support patterns (all must match): `safe place[^.]{0,60}away from children|away from children[^.]{0,60}safe place`

- [1] Keep clorazepate dipotassium tablets in a safe place and away from children.

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

## not-complete-list (shown 40 times, 40 distinct source wordings)

Plain sentence: This is not a complete list of side effects.

Support patterns (all must match): `not all (of )?the possible side effects|not a complete list|these are not all`

- [1] These are not all the possible side effects of TRINTELLIX.
- [1] swelling blurred vision dizziness sleepiness tiredness diarrhea stuffy nose weight loss These are not all the possible side effects of trazodone hydrochloride tablets.
- [1] These are not all the possible side effects of milnacipran hydrochloride tablets.
- [1] These are not all the possible side effects with olanzapine tablets.
- [1] These are not all the possible side effects of gabapentin tablets.
- [1] dizziness lack of energy drowsiness nausea nervousness tremor stomach pain abnormal thinking difficulty with concentration or attention These are not all the possible side effects of tiagabine hydrochloride.
- [1] These are not all the possible side effects of TOPAMAX.
- [1] These are not all of the possible side effects of zonisamide capsules.
- ... and 32 more wordings (see summary-trace.csv)

Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____

