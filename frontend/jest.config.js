const { resolve } = require("path");

// jest.config.js
module.exports = {
  roots: ["<rootDir>"],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
  moduleDirectories: ["node_modules", "utils", __dirname],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  modulePaths: ["<rootDir>"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
    "^@/components/(.*)$": resolve(__dirname, "./components/$1"),
    "^@/features/(.*)$": resolve(__dirname, "./features/$1"),
    "^@/infrastructure/(.*)$": resolve(__dirname, "./infrastructure/$1"),
    "^@/pages/(.*)$": resolve(__dirname, "./pages/$1"),
    "^@/utils/(.*)$": resolve(__dirname, "./utils/$1"),
  },
};
