let listaBicis = require("./datosBici.js");

//listaBicis es un array de objetos

let dhBici = {
    bicicletas: listaBicis,
    
    buscarBici: function(idABuscar){
        let buscarBiciPorId = this.bicicletas.filter(function (bici){ //para acceder a un metodo de un propio objeto literal se usa this
            return bici.id === idABuscar //filter es un ciclo y bici es cada elemento (objeto)  q recorre el mismo
        })

        if (buscarBiciPorId.length > 0){ //porq es un array, si es mayor a 0 es q hizo un array de 1 elemento entonces encontró el id y lo agregó al array nuevo
            return buscarBiciPorId [0] //el 0 es para que nos devuelva un objeto literal, sino devuelve el array con el objeto literal adentro
        }
        else {
            return null
        };
    },

    venderBici: function(idVendido){
        let biciAVender= this.buscarBici(idVendido);
        
        if (biciAVender != null && biciAVender.vendida == "no"){ //!=null es si encontró la bici, o sea si no es null 
            biciAVender.vendida = "si" //no estoy modificando el archivo json. sino el listado q copié en este archvo app.js
            return biciAVender
        } else if (biciAVender != null && biciAVender.vendida == "si") {
            return "La bicicleta ya ha sido vendida"
        } else {        
        return "Bicicleta no encontrada"}
    },

    biciParaLaVenta: function(){
        let bicisDisponible = this.bicicletas.filter(function(bici){
            return bici.vendida == "no"
        })
        if (bicisDisponible.length > 0){return bicisDisponible}
        else return "Todas las bicicletas fueron vendidas";
    },

    
    totalDeVentas: function(){  
        let bicisVendidas = this.bicicletas.filter(function(bici){
            return bici.vendida =="si";
        })
        let sumatoria = bicisVendidas.reduce(function(acumulador,bici){
            return acumulador += bici.precio;
        },0)
        return sumatoria;
    },

    aumentoBici: function(porcentaje){
        let bicisAumentadas = this.bicicletas.map(function(bici){
            return ((bici.precio * porcentaje)/100)+ bici.precio;
        })
        return bicisAumentadas
    },

    biciPorRodado: function(numRodado){
        let mismoRodado = this.bicicletas.filter(function(bici){
            return numRodado == bici.rodado
        })
        return mismoRodado
    },

    listarTodasLasBicis: function(){
        this.bicicletas.forEach( (valor,i) => {
            i=i+1;
            console.log("Bicicleta en la posicion "+i);
            console.log(valor);
            console.log("----------------------------------");
        })
    },

    listarTodasLasBicisForOf : function (){
        let i=1;
        for (let bicicleta of this.bicicletas) {
            console.log("Bicicleta en la posicion "+i);
            console.log(bicicleta);
            i++;
        }
    }
}

console.log(dhBici.totalDeVentas());