import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled, { css } from 'styled-components/native';

import { Product } from '../../@types';
import { Discount, Member, Name, Price } from '../Text';
import { Button } from '..';

interface ProductItemsProps extends TouchableOpacityProps {
  product: Product;
}

const StyledContainer = styled.View`
  width: 156px;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const StyledProduct = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.color.white};
    width: 100%;
    height: 348px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
  `}
`;

const StyledImage = styled.Image`
  width: 123.86px;
  height: 181.36px;
  margin-bottom: 11.68px;
`;

const StyledDiscountArea = styled.View`
  flex-direction: row;
  margin-top: 12px;
  justify-content: center;
  margin-bottom: 4.56px;
`;

const StyledMemberArea = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4.09px;
`;

const ProductItem: React.ElementType<ProductItemsProps> = ({ product }: ProductItemsProps) => {
  const navigation = useNavigation();

  return (
    <StyledContainer>
      <StyledProduct onPress={() => navigation.navigate('Product', { product })}>
        <StyledImage source={{ uri: product.image }} />
        <Name>{product.name}</Name>
        <StyledDiscountArea>
          <Price>{product.price.toFixed(2).replace('.', ',')}</Price>
          <Discount>{product.discount}</Discount>
        </StyledDiscountArea>
        <StyledMemberArea>
          <Member />
          <Price status='member'>{product.priceMember.toFixed(2).replace('.', ',')}</Price>
        </StyledMemberArea>
        <Price status='no-member'>{product.priceNonMember.toFixed(2).replace('.', ',')}</Price>
      </StyledProduct>
      <Button>Adicionar</Button>
    </StyledContainer>
  );
};

export default ProductItem;
