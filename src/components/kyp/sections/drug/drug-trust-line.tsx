import { Calendar, BookMarked, UserRound, ShieldQuestion } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import type { Drug } from "@/lib/kyp/data";
import { CONTENT_AUTHOR, reviewStatusText } from "@/lib/kyp/editorial";

/**
 * DrugTrustLine: a single, visible "when was this updated and where does
 * it come from" line near the top of every drug page.
 *
 * Deliberately states only facts: who wrote it, when it was last updated,
 * where the sources are, and the real review status (see
 * lib/kyp/editorial.ts). It never claims a reviewer who does not exist.
 *
 * Server Component.
 */
export function DrugTrustLine({ drug }: { drug: Drug }) {
  const updated = new Date(drug.lastReviewed).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  return (
    <Container className="pb-2">
      <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <UserRound className="h-3 w-3" aria-hidden />
          By <span className="font-medium text-foreground">{CONTENT_AUTHOR}</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-3 w-3" aria-hidden />
          Last updated <span className="font-medium text-foreground">{updated}</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <BookMarked className="h-3 w-3" aria-hidden />
          Sources and references are listed at the end of this guide
        </span>
        <span className="inline-flex items-center gap-1.5">
          <ShieldQuestion className="h-3 w-3" aria-hidden />
          {reviewStatusText()}
        </span>
        <span>Educational only, not a substitute for medical advice.</span>
      </p>
    </Container>
  );
}
