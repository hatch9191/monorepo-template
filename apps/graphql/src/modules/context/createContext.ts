import { prisma } from "@repo/db";
import { InitialContext, Context, ContextUser } from "./types.ts";
import { decodeJwtToken } from "@/helpers/jwt/jwt.ts";
import { envVarConfig } from "@/constants/envVarConfig.ts";

function extractHeaders(context: InitialContext): Headers | undefined {
  return context.request.headers;
}

function getDecodedUser(token?: string | null): ContextUser | null {
  try {
    if (!token) {
      return null;
    }

    const decodedToken = decodeJwtToken<ContextUser>(
      envVarConfig.jwtSecret,
      token
    );

    if (!decodedToken) {
      return null;
    }

    return {
      ...decodedToken,
      accessToken: token,
    };
  } catch (error) {
    console.error("Invalid token -", error);
    return null;
  }
}

export function createContext(initialContext: InitialContext): Context {
  const headers = extractHeaders(initialContext);
  const token = headers?.get("authorization")?.replace("Bearer ", "");

  return {
    ...initialContext,
    user: getDecodedUser(token),
    prisma,
  };
}
