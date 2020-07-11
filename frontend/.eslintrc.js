module.exports = {
    extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        project: './tsconfig.json'
    },
    rules: {
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        '@typescript-eslint/interface-name-prefix': ['error', 'always'],
        'max-classes-per-file': 'off',
        'no-param-reassign': ['error', { 'props': false }],
        'import/prefer-default-export': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': ['error', 'nofunc'],
        'indent': ['error', 2],
        'brace-style': ['error', '1tbs'],
        'no-tabs': 'off',
        'max-len': 'off',
        'func-names': 'off',
        'prefer-arrow-callback': 'off',
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
    },
};