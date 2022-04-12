// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
const newArray = arrays.reduce((acc, valor) => {
    return acc.concat((valor), []);
    

});

console.log(newArray);