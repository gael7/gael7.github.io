var work={
  intro: "I mostly have experience on retail where I gain different skills like customer service, merchandising and leadership. During 6 months I work as a tutor for kids to build robot with Lego educational kits and was a very interesting experience.",
  exp: [{
    position: "Logistics Sortation Associate",
    company: "Amazon",
    dates: "September 2016 - Present",
    location: "Austin, TX",
    responsabilities: ["Scan an average of 16,000 packages arriving to the warehouse before sort them.",
    "Sort and scan around 1,0000 packages by route and fit them into the designated square bag.",
    "Load 3 vans with their designated bags and oversize packages."],
    skills: ["Time Management"]
  },{
    position: "Instructor",
    company: "American Robotics Academy",
    dates: "September 2016 - December 2016",
    location: "Austin, TX",
    responsabilities: ["Create an interesting environment for 6-12 kids to learn build robots with Lego educational kits.",
    "Help 2 to 3 groups of kids build the entire robot for the day in less than 45 minutes.",
    "Develop a 10 minutes activity where the robot can be used."],
    skills: ["Time Management"]
  },{
    position: "Department Manager",
    company: "Walmart",
    dates: "July 2015 - March 2016",
    location: "Laredo, TX",
    responsabilities: ["Manage 3 different departments: Beer & Wine, Impulse Merchandise and Tobacco & Candy.",
    "Reduce from 30+ products out of stocks at the shelf to less than 5 on each department.",
    "Perform an average of 50 prince changes weekly on each department."],
    skills: ["Customer Service", "Leadership", "Time Management", "Merchandising"]
  },{
    position: "Photo Sales Associate",
    company: "Walmart",
    dates: "June 2014 - July 2015",
    location: "Laredo, TX",
    responsabilities: ["Operate photo processing equipment and maintain them clean and their resources above 25%.",
    "Provide friendly customer service to 8+ people during the operation of the digital photo kiosks.",
    "Assemble around 10 different specialty items daily like calendars, photo canvas, etc."],
    skills: ["Customer Service", "Leadership", "Time Management", "Merchandising"]
  },{
    position: "Photo Sales Associate",
    company: "Walmart",
    dates: "August 2012 - March 2014",
    location: "Laredo, TX",
    responsabilities: ["Operate photo processing equipment and maintain them clean and their resources above 25%.",
    "Provide friendly customer service to 8+ people during the operation of the digital photo kiosks.",
    "Assemble around 10 different specialty items daily like calendars, photo canvas, etc."],
    skills: ["Customer Service", "Leadership", "Time Management", "Merchandising"]
  },{
    position: "Sales Associate",
    company: "Ueta Duty Free",
    dates: "November 2010 - January 2011",
    location: "Laredo, TX",
    responsabilities: ["Provide excellent customer service and communicate 5+ available promotions.",
    "Inform customers about our 10+ exclusive products.",
    "Verify that 100% of the alcohol and tobacco merchandise goes to Mexico."],
    skills: ["Customer Service", "Time Management", "Merchandising"]
  }],
  displayIntro: function(){
    $("#workIntro").append("<h5 class='light' style='text-align:justify; text-indent:50px'>"+work.intro+"</h5>");
  },
  displayWork: function(){
    for(var i=0; i<work.exp.length; i++){
      if(i%2===0){
        $("#workExperience").append("<div class='row' id='work"+i+"'><div class='col s12 m6'><div class='card blue-grey darken-2'><div class='card-content white-text'><span class='card-title'>"+work.exp[i].position+"</span><ul style='font-style:italic; font-size:18px'>"+work.exp[i].company+"</ul><ul style='font-style:italic;'>"+work.exp[i].dates+"</ul></div><div class='card-action white-text'><p>"+work.exp[i].location+"</p></div></div></div></div>");
        $("#work"+i).append("<div class='col s12 m6' id='skills"+i+"'><h5 class='center'>Skills</h5></div>");
        for(a=0; a<work.exp[i].skills.length; a++){
        $("#skills"+i).append("<div class='chip'>"+work.exp[i].skills[a]+"</div>");
      }
        for(b=0; b<work.exp[i].responsabilities.length; b++){
          $("#skills"+i).append("<br><li>"+work.exp[i].responsabilities[b]+"</li>");
        }

    } else {
        $("#workExperience").append("<div class='row' id='work"+i+"'><div class='col s12 m6 right'><div class='card blue-grey darken-2'><div class='card-content white-text'><span class='card-title'>"+work.exp[i].position+"</span><ul style='font-style:italic; font-size:18px'>"+work.exp[i].company+"</ul><ul style='font-style:italic;'>"+work.exp[i].dates+"</ul></div><div class='card-action white-text'><p>"+work.exp[i].location+"</p></div></div></div></div>");
        $("#work"+i).append("<div class='col s12 m6' id='skills"+i+"'><h5 class='center'>Skills</h5></div>");
        for(a=0; a<work.exp[i].skills.length; a++){
        $("#skills"+i).append("<div class='chip'>"+work.exp[i].skills[a]+"</div>");
      }
      for(b=0; b<work.exp[i].responsabilities.length; b++){
        $("#skills"+i).append("<br><li>"+work.exp[i].responsabilities[b]+"</li>");
      }
      }
    }
  }
};

$(document).ready(function(){
  work.displayIntro();
  work.displayWork();
});
