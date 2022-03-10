// Imprimir nome na tela

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda ' + info.personagem);

//Adicionar nova chace com dado = 'sim'
info['recorrente'] = 'sim';

console.log(info);

//Fazer um for in que mostre todas as chaves do objeto info
a
for (let key in info){
    console.log(key);
}


