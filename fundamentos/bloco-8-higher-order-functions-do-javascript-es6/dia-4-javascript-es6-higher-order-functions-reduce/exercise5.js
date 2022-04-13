const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  // Adicione o código do exercício aqui:
//   5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const maiuscMinusc = names.reduce((acc, name) => {
  return acc + name.split('').reduce((acumulador, current) => {
    if (current === 'a' || current === 'A') return acumulador + 1;
    return acumulador;
  },0)
},0);

console.log(maiuscMinusc);