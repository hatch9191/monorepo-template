import { PrismaClient } from "@repo/db";

import { createPrismaClient } from "./createPrismaClient.ts";

describe(createPrismaClient.name, () => {
  it("should create a new PrismaClient instance if none exists", () => {
    const prisma1 = createPrismaClient();

    expect(prisma1).toBeInstanceOf(PrismaClient);
  });
});
