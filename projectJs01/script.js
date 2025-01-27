const randomNumber = Math.round(Math.random( )* 10);
let xAttempts = 1; //numero de tentativas

function handleClick(event){
    event.preventDefault(); //Não reccaregar a page quando apertar o botão
    const inputNumber = document.querySelector("#inputNumber");
 

    if(Number(inputNumber.value) == randomNumber){
        document.querySelector(".screen1").classList.add("hide");
        document.querySelector(".screen2").classList.remove("hide");
        document.querySelector(".screen2 h2")
        .innerText = ("Você acertou em " + xAttempts + "tentativas");
    }

    xAttempts++;
}