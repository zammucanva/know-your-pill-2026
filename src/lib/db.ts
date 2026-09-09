import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// NOTE: query logging is intentionally DISABLED. Enabling it would print
// every SQL statement (including parameter values such as user emails and
// identifiers) to the server log — an unnecessary PII exposure.
export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
