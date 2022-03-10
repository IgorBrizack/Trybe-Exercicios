// // Imprimir nome na tela

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log('Bem-vinda ' + info.personagem);

// //Adicionar nova chace com dado = 'sim'
// info['recorrente'] = 'sim';

// console.log(info);

// //Fazer um for in que mostre todas as chaves do objeto info

// for (let key in info){
//     console.log(key);
// }

// //fazer um novo objeto e imprimir na tela relacionado com o primeiro objeto da atv

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
// }

// info2['recorrente'] = 'sim';

// console.log(info['personagem'] + ' e ' + info2['personagem']);
// console.log(info['origem'] + ' e ' + info2['origem']);
// console.log(info['nota'] + ' e ' + info2['nota']);
// console.log(info['recorrente']);


// Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

leitor['fullName'] = leitor.nome + ' ' + leitor.sobrenome;

console.log('O livro favorito ' + leitor.fullName + ' se chama o ' + leitor.livrosFavoritos[0].titulo);

//Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:

leitor.livrosFavoritos[0] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
};

console.log(leitor);
