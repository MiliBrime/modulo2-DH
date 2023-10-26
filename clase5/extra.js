let mayusculas=(palabra)=>{return palabra.toUpperCase()};
console.log(mayusculas("hola como estás"));

let tipo=(dato)=>{return typeof(dato)};
console.log(tipo(1));

let perros=(edad)=>{return edad*7};
console.log("La edad de tu perro en años humanos es: "+perros(6)+" años");

let trabajo=(salario,dias,horas)=>{
    return (salario/(dias*horas))
}
console.log("Tu sueldo por hora es $" + trabajo(29400,3,7));
