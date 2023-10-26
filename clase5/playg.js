/* function elDoble(num){
    return num*2
}
console.log(elDoble(6)); */

/* //funcion expresada
let sumar= function (num1,num2){
    return num1+num2;
}
console.log(sumar()); */

/* //funcion declarada
function restar(num1,num2){
    return num1-num2;
}
console.log(restar(10,8)); */

/* //scope
let mensaje="hola!";
function saludar(){
    let mensaje="chau";
    return mensaje;
}
console.log(mensaje);
console.log(saludar()); */

// arrow function
/* let trabajar = dia => {
    if (dia=="sabado"||dia=="domingo"){
        return "no tenes que trabajar";}
    else {return "tenes que trabajar";}
}
console.log(trabajar("lunes")); */

//callback
/* let sumar= (num1,num2)=> num1+num2;
let restar= (num1,num2)=> num1-num2;
let multiplicar= (num1,num2)=> num1*num2;
let dividir= (num1,num2)=> num1/num2;

let calculadora=(num1,num2,operacion) => operacion(num1,num2);

console.log(calculadora(2,3,dividir)); */

function nombreC(nombre, apellido){
    return nombre+" "+apellido;
};
function saludar(nombre, apellido,callback){
    return "Hola "+ callback(nombre, apellido)+"!";
}
console.log(saludar("milagros","brime",nombreC));