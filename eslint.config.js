import sheriff from "eslint-config-sheriff";
import { defineFlatConfig } from "eslint-define-config"; // add this

const sheriffOptions = {
  react: false,
  lodash: false,
  next: false,
  playwright: false,
  jest: true,
  vitest: false,
};

export default defineFlatConfig([
  ...sheriff(sheriffOptions),
  {
    rules: {
      "@typescript-eslint/require-await": 0,
    },
  },
]);
