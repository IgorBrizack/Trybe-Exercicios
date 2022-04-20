const uppercase = require('./exercise7');

describe('Verificar se a função uppercase tem o retorno esperado', () => {
  it('Ao executar a função retorna a String passada em Uppercase', (done) => {
    uppercase('test', (str) => {
      try {
        expect(str).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    })
  })
});