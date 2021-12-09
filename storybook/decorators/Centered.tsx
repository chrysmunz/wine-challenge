import React from 'react';
import styled from 'styled-components/native';

const StyledContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

const Centered: React.FC = storyFn => <StyledContainer>{storyFn()}</StyledContainer>;

export default Centered;
