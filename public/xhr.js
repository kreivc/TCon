
const testPost = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    var data = JSON.stringify({
        email: email,
        password: password
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log("login success!");
        }else{
            console.log("log failed");
        }
    });

    xhr.open("GET", "https://tcon-api.herokuapp.com/auth/login/");
    xhr.withCredentials = false;
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

    // email login = admin@email.com
    // password = adminpwd

    xhr.send(data);
}

testPost();


// const sendHttpRequest = (method, url) => {

//     var data = JSON.stringify({
//         email: email,
//         password: password
//     });

//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);

//     xhr.responseType = 'json';

//     if (data) {
//       xhr.setRequestHeader('Content-Type', 'application/json');
//       xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
//       xhr.setRequestHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
//       xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization, X-Request-With");
//     }

//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response);
//       } else {
//         resolve(xhr.response);
//       }
//     };

//     xhr.onerror = () => {
//       reject('Something went wrong!');
//     };

//     xhr.send(data);
//   });
//   return promise;
// };

// const getData = () => {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//   sendHttpRequest('GET', 'https://tcon-api.herokuapp.com/auth/login?=').then(responseData => {
//     console.log(responseData);
//   });
// };

// const sendData = () => {
//     const fName = "kevin";
//     const lName = "png";
// //  const registUsername = document.getElementById("").value;
//     const registEmail = document.getElementById("").value;
//     const registPhone = document.getElementById("").value;
//     const registPassword = document.getElementById("").value;
//   sendHttpRequest('POST', 'https://reqres.in/api/register', {
//     firstName: fName,
//     lastName: lName,
//     email: registEmail,
//     phoneNumber: registPhone,
//     password: registPassword
//   })
//     .then(responseData => {
//       console.log(responseData);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// const getBtn = document.getElementById("login");
// getBtn.addEventListener('click', getData());

// const postBtn = document.getElementById("register");
// postBtn.addEventListener('click', sendData());