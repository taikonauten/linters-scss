const presetPatterns = require('postcss-bem-linter/lib/preset-patterns');

module.exports = {
  extends: 'stylelint-config-standard-scss',
  plugins: [
    'stylelint-selector-bem-pattern'
  ],
  rules: {
    'alpha-value-notation': 'number',
    'at-rule-disallowed-list': [
      'debug'
    ],
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'block-closing-brace-newline-after': 'always-single-line',
    'block-closing-brace-empty-line-before': null,
    'block-no-empty': true,
    'color-function-notation': 'legacy',
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-colon-newline-after': null,
    'declaration-empty-line-before': null,
    'declaration-no-important': true,
    'declaration-property-value-disallowed-list': {},
    'function-comma-space-after': 'always-single-line',
    'function-parentheses-space-inside': 'never',
    'function-parentheses-space-inside': 'never-single-line',
    'max-nesting-depth': 4,
    'no-descending-specificity': null,
    'no-duplicate-selectors': true,
    'no-empty-first-line': null,
    'number-leading-zero': 'never',
    'property-no-unknown': true,
    'rule-empty-line-before': ['always', {
      ignore: ['after-comment', 'first-nested']
    }],
    'selector-class-pattern': null,
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-no-qualifying-type': true,
    'selector-pseudo-element-no-unknown': true,
    'string-quotes': 'single',

    'scss/at-mixin-argumentless-call-parentheses': null,
    'scss/comment-no-loud': true,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/selector-no-redundant-nesting-selector': true,

    'plugin/selector-bem-pattern': {
      preset: 'bem',
      componentSelectors: presetPatterns.bem.componentSelectors
    }
  }
};
