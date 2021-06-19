function buildChatBox(displayName, chatId){
    console.log(displayName);
    str = `<a href="chat.html?cid=${chatId}" class="chat-item">
                <div class="chat-item row">
                    <img src="assets/anonymus.jpg" alt="" width="60px">
                    <p>${displayName}</p>
                </div>
            </a>`
    return str;
}

var data = JSON.stringify({
    "userId": localStorage.getItem("userId")
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
    let parentStr = "";
    for (let i=0; i<result.length; i++){
        console.log(result[i]);
        let tmp = result[i];
        let childstr = buildChatBox(tmp.friendNamme, tmp.chatId);
        parentStr += childstr;
    }
    document.getElementById("chat-wrapper").innerHTML = parentStr;
}