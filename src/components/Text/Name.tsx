import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface NameProps extends TextProps {
  children: JSX.Element | string;
}

const StyledContainer = styled.View`
  width: 140px;
  align-items: center;
  justify-content: center;
`;

const StyledName = styled.Text`
  ${({ theme }) => css`
    width: 100%;
    font-weight: ${theme.typography.weight.bold};
    font-size: ${theme.typography.size.h4};
    line-height: 17px;
    text-align: center;
    color: ${theme.color.gray.darker};
  `}
`;

const Name: React.ElementType<NameProps> = ({ children }: NameProps) => (
  <StyledContainer>
    <StyledName>{children}</StyledName>
  </StyledContainer>
);

export default Name;
