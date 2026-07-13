import { Navbar } from "@/components/kyp/navbar";
import { Hero } from "@/components/kyp/hero";
import { Stats } from "@/components/kyp/stats";
import { Categories } from "@/components/kyp/categories";
import { MedicationLibrary } from "@/components/kyp/medication-library";
import { SubstanceUse } from "@/components/kyp/substance-use";
import { NeuroArcade } from "@/components/kyp/neuroarcade";
import { EmergencyBanner } from "@/components/kyp/emergency-banner";
import { Footer } from "@/components/kyp/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Categories />
        <MedicationLibrary />
        <SubstanceUse />
        <NeuroArcade />
        <EmergencyBanner />
      </main>
      <Footer />
    </div>
  );
}
