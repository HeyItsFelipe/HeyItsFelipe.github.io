
$(document).ready(function(){
    
    // Project Constructor
    function Project(title, link, imgSrc){
    
        this.title = title;
        this.link = link;
        this.imgSrc = imgSrc;
    
    }
    
    // List of projects
    var projects = [
        new Project("Neighborhood Map", "https://heyitsfelipe.github.io/Neighborhood_Map/", "images/project2_400x200.jpg"),
        new Project("IPND Notes", "https://first-project-1029.appspot.com/", "images/project1_400x200.jpg")
    
    ];
    
    // Populate projects to portfolio page
    for(var i = 0; i < projects.length; i++){
        $('.project-row-js').append('<div class="col-xs-12 col-sm-6 col-md-4 project-' + i + '-js"></div>');
        $('.project-' + i + '-js').append('<figure class="thumbnail project-thumbnail-height project-thumbnail-padding"><a href=' + projects[i].link + ' target="_blank"><img class="img-responsive project-img-center" src=' + projects[i].imgSrc + ' alt="Project 1 image"></a><figcaption class="caption"><h2 class="text-center text-uppercase project-title-margin project-title-style">' + projects[i].title + '</h2><p class="text-justify project-text-margin project-text-style">These are my notes from Udacity Intro to Programming Nanodegree program and my first website attempt.</p></figcaption></figure>');
        
    }
    
});
