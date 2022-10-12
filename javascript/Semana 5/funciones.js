//Sintaxys: La forma en la que esribimos el codigo

//function sumar(){

//}
let n3 = 30; //Number

function sumar() {
  //codigo
  let n1 = 10;
  let n2 = 20;
  console.log(n1 + n2 + n3);
}

console.log(n3);

let nombre = "Pepe";

// Recomendacion: Los nombres de la funciuones deben ser verbos
function restar (n1, n2) {
  console.log(n1-n2);
}

//significa que cuando tengamos que llamar la funcion esta recibe 2 argumentos 
// que son n1, n2
// llamar la funcion hace referencia a usar, porque una funcion cuando es
// creada solo se ejecuta cada que la llamemos

// Para usar la funcion solo debemos escribir el nombre de esta
restar(10, 50); //-40
restar(90, 100); //-10
restar(120,30); //90

function saludar (nombre) {
  console.log("Hola me llamo " + nombre); //
}

saludar("Pepe");
saludar("Juan");


const edadMinima = 18;
function entrarAFiesta (edad) {
  // Si es mayor a 18 podra entrar si no no entra
  let resultado = false;

  if (edad >= edadMinima) {
    //este return signi
    resultado = true;
    }
           
    return resultado;        
  }
    

const validacionDeEdad = entrarAFiesta(15); //false
console.log("Validacion de edad", validacionDeEdad);    
    
    
    
    
    
    
    {

  }