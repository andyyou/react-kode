import React, { Component } from 'react';
import hljs from 'highlight.js/lib';
import 'highlight.js/styles/solarized-dark.css';
import { HtmlEncode } from './utils';
class Kode extends Component {
  constructor(props) {
    super(props);
    this.el = React.createRef();
  }

  componentDidMount() {
    const blocks = Array.from(this.el.current.querySelectorAll('pre code'));
    blocks.forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  render() {
    const {
      lang,
      children,
    } = this.props;
    let snippet = children;
    if (lang === 'html') {
      snippet = (
        <div dangerouslySetInnerHTML={{__html: HtmlEncode(snippet)}} />
      );
    }

    return (
      <div ref={this.el}>
        <pre>
          <code className={lang}>
            {snippet}
          </code>
        </pre>
      </div>
    );
  }
}

export default Kode;
