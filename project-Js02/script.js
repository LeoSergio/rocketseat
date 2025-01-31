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

    console.log(peso,cm);
}
