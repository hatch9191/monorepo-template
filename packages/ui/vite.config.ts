import { defineConfig, UserConfig } from "vitest/config";
import dotenv from "dotenv";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

dotenv.config();

export default defineConfig({
  plugins: [tsconfigPaths(), react()] as UserConfig["plugins"],
  test: {
    name: "ui",
    globals: true,
    environment: "node",
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
