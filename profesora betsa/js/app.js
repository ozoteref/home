import * as mifuncion from './functions.js';

mifuncion.buttonIzq.addEventListener('click', function(){
    
    fetch('https://ddragon.leagueoflegends.com/cdn/10.6.1/data/es_MX/champion.json')
    .then(function(respuesta) {// Primera promesa, convierte la respuesta a json, devuelve json.
        return respuesta.json();
    })
    .then(function(miJeison) {// recibir json como variable "json"
       mifuncion.contentIzq.innerHTML = "<div class='card-right'>"+"<img src='" + miJeison.data["Pantheon"].image.full + "' />" + "<h2>" + miJeison.data["Pantheon"].id + "</h2><p>"+miJeison.data["Pantheon"].blurb+"</p>"+"</div>";
    })
        
});

mifuncion.buttonDer.addEventListener('click', function(){
    
    fetch('https://ddragon.leagueoflegends.com/cdn/10.6.1/data/es_MX/champion.json')
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(miJeison) {
       mifuncion.contentDer.innerHTML = "<div class='card-left'>" + "<img src='" + miJeison.data["Darius"].image.full + "' />" +"<h2>" + miJeison.data["Darius"].id + "</h2><p>"+miJeison.data["Darius"].blurb+"</p>"+"</div>";
    })
        
});