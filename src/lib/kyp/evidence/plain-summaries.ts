import type { ClaimRecord } from "./types";

/**
 * "In short": a plain-language summary shown above a patient-directed US Medication Guide section that is quoted
 * word for word. The quoted section stays exactly as published; the summary is a separate, traceable layer.
 *
 * How it stays honest:
 *   - A summary is built only from sentences in the bank below, and a sentence is used only if EVERY pattern in
 *     its `support` list matches the quoted section it sits above. A sentence whose support is missing is simply
 *     not shown. So a summary can be shorter than the quote, but never says what the quote does not.
 *   - Sentences contain no numbers, no doses and no medicine names.
 *   - Nothing here is clinically reviewed, and the page says so next to every summary.
 *
 * Only exact-quote claims taken from a Medication Guide or patient information sheet get a summary. Statements
 * that were already written in plain words from a label (restated claims) do not need one.
 */
export interface PlainSentence {
  id: string;
  text: string;
  /** Every pattern must match the quoted passage for the sentence to be used. */
  support: RegExp[];
}

export const PLAIN_SENTENCES: PlainSentence[] = [
  // Suicidal thoughts (antidepressants and some other classes)
  { id: "antidepressant-suicidality-early-or-dose", text: "Antidepressant medicines may increase suicidal thoughts or actions in some children, teenagers and young adults within the first few months of treatment or when the dose is changed.", support: [/increase suicidal thoughts or actions in some children, teenagers,? and young adults within the first few months of treatment (or|and) when the dose is changed/i] },
  { id: "antidepressant-suicidality-early", text: "Antidepressant medicines may increase suicidal thoughts or actions in some children, teenagers and young adults within the first few months of treatment.", support: [/increase suicidal thoughts or actions in some children, teenagers,? and young adults within the first few months of treatment(?! (or|and) when)/i] },
  { id: "antidepressant-suicidality", text: "Antidepressant medicines may increase suicidal thoughts or actions in some children, teenagers and young adults.", support: [/increase suicidal thoughts or actions in some children, teenagers,? and young adults(?! within the first)/i] },
  { id: "antidepressant-suicidality-young", text: "Antidepressant medicines may increase suicidal thoughts or actions in some young people.", support: [/antidepressant[^.]{0,200}suicidal thoughts or actions in some (people|children|patients)[^.]{0,80}(young|younger|years of age)|may increase (the risk of )?suicidal thoughts or actions in some (people|children|patients)[^.]{0,80}(young|younger|years of age)/i, /^(?![\s\S]*(first few months|children, teenagers,? and young adults))/] },
  { id: "antiepileptic-suicidality", text: "Medicines for seizures may cause suicidal thoughts or actions in a very small number of people.", support: [/antiepileptic[^.]{0,250}suicidal thoughts or actions|suicidal thoughts or actions[^.]{0,250}antiepileptic/i, /very small number|small number/i] },
  { id: "watch-mood-changes", text: "Pay close attention to new or sudden changes in mood, behaviour, thoughts or feelings, especially when the medicine is started or the dose is changed.", support: [/pay close attention to any changes/i, /(started|dose is changed|dose changes)/i] },
  { id: "call-for-mood-changes", text: "Call your healthcare provider right away to report new or sudden changes in mood, behaviour, thoughts or feelings.", support: [/call (the|your) (health ?care )?provider right away to report/i] },
  { id: "suicidal-thoughts-get-help", text: "If you have thoughts about suicide or dying, call your healthcare provider right away.", support: [/thoughts about suicide or dying/i, /(call|contact)[^.]{0,80}(provider|doctor)/i] },
  // Antipsychotics
  { id: "dementia-death", text: "Older people with dementia-related psychosis who take antipsychotic medicines have a higher chance of death.", support: [/dementia-related psychosis/i, /(increased|higher) (risk|chance) of (death|dying)|risk of death/i] },
  // Benzodiazepines and other sedatives
  { id: "opioid-sedation", text: "Using it together with opioid medicines (and with other medicines or substances that slow the brain) can cause severe drowsiness, breathing problems, coma and death.", support: [/opioid/i, /(alcohol|depressants|CNS)/i, /(severe drowsiness|profound sedation|sedation)/i, /breathing/i, /coma/i, /death/i] },
  { id: "abuse-misuse-addiction-overdose-death", text: "There is a risk of abuse, misuse and addiction, which can lead to overdose and death.", support: [/abuse,? misuse,? and addiction/i, /overdose/i, /death/i] },
  { id: "abuse-misuse-addiction-overdose", text: "There is a risk of abuse, misuse and addiction, which can lead to overdose.", support: [/abuse,? misuse,? and addiction/i, /overdose/i] },
  { id: "physical-dependence-withdrawal", text: "Your body can become physically dependent on it. Stopping suddenly or lowering the dose too quickly can cause withdrawal reactions, which can be life-threatening.", support: [/physical dependence/i, /withdrawal reactions[^.]{0,120}life-threatening|life-threatening[^.]{0,120}withdrawal reactions/i, /(stop(ping)?|reduc(e|ing)|lower(ing)?)[^.]{0,120}(suddenly|abruptly|too (quickly|fast)|rapidly)/i, /^(?![\s\S]*(several days|several weeks|for weeks))/] },
  { id: "complex-sleep-behaviours", text: "It can cause sleep-walking, sleep-driving or other activities while you are not fully awake, which you may not remember.", support: [/sleep-?(walking|driving)/i, /(not fully awake|not remember|do not remember)/i] },
  // Serotonin syndrome
  { id: "serotonin-syndrome", text: "The text lists signs of serotonin syndrome, a potentially life-threatening problem. Get medical help right away if you have them.", support: [/(call|go to the nearest|get (emergency|medical))[^.:]{0,200}(signs and symptoms|symptoms) of serotonin syndrome/i, /life-threatening/i] },
  // Allergic reaction
  { id: "allergic-reaction", text: "The text lists signs of a serious allergic reaction. Get medical help right away if you have them.", support: [/(signs|symptoms) of (a |an )?(serious )?allergic reaction/i, /(emergency|medical help|call your (healthcare provider|doctor)|call a healthcare provider)/i] },
  // Taking it
  { id: "take-exactly", text: "Take it exactly as your healthcare provider tells you.", support: [/exactly as (your|a)? ?(health ?care )?provider (tells|told|prescribed)|exactly as prescribed/i] },
  { id: "dose-not-yourself", text: "Do not change your dose yourself.", support: [/do not change your dose/i] },
  { id: "do-not-stop", text: "Do not stop taking it without first talking to your healthcare provider.", support: [/(do not|never) stop[^.]{0,140}(without|suddenly|abruptly)/i, /(talk|talking|talked) (to|with)[^.]{0,60}(provider|doctor)/i] },
  { id: "stopping-suddenly-problems", text: "Stopping suddenly can cause problems.", support: [/stopping[^.]{0,120}(suddenly|abruptly)[^.]{0,120}(can|may) cause/i] },
  { id: "missed-take", text: "If you miss a dose, take it as soon as you remember.", support: [/miss(ed)? a dose/i, /take (it|the missed dose) as soon as you remember/i] },
  { id: "missed-skip", text: "If it is almost time for the next dose, skip the missed one and take the next dose at the usual time.", support: [/almost time for (your |the )?next dose/i, /(skip|do not take) the missed dose/i] },
  { id: "no-double-dose", text: "Do not take two doses at the same time.", support: [/(do not|never) take (two|double)[^.]{0,80}(at the same time|doses)/i] },
  { id: "with-or-without-food", text: "It can be taken with or without food.", support: [/with or without food/i] },
  { id: "swallow-whole", text: "Swallow it whole.", support: [/swallow(ed)?[^.]{0,60}whole(?![^.]*\b(or|and|but|except)\b)/i, /^(?![\s\S]*(score line|broken in half|cut in half|half tablet))/i] },
  { id: "overdose-get-help", text: "If you take too much, call your healthcare provider or go to the nearest hospital emergency room right away.", support: [/((take|taken) too (much|many)|overdose)[^.]{0,200}(call|contact)[^.]{0,120}(healthcare provider|doctor)[^.]{0,200}(hospital )?emergency room/i] },
  // Telling your provider
  { id: "tell-all-medicines", text: "Tell your healthcare provider about all the medicines you take, including prescription and over-the-counter medicines, vitamins and herbal supplements.", support: [/about all the medicines you take/i] },
  { id: "tell-all-conditions", text: "Tell your healthcare provider about all your medical conditions.", support: [/about all (of )?your medical conditions/i] },
  { id: "tell-pregnancy", text: "Tell your healthcare provider if you are pregnant or plan to become pregnant.", support: [/(are|become) pregnant or plan to (become|get) pregnant|pregnant or plan to (become|get) pregnant/i] },
  { id: "tell-breastfeeding", text: "Tell your healthcare provider if you are breastfeeding or plan to breastfeed.", support: [/breastfeeding or plan to breastfeed/i] },
  // Safety habits
  { id: "alcohol", text: "Do not drink alcohol while taking it.", support: [/(do not drink|avoid drinking|should avoid drinking) alcohol(ic beverages)?( (while taking|during treatment)[^.]{0,60})?\.(?<!lot of alcohol\.)/i, /^(?![\s\S]*(a lot of alcohol|close to the time))/] },
  { id: "alcohol-until-talk", text: "Do not drink alcohol or take other medicines that make you sleepy or dizzy until you have talked with your healthcare provider.", support: [/do not drink alcohol or take other (medicines|drugs)[^.]{0,40}(sleepy or dizzy)[^.]{0,100}(until you talk|without (first )?talking)/i] },
  { id: "driving", text: "Do not drive or use machines until you know how it affects you.", support: [/do not (drive|operate)[^.]{0,120}until you know how [^.]{0,80}(affects?|affect) you\./i, /^(?![\s\S]*(hours|when you start))/i] },
  { id: "do-not-share", text: "Do not share it with other people.", support: [/do not share/i] },
  { id: "keep-safe-misuse", text: "Keep it in a safe place to prevent misuse and abuse.", support: [/safe place to prevent misuse and abuse/i] },
  { id: "keep-safe-children", text: "Keep it in a safe place, away from children.", support: [/safe place[^.]{0,60}away from children|away from children[^.]{0,60}safe place/i] },
  { id: "not-complete-list", text: "This is not a complete list of side effects.", support: [/not all (of )?the possible side effects|not a complete list|these are not all/i] },
];

export interface PlainSummary {
  /** Ids of the sentences used, so a reviewer can trace each one to the bank. */
  ids: string[];
  sentences: string[];
}

/**
 * The bank carries no numbers, so a sentence must not stand for source text that has one (an age, a time limit,
 * a frequency, "1 in 500"). Phone numbers and web addresses do not count. Such sections get no summary line for
 * that sentence; the quoted text is still shown whole.
 */
function dropsANumber(sentence: PlainSentence, passage: string): boolean {
  const parts = passage.replace(/\s+/g, " ").split(/(?<=[.!?:])\s+/);
  return parts.some((part) => {
    if (!sentence.support.filter((re) => !re.source.startsWith("^(?!")).some((re) => re.test(part))) return false;
    const rest = part.replace(/\b1-800-\d{3}-\d{4}\b/g, "").replace(/\bwww\.\S+/g, "");
    return /\d/.test(rest) || /\b(two|three|four|five|six|seven|eight|nine|ten|twelve|twenty|hundred|thousand)\b/i.test(rest);
  });
}

const isGuideQuote =(c: ClaimRecord) => c.wordingKind === "exact-quote" && /:mg\d+$/.test(c.id);

/** The plain-language summary for one quoted guide section, or null when no sentence is supported by it. */
export function plainSummaryFor(claim: ClaimRecord, max = 6): PlainSummary | null {
  if (!isGuideQuote(claim)) return null;
  const used = PLAIN_SENTENCES.filter((s) => s.support.every((re) => re.test(claim.passage)) && !dropsANumber(s, claim.passage));
  // The two abuse sentences overlap: keep the stronger one only.
  const filtered = used.some((s) => s.id === "abuse-misuse-addiction-overdose-death") ? used.filter((s) => s.id !== "abuse-misuse-addiction-overdose") : used;
  const picked = filtered.slice(0, max);
  return picked.length ? { ids: picked.map((s) => s.id), sentences: picked.map((s) => s.text) } : null;
}
