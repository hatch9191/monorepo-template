import { executeGraphqlRequest } from "@/__mocks__/server";
import { user } from "@/__mocks__/user";
import { HTTP_STATUSES } from "@/constants/http";
import userResolvers from "../../user.resolvers";

describe(userResolvers.Query.userFromContext.name, () => {
  interface UserFromContextResponse {
    userFromContext: {
      id: string;
      email: string;
    } | null;
  }

  const query = /* GraphQL */ `
    query {
      userFromContext {
        id
        email
      }
    }
  `;

  it("should return user data if authenticated", async () => {
    const response =
      await executeGraphqlRequest<UserFromContextResponse>(query);

    expect(response.data?.userFromContext).toEqual({
      id: user.id,
      email: user.email,
    });
  });

  it("should throw if user is not authenticated", async () => {
    const response = await executeGraphqlRequest<UserFromContextResponse>(
      query,
      null,
    );

    expect(response.data?.userFromContext).toBeNull();
    expect(response.errors?.[0]?.message).toEqual(
      HTTP_STATUSES.UNAUTHORIZED.MESSAGE,
    );
  });
});
