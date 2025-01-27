function handleClick(event){
    event.preventDefault(); //Não reccaregar a page quando apertar o botão
    const inputNumber = document.querySelector("#inputNumber");

    console.log(inputNumber.value);
}