import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface DescriptionProps extends TextProps {
  children: JSX.Element | string;
}

const StyledContainer = styled.View`
  width: 327px;
  align-items: center;
`;

const StyledDescription = styled.Text`
  ${({ theme }) => css`
    width: 100%;
    font-weight: ${theme.typography.weight.bold};
    font-size: ${theme.typography.size.description};
    line-height: 24px;
    margin-top: 32px;
    color: ${theme.color.black};
  `}
`;

const Description: React.ElementType<DescriptionProps> = ({ children }: DescriptionProps) => (
  <StyledContainer>
    <StyledDescription>{children}</StyledDescription>
  </StyledContainer>
);

export default Description;
