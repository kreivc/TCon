
var nowLocation = document.location;
var check1 = nowLocation.pathname.includes("login");
var check2 = nowLocation.pathname.includes("register");

if(localStorage.getItem("userId") != null){
    if(check1 || check2){
        window.open("home.html", "_self");
    }
}
