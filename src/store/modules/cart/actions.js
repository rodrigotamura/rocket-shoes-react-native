export function removeItem(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
