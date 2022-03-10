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

for (let key in info){
    console.log(key);
}

//fazer um novo objeto e imprimir na tela relacionado com o primeiro objeto da atv

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
}

info2['recorrente'] = 'sim';

console.log(info['personagem']);


