let notas = [10, 4, 5, 8, 9, 2, 7];

let notasHasta100 = notas.map(function (numero){
    return numero*10
})
//cada uno de los numeros del array va a reemplazar el parametro numero

//console.log(notasHasta100);

let notasAprobadas = notas.filter(function (numero){
    return numero >= 7
});

//console.log(notasAprobadas);

let sumaNotas = notas.reduce(function (acumulador,numero){
    return acumulador + numero;
})
//console.log(sumaNotas);

notas.forEach(function (valor,indice){ //el valor de cada elemento y su indice
    //console.log("en la posición "+indice + " tengo el valor "+ valor);
}) //en la posición 0 tengo el valor 10

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
let aprobados = estudiantes.filter (function (estu){
    return estu.promedio >=7;
})
let desaprobados = estudiantes.filter(function (estud) {
    return estud.promedio < 7; 
});

//console.log(desaprobados);

let numerosObjeto = [{
    nombre:"mili",
    puntaje:10,
},
{
    nombre: "nose",
    puntaje:3,
} ];
let sumatoriaObjetos= numerosObjeto.reduce(function(acumulador,persona){
    return acumulador + persona.puntaje;
}, 0)

console.log(sumatoriaObjetos);