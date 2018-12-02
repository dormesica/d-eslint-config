
module.exports = {
    parserOptions: {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true,
        }
    },
    rules: {
        // Possible Errors
        'for-direction': 'error',
        'getter-return': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'warn',
        'no-cond-assign': ['warn', 'always'],
        'no-console': 'error',
        'no-constant-condition': ['error', { 'checkLoops': false }],
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': ['error', {
            'nestedBinaryExpressions': true,
            'ignoreJSX': 'multi-line',

        }],
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': ['error', 'both']
    }
};
