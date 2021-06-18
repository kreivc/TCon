
var nowLocation = document.location;
var check1 = nowLocation.pathname.includes("home");
var check2 = nowLocation.pathname.includes("rating");

if(localStorage.getItem("userId") == null){
    if(check1 || check2){
        window.open("index.html", "_self");
    }
}
