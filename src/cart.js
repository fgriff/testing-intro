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

function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
