/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  
  testEnvironment: 'jsdom',

  testMatch: ['**/*.test.ts?(x)'],

  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
