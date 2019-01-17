import React, { Component } from 'react';
import {
  highlight,
  enableLineNumber,
  initialize,
} from './utils';

class Kode extends Component {
  constructor(props) {
    super(props);

    this.el = React.createRef();
    initialize();
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
      className,
    } = this.props;
    const props = {
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
