let a = 2;
let b = 3;

let soma = a + b;
console.log (soma);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a*b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo);

// Comparação maior número entre duas constantes

const x = 10;
const y = 11;

if (x > y){
    console.log(x);
} else {
    console.log(y);
}

// Comparação maior número entre três constantes

const j = 20;
const k = 25;
const l = 30;

if (j > k && j > l){
    console.log("j é o maior");
} else if (k > j && k > l){
    console.log("k é o maior")
} else {
    console.log("l é o maior")
}

// Retone positivo ou negativo e 0 caso não seja nenhuma das duas condições

const o = 0;

if(o >= 1){
    console.log('positivo')
} else if (o < 0){
    console.log('negativo')
} else {
    console.log('Zero');
}

// Lados de um triângulo

let ladoA = 60;
let ladoB = 60;
let ladoC = 60;

if((ladoA + ladoB + ladoC) != 180){
    console.log('Não é um triângulo!!');
} else {
    console.log('É um triângulo!');
}
