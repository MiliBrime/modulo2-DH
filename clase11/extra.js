let arrayNumeros = [1 , 2 , 3 ,4 ,5 ,6 ,7,8,9,10];


/* Crear variables que contengan los valores numéricos dispuestos en el array en la
posición (0, 2 y 4) y con el resto de los valores numéricos crear un nuevo array. Utiliza
los recursos aprendidos en esta clase: Destructuring y Spread operator. */

let [num0, ,num2, ,num4] = arrayNumeros;

let restoNumeros = [num0, num2, num4];

let arrayNuevo = [... arrayNumeros, ...restoNumeros];

//console.log(arrayNuevo);

let mascota = {
    nombre: "Rocco",
    tipo: "perro",
    color:"marrón",
    raza: "mestizo",
}

let {nombre, tipo, color,raza} = mascota;

console.log("Hola les presento a mi mascota, su nombre es: "+ nombre+ ", es un hermoso "+ tipo+ ", de color: "+ color + ", y su raza es: "+ raza);