import type { PatientGuide } from "../types";
import { bupropion } from "../../data/drugs/bupropion";

/**
 * Bupropion — patient guide.
 * Reuses canonical patient-grade strings verbatim; everything else is a
 * plain-language rephrasing of canonical content. No new medical facts.
 */
export const bupropionPatientGuide: PatientGuide = {
  slug: "bupropion",

  classInPlainWords:
    "Bupropion is an NDRI (norepinephrine and dopamine reuptake inhibitor) — an antidepressant that boosts energy, motivation, and attention instead of targeting serotonin.",

  whatIsThis: bupropion.patientMode.tagline,

  usedFor: {
    intro: "Bupropion is approved for three uses, and doctors also prescribe it for others:",
    uses: [
      {
        name: "Depression",
        plain: "Persistent low mood, loss of interest, and low energy that gets in the way of daily life.",
        status: "approved",
      },
      {
        name: "Seasonal affective disorder (SAD)",
        plain: "Depression that returns each year in the low-light winter months.",
        status: "approved",
      },
      {
        name: "Quitting smoking (as Zyban)",
        plain: "The same medicine sold under the brand name Zyban. It blocks the nicotine 'reward' signal, which reduces the urge to smoke.",
        status: "approved",
      },
      {
        name: "Sexual side effects from another antidepressant",
        plain: "Bupropion can be added to an SSRI (selective serotonin reuptake inhibitor) to reverse the sexual side effects, while keeping the SSRI's benefit.",
        status: "off-label",
      },
      {
        name: "Adult ADHD",
        plain: "Attention and focus difficulties in adults. Prescribed off-label.",
        status: "off-label",
      },
    ],
  },

  howItWorks: {
    simple: bupropion.patientMode.mechanism,
    medicalDetail: bupropion.mechanism.summary,
  },

  whenNotice:
    "Because bupropion is energising, some people notice better energy, focus, and motivation within the first 1–2 weeks. Full antidepressant benefit still typically takes 4–6 weeks. Don't stop early just because you don't feel better yet.",

  timelineShort: "Energy may lift in 1–2 weeks; full benefit 4–6 weeks",

  usuallyTaken: "In the morning",

  commonSideEffects: {
    intro: bupropion.patientMode.sideEffects,
    list: [
      "Trouble sleeping — the reason it is taken in the morning",
      "Headache",
      "Dry mouth",
      "Mild nausea",
      "Feeling jittery or anxious in the first 1–2 weeks",
      "Tremor (shakiness)",
      "Sweating",
      "Constipation",
      "Ringing in the ears (tinnitus)",
      "Mild weight loss — usually welcome",
    ],
    note: "Bupropion does not cause the sexual side effects, weight gain, or drowsiness that other antidepressants can. If early jitteriness feels bad, tell your doctor — an SSRI may suit you better.",
  },

  importantSideEffects: {
    intro:
      "Serious side effects are rare, but you should know the signs so you can recognise them early. The single most important bupropion safety fact is the seizure risk — which is why the dose limit matters.",
    items: [
      {
        name: "Seizures (dose-dependent — the signature risk)",
        whatItMeans:
          "Bupropion lowers the brain's seizure threshold more than other modern antidepressants. At normal doses the risk is rare (about 1 in 1,000), but it rises sharply above the maximum dose — and it is dangerously high in people with epilepsy, eating disorders (anorexia or bulimia), serious head injury, or alcohol withdrawal.",
        whatToDo:
          "Never exceed the prescribed dose — the maximum is 450 mg a day (XL). Tell your doctor before starting if you have ever had a seizure, an eating disorder, or drink heavily. If a seizure happens, get emergency help.",
      },
      {
        name: "Severe rash or allergic reaction (Stevens-Johnson syndrome)",
        whatItMeans:
          "Rarely, a serious skin reaction with rash, blistering, fever, or involvement of the mouth or eyes — usually in the first 8 weeks.",
        whatToDo:
          "Stop taking bupropion and get emergency help if you get a rash with fever, blistering, swelling, or trouble breathing.",
      },
      {
        name: "Raised blood pressure",
        whatItMeans:
          "Bupropion can raise blood pressure a little — more noticeable when combined with nicotine patches or gum.",
        whatToDo:
          "Keep your blood-pressure checks, especially if you also use nicotine replacement while quitting smoking.",
      },
      {
        name: "New or worsening suicidal thoughts (especially under 25)",
        whatItMeans:
          "In the first month or two, antidepressants can occasionally make mood worse instead of better. This risk is highest in people under 25.",
        whatToDo:
          "Contact your doctor immediately — do not wait — if you feel more agitated, irritable, anxious, or have any new thoughts of harming yourself.",
      },
      {
        name: "Unusually high mood or racing thoughts (mania)",
        whatItMeans:
          "In people with unrecognised bipolar disorder, bupropion can trigger a period of high energy, racing thoughts, and poor judgment.",
        whatToDo:
          "Tell your doctor if your mood becomes unusually high, you feel unstoppable, or you make risky decisions.",
      },
    ],
  },

  tellYourDoctor: [
    "If you have ever had a seizure, epilepsy, a serious head injury, or an eating disorder (anorexia or bulimia) — bupropion may not be safe for you.",
    "If you drink heavily or are withdrawing from alcohol.",
    "All other medicines you take — bupropion raises the levels of many common drugs (metoprolol and other beta-blockers, certain antidepressants, antipsychotics, some heart-rhythm medicines, tamoxifen); your other doses may need adjusting.",
    "If you have bipolar disorder or psychosis.",
    "If you are pregnant, planning a pregnancy, or breastfeeding.",
    "If you are using nicotine patches or gum while quitting smoking.",
  ],

  interactions: bupropion.patientMode.interactions,

  missedDose:
    "Take the missed dose as soon as you remember, unless it is within 4 hours of your next dose — in that case, skip it and continue normally. Do not double up (this raises seizure risk). If it is already late afternoon or evening, skip it and resume the next morning — taking it late can keep you awake.",

  stopping:
    "Bupropion does not cause the 'brain zap' withdrawal that many other antidepressants can — but still talk to your doctor before stopping. They will usually recommend a brief taper over 1–2 weeks, mainly to watch your mood for relapse rather than to prevent withdrawal.",

  monitoring: bupropion.patientMode.monitoring,

  urgentHelp: {
    intro:
      "Get urgent medical help — do not wait to see if it passes — if any of these happen:",
    signs: [
      "A seizure — even a single one, even if it passed quickly.",
      "A rash with fever, blistering, swelling of the face or throat, or trouble breathing.",
      "New or worsening thoughts of harming yourself, especially in the first month.",
      "Unusually high mood with racing thoughts, or hearing or seeing things others don't.",
      "Severe agitation, confusion, or a fast heartbeat after taking too much.",
    ],
    action:
      "If you think someone is in immediate danger, call your local emergency number straight away. KYP lists India-specific helplines in the Emergency Help section at the bottom of every page.",
  },

  keyReminders: [
    "Take it in the morning — it can keep you awake if taken late.",
    "Never exceed the prescribed dose — the maximum (450 mg XL) exists to protect you from seizures.",
    "Tell your doctor before starting if you have ever had a seizure, an eating disorder, or drink heavily.",
    "It does not cause sexual side effects, weight gain, or drowsiness — its signature advantages.",
    "Report any rash immediately — stop the medicine and get help.",
    "It can also help you quit smoking (as Zyban) — talk to your doctor about the different dosing schedule.",
  ],
};
