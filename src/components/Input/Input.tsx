import React from 'react';
import { TextInputProps } from 'react-native';
import styled, { css } from 'styled-components/native';

import image from '../../assets/images/search.png';

interface InputProps extends TextInputProps {
  placeholder: string;
}

const StyledContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.color.gray}
    width: 100%;
    height: 40px;
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
  `}
`;

const StyledInput = styled.TextInput`
  width: 100%;
  justify-content: center;
`;

const StyledIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-right: 18px;
`;

const Input: React.ElementType<InputProps> = ({
  value,
  placeholder,
  onChangeText,
  onSubmitEditing
}: InputProps) => {
  return (
    <StyledContainer>
      <StyledIcon source={image} />
      <StyledInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </StyledContainer>
  );
};

export default Input;
