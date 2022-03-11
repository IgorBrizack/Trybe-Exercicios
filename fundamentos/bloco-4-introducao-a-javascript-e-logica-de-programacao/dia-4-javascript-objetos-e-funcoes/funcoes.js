//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindrome(palavra){
    //vai transformar minha palavra em um array com o spli depois inverter e na sequencia trazer de volta para uma string.
    let word = palavra.split("").reverse().join("");

    //compara se são iguais
    if (word === palavra){
        return 'é palindromo';
    }
    return 'não é palindromo';

}
console.log(palindrome('arara'));



