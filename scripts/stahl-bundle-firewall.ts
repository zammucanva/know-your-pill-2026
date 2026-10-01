/**
 * Stahl integration — client-bundle registry firewall.
 *
 * Inspects the STATIC EXPORT's compiled client chunks and proves:
 *   1. Browsing surfaces (/, /medicine, /drugs, /learn, /study, /psychiatry/*)
 *      do NOT ship the 145-monograph registry in their JS.
 *   2. The five engine surfaces (quiz, quiz/custom, compare, interactions,
 *      study/review) legitimately bundle the registry.
 *   3. The generated search artifact IS the client search data path
 *      (its content marker appears on browsing pages).
 *
 * Registry markers are strings that exist ONLY inside monograph files —
 * if a browsing chunk contains them, the registry leaked.
 */
import { readdirSync, readFileSync, statSync } from "fs";
import { join } from "path";

const OUT = "out";
let failures = 0;
const fail = (m: string) => { failures++; console.error(`  FAIL: ${m}`); };
const ok = (m: string) => console.log(`  OK:   ${m}`);

/** Monograph-only strings: brand names + unique clinical phrases that
 *  appear in exactly one or two monographs and nowhere else in the app
 *  source. Chosen from registry data, verified against src/ grep. */
// Patient-education phrasing that appears ONLY inside the monograph
// files (verified: zero occurrences in any other src/ file, including the
// generated search artifact — brand names would NOT work here because the
// search index legitimately carries them as keywords).
const markers = [
  "Known hypersensitivity to this agent.",        // in 124/145 monographs
  "Take exactly as prescribed — same time each day.", // in 86/145
  "Report persistent or worrying side effects early.", // in 86/145
];

const BROWSING = ["/", "/medicine/", "/drugs/", "/learn/", "/study/", "/psychiatry/"];
const ENGINE = ["/quiz/", "/quiz/custom/", "/compare/", "/interactions/", "/study/review/"];

function pageChunks(route: string): string[] {
  // collect all <script src=".../_next/static/chunks/....js"> referenced by the page HTML
  const htmlPath = route === "/" ? "out/index.html" : `out${route}index.html`;
  const html = readFileSync(htmlPath, "utf8");
  return [...html.matchAll(/src="([^"]*_next\/static\/chunks\/[^"]+\.js)"/g)].map((m) => m[1]);
}

function chunkContents(sources: string[]): { name: string; text: string }[] {
  const seen = new Set<string>();
  const out: { name: string; text: string }[] = [];
  for (const src of sources) {
    const file = join("out", src.replace(/^\/?(know-your-pill-2026\/)?/, ""));
    if (seen.has(file)) continue;
    seen.add(file);
    try { out.push({ name: file, text: readFileSync(file, "utf8") }); } catch { /* skip */ }
  }
  return out;
}

console.log("CLIENT-BUNDLE REGISTRY FIREWALL");
console.log(`  markers (registry-only strings): ${markers.join(", ")}`);

let maxBrowsingKB = 0;
for (const route of BROWSING) {
  const chunks = chunkContents(pageChunks(route));
  const totalKB = chunks.reduce((a, c) => a + c.text.length, 0) / 1024;
  maxBrowsingKB = Math.max(maxBrowsingKB, totalKB);
  const leaked = markers.filter((m) => chunks.some((c) => c.text.includes(m)));
  if (leaked.length) fail(`${route} ships registry markers: ${leaked} (${totalKB.toFixed(0)} KB JS)`);
  else ok(`${route} — ${chunks.length} chunks, ${totalKB.toFixed(0)} KB JS — registry-free`);
}

let minEngineKB = Infinity;
for (const route of ENGINE) {
  const chunks = chunkContents(pageChunks(route));
  const totalKB = chunks.reduce((a, c) => a + c.text.length, 0) / 1024;
  minEngineKB = Math.min(minEngineKB, totalKB);
  const present = markers.filter((m) => chunks.some((c) => c.text.includes(m)));
  if (present.length >= 2) ok(`${route} — ${totalKB.toFixed(0)} KB JS — registry present (${present.length}/${markers.length} markers) — LEGITIMATE (engine surface)`);
  else fail(`${route} expected registry presence, found only ${present.length}/${markers.length} markers`);
}
ok(`browsing max ${maxBrowsingKB.toFixed(0)} KB vs engine min ${minEngineKB.toFixed(0)} KB — ratio ${(minEngineKB / maxBrowsingKB).toFixed(1)}x`);

/* generated artifact on the client search path: a distinctive search
   entry from the generated artifact must be inside a home-page chunk */
const home = chunkContents(pageChunks("/"));
const genMarker = "medication-tacrine"; // search entry id — generated artifact only
const genOnHome = home.some((c) => c.text.includes(genMarker));
ok(`generated search artifact present on browsing pages (client search path): ${genOnHome}`);
if (!genOnHome) fail("generated artifact not on client path");

console.log(`\nBUNDLE FIREWALL: ${failures === 0 ? "PASS" : `FAIL (${failures})`}`);
process.exit(failures === 0 ? 0 : 1);
