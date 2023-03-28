let numero = prompt("Ingrese un numero de las cifras que desee");
switch (true) {
    case numero >= "0" && numero <= "9":
        console.log("el numero es de una sola cifra");
        break;
    case numero >= "10" && numero <= "99":
        console.log("el numero es de dos cifras");
        break;
    
    case numero >= "100" && numero <= "999":
        console.log("el numero es de tres cifras");
        break;

    default:console.log("el numero es de mas de tres cifras");
        break;
}