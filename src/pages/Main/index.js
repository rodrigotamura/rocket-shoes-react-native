import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native-gesture-handler';
import api from '../../services/api';

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
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const resp = await api.get('/products');

    this.setState({
      products: resp.data,
    });
  };

  render() {
    const { products } = this.state;

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
        <FlatList horizontal data={products} renderItem={renderItem} />
      </Container>
    );
  }
}
