module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:sonarjs/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'react/prop-types': ['off'],
        '@typescript-eslint/no-var-requires': 'off',
        'sonarjs/cognitive-complexity': ['error', 5],
        'max-lines-per-function': ['error', 80]
    }
};
