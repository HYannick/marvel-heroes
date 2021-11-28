module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverage: true,
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  collectCoverageFrom: [
    'src/**/*.{js,ts,vue}',
    '!src/**/*.component.ts',
    '!src/main.ts',
    '!src/router/*',
    '!src/registerServiceWorker.ts',
    '!**/*.d.ts',
  ],
  coverageReporters: ['html', 'json-summary', 'text-summary', 'lcov', 'clover', 'cobertura'],
  moduleNameMapper: {
    '^@unit/(.*)$': '<rootDir>/tests/unit/$1',
  },
  reporters: ['default', 'jest-junit'],
};
