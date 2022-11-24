/**
 * @type {import("@jest/types").Config.ProjectConfig}
 */
export default {
  testTimeout: 10 * 1000,
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**"],
  coveragePathIgnorePatterns: ["node_modules/"],
  testEnvironment: "node",
  testRegex: "/test/.*\\.test\\.ts$",
  moduleFileExtensions: ["ts", "js", "json"],
  coverageThreshold: {
    // global: {
    //   branches: 80,
    //   functions: 85,
    //   lines: 85,
    //   statements: 85,
    // },
  },
  reporters: ["default", ["jest-junit", { outputDirectory: "coverage" }]],
};
