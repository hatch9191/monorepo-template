import { defineConfig } from "vitest/config";
import dotenv from "dotenv";
import tsconfigPaths from "vite-tsconfig-paths";
import { nodeConfig } from "@repo/vite-config/node";

dotenv.config();

export default defineConfig({
  ...nodeConfig,
  plugins: [tsconfigPaths()],
  test: {
    ...nodeConfig.test,
    name: "graphql-server",
  },
});
