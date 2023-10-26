let marcasImport = require("./collectibles.js");


let hotToys = marcasImport("Hot Toys");
let bandai = marcasImport("bandai");
let starWars = marcasImport("star wars");

let unifiedCollectibles = [... hotToys, ...bandai, ...starWars];
//console.log(unifiedCollectibles);

let collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function(){
        this.figuras.forEach(figura => {
            console.log(figura);
        });
    },
    figuresByBrand: function (marcaElegida){
        let arrayFigurasSegunMarca= this.figuras
        .filter(figura => marcaElegida == figura.marca)
        .map(figura => figura.nombre);
        return arrayFigurasSegunMarca;
    },
}

//collectibles.listFigures();
console.log(collectibles.figuresByBrand("Hot Toys"));