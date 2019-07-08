module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    },
    "import/resolver": {
      typescript: {}
    }
  },
  extends: [
    'airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    describe: 'readonly',
    it: 'readonly',
    xit: 'readonly',
    xdescribe: 'readonly',
    expect: 'readonly',
    jasmine: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly',
    spyOn: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "no-useless-constructor": "off",
    "no-empty-function": ["error", { "allow": ["constructors"] }]
  },
  plugins: ['@typescript-eslint', 'import']
};
