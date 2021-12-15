import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface BodyProps extends TextProps {
  children: JSX.Element | string;
}

const StyledContainer = styled.View`
  width: 327px;
  align-items: center;
`;

const StyledBody = styled.Text`
  ${({ theme }) => css`
    width: 100%;
    font-weight: ${theme.typography.weight.regular};
    font-size: ${theme.typography.size.h3};
    line-height: 24px;
    margin-top: 8.61px;
    margin-bottom: 20px;
    color: ${theme.color.black};
  `}
`;

const Body: React.ElementType<BodyProps> = ({ children }: BodyProps) => (
  <StyledContainer>
    <StyledBody>{children}</StyledBody>
  </StyledContainer>
);

export default Body;
