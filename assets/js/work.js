var work={
  exp: [{
    position: "Logistics Sortation Associate",
    company: "Amazon",
    dates: "September 2016 - Present",
    location: "Austin, TX",
    responsabilities: [""],
  },{
    position: "Instructor",
    company: "American Robotics Academy",
    dates: "September 2016 - December 2016",
    location: "Austin, TX",
    responsabilities: [""]
  },{
    position: "Department Manager",
    company: "Walmart",
    dates: "July 2015 - March 2016",
    location: "Laredo, TX",
    responsabilities: [""]
  },{
    position: "Photo Sales Associate",
    company: "Walmart",
    dates: "June 2014 - July 2015",
    location: "Laredo, TX",
    responsabilities: [""]
  },{
    position: "Photo Sales Associate",
    company: "Walmart",
    dates: "August 2012 - March 2014",
    location: "Laredo, TX",
    responsabilities: [""]
  },{
    position: "Sales Associate",
    company: "Ueta Duty Free",
    dates: "November 2010 - January 2011",
    location: "Laredo, TX",
    responsabilities: [""]
  }],
  displayWork: function(){
    for(var i=work.exp.length-1; i>=0; i--){
      if(i%2===0){
        $("#workExperience").prepend("<div class='row'><div class='col s12 m6'><div class='card blue-grey darken-2'><div class='card-content white-text'><span class='card-title'>"+work.exp[i].position+"</span><ul style='font-style:italic; font-size:18px'>"+work.exp[i].company+"</ul><ul style='font-style:italic;'>"+work.exp[i].dates+"</ul><li>"+work.exp[i].responsabilities+"</li></div><div class='card-action white-text'><p>"+work.exp[i].location+"</p></div></div></div></div>");
    } else {
        $("#workExperience").prepend("<div class='row'><div class='col s12 m6 right'><div class='card blue-grey darken-2'><div class='card-content white-text'><span class='card-title'>"+work.exp[i].position+"</span><ul style='font-style:italic; font-size:18px'>"+work.exp[i].company+"</ul><ul style='font-style:italic;'>"+work.exp[i].dates+"</ul><li>"+work.exp[i].responsabilities+"</li></div><div class='card-action white-text'><p>"+work.exp[i].location+"</p></div></div></div></div>");
      }
    }
  }
};

$(document).ready(function(){
  work.displayWork();
});
