// let palindromo = txt => {
//     var newtxt = txt.replace(/ /g, "").toLowerCase();
//     var cadenaInvertida = "";

//     for(var i=newtxt.length; i>=0; i--){
//              cadenaInvertida = cadenaInvertida + newtxt.charAt(i);
//     }

//     console.log(newtxt);
//     console.log(cadenaInvertida);

//     if(newtxt == cadenaInvertida){
//         console.log("Es un palindromo");
//     }
//     else{
//         console.log("No es palindromo");
//     }
// }

// palindromo("anita laba la tina");


// let a = texto =>{
//     textosinespacios=texto.replace(/ /g, "").toLowerCase();

//     console.log('Texto original: '+texto);
//     console.log('Texto sin espacios: '+textosinespacios);

//     /*el metodo split: separa con comas cada uno de los caracteres.
//     el metodo reverese: revierte el orden de cada uno de los caracteres.
//     el metodo join: junta todos los caracteres formando un solo texto y 
//     especificando un espacio vacio para quitar las comas.*/

//     console.log('Texto invertido: '+textosinespacios.split('').reverse().join(''));

//     if(textosinespacios==textosinespacios.split('').reverse().join('')){
//         console.log("\nEs un palindromo");
//     }else{
//         console.log("\nNo es palindromo");
//     }
// }

// a('isaac si ronca asi');

let cadena = "anita lava la tina";
let arrPalDer = [];
//Eliminar espacios y gaurdar en arreglo
for (let index = 0; index < cadena.length; index++) {
  const letra = cadena[index];
  if (letra != " "){
    arrPalDer.push(letra.toUpperCase());
  }
}
console.log("Verifiando arreglo Der: "+arrPalDer);
//Revertir cadena y guardarlo en arreglo
let arrPalIzq = [];
for(let index = arrPalDer.length-1; index >= 0; index --){
  arrPalIzq.push(arrPalDer[index]);
}
console.log("Verifiando arreglo Izq: "+arrPalIzq);

//Comparar
let resultado;
for (let index = 0; index < arrPalIzq.length; index++) {

   if (arrPalDer[index] === arrPalIzq[index]) {
    resultado = true;
  } else {
    resultado = false;
    break;
  }
}

console.log("La frase "+ cadena +" es palindromo: "+resultado);