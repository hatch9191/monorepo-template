import { Context, ContextUser } from "@/modules/context/types";
import { getUserFromContext } from "@/modules/user/getUserFromContext.test";

export default {
  Query: {
    userFromContext: async (
      _root: unknown,
      _args: unknown,
      ctx: Context,
    ): Promise<ContextUser | null> => getUserFromContext(ctx),
  },
};
