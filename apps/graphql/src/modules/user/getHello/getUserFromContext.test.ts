import { createMockContext } from "@/__mocks__/context/createMockContext";
import { getUserFromContext } from "./getUserFromContext";
import { Context } from "@/context/types";
import { contextUser } from "@/__mocks__/user";

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
