import { HomeHero } from "@/components/kyp/sections/home-hero";
import { StatsSection } from "@/components/kyp/sections/stats-section";
import { LearnBanner } from "@/components/kyp/sections/learn-banner";
import { MedicationLibrarySection } from "@/components/kyp/sections/medication-library-section";
import { SubstanceUseSection } from "@/components/kyp/sections/substance-use-section";
import { TimelineSection } from "@/components/kyp/sections/timeline-section";
import { NeuroArcadeSection } from "@/components/kyp/sections/neuroarcade-section";
import { RoadmapSection } from "@/components/kyp/sections/roadmap-section";
import { FaqSection } from "@/components/kyp/sections/faq-section";
import { EmergencySection } from "@/components/kyp/sections/emergency-section";
import { Footer } from "@/components/kyp/sections/footer";
import { drugs, substancePages, diseases } from "@/lib/kyp/data";

/**
 * HomeContent — the homepage body (main + footer), without the Navbar or
 * FloatingSearch. Extracted so that both `/` and `/enter` can render the
 * same homepage content, with `/enter` providing its own scroll-animated
 * header that replaces the normal Navbar during the intro transition.
 *
 * Server Component: it derives the hero's search plumbing (slug lists,
 * popular chips) from the canonical registries HERE, on the server, so
 * the client hero receives lightweight string arrays instead of pulling
 * the 143-monograph data layer into the browser bundle.
 */
// Search plumbing — derived from the canonical registries (never a
// second list) and passed to the client hero as plain strings.
const drugSlugs = drugs.map((d) => d.slug);
const substanceSlugs = substancePages.map((s) => s.slug);
const diseaseSlugs = diseases.map((d) => d.slug);
const popularSearches = drugs.slice(0, 4).map((d) => d.genericName);

export function HomeContent() {
  return (
    <>
      <main className="flex-1">
        <HomeHero
          drugSlugs={drugSlugs}
          substanceSlugs={substanceSlugs}
          diseaseSlugs={diseaseSlugs}
          popularSearches={popularSearches}
        />
        <StatsSection />
        <LearnBanner />
        <MedicationLibrarySection />
        <SubstanceUseSection />
        <TimelineSection />
        <NeuroArcadeSection />
        <RoadmapSection />
        <FaqSection />
        <EmergencySection />
      </main>
      <Footer />
    </>
  );
}
