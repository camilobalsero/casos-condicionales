let caracter = prompt("ingrese un caracter");
switch (true) {
    case caracter >= "A" && caracter <= "Z":
        console.log("el caracter es una letra en mayuscula");
        break;

    case caracter >= "a" && caracter <= "z":
        console.log("el caracter es una letra en minuscula");
        break;

    case caracter >= "0" && caracter <= "9":
        console.log("el caracter es un numero");
        break;

    default:console.log("es un caracter especial")
        break;
}