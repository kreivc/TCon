var data = JSON.stringify({
    "userId": "3d9b3ea6-ac8f-11eb-9530-9557126e83fc"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.open("POST", "https://tcon-api.herokuapp.com/user/getchatheader", false);

xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.setRequestHeader("Access-Control-Allow-Credentials", true)

xhr.send(data);
res = JSON.parse(xhr.responseText)
stat = res["status"];
result = res['result'];
if(stat){
    console.log(result);
}