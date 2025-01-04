import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";

import { schema } from "./schema";
import { createContext } from "@/modules/context/createContext";

export const yoga = createYoga({
  schema,
  context: createContext,
  maskedErrors: false,
});

let server = createServer(yoga);

const startServer = () => {
  server.listen(4000, () => {
    console.info("Server is running on http://localhost:4000/graphql");
  });
};

startServer();
