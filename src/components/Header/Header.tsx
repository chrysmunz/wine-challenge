import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { selectCart } from '../../store/Cart.store';
import logo from '../../assets/images/logo.png';
import cart from '../../assets/images/cart.png';

type Status = 'default' | 'back';
interface HeaderProps {
  status?: Status;
}

const StyledContainer = styled.View<HeaderProps>`
  ${({ theme, status }) => css`
    background-color: ${status === 'back' ? theme.color.gray.background : theme.color.white};
    width: 100%;
    height: 66px;
    padding: 24px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  `}
`;

const StyledLogo = styled.Image`
  width: 76.81px;
  height: 19.91px;
`;

const StyledIcon = styled.Image`
  width: 37.03px;
  height: 45.75px;
  border-radius: 10px;
  margin-top: 5px;
`;

const StyledButton = styled.TouchableOpacity``;

const StyledContainerCart = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.color.orange.light};
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 50px;
  `}
`;

const StyledTotalItems = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.color.white};
    width: 25px;
    height: 25px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    position: absolute;
    top: 32px;
    left: 32px;
    border-width: 2px;
    border-color: ${theme.color.gray.primary};
  `}
`;

const StyledTotal = styled.Text`
  ${({ theme }) => css`
    width: 100%;
    font-weight: ${theme.typography.weight.bold};
    font-size: ${theme.typography.size.h3};
    line-height: 16px;
    text-align: center;
    color: ${theme.color.green};
  `}
`;

const Header: React.ElementType<HeaderProps> = ({ status }: HeaderProps) => {
  const navigation = useNavigation();

  const { countCart } = useSelector(selectCart);

  return (
    <StyledContainer status={status}>
      {status === 'default' ? (
        <StyledLogo source={logo} />
      ) : (
        <StyledButton onPress={() => navigation.goBack()}>
          <Icon name='chevron-left' size={20} />
        </StyledButton>
      )}
      <StyledContainerCart>
        <StyledIcon source={cart} />
        <StyledTotalItems>
          <StyledTotal>{countCart}</StyledTotal>
          </StyledTotalItems>
      </StyledContainerCart>
    </StyledContainer>
  );
};

Header.defaultProps = {
  status: 'default'
};

export default Header;
