function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (quantity < 1) {
    throw new RangeError('Количество товара не может быть меньше 1');
  }

  const cartClone = [...cart];

  const foundProduct = cartClone.find((item) => item.id === product.id);
  const updatedQuantity = (foundProduct?.quantity || 0) + quantity;

  if (updatedQuantity > product.stock) {
    throw new RangeError('Нельзя добавить товара больше, чем есть на складе');
  }

  if (foundProduct) {
    foundProduct.quantity = updatedQuantity;
  } else {
    cartClone.push({
      ...product,
      quantity,
    });
  }

  return cartClone;
}

function changeQuantity(cart, productId, quantity) {
  if (quantity < 1) {
    throw new RangeError('Количество товара не может быть меньше 1');
  }

  const foundProduct = cart.find((item) => item.id === productId);

  if (!foundProduct) {
    return cart;
  }

  if (quantity > foundProduct.stock) {
    throw new RangeError('Нельзя добавить товара больше, чем есть на складе');
  }

  return cart.map((product) =>
    product.id === productId
    ? { ...product, quantity }
    : product
  );
}

function removeFromCart(cart, productId) {
  return cart.filter((product) => product.id !== productId);
}

function calculateCartSubtotal(cart) {
  return cart.reduce(
    (price, product) => price + product.price * product.quantity,
    0
  );
}

function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
