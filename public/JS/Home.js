
var username = localStorage.getItem("name");
document.getElementById("username").innerHTML = username.split(" ")[0]; 

function logout(){
    localStorage.clear();
}

$('#search').click(function() { 
    document.location = 'searching.html';
} );


function goToSearch(){
    window.open("searching.html", "_self")
}
