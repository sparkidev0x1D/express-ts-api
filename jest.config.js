module.exports = {
    roots: ['<rootDir>/src','<rootDir>/tests'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts','tsx','js','json', 'node'],
    testTimeout: 30000,
    collectCoverage: true,
    coverageReporters: ["lcov"]
    
  }
