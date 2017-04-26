
$(document).ready(function(){
    
    // Project Constructor
    function Project(title, link, imgSrc, techTags){
    
        this.title = title;
        this.link = link;
        this.imgSrc = imgSrc;
        this.techTags = techTags;
    
    }
    
    // List of projects
    var projects = [
        new Project("Simon Game", "https://codepen.io/HeyItsFelipe/full/WjvxvG/", "images/SimonGame_800x400.jpg", ["Dojo", "Bootstrap", "JavaScript", "CSS", "HTML"]),
        new Project("Random Quotes", "https://codepen.io/HeyItsFelipe/full/EWYaaB/", "images/RandomQuotes_800x400.jpg", ["Twitter API", "jQuery", "Bootstrap", "JavaScript", "CSS", "HTML"]),
        new Project("Portfolio Project", "https://codepen.io/HeyItsFelipe/full/ygdZPg/", "images/PortfolioProject_800x400.jpg", ["Bootstrap", "CSS", "HTML"]),
//        new Project("Gandhi Tribute Page", "https://heyitsfelipe.github.io/GandhiTributePage/", "images/GandhiTribute_800x400.jpg", ["Dojo", "Bootstrap", "CSS", "HTML"]),
        new Project("Neighborhood Map", "https://heyitsfelipe.github.io/Neighborhood_Map/", "images/NeighborhoodMap_400x200.jpg", ["Google Maps API", "Wikipedia API", "Knockout", "AJAX", "jQuery", "JavaScript", "Bootstrap", "CSS", "HTML"]),
        new Project("IPND Notes", "https://first-project-1029.appspot.com/", "images/IPNDNotes_400x200.jpg", ["Google App Engine", "Python", "JavaScript", "CSS", "HTML"])
    
    ];
    
    // Populate projects to portfolio page
    for(var i = 0; i < projects.length; i++){
        var projectTagsString = projects[i].techTags.join(', ');
        $('.project-row-js').append('<div class="col-xs-12 col-sm-6 col-md-4 project-' + i + '-js"></div>');
        $('.project-' + i + '-js').append('<figure class="thumbnail project-thumbnail-css"><a href="' + projects[i].link + '" target="_blank"><img class="img-responsive" src="' + projects[i].imgSrc + '" alt="' + projects[i].title + ' project image"></a><figcaption class="caption"><h2 class="text-center text-uppercase">' + projects[i].title + '</h2><p><em class="text-justify project-tags-css">' + projectTagsString + '</em></p></figcaption></figure>');
        
    }
    
});

