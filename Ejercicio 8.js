// Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

let calificacion
let calM

calificacion = prompt("Escribe tu calificacion")

calM = Number(calificacion)

if(calM < 6){
console.log("Reprobado")

}else if(calM >= 6 && calM <=8){
console.log("Regular")

}else if(calM === 9){
console.log("Bien")

}else if(calM === 10){
console.log("Exelente")

}else{

console.log("No ingresaste un numero valido")

}
