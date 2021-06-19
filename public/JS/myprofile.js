var username = localStorage.getItem("name");
var password = localStorage.getItem("password");
var email = localStorage.getItem("email");
var phone =  localStorage.getItem("phone");

document.getElementById("firstName").value = username.split(" ")[0]; 
document.getElementById("lastName").value = username.split(" ")[1]; 
document.getElementById("pname").innerHTML = username.split(" ")[0];
document.getElementById("email").value = email;
document.getElementById("password").value = password;
document.getElementById("phoneNumber").value = phone;
