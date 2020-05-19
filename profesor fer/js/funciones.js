function saludo(){
    let nombre="alejandro";

    for(var i=0; i<nombre.length; i++){
        console.log(nombre.charAt(i));
        if(nombre.charAt(i)=="a"){
            mensaje=`BIenvenida al sistema ${nombre}`;  
        }else{
            mensaje=`BIenvenido al sistema ${nombre}`;
        }
    }
    console.log("Funcion normal");
    console.log(mensaje);
}
saludo();


function saludo2(nombre){

    for(var i=0; i<nombre.length; i++){
        if(nombre.charAt(i)=="a"){
            mensaje=`BIenvenida al sistema ${nombre}`;  
        }else{
            mensaje=`BIenvenido al sistema ${nombre}`;
        }
    }
    console.log("\nFuncion con parametros");
    console.log(mensaje);
}
saludo2("ana");


function saludo3(nombre){
    
    for(var i=0; i<nombre.length; i++){
        if(nombre.charAt(i)=="a"){
            mensaje=`BIenvenida al sistema ${nombre}`;  
        }else{
            mensaje=`BIenvenido al sistema ${nombre}`;
        }
    }
    console.log("\nFuncion regreso de valor");
    return mensaje;
}

let bienvenida = saludo3("naruto");

console.log(bienvenida);


var sistema = function(nombre){
    for(var i=0; i<nombre.length; i++){
        if(nombre.charAt(i)=="a"){
            mensaje=`BIenvenida al sistema ${nombre}`;  
        }else{
            mensaje=`BIenvenido al sistema ${nombre}`;
        }
    }
    console.log("\nFuncion anonima");
    console.log(mensaje);
}

sistema("fabiola")

let bienvenidaSistema = nombre => {
    for(var i=0; i<nombre.length; i++){
        if(nombre.charAt(i)=="a"){
            mensaje=`BIenvenida al sistema ${nombre}`;  
        }else{
            mensaje=`BIenvenido al sistema ${nombre}`;
        }
    }
    console.log("\nFuncion flecha");
    console.log(mensaje);
} 

bienvenidaSistema("carlos");