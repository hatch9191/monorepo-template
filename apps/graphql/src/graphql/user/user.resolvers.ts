import { Context, ContextUser } from "@/modules/context/types.ts";
import { getUserFromContext } from "@/modules/user/getUserFromContext/getUserFromContext.ts";

export default {
  Query: {
    userFromContext: async (
      _root: unknown,
      _args: unknown,
      ctx: Context
    ): Promise<ContextUser | null> => getUserFromContext(ctx),
  },
};
