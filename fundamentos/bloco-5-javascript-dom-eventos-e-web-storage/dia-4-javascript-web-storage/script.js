let usuarios = [{
    nome: 'Igor',
    fontSize: '25px',
    colorText: 'red',
    fontFamily: 'arial',
    backgroundColor: 'black'
}, {
    nome: 'Julia',
    fontSize: '30px',
    colorText: 'black',
    fontFamily: 'tahoma',
    backgroundColor: 'gray'
},  {
    nome: 'deafult',
    fontSize: '20px',
    colorText: 'black',
    fontFamily: 'arial',
    backgroundColor: 'white'
}];

function createButtonUser(){
    let inputSection = document.getElementById('inputs');
    let button = document.createElement('button');
    button.innerText = 'Usuario Theme';
    button.id = 'button';
    inputSection.appendChild(button);
}
createButtonUser();

function createButtonDefault(){
    let inputSection = document.getElementById('inputs');
    let button = document.createElement('button');
    button.innerText = 'Default Theme';
    button.id = 'buttonDefault';
    inputSection.appendChild(button);
}
createButtonDefault();

let buttonUsuario = document.getElementById('button');
buttonUsuario.addEventListener('click', getUser);

let buttonTheme = document.getElementById('buttonDefault');
buttonTheme.addEventListener('click', getUserDefault);

function getUserDefault(){
    let defaultUser = usuarios[2];
    let nome = defaultUser.nome;
    let fontSize = defaultUser.fontSize;
    let colorText = defaultUser.colorText;
    let fontFamily = defaultUser.fontFamily;
    let backgroundColor = defaultUser.backgroundColor;
    checkPreference(nome, fontSize, colorText, fontFamily, backgroundColor)
}

function getUser(){
    for(let index = 0; index < usuarios.length; index += 1){
        if(document.getElementById('input-text').value === usuarios[index].nome){
            let nome = usuarios[index].nome;
            let fontSize = usuarios[index].fontSize;
            let colorText = usuarios[index].colorText;
            let fontFamily = usuarios[index].fontFamily;
            let backgroundColor = usuarios[index].backgroundColor;
            checkPreference(nome, fontSize, colorText, fontFamily, backgroundColor)
        } 
    }    
}

function checkPreference(nome, fontSize, colorText, fontFamily, backgroundColor){
    localStorage.setItem('nome', nome);
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('colorText', colorText);
    localStorage.setItem('fontFamily', fontFamily);
    localStorage.setItem('backgroundColor', backgroundColor);
    execTheme();
}

function execTheme(){
    let fontSize = localStorage.getItem('fontSize');
    font(fontSize);
    let colorText = localStorage.getItem('colorText');
    color(colorText);
    let fontFamily = localStorage.getItem('fontFamily');
    fontStyle(fontFamily);
    let bckgColor = localStorage.getItem('backgroundColor');
    bckgColors(bckgColor);
}

function font(font){
    let texts = document.getElementsByClassName('texts');
    for(let index = 0; index < texts.length; index += 1){
        texts[index].style.fontSize = font;
    }
}

function color(colorText){
    let texts = document.getElementsByClassName('texts');
    for(let index = 0; index < texts.length; index += 1){
        texts[index].style.color = colorText;
    }
}

function fontStyle(fontFamily){
    let texts = document.getElementsByClassName('texts');
    for(let index = 0; index < texts.length; index += 1){
        texts[index].style.fontFamily = fontFamily;
    }
}

function bckgColors(bckgColor){
    let texts = document.getElementsByClassName('texts');
    for(let index = 0; index < texts.length; index += 1){
        texts[index].style.backgroundColor = bckgColor;
    }
}   

onload = execTheme();