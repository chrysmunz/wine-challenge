import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts, selectProducts } from '../../store/Products.store';

const StyledContainer = styled.View`
  flex: 1;
`;

const StyledText = styled.Text`
  width: 100%;
  text-align: center;
`;

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const { products, count, isFetching: isFetchingProducts } = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts({}));
  }, []);

  return (
    <StyledContainer>
      <StyledText>Home</StyledText>
    </StyledContainer>
  );
};

export default Home;
