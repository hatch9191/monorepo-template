import { ContextUser, InitialContext } from "@/context/types";
import { PrismaClient } from "@repo/db";
import { mockDeep, DeepMockProxy } from "vitest-mock-extended";
import { contextUser } from "../user";

export type MockContext = InitialContext & {
  prisma: DeepMockProxy<PrismaClient>;
  user?: Record<string, any> | null;
};

export const createMockContext = (user?: ContextUser | null): MockContext => {
  const mockInitialContext = {} as InitialContext;

  return {
    ...mockInitialContext,
    prisma: mockDeep<PrismaClient>(),
    user: user !== undefined ? user : contextUser,
  };
};
