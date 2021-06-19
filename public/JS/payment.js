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