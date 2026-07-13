import { Navbar } from "@/components/kyp/sections/navbar";
import { HomeHero } from "@/components/kyp/sections/home-hero";
import { StatsSection } from "@/components/kyp/sections/stats-section";
import { CategoriesSection } from "@/components/kyp/sections/categories-section";
import { MedicationLibrarySection } from "@/components/kyp/sections/medication-library-section";
import { SubstanceUseSection } from "@/components/kyp/sections/substance-use-section";
import { KnowledgeGraphSection } from "@/components/kyp/sections/knowledge-graph-section";
import { BrainAtlasSection } from "@/components/kyp/sections/brain-atlas-section";
import { SideEffectsSection } from "@/components/kyp/sections/side-effects-section";
import { TimelineSection } from "@/components/kyp/sections/timeline-section";
import { NeuroArcadeSection } from "@/components/kyp/sections/neuroarcade-section";
import { FaqSection } from "@/components/kyp/sections/faq-section";
import { EmergencySection } from "@/components/kyp/sections/emergency-section";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HomeHero />
        <StatsSection />
        <CategoriesSection />
        <MedicationLibrarySection />
        <SubstanceUseSection />
        <KnowledgeGraphSection />
        <BrainAtlasSection />
        <SideEffectsSection />
        <TimelineSection />
        <NeuroArcadeSection />
        <FaqSection />
        <EmergencySection />
      </main>
      <Footer />
      <FloatingSearch variant="floating" />
    </div>
  );
}
