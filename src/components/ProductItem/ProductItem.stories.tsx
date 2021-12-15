import React from 'react';
import { storiesOf } from '@storybook/react-native';

import ProductItem from './ProductItem';

const product = {
  id: 0,
  image: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png',
  name: 'Bacalhôa Quinta da Garrida Colheita Selecionada 2015',
  price: 175.9,
  discount: 45,
  priceMember: 96.9,
  priceNonMember: 114,
  type: 'Tinto',
  classification: 'Seco',
  size: '750 ml',
  rating: 4,
  avaliations: 292,
  country: 'Portugal',
  region: 'Dão',
  flag: 'https://img.wine.com.br/fenix/image/flags/rounded/portugal.svg',
  sommelierComment: 'Esse tinto traz em seu assemblage a Touriga Nacional, uma das uvas tintas portuguesas mais conhecidas no mundo do vinho. Nativa do Dão, região produtora desse vinho, essa variedade atinge a sua expressão máxima nesse terroir. O termo Colheita Selecionada estampado no rótulo, é uma referência a qualidade da safra 2015.'
};

storiesOf('Product Item', module).add('Default', () => <ProductItem product={product} />);
