let peliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick","Elvis","Thor: amor y trueno"];

console.log(peliculas);

//pasar thor adelante y en mayusculas
function primero(cadena){
   let prim = peliculas.pop();
   prim=prim.toUpperCase();
   peliculas.unshift(prim);
   return console.log(cadena);
}
primero(peliculas);

//prox estrenos
//duda: no entiendo cuando dice que tiene q estar separada por coma, porq generalmente cuando pone el array en la consola ya estan separados x coma
let estrenos = ["Counter-Strike", "NOP", "Vértigo", "Nick", "Avatar"];
console.log(estrenos); //[ 'Counter-Strike', 'NOP', 'Vértigo', 'Nick', 'Avatar' ]

//Excluir la primera peli
estrenos.shift();
console.log(estrenos);

//todas las peliculas
function unir(peliculas) {
   let nuevo= peliculas.concat(estrenos);
   return console.log(nuevo);
}
unir(peliculas);