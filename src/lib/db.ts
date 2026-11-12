import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Prisma 7 connects through a driver adapter (node-postgres) instead of the
// Rust query engine. The runtime uses the pooled DATABASE_URL; migrations use
// DIRECT_URL via prisma.config.ts.
function createClient(): PrismaClient {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  // NOTE: query logging is intentionally DISABLED. Enabling it would print
  // every SQL statement (including parameter values such as user emails and
  // identifiers) to the server log — an unnecessary PII exposure.
  return new PrismaClient({ adapter, log: ['error'] })
}

export const db = globalForPrisma.prisma ?? createClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
