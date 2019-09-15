import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList } from 'react-native-gesture-handler';
import * as CartActions from '../../store/modules/cart/actions.js';

import {
  Container,
  ContainerCart,
  ProdImg,
  ContainerProd,
  ProdDetails,
  ProdTitle,
  ProdPrice,
  ProdControls,
  StockCtrl,
  ProductControlButton,
  ProductAmount,
  SubTotal,
  Separator,
  ContainerProdF1,
  MsgEmpty,
  ContainerTotal,
  Total,
  FinishBtn,
  FinishBtnText,
} from './styles';
import { formatPrice } from '../../utils/format.js';

function Cart({ cart, total, removeItem, updateAmountRequest }) {
  const increment = product => {
    updateAmountRequest(product.id, product.amount + 1);
  };

  const decrement = product => {
    updateAmountRequest(product.id, product.amount - 1);
  };

  const handleRemoveProduct = id => {
    removeItem(id);
  };

  const renderCartList = ({ item }) => (
    <>
      <ContainerProd>
        <ContainerProdF1>
          <ProdImg source={{ uri: item.image }} title={item.title} />
          <ProdDetails>
            <ProdTitle>{item.title}</ProdTitle>
            <ProdPrice>{item.priceFormatted}</ProdPrice>
          </ProdDetails>
          <ProductControlButton onPress={() => handleRemoveProduct(item.id)}>
            <Icon name="delete-forever" size={24} color="#7159c1" />
          </ProductControlButton>
        </ContainerProdF1>
        <ProdControls>
          <StockCtrl>
            <ProductControlButton onPress={() => decrement(item)}>
              <Icon name="remove-circle-outline" size={20} color="#7159c1" />
            </ProductControlButton>
            <ProductAmount value={String(item.amount)} />
            <ProductControlButton onPress={() => increment(item)}>
              <Icon name="add-circle-outline" size={20} color="#7159c1" />
            </ProductControlButton>
          </StockCtrl>

          <SubTotal>{item.subtotal}</SubTotal>
        </ProdControls>
      </ContainerProd>
      <Separator />
    </>
  );

  return (
    <>
      <ContainerTotal>
        <Total>Total: {total}</Total>
        <FinishBtn>
          <FinishBtnText>
            Finish order <Icon name="check" color="#FFF" size={15} />
          </FinishBtnText>
        </FinishBtn>
      </ContainerTotal>
      <Container>
        <ContainerCart>
          {cart.length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={cart}
              renderItem={renderCartList}
              keyExtractor={item => item.id}
            />
          ) : (
            <MsgEmpty>Your cart is empty.</MsgEmpty>
          )}
        </ContainerCart>
      </Container>
    </>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  cart: state.cart.map(prod => ({
    ...prod,
    subtotal: formatPrice(prod.price * prod.amount),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
