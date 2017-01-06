var portfolio={
  apps: [{
    name: "Week-3-Game",
    description: "A Pokemon hangman game using HTML, CSS, Bootstrap and Javascript.",
    technologies: ["HTML", "CSS", "Bootstrap", "jQuery"],
    github: "https://github.com/gael7/week-3-game",
    heroku: "https://agile-dusk-11372.herokuapp.com",
    screenshot: "week-3-gameSC.png"
  },{
    name: "Week-4-Game",
    description: "A Star Wars RPG game.",
    technologies: ["HTML", "CSS", "Bootstrap", "jQuery"],
    github: "https://github.com/gael7/week-4-game",
    heroku: "https://lit-reef-63837.herokuapp.com",
    screenshot: "week-4-gameSC.png"
  },{
    name: "TriviaGame",
    description: "A How I Met your Mother trivia.",
    technologies: ["HTML", "CSS", "Bootstrap", "jQuery"],
    github: "https://github.com/gael7/TriviaGame",
    heroku: "https://warm-spire-92229.herokuapp.com",
    screenshot: "triviagameSC.png"
  },{
    name: "Giphy-api",
    description: "A webpage that lets you see gifs about some cities in Europe using the Giphy API.",
    technologies: ["HTML", "CSS", "Bootstrap", "jQuery"],
    github: "https://github.com/gael7/giphy-api",
    heroku: "https://guarded-shelf-67200.herokuapp.com",
    screenshot: "giphy-apiSC.png"
  },{
    name: "News-scrape",
    description: "An app that scrape news from the Real Madrid webpage and let you add comments.",
    technologies: ["HTML","CSS", "Bootstrap", "Node.js", "jQuery", "MongoDB"],
    github: "https://github.com/gael7/news-scrape",
    heroku: "https://lit-mesa-52894.herokuapp.com",
    screenshot: "news-scrapeSC.png"
  }],
  technoLoop: function(app){
    var techno="";
    for (e=0; e<portfolio.apps[app].technologies.length; e++){
      techno+="<div class='chip'>"+portfolio.apps[app].technologies[e]+"</div>";
      console.log(techno);
    }
    return techno;
  },
  displayCards: function() {
    for (i=0; i<portfolio.apps.length; i++){
      var technoString=portfolio.technoLoop(i);
      if(i%2===0){
        $("#portSec").append("<div class='row'><div class='col s12 m6'><div class='card sticky-action'><div class='card-image waves-effect waves-block waves-light'><img class='activator' src='assets/images/"+portfolio.apps[i].screenshot+"'></div><div class='card-content blue-grey darken-2'><span class='card-title activator white-text'>"+portfolio.apps[i].name+"<i class='material-icons right'>more_vert</i></span><p class='white-text'>Technologies:</p>"+technoString+"</div><div class='card-action blue-grey darken-2'><a href='"+portfolio.apps[i].github+"'>Github</a><a class='right' href='"+portfolio.apps[i].heroku+"'>Web</a></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>"+portfolio.apps[i].name+"<i class='material-icons right'>close</i></span><p>"+portfolio.apps[i].description+"</p></div></div></div></div>");
      } else {
        $("#portSec").append("<div class='row'><div class='col s12 m6 right'><div class='card sticky-action'><div class='card-image waves-effect waves-block waves-light'><img class='activator' src='assets/images/"+portfolio.apps[i].screenshot+"'></div><div class='card-content blue-grey darken-2'><span class='card-title activator white-text'>"+portfolio.apps[i].name+"<i class='material-icons right'>more_vert</i></span><p class='white-text'>Technologies:</p>"+technoString+"</div><div class='card-action blue-grey darken-2'><a href='"+portfolio.apps[i].github+"'>Github</a><a class='right' href='"+portfolio.apps[i].heroku+"'>Web</a></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>"+portfolio.apps[i].name+"<i class='material-icons right'>close</i></span><p>"+portfolio.apps[i].description+"</p></div></div></div></div>");
      }
    }
    }
};

$(document).ready(function(){
	portfolio.displayCards();
});
