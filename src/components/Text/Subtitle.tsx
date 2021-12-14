import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

import { Product } from '../../@types';

interface SubtitleProps extends TextProps {
  product: Product;
}

const StyledContainer = styled.View`
  width: 327px;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  flex-direction: row;
`;

const StyledSubtitle = styled.Text`
  ${({ theme }) => css`
    width: 100%;
    font-weight: ${theme.typography.weight.regular};
    font-size: ${theme.typography.size.h4};
    line-height: 24px;
    text-align: center;
    color: ${theme.color.black};
  `}
`;

const Subtitle: React.ElementType<SubtitleProps> = ({ product }: SubtitleProps) => (
  <StyledContainer>
    <StyledSubtitle>
      {product.country}  {product.type}  {product.classification}  {product.volume}
    </StyledSubtitle>
  </StyledContainer>
);

export default Subtitle;
