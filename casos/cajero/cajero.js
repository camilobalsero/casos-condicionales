const dinero = 5000000;
let opcion = prompt("Selecciona una opción:\n1. Ingresar dinero a la cuenta\n2. Retirar dinero de la cuenta\n3.Mostrar saldo disponible\n4. Salir del cajero");

switch (opcion) {
    case "1":
        dineroIngresado = parseInt(prompt("cuanto dinero desea ingresar a su cuenta? "));
        ingreso = dinero + dineroIngresado;
        console.log("Su saldo es: ",ingreso);
        break;

    case "2":
        dineroRetiro = parseInt(prompt("Teniendo en cuenta que su saldo actual es",dinero,"cuanto dinero desea retirar? "));
        retiro = dinero - dineroRetiro;
        if (!(dineroRetiro < dinero)){
            console.log("Usted no posee esa cantidad de dinero");
        } else {
        console.log("su saldo en la cuenta es: ",retiro);
        }
        break;

    case "3":
        console.log("su saldo actual es: ",dinero)
        break;

    case "4":
        console.log("Gracias por utilizar nuestro cajer automatico, te esperamos pronto!!");
        break;

    default:alert("No ingreso una opcion valida")
        break;
}