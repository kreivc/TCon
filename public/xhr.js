const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const testPost = () => {
    var data = JSON.stringify({
        email: email,
        password: password
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
        }else{
            console.log("Login Error");
        }
    });

    xhr.open("GET", "http://localhost:5000/auth/login?=");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
}