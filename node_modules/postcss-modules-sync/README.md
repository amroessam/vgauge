# postcss-modules-sync 

> A PostCSS plugin to use CSS Modules synchronously in js.

[![version](https://img.shields.io/npm/v/postcss-modules-sync.svg?style=flat-square)](http://npm.im/postcss-modules-sync)
[![MIT License](https://img.shields.io/npm/l/postcss-modules-sync.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## Install
```
npm install postcss-modules-sync
```

## Example
```js
import CSSModulesSync from 'postcss-modules-sync'
import postcss from 'postcss'

const css = `
  :global .text {
    color: white;
    background-color: gray;
  }

  .green {
    background-color: green;
  }

  .blue {
    background-color: blue;
  }

  .default {
    composes: green;
    display: flex;
  }
`

let exportedTokens = {}
const styles = postcss([
  CSSModulesSync({
    generateScopedName: '[path][local]-[hash:base64:10]',
    getJSON: tokens => exportedTokens = tokens
  })
]).process(css).css

console.log('styles', styles)
console.log('tokens', exportedTokens)
```