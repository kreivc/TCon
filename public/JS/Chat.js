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



const urlParams = new URLSearchParams(window.location.search);
let currCID = urlParams.get('cid')

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
for(let i=0; i<result.length; i++){
    if(result[i].isSender == 1){
        parentAppend += buildSenderBubble(result[i].message, result[i].time)
    }
    else{
        parentAppend += buildReceiverBubble(result[i].message, result[i].time)
    }
}

document.getElementById("chatting-box").innerHTML = parentAppend;



// timer

var sec = 1800,countDiv = document.getElementById("timer"), secpass,
    countDown = setInterval(function () {
        'use strict';
        
        secpass();
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
        
    } else {
        
        clearInterval(countDown);
        
        countDiv.innerHTML = 'countdown done';
        
    }
}
