import { executeGraphqlRequest } from "@/__mocks__/server.ts";
import { user } from "@/__mocks__/user.ts";
import { HTTP_STATUSES } from "@/constants/http.ts";
import userResolvers from "../../user.resolvers.ts";

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
      null
    );

    expect(response.data?.userFromContext).toBeNull();
    expect(response.errors?.[0]?.message).toEqual(
      HTTP_STATUSES.UNAUTHORIZED.MESSAGE
    );
  });
});
