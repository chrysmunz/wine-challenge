import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

const StyledContainer = styled.View`
  width: 32px;
  margin-right: 8px;
`;

const StyledMember = styled.Text`
  ${({ theme }) => css`
    width: 100%;
    font-weight: ${theme.typography.weight.regular};
    font-size: ${theme.typography.size.price};
    line-height: 10px;
    align-items: center;
    text-align: center;
    color: ${theme.color.gray.darker};
  `}
`;

const Member: React.ElementType = () => (
  <StyledContainer>
    <StyledMember>SÓCIO WINE</StyledMember>
  </StyledContainer>
);

export default Member;
