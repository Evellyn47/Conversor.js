const prompt = require("prompt-sync")();

console.log("BEM-VINDO AO CONVERSOR DE TEMPERATURA");

let sair = false
let celsius, fahrenheit,kelvin, resultado;

do 
 

{
    console.log("---------------------------------\n" +
   "1- CELSIUS para FAHRENHEIT \n" +
   "2- CELSIUS para KELVIN \n" +
   "3- FARHENHEIT para CELSIUS \n" +
   "4- FARHENHEIT para KELVIN \n" +
   "5- KELVIN para CELSIUS \n" +
   "6- KELVIN para FARHENHEIT \n" +
   "7- sair \n"+
   "---------------------------------");
     
   let escolha = parseInt(prompt ("Qual operação você deseja fazer? ")); 

   switch(escolha )
  {
    case 1:
      celsius = parseFloat(prompt("Quantos graus celsius são?: "))        
      resultado = (celsius * 1.8 ) + 32;
      console.log("O resultado da conversão é: " + resultado);  
    break;
          
    
    case 2:
    break;

    case 3:
    break;
    
    case 4:
    break;

    case 5:
    break;
    
    case 6:
    break;

    case 7:

      sair = true 
    break;
   default:
      console.log("Opção invalida");
    break;
  }

}while(!sair)