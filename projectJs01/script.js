//variaveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = querySelector("#btnTry");
const btnReset = querySelector("#btnReset");

const randomNumber = Math.round(Math.random( )* 10);
let xAttempts = 1; //numero de tentativas
//eventos
btnTry.addEventListener('click',handleTryClick);
btnReset.addEventListener('click',handleResetclick);
document.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        handleResetclick();
    }
})

//função callback
function handleTryClick(event){
    event.preventDefault(); //Não fazer o padrao da tag html, no caso do botão no form, não enviar nada;
    const inputNumber = document.querySelector("#inputNumber");
 

    if(Number(inputNumber.value) == randomNumber){
        toggleScreen();
        screen2.querySelector("h2")
        .innerText = ("Você acertou em " + xAttempts + "tentativas");
    }

    xAttempts++;
    inputNumber.value = "";
}

function handleResetclick(){
    toggleScreen();
    xAttempts = 1;

}
function toggleScreen(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}



