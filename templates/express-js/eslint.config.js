import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.node,
            },
        },
        rules: {
            'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            'no-console': 'off',
        },
    },
    prettier,
];
