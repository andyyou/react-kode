import React, { Component } from 'react';
import styled from 'styled-components';
import { highlight, enableLineNumber } from './utils';
import 'highlight.js/styles/solarized-dark.css';

const Container = styled.div`
  ${({ isEnableLineNumber }) => isEnableLineNumber && `
    table {
      border-collapse: collapse;
      td:nth-child(2) {
        width: 100%;
      }
    }
    .hljs-ln {
      &:hover {
        background-color: black;
      }
    }
    .hljs-num {
      user-select: none;
    }
  `}
`;

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
    } = this.props;

    return (
      <Container isEnableLineNumber={isEnableLineNumber}>
        <pre>
          <code
            className={`hljs ${lang}`}
            ref={this.el}
          />
        </pre>
      </Container>
    );
  }
}

export default Kode;
