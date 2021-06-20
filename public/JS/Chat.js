function buildSenderBubble(msg, tstamp){
    str =  `<div class="sender-chat chat-item">
                <p>    
                    ${msg}
                </p>
                <span style="font-size:10px; color:"#F9F9F9"; margin-botton:4px;"> Me, ${tstamp} </span>
            </div>`
    return str
}
function buildReceiverBubble(msg, tstamp){
    str = `<div class="consultant-chat chat-item">
                <p>
                    ${msg}
                </p>
                <span style="font-size:10px; color:"#F9F9F9"; margin-botton:4px;"> Received, ${tstamp} </span>
            </div>`
    return str
}


function sendChat(){
    msgToSend = document.getElementById("type-msg").value;
    if(msgToSend == ""){
        return false
    }
    const urlParams = new URLSearchParams(window.location.search);
    let currCID = urlParams.get('cid')
    var data = JSON.stringify({
        "userId": localStorage.getItem("userId"),
        "chatId": currCID,
        "message":msgToSend
    });
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.open("POST", "https://tcon-api.herokuapp.com/user/sendchat", false);

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader("Access-Control-Allow-Credentials", true)
    xhr.send(data);
    res = JSON.parse(xhr.responseText)
    stat = res["status"];
    result = res['result'];
    console.log(res);
    if(!stat){
        alert(result);
    }
    return true;
}

// timer

var sec = parseInt(localStorage.getItem("countdown"));
var countDiv = document.getElementById("timer"), secpass,
countDown = setInterval(function () {
    'use strict';
    secpass();
    if(localStorage.getItem("countdown") == "0" && localStorage.getItem("isConsultant") == 0){
        document.getElementById("type-msg").readonly = true;
    }else{
        document.getElementById("type-msg").readonly = false;
    }
}, 1000);

function secpass() {
    'use strict';
    
    var min     = Math.floor(sec / 60),
        remSec  = sec % 60;
    
    if (remSec < 10) {
        remSec = '0' + remSec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    countDiv.innerHTML = min + ":" + remSec;
    if (sec > 0) {
        sec = sec - 1;
        localStorage.setItem("countdown", sec)
    } else {
        clearInterval(countDown);
        // localStorage.removeItem("countdown")
        countDiv.innerHTML = '00:00';
        localStorage.setItem("countdown", "0")
    }
}



var chatList = document.getElementById("chatting-box");
chatList.scrollTop = chatList.scrollHeight;

document.getElementById("end-chat").addEventListener("click", endChat)

function endChat(){
    // localStorage.removeItem("countdown")
    window.open("rating.html", "_self");
}


function updateChat(){
    const urlParams = new URLSearchParams(window.location.search);
    let currCID = urlParams.get('cid')
    if(currCID == null){
        alert("Empty Chat!");
        window.open('home.html', "_self");
        return;
    }
    var data = JSON.stringify({
        "userId": localStorage.getItem("userId"),
        "chatId": currCID
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.open("POST", "https://tcon-api.herokuapp.com/user/getchatdetails", false);

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader("Access-Control-Allow-Credentials", true)

    xhr.send(data);
    res = JSON.parse(xhr.responseText)
    stat = res["status"];
    result = res['result'];
    console.log(result)
    let parentAppend = "";
    for(let i=result.length-1; i>=0; i--){
        if(result[i].isSender == 1){
            parentAppend += buildSenderBubble(result[i].message, result[i].time)
        }
        else{
            parentAppend += buildReceiverBubble(result[i].message, result[i].time)
        }
    }

    document.getElementById("chatting-box").innerHTML = parentAppend;
    var element = document.getElementById("chatting-box");
    element.scrollTop = element.scrollHeight;
    return;
}
updateChat();
let updateChatCountdown = setInterval(function () {
    console.log("updating chat");
    updateChat();
}, 5000);