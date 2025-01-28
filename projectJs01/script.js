const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const randomNumber = Math.round(Math.random( )* 10);
let xAttempts = 1; //numero de tentativas
//função callback
function handleTryClick(event){
    event.preventDefault(); //Não fazer o padrao da tag html, no caso do botão no form, não enviar nada;
    const inputNumber = document.querySelector("#inputNumber");
 

    if(Number(inputNumber.value) == randomNumber){
        screen1.classList.add("hide");
        screen2.classList.remove("hide");

        document.querySelector(".screen2 h2")
        .innerText = ("Você acertou em " + xAttempts + "tentativas");
    }

    xAttempts++;
    inputNumber.value = "";
}

//eventos
const btnTry = querySelector("#btnTry");
const btnReset = querySelector("#btnReset");

btnTry.addEventListener('click',handleTryClick);
btnReset.addEventListener('click',function(){
    screen1.classList.remove("hide");
    screen2.classList.add("hide");
    xAttempts = 1;
});

