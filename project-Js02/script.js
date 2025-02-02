//variaveis globais
const form = document.querySelector('form');
const inputPeso = document.querySelector('#kg');
const inputCm = document.querySelector('#cm');

//objetos literais, peguei as variaveis globais e coloquei dentro do
//object
const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    //duas formas diferentes de declarar o obj
    open: function(){
        Modal.wrapper.classList.add('open')
    },
    close(){
        Modal.wrapper.classList.remove('open')
    }

}
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

Modal.buttonClose.onclick = () => {
    //modalWrapper.classList.remove('open');
    Modal.close();
}
function IMC(peso,cm){
    return(peso / ((cm /100) **2)).toFixed(2); // função que calcula o imc
}
