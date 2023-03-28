let producto = parseInt(prompt("Cual es el valor del producto"));
let descuento = parseInt(prompt("Ingrese el porcentaje del descuento"));
switch (descuento > 0 && descuento < 100) {
    case (true):
        descuentoFinal = producto - producto * descuento / 100;
        console.log("el precio del producto con el descuento es: ",descuentoFinal)
        break;

    default:console.log("el descuento no es valido");
        break;
}