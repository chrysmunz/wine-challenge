import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Input from './Input';

storiesOf('Input', module).add('Search', () => <Input placeholder='O que você está procurando?' />);
