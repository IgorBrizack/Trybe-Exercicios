//Fatorial de 10
 let numero = 10;
 let fatorial = numero;
 

 for(let index = 1; index < (numero - 1); index += 1){
    fatorial = fatorial * (numero - index);
    console.log(fatorial)
} 

//Algoritimo de inverter as palavras
let word = "Tryber";
let reverse = word.split("").reverse().join("");
console.log(reverse);

//verificar qual é a maior e a menor palavra e retonar as duas.
let array = ['java', 'javascript', 'python', 'html', 'css'];
