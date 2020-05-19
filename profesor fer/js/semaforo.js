//semaforoSwitch()
//semaforoIfelse()
//ifTernario()
ifTernarioEdad()
function semaforoSwitch(){
    let color = "verde";
    let accion = "";

    switch (color) {
        case "rojo":
            accion = "Detenerse"
            break;

        case "amarillo":
            accion = "Precausion"
            break;
            
        case "verde":
            accion = "Seguir"
            break;
    
        default:
            console.log("No es una accion del semaforo");
            break;
    }

    console.log(`El semaforo esta ${color} y la accion es ${accion}`);
}

function semaforoIfelse(){
    let color = "amarillo";
    
    if(color == "verde"){
        console.log(`El semaforo esta ${color} y la accion es seguir`);
    }
    else if(color == "rojo"){
        console.log(`El semaforo esta ${color} y la accion es detenerse`);
    }
    else if(color == "amarillo"){
        console.log(`El semaforo esta ${color} y la accion es precacion`);
    }  
}

function ifTernario(){
    let numero1 = 5;
    let numero2 = 4;
    let resultado;

    resultado = (numero1>numero2) ? "Verdadero" : "Falso";
    console.log(resultado);
}

function ifTernarioEdad(){
    let edad = 18;
    let resultado;

    resultado = (edad>=18) ? "mayor de edad" : "menor de edad";
    console.log(resultado);
}