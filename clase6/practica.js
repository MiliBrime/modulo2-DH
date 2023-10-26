//tipos de arrays

let seriesFav = ["the office", "friends", "breaking bad"];
let edades = [18, 24, 42, 43];
let valoresDeVerdad =[true, false, true, true, true];
let variados = ["mili", 7, true, edades];

//consultar un dato concreto dentro de un array

console.log(variados[0]); //entre corchetes pongo la posicion  q busco
console.log(variados); // [ 'mili', 7, true, [ 18, 24, 42, 43 ] ]
console.log(variados[3][1]); //24

//metodos

seriesFav.push("Outlander");
console.log(seriesFav); //[ 'the office', 'friends', 'breaking bad', 'Outlander' ]

let elUltimo = seriesFav.pop();
console.log(elUltimo); //Outlander

let elPrimero = seriesFav.shift();
console.log(elPrimero); //the office

seriesFav.unshift("black mirror");
console.log(seriesFav); //[ 'black mirror', 'friends', 'breaking bad' ]

console.log(seriesFav.indexOf("black mirror")); //0

let diasEntreSemana=["Lunes", "Martes", "Miercoles", "Jueves","Viernes"];
console.log(diasEntreSemana.join(" - "));//Lunes,Martes,Miercoles,Jueves,Viernes

//Metodos de string
let mensaje = "Gran dia para practicar javascript!";
console.log(mensaje.trim());

console.log(mensaje.split('dia'));//[ 'Gran ', ' para practicar javascript!' ]

console.log("soy del planeta tierra".split("planeta")); //[ 'soy del ', ' tierra' ]

/* console.log(mensaje.indexOf("dia")); //5

console.log(mensaje.slice(0,13));

console.log(mensaje);

console.log(mensaje.trim());


console.log("aguante phyton".replace("phyton","javascript"));//aguante javascript */