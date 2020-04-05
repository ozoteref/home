document.addEventListener('DOMContentLoaded', function(){

    var divText = document.getElementById('card-first-content');
    
    fetch('https://ddragon.leagueoflegends.com/cdn/10.6.1/data/es_MX/champion.json')
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(miJeison) {
        divText.innerHTML = "<h2>" + miJeison.data["Pantheon"].id + "</h2><p>"+miJeison.data["Pantheon"].blurb+"</p>";
    })
        
});
  

var personaje = [
    {
      'name': 'Iruma',
      'age': 13,
      'nameanime': 'Mairimashita! Iruma-kun',
    },
    {
      'name': 'Naruto',
      'age': 13,
      'nameanime': 'Naruto',
    },
    {
       'name': 'Luffi',
       'age': 15,
       'nameanime': 'One Pice',
    },
    {
       'name': 'Zoro',
       'age': 15,
       'nameanime': 'One Pice',
    },
    {
       'name': 'Sasuke',
       'age': 14,
       'nameanime': 'Naruto',
    },
    {
       'name': 'Clara',
       'age': 13,
       'nameanime': 'Mairimashita! Iruma-kun',
    },
  ];

  // El elemento filter nos permite ralizar un callback filtrando un grupo especifico o un valor 
  var age = personaje.filter(function(personaje){
    return personaje.age == 13;
 
  }); 

  console.log(age);