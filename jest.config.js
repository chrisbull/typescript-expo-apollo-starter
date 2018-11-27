// jest.config.js
const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  ...tsjPreset,
  preset: 'jest-expo',
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'tsConfig.jest.json',
    },
  },
  cacheDirectory: '.jest/cache',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
}
