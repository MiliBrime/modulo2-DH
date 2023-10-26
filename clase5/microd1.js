//alquiler auto

let alquiler = (tipo, dias, silla) => {
    let alquilerBase=0;
    
    switch(tipo){
        case "compacto": 
            alquilerBase += 14000*dias; 
            break;
        case "mediano": 
            alquilerBase += 17000*dias; 
            break;
        case "camioneta": 
            alquilerBase += 28000*dias; 
            break;
        case "moto":
            alquilerBase += 10000*dias; 
            break;
    }

    if (silla){
        alquilerBase += 1200*dias;
    }

    return alquilerBase;
 }

let dias=2;
let silla=false;
let tipo="compacto"

console.log
("Estimado cliente: en base al tipo de vehículo " + tipo+ " alquilado, considerando los " + dias + " días utilizados, el monto total a pagar es de $"+ alquiler(tipo,dias,silla));

if (silla==true){console.log("En el monto se encuentran adicionados los $"+ (dias*1200)+ " por el uso de la silla infantil")};