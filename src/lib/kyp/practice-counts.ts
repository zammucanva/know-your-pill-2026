/**
 * One source for the question counts shown on landing pages.
 *
 * `practicePoolCount` mirrors the pool built by the Practice page
 * (src/app/quiz/page.tsx, buildAllQuestions): drug questions with valid
 * options, disease questions, and the Stahl clinical bank.
 * `drugInlineCount` is the number of questions inside the drug courses.
 */
import { drugs } from "@/lib/kyp/data/drugs/index";
import { diseases } from "@/lib/kyp/data/diseases/index";
import { stahlMcqs } from "@/lib/kyp/stahl-mcqs";
import { hasValidQuizOptions } from "@/lib/kyp/custom-test/engine";

export const drugInlineCount: number = drugs.reduce(
  (sum, d) => sum + (d.microQuizzes?.length ?? 0),
  0
);

export const practicePoolCount: number =
  drugs.reduce(
    (sum, d) => sum + (d.microQuizzes ?? []).filter((q) => hasValidQuizOptions(q.options)).length,
    0
  ) +
  diseases.reduce((sum, d) => sum + (d.microQuizzes?.length ?? 0), 0) +
  stahlMcqs.length;
