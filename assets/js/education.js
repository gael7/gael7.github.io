var edu={
  intro1: "I graduated as a Mechatronic Engineer with an overall of 88.29 from Instituto Tecnológico de Nuevo Laredo.",
  intro2: "During my nine semester",
  
  displayIntro: function(){
    $("#eduIntrod").append("<h5 class='light'>"+edu.intro1+"</h5>");
    $("#eduIntrod").append("<h5 class='light'>"+edu.intro2+"</h5>");
  },
  displayEdu: function(){

  },
};
$(document).ready(function(){
  edu.displayIntro();
});
