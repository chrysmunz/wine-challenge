import React, { useEffect } from 'react';
import styled, { css } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import { RefreshControl } from 'react-native';

import { getProducts, selectProducts } from '../../store/Products.store';
import { Input, ProductItem } from '../../components';
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

  const { products, count, isFetching: isFetchingProducts } = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts({}));
  }, []);

  return (
    <StyledContainer>
      <Input placeholder='O que você está procurando?' />
      <Total>{count}</Total>
      <StyledProductList
        numColumns={2}
        data={products}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        refreshControl={
          <RefreshControl
            refreshing={isFetchingProducts}
            onRefresh={() => dispatch(getProducts({}))}
          />
        }
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <ProductItem product={item} />
        )}
      />
    </StyledContainer>
  );
};

export default Home;
