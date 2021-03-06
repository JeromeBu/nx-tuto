// module.exports = {
//   name: "api",
//   preset: "../../jest.config.js",
//   coverageDirectory: "../../coverage/apps/api",
// };

module.exports = {
  name: "api",
  preset: "../../jest.config.js",
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "html"],
  coverageDirectory: "../../coverage/libs/calculator",
};
