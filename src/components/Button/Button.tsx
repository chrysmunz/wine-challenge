import React from 'react';
import {  TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
  children: JSX.Element | string;
}

const StyledButton = styled.TouchableOpacity<ButtonProps>`
  ${({ theme }) => css`
    background-color: ${theme.color.green}
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  `}
`;

const StyledText = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.typography.weight.bold};
    font-size: ${theme.typography.size.h3};
    line-height: 16px;
    color: ${theme.color.white}
  `}
`;

const Button: React.ElementType<ButtonProps> = ({ children, onPress }: ButtonProps) => {
  return (
    <StyledButton onPress={onPress}>
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
};

export default Button;
