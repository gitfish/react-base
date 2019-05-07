module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/*.ts?(x)",
      "!src/**/*.d.ts?(x)"
    ],
    coverageDirectory: "__coverage__",
    testMatch: [
      "**/src/**/*.test.*"
    ],
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js"
    ],
    moduleDirectories: [
      "node_modules",
      "src"
    ],
    moduleNameMapper: {
    },
    preset: "ts-jest",
    globals: {
      "ts-jest": {
        tsConfig: "tsconfig.test.json"
      }
    }
}