const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const searchedProducts = searchProducts(products, 'Наушники');
    const searchedProductIds = searchedProducts.map((product) => product.id);
    expect(searchedProductIds).toEqual([1]);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const searchedProducts = searchProducts(products, 'Чистый код');
    const searchedProductIds = searchedProducts.map((product) => product.id);
    expect(searchedProductIds).toEqual([6]);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const searchedProducts = searchProducts(products, 'Настольная лампа');
    const searchedProductIds = searchedProducts.map((product) => product.id);
    expect(searchedProductIds).toEqual([4]);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const searchedProducts = searchProducts(products, 'javascript');
    const searchedProductIds = searchedProducts.map((product) => product.id);
    expect(searchedProductIds).toEqual([3]);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const searchedProducts = searchProducts(products, 'ЧЕХОЛ');
    const searchedProductIds = searchedProducts.map((product) => product.id);
    expect(searchedProductIds).toEqual([5]);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const searchedProducts = searchProducts(products, 'наушники');
    const searchedProductIds = searchedProducts.map((product) => product.id);
    expect(searchedProductIds).toEqual([1]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const searchedProducts = searchProducts(products, '');
    const searchedProductIds = searchedProducts.map((product) => product.id);
    expect(searchedProductIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const searchedProducts = searchProducts(products, '   ');
    const searchedProductIds = searchedProducts.map((product) => product.id);
    expect(searchedProductIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const searchedProducts = searchProducts(products, '\t\n');
    const searchedProductIds = searchedProducts.map((product) => product.id);
    expect(searchedProductIds).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
