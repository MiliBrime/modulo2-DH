//calcular el saldo de la cuenta de un cliente
/* Crear un array que contenga las operaciones bancarias realizadas por el cliente,
tomando en cuenta que los depósitos serán representados por valores positivos y
los retiros por valores negativos */

let operaciones = [500,-85]; //depositos + , retiros -

/* Crear una función (Callback) que reciba como parámetro el array creado. La función
tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
actual de retiros y el saldo actual del cliente */

function callback (operaciones){
    let depositos=0;
    let retiros=0;
    let total=0;
    for (let i=0; i < operaciones.length; i++){
        total+=operaciones[i];
        if (operaciones[i] > 0 ){
            depositos += operaciones[i];
        }
        else{ 
            retiros += operaciones[i];
        }
    }
    return "El saldo total de depósitos es: $"+depositos + "\nEl saldo total de retiros es: $"+ Math.abs(retiros) +"\nEl saldo actual del cliente es: $"+ total;
}

/* Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
como el array que contiene las operaciones bancarias. Esta función tendrá la
responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
depósitos, el saldo actual de retiros y el saldo actual */

function informar(nombre, apellido, callback){
    return "Estimado/a "+ nombre+ " " + apellido+":"  + "\n\n"+ callback;
}

console.log( informar("Milagros","Brime",callback(operaciones)));