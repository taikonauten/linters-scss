<p align="center">
  <img src="https://i.imgur.com/dV1aZjJ.png" title="Taikonauten">
</p>

<h1 align="center">Taikonauten SCSS Linter</h1>

<p>&nbsp;</p>

This package provides the SCSS linter used at [Taikonauten](https://taikonauten.com).

## Description

[Stylelint](https://stylelint.io/) is a modern tool to lint CSS files. It can easily be extended with plugins. In our case, we are using the `scss` plugin for support of SCSS files. The `.stylelintrc` file shipped with this repository contains the current ruleset used at Taikonauten. Most of the rules are default settings for Stylelint and more or less a standard for writing SCSS.

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
npm install --save-dev @taikonauten/linters-scss

ln -s node_modules/@taikonauten/linters-scss/.stylelintrc .stylelintrc
```

You may also want to add a new script to quickly run Stylelint:

```
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
