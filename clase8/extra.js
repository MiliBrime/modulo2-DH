//funcion (array de numeros, numero). tiene que ver si el numero existe o no en el array

function existe(array,numero){
    if(array.includes(numero)){
        return "El número "+ numero+ " sí existe en el array";
    }
    else return ("El valor solicitado no existe.")}

let arrayNumeros= [4,6,5,8,9];
console.log(existe(arrayNumeros, 99));

console.log("---------------------------------");

//juego de trompito ( array , cantidad de vueltas comprendidas entre 2 y 6)
//generar un numero aleatorio entre 0 y 5. en funcion del resultado obtenido, se le debe devolver al usuario alguno de los mensajes suministrados por el trompito

let mensajes= ["Toma 1" ,"Toma 2", "Pon 1", "Pon 2", "Todos ponen", "Toma todo"];

//segun las vueltas que de, va a devolver un numero random y ese número dice la acción que hay que hacer.
function juegoTrompito(mensajes,cantVueltasQueDa){
    if (cantVueltasQueDa>6 || cantVueltasQueDa<2) {return "La cantidad de vueltas debe estar entre 2 y 6";
    }
    //generar un num aleatrorio
    let indiceAleatorio= Math.floor(Math.random()*6);
    //el math floor es para devolver el máximo entero menor o igual a un numero. si se pasa 45.95 devuelve 45
    //y pongo *6 porque el math random devuelve un num random del 0 al 1 no incluido
    
    // Obtener la acción correspondiente al número aleatorio. le da a accionElegida el valor que tiene mensajes en el indice random
    let accionElegida = mensajes [indiceAleatorio];

    return accionElegida;
}

let cantVueltasQueDa=5;
console.log(juegoTrompito(mensajes,cantVueltasQueDa)); 

console.log("---------------------------------");

//sumatoria de pares e impares ( array 10 valores numericos). devuelve la sumatoria de numeros pares y la de impares

function sumatoria(array){
    let sumatoriaPares=0;
    let sumatoriaImpares=0;
    for (let i=0; i<array.length; i++){
        if (array[i] % 2 == 0){
            sumatoriaPares+=array[i];
        }
        else {sumatoriaImpares+=array[i];}
    }
return ("La sumatoria de los números pares es: "+ sumatoriaPares+ "\nY la sumatoria de los números impares es: "+ sumatoriaImpares);
}
let arrayNum=[4,4,2,2,8,5,5,1,3,1];
console.log(sumatoria(arrayNum));