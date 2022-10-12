const numeros = [1, 2, 3, 4, 5, 6]

const numerosFiltrados = numeros.filter(function(numero) {
  if (numero % 2 === 0) {
    return numero
  }
})

console.log(numerosFiltrados)

function saludar(nombre) {
  return "Hola me llamo " + nombre
}

saludar("Pepe")

// arrow function // function tipo flecha
const saludar2 = (nombre) => {
  return "Hola me llamo " + nombre
}


saludar2("Juan")


//  Paso 2 filter con arrow
const numerosFiltrados2 = numeros.filter((numero) => {
  if (numero % 2 === 0) {
    return numero
  }
})

console.log(numerosFiltrados2)


// Arrow function inline 
// ojo maximo puede ejecutar 1 linea de codigo
const saludar3 = (nombre) => "Hola me llamo " + nombre

saludar3("Luis")


//  Paso 3 filter con arrow inline
const numerosFiltrados3 = numeros.filter((numero) => numero % 2 === 0)
console.log(numerosFiltrados3)