import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  rootDir: '.',
  testMatch: [
    '**/tests/**/*.test.ts',
  ],
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__fixtures__/',
    '/(__)?test(s__)?/',
    '/(__)?mock(s__)?/',
    '/__jest__/',
    '.?.min.js',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
    'json',
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
