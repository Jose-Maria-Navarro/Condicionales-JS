// Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.


let numero
let resultado

numero = prompt("Ingresa un numero")


if(numero%2 === 0){
resultado = "es divisible entre 2"

}else{

  resultado = "no es divisible entre 2"
}

console.log("El numero  "+numero+" "+resultado)
