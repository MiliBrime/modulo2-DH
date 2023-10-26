//destructurar un array
let colores = ["rosa", "violeta", "verde","azul","rojo"];

let [colorRosa, ,ColorVerde]= colores

let parte = ["los", "cumplas"];
let completo = ["que", ...parte, "feliz"];
console.log(completo);

//destructurar un objeto literal
persona = {
    nombre: "Milagros",
    edad: 24,
    profesion: "programadora",
    seriesFavoritas: ["the office", "outlander"]
}

let {nombre,profesion}=persona;

//spread operator
let frutas1= ["banana", "manzana"];
let frutas2=["pera","frutillas","naranja"];

let todasLasFrutas = [... frutas1, ...frutas2];

let cursada = {
    curso: "fullstack",
    turno: "noche",
    sede: "online",
}
//si a los dos estudiantes quisiera asignarles los mismos valores del objeto cursada
let estudiante1 = {
    nombre: "Milagros",
    mail: "abc@123",
    ...cursada
}
let estudiante2 ={
    nombre: "Priscila",
    mail: "abc@456",
    ...cursada
}

//con funciones
function peliculasVistas(...nombre){
    for (let i=0; i<nombre.length; i++){
        console.log("La persona ya vió: "+ nombre[i]);
    }
}

peliculasVistas("iron man", "que paso ayer");

let notas = [2,5,7,3,1,9];
console.log(Math.min(...notas));
