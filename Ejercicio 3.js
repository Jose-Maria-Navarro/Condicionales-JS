//// Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

let numero
let respuesta

numero = prompt("Intruduce un numero")

if(numero%2 === 0){
respuesta = "El numero intruducio es par"

}else{
respuesta = "El numero intruducio no es par"

}


alert(respuesta)
