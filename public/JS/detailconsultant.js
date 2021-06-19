var userId = document.location.search.split("=")[1]
console.log(userId);


const dataConsult = document.querySelector(".slider");
const Http = new XMLHttpRequest();
const url='https://tcon-api.herokuapp.com/consultant/getall';
Http.open('GET', url);
Http.send();
Http.onreadystatechange = () => {
    if (Http.readyState == 4 && Http.status == 200) {
        var consultData = JSON.parse(Http.responseText);
        let temp= "";
        for (var i = 0; i < consultData.consultants.length; i++) {
            if(consultData.consultants[i].userId == userId){
                document.getElementById("name").innerHTML = consultData.consultants[i].name;
                break;
            }
        }
    }
}


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
console.log(res)

var biodata = document.getElementById("bio");
var experience = document.getElementById("experience");
var honor = document.getElementById("honor");
var education = document.getElementById("education");
var rating = document.getElementById("rating");
biodata.innerHTML= res.details.bio;
education.innerHTML= res.details.education;
experience.innerHTML= res.details.experience;
honor.innerHTML= res.details.honor;
rating.innerHTML= res.details.rating;


document.getElementById("payment-reference").href = "payment.html?targetId="+userId

