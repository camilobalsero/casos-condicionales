let opciones = prompt("Que opcion desea escoger ? \n1.Visualizacion \n2.Edicion");
switch (opciones) {
    case "1":
        console.log("Su nombre es camilo");
        console.log("Su id es 1091884708");
        break;

    case "2":
        nuevoNombre = prompt("Ingrese el nuevo nombre");
        nuevoId = prompt("Ingrese su nuevo id");
        console.log("Su nuevo nombre es ",nuevoNombre);
        console.log("Su nuevo id es ",nuevoId);
        break;

    default:console.log("Ingreso una opcion no valida")
        break;
}