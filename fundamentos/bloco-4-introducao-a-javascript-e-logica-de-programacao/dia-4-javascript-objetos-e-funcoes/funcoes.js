//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// function palindrome(palavra){
//     //vai transformar minha palavra em um array com o spli depois inverter e na sequencia trazer de volta para uma string.
//     let word = palavra.split("").reverse().join("");

//     //compara se são iguais
//     if (word === palavra){
//         return 'é palindromo';
//     }
//     return 'não é palindromo';

// }
// console.log(palindrome('arara'));

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let array = [2, 3, 6, 7, 10, 1];

//função retirada https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
//utilizada para identificar o maior valor do meu array
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

let maxValue = getMaxOfArray(array);

function indice(number1, myArray){
    let answer;
    let meuArray = myArray;
    for(index = 0; index < meuArray.length; index += 1){
        if(number1 === meuArray[index]){
            answer = index;
        }
    }
    return answer;
};





console.log(indice(maxValue, array));