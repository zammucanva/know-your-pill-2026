import type { PatientGuide } from "../types";
import { sertraline } from "../../data/drugs/sertraline";

/**
 * Sertraline — patient guide.
 *
 * Wording policy (KYP Patient Language Standard):
 *   - `whatIsThis`, `howItWorks.simple`, `commonSideEffects.intro`,
 *     `monitoring` and `interactions` REUSE the canonical
 *     patient-grade strings from the locked drug registry verbatim
 *     (single source of truth — no duplication).
 *   - `howItWorks.medicalDetail` reuses the canonical clinical
 *     mechanism summary (two-layer explanation).
 *   - Everything else is a plain-language rephrasing of canonical
 *     content (indications, side-effect data, FAQs, education points,
 *     monitoring parameters). No new medical facts are introduced.
 */
export const sertralinePatientGuide: PatientGuide = {
  slug: "sertraline",

  classInPlainWords:
    "Sertraline is an SSRI (selective serotonin reuptake inhibitor) — one of the most commonly prescribed types of antidepressant in the world.",

  whatIsThis: sertraline.patientMode.tagline,

  usedFor: {
    intro:
      "Sertraline is approved to treat six conditions, and doctors also prescribe it for a seventh:",
    uses: [
      {
        name: "Depression",
        plain: "Persistent low mood, loss of interest, and low energy that gets in the way of daily life.",
        status: "approved",
      },
      {
        name: "Obsessive-compulsive disorder (OCD)",
        plain: "Unwanted repeated thoughts or urges, and the rituals people feel driven to do again and again.",
        status: "approved",
      },
      {
        name: "Panic disorder",
        plain: "Sudden attacks of intense fear, often with a racing heart or shortness of breath.",
        status: "approved",
      },
      {
        name: "Post-traumatic stress disorder (PTSD)",
        plain: "Distress and re-living of a frightening event after it has passed.",
        status: "approved",
      },
      {
        name: "Social anxiety disorder",
        plain: "Strong fear of everyday social situations, such as meeting people or speaking in front of others.",
        status: "approved",
      },
      {
        name: "Premenstrual dysphoric disorder (PMDD)",
        plain: "Severe mood and physical symptoms in the days before a period.",
        status: "approved",
      },
      {
        name: "Generalised anxiety disorder (GAD)",
        plain: "Ongoing worry that is hard to control. Doctors prescribe sertraline for this even though it is not officially approved for it.",
        status: "off-label",
      },
    ],
  },

  howItWorks: {
    simple: sertraline.patientMode.mechanism,
    medicalDetail: sertraline.mechanism.summary,
  },

  whenNotice:
    "Some early changes — sleep, appetite, energy — can happen within 1–2 weeks, but clearer mood benefit typically takes 4–6 weeks for depression. For anxiety disorders, PTSD, and social anxiety, full effect may take 8–12 weeks. Don't stop early just because you don't feel better yet.",

  timelineShort: "4–6 weeks for depression; 8–12 for anxiety",

  usuallyTaken: "In the morning, with food if it upsets your stomach",

  commonSideEffects: {
    intro: sertraline.patientMode.sideEffects,
    list: [
      "Feeling sick (nausea) or an upset stomach",
      "Headache",
      "Trouble sleeping or feeling unusually sleepy",
      "Feeling restless or 'wired'",
      "Dry mouth",
      "Dizziness",
      "Loose stools (diarrhoea)",
      "Sweating, especially at night",
      "Sexual side effects — lower interest or difficulty reaching orgasm",
    ],
    note: "Sexual side effects are common and can persist. Talk to your doctor if this bothers you — there are solutions. Do not just stop the medicine on your own.",
  },

  importantSideEffects: {
    intro:
      "Serious side effects are rare, but you should know the signs so you can recognise them early.",
    items: [
      {
        name: "Serotonin syndrome",
        whatItMeans:
          "A rare but serious reaction caused by too much serotonin activity — usually when sertraline is combined with another medicine that affects serotonin.",
        whatToDo:
          "Get emergency help straight away if you have a high fever with confusion, sweating, shaking, muscle twitching or stiffness, or a fast heartbeat.",
      },
      {
        name: "Low blood sodium (SIADH / hyponatraemia)",
        whatItMeans:
          "The body holds on to too much water, which dilutes the salt in your blood. This is more common in older adults, mostly in the first two weeks.",
        whatToDo:
          "Tell your doctor if you get a new headache, confusion, nausea, or a seizure. A simple blood test can check it.",
      },
      {
        name: "New or worsening suicidal thoughts (especially under 25)",
        whatItMeans:
          "In the first month or two, antidepressants can occasionally make mood worse instead of better. This risk is highest in people under 25.",
        whatToDo:
          "Contact your doctor immediately — do not wait — if you feel more agitated, irritable, anxious, or have any new thoughts of harming yourself.",
      },
      {
        name: "Abnormal bleeding",
        whatItMeans:
          "Sertraline can make blood clot slightly less well. The risk grows when combined with painkillers like ibuprofen or aspirin, or blood thinners.",
        whatToDo:
          "Tell your doctor if you bruise easily, have nosebleeds, or take blood thinners or regular painkillers.",
      },
      {
        name: "Switch into mania (unusually high mood)",
        whatItMeans:
          "In people with unrecognised bipolar disorder, an antidepressant can trigger a period of racing thoughts, high energy, and poor judgment.",
        whatToDo:
          "Tell your doctor if your mood becomes unusually high, you feel unstoppable, or you make risky decisions.",
      },
    ],
  },

  tellYourDoctor: [
    "All other medicines you take — including painkillers like tramadol, migraine medicines (triptans), the antibiotic linezolid, and cough syrups containing dextromethorphan.",
    "Any herbal products, especially St John's Wort.",
    "If you have ever had a seizure, bipolar disorder, or bleeding problems.",
    "If you are pregnant, planning a pregnancy, or breastfeeding.",
    "If you drink alcohol regularly.",
    "If you are over 65 — your doctor may check your blood sodium in the first weeks.",
  ],

  interactions: sertraline.patientMode.interactions,

  missedDose:
    "Take the missed dose as soon as you remember, unless it is within 8 hours of your next dose — in that case, skip the missed dose and continue normally. Do not double up to make up for a missed dose.",

  stopping:
    "Do not stop sertraline suddenly without medical guidance. Your doctor will recommend a gradual taper over several weeks, depending on your dose, how long you have taken it, and your symptoms. Stopping suddenly after several weeks can cause uncomfortable withdrawal-like symptoms — dizziness, 'brain zaps', nausea, and irritability. Also, for a first episode of depression, treatment usually continues for 6–12 months after you feel better, because stopping earlier raises the risk of the depression coming back.",

  monitoring: sertraline.patientMode.monitoring,

  urgentHelp: {
    intro:
      "Get urgent medical help — do not wait to see if it passes — if any of these happen:",
    signs: [
      "A high fever with confusion, sweating, shaking, muscle twitching or stiffness, and a fast heartbeat (possible serotonin syndrome).",
      "New or worsening thoughts of harming yourself, especially in the first month.",
      "Confusion, a seizure, or a severe new headache.",
      "Any allergic reaction — rash, swelling of the face or throat, or trouble breathing.",
    ],
    action:
      "If you think someone is in immediate danger, call your local emergency number straight away. KYP lists India-specific helplines in the Emergency Help section at the bottom of every page.",
  },

  keyReminders: [
    "It takes 4–6 weeks for the full benefit in depression — don't stop early just because you don't feel better yet.",
    "Side effects in the first 1–2 weeks usually settle as your body adapts.",
    "Take it in the morning if it makes you feel more alert; at night if it makes you sleepy. Taking it with food reduces nausea.",
    "It is not addictive, but stopping suddenly can cause uncomfortable withdrawal-like symptoms — always come off it slowly with your doctor's guidance.",
    "Keep alcohol to a minimum or avoid it — it can make you more drowsy and worsen mood symptoms.",
    "Tell every doctor, dentist, and pharmacist that you take sertraline. If you take the liquid form, tell them before you start disulfiram (a medicine for alcohol dependence) — the liquid contains alcohol.",
  ],
};
