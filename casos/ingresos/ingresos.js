let edad = parseInt(prompt("Ingrese su edad"));
let ingreso = parseInt(prompt("Digite sus ingresos mensuales"));
switch (ingreso > 4000000 && edad >=18) {
    case true:
        console.log("Debe de declarar renta")
        break;

    default:console.log("No debe de declarar renta");
        break;
}