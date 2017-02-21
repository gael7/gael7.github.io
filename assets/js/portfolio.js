var portfolio={
  apps: [{
    name: "Week-3-Game",
    description: "This is a Pokémon hangman game with 4 of your favorite Pokémon from the first generation. The game will start after your click on the play button and the hyphens for the letters of your Pokémon will be display. If you need a little help to guess the answer you can click on the hint button that will display a shadow of the Pokémon. After you guess the name you will see you Pokémon.",
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript"],
    github: "https://github.com/gael7/week-3-game",
    heroku: "https://agile-dusk-11372.herokuapp.com",
    screenshot: "week-3-gameSC.png"
  },{
    name: "Week-4-Game",
    description: "This app is a Star Wars RPG game where you can select from 4 different characters from the movies that are Obi-Wan Kenobi, Luke Skywalker, Darth Sidious and Darth Maul. After selecting your character for the battle, the other 3 characters are gonna be shown as your enemies available to battle where you can select one at time and fight them until your current enemy or your character reaches 0 health points. Your attack will increase every time yo attack your opponent and your enemy will counterattack you. If you defeat your enemy you can continue with the next one.",
    technologies: ["HTML", "CSS", "Bootstrap","Javascript", "jQuery"],
    github: "https://github.com/gael7/week-4-game",
    heroku: "https://lit-reef-63837.herokuapp.com",
    screenshot: "week-4-gameSC.png"
  },{
    name: "TriviaGame",
    description: "This is a How I Met Your Mother Trivia with simple questions of the first season of the show. The trivia consists of 10 questions and you will have just 10 seconds per question to select the correct answer out of 4 options. After each question you will see a related picture and the correct answer if you get it wrong or you didn’t answer before the next question. When you are done with the 10 questions you will see the results of the trivia.",
    technologies: ["HTML", "CSS", "Bootstrap","Javascript", "jQuery"],
    github: "https://github.com/gael7/TriviaGame",
    heroku: "https://warm-spire-92229.herokuapp.com",
    screenshot: "triviagameSC.png"
  },{
    name: "Giphy-api",
    description: "This app uses the Giphy API to get gifs about preselect cities of Europe like Manchester, London, Madrid, Rome, Berlin and with the option to add more cities. In order to add another city you need to specify the country to do a better query to look for appropriate gifs from the city.  After you click the button of the city you will see 10 random gifs found that contain the name of the city and the country. If you click on a gif it will start playing and if you click again it will stop.",
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "jQuery", "Giphy-API"],
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
    }
    return techno;
  },
  displayCards: function() {
    for (i=0; i<portfolio.apps.length; i++){
      var technoString=portfolio.technoLoop(i);
      if(i%2===0){
        $("#portSec").append("<div class='row' id='row"+i+"'><div class='col s12 m6'><div class='card sticky-action'><div class='card-image waves-effect waves-block waves-light'><img class='activator' src='assets/images/"+portfolio.apps[i].screenshot+"'></div><div class='card-content blue-grey darken-2'><span class='card-title activator white-text'>"+portfolio.apps[i].name+"<i class='material-icons right'>more_vert</i></span><p class='white-text'>Technologies:</p>"+technoString+"</div><div class='card-action blue-grey darken-2'><a href='"+portfolio.apps[i].github+"'>Github</a><a class='right' href='"+portfolio.apps[i].heroku+"'>Web</a></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>"+portfolio.apps[i].name+"<i class='material-icons right'>close</i></span><p>"+portfolio.apps[i].description+"</p></div></div></div></div>");
      } else {
        $("#row"+(i-1)).append("<div class='col s12 m6'><div class='card sticky-action'><div class='card-image waves-effect waves-block waves-light'><img class='activator' src='assets/images/"+portfolio.apps[i].screenshot+"'></div><div class='card-content blue-grey darken-2'><span class='card-title activator white-text'>"+portfolio.apps[i].name+"<i class='material-icons right'>more_vert</i></span><p class='white-text'>Technologies:</p>"+technoString+"</div><div class='card-action blue-grey darken-2'><a href='"+portfolio.apps[i].github+"'>Github</a><a class='right' href='"+portfolio.apps[i].heroku+"'>Web</a></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>"+portfolio.apps[i].name+"<i class='material-icons right'>close</i></span><p>"+portfolio.apps[i].description+"</p></div></div></div>");
      }
    }
    }
};

$(document).ready(function(){
	portfolio.displayCards();
});
