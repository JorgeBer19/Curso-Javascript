function saludar (){
  console.log("Hola Mundo");
  
};

saludar()


function saludar2 (nombre){
  console.log(`Hola Mundo ${nombre}`);
  
};
saludar2("Miguel");

let resultado
function suma (a,b){
  resultado  = a + b
  return resultado;

};

console.log(suma(2,2));

//Ambito scode es super importante 

console.log(resultado);

const saludar3 = function(){
  console.log("Hola")
  
  
};
console.log(saludar3);

saludar3()


//Funciones Flecha


const saludar4 = ()=> {
    console.log("Hola");
  
};

saludar4();

const saludar5 = nombre => {
    console.log(`Hola  ${nombre}`);
  
};

saludar5("Jorge")



const sumar =(a,b) => {
  let resultado = a + b;
  return resultado
  
};

console.log(sumar(2,3));