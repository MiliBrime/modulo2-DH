//comida rapida

let callback = (tipo,jamon,queso,salsa,mayonesa,mostaza,tomate,lechuga,cebolla)=>{
    let base=0;
    switch(tipo){
        case "carne a la parrilla": base=1800; break;
        case "pollo":base=1500;break;
        case "vegetariana":base=1200;break;
    }
    jamon ? base+=30: "";
    if(queso){base+=25};
    if(salsa){base+=5};
    if(mayonesa){base+=5};
    if(mostaza){base+=5};
    if(tomate){base+=15};
    if(lechuga){base+=10};
    if(cebolla){base+=10};

return base;
}
let mensaje = (nombre, apellido, total) => {return "Estimado/a "+nombre+" "+apellido+", el monto total a pagar es de "+ total};

console.log(mensaje("Milagros", "Brime", callback("vegetariana",false,true,true,true,false,true,true,true)));