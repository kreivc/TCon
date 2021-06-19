var userId = document.location.search.split("=")[1]
console.log(userId);


var data = JSON.stringify({
    "userId": userId
});
console.log(data);
var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.open("POST", "https://tcon-api.herokuapp.com/consultant/details", false);

xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.setRequestHeader("Access-Control-Allow-Credentials", true)

xhr.send(data);
res = JSON.parse(xhr.responseText)
stat = res["status"];
console.log(res)
if(stat){
    var biodata = document.getElementById("bio");
    console.log(res.details.bio)
    biodata.innerHTML= res.details.bio;
}
