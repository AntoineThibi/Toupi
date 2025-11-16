import bamtech from "@bam.tech/eslint-plugin";

export default [
  ...bamtech.configs.recommended,
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
];
