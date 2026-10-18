/**
 * After `next build`, the standalone server needs the static assets next to it. This used to be two shell `cp -r`
 * commands inside the `build` script, which fail under `bun run` on Windows ("cp: illegal option -- r") although the
 * Next.js build itself succeeds. Node's fs.cpSync does the same copy on every platform.
 *
 *   node scripts/copy-standalone-assets.mjs
 */
import { cpSync, existsSync } from "node:fs";

if (!existsSync(".next/standalone")) {
  console.error("copy-standalone-assets: .next/standalone is missing; run `next build --webpack` first.");
  process.exit(1);
}
cpSync(".next/static", ".next/standalone/.next/static", { recursive: true });
cpSync("public", ".next/standalone/public", { recursive: true });
console.log("copied .next/static and public into .next/standalone");
