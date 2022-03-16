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
function sectionLeftContent(){
    let main = document.querySelector('main');
    let section = document.createElement('section');
    section.className = 'left-content';
    main.appendChild(section);
}
sectionLeftContent();
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
function sectionRightContent(){
    let main = document.querySelector('main');
    let section = document.createElement('section');
    section.className = 'rigth-content';
    main.appendChild(section);
}
sectionRightContent();


// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
function newImage(){
    let leftContent = document.querySelector('.left-content');
    let image = document.createElement('img')
    image.className = 'small-image';
    image.src = 'https://picsum.photos/200'
    leftContent.appendChild(image);
}
newImage();

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
function newList(){
    let rigthContent = document.querySelector('.rigth-content');
    let ulList = document.createElement('ul')
    ulList.id = 'mainList';
    rigthContent.appendChild(ulList);

    for(let index = 1; index <= 10; index += 1){
        let ulListMain = document.querySelector('#mainList');
        let lists = document.createElement('li');
        ulListMain.appendChild(lists);
    }
}
newList();

// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

function addTagH3(){
    for (let index = 0; index < 3; index += 1){
        let main = document.querySelector('main');
        let tagH3 = document.createElement('h3');
            // Adicione a classe description nas 3 tags h3 criadas;
            tagH3.className = 'description';
        main.appendChild(tagH3);
    }
}
addTagH3();

// Adicione a classe title na tag h1 criada;
function addTitleH1(){
    h1.className = 'title';
}
addTitleH1();

// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild();

function removeSection(){
    let main = document.querySelector('main');
    let child = document.querySelector('.left-content');
    main.removeChild(child);
}
removeSection();

// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
function centerSection(){
   let section = document.querySelector('.rigth-content');
   section.style.margin = 'auto';
}
centerSection();

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
function changeColorGreen(){
    let dadElement = document.querySelector('.center-content').parentNode;
    dadElement.style.backgroundColor = 'green'
}
changeColorGreen();


// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

function removeLastChild(){
    for(let index = 0; index < 2; index += 1){
        let unList = document.querySelector('ul');
        let child = document.querySelector('ul').lastChild;
        unList.removeChild(child);
    }
}
removeLastChild();