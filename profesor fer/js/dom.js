var enlaces = document.getElementsByTagName('a');
var nomEnlace = [];

console.log('Existen '+enlaces.length+' enlaces en página');

console.log('Dirección del penultimo enlace es "'+enlaces[5].href+'"');

console.log('Dirección del penultimo enlace es "'+enlaces[enlaces.length-2].href+'"');

for(var i=0;i<enlaces.length;i++){
    if(enlaces[i].href == "http://prueba/"){
        nomEnlace.push(enlaces[i].href);

    }
}

console.log('Existen '+nomEnlace.length+' enlaces de http://prueba/');


var parrafos = document.getElementsByTagName('p');

console.log(parrafos);

var enlacesp3 = parrafos[2].getElementsByTagName('a');

console.log(enlacesp3.length);


//enlace[i].href
// var penultimo = document.getElementsByName('Fusce porta');

// console.log(penultimo);

// var especifico = document.querySelector('http://prueba/');

// console.log(especifico);

// var todos = document.querySelectorAll();
