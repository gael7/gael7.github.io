var portfolio={
  apps: [{
    name: "Week-3-Game",
    description: "A Pokemon hangman game using HTML, CSS, Bootstrap and Javascript.",
    github: "https://github.com/gael7/week-3-game",
    heroku: "https://agile-dusk-11372.herokuapp.com",
    screenshot: "week-3-gameSC.png"
  },{
    name: "Week-4-Game",
    description: "A Star Wars RPG game using HTML, CSS, Bootstrap and jQuery.",
    github: "https://github.com/gael7/week-4-game",
    heroku: "https://lit-reef-63837.herokuapp.com",
    screenshot: "week-4-gameSC.png"
  },{
    name: "TriviaGame",
    description: "A How I Met your Mother trivia using HTML, CSS, Boostrap, jQuery, and using timers.",
    github: "https://github.com/gael7/TriviaGame",
    heroku: "https://warm-spire-92229.herokuapp.com",
    screenshot: "triviagameSC.png"
  },{
    name: "Giphy-api",
    description: "A webpage that lets you see gifs about some cities in Europe using the Giphy API, HTML, CSS, Bootstrap and jQuery.",
    github: "https://github.com/gael7/giphy-api",
    heroku: "https://guarded-shelf-67200.herokuapp.com",
    screenshot: "giphy-apiSC.png"
  },{
    name: "News-scrape",
    description: "An app that scrape news from the Real Madrid webpage and let you add comments, using HTML, CSS, Node.js, jQuery, and MongoDB.",
    github: "https://github.com/gael7/news-scrape",
    heroku: "https://lit-mesa-52894.herokuapp.com",
    screenshot: "news-scrapeSC.png"
  }],
  displayCards: function() {
    for (i=0; i<portfolio.apps.length; i++){
      if(i%2===0){
        $("#portSec").append("<div class='row'><div class='col s12 m6'><div class='card sticky-action medium'><div class='card-image waves-effect waves-block waves-light'><img class='activator' src='assets/images/"+portfolio.apps[i].screenshot+"'></div><div class='card-content'><span class='card-title activator grey-text text-darken-4'>"+portfolio.apps[i].name+"<i class='material-icons right'>more_vert</i></span><p>"+portfolio.apps[i].description+"</p></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>"+portfolio.apps[i].name+"<i class='material-icons right'>close</i></span><p></p></div><div></div></div>");
      } else {
        $("#portSec").append("<div class='row'><div class='col s12 m6'><div class='card sticky-action medium'><div class='card-image waves-effect waves-block waves-light'><img class='activator' src='assets/images/"+portfolio.apps[i].screenshot+"'></div><div class='card-content'><span class='card-title activator grey-text text-darken-4'>"+portfolio.apps[i].name+"<i class='material-icons right'>more_vert</i></span><p>"+portfolio.apps[i].description+"</p></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>"+portfolio.apps[i].name+"<i class='material-icons right'>close</i></span><p></p></div></div></div></div>");
      }
    }
    }
};

$(document).ready(function(){
	portfolio.displayCards();
});
