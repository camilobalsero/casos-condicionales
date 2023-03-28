let num = parseInt(prompt("Ingrese un numero entre el 1 y el 15"));
switch (num) {
    case 1:
    case 4:
    case 6:
    case 8:
    case 10:
    case 12: 
    case 14:
    case 15:
        console.log("el numero no es primo");
        break;
    case 2:
    case 3:
    case 5:
    case 7:
    case 11:
    case 13:
        console.log("el numero es primo");
        break;  
    default:
        console.log("el numero ingresado no esta entre 1 y 15");
        break;
}