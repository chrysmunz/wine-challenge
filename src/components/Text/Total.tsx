import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface TotalProps extends TextProps {
  loading: boolean;
  children: JSX.Element | string | number;
}

const StyledTotal = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.typography.weight.regular};
    font-size: ${theme.typography.size.h3};
    text-align: center;
    line-height: 24px;
    color: ${theme.color.gray.tertiary};
  `}
`;

const Name: React.ElementType<TotalProps> = ({ loading, children }: TotalProps) => (
  <StyledTotal>{loading ? 'Carregando produtos...' : `${children} produtos encontrados`}</StyledTotal>
);

export default Name;
