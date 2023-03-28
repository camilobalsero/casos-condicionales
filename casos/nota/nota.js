let nota = parseFloat(prompt("Ingrese el valor de la nota: "));
switch (true) {
    case nota >=0 && nota <3:
        console.log("La nota es muy deficiente");
        break;
    case nota >=3 && nota <5:
        console.log("La nota es insuficiente");
        break;

    case nota >=5 && nota <6:
        console.log("La nota es suficiente ");
        break;

    case nota >=6 && nota <7:
        console.log("La nota esta bien");
        break;

    case nota >=7 && nota <9:
        console.log("La nota es muy notable");
        break;

    case nota >=9 && nota <10:
        console.log("La nota es muy sobresaliente");
        break;

    default:console.log("La nota no esta entre el rango")
        break;
}