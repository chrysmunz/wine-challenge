import React from 'react';
import { useRoute } from '@react-navigation/native';
import styled, { css } from 'styled-components/native';

import { Button, Header } from '../../components';
import { Body, Description, Discount, Price, Subtitle, Title } from '../../components/Text';

const StyledContainer = styled.ScrollView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.color.gray.background}
    margin-bottom: 80px;
  `}
`;

const StyledProductDetails = styled.View`
  justify-content: center;
  align-items: center;
  padding-horizontal: 14px;
`;

const StyledContainerSubtitle = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StyledImage = styled.Image`
  width: 180px;
  height: 275px;
`;

const StyledFooter = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.color.white};
    width: 100%;
    height: 65px;
    align-items: center;
    justify-content: space-between
    padding-horizontal: 16px;
    flex-direction: row;
    border-width: 2px;
    border-color: ${theme.color.gray.primary};
    position: absolute;
    bottom: 0px;
    left: 0px;
  `}
`;

const StyledPrices = styled.View`
  margin-top: -20px;
`;

const StyledContainerDiscount = styled.View`
  margin-left: -4px;
`;

const StyledContainerButton = styled.View`
  width: 180px;
`;

const Product: React.FC = () => {
  const routes = useRoute();
  const { product } = routes.params;

  return (
    <>
      <Header status='back' total={3} />
      <StyledContainer>
        <StyledProductDetails>
          <StyledImage source={{ uri: product.image }} />
          <Title>{product.name}</Title>
          <StyledContainerSubtitle>
            <Subtitle product={product} />
          </StyledContainerSubtitle>
          <Description>Descrição</Description>
          <Body>{product.sommelierComment}</Body>
        </StyledProductDetails>
      </StyledContainer>
      <StyledFooter>
        <StyledPrices>
          <StyledContainerDiscount>
            <Discount>{product.discount}</Discount>
          </StyledContainerDiscount>
          <Price>{product.price.toFixed(2).replace('.', ',')}</Price>
          <Price status='member'>{product.priceMember.toFixed(2).replace('.', ',')}</Price>
          <Price status='no-member'>{product.priceNonMember.toFixed(2).replace('.', ',')}</Price>
        </StyledPrices>
        <StyledContainerButton>
          <Button>Adicionar</Button>
        </StyledContainerButton>
      </StyledFooter>
    </>
  );
};

export default Product;
