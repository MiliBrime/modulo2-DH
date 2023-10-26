let amigos = ["mari", "ro","sofi","ari"];

let amigosJson= JSON.stringify(amigos);

let amigosOriginal = JSON.parse(amigosJson);

console.log(amigosOriginal);

//con objetos
let persona= {
    nombre: "carli",
    edad: 26,
    domicilio: "9 44 y 45"
}

console.log(persona);

let personJson = JSON.stringify(persona);

console.log(personJson);

let personOriginal = JSON.parse(personJson);

console.log(personOriginal);