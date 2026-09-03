import Link from "next/link";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/kyp/ui/badge";
import { Search, Home, FileQuestion } from "lucide-react";
import { drugs } from "@/lib/kyp/data";

/**
 * 404 for /drugs/[slug].
 *
 * Triggered when:
 *   - The slug doesn't match any drug in the registry (getDrugBySlug returns undefined → notFound() called)
 *   - The route was pre-rendered as a static page and the slug is unknown
 *
 * Server Component.
 */
export default function DrugNotFound() {
  // Show available drugs as suggestions
  const available = drugs.slice(0, 6);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Section spacing="relaxed">
          <Container width="narrow" className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-soft/60 text-brand">
              <FileQuestion className="h-8 w-8" strokeWidth={2} />
            </div>

            <p className="mt-6 text-overline text-brand">404 · Drug not found</p>

            <h1 className="mt-2 text-display text-foreground">
              We don&rsquo;t have a page for that drug yet.
            </h1>

            <p className="mt-4 text-body-lg text-muted-foreground leading-relaxed">
              This medication hasn&rsquo;t been added to the KYP platform. The team is migrating
              drugs one at a time to ensure each page meets our clinical quality bar — only
              Sertraline is available in Sprint 2.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-xl">
                <Link href="/">
                  <Home className="h-4 w-4" />
                  Back to homepage
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl">
                <Link href="/#library">
                  <Search className="h-4 w-4" />
                  Browse medication library
                </Link>
              </Button>
            </div>

            {/* Available drug pages */}
            {available.length > 0 && (
              <div className="mt-16">
                <p className="text-overline text-muted-foreground">Available drug pages</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {available.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/drugs/${d.slug}`}
                      className="inline-flex items-center gap-2 rounded-md border border-border/80 bg-card px-4 py-2 text-body-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                    >
                      <Badge variant="brand" size="sm">{d.drugClassLabel}</Badge>
                      {d.genericName}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </Section>
      </main>
    </div>
  );
}
