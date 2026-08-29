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

/**
 * HomeContent — the homepage body (main + footer), without the Navbar or
 * FloatingSearch. Extracted so that both `/` and `/enter` can render the
 * same homepage content, with `/enter` providing its own scroll-animated
 * header that replaces the normal Navbar during the intro transition.
 */
export function HomeContent() {
  return (
    <>
      <main className="flex-1">
        <HomeHero />
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
