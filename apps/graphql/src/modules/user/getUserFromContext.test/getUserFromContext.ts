import { Context, ContextUser } from "@/modules/context/types";

export function getUserFromContext(ctx: Context): ContextUser | null {
  return ctx.user;
}
