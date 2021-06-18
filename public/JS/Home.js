
document.getElementById("username").innerHTML = "Kevin"; 
console.log(localStorage.getItem("name") + "test");
function logout(){
    localStorage.clear();
}