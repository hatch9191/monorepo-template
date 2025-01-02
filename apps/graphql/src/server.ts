import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";

import { schema } from "./schema";
import { createContext } from "./context/createContext";

const yoga = createYoga({
  schema,
  context: createContext,
});

let server = createServer(yoga);

const startServer = () => {
  server.listen(4000, () => {
    console.info("Server is running on http://localhost:4000/graphql");
  });
};

// Clean up the previous instance of the server
const stopServer = () => {
  if (server?.listening) {
    server.close(() => {
      console.info("Previous server instance closed.");
    });
  }
};

// Handle HMR (Hot Module Replacement)
if (import.meta.hot) {
  import.meta.hot.on("vite:beforeFullReload", () => {
    stopServer();
  });

  import.meta.hot.dispose(() => {
    stopServer();
  });
}

startServer();
