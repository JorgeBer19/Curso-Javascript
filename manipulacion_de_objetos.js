// -----------------------
//Manipulación de objetos
//------------------------

//valor vs Referencia 
//Tipos primitivos (number,string, boolean, null, undefined, symbol)

//Por valor
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);

//Por referencia

let persona1 = {Nombre : "Ana"};
let persona2 =  {...persona1};

persona2.nombre = "Juan";

console.log(persona1.nombre);
console.log(persona2.nombre);


//Spread (...)

let numeros = [1,2,3];

let nuevosNumeros = [...numeros, 4, 5];

let persona = {nombre: "Ana", edad : 30};
let nuevaPersona = {...persona, ciudad : "Madrid"};
console.log(persona);
console.log(nuevaPersona);

//structureclone
structuredClone
let persona3 = {nombre: "Ana", edad : 30}
let nuevaPersona4= structuredClone(persona3);

persona3 = {...persona3 ,ciudad : "Madrid"}
console.log(persona3);
console.log(nuevaPersona4);

//Desectruturación

function obtenerCoordenadas(){
    return{ x : 10 , y : 20}

};

let {x , y} = obtenerCoordenadas();
console.log(x,y);

// Desescturación 

//array 
let miarray= ["mazanas"]