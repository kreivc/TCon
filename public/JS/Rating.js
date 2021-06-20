const urlParams = new URLSearchParams(window.location.search);
let currFname = urlParams.get('fname');

document.getElementById("rating-name").innerHTML = currFname;