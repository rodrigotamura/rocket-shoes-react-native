import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { FlatList } from 'react-native-gesture-handler';
import {
  Container,
  ContainerProduct,
  ProductImg,
  ProductTitle,
  ProductPrice,
  ButtonAdd,
  ProductAmount,
  ProductAmountText,
  ButtonAddText,
} from './styles';

export default class Main extends Component {
  state = {
    products: [
      {
        key: 0,
        title:
          'Seu story akmvl;asmdklmasdkl;mask;l m;klmfk;lmkmbbs bg  gfb fg bfg bdf gb df gb df gb df bg dfb df g',
      },
      { key: 1, title: 'imgus_' },
      { key: 2, title: 'imgus_' },
      { key: 3, title: 'imgus_' },
      { key: 4, title: 'imgus_' },
      { key: 5, title: 'imgus_' },
      { key: 6, title: 'imgus_' },
      { key: 7, title: 'imgus_' },
      { key: 8, title: 'imgus_' },
      { key: 9, title: 'imgus_' },
    ],
  };

  render() {
    const renderItem = ({ item }) => (
      <ContainerProduct>
        <ProductImg
          source={{
            uri:
              'https://rukminim1.flixcart.com/image/880/1056/jmwch3k0/shoe/j/y/n/dg-292-white-blue-patti-10-digitrendzz-white-original-imaf9p36fkykfjqt.jpeg?q=50',
          }}
          alt={item.title}
          resizeMode="stretch"
        />
        <ProductTitle numberOfLines={2}>{item.title}</ProductTitle>
        <ProductPrice>$40.90</ProductPrice>
        <ButtonAdd>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>0</ProductAmountText>
          </ProductAmount>
          <ButtonAddText>Add cart</ButtonAddText>
        </ButtonAdd>
      </ContainerProduct>
    );

    return (
      <Container>
        <FlatList
          horizontal
          data={this.state.products}
          renderItem={renderItem}
        />
      </Container>
    );
  }
}
