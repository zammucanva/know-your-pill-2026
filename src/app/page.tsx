import { Navbar } from "@/components/kyp/sections/navbar";
import { HomeContent } from "@/components/kyp/home-content";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <HomeContent />
      <FloatingSearch variant="floating" />
    </div>
  );
}
