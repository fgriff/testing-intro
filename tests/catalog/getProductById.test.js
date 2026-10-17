const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {
  test('ID 1 возвращает products[0]', () => {
    const foundProduct = getProductById(products, 1);
    expect(foundProduct).toEqual(products[0]);
  });

  test('ID 4 возвращает products[3]', () => {
    const foundProduct = getProductById(products, 4);
    expect(foundProduct).toEqual(products[3]);
  });

  test('ID 6 возвращает products[5]', () => {
    const foundProduct = getProductById(products, 6);
    expect(foundProduct).toEqual(products[5]);
  });

  test('ID 0 возвращает null', () => {
    const foundProduct = getProductById(products, 0);
    expect(foundProduct).toBeNull();
  });

  test('ID 999 возвращает null', () => {
    const foundProduct = getProductById(products, 999);
    expect(foundProduct).toBeNull();
  });

  test('ID -1 возвращает null', () => {
    const foundProduct = getProductById(products, -1);
    expect(foundProduct).toBeNull();
  });

  test("строковый ID '1' возвращает null", () => {
    const foundProduct = getProductById(products, '1');
    expect(foundProduct).toBeNull();
  });

  test('ID undefined возвращает null', () => {
    const foundProduct = getProductById(products, undefined);
    expect(foundProduct).toBeNull();
  });

  test('ID NaN возвращает null', () => {
    const foundProduct = getProductById(products, NaN);
    expect(foundProduct).toBeNull();
  });
});
