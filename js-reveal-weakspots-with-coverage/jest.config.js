module.exports = {
  collectCoverageFrom: [
    "src/**/*.js",
    "!**/node_modules/**"
  ],
  coverageThreshold: {
    global: {
      branches: 84,
      functions: 84,
      lines: 84,
      statements: 84
    }
  }
};

