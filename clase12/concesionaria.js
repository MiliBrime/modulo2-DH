let autosImportados = require ("./autos.js");

let concesionaria = {
    autos: autosImportados,
    buscarAuto: function(patenteBuscada){
    //reciba la patente y devuelva el auto. metodo filter
    for (let i = 0; i < this.autos.length; i++){
        if (this.autos[i].patente == patenteBuscada){
            return this.autos[i]}
    }
    return null; //lo pongo acá porque sino en el primer elemento buscado del for me retorna null si no lo encuentra
    },
    venderAuto: function (patenteBuscada){
        let autoEncontrado = this.buscarAuto(patenteBuscada);
        //si me devuelve null tiene q cortar acá y decir que no encontro el auto
        if (autoEncontrado == null) { return "No se encontró el auto buscado"} 
        else {
            autoEncontrado.vendido = true;
            return autoEncontrado;}
    },
    autosParaLaVenta: function (){
        let autosVenta = this.autos.filter(function(auto){
            return auto.vendido==false;
    })
        return autosVenta
    },
    autosNuevos: function (){
        let autosParaVender = this.autosParaLaVenta();
        let autosPocosKm = autosParaVender.filter(function(auto){
            return auto.km<=100
        })
        return autosPocosKm; 
    },    
    listaDeVentas: function(){
        
        let autoVendidoTrue= this.autos.filter(function(auto){
            return auto.vendido== true;
        }); //devuelve los autos vendidos
        
        //una vez que tengo los autos, quiero separar el precio en un array
        let listaPrecios = autoVendidoTrue.map(function(auto){
            return auto.precio
        })

        /* esto es para devolver el dinero total de autos vendidos (es la consigna de la siguiente)
        let dineroGenerado = listaPrecios.reduce(function(acumulador,precio){
            return acumulador+precio;
        }) */
        
        return listaPrecios;
    },
    totalDeVentas: function(){
        let ventas = this.listaDeVentas();
        let dineroGenerado= ventas.reduce(function(acumulador,precio){
            return acumulador+precio;
        },0)  //le pongo el 0 porq si la lista está vacía retorna eso, sino no sabe qué retornar
        return dineroGenerado;
    },    
    puedeComprar: function(auto, persona){
        let autoEnCuotas = auto.precio / auto.cuotas;
        if ((persona.capacidadDePagoEnCuotas >= autoEnCuotas) && (persona.capacidadDePagoTotal >= auto.precio)){
            return true;
        }
        else return false;
    },

    //etapa 10
    //obtener autos para la venta. funcion autosParaLaVenta (devuelve los q tienen vendido en false)
    //retornar los que pueda comprar 
    autosQuePuedeComprar: function(persona){
        let autosParaVender = this.autosParaLaVenta(); //guardo los autos para vender

        let listaDeAutosQuePuedeComprar = autosParaVender.filter(function(auto){
            return this.puedeComprar(auto,persona);
        },this) //En la función filter, se pasa this como segundo argumento para asegurar que se refiera al contexto correcto dentro de la función de filtrado. se puede hacer sin el this pero haciendo una arrow function
        return listaDeAutosQuePuedeComprar;
        //a la lista de autos para vender le tengo q sacar los autos que pueda comprar la persona
    }
};
        
let persona = {
    nombre: "Mili",
    capacidadDePagoEnCuotas: 100000,
    capacidadDePagoTotal: 100000000,
}

console.log(concesionaria.autosQuePuedeComprar(persona));


