const soma = (...numeros) => {
    return numeros.reduce((acc, valor) => acc + valor, 0);
}
console.log(soma(1, 2, 3));