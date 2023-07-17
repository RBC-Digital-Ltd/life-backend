module.exports = {
  root: true,
  extends: ["plugin:jest-extended/all"],
  parserOptions: {
    project: "tsconfig.json",
  },
  env: {
    jest: true,
    node: true,
  },
};
