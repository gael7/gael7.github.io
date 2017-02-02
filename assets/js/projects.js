var projects={
  proj: [{
    name: "Austin City Incident Map",
    role: "Team Project",
    year: "2016",
    description: "Displaying on an Austin map different amounts and types of incidents that had happen since February 2015.",
    technologies: ["HTML", "CSS", "Google Maps API", "Austin OpenCity Data API", "SweetAlerts", "jQuery", "Google Firebase", "Bootstrap"],
    github: "https://github.com/gael7/Austin-Incident-Map",
    heroku: "https://tranquil-cliffs-78311.herokuapp.com",
    screenshot: "austin.png"
  },{
    name: "Cheevr",
    role: "Team Project",
    year: "2016",
    description: "Cheevr utilizes Alexa's voice recognition to quizz us on content create it on our app.",
    technologies: ["HTML", "CSS", "Materialize", "jQuery", "NodeJs", "Express", "MySQL", "Sequelize", "Passport"],
    github: "https://github.com/gael7/Cheevr",
    heroku: "https://alexaquiz.heroku.com",
    screenshot: "cheevr.png"
  },{
    name: "Antique",
    role: "Personal Project",
    year: "2017",
    description: "This app makes the management of a coffee shop easier using it as a register, manage the products and receipts.",
    technologies: ["HTML", "CSS", "Bootstrap", "jQuery", "NodeJs", "Express", "MongoDB", "Moongose", "BcryptJS"],
    github: "https://github.com/gael7/antique",
    heroku: "https://antiquenl.herokuapp.com",
    screenshot: "antique.png"
  }],
  technoLoop: function(app){
    var techno="";
    for (e=0; e<projects.proj[app].technologies.length; e++){
      techno+="<div class='chip'>"+projects.proj[app].technologies[e]+"</div>";
    }
    return techno;
  },
  displayCards: function() {
    for (i=0; i<projects.proj.length; i++){
      var technoString=projects.technoLoop(i);
      if(i%2===0){
        $("#projSec").append("<div class='row'><div class='col s12 m6'><div class='card sticky-action'><div class='card-image waves-effect waves-block waves-light'><img class='activator' src='assets/images/"+projects.proj[i].screenshot+"'></div><div class='card-content blue-grey darken-2'><span class='card-title activator white-text'>"+projects.proj[i].name+"<i class='material-icons right'>more_vert</i></span><p class='white-text'>Technologies:</p>"+technoString+"</div><div class='card-action blue-grey darken-2'><a href='"+projects.proj[i].github+"'>Github</a><a class='right' href='"+projects.proj[i].heroku+"'>Web</a></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>"+projects.proj[i].name+"<i class='material-icons right'>close</i></span><p>"+projects.proj[i].description+"</p></div></div></div></div>");
      } else {
        $("#projSec").append("<div class='row'><div class='col s12 m6 right'><div class='card sticky-action'><div class='card-image waves-effect waves-block waves-light'><img class='activator' src='assets/images/"+projects.proj[i].screenshot+"'></div><div class='card-content blue-grey darken-2'><span class='card-title activator white-text'>"+projects.proj[i].name+"<i class='material-icons right'>more_vert</i></span><p class='white-text'>Technologies:</p>"+technoString+"</div><div class='card-action blue-grey darken-2'><a href='"+projects.proj[i].github+"'>Github</a><a class='right' href='"+projects.proj[i].heroku+"'>Web</a></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>"+projects.proj[i].name+"<i class='material-icons right'>close</i></span><p>"+projects.proj[i].description+"</p></div></div></div></div>");
      }
    }
    }
};

$(document).ready(function(){
	projects.displayCards();
});
