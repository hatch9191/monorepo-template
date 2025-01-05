import { PrismaClient } from "@repo/db";

let prismaClient: PrismaClient | null = null;

export function createPrismaClient(): PrismaClient {
  if (prismaClient) {
    return prismaClient;
  }

  prismaClient = new PrismaClient();

  return prismaClient;
}
