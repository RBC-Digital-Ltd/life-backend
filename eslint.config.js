const sheriff = require("eslint-config-sheriff");
const { defineFlatConfig } = require("eslint-define-config");

const sheriffOptions = {
  react: false,
  lodash: false,
  next: false,
  playwright: false,
  jest: true,
  vitest: false,
};

module.exports = defineFlatConfig([
  ...sheriff(sheriffOptions),
  {
    rules: {
      "@typescript-eslint/require-await": 0,
    },
  },
]);
