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
let maior = Math.max(...numbers);
console.log("O maior número do meu Array é: " + maior);

//Verificar se há números impares no meu array e imprimir na tela quantos tem.
let impar = 0;
for (index4 = 0; index4 < numbers.length; index4 += 1){
    if(numbers[index4] % 2 == 0){
        impar++;
    }
}
console.log("O Array possui um total de " + impar + " numeros impar");

//Menor valor contido no meu Array
let menor = Math.min(...numbers);
console.log("O menor número do meu Array é: " + menor);

//Cria um Array que vá de 1 até 25
let newArray = [];
for (index6 = 1; index6 <= 25; index6 += 1){
    newArray.push(index6);
}
console.log(newArray);

//Imprimir na tela a divisao por 2 de cada valor do meu novo array.
let div2 = 0;
for(index7 = 0; index7 < newArray.length; index7 += 1){
    div2 = newArray[index7] / 2;
    console.log(div2.toFixed(2));
}