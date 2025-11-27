import js from "@eslint/js";
import bamtech from "@bam.tech/eslint-plugin";
import reactCompiler from "eslint-plugin-react-compiler";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  ...bamtech.configs.recommended,
  js.configs.recommended,
  reactCompiler.configs.recommended,
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "no-unused-vars": "off", // Typescript handles this
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  // Override for test files
  ...bamtech.configs.tests.map((config) => ({
    ...config,
    files: ["**/*.test.ts", "**/*.test.tsx", "__mocks__/**", "**/jest-*"],
    languageOptions: {
      ...config.languageOptions,
      globals: {
        jest: "readonly",
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
      },
    },
  })),
  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/no-empty-object-type": [
        "error",
        // Allow overwriting of interfaces for example for the theme
        // See: https://typescript-eslint.io/rules/no-empty-object-type/#allowinterfaces
        // And: src/shared/design-system/theme/unistyles.ts
        { allowInterfaces: "with-single-extends" },
      ],
    },
  },
  {
    files: ["**/*.tsx"],
    rules: {
      "react-native/no-raw-text": "off",
    },
  },
];
