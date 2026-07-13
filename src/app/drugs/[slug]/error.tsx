"use client";

import { useEffect } from "react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Callout } from "@/components/kyp/ui/callout";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

/**
 * Error boundary for /drugs/[slug].
 *
 * Triggered when the page throws during render. Logs to console for
 * debugging and offers recovery actions to the user.
 *
 * Client Component — Next.js requires error.tsx to be a client component.
 */
interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DrugError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Drug page error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Section spacing="relaxed">
          <Container width="narrow" className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emergency-soft/60 text-emergency">
              <AlertCircle className="h-8 w-8" strokeWidth={2} />
            </div>

            <h1 className="mt-6 text-h1 text-foreground">
              This drug page failed to load.
            </h1>

            <p className="mt-3 text-body-lg text-muted-foreground leading-relaxed">
              Something went wrong while rendering this medication page. The error has been logged.
              You can try again, or return to the homepage.
            </p>

            <div className="mt-6">
              <Callout variant="danger" title="Error details" icon={false}>
                <code className="block rounded-md bg-muted/60 p-3 font-mono text-xs text-foreground/80">
                  {error.message || "Unknown error"}
                  {error.digest && (
                    <span className="mt-1 block text-muted-foreground">
                      Digest: {error.digest}
                    </span>
                  )}
                </code>
              </Callout>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button onClick={reset} size="lg" className="rounded-xl">
                <RefreshCw className="h-4 w-4" />
                Try again
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl">
                <a href="/">
                  <Home className="h-4 w-4" />
                  Back to homepage
                </a>
              </Button>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  );
}
