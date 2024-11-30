import { resolve } from "node:path";
import globals from "globals";
import { baseConfig } from "./base.mjs";

const project = resolve(process.cwd(), "tsconfig.json");

/**
 * A custom ESLint configuration for servers.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const serverConfig = [
  ...baseConfig,
  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      parserOptions: {
        project,
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      "import/no-default-export": "off",
    },
    settings: {
      "import/resolver": {
        typescript: {
          project,
        },
      },
    },
    ignores: [".*.js", "node_modules/", "dist/"],
  },
  {
    files: ["**/__tests__/**/*"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
