import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';

import 'highlight.js/styles/solarized-dark.css';
import Kode from '../src/kode';

const Title = styled.h4`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;
const Card = styled.div`
  border: 1px solid #ddd;
  padding: 8px;
  width: 600px;
  border-radius: 3px;
`

/**
 * Sample codes.
 */
const html = `
<html>
  <div class="navbar">
    <a href="#">Go</a>
  </div>
</html>
`;

const js = `
import React from 'react';

const App = () => (
  <div>
    Hello, React.
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
`;

/**
 * Stories
 */
storiesOf('Kode', module)
  .addDecorator(withKnobs)
  .add('HTML', () => (
    <div>
      <Title>Defualt</Title>
      <Card>
        <Kode lang="html">
          {html}
        </Kode>
      </Card>

      <Title>Line number</Title>
      <Card>
        <Kode
          lang="html"
          isEnableLineNumber={true}
        >
          {html}
        </Kode>
      </Card>

      <Title>Setup initial line number</Title>
      <Card>
        <Kode
          lang="html"
          isEnableLineNumber={true}
          initialLineNumber={5}
        >
          {html}
        </Kode>
      </Card>

    </div>
  ))
  .add('JavaScript', () => (
    <Kode lang="javascript">
      {js}
    </Kode>
  ));
