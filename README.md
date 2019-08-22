# rosid-handler-less

[![Travis Build Status](https://travis-ci.org/freedeebee/rosid-handler-less.svg?branch=master)](https://travis-ci.org/freedeebee/rosid-handler-less) [![Coverage Status](https://coveralls.io/repos/github/freedeebee/rosid-handler-less/badge.svg?branch=master)](https://coveralls.io/github/freedeebee/rosid-handler-less?branch=master) [![Dependencies](https://david-dm.org/freedeebee/rosid-handler-less.svg)](https://david-dm.org/freedeebee/rosid-handler-less#info=dependencies) [![Greenkeeper badge](https://badges.greenkeeper.io/freedeebee/rosid-handler-less.svg)](https://greenkeeper.io/)

A function that loads a LESS file, transforms it to CSS, adds vendor prefixes and minifies the output.

## Install

```
npm install rosid-handler-less
```

## Usage

### API

```js
const handler = require('rosid-handler-less')

handler('main.less').then((data) => {})
handler('main.css', { optimize: true }).then((data) => {})
```

### Rosid

Add the following object to your `rosidfile.json`, `rosidfile.js` or [routes array](https://github.com/electerious/Rosid/blob/master/docs/Routes.md). `rosid-handler-less` will transform all matching LESS files in your source folder to CSS.

```json
{
  "name"    : "LESS",
  "path"    : "[^_]*.{css,less}*",
  "handler" : "rosid-handler-less"
}
```

```less
/* main.less */
.class {
  color: white;
}
```

```css
/* main.css (output) */
.class { color: white; }
```

## Parameters

- `filePath` `{String}` Absolute path to file.
- `opts` `{?Object}` Options.
	- `optimize` `{?Boolean}` - Optimize output. Defaults to `false`.

## Returns

- `{Promise<String|Buffer>}` The transformed file content.