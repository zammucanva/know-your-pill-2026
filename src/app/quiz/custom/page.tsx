import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { CustomTestBuilder } from "./custom-test-builder";

/**
 * /quiz/custom — Build your own test (recovered feature).
 *
 * The route SHELL is server-rendered so the statically exported page is a
 * meaningful document before hydration: shared header, global navigation,
 * breadcrumb, heading, intro copy and footer all arrive in the first HTML
 * paint. Only the interactive builder sits behind the Suspense boundary —
 * useSearchParams (the ?retest= / ?preset= / ?class= / ?weak= entries)
 * requires one during static export, and its fallback is a genuine loading
 * state for the builder alone, never a blank page.
 *
 * The flow itself (topics → count → runner → results → review) lives in
 * custom-test-builder.tsx; its safety properties are mirrored in
 * tests/custom-test.test.ts.
 */
export default function CustomTestPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <React.Suspense fallback={<CustomTestShellFallback />}>
          <CustomTestBuilder />
        </React.Suspense>
      </main>
      <Footer />
    </div>
  );
}

/**
 * Pre-hydration shell — mirrors the setup phase's static heading copy (the
 * builder always boots on the setup phase), so the fallback is visually
 * continuous with the hydrated page and the exported HTML carries the
 * page's identity even with JavaScript disabled.
 */
function CustomTestShellFallback() {
  return (
    <Section spacing="relaxed">
      <Container>
        {/* Breadcrumb — Custom Test lives inside Practice, inside Study Mode */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs text-muted-foreground"
        >
          <Link href="/study" className="hover:text-brand">
            Study Mode
          </Link>
          <span aria-hidden>›</span>
          <Link href="/quiz" className="hover:text-brand">
            Practice
          </Link>
          <span aria-hidden>/</span>
          <span className="font-medium text-foreground">Custom Test</span>
        </nav>
        <h1
          className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
        >
          Build your own test
        </h1>
        <p className="mt-6 max-w-xl text-body-lg text-muted-foreground leading-relaxed">
          Choose exactly what you want to be tested on. Every question is
          drawn from the same reviewed KYP content you study — nothing
          invented, nothing outside the library.
        </p>
        <p role="status" className="mt-10 text-sm text-muted-foreground">
          Loading the test builder…
        </p>
      </Container>
    </Section>
  );
}
