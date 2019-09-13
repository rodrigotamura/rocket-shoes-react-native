import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, ButtonHome, Logo, CartContainer, Badge } from './styles';

export default function Header({ navigation }) {
  console.tron.log(navigation);

  return (
    <Container>
      <ButtonHome onPress={() => navigation.navigate('Main')}>
        <Logo />
      </ButtonHome>

      <CartContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <Badge amount={2}>2</Badge>
      </CartContainer>
    </Container>
  );
}
