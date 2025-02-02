import {Modal} from './modal.js'; //modularização
//variaveis globais
const form = document.querySelector('form');
const inputPeso = document.querySelector('#kg');
const inputCm = document.querySelector('#cm');


//funçoes
form.onsubmit = function(event){
    event.preventDefault() // tira a ação padrao do botão(enviar)

    //pegando os valores do input
    const peso = inputPeso.value;
    const cm = inputCm.value;

    const result = IMC(peso,cm);
    const message = `Seu IMC é de ${result}`;

    Modal.message.innerText = message
    //modalWrapper.classList.add('open');
    Modal.open();
}
function IMC(peso,cm){
    return(peso / ((cm /100) **2)).toFixed(2); // função que calcula o imc
}
