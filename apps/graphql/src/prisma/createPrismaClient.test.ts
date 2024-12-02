import { createPrismaClient } from "./createPrismaClient";

describe(createPrismaClient.name, () => {
  it("should create a prisma client", () => {
    const prisma = createPrismaClient();

    expect(prisma).toBeNull();
  });
});
