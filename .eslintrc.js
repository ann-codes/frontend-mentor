module.exports = {
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
            },
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'google',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',

        // Keep prettier last to override other configs
        'plugin:prettier/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-unused-vars': 'warn',
        'prettier/prettier': ['error'],

        // CUSTOM RULES
        'import/order': [
            'error',
            {
                groups: ['external', 'builtin', 'internal', ['parent', 'sibling'], 'index'],
                'newlines-between': 'always',
            },
        ],
        semi: ['error', 'always'],

        // OFF
        'react/react-in-jsx-scope': 'off',
        'require-jsdoc': 'off',
        'import/no-unresolved': 'off',

        // WARN
    },
};
