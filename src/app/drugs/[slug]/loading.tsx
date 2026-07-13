import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Loading state for /drugs/[slug].
 *
 * Shows a structured skeleton that mirrors the actual page layout —
 * patients get immediate visual feedback rather than a blank screen.
 *
 * Server Component.
 */
export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Faux navbar */}
      <div className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Skeleton className="h-9 w-9 rounded-xl" />
            <div className="flex flex-col gap-1">
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-2 w-40" />
            </div>
          </div>
          <div className="hidden items-center gap-1 lg:flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-8 w-20 rounded-md" />
            ))}
          </div>
          <Skeleton className="h-9 w-9 rounded-full" />
        </Container>
      </div>

      <main className="flex-1 pt-16">
        {/* Hero skeleton */}
        <Section spacing="default">
          <Container>
            <Skeleton className="h-4 w-32" />
            <Skeleton className="mt-4 h-12 w-3/4 max-w-2xl" />
            <Skeleton className="mt-3 h-5 w-1/2 max-w-xl" />
            <Skeleton className="mt-5 h-20 w-full max-w-2xl" />
            <Skeleton className="mt-5 h-20 w-full max-w-2xl" />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false}>
                  <CardBody>
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="mt-2 h-6 w-28" />
                    <Skeleton className="mt-2 h-12 w-full" />
                  </CardBody>
                </CardPrimitive>
              ))}
            </div>
          </Container>
        </Section>

        {/* Body skeletons */}
        <Section spacing="default" className="bg-muted/20">
          <Container>
            <Skeleton className="h-4 w-32" />
            <Skeleton className="mt-2 h-10 w-2/3 max-w-xl" />
            <Skeleton className="mt-4 h-20 w-full" />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-24 w-full rounded-xl" />
              ))}
            </div>
          </Container>
        </Section>

        <Section spacing="default">
          <Container>
            <Skeleton className="h-4 w-32" />
            <Skeleton className="mt-2 h-10 w-2/3 max-w-xl" />
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-40 w-full rounded-xl" />
              ))}
            </div>
          </Container>
        </Section>
      </main>
    </div>
  );
}
