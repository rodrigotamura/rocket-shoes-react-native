import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, ButtonHome, Logo, CartContainer, Badge } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <ButtonHome onPress={() => navigation.navigate('Main')}>
        <Logo />
      </ButtonHome>

      <CartContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <Badge amount={2}>{cartSize}</Badge>
      </CartContainer>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
