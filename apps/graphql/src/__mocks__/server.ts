import { parse, ExecutionResult } from "graphql";
import { buildHTTPExecutor } from "@graphql-tools/executor-http";
import { createYoga } from "graphql-yoga";

import { schema } from "../schema.ts";
import { createMockContext } from "./context/createMockContext.ts";
import { ContextUser } from "@/context/types.ts";

export async function executeGraphqlRequest<T>(
  query: string,
  contextUser?: ContextUser | null
) {
  const yoga = createYoga({
    schema,
    context: () => createMockContext(contextUser),
    maskedErrors: false,
  });

  const executor = buildHTTPExecutor({
    fetch: yoga.fetch,
    endpoint: `http://yoga/graphql`,
  });

  return executor({
    document: parse(query),
  }) as ExecutionResult<T>;
}
