//Arquivo de estudo sobre javascript comentado por Diego
// Tudo que precisa saber antes de ir pro react video do youtube


//Nullish Coalescing Operator

const idade = 0;

//Para o javascript o 0,'', false, underfined, null => recebem valores False quando usado o ||

//então  use o ?? que pega o real valor 
//document.body.innerText = 'Sua idade é: ' + (idade || 'Não informado') ;
document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não informado') ;

//objetos

const user= {
  name:'Leandro',
  idade: 23,
  address:{
    street: 'Rua ...',
    number: 104
  },

}
//para print das info do objeto no console em React também.
document.body.innerText = JSON.stringify(Object.entrigs(user))
document.body.innerText = JSON.stringify({address,age})

const {address, idade: age} = user //rename idade para age
//Desestruturação(conceito importante em React)
// é pegar parte de um objeto e usar em outras variaveis.

