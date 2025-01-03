import { PrismaClient } from "@prisma/client";
import { createPrismaClient } from "./createPrismaClient";

describe(createPrismaClient.name, () => {
  it("should create a new PrismaClient instance if none exists", () => {
    const prisma1 = createPrismaClient();

    expect(prisma1).toBeInstanceOf(PrismaClient);
  });
});
