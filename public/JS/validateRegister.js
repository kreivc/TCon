
function validateRegister(){

    var thisFname = document.getElementById("firstName").value
    var thisLname = document.getElementById("lastName").value
    var thisEmail = document.getElementById("email").value
    var thisPhone = document.getElementById("phoneNumber").value
    var thisPassword = document.getElementById("password").value
    var thisRePassword = document.getElementById("re-password").value
    var agreeTerms = document.getElementById("agreeterms")

    if(thisFname == ""){
        alert("First Name must be filled");
        return false;
    }else if(!isAlphabet(thisFname)){
        alert("Name must be filled with alphabet");
        return false;
    }else if(thisLname == ""){
        alert("Last Name must be filled");
        return false;
    }else if(!isAlphabet(thisLname)){
        alert("Name must be filled with alphabet");
        return false;
    }else if(thisEmail == ""){
        alert("email must be filled");
        return false;
    }else if(!thisEmail.includes("@") && !thisEmail.includes(".")){
        alert("email format must ends with @gmail.com or @yahoo.com");
        return false;
    }else if (thisPhone == ""){
        alert("Phone Number must be filled");
        return false;
    }else if(isNaN(thisPhone)){
        alert("Phone Number must be Numeric");
        return false;
    }else if(thisPassword.value == ""){
        alert("password must be filled");
        return false;
    }else if(thisPassword.length < 3){
        alert("password length must minimum 3 characters");
        return false;
    }else if(thisRePassword == ""){
        alert("confirm password must be filled");
        return false;
    }else if(thisPassword != thisRePassword){
        alert("password not match with confirm password");
        return false;
    }else if(!agreeTerms.checked){
        alert("please check the checkbox");
        return false;
    }
    
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
        window.open("login.html", "_self");
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

function isAlphabet(text){
    for(let i = 0; i < text.length ;i++){
        if(text.charAt(i) < 'a' || text.charAt(i) > 'z'){
            if(text.charAt(i) <'A' || text.charAt(i) > 'Z'){
                return false;
            }
        }
    }
    return true;
}