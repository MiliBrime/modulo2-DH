/* Crear una función que pida un valor por parámetro y muestre los 10 números
siguientes. */

function siguientes(num){
    for (let i=1; i<=10;i++){
        num++;
        console.log(num);
    }
}
siguientes(10);

console.log("--------------------------------");
//Imprimir los números entre el 1 y el 57, saltando de tres en tres
function tresEnTres(){
    for(let i=1;i<=57;i+=3){
        console.log(i);
    }
}
tresEnTres();

console.log("--------------------------------");
//Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.
function sumar(){
    let suma=0;
    for(let i=0; i<=100; i++){
        suma+=i;
}
return suma;}
console.log(sumar());

console.log("--------------------------------");
/* Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
las letras de la cadena de texto pero en MAYÚSCULA */
function practicando(cadena){
   for (let i=0; i<cadena.length; i++){
    console.log (cadena[i].toUpperCase());
}}
let cadena= "practicando el uso de los ciclos o bucles";
practicando(cadena);

console.log("--------------------------------");
/* Crear una función que reciba como parámetro un array de números positivos. Tendrá
la responsabilidad de retornar un nuevo array pero sólo con los valores pares. */
let numeros=[4,5,6,8,10,1,1,1,1];
function array(numeros){
    let pares=[];
    for (let i=0; i<numeros.length; i++){
        if (numeros[i] % 2 == 0){
            pares.push(numeros[i]);
        }
    }
    return pares;
}
console.log(array(numeros));