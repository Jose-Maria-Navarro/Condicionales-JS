/* Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

*/
let producto
let pregunta
let cuenta
let precio

alert("Quieres un helado")
pregunta = prompt()

if(pregunta.toUpperCase() === "SI"){
  precio = 50
alert("Deseas agregar un topping para tu helado")
pregunta = prompt()
if(pregunta.toUpperCase() === "SI"){
alert("Menu\n 1.- topping de oreo\n 2.- topping de KitKat \n 3.-  topping de brownie\n 4.-topping de mango ")
producto = prompt()



switch(parseInt(producto)){

case 1: 
 precio = precio + 10
break;

case 2:
 precio = precio + 15

break;

case 3:
 precio = precio + 20

break;

default:
alert(`no tenemos este topping, lo sentimos.\n El costo de su helado sin topping es de ${precio}`)

break;


}}}

alert(`El costo de su pedido es de ${precio}`)
