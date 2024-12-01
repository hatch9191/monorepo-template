import { InitialContext, Context } from "./types";

import { createPrismaClient } from "../prisma/createPrismaClient";

const extractHeaders = (context: InitialContext): Headers => {
  return context.request.headers;
};

export function createContext(initialContext: InitialContext): Context {
  const headers = extractHeaders(initialContext);
  console.log(headers); //TODO: decode the Bearer Token

  return {
    ...initialContext,
    // user: {},
    prisma: createPrismaClient(),
  };
}
