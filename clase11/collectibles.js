let fs = require("fs");


function importar(marca){ 
    let archivo = " "
    switch(marca){
        case "Hot Toys": archivo = "figuras1.json";
        break;
        case "bandai": archivo = "figuras2.json";
        break;
        case "star wars": archivo = "figuras3.json";
        break;
    }
    
    let rutaArchivo = "./datos/" + archivo;

    let figuras = JSON.parse(fs.readFileSync(rutaArchivo, "utf-8"));

    return figuras
}

module.exports = importar;



