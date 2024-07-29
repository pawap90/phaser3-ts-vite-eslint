import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts}']
    },
    {
        ignores: ['dist/**', 'node_modules/**']
    },
    {
        languageOptions: { globals: globals.browser }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            'semi': ['error', 'always'],
            'no-console': 2,
            'quotes': ['error', 'single'],
            'curly': 0,
            'brace-style': ['error', 'stroustrup'],
            'indent': ['error', 4],
            'eol-last': ['error', 'never'],
            '@typescript-eslint/no-unused-vars': 2
        }
    }
];