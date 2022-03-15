// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
function createH1(){
    let corpo = document.querySelector('body');
    let filho = document.createElement('h1');
    filho.innerText = 'Exercício 5.2 - JavaScript DOM';
    filho.id = 'h1'
    corpo.appendChild(filho);
}
createH1();


// Adicione a tag main com a classe main-content como filho da tag body ;
function createMain(){
    let h1 = document.querySelector('#h1');
    let main = document.createElement('main');  
    main.className = 'main-content';
    h1.appendChild(main);
}
createMain();


// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
function createSection(){
    let main = document.querySelector('main');
    let section = document.createElement('section');
    section.className = 'center-content';
    main.appendChild(section);
}
createSection();

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
function createP(){
    let section = document.querySelector('section');
    let p = document.createElement('p');
    p.innerText = 'Continuando Atividade DOM'
    section.appendChild(p);
}
createP();

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.