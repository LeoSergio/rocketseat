window.alert = function() {};  // Faz com que os alerts não façam nada
import {Modal} from './modal.js'; //modularização
import { AlertError } from './alert-error.js';
import { notANumber,calculateIMC } from './utils.js';

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

    const wheightOrHeightnotANumber = notANumber(peso) || notANumber(cm);
    //exibição da tela de erro, com validação
    if (wheightOrHeightnotANumber){
        AlertError.open()
        inputPeso.addEventListener("input", function(){
            AlertError.close()
        })
        inputCm.addEventListener("input", function(){
        AlertError.close()
    })
        return;
    }else{
        AlertError.close();
    }

    const result = calculateIMC(peso,cm);
    displayResultMessage(result);
}

function displayResultMessage(result){  
    const message = `Seu IMC é de ${result}`;
    
    Modal.message.innerText = message
    //modalWrapper.classList.add('open');
    Modal.open();

}

//fechar a janela de erro ao digitar no campo



