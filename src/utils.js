import hljs from 'highlight.js';
/**
 * HTML Encode in browser.
 * @param {string} snippet
 */
export const encodeHTML = (snippet) => {
  const el = document.createElement('div');
  el.appendChild(document.createTextNode(snippet));
  return el.innerHTML;
};

/**
 * Using highlight.js covert code to html
 * @param {string} str
 * @param {string} lang
 */
export const highlight = (str, lang) => {
  let snippet = str.trim();
  const matching = snippet.trim().match(/(\r?\n)/);
  const separator = matching ? matching[1] : '';
  const lines = matching ? snippet.split(separator) : [snippet];
  let result = hljs.highlight(lang, lines.shift());
  let html = result.value;
  while (lines.length > 0) {
    result = hljs.highlight(lang, lines.shift(), false, result.top);
    html += separator + result.value;
  }

  result.value = html;
  return result;
}

/**
 * The string generate by highlight.js
 * @param {string} htmlString
 */
export const enableLineNumber = (htmlString) => {
  const lines = htmlString.split('\n');
  const innerHTML = lines.map((ln, i) => {
    return `<tr class="hljs-ln">
      <td><span class="hljs-num">${i + 1} </span></td>
      <td>${ln}</td>
    </tr>`;
  }).join('');
  return `<table>${innerHTML}</table>`;
}
