'use strict'

import stylistic from '@stylistic/eslint-plugin'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import jest from 'eslint-plugin-jest'
import love from 'eslint-config-love'

export default [
    {
        ignores: ['dist', '**/*.js']
    },
    // Stylistic
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            '@stylistic/indent': ['error', 4],
            '@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
            '@stylistic/space-before-function-paren': 'off',
            '@stylistic/no-unmodified-loop-condition': 'off'
        }
    },
    // eslint-config-love
    {
        ...love
    },
    // Jest
    {
        files: ['test/**/*.test.ts', 'tests/**/*.test.ts', 'test/**/*.spec.ts', 'tests/**/*.spec.ts'],
        ...jest.configs['flat/recommended'],
        rules: {
            ...jest.configs['flat/recommended'].rules,
            ...jest.configs['flat/style'].rules
        }
    },
    // Prettier
    eslintPluginPrettierRecommended
]
