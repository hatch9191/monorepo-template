import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "utils",
    globals: true,
    clearMocks: true,
    include: ["**/*.test.{ts,tsx}"],
    environment: "node",
    coverage: {
      provider: "istanbul",
      enabled: true,
      reportsDirectory: "coverage/graphql",
      reporter: ["json", "text", "lcov", "clover"],
      include: [
        "src/**/*.{ts,tsx}",
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
