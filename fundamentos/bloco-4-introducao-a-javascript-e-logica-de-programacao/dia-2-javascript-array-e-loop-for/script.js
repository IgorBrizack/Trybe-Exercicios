let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Imprima todos os números do Array no console.
for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}

//Somar todos os valores do Array.
let soma = 0;
for(index2 = 0; index2 < numbers.length; index2 += 1){
    soma += numbers[index2];
}
console.log("A soma dos valores do meu Array são :" + soma);

//Imprimir média aritimética do meu Array. 
let mediaAritmetica = (soma/numbers.length);
console.log("Média Aritmética: " + mediaAritmetica);

//Verificar se a média aritmética é maior que 20.
if (mediaAritmetica > 20){
    console.log("Média Artmética maior que 20!");
} else {
    console.log("Média Artimética menor que 20!");
}

//Verificar maior valor do meu Array e imprimir na tela
let maior = 0;
for (index3 = 0; index3 < numbers.length; index3++){
    if(numbers[index3] > maior){
        maior = numbers[index3];
    }
}
console.log("O maior número do meu Array é: " + maior);

