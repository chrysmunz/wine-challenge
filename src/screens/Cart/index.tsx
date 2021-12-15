import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components/native';

import { selectCart } from '../../store/Cart.store';
import { CartItem, Header } from '../../components';

const StyledContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.color.gray.background}
  `}
`;

const StyledProductList = styled.FlatList`
  ${({ theme }) => css`
    background-color: ${theme.color.gray.background}
  `}
`;

const StyledContainerTotal = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-vertical: 20px;
    padding-horizontal: 20px;
    border-top-width: 0.3px;
    border-top-color: ${theme.color.gray.tertiary}
  `}
`;

const StyledSubtotal = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.typography.weight.regular};
    font-size: ${theme.typography.size.h2};
    line-height: 24px;
    text-align: center;
    color: ${theme.color.black};
  `}
`;

const StyledText = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.typography.weight.bold};
    font-size: ${theme.typography.size.h2};
    line-height: 32px;
    text-align: center;
    color: ${theme.color.black};
  `}
`;

const Cart: React.FC = () => {
  const { productsCart, totalCart, countCart } = useSelector(selectCart);

  return (
    <>
      <Header status='cart' />
      <StyledContainer>
        <StyledProductList
          data={productsCart}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <CartItem product={item} />
          )}
        />
        <StyledContainerTotal>
          <StyledSubtotal>Subtotal</StyledSubtotal>
          <StyledText>R$ {totalCart.toFixed(2).replace('.', ',')}</StyledText>
        </StyledContainerTotal>
      </StyledContainer>
    </>
  );
};

export default Cart;
