let electrodomesticos = ["televisor","microondas","tostadora","licuadora","computadora","heladera"];

//Acceder de manera aleatoria a diferentes elementos del array.
console.log(electrodomesticos);
console.log(electrodomesticos[5]);

//Extraer el primer elemento del array y agregarlo al final del mismo
let primero = electrodomesticos.shift();
electrodomesticos.push(primero);
console.log(electrodomesticos);

//Agregar al final del array dos (2) nuevos productos
electrodomesticos.push("aspiradora","pava eléctrica");
console.log(electrodomesticos);

//Mostrar por la consola la cantidad de elementos que contiene el array
console.log(electrodomesticos.length);

//Buscar un elemento del array y crear una condición responsable de establecer si existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje: “Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado no existe”

if (electrodomesticos.includes("televisor")){
    console.log("Producto encontrado");
}
else {console.log("El producto buscado no existe"); }

//Unificar todos los elementos del array en una cadena de texto (string), separando los elementos por espacios en blanco
let cadena= electrodomesticos.join(" ");
console.log(cadena);

//Determinar la cantidad de elementos que posee la cadena de texto obtenida 
//????? sería de caracteres? o sea 87
console.log(cadena.length);

//Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello
console.log(cadena.replace("pava eléctrica", "lavarropas"));

//Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras de la cadena de texto. Tener en cuenta que los elementos deben estar separados por una coma 
//??? z
console.log(cadena.split(" "));
