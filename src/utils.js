/**
 * HTML Encode in browser.
 * @param {string} snippet
 */
export const HtmlEncode = (snippet) => {
  const el = document.createElement('div');
  el.appendChild(document.createTextNode(snippet));
  return el.innerHTML;
};
