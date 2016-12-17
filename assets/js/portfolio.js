var portfolio={
  apps: [{
    name: "Week-3-Game",
    description: "A Pokemon hangman game using HTML, CSS, Bootstrap and Javascript.",
    github: "https://github.com/gael7/week-3-game",
    heroku: "https://agile-dusk-11372.herokuapp.com"
  },{
    name: "Week-4-Game",
    description: "A Star Wars RPG game using HTML, CSS, Bootstrap and jQuery.",
    github: "https://github.com/gael7/week-4-game",
    heroku: "https://lit-reef-63837.herokuapp.com"
  },{
    name: "TriviaGame",
    description: "A How I Met your Mother trivia using HTML, CSS, Boostrap, jQuery, and using timers.",
    github: "https://github.com/gael7/TriviaGame",
    heroku: "https://warm-spire-92229.herokuapp.com"
  },{
    name: "Giphy-api",
    description: "A webpage that lets you see gifs about some cities in Europe using the Giphy API, HTML, CSS, Bootstrap and jQuery.",
    github: "https://github.com/gael7/giphy-api",
    heroku: "https://guarded-shelf-67200.herokuapp.com"
  },{
    name: "News-scrape",
    description: "An app that scrape news from the Real Madrid webpage and let you add comments, using HTML, CSS, Node.js, jQuery, and MongoDB.",
    github: "https://github.com/gael7/news-scrape",
    heroku: "https://lit-mesa-52894.herokuapp.com"
  }],
  numbers: ["one!", "two!", "three!", "four!", "five!"],
  carouselPort: function() {
    console.log("carouselPort");
    $("#carouselPort").append("<div class='carousel carousel-slider center' data-indicators='true'>");

    for (i=0; i<portfolio.apps.length; i++){
    $(".carousel").append("<div class='carousel-item red white-text' href='#"+portfolio.numbers[i]+"'><h2>"+portfolio.apps[i].name+"</h2><p class='white-text'>"+portfolio.apps[i].description+"</p>");
    $(".carousel-item").append("<div class='carousel-fixed-item center'><a class='btn waves-effect white grey-text darken-text-2' href='"+portfolio.apps[i].github+"'>Github</a><a class='btn waves-effect white grey-text darken-text-2' href='"+portfolio.apps[i].heroku+"'>Web</a></div>");
    }
  }
};

$(document).ready(function(){

	portfolio.carouselPort();
  $('.carousel.carousel-slider').carousel({full_width: true});
});