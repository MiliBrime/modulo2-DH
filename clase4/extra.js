//aterrizar avion

let velocidad=800;
let altura=150;

//ejemplo con if 

//si la velocidad y altura están ok 
if((velocidad>=268 && velocidad<=278)&&(altura>=150 && altura<=300)){
    console.log("El avión está en perfectas condiciones para iniciar el aterrizaje");
}

//si la velocidad o la altura no estan bien: primero vemos la veloc. para mi q esta mal porque la velocidad puede esta bien y lo ant dio mal por la altura
if (velocidad<268){console.log("Falta velocidad");}
else {console.log("Exceso de velocidad");}


if(altura<150){console.log("Falta altura");}
else{console.log("Está muy alto");}; 


//no pongo else porque si falta velocidad Y altura no pone las dos cosas


/* //ejemplo con if ternario
(velocidad>=268 && velocidad<=278)&& (altura>=150 && altura<=300)? console.log("El avión está en perfectas condiciones para iniciar el aterrizaje") 
: console.log("No se puede aterrizar"); */