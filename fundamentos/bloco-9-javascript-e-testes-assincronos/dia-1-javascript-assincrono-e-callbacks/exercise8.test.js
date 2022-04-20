const getPokemonDetails = require('./exercise8');

describe('Verificar o comportamento da função getPokemonDetails', () => {
  it('Ao executar a função getPokemonDetails, verifica se o retorno é o esperado', (done) => {
    getPokemonDetails(
      (pokemon) => pokemon.name === 'Bulbasaur',
      (error, message) => {
        if (error) {
          console.log(error);
        } else {
          console.log(message);
        }
      }
    );
  })
});