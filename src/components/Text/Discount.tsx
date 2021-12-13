import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface DiscountProps extends TextProps {
  children: JSX.Element | string | number;
}

const StyledContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.color.orange}
    padding-horizontal: 8px;
    padding-vertical: 0.1px;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    margin-left: 4px;
  `}
`;

const StyledDiscount = styled.Text`
  ${({ theme }) => css`
    width: 100%;
    font-weight: ${theme.typography.weight.regular};
    font-size: ${theme.typography.size.h5};
    line-height: 16px;
    text-align: center;
    color: ${theme.color.white};
  `}
`;

const Discount: React.ElementType<DiscountProps> = ({ children }: DiscountProps) => (
  <StyledContainer>
    <StyledDiscount>{children}% OFF</StyledDiscount>
  </StyledContainer>
);

export default Discount;
