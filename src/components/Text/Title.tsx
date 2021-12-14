import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface TitleProps extends TextProps {
  children: JSX.Element | string;
}

const StyledContainer = styled.View`
  width: 327px;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

const StyledTitle = styled.Text`
  ${({ theme }) => css`
    width: 100%;
    font-weight: ${theme.typography.weight.bold};
    font-size: ${theme.typography.size.title};
    line-height: 24px;
    text-align: center;
    color: ${theme.color.black};
  `}
`;

const Title: React.ElementType<TitleProps> = ({ children }: TitleProps) => (
  <StyledContainer>
    <StyledTitle>{children}</StyledTitle>
  </StyledContainer>
);

export default Title;
