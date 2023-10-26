let fs = require("fs");


let importar= JSON.parse(fs.readFileSync("bicicletas.json"));

module.exports = importar;