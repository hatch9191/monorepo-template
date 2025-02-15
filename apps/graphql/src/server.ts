import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";

import { schema } from "./schema.ts";
import { createContext } from "@/modules/context/createContext.ts";

export const yoga = createYoga({
  schema,
  context: createContext,
  maskedErrors: false,
});

const server = createServer(yoga);

const startServer = () => {
  server.listen(4000, () => {
    console.info("Server is running on http://localhost:4000/graphql");
  });
};

startServer();
