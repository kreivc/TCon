function LoginForm(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    var data = JSON.stringify({
        "email": email,
        "password": password
    });
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    
    xhr.open("GET", "https://tcon-api.herokuapp.com/auth/login", false);
    
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader("Access-Control-Allow-Credentials", true)

    xhr.send(data);
    res = JSON.parse(xhr.responseText)
    stat = res["status"];
    console.log(stat)
    if(stat){
        window.open('home.html?id='+res["userId"]);
        return true;
    }
    else{
        return false;
    }
}