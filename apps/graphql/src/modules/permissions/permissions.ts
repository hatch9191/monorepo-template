import { rule, shield } from "graphql-shield";

import { Context } from "@/context/types";

const isAuthenticated = rule({
  cache: "contextual",
})((_parent, _args, ctx: Context) => {
  return Boolean(ctx?.user);
});

export const rules = shield(
  {
    Query: {
      userFromContext: isAuthenticated,
    },
  },
  {
    allowExternalErrors: true,
  },
);
