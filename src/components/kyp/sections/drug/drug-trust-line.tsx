import { Calendar, BookMarked } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugTrustLine: a single, visible "when was this updated and where does
 * it come from" line near the top of every drug page.
 *
 * Deliberately states only facts the data carries (the page's last-updated
 * month and where its sources are). It does not claim a named reviewer or
 * clinical sign-off; add that here only once a real reviewer exists.
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
          <Calendar className="h-3 w-3" aria-hidden />
          Last updated <span className="font-medium text-foreground">{updated}</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <BookMarked className="h-3 w-3" aria-hidden />
          Sources and references are listed at the end of this guide
        </span>
        <span>Educational only, not a substitute for medical advice.</span>
      </p>
    </Container>
  );
}
