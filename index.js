
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
        'no-inner-declarations': ['error', 'both'],
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': ['error', {
            'skipStrings': true,
            'skipComments': false,
            'skipRegExps': true,
            'skipTemplates': true
        }],
        'no-misleading-character-class': 'warn',
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'off',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'warn',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'require-atomic-updates': 'warn',
        'use-isnan': 'error',
        'valid-jsdoc': ['warn', {
            'requireReturn': false,
            'requireReturnType': true,
            'matchDescription': ".+",  // require description
            'requireParamDescription': true,
            'requireReturnDescription': true,
            'requireParamType': true
        }],
        'valid-typeof': 'error'

    }
};
