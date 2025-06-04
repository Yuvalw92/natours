const js = require('@eslint/js');
const prettier = require('eslint-config-prettier');
const node = require('eslint-plugin-node');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  js.configs.recommended,
  prettier,
  {
    plugins: { node, prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',
      'spaced-comment': 'off',
      'no-console': 'warn',
      'consistent-return': 'off',
      'func-names': 'off',
      'object-shorthand': 'off',
      'no-process-exit': 'off',
      'no-param-reassign': 'off',
      'no-return-await': 'off',
      'no-underscore-dangle': 'off',
      'class-methods-use-this': 'off',
      'prefer-destructuring': [
        'error',
        {
          object: true,
          array: false,
        },
      ],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: 'req|res|next|val',
        },
      ],
    },
  },
];
