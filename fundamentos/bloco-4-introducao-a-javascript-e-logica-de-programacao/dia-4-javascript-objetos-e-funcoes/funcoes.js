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

// let array = [2, 3, 6, 7, 10, 1];

// //função retirada https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// //utilizada para identificar o maior valor do meu array
// function getMaxOfArray(numArray) {
//     return Math.max.apply(null, numArray);
// }

// let maxValue = getMaxOfArray(array);

// function indice(number1, myArray){
//     let answer;
//     let meuArray = myArray;
//     for(index = 0; index < meuArray.length; index += 1){
//         if(number1 === meuArray[index]){
//             answer = index;
//         }
//     }
//     return answer;
// };

// console.log(indice(maxValue, array));

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// let array = [2, 3, 6, 7, 10, 1];

// function getMinOfArray(numArray) {  
//     return Math.min.apply(null, numArray);
//  }

//  let minValue = getMinOfArray(array);


//  function indice(number1, myArray){
//     let answer;
//     let meuArray = myArray;
//     for(index = 0; index < meuArray.length; index += 1){
//         if(number1 === meuArray[index]){
//             answer = index;
//         }
//     }
//     return answer;
// };

// console.log(indice(minValue, array));

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let array =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

//carregar o tamanho das minhas string em uma nova aray;
function stringSize(arrayValue){
    let array = arrayValue;
    let size = [];
    for (let index = 0; index < array.length; index += 1){
        let aux = array[index];
        let cont = 0;
        for(let index2 = 0; index2 < aux.length;index2 += 1){
            cont += 1;
        }
        size.push(cont);
    }
    return size
}

let arraySize = (stringSize(array));

//Agora eu vou pegar o maior valor do meu novo array utilizando a função da questão anteriror.
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

//Agora que eu sei o maior valor do meu Array eu vou passar ele para uma nova variavel, para fazer a comparação e ver qual a minha maior string.
let position = getMaxOfArray(arraySize)

//Agora função para comparar os valores e ver em qual posição o valor Max bate com o da minha arraySize e retornar o nome.
function wordSize(arraySize,position){
    for(let index = 0; index < arraySize.length;index += 1){
        if (position === arraySize[index]){
            return array[index];
        }
    }
}

console.log(wordSize(arraySize,position));




    
