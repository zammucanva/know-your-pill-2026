import type { PatientGuide } from "../types";
import { venlafaxine } from "../../data/drugs/venlafaxine";

/**
 * Venlafaxine — patient guide.
 * Reuses canonical patient-grade strings verbatim; everything else is a
 * plain-language rephrasing of canonical content. No new medical facts.
 */
export const venlafaxinePatientGuide: PatientGuide = {
  slug: "venlafaxine",

  classInPlainWords:
    "Venlafaxine is an SNRI (serotonin and norepinephrine reuptake inhibitor) — it affects two brain chemicals instead of one, which is why it can work when an SSRI (selective serotonin reuptake inhibitor) alone hasn't.",

  whatIsThis: venlafaxine.patientMode.tagline,

  usedFor: {
    intro: "Venlafaxine is approved to treat four conditions, and doctors also prescribe it for others:",
    uses: [
      {
        name: "Depression",
        plain: "Persistent low mood, loss of interest, and low energy that gets in the way of daily life.",
        status: "approved",
      },
      {
        name: "Generalised anxiety disorder (GAD)",
        plain: "Ongoing worry that is hard to control.",
        status: "approved",
      },
      {
        name: "Social anxiety disorder",
        plain: "Strong fear of everyday social situations.",
        status: "approved",
      },
      {
        name: "Panic disorder",
        plain: "Sudden attacks of intense fear, often with a racing heart.",
        status: "approved",
      },
      {
        name: "Nerve pain (neuropathic pain)",
        plain: "Long-lasting burning or shooting pain from damaged nerves. Prescribed off-label.",
        status: "off-label",
      },
      {
        name: "Hot flushes of menopause",
        plain: "Including in breast-cancer survivors who cannot take hormone therapy. Prescribed off-label.",
        status: "off-label",
      },
    ],
  },

  howItWorks: {
    simple: venlafaxine.patientMode.mechanism,
    medicalDetail: venlafaxine.mechanism.summary,
  },

  whenNotice:
    "Some early changes — sleep, appetite, energy — can happen within 1–2 weeks, but clearer mood benefit typically takes 4–6 weeks for depression. For anxiety disorders, full effect may take 8–12 weeks. Don't stop early and don't increase the dose on your own — your doctor assesses response at 4–6 weeks and decides whether a higher dose (which adds the norepinephrine effect) is right for you.",

  timelineShort: "4–6 weeks for depression; 8–12 for anxiety",

  usuallyTaken: "In the morning, with food",

  commonSideEffects: {
    intro: venlafaxine.patientMode.sideEffects,
    list: [
      "Feeling sick (nausea) — more than with SSRIs; take it with food",
      "Sweating, often heavy and at night — more than with SSRIs",
      "Trouble sleeping or feeling 'wired'",
      "Headache",
      "Dry mouth",
      "Dizziness",
      "Constipation",
      "Reduced appetite and mild weight loss",
      "Sexual side effects — lower interest or difficulty reaching orgasm",
    ],
    note: "Take it in the morning — venlafaxine can keep you awake if taken at night.",
  },

  importantSideEffects: {
    intro:
      "Serious side effects are rare, but two venlafaxine-specific rules matter more than everything else: never miss a dose, and never stop suddenly. Your doctor also checks your blood pressure regularly.",
    items: [
      {
        name: "Raised blood pressure (hypertension)",
        whatItMeans:
          "Venlafaxine can raise blood pressure, especially at doses above 150 mg a day — at the highest doses, 10–15 in 100 people develop significant hypertension. This is why your doctor checks it at every visit and after every dose change.",
        whatToDo:
          "Keep your blood-pressure checks. Tell your doctor if you have high blood pressure or take BP medicine. A severe headache with very high readings needs urgent help.",
      },
      {
        name: "The most severe withdrawal of any antidepressant (discontinuation syndrome)",
        whatItMeans:
          "Venlafaxine leaves the body within hours, so missing even one dose can trigger withdrawal — severe 'brain zaps', dizziness, nausea, irritability, vivid dreams, and flu-like feelings.",
        whatToDo:
          "Take it at the same time every day. Refill at least a week before you run out. If you run out, call your pharmacy or doctor immediately — never just wait.",
      },
      {
        name: "Serotonin syndrome",
        whatItMeans:
          "A rare but serious reaction caused by too much serotonin activity — usually when combined with another medicine that affects serotonin.",
        whatToDo:
          "Get emergency help straight away if you have a high fever with confusion, sweating, shaking, muscle twitching or stiffness, or a fast heartbeat.",
      },
      {
        name: "Low blood sodium (SIADH / hyponatraemia)",
        whatItMeans:
          "The body holds on to too much water, which dilutes the salt in your blood. More common in older adults, mostly in the first two weeks.",
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
    ],
  },

  tellYourDoctor: [
    "If you have high blood pressure or take blood-pressure medicine — it must be controlled before starting.",
    "All other medicines you take — especially tramadol (pain), triptans (migraine), the antibiotic linezolid, cough syrups with dextromethorphan, decongestants like pseudoephedrine, and NSAIDs like ibuprofen or aspirin.",
    "Any herbal products, especially St John's Wort.",
    "If you are pregnant, planning a pregnancy, or breastfeeding — venlafaxine is not the first choice in pregnancy.",
    "If you have liver problems.",
    "If you are over 65 — your doctor may check your blood sodium in the first weeks.",
  ],

  interactions: venlafaxine.patientMode.interactions,

  missedDose:
    "Because venlafaxine leaves the body within hours, missing even one dose can trigger withdrawal. Take the missed dose as soon as you remember. If it is close to your next dose, contact your doctor or pharmacist for advice rather than doubling up. If you have run out of medicine, call immediately — do not wait through the withdrawal.",

  stopping:
    "Never stop venlafaxine suddenly. It has the most severe withdrawal of any antidepressant — symptoms can begin within hours of a missed dose. Your doctor will taper the dose over at least four weeks (longer for high doses), sometimes bridging the final weeks with a small dose of fluoxetine, which leaves the body slowly and smooths the transition. For a first episode of depression, treatment usually continues for 6–12 months after you feel better.",

  monitoring: venlafaxine.patientMode.monitoring,

  urgentHelp: {
    intro:
      "Get urgent medical help — do not wait to see if it passes — if any of these happen:",
    signs: [
      "A severe headache with very high blood-pressure readings.",
      "A high fever with confusion, sweating, shaking, muscle twitching or stiffness, and a fast heartbeat (possible serotonin syndrome).",
      "New or worsening thoughts of harming yourself, especially in the first month.",
      "Confusion, a seizure, or a severe new headache.",
      "Severe withdrawal symptoms after missed doses — contact your doctor the same day rather than waiting.",
    ],
    action:
      "If you think someone is in immediate danger, call your local emergency number straight away. KYP lists India-specific helplines in the Emergency Help section at the bottom of every page.",
  },

  keyReminders: [
    "Never miss a dose and never stop suddenly — venlafaxine has the worst withdrawal of any antidepressant.",
    "Refill your prescription at least a week before you run out.",
    "Take it in the morning, with food.",
    "Your blood pressure will be checked at every visit and dose change — keep those appointments.",
    "Full benefit takes 4–6 weeks for depression, 8–12 weeks for anxiety — don't stop early.",
    "Avoid decongestants (like pseudoephedrine in cold medicines) — they push blood pressure up further.",
  ],
};
