
let peliculasFav= require("./peliculas.js");

for (let i = 0; i < peliculasFav.length; i++){
    console.log("Pelicula en la posicion " + i + ": ");
    console.log(peliculasFav[i]);
}



//microdesafio 2
let fs = require("fs");

let mensaje= fs.readFileSync(__dirname+ "/mensaje.txt", "utf8");
console.log(mensaje);

