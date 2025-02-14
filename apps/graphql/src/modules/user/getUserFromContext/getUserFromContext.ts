import { Context, ContextUser } from "@/modules/context/types.ts";

export function getUserFromContext(ctx: Context): ContextUser | null {
  return ctx.user;
}
