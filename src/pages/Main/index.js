import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native-gesture-handler';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';

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
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        priceFormatted: '$179.90',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        priceFormatted: '$179.90',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 3,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 219.9,
        priceFormatted: '$179.90',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
      {
        id: 5,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        priceFormatted: '$179.90',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 6,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 219.9,
        priceFormatted: '$179.90',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
      {
        id: 4,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        priceFormatted: '$179.90',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
    ],
  };

  componentDidMount() {
    // this.getProducts();
  }

  getProducts = async () => {
    const resp = await api.get('/products');

    const data = resp.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  };

  render() {
    const { products } = this.state;

    const renderItem = ({ item }) => (
      <ContainerProduct>
        <ProductImg
          source={{
            uri: item.image,
          }}
          alt={item.title}
          resizeMode="stretch"
        />
        <ProductTitle numberOfLines={2}>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
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
        <FlatList horizontal data={products} renderItem={renderItem} />
      </Container>
    );
  }
}
