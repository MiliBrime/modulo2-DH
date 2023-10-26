// ciclo for
/* for (let i=0 ; i<=10; i--){
    console.log(i*7);
} */

/* function pasandoPorI()
{
    for ( i=0 ; i <=4 ; i++){
        let x=i;
        console.log("acá i tiene el valor de " + x);
    }
} */
function noParesDeContarImparesHasta(numero) {
    let contador=0;
    for (let i=0 ; i <= numero; i++){
        if (i % 2 ==1) {
            contador+=1;
        }
    }
    return console.log ("num impares: "+ contador);
}
noParesDeContarImparesHasta(5);

/* function tablaDeMultiplicar(numero) {
	let i=1;
 	while (i<=10){
		 console.log (numero+ " * "+ i+ " = "+ numero*i);
         i++;
	 }
}
tablaDeMultiplicar(6); */

function saldosDeMesesConGanancia(unPeriodo){
    ganancia= [];
    for(i=0; i < unPeriodo.length; i++){
        if (unPeriodo[i]>0){
            ganancia.push(unPeriodo[i]);
    }
}
return ganancia;
}
console.log(saldosDeMesesConGanancia([8,-1,5]));