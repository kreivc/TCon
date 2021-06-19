function changeOvo(){
    document.getElementById("ovo").innerHTML = localStorage.getItem("phone");
}

function changeGopay(){
    document.getElementById("gopay").innerHTML = localStorage.getItem("phone");
}

function changeVirtual(){
    document.getElementById("virtual").innerHTML = '1246 - ' +localStorage.getItem("phone") ;
}

function changeWallet(){
    document.getElementById("wallet").innerHTML = 'IDR 130.000'
}

function proceedChat(){
    const urlParams = new URLSearchParams(window.location.search);
    let tgtId = urlParams.get('targetId');
    let myId = localStorage.get("userId");
    var data = JSON.stringify({
        "sender": myId,
        "receiver": tgtId
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
}