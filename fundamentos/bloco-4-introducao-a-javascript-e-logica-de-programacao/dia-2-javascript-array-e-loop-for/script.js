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
