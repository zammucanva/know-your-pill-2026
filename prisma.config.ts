// Prisma 7 CLI configuration (generate, migrate deploy, migrate dev).
//
// The CLI uses `datasource.url` for migrations. Before Prisma 7 the schema
// sent migrations to DIRECT_URL (the unpooled connection) and runtime queries
// to DATABASE_URL; this keeps that split: migrations prefer DIRECT_URL and fall
// back to DATABASE_URL. The app's runtime connection is set in src/lib/db.ts.
import { existsSync } from "node:fs";
import { defineConfig } from "prisma/config";

// Prisma 7 no longer reads .env itself, and `bunx prisma` runs the CLI under
// Node, so Bun's own .env loading does not apply. Load a local .env with
// Node's built-in loader (no new dependency). Variables already set in the
// environment (CI, Vercel, the test harness) take precedence and are never
// overwritten.
if (existsSync(".env") && typeof process.loadEnvFile === "function") {
  process.loadEnvFile(".env");
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // `prisma generate` needs no database, so an unset URL must not fail it
    // (CI and the GitHub Pages build run generate without one).
    url: process.env.DIRECT_URL || process.env.DATABASE_URL || "",
  },
});
