document.addEventListener('DOMContentLoaded', function(){
    var content = document.getElementById('content');
  
    // fetch request
    fetch("https://ddragon.leagueoflegends.com/cdn/10.6.1/data/en_US/champion.json")
    .then(function(response){ // first promise, converts response to json, return json.
      return response.json()
    })
    .then(function(json){ // receive json as "json" variable
      return convertObject(json.data); // I decided to first convert the object to array. See function below.
    })
    .then(function(array_champions){
      var html = ""; // initialize html variable as empty string.
      array_champions.forEach(function (champ) { // foreach item in array, I built my card.
        // concatenates current card to html variable.
        html += `
        <div class="card">
          <h3>${champ.name}</h3>
          <h5>${champ.title}</h5>
          <p>${champ.blurb}</p>
        </div>
        `;
      });
      return html; // returns all the built HTML, this contains at this moment ALL my cards.
    })
    .then(function(html){ // receive html and inject to my div
      content.innerHTML = html;
    })
  });
  
  function convertObject(json_result){
    var champions = []; // initialize empty array
    for (var name_champ in json_result) { // iterates in each item.
      var champion = json_result[name_champ]; // fill champion variable with the current champion, example json_result["Amumu"]
      champions.push(champion); // push champion to array
    }
    return champions; // return array with all the champions.
  }
  