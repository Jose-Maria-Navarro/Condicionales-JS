 //Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

let pregunta = "¿Eres bellisimo/a?"
let respuesta 
let resultado
respuesta = prompt(pregunta) 



if(respuesta === "no"){
resultado = "No te creo"
}else if(respuesta === "si"){
resultado = "Ciertamente"
}else{

resultado = "No respondio la pregunta"

}

console.log(resultado)
