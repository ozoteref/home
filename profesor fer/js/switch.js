let operacion = "resta";
let numero1 = 5;
let numero2 = 4;
let respuesta;

switch(operacion){
    case "suma":
        respuesta = numero1 + numero2;
        break;
    
    case "resta":
        respuesta = numero1 - numero2;
        break;

    case "multiplicacion":
        respuesta = numero1 * numero2;
        break;
    
    case "division":
        respuesta = numero1 / numero2;
        break;

    default:
        console.log("Esa operacion no existe, favor de verificar");
}

console.log(`La respuesta de la operacion es ${operacion} y el resultado es ${respuesta}`);