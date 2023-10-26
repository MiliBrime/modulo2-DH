//ajuste tarifario de energía eléctrica

let pagoMes=10000;
let consumoKWH=500;

consumoKWH<300 ? console.log("Se mantendrá el subsidio. No habrá aumento"): 
console.log("Debido a que su hogar tuvo un consumo de "+consumoKWH+"kwh, en base al ajuste tarifario (hogares con consumomayor a 300KWH por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $"+ 
(pagoMes*0.2+pagoMes));