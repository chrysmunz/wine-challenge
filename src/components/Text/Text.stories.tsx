import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import { Discount, Member, Name, Price } from '.';

storiesOf('Text', module)
  .add('Name', () => <Name>Toro Loco D.O.P. Utiel-Requena Tempranillo 2017</Name>)
  .add('Price', () => <Price>37,40</Price>)
  .add('Member price', () => <Price status='member'>37,40</Price>)
  .add('Non-member price', () => <Price status='no-member'>37,40</Price>)
  .add('Discount', () => <Discount>15</Discount>)
  .add('Member', () => <Member />);

