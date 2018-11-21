/* error level */
const error = 'error'
const off = 'off'
const warn = 'warn'

/* boolean pairs */
const always = 'always'
const never = 'never'

module.exports = {
    env: { browser: true, es6: true },
    extends: ['eslint:recommended', 'airbnb'],
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [ 'react' ],
    rules: {
        indent: [ warn, 2, {
                SwitchCase: 1,
        }],
        'linebreak-style': [ warn, 'unix' ],
        quotes: [ warn, 'single' ],
        semi: [ warn, never ],
        'space-before-function-paren': [warn, {
            anonymous: always,
            asyncArrow: always,
            named: always,
        }],
        'max-len': off,
        'no-plusplus': [warn, { 'allowForLoopAfterthoughts': true }],
        /* warn */
        'comma-style': warn,
        'no-multi-spaces': warn,
        'no-multiple-empty-lines': warn,
        'no-trailing-spaces': warn,
        'no-unused-vars': warn,
        'prefer-template': warn,
        'react/prefer-stateless-function': warn,
        'semi-style': warn,
        'space-infix-ops': warn,
        'no-empty': warn,
        'no-extra-semi': warn,
        'arrow-parens': warn,
        'object-curly-spacing': warn,
        /* buggy */
        'jsx-a11y/anchor-is-valid': off,
        'react/destructuring-assignment': off,
    },
    'globals': {
        describe: false,
        expect: false,
        it: false,
    }
};
