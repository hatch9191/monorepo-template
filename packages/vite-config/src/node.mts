import { defineConfig } from "vitest/config";

export const nodeConfig = defineConfig({
  test: {
    name: "node",
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
