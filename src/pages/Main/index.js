import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';

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
  LoadingProducts,
} from './styles';

class Main extends Component {
  state = {
    products: [],
    loading: false,
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    this.setState({ loading: true });
    const resp = await api.get('/products');

    const data = resp.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
      loading: false,
    });
  };

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products, loading } = this.state;
    const { amount } = this.props;

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
        <ButtonAdd onPress={() => this.handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </ProductAmount>
          <ButtonAddText>Add cart</ButtonAddText>
        </ButtonAdd>
      </ContainerProduct>
    );

    return (
      <Container>
        {loading ? (
          <LoadingProducts>
            <ActivityIndicator color="#FFF" size={50} />
          </LoadingProducts>
        ) : (
          <FlatList horizontal data={products} renderItem={renderItem} />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
