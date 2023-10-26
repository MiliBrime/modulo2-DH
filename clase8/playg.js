/* function sumatoriaBajoImporte (array){
    let suma=0;
    for (i=0; i<= array.length;i++){
        if ((array[i] <= 1000)&&(array[i] > 0)){
            suma=suma+array[i];
        }
    }
    return suma;
}


let importes=[300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000];
console.log(sumatoriaBajoImporte(importes)); */

/* function asientosDisponibles (asientosDisponibles, asiento){
    if (asientosDisponibles.includes(asiento)){
        console.log("Felicitaciones, el asiento número "+ asiento + " está disponible");
    }
    else (console.log ("Lo sentimos, el asiento número "+ asiento+ " está ocupado, pero aún quedan "+ asientosDisponibles.length+ " asientos disponibles"));
}

asientosDisponibles ([3, 15, 18, 25], 25); */


function reporteDePasajeros(cantidadEstaciones){
    let pasajeros = 200;
    let array = [];
    for (i = 0; i <= cantidadEstaciones; i++){
        if (i==5){
            pasajeros+=20;
        }
        array.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");
        pasajeros+=20;
    }
    return array;

}
console.log(reporteDePasajeros(5));


/* function laClaveSecreta(caracteres) {
    let mensaje = " ";
  
    for (let i=caracteres.length -1; i>=0; i--) { //-1 porque si son 10 caracteres yo deberia arrancar por el 9, porq se cuenta desde 0
      if (caracteres[i] !== "*") {
        mensaje += caracteres[i];
      }
    }
    return mensaje
  } */

  //otra forma: 
/* function laClaveSecreta(cadena) {
    return cadena.reverse().join("").replaceAll("*","");
}
console.log(laClaveSecreta(["s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"])); */