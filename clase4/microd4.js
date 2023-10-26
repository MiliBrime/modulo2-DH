//calculadora

let num1=5;
let num2=10;
let resultado=0;
let operacion="multiplicacion";

switch(operacion){
    case "suma": console.log("el resultado de sumar "+ num1+" + " + num2+ " es: "+ (resultado= num1+num2));
    break;
    case "resta":console.log("el resultado de restar "+ num1+" - " + num2+ " es: "+ (resultado= num1-num2));
    break;
    case "multiplicacion": console.log("el resultado de multiplicar "+ num1+ ( "*" )+ num2+ " es: "+(resultado=num1*num2));
    break;
    case"division":console.log("el resultado de dividir "+ num1+( "/" )+ num2+ " es: "+(resultado=num1/num2));
    break; 
    default:console.log("las operaciones aceptadas son: suma, resta, multiplicacion y division");
}