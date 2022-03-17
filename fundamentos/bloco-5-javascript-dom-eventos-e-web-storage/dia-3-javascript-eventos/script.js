function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

  // Escreva seu código abaixo.
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro.Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos / filhas da tag < ul > com ID "days".Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda - feira.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Os dias devem estar contidos em uma tag < li > , e todos devem ter a classe day.Ex: <li class="day">3</li>
function dezDays(){
    let ulList = document.getElementById('days');
    for(let index = 0; index < dezDaysList.length; index += 1){
        let newList = document.createElement('li'); 
        newList.innerText = dezDaysList[index];
        newList.classList.add('day');
        ulList.appendChild(newList);
    }
}
dezDays();

// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday.Ex: <li class="day holiday">24</li>

function holidays(){
    let ulList = document.getElementsByClassName('day');
    for (let index = 0; index < ulList.length; index += 1){
        if(ulList[index].innerText === '24'|| ulList[index].innerText === '25' || ulList[index].innerText === '31'){
            ulList[index].classList.add('holiday');
        }
    }
}
holidays();

// Os dias 4, 11, 18 e 25 são Sexta - feira.Eles devem conter a classe day e a classe friday.Ex: <li class="day friday">4</li>

function fridayClass(){
    let ulList = document.getElementsByClassName('day');
    for (let index = 0; index < ulList.length; index += 1){
        if(ulList[index].innerText === '4'|| ulList[index].innerText === '11' || ulList[index].innerText === '18' || ulList[index].innerText === '25'){
            ulList[index].classList.add('friday');
        }
    }
}
fridayClass();

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createBtn(string){
    let divMain = document.getElementsByClassName('buttons-container');
    let btn = document.createElement('button');
    btn.innerText = string;
    btn.id = 'btn-holiday';
    divMain[0].appendChild(btn);
}
createBtn('feriados');

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" 

const btnHoliday = document.getElementById('btn-holiday');
btnHoliday.addEventListener('click', changeBackgroundColor);
let aux = 0;
function changeBackgroundColor(){
    let holidays = document.getElementsByClassName('holiday');
    if(aux == 0) {
        for(let index = 0; index < holidays.length; index += 1){
            holidays[index].style.backgroundColor = 'black';
        }
        aux += 1;
    } else {
        for(let index = 0; index < holidays.length; index += 1){
            holidays[index].style.backgroundColor = 'rgb(238,238,238)';
        }
        aux = 0;
    }
    
}

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão   com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createBtnFriday(string){
    let divMain = document.getElementsByClassName('buttons-container');
    let btn = document.createElement('button');
    btn.innerText = string;
    btn.id = 'btn-friday';
    divMain[0].appendChild(btn);
}
createBtnFriday('Sexta-feira');

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

const btnFriday = document.getElementById('btn-friday');
btnFriday.addEventListener('click', changeBackgroundColorFriday);
let aux2 = 0;
function changeBackgroundColorFriday(){
    let friday = document.getElementsByClassName('friday');
    if(aux2 == 0) {
        for(let index = 0; index < friday.length; index += 1){
        friday[index].innerText = 'SEXTOU!!!';
        }
        aux2 += 1;
    } else {
        let cont = 4
        for(let index = 0; index < friday.length; index += 1){
            friday[index].innerText = String(cont);
            cont += 7;
        }
        aux2 = 0;
    }
}

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// let mouse = document.getElementsByClassName('day');
// mouse.addEventListener('mouseenter', zoom);

// function zoom(element){
//         element.target.style.fontsize = '30px'
// }

// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function newTask(string){
    let divTask = document.getElementsByClassName('my-tasks');
    let newSpan = document.createElement('span');
    newSpan.innerText = string;
    divTask[0].appendChild(newSpan);
}
newTask('cozinhar');