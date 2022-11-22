module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!**/*.stories.{js,ts,tsx}',
    '!src/interfaces/**/*.ts',
    '!src/constant/**/*.ts',
    '!src/main.tsx',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.css$': '<rootDir>/src/__mocks__/styleMock.js',
    '^@mocks/(.*)$': '<rootDir>/src/__mocks__/mockData.js',
    '^@contexts(.*)$': '<rootDir>/src/contexts$1',
    '^@layouts(.*)$': '<rootDir>/src/layouts$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@constant(.*)$': '<rootDir>/src/constant$1',
    '^@helpers(.*)$': '<rootDir>/src/helpers$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@interface(.*)$': '<rootDir>/src/interface$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@themes(.*)$': '<rootDir>/src/themes$1',
    '^@self-types/(.*)$': '<rootDir>/src/types/$1',
    '^@app(.*)$': '<rootDir>/src/app$1',
    '^@root(.*)$': '<rootDir>/src$1',
    '.*\\.(css|styl|scss|sass)$': 'identity-obj-proxy',
    '.*\\.(axios)$': 'identity-obj-proxy',
    '^((?!vars\\.less).)*\\.less': 'identity-obj-proxy',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/image.js',
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  resetMocks: true,
}
