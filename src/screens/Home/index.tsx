import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { add, setCart } from '../../store/Cart.store';
import { getProducts, selectProducts } from '../../store/Products.store';
import { Button, Header, Input, ProductItem } from '../../components';
import { Total } from '../../components/Text';
import image from '../../assets/images/filtro.png';

const StyledContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.color.gray.background}
    padding-horizontal: 14px;
    padding-top: 32px;
  `}
`;

const StyledProductList = styled.FlatList`
  ${({ theme }) => css`
    background-color: ${theme.color.gray.background}
  `}
`;

const StyledButtonFilter = styled.TouchableOpacity`
  align-items: center;
`;

const StyledImage = styled.Image`
  width: 23px;
  height: 23px;
`;

const StyledHeaderList = styled.View`
  flex-direction: row;
  margin-vertical: 24px;
  align-items: center;
  justify-content: space-between;
`;

const StyledContainerFilter = styled.View`
  align-items: center;
  justify-contente: center;
`;

const StyledContainerButton = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

const StyledRange = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.typography.weight.regular};
    font-size: ${theme.typography.size.h3};
    text-align: center;
    line-height: 24px;
    color: ${theme.color.gray.tertiary};
    margin-right: 10%;
  `}
`;

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState([1, 400]);
  const [showRange, onShowRange] = useState(false);
  const windowWidth = Dimensions.get('window').width - 100;
  const limit = 20;

  const { products, count, isFetching: isFetchingProducts } = useSelector(selectProducts);

  const loadProducts = () => {
    dispatch(getProducts({ start: 1, limit, name: value, range: `${range[0]}-${range[1]}` }));
    setLoading(false);
  };

  const getCart = async () => {
    const cart = await AsyncStorage.getItem('@cart');

    if (cart) {
      dispatch(setCart(JSON.parse(cart)));
    }
  };

  useEffect(() => {
    loadProducts();
    getCart();
  }, []);

  const loadMoreProducts = () => {
    if (count >= products.length) {
      const start = products.length / limit + 1;

      dispatch(getProducts({ start, limit, name: value, range: `${range[0]}-${range[1]}` }));
    }
  };

  return (
    <>
      <Header />
      <StyledContainer>
        <Input
          value={value}
          placeholder='O que você está procurando?'
          onChangeText={text => setValue(text)}
          onSubmitEditing={() => loadProducts()}
        />
        <StyledHeaderList>
          <Total loading={isFetchingProducts}>{count}</Total>
          <StyledButtonFilter onPress={() => onShowRange(!showRange)}>
            <StyledImage source={image} />
          </StyledButtonFilter>
        </StyledHeaderList>
        {showRange ?
          <StyledContainerFilter>
            <StyledRange>
              R$ {range[0].toFixed(2).replace('.', ',')} - R$ {range[1].toFixed(2).replace('.', ',')}
            </StyledRange>
            <MultiSlider
              markerStyle={{
                height: 20,
                width: 20,
                borderRadius: 50,
                backgroundColor: '#FFFFFF',
                borderWidth: 3,
                borderColor: '#203E8A'
              }}
              pressedMarkerStyle={{
                height: 20,
                width: 20,
                borderRadius: 20,
                backgroundColor: '##203E8A'
              }}
              selectedStyle={{
                backgroundColor: '#023E8A',
              }}
              trackStyle={{
                backgroundColor: '#CECECE',
              }}
              touchDimensions={{
                height: 40,
                width: 40,
                borderRadius: 20,
                slipDisplacement: 40,
              }}
              values={range}
              onValuesChange={values => setRange(values)}
              sliderLength={windowWidth}
              min={1}
              max={400}
              allowOverlap={true}
              minMarkerOverlapDistance={10}
            />
            <StyledContainerButton>
              <Button onPress={() => {
                loadProducts();
                onShowRange(false);
              }}>
                Filtrar
              </Button>
            </StyledContainerButton>
          </StyledContainerFilter> : null
        }
        {!isFetchingProducts || !loading ?
          <>
            <StyledProductList
              numColumns={2}
              data={products}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              onEndReachedThreshold={0.1}
              onEndReached={() => loadMoreProducts()}
              refreshControl={
                <RefreshControl
                  refreshing={false}
                  onRefresh={() => loadProducts()}
                />
              }
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <ProductItem product={item} onPress={() => dispatch(add(item))} />
              )}
            />
          </> : null
        }
      </StyledContainer>
    </>
  );
};

export default Home;
