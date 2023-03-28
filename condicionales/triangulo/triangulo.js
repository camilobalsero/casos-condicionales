let angulo1 = parseFloat(prompt("Ingrese el primer angulo"));
let angulo2 = parseFloat(prompt("Ingrese el segundo angulo"));
let angulo3 = parseFloat(prompt("Ingrese el tercer angulo"));

operacion = angulo1 + angulo2 + angulo3;

if(operacion == 180){
    console.log("La suma de los angulos es: ",operacion);
    console.log("Los angulos corresponden a un triangulo");
}else{
    console.log("Los angulos no corresponde a un triangulo");
}