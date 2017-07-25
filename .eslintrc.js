// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,


    // Reprom Rules
    // allow console sentences during development
    // 'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow 3 empty lines max and only 1 at the beginning of the file
    'no-multiple-empty-lines': ["error", { "max": 2, "maxBOF": 1 }],
    // allow white spaces for properties, variables and import statements alignment
    // 'no-multi-spaces': ["error", {
    //   exceptions: {
    //     "Property": true,
    //     "VariableDeclarator": true,
    //     "ImportDeclaration": true,
    //   }
    // }],
    // allow object values and colons to be aligned
    // 'key-spacing': ["error", { "mode": "minimum" }],
    // 'key-spacing': [2, { "align": "colon" }],
    // allow to mutate state in vuex store mutations
    // "no-param-reassign": ["error", { "props": false }],
  }
}
