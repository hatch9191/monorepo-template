import { createMockContext } from "@/__mocks__/context/createMockContext.ts";
import { getUserFromContext } from "./getUserFromContext.ts";
import { Context } from "@/context/types.ts";
import { contextUser } from "@/__mocks__/user.ts";

describe(getUserFromContext.name, () => {
  it("should return null if no user", () => {
    const mockContext = createMockContext(null) as Context;

    expect(getUserFromContext(mockContext)).toBeNull();
  });

  it("should return user from context", () => {
    const mockContext = createMockContext() as Context;

    expect(getUserFromContext(mockContext)).toEqual(contextUser);
  });
});
