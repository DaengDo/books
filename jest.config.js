/** @type {import('ts-jest').JestConfigWithTsJest} */

/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  extensionsToTreatAsEsm: [".jsx", ".ts", ".tsx"],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
};

export default config;
