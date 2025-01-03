import { InitialContext, Context, ContextUser } from "./types";
import { createPrismaClient } from "src/clients/prisma/createPrismaClient";
import { decodeJwtToken } from "@/helpers/jwt/index";
import { envVarConfig } from "@/constants/envVarConfig";

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
      token,
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
    prisma: createPrismaClient(),
  };
}
