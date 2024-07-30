module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style": 0,
    "no-plusplus": 0,
    "prefer-template": 0,
    "padded-blocks": 0,
    "no-trailing-spaces": 0,
    "radix": 0,
    "arrow-parens": 0,
    "space-in-parens": 0,
    "eqeqeq": 0,
    "max-len": 0,
    "spaced-comment": 0,
  },
};
