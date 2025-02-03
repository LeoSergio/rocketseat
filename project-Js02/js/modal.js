//objetos literais, peguei as variaveis globais e coloquei dentro do
//object
export const Modal = {
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


Modal.buttonClose.onclick = () => {
    //modalWrapper.classList.remove('open');
    Modal.close();
}

//features de close com a tecla 'Esc'
window.addEventListener('keydown', handleKeydown);
function handleKeydown(event){
    if (event.key === 'Escape'){
        Modal.close();
    }
}