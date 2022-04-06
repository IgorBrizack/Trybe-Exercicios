const myRemove = require('./myRemove');

describe('requisito 1 myRemove', () => {
    test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toBe([1, 2, 3, 4], 3);
      
    });
  });