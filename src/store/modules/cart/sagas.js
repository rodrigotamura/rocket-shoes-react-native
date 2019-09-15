import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';
import NavigationService from '../../../services/navigation';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from '../../../utils/format';

function* addToCartRequest({ id }) {
  // verify if product exists
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  // consulting api about stock
  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('I`m sorry: amount requested out of stock');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));

    NavigationService.navigate('Cart');
  }
}

function* updateAmountRequest({ id, amount }) {
  if (amount <= 0) return;

  // getting stock of this product
  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('I`m sorry: amount requested out of stock');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCartRequest),
  takeLatest(
    `@cart/UPDATE_AMOUNT_REQUEST`, // listening this action too
    updateAmountRequest
  ),
]);
