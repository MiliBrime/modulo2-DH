//Array de objetos literales
/* i. Identificador único de la película (id)
ii. Calificación por parte de los usuarios (rating)
iii. Premios (awards).
iv. Duración de la película (length).
v. Precio (price).
vi. Género de la película (genre):
1. Acción
2. Animación
3. Aventuras
4. Comedia
5. Suspenso. */

/* let generos =["Acción", "Animación","Aventuras","Comedia","Suspenso" ];

function Peliculas(nombre, id, rating,premios,duracion,precio,generos) {
    this.nombre=nombre;
    this.id=id;
    this.rating=rating;
    this.premios=premios;
    this.duracion=duracion;
    this.precio=precio;
    this.generos=generos;
}

let peli1 = new Peliculas("spider man",1,1,"Teen Choice Award","2 hs",500,generos[0]);
let peli2= new Peliculas("peter pan",2,2,"premios",400,500,generos[2]);

let arrayPeliculas = [peli1, peli2];

module.exports= arrayPeliculas; */

//sin constructor 
let peliculas = [{
    nombre: "spider man",
    id: 1,
    rating:455,
},
{
    nombre: "hola",
    id: 2,
    rating:5,
}]

module.exports= peliculas;