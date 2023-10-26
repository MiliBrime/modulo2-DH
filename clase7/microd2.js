//tabla de multiplicar

/* Crear una función que no reciba ningún parámetro. Tendrá la responsabilidad de
generar de manera automática la tabla de multiplicar del 1 al 10*/

function tabla(){
    for (let num=1; num <= 10; num++){

        console.log("----TABLA DEL "+num+"----");
    for (let i = 1; i <= 10;i++) {

        console.log(num + " * " + i + " = "+ (i*num) );
    }
}
}

tabla();