let num = parseInt(prompt("ingrese un numero"))
switch (num % 5) {
    case 0:
        console.log("el numero es divisible entre 5")
        break;

    default:console.log("el numero no es divisible entre 5")
        break;
}