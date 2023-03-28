let estadoCivil = prompt("Ingrese su estado civil")
let casado = estadoCivil == "casado";
switch (casado) {
    case  true:
        console.log("Usted es casdo");
        break;
    default:console.log("Que bendicion!! usted todavia no esta casado")
        break;
}