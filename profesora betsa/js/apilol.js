document.addEventListener('DOMContentLoaded', function(){

    var divText = document.getElementById('card-first-content');
    
    fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&type=receta')
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(miJeison) {
        divText.innerHTML = `<img src='${miJeison.data[0].image.styles.square_circle}'/>
                             <h1> ${miJeison.data[0].author.name} </h1>`;
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