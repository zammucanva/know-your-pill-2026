/**
 * Builds the index of AUTHORED questions that generated questions must
 * never duplicate. Read-only: nothing here modifies the authored banks.
 *
 * Authored questions = the microQuizzes embedded in the drug and disease
 * records, plus the Stahl prescriber-guide bank. Kept apart from the core
 * engine so the engine stays free of registry imports.
 */

import { diseases } from "@/lib/kyp/data/diseases/index";
import { drugs } from "@/lib/kyp/data/drugs/index";
import { stahlMcqs } from "@/lib/kyp/stahl-mcqs";
import { AuthoredIndex, type AuthoredLike } from "./dedupe";

function* authoredQuestions(): Generator<AuthoredLike> {
  for (const drug of drugs) {
    for (const quiz of drug.microQuizzes ?? []) {
      yield { stem: quiz.question, options: quiz.options, correctIndex: quiz.correctIndex };
    }
  }
  for (const disease of diseases) {
    for (const quiz of disease.microQuizzes ?? []) {
      yield { stem: quiz.question, options: quiz.options, correctIndex: quiz.correctIndex };
    }
  }
  for (const mcq of stahlMcqs) {
    yield { stem: mcq.question, options: mcq.options, correctIndex: mcq.correctIndex };
  }
}

let cached: AuthoredIndex | null = null;

export function getAuthoredIndex(): AuthoredIndex {
  return (cached ??= new AuthoredIndex(authoredQuestions()));
}
