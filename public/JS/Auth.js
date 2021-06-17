function LoginForm(){
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
        window.open('home.html?id='+res["userId"]);
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

function RegisterForm(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let password = document.getElementById("password").value;
    let repass = document.getElementById("re-password").value;
    
    if (password.localeCompare(repass) != 0){
        alert("Password did not match !");
        return false;
    }

    var data = JSON.stringify({
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "phoneNumber": phoneNumber,
        "password": password
    });
    console.log(data);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    
    xhr.open("POST", "https://tcon-api.herokuapp.com/auth/register", false);
    
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader("Access-Control-Allow-Credentials", true);

    xhr.send(data);
    res = JSON.parse(xhr.responseText)
    stat = res["status"];
    console.log(res)
    if(stat){
        window.open('home.html?id='+res["userId"]);
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