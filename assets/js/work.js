var work={
  exp: [{
    position: "Logistics Sortation Associate",
    company: "Amazon",
    dates: "September 2016 - Present",
    location: "Austin, TX",
    responsabilities: [""],
    skills: ["Time Management"]
  },{
    position: "Instructor",
    company: "American Robotics Academy",
    dates: "September 2016 - December 2016",
    location: "Austin, TX",
    responsabilities: [""],
    skills: [""]
  },{
    position: "Department Manager",
    company: "Walmart",
    dates: "July 2015 - March 2016",
    location: "Laredo, TX",
    responsabilities: [""],
    skills: ["Customer Service", "Leadership", "Time Management", "Merchandising"]
  },{
    position: "Photo Sales Associate",
    company: "Walmart",
    dates: "June 2014 - July 2015",
    location: "Laredo, TX",
    responsabilities: [""],
    skills: ["Customer Service", "Leadership", "Time Management", "Merchandising"]
  },{
    position: "Photo Sales Associate",
    company: "Walmart",
    dates: "August 2012 - March 2014",
    location: "Laredo, TX",
    responsabilities: [""],
    skills: ["Customer Service", "Leadership", "Time Management", "Merchandising"]
  },{
    position: "Sales Associate",
    company: "Ueta Duty Free",
    dates: "November 2010 - January 2011",
    location: "Laredo, TX",
    responsabilities: [""],
    skills: ["Customer Service", "Time Management", "Merchandising"]
  }],
  displayWork: function(){
    for(var i=0; i<work.exp.length; i++){
      if(i%2===0){
        $("#workExperience").append("<div class='row' id='work"+i+"'><div class='col s12 m6'><div class='card blue-grey darken-2'><div class='card-content white-text'><span class='card-title'>"+work.exp[i].position+"</span><ul style='font-style:italic; font-size:18px'>"+work.exp[i].company+"</ul><ul style='font-style:italic;'>"+work.exp[i].dates+"</ul><li>"+work.exp[i].responsabilities+"</li></div><div class='card-action white-text'><p>"+work.exp[i].location+"</p></div></div></div></div>");
        $("#work"+i).append("<div class='col s12 m6' id='skills"+i+"'><h5 class='center'>Skills</h5></div>");
        for(var c=0; c<work.exp[i].skills.length; c++){
        $("#skills"+i).append("<div class='chip'>"+work.exp[i].skills[c]+"</div>");
      }
    } else {
        $("#workExperience").append("<div class='row' id='work"+i+"'><div class='col s12 m6 right'><div class='card blue-grey darken-2'><div class='card-content white-text'><span class='card-title'>"+work.exp[i].position+"</span><ul style='font-style:italic; font-size:18px'>"+work.exp[i].company+"</ul><ul style='font-style:italic;'>"+work.exp[i].dates+"</ul><li>"+work.exp[i].responsabilities+"</li></div><div class='card-action white-text'><p>"+work.exp[i].location+"</p></div></div></div></div>");
        $("#work"+i).append("<div class='col s12 m6' id='skills"+i+"'><h5 class='center'>Skills</h5></div>");
        for(var a=0; a<work.exp[i].skills.length; a++){
        $("#skills"+i).append("<div class='chip'>"+work.exp[i].skills[a]+"</div>");
      }
      }
    }
  }
};

$(document).ready(function(){
  work.displayWork();
});
