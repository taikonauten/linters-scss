<p align="center">
  <img src="https://i.imgur.com/dV1aZjJ.png" title="Taikonauten">
</p>

<h1 align="center">Taikonauten SCSS / CSS stylelint rules</h1>

<p>&nbsp;</p>

This package provides the SCSS / CSS stylelint rules used at [Taikonauten](https://taikonauten.com).

## Description

[stylelint](https://stylelint.io/) is a modern tool to lint CSS files. It can easily be extended with plugins. In our case, we are using the `scss` plugin for support of SCSS files. The `.stylelintrc` file shipped with this repository contains the current ruleset used at Taikonauten. Most of the rules are default settings for stylelint and more or less a standard for writing SCSS.

## Configuration

The configuration is intended to be used with BEM. Other methodologies may result in issues with this linter.
The following important settings are applied to all SCSS files generated or worked with at Taikonauten:

* Spaces are used for indentation. The default indent is 2 spaces.
* The maximum nesting depth is 3.
* Colors use the lowercase Hex notation and prefer the short option: `#fff`
* IDs, vendor prefixes and `!important` are not allowed.
* Single quotes are used if needed, e.g. for `content: '';`.

## Installation

Run the following two commands in your terminal to install the package and then create a symlink to the .stylelintrc file:

```bash
npm install --save-dev @taikonauten/linters-scss stylelint-selector-bem-pattern stylelint-config-standard-scss
```

Create a `.stylelintrc` file in your project root

```json
{
  "extends": "./node_modules/@taikonauten/linters-scss/index.js",
  "rules": {},
  "ignoreFiles": []
}
```

You may also want to add a new script in your `package.json` to quickly run stylelint:

```json
"scripts": {
  "lint-scss": "stylelint path-to-styles/*.scss"
}
```

After that, make sure your editor or IDE supports the .stylelintrc file. PhpStorm works with it right out of the box.
For Sublime Text, install the [SublimeLinter-stylelint](https://github.com/SublimeLinter/SublimeLinter-stylelint) plugin.
For Atom, install the [linter-stylelint](https://atom.io/packages/linter-stylelint) plugin.
For VS Code, install the [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) plugin.

---

Made with ♡ at Taikonauten
