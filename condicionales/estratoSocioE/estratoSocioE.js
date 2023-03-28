let nombre = prompt("Escriba su nombre")
let estrato = parseInt(prompt("Digite su estrato socio-economico"));
let mes = parseInt(prompt("Digite el numero del mes"));
let antiguedad = parseInt(prompt("Ingrese la cantidad de años que lleva con la entidad"));

if (estrato < 4 && antiguedad >= 8){
    console.log(nombre,"tiene derecho al subsidio de vivienda");
} else {
    console.log(nombre,"no tiene derecho a subsidio");
}

