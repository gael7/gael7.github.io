var projects={
  intro: "I have currently work in 3 major projects during my 24 week Coding Boot Camp where the first 2 I was part of awesome teams and the last one I decided to work on my own.",
  proj: [{
    name: "Austin City Incident Map",
    role: "Team Project",
    year: "2016",
    descriptions:
    ["An application created by a team of three developers that display on an Austin map different amounts and types of incidents that had happen since February 2015.",
    "Served as a Back-end developer to manage the Google Maps API.",
    "Starting with displaying a Google Map on the app and setting the limits to the Austin area and restricting the zoom on the map. After receiving data from the incidents, it geocodes the address and plots markers on the map that will display an info window with the incident number, date, address and time."],
    technologies: ["HTML", "CSS", "Google Maps API", "Austin OpenCity Data API", "SweetAlerts", "jQuery", "Google Firebase", "Bootstrap"],
    github: "https://github.com/gael7/Austin-Incident-Map",
    heroku: "https://tranquil-cliffs-78311.herokuapp.com",
    screenshot: "austin.png"
  },{
    name: "Cheevr",
    role: "Team Project",
    year: "2016",
    descriptions:
    ["An application created by a team of three developers that utilizes Alexa’s voice recognition to provide a different way to learn after creating your own quizzes online and then let your Alexa device test you on it.",
    "Served as a Front-end developer to manage the forms to create your own quiz and to display the quizzes you have created before.",
    "Utilized Materialize for the design and jQuery to create dynamically the forms to create the quiz with a minimum of three question that could be multiple choice or true and false. Including an add button to create a new question. After your quiz is finish, it’s post on our database and the page is redirected to your quizzes that you have created before present it to you in cards from Materialize."
    ],
    technologies: ["HTML", "CSS", "Materialize", "jQuery", "NodeJs", "Express", "MySQL", "Sequelize", "Passport"],
    github: "https://github.com/gael7/Cheevr",
    heroku: "https://alexaquiz.heroku.com",
    screenshot: "cheevr.png"
  },{
    name: "Antique",
    role: "Personal Project",
    year: "2017",
    descriptions:
    ["An application created for the management of a coffee shop with a cash register, management and kitchen view.",
    "Served as a Full-Stack developer.",
    "Utilized Bootstrap for the design of the app with NodeJs on the back-end for the server with Express and Handlebars. The database used was MongoDB using Moongose with three schemas for products, receipts and users. Using jQuery for the logic of the app that allow us to add products to the database, and see them on the cash register, and on a table for management of all the products, create receipts with multiple products, leave open tabs, and display orders to be prepare on the kitchen to mention some of the features.",
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "jQuery", "NodeJs", "Express", "MongoDB", "Moongose", "BcryptJS"],
    github: "https://github.com/gael7/antique",
    heroku: "https://antiquenl.herokuapp.com",
    screenshot: "antique.png"
  }],
  displayIntro: function(){
    $("#projIntro").append("<h5 class='light' style='text-align:justify; text-indent:50px'>"+projects.intro+"</h5>");
  },
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
        $("#projSec").append("<div class='row' id='row"+i+"'><div class='col s12 m6'><div class='card sticky-action'><div class='card-image waves-effect waves-block waves-light'><img class='activator' src='assets/images/"+projects.proj[i].screenshot+"'></div><div class='card-content blue-grey darken-2'><span class='card-title activator white-text'>"+projects.proj[i].name+"<i class='material-icons right'>more_vert</i></span><p class='white-text'>Technologies:</p>"+technoString+"</div><div class='card-action blue-grey darken-2'><a href='"+projects.proj[i].github+"'>Github</a><a class='right' href='"+projects.proj[i].heroku+"'>Web</a></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>"+projects.proj[i].name+"<i class='material-icons right'>close</i></span><ul class='browser-default' id='description"+i+"'></ul></div></div></div></div>");
        for (a=0; a<projects.proj[i].descriptions.length; a++){
        $("#description"+i).append("<li>"+projects.proj[i].descriptions[a]+"</li>");
      }
      } else {
        $("#row"+(i-1)).append("<div class='col s12 m6 right'><div class='card sticky-action'><div class='card-image waves-effect waves-block waves-light'><img class='activator' src='assets/images/"+projects.proj[i].screenshot+"'></div><div class='card-content blue-grey darken-2'><span class='card-title activator white-text'>"+projects.proj[i].name+"<i class='material-icons right'>more_vert</i></span><p class='white-text'>Technologies:</p>"+technoString+"</div><div class='card-action blue-grey darken-2'><a href='"+projects.proj[i].github+"'>Github</a><a class='right' href='"+projects.proj[i].heroku+"'>Web</a></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>"+projects.proj[i].name+"<i class='material-icons right'>close</i></span><ul class='browser-default' id='description"+i+"'></ul></div></div></div>");
        for (a=0; a<projects.proj[i].descriptions.length; a++){
        $("#description"+i).append("<li>"+projects.proj[i].descriptions[a]+"</li>");
      }
      }
    }
    }
};

$(document).ready(function(){
  projects.displayIntro();
	projects.displayCards();
});
