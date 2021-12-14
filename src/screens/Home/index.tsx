import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { add, setCart } from '../../store/Cart.store';
import { getProducts, selectProducts } from '../../store/Products.store';
import { Header, Input, ProductItem } from '../../components';
import { Total } from '../../components/Text';

const StyledContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.color.gray.background}
    padding-horizontal: 14px;
    padding-top: 32px;
  `}
`;

const StyledProductList = styled.FlatList`
  ${({ theme }) => css`
    background-color: ${theme.color.gray.background}
  `}
`;

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const limit = 20;

  const { products, count, isFetching: isFetchingProducts } = useSelector(selectProducts);

  const loadProducts = () => {
    setLoading(true);

    dispatch(getProducts({ start: 1, limit, name: value }));

    setTimeout(() => setLoading(false), 3000);
  };

  const getCart = async () => {
    const cart = await AsyncStorage.getItem('@cart');

    if (cart) {
      dispatch(setCart(JSON.parse(cart)));
    }
  };

  useEffect(() => {
    loadProducts();
    getCart();
  }, []);

  const loadMoreProducts = () => {
    if (count >= products.length) {
      const start = products.length / limit + 1;

      dispatch(getProducts({ start, limit, name: value }));
    }
  };

  return (
    <>
      <Header />
      <StyledContainer>
        <Input
          value={value}
          placeholder='O que você está procurando?'
          onChangeText={text => setValue(text)}
          onSubmitEditing={() => loadProducts()}
        />
        <Total loading={products.length === 0}>{count}</Total>
        {products.length > 0 ?
          <>
            <StyledProductList
              numColumns={2}
              data={products}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              onEndReachedThreshold={0.1}
              onEndReached={() => loadMoreProducts()}
              refreshControl={
                <RefreshControl
                  refreshing={false}
                  onRefresh={() => loadProducts()}
                />
              }
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <ProductItem product={item} onPress={() => dispatch(add(item))} />
              )}
            />
            {!loading && isFetchingProducts ? <ActivityIndicator size='small' /> : null}
          </> : null
        }
      </StyledContainer>
    </>
  );
};

export default Home;
