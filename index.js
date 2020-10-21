const presetPatterns = require('postcss-bem-linter/lib/preset-patterns');

module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-scss',
    'stylelint-selector-bem-pattern'
  ],
  rules: {
    'at-rule-disallowed-list': [
      'debug'
    ],
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'block-closing-brace-newline-after': 'always-single-line',
    'block-closing-brace-empty-line-before': null,
    'block-no-empty': true,
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-colon-newline-after': null,
    'declaration-empty-line-before': null,
    'declaration-no-important': true,
    'declaration-property-value-disallowed-list': {
      transform: ['/none/'],
    },
    'function-comma-newline-after': 'never-multi-line',
    'function-comma-space-after': 'always',
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    'max-nesting-depth': 3,
    'media-feature-name-no-vendor-prefix': true,
    'no-descending-specificity': null,
    'no-duplicate-selectors': true,
    'number-leading-zero': 'never',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': ['always', {
      ignore: ['after-comment', 'first-nested']
    }],
    'selector-list-comma-newline-after': 'always',
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'single',
    'value-no-vendor-prefix': true,

    'scss/at-rule-no-unknown': true,
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': [
      'scss',
      'sass',
      'css'
    ],
    'scss/comment-no-loud': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/selector-no-redundant-nesting-selector': true,

    'plugin/selector-bem-pattern': {
      preset: 'bem',
      componentSelectors: presetPatterns.bem.componentSelectors
    }
  }
};
