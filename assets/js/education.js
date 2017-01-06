var edu={
  intro1: " I currently study at The Coding Bootcamp at UT Austin to become a Full Stack Developer. On 2014 I graduated as a Mechatronic Engineer with an overall of 88.29 from Instituto Tecnológico de Nuevo Laredo.",
  intro2: " During my nine semesters at university I had the chance to be involve in other activities outside the classroom. I participated on 3 national robotics contests called “Torneo Mexicano de Robótica” on different cities around Mexico. I was elected president from the Mechatronic Engineer Committee to impulse the career and the organization of the annual symposium.",
  his:[{
    name: "The University of Texas at Austin",
    degree: "The Coding Boot Camp at UT Austin",
    field: "Full Stack Flex Program",
    date: "Jul 2016 - Feb 2017",
    awards: ""
  },{
    name: "Instituto Tecnológico de Nuevo Laredo",
    degree: "Mechatronic Engineer",
    title: "",
    date: "Aug 2010 - Dec 2014",
    awards: "",
  }
  ],
  displayIntro: function(){
    $("#eduIntrod").append("<h5 class='light' style='text-align:justify; text-indent:50px'>"+edu.intro1+"</h5>");
    $("#eduIntrod").append("<h5 class='light' style='text-align:justify; text-indent:50px'>"+edu.intro2+"</h5>");
  },
  displayEdu: function(){
    for (i=0; i<edu.his.length; i++){
      if (i%2===0){
    $("#eduHistory").append("<div class='row'><div class='col s12 m6'><div class='card blue-grey darken-2'><div class='card-content white-text'><div class='col s2'><img src='assets/images/ut.jpg' alt='' class='circle responsive-img'></div><span class='card-title'>"+edu.his[i].name+"</span><ul style='font-style:italic; font-size:18px'>"+edu.his[i].degree+", "+edu.his[i].field+"</ul><ul style='font-style:italic;'>"+edu.his[i].date+"</ul><li>"+edu.his[i].awards+"</li></div><div class='card-action white-text'><p>"+"</p></div></div></div></div>");
  } else {
    $("#eduHistory").append("<div class='row'><div class='col s12 m6 right'><div class='card blue-grey darken-2'><div class='card-content white-text'><span class='card-title'>"+edu.his[i].name+"</span><ul style='font-style:italic; font-size:18px'>"+edu.his[i].degree+", "+edu.his[i].field+"</ul><ul style='font-style:italic;'>"+edu.his[i].date+"</ul><li>"+edu.his[i].awards+"</li></div><div class='card-action white-text'><p>"+"</p></div></div></div></div>");
  }
  }
  },
};
$(document).ready(function(){
  edu.displayIntro();
  edu.displayEdu();
});
