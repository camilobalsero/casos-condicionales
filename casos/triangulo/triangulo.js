let angulo1 = parseInt(prompt("ingrese el primer angulo"));
let angulo2 = parseInt(prompt("ingrese el segundo angulo"));
let angulo3 = parseInt(prompt("ingrese un tercer angulo angulo"));
triangulo = angulo1 + angulo2 + angulo3;
switch (triangulo) {
    case 180:
        console.log("es un triangulo")
        break;

    default:console.log("los angulos no corresponden a un triangulo")
        break;
}