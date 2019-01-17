import React, { Component } from 'react';
import { highlight, enableLineNumber } from './utils';
import 'highlight.js/styles/solarized-dark.css';

class Kode extends Component {
  constructor(props) {
    super(props);

    this.el = React.createRef();
  }

  componentDidMount() {
    const {
      children,
      lang,
      isEnableLineNumber,
    } = this.props;
    const snippet = highlight(children, lang || 'plaintext').value;
    this.el.current.innerHTML = isEnableLineNumber ? enableLineNumber(snippet) : snippet;
  }

  render() {
    const {
      lang,
      isEnableLineNumber,
      className,
    } = this.props;
    const props = {
      isEnableLineNumber,
      className,
    };
    return (
      <div {...props}>
        <pre>
          <code
            className={`hljs ${lang}`}
            ref={this.el}
          />
        </pre>
      </div>
    );
  }
}

export default Kode;
