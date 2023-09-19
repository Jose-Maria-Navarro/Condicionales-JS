// Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

let numero1
let numero2
let numero3

let respuesta

numero1 = prompt("Intruduce el primer numero")
numero2 = prompt("Intruduce el segundo numero")
numero3 = prompt("Intruduce el segundo numero")

num1= Number(numero1)
num2= Number(numero2)
num3= Number(numero3)

if(num1 > num2 && num1 > num3){
  respuesta = "El numero mayor es "+num1


}else if(num2 > num1 && num2 > num3){
  respuesta = "El numero mayor es "+num2


}else if(num3 > num2 && num3 > num1){
 respuesta = "El numero mayor es "+num3


}else if(num1 === num2  || num1 === num3  ||num2 === num3){
  if(num1 === num2){
respuesta = "El numero mayor "+num1+" esta duplicado"
}else if( num1 === num3){
respuesta = "El numero mayor "+num3+" esta duplicado"
}else if(num2 === num3){
respuesta = "El numero mayor "+num2+" esta duplicado"
}
}






console.log(respuesta)
