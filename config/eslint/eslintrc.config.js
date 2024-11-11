import js from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-config-prettier";
import parser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  typescriptPlugin.configs.recommended,
  prettier,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser,
      ecmaVersion: "2021",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      "unused-imports": require("eslint-plugin-unused-imports"),
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "no-duplicate-imports": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
];
