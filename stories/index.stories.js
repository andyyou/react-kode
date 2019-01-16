import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs';
import Kode from '../src/kode';

console.log(Kode);

storiesOf('Kode', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Kode />
  ));
