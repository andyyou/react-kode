import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  highlight,
  enableLineNumber,
  embedInlineCSS,
} from './utils';
class Kode extends Component {
  constructor(props) {
    super(props);

    this.el = React.createRef();
    embedInlineCSS();
  }

  componentDidMount() {
    const {
      children,
      lang,
      isEnableLineNumber,
      initialLineNumber,
    } = this.props;

    const snippet = highlight(children, lang || 'plaintext').value;
    const innerHTML = isEnableLineNumber ? enableLineNumber(snippet, initialLineNumber) : snippet;
    this.el.current.innerHTML = innerHTML;
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
        <pre className="hljs-pre">
          <code
            className={`hljs ${lang}`}
            ref={this.el}
          />
        </pre>
      </div>
    );
  }
}
Kode.propTypes = {
  lang: PropTypes.string,
  isEnableLineNumber: PropTypes.bool,
  initialLineNumber: PropTypes.number,
  diff: PropTypes.shape({
    addition: PropTypes.shape({
      start: PropTypes.number,
      end: PropTypes.number,
    }),
    deletion: PropTypes.shape({
      start: PropTypes.number,
      end: PropTypes.number,
    }),
  }),
};
Kode.defaultProps = {
  lang: 'plaintext',
  isEnableLineNumber: false,
  initialLineNumber: 1,
  diff: null,
};
export default Kode;
