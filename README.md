[![Build Status](https://secure.travis-ci.org/duncanhsieh/bespoke-theme-ixda.png?branch=master)](https://travis-ci.org/duncanhsieh/bespoke-theme-ixda)

# bespoke-theme-ixda

A theme for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js) &mdash; [View demo](http://duncanhsieh.github.io/bespoke-theme-ixda)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/duncanhsieh/bespoke-theme-ixda/master/dist/bespoke-theme-ixda.min.js
[max]: https://raw.github.com/duncanhsieh/bespoke-theme-ixda/master/dist/bespoke-theme-ixda.js

## Usage

This theme is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  ixda = require('bespoke-theme-ixda');

bespoke.from('#presentation', [
  ixda()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.themes.ixda()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-theme-ixda
```

### Bower

```bash
$ bower install bespoke-theme-ixda
```

## Credits

This theme was built with [generator-bespoketheme](https://github.com/markdalgleish/generator-bespoketheme).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
