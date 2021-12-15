import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled, { css } from 'styled-components/native';

import { add, remove, removeAll } from '../../store/Cart.store';

type Product = {
  name: string;
  total: number;
  image: string;
  price: number;
}

interface CartItemProps extends TouchableOpacityProps {
  product: Product;
}

const StyledContainer = styled.View`
  ${({ theme }) => css`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-vertical: 16px;
    padding-right: 10%;
    border-bottom-width: 0.3px;
    border-bottom-color: ${theme.color.gray.tertiary}
    `}
`;

const StyledProductDetails = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

const StyledImage = styled.Image`
  width: 70px;
  height: 102.5px;
`;

const StyledContainerName = styled.View`
  width: 80%;
`;

const StyledName = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.typography.weight.bold};
    font-size: ${theme.typography.size.h4};
    line-height: 17px;
    color: ${theme.color.gray.darker};
  `}
`;

const StyledPrice = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.typography.weight.bold};
    font-size: ${theme.typography.size.h2};
    line-height: 24px;
    text-align: center;
    color: ${theme.color.pink};
    margin-top: 10px;
  `}
`;

const StyledTotal = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.typography.weight.bold};
    font-size: ${theme.typography.size.h2};
    line-height: 24px;
    text-align: center;
    color: ${theme.color.black};
    margin-horizontal: 10px;
  `}
`;

const StyledContainerButton = styled.View`
  justify-content: space-between;
  algn-items: center;
  flex-direction: row;
  margin-top: 5px;
`;

const StyledContainerQuantity = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const StyledContainerItem = styled.View``;

const Button = styled.TouchableOpacity``;

const CartItem: React.ElementType<CartItemProps> = ({ product }: CartItemProps) => {
  const dispatch = useDispatch();

  return (
    <StyledContainer>
      <StyledImage source={{ uri: product.image }} />
      <StyledContainerItem>
        <StyledProductDetails>
          <StyledContainerName>
            <StyledName>{product.name}</StyledName>
          </StyledContainerName>
          <Button onPress={() => dispatch(removeAll(product))}>
            <Icon name='trash' size={20} />
          </Button>
        </StyledProductDetails>
        <StyledContainerButton>
          <StyledPrice>R$ {(product.price * product.total).toFixed(2).replace('.', ',')}</StyledPrice>
          <StyledContainerQuantity>
            <Button onPress={() => dispatch(remove(product))}>
              <Icon name='minus' size={24} />
            </Button>
            <StyledTotal>{product.total}</StyledTotal>
            <Button onPress={() => dispatch(add(product))}>
              <Icon name='plus' size={24} />
            </Button>
          </StyledContainerQuantity>
        </StyledContainerButton>
      </StyledContainerItem>
    </StyledContainer>
  );
};

export default CartItem;
