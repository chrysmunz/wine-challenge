import React from 'react';
import styled, { css } from 'styled-components/native';

import { Header } from '../../components';

const StyledContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.color.gray.background}
    padding-horizontal: 14px;
    padding-top: 32px;
  `}
`;

const Product: React.FC = () => {
  return (
    <>
      <Header status='back' total={3} />
      <StyledContainer>
      </StyledContainer>
    </>
  );
};

export default Product;
