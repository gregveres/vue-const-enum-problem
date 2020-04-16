module.exports = {
  // This finds all the spec files mixed in with the source rather than in a separate testing folder
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  // This setups some files to be loaded before all testing starts
  setupFilesAfterEnv: [
    '<rootDir>/tests/unit/jest.setup.js' // we need this because of vuetify and composition API
  ],
  // Code coverage settings
  collectCoverage: false,
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.vue',
    '<rootDir>/src/components/**/*.ts',
    '<rootDir>/src/pages/**/*.vue',
    '<rootDir>/src/pages/**/*.ts',
    '<rootDir>/src/layouts/**/*.vue',
    '<rootDir>/src/layouts/**/*.ts',
    '<rootDir>/src/router/**/*.ts',
    '<rootDir>/src/store/**/*.ts'
  ],
  // tell jest how to handle the files it will encounter
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  // transform: {
  //   '.*\\.vue$': 'vue-jest',
  //   '.*\\.js$': 'babel-jest',
  //   '.*\\.ts$': 'ts-jest',
  //   '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
  //     'jest-transform-stub'
  //   // use these if NPM is being flaky
  //   // '.*\\.vue$': '<rootDir>/node_modules/@quasar/quasar-app-extension-testing-unit-jest/node_modules/vue-jest',
  //   // '.*\\.js$': '<rootDir>/node_modules/@quasar/quasar-app-extension-testing-unit-jest/node_modules/babel-jest'
  // },
  transformIgnorePatterns: ['/node_modules/(?!name-of-lib-o-transform)'],
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@services/(.*)$': '<rootDir>/src/api/Services/$1'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue']
};
