export function notANumber(value){
    return isNaN(value) || value == "";
}

export function calculateIMC(peso,cm){
    return(peso / ((cm /100) **2)).toFixed(2); // função que calcula o imc
}