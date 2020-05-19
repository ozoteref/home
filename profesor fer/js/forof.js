let colores = ["verde","azul","rojo","amarillo","anaranjado"];
let colorfinal='';

for(let c of colores){
    console.log(`color final es: ${colorfinal} con longitud ${colorfinal.length} - color de arregro es: ${c} con longitud ${c.length}`);
    if(colorfinal.length<c.length){
        colorfinal=c;
    }
}

console.log(colorfinal);
