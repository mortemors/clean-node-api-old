module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'covarage',
  testEnvironment: 'node',

  transform: {
    '.+\\.ts$': 'ts-jest'
  }

}
