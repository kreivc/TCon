
var username = localStorage.getItem("name");
document.getElementById("username").innerHTML = username.split(" ")[0]; 

function logout(){
    localStorage.clear();
}