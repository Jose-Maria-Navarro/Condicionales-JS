//Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

let numero
let respuesta

numero = prompt("Intruduce un numero")

if(numero === "1000"){
respuesta = "Ganaste un premio"

}else{
respuesta = "Numero "+numero+" Lo sentimos, sigue participando"

}

console.log(respuesta)
