/* let miPais = {
     nombre: "Argentina",
     poblacion: 4000000,
     capital: "Buenos Aires",
     string: ["para", "ver","que se puede hacer un string"],
     decirNactionalidad: function (){
        return "Yo nací en "+ this.nombre
     },
     }

console.log(miPais.decirNactionalidad()); */

/* let curso = {
    cantAlumnos: 32,
    docentes: ["Mili", "Celeste"],
    horario: "de 20:30 a 23hs",
    notificaciones: function (){
        return "El horario de la cursada es: "+ this.horario;
    }
}

//funcion constructora
function Curso(cantAlumnos,docentes,horario){
    this.cantAlumnos = cantAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}
//instanciar objeto
let cursoProgramacion = new Curso(10,["Javier","Gerardo"],"de 19 a 21hs");
console.log(cursoProgramacion); //Curso { cantAlumnos: 10, docentes: [ 'Javier', 'Gerardo' ], horario: 'de 19 a 21hs' } */


//modulos

/* let fs= require('fs');
//console.log(fs);
let datos = fs.readFileSync(__dirname + "/prueba.txt", "utf-8");
console.log(datos); */

let fs= require('fs');


