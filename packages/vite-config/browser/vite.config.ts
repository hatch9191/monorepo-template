import { defineConfig } from "vitest/config";

const testConfig = defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    include: ["**/*.test.{ts,tsx}"],
    environment: "jsdom",
    coverage: {
      provider: "istanbul",
      enabled: true,
      reportsDirectory: "coverage",
      reporter: ["json", "text", "lcov", "clover"],
      include: [
        "src/**/*.{ts,tsx}",
        "!**/*.stories.{tsx}",
        "!**/*.d.{ts}",
        "!**/*.test.{ts,tsx}",
        "!src/**/__test__/**/*",
        "!src/**/__tests__/**/*",
        "!src/**/__mocks__/**/*",
        "!scripts/**/*",
      ],
      exclude: ["node_modules", "dist"],
    },
  },
});

export default testConfig;
