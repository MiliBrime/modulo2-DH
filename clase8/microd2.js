//Necesitan un código que permita determinar el promedio de alumnos egresados por curso


let graduadosHTML5= "16 50 72 70";
let graduadosCSS3= "1 2 5";
let graduadosJAVASCRIPT= "5 5 5 4";
let graduadosNODEJS ="2 2 2 2"

/* A cada una de las variables que contienen las cadenas de texto, habrá que
convertirlas a arrays, separando cada elemento por una coma */

let graduadosHTML5Array= graduadosHTML5.split(" ");
let graduadosCSS3Array= graduadosCSS3.split(" "); 
let graduadosJAVASCRIPTArray= graduadosJAVASCRIPT.split(" "); 
let graduadosNODEJSArray= graduadosNODEJS.split(" ");

/* Crear una función que reciba como parámetros los cuatro arrays de los alumnos graduados y un número comprendido entre el 1 y el 4, donde: 1: HTML, 2 CSS, 3 JAVASCRIPT, 4 NODEJS*/

/* La función tendrá la responsabilidad de calcular y devolver el promedio de graduados del curso indicado. Si el parámetro del curso es un valor diferente del 1 al 4, deberá retornar un mensaje al usuario indicando cuales son los valores asignados a cada curso. */

//calcular promedio: se suman todos los valores y se dividen por la cantidad de elementos del array
//si ingresa otro numero poner "Por favor ingresá un número entre el 1 y el 4. Donde: 1: HTML5, 2: CSS3, 3: JAVASCRIPT, 4: NODEJS "

function promedios(array){
    let suma=0;
    let promedio=0;
    for (i=0; i < array.length; i++){
        suma += parseFloat(array[i]);
    }
    promedio = (suma / array.length);
    return promedio;
}

function promedioGraduados(array1,array2,array3,array4,numero){
    
    switch (numero){
        case (1): return promedios(array1); break;
        case (2):return promedios(array2); break;
        case (3):return promedios(array3); break;
        case (4):return promedios(array4); break;
        default: console.log("Por favor ingresá un número entre el 1 y el 4. Donde: 1: HTML5, 2: CSS3, 3: JAVASCRIPT, 4: NODEJS");
    }
    }


console.log(promedioGraduados(graduadosHTML5Array,graduadosCSS3Array,graduadosJAVASCRIPTArray,graduadosNODEJSArray,1));