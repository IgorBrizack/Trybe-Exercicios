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

if (ladoA < 0){
    console.log('O ângulo A é inválido');
} else if (ladoB < 0){
    console.log('O ângulo B é inválido');
} else if (ladoC < 0){
    console.log('O ângulo C é inválido');
} else if((ladoA + ladoB + ladoC) != 180){
    console.log('Não é um triângulo!!');
} else {
    console.log('É um triângulo!')
}

// Movimentos das peças de Xadrez

let pecaXadrez = "peão";

let peca = pecaXadrez.toLowerCase();

switch (peca) {
    case "cavalo":
        console.log('Se move em L.');
        break;
    case "bispo":
        console.log('Se move na Diagonal.');
        break;
    case "torre":
        console.log('Se move na direção Reta.');
        break;
    case "rainha":
        console.log('Se move na diagonal e em retas, até o fim do tabuleiro.');
        break;
    case "rei":
        console.log('Se move na diagonal e em retas, mas só pode andar uma casa de cada vez.');
        break;
    case "peão":
        console.log('Só se move em linhas retas e toma a peça adversária na diagonal.');
        break;
    default:
        console.log('A peça informada é inválida.');
}

// Conversor de notas

let nota = 0;

if (nota >= 90 && nota <= 100) {
    console.log("Nota A");
} else if (nota >= 80 && nota <= 89){
    console.log("Nota B");
} else if (nota >= 70 && nota <= 79){
    console.log("Nota C");
} else if (nota >= 60 && nota <= 69){
    console.log("Nota D");
} else if (nota > 100 || nota < 0){
    console.log("Nota inválida");
} else {
    console.log("Nota F")
}

// verificar se pelo menos um dos números é par

const val1 = 1;
const val2 = 2;
const val3 = 3;
let result;

if((val1 % 2 == 0) || (val2 % 2 == 0) || (val3 % 2 == 0)){
    result = true;
    console.log(result);
} else {
    result = false;
    console.log(result);
}

// verificar se pelo menos um dos números é ímpar

const val4 = 1;
const val5 = 2;
const val6 = 3;
let resultImpar;

if((val4 % 2 != 0) || (val5 % 2 != 0) || (val6 % 2 != 0)){
    resultImpar = true;
    console.log(resultImpar);
} else {
    resultImpar = false;
    console.log(resultImpar);
}

// Calculadora de lucro

let valorProduto = 20;
let imposto = 1.2
let valorCustoTotal = valorProduto * imposto;
let valorVenda = 35;
let lucro = valorVenda - valorCustoTotal;

if(valorProduto <= 0 || valorVenda <= 0){
    console.log("Valores de entrada Inválidos!");
} else {
    let vendaMilProdutos = lucro * 1000;
    console.log(vendaMilProdutos);
}

// Calculadora desconto de salário

const salarioBruto = 3000.00;
let salarioAliquotaInss;
let salarioImpostoDeRenda;
console.log("Salário Bruto de " + salarioBruto);

//INSS
if (salarioBruto < 1556.94){
    salarioAliquotaInss = salarioBruto - (salarioBruto * 0.08);
    console.log("Alíquota de 8%");
    console.log("Salário com Aliquota INSS R$" + salarioAliquotaInss.toFixed(2));
} else if (salarioBruto >= 1566.94 && salarioBruto < 2594.92){
    salarioAliquotaInss = salarioBruto - (salarioBruto * 0.09);
    console.log("Alíquota de 9%");
    console.log("Salário com Aliquota INSS R$" + salarioAliquotaInss.toFixed(2));
} else if (salarioBruto >= 2594.93 && salarioBruto < 5189.92){
    salarioAliquotaInss = salarioBruto - (salarioBruto * 0.11);
    console.log("Alíquota de 11%");
    console.log("Salário com Aliquota INSS R$" + salarioAliquotaInss.toFixed(2));
} else if (salarioBruto >= 5289.93){
    salarioAliquotaInss = salarioBruto - 570.88;
    console.log("Alíquota máxima de R$570,88");
    console.log("Salário com Aliquota INSS R$" + salarioAliquotaInss.toFixed(2));
}


//Imposto de Renda - já vem deduzido o INSS

if (salarioAliquotaInss < 1903.98){
    console.log('Isento de Imposto de Renda');        
} else if (salarioAliquotaInss >= 1903.99 && salarioAliquotaInss < 2826.65){
    salarioImpostoDeRenda = salarioAliquotaInss - ((salarioAliquotaInss * 0.075) - 142.80);
    console.log("Salário Liquido com desconto IR R$" + salarioImpostoDeRenda.toFixed(2));
} else if (salarioAliquotaInss >= 2826.66 && salarioAliquotaInss < 3751.05){
    salarioImpostoDeRenda = salarioAliquotaInss - ((salarioAliquotaInss * 0.15) - 354.80);
    console.log("Salário Liquido com desconto IR R$" + salarioImpostoDeRenda.toFixed(2));
} else if (salarioAliquotaInss >= 3751.06 && salarioAliquotaInss < 4664.68){
    salarioImpostoDeRenda = salarioAliquotaInss - ((salarioAliquotaInss * 0.225) - 636.13);
    console.log("Salário Liquido com desconto IR R$" + salarioImpostoDeRenda.toFixed(2)); 
} else if (salarioAliquotaInss > 4664.68 ){
    salarioImpostoDeRenda = salarioAliquotaInss - ((salarioAliquotaInss * 0.275) - 869.36);
    console.log("Salário Liquido com desconto IR R$" +  salarioImpostoDeRenda.toFixed(2)); 
}




