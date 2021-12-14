import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface TotalProps extends TextProps {
  loading: boolean;
  children: JSX.Element | string | number;
}

const StyledContainer = styled.View`
  width: 100%;
  margin-vertical: 24px;
`;

const StyledTotal = styled.Text`
  ${({ theme }) => css`
    width: 100%;
    font-weight: ${theme.typography.weight.regular};
    font-size: ${theme.typography.size.h3};
    line-height: 24px;
    color: ${theme.color.gray.tertiary};
  `}
`;

const Name: React.ElementType<TotalProps> = ({ loading, children }: TotalProps) => (
  <StyledContainer>
    <StyledTotal>{loading ? 'Carregando produtos...' : `${children} produtos encontrados`}</StyledTotal>
  </StyledContainer>
);

export default Name;
