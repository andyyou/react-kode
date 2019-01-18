# react-kode

A react component that integrates [highlight.js](https://highlightjs.org) with advance.

<p class="codepen" data-height="300" data-theme-id="8540" data-default-tab="result" data-user="andyyou" data-slug-hash="zyVvMV" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="react-kode">
  <span>See the Pen <a href="https://codepen.io/andyyou/pen/zyVvMV/">
  react-kode</a> by andyyou (<a href="https://codepen.io/andyyou">@andyyou</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

#### Features

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

#### NPM

Install `react-kode`.

```bash
# Install dependencies.
$ npm i react highlight.js

# Install react-kode.
$ npm i  react-kode
```

## Contributors

## Development

```bash
# Build
$ npm run build

# Dev
$ npm run storybook
```
