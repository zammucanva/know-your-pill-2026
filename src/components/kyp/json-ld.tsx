/**
 * JsonLd — server-rendered structured-data script tag.
 *
 * A React Server Component (no "use client"): the JSON-LD lands in the
 * SSR HTML where crawlers read it without client hydration, and no
 * serialization code ships to the browser.
 *
 * Always serializes through serializeJsonLd() — never interpolate
 * arbitrary strings into raw script markup by hand.
 */

import { serializeJsonLd } from "@/lib/kyp/structured-data";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
