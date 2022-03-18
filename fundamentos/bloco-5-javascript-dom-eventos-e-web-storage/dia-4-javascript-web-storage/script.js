//objeto dos Usuarios

let usuarios = [{
    nome: 'Igor',
    fontSize: '15px',
    colorText: 'white',
    fontFamily: 'Arial'
}, {
    nome: 'Julia',
    fontSize: '25px',
    colorText: 'black',
    fontFamily: 'tahoma'
}]

//criando botão de login usuario

function createButton(){
    let inputSection = document.getElementById('inputs');
    let button = document.createElement('button');
    button.innerText = 'Usuario';
    button.id = 'button';
    inputSection.appendChild(button);
}
createButton();


let buttonUsuario = document.getElementById('button');
buttonUsuario.addEventListener('click', getUser);

function getUser(){
    for(let index = 0; index < usuarios.length; index += 1){
        if(document.getElementById('input-text').value === usuarios[index].nome){
            let nome = usuarios[index].nome;
            let fontSize = usuarios[index].fontSize;
            let colorText = usuarios[index].colorText;
            let fontFamily = usuarios[index].fontFamily;
            checkPreference(nome, fontSize, colorText, fontFamily)
        } 
    }    
}

function checkPreference(nome, fontSize, colorText, fontFamily){
    localStorage.setItem('nome', nome);
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('colorText', colorText);
    localStorage.setItem('fontFamily', fontFamily);
    // execTheme();
}


// function execTheme(){
//     let fontSize = localStorage.getItem('fontSize');
//     fontSize(fontSize);
// }

// function fontSize(font){
//     let texts = document.getElementsByClassName('texts');
//     console.log(texts)
//     for(let index = 0; index < texts.length; index += 1){

//     }
// }
