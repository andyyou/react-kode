# react-kode

A react component that integrates [highlight.js](https://highlightjs.org) with advance.
See examples on [Codepen](https://codepen.io/andyyou/pen/zyVvMV) or [Storybook](https://andyyou.github.io/react-kode).

* Support theme by highlight.js
* Support line number.

## Usage

#### Dependencies

* [highlight.js](https://highlightjs.org)
* [React](https://reactjs.org/)

#### Getting start with [CRA](https://facebook.github.io/create-react-app/)

```bath
$ npx create-react-app demo
$ cd demo
$ npm i highlight.js react-kode
```

Open `src/index.js`

```js
import React from 'react';
import ReactDOM from 'react-dom';

// Import theme stylesheet.and react-kode
import 'highlight.js/styles/solarized-dark.css';
import Kode from 'react-kode';

const html = `
<html>
  <div class="navbar">
    <a href="#">Go</a>
  </div>
</html>
`;

const App = () => (
  <div>
    <Kode
      lang="html"
      isEnableLineNumber={true}
    >
      {html}
    </Kode>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

## Installation

#### NPM

Install `react-kode`.

```bash
# Install dependencies.
$ npm i react highlight.js

# Install react-kode.
$ npm i  react-kode
```

#### CDN

```html
<!--
  highlight.js
  https://highlightjs.org/download/
-->
<link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js"></script>
<!--
  React
  https://reactjs.org/docs/cdn-links.html
 -->
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<!--
  react-kode
-->
<script crossorigin src="https://unpkg.com/react-kode@latest/dist/react-kode.js"></script>
```

## Properties

| Property           | Type   | Description                                                  |
| ------------------ | ------ | ------------------------------------------------------------ |
| lang               | string | Specify language of code.  e.g. html, javascript. To get language list reference [highlight.js docs](https://highlightjs.readthedocs.io/en/latest/index.html) or [github](https://github.com/highlightjs/highlight.js/tree/master/src/languages) |
| isEnableLineNumber | bool   | Set `true` to enable line number.                            |
| initialLineNumber  | number | Set initial number of line.                                  |
| diff               | object | Coming soon...                                               |

## Development

```bash
# Build
$ npm run build

# Dev
$ npm run storybook
```

## Contributors
