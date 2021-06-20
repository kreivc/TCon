
var username = localStorage.getItem("name");
document.getElementById("username").innerHTML = username.split(" ")[0]; 

function logout(){
    localStorage.clear();
}

$('#search').click(function() { 
    document.location = 'searching.html';
} );


function swapToSwarch(){
    var search = document.getElementById("searchz")
    var carousel = document.getElementById("carouselz")

    if(document.getElementById("keyword") !== document.activeElement){
        search.classList.remove("show")
        search.classList.add("none")
        carousel.classList.remove("none")
        carousel.classList.add("show")
    }else{
        carousel.classList.remove("show")
        carousel.classList.add("none")
        search.classList.remove("none")
        search.classList.add("show")
    }
}
