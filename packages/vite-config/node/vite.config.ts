import { defineConfig } from "vitest/config";

export const nodeConfig = defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    include: ["**/*.test.{ts,tsx}"],
    environment: "node",
    name: "node",
    coverage: {
      provider: "istanbul",
      enabled: true,
      reportsDirectory: "coverage",
      reporter: ["json", "text", "lcov", "clover"],
      include: [
        "src/**/*.{ts,tsx}",
        "server/**/*.{ts}",
        "!**/stories.{tsx}",
        "!**/*.stories.{tsx}",
        "!**/*.d.{ts}",
        "!**/*.test.{ts,tsx}",
        "!src/**/__test__/**/*",
        "!src/**/__tests__/**/*",
        "!src/**/__mock__/**/*",
        "!scripts/**/*",
      ],
      exclude: ["test/__fixtures__", "node_modules", "dist"],
    },
  },
});
