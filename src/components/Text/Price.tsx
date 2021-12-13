import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

type Status = 'default' | 'member' | 'no-member';
interface PriceProps extends TextProps {
  status?: Status;
  children: JSX.Element | string | number;
}

const StyledPrice = styled.Text<PriceProps>`
  ${({ theme, status }) => css`
    font-weight: ${theme.typography.weight.bold};
    font-size: ${() => {
      if (status === 'default') {
        return theme.typography.size.price
      } else if (status === 'member') {
        return theme.typography.size.h3
      }

      return theme.typography.size.price
    }};
    line-height: 17px;
    align-items: center;
    text-align: center;
    text-decoration: ${status === 'default' ? 'line-through' : 'none'};
    color: ${() => {
      if (status === 'member') {
        return theme.color.pink;
      }

      return theme.color.gray.secondary;
    }};
  `}
`;

const Price: React.ElementType<PriceProps> = ({ children, status }: PriceProps) => (
  <StyledPrice status={status}>
    {status === 'no-member' ? `NÃO SÓCIO R$ ${children}` : `R$ ${children}`}
  </StyledPrice>
);

Price.defaultProps = {
  status: 'default'
};

export default Price;
