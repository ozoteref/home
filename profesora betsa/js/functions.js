import contentIzq from "./app";
import contentDer from "./app";
import buttonIzq from "./app";
import buttonDer from "./app";

buttonIzq.addEventListener('click', function(){
    
    fetch('https://ddragon.leagueoflegends.com/cdn/10.6.1/data/es_MX/champion.json')
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(miJeison) {
        contentIzq.innerHTML = "<h2>" + miJeison.data["Pantheon"].id + "</h2><p>"+miJeison.data["Pantheon"].blurb+"</p>";
    })
        
});