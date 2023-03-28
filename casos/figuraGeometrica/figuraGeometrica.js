let nombreFigura = prompt("ingrese el nombre de la figura geometrica");
    
switch (nombreFigura) {
    case "triangulo":
        base = prompt("Ingrese la base del triangulo");
        altura = prompt("Ingrese la altura del triangulo");
        area = base * altura / 2;
        console.log("el area del triangulo es: ",area)
        break;

    case "rectangulo":
        largo = prompt("Ingrese el largo del rectangulo");
        ancho = prompt("Ingrese el ancho del rectangulo");
        area = largo * ancho;
        console.log("el area del rectangulo es: ",area)
        break;

    case "circulo":
        radio = prompt("Ingrese el radio del circulo");
        area = 3.14 * radio * radio;
        console.log("el area del circulo es: ",area)
        break;

    default:
        break;
}