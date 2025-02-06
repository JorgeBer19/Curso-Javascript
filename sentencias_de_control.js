// Sentencias de Control.
let edad = 18;

//Condicionales If/Else

if(edad >=18){
console.log("Eres mayor de edad")
}else{
  console.log("Eres menor de edad")
};
//Condicional seguido
let nota = 90;
if (nota >= 90){
  console.log("Sobresaliente")

}else if(nota >= 70){
  console.log("Aprobado")
}else{
  console.log("suspenso")
}

//Anidar condiciones (No hay que hacer muchos por que puede ser ilegibles)

let numero = 10
if (numero > 0){
    if (numero % 2 ===0){
      console.log("El numero es positivo y par");
    }else{
      console.log("El numero es positivo e impar");
    }
  
}else{
  
  console.log("El numero no es positivo");
}

//switch

let dia = "Lunes"
switch (dia){
  case "Lunes":
    console.log("Hoy es Lunes");
  break;
  case "martes":
    console.log("Hoy es martes");
  break;
  default:
    console.log("Dia desconocido")
}
//Ciclo for 
    // i ++ incrementa en 1 
for (let i=0; i<=10; i++){
    console.log(i);
};
console.log("Tabla de multiplicar del 5")
for (let i=0; i<=10; i++){
   let b = 5 * i;
    console.log(`5 x ${i} = ${b}`);

};
//while



//do

// Do

let i = 0;

do {
    console.log(`Iteracion ${i}`);
    i++
} while (i < 5);

// For ... of

let frutas = ["manzanas","banana","naranjas"];

for (let item of frutas) {
    console.log(item);
};

let persona = {
    nombre: "Pepe",
    edad: 30
};

// For ... in

for (let clave in persona) {
    console.log(`La clave es ${clave} y tiene valor ${persona[clave]}`);
};

//Manipulación de objetos.



