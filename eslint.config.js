// ESLint flat config com remoção automática de imports/variáveis não usados
import js from "@eslint/js";
import globals from "globals";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  // ignores globais (não lints)
  {
    ignores: [
      "dist/**",
      "build/**",
      "coverage/**",
      "node_modules/**",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      // Remoção e aviso de não usados
      "no-unused-vars": ["warn", {
        args: "after-used",
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_"
      }],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": ["warn", {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_"
      }],
    },
  },
];
