window.alert = function() {};  // Faz com que os alerts não façam nada

import {Modal} from './modal.js'; //modularização
import { AlertError } from './alert-error.js';
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

    const showAlertErro = notANumber(peso) || notANumber(cm);

    if (showAlertErro){
        AlertError.open()
        return;
    }
    AlertError.close();

    const result = IMC(peso,cm);
    const message = `Seu IMC é de ${result}`;

    Modal.message.innerText = message
    //modalWrapper.classList.add('open');
    Modal.open();
}
function notANumber(value){
    return isNaN(value) || value == "";
}

function IMC(peso,cm){
    return(peso / ((cm /100) **2)).toFixed(2); // função que calcula o imc
}
