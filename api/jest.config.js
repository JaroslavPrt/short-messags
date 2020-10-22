/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  roots: ['<rootDir>'],
  testRegex: '.spec.ts$',
  transform: {
    '\\.ts$': 'ts-jest',
  },
  coverageDirectory: './coverage',
  testEnvironment: 'node',
};
