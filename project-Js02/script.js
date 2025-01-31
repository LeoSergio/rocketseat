//variaveis globais
const form = document.querySelector('form');
const inputPeso = document.querySelector('#kg');
const inputCm = document.querySelector('#cm');

const modalWrapper = document.querySelector('.modal-wrapper');
const modalMessage = document.querySelector('.modal .title span');
const modalBtnClose = document.querySelector('.modal button.close');

//funçoes
form.onsubmit = function(event){
    event.preventDefault() // tira a ação padrao do botão(enviar)

    //pegando os valores do input
    const peso = inputPeso.value;
    const cm = inputCm.value;

    const result = IMC(peso,cm);
    const message = `Seu IMC é de ${result}`;

    modalMessage.innerText = message

    modalWrapper.classList.add('open');
}

modalBtnClose.onclick = () => {
    modalWrapper.classList.remove('open');
}
function IMC(peso,cm){
    return(peso / ((cm /100) **2)).toFixed(2); // função que calcula o imc
}
