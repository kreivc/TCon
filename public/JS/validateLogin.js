
function validateLogin(){

    var thisEmail = document.getElementById("email").value
    var thisPassword = document.getElementById("password").value

    if(thisEmail == ""){
        alert("email must be filled");
        return false;
    }else if(!thisEmail.includes("@") && !thisEmail.includes(".")){
        alert("email must be filled with Email Format!");
        return false;
    }else if(thisPassword == ""){
        alert("password must be filled");
        return false;
    }else if(thisPassword.length < 3){
        alert("password length must minimum 3 characters");
        return false;
    }

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    var data = JSON.stringify({
        "email": email,
        "password": password
    });
    console.log(data);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    
    xhr.open("POST", "https://tcon-api.herokuapp.com/auth/login", false);
    
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader("Access-Control-Allow-Credentials", true)

    xhr.send(data);
    res = JSON.parse(xhr.responseText)
    stat = res["status"];
    console.log(res)
    if(stat){
        window.localStorage.removeItem('userId');
        window.localStorage.setItem('userId', res["userId"]);
        window.localStorage.setItem('email', res["email"]);
        window.localStorage.setItem('isConsultant', res["isConsultant"]);
        window.localStorage.setItem('name', res["name"]);
        window.localStorage.setItem('phone', res["phone"]);
        window.localStorage.setItem('password',password);

        window.open('home.html?id='+res["userId"], "_self");
        return true;
    }
    else{
        if (res["message"].localeCompare("Failed to Fetch JSON Payload") == 0){
            alert("Invalid Username / Password!");
        }
        else{
            alert(res["message"]);
        }
        return false;
    }
}