import type { PatientGuide } from "../types";
import { paroxetine } from "../../data/drugs/paroxetine";

/**
 * Paroxetine — patient guide.
 * Reuses canonical patient-grade strings verbatim; everything else is a
 * plain-language rephrasing of canonical content. No new medical facts.
 */
export const paroxetinePatientGuide: PatientGuide = {
  slug: "paroxetine",

  classInPlainWords:
    "Paroxetine is an SSRI (selective serotonin reuptake inhibitor) — an older type that works well but tends to cause more side effects and is the hardest of all SSRIs to stop.",

  whatIsThis: paroxetine.patientMode.tagline,

  usedFor: {
    intro: "Paroxetine is approved to treat several conditions, and doctors also prescribe it for others:",
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
        plain: "Sudden attacks of intense fear, often with a racing heart.",
        status: "approved",
      },
      {
        name: "Social anxiety disorder",
        plain: "Strong fear of everyday social situations.",
        status: "approved",
      },
      {
        name: "Post-traumatic stress disorder (PTSD)",
        plain: "Distress and re-living of a frightening event after it has passed.",
        status: "approved",
      },
      {
        name: "Generalised anxiety disorder (GAD)",
        plain: "Ongoing worry that is hard to control.",
        status: "approved",
      },
      {
        name: "Premenstrual dysphoric disorder (PMDD)",
        plain: "Severe mood and physical symptoms in the days before a period.",
        status: "approved",
      },
      {
        name: "Hot flushes of menopause (moderate to severe)",
        plain: "The very low 7.5 mg dose (Brisdelle) is the only non-hormonal medicine approved for menopause hot flushes. It is not a depression dose.",
        status: "approved",
      },
      {
        name: "Premature ejaculation",
        plain: "Prescribed off-label when needed.",
        status: "off-label",
      },
    ],
  },

  howItWorks: {
    simple: paroxetine.patientMode.mechanism,
    medicalDetail: paroxetine.mechanism.summary,
  },

  whenNotice:
    "Some early changes — sleep, appetite, energy — can happen within 1–2 weeks, but clearer mood benefit typically takes 4–6 weeks for depression. For anxiety disorders, PTSD, and social anxiety, full effect may take 8–12 weeks. Don't stop early just because you don't feel better yet.",

  timelineShort: "4–6 weeks for depression; 8–12 for anxiety",

  usuallyTaken: "At bedtime",

  commonSideEffects: {
    intro: paroxetine.patientMode.sideEffects,
    list: [
      "Sleepiness — paroxetine is the most sedating SSRI, so take it at bedtime",
      "Dry mouth, constipation, blurred vision, or trouble passing urine",
      "Weight gain — more than with most other SSRIs",
      "Feeling sick (nausea) or an upset stomach",
      "Dizziness or light-headedness",
      "Sweating, especially at night",
      "Headache",
      "Feeling weak or tired",
      "Sexual side effects — the highest of any SSRI, affecting up to half of people",
    ],
    note: "If you gain more than 5% of your starting weight, or daytime sleepiness is a problem, talk to your doctor — a different medicine may suit you better.",
  },

  importantSideEffects: {
    intro:
      "Serious side effects are rare, but you should know the signs so you can recognise them early. Two paroxetine-specific rules matter more than the rest: never stop it abruptly, and never take it with tamoxifen.",
    items: [
      {
        name: "Severe withdrawal when stopped too quickly (discontinuation syndrome)",
        whatItMeans:
          "Paroxetine leaves the body quickly, so missing even one or two doses can trigger withdrawal within 24–48 hours — dizziness, 'brain zaps', nausea, irritability, vivid dreams, and insomnia. It is the hardest of all SSRIs to stop.",
        whatToDo:
          "Never stop or skip doses on your own. Your doctor will taper the dose very slowly — over months, not weeks. If withdrawal symptoms appear, contact your doctor before the next dose change.",
      },
      {
        name: "Harm to an unborn baby (pregnancy risk)",
        whatItMeans:
          "Paroxetine can harm the developing baby, especially in the first three months, and is linked to a higher risk of heart defects.",
        whatToDo:
          "Use reliable contraception while taking it. If you think you might be pregnant, contact your doctor immediately — but do NOT stop the medicine on your own.",
      },
      {
        name: "Tamoxifen not working (tamoxifen interaction)",
        whatItMeans:
          "Tamoxifen is a breast-cancer medicine that needs a liver enzyme to work. Paroxetine strongly blocks that enzyme and can reduce tamoxifen's cancer-fighting effect.",
        whatToDo:
          "If you take tamoxifen, never take paroxetine — ask your doctor for a different antidepressant. This applies even to the low 7.5 mg hot-flush dose.",
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
          "In the first month or two, antidepressants can occasionally make mood worse instead of better. Paroxetine is not approved for people under 18.",
        whatToDo:
          "Contact your doctor immediately — do not wait — if you feel more agitated, irritable, anxious, or have any new thoughts of harming yourself.",
      },
    ],
  },

  tellYourDoctor: [
    "If you are a woman who could become pregnant, or if you are pregnant — paroxetine is generally not safe in pregnancy.",
    "If you take tamoxifen for breast cancer — this combination must never happen.",
    "All other medicines you take — paroxetine blocks a liver enzyme (CYP2D6) that processes many common drugs, including tramadol, codeine, metoprolol, and other psychiatric medicines.",
    "Any herbal products, especially St John's Wort.",
    "If you have trouble passing urine, an enlarged prostate, glaucoma, or constipation.",
    "If you are over 65 — your doctor may check your blood sodium and watch your fall risk.",
  ],

  interactions: paroxetine.patientMode.interactions,

  missedDose:
    "Because paroxetine leaves the body quickly, missing even one or two doses can trigger withdrawal symptoms. Take the missed dose as soon as you remember, unless it is within 8 hours of your next dose — in that case, skip it and continue normally. Do not double up. If you often miss doses, talk to your doctor — a longer-acting antidepressant may suit you better.",

  stopping:
    "Never stop paroxetine abruptly. It is the hardest of all SSRIs to stop because its effects wear off quickly between doses. Your doctor will reduce the dose very slowly — for long-term users this is usually over several months, often by no more than 10% every 2–4 weeks. Stopping suddenly can cause severe withdrawal: dizziness, 'brain zaps', nausea, irritability, vivid dreams, and insomnia within a day or two. If symptoms appear, the dose goes back up and then comes down more slowly.",

  monitoring: paroxetine.patientMode.monitoring,

  urgentHelp: {
    intro:
      "Get urgent medical help — do not wait to see if it passes — if any of these happen:",
    signs: [
      "A high fever with confusion, sweating, shaking, muscle twitching or stiffness, and a fast heartbeat (possible serotonin syndrome).",
      "New or worsening thoughts of harming yourself, especially in the first month.",
      "Severe dizziness, confusion, or a seizure.",
      "You are (or think you are) pregnant while taking paroxetine — contact your doctor urgently to arrange a supervised switch, but do not stop on your own.",
    ],
    action:
      "If you think someone is in immediate danger, call your local emergency number straight away. KYP lists India-specific helplines in the Emergency Help section at the bottom of every page.",
  },

  keyReminders: [
    "Never stop suddenly or skip doses — paroxetine is the hardest SSRI to stop, and withdrawal can start within a day of a missed dose.",
    "Take it at bedtime — it is the most sedating SSRI.",
    "Never combine it with tamoxifen (breast-cancer medicine).",
    "Avoid it in pregnancy — use reliable contraception and tell your doctor at once if you might be pregnant.",
    "Full benefit takes 4–6 weeks for depression, 8–12 weeks for anxiety — don't stop early.",
    "Weight gain and sexual side effects are more common than with other SSRIs — both are worth raising with your doctor.",
  ],
};
