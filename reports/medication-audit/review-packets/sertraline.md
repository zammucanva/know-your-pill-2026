# Clinical review packet: Sertraline

**Status: NOT REVIEWED.** This packet is prepared for a qualified clinical reviewer. It is not a review record. It records no decision and names no reviewer; every decision field below is blank. Engineering checks (quotes found in sources, numbers not added) do not make any statement correct, applicable or approved.

**Indian product information:** not checked for this medicine. Statements below rest on the documents listed, none of which is an Indian label unless it says so.

## Reviewer identity (once per packet; no decision below counts without all of it)

Name: ____
Professional qualification (for example MBBS, MD Psychiatry, MD Pharmacology, PharmD): ____
Registration body and number (for example National Medical Commission or State Medical Council): ____
Affiliation: ____
Conflicts of interest (write 'none' if none): ____
Date of review: ____
Scope: which items below this reviewer covered: ____

Record the outcome in the matching JSON template (`<slug>.record-template.json`) and check it with `bun scripts/evidence/review-record-check.ts <file>`. A passing check means the record is complete. It is not clinical approval, and the app never shows a statement as reviewed on that basis alone.

## Patient Guide (authored for this app)

Each line is shown to patients. Check it against current Indian product information and clinical practice.

### guide:classInPlainWords

- classInPlainWords: Sertraline is an SSRI (selective serotonin reuptake inhibitor), one of the most commonly prescribed types of antidepressant in the world.

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

### guide:whatIsThis

- whatIsThis: A medicine that helps your brain keep more of a mood-regulating chemical (serotonin) available for longer.

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

### guide:usedFor

- usedFor > intro: Sertraline is approved to treat six conditions, and doctors also prescribe it for a seventh:
- usedFor > uses[1] > name: Depression
- usedFor > uses[1] > plain: Persistent low mood, loss of interest, and low energy that gets in the way of daily life.
- usedFor > uses[1] > status: approved
- usedFor > uses[2] > name: Obsessive-compulsive disorder (OCD)
- usedFor > uses[2] > plain: Unwanted repeated thoughts or urges, and the rituals people feel driven to do again and again.
- usedFor > uses[2] > status: approved
- usedFor > uses[3] > name: Panic disorder
- usedFor > uses[3] > plain: Sudden attacks of intense fear, often with a racing heart or shortness of breath.
- usedFor > uses[3] > status: approved
- usedFor > uses[4] > name: Post-traumatic stress disorder (PTSD)
- usedFor > uses[4] > plain: Distress and re-living of a frightening event after it has passed.
- usedFor > uses[4] > status: approved
- usedFor > uses[5] > name: Social anxiety disorder
- usedFor > uses[5] > plain: Strong fear of everyday social situations, such as meeting people or speaking in front of others.
- usedFor > uses[5] > status: approved
- usedFor > uses[6] > name: Premenstrual dysphoric disorder (PMDD)
- usedFor > uses[6] > plain: Severe mood and physical symptoms in the days before a period.
- usedFor > uses[6] > status: approved
- usedFor > uses[7] > name: Generalised anxiety disorder (GAD)
- usedFor > uses[7] > plain: Ongoing worry that is hard to control. Doctors prescribe sertraline for this even though it is not officially approved for it.
- usedFor > uses[7] > status: off-label

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

### guide:howItWorks

- howItWorks > simple: Your brain uses a chemical called serotonin to regulate mood, anxiety, sleep, and appetite. Normally, after serotonin is released between nerve cells, it gets quickly taken back up (recycled). Sertraline blocks this recycling, so more serotonin stays available between the nerve cells for longer. Over 4–6 weeks, this helps your brain's mood-regulation system work better, but it doesn't happen immediately.
- howItWorks > medicalDetail: Sertraline selectively blocks the serotonin transporter (SERT), increasing serotonin concentration in the synaptic cleft and enhancing serotonergic neurotransmission.

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

### guide:whenNotice

- whenNotice: Some early changes (sleep, appetite, energy) can happen within 1–2 weeks, but clearer mood benefit typically takes 4–6 weeks for depression. For anxiety disorders, PTSD, and social anxiety, full effect may take 8–12 weeks. Don't stop early just because you don't feel better yet.

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

### guide:timelineShort

- timelineShort: 4–6 weeks for depression; 8–12 for anxiety

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

### guide:usuallyTaken

- usuallyTaken: In the morning, with food if it upsets your stomach

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

### guide:commonSideEffects

- commonSideEffects > intro: Most people get some side effects in the first 1–2 weeks: usually nausea, headache, sleep changes, or feeling a bit wired. These usually settle as your body adapts. Sexual side effects (lower interest or difficulty reaching orgasm) are common and can persist: talk to your doctor if this bothers you, as there are solutions. Serious side effects are rare but you should know the signs: high fever with confusion and shaking could be serotonin syndrome (emergency), and feeling worse or having new suicidal thoughts in the first month needs immediate medical review.
- commonSideEffects > list[1]: Feeling sick (nausea) or an upset stomach
- commonSideEffects > list[2]: Headache
- commonSideEffects > list[3]: Trouble sleeping or feeling unusually sleepy
- commonSideEffects > list[4]: Feeling restless or 'wired'
- commonSideEffects > list[5]: Dry mouth
- commonSideEffects > list[6]: Dizziness
- commonSideEffects > list[7]: Loose stools (diarrhoea)
- commonSideEffects > list[8]: Sweating, especially at night
- commonSideEffects > list[9]: Sexual side effects: lower interest or difficulty reaching orgasm
- commonSideEffects > note: Sexual side effects are common and can persist. Talk to your doctor if this bothers you: there are solutions. Do not just stop the medicine on your own.

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

### guide:importantSideEffects

- importantSideEffects > intro: Serious side effects are rare, but you should know the signs so you can recognise them early.
- importantSideEffects > items[1] > name: Serotonin syndrome
- importantSideEffects > items[1] > whatItMeans: A rare but serious reaction caused by too much serotonin activity: usually when sertraline is combined with another medicine that affects serotonin.
- importantSideEffects > items[1] > whatToDo: Get emergency help straight away if you have a high fever with confusion, sweating, shaking, muscle twitching or stiffness, or a fast heartbeat.
- importantSideEffects > items[2] > name: Low blood sodium (SIADH / hyponatraemia)
- importantSideEffects > items[2] > whatItMeans: The body holds on to too much water, which dilutes the salt in your blood. This is more common in older adults, mostly in the first two weeks.
- importantSideEffects > items[2] > whatToDo: Tell your doctor if you get a new headache, confusion, nausea, or a seizure. A simple blood test can check it.
- importantSideEffects > items[3] > name: New or worsening suicidal thoughts (especially under 25)
- importantSideEffects > items[3] > whatItMeans: In the first month or two, antidepressants can occasionally make mood worse instead of better. This risk is highest in people under 25.
- importantSideEffects > items[3] > whatToDo: Contact your doctor immediately (do not wait) if you feel more agitated, irritable, anxious, or have any new thoughts of harming yourself.
- importantSideEffects > items[4] > name: Abnormal bleeding
- importantSideEffects > items[4] > whatItMeans: Sertraline can make blood clot slightly less well. The risk grows when combined with painkillers like ibuprofen or aspirin, or blood thinners.
- importantSideEffects > items[4] > whatToDo: Tell your doctor if you bruise easily, have nosebleeds, or take blood thinners or regular painkillers.
- importantSideEffects > items[5] > name: Switch into mania (unusually high mood)
- importantSideEffects > items[5] > whatItMeans: In people with unrecognised bipolar disorder, an antidepressant can trigger a period of racing thoughts, high energy, and poor judgment.
- importantSideEffects > items[5] > whatToDo: Tell your doctor if your mood becomes unusually high, you feel unstoppable, or you make risky decisions.

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

### guide:tellYourDoctor

- tellYourDoctor[1]: All other medicines you take, including painkillers like tramadol, migraine medicines (triptans), the antibiotic linezolid, and cough syrups containing dextromethorphan.
- tellYourDoctor[2]: Any herbal products, especially St John's Wort.
- tellYourDoctor[3]: If you have ever had a seizure, bipolar disorder, or bleeding problems.
- tellYourDoctor[4]: If you are pregnant, planning a pregnancy, or breastfeeding.
- tellYourDoctor[5]: If you drink alcohol regularly.
- tellYourDoctor[6]: If you are over 65: your doctor may check your blood sodium in the first weeks.

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

### guide:interactions

- interactions: The main thing to know: avoid alcohol or keep it to a minimum. It can make you more drowsy and worsen mood symptoms. Tell your pharmacist about everything you take, including over-the-counter products, because several common medicines can interact with sertraline. The most dangerous combinations are with other medicines that affect serotonin: your doctor or pharmacist will check for these automatically.

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

### guide:missedDose

- missedDose: Take the missed dose as soon as you remember, unless it is within 8 hours of your next dose. In that case, skip the missed dose and continue normally. Do not double up to make up for a missed dose.

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

### guide:stopping

- stopping: Do not stop sertraline suddenly without medical guidance. Your doctor will recommend a gradual taper over several weeks, depending on your dose, how long you have taken it, and your symptoms. Stopping suddenly after several weeks can cause uncomfortable withdrawal-like symptoms: dizziness, 'brain zaps', nausea, and irritability. Also, for a first episode of depression, treatment usually continues for 6–12 months after you feel better, because stopping earlier raises the risk of the depression coming back.

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

### guide:monitoring

- monitoring: You'll have check-ins with your doctor at 2 weeks, 4 weeks, and 6 weeks to see how you're responding. They'll ask about your mood, side effects, and any new thoughts. You may be asked to fill in a short questionnaire (PHQ-9) so your progress can be tracked. If you're over 65, your doctor may check your blood sodium in the first 2 weeks.

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

### guide:urgentHelp

- urgentHelp > intro: Get urgent medical help (do not wait to see if it passes) if any of these happen:
- urgentHelp > signs[1]: A high fever with confusion, sweating, shaking, muscle twitching or stiffness, and a fast heartbeat (possible serotonin syndrome).
- urgentHelp > signs[2]: New or worsening thoughts of harming yourself, especially in the first month.
- urgentHelp > signs[3]: Confusion, a seizure, or a severe new headache.
- urgentHelp > signs[4]: Any allergic reaction: rash, swelling of the face or throat, or trouble breathing.
- urgentHelp > action: If you think someone is in immediate danger, call your local emergency number straight away. KYP lists India-specific helplines in the Emergency Help section at the bottom of every page.

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

### guide:keyReminders

- keyReminders[1]: It takes 4–6 weeks for the full benefit in depression. Don't stop early just because you don't feel better yet.
- keyReminders[2]: Side effects in the first 1–2 weeks usually settle as your body adapts.
- keyReminders[3]: Take it in the morning if it makes you feel more alert; at night if it makes you sleepy. Taking it with food reduces nausea.
- keyReminders[4]: It is not addictive, but stopping suddenly can cause uncomfortable withdrawal-like symptoms, always come off it slowly with your doctor's guidance.
- keyReminders[5]: Keep alcohol to a minimum or avoid it: it can make you more drowsy and worsen mood symptoms.
- keyReminders[6]: Tell every doctor, dentist, and pharmacist that you take sertraline. If you take the liquid form, tell them before you start disulfiram (a medicine for alcohol dependence): the liquid contains alcohol.

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

## Documents the statements rest on

- List of Drugs Safety Alerts issued by PvPI from March 2016 to till date (Indian Pharmacopoeia Commission) (IN; indian-safety-communication; Indian Pharmacopoeia Commission, Pharmacovigilance Programme of India (PvPI); list 30th September, 2026 (file P.17019/03/2026-DSA); accessed 2026-10-14) https://ipc.gov.in/images/pvpi/List-of-drug-safety-alerts-issued-by-PvPI.pdf

## Statements (one block each)

### sertraline:side-effects:in1 [side-effects]

Patient wording (paraphrase): India's Pharmacovigilance Programme (PvPI) lists sertraline as a suspected cause of maculopathy (a disorder of the centre of the retina at the back of the eye). This comes from analysing reports sent to the programme: it is a safety signal, it does not say how often this happens, and it does not mean it will happen to you.

Exact passage: Sertraline Major depressive disorders, obsessive compulsive disorders (OCD), panic disorders Maculopathy

Applies to: As written in the Indian PvPI drug safety alert list for Drug safety alerts issued by PvPI (not a product label), not stated: the list names the medicine, not a product or strength. Adults unless the statement says otherwise.

Limits: Indian safety-alert list (IPC, PvPI), 30th September, 2026 (file P.17019/03/2026-DSA): a signal from reports, not a rate or a cause, and not a product label. General information, not advice for any one person. This is a list of safety signals from adverse-drug-reaction reports. It names a suspected reaction, not a rate, a cause or advice for one person. It is not a package insert and says nothing about dose, onset, interactions or how to take the medicine.

Open questions: Confirm this is the label of the brand the patient is actually given.

Decision (accept / amend / reject / request-evidence): ____   Amended wording (if amend): ____   Notes (required unless accept): ____

