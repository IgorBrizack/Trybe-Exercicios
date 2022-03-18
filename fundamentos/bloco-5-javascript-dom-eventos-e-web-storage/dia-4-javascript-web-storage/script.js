//objeto dos Usuarios

let usuarios = [{
    nome: 'Igor',
    tema: 'darkMode',
    fontSize: '15px',
    colorText: 'white',
    fontFamily: 'Arial'
}, {
    nome: 'Julia',
    tema: 'lightMode',
    fontSize: '25px',
    colorText: 'black',
    fontFamily: 'tahoma'
}]

//criando botão de login usuario

function createButton(){
    let inputSection = document.getElementById('inputs');
    let button = document.createElement('button');
    button.innerText = 'Usuario';
    button.className = 'button';
    inputSection.appendChild(button);
}
createButton();


let buttonUsuario = document.getElementsByTagName('button');
buttonUsuario.addEventListener('clic', getUser);

function getUser(){
    for(let index = 0; index < usuarios.length; index += 1){
        if(document.getElementById('input-text').value === usuarios[index].nome){
            let nome = usuarios[index].nome;
            let tema = usuarios[index].tema;
            let fontSize = usuarios[index].fontSize;
            let colorText = usuarios[index].colorText;
            let fontFamily = usuarios[index].fontFamily;
            checkPreference(nome, tema, fontSize, colorText, fontFamily)
        } else {
            window.alert('Usuario não encontrado!');
        }
    }    
}

function checkPreference(nome, tema, fontSize, colorText, fontFamily){
    localStorage.setItem('nome', nome);
    localStorage.setItem('tema', tema);
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('colorText', colorText);
    localStorage.setItem('fontFamily', fontFamily);
}




