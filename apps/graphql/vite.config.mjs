import { defineConfig } from "vitest/config";
import dotenv from "dotenv";
import tsconfigPaths from "vite-tsconfig-paths";
import { node } from "@liuli-util/vite-plugin-node";

dotenv.config();

export default defineConfig({
  plugins: [tsconfigPaths(), node()],
  resolve: {
    extensions: [".ts", ".js"], // Ensure .ts and .js are resolved
  },
  test: {
    name: "graphql-server",
    globals: true,
    clearMocks: true,
    include: ["**/*.test.{ts,tsx}"],
    coverage: {
      provider: "istanbul",
      enabled: true,
      reportsDirectory: "coverage/graphql",
      reporter: ["json", "text", "lcov", "clover"],
      include: ["src/**/*.ts"],
      exclude: [
        "test/__fixtures__",
        "node_modules",
        "dist",
        "src/**/__mocks__/**/*",
        "**/*.test.ts",
      ],
    },
  },
});
