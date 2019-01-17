import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Kode from '../src/kode';

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
    <Kode lang="html">
      {html}
    </Kode>
  ))
  .add('JavaScript', () => (
    <Kode lang="javascript">
      {js}
    </Kode>
  ));
