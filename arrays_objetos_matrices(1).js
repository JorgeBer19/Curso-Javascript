console.log("Hello, World!");
// JavaScript Arrays y Objetos


let frutas = ["manzanas","banana","naranja"];

console.log(frutas);

console.log(frutas[0]);

frutas.push("kiwi");

console.log(frutas);

frutas.unshift("fresa"); // Añade al principio

console.log(frutas); 

frutas.pop(); // Borra al final de elemento

console.log(frutas);


//Number, String, Boolean, null, undefined, Symbol (Este es de tipo único)

//Objetos

let persona = {
  Nombre: "Juan",
  Edad: 30
};

console.log(persona)

let barco1 = [1,2];
let barco2 = [6,9]
let Tablero = [[1,2,3],
              [4,5,6],
              [7,8,9]]

//HJacer disparo


let disparo = Tablero[0][0];
console.log("disparo en posición", disparo);
//barco1.

//Objetos
console.log(persona ["Nombre"]);

persona.Nombre = "Luis";
console.log(persona ["Nombre"]);

let persona1 = {
  Nombre: "Juan",
  Edad: 30,
  direccion : {
    ciudad: "Madrid",
    codigoPostal: 28001
  }
};

console.log(persona1);





//(console.log(Tablero[0]);
//console.log(Tablero[1], [2]);