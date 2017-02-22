var index={
  aboutMe1:"I’m a full stack developer apprentice born in Nuevo Laredo, Mexico now living a life changing experience at  Austin, TX. After 3 years working on retail jobs while studying and after finish my degree I realized that I was not where I want it to be so I decided to change the path I was going.",
  aboutMe2:"I may not have the experience working as a developer yet but I definitely have the passion that it needs to continue learning every single day. At school and my job I show determination on what I do, and work hard enough to accomplish what it needs to be done. Even though I consider myself to be an introvert I’m not afraid to be the leader of the team. Another strengths are time management, strategic mind and working under pressure.",
  aboutMePic: "assets/images/me.jpg",
  quote: ["If you're really honest with yourself about what you want out of life, life gives it to you.", "-Ted Mosby"],
  quote2: ["Education never ends, Watson. It is a series of lessons, with the greatest for the last.", "-Arthur Conan Doyle"],
  iconInfo: [
    {
    icon: "code",
    title: "Code into Something Awesome!",
    info: "How lines of code can build something out of nothing, amaze me. Full stack development makes me challenge myself to create something beautiful to the eye and at the same time using my logical thinking to solve problems.",
    },{
    icon: "assignment",
    title: "Won't Stop Learning!",
    info: "There is a lot of information to learn on web development and everything change day to day. What I’m learning today might not be the same the next week and that keeps me going forward. I enjoy this opportunity of not stop learning, gaining new skills and challenging myself.",
  },{
    icon: "language",
    title: "Going Remote!",
    info: "The chance to work remote is one of the reasons for me to love web development even if it just for a day or a full-time remote job. This is something I would like to accomplish at a medium term after a lot of learning to be able to dedicate myself to my other passions and travel the world.",
  }],
  displayAbout: function(){
    $("#aboutMe").append("<h4>About Me</h4>");
    $("#aboutMe").append("<div class='col s6'><h6 class='light' style='text-align:justify; text-indent:30px'>"+index.aboutMe1+"</h6><br><h6 class='light' style='text-align:justify; text-indent:30px'>"+index.aboutMe2+"</h6></div>");
    $("#aboutMe").append("<div class='col s6'><img src='"+index.aboutMePic+"'></div>");
  },
  displayIconSection: function(){
    for (i=0; i<index.iconInfo.length; i++){
    $("#iconSection").append("<div class='col s12 m4'><div class='icon-block'><h2 class='center blue-grey-text text-darken-2'><i class='material-icons'>"+index.iconInfo[i].icon+"</i></h2><h5 class='center'>"+index.iconInfo[i].title+"</h5><p class='light'>"+index.iconInfo[i].info+"</p></div></div>");
    }
  },
  displayQuote:function(){
    $("#quote").append('<h4 class="header center col s12 light">"'+index.quote[0]+'"</h4><h5 class="right">'+index.quote[1]+'</h5>');
  },
  displayQuote2: function(){
      $("#quote2").append('<h4 class="header center col s12 light">"'+index.quote2[0]+'"</h4><h5 class="right">'+index.quote2[1]+'</h5>');
  },
};

$(document).ready(function(){
  index.displayAbout();
  index.displayIconSection();
  index.displayQuote();
  index.displayQuote2();
});
