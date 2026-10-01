import { Navbar } from "@/components/kyp/sections/navbar";
import { HomeContent } from "@/components/kyp/home-content";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { SITE_AUTHOR_NAME, SITE_NAME, absoluteUrl } from "@/lib/kyp/site-url";

/**
 * Homepage — server component; renders the client hero/sections and the
 * site-level structured data below.
 */
export default function Home() {
  // Site-level structured data (audit D4). Factual statements only —
  // mirrors the root metadata + sitemap values, so the homepage carries
  // the same machine-readable identity the drug pages already expose via
  // their MedicalWebPage JSON-LD. The site search is a client-side modal
  // with no URL query surface, so no SearchAction is declared.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: absoluteUrl("/"),
        name: SITE_NAME,
        description:
          "Premium neuroscience-inspired psychiatric medication and substance education platform.",
        inLanguage: "en",
        publisher: { "@id": absoluteUrl("/#organization") },
      },
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        url: absoluteUrl("/"),
        name: SITE_NAME,
        logo: absoluteUrl("/logo-navy-512.png"),
        founder: { "@type": "Person", name: SITE_AUTHOR_NAME },
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        // Static, self-authored JSON — no user input, no injection surface.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HomeContent />
      <FloatingSearch variant="floating" />
    </div>
  );
}
