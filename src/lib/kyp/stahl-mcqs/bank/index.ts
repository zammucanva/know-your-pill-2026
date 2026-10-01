/**
 * Stahl's MCQ bank registry — every authored question, in stable
 * order. Per-drug question numbering follows this file's order;
 * reordering arrays here renumbers ids (a migration, never a
 * side effect).
 */
import type { AuthoredStahlMcq } from "../types";
import { ssriSnriBank } from "./ssri-snri";
import { tcaMaoiBank } from "./tca-maoi";
import { atypicalAntipsychoticBank } from "./atypical-antipsychotics";
import { typicalAntipsychoticBank } from "./typical-antipsychotics";
import { benzodiazepineBank } from "./benzodiazepines";
import { sleepAnxiolyticBank } from "./sleep-anxiolytics";
import { moodAnticonvulsantBank } from "./mood-anticonvulsants";
import { stimulantAtypicalBank } from "./stimulants-atypical";
import { sudCognitiveBank } from "./sud-cognitive";
import { adjunctMiscBank } from "./adjuncts-misc";

export const STAHL_MCQ_BANK: AuthoredStahlMcq[] = [
  ...ssriSnriBank,
  ...tcaMaoiBank,
  ...atypicalAntipsychoticBank,
  ...typicalAntipsychoticBank,
  ...benzodiazepineBank,
  ...sleepAnxiolyticBank,
  ...moodAnticonvulsantBank,
  ...stimulantAtypicalBank,
  ...sudCognitiveBank,
  ...adjunctMiscBank,
];
