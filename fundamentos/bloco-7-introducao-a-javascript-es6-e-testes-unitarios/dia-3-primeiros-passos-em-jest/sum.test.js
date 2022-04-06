const sum = require('./sum');

describe('requisito 1', () => {
  test('a soma entre 4 e 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('a soma entre 0 e 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('a soma entre 4 e 5 é 9', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});
