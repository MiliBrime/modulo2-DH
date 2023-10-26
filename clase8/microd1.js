//calcular el monto a pagar por un alumno basándose en los cursos que desea tomar en Digital House.

//Crear un array multidimensional que contenga los nombres de los cursos y su precio en pesos: “html5, 4000”, “css3, 5000”, “javascript, 10000”, “react, 7000”, “nodejs, 15000”.

let cursosDisponibles=[
    ["html5", 4000], 
    ["css3", 5000], 
    ["javascript", 10000], 
    ["react", 7000], 
    ["nodejs", 15000]
];
//para acceder al array: console.log(cursosDisponibles[4][1]);

//Crear un array que contenga los cursos que el alumno quiere tomar con DH. Deben estar escritos en MAYÚSCULAS y el alumno puede seleccionar entre HTML5, CSS3, JAVASCRIPT, REACT y NODEJS.

let cursosAlumno= [ "CSS3", "HTML5"];

/* Crear una función (Callback) que reciba como parámetros el array multidimensional de los cursos y el otro array que indica los cursos que quiere hacer el alumno. La función tendrá la responsabilidad de calcular y devolver el monto total a pagar por el alumno en función de los cursos que quiere realizar. No olvides que en el array multidimensional los nombres de los cursos están escritos en letras minúsculas y tienes que pasarlas a MAYÚSCULAS. */

function montoAPagar (cursosDisponibles,cursosAlumno){
    let sumaCursos=0;
    for (let i = 0; i < cursosDisponibles.length; i++){

        cursosDisponibles[i][0]= cursosDisponibles[i][0].toUpperCase(); //convierto en mayúsculas 

        let nombreCurso = cursosDisponibles[i][0]; // acá nombre curso toma el valor del nombre de cada curso y va cambiando con el bucle (cuando es 0 es html, cuando es 3 es javascript)
        let precioCurso = cursosDisponibles[i][1]; // idem pero con los precios
        
        if(cursosAlumno.includes(nombreCurso)){  //si el array cursosAlumno contiene en algún lado el nombreCurso (q es el valor momentáneo que tiene la variable nombreCurso)
            sumaCursos += precioCurso; //le suma el precio que tiene la variable precioCurso en este momento en el bucle
        }

    }
    return sumaCursos;}

// otra función que reciba como parámetros el nombre y el apellido del alumno, el array multidimensional y el array de los cursos del alumno. Retornar el nombre y el apellido del alumno y el monto total a pagar

function alumno(nombre,apellido,cursosDisponibles,cursosAlumno){
    let mensaje= "Estimado/a "+ nombre+" " + apellido+ " en función de los cursos seleccionados:"+"\n";
    
    for (i=0; i<cursosAlumno.length; i++){
        mensaje += (i + 1) + ". - " + cursosAlumno[i] + "\n";
    }
    
    mensaje+= "El total a pagar es de: $"+ montoAPagar(cursosDisponibles,cursosAlumno);
    
    return mensaje;
}

console.log(alumno("Milagros", "Brime", cursosDisponibles,cursosAlumno));
