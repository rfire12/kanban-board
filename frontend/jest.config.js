module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/tests/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/src/tests/__mocks__/styleMock.js',
  },
  modulePathIgnorePatterns: ['node_modules', '.git'],
  verbose: false,
};
